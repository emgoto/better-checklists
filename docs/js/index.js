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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _trello_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trello-util */ \"./src/trello-util.ts\");\n\nwindow.Promise = TrelloPowerUp.Promise;\nlet checklist;\n// We need to call initialize to get all of our capability handles set up and registered with Trello\nTrelloPowerUp.initialize({\n    'card-buttons': function (t, opts) {\n        // check that viewing member has write permissions on this board\n        if (opts.context.permissions.board !== 'write') {\n            return [];\n        }\n        return [{\n                text: 'Checklist+',\n                icon: `${window.location}img/icon.svg`,\n                callback: function (context) {\n                    return context.popup({\n                        title: 'Add Checklist+',\n                        url: './settings.html',\n                    });\n                }\n            }];\n    },\n    'card-back-section': function (t, options) {\n        return Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"getItems\"])(t).then((items) => {\n            if (items) {\n                if (checklist) {\n                    return checklist;\n                }\n                // We do this to prevent the iframe from re-initialising \n                // Technically the t.render should prevent this, but it's not.\n                checklist = {\n                    title: 'Checklist+',\n                    icon: `${window.location}img/icon.svg`,\n                    content: {\n                        type: 'iframe',\n                        url: t.signUrl('./checklist.html', { items }),\n                        height: 280,\n                    },\n                };\n                return checklist;\n            }\n        }).catch((e) => console.log('Failed to render card-back-section', e));\n    },\n}, {\n    appKey: 'bd1e7e486269d148ecd1be71ad5a3f1a',\n    appName: 'Checklist+'\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LnRzP2M2YWUiXSwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBjb25zdCBUcmVsbG9Qb3dlclVwOiBhbnk7XG5cbmltcG9ydCB7IGdldEl0ZW1zIH0gZnJvbSAnLi90cmVsbG8tdXRpbCc7XG5cbndpbmRvdy5Qcm9taXNlID0gVHJlbGxvUG93ZXJVcC5Qcm9taXNlO1xuXG5sZXQgY2hlY2tsaXN0O1xuXG4vLyBXZSBuZWVkIHRvIGNhbGwgaW5pdGlhbGl6ZSB0byBnZXQgYWxsIG9mIG91ciBjYXBhYmlsaXR5IGhhbmRsZXMgc2V0IHVwIGFuZCByZWdpc3RlcmVkIHdpdGggVHJlbGxvXG5UcmVsbG9Qb3dlclVwLmluaXRpYWxpemUoe1xuICAnY2FyZC1idXR0b25zJzogZnVuY3Rpb24gKHQsIG9wdHMpIHtcbiAgICAvLyBjaGVjayB0aGF0IHZpZXdpbmcgbWVtYmVyIGhhcyB3cml0ZSBwZXJtaXNzaW9ucyBvbiB0aGlzIGJvYXJkXG4gICAgaWYgKG9wdHMuY29udGV4dC5wZXJtaXNzaW9ucy5ib2FyZCAhPT0gJ3dyaXRlJykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gW3tcbiAgICAgIHRleHQ6ICdDaGVja2xpc3QrJyxcbiAgICAgIGljb246IGAke3dpbmRvdy5sb2NhdGlvbn1pbWcvaWNvbi5zdmdgLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBjb250ZXh0LnBvcHVwKHtcbiAgICAgICAgICB0aXRsZTogJ0FkZCBDaGVja2xpc3QrJyxcbiAgICAgICAgICB1cmw6ICcuL3NldHRpbmdzLmh0bWwnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XTtcbiAgfSxcbiAgJ2NhcmQtYmFjay1zZWN0aW9uJzogZnVuY3Rpb24gKHQsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZ2V0SXRlbXModCkudGhlbigoaXRlbXMpID0+IHtcbiAgICAgIGlmIChpdGVtcykge1xuICAgICAgICBpZiAoY2hlY2tsaXN0KSB7XG4gICAgICAgICAgcmV0dXJuIGNoZWNrbGlzdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIGRvIHRoaXMgdG8gcHJldmVudCB0aGUgaWZyYW1lIGZyb20gcmUtaW5pdGlhbGlzaW5nIFxuICAgICAgICAvLyBUZWNobmljYWxseSB0aGUgdC5yZW5kZXIgc2hvdWxkIHByZXZlbnQgdGhpcywgYnV0IGl0J3Mgbm90LlxuICAgICAgICBjaGVja2xpc3QgPSB7XG4gICAgICAgICAgdGl0bGU6ICdDaGVja2xpc3QrJyxcbiAgICAgICAgICBpY29uOiBgJHt3aW5kb3cubG9jYXRpb259aW1nL2ljb24uc3ZnYCxcbiAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAnaWZyYW1lJyxcbiAgICAgICAgICAgIHVybDogdC5zaWduVXJsKCcuL2NoZWNrbGlzdC5odG1sJywgeyBpdGVtcyB9KSxcbiAgICAgICAgICAgIGhlaWdodDogMjgwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjaGVja2xpc3Q7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gcmVuZGVyIGNhcmQtYmFjay1zZWN0aW9uJywgZSkpO1xuICB9LFxufSxcbiAge1xuICAgIGFwcEtleTogJ2JkMWU3ZTQ4NjI2OWQxNDhlY2QxYmU3MWFkNWEzZjFhJyxcbiAgICBhcHBOYW1lOiAnQ2hlY2tsaXN0KydcbiAgfSk7XG4iXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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