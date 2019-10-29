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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _trello_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trello-util */ \"./src/trello-util.ts\");\n\nconst t = TrelloPowerUp.iframe();\nconst checklistItems = t.arg('checklistItems');\nconst index = t.arg('index');\nconst now = moment().toDate();\nlet picker;\nconst TIME_FORMAT = 'LT';\nconst url = 'https://checklist-notifications.herokuapp.com';\nconst resize = function () {\n    t.sizeTo('.dpicker-widget');\n};\n// To change the names of the buttons (as they were too long)\nconst i18n = {\n    previousMonth: 'Prev',\n    nextMonth: 'Next',\n    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],\n    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],\n    weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']\n};\n// https://gist.github.com/jed/982883\nconst generateUuid = function () { return (\"\" + 1e7 + -1e3 + -4e3 + -8e3 + -1e11).replace(/1|0/g, function () { return (0 | Math.random() * 16).toString(16); }); };\nt.render(function () {\n    const dueDate = checklistItems[index].dueDate;\n    if (dueDate) {\n        document.getElementById('remove-btn').classList.remove('u-hidden');\n    }\n    if (!picker) {\n        const defaultDate = dueDate ? moment.unix(dueDate / 1000).toDate() : now;\n        console.log('duedate', dueDate);\n        if (dueDate) {\n            const timeInput = document.getElementById('time-input');\n            timeInput.value = moment(dueDate).format(TIME_FORMAT);\n        }\n        picker = new Pikaday({\n            bound: false,\n            format: 'MM/DD/YYYY',\n            defaultDate,\n            setDefaultDate: true,\n            container: document.getElementById('datepicker'),\n            field: document.getElementById('date-input'),\n            keyboardInput: false,\n            i18n,\n            onDraw: function () {\n                resize();\n            }\n        });\n    }\n    Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"getUsers\"])(t).then((users) => {\n        if (users && users.length > 0) {\n            document.getElementById('set-notifications').style.display = 'block';\n        }\n        else {\n            document.getElementById('notification-setup').style.display = 'block';\n        }\n    });\n});\nconst getNotificationTime = (dueDate, minutes) => {\n    const notificationTime = (dueDate - minutes * 60 * 1000);\n    if (moment.utc().valueOf() < notificationTime) {\n        return notificationTime.toString();\n    }\n    else {\n        return null; // Return null if the notification time was in the past\n    }\n};\nconst getAndSetNotification = (dueTimeInSeconds, minutes) => {\n    const username = checklistItems[index].username;\n    if (minutes > -1 && username) {\n        const { userId, text, id } = checklistItems[index];\n        const { card: cardId, board: boardId } = t.getContext();\n        const itemId = id ? id : generateUuid();\n        const dueTime = dueTimeInSeconds * 1000;\n        const notificationTime = getNotificationTime(dueTime, minutes);\n        if (notificationTime !== null) {\n            const data = new URLSearchParams({ itemId, cardId, boardId, username, userId, item: text, dueTime: dueTime.toString(), notificationTime });\n            return axios({ method: 'post', url: `${url}/notification`, data });\n        }\n    }\n    return Promise.resolve();\n};\ndocument.getElementById('time-input').onblur = () => {\n    const timeInput = document.getElementById('time-input');\n    if (!moment(timeInput.value, TIME_FORMAT).isValid()) {\n        timeInput.value = '12:00 PM';\n    }\n};\ndocument.getElementById('save-btn').addEventListener('click', function () {\n    const timeInput = document.getElementById('time-input');\n    let timeMoment = moment(timeInput.value, TIME_FORMAT);\n    if (!timeMoment.isValid()) {\n        timeMoment = moment('12:00 PM', TIME_FORMAT);\n    }\n    const unixTimeInSeconds = picker.getMoment().hour(timeMoment.hour()).minute(timeMoment.minute()).unix();\n    const displayDate = picker.getMoment().hour(timeMoment.hour()).minute(timeMoment.minute()).format('D MMM h:mm A');\n    checklistItems[index].dueDate = unixTimeInSeconds * 1000;\n    checklistItems[index].dueDateFriendly = displayDate;\n    const select = document.getElementById('reminder-select');\n    checklistItems[index].notificationOffset = select.value;\n    getAndSetNotification(unixTimeInSeconds, parseInt(select.value, 10)).then(() => {\n        Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"setItems\"])(t, checklistItems).then(() => {\n            t.closePopup();\n        });\n    }).catch(() => {\n        console.log(\"Error setting notification\");\n        // TODO: error handling for notification failure (?)\n    });\n});\ndocument.getElementById('remove-btn').addEventListener('click', function () {\n    checklistItems[index].dueDate = undefined;\n    checklistItems[index].dueDateFriendly = undefined;\n    Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"setItems\"])(t, checklistItems).then(() => {\n        t.closePopup();\n    });\n});\ndocument.getElementById('notification-setup').addEventListener('click', function () {\n    return t.modal({\n        url: './notifications.html',\n        height: 360,\n        fullscreen: false,\n        title: 'Checklist+ Notifications'\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZHVlLWRhdGUudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2R1ZS1kYXRlLnRzPzYzZDAiXSwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBjb25zdCBUcmVsbG9Qb3dlclVwOiBhbnk7XG5kZWNsYXJlIGNvbnN0IG1vbWVudDogYW55O1xuZGVjbGFyZSBjb25zdCBQaWthZGF5OiBhbnk7XG5kZWNsYXJlIGNvbnN0IGF4aW9zOiBhbnk7XG5cbmltcG9ydCB7IHNldEl0ZW1zLCBnZXRVc2VycyB9IGZyb20gJy4vdHJlbGxvLXV0aWwnO1xuXG5jb25zdCB0ID0gVHJlbGxvUG93ZXJVcC5pZnJhbWUoKTtcbmNvbnN0IGNoZWNrbGlzdEl0ZW1zID0gdC5hcmcoJ2NoZWNrbGlzdEl0ZW1zJyk7XG5jb25zdCBpbmRleCA9IHQuYXJnKCdpbmRleCcpO1xuY29uc3Qgbm93ID0gbW9tZW50KCkudG9EYXRlKCk7XG5sZXQgcGlja2VyO1xuY29uc3QgVElNRV9GT1JNQVQgPSAnTFQnO1xuXG5jb25zdCB1cmwgPSAnaHR0cHM6Ly9jaGVja2xpc3Qtbm90aWZpY2F0aW9ucy5oZXJva3VhcHAuY29tJztcblxuY29uc3QgcmVzaXplID0gZnVuY3Rpb24gKCk6IHZvaWQge1xuICB0LnNpemVUbygnLmRwaWNrZXItd2lkZ2V0Jyk7XG59O1xuXG4vLyBUbyBjaGFuZ2UgdGhlIG5hbWVzIG9mIHRoZSBidXR0b25zIChhcyB0aGV5IHdlcmUgdG9vIGxvbmcpXG5jb25zdCBpMThuID0ge1xuICBwcmV2aW91c01vbnRoOiAnUHJldicsXG4gIG5leHRNb250aDogJ05leHQnLFxuICBtb250aHM6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddLFxuICB3ZWVrZGF5czogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddLFxuICB3ZWVrZGF5c1Nob3J0OiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddXG59O1xuXG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qZWQvOTgyODgzXG5jb25zdCBnZW5lcmF0ZVV1aWQgPSBmdW5jdGlvbiAoKTogc3RyaW5nIHsgcmV0dXJuIChcIlwiICsgMWU3ICsgLTFlMyArIC00ZTMgKyAtOGUzICsgLTFlMTEpLnJlcGxhY2UoLzF8MC9nLCBmdW5jdGlvbiAoKSB7IHJldHVybiAoMCB8IE1hdGgucmFuZG9tKCkgKiAxNikudG9TdHJpbmcoMTYpOyB9KTsgfTtcblxudC5yZW5kZXIoZnVuY3Rpb24gKCkge1xuICBjb25zdCBkdWVEYXRlID0gY2hlY2tsaXN0SXRlbXNbaW5kZXhdLmR1ZURhdGU7XG4gIGlmIChkdWVEYXRlKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZS1idG4nKS5jbGFzc0xpc3QucmVtb3ZlKCd1LWhpZGRlbicpO1xuICB9XG5cbiAgaWYgKCFwaWNrZXIpIHtcbiAgICBjb25zdCBkZWZhdWx0RGF0ZSA9IGR1ZURhdGUgPyBtb21lbnQudW5peChkdWVEYXRlIC8gMTAwMCkudG9EYXRlKCkgOiBub3c7XG4gICAgY29uc29sZS5sb2coJ2R1ZWRhdGUnLCBkdWVEYXRlKTtcblxuICAgIGlmIChkdWVEYXRlKSB7XG4gICAgICBjb25zdCB0aW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZS1pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICB0aW1lSW5wdXQudmFsdWUgPSBtb21lbnQoZHVlRGF0ZSkuZm9ybWF0KFRJTUVfRk9STUFUKTtcbiAgICB9XG5cbiAgICBwaWNrZXIgPSBuZXcgUGlrYWRheSh7XG4gICAgICBib3VuZDogZmFsc2UsXG4gICAgICBmb3JtYXQ6ICdNTS9ERC9ZWVlZJyxcbiAgICAgIGRlZmF1bHREYXRlLFxuICAgICAgc2V0RGVmYXVsdERhdGU6IHRydWUsXG4gICAgICBjb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlcGlja2VyJyksXG4gICAgICBmaWVsZDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtaW5wdXQnKSxcbiAgICAgIGtleWJvYXJkSW5wdXQ6IGZhbHNlLCAvLyBvdGhlcndpc2UgYWxsIGFycm93IGtleSBwcmVzc2VzIHdoaWxlIHBvcC11cCBpcyBvcGVuIGNoYW5nZSB0aGUgZGF0ZVxuICAgICAgaTE4bixcbiAgICAgIG9uRHJhdzogZnVuY3Rpb24gKCk6IHZvaWQge1xuICAgICAgICByZXNpemUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldFVzZXJzKHQpLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgaWYgKHVzZXJzICYmIHVzZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXQtbm90aWZpY2F0aW9ucycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90aWZpY2F0aW9uLXNldHVwJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5jb25zdCBnZXROb3RpZmljYXRpb25UaW1lID0gKGR1ZURhdGU6IG51bWJlciwgbWludXRlczogbnVtYmVyKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gIGNvbnN0IG5vdGlmaWNhdGlvblRpbWUgPSAoZHVlRGF0ZSAtIG1pbnV0ZXMgKiA2MCAqIDEwMDApO1xuICBpZiAobW9tZW50LnV0YygpLnZhbHVlT2YoKSA8IG5vdGlmaWNhdGlvblRpbWUpIHtcbiAgICByZXR1cm4gbm90aWZpY2F0aW9uVGltZS50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsOyAvLyBSZXR1cm4gbnVsbCBpZiB0aGUgbm90aWZpY2F0aW9uIHRpbWUgd2FzIGluIHRoZSBwYXN0XG4gIH1cbn07XG5cbmNvbnN0IGdldEFuZFNldE5vdGlmaWNhdGlvbiA9IChkdWVUaW1lSW5TZWNvbmRzOiBudW1iZXIsIG1pbnV0ZXM6IG51bWJlcik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBjb25zdCB1c2VybmFtZSA9IGNoZWNrbGlzdEl0ZW1zW2luZGV4XS51c2VybmFtZTtcblxuICBpZiAobWludXRlcyA+IC0xICYmIHVzZXJuYW1lKSB7XG4gICAgY29uc3QgeyB1c2VySWQsIHRleHQsIGlkIH0gPSBjaGVja2xpc3RJdGVtc1tpbmRleF07XG4gICAgY29uc3QgeyBjYXJkOiBjYXJkSWQsIGJvYXJkOiBib2FyZElkIH0gPSB0LmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGl0ZW1JZCA9IGlkID8gaWQgOiBnZW5lcmF0ZVV1aWQoKTtcblxuICAgIGNvbnN0IGR1ZVRpbWUgPSBkdWVUaW1lSW5TZWNvbmRzICogMTAwMDtcblxuICAgIGNvbnN0IG5vdGlmaWNhdGlvblRpbWU6IHN0cmluZyB8IG51bGwgPSBnZXROb3RpZmljYXRpb25UaW1lKGR1ZVRpbWUsIG1pbnV0ZXMpO1xuICAgIGlmIChub3RpZmljYXRpb25UaW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkYXRhID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7IGl0ZW1JZCwgY2FyZElkLCBib2FyZElkLCB1c2VybmFtZSwgdXNlcklkLCBpdGVtOiB0ZXh0LCBkdWVUaW1lOiBkdWVUaW1lLnRvU3RyaW5nKCksIG5vdGlmaWNhdGlvblRpbWUgfSk7XG4gICAgICByZXR1cm4gYXhpb3MoeyBtZXRob2Q6ICdwb3N0JywgdXJsOiBgJHt1cmx9L25vdGlmaWNhdGlvbmAsIGRhdGEgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUtaW5wdXQnKS5vbmJsdXIgPSAoKTogdm9pZCA9PiB7XG4gIGNvbnN0IHRpbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lLWlucHV0JykgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgaWYgKCFtb21lbnQodGltZUlucHV0LnZhbHVlLCBUSU1FX0ZPUk1BVCkuaXNWYWxpZCgpKSB7XG4gICAgdGltZUlucHV0LnZhbHVlID0gJzEyOjAwIFBNJztcbiAgfVxufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRpbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lLWlucHV0JykgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgbGV0IHRpbWVNb21lbnQgPSBtb21lbnQodGltZUlucHV0LnZhbHVlLCBUSU1FX0ZPUk1BVCk7XG4gIGlmICghdGltZU1vbWVudC5pc1ZhbGlkKCkpIHtcbiAgICB0aW1lTW9tZW50ID0gbW9tZW50KCcxMjowMCBQTScsIFRJTUVfRk9STUFUKTtcbiAgfVxuICBjb25zdCB1bml4VGltZUluU2Vjb25kcyA9IHBpY2tlci5nZXRNb21lbnQoKS5ob3VyKHRpbWVNb21lbnQuaG91cigpKS5taW51dGUodGltZU1vbWVudC5taW51dGUoKSkudW5peCgpO1xuXG4gIGNvbnN0IGRpc3BsYXlEYXRlID0gcGlja2VyLmdldE1vbWVudCgpLmhvdXIodGltZU1vbWVudC5ob3VyKCkpLm1pbnV0ZSh0aW1lTW9tZW50Lm1pbnV0ZSgpKS5mb3JtYXQoJ0QgTU1NIGg6bW0gQScpO1xuICBjaGVja2xpc3RJdGVtc1tpbmRleF0uZHVlRGF0ZSA9IHVuaXhUaW1lSW5TZWNvbmRzICogMTAwMDtcbiAgY2hlY2tsaXN0SXRlbXNbaW5kZXhdLmR1ZURhdGVGcmllbmRseSA9IGRpc3BsYXlEYXRlO1xuXG4gIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1pbmRlci1zZWxlY3QnKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgY2hlY2tsaXN0SXRlbXNbaW5kZXhdLm5vdGlmaWNhdGlvbk9mZnNldCA9IHNlbGVjdC52YWx1ZTtcblxuICBnZXRBbmRTZXROb3RpZmljYXRpb24odW5peFRpbWVJblNlY29uZHMsIHBhcnNlSW50KHNlbGVjdC52YWx1ZSwgMTApKS50aGVuKCgpID0+IHtcbiAgICBzZXRJdGVtcyh0LCBjaGVja2xpc3RJdGVtcykudGhlbigoKSA9PiB7XG4gICAgICB0LmNsb3NlUG9wdXAoKTtcbiAgICB9KTtcbiAgfSkuY2F0Y2goKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igc2V0dGluZyBub3RpZmljYXRpb25cIik7XG4gICAgLy8gVE9ETzogZXJyb3IgaGFuZGxpbmcgZm9yIG5vdGlmaWNhdGlvbiBmYWlsdXJlICg/KVxuICB9KTtcbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBjaGVja2xpc3RJdGVtc1tpbmRleF0uZHVlRGF0ZSA9IHVuZGVmaW5lZDtcbiAgY2hlY2tsaXN0SXRlbXNbaW5kZXhdLmR1ZURhdGVGcmllbmRseSA9IHVuZGVmaW5lZDtcblxuICBzZXRJdGVtcyh0LCBjaGVja2xpc3RJdGVtcykudGhlbigoKSA9PiB7XG4gICAgdC5jbG9zZVBvcHVwKCk7XG4gIH0pO1xufSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZmljYXRpb24tc2V0dXAnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHQubW9kYWwoe1xuICAgIHVybDogJy4vbm90aWZpY2F0aW9ucy5odG1sJyxcbiAgICBoZWlnaHQ6IDM2MCxcbiAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICB0aXRsZTogJ0NoZWNrbGlzdCsgTm90aWZpY2F0aW9ucydcbiAgfSk7XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBS0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/due-date.ts\n");

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