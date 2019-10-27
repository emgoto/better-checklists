import { User, getToken, setToken, getUsers, setUsers } from './trello-util';
import { stringToNode } from './checklist-util';
declare const TrelloPowerUp: any;
declare const axios: any;
declare const Trello: any;
const t = TrelloPowerUp.iframe();
const member = t.member('username');
let users = [];
let hasGivenPermissions = false;

const url = 'https://checklist-notifications.herokuapp.com';

const renderUser = (user: User): Node => {
  const domString = `<div class="user-container">
    <div class="username">${user.username}</div>
    <div class="delete-btn">
        <div class="delete-icon" title="Remove User"></div>
        <div class="spinner"></div>
    </div>
  </div>`;

  return stringToNode(domString);
};

const showEnableOrAuthenticate = (): void => {
  getToken(t).then((maybeToken) => {
    if (!maybeToken) {
      document.getElementById('authenticate-btn').style.display = 'block';
      document.getElementById('enable-btn').style.display = 'none';
    } else {
      document.getElementById('enable-btn').style.display = 'block';
    }
  });
};

// Remove from Trello storage and from page
const removeUserLocally = (index: number, currentUsername: string): void => {
  console.log('Removing user locally');
  const items = document.querySelectorAll('.user-container') as NodeListOf<HTMLElement>;
  const itemToDelete = items[index];
  const container = document.getElementById('commenting-enabled');
  container.removeChild(itemToDelete);
  users.splice(index, 1);
  setUsers(t, users);

  // If user deleted themself, need to add back in the permissions button
  member.then(({ username }) => {
    if (currentUsername === username) {
      hasGivenPermissions = false;
      showEnableOrAuthenticate();
    }
  });

  // If there are no users, add back in instructions
  if (users.length > 0) {
    document.getElementById('enable-instructions').style.display = 'block';
  }
};

function onDeleteClick(): void {
  const currentUsername = this.parentElement.parentElement.querySelector('.username').innerHTML;
  const spinner = this.nextElementSibling;
  spinner.style.display = 'block';
  this.style.display = 'none';

  const user = users.find(u => u.username === currentUsername);

  if (!user) {
    console.log("Misconfigured user data.");
    return;
  }

  const index = users.indexOf(user);
  const data = new URLSearchParams({ id: user.id });

  axios({ method: 'delete', url: `${url}/user`, data }).then(function () {
    removeUserLocally(index, currentUsername);
  }).catch(function (error) {
    if (error && error.response) {
      const { status } = error.response;
      if (status === 400) { // Could not find user to delete, so delete it from UI anyway
        removeUserLocally(index, currentUsername);
      } else { // Failed to delete
        spinner.style.display = 'none';
        this.style.display = 'block';
      }
    }
  })
    .finally(function () {
      // always executed
    });
}

function initialise(): void {
  const container = document.getElementById('commenting-enabled');
  getUsers(t).then((u) => {
    if (u) {
      users = u;
      if (users.length > 0) {
        document.getElementById('enable-instructions').style.display = 'none';
      }

      member.then(({ username }) => {
        u.forEach(user => {
          container.appendChild(renderUser(user));
          // If user is already present in the list, don't need to show them the enable btn
          if (user.username == username) {
            hasGivenPermissions = true;
          }
        });

        // If we're going to show the enable button, double check they've authenticated
        if (!hasGivenPermissions) {
          showEnableOrAuthenticate();
        }

        // Add listeners to the delete icons
        const items = container.querySelectorAll('.delete-icon') as NodeListOf<HTMLElement>;
        Array.from(items).forEach((item) => item.onclick = onDeleteClick);
      });
    }
  });
};

initialise();

document.getElementById('enable-btn').addEventListener('click', function () {
  document.getElementById('enable-spinner').style.display = 'block';
  document.getElementById('enable-text').style.display = 'none';

  getToken(t).then((token) => {
    const { board: boardId, member: id } = t.getContext();

    let currentUsername;
    member.then(({ username }) => {
      currentUsername = username;
      const data = new URLSearchParams({
        token,
        id,
        boardId,
        username,
      });

      axios({ method: 'post', url: `${url}/user`, data }).then(function (response) {
        hasGivenPermissions = true;
        const item = { id, username: currentUsername };
        console.log('Successfully enabled', response);
        document.getElementById('enable-btn').style.display = 'none';
        document.getElementById('enable-spinner').style.display = 'none';
        document.getElementById('enable-text').style.display = 'block';
        users.push(item);
        setUsers(t, users);

        const container = document.getElementById('commenting-enabled');
        const newUser = renderUser(item);
        container.appendChild(newUser);
        const items = document.querySelectorAll('.delete-icon') as NodeListOf<HTMLElement>;
        Array.from(items)[items.length - 1].onclick = onDeleteClick;

      }).catch(function (error) {
        console.log('Failed to enable', error);
        document.getElementById('enable-spinner').style.display = 'none';
        document.getElementById('enable-text').style.display = 'block';
      })
        .finally(function () {
          // Done
        });
    });
  });
});

document.getElementById('authenticate-btn').addEventListener('click', function () {
  t.popup({
    type: 'confirm',
    title: 'Authorize Checklist+',
    mouseEvent: event,
    message: 'To enable assigning board members to tasks, we require you to authorize with Checklist+.',
    confirmText: 'Authorize',
    onConfirm: () => {
      Trello.authorize({
        type: "popup",
        name: "Checklist+",
        expiration: "never",
        success: () => {
          setToken(t, Trello.token());
          document.getElementById('authenticate-btn').style.display = 'none';
          document.getElementById('enable-btn').style.display = 'block';
        },
        error: () => { },
      });
    },
  });
});

