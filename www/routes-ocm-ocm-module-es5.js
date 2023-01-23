function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-ocm-ocm-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/about/about.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/about/about.component.html ***!
    \*******************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesOcmRoutesAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-card class=\"pad container-height-adjust\" *ngIf=\"config\">\n  <h2 class=\"mat-h2 font-weight-500\">{{ config?.title }}</h2>\n  <div *ngIf=\"config.about\" class=\"about\" [innerHtml]=\"config.about\"></div>\n</mat-card>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/adoption-dashboard/adoption-dashboard.component.html":
  /*!*********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/adoption-dashboard/adoption-dashboard.component.html ***!
    \*********************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesOcmRoutesAdoptionDashboardAdoptionDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-card class=\"margin-l pad\" *ngIf=\"config\">\n  <h2 class=\"mat-h2 font-weight-500\">{{ config?.title }}</h2>\n  <h3 class=\"mat-h3 font-weight-500\" *ngIf=\"!config.dashboardsList\" i18n>\n    Stats will appear here.\n  </h3>\n  <div class=\"flex flex-wrapped flex-middle\">\n    <div class=\"width-1-4\">\n      <mat-radio-group\n        class=\"radioGroup\"\n        [(ngModel)]=\"currentStat\"\n        aria-label=\"Select an option\"\n        (change)=\"statsClicked()\"\n      >\n        <mat-radio-button\n          class=\"margin-m\"\n          [value]=\"dashboard.titleKey\"\n          *ngFor=\"let dashboard of config?.dashboardsList\"\n        >\n          {{ dashboard.title | titlecase }}\n        </mat-radio-button>\n      </mat-radio-group>\n    </div>\n\n    <div class=\"width-3-4\">\n      <div class=\"text-center\">\n        <div\n          class=\"flex flex-center margin-l\"\n          *ngIf=\"\n            (currentStat === 'Wingspan' && lexStatFetchStatus === 'fetching') ||\n            (currentStat === 'infyme' && infyMeStatFetchStatus === 'fetching')\n          \"\n        >\n          <mat-spinner></mat-spinner>\n        </div>\n        <h3\n          class=\"mat-h3\"\n          *ngIf=\"\n            (currentStat === 'Wingspan' && lexStatFetchStatus === 'error') ||\n            (currentStat === 'infyme' && infyMeStatFetchStatus === 'error')\n          \"\n          i18n\n        >\n          Error fetching Data\n        </h3>\n      </div>\n      <div class=\"flex flex-around flex-wrapped\">\n        <ng-container *ngFor=\"let stat of stats\">\n          <ng-container *ngIf=\"stat?.titleKey === currentStat\">\n            <a\n              [ngClass]=\"{ 'cursor-auto': !counterEnabled }\"\n              [routerLink]=\"\n                counterEnabled\n                  ? currentStat === 'Wingspan'\n                    ? '/app/infy/counter'\n                    : '/app/infy/counter/infy-me'\n                  : null\n              \"\n              class=\"text-center margin-s\"\n            >\n              <mat-icon *ngIf=\"stat.iconName\" class=\"icon margin-bottom-m\">{{\n                stat.iconName\n              }}</mat-icon>\n              <h1 class=\"mat-h1 margin-bottom-xs\">{{ stat.count }}</h1>\n              <h3 class=\"mat-subheading-2 margin-remove-bottom\">{{ stat.title }}</h3>\n            </a>\n          </ng-container>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</mat-card>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/change-champions/change-champions.component.html":
  /*!*****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/change-champions/change-champions.component.html ***!
    \*****************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesOcmRoutesChangeChampionsChangeChampionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-card class=\"pad container-height-adjust\" *ngIf=\"config\">\n  <h2 class=\"mat-h2 font-weight-500\">{{ config?.title }}</h2>\n  <h3 class=\"text-center mat-h3 font-weight-500\" *ngIf=\"!config.champions?.length\" i18n>\n    Champions will appear here\n  </h3>\n  <div class=\"flex flex-wrapped flex-middle\" *ngIf=\"config.champions?.length\">\n    <div *ngFor=\"let champion of config.champions\">\n      <h3 *ngIf=\"champion.title\">{{ champion.title }}</h3>\n      <ng-container\n        [ngTemplateOutlet]=\"meetChampions\"\n        [ngTemplateOutletContext]=\"{\n          list: champion.championsList\n        }\"\n      ></ng-container>\n    </div>\n  </div>\n</mat-card>\n\n<ng-template #meetChampions let-list=\"list\">\n  <ul class=\"champions-list\" *ngIf=\"list.length\">\n    <li class=\"champions-list-item\" *ngFor=\"let user of list\">\n      <div class=\"width-auto\">\n        <ws-widget-user-image [email]=\"user?.emailId\"></ws-widget-user-image>\n      </div>\n      <div class=\"width-expand padding-left-xs\">\n        <div class=\"mat-body-strong champions-name\">\n          {{\n            { firstName: user.firstName, lastName: user.lastName, email: user.email }\n              | pipeNameTransform\n          }}\n        </div>\n        <div class=\"mat-caption champions-desc\">{{ user.desc }}</div>\n      </div>\n    </li>\n  </ul>\n</ng-template>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/co-create/co-create.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/co-create/co-create.component.html ***!
    \***************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesOcmRoutesCoCreateCoCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-card class=\"pad container-height-adjust\" *ngIf=\"config\">\n  <h2 class=\"mat-h2 font-weight-500\">{{ config?.title }}</h2>\n  <h3 class=\"mat-h3\">{{ config?.desc }}</h3>\n  <div class=\"text-center contribution margin-bottom-m\">\n    <div *ngFor=\"let data of config?.contributionList\" (click)=\"contributionTypeClicked(data)\">\n      <div class=\"circle ws-mat-primary-background\">\n        <mat-icon class=\"icon\" [ngClass]=\"{ selected: mailRequest.type === data.name }\">{{\n          data?.iconName\n        }}</mat-icon>\n      </div>\n      <strong>{{ data?.name | uppercase }}</strong>\n    </div>\n  </div>\n  <form #contributeForm=\"ngForm\" (submit)=\"sendMail(contributeForm)\" [hidden]=\"!showAnwserInput\">\n    <mat-form-field class=\"width-1-1 margin-m\">\n      <textarea\n        required\n        [placeholder]=\"fixedEmailText\"\n        minlength=\"10\"\n        [disabled]=\"submitInProgress\"\n        rows=\"7\"\n        [(ngModel)]=\"mailRequest.answer\"\n        matInput\n        name=\"answer\"\n        #answerText=\"ngModel\"\n      ></textarea>\n      <mat-error i18n> Min length should be 10 characters </mat-error>\n    </mat-form-field>\n    <div class=\"flex flex-row-reverse margin-top-s\">\n      <button\n        [disabled]=\"contributeForm.form.invalid || submitInProgress\"\n        type=\"submit\"\n        mat-raised-button\n        [color]=\"'primary'\"\n        i18n\n      >\n        Send Mail\n      </button>\n      <button mat-button i18n=\"reset form\" type=\"reset\">Reset</button>\n    </div>\n  </form>\n</mat-card>\n\n<input\n  type=\"hidden\"\n  i18-value\n  i18-aria-value\n  aria-value=\"send mail succesful\"\n  value=\"Thanks for your contribution.\"\n  #toastSuccess\n/>\n<input\n  type=\"hidden\"\n  i18-value\n  i18-aria-value\n  aria-value=\"unable to submit feedback\"\n  value=\"Error sending mail!\"\n  #toastError\n/>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/feedback/feedback.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/feedback/feedback.component.html ***!
    \*************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesOcmRoutesFeedbackFeedbackComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-card class=\"container-height-adjust pad\" *ngIf=\"config\">\n  <h2 class=\"mat-h2 font-weight-500\">{{ config?.title }}</h2>\n  <form #feedbackForm=\"ngForm\" (submit)=\"submitFeedback(feedbackRequest, feedbackForm)\">\n    <label class=\"rating-container text-center\">\n      <mat-form-field class=\"rating-form-field\">\n        <input\n          class=\"rating-input\"\n          matInput\n          required\n          type=\"number\"\n          #rating=\"ngModel\"\n          [(ngModel)]=\"feedbackRequest.rating\"\n          [name]=\"feedbackRequest.feedbackType + '_rating'\"\n          min=\"1\"\n          [max]=\"5\"\n          [pattern]=\"numbersPattern\"\n        />\n        <mat-error [hidden]=\"rating.valid && rating.touched\" i18n>\n          Rating is required\n        </mat-error>\n      </mat-form-field>\n      <button\n        type=\"button\"\n        class=\"rating-button\"\n        mat-icon-button\n        *ngFor=\"let _ of ratingLoop; let i = index\"\n        (click)=\"feedbackRequest.rating = i + 1\"\n        color=\"accent\"\n      >\n        <mat-icon class=\"rating-icon\">\n          {{ (feedbackRequest.rating || -1) > i ? 'star' : 'star_border' }}</mat-icon\n        >\n      </button>\n    </label>\n    <div class=\"margin-top-m text-center\">\n      <mat-form-field class=\"field-container\">\n        <textarea\n          rows=\"8\"\n          [name]=\"feedbackRequest.feedbackType + '_suggestion'\"\n          [(ngModel)]=\"feedbackRequest.feedback[0].answer\"\n          matInput\n          i18n-placeholder\n          placeholder=\"Provide your suggestions\"\n        ></textarea>\n      </mat-form-field>\n    </div>\n\n    <div class=\"flex flex-row-reverse margin-top-s demo\">\n      <button\n        [disabled]=\"feedbackForm.form.invalid || submitInProgress\"\n        type=\"submit\"\n        mat-raised-button\n        color=\"primary\"\n        i18n\n      >\n        Submit Feedback\n      </button>\n      <button mat-button i18n=\"reset feedback form\" type=\"reset\">Reset</button>\n    </div>\n  </form>\n</mat-card>\n<input\n  type=\"hidden\"\n  i18-value\n  i18-aria-value\n  aria-value=\"feedback submit succesful\"\n  value=\"Thanks for your feedback\"\n  #toastSuccess\n/>\n<input\n  type=\"hidden\"\n  i18-value\n  i18-aria-value\n  aria-value=\"unable to submit feedback\"\n  value=\"Error submitting feedback!\"\n  #toastError\n/>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/influence-change/influence-change.component.html":
  /*!*****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/influence-change/influence-change.component.html ***!
    \*****************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesOcmRoutesInfluenceChangeInfluenceChangeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<!-- <mat-card class=\"container-height-adjust pad\" *ngIf=\"config\"> -->\n<!-- <h2 class=\"mat-h2 font-weight-500\">{{ config?.title }}</h2> -->\n<!-- <ws-discussion-forum\n    *ngIf=\"discussionForumInput\"\n    [discussionForumInput]=\"discussionForumInput\"\n  ></ws-discussion-forum> -->\n<!-- </mat-card> -->\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/ocm-home/ocm-home.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/ocm-home/ocm-home.component.html ***!
    \*************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesOcmRoutesOcmHomeOcmHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n<mat-toolbar class = \"ws-mat-light-background\" [ngStyle]=\"configSvc?.pageNavBar?.styles\">\n  <ws-widget-btn-page-back [widgetData]=\"{ url: 'back' }\"></ws-widget-btn-page-back>\n  <span class=\"margin-left-s\">{{pageTitle}}</span>\n</mat-toolbar>\n\n<ng-container [wsResolverWidget]=\"widgetBannersRequest\"></ng-container>\n\n<ng-container *ngIf=\"ocmRequestData\">\n  <div class=\"margin-s margin-remove-top flex flex-wrapped\">\n    <ws-app-about\n      *ngIf=\"ocmRequestData?.about\"\n      class=\"width-2-3 container padding-s spacer\"\n      [config]=\"ocmRequestData?.about\"\n    ></ws-app-about>\n    <ws-app-search-results-strip\n      *ngIf=\"ocmRequestData?.sentientInfosys\"\n      class=\"spacer width-1-3 container padding-s\"\n      [config]=\"ocmRequestData?.sentientInfosys\"\n    >\n    </ws-app-search-results-strip>\n  </div>\n\n  <div class=\"margin-s flex flex-wrapped\">\n    <ws-app-search-results-strip\n      *ngIf=\"ocmRequestData?.leadChange\"\n      class=\"width-2-3 spacer container padding-s\"\n      [config]=\"ocmRequestData?.leadChange\"\n    >\n    </ws-app-search-results-strip>\n    <ws-app-change-champions\n      *ngIf=\"ocmRequestData?.changeChampions\"\n      [config]=\"ocmRequestData?.changeChampions\"\n      class=\"spacer width-1-3 container padding-s\"\n    >\n    </ws-app-change-champions>\n  </div>\n\n  <ws-app-sentient-programs *ngIf=\"ocmRequestData?.programs\" [config]=\"ocmRequestData?.programs\">\n  </ws-app-sentient-programs>\n\n  <div class=\"margin-s flex flex-wrapped\">\n    <ws-app-what-next\n      *ngIf=\"ocmRequestData?.events\"\n      [config]=\"ocmRequestData?.events\"\n      class=\"width-2-3 spacer container padding-s\"\n    ></ws-app-what-next>\n    <ws-app-to-do-list\n      *ngIf=\"ocmRequestData?.toDoList\"\n      [config]=\"ocmRequestData?.toDoList\"\n      class=\"spacer width-1-3 container padding-s\"\n    >\n    </ws-app-to-do-list>\n  </div>\n\n  <ws-app-adoption-dashboard *ngIf=\"ocmRequestData?.stats\" [config]=\"ocmRequestData?.stats\">\n  </ws-app-adoption-dashboard>\n\n  <div class=\"margin-s flex flex-wrapped\">\n    <ws-app-search-results-strip\n      *ngIf=\"ocmRequestData?.inbox\"\n      class=\"spacer width-1-2 container padding-s\"\n      [config]=\"ocmRequestData?.inbox\"\n    >\n    </ws-app-search-results-strip>\n    <ws-app-feedback\n      *ngIf=\"ocmRequestData?.feedback\"\n      class=\"spacer width-1-2 container padding-s\"\n      [config]=\"ocmRequestData?.feedback\"\n    ></ws-app-feedback>\n  </div>\n\n  <div class=\"margin-s flex flex-wrapped\">\n    <ws-app-co-create\n      *ngIf=\"ocmRequestData?.coCreate\"\n      class=\"width-1-2 container padding-s spacer\"\n      [config]=\"ocmRequestData?.coCreate\"\n    ></ws-app-co-create>\n    <!-- <ws-app-influence-change\n      class=\"spacer width-1-2 container padding-s\"\n      [config]=\"ocmRequestData?.influencer\"\n      *ngIf=\"ocmRequestData?.influencer\"\n    >\n    </ws-app-influence-change> -->\n  </div>\n\n  <div class=\"margin-l\">\n    <ws-app-search-results-strip\n      *ngIf=\"ocmRequestData?.changeStories\"\n      [config]=\"ocmRequestData?.changeStories\"\n    >\n    </ws-app-search-results-strip>\n  </div>\n</ng-container>\n\n<h2 class=\"mat-h2 text-center margin-top-m\" i18n *ngIf=\"errorFetchingJson\">\n  Something went wrong. Not able to load the content.\n</h2>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/search-results-strip/search-results-strip.component.html":
  /*!*************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/search-results-strip/search-results-strip.component.html ***!
    \*************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesOcmRoutesSearchResultsStripSearchResultsStripComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-card class=\"padding-remove container-height-adjust\" *ngIf=\"config\">\n  <h2 class=\"mat-h2 font-weight-500 pad margin-remove-bottom\" *ngIf=\"errorMessageCode\">\n    {{ config?.title }}\n  </h2>\n  <mat-card-content>\n    <ng-container *ngIf=\"config?.widgetSearchQuery\" [wsResolverWidget]=\"config?.widgetSearchQuery\">\n    </ng-container>\n    <ng-container *ngIf=\"errorMessageCode\">\n      <div [ngSwitch]=\"errorMessageCode\" class=\"text-center padding-s\">\n        <h3 class=\"mat-h3 font-weight-500\" i18n *ngSwitchCase=\"'API_FAILURE'\">\n          Unable to fetch data\n        </h3>\n        <h3 class=\"mat-h3 font-weight-500\" i18n *ngSwitchCase=\"'NO_DATA'\">Coming Soon...</h3>\n      </div>\n    </ng-container>\n  </mat-card-content>\n</mat-card>\n\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/sentient-programs/sentient-programs.component.html":
  /*!*******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/sentient-programs/sentient-programs.component.html ***!
    \*******************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesOcmRoutesSentientProgramsSentientProgramsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-card class=\"margin-l pad\" *ngIf=\"config\">\n  <h2 class=\"mat-h2 font-weight-500\">{{ config.title }}</h2>\n\n  <mat-card-content>\n    <h3 *ngIf=\"!config.programsList || !config.programsList?.length\" i18n>\n      Programs will appear here.\n    </h3>\n    <ng-container *ngIf=\"config.programsList && config.programsList?.length\">\n      <div class=\"flex card flex-wrapped\">\n        <div\n          class=\"button program ws-mat-primary-background\"\n          (click)=\"trackClicked(program)\"\n          *ngFor=\"let program of config.programsList\"\n        >\n          <img\n            [ngClass]=\"{ selected: heading === program.title }\"\n            alt=\"logo\"\n            [src]=\"program.logo\"\n            class=\"logo\"\n          />\n          <span [ngClass]=\"{ selected: heading === program.title }\" class=\"title\">{{\n            program.title | uppercase\n          }}</span>\n        </div>\n      </div>\n    </ng-container>\n  </mat-card-content>\n\n  <ng-container *ngIf=\"widgetSearchRequest\" [wsResolverWidget]=\"widgetSearchRequest\"> </ng-container>\n\n  <ng-container *ngIf=\"errorMessageCode\">\n    <div [ngSwitch]=\"errorMessageCode\" class=\"margin-top-m text-center padding-s\">\n      <h3 class=\"mat-h3 font-weight-500\" i18n *ngSwitchCase=\"'API_FAILURE'\">\n        Unable to fetch data\n      </h3>\n      <h3 class=\"mat-h3 font-weight-500\" i18n *ngSwitchCase=\"'NO_DATA'\">Coming Soon...</h3>\n    </div>\n  </ng-container>\n</mat-card>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/to-do-list/to-do-list.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/to-do-list/to-do-list.component.html ***!
    \*****************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesOcmRoutesToDoListToDoListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-card class=\"pad container-height-adjust\" *ngIf=\"config\">\n  <h2 class=\"mat-h2 font-weight-500\">{{ config?.title }}</h2>\n  <mat-card-content>\n    <ng-container i18n *ngIf=\"(toDoList && !toDoList?.length) || !toDoList\">\n      Your to-do list will appear here.\n    </ng-container>\n    <!-- <ws-spinner [spinSize]=\"'small'\" class=\"margin-l\" *ngIf=\"fetchingInProgress\"></ws-spinner> -->\n    <ng-container *ngIf=\"toDoList && toDoList?.length && !fetchingInProgress\">\n      <div *ngFor=\"let toDo of toDoList\" class=\"flex flex-middle content\">\n        <mat-checkbox [disabled]=\"true\" [checked]=\"toDo.completed\" [value]=\"toDo.name\">\n        </mat-checkbox>\n        <a class=\"margin-left-xs content-name\">\n          {{ toDo.name }}\n        </a>\n      </div>\n    </ng-container>\n  </mat-card-content>\n</mat-card>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/what-next/what-next.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/what-next/what-next.component.html ***!
    \***************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesOcmRoutesWhatNextWhatNextComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-card class=\"pad\" *ngIf=\"config\">\n  <h2 class=\"mat-h2 font-weight-500\">{{ config?.title }}</h2>\n  <div class=\"flex flex-wrapped\">\n    <div class=\"width-1-2\">\n      <mat-calendar\n        class=\"w300 margin-m margin-remove-left\"\n        [dateClass]=\"dateClass()\"\n        [selected]=\"selectedDate\"\n        (selectedChange)=\"onSelect($event)\"\n      ></mat-calendar>\n    </div>\n\n    <div class=\"width-1-2\" *ngIf=\"selectedDate\">\n      <div class=\"margin-remove-left margin-m \">\n        <h2 class=\"font-weight-500 mat-h2\">\n          {{ displaySelectedDate }}\n        </h2>\n        <!-- <ws-spinner [spinSize]=\"'small'\" *ngIf=\"fetchingEvents\" class=\"text-center\"></ws-spinner> -->\n        <div *ngIf=\"tabs && !tabs.length && !fetchingEvents\">\n          <h3 class=\"margin-bottom-xs mat-h3 font-weight-500\" i18n>No Events.</h3>\n          <p class=\"mat-caption\" i18n>Click on highlighted dates for releases</p>\n        </div>\n        <mat-tab-group\n          mat-align-tabs=\"center\"\n          [(selectedIndex)]=\"selectedIndex\"\n          [dynamicHeight]=\"true\"\n          (selectedTabChange)=\"getFilteredEventsData($event.index)\"\n          *ngIf=\"tabs && tabs.length\"\n        >\n          <mat-tab *ngFor=\"let tab of tabs\">\n            <ng-template mat-tab-label>\n              <span accesskey=\"1\">{{ tab | titlecase }}</span>\n            </ng-template>\n            <h3\n              *ngIf=\"!filteredEvents && !fetchingEvents\"\n              class=\"margin-top-m mat-h3 font-weight-500\"\n              i18n\n            >\n              No events.\n            </h3>\n            <ng-container *ngIf=\"filteredEvents && filteredEvents.length && !fetchingEvents\">\n              <div *ngFor=\"let event of filteredEvents\">\n                <div class=\"flex flex-middle marginSmall \">\n                  <mat-icon class=\"icon \">event</mat-icon>\n                  <div class=\"margin-left-s \">\n                    <div class=\"event-name mat-body-strong \">{{ event.eventTitle }}</div>\n                    <div *ngIf=\"event.eventDesc\" class=\"mat-caption \">{{ event.eventDesc }}</div>\n                  </div>\n                  <div>\n                    <button\n                      mat-icon-button\n                      *ngIf=\"event?.items\"\n                      (click)=\"\n                        showReleaseItems[event.eventTitle] = !showReleaseItems[event.eventTitle]\n                      \"\n                    >\n                      <mat-icon *ngIf=\"!showReleaseItems[event.eventTitle]\"\n                        >keyboard_arrow_down</mat-icon\n                      >\n                      <mat-icon *ngIf=\"showReleaseItems[event.eventTitle]\"\n                        >keyboard_arrow_up</mat-icon\n                      >\n                    </button>\n                  </div>\n                </div>\n                <ul class=\"margin-left-m \" *ngIf=\"showReleaseItems[(event?.eventTitle)]\">\n                  <li *ngFor=\"let item of event?.items\">{{ item }}</li>\n                </ul>\n              </div>\n            </ng-container>\n          </mat-tab>\n        </mat-tab-group>\n      </div>\n    </div>\n  </div>\n</mat-card>\n";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/ocm-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/ocm-routing.module.ts ***!
    \*****************************************************************************/
  /*! exports provided: OcmRoutingModule */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmOcmRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OcmRoutingModule", function () {
      return OcmRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _routes_ocm_home_ocm_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./routes/ocm-home/ocm-home.component */"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/ocm-home/ocm-home.component.ts");
    /* harmony import */
    var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ws-widget/utils */"./library/ws-widget/utils/src/public-api.ts");
    var routes = [{
      path: '',
      pathMatch: 'full',
      component: _routes_ocm_home_ocm_home_component__WEBPACK_IMPORTED_MODULE_3__["OcmHomeComponent"],
      data: {
        pageType: 'feature',
        pageKey: 'ocm'
      },
      resolve: {
        ocmJson: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_4__["PageResolve"]
      }
    }];
    var OcmRoutingModule = /*#__PURE__*/_createClass(function OcmRoutingModule() {
      _classCallCheck(this, OcmRoutingModule);
    });
    OcmRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OcmRoutingModule);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/ocm.module.ts":
  /*!*********************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/ocm.module.ts ***!
    \*********************************************************************/
  /*! exports provided: OcmModule */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmOcmModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OcmModule", function () {
      return OcmModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _routes_adoption_dashboard_adoption_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./routes/adoption-dashboard/adoption-dashboard.component */"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/adoption-dashboard/adoption-dashboard.component.ts");
    /* harmony import */
    var _routes_change_champions_change_champions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./routes/change-champions/change-champions.component */"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/change-champions/change-champions.component.ts");
    /* harmony import */
    var _routes_co_create_co_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./routes/co-create/co-create.component */"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/co-create/co-create.component.ts");
    /* harmony import */
    var _routes_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./routes/feedback/feedback.component */"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/feedback/feedback.component.ts");
    /* harmony import */
    var _routes_ocm_home_ocm_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./routes/ocm-home/ocm-home.component */"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/ocm-home/ocm-home.component.ts");
    /* harmony import */
    var _routes_sentient_programs_sentient_programs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./routes/sentient-programs/sentient-programs.component */"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/sentient-programs/sentient-programs.component.ts");
    /* harmony import */
    var _routes_what_next_what_next_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./routes/what-next/what-next.component */"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/what-next/what-next.component.ts");
    /* harmony import */
    var _routes_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./routes/about/about.component */"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/about/about.component.ts");
    /* harmony import */
    var _routes_influence_change_influence_change_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./routes/influence-change/influence-change.component */"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/influence-change/influence-change.component.ts");
    /* harmony import */
    var _routes_search_results_strip_search_results_strip_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./routes/search-results-strip/search-results-strip.component */"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/search-results-strip/search-results-strip.component.ts");
    /* harmony import */
    var _routes_to_do_list_to_do_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./routes/to-do-list/to-do-list.component */"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/to-do-list/to-do-list.component.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! @ws-widget/utils */"./library/ws-widget/utils/src/public-api.ts");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    /* harmony import */
    var _ws_widget_resolver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! @ws-widget/resolver */"./library/ws-widget/resolver/src/public-api.ts");
    /* harmony import */
    var _ocm_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ./ocm-routing.module */"./project/ws/app/src/lib/routes/infy/routes/ocm/ocm-routing.module.ts");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    var OcmModule = /*#__PURE__*/_createClass(function OcmModule() {
      _classCallCheck(this, OcmModule);
    });
    OcmModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_routes_adoption_dashboard_adoption_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdoptionDashboardComponent"], _routes_change_champions_change_champions_component__WEBPACK_IMPORTED_MODULE_4__["ChangeChampionsComponent"], _routes_co_create_co_create_component__WEBPACK_IMPORTED_MODULE_5__["CoCreateComponent"], _routes_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_6__["FeedbackComponent"], _routes_ocm_home_ocm_home_component__WEBPACK_IMPORTED_MODULE_7__["OcmHomeComponent"], _routes_sentient_programs_sentient_programs_component__WEBPACK_IMPORTED_MODULE_8__["SentientProgramsComponent"], _routes_what_next_what_next_component__WEBPACK_IMPORTED_MODULE_9__["WhatNextComponent"], _routes_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"], _routes_influence_change_influence_change_component__WEBPACK_IMPORTED_MODULE_11__["InfluenceChangeComponent"], _routes_search_results_strip_search_results_strip_component__WEBPACK_IMPORTED_MODULE_12__["SearchResultsStripComponent"], _routes_to_do_list_to_do_list_component__WEBPACK_IMPORTED_MODULE_13__["ToDoListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"], _ocm_routing_module__WEBPACK_IMPORTED_MODULE_18__["OcmRoutingModule"], _ws_widget_utils__WEBPACK_IMPORTED_MODULE_15__["PipeNameTransformModule"], _ws_widget_resolver__WEBPACK_IMPORTED_MODULE_17__["WidgetResolverModule"], _ws_widget_collection__WEBPACK_IMPORTED_MODULE_16__["UserImageModule"], _ws_widget_collection__WEBPACK_IMPORTED_MODULE_16__["BtnPageBackModule"]]
    })], OcmModule);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/about/about.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/routes/about/about.component.scss ***!
    \*****************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmRoutesAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".pad {\n  padding: 16px;\n}\n@media only screen and (min-width: 600px) {\n  .pad {\n    padding: 16px 32px;\n  }\n}\n.about {\n  line-height: 1.5;\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9vY20vcm91dGVzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc29uYXNoYWp1L1ZpZGVvcy9zcGhlcmUtbW9iaWxlL3N0eWxlcy9fd3MtdmFycy5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvb2NtL3JvdXRlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLW1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUNPTztBQ1RUO0FDOERFO0VIN0RGO0lBR0ksa0JBQUE7RUVBRjtBQUNGO0FGRUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUVDRiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9vY20vcm91dGVzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuQGltcG9ydCAnc3R5bGVzL193cy1taXhpbnMuc2Nzcyc7XG5cbi5wYWQge1xuICBwYWRkaW5nOiAkc2l6ZS1tO1xuICBAaW5jbHVkZSBicmVha3BvaW50LWd0LXhzIHtcbiAgICBwYWRkaW5nOiAkc2l6ZS1tICRzaXplLXhsO1xuICB9XG59XG4uYWJvdXQge1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXNpemU6IDFlbTtcbn1cbiIsIiRmb250LWZhbWlseS1zYW5zOiAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLFxuICAnTm90byBTYW5zJywgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsXG4gICdOb3RvIENvbG9yIEVtb2ppJztcbiRmb250LWZhbWlseS1zZXJpZjogR2VvcmdpYSwgQ2FtYnJpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiRmb250LWZhbWlseS1tb25vOiBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0xpYmVyYXRpb24gTW9ubycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiRmb250LWZhbWlseS1vcGVuLXNhbnM6ICdPcGVuIFNhbnMnO1xuJGZvbnQtZmFtaWx5LW9wZW4tcG9wcGluczogJ1JvYm90byc7XG5cblxuJHNpemUteHM6IDhweDtcbiRzaXplLXM6IDEycHg7XG4kc2l6ZS1tOiAxNnB4O1xuJHNpemUtbDogMjRweDtcbiRzaXplLXhsOiAzMnB4O1xuJHNpemUtbGc6IDI4cHg7XG4kc2l6ZS14eGw6IDQwcHg7XG5cbiRtYXQtdG9vbGJhci14czogNTJweDtcbiRtYXQtdG9vbGJhci1ndC14czogNTZweDtcbiIsIi5wYWQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAucGFkIHtcbiAgICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gIH1cbn1cblxuLmFib3V0IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC1zaXplOiAxZW07XG59IiwiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuXG5AbWl4aW4gcmV0aW5hIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gICAgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gcHJpbnQge1xuICBAbWVkaWEgb25seSBwcmludCB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGJyZWFrcG9pbnQteHMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LXMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LXhsIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDAwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQtbSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQtbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LXhsIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QteHMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LXMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/about/about.component.ts":
  /*!***************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/routes/about/about.component.ts ***!
    \***************************************************************************************/
  /*! exports provided: AboutComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmRoutesAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
        this.config = {
          title: '',
          about: ''
        };
      }
      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return AboutComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AboutComponent.prototype, "config", void 0);
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./about.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./about.component.scss */"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/about/about.component.scss"))["default"]]
    })], AboutComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/adoption-dashboard/adoption-dashboard.component.scss":
  /*!*******************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/routes/adoption-dashboard/adoption-dashboard.component.scss ***!
    \*******************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmRoutesAdoptionDashboardAdoptionDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".pad {\n  padding: 16px;\n}\n@media only screen and (min-width: 600px) {\n  .pad {\n    padding: 16px 32px;\n  }\n}\n@media only screen and (min-width: 960px) {\n  .radioGroup {\n    display: grid;\n  }\n}\n.mat-radio-button ~ .mat-radio-button {\n  margin-top: 32px;\n}\n.icon {\n  transform: scale(1.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9vY20vcm91dGVzL2Fkb3B0aW9uLWRhc2hib2FyZC9hZG9wdGlvbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvc3R5bGVzL193cy12YXJzLnNjc3MiLCJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9vY20vcm91dGVzL2Fkb3B0aW9uLWRhc2hib2FyZC9hZG9wdGlvbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvc3R5bGVzL193cy1taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFDT087QUNUVDtBQzhERTtFSDdERjtJQUdJLGtCQUFBO0VFQUY7QUFDRjtBQzhERTtFSDNERjtJQUVJLGFBQUE7RUVBRjtBQUNGO0FGR0E7RUFDRSxnQkNKUTtBQ0lWO0FGR0E7RUFDRSxxQkFBQTtBRUFGIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL29jbS9yb3V0ZXMvYWRvcHRpb24tZGFzaGJvYXJkL2Fkb3B0aW9uLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy9fd3MtdmFycy5zY3NzJztcbkBpbXBvcnQgJ3N0eWxlcy9fd3MtbWl4aW5zLnNjc3MnO1xuXG4ucGFkIHtcbiAgcGFkZGluZzogJHNpemUtbTtcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC1ndC14cyB7XG4gICAgcGFkZGluZzogJHNpemUtbSAkc2l6ZS14bDtcbiAgfVxufVxuXG4ucmFkaW9Hcm91cCB7XG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQtZ3QtcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgfVxufVxuXG4ubWF0LXJhZGlvLWJ1dHRvbiB+IC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogJHNpemUteGw7XG59XG5cbi5pY29uIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufVxuIiwiJGZvbnQtZmFtaWx5LXNhbnM6ICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsXG4gICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJyxcbiAgJ05vdG8gQ29sb3IgRW1vamknO1xuJGZvbnQtZmFtaWx5LXNlcmlmOiBHZW9yZ2lhLCBDYW1icmlhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuJGZvbnQtZmFtaWx5LW1vbm86IE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuJGZvbnQtZmFtaWx5LW9wZW4tc2FuczogJ09wZW4gU2Fucyc7XG4kZm9udC1mYW1pbHktb3Blbi1wb3BwaW5zOiAnUm9ib3RvJztcblxuXG4kc2l6ZS14czogOHB4O1xuJHNpemUtczogMTJweDtcbiRzaXplLW06IDE2cHg7XG4kc2l6ZS1sOiAyNHB4O1xuJHNpemUteGw6IDMycHg7XG4kc2l6ZS1sZzogMjhweDtcbiRzaXplLXh4bDogNDBweDtcblxuJG1hdC10b29sYmFyLXhzOiA1MnB4O1xuJG1hdC10b29sYmFyLWd0LXhzOiA1NnB4O1xuIiwiLnBhZCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5wYWQge1xuICAgIHBhZGRpbmc6IDE2cHggMzJweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gIC5yYWRpb0dyb3VwIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICB9XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG4uaWNvbiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbn0iLCJAaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5cbkBtaXhpbiByZXRpbmEge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBwcmludCB7XG4gIEBtZWRpYSBvbmx5IHByaW50IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gYnJlYWtwb2ludC14cyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQteGwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkgYW5kIChtYXgtd2lkdGg6IDUwMDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQteGwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC14cyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtbSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/adoption-dashboard/adoption-dashboard.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/routes/adoption-dashboard/adoption-dashboard.component.ts ***!
    \*****************************************************************************************************************/
  /*! exports provided: AdoptionDashboardComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmRoutesAdoptionDashboardAdoptionDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AdoptionDashboardComponent", function () {
      return AdoptionDashboardComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_counter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../services/counter.service */"./project/ws/app/src/lib/routes/infy/routes/ocm/services/counter.service.ts");
    var AdoptionDashboardComponent = /*#__PURE__*/function () {
      function AdoptionDashboardComponent(counterSvc) {
        _classCallCheck(this, AdoptionDashboardComponent);
        this.counterSvc = counterSvc;
        this.config = null;
        this.lexCounterData = null;
        this.infyMeCounterData = null;
        this.lexStatFetchStatus = 'none';
        this.infyMeStatFetchStatus = 'none';
        this.stats = [];
        this.currentStat = 'Wingspan';
        this.counterEnabled = false;
      }
      _createClass(AdoptionDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // const instanceConfig =  this.configSvc.getInstanceConfig()
          // const counterStatus = instanceConfig.featureStatus.get(EnumWsInstanceFeature.COUNTER)
          // if (counterStatus) {
          // this.counterEnabled = counterStatus.isAvailable
          this.counterEnabled = true;
          // }
          this.currentStat = 'Wingspan';
          this.statsClicked();
        }
      }, {
        key: "statsClicked",
        value: function statsClicked() {
          switch (this.currentStat) {
            case 'Wingspan':
              {
                this.lexStatFetchStatus = 'fetching';
                this.fetchWingspanCounterData();
                break;
              }
            case 'infyme':
              {
                this.infyMeStatFetchStatus = 'fetching';
                this.fetchInfyMeCounterData();
                break;
              }
          }
        }
      }, {
        key: "fetchWingspanCounterData",
        value: function fetchWingspanCounterData() {
          var _this = this;
          this.counterSvc.fetchPlatformCounterData().subscribe(function (data) {
            _this.lexCounterData = data;
            _this.lexStatFetchStatus = 'done';
            if (_this.lexCounterData) {
              _this.processWingspanCounterData();
            }
          }, function () {
            _this.lexStatFetchStatus = 'error';
          });
        }
      }, {
        key: "fetchInfyMeCounterData",
        value: function fetchInfyMeCounterData() {
          var _this2 = this;
          this.counterSvc.fetchInfyMeCounterData().subscribe(function (data) {
            _this2.infyMeCounterData = data;
            _this2.infyMeStatFetchStatus = 'done';
            if (_this2.infyMeCounterData) {
              _this2.processInfyMeCounterData();
            }
          }, function () {
            _this2.infyMeStatFetchStatus = 'error';
          });
        }
      }, {
        key: "processWingspanCounterData",
        value: function processWingspanCounterData() {
          var lexCounterData = this.lexCounterData;
          if (lexCounterData) {
            this.stats = this.stats.filter(function (stat) {
              return stat.titleKey !== 'Wingspan';
            });
            this.stats.push({
              title: 'Total unique learners on Wingspan',
              titleKey: 'Wingspan',
              iconName: 'people',
              count: lexCounterData.users[lexCounterData.users.length - 1].count
            }, {
              title: 'Average request per second',
              titleKey: 'Wingspan',
              iconName: 'access_time',
              count: lexCounterData.load[lexCounterData.load.length - 1].count
            }, {
              title: 'Active Learners in last 5 mins',
              titleKey: 'Wingspan',
              iconName: 'notifications',
              count: lexCounterData.learners[lexCounterData.learners.length - 1].count
            });
          }
        }
      }, {
        key: "processInfyMeCounterData",
        value: function processInfyMeCounterData() {
          var infyMeCounterData = this.infyMeCounterData;
          if (infyMeCounterData) {
            this.stats = this.stats.filter(function (stat) {
              return stat.titleKey !== 'infyme';
            });
            this.stats.push({
              title: 'Total downloads',
              titleKey: 'infyme',
              iconName: '',
              count: infyMeCounterData.totalDownloads
            }, {
              title: 'Yesterday\'s Download ',
              titleKey: 'infyme',
              iconName: '',
              count: infyMeCounterData.yesterdaysDownloads
            });
          }
        }
      }]);
      return AdoptionDashboardComponent;
    }();
    AdoptionDashboardComponent.ctorParameters = function () {
      return [{
        type: _services_counter_service__WEBPACK_IMPORTED_MODULE_2__["CounterService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AdoptionDashboardComponent.prototype, "config", void 0);
    AdoptionDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-adoption-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./adoption-dashboard.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/adoption-dashboard/adoption-dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./adoption-dashboard.component.scss */"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/adoption-dashboard/adoption-dashboard.component.scss"))["default"]]
    })], AdoptionDashboardComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/change-champions/change-champions.component.scss":
  /*!***************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/routes/change-champions/change-champions.component.scss ***!
    \***************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmRoutesChangeChampionsChangeChampionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".champions-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.champions-list-item {\n  margin: 12px 0;\n  height: auto !important;\n  display: flex;\n  justify-content: space-between;\n  outline: none;\n}\n\n.champions-user-img {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  display: block;\n}\n\n.champions-name,\n.champions-desc {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.pad {\n  padding: 16px;\n}\n\n@media only screen and (min-width: 600px) {\n  .pad {\n    padding: 16px 32px;\n  }\n}\n\n@media only screen and (min-width: 960px) {\n  .flexlist {\n    justify-content: space-around;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9vY20vcm91dGVzL2NoYW5nZS1jaGFtcGlvbnMvY2hhbmdlLWNoYW1waW9ucy5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL29jbS9yb3V0ZXMvY2hhbmdlLWNoYW1waW9ucy9jaGFuZ2UtY2hhbXBpb25zLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc29uYXNoYWp1L1ZpZGVvcy9zcGhlcmUtbW9iaWxlL3N0eWxlcy9fd3MtdmFycy5zY3NzIiwiL2hvbWUvc29uYXNoYWp1L1ZpZGVvcy9zcGhlcmUtbW9iaWxlL3N0eWxlcy9fd3MtbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDRkY7O0FES0E7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDRkY7O0FES0E7O0VBRUUsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxhRXJCTztBRG1CVDs7QUVrQ0U7RUhqQ0Y7SUFHSSxrQkFBQTtFQ0FGO0FBQ0Y7O0FFa0NFO0VIL0JGO0lBRUksNkJBQUE7RUNBRjtBQUNGIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL29jbS9yb3V0ZXMvY2hhbmdlLWNoYW1waW9ucy9jaGFuZ2UtY2hhbXBpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuQGltcG9ydCAnc3R5bGVzL193cy1taXhpbnMuc2Nzcyc7XG5cbi5jaGFtcGlvbnMtbGlzdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2hhbXBpb25zLWxpc3QtaXRlbSB7XG4gIG1hcmdpbjogJHNpemUtcyAwO1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY2hhbXBpb25zLXVzZXItaW1nIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNoYW1waW9ucy1uYW1lLFxuLmNoYW1waW9ucy1kZXNjIHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5wYWQge1xuICBwYWRkaW5nOiAkc2l6ZS1tO1xuICBAaW5jbHVkZSBicmVha3BvaW50LWd0LXhzIHtcbiAgICBwYWRkaW5nOiAkc2l6ZS1tICRzaXplLXhsO1xuICB9XG59XG5cbi5mbGV4bGlzdCB7XG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQtZ3QtcyB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbn1cbiIsIi5jaGFtcGlvbnMtbGlzdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2hhbXBpb25zLWxpc3QtaXRlbSB7XG4gIG1hcmdpbjogMTJweCAwO1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY2hhbXBpb25zLXVzZXItaW1nIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNoYW1waW9ucy1uYW1lLFxuLmNoYW1waW9ucy1kZXNjIHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5wYWQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAucGFkIHtcbiAgICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAuZmxleGxpc3Qge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG59IiwiJGZvbnQtZmFtaWx5LXNhbnM6ICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsXG4gICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJyxcbiAgJ05vdG8gQ29sb3IgRW1vamknO1xuJGZvbnQtZmFtaWx5LXNlcmlmOiBHZW9yZ2lhLCBDYW1icmlhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuJGZvbnQtZmFtaWx5LW1vbm86IE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuJGZvbnQtZmFtaWx5LW9wZW4tc2FuczogJ09wZW4gU2Fucyc7XG4kZm9udC1mYW1pbHktb3Blbi1wb3BwaW5zOiAnUm9ib3RvJztcblxuXG4kc2l6ZS14czogOHB4O1xuJHNpemUtczogMTJweDtcbiRzaXplLW06IDE2cHg7XG4kc2l6ZS1sOiAyNHB4O1xuJHNpemUteGw6IDMycHg7XG4kc2l6ZS1sZzogMjhweDtcbiRzaXplLXh4bDogNDBweDtcblxuJG1hdC10b29sYmFyLXhzOiA1MnB4O1xuJG1hdC10b29sYmFyLWd0LXhzOiA1NnB4O1xuIiwiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuXG5AbWl4aW4gcmV0aW5hIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gICAgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gcHJpbnQge1xuICBAbWVkaWEgb25seSBwcmludCB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGJyZWFrcG9pbnQteHMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LXMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LXhsIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDAwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQtbSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQtbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LXhsIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QteHMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LXMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/change-champions/change-champions.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/routes/change-champions/change-champions.component.ts ***!
    \*************************************************************************************************************/
  /*! exports provided: ChangeChampionsComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmRoutesChangeChampionsChangeChampionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ChangeChampionsComponent", function () {
      return ChangeChampionsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var ChangeChampionsComponent = /*#__PURE__*/function () {
      function ChangeChampionsComponent() {
        _classCallCheck(this, ChangeChampionsComponent);
        this.config = {
          title: '',
          champions: []
        };
      }
      _createClass(ChangeChampionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return ChangeChampionsComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChangeChampionsComponent.prototype, "config", void 0);
    ChangeChampionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-change-champions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./change-champions.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/change-champions/change-champions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./change-champions.component.scss */"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/change-champions/change-champions.component.scss"))["default"]]
    })], ChangeChampionsComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/co-create/co-create.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/routes/co-create/co-create.component.scss ***!
    \*************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmRoutesCoCreateCoCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".pad {\n  padding: 16px;\n}\n@media only screen and (min-width: 600px) {\n  .pad {\n    padding: 16px 32px;\n  }\n}\n.contribution {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n@media only screen and (min-width: 600px) {\n  .contribution {\n    justify-content: space-between;\n  }\n}\n.selected {\n  transform: scale(2);\n}\n.circle {\n  margin: 12px;\n  border-radius: 50%;\n  height: 7em;\n  width: 7em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.icon {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9vY20vcm91dGVzL2NvLWNyZWF0ZS9jby1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvc3R5bGVzL193cy12YXJzLnNjc3MiLCJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9vY20vcm91dGVzL2NvLWNyZWF0ZS9jby1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvc3R5bGVzL193cy1taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFDT087QUNUVDtBQzhERTtFSDdERjtJQUdJLGtCQUFBO0VFQUY7QUFDRjtBRkdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBRUFGO0FDbURFO0VIdERGO0lBS0ksOEJBQUE7RUVFRjtBQUNGO0FGQ0E7RUFDRSxtQkFBQTtBRUVGO0FGQ0E7RUFDRSxZQ2RPO0VEZVAsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUNyQk87RURzQlAsc0JBQUE7RUFDQSxlQUFBO0FFRUY7QUZDQTtFQUNFLFlBQUE7QUVFRiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9vY20vcm91dGVzL2NvLWNyZWF0ZS9jby1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5AaW1wb3J0ICdzdHlsZXMvX3dzLW1peGlucy5zY3NzJztcblxuLnBhZCB7XG4gIHBhZGRpbmc6ICRzaXplLW07XG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQtZ3QteHMge1xuICAgIHBhZGRpbmc6ICRzaXplLW0gJHNpemUteGw7XG4gIH1cbn1cblxuLmNvbnRyaWJ1dGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQtZ3QteHMge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxufVxuXG4uc2VsZWN0ZWQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xufVxuXG4uY2lyY2xlIHtcbiAgbWFyZ2luOiAkc2l6ZS1zO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogN2VtO1xuICB3aWR0aDogN2VtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogJHNpemUtcztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiIsIiRmb250LWZhbWlseS1zYW5zOiAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLFxuICAnTm90byBTYW5zJywgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsXG4gICdOb3RvIENvbG9yIEVtb2ppJztcbiRmb250LWZhbWlseS1zZXJpZjogR2VvcmdpYSwgQ2FtYnJpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiRmb250LWZhbWlseS1tb25vOiBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0xpYmVyYXRpb24gTW9ubycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiRmb250LWZhbWlseS1vcGVuLXNhbnM6ICdPcGVuIFNhbnMnO1xuJGZvbnQtZmFtaWx5LW9wZW4tcG9wcGluczogJ1JvYm90byc7XG5cblxuJHNpemUteHM6IDhweDtcbiRzaXplLXM6IDEycHg7XG4kc2l6ZS1tOiAxNnB4O1xuJHNpemUtbDogMjRweDtcbiRzaXplLXhsOiAzMnB4O1xuJHNpemUtbGc6IDI4cHg7XG4kc2l6ZS14eGw6IDQwcHg7XG5cbiRtYXQtdG9vbGJhci14czogNTJweDtcbiRtYXQtdG9vbGJhci1ndC14czogNTZweDtcbiIsIi5wYWQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAucGFkIHtcbiAgICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gIH1cbn1cblxuLmNvbnRyaWJ1dGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5jb250cmlidXRpb24ge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxufVxuXG4uc2VsZWN0ZWQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xufVxuXG4uY2lyY2xlIHtcbiAgbWFyZ2luOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogN2VtO1xuICB3aWR0aDogN2VtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iLCJAaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5cbkBtaXhpbiByZXRpbmEge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBwcmludCB7XG4gIEBtZWRpYSBvbmx5IHByaW50IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gYnJlYWtwb2ludC14cyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQteGwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkgYW5kIChtYXgtd2lkdGg6IDUwMDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQteGwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC14cyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtbSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/co-create/co-create.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/routes/co-create/co-create.component.ts ***!
    \***********************************************************************************************/
  /*! exports provided: CoCreateComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmRoutesCoCreateCoCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CoCreateComponent", function () {
      return CoCreateComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ws-widget/utils */"./library/ws-widget/utils/src/public-api.ts");
    /* harmony import */
    var _services_ocm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../services/ocm.service */"./project/ws/app/src/lib/routes/infy/routes/ocm/services/ocm.service.ts");
    var CoCreateComponent = /*#__PURE__*/function () {
      function CoCreateComponent(matSnackBar, configSvc, ocmService) {
        _classCallCheck(this, CoCreateComponent);
        this.matSnackBar = matSnackBar;
        this.configSvc = configSvc;
        this.ocmService = ocmService;
        this.config = {
          title: '',
          desc: '',
          emailTo: '',
          contributionList: []
        };
        this.showAnwserInput = false;
        this.mailRequest = {
          type: '',
          answer: ''
        };
        this.fixedEmailText = '';
        this.submitInProgress = false;
        this.userEmail = '';
        this.userName = '';
      }
      _createClass(CoCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.configSvc.userProfile) {
            this.userEmail = this.configSvc.userProfile.email;
            this.userName = this.configSvc.userProfile.userName;
          }
        }
      }, {
        key: "sendMail",
        value: function sendMail(form) {
          var _this3 = this;
          this.submitInProgress = true;
          var req = {
            emailTo: [{
              email: this.config.emailTo
            }],
            sharedBy: [{
              name: this.userName,
              email: this.userEmail
            }],
            ccTo: [{
              name: this.userName,
              email: this.userEmail
            }],
            body: {
              text: "".concat(this.fixedEmailText, ".\n\n").concat(this.mailRequest.answer)
            },
            timestamp: new Date().getTime(),
            appURL: location.host,
            subject: "Be a Co-Creator - '".concat(this.mailRequest.type)
          };
          // //console.log.log('rrq', req)
          this.ocmService.shareTextMail(req).subscribe(function () {
            form.resetForm();
            _this3.matSnackBar.open(_this3.toastSuccess.nativeElement.value);
            _this3.submitInProgress = false;
          }, function () {
            _this3.matSnackBar.open(_this3.toastError.nativeElement.value);
            _this3.submitInProgress = false;
          });
        }
      }, {
        key: "contributionTypeClicked",
        value: function contributionTypeClicked(data) {
          this.mailRequest.type = data.name;
          this.showAnwserInput = true;
          this.fixedEmailText = data.emailText;
        }
      }]);
      return CoCreateComponent;
    }();
    CoCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }, {
        type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_3__["ConfigurationsService"]
      }, {
        type: _services_ocm_service__WEBPACK_IMPORTED_MODULE_4__["OcmService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CoCreateComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toastSuccess', {
      "static": true
    })], CoCreateComponent.prototype, "toastSuccess", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toastError', {
      "static": true
    })], CoCreateComponent.prototype, "toastError", void 0);
    CoCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-co-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./co-create.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/co-create/co-create.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./co-create.component.scss */"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/co-create/co-create.component.scss"))["default"]]
    })], CoCreateComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/feedback/feedback.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/routes/feedback/feedback.component.scss ***!
    \***********************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmRoutesFeedbackFeedbackComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".field-container {\n  width: 100%;\n  margin: auto;\n}\n@media only screen and (min-width: 1280px) {\n  .field-container {\n    width: 70%;\n  }\n}\n@media only screen and (min-width: 600px) {\n  .field-container {\n    width: 85%;\n  }\n}\n.pad {\n  padding: 16px;\n}\n@media only screen and (min-width: 600px) {\n  .pad {\n    padding: 16px 32px;\n  }\n}\n.rating-form-field {\n  width: 100%;\n  margin-bottom: 24px;\n  opacity: 0;\n  height: 0;\n}\n.rating-container {\n  display: block;\n  margin-bottom: 24px;\n  margin-top: -24px;\n}\n.rating-container .feedback-form-field {\n  margin-bottom: 0;\n}\n.rating-container .rating-input {\n  height: 0px !important;\n  display: block;\n}\n.rating-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n}\n.rating-button {\n  width: 48px;\n  height: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9vY20vcm91dGVzL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvb2NtL3JvdXRlcy9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLW1peGlucy5zY3NzIiwiL2hvbWUvc29uYXNoYWp1L1ZpZGVvcy9zcGhlcmUtbW9iaWxlL3N0eWxlcy9fd3MtdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNGRjtBQ3VFRTtFRnZFRjtJQUtJLFVBQUE7RUNERjtBQUNGO0FDd0RFO0VGN0RGO0lBU0ksVUFBQTtFQ0FGO0FBQ0Y7QURFQTtFQUNFLGFHTE87QUZNVDtBQytDRTtFRmpERjtJQUdJLGtCQUFBO0VDR0Y7QUFDRjtBREFBO0VBQ0UsV0FBQTtFQUNBLG1CR1pPO0VIYVAsVUFBQTtFQUNBLFNBQUE7QUNHRjtBREFBO0VBQ0UsY0FBQTtFQUNBLG1CR25CTztFSG9CUCxpQkFBQTtBQ0dGO0FEREU7RUFDRSxnQkFBQTtBQ0dKO0FEQUU7RUFDRSxzQkFBQTtFQUNBLGNBQUE7QUNFSjtBREVBO0VBRUUsZUFEWTtFQUVaLFdBRlk7RUFHWixZQUhZO0FDR2Q7QURHQTtFQUVFLFdBRE87RUFFUCxZQUZPO0FDQ1QiLCJmaWxlIjoicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvb2NtL3JvdXRlcy9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy9fd3MtY29tbW9uLnNjc3MnO1xuQGltcG9ydCAnc3R5bGVzL193cy1taXhpbnMuc2Nzcyc7XG5cbi5maWVsZC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQtZ3QtbSB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQtZ3QteHMge1xuICAgIHdpZHRoOiA4NSU7XG4gIH1cbn1cbi5wYWQge1xuICBwYWRkaW5nOiAkc2l6ZS1tO1xuICBAaW5jbHVkZSBicmVha3BvaW50LWd0LXhzIHtcbiAgICBwYWRkaW5nOiAkc2l6ZS1tICRzaXplLXhsO1xuICB9XG59XG5cbi5yYXRpbmctZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAkc2l6ZS1sO1xuICBvcGFjaXR5OiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi5yYXRpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206ICRzaXplLWw7XG4gIG1hcmdpbi10b3A6IC0kc2l6ZS1sO1xuXG4gIC5mZWVkYmFjay1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgLnJhdGluZy1pbnB1dCB7XG4gICAgaGVpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG4ucmF0aW5nLWljb24ge1xuICAkaWNvbi1zaXplOiAzMnB4O1xuICBmb250LXNpemU6ICRpY29uLXNpemU7XG4gIHdpZHRoOiAkaWNvbi1zaXplO1xuICBoZWlnaHQ6ICRpY29uLXNpemU7XG59XG5cbi5yYXRpbmctYnV0dG9uIHtcbiAgJHNpemU6IDQ4cHg7XG4gIHdpZHRoOiAkc2l6ZTtcbiAgaGVpZ2h0OiAkc2l6ZTtcbn1cbiIsIi5maWVsZC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgLmZpZWxkLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuZmllbGQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogODUlO1xuICB9XG59XG5cbi5wYWQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAucGFkIHtcbiAgICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gIH1cbn1cblxuLnJhdGluZy1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLnJhdGluZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgbWFyZ2luLXRvcDogLTI0cHg7XG59XG4ucmF0aW5nLWNvbnRhaW5lciAuZmVlZGJhY2stZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucmF0aW5nLWNvbnRhaW5lciAucmF0aW5nLWlucHV0IHtcbiAgaGVpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5yYXRpbmctaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbn1cblxuLnJhdGluZy1idXR0b24ge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xufSIsIkBpbXBvcnQgJ3N0eWxlcy9fd3MtdmFycy5zY3NzJztcblxuQG1peGluIHJldGluYSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIHByaW50IHtcbiAgQG1lZGlhIG9ubHkgcHJpbnQge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBicmVha3BvaW50LXhzIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC14bCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSBhbmQgKG1heC13aWR0aDogNTAwMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LXMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC14bCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LXhzIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiIsIiRmb250LWZhbWlseS1zYW5zOiAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLFxuICAnTm90byBTYW5zJywgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsXG4gICdOb3RvIENvbG9yIEVtb2ppJztcbiRmb250LWZhbWlseS1zZXJpZjogR2VvcmdpYSwgQ2FtYnJpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiRmb250LWZhbWlseS1tb25vOiBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0xpYmVyYXRpb24gTW9ubycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiRmb250LWZhbWlseS1vcGVuLXNhbnM6ICdPcGVuIFNhbnMnO1xuJGZvbnQtZmFtaWx5LW9wZW4tcG9wcGluczogJ1JvYm90byc7XG5cblxuJHNpemUteHM6IDhweDtcbiRzaXplLXM6IDEycHg7XG4kc2l6ZS1tOiAxNnB4O1xuJHNpemUtbDogMjRweDtcbiRzaXplLXhsOiAzMnB4O1xuJHNpemUtbGc6IDI4cHg7XG4kc2l6ZS14eGw6IDQwcHg7XG5cbiRtYXQtdG9vbGJhci14czogNTJweDtcbiRtYXQtdG9vbGJhci1ndC14czogNTZweDtcbiJdfQ== */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/feedback/feedback.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/routes/feedback/feedback.component.ts ***!
    \*********************************************************************************************/
  /*! exports provided: FeedbackComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmRoutesFeedbackFeedbackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function () {
      return FeedbackComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _services_ocm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../services/ocm.service */"./project/ws/app/src/lib/routes/infy/routes/ocm/services/ocm.service.ts");
    var FeedbackComponent = /*#__PURE__*/function () {
      function FeedbackComponent(ocmService, snackBar) {
        _classCallCheck(this, FeedbackComponent);
        this.ocmService = ocmService;
        this.snackBar = snackBar;
        this.config = {
          title: ''
        };
        this.ratingLoop = [];
        this.numbersPattern = /^[1-9]\d*/;
        this.feedbackRequest = {
          contentId: null,
          feedbackSubType: null,
          rating: '',
          feedback: [{
            question: '',
            meta: '',
            answer: ''
          }],
          feedbackType: ''
        };
        this.submitInProgress = false;
      }
      _createClass(FeedbackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resetForm();
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.ratingLoop = [0, 0, 0, 0, 0];
          this.ratingLoop.fill(1);
          this.feedbackRequest = {
            contentId: null,
            feedbackSubType: null,
            rating: '',
            feedback: [{
              question: 'Provide your suggestion',
              meta: 'ocm',
              answer: ''
            }],
            feedbackType: 'ocm'
          };
        }
      }, {
        key: "submitFeedback",
        value: function submitFeedback(feedbackRequest, feedbackForm) {
          var _this4 = this;
          this.submitInProgress = true;
          this.ocmService.submitFeedback(feedbackRequest).subscribe(function () {
            _this4.resetForm();
            feedbackForm.resetForm();
            _this4.submitInProgress = false;
            _this4.snackBar.open(_this4.toastSuccess.nativeElement.value);
          }, function () {
            _this4.snackBar.open(_this4.toastError.nativeElement.value);
            _this4.submitInProgress = false;
          });
        }
      }]);
      return FeedbackComponent;
    }();
    FeedbackComponent.ctorParameters = function () {
      return [{
        type: _services_ocm_service__WEBPACK_IMPORTED_MODULE_3__["OcmService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FeedbackComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toastSuccess', {
      "static": true
    })], FeedbackComponent.prototype, "toastSuccess", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toastError', {
      "static": true
    })], FeedbackComponent.prototype, "toastError", void 0);
    FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-feedback',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./feedback.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/feedback/feedback.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./feedback.component.scss */"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/feedback/feedback.component.scss"))["default"]]
    })], FeedbackComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/influence-change/influence-change.component.scss":
  /*!***************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/routes/influence-change/influence-change.component.scss ***!
    \***************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmRoutesInfluenceChangeInfluenceChangeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "#yammer-feed {\n  height: 400px;\n  padding-top: 12px;\n}\n\n.pad {\n  padding: 16px;\n}\n\n@media only screen and (min-width: 600px) {\n  .pad {\n    padding: 16px 32px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9vY20vcm91dGVzL2luZmx1ZW5jZS1jaGFuZ2UvaW5mbHVlbmNlLWNoYW5nZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLXZhcnMuc2NzcyIsInByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL29jbS9yb3V0ZXMvaW5mbHVlbmNlLWNoYW5nZS9pbmZsdWVuY2UtY2hhbmdlLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc29uYXNoYWp1L1ZpZGVvcy9zcGhlcmUtbW9iaWxlL3N0eWxlcy9fd3MtbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0VBQ0EsaUJDS087QUNQVDs7QUZLQTtFQUNFLGFDRU87QUNKVDs7QUN5REU7RUh4REY7SUFHSSxrQkFBQTtFRUFGO0FBQ0YiLCJmaWxlIjoicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvb2NtL3JvdXRlcy9pbmZsdWVuY2UtY2hhbmdlL2luZmx1ZW5jZS1jaGFuZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5AaW1wb3J0ICdzdHlsZXMvX3dzLW1peGlucy5zY3NzJztcblxuI3lhbW1lci1mZWVkIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgcGFkZGluZy10b3A6ICRzaXplLXM7XG59XG5cbi5wYWQge1xuICBwYWRkaW5nOiAkc2l6ZS1tO1xuICBAaW5jbHVkZSBicmVha3BvaW50LWd0LXhzIHtcbiAgICBwYWRkaW5nOiAkc2l6ZS1tICRzaXplLXhsO1xuICB9XG59XG4iLCIkZm9udC1mYW1pbHktc2FuczogJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCxcbiAgJ05vdG8gU2FucycsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLFxuICAnTm90byBDb2xvciBFbW9qaSc7XG4kZm9udC1mYW1pbHktc2VyaWY6IEdlb3JnaWEsIENhbWJyaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4kZm9udC1mYW1pbHktbW9ubzogTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdMaWJlcmF0aW9uIE1vbm8nLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4kZm9udC1mYW1pbHktb3Blbi1zYW5zOiAnT3BlbiBTYW5zJztcbiRmb250LWZhbWlseS1vcGVuLXBvcHBpbnM6ICdSb2JvdG8nO1xuXG5cbiRzaXplLXhzOiA4cHg7XG4kc2l6ZS1zOiAxMnB4O1xuJHNpemUtbTogMTZweDtcbiRzaXplLWw6IDI0cHg7XG4kc2l6ZS14bDogMzJweDtcbiRzaXplLWxnOiAyOHB4O1xuJHNpemUteHhsOiA0MHB4O1xuXG4kbWF0LXRvb2xiYXIteHM6IDUycHg7XG4kbWF0LXRvb2xiYXItZ3QteHM6IDU2cHg7XG4iLCIjeWFtbWVyLWZlZWQge1xuICBoZWlnaHQ6IDQwMHB4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn1cblxuLnBhZCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5wYWQge1xuICAgIHBhZGRpbmc6IDE2cHggMzJweDtcbiAgfVxufSIsIkBpbXBvcnQgJ3N0eWxlcy9fd3MtdmFycy5zY3NzJztcblxuQG1peGluIHJldGluYSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIHByaW50IHtcbiAgQG1lZGlhIG9ubHkgcHJpbnQge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBicmVha3BvaW50LXhzIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC14bCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSBhbmQgKG1heC13aWR0aDogNTAwMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LXMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC14bCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LXhzIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiJdfQ== */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/influence-change/influence-change.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/routes/influence-change/influence-change.component.ts ***!
    \*************************************************************************************************************/
  /*! exports provided: InfluenceChangeComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmRoutesInfluenceChangeInfluenceChangeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "InfluenceChangeComponent", function () {
      return InfluenceChangeComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");

    // import { IWsInfluencerConfig } from '../../../../models/ocm.model'
    // import { IWsDiscussionForumInput } from '../../../../models/social.model'
    var InfluenceChangeComponent = /*#__PURE__*/function () {
      function InfluenceChangeComponent() {
        _classCallCheck(this, InfluenceChangeComponent);
      }
      _createClass(InfluenceChangeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
        }
      }]);
      return InfluenceChangeComponent;
    }();
    InfluenceChangeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-influence-change',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./influence-change.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/influence-change/influence-change.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./influence-change.component.scss */"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/influence-change/influence-change.component.scss"))["default"]]
    })], InfluenceChangeComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/ocm-home/ocm-home.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/routes/ocm-home/ocm-home.component.scss ***!
    \***********************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmRoutesOcmHomeOcmHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".strip {\n  display: block;\n}\n\n.pad {\n  padding: 16px;\n}\n\n@media only screen and (min-width: 600px) {\n  .pad {\n    padding: 16px 32px;\n  }\n}\n\n.container {\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9vY20vcm91dGVzL29jbS1ob21lL29jbS1ob21lLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvb2NtL3JvdXRlcy9vY20taG9tZS9vY20taG9tZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLXZhcnMuc2NzcyIsIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLW1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsY0FBQTtBQ0ZGOztBREtBO0VBQ0UsYUVHTztBRExUOztBRTBERTtFSHpERjtJQUdJLGtCQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFLHNCQUFBO0FDQUYiLCJmaWxlIjoicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvb2NtL3JvdXRlcy9vY20taG9tZS9vY20taG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy9fd3MtdmFycy5zY3NzJztcbkBpbXBvcnQgJ3N0eWxlcy9fd3MtbWl4aW5zLnNjc3MnO1xuXG4uc3RyaXAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBhZCB7XG4gIHBhZGRpbmc6ICRzaXplLW07XG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQtZ3QteHMge1xuICAgIHBhZGRpbmc6ICRzaXplLW0gJHNpemUteGw7XG4gIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4iLCIuc3RyaXAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBhZCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5wYWQge1xuICAgIHBhZGRpbmc6IDE2cHggMzJweDtcbiAgfVxufVxuXG4uY29udGFpbmVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn0iLCIkZm9udC1mYW1pbHktc2FuczogJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCxcbiAgJ05vdG8gU2FucycsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLFxuICAnTm90byBDb2xvciBFbW9qaSc7XG4kZm9udC1mYW1pbHktc2VyaWY6IEdlb3JnaWEsIENhbWJyaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4kZm9udC1mYW1pbHktbW9ubzogTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdMaWJlcmF0aW9uIE1vbm8nLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4kZm9udC1mYW1pbHktb3Blbi1zYW5zOiAnT3BlbiBTYW5zJztcbiRmb250LWZhbWlseS1vcGVuLXBvcHBpbnM6ICdSb2JvdG8nO1xuXG5cbiRzaXplLXhzOiA4cHg7XG4kc2l6ZS1zOiAxMnB4O1xuJHNpemUtbTogMTZweDtcbiRzaXplLWw6IDI0cHg7XG4kc2l6ZS14bDogMzJweDtcbiRzaXplLWxnOiAyOHB4O1xuJHNpemUteHhsOiA0MHB4O1xuXG4kbWF0LXRvb2xiYXIteHM6IDUycHg7XG4kbWF0LXRvb2xiYXItZ3QteHM6IDU2cHg7XG4iLCJAaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5cbkBtaXhpbiByZXRpbmEge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBwcmludCB7XG4gIEBtZWRpYSBvbmx5IHByaW50IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gYnJlYWtwb2ludC14cyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQteGwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkgYW5kIChtYXgtd2lkdGg6IDUwMDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQteGwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC14cyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtbSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/ocm-home/ocm-home.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/routes/ocm-home/ocm-home.component.ts ***!
    \*********************************************************************************************/
  /*! exports provided: OcmHomeComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmRoutesOcmHomeOcmHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OcmHomeComponent", function () {
      return OcmHomeComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ws-widget/utils */"./library/ws-widget/utils/src/public-api.ts");
    var OcmHomeComponent = /*#__PURE__*/function () {
      function OcmHomeComponent(route, configSvc) {
        _classCallCheck(this, OcmHomeComponent);
        this.route = route;
        this.configSvc = configSvc;
        this.pageTitle = '';
        this.widgetBannersRequest = null;
        this.ocmRequestData = null;
        this.errorFetchingJson = false;
      }
      _createClass(OcmHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;
          this.route.data.subscribe(function (response) {
            if (response.ocmJson.data) {
              _this5.ocmRequestData = response.ocmJson.data;
              if (_this5.ocmRequestData) {
                _this5.pageTitle = _this5.ocmRequestData.pageTitle;
                _this5.widgetBannersRequest = _this5.ocmRequestData.banners;
              }
            } else if (response.ocmJson.error) {
              _this5.errorFetchingJson = true;
            }
          });
        }
      }]);
      return OcmHomeComponent;
    }();
    OcmHomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_3__["ConfigurationsService"]
      }];
    };
    OcmHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-ocm-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./ocm-home.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/ocm-home/ocm-home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./ocm-home.component.scss */"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/ocm-home/ocm-home.component.scss"))["default"]]
    })], OcmHomeComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/search-results-strip/search-results-strip.component.scss":
  /*!***********************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/routes/search-results-strip/search-results-strip.component.scss ***!
    \***********************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmRoutesSearchResultsStripSearchResultsStripComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".pad {\n  padding: 16px;\n}\n@media only screen and (min-width: 600px) {\n  .pad {\n    padding: 16px 32px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9vY20vcm91dGVzL3NlYXJjaC1yZXN1bHRzLXN0cmlwL3NlYXJjaC1yZXN1bHRzLXN0cmlwLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc29uYXNoYWp1L1ZpZGVvcy9zcGhlcmUtbW9iaWxlL3N0eWxlcy9fd3MtdmFycy5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvb2NtL3JvdXRlcy9zZWFyY2gtcmVzdWx0cy1zdHJpcC9zZWFyY2gtcmVzdWx0cy1zdHJpcC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLW1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUNPTztBQ1RUO0FDOERFO0VIN0RGO0lBR0ksa0JBQUE7RUVBRjtBQUNGIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL29jbS9yb3V0ZXMvc2VhcmNoLXJlc3VsdHMtc3RyaXAvc2VhcmNoLXJlc3VsdHMtc3RyaXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5AaW1wb3J0ICdzdHlsZXMvX3dzLW1peGlucy5zY3NzJztcblxuLnBhZCB7XG4gIHBhZGRpbmc6ICRzaXplLW07XG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQtZ3QteHMge1xuICAgIHBhZGRpbmc6ICRzaXplLW0gJHNpemUteGw7XG4gIH1cbn1cbiIsIiRmb250LWZhbWlseS1zYW5zOiAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLFxuICAnTm90byBTYW5zJywgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsXG4gICdOb3RvIENvbG9yIEVtb2ppJztcbiRmb250LWZhbWlseS1zZXJpZjogR2VvcmdpYSwgQ2FtYnJpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiRmb250LWZhbWlseS1tb25vOiBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0xpYmVyYXRpb24gTW9ubycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiRmb250LWZhbWlseS1vcGVuLXNhbnM6ICdPcGVuIFNhbnMnO1xuJGZvbnQtZmFtaWx5LW9wZW4tcG9wcGluczogJ1JvYm90byc7XG5cblxuJHNpemUteHM6IDhweDtcbiRzaXplLXM6IDEycHg7XG4kc2l6ZS1tOiAxNnB4O1xuJHNpemUtbDogMjRweDtcbiRzaXplLXhsOiAzMnB4O1xuJHNpemUtbGc6IDI4cHg7XG4kc2l6ZS14eGw6IDQwcHg7XG5cbiRtYXQtdG9vbGJhci14czogNTJweDtcbiRtYXQtdG9vbGJhci1ndC14czogNTZweDtcbiIsIi5wYWQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAucGFkIHtcbiAgICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gIH1cbn0iLCJAaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5cbkBtaXhpbiByZXRpbmEge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBwcmludCB7XG4gIEBtZWRpYSBvbmx5IHByaW50IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gYnJlYWtwb2ludC14cyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQteGwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkgYW5kIChtYXgtd2lkdGg6IDUwMDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQteGwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC14cyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtbSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/search-results-strip/search-results-strip.component.ts":
  /*!*********************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/routes/search-results-strip/search-results-strip.component.ts ***!
    \*********************************************************************************************************************/
  /*! exports provided: SearchResultsStripComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmRoutesSearchResultsStripSearchResultsStripComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SearchResultsStripComponent", function () {
      return SearchResultsStripComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var SearchResultsStripComponent = /*#__PURE__*/function () {
      function SearchResultsStripComponent() {
        _classCallCheck(this, SearchResultsStripComponent);
        this.config = null;
        this.errorMessageCode = 'NONE';
      }
      _createClass(SearchResultsStripComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleNoContent",
        value: function handleNoContent(event) {
          if (event === 'none') {
            this.errorMessageCode = 'NO_DATA';
          } else if (event === 'error') {
            this.errorMessageCode = 'API_FAILURE';
          } else {
            this.errorMessageCode = 'NONE';
          }
        }
      }]);
      return SearchResultsStripComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SearchResultsStripComponent.prototype, "config", void 0);
    SearchResultsStripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-search-results-strip',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./search-results-strip.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/search-results-strip/search-results-strip.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./search-results-strip.component.scss */"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/search-results-strip/search-results-strip.component.scss"))["default"]]
    })], SearchResultsStripComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/sentient-programs/sentient-programs.component.scss":
  /*!*****************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/routes/sentient-programs/sentient-programs.component.scss ***!
    \*****************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmRoutesSentientProgramsSentientProgramsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".logo {\n  width: 2.5em;\n  height: 2.5em;\n  margin-right: 16px;\n}\n\n.pad {\n  padding: 16px;\n}\n\n@media only screen and (min-width: 600px) {\n  .pad {\n    padding: 16px 32px;\n  }\n}\n\n.sentient-programs-card {\n  justify-content: space-between;\n}\n\n@media only screen and (max-width: 1279px) {\n  .sentient-programs-card {\n    justify-content: space-around;\n  }\n}\n\n@media only screen and (max-width: 599px) {\n  .card {\n    justify-content: center;\n  }\n}\n\n.program {\n  margin: 12px;\n  height: 7em;\n  min-width: 10em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px;\n  box-sizing: border-box;\n  cursor: pointer;\n  flex: 1;\n  color: white;\n}\n\n.selected {\n  font-weight: 500;\n  font-size: 1.4em !important;\n}\n\n.title {\n  font-size: 1.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9vY20vcm91dGVzL3NlbnRpZW50LXByb2dyYW1zL3NlbnRpZW50LXByb2dyYW1zLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc29uYXNoYWp1L1ZpZGVvcy9zcGhlcmUtbW9iaWxlL3N0eWxlcy9fd3MtdmFycy5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvb2NtL3JvdXRlcy9zZW50aWVudC1wcm9ncmFtcy9zZW50aWVudC1wcm9ncmFtcy5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLW1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkNLTztBQ1BUOztBRktBO0VBQ0UsYUNDTztBQ0hUOztBQ3dERTtFSHZERjtJQUdJLGtCQUFBO0VFQUY7QUFDRjs7QUZHQTtFQUNFLDhCQUFBO0FFQUY7O0FDcUNFO0VIdENGO0lBSUksNkJBQUE7RUVDRjtBQUNGOztBQ3NCRTtFSHBCRjtJQUVJLHVCQUFBO0VFQ0Y7QUFDRjs7QUZFQTtFQUNFLFlDckJPO0VEc0JQLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQzNCTztFRDRCUCxzQkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBRUNGOztBRkVBO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtBRUNGOztBRkVBO0VBQ0UsZ0JBQUE7QUVDRiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9vY20vcm91dGVzL3NlbnRpZW50LXByb2dyYW1zL3NlbnRpZW50LXByb2dyYW1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuQGltcG9ydCAnc3R5bGVzL193cy1taXhpbnMuc2Nzcyc7XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDIuNWVtO1xuICBoZWlnaHQ6IDIuNWVtO1xuICBtYXJnaW4tcmlnaHQ6ICRzaXplLW07XG59XG5cbi5wYWQge1xuICBwYWRkaW5nOiAkc2l6ZS1tO1xuICBAaW5jbHVkZSBicmVha3BvaW50LWd0LXhzIHtcbiAgICBwYWRkaW5nOiAkc2l6ZS1tICRzaXplLXhsO1xuICB9XG59XG5cbi5zZW50aWVudC1wcm9ncmFtcy1jYXJkIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQtbHQtbCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbn1cblxuLmNhcmQge1xuICBAaW5jbHVkZSBicmVha3BvaW50LWx0LXMge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbi5wcm9ncmFtIHtcbiAgbWFyZ2luOiAkc2l6ZS1zO1xuICBoZWlnaHQ6IDdlbTtcbiAgbWluLXdpZHRoOiAxMGVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogJHNpemUtcztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbGV4OiAxO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS40ZW0gIWltcG9ydGFudDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cbiIsIiRmb250LWZhbWlseS1zYW5zOiAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLFxuICAnTm90byBTYW5zJywgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsXG4gICdOb3RvIENvbG9yIEVtb2ppJztcbiRmb250LWZhbWlseS1zZXJpZjogR2VvcmdpYSwgQ2FtYnJpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiRmb250LWZhbWlseS1tb25vOiBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0xpYmVyYXRpb24gTW9ubycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiRmb250LWZhbWlseS1vcGVuLXNhbnM6ICdPcGVuIFNhbnMnO1xuJGZvbnQtZmFtaWx5LW9wZW4tcG9wcGluczogJ1JvYm90byc7XG5cblxuJHNpemUteHM6IDhweDtcbiRzaXplLXM6IDEycHg7XG4kc2l6ZS1tOiAxNnB4O1xuJHNpemUtbDogMjRweDtcbiRzaXplLXhsOiAzMnB4O1xuJHNpemUtbGc6IDI4cHg7XG4kc2l6ZS14eGw6IDQwcHg7XG5cbiRtYXQtdG9vbGJhci14czogNTJweDtcbiRtYXQtdG9vbGJhci1ndC14czogNTZweDtcbiIsIi5sb2dvIHtcbiAgd2lkdGg6IDIuNWVtO1xuICBoZWlnaHQ6IDIuNWVtO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5wYWQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAucGFkIHtcbiAgICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gIH1cbn1cblxuLnNlbnRpZW50LXByb2dyYW1zLWNhcmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAuc2VudGllbnQtcHJvZ3JhbXMtY2FyZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAuY2FyZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLnByb2dyYW0ge1xuICBtYXJnaW46IDEycHg7XG4gIGhlaWdodDogN2VtO1xuICBtaW4td2lkdGg6IDEwZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjRlbSAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDEuM2VtO1xufSIsIkBpbXBvcnQgJ3N0eWxlcy9fd3MtdmFycy5zY3NzJztcblxuQG1peGluIHJldGluYSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIHByaW50IHtcbiAgQG1lZGlhIG9ubHkgcHJpbnQge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBicmVha3BvaW50LXhzIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC14bCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSBhbmQgKG1heC13aWR0aDogNTAwMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LXMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC14bCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LXhzIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiJdfQ== */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/sentient-programs/sentient-programs.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/routes/sentient-programs/sentient-programs.component.ts ***!
    \***************************************************************************************************************/
  /*! exports provided: SentientProgramsComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmRoutesSentientProgramsSentientProgramsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SentientProgramsComponent", function () {
      return SentientProgramsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var SentientProgramsComponent = /*#__PURE__*/function () {
      function SentientProgramsComponent() {
        _classCallCheck(this, SentientProgramsComponent);
        this.config = {
          title: '',
          programsList: []
        };
        this.widgetSearchRequest = null;
        this.heading = '';
        this.selected = false;
        this.errorMessageCode = 'NONE';
      }
      _createClass(SentientProgramsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.config && this.config.programsList && this.config.programsList.length) {
            this.trackClicked(this.config.programsList[0]);
          }
        }
      }, {
        key: "handleNoContent",
        value: function handleNoContent(event) {
          if (event === 'none') {
            this.errorMessageCode = 'NO_DATA';
          } else if (event === 'error') {
            this.errorMessageCode = 'API_FAILURE';
          }
        }
      }, {
        key: "trackClicked",
        value: function trackClicked(program) {
          this.errorMessageCode = 'NONE';
          this.widgetSearchRequest = program.widgetSearchQuery;
          this.heading = program.title;
        }
      }]);
      return SentientProgramsComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SentientProgramsComponent.prototype, "config", void 0);
    SentientProgramsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-sentient-programs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./sentient-programs.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/sentient-programs/sentient-programs.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./sentient-programs.component.scss */"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/sentient-programs/sentient-programs.component.scss"))["default"]]
    })], SentientProgramsComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/to-do-list/to-do-list.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/routes/to-do-list/to-do-list.component.scss ***!
    \***************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmRoutesToDoListToDoListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".content {\n  margin: 16px 8px 16px 0;\n}\n\n.content-name {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.pad {\n  padding: 16px;\n}\n\n@media only screen and (min-width: 600px) {\n  .pad {\n    padding: 16px 32px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9vY20vcm91dGVzL3RvLWRvLWxpc3QvdG8tZG8tbGlzdC5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL29jbS9yb3V0ZXMvdG8tZG8tbGlzdC90by1kby1saXN0LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc29uYXNoYWp1L1ZpZGVvcy9zcGhlcmUtbW9iaWxlL3N0eWxlcy9fd3MtdmFycy5zY3NzIiwiL2hvbWUvc29uYXNoYWp1L1ZpZGVvcy9zcGhlcmUtbW9iaWxlL3N0eWxlcy9fd3MtbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSx1QkFBQTtBQ0ZGOztBREtBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxhRUhPO0FEQ1Q7O0FFb0RFO0VIbkRGO0lBR0ksa0JBQUE7RUNBRjtBQUNGIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL29jbS9yb3V0ZXMvdG8tZG8tbGlzdC90by1kby1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuQGltcG9ydCAnc3R5bGVzL193cy1taXhpbnMuc2Nzcyc7XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luOiAkc2l6ZS1tICRzaXplLXhzICRzaXplLW0gMDtcbn1cblxuLmNvbnRlbnQtbmFtZSB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ucGFkIHtcbiAgcGFkZGluZzogJHNpemUtbTtcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC1ndC14cyB7XG4gICAgcGFkZGluZzogJHNpemUtbSAkc2l6ZS14bDtcbiAgfVxufVxuIiwiLmNvbnRlbnQge1xuICBtYXJnaW46IDE2cHggOHB4IDE2cHggMDtcbn1cblxuLmNvbnRlbnQtbmFtZSB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ucGFkIHtcbiAgcGFkZGluZzogMTZweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLnBhZCB7XG4gICAgcGFkZGluZzogMTZweCAzMnB4O1xuICB9XG59IiwiJGZvbnQtZmFtaWx5LXNhbnM6ICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsXG4gICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJyxcbiAgJ05vdG8gQ29sb3IgRW1vamknO1xuJGZvbnQtZmFtaWx5LXNlcmlmOiBHZW9yZ2lhLCBDYW1icmlhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuJGZvbnQtZmFtaWx5LW1vbm86IE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuJGZvbnQtZmFtaWx5LW9wZW4tc2FuczogJ09wZW4gU2Fucyc7XG4kZm9udC1mYW1pbHktb3Blbi1wb3BwaW5zOiAnUm9ib3RvJztcblxuXG4kc2l6ZS14czogOHB4O1xuJHNpemUtczogMTJweDtcbiRzaXplLW06IDE2cHg7XG4kc2l6ZS1sOiAyNHB4O1xuJHNpemUteGw6IDMycHg7XG4kc2l6ZS1sZzogMjhweDtcbiRzaXplLXh4bDogNDBweDtcblxuJG1hdC10b29sYmFyLXhzOiA1MnB4O1xuJG1hdC10b29sYmFyLWd0LXhzOiA1NnB4O1xuIiwiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuXG5AbWl4aW4gcmV0aW5hIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gICAgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gcHJpbnQge1xuICBAbWVkaWEgb25seSBwcmludCB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGJyZWFrcG9pbnQteHMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LXMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LXhsIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDAwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQtbSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQtbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LXhsIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QteHMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LXMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/to-do-list/to-do-list.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/routes/to-do-list/to-do-list.component.ts ***!
    \*************************************************************************************************/
  /*! exports provided: ToDoListComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmRoutesToDoListToDoListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ToDoListComponent", function () {
      return ToDoListComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_ocm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../services/ocm.service */"./project/ws/app/src/lib/routes/infy/routes/ocm/services/ocm.service.ts");
    var ToDoListComponent = /*#__PURE__*/function () {
      function ToDoListComponent(ocmSvc) {
        _classCallCheck(this, ToDoListComponent);
        this.ocmSvc = ocmSvc;
        this.config = {
          title: '',
          toDoId: ''
        };
        this.fetchingInProgress = false;
        this.toDoList = [];
      }
      _createClass(ToDoListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.config && this.config.toDoId) {
            this.fetchToDos(this.config.toDoId);
          }
        }
      }, {
        key: "fetchToDos",
        value: function fetchToDos(id) {
          var _this6 = this;
          this.fetchingInProgress = true;
          this.ocmSvc.fetchToDos(id).subscribe(function (data) {
            _this6.toDoList = data;
          });
          this.fetchingInProgress = false;
        }
      }]);
      return ToDoListComponent;
    }();
    ToDoListComponent.ctorParameters = function () {
      return [{
        type: _services_ocm_service__WEBPACK_IMPORTED_MODULE_2__["OcmService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ToDoListComponent.prototype, "config", void 0);
    ToDoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-to-do-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./to-do-list.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/to-do-list/to-do-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./to-do-list.component.scss */"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/to-do-list/to-do-list.component.scss"))["default"]]
    })], ToDoListComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/what-next/what-next.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/routes/what-next/what-next.component.scss ***!
    \*************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmRoutesWhatNextWhatNextComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".pad {\n  padding: 16px;\n}\n@media only screen and (min-width: 600px) {\n  .pad {\n    padding: 16px 32px;\n  }\n}\n.w300 {\n  min-width: 200px;\n  max-width: 300px;\n}\n.marginSmall {\n  margin: 12px 12px 12px 0;\n}\n.icon {\n  transform: scale(1.5);\n  margin: 12px 8px 12px 8px;\n}\n.event-name {\n  line-height: 1.5;\n}\n.circle {\n  height: 16px;\n  width: 16px;\n  border-radius: 8px;\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9vY20vcm91dGVzL3doYXQtbmV4dC93aGF0LW5leHQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvc3R5bGVzL193cy12YXJzLnNjc3MiLCJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9vY20vcm91dGVzL3doYXQtbmV4dC93aGF0LW5leHQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvc3R5bGVzL193cy1taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFDT087QUNUVDtBQzhERTtFSDdERjtJQUdJLGtCQUFBO0VFQUY7QUFDRjtBRkdBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBRUFGO0FGR0E7RUFDRSx3QkFBQTtBRUFGO0FGR0E7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0FFQUY7QUZHQTtFQUNFLGdCQUFBO0FFQUY7QUZHQTtFQUNFLFlDbEJPO0VEbUJQLFdDbkJPO0VEb0JQLGtCQ3RCUTtFRHVCUixxQkFBQTtBRUFGIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL29jbS9yb3V0ZXMvd2hhdC1uZXh0L3doYXQtbmV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy9fd3MtdmFycy5zY3NzJztcbkBpbXBvcnQgJ3N0eWxlcy9fd3MtbWl4aW5zLnNjc3MnO1xuXG4ucGFkIHtcbiAgcGFkZGluZzogJHNpemUtbTtcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC1ndC14cyB7XG4gICAgcGFkZGluZzogJHNpemUtbSAkc2l6ZS14bDtcbiAgfVxufVxuXG4udzMwMCB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1heC13aWR0aDogMzAwcHg7IC8vIHdpZHRoOiAzMDBweDtcbn1cblxuLm1hcmdpblNtYWxsIHtcbiAgbWFyZ2luOiAkc2l6ZS1zICRzaXplLXMgJHNpemUtcyAwO1xufVxuXG4uaWNvbiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgbWFyZ2luOiAkc2l6ZS1zICRzaXplLXhzICRzaXplLXMgJHNpemUteHM7XG59XG5cbi5ldmVudC1uYW1lIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmNpcmNsZSB7XG4gIGhlaWdodDogJHNpemUtbTtcbiAgd2lkdGg6ICRzaXplLW07XG4gIGJvcmRlci1yYWRpdXM6ICRzaXplLXhzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4iLCIkZm9udC1mYW1pbHktc2FuczogJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCxcbiAgJ05vdG8gU2FucycsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLFxuICAnTm90byBDb2xvciBFbW9qaSc7XG4kZm9udC1mYW1pbHktc2VyaWY6IEdlb3JnaWEsIENhbWJyaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4kZm9udC1mYW1pbHktbW9ubzogTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdMaWJlcmF0aW9uIE1vbm8nLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4kZm9udC1mYW1pbHktb3Blbi1zYW5zOiAnT3BlbiBTYW5zJztcbiRmb250LWZhbWlseS1vcGVuLXBvcHBpbnM6ICdSb2JvdG8nO1xuXG5cbiRzaXplLXhzOiA4cHg7XG4kc2l6ZS1zOiAxMnB4O1xuJHNpemUtbTogMTZweDtcbiRzaXplLWw6IDI0cHg7XG4kc2l6ZS14bDogMzJweDtcbiRzaXplLWxnOiAyOHB4O1xuJHNpemUteHhsOiA0MHB4O1xuXG4kbWF0LXRvb2xiYXIteHM6IDUycHg7XG4kbWF0LXRvb2xiYXItZ3QteHM6IDU2cHg7XG4iLCIucGFkIHtcbiAgcGFkZGluZzogMTZweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLnBhZCB7XG4gICAgcGFkZGluZzogMTZweCAzMnB4O1xuICB9XG59XG5cbi53MzAwIHtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn1cblxuLm1hcmdpblNtYWxsIHtcbiAgbWFyZ2luOiAxMnB4IDEycHggMTJweCAwO1xufVxuXG4uaWNvbiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgbWFyZ2luOiAxMnB4IDhweCAxMnB4IDhweDtcbn1cblxuLmV2ZW50LW5hbWUge1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4uY2lyY2xlIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59IiwiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuXG5AbWl4aW4gcmV0aW5hIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gICAgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gcHJpbnQge1xuICBAbWVkaWEgb25seSBwcmludCB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGJyZWFrcG9pbnQteHMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LXMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LXhsIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDAwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQtbSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQtbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LXhsIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QteHMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LXMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/what-next/what-next.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/routes/what-next/what-next.component.ts ***!
    \***********************************************************************************************/
  /*! exports provided: WhatNextComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmRoutesWhatNextWhatNextComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "WhatNextComponent", function () {
      return WhatNextComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var WhatNextComponent = /*#__PURE__*/function () {
      function WhatNextComponent() {
        _classCallCheck(this, WhatNextComponent);
        this.config = {
          title: '',
          eventsList: []
        };
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'];
        this.selectedDate = -1;
        this.displaySelectedDate = '';
        this.fetchingEvents = true;
        this.showReleaseItems = {};
        this.eventsList = [];
        this.filteredEvents = [];
        this.tabs = [];
        this.selectedIndex = -1;
      }
      _createClass(WhatNextComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedDate = new Date().setHours(0, 0, 0, 0);
          this.getSelectedDateEvents();
        }
      }, {
        key: "onSelect",
        value: function onSelect(date) {
          this.selectedIndex = 0;
          this.selectedDate = date.setHours(0, 0, 0, 0);
          this.getSelectedDateEvents();
        }
      }, {
        key: "getSelectedDateEvents",
        value: function getSelectedDateEvents() {
          var _this7 = this;
          this.displaySelectedDate = "".concat(this.months[new Date(this.selectedDate).getMonth()], "\n       ").concat(new Date(this.selectedDate).getDate(), ", ").concat(new Date(this.selectedDate).getFullYear(), "\n        - ").concat(this.days[new Date(this.selectedDate).getDay()]);
          if (this.config && this.config.eventsList) {
            this.eventsList = this.config.eventsList.filter(function (event) {
              return event.timestamp === _this7.selectedDate;
            });
            this.tabs = Array.from(new Set(this.eventsList.map(function (event) {
              return event.category;
            }))).filter(function (tab) {
              return tab !== '';
            });
            this.tabs && this.tabs.length ? this.getFilteredEventsData(0) : this.filteredEvents = [];
          } else {
            this.filteredEvents = [];
          }
          this.fetchingEvents = false;
        }
      }, {
        key: "getFilteredEventsData",
        value: function getFilteredEventsData(index) {
          var _this8 = this;
          this.filteredEvents = this.eventsList.filter(function (e) {
            return e.category === _this8.tabs[index];
          });
        }
      }, {
        key: "dateClass",
        value: function dateClass() {
          var _this9 = this;
          return function (date) {
            var highlightDate = _this9.config.eventsList.filter(function (event) {
              return event && event.timestamp;
            }).some(function (d) {
              return d.timestamp === date.getTime();
            });
            return highlightDate ? 'special-date' : '';
          };
        }
      }]);
      return WhatNextComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WhatNextComponent.prototype, "config", void 0);
    WhatNextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-what-next',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./what-next.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/ocm/routes/what-next/what-next.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./what-next.component.scss */"./project/ws/app/src/lib/routes/infy/routes/ocm/routes/what-next/what-next.component.scss"))["default"]]
    })], WhatNextComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/services/counter.service.ts":
  /*!***********************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/services/counter.service.ts ***!
    \***********************************************************************************/
  /*! exports provided: API_SERVER_BASE, CounterService */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmServicesCounterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "API_SERVER_BASE", function () {
      return API_SERVER_BASE;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CounterService", function () {
      return CounterService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var API_SERVER_BASE = '/apis';
    var PROTECTED_SLAG_V8 = "".concat(API_SERVER_BASE, "/protected/v8");
    var API_END_POINTS = {
      lexPlatform: "".concat(PROTECTED_SLAG_V8, "/counter"),
      infyMeCounter: "".concat(PROTECTED_SLAG_V8, "/counter/infyMe"),
      EMAIL_TEXT: "".concat(PROTECTED_SLAG_V8, "/user/email/emailText"),
      USER_FEEDBACK: "".concat(PROTECTED_SLAG_V8, "/user/feedback"),
      FETCH_TO_DOS: "".concat(PROTECTED_SLAG_V8, "/user/ocm/getToDos")
    };
    var CounterService = /*#__PURE__*/function () {
      function CounterService(http) {
        _classCallCheck(this, CounterService);
        this.http = http;
      }
      _createClass(CounterService, [{
        key: "fetchPlatformCounterData",
        value: function fetchPlatformCounterData() {
          return this.http.get("".concat(API_END_POINTS.lexPlatform));
        }
      }, {
        key: "fetchInfyMeCounterData",
        value: function fetchInfyMeCounterData() {
          return this.http.get("".concat(API_END_POINTS.infyMeCounter));
        }
      }]);
      return CounterService;
    }();
    CounterService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };
    CounterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CounterService);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/ocm/services/ocm.service.ts":
  /*!*******************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/ocm/services/ocm.service.ts ***!
    \*******************************************************************************/
  /*! exports provided: API_SERVER_BASE, OcmService */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesOcmServicesOcmServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "API_SERVER_BASE", function () {
      return API_SERVER_BASE;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OcmService", function () {
      return OcmService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var API_SERVER_BASE = '/apis';
    var PROTECTED_SLAG_V8 = "".concat(API_SERVER_BASE, "/protected/v8");
    var API_END_POINTS = {
      lexPlatform: "".concat(PROTECTED_SLAG_V8, "/counter"),
      infyMeCounter: "".concat(PROTECTED_SLAG_V8, "/counter/infyMe"),
      EMAIL_TEXT: "".concat(PROTECTED_SLAG_V8, "/user/email/emailText"),
      USER_FEEDBACK: "".concat(PROTECTED_SLAG_V8, "/user/feedback"),
      FETCH_TO_DOS: "".concat(PROTECTED_SLAG_V8, "/user/ocm/getToDos")
    };
    var OcmService = /*#__PURE__*/function () {
      function OcmService(http) {
        _classCallCheck(this, OcmService);
        this.http = http;
      }
      _createClass(OcmService, [{
        key: "shareTextMail",
        value: function shareTextMail(req) {
          return this.http.post(API_END_POINTS.EMAIL_TEXT, req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (u) {
            return u.result;
          }));
        }
      }, {
        key: "submitFeedback",
        value: function submitFeedback(request) {
          return this.submitFeedbackWithData(request);
        }
      }, {
        key: "submitFeedbackWithData",
        value: function submitFeedbackWithData(data) {
          // converting rating to string as per API request contract
          if (data.rating) {
            data.rating = data.rating.toString();
          }
          return this.http.post(API_END_POINTS.USER_FEEDBACK, {
            request: data
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.result;
          }));
        }
      }, {
        key: "fetchToDos",
        value: function fetchToDos(id) {
          return this.http.get("".concat(API_END_POINTS.FETCH_TO_DOS, "/").concat(id));
        }
      }]);
      return OcmService;
    }();
    OcmService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };
    OcmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], OcmService);

    /***/
  }
}]);
//# sourceMappingURL=routes-ocm-ocm-module-es5.js.map