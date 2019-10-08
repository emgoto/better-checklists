/* global axios uuidv4 */
import { reorderArray } from './checklist-util';
import { ChecklistItem } from './trello-util';
declare const Draggable: any;
declare const TrelloPowerUp: any;

const t = TrelloPowerUp.iframe();

const renderTextArea = (): string =>
  `
    <div id="existing-item-textarea" class="item-textarea-container"> 
      <textarea name="message" class="item-textarea" style="margin-bottom: 0px" rows="1"></textarea>
      </div>
  `;

const renderItem = (item: ChecklistItem): string => `<div class="item-container draggable-source">
  <div class="checkbox"></div>
  <div class="item-text">Task with an avatar and due date ${item.text}</div>
    <div class="due-date">Oct 8<div class="due-date-icon"></div></div>
    <img class="avatar" src="https://trello-avatars.s3.amazonaws.com/252bbb6c3a184e6d1391fdbab0d19f1b/50.png"/>
  <div class="meatballs"></div>
  </div>`;

const items2 = [{
  text: '1'
},
{
  text: '2'
},
{
  text: '3'
}];


function onItemClick(): void {
  // if textarea is already visible, clicking again should do nothing
  if (this.querySelector('#existing-item-textarea')) {
    return null;
  }

  const text = this.querySelector('.item-text').innerHTML;

  // Hide the other containers
  this.querySelector('.item-text').style.display = 'none';
  this.querySelector('.due-date').style.display = 'none';
  this.querySelector('.avatar').style.display = 'none';
  this.querySelector('.meatballs').style.display = 'none';

  this.querySelector('.checkbox').insertAdjacentHTML('afterend', renderTextArea());

  const textarea = this.querySelector('.item-textarea');

  // to make sure the cursor is at the end of the line
  textarea.focus();
  textarea.value = text;

  textarea.onblur = (): void => {
    const newText = this.querySelector('.item-textarea').value;
    this.querySelector('.item-text').innerHTML = newText;
    this.removeChild(this.querySelector('#existing-item-textarea'));

    this.querySelector('.item-text').style.display = '';
    this.querySelector('.due-date').style.display = '';
    this.querySelector('.avatar').style.display = '';
    this.querySelector('.meatballs').style.display = '';
  };
}

function renderChecklist(): void {
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
    reorderArray(event, items2);
  });

  // TODO: every re-render we're just appending more items
  items2.map((item: ChecklistItem) => checklistContainer.insertAdjacentHTML('afterend', renderItem(item)));

  t.sizeTo(document.body);

  document.getElementById('add-an-item').addEventListener('click', function () {
    this.style.display = 'none';
    const item: HTMLElement = document.getElementById('new-item-textarea');
    item.removeAttribute('hidden');
  });

  const items = document.querySelectorAll('.item-container') as NodeListOf<HTMLElement>;
  Array.from(items).forEach(item => item.onclick = onItemClick);
};

t.render(function () {
  try {
    renderChecklist();
  } catch (e) {
    console.log('oh man', e);
  }

});

try {
  renderChecklist();
} catch (e) {
  console.log('oh man', e);
}


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
