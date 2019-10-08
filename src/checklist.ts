/* global axios uuidv4 */
import { reorderArray } from './checklist-util';
import { ChecklistItem, setItems } from './trello-util';
declare const Draggable: any;
declare const TrelloPowerUp: any;

const t = TrelloPowerUp.iframe();
let checklistItems;

const updateItemText = (text: string, index?: number): void => {
  if (index) {
    checklistItems[index].text = text;
  } else {
    checklistItems.push({
      text,
    });
  }

  console.log('checklistitems', checklistItems);

  setItems(t, checklistItems);
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

const renderItem = (item: ChecklistItem): Node => {
  const domString = `<div class="item-container draggable-source">
  <div class="checkbox"></div>
  <div class="item-text">${item.text}</div>
    <div class="due-date">Oct 8<div class="due-date-icon"></div></div>
    <img class="avatar" src="https://trello-avatars.s3.amazonaws.com/252bbb6c3a184e6d1391fdbab0d19f1b/50.png"/>
  <div class="meatballs"></div>
  </div>`;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = domString;
  return wrapper.firstChild;
};

const addItem = (text: string): void => {
  const checklistContainer = document.getElementById('checklist-container');
  const item = renderItem({ text });
  checklistContainer.appendChild(item);

  const newItems = checklistContainer.querySelectorAll('.item-text') as NodeListOf<HTMLElement>;
  const lastIndex = newItems.length - 1;
  newItems.item(lastIndex).onclick = onItemClick;
};

function initialise(): void {
  checklistItems = t.arg('items');
  const checklistContainer = document.getElementById('checklist-container');

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

  const items = document.querySelectorAll('.item-text') as NodeListOf<HTMLElement>;
  Array.from(items).forEach(item => item.onclick = onItemClick);

  return;
};

initialise(); // One-time call
t.render(function () {
  try {
    return t.sizeTo(document.body);
  } catch (e) {
    console.log('Failed to render checklist', e);
  }
});

// document.getElementById('post').addEventListener('click', function () {
//   const { card: cardId, board: boardId } = t.getContext();
//   const key = 'bd1e7e486269d148ecd1be71ad5a3f1a';
//   const token = '1ea2726fc20a9e13eb9865c2fa7e3757260f804298e00d0280bccf7d29c2eed1'; // test token
//   const url = 'https://checklist-notifications.herokuapp.com/setNotification';

//   const url2 = `https://api.trello.com/1/boards/${boardId}/members?key=${key}&token=${token}`;

//   axios.get(url2).then((response) => { console.log('done', response); });

//   const assignee = 'emgyoung';
//   const itemId = uuidv4();
//   const item = 'please do this thing';
//   const notificationTime = 1570261133;
//   const dueTime = 1570261132;


//   // const data = new URLSearchParams({
//   //   token,
//   //   itemId,
//   //   cardId,
//   //   boardId,
//   //   assignee,
//   //   item,
//   //   dueTime,
//   //   notificationTime,
//   // });

//   // axios({
//   //   method: 'post',
//   //   url,
//   //   data,
//   // }).then(function (response) {
//   //   console.log('response', response);
//   // }).catch(function (error) {
//   //   console.log('Error', error);
//   // })
//   //   .finally(function () {
//   //   // always executed
//   //   });
// });
