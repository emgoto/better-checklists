declare const TrelloPowerUp: any;

import { getIsChecklistEnabled } from './trello-util';

window.Promise = TrelloPowerUp.Promise;

// We need to call initialize to get all of our capability handles set up and registered with Trello
TrelloPowerUp.initialize({
  'card-buttons': function(t, opts) {
    // check that viewing member has write permissions on this board
    if (opts.context.permissions.board !== 'write') {
      return [];
    }
    return [{
      text: 'Checklists+',
      icon: `${window.location}img/icon.svg`,
      callback: function(context) {
        return context.popup({
          title: 'Add Checklist+',
          url: './settings.html',
        });
      }
    }];
  },
  'card-back-section': function(t, options) {
    return getIsChecklistEnabled(t).then((isEnabled) => {
      if (isEnabled) {
        return {
          title: 'Checklist+',
          icon: `${window.location}img/icon.svg`,
          content: {
            type: 'iframe',
            url: t.signUrl('./checklist.html'),
            height: 280,
          },  
        };
      }
    }).catch((e) => console.log('oh no', e));     
  },
},
{
  appKey: 'bd1e7e486269d148ecd1be71ad5a3f1a',
  appName: 'Checklist+'
});
