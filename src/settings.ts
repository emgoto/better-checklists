import { getIsChecklistEnabled, setItems, getToken } from './trello-util';
declare const TrelloPowerUp: any;
const t = TrelloPowerUp.iframe();

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

t.render(function () {
  getIsChecklistEnabled(t)
    .then(function (enabled) {
      if (enabled) {
        document.getElementById('remove-btn').classList.remove('u-hidden');
      } else {
        console.log(document.getElementById('enable-btn'));
        document.getElementById('enable-btn').classList.remove('u-hidden');
      }

      return getToken(t).then((token) => {
        console.log('token', token);
        if (!token) {
          document.getElementById('authorization').classList.remove('u-hidden');
        }
      });

    }).catch(function (e) {
      console.log('Error rendering settings', e);
    }).finally(function () {
      t.sizeTo(document.body);
    });
});

// // Brings up information modal when user clicks "How to use Checklist+"
// document.getElementById('how-to-use').addEventListener('click', function(){
//   return t.modal({
//     url: './modal.html',
//     height: 360,
//     fullscreen: false,
//     title: 'Checklist+'
//   })
// });