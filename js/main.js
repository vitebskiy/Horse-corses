/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// accordion

const triggers = document.querySelectorAll('[data-toggle="collapse"]');
let activeToggle;
triggers && triggers.forEach(trigger => {
  trigger.collapseTarget = document.querySelector(trigger.hash || trigger.dataset.target);
  trigger.collapseTarget.dataset.parent && trigger.collapseTarget.classList.contains("is-active") && (activeToggle = trigger);
  trigger.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();
    toggle(trigger);
  });

  // Remove height when end open transition
  trigger.collapseTarget.addEventListener("transitionend", _ref => {
    let {
      target
    } = _ref;
    if (!target.classList.contains("is-active")) return;
    target.style.height = null;
  });
});
function toggle(trigger) {
  if (trigger.collapseTarget.classList.contains("is-active")) {
    close(trigger);
    activeToggle = null;
  } else {
    activeToggle && activeToggle.collapseTarget.dataset.parent && close(activeToggle);
    trigger.collapseTarget.dataset.parent && (activeToggle = trigger);
    open(trigger);
  }
}
function close(trigger) {
  setHeight(trigger.collapseTarget);
  trigger.parentElement.classList.remove("is-active");
  trigger.classList.remove("is-active");
  trigger.collapseTarget.classList.remove("is-active");
  setTimeout(() => {
    trigger.collapseTarget.style.height = null;
  }, 0);
}
function open(trigger) {
  trigger.classList.add("is-active");
  trigger.parentElement.classList.add("is-active");
  setTimeout(() => {
    setHeight(trigger.collapseTarget);
    trigger.collapseTarget.classList.add("is-active");
  }, 0);
}
function setHeight(target) {
  target.style.height = target.scrollHeight + "px";
}

// Отзывы

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components.js */ "./src/js/_components.js");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map