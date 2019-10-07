declare const TrelloPowerUp: any;

window.Promise = TrelloPowerUp.Promise;

// We need to call initialize to get all of our capability handles set up and registered with Trello
TrelloPowerUp.initialize({
  'card-back-section': function(t, options) {
    return {
      title: 'Streak',
      icon: `${window.location}img/icon.svg`,
      content: {
        type: 'iframe',
        url: t.signUrl('./checklist.html'),
        height: 280,
      },  
    };
  },
});
