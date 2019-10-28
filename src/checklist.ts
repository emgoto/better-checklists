import { reorderArray } from './checklist-util';
import { ChecklistItem, setItems, getItems, getToken, setToken } from './trello-util';
import { stringToNode } from './checklist-util';
import { getBoardMembers, Member } from './member';
declare const Draggable: any;
declare const TrelloPowerUp: any;
declare const Trello: any;

const t = TrelloPowerUp.iframe();
let checklistItems;
let boardMembers = [];

const updateItemText = (text: string, index?: number): void => {
  if (index !== undefined) {
    checklistItems[index].text = text;
  } else {
    checklistItems.push({
      text,
    });
  }

  setItems(t, checklistItems);
};

const updateItemDueDate = (index: number, dueDateFriendly?: string): void => {
  const items = document.querySelectorAll('.due-date') as NodeListOf<HTMLElement>;
  const item = items[index];
  let domString;
  if (dueDateFriendly) {
    domString = `<div class="due-date-text">${dueDateFriendly}</div></div>`;
    item.classList.remove('invisible');
  } else {
    domString = '<div class="calendar-icon" title="Set due date"></div>';
    item.classList.add('invisible');
  }
  item.innerHTML = "";
  item.appendChild(stringToNode(domString));
};

const setMember = async (index: number, member?: Member): Promise<any> => {
  const { username = undefined, fullName = undefined, avatarHash = undefined, id = undefined } = member || {};
  checklistItems[index].username = username;
  checklistItems[index].fullName = fullName;
  checklistItems[index].avatarHash = avatarHash;
  checklistItems[index].userId = id;

  const items = document.querySelectorAll('.avatar') as NodeListOf<HTMLElement>;
  const item = items[index];
  let domString;
  if (member) {
    item.classList.remove('invisible');
    domString = `<img src="https://trello-avatars.s3.amazonaws.com/${member.avatarHash}/50.png" title="${fullName} (${username})"/>`;
  } else {
    item.classList.add('invisible');
    domString = '<div class="avatar-button" title="Assign member"></div>';
  }
  item.innerHTML = "";
  item.appendChild(stringToNode(domString));

  return setItems(t, checklistItems);
};

const deleteItem = async (index: number): Promise<any> => {
  const items = document.querySelectorAll('.item-container') as NodeListOf<HTMLElement>;
  const itemToDelete = items[index];
  const checklistContainer = document.getElementById('checklist-container');
  checklistContainer.removeChild(itemToDelete);

  checklistItems.splice(index, 1);
  return setItems(t, checklistItems);
};

const renderTextArea = (): string =>
  `
    <div id="existing-item-textarea" class="item-textarea-container"> 
      <textarea name="message" class="item-textarea" style="margin-bottom: 0px" rows="1"></textarea>
      </div>
  `;


function onItemClick(): void {
  // if textarea is already visible, clicking again should do nothing
  if (this.parentElement.querySelector('#existing-item-textarea')) {
    return null;
  }

  const text = this.parentElement.querySelector('.item-text').innerHTML;

  // Hide the other elements
  this.parentElement.querySelector('.item-text').style.display = 'none';
  this.parentElement.querySelector('.due-date').style.display = 'none';
  this.parentElement.querySelector('.avatar').style.display = 'none';
  this.parentElement.querySelector('.meatballs').style.display = 'none';
  this.parentElement.classList.add('no-hover');

  this.parentElement.querySelector('.checkbox').insertAdjacentHTML('afterend', renderTextArea());

  const textarea = this.parentElement.querySelector('.item-textarea');

  // to make sure the cursor is at the end of the line
  textarea.focus();
  textarea.value = text;

  textarea.onblur = (): void => {
    const newText = this.parentElement.querySelector('.item-textarea').value;
    const strippedText = newText.replace('\n', '');
    this.parentElement.querySelector('.item-text').innerHTML = strippedText;
    this.parentElement.removeChild(this.parentElement.querySelector('#existing-item-textarea'));

    // Unhide all the elements
    this.parentElement.querySelector('.item-text').style.display = '';
    this.parentElement.querySelector('.due-date').style.display = '';
    this.parentElement.querySelector('.avatar').style.display = '';
    this.parentElement.querySelector('.meatballs').style.display = '';
    this.parentElement.classList.remove('no-hover');
    const index = [...this.parentElement.parentElement.children].indexOf(this.parentElement);

    updateItemText(strippedText, index);
  };

  // Execute when user presses enter on the keyboard
  textarea.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) { // enter key
      textarea.blur();
      event.preventDefault();
    }
  });
}

function onMeatballsClick(event): void {
  const item = event.target.parentElement;
  const index = [...item.parentElement.children].indexOf(item);
  try {
    t.popup({
      title: 'Item Actions',
      mouseEvent: event,
      items: [{
        text: 'Delete',
        callback: async (callbackT): Promise<void> => {
          await deleteItem(index);
          callbackT.closePopup();
        },
      },]
    });
  } catch (e) {
    console.log('pop up failed', e);
  }
}

function onCalendarClick(event): void {
  const item = event.target.parentElement.parentElement;
  const index = [...item.parentElement.children].indexOf(item);

  t.popup({
    title: 'Change due date',
    mouseEvent: event,
    url: './due-date.html',
    args: { index, checklistItems },
    height: 415
  });
}

function onAvatarClickWithToken(event): void {
  const item = event.target.parentElement.parentElement;
  const index = [...item.parentElement.children].indexOf(item);

  const items = [];

  // If member is currently assigned
  if (!item.querySelector('.avatar-button')) {
    items.push({
      text: "Remove member",
      callback: async (callbackT) => {
        await setMember(index, undefined);
        callbackT.closePopup();
      }
    });
  }

  try {
    boardMembers.forEach(member => items.push({
      text: `${member.fullName} (${member.username})`,
      callback: async (callbackT) => {
        await setMember(index, member);
        callbackT.closePopup();
      }
    }));

    t.popup({
      title: 'Choose member',
      mouseEvent: event,
      items,
      search: {
        count: 10,
        placeholder: 'Search board member',
        empty: 'No members found'
      }
    });
  } catch (e) {
    console.log("Error rendering member picker", e);
  }
}

function onAvatarClick(event): void {
  getToken(t).then((maybeToken) => {
    if (!maybeToken) {
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
              getBoardMembers(t, Trello.token()).then((b) => {
                boardMembers = b;
              });
              this.onclick = onAvatarClickWithToken;
            },
            error: () => { },
          });
        },
      });
    } else {
      onAvatarClickWithToken(event);
    }
  });
}

function addEventListeners(item: HTMLElement): void {
  const itemText = item.querySelector('.item-text') as HTMLElement;
  itemText.onclick = onItemClick;

  const meatballs = item.querySelector('.meatballs') as HTMLElement;
  meatballs.onclick = onMeatballsClick;

  const calendar = item.querySelector('.due-date') as HTMLElement;
  calendar.onclick = onCalendarClick;

  const avatar = item.querySelector('.avatar') as HTMLElement;
  avatar.onclick = onAvatarClick;
}

const renderItem = (item: ChecklistItem): Node => {
  const domString = `<div class="item-container draggable-source">
    <div class="checkbox"></div>
    <div class="item-text">${item.text}</div>
    <div class="due-date ${item.dueDateFriendly ? '' : 'invisible'}">
      ${item.dueDateFriendly ? `<div class="due-date-text">${item.dueDateFriendly}</div>` : '<div class="calendar-icon" title="Set due date"></div>'}
    </div>
    <div class="avatar ${item.avatarHash ? '' : 'invisible'}">
      ${item.avatarHash ? `<img src="https://trello-avatars.s3.amazonaws.com/${item.avatarHash}/50.png" title="${item.fullName} (${item.username})"/>` : '<div class="avatar-button" title="Assign member"></div>'}
    </div>
    <div class="meatballs"></div>
  </div>`;

  return stringToNode(domString);
};

const addItem = (text: string): void => {
  const checklistContainer = document.getElementById('checklist-container');
  const item = renderItem({ text });
  checklistContainer.appendChild(item);

  const newItems = checklistContainer.querySelectorAll('.item-container') as NodeListOf<HTMLElement>;
  const lastIndex = newItems.length - 1;
  const lastItem = newItems.item(lastIndex);

  addEventListeners(lastItem);
};

function initialise(): void {
  checklistItems = t.arg('items');
  const checklistContainer = document.getElementById('checklist-container');
  getToken(t).then((token) => {
    if (token) {
      getBoardMembers(t, token).then((b) => {
        boardMembers = b;
      });
    }
    return null;
  });

  const sortable = new Draggable.Sortable(
    checklistContainer,
    {
      mirror: {
        xAxis: false
      }
    }
  );

  sortable.on('sortable:stop', (event) => {
    reorderArray(event, checklistItems);
  });

  checklistItems.map((item: ChecklistItem) => checklistContainer.appendChild(renderItem(item)));

  // Set up the "add item" button
  const newItemTextarea = document.getElementById('new-item-textarea');
  const textarea: HTMLTextAreaElement = newItemTextarea.querySelector('.item-textarea');
  const newItemButton = document.getElementById('add-an-item');
  newItemButton.addEventListener('click', function () {
    this.style.display = 'none';
    newItemTextarea.style.display = '';
    textarea.focus();
  });

  textarea.onblur = (): void => {
    const newText = textarea.value;
    // If we press enter on textarea, we don't want to keep that newline
    const strippedText = newText.replace('\n', '');
    newItemTextarea.style.display = "none";
    textarea.value = '';
    newItemButton.style.display = '';
    updateItemText(strippedText, undefined);
    addItem(strippedText);
  };

  // Execute when user presses enter on the keyboard
  textarea.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) { // enter key
      textarea.blur();
      event.preventDefault();
    }
  });

  const items = document.querySelectorAll('.item-container') as NodeListOf<HTMLElement>;
  Array.from(items).forEach((item) => addEventListeners(item));
};

initialise(); // One-time call
t.render(function () {
  try {
    // If a re-render is caused by the duedate or notificationTime changing, we'll need to do something about it.
    getItems(t).then((newItems) => {
      // If the length is not the same, we would have handled that case elsewhere
      if (newItems.length === checklistItems.length) {
        newItems.forEach((newItem, index) => {
          if (newItem.dueDateFriendly !== checklistItems[index].dueDateFriendly) {
            updateItemDueDate(index, newItem.dueDateFriendly);
          }
          if (newItem.notificationOffset !== checklistItems[index].notificationOffset) {

          }
        });
      }
      checklistItems = newItems;
      setItems(t, newItems);
    });

    return t.sizeTo(document.body);
  } catch (e) {
    console.log('Failed to render checklist', e);
  }
});
