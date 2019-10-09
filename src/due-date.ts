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

// To change the names of the buttons
const i18n = {
  previousMonth: 'Prev',
  nextMonth: 'Next',
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
};

t.render(function () {
  if (!picker) {
    picker = new Pikaday({
      bound: false,
      format: 'MM/DD/YYYY',
      defaultDate: now,
      setDefaultDate: now,
      container: document.getElementById('datepicker'),
      field: document.getElementById('date-input'),
      i18n,
      onDraw: function (): void {
        resize();
      }
    });
  }
});

document.getElementById('save-btn').addEventListener('click', function () {
  // const displayDate = picker.getMoment().format('MM/DD/YYYY');
  const timeInput = document.getElementById('time-input') as HTMLTextAreaElement;
  let timeMoment = moment(timeInput.value, TIME_FORMAT);
  if (!timeMoment.isValid()) {
    timeMoment = moment('12:00 PM', TIME_FORMAT);
  }
  const unixTime = picker.getMoment().hour(timeMoment.hour()).minute(timeMoment.minute()).unix();
  checklistItems[index].dueDate = unixTime;

  setItems(t, checklistItems).then(() => {
    t.closePopup();
  });
});

document.getElementById('remove-btn').addEventListener('click', function () {
  checklistItems[index].dueDate = undefined;
  setItems(t, checklistItems).then(() => {
    t.closePopup();
  });
  t.closePopup();
});
