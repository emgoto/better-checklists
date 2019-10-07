/* global, TrelloPowerUp, axios, uuidv4 */
import { reorderArray } from './checklist-util';
declare const Draggable: any;

const t = TrelloPowerUp.iframe()

const renderItem = (item) => `<div class="item-container draggable-source">
  <div class="checkbox"></div>
  <div class="item-text">Task with an avatar and due date ${item}</div>
    <div class="due-date">Oct 8 at 12:00 PM<div class="due-date-icon"></div></div>
    <img class="avatar" src="https://trello-avatars.s3.amazonaws.com/252bbb6c3a184e6d1391fdbab0d19f1b/50.png"/>
  <div class="meatballs"></div>
  </div>`;

const itemsList = ['1', '2', '3'];
itemsList.map((item) => $('#checklist-container').append(renderItem(item)));

const sortable = new Draggable.Sortable(
  document.querySelector('#checklist-container'),
);

sortable.on('sortable:stop', (event) => {
  console.log(event.oldIndex, event.newIndex);
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