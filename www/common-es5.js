function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/"./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
    \*********************************************************************/
  /*! exports provided: c */
  /***/
  function node_modulesIonicCoreDistEsmButtonActiveD4bd4f74Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createButtonActiveGesture;
    });
    /* harmony import */
    var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./index-7a8b7a1c.js */"./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
    /* harmony import */
    var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./haptic-27b3f981.js */"./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");
    /* harmony import */
    var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./index-34cb2743.js */"./node_modules/@ionic/core/dist/esm/index-34cb2743.js");
    var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
      var currentTouchedButton;
      var initialTouchedButton;
      var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
        if (typeof document === 'undefined') {
          return;
        }
        var target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
          clearActiveButton();
          return;
        }
        if (target !== currentTouchedButton) {
          clearActiveButton();
          setActiveButton(target, hapticFeedbackFn);
        }
      };
      var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
          initialTouchedButton = currentTouchedButton;
        }
        var buttonToModify = currentTouchedButton;
        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.add('ion-activated');
        });
        hapticFeedbackFn();
      };
      var clearActiveButton = function clearActiveButton() {
        var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        if (!currentTouchedButton) {
          return;
        }
        var buttonToModify = currentTouchedButton;
        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.remove('ion-activated');
        });
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
        el: el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: function onStart(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
        },
        onMove: function onMove(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
        },
        onEnd: function onEnd() {
          clearActiveButton(true);
          Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
          initialTouchedButton = undefined;
        }
      });
    };

    /***/
  },

  /***/"./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
    \**************************************************************************/
  /*! exports provided: a, d */
  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegate4392cd63Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });
    /* harmony import */
    var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./helpers-dd7e4b7b.js */"./node_modules/@ionic/core/dist/esm/helpers-dd7e4b7b.js");
    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!delegate) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));
            case 2:
              if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                _context.next = 4;
                break;
              }
              throw new Error('framework delegate is missing');
            case 4:
              el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;
              if (cssClasses) {
                cssClasses.forEach(function (c) {
                  return el.classList.add(c);
                });
              }
              if (componentProps) {
                Object.assign(el, componentProps);
              }
              container.appendChild(el);
              _context.next = 10;
              return new Promise(function (resolve) {
                return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve);
              });
            case 10:
              return _context.abrupt("return", el);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();
    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }
        element.remove();
      }
      return Promise.resolve();
    };

    /***/
  },

  /***/"./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
    \**************************************************************/
  /*! exports provided: a, b, c, d, h */
  /***/
  function node_modulesIonicCoreDistEsmHaptic27b3f981Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelection;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "d", function () {
      return hapticImpact;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelectionEnd;
    });
    var HapticEngine = {
      getEngine: function getEngine() {
        var win = window;
        return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
      },
      available: function available() {
        return !!this.getEngine();
      },
      isCordova: function isCordova() {
        return !!window.TapticEngine;
      },
      isCapacitor: function isCapacitor() {
        var win = window;
        return !!win.Capacitor;
      },
      impact: function impact(options) {
        var engine = this.getEngine();
        if (!engine) {
          return;
        }
        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({
          style: style
        });
      },
      notification: function notification(options) {
        var engine = this.getEngine();
        if (!engine) {
          return;
        }
        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({
          style: style
        });
      },
      selection: function selection() {
        this.impact({
          style: 'light'
        });
      },
      selectionStart: function selectionStart() {
        var engine = this.getEngine();
        if (!engine) {
          return;
        }
        if (this.isCapacitor()) {
          engine.selectionStart();
        } else {
          engine.gestureSelectionStart();
        }
      },
      selectionChanged: function selectionChanged() {
        var engine = this.getEngine();
        if (!engine) {
          return;
        }
        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      },
      selectionEnd: function selectionEnd() {
        var engine = this.getEngine();
        if (!engine) {
          return;
        }
        if (this.isCapacitor()) {
          engine.selectionEnd();
        } else {
          engine.gestureSelectionEnd();
        }
      }
    };
    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */
    var hapticSelection = function hapticSelection() {
      HapticEngine.selection();
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */
    var hapticSelectionStart = function hapticSelectionStart() {
      HapticEngine.selectionStart();
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */
    var hapticSelectionChanged = function hapticSelectionChanged() {
      HapticEngine.selectionChanged();
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */
    var hapticSelectionEnd = function hapticSelectionEnd() {
      HapticEngine.selectionEnd();
    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
     */
    var hapticImpact = function hapticImpact(options) {
      HapticEngine.impact(options);
    };

    /***/
  },

  /***/"./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
    \***********************************************************************/
  /*! exports provided: S */
  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsCd7845afJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });
    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
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
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;

    /***/
  },

  /***/"./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
    \*************************************************************/
  /*! exports provided: c, g, h, o */
  /***/
  function node_modulesIonicCoreDistEsmThemeFf3fc52fJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });
    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */
    var createColorClasses = function createColorClasses(color, cssClassMap) {
      return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
    };
    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }
      return [];
    };
    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };
    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
    var openURL = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url, ev, direction, animation) {
        var router;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                _context2.next = 5;
                break;
              }
              router = document.querySelector('ion-router');
              if (!router) {
                _context2.next = 5;
                break;
              }
              if (ev != null) {
                ev.preventDefault();
              }
              return _context2.abrupt("return", router.push(url, direction, animation));
            case 5:
              return _context2.abrupt("return", false);
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function openURL(_x6, _x7, _x8, _x9) {
        return _ref2.apply(this, arguments);
      };
    }();

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.component.html ***!
    \************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesMarketingPentagonPentagonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div>\n  <div class=\"pentagon-container\">\n    <img\n      #nynPentagon\n      id=\"nynTop\"\n      [src]=\"'/assets/images/marketing/' + svgFileName + '.svg'\"\n      height=\"100%\"\n      width=\"100%\"\n      i18n-alt\n      alt=\"Pentagon\"\n    />\n    <div class=\"div1\" (click)=\"onTrackClicked(0)\"></div>\n    <div class=\"div2\" (click)=\"onTrackClicked(1)\"></div>\n    <div class=\"div3\" (click)=\"onTrackClicked(2)\"></div>\n    <div class=\"div4\" (click)=\"onTrackClicked(3)\"></div>\n    <div class=\"div5\" (click)=\"onTrackClicked(4)\"></div>\n  </div>\n</div>\n";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/resolvers/feedback-config.resolver.ts":
  /*!*****************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/resolvers/feedback-config.resolver.ts ***!
    \*****************************************************************************************/
  /*! exports provided: FeedbackConfigResolver */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2ResolversFeedbackConfigResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FeedbackConfigResolver", function () {
      return FeedbackConfigResolver;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    var FeedbackConfigResolver = /*#__PURE__*/function () {
      function FeedbackConfigResolver(feedbackApi) {
        _classCallCheck(this, FeedbackConfigResolver);
        this.feedbackApi = feedbackApi;
      }
      _createClass(FeedbackConfigResolver, [{
        key: "resolve",
        value: function resolve() {
          try {
            return this.feedbackApi.getFeedbackConfig().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (config) {
              return {
                data: config,
                error: null
              };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
              var result = {
                data: null,
                error: 'FEEDBACK_CONFIG_API_ERROR'
              };
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
            }));
          } catch (err) {
            var result = {
              data: null,
              error: 'FEEDBACK_CONFIG_RESOLVER_ERROR'
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
          }
        }
      }]);
      return FeedbackConfigResolver;
    }();
    FeedbackConfigResolver.ctorParameters = function () {
      return [{
        type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["FeedbackService"]
      }];
    };
    FeedbackConfigResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], FeedbackConfigResolver);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/resolvers/feedback-summary.resolver.ts":
  /*!******************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/resolvers/feedback-summary.resolver.ts ***!
    \******************************************************************************************/
  /*! exports provided: FeedbackSummaryResolver */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2ResolversFeedbackSummaryResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FeedbackSummaryResolver", function () {
      return FeedbackSummaryResolver;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    var FeedbackSummaryResolver = /*#__PURE__*/function () {
      function FeedbackSummaryResolver(feedbackApi) {
        _classCallCheck(this, FeedbackSummaryResolver);
        this.feedbackApi = feedbackApi;
      }
      _createClass(FeedbackSummaryResolver, [{
        key: "resolve",
        value: function resolve() {
          try {
            return this.feedbackApi.getFeedbackSummary().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (summary) {
              return {
                data: summary,
                error: null
              };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
              var result = {
                data: null,
                error: 'FEEDBACK_SUMMARY_API_ERROR'
              };
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
            }));
          } catch (err) {
            var result = {
              data: null,
              error: 'FEEDBACK_SUMMARY_RESOLVER_ERROR'
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
          }
        }
      }]);
      return FeedbackSummaryResolver;
    }();
    FeedbackSummaryResolver.ctorParameters = function () {
      return [{
        type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["FeedbackService"]
      }];
    };
    FeedbackSummaryResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], FeedbackSummaryResolver);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.component.scss":
  /*!**********************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.component.scss ***!
    \**********************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesMarketingPentagonPentagonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".pentagon-container {\n  position: relative;\n  margin: auto;\n  height: 275px;\n  width: 275px;\n  background: #fafafa;\n  padding: 16px;\n}\n\n.div1,\n.div2,\n.div3,\n.div4,\n.div5 {\n  position: absolute;\n  background-color: transparent;\n  height: 50px;\n  width: 100px;\n}\n\n.div1:hover,\n.div2:hover,\n.div3:hover,\n.div4:hover,\n.div5:hover {\n  cursor: pointer;\n}\n\n.div1 {\n  bottom: 25px;\n  left: 102px;\n}\n\n.div2 {\n  bottom: 86px;\n  left: 187px;\n  transform: rotate(-72deg);\n}\n\n.div3 {\n  top: 68px;\n  right: 52px;\n  transform: rotate(36deg);\n}\n\n.div4 {\n  top: 69px;\n  left: 49px;\n  transform: rotate(-36deg);\n}\n\n.div5 {\n  bottom: 86px;\n  left: 15px;\n  transform: rotate(72deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9tYXJrZXRpbmcvcGVudGFnb24vcGVudGFnb24uY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvc3R5bGVzL193cy12YXJzLnNjc3MiLCJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9tYXJrZXRpbmcvcGVudGFnb24vcGVudGFnb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUNHTztBQ0pUOztBRklBOzs7OztFQUtFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRURGOztBRkdFOzs7OztFQUVFLGVBQUE7QUVFSjs7QUZFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FFQ0Y7O0FGRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FFQ0Y7O0FGRUE7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0FFQ0Y7O0FGRUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FFQ0Y7O0FGRUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0FFQ0YiLCJmaWxlIjoicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvbWFya2V0aW5nL3BlbnRhZ29uL3BlbnRhZ29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuXG4ucGVudGFnb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMjc1cHg7XG4gIHdpZHRoOiAyNzVweDtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgcGFkZGluZzogJHNpemUtbTtcbn1cblxuLmRpdjEsXG4uZGl2Mixcbi5kaXYzLFxuLmRpdjQsXG4uZGl2NSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMHB4O1xuXG4gICY6aG92ZXIge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsMzMsMzMsMC43NSlcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmRpdjEge1xuICBib3R0b206IDI1cHg7XG4gIGxlZnQ6IDEwMnB4O1xufVxuXG4uZGl2MiB7XG4gIGJvdHRvbTogODZweDtcbiAgbGVmdDogMTg3cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC03MmRlZyk7XG59XG5cbi5kaXYzIHtcbiAgdG9wOiA2OHB4O1xuICByaWdodDogNTJweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzZkZWcpO1xufVxuXG4uZGl2NCB7XG4gIHRvcDogNjlweDtcbiAgbGVmdDogNDlweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTM2ZGVnKTtcbn1cblxuLmRpdjUge1xuICBib3R0b206IDg2cHg7XG4gIGxlZnQ6IDE1cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDcyZGVnKTtcbn1cbiIsIiRmb250LWZhbWlseS1zYW5zOiAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLFxuICAnTm90byBTYW5zJywgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsXG4gICdOb3RvIENvbG9yIEVtb2ppJztcbiRmb250LWZhbWlseS1zZXJpZjogR2VvcmdpYSwgQ2FtYnJpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiRmb250LWZhbWlseS1tb25vOiBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0xpYmVyYXRpb24gTW9ubycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiRmb250LWZhbWlseS1vcGVuLXNhbnM6ICdPcGVuIFNhbnMnO1xuJGZvbnQtZmFtaWx5LW9wZW4tcG9wcGluczogJ1JvYm90byc7XG5cblxuJHNpemUteHM6IDhweDtcbiRzaXplLXM6IDEycHg7XG4kc2l6ZS1tOiAxNnB4O1xuJHNpemUtbDogMjRweDtcbiRzaXplLXhsOiAzMnB4O1xuJHNpemUtbGc6IDI4cHg7XG4kc2l6ZS14eGw6IDQwcHg7XG5cbiRtYXQtdG9vbGJhci14czogNTJweDtcbiRtYXQtdG9vbGJhci1ndC14czogNTZweDtcbiIsIi5wZW50YWdvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAyNzVweDtcbiAgd2lkdGg6IDI3NXB4O1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uZGl2MSxcbi5kaXYyLFxuLmRpdjMsXG4uZGl2NCxcbi5kaXY1IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG4uZGl2MTpob3Zlcixcbi5kaXYyOmhvdmVyLFxuLmRpdjM6aG92ZXIsXG4uZGl2NDpob3Zlcixcbi5kaXY1OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGl2MSB7XG4gIGJvdHRvbTogMjVweDtcbiAgbGVmdDogMTAycHg7XG59XG5cbi5kaXYyIHtcbiAgYm90dG9tOiA4NnB4O1xuICBsZWZ0OiAxODdweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTcyZGVnKTtcbn1cblxuLmRpdjMge1xuICB0b3A6IDY4cHg7XG4gIHJpZ2h0OiA1MnB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNmRlZyk7XG59XG5cbi5kaXY0IHtcbiAgdG9wOiA2OXB4O1xuICBsZWZ0OiA0OXB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzZkZWcpO1xufVxuXG4uZGl2NSB7XG4gIGJvdHRvbTogODZweDtcbiAgbGVmdDogMTVweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNzJkZWcpO1xufSJdfQ== */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.component.ts":
  /*!********************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.component.ts ***!
    \********************************************************************************************/
  /*! exports provided: PentagonComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesMarketingPentagonPentagonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PentagonComponent", function () {
      return PentagonComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var PentagonComponent = /*#__PURE__*/function () {
      function PentagonComponent() {
        _classCallCheck(this, PentagonComponent);
        this.pentagonTracks = ['Accelerate', 'Innovate', 'Insight', 'Experience', 'Assure'];
        this.svgFileName = 'Pentagon';
        this.trackClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this["default"] = '';
        this.pillar = '';
      }
      _createClass(PentagonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this["default"]) {
            this.onTrackClicked(this.pentagonTracks.indexOf(this["default"]));
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.svgFileName = 'Pentagon';
          if (this.pillar) {
            var idx = this.pentagonTracks.indexOf(this.pillar);
            if (idx > -1) {
              this.svgFileName = "Pentagon_".concat(this.pentagonTracks[idx]);
            }
          }
        }
      }, {
        key: "onTrackClicked",
        value: function onTrackClicked(idx) {
          var _this = this;
          this.svgFileName = "Pentagon_".concat(this.pentagonTracks[idx]);
          // //console.log('Pentagon pillar', this.pentagonTracks[idx])
          setTimeout(function () {
            _this.trackClicked.emit(_this.pentagonTracks[idx]);
          }, 0);
          // this.pentagonTracks = this.rotate(this.pentagonTracks, idx)
        }
      }]);
      return PentagonComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PentagonComponent.prototype, "trackClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PentagonComponent.prototype, "default", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PentagonComponent.prototype, "pillar", void 0);
    PentagonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-pentagon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./pentagon.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./pentagon.component.scss */"./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.component.scss"))["default"]]
    })], PentagonComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.module.ts ***!
    \*****************************************************************************************/
  /*! exports provided: PentagonModule */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesMarketingPentagonPentagonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PentagonModule", function () {
      return PentagonModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _pentagon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./pentagon.component */"./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.component.ts");
    var PentagonModule = /*#__PURE__*/_createClass(function PentagonModule() {
      _classCallCheck(this, PentagonModule);
    });
    PentagonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pentagon_component__WEBPACK_IMPORTED_MODULE_3__["PentagonComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_pentagon_component__WEBPACK_IMPORTED_MODULE_3__["PentagonComponent"]]
    })], PentagonModule);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/training/resolvers/training-privileges.resolver.ts":
  /*!******************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/training/resolvers/training-privileges.resolver.ts ***!
    \******************************************************************************************************/
  /*! exports provided: TrainingPrivilegesResolver */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesTrainingResolversTrainingPrivilegesResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TrainingPrivilegesResolver", function () {
      return TrainingPrivilegesResolver;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var _apis_training_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../apis/training-api.service */"./project/ws/app/src/lib/routes/infy/routes/training/apis/training-api.service.ts");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    var TrainingPrivilegesResolver = /*#__PURE__*/function () {
      function TrainingPrivilegesResolver(trainingApi) {
        _classCallCheck(this, TrainingPrivilegesResolver);
        this.trainingApi = trainingApi;
      }
      _createClass(TrainingPrivilegesResolver, [{
        key: "resolve",
        value: function resolve() {
          return this.trainingApi.getUserTrainingPrivileges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return {
              data: data,
              error: null
            };
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              error: error,
              data: null
            });
          }));
        }
      }]);
      return TrainingPrivilegesResolver;
    }();
    TrainingPrivilegesResolver.ctorParameters = function () {
      return [{
        type: _apis_training_api_service__WEBPACK_IMPORTED_MODULE_3__["TrainingApiService"]
      }];
    };
    TrainingPrivilegesResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TrainingPrivilegesResolver);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/social/routes/forums/service/EmitterService/forum-handler.service.ts":
  /*!************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/social/routes/forums/service/EmitterService/forum-handler.service.ts ***!
    \************************************************************************************************************/
  /*! exports provided: ForumHandlerService */
  /***/
  function projectWsAppSrcLibRoutesSocialRoutesForumsServiceEmitterServiceForumHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ForumHandlerService", function () {
      return ForumHandlerService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../models/SocialForumposts.model */"./project/ws/app/src/lib/routes/social/routes/forums/models/SocialForumposts.model.ts");
    var ForumHandlerService = /*#__PURE__*/function () {
      // new Approach to trigger functions in Mypost
      // invokeFirstComponentFunction = new EventEmitter();
      // subsVar: Subscription = new Subscription
      // onFirstComponentButtonClick() {
      //   this.invokeFirstComponentFunction.emit()
      // }
      function ForumHandlerService() {
        _classCallCheck(this, ForumHandlerService);
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
      _createClass(ForumHandlerService, [{
        key: "sendPredefinedAdminFilterSelected",
        value: function sendPredefinedAdminFilterSelected(adminFilter) {
          this.predefinedAdminFilterSelected.next(adminFilter);
        }
      }, {
        key: "sendFilterStatus",
        value: function sendFilterStatus(status) {
          // console.log("The Filter status Received from child component is" + status)
          this.filterStatusDataReceived = true;
          this.filterStatus = status;
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(data) {
          this.dataStr.next(data);
        }
        // functions for communicating from dialog box to moderator timeline
      }, {
        key: "sendReasonOfFlagging",
        value: function sendReasonOfFlagging(reason) {
          this.reasonoOfFlagging = reason;
          // console.log('The reason for FLAGGINg received in service class is' + this.reason_of_flagging)
        }
      }, {
        key: "sendStatusOfPredefinedFilter",
        value: function sendStatusOfPredefinedFilter(data) {
          this.predefinedFiltersExist = data;
        }
      }, {
        key: "sendPredinedFilterSelected",
        value: function sendPredinedFilterSelected(data) {
          this.predefinedFilterSelected.next(data);
        }
      }, {
        key: "setActiveComponent",
        value: function setActiveComponent(data) {
          this.componentActive.next(data);
        }
      }]);
      return ForumHandlerService;
    }();
    ForumHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ForumHandlerService);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/social/routes/forums/service/sub-services/filter.service.ts":
  /*!***************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/social/routes/forums/service/sub-services/filter.service.ts ***!
    \***************************************************************************************************/
  /*! exports provided: FilterService */
  /***/
  function projectWsAppSrcLibRoutesSocialRoutesForumsServiceSubServicesFilterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FilterService", function () {
      return FilterService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    var API_END_POINTS = {
      translateFiltersBase: '/apis/protected/v8/translate/filterdata',
      translateFilters: function translateFilters(lang) {
        return "".concat(API_END_POINTS.translateFiltersBase, "/").concat(lang);
      }
    };
    var FilterService = /*#__PURE__*/function () {
      function FilterService(http) {
        _classCallCheck(this, FilterService);
        this.http = http;
      }
      _createClass(FilterService, [{
        key: "defaultFiltersTranslated",
        get: function get() {
          return {
            en: {},
            all: {}
          };
        }
      }, {
        key: "translateSearchFilters",
        value: function translateSearchFilters(lang) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var filtersTranslation;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  filtersTranslation = JSON.parse(localStorage.getItem('filtersTranslation') || JSON.stringify(this.defaultFiltersTranslated));
                  if (!(lang.split(',').length === 1)) {
                    _context3.next = 10;
                    break;
                  }
                  if (filtersTranslation.hasOwnProperty(lang)) {
                    _context3.next = 9;
                    break;
                  }
                  filtersTranslation[lang] = {};
                  localStorage.setItem('filtersTranslation', JSON.stringify(filtersTranslation));
                  _context3.next = 7;
                  return this.http.get(API_END_POINTS.translateFilters(lang)).toPromise();
                case 7:
                  filtersTranslation[lang] = _context3.sent;
                  localStorage.setItem('filtersTranslation', JSON.stringify(filtersTranslation));
                case 9:
                  return _context3.abrupt("return", Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(filtersTranslation[lang]).toPromise());
                case 10:
                  return _context3.abrupt("return", Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(filtersTranslation['en'] || {}).toPromise());
                case 11:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
        }
      }]);
      return FilterService;
    }();
    FilterService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };
    FilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FilterService);

    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map