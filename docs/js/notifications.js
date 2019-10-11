/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/notifications.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/checklist-util.ts":
/*!*******************************!*\
  !*** ./src/checklist-util.ts ***!
  \*******************************/
/*! exports provided: reorderArray, stringToNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reorderArray\", function() { return reorderArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stringToNode\", function() { return stringToNode; });\n// https://medium.com/kevin-salters-blog/reordering-a-javascript-array-based-on-a-drag-and-drop-interface-e3ca39ca25c\nconst reorderArray = (event, originalArray) => {\n    const movedItem = originalArray.filter((item, index) => index === event.oldIndex);\n    const remainingItems = originalArray.filter((item, index) => index !== event.oldIndex);\n    const reorderedItems = [\n        ...remainingItems.slice(0, event.newIndex),\n        movedItem[0],\n        ...remainingItems.slice(event.newIndex)\n    ];\n    return reorderedItems;\n};\nconst stringToNode = (domString) => {\n    const wrapper = document.createElement('div');\n    wrapper.innerHTML = domString;\n    return wrapper.firstChild;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2hlY2tsaXN0LXV0aWwudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NoZWNrbGlzdC11dGlsLnRzPzkxMTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9tZWRpdW0uY29tL2tldmluLXNhbHRlcnMtYmxvZy9yZW9yZGVyaW5nLWEtamF2YXNjcmlwdC1hcnJheS1iYXNlZC1vbi1hLWRyYWctYW5kLWRyb3AtaW50ZXJmYWNlLWUzY2EzOWNhMjVjXG5leHBvcnQgY29uc3QgcmVvcmRlckFycmF5ID0gKGV2ZW50LCBvcmlnaW5hbEFycmF5KSA9PiB7XG4gIGNvbnN0IG1vdmVkSXRlbSA9IG9yaWdpbmFsQXJyYXkuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggPT09IGV2ZW50Lm9sZEluZGV4KTtcbiAgY29uc3QgcmVtYWluaW5nSXRlbXMgPSBvcmlnaW5hbEFycmF5LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBldmVudC5vbGRJbmRleCk7XG5cbiAgY29uc3QgcmVvcmRlcmVkSXRlbXMgPSBbXG4gICAgLi4ucmVtYWluaW5nSXRlbXMuc2xpY2UoMCwgZXZlbnQubmV3SW5kZXgpLFxuICAgIG1vdmVkSXRlbVswXSxcbiAgICAuLi5yZW1haW5pbmdJdGVtcy5zbGljZShldmVudC5uZXdJbmRleClcbiAgXTtcblxuICByZXR1cm4gcmVvcmRlcmVkSXRlbXM7XG59O1xuXG5leHBvcnQgY29uc3Qgc3RyaW5nVG9Ob2RlID0gKGRvbVN0cmluZzogc3RyaW5nKTogTm9kZSA9PiB7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd3JhcHBlci5pbm5lckhUTUwgPSBkb21TdHJpbmc7XG4gIHJldHVybiB3cmFwcGVyLmZpcnN0Q2hpbGQ7XG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/checklist-util.ts\n");

/***/ }),

/***/ "./src/notifications.ts":
/*!******************************!*\
  !*** ./src/notifications.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _trello_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trello-util */ \"./src/trello-util.ts\");\n/* harmony import */ var _checklist_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checklist-util */ \"./src/checklist-util.ts\");\n\n\nconst t = TrelloPowerUp.iframe();\nconst member = t.member('username');\nlet users = [];\nconst url = 'https://checklist-notifications.herokuapp.com';\nconst renderUser = (user) => {\n    console.log('renderuser', user);\n    const domString = `<div class=\"user-container\">\n    <div class=\"username\">${user.username}</div>\n    <div class=\"delete-btn\">Delete</div>\n  </div>`;\n    return Object(_checklist_util__WEBPACK_IMPORTED_MODULE_1__[\"stringToNode\"])(domString);\n};\nfunction onDeleteClick() {\n    const currentUsername = document.querySelector('.username').innerHTML;\n    const user = users.find(u => u.username === currentUsername);\n    const index = users.indexOf(user);\n    console.log('got username', currentUsername);\n    console.log('and user', user, index);\n    const data = new URLSearchParams({ id: user.id });\n    axios({ method: 'delete', url: `${url}/user`, data }).then(function (response) {\n        console.log('successfully done and deleting');\n        const items = document.querySelectorAll('.user-container');\n        const itemToDelete = items[index];\n        const container = document.getElementById('commenting-enabled');\n        container.removeChild(itemToDelete);\n        users.splice(index, 1);\n        // If user deleted themself, need to add back in the permissions button\n        member.then(({ username }) => {\n            if (currentUsername === username) {\n                document.getElementById('enable-btn').style.display = '';\n            }\n        });\n    }).catch(function (error) {\n        console.log('Error', error);\n    })\n        .finally(function () {\n        // always executed\n    });\n}\nfunction initialise() {\n    const container = document.getElementById('commenting-enabled');\n    Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"getUsers\"])(t).then((u) => {\n        if (u) {\n            users = u;\n            u.forEach(user => {\n                container.appendChild(renderUser(user));\n                // If user is already present in the list, don't need to show them the enable btn\n                member.then(({ username }) => {\n                    if (user.username === username) {\n                        document.getElementById('enable-btn').style.display = 'hidden';\n                    }\n                });\n            });\n            const items = container.querySelectorAll('.delete-btn');\n            Array.from(items).forEach((item) => item.onclick = onDeleteClick);\n        }\n    });\n}\n;\ninitialise();\n// TODO revokePermission\n/**\n * Endpoint that can be hit, that will send over boardId, id and return true when done\n */\n// TODO getPermissions\n/**\n * Endpoint that can be hit (given boardId), that will send over id, username, avatarHash and fullName of all people that have given permissions so far\n */\n// TODO authentication button\ndocument.getElementById('enable-btn').addEventListener('click', function () {\n    Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"getToken\"])(t).then((token) => {\n        const { board: boardId, member: id } = t.getContext();\n        let currentUsername;\n        member.then(({ username }) => {\n            currentUsername = username;\n            const data = new URLSearchParams({\n                token,\n                id,\n                boardId,\n                username,\n            });\n            axios({ method: 'post', url: `${url}/user`, data }).then(function (response) {\n                const item = { id, username: currentUsername };\n                console.log('success', response);\n                document.getElementById('enable-btn').style.display = 'none';\n                users.push(item);\n                Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"setUsers\"])(t, users);\n                const container = document.getElementById('commenting-enabled');\n                container.appendChild(renderUser(item));\n                const items = document.querySelectorAll('.delete-btn');\n                Array.from(items)[items.length - 1].onclick = onDeleteClick;\n            }).catch(function (error) {\n                console.log('Error', error);\n            })\n                .finally(function () {\n                // always executed\n            });\n        });\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbm90aWZpY2F0aW9ucy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbm90aWZpY2F0aW9ucy50cz82M2NlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIsIGdldFRva2VuLCBnZXRVc2Vycywgc2V0VXNlcnMgfSBmcm9tICcuL3RyZWxsby11dGlsJztcbmltcG9ydCB7IHN0cmluZ1RvTm9kZSB9IGZyb20gJy4vY2hlY2tsaXN0LXV0aWwnO1xuZGVjbGFyZSBjb25zdCBUcmVsbG9Qb3dlclVwOiBhbnk7XG5kZWNsYXJlIGNvbnN0IGF4aW9zOiBhbnk7XG5jb25zdCB0ID0gVHJlbGxvUG93ZXJVcC5pZnJhbWUoKTtcbmNvbnN0IG1lbWJlciA9IHQubWVtYmVyKCd1c2VybmFtZScpO1xubGV0IHVzZXJzID0gW107XG5cbmNvbnN0IHVybCA9ICdodHRwczovL2NoZWNrbGlzdC1ub3RpZmljYXRpb25zLmhlcm9rdWFwcC5jb20nO1xuXG5jb25zdCByZW5kZXJVc2VyID0gKHVzZXI6IFVzZXIpOiBOb2RlID0+IHtcbiAgY29uc29sZS5sb2coJ3JlbmRlcnVzZXInLCB1c2VyKTtcbiAgY29uc3QgZG9tU3RyaW5nID0gYDxkaXYgY2xhc3M9XCJ1c2VyLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1c2VybmFtZVwiPiR7dXNlci51c2VybmFtZX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlLWJ0blwiPkRlbGV0ZTwvZGl2PlxuICA8L2Rpdj5gO1xuXG4gIHJldHVybiBzdHJpbmdUb05vZGUoZG9tU3RyaW5nKTtcbn07XG5cblxuZnVuY3Rpb24gb25EZWxldGVDbGljaygpOiB2b2lkIHtcbiAgY29uc3QgY3VycmVudFVzZXJuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXJuYW1lJykuaW5uZXJIVE1MO1xuICBjb25zdCB1c2VyID0gdXNlcnMuZmluZCh1ID0+IHUudXNlcm5hbWUgPT09IGN1cnJlbnRVc2VybmFtZSk7XG4gIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcblxuICBjb25zb2xlLmxvZygnZ290IHVzZXJuYW1lJywgY3VycmVudFVzZXJuYW1lKTtcbiAgY29uc29sZS5sb2coJ2FuZCB1c2VyJywgdXNlciwgaW5kZXgpO1xuXG4gIGNvbnN0IGRhdGEgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHsgaWQ6IHVzZXIuaWQgfSk7XG5cbiAgYXhpb3MoeyBtZXRob2Q6ICdkZWxldGUnLCB1cmw6IGAke3VybH0vdXNlcmAsIGRhdGEgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICBjb25zb2xlLmxvZygnc3VjY2Vzc2Z1bGx5IGRvbmUgYW5kIGRlbGV0aW5nJyk7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudXNlci1jb250YWluZXInKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcbiAgICBjb25zdCBpdGVtVG9EZWxldGUgPSBpdGVtc1tpbmRleF07XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRpbmctZW5hYmxlZCcpO1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChpdGVtVG9EZWxldGUpO1xuICAgIHVzZXJzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAvLyBJZiB1c2VyIGRlbGV0ZWQgdGhlbXNlbGYsIG5lZWQgdG8gYWRkIGJhY2sgaW4gdGhlIHBlcm1pc3Npb25zIGJ1dHRvblxuICAgIG1lbWJlci50aGVuKCh7IHVzZXJuYW1lIH0pID0+IHtcbiAgICAgIGlmIChjdXJyZW50VXNlcm5hbWUgPT09IHVzZXJuYW1lKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmFibGUtYnRuJykuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9yKTtcbiAgfSlcbiAgICAuZmluYWxseShmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBhbHdheXMgZXhlY3V0ZWRcbiAgICB9KTtcbn1cblxuXG5mdW5jdGlvbiBpbml0aWFsaXNlKCk6IHZvaWQge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudGluZy1lbmFibGVkJyk7XG4gIGdldFVzZXJzKHQpLnRoZW4oKHUpID0+IHtcbiAgICBpZiAodSkge1xuICAgICAgdXNlcnMgPSB1O1xuICAgICAgdS5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyVXNlcih1c2VyKSk7XG5cbiAgICAgICAgLy8gSWYgdXNlciBpcyBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIGxpc3QsIGRvbid0IG5lZWQgdG8gc2hvdyB0aGVtIHRoZSBlbmFibGUgYnRuXG4gICAgICAgIG1lbWJlci50aGVuKCh7IHVzZXJuYW1lIH0pID0+IHtcbiAgICAgICAgICBpZiAodXNlci51c2VybmFtZSA9PT0gdXNlcm5hbWUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmFibGUtYnRuJykuc3R5bGUuZGlzcGxheSA9ICdoaWRkZW4nO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgaXRlbXMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1idG4nKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcbiAgICAgIEFycmF5LmZyb20oaXRlbXMpLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0ub25jbGljayA9IG9uRGVsZXRlQ2xpY2spO1xuICAgIH1cbiAgfSk7XG59O1xuXG5pbml0aWFsaXNlKCk7XG5cbi8vIFRPRE8gcmV2b2tlUGVybWlzc2lvblxuLyoqXG4gKiBFbmRwb2ludCB0aGF0IGNhbiBiZSBoaXQsIHRoYXQgd2lsbCBzZW5kIG92ZXIgYm9hcmRJZCwgaWQgYW5kIHJldHVybiB0cnVlIHdoZW4gZG9uZVxuICovXG5cbi8vIFRPRE8gZ2V0UGVybWlzc2lvbnNcbi8qKlxuICogRW5kcG9pbnQgdGhhdCBjYW4gYmUgaGl0IChnaXZlbiBib2FyZElkKSwgdGhhdCB3aWxsIHNlbmQgb3ZlciBpZCwgdXNlcm5hbWUsIGF2YXRhckhhc2ggYW5kIGZ1bGxOYW1lIG9mIGFsbCBwZW9wbGUgdGhhdCBoYXZlIGdpdmVuIHBlcm1pc3Npb25zIHNvIGZhclxuICovXG5cbi8vIFRPRE8gYXV0aGVudGljYXRpb24gYnV0dG9uXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmFibGUtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGdldFRva2VuKHQpLnRoZW4oKHRva2VuKSA9PiB7XG4gICAgY29uc3QgeyBib2FyZDogYm9hcmRJZCwgbWVtYmVyOiBpZCB9ID0gdC5nZXRDb250ZXh0KCk7XG5cbiAgICBsZXQgY3VycmVudFVzZXJuYW1lO1xuICAgIG1lbWJlci50aGVuKCh7IHVzZXJuYW1lIH0pID0+IHtcbiAgICAgIGN1cnJlbnRVc2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgY29uc3QgZGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICB0b2tlbixcbiAgICAgICAgaWQsXG4gICAgICAgIGJvYXJkSWQsXG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgfSk7XG5cbiAgICAgIGF4aW9zKHsgbWV0aG9kOiAncG9zdCcsIHVybDogYCR7dXJsfS91c2VyYCwgZGF0YSB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zdCBpdGVtID0geyBpZCwgdXNlcm5hbWU6IGN1cnJlbnRVc2VybmFtZSB9O1xuICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycsIHJlc3BvbnNlKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuYWJsZS1idG4nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB1c2Vycy5wdXNoKGl0ZW0pO1xuICAgICAgICBzZXRVc2Vycyh0LCB1c2Vycyk7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRpbmctZW5hYmxlZCcpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyVXNlcihpdGVtKSk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1idG4nKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcbiAgICAgICAgQXJyYXkuZnJvbShpdGVtcylbaXRlbXMubGVuZ3RoIC0gMV0ub25jbGljayA9IG9uRGVsZXRlQ2xpY2s7XG5cbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InLCBlcnJvcik7XG4gICAgICB9KVxuICAgICAgICAuZmluYWxseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gYWx3YXlzIGV4ZWN1dGVkXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/notifications.ts\n");

/***/ }),

/***/ "./src/trello-util.ts":
/*!****************************!*\
  !*** ./src/trello-util.ts ***!
  \****************************/
/*! exports provided: getItems, setItems, getIsChecklistEnabled, getToken, setToken, getUsers, setUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getItems\", function() { return getItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setItems\", function() { return setItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIsChecklistEnabled\", function() { return getIsChecklistEnabled; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getToken\", function() { return getToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setToken\", function() { return setToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUsers\", function() { return getUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUsers\", function() { return setUsers; });\nconst getItems = (t) => t.get('card', 'shared', 'items');\nconst setItems = (t, items) => t.set('card', 'shared', 'items', items);\nconst getIsChecklistEnabled = (t) => getItems(t).then((items) => items ? true : false);\nconst getToken = (t) => t.get('member', 'private', 'authToken');\nconst setToken = (t, token) => t.set('member', 'private', 'authToken', token);\nconst getUsers = (t) => t.get('board', 'shared', 'users');\nconst setUsers = (t, users) => t.set('board', 'shared', 'users', users);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHJlbGxvLXV0aWwudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3RyZWxsby11dGlsLnRzP2JhYjciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgQ2hlY2tsaXN0SXRlbSA9IHtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgaXNDb21wbGV0ZT86IGJvb2xlYW47XG4gICAgdXNlcm5hbWU/OiBzdHJpbmc7XG4gICAgZnVsbE5hbWU/OiBzdHJpbmc7XG4gICAgYXZhdGFySGFzaD86IHN0cmluZzsvLyBsYXN0IGtub3duIGF2YXRhckhhc2ggLy9UT0RPOiBuZWVkIHRvIHJlLWdldCBpdCBpbiBjYXNlIGl0IGhhcyBjaGFuZ2VkXG4gICAgZHVlRGF0ZT86IG51bWJlcjtcbiAgICBkdWVEYXRlRnJpZW5kbHk/OiBzdHJpbmc7IC8vIERhdGUgaW4gaHVtYW4gcmVhZGJhYmxlIGZvcm1hdCBlLmcuIDEgSmFuIDEyOjAwcG1cbiAgICBub3RpZmljYXRpb25UaW1lPzogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlciA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRJdGVtcyA9ICh0KTogUHJvbWlzZTxDaGVja2xpc3RJdGVtW10+ID0+IHQuZ2V0KCdjYXJkJywgJ3NoYXJlZCcsICdpdGVtcycpO1xuZXhwb3J0IGNvbnN0IHNldEl0ZW1zID0gKHQsIGl0ZW1zOiBDaGVja2xpc3RJdGVtW10pOiBQcm9taXNlPENoZWNrbGlzdEl0ZW1bXT4gPT4gdC5zZXQoJ2NhcmQnLCAnc2hhcmVkJywgJ2l0ZW1zJywgaXRlbXMpO1xuZXhwb3J0IGNvbnN0IGdldElzQ2hlY2tsaXN0RW5hYmxlZCA9ICh0KTogUHJvbWlzZTxib29sZWFuPiA9PiBnZXRJdGVtcyh0KS50aGVuKChpdGVtczogQ2hlY2tsaXN0SXRlbVtdKSA9PiBpdGVtcyA/IHRydWUgOiBmYWxzZSk7XG5leHBvcnQgY29uc3QgZ2V0VG9rZW4gPSAodCk6IFByb21pc2U8c3RyaW5nPiA9PiB0LmdldCgnbWVtYmVyJywgJ3ByaXZhdGUnLCAnYXV0aFRva2VuJyk7XG5leHBvcnQgY29uc3Qgc2V0VG9rZW4gPSAodCwgdG9rZW4pOiBQcm9taXNlPHZvaWQ+ID0+IHQuc2V0KCdtZW1iZXInLCAncHJpdmF0ZScsICdhdXRoVG9rZW4nLCB0b2tlbik7XG5leHBvcnQgY29uc3QgZ2V0VXNlcnMgPSAodCk6IFByb21pc2U8VXNlcltdPiA9PiB0LmdldCgnYm9hcmQnLCAnc2hhcmVkJywgJ3VzZXJzJyk7XG5leHBvcnQgY29uc3Qgc2V0VXNlcnMgPSAodCwgdXNlcnM6IFVzZXJbXSk6IFByb21pc2U8dm9pZD4gPT4gdC5zZXQoJ2JvYXJkJywgJ3NoYXJlZCcsICd1c2VycycsIHVzZXJzKTsiXSwibWFwcGluZ3MiOiJBQWdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/trello-util.ts\n");

/***/ })

/******/ });