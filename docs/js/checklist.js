!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([,function(e,t,n){"use strict";n.r(t);const o=TrelloPowerUp.iframe(),r=[{text:"1"},{text:"2"},{text:"3"}];console.log("t",o),o.render((function(){console.log("yes"),(()=>{const e=new Draggable.Sortable(document.querySelector("#checklist-container"));console.log("1"),e.on("sortable:stop",e=>{((e,t)=>{const n=t.filter((t,n)=>n===e.oldIndex),o=t.filter((t,n)=>n!==e.oldIndex);o.slice(0,e.newIndex),n[0],o.slice(e.newIndex)})(e,r)}),console.log("2"),r.map(e=>$("#checklist-container").append((e=>`<div class="item-container draggable-source">\n  <div class="checkbox"></div>\n  <div class="item-text">Task with an avatar and due date ${e}</div>\n    <div class="due-date">Oct 8 at 12:00 PM<div class="due-date-icon"></div></div>\n    <img class="avatar" src="https://trello-avatars.s3.amazonaws.com/252bbb6c3a184e6d1391fdbab0d19f1b/50.png"/>\n  <div class="meatballs"></div>\n  </div>`)(e))),o.sizeTo(document.body),console.log("3")})()})).catch((function(e){console.log("Error rendering checklist",e)}))}]);
//# sourceMappingURL=checklist.js.map