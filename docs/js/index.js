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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getItems\", function() { return getItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setItems\", function() { return setItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIsChecklistEnabled\", function() { return getIsChecklistEnabled; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getToken\", function() { return getToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setToken\", function() { return setToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUsers\", function() { return getUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUsers\", function() { return setUsers; });\nconst getItems = (t) => t.get('card', 'shared', 'items');\nconst setItems = (t, items) => t.set('card', 'shared', 'items', items);\nconst getIsChecklistEnabled = (t) => getItems(t).then((items) => items ? true : false);\nconst getToken = (t) => t.get('member', 'private', 'authToken');\nconst setToken = (t, token) => t.set('member', 'private', 'authToken', token);\nconst getUsers = (t) => t.get('board', 'shared', 'users');\nconst setUsers = (t, users) => t.set('board', 'shared', 'users', users);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHJlbGxvLXV0aWwudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3RyZWxsby11dGlsLnRzP2JhYjciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgQ2hlY2tsaXN0SXRlbSA9IHtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgaWQ/OiBzdHJpbmc7IC8vIHV1aWQgLSBvbmx5IHJlcXVpcmVkIG9uY2Ugbm90aWZpY2F0aW9uIGlzIGJlaW5nIHVzZWRcbiAgICBpc0NvbXBsZXRlPzogYm9vbGVhbjtcbiAgICB1c2VybmFtZT86IHN0cmluZztcbiAgICBmdWxsTmFtZT86IHN0cmluZztcbiAgICB1c2VySWQ/OiBzdHJpbmc7XG4gICAgYXZhdGFySGFzaD86IHN0cmluZzsvLyBsYXN0IGtub3duIGF2YXRhckhhc2ggLy9UT0RPOiBuZWVkIHRvIHJlLWdldCBpdCBpbiBjYXNlIGl0IGhhcyBjaGFuZ2VkXG4gICAgZHVlRGF0ZT86IG51bWJlcjtcbiAgICBkdWVEYXRlRnJpZW5kbHk/OiBzdHJpbmc7IC8vIERhdGUgaW4gaHVtYW4gcmVhZGJhYmxlIGZvcm1hdCBlLmcuIDEgSmFuIDEyOjAwcG1cbiAgICBub3RpZmljYXRpb25PZmZzZXQ/OiBudW1iZXI7IC8vIE1pbnV0ZXMgYmVmb3JlIHRoZSBkdWVUaW1lIHdlIHdhbnQgdG8gc2VuZCB0aGUgbm90aWZpY2F0aW9uLiAtMSBpZiBubyBub3RpZmljYXRpb24uXG59XG5cbmV4cG9ydCB0eXBlIFVzZXIgPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB1c2VybmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0SXRlbXMgPSAodCk6IFByb21pc2U8Q2hlY2tsaXN0SXRlbVtdPiA9PiB0LmdldCgnY2FyZCcsICdzaGFyZWQnLCAnaXRlbXMnKTtcbmV4cG9ydCBjb25zdCBzZXRJdGVtcyA9ICh0LCBpdGVtczogQ2hlY2tsaXN0SXRlbVtdKTogUHJvbWlzZTxDaGVja2xpc3RJdGVtW10+ID0+IHQuc2V0KCdjYXJkJywgJ3NoYXJlZCcsICdpdGVtcycsIGl0ZW1zKTtcbmV4cG9ydCBjb25zdCBnZXRJc0NoZWNrbGlzdEVuYWJsZWQgPSAodCk6IFByb21pc2U8Ym9vbGVhbj4gPT4gZ2V0SXRlbXModCkudGhlbigoaXRlbXM6IENoZWNrbGlzdEl0ZW1bXSkgPT4gaXRlbXMgPyB0cnVlIDogZmFsc2UpO1xuZXhwb3J0IGNvbnN0IGdldFRva2VuID0gKHQpOiBQcm9taXNlPHN0cmluZz4gPT4gdC5nZXQoJ21lbWJlcicsICdwcml2YXRlJywgJ2F1dGhUb2tlbicpO1xuZXhwb3J0IGNvbnN0IHNldFRva2VuID0gKHQsIHRva2VuKTogUHJvbWlzZTx2b2lkPiA9PiB0LnNldCgnbWVtYmVyJywgJ3ByaXZhdGUnLCAnYXV0aFRva2VuJywgdG9rZW4pO1xuZXhwb3J0IGNvbnN0IGdldFVzZXJzID0gKHQpOiBQcm9taXNlPFVzZXJbXT4gPT4gdC5nZXQoJ2JvYXJkJywgJ3NoYXJlZCcsICd1c2VycycpO1xuZXhwb3J0IGNvbnN0IHNldFVzZXJzID0gKHQsIHVzZXJzOiBVc2VyW10pOiBQcm9taXNlPHZvaWQ+ID0+IHQuc2V0KCdib2FyZCcsICdzaGFyZWQnLCAndXNlcnMnLCB1c2Vycyk7Il0sIm1hcHBpbmdzIjoiQUFrQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/trello-util.ts\n");

/***/ })

/******/ });