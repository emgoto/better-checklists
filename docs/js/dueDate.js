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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/due-date.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/due-date.ts":
/*!*************************!*\
  !*** ./src/due-date.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _trello_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trello-util */ \"./src/trello-util.ts\");\n\nconst t = TrelloPowerUp.iframe();\nconst checklistItems = t.arg('checklistItems');\nconst index = t.arg('index');\nconst now = moment().toDate();\nlet picker;\nconst TIME_FORMAT = 'LT';\nconst url = 'https://checklist-notifications.herokuapp.com';\nconst resize = function () {\n    t.sizeTo('.dpicker-widget');\n};\n// To change the names of the buttons (as they were too long)\nconst i18n = {\n    previousMonth: 'Prev',\n    nextMonth: 'Next',\n    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],\n    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],\n    weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']\n};\n// https://gist.github.com/jed/982883\nconst generateUuid = function () { return (\"\" + 1e7 + -1e3 + -4e3 + -8e3 + -1e11).replace(/1|0/g, function () { return (0 | Math.random() * 16).toString(16); }); };\nt.render(function () {\n    console.log(\"rendering...\");\n    const dueDate = checklistItems[index].dueDate;\n    if (dueDate) {\n        document.getElementById('remove-btn').classList.remove('u-hidden');\n    }\n    if (!picker) {\n        const defaultDate = moment.unix(dueDate).toDate() || now;\n        picker = new Pikaday({\n            bound: false,\n            format: 'MM/DD/YYYY',\n            defaultDate,\n            setDefaultDate: true,\n            container: document.getElementById('datepicker'),\n            field: document.getElementById('date-input'),\n            i18n,\n            onDraw: function () {\n                resize();\n            }\n        });\n    }\n    Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"getUsers\"])(t).then((users) => {\n        if (users && users.length > 0) {\n            document.getElementById('set-notifications').style.display = 'block';\n        }\n        else {\n            document.getElementById('notification-setup').style.display = 'block';\n        }\n    });\n});\nconst getNotificationTime = (dueTime, minutes) => {\n    const notificationTime = (dueTime - minutes * 60 * 1000); // TODO: why is this in seconds\n    if (moment.utc().valueOf() < notificationTime) {\n        return notificationTime.toString();\n    }\n    else {\n        return null; // Return null if the notification time was in the past\n    }\n};\nconst getAndSetNotification = (dueTime) => {\n    const select = document.getElementById('reminder-select');\n    const minutes = parseInt(select.value);\n    const username = checklistItems[index].username;\n    if (minutes > -1 && username) {\n        const { userId, text, id } = checklistItems[index];\n        const { card: cardId, board: boardId } = t.getContext();\n        const itemId = id ? id : generateUuid();\n        const notificationTime = getNotificationTime(dueTime, minutes);\n        if (notificationTime !== null) {\n            const data = new URLSearchParams({ itemId, cardId, boardId, username, userId, item: text, dueTime: dueTime.toString(), notificationTime });\n            return axios({ method: 'post', url: `${url}/notification`, data });\n        }\n    }\n    return Promise.resolve();\n};\ndocument.getElementById('time-input').onblur = () => {\n    const timeInput = document.getElementById('time-input');\n    if (!moment(timeInput.value, TIME_FORMAT).isValid()) {\n        timeInput.value = '12:00 PM';\n    }\n};\ndocument.getElementById('save-btn').addEventListener('click', function () {\n    const timeInput = document.getElementById('time-input');\n    let timeMoment = moment(timeInput.value, TIME_FORMAT);\n    if (!timeMoment.isValid()) {\n        timeMoment = moment('12:00 PM', TIME_FORMAT);\n    }\n    const unixTime = picker.getMoment().hour(timeMoment.hour()).minute(timeMoment.minute()).unix() * 1000;\n    const displayDate = picker.getMoment().hour(timeMoment.hour()).minute(timeMoment.minute()).format('D MMM h:mm A');\n    checklistItems[index].dueDate = unixTime;\n    checklistItems[index].dueDateFriendly = displayDate;\n    const select = document.getElementById('reminder-select');\n    checklistItems[index].notificationOffset = select.value;\n    getAndSetNotification(unixTime).then(() => {\n        Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"setItems\"])(t, checklistItems).then(() => {\n            t.closePopup();\n        });\n    }).catch(() => {\n        console.log(\"Error setting notification\");\n        // TODO: error handling for notification failure (?)\n    });\n});\ndocument.getElementById('remove-btn').addEventListener('click', function () {\n    checklistItems[index].dueDate = undefined;\n    checklistItems[index].dueDateFriendly = undefined;\n    Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"setItems\"])(t, checklistItems).then(() => {\n        t.closePopup();\n    });\n});\ndocument.getElementById('notification-setup').addEventListener('click', function () {\n    return t.modal({\n        url: './notifications.html',\n        height: 360,\n        fullscreen: false,\n        title: 'Checklist+ Notifications'\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZHVlLWRhdGUudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2R1ZS1kYXRlLnRzPzYzZDAiXSwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBjb25zdCBUcmVsbG9Qb3dlclVwOiBhbnk7XG5kZWNsYXJlIGNvbnN0IG1vbWVudDogYW55O1xuZGVjbGFyZSBjb25zdCBQaWthZGF5OiBhbnk7XG5kZWNsYXJlIGNvbnN0IGF4aW9zOiBhbnk7XG5cbmltcG9ydCB7IHNldEl0ZW1zLCBnZXRVc2VycyB9IGZyb20gJy4vdHJlbGxvLXV0aWwnO1xuXG5jb25zdCB0ID0gVHJlbGxvUG93ZXJVcC5pZnJhbWUoKTtcbmNvbnN0IGNoZWNrbGlzdEl0ZW1zID0gdC5hcmcoJ2NoZWNrbGlzdEl0ZW1zJyk7XG5jb25zdCBpbmRleCA9IHQuYXJnKCdpbmRleCcpO1xuY29uc3Qgbm93ID0gbW9tZW50KCkudG9EYXRlKCk7XG5sZXQgcGlja2VyO1xuY29uc3QgVElNRV9GT1JNQVQgPSAnTFQnO1xuXG5jb25zdCB1cmwgPSAnaHR0cHM6Ly9jaGVja2xpc3Qtbm90aWZpY2F0aW9ucy5oZXJva3VhcHAuY29tJztcblxuY29uc3QgcmVzaXplID0gZnVuY3Rpb24gKCk6IHZvaWQge1xuICB0LnNpemVUbygnLmRwaWNrZXItd2lkZ2V0Jyk7XG59O1xuXG4vLyBUbyBjaGFuZ2UgdGhlIG5hbWVzIG9mIHRoZSBidXR0b25zIChhcyB0aGV5IHdlcmUgdG9vIGxvbmcpXG5jb25zdCBpMThuID0ge1xuICBwcmV2aW91c01vbnRoOiAnUHJldicsXG4gIG5leHRNb250aDogJ05leHQnLFxuICBtb250aHM6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddLFxuICB3ZWVrZGF5czogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddLFxuICB3ZWVrZGF5c1Nob3J0OiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddXG59O1xuXG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qZWQvOTgyODgzXG5jb25zdCBnZW5lcmF0ZVV1aWQgPSBmdW5jdGlvbiAoKTogc3RyaW5nIHsgcmV0dXJuIChcIlwiICsgMWU3ICsgLTFlMyArIC00ZTMgKyAtOGUzICsgLTFlMTEpLnJlcGxhY2UoLzF8MC9nLCBmdW5jdGlvbiAoKSB7IHJldHVybiAoMCB8IE1hdGgucmFuZG9tKCkgKiAxNikudG9TdHJpbmcoMTYpOyB9KTsgfTtcblxudC5yZW5kZXIoZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZyhcInJlbmRlcmluZy4uLlwiKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGNoZWNrbGlzdEl0ZW1zW2luZGV4XS5kdWVEYXRlO1xuICBpZiAoZHVlRGF0ZSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1vdmUtYnRuJykuY2xhc3NMaXN0LnJlbW92ZSgndS1oaWRkZW4nKTtcbiAgfVxuXG4gIGlmICghcGlja2VyKSB7XG4gICAgY29uc3QgZGVmYXVsdERhdGUgPSBtb21lbnQudW5peChkdWVEYXRlKS50b0RhdGUoKSB8fCBub3c7XG5cbiAgICBwaWNrZXIgPSBuZXcgUGlrYWRheSh7XG4gICAgICBib3VuZDogZmFsc2UsXG4gICAgICBmb3JtYXQ6ICdNTS9ERC9ZWVlZJyxcbiAgICAgIGRlZmF1bHREYXRlLFxuICAgICAgc2V0RGVmYXVsdERhdGU6IHRydWUsXG4gICAgICBjb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlcGlja2VyJyksXG4gICAgICBmaWVsZDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtaW5wdXQnKSxcbiAgICAgIGkxOG4sXG4gICAgICBvbkRyYXc6IGZ1bmN0aW9uICgpOiB2b2lkIHtcbiAgICAgICAgcmVzaXplKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRVc2Vycyh0KS50aGVuKCh1c2VycykgPT4ge1xuICAgIGlmICh1c2VycyAmJiB1c2Vycy5sZW5ndGggPiAwKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0LW5vdGlmaWNhdGlvbnMnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGlmaWNhdGlvbi1zZXR1cCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgfSk7XG59KTtcblxuY29uc3QgZ2V0Tm90aWZpY2F0aW9uVGltZSA9IChkdWVUaW1lOiBudW1iZXIsIG1pbnV0ZXM6IG51bWJlcik6IHN0cmluZyB8IG51bGwgPT4ge1xuICBjb25zdCBub3RpZmljYXRpb25UaW1lID0gKGR1ZVRpbWUgLSBtaW51dGVzICogNjAgKiAxMDAwKTsgLy8gVE9ETzogd2h5IGlzIHRoaXMgaW4gc2Vjb25kc1xuICBpZiAobW9tZW50LnV0YygpLnZhbHVlT2YoKSA8IG5vdGlmaWNhdGlvblRpbWUpIHtcbiAgICByZXR1cm4gbm90aWZpY2F0aW9uVGltZS50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsOyAvLyBSZXR1cm4gbnVsbCBpZiB0aGUgbm90aWZpY2F0aW9uIHRpbWUgd2FzIGluIHRoZSBwYXN0XG4gIH1cbn07XG5cbmNvbnN0IGdldEFuZFNldE5vdGlmaWNhdGlvbiA9IChkdWVUaW1lOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbWluZGVyLXNlbGVjdCcpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICBjb25zdCBtaW51dGVzID0gcGFyc2VJbnQoc2VsZWN0LnZhbHVlKTtcbiAgY29uc3QgdXNlcm5hbWUgPSBjaGVja2xpc3RJdGVtc1tpbmRleF0udXNlcm5hbWU7XG5cbiAgaWYgKG1pbnV0ZXMgPiAtMSAmJiB1c2VybmFtZSkge1xuICAgIGNvbnN0IHsgdXNlcklkLCB0ZXh0LCBpZCB9ID0gY2hlY2tsaXN0SXRlbXNbaW5kZXhdO1xuICAgIGNvbnN0IHsgY2FyZDogY2FyZElkLCBib2FyZDogYm9hcmRJZCB9ID0gdC5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBpdGVtSWQgPSBpZCA/IGlkIDogZ2VuZXJhdGVVdWlkKCk7XG5cbiAgICBjb25zdCBub3RpZmljYXRpb25UaW1lOiBzdHJpbmcgfCBudWxsID0gZ2V0Tm90aWZpY2F0aW9uVGltZShkdWVUaW1lLCBtaW51dGVzKTtcbiAgICBpZiAobm90aWZpY2F0aW9uVGltZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoeyBpdGVtSWQsIGNhcmRJZCwgYm9hcmRJZCwgdXNlcm5hbWUsIHVzZXJJZCwgaXRlbTogdGV4dCwgZHVlVGltZTogZHVlVGltZS50b1N0cmluZygpLCBub3RpZmljYXRpb25UaW1lIH0pO1xuICAgICAgcmV0dXJuIGF4aW9zKHsgbWV0aG9kOiAncG9zdCcsIHVybDogYCR7dXJsfS9ub3RpZmljYXRpb25gLCBkYXRhIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lLWlucHV0Jykub25ibHVyID0gKCk6IHZvaWQgPT4ge1xuICBjb25zdCB0aW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZS1pbnB1dCcpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gIGlmICghbW9tZW50KHRpbWVJbnB1dC52YWx1ZSwgVElNRV9GT1JNQVQpLmlzVmFsaWQoKSkge1xuICAgIHRpbWVJbnB1dC52YWx1ZSA9ICcxMjowMCBQTSc7XG4gIH1cbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCB0aW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZS1pbnB1dCcpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gIGxldCB0aW1lTW9tZW50ID0gbW9tZW50KHRpbWVJbnB1dC52YWx1ZSwgVElNRV9GT1JNQVQpO1xuICBpZiAoIXRpbWVNb21lbnQuaXNWYWxpZCgpKSB7XG4gICAgdGltZU1vbWVudCA9IG1vbWVudCgnMTI6MDAgUE0nLCBUSU1FX0ZPUk1BVCk7XG4gIH1cbiAgY29uc3QgdW5peFRpbWUgPSBwaWNrZXIuZ2V0TW9tZW50KCkuaG91cih0aW1lTW9tZW50LmhvdXIoKSkubWludXRlKHRpbWVNb21lbnQubWludXRlKCkpLnVuaXgoKSAqIDEwMDA7XG4gIGNvbnN0IGRpc3BsYXlEYXRlID0gcGlja2VyLmdldE1vbWVudCgpLmhvdXIodGltZU1vbWVudC5ob3VyKCkpLm1pbnV0ZSh0aW1lTW9tZW50Lm1pbnV0ZSgpKS5mb3JtYXQoJ0QgTU1NIGg6bW0gQScpO1xuICBjaGVja2xpc3RJdGVtc1tpbmRleF0uZHVlRGF0ZSA9IHVuaXhUaW1lO1xuICBjaGVja2xpc3RJdGVtc1tpbmRleF0uZHVlRGF0ZUZyaWVuZGx5ID0gZGlzcGxheURhdGU7XG5cbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbWluZGVyLXNlbGVjdCcpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICBjaGVja2xpc3RJdGVtc1tpbmRleF0ubm90aWZpY2F0aW9uT2Zmc2V0ID0gc2VsZWN0LnZhbHVlO1xuXG4gIGdldEFuZFNldE5vdGlmaWNhdGlvbih1bml4VGltZSkudGhlbigoKSA9PiB7XG4gICAgc2V0SXRlbXModCwgY2hlY2tsaXN0SXRlbXMpLnRoZW4oKCkgPT4ge1xuICAgICAgdC5jbG9zZVBvcHVwKCk7XG4gICAgfSk7XG4gIH0pLmNhdGNoKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yIHNldHRpbmcgbm90aWZpY2F0aW9uXCIpO1xuICAgIC8vIFRPRE86IGVycm9yIGhhbmRsaW5nIGZvciBub3RpZmljYXRpb24gZmFpbHVyZSAoPylcbiAgfSk7XG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgY2hlY2tsaXN0SXRlbXNbaW5kZXhdLmR1ZURhdGUgPSB1bmRlZmluZWQ7XG4gIGNoZWNrbGlzdEl0ZW1zW2luZGV4XS5kdWVEYXRlRnJpZW5kbHkgPSB1bmRlZmluZWQ7XG5cbiAgc2V0SXRlbXModCwgY2hlY2tsaXN0SXRlbXMpLnRoZW4oKCkgPT4ge1xuICAgIHQuY2xvc2VQb3B1cCgpO1xuICB9KTtcbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90aWZpY2F0aW9uLXNldHVwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0Lm1vZGFsKHtcbiAgICB1cmw6ICcuL25vdGlmaWNhdGlvbnMuaHRtbCcsXG4gICAgaGVpZ2h0OiAzNjAsXG4gICAgZnVsbHNjcmVlbjogZmFsc2UsXG4gICAgdGl0bGU6ICdDaGVja2xpc3QrIE5vdGlmaWNhdGlvbnMnXG4gIH0pO1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQUtBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/due-date.ts\n");

/***/ }),

/***/ "./src/trello-util.ts":
/*!****************************!*\
  !*** ./src/trello-util.ts ***!
  \****************************/
/*! exports provided: getItems, setItems, getIsChecklistEnabled, getToken, setToken, getUsers, setUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getItems\", function() { return getItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setItems\", function() { return setItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIsChecklistEnabled\", function() { return getIsChecklistEnabled; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getToken\", function() { return getToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setToken\", function() { return setToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUsers\", function() { return getUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUsers\", function() { return setUsers; });\nconst getItems = (t) => t.get('card', 'shared', 'items');\nconst setItems = (t, items) => t.set('card', 'shared', 'items', items);\nconst getIsChecklistEnabled = (t) => getItems(t).then((items) => items ? true : false);\nconst getToken = (t) => t.get('member', 'private', 'authToken');\nconst setToken = (t, token) => t.set('member', 'private', 'authToken', token);\nconst getUsers = (t) => t.get('board', 'shared', 'users');\nconst setUsers = (t, users) => t.set('board', 'shared', 'users', users);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHJlbGxvLXV0aWwudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3RyZWxsby11dGlsLnRzP2JhYjciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgQ2hlY2tsaXN0SXRlbSA9IHtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgaWQ/OiBzdHJpbmc7IC8vIHV1aWQgLSBvbmx5IHJlcXVpcmVkIG9uY2Ugbm90aWZpY2F0aW9uIGlzIGJlaW5nIHVzZWRcbiAgICBpc0NvbXBsZXRlPzogYm9vbGVhbjtcbiAgICB1c2VybmFtZT86IHN0cmluZztcbiAgICBmdWxsTmFtZT86IHN0cmluZztcbiAgICB1c2VySWQ/OiBzdHJpbmc7XG4gICAgYXZhdGFySGFzaD86IHN0cmluZzsvLyBsYXN0IGtub3duIGF2YXRhckhhc2ggLy9UT0RPOiBuZWVkIHRvIHJlLWdldCBpdCBpbiBjYXNlIGl0IGhhcyBjaGFuZ2VkXG4gICAgZHVlRGF0ZT86IG51bWJlcjtcbiAgICBkdWVEYXRlRnJpZW5kbHk/OiBzdHJpbmc7IC8vIERhdGUgaW4gaHVtYW4gcmVhZGJhYmxlIGZvcm1hdCBlLmcuIDEgSmFuIDEyOjAwcG1cbiAgICBub3RpZmljYXRpb25PZmZzZXQ/OiBudW1iZXI7IC8vIE1pbnV0ZXMgYmVmb3JlIHRoZSBkdWVUaW1lIHdlIHdhbnQgdG8gc2VuZCB0aGUgbm90aWZpY2F0aW9uLiAtMSBpZiBubyBub3RpZmljYXRpb24uXG59XG5cbmV4cG9ydCB0eXBlIFVzZXIgPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB1c2VybmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0SXRlbXMgPSAodCk6IFByb21pc2U8Q2hlY2tsaXN0SXRlbVtdPiA9PiB0LmdldCgnY2FyZCcsICdzaGFyZWQnLCAnaXRlbXMnKTtcbmV4cG9ydCBjb25zdCBzZXRJdGVtcyA9ICh0LCBpdGVtczogQ2hlY2tsaXN0SXRlbVtdKTogUHJvbWlzZTxDaGVja2xpc3RJdGVtW10+ID0+IHQuc2V0KCdjYXJkJywgJ3NoYXJlZCcsICdpdGVtcycsIGl0ZW1zKTtcbmV4cG9ydCBjb25zdCBnZXRJc0NoZWNrbGlzdEVuYWJsZWQgPSAodCk6IFByb21pc2U8Ym9vbGVhbj4gPT4gZ2V0SXRlbXModCkudGhlbigoaXRlbXM6IENoZWNrbGlzdEl0ZW1bXSkgPT4gaXRlbXMgPyB0cnVlIDogZmFsc2UpO1xuZXhwb3J0IGNvbnN0IGdldFRva2VuID0gKHQpOiBQcm9taXNlPHN0cmluZz4gPT4gdC5nZXQoJ21lbWJlcicsICdwcml2YXRlJywgJ2F1dGhUb2tlbicpO1xuZXhwb3J0IGNvbnN0IHNldFRva2VuID0gKHQsIHRva2VuKTogUHJvbWlzZTx2b2lkPiA9PiB0LnNldCgnbWVtYmVyJywgJ3ByaXZhdGUnLCAnYXV0aFRva2VuJywgdG9rZW4pO1xuZXhwb3J0IGNvbnN0IGdldFVzZXJzID0gKHQpOiBQcm9taXNlPFVzZXJbXT4gPT4gdC5nZXQoJ2JvYXJkJywgJ3NoYXJlZCcsICd1c2VycycpO1xuZXhwb3J0IGNvbnN0IHNldFVzZXJzID0gKHQsIHVzZXJzOiBVc2VyW10pOiBQcm9taXNlPHZvaWQ+ID0+IHQuc2V0KCdib2FyZCcsICdzaGFyZWQnLCAndXNlcnMnLCB1c2Vycyk7Il0sIm1hcHBpbmdzIjoiQUFrQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/trello-util.ts\n");

/***/ })

/******/ });