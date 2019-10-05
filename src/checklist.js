
var t = TrelloPowerUp.iframe();

// Store authentication token privately
const authenticationSuccess = function () {
  t.set('member', 'private', 'authToken', Trello.token());
};

document.getElementById('post').addEventListener('click', function() {
      const { card:cardId, board:boardId } = t.getContext();
      const token = `1ea2726fc20a9e13eb9865c2fa7e3757260f804298e00d0280bccf7d29c2eed1`; // test token
      const url = 'https://checklist-notifications.herokuapp.com/setNotification';
      const assignee="emgyoung";
      const itemId="1"
      const item="please do this thing";
      const notificationTime = "1570261133";

      const params = {
        token,
        itemId,
        cardId,
        boardId,
        assignee,
        item,
        dueTime,
      }
        
      return axios.post(url, {})
        .then(function (response) {
          console.log('response', response);
                
        }).catch(function (error) {
          console.log('Error', error);
        })
        .finally(function () {
          // always executed
        });
});