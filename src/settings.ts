import { getIsChecklistEnabled, setItems } from './trello-util';
declare const TrelloPowerUp: any;
const t = TrelloPowerUp.iframe();

const addEventListeners = (): void => {
  // Shows empty list after user presses enable
  document.getElementById('enable-btn').addEventListener('click', function () {
    return setItems(t, [])
      .then(function () {
        t.closePopup();
      }).catch(function (e) {
        console.log('failed to setItems', e);
      });
  });

  // Removes list when user presses delete button
  document.getElementById('remove-btn').addEventListener('click', function () {
    return setItems(t, null)
      .then(function () {
        t.closePopup();
      }).catch(function (e) {
        console.log('failed to setItems', e);
      });
  });
};

t.render(function () {
  getIsChecklistEnabled(t)
    .then(function (enabled) {
      addEventListeners();
      if (enabled) {
        document.getElementById('remove-btn').classList.remove('u-hidden');
      } else {
        document.getElementById('enable-btn').classList.remove('u-hidden');
      }
    }).catch(function (e) {
      console.log('Error rendering settings', e);
    }).finally(function () {
      t.sizeTo(document.body);
    });
});




// // Brings up information modal when user clicks "How to use Streak"
// document.getElementById('how-to-use').addEventListener('click', function(){
//   return t.modal({
//     url: './modal.html',
//     height: 360,
//     fullscreen: false,
//     title: 'Streak - habit tracker'
//   })
// });