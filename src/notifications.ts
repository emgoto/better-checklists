import { User, getToken, getUsers, setUsers } from './trello-util';
import { stringToNode } from './checklist-util';
declare const TrelloPowerUp: any;
declare const axios: any;
const t = TrelloPowerUp.iframe();
const member = t.member('username');
let users = [];

const url = 'https://checklist-notifications.herokuapp.com';

const renderUser = (user: User): Node => {
  console.log('renderuser', user);
  const domString = `<div class="user-container">
    <div class="username">${user.username}</div>
    <div class="delete-btn">Delete</div>
  </div>`;

  return stringToNode(domString);
};


function onDeleteClick(): void {
  const currentUsername = document.querySelector('.username').innerHTML;
  const user = users.find(u => u.username === currentUsername);
  const index = users.indexOf(user);

  console.log('got username', currentUsername);
  console.log('and user', user, index);

  const data = new URLSearchParams({ id: user.id });

  axios({ method: 'delete', url: `${url}/user`, data }).then(function (response) {
    console.log('successfully done and deleting');
    const items = document.querySelectorAll('.user-container') as NodeListOf<HTMLElement>;
    const itemToDelete = items[index];
    const container = document.getElementById('commenting-enabled');
    container.removeChild(itemToDelete);
    users.splice(index, 1);

    // If user deleted themself, need to add back in the permissions button
    member.then(({ username }) => {
      if (currentUsername === username) {
        document.getElementById('enable-btn').style.display = '';
      }
    });

  }).catch(function (error) {
    console.log('Error', error);
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
      u.forEach(user => {
        container.appendChild(renderUser(user));

        // If user is already present in the list, don't need to show them the enable btn
        member.then(({ username }) => {
          if (user.username === username) {
            document.getElementById('enable-btn').style.display = 'hidden';
          }
        });
      });

      const items = container.querySelectorAll('.delete-btn') as NodeListOf<HTMLElement>;
      Array.from(items).forEach((item) => item.onclick = onDeleteClick);
    }
  });
};

initialise();

// TODO revokePermission
/**
 * Endpoint that can be hit, that will send over boardId, id and return true when done
 */

// TODO getPermissions
/**
 * Endpoint that can be hit (given boardId), that will send over id, username, avatarHash and fullName of all people that have given permissions so far
 */

// TODO authentication button

document.getElementById('enable-btn').addEventListener('click', function () {
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
        const item = { id, username: currentUsername };
        console.log('success', response);
        document.getElementById('enable-btn').style.display = 'none';
        users.push(item);
        setUsers(t, users);

        const container = document.getElementById('commenting-enabled');
        container.appendChild(renderUser(item));
        const items = document.querySelectorAll('.delete-btn') as NodeListOf<HTMLElement>;
        Array.from(items)[items.length - 1].onclick = onDeleteClick;

      }).catch(function (error) {
        console.log('Error', error);
      })
        .finally(function () {
          // always executed
        });
    });
  });
});

