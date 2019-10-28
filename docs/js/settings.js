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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/settings.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/settings.ts":
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _trello_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trello-util */ \"./src/trello-util.ts\");\n\nconst t = TrelloPowerUp.iframe();\ndocument.getElementById('enable-btn').addEventListener('click', function () {\n    return Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"setItems\"])(t, [])\n        .then(function () {\n        t.closePopup();\n    }).catch(function (e) {\n        console.log('failed to setItems', e);\n    });\n});\n// Removes list when user presses delete button\ndocument.getElementById('remove-btn').addEventListener('click', function () {\n    return Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"setItems\"])(t, null)\n        .then(function () {\n        t.closePopup();\n    }).catch(function (e) {\n        console.log('failed to setItems', e);\n    });\n});\nt.render(function () {\n    Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"getIsChecklistEnabled\"])(t)\n        .then(function (enabled) {\n        if (enabled) {\n            document.getElementById('remove-btn').classList.remove('u-hidden');\n        }\n        else {\n            console.log(document.getElementById('enable-btn'));\n            document.getElementById('enable-btn').classList.remove('u-hidden');\n        }\n        return Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"getToken\"])(t).then((token) => {\n            console.log('token', token);\n            if (!token) {\n                document.getElementById('authorization').classList.remove('u-hidden');\n            }\n        });\n    }).catch(function (e) {\n        console.log('Error rendering settings', e);\n    }).finally(function () {\n        t.sizeTo(document.body);\n    });\n});\n// // Brings up information modal when user clicks \"How to use Checklist+\"\n// document.getElementById('how-to-use').addEventListener('click', function(){\n//   return t.modal({\n//     url: './modal.html',\n//     height: 360,\n//     fullscreen: false,\n//     title: 'Checklist+'\n//   })\n// });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2V0dGluZ3MudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3NldHRpbmdzLnRzP2MxNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0SXNDaGVja2xpc3RFbmFibGVkLCBzZXRJdGVtcywgZ2V0VG9rZW4gfSBmcm9tICcuL3RyZWxsby11dGlsJztcbmRlY2xhcmUgY29uc3QgVHJlbGxvUG93ZXJVcDogYW55O1xuY29uc3QgdCA9IFRyZWxsb1Bvd2VyVXAuaWZyYW1lKCk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmFibGUtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBzZXRJdGVtcyh0LCBbXSlcbiAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICB0LmNsb3NlUG9wdXAoKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc29sZS5sb2coJ2ZhaWxlZCB0byBzZXRJdGVtcycsIGUpO1xuICAgIH0pO1xufSk7XG5cbi8vIFJlbW92ZXMgbGlzdCB3aGVuIHVzZXIgcHJlc3NlcyBkZWxldGUgYnV0dG9uXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gc2V0SXRlbXModCwgbnVsbClcbiAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICB0LmNsb3NlUG9wdXAoKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc29sZS5sb2coJ2ZhaWxlZCB0byBzZXRJdGVtcycsIGUpO1xuICAgIH0pO1xufSk7XG5cbnQucmVuZGVyKGZ1bmN0aW9uICgpIHtcbiAgZ2V0SXNDaGVja2xpc3RFbmFibGVkKHQpXG4gICAgLnRoZW4oZnVuY3Rpb24gKGVuYWJsZWQpIHtcbiAgICAgIGlmIChlbmFibGVkKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1vdmUtYnRuJykuY2xhc3NMaXN0LnJlbW92ZSgndS1oaWRkZW4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmFibGUtYnRuJykpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5hYmxlLWJ0bicpLmNsYXNzTGlzdC5yZW1vdmUoJ3UtaGlkZGVuJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRUb2tlbih0KS50aGVuKCh0b2tlbikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygndG9rZW4nLCB0b2tlbik7XG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aG9yaXphdGlvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ3UtaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciByZW5kZXJpbmcgc2V0dGluZ3MnLCBlKTtcbiAgICB9KS5maW5hbGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgIHQuc2l6ZVRvKGRvY3VtZW50LmJvZHkpO1xuICAgIH0pO1xufSk7XG5cbi8vIC8vIEJyaW5ncyB1cCBpbmZvcm1hdGlvbiBtb2RhbCB3aGVuIHVzZXIgY2xpY2tzIFwiSG93IHRvIHVzZSBDaGVja2xpc3QrXCJcbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3ctdG8tdXNlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuLy8gICByZXR1cm4gdC5tb2RhbCh7XG4vLyAgICAgdXJsOiAnLi9tb2RhbC5odG1sJyxcbi8vICAgICBoZWlnaHQ6IDM2MCxcbi8vICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbi8vICAgICB0aXRsZTogJ0NoZWNrbGlzdCsnXG4vLyAgIH0pXG4vLyB9KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/settings.ts\n");

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