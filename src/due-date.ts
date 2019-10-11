declare const TrelloPowerUp: any;
declare const moment: any;
declare const Pikaday: any;

import { setItems } from './trello-util';

const t = TrelloPowerUp.iframe();
const checklistItems = t.arg('checklistItems');
const index = t.arg('index');
const now = moment().toDate();
let picker;
const TIME_FORMAT = 'LT';

const resize = function (): void {
  t.sizeTo('.dpicker-widget');
};

// To change the names of the buttons (as they were too long)
const i18n = {
  previousMonth: 'Prev',
  nextMonth: 'Next',
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
};

t.render(function () {
  const dueDate = checklistItems[index].dueDate;
  if (dueDate) {
    document.getElementById('remove-btn').classList.remove('u-hidden');
  }

  if (!picker) {
    const defaultDate = moment.unix(dueDate).toDate() || now;

    picker = new Pikaday({
      bound: false,
      format: 'MM/DD/YYYY',
      defaultDate,
      setDefaultDate: true,
      container: document.getElementById('datepicker'),
      field: document.getElementById('date-input'),
      i18n,
      onDraw: function (): void {
        resize();
      }
    });
  }
});

document.getElementById('time-input').onblur = (): void => {
  const timeInput = document.getElementById('time-input') as HTMLTextAreaElement;
  if (!moment(timeInput.value, TIME_FORMAT).isValid()) {
    timeInput.value = '12:00 PM';
  }
};

document.getElementById('save-btn').addEventListener('click', function () {
  const timeInput = document.getElementById('time-input') as HTMLTextAreaElement;
  let timeMoment = moment(timeInput.value, TIME_FORMAT);
  if (!timeMoment.isValid()) {
    timeMoment = moment('12:00 PM', TIME_FORMAT);
  }
  const unixTime = picker.getMoment().hour(timeMoment.hour()).minute(timeMoment.minute()).unix();
  const displayDate = picker.getMoment().hour(timeMoment.hour()).minute(timeMoment.minute()).format('D MMM h:mm A');
  checklistItems[index].dueDate = unixTime;
  checklistItems[index].dueDateFriendly = displayDate;

  setItems(t, checklistItems).then(() => {
    t.closePopup();
  });
});

document.getElementById('remove-btn').addEventListener('click', function () {
  checklistItems[index].dueDate = undefined;
  checklistItems[index].dueDateFriendly = undefined;

  setItems(t, checklistItems).then(() => {
    t.closePopup();
  });
});

document.getElementById('notification-setup').addEventListener('click', function () {
  return t.modal({
    url: './notifications.html',
    height: 360,
    fullscreen: false,
    title: 'Checklist+ Notifications'
  });
});
