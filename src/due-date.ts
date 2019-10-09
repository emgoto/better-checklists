declare const TrelloPowerUp: any;
declare const moment: any;
declare const Pikaday: any;

const t = TrelloPowerUp.iframe();
const onSave = t.arg('onSave');
const onRemove = t.arg('onRemove');
const now = moment().toDate();
let picker;
const TIME_FORMAT = 'LT';

const resize = function (): void {
  t.sizeTo('.dpicker-widget');
};

// t.render(function () {
picker = new Pikaday({
  bound: false,
  format: 'MM/DD/YYYY',
  defaultDate: now,
  setDefaultDate: now,
  minDate: now,
  container: document.getElementById('datepicker'),
  field: document.getElementById('date-input'),
  onDraw: function (): void {
    resize();
  }
});
// });

document.getElementById('save-btn').addEventListener('click', function () {

  // const displayDate = picker.getMoment().format('MM/DD/YYYY');
  // let timeMoment = moment(document.getElementById('time-input').value, TIME_FORMAT);
  // if (!timeMoment.isValid()) {
  //   timeMoment = moment('12:00 PM', TIME_FORMAT);
  // }
  // const snoozeTime = displayDate + ', ' + timeMoment.format(TIME_FORMAT);
  // const unixTime = picker.getMoment().hour(timeMoment.hour()).minute(timeMoment.minute()).unix();
  // onSave(unixTime);
});

document.getElementById('remove-btn').addEventListener('click', function () {
  onRemove();
});
