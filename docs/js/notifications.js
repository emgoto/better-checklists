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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _trello_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trello-util */ \"./src/trello-util.ts\");\n/* harmony import */ var _checklist_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checklist-util */ \"./src/checklist-util.ts\");\n\n\nconst t = TrelloPowerUp.iframe();\nconst member = t.member('username');\nlet users = [];\nlet hasGivenPermissions = false;\nconst url = 'https://checklist-notifications.herokuapp.com';\nconst renderUser = (user) => {\n    const domString = `<div class=\"user-container\">\n    <div class=\"username\">${user.username}</div>\n    <div class=\"delete-btn\">\n        <div class=\"delete-icon\" title=\"Remove User\"></div>\n        <div class=\"spinner\"></div>\n    </div>\n  </div>`;\n    return Object(_checklist_util__WEBPACK_IMPORTED_MODULE_1__[\"stringToNode\"])(domString);\n};\nconst showEnableOrAuthenticate = () => {\n    Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"getToken\"])(t).then((maybeToken) => {\n        if (!maybeToken) {\n            document.getElementById('authenticate-btn').style.display = 'block';\n            document.getElementById('enable-btn').style.display = 'none';\n        }\n        else {\n            document.getElementById('enable-btn').style.display = 'block';\n        }\n    });\n};\n// Remove from Trello storage and from page\nconst removeUserLocally = (index, currentUsername) => {\n    console.log('Removing user locally');\n    const items = document.querySelectorAll('.user-container');\n    const itemToDelete = items[index];\n    const container = document.getElementById('commenting-enabled');\n    container.removeChild(itemToDelete);\n    users.splice(index, 1);\n    Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"setUsers\"])(t, users);\n    // If user deleted themself, need to add back in the permissions button\n    member.then(({ username }) => {\n        if (currentUsername === username) {\n            hasGivenPermissions = false;\n            showEnableOrAuthenticate();\n        }\n    });\n    // If there are no users, add back in instructions\n    if (users.length > 0) {\n        document.getElementById('enable-instructions').style.display = 'block';\n    }\n};\nfunction onDeleteClick() {\n    const currentUsername = this.parentElement.parentElement.querySelector('.username').innerHTML;\n    const spinner = this.nextElementSibling;\n    spinner.style.display = 'block';\n    this.style.display = 'none';\n    const user = users.find(u => u.username === currentUsername);\n    if (!user) {\n        console.log(\"Misconfigured user data.\");\n        return;\n    }\n    const index = users.indexOf(user);\n    const data = new URLSearchParams({ id: user.id });\n    axios({ method: 'delete', url: `${url}/user`, data }).then(function () {\n        removeUserLocally(index, currentUsername);\n    }).catch(function (error) {\n        if (error && error.response) {\n            const { status } = error.response;\n            if (status === 400) { // Could not find user to delete, so delete it from UI anyway\n                removeUserLocally(index, currentUsername);\n            }\n            else { // Failed to delete\n                spinner.style.display = 'none';\n                this.style.display = 'block';\n            }\n        }\n    })\n        .finally(function () {\n        // always executed\n    });\n}\nfunction initialise() {\n    const container = document.getElementById('commenting-enabled');\n    Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"getUsers\"])(t).then((u) => {\n        if (u) {\n            users = u;\n            if (users.length > 0) {\n                document.getElementById('enable-instructions').style.display = 'none';\n            }\n            member.then(({ username }) => {\n                u.forEach(user => {\n                    container.appendChild(renderUser(user));\n                    // If user is already present in the list, don't need to show them the enable btn\n                    if (user.username == username) {\n                        hasGivenPermissions = true;\n                    }\n                });\n                // If we're going to show the enable button, double check they've authenticated\n                if (!hasGivenPermissions) {\n                    showEnableOrAuthenticate();\n                }\n                // Add listeners to the delete icons\n                const items = container.querySelectorAll('.delete-icon');\n                Array.from(items).forEach((item) => item.onclick = onDeleteClick);\n            });\n        }\n    });\n}\n;\ninitialise();\ndocument.getElementById('enable-btn').addEventListener('click', function () {\n    document.getElementById('enable-spinner').style.display = 'block';\n    document.getElementById('enable-text').style.display = 'none';\n    Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"getToken\"])(t).then((token) => {\n        const { board: boardId, member: id } = t.getContext();\n        let currentUsername;\n        member.then(({ username }) => {\n            currentUsername = username;\n            const data = new URLSearchParams({\n                token,\n                id,\n                boardId,\n                username,\n            });\n            axios({ method: 'post', url: `${url}/user`, data }).then(function (response) {\n                hasGivenPermissions = true;\n                const item = { id, username: currentUsername };\n                console.log('Successfully enabled', response);\n                document.getElementById('enable-btn').style.display = 'none';\n                document.getElementById('enable-spinner').style.display = 'none';\n                document.getElementById('enable-text').style.display = 'block';\n                users.push(item);\n                Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"setUsers\"])(t, users);\n                const container = document.getElementById('commenting-enabled');\n                const newUser = renderUser(item);\n                container.appendChild(newUser);\n                const items = document.querySelectorAll('.delete-icon');\n                Array.from(items)[items.length - 1].onclick = onDeleteClick;\n            }).catch(function (error) {\n                console.log('Failed to enable', error);\n                document.getElementById('enable-spinner').style.display = 'none';\n                document.getElementById('enable-text').style.display = 'block';\n            })\n                .finally(function () {\n                // Done\n            });\n        });\n    });\n});\ndocument.getElementById('authenticate-btn').addEventListener('click', function () {\n    t.popup({\n        type: 'confirm',\n        title: 'Authorize Checklist+',\n        mouseEvent: event,\n        message: 'To enable assigning board members to tasks, we require you to authorize with Checklist+.',\n        confirmText: 'Authorize',\n        onConfirm: () => {\n            Trello.authorize({\n                type: \"popup\",\n                name: \"Checklist+\",\n                expiration: \"never\",\n                success: () => {\n                    Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"setToken\"])(t, Trello.token());\n                    document.getElementById('authenticate-btn').style.display = 'none';\n                    document.getElementById('enable-btn').style.display = 'block';\n                },\n                error: () => { },\n            });\n        },\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbm90aWZpY2F0aW9ucy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbm90aWZpY2F0aW9ucy50cz82M2NlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIsIGdldFRva2VuLCBzZXRUb2tlbiwgZ2V0VXNlcnMsIHNldFVzZXJzIH0gZnJvbSAnLi90cmVsbG8tdXRpbCc7XG5pbXBvcnQgeyBzdHJpbmdUb05vZGUgfSBmcm9tICcuL2NoZWNrbGlzdC11dGlsJztcbmRlY2xhcmUgY29uc3QgVHJlbGxvUG93ZXJVcDogYW55O1xuZGVjbGFyZSBjb25zdCBheGlvczogYW55O1xuZGVjbGFyZSBjb25zdCBUcmVsbG86IGFueTtcbmNvbnN0IHQgPSBUcmVsbG9Qb3dlclVwLmlmcmFtZSgpO1xuY29uc3QgbWVtYmVyID0gdC5tZW1iZXIoJ3VzZXJuYW1lJyk7XG5sZXQgdXNlcnMgPSBbXTtcbmxldCBoYXNHaXZlblBlcm1pc3Npb25zID0gZmFsc2U7XG5cbmNvbnN0IHVybCA9ICdodHRwczovL2NoZWNrbGlzdC1ub3RpZmljYXRpb25zLmhlcm9rdWFwcC5jb20nO1xuXG5jb25zdCByZW5kZXJVc2VyID0gKHVzZXI6IFVzZXIpOiBOb2RlID0+IHtcbiAgY29uc3QgZG9tU3RyaW5nID0gYDxkaXYgY2xhc3M9XCJ1c2VyLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1c2VybmFtZVwiPiR7dXNlci51c2VybmFtZX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlLWJ0blwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlLWljb25cIiB0aXRsZT1cIlJlbW92ZSBVc2VyXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PmA7XG5cbiAgcmV0dXJuIHN0cmluZ1RvTm9kZShkb21TdHJpbmcpO1xufTtcblxuY29uc3Qgc2hvd0VuYWJsZU9yQXV0aGVudGljYXRlID0gKCk6IHZvaWQgPT4ge1xuICBnZXRUb2tlbih0KS50aGVuKChtYXliZVRva2VuKSA9PiB7XG4gICAgaWYgKCFtYXliZVRva2VuKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aGVudGljYXRlLWJ0bicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuYWJsZS1idG4nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5hYmxlLWJ0bicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBSZW1vdmUgZnJvbSBUcmVsbG8gc3RvcmFnZSBhbmQgZnJvbSBwYWdlXG5jb25zdCByZW1vdmVVc2VyTG9jYWxseSA9IChpbmRleDogbnVtYmVyLCBjdXJyZW50VXNlcm5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICBjb25zb2xlLmxvZygnUmVtb3ZpbmcgdXNlciBsb2NhbGx5Jyk7XG4gIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVzZXItY29udGFpbmVyJykgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XG4gIGNvbnN0IGl0ZW1Ub0RlbGV0ZSA9IGl0ZW1zW2luZGV4XTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRpbmctZW5hYmxlZCcpO1xuICBjb250YWluZXIucmVtb3ZlQ2hpbGQoaXRlbVRvRGVsZXRlKTtcbiAgdXNlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgc2V0VXNlcnModCwgdXNlcnMpO1xuXG4gIC8vIElmIHVzZXIgZGVsZXRlZCB0aGVtc2VsZiwgbmVlZCB0byBhZGQgYmFjayBpbiB0aGUgcGVybWlzc2lvbnMgYnV0dG9uXG4gIG1lbWJlci50aGVuKCh7IHVzZXJuYW1lIH0pID0+IHtcbiAgICBpZiAoY3VycmVudFVzZXJuYW1lID09PSB1c2VybmFtZSkge1xuICAgICAgaGFzR2l2ZW5QZXJtaXNzaW9ucyA9IGZhbHNlO1xuICAgICAgc2hvd0VuYWJsZU9yQXV0aGVudGljYXRlKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBJZiB0aGVyZSBhcmUgbm8gdXNlcnMsIGFkZCBiYWNrIGluIGluc3RydWN0aW9uc1xuICBpZiAodXNlcnMubGVuZ3RoID4gMCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmFibGUtaW5zdHJ1Y3Rpb25zJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIG9uRGVsZXRlQ2xpY2soKTogdm9pZCB7XG4gIGNvbnN0IGN1cnJlbnRVc2VybmFtZSA9IHRoaXMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VybmFtZScpLmlubmVySFRNTDtcbiAgY29uc3Qgc3Bpbm5lciA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xuICBzcGlubmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgY29uc3QgdXNlciA9IHVzZXJzLmZpbmQodSA9PiB1LnVzZXJuYW1lID09PSBjdXJyZW50VXNlcm5hbWUpO1xuXG4gIGlmICghdXNlcikge1xuICAgIGNvbnNvbGUubG9nKFwiTWlzY29uZmlndXJlZCB1c2VyIGRhdGEuXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgY29uc3QgZGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoeyBpZDogdXNlci5pZCB9KTtcblxuICBheGlvcyh7IG1ldGhvZDogJ2RlbGV0ZScsIHVybDogYCR7dXJsfS91c2VyYCwgZGF0YSB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICByZW1vdmVVc2VyTG9jYWxseShpbmRleCwgY3VycmVudFVzZXJuYW1lKTtcbiAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgaWYgKGVycm9yICYmIGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gZXJyb3IucmVzcG9uc2U7XG4gICAgICBpZiAoc3RhdHVzID09PSA0MDApIHsgLy8gQ291bGQgbm90IGZpbmQgdXNlciB0byBkZWxldGUsIHNvIGRlbGV0ZSBpdCBmcm9tIFVJIGFueXdheVxuICAgICAgICByZW1vdmVVc2VyTG9jYWxseShpbmRleCwgY3VycmVudFVzZXJuYW1lKTtcbiAgICAgIH0gZWxzZSB7IC8vIEZhaWxlZCB0byBkZWxldGVcbiAgICAgICAgc3Bpbm5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgICAuZmluYWxseShmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBhbHdheXMgZXhlY3V0ZWRcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRpbmctZW5hYmxlZCcpO1xuICBnZXRVc2Vycyh0KS50aGVuKCh1KSA9PiB7XG4gICAgaWYgKHUpIHtcbiAgICAgIHVzZXJzID0gdTtcbiAgICAgIGlmICh1c2Vycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmFibGUtaW5zdHJ1Y3Rpb25zJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cblxuICAgICAgbWVtYmVyLnRoZW4oKHsgdXNlcm5hbWUgfSkgPT4ge1xuICAgICAgICB1LmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlclVzZXIodXNlcikpO1xuICAgICAgICAgIC8vIElmIHVzZXIgaXMgYWxyZWFkeSBwcmVzZW50IGluIHRoZSBsaXN0LCBkb24ndCBuZWVkIHRvIHNob3cgdGhlbSB0aGUgZW5hYmxlIGJ0blxuICAgICAgICAgIGlmICh1c2VyLnVzZXJuYW1lID09IHVzZXJuYW1lKSB7XG4gICAgICAgICAgICBoYXNHaXZlblBlcm1pc3Npb25zID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIElmIHdlJ3JlIGdvaW5nIHRvIHNob3cgdGhlIGVuYWJsZSBidXR0b24sIGRvdWJsZSBjaGVjayB0aGV5J3ZlIGF1dGhlbnRpY2F0ZWRcbiAgICAgICAgaWYgKCFoYXNHaXZlblBlcm1pc3Npb25zKSB7XG4gICAgICAgICAgc2hvd0VuYWJsZU9yQXV0aGVudGljYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgbGlzdGVuZXJzIHRvIHRoZSBkZWxldGUgaWNvbnNcbiAgICAgICAgY29uc3QgaXRlbXMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1pY29uJykgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XG4gICAgICAgIEFycmF5LmZyb20oaXRlbXMpLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0ub25jbGljayA9IG9uRGVsZXRlQ2xpY2spO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuXG59O1xuXG5pbml0aWFsaXNlKCk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmFibGUtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmFibGUtc3Bpbm5lcicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5hYmxlLXRleHQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIGdldFRva2VuKHQpLnRoZW4oKHRva2VuKSA9PiB7XG4gICAgY29uc3QgeyBib2FyZDogYm9hcmRJZCwgbWVtYmVyOiBpZCB9ID0gdC5nZXRDb250ZXh0KCk7XG5cbiAgICBsZXQgY3VycmVudFVzZXJuYW1lO1xuICAgIG1lbWJlci50aGVuKCh7IHVzZXJuYW1lIH0pID0+IHtcbiAgICAgIGN1cnJlbnRVc2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgY29uc3QgZGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICB0b2tlbixcbiAgICAgICAgaWQsXG4gICAgICAgIGJvYXJkSWQsXG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgfSk7XG5cbiAgICAgIGF4aW9zKHsgbWV0aG9kOiAncG9zdCcsIHVybDogYCR7dXJsfS91c2VyYCwgZGF0YSB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBoYXNHaXZlblBlcm1pc3Npb25zID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgaXRlbSA9IHsgaWQsIHVzZXJuYW1lOiBjdXJyZW50VXNlcm5hbWUgfTtcbiAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSBlbmFibGVkJywgcmVzcG9uc2UpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5hYmxlLWJ0bicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmFibGUtc3Bpbm5lcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmFibGUtdGV4dCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB1c2Vycy5wdXNoKGl0ZW0pO1xuICAgICAgICBzZXRVc2Vycyh0LCB1c2Vycyk7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRpbmctZW5hYmxlZCcpO1xuICAgICAgICBjb25zdCBuZXdVc2VyID0gcmVuZGVyVXNlcihpdGVtKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1VzZXIpO1xuICAgICAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtaWNvbicpIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+O1xuICAgICAgICBBcnJheS5mcm9tKGl0ZW1zKVtpdGVtcy5sZW5ndGggLSAxXS5vbmNsaWNrID0gb25EZWxldGVDbGljaztcblxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gZW5hYmxlJywgZXJyb3IpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5hYmxlLXNwaW5uZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5hYmxlLXRleHQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBEb25lXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aGVudGljYXRlLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICB0LnBvcHVwKHtcbiAgICB0eXBlOiAnY29uZmlybScsXG4gICAgdGl0bGU6ICdBdXRob3JpemUgQ2hlY2tsaXN0KycsXG4gICAgbW91c2VFdmVudDogZXZlbnQsXG4gICAgbWVzc2FnZTogJ1RvIGVuYWJsZSBhc3NpZ25pbmcgYm9hcmQgbWVtYmVycyB0byB0YXNrcywgd2UgcmVxdWlyZSB5b3UgdG8gYXV0aG9yaXplIHdpdGggQ2hlY2tsaXN0Ky4nLFxuICAgIGNvbmZpcm1UZXh0OiAnQXV0aG9yaXplJyxcbiAgICBvbkNvbmZpcm06ICgpID0+IHtcbiAgICAgIFRyZWxsby5hdXRob3JpemUoe1xuICAgICAgICB0eXBlOiBcInBvcHVwXCIsXG4gICAgICAgIG5hbWU6IFwiQ2hlY2tsaXN0K1wiLFxuICAgICAgICBleHBpcmF0aW9uOiBcIm5ldmVyXCIsXG4gICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICBzZXRUb2tlbih0LCBUcmVsbG8udG9rZW4oKSk7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGhlbnRpY2F0ZS1idG4nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmFibGUtYnRuJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoKSA9PiB7IH0sXG4gICAgICB9KTtcbiAgICB9LFxuICB9KTtcbn0pO1xuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/notifications.ts\n");

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