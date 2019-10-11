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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _trello_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trello-util */ \"./src/trello-util.ts\");\n\nconst t = TrelloPowerUp.iframe();\nconst checklistItems = t.arg('checklistItems');\nconst index = t.arg('index');\nconst now = moment().toDate();\nlet picker;\nconst TIME_FORMAT = 'LT';\nconst resize = function () {\n    t.sizeTo('.dpicker-widget');\n};\n// To change the names of the buttons (as they were too long)\nconst i18n = {\n    previousMonth: 'Prev',\n    nextMonth: 'Next',\n    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],\n    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],\n    weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']\n};\nt.render(function () {\n    const dueDate = checklistItems[index].dueDate;\n    if (dueDate) {\n        document.getElementById('remove-btn').classList.remove('u-hidden');\n    }\n    if (!picker) {\n        const defaultDate = moment.unix(dueDate).toDate() || now;\n        picker = new Pikaday({\n            bound: false,\n            format: 'MM/DD/YYYY',\n            defaultDate,\n            setDefaultDate: true,\n            container: document.getElementById('datepicker'),\n            field: document.getElementById('date-input'),\n            i18n,\n            onDraw: function () {\n                resize();\n            }\n        });\n    }\n});\ndocument.getElementById('time-input').onblur = () => {\n    const timeInput = document.getElementById('time-input');\n    if (!moment(timeInput.value, TIME_FORMAT).isValid()) {\n        timeInput.value = '12:00 PM';\n    }\n};\ndocument.getElementById('save-btn').addEventListener('click', function () {\n    const timeInput = document.getElementById('time-input');\n    let timeMoment = moment(timeInput.value, TIME_FORMAT);\n    if (!timeMoment.isValid()) {\n        timeMoment = moment('12:00 PM', TIME_FORMAT);\n    }\n    const unixTime = picker.getMoment().hour(timeMoment.hour()).minute(timeMoment.minute()).unix();\n    const displayDate = picker.getMoment().hour(timeMoment.hour()).minute(timeMoment.minute()).format('D MMM h:mm A');\n    checklistItems[index].dueDate = unixTime;\n    checklistItems[index].dueDateFriendly = displayDate;\n    Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"setItems\"])(t, checklistItems).then(() => {\n        t.closePopup();\n    });\n});\ndocument.getElementById('remove-btn').addEventListener('click', function () {\n    checklistItems[index].dueDate = undefined;\n    checklistItems[index].dueDateFriendly = undefined;\n    Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"setItems\"])(t, checklistItems).then(() => {\n        t.closePopup();\n    });\n});\ndocument.getElementById('notification-setup').addEventListener('click', function () {\n    return t.modal({\n        url: './notifications.html',\n        height: 360,\n        fullscreen: false,\n        title: 'Checklist+ Notifications'\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZHVlLWRhdGUudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2R1ZS1kYXRlLnRzPzYzZDAiXSwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBjb25zdCBUcmVsbG9Qb3dlclVwOiBhbnk7XG5kZWNsYXJlIGNvbnN0IG1vbWVudDogYW55O1xuZGVjbGFyZSBjb25zdCBQaWthZGF5OiBhbnk7XG5cbmltcG9ydCB7IHNldEl0ZW1zIH0gZnJvbSAnLi90cmVsbG8tdXRpbCc7XG5cbmNvbnN0IHQgPSBUcmVsbG9Qb3dlclVwLmlmcmFtZSgpO1xuY29uc3QgY2hlY2tsaXN0SXRlbXMgPSB0LmFyZygnY2hlY2tsaXN0SXRlbXMnKTtcbmNvbnN0IGluZGV4ID0gdC5hcmcoJ2luZGV4Jyk7XG5jb25zdCBub3cgPSBtb21lbnQoKS50b0RhdGUoKTtcbmxldCBwaWNrZXI7XG5jb25zdCBUSU1FX0ZPUk1BVCA9ICdMVCc7XG5cbmNvbnN0IHJlc2l6ZSA9IGZ1bmN0aW9uICgpOiB2b2lkIHtcbiAgdC5zaXplVG8oJy5kcGlja2VyLXdpZGdldCcpO1xufTtcblxuLy8gVG8gY2hhbmdlIHRoZSBuYW1lcyBvZiB0aGUgYnV0dG9ucyAoYXMgdGhleSB3ZXJlIHRvbyBsb25nKVxuY29uc3QgaTE4biA9IHtcbiAgcHJldmlvdXNNb250aDogJ1ByZXYnLFxuICBuZXh0TW9udGg6ICdOZXh0JyxcbiAgbW9udGhzOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXSxcbiAgd2Vla2RheXM6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXSxcbiAgd2Vla2RheXNTaG9ydDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXVxufTtcblxudC5yZW5kZXIoZnVuY3Rpb24gKCkge1xuICBjb25zdCBkdWVEYXRlID0gY2hlY2tsaXN0SXRlbXNbaW5kZXhdLmR1ZURhdGU7XG4gIGlmIChkdWVEYXRlKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZS1idG4nKS5jbGFzc0xpc3QucmVtb3ZlKCd1LWhpZGRlbicpO1xuICB9XG5cbiAgaWYgKCFwaWNrZXIpIHtcbiAgICBjb25zdCBkZWZhdWx0RGF0ZSA9IG1vbWVudC51bml4KGR1ZURhdGUpLnRvRGF0ZSgpIHx8IG5vdztcblxuICAgIHBpY2tlciA9IG5ldyBQaWthZGF5KHtcbiAgICAgIGJvdW5kOiBmYWxzZSxcbiAgICAgIGZvcm1hdDogJ01NL0REL1lZWVknLFxuICAgICAgZGVmYXVsdERhdGUsXG4gICAgICBzZXREZWZhdWx0RGF0ZTogdHJ1ZSxcbiAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVwaWNrZXInKSxcbiAgICAgIGZpZWxkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1pbnB1dCcpLFxuICAgICAgaTE4bixcbiAgICAgIG9uRHJhdzogZnVuY3Rpb24gKCk6IHZvaWQge1xuICAgICAgICByZXNpemUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lLWlucHV0Jykub25ibHVyID0gKCk6IHZvaWQgPT4ge1xuICBjb25zdCB0aW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZS1pbnB1dCcpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gIGlmICghbW9tZW50KHRpbWVJbnB1dC52YWx1ZSwgVElNRV9GT1JNQVQpLmlzVmFsaWQoKSkge1xuICAgIHRpbWVJbnB1dC52YWx1ZSA9ICcxMjowMCBQTSc7XG4gIH1cbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCB0aW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZS1pbnB1dCcpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gIGxldCB0aW1lTW9tZW50ID0gbW9tZW50KHRpbWVJbnB1dC52YWx1ZSwgVElNRV9GT1JNQVQpO1xuICBpZiAoIXRpbWVNb21lbnQuaXNWYWxpZCgpKSB7XG4gICAgdGltZU1vbWVudCA9IG1vbWVudCgnMTI6MDAgUE0nLCBUSU1FX0ZPUk1BVCk7XG4gIH1cbiAgY29uc3QgdW5peFRpbWUgPSBwaWNrZXIuZ2V0TW9tZW50KCkuaG91cih0aW1lTW9tZW50LmhvdXIoKSkubWludXRlKHRpbWVNb21lbnQubWludXRlKCkpLnVuaXgoKTtcbiAgY29uc3QgZGlzcGxheURhdGUgPSBwaWNrZXIuZ2V0TW9tZW50KCkuaG91cih0aW1lTW9tZW50LmhvdXIoKSkubWludXRlKHRpbWVNb21lbnQubWludXRlKCkpLmZvcm1hdCgnRCBNTU0gaDptbSBBJyk7XG4gIGNoZWNrbGlzdEl0ZW1zW2luZGV4XS5kdWVEYXRlID0gdW5peFRpbWU7XG4gIGNoZWNrbGlzdEl0ZW1zW2luZGV4XS5kdWVEYXRlRnJpZW5kbHkgPSBkaXNwbGF5RGF0ZTtcblxuICBzZXRJdGVtcyh0LCBjaGVja2xpc3RJdGVtcykudGhlbigoKSA9PiB7XG4gICAgdC5jbG9zZVBvcHVwKCk7XG4gIH0pO1xufSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1vdmUtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGNoZWNrbGlzdEl0ZW1zW2luZGV4XS5kdWVEYXRlID0gdW5kZWZpbmVkO1xuICBjaGVja2xpc3RJdGVtc1tpbmRleF0uZHVlRGF0ZUZyaWVuZGx5ID0gdW5kZWZpbmVkO1xuXG4gIHNldEl0ZW1zKHQsIGNoZWNrbGlzdEl0ZW1zKS50aGVuKCgpID0+IHtcbiAgICB0LmNsb3NlUG9wdXAoKTtcbiAgfSk7XG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGlmaWNhdGlvbi1zZXR1cCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdC5tb2RhbCh7XG4gICAgdXJsOiAnLi9ub3RpZmljYXRpb25zLmh0bWwnLFxuICAgIGhlaWdodDogMzYwLFxuICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxuICAgIHRpdGxlOiAnQ2hlY2tsaXN0KyBOb3RpZmljYXRpb25zJ1xuICB9KTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFJQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/due-date.ts\n");

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