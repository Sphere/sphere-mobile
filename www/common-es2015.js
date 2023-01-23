(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ "./node_modules/@ionic/core/dist/esm/index-34cb2743.js");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "./node_modules/@ionic/core/dist/esm/helpers-dd7e4b7b.js");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div class=\"pentagon-container\">\n    <img\n      #nynPentagon\n      id=\"nynTop\"\n      [src]=\"'/assets/images/marketing/' + svgFileName + '.svg'\"\n      height=\"100%\"\n      width=\"100%\"\n      i18n-alt\n      alt=\"Pentagon\"\n    />\n    <div class=\"div1\" (click)=\"onTrackClicked(0)\"></div>\n    <div class=\"div2\" (click)=\"onTrackClicked(1)\"></div>\n    <div class=\"div3\" (click)=\"onTrackClicked(2)\"></div>\n    <div class=\"div4\" (click)=\"onTrackClicked(3)\"></div>\n    <div class=\"div5\" (click)=\"onTrackClicked(4)\"></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/feedback-v2/resolvers/feedback-config.resolver.ts":
/*!*****************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/feedback-v2/resolvers/feedback-config.resolver.ts ***!
  \*****************************************************************************************/
/*! exports provided: FeedbackConfigResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackConfigResolver", function() { return FeedbackConfigResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");





let FeedbackConfigResolver = class FeedbackConfigResolver {
    constructor(feedbackApi) {
        this.feedbackApi = feedbackApi;
    }
    resolve() {
        try {
            return this.feedbackApi.getFeedbackConfig().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(config => {
                return {
                    data: config,
                    error: null,
                };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => {
                const result = {
                    data: null,
                    error: 'FEEDBACK_CONFIG_API_ERROR',
                };
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
            }));
        }
        catch (err) {
            const result = {
                data: null,
                error: 'FEEDBACK_CONFIG_RESOLVER_ERROR',
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        }
    }
};
FeedbackConfigResolver.ctorParameters = () => [
    { type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["FeedbackService"] }
];
FeedbackConfigResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FeedbackConfigResolver);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/feedback-v2/resolvers/feedback-summary.resolver.ts":
/*!******************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/feedback-v2/resolvers/feedback-summary.resolver.ts ***!
  \******************************************************************************************/
/*! exports provided: FeedbackSummaryResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackSummaryResolver", function() { return FeedbackSummaryResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");





let FeedbackSummaryResolver = class FeedbackSummaryResolver {
    constructor(feedbackApi) {
        this.feedbackApi = feedbackApi;
    }
    resolve() {
        try {
            return this.feedbackApi.getFeedbackSummary().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(summary => {
                return {
                    data: summary,
                    error: null,
                };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => {
                const result = {
                    data: null,
                    error: 'FEEDBACK_SUMMARY_API_ERROR',
                };
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
            }));
        }
        catch (err) {
            const result = {
                data: null,
                error: 'FEEDBACK_SUMMARY_RESOLVER_ERROR',
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        }
    }
};
FeedbackSummaryResolver.ctorParameters = () => [
    { type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["FeedbackService"] }
];
FeedbackSummaryResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FeedbackSummaryResolver);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.component.scss":
/*!**********************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pentagon-container {\n  position: relative;\n  margin: auto;\n  height: 275px;\n  width: 275px;\n  background: #fafafa;\n  padding: 16px;\n}\n\n.div1,\n.div2,\n.div3,\n.div4,\n.div5 {\n  position: absolute;\n  background-color: transparent;\n  height: 50px;\n  width: 100px;\n}\n\n.div1:hover,\n.div2:hover,\n.div3:hover,\n.div4:hover,\n.div5:hover {\n  cursor: pointer;\n}\n\n.div1 {\n  bottom: 25px;\n  left: 102px;\n}\n\n.div2 {\n  bottom: 86px;\n  left: 187px;\n  transform: rotate(-72deg);\n}\n\n.div3 {\n  top: 68px;\n  right: 52px;\n  transform: rotate(36deg);\n}\n\n.div4 {\n  top: 69px;\n  left: 49px;\n  transform: rotate(-36deg);\n}\n\n.div5 {\n  bottom: 86px;\n  left: 15px;\n  transform: rotate(72deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9tYXJrZXRpbmcvcGVudGFnb24vcGVudGFnb24uY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvc3R5bGVzL193cy12YXJzLnNjc3MiLCJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9tYXJrZXRpbmcvcGVudGFnb24vcGVudGFnb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUNHTztBQ0pUOztBRklBOzs7OztFQUtFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRURGOztBRkdFOzs7OztFQUVFLGVBQUE7QUVFSjs7QUZFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FFQ0Y7O0FGRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FFQ0Y7O0FGRUE7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0FFQ0Y7O0FGRUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FFQ0Y7O0FGRUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0FFQ0YiLCJmaWxlIjoicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvbWFya2V0aW5nL3BlbnRhZ29uL3BlbnRhZ29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuXG4ucGVudGFnb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMjc1cHg7XG4gIHdpZHRoOiAyNzVweDtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgcGFkZGluZzogJHNpemUtbTtcbn1cblxuLmRpdjEsXG4uZGl2Mixcbi5kaXYzLFxuLmRpdjQsXG4uZGl2NSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMHB4O1xuXG4gICY6aG92ZXIge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsMzMsMzMsMC43NSlcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmRpdjEge1xuICBib3R0b206IDI1cHg7XG4gIGxlZnQ6IDEwMnB4O1xufVxuXG4uZGl2MiB7XG4gIGJvdHRvbTogODZweDtcbiAgbGVmdDogMTg3cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC03MmRlZyk7XG59XG5cbi5kaXYzIHtcbiAgdG9wOiA2OHB4O1xuICByaWdodDogNTJweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzZkZWcpO1xufVxuXG4uZGl2NCB7XG4gIHRvcDogNjlweDtcbiAgbGVmdDogNDlweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTM2ZGVnKTtcbn1cblxuLmRpdjUge1xuICBib3R0b206IDg2cHg7XG4gIGxlZnQ6IDE1cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDcyZGVnKTtcbn1cbiIsIiRmb250LWZhbWlseS1zYW5zOiAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLFxuICAnTm90byBTYW5zJywgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsXG4gICdOb3RvIENvbG9yIEVtb2ppJztcbiRmb250LWZhbWlseS1zZXJpZjogR2VvcmdpYSwgQ2FtYnJpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiRmb250LWZhbWlseS1tb25vOiBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0xpYmVyYXRpb24gTW9ubycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiRmb250LWZhbWlseS1vcGVuLXNhbnM6ICdPcGVuIFNhbnMnO1xuJGZvbnQtZmFtaWx5LW9wZW4tcG9wcGluczogJ1JvYm90byc7XG5cblxuJHNpemUteHM6IDhweDtcbiRzaXplLXM6IDEycHg7XG4kc2l6ZS1tOiAxNnB4O1xuJHNpemUtbDogMjRweDtcbiRzaXplLXhsOiAzMnB4O1xuJHNpemUtbGc6IDI4cHg7XG4kc2l6ZS14eGw6IDQwcHg7XG5cbiRtYXQtdG9vbGJhci14czogNTJweDtcbiRtYXQtdG9vbGJhci1ndC14czogNTZweDtcbiIsIi5wZW50YWdvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAyNzVweDtcbiAgd2lkdGg6IDI3NXB4O1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uZGl2MSxcbi5kaXYyLFxuLmRpdjMsXG4uZGl2NCxcbi5kaXY1IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG4uZGl2MTpob3Zlcixcbi5kaXYyOmhvdmVyLFxuLmRpdjM6aG92ZXIsXG4uZGl2NDpob3Zlcixcbi5kaXY1OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGl2MSB7XG4gIGJvdHRvbTogMjVweDtcbiAgbGVmdDogMTAycHg7XG59XG5cbi5kaXYyIHtcbiAgYm90dG9tOiA4NnB4O1xuICBsZWZ0OiAxODdweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTcyZGVnKTtcbn1cblxuLmRpdjMge1xuICB0b3A6IDY4cHg7XG4gIHJpZ2h0OiA1MnB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNmRlZyk7XG59XG5cbi5kaXY0IHtcbiAgdG9wOiA2OXB4O1xuICBsZWZ0OiA0OXB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzZkZWcpO1xufVxuXG4uZGl2NSB7XG4gIGJvdHRvbTogODZweDtcbiAgbGVmdDogMTVweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNzJkZWcpO1xufSJdfQ== */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.component.ts":
/*!********************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PentagonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PentagonComponent", function() { return PentagonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PentagonComponent = class PentagonComponent {
    constructor() {
        this.pentagonTracks = ['Accelerate', 'Innovate', 'Insight', 'Experience', 'Assure'];
        this.svgFileName = 'Pentagon';
        this.trackClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.default = '';
        this.pillar = '';
    }
    ngOnInit() {
        if (this.default) {
            this.onTrackClicked(this.pentagonTracks.indexOf(this.default));
        }
    }
    ngOnChanges() {
        this.svgFileName = 'Pentagon';
        if (this.pillar) {
            const idx = this.pentagonTracks.indexOf(this.pillar);
            if (idx > -1) {
                this.svgFileName = `Pentagon_${this.pentagonTracks[idx]}`;
            }
        }
    }
    onTrackClicked(idx) {
        this.svgFileName = `Pentagon_${this.pentagonTracks[idx]}`;
        // //console.log('Pentagon pillar', this.pentagonTracks[idx])
        setTimeout(() => {
            this.trackClicked.emit(this.pentagonTracks[idx]);
        }, 0);
        // this.pentagonTracks = this.rotate(this.pentagonTracks, idx)
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PentagonComponent.prototype, "trackClicked", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PentagonComponent.prototype, "default", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PentagonComponent.prototype, "pillar", void 0);
PentagonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-pentagon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pentagon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pentagon.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.component.scss")).default]
    })
], PentagonComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.module.ts":
/*!*****************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: PentagonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PentagonModule", function() { return PentagonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pentagon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pentagon.component */ "./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.component.ts");




let PentagonModule = class PentagonModule {
};
PentagonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pentagon_component__WEBPACK_IMPORTED_MODULE_3__["PentagonComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_pentagon_component__WEBPACK_IMPORTED_MODULE_3__["PentagonComponent"]],
    })
], PentagonModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/resolvers/training-privileges.resolver.ts":
/*!******************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/resolvers/training-privileges.resolver.ts ***!
  \******************************************************************************************************/
/*! exports provided: TrainingPrivilegesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingPrivilegesResolver", function() { return TrainingPrivilegesResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _apis_training_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apis/training-api.service */ "./project/ws/app/src/lib/routes/infy/routes/training/apis/training-api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let TrainingPrivilegesResolver = class TrainingPrivilegesResolver {
    constructor(trainingApi) {
        this.trainingApi = trainingApi;
    }
    resolve() {
        return this.trainingApi.getUserTrainingPrivileges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => ({ data, error: null })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ error, data: null })));
    }
};
TrainingPrivilegesResolver.ctorParameters = () => [
    { type: _apis_training_api_service__WEBPACK_IMPORTED_MODULE_3__["TrainingApiService"] }
];
TrainingPrivilegesResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TrainingPrivilegesResolver);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/service/EmitterService/forum-handler.service.ts":
/*!************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/service/EmitterService/forum-handler.service.ts ***!
  \************************************************************************************************************/
/*! exports provided: ForumHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumHandlerService", function() { return ForumHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/SocialForumposts.model */ "./project/ws/app/src/lib/routes/social/routes/forums/models/SocialForumposts.model.ts");




let ForumHandlerService = class ForumHandlerService {
    // new Approach to trigger functions in Mypost
    // invokeFirstComponentFunction = new EventEmitter();
    // subsVar: Subscription = new Subscription
    // onFirstComponentButtonClick() {
    //   this.invokeFirstComponentFunction.emit()
    // }
    constructor() {
        this.dataStr = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.reasonOfRejection = '';
        this.reasonoOfFlagging = '';
        this.filterStatus = false;
        this.filterStatusDataReceived = false;
        this.predefinedFiltersExist = false;
        this.predefinedFilterSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__["SocialForum"].ETimelineType.ALL);
        this.predefinedAdminFilterSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.componentActive = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
    }
    sendPredefinedAdminFilterSelected(adminFilter) {
        this.predefinedAdminFilterSelected.next(adminFilter);
    }
    sendFilterStatus(status) {
        // console.log("The Filter status Received from child component is" + status)
        this.filterStatusDataReceived = true;
        this.filterStatus = status;
    }
    sendMessage(data) {
        this.dataStr.next(data);
    }
    // functions for communicating from dialog box to moderator timeline
    sendReasonOfFlagging(reason) {
        this.reasonoOfFlagging = reason;
        // console.log('The reason for FLAGGINg received in service class is' + this.reason_of_flagging)
    }
    sendStatusOfPredefinedFilter(data) {
        this.predefinedFiltersExist = data;
    }
    sendPredinedFilterSelected(data) {
        this.predefinedFilterSelected.next(data);
    }
    setActiveComponent(data) {
        this.componentActive.next(data);
    }
};
ForumHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ForumHandlerService);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/service/sub-services/filter.service.ts":
/*!***************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/service/sub-services/filter.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




const API_END_POINTS = {
    translateFiltersBase: '/apis/protected/v8/translate/filterdata',
    translateFilters: (lang) => `${API_END_POINTS.translateFiltersBase}/${lang}`,
};
let FilterService = class FilterService {
    constructor(http) {
        this.http = http;
    }
    get defaultFiltersTranslated() {
        return { en: {}, all: {} };
    }
    translateSearchFilters(lang) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const filtersTranslation = JSON.parse(localStorage.getItem('filtersTranslation') || JSON.stringify(this.defaultFiltersTranslated));
            if (lang.split(',').length === 1) {
                if (!filtersTranslation.hasOwnProperty(lang)) {
                    filtersTranslation[lang] = {};
                    localStorage.setItem('filtersTranslation', JSON.stringify(filtersTranslation));
                    filtersTranslation[lang] = yield this.http.get(API_END_POINTS.translateFilters(lang)).toPromise();
                    localStorage.setItem('filtersTranslation', JSON.stringify(filtersTranslation));
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(filtersTranslation[lang]).toPromise();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(filtersTranslation['en'] || {}).toPromise();
        });
    }
};
FilterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], FilterService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map