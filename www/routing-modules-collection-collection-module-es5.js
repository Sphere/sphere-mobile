function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routing-modules-collection-collection-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-collection-matmenu/auth-collection-matmenu.component.html":
  /*!*****************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-collection-matmenu/auth-collection-matmenu.component.html ***!
    \*****************************************************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsAuthCollectionMatmenuAuthCollectionMatmenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-menu #childMenu=\"matMenu\">\n\n  <ng-container *ngFor=\"let option of childType\">\n\n\n    <button\n    *ngIf=\"option.children && option.children.length\"\n    mat-menu-item\n    (click)=\"click(type, option.id)\"\n      [matMenuTriggerFor]=\"child.childMenu\"\n      >\n      <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\">{{\n        option.icon\n      }}</mat-icon>\n      <ng-container>{{ option.name }}</ng-container>\n      <ws-auth-collection-matmenu\n      [type]=\"type\"\n      [childType]=\"option.children\"\n      (action)=\"click($event.action, $event.type)\"\n      #child\n      ></ws-auth-collection-matmenu>\n    </button>\n    <button\n    *ngIf=\"!option.children || !option.children.length\"\n     mat-menu-item\n     (click)=\"click(type, option.id)\"\n     >\n      <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\">{{\n        option.icon\n      }}</mat-icon>\n      <ng-container>{{ option.name }}</ng-container>\n    </button>\n\n  </ng-container>\n  <button (click)=\"click('delete')\"  mat-menu-item>\n    <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Delete content\">\n      delete</mat-icon>\n    <ng-container i18n>Delete</ng-container>\n    </button>\n</mat-menu>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-editor-options/auth-editor-options.component.html":
  /*!*********************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-editor-options/auth-editor-options.component.html ***!
    \*********************************************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsAuthEditorOptionsAuthEditorOptionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<!-- <mat-icon aria-hidden=\"false\" class=\"menu-icon ws-mat-primary-text\" [class.ws-mat-warn-text]=\"isInvalid\"\n  [class.ws-mat-primary-text]=\"!isInvalid\" [matMenuTriggerFor]=\"menu\" (click)=\"$event.stopPropagation()\" i18n-aria-label\n  aria-label=\"Menu for content\">more_vert</mat-icon> -->\n\n  <button [hidden]=\"!allowedChild.length\" [class.op500]=\"!allowedChild.length\" mat-menu-item\n    [matMenuTriggerFor]=\"child.childMenu\">\n    <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Create New Child\">\n      more_vert</mat-icon>\n    <!-- <ng-container i18n>Create New Child</ng-container> -->\n    <ws-auth-collection-matmenu [type]=\"'createChild'\" [childType]=\"allowedChild\"\n      (action)=\"click($event.action, $event.type)\" #child></ws-auth-collection-matmenu>\n      <button (click)=\"click('delete')\" [disabled]=\"!node.parentId && node.editable\"\n      [class.op500]=\"!node.parentId && node.editable\" mat-menu-item>\n      <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Delete content\">\n        </mat-icon>\n    </button>\n  </button>\n  <button *ngIf=\"node.category === 'Resource'\" [class.op500]=\"!canEdit\" [matMenuTriggerFor]=\"edit\" mat-menu-item\n    [disabled]=\"!canEdit || (metaEditDisabled && contentEditDisabled)\">\n    <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Edit content\"> more_vert\n    </mat-icon>\n    <!-- <ng-container i18n>Edit</ng-container> -->\n  </button>\n\n\n<!-- <mat-menu #menu=\"matMenu\"> -->\n  <!--\n  <button *ngIf=\"node.category === 'Resource'\" mat-menu-item (click)=\"click('preview')\">\n    <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Preview\">\n      remove_red_eye</mat-icon>\n    <ng-container i18n>Preview</ng-container>\n  </button>-->\n  <!-- <button (click)=\"click('delete')\" [disabled]=\"!node.parentId && node.editable\"\n    [class.op500]=\"!node.parentId && node.editable\" mat-menu-item>\n    <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Delete content\">\n      delete</mat-icon>\n    <ng-container i18n>Delete</ng-container>\n  </button>  -->\n  <!-- <button [matMenuTriggerFor]=\"sibling.childMenu\" [disabled]=\"!node.parentId || !allowedSibling.length\"\n    [class.op500]=\"!node.parentId || !allowedSibling.length\" mat-menu-item>\n    <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Create New Sibling\">\n      next_week</mat-icon>\n    <ng-container i18n>Create New Sibling</ng-container>\n    <ws-auth-collection-matmenu [type]=\"'createSibling'\" [childType]=\"allowedSibling\"\n      (action)=\"click($event.action, $event.type)\" #sibling></ws-auth-collection-matmenu>\n  </button> -->\n\n  <!-- <button *ngIf=\"node.category !== 'Resource'\" [disabled]=\"!canEdit || contentEditDisabled\"\n    [class.op500]=\"!canEdit || contentEditDisabled\" mat-menu-item (click)=\"click('addChild')\">\n    <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Add a Child\">\n      library_add</mat-icon>\n    <ng-container i18n>Add a Child</ng-container>\n  </button> -->\n<!-- </mat-menu> -->\n\n<mat-menu #edit=\"matMenu\">\n  <!-- <button [disabled]=\"contentEditDisabled\" [class.op500]=\"contentEditDisabled\" mat-menu-item\n    (click)=\"click('editContent')\">\n    <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Edit content\">build\n    </mat-icon>\n    <ng-container i18n>Edit Content</ng-container>\n  </button>\n  <button mat-menu-item [disabled]=\"metaEditDisabled\" [class.op500]=\"metaEditDisabled\" (click)=\"click('editMeta')\">\n    <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Edit content\">ballot\n    </mat-icon>\n    <ng-container i18n>Edit Meta</ng-container>\n  </button> -->\n  <button *ngIf=\"node.category === 'Resource'\" mat-menu-item (click)=\"click('preview')\">\n    <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Preview\">\n      remove_red_eye</mat-icon>\n    <ng-container i18n>Preview</ng-container>\n  </button>\n  <button (click)=\"click('delete')\" [disabled]=\"!node.parentId && node.editable\"\n    [class.op500]=\"!node.parentId && node.editable\" mat-menu-item>\n    <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Delete content\">\n      delete</mat-icon>\n    <ng-container i18n>Delete</ng-container>\n  </button>\n</mat-menu>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-of-contents/auth-table-of-contents.component.html":
  /*!***************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-of-contents/auth-table-of-contents.component.html ***!
    \***************************************************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsAuthTableOfContentsAuthTableOfContentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"flex\">\n  <ng-container *ngIf=\"!mediumScreen\">\n    <div *ngIf=\"!menubtn\" class=\"p-2 pt-4 transitionD\">\n      <button\n        mat-icon-button\n        (click)=\"drawer = !drawer; menubtn = !menubtn\"\n        i18n-aria-label\n        aria-label=\"Maximize side panel\"\n        i18n-matTooltip\n        matTooltipPosition=\"right\"\n        matTooltip=\"Open side panel\"\n      >\n        <mat-icon>menu</mat-icon>\n      </button>\n    </div>\n  </ng-container>\n  <div *ngIf=\"drawer\" class=\"transitionD\">\n    <mat-card class=\"flex items-center mat-card custom-card\">\n      <h2 class=\"flex mat-h w-full justify-center pt-5\" i18n>\n        TABLE OF CONTENTS\n      </h2>\n\n      <button\n        *ngIf=\"!mediumScreen\"\n        mat-icon-button\n        (click)=\"drawer = !drawer; menubtn = !menubtn\"\n        i18n-aria-label\n        aria-label=\"Open side panel\"\n        i18n-matTooltip\n        matTooltipPosition=\"right\"\n        matTooltip=\"Minimize side panel\"\n      >\n        <mat-icon>chevron_left</mat-icon>\n      </button>\n      <button\n        *ngIf=\"mediumScreen\"\n        mat-icon-button\n        (click)=\"closeSidenav()\"\n        i18n-aria-label\n        aria-label=\"Close side panel\"\n        i18n-matTooltip\n        matTooltipPosition=\"right\"\n        matTooltip=\"Close side panel\"\n      >\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <hr />\n    </mat-card>\n    <mat-tree\n      [dataSource]=\"dataSource\"\n      [treeControl]=\"treeControl\"\n      cdkDropList\n      cdkDropListSortingDisabled\n      (cdkDropListDropped)=\"drop()\"\n      class=\"px-2\"\n    >\n      <mat-tree-node\n        class=\"auth-tree-node\"\n        [class.selected]=\"node.id === selectedNode\"\n        [class.ws-mat-warn-text]=\"invalidIds.includes(node.id)\"\n        [matTreeNodePaddingIndent]=\"20\"\n        *matTreeNodeDef=\"let node\"\n        matTreeNodePadding\n        cdkDrag=\"node.parent?.length && node.editable\"\n        [cdkDragData]=\"node\"\n        (mousemove)=\"dragHover(node, $event)\"\n        (mouseleave)=\"dragHoverEnd($event)\"\n        (cdkDragStarted)=\"dragStart(node)\"\n        (cdkDragReleased)=\"dragEnd()\"\n        (click)=\"onNodeSelect(node)\"\n      >\n        <div\n          *ngIf=\"draggingPosition === 'above' && node === dropContainer && node.parentId\"\n          class=\"placeholder\"\n        >\n          <span class=\"dot\"></span>\n          <span class=\"line\"></span>\n        </div>\n        <button\n          *ngIf=\"node.expandable\"\n          mat-icon-button\n          matTreeNodeToggle\n          [attr.aria-label]=\"'toggle ' + node.name\"\n        >\n          <mat-icon\n            class=\"mat-icon-rtl-mirror\"\n            [class.ws-mat-warn-text]=\"invalidIds.includes(node.id)\"\n            [class.ws-mat-primary-text]=\"!invalidIds.includes(node.id)\"\n          >\n            {{ treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right' }}\n          </mat-icon>\n        </button>\n        <button *ngIf=\"!node.expandable\" mat-icon-button disabled></button>\n        <ws-auth-table-tree-label\n          [isInvalid]=\"invalidIds.includes(node.id)\"\n          [identifier]=\"node.identifier\"\n          [isDragging]=\"isDragging\"\n          [id]=\"node.id\"\n        ></ws-auth-table-tree-label>\n        <ws-auth-editor-options\n          *ngIf=\"node.editable\"\n          [isInvalid]=\"invalidIds.includes(node.id)\"\n          (action)=\"takeAction($event.action, node, $event.type)\"\n          [node]=\"node\"\n        ></ws-auth-editor-options>\n        <div *cdkDragPreview>\n          <ws-auth-table-tree-label\n            [identifier]=\"node.identifier\"\n            [isDragging]=\"isDragging\"\n            [icon]=\"\n              isDropDisabled\n                ? 'block'\n                : !isDropDisabled && draggingPosition === 'center'\n                ? 'add_circle'\n                : 'format_indent_increase'\n            \"\n            [id]=\"node.id\"\n          ></ws-auth-table-tree-label>\n        </div>\n        <div\n          *ngIf=\"draggingPosition === 'below' && node === dropContainer && node.parentId\"\n          class=\"placeholder second\"\n        >\n          <span class=\"dot\"></span>\n          <span class=\"line\"></span>\n        </div>\n      </mat-tree-node>\n    </mat-tree>\n  </div>\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-tree-label/auth-table-tree-label.component.html":
  /*!*************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-tree-label/auth-table-tree-label.component.html ***!
    \*************************************************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsAuthTableTreeLabelAuthTableTreeLabelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div>\n  <mat-icon\n    class=\"node-icon\"\n    [class.ws-mat-warn-text]=\"isInvalid\"\n    [class.ws-mat-primary-text]=\"!isInvalid\"\n    aria-hidden=\"false\"\n    i18n-aria-label\n    aria-label=\"icon\"\n    >{{ icon }}</mat-icon\n  >\n  <span\n    [matTooltipDisabled]=\"name?.length < 25 || isDragging\"\n    [matTooltip]=\"name\"\n    class=\"node-name\"\n  >\n    <ng-container *ngIf=\"name\">{{\n      name.length > 25 ? name.slice(0, 22) + '...' : name\n    }}</ng-container>\n    <ng-container i18n *ngIf=\"!name\">Untitled Content</ng-container>\n  </span>\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-toc/auth-toc.component.html":
  /*!***********************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-toc/auth-toc.component.html ***!
    \***********************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsAuthTocAuthTocComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"flex\">\n  <ng-container *ngIf=\"!mediumScreen\">\n    <div *ngIf=\"!menubtn\" class=\"p-2 pt-4 transitionD\">\n      <button mat-icon-button (click)=\"drawer = !drawer; menubtn = !menubtn\" i18n-aria-label\n        aria-label=\"Maximize side panel\" i18n-matTooltip matTooltipPosition=\"right\" matTooltip=\"Open side panel\">\n        <mat-icon>menu</mat-icon>\n      </button>\n    </div>\n  </ng-container>\n  <div *ngIf=\"drawer\" class=\"transitionD\">\n\n    <mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" cdkDropList cdkDropListSortingDisabled\n      (cdkDropListDropped)=\"drop()\" class=\"px-2\">\n      <mat-tree-node class=\"auth-tree-node\" [class.selected]=\"node.id === selectedNode\"\n        [class.ws-mat-warn-text]=\"invalidIds.includes(node.id)\" [matTreeNodePaddingIndent]=\"20\"\n        *matTreeNodeDef=\"let node\" matTreeNodePadding cdkDrag=\"node.parent?.length && node.editable\"\n        [cdkDragData]=\"node\" (mousemove)=\"dragHover(node, $event)\" (mouseleave)=\"dragHoverEnd($event)\"\n        (cdkDragStarted)=\"dragStart(node)\" (cdkDragReleased)=\"dragEnd()\" (click)=\"onNodeSelect(node)\">\n        <div *ngIf=\"draggingPosition === 'above' && node === dropContainer && node.parentId\" class=\"placeholder\">\n          <span class=\"dot\"></span>\n          <span class=\"line\"></span>\n        </div>\n        <button *ngIf=\"node.expandable\" mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\n          <mat-icon class=\"mat-icon-rtl-mirror\" [class.ws-mat-warn-text]=\"invalidIds.includes(node.id)\"\n            [class.ws-mat-primary-text]=\"!invalidIds.includes(node.id)\">\n            {{ treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right' }}\n          </mat-icon>\n        </button>\n        <button *ngIf=\"!node.expandable\" mat-icon-button disabled></button>\n        <ws-auth-table-tree-label class=\"tree-label\" [isInvalid]=\"invalidIds.includes(node.id)\" [identifier]=\"node.identifier\"\n          [isDragging]=\"isDragging\" [id]=\"node.id\"></ws-auth-table-tree-label>\n\n        <ws-auth-editor-options  class=\"editor-options\" *ngIf=\"node.editable\" [isInvalid]=\"invalidIds.includes(node.id)\"\n          (action)=\"takeAction($event.action, node, $event.type)\" [node]=\"node\"></ws-auth-editor-options>\n        <div *cdkDragPreview>\n          <ws-auth-table-tree-label [identifier]=\"node.identifier\" [isDragging]=\"isDragging\" [icon]=\"\n              isDropDisabled\n                ? 'block'\n                : !isDropDisabled && draggingPosition === 'center'\n                ? 'add_circle'\n                : 'format_indent_increase'\n            \" [id]=\"node.id\"></ws-auth-table-tree-label>\n        </div>\n        <div *ngIf=\"draggingPosition === 'below' && node === dropContainer && node.parentId\" class=\"placeholder second\">\n          <span class=\"dot\"></span>\n          <span class=\"line\"></span>\n        </div>\n      </mat-tree-node>\n    </mat-tree>\n  </div>\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/collection/collection.component.html":
  /*!***************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/collection/collection.component.html ***!
    \***************************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsCollectionCollectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ng-container *ngIf=\"!previewIdentifier\">\n  <ws-auth-editor-action-buttons (action)=\"action($event)\" [buttonConfig]=\"actionButton\">\n  </ws-auth-editor-action-buttons>\n  <ws-auth-editor-steps\n    [steps]=\"stepper\"\n    [currentStep]=\"currentStep\"\n    (change)=\"currentStep = $event\"\n  >\n  </ws-auth-editor-steps>\n  <div *ngIf=\"mediumScreen\">\n    <div class=\"ui\" [ngClass]=\"{ toHide: !leftArrow }\">\n      <button\n        class=\"p-1\"\n        mat-icon-button\n        (click)=\"sidenav.toggle(); leftArrow = !leftArrow\"\n        i18n-aria-label\n        aria-label=\"Open side panel\"\n        i18n-matTooltip\n        matTooltipPosition=\"right\"\n        matTooltip=\"Open side panel\"\n      >\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n    </div>\n  </div>\n  <mat-sidenav-container autosize=\"true\" id=\"auth-toc\" class=\"example-container\">\n    <mat-sidenav\n      #sidenav\n      [mode]=\"mode$ | async\"\n      [(opened)]=\"sideBarOpened\"\n      (closedStart)=\"sidenavClose()\"\n    >\n      <div class=\"sticky\">\n        <ws-auth-table-of-contents\n          (action)=\"subAction($event)\"\n          (closeEvent)=\"sidenav.toggle(); leftArrow = !leftArrow\"\n        ></ws-auth-table-of-contents>\n      </div>\n    </mat-sidenav>\n\n    <mat-sidenav-content class=\"pl-6 pr-6 ml-6\">\n      <div>\n        <ws-auth-edit-meta\n          [parentContent]=\"currentParentId\"\n          [class.hidden]=\"viewMode !== 'meta'\"\n          [isSubmitPressed]=\"isSubmitPressed\"\n          (data)=\"action($event)\"\n        ></ws-auth-edit-meta>\n        <ws-auth-url-upload\n          [isCollectionEditor]=\"true\"\n          *ngIf=\"viewMode === 'curate'\"\n          [isSubmitPressed]=\"isSubmitPressed\"\n          (data)=\"action($event)\"\n        ></ws-auth-url-upload>\n        <ws-auth-file-upload\n          [isCollectionEditor]=\"true\"\n          *ngIf=\"viewMode === 'upload'\"\n          [isSubmitPressed]=\"isSubmitPressed\"\n          (data)=\"action($event)\"\n        >\n        </ws-auth-file-upload>\n      </div>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</ng-container>\n<div *ngIf=\"previewIdentifier\">\n  <mat-icon\n    (click)=\"closePreview()\"\n    class=\"close-preview\"\n    matTooltip=\"Back\"\n    i18n-matTooltip=\"Back button to go to previous page\"\n  >\n    arrow_back</mat-icon\n  >\n  <ws-auth-viewer [identifier]=\"previewIdentifier\" [mimeTypeRoute]=\"mimeTypeRoute\"></ws-auth-viewer>\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-collection/course-collection.component.html":
  /*!*****************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-collection/course-collection.component.html ***!
    \*****************************************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsCourseCollectionCourseCollectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ws-author-course-header [buttonConfig]=\"actionButton\" (action)=\"action($event)\" (subAction)=\"subAction($event)\">\n</ws-author-course-header>\n\n<mat-drawer-container autosize=\"true\" id=\"auth-toc\" class=\"example-container\">\n  <mat-drawer mode=\"side\" [(opened)]=\"sideBarOpened\">\n\n    <div class=\"sticky\">\n      <!-- (closeEvent)=\"sidenav.toggle(); leftArrow = !leftArrow\" check on this -->\n\n      <ws-author-auth-toc (action)=\"subAction($event)\" [createdFromCourse]=\"couseCreated\">\n      </ws-author-auth-toc>\n\n      <div class=\"margin-left-l margin-top-m \">\n        <a class=\"flex flex-middle margin-left-l\" (click)=\"showAddchapter = true\"><span class=\"material-icons\">\n            add\n          </span>\n          <p class=\"margin-left-xs margin-remove-bottom cursor-pointer\">Add Content</p>\n        </a>\n\n\n      </div>\n\n    </div>\n\n  </mat-drawer>\n  <mat-drawer-content>\n\n\n\n    <mat-sidenav-container class=\"nav-container\">\n\n\n      <form [formGroup]=\"createTopicForm\" *ngIf=\"showAddchapter\" class=\"margin-left-l\">\n        <div class=\"margin-top-s\">\n          <h1>Build your course by adding Topics</h1>\n          <p>Add your content, quizzes, discussions and publish</p>\n          <p class=\"required margin-remove-bottom\">\n            Hi, Lets start with a Topic name\n          </p>\n          <div class=\"margin-top-xs width-3-5\">\n            <mat-form-field appearance=\"outline\" class=\"margin-top-xs width-1-4\">\n              <input matInput i18n-placeholder placeholder=\"Topic Name\" formControlName=\"topicName\" />\n            </mat-form-field>\n          </div>\n          <div class=\"margin-top-xs width-3-5\">\n            <mat-form-field appearance=\"outline\" class=\"margin-top-xs width-1-4\">\n              <textarea matInput i18n-placeholder placeholder=\"Topic Description\" formControlName=\"topicDescription\">\n            </textarea>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"example-button-container\">\n\n          <button mat-raised-button (click)=\"showAddchapter=false\" class=\"\n          text-white ws-mat-primary-background  mat-button-base margin-right-xl\">Cancel</button>\n\n          <button mat-raised-button [disabled]=\"!createTopicForm.valid\" [matMenuTriggerFor]=\"menu\"\n            aria-label=\"Example icon-button with a menu\" class=\"text-white ws-mat-primary-background  mat-button-base\">\n            <mat-icon>add</mat-icon> Add Topic/Resource\n          </button>\n\n\n\n          <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item (click)=\"setContentType('collection')\">\n              <mat-icon>book</mat-icon>\n              <span>Topic</span>\n            </button>\n            <button mat-menu-item (click)=\"setContentType('assessment')\">\n              <mat-icon>check_circle</mat-icon>\n              <span>Add Assessment</span>\n            </button>\n            <button mat-menu-item (click)=\"setContentType('web')\">\n              <mat-icon>link</mat-icon>\n              <span>Attach a link</span>\n            </button>\n            <button mat-menu-item (click)=\"setContentType('upload')\">\n              <mat-icon>cloud_upload</mat-icon>\n              <span>Upload content</span>\n            </button>\n            <button mat-menu-item (click)=\"setContentType('webModule')\">\n              <mat-icon>insert_drive_file</mat-icon>\n              <span>Web Page</span>\n            </button>\n\n          </mat-menu>\n        </div>\n\n      </form>\n\n      <ws-auth-url-upload [isCollectionEditor]=\"true\" *ngIf=\"!showAddchapter && viewMode === 'curate'\"\n        [isSubmitPressed]=\"isSubmitPressed\" (data)=\"action($event)\"></ws-auth-url-upload>\n      <ws-auth-file-upload [isCollectionEditor]=\"true\" *ngIf=\"!showAddchapter && viewMode === 'upload'\"\n        [isSubmitPressed]=\"isSubmitPressed\" (data)=\"action($event)\">\n      </ws-auth-file-upload>\n      <ws-auth-quiz [isCollectionEditor]=\"true\" *ngIf=\"!showAddchapter && viewMode === 'assessment'\"\n        [isSubmitPressed]=\"isSubmitPressed\" (data)=\"action($event)\"></ws-auth-quiz>\n\n        <ws-auth-web-module-editor  *ngIf=\"!showAddchapter && viewMode === 'webmodule'\" (data)=\"action($event)\">\n        </ws-auth-web-module-editor>\n\n      <ws-auth-edit-meta [parentContent]=\"currentParentId\" [isSubmitPressed]=\"isSubmitPressed\" (data)=\"action($event)\"\n        *ngIf=\"!showAddchapter && viewMode === 'meta'\"></ws-auth-edit-meta>\n\n      <!--  [class.hidden]=\"viewMode !== 'meta'\" -->\n\n      <ws-auth-edit-meta [parentContent]=\"currentParentId\" [isSubmitPressed]=\"isSubmitPressed\" (data)=\"action($event)\"\n        *ngIf=\"!showAddchapter && viewMode !== 'meta'\"></ws-auth-edit-meta>\n\n\n    </mat-sidenav-container>\n  </mat-drawer-content>\n</mat-drawer-container>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-header/course-header.component.html":
  /*!*********************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-header/course-header.component.html ***!
    \*********************************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsCourseHeaderCourseHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-toolbar class=\"mat-primary mat-elevation-z3\">\n\n  <span class=\"material-icons\" routerLink=\"/page/home\" i18n-matTooltip matTooltip=\"Home\">\n    home\n  </span>\n\n  <img [src]=\"appIcon \" alt=\" Logo\" class=\"app-logo viewer-logo\" />\n\n\n\n  <ng-container *ngIf=\" courseNameHeader\">\n    <a routerLink=\"/page/home\" i18n-matTooltip matTooltip=\"Home\" class=\"logo-dim\">\n      <img [src]=\"appIcon\" alt=\"Application Logo\" id=\"app-logo\" class=\"app-logo\" />\n    </a>\n    <h3 class=\"mt-name margin-left-l\">{{courseNameHeader}}</h3>\n\n    <span class=\"spacer width-1-1\"></span>\n\n    <mat-icon i18n-matTooltip matTooltip=\"Course Settings\" class=\"margin-right-l\" (click)=\"showCourseSettings()\">\n      settings</mat-icon>\n\n    <div *ngFor=\"let button of requiredConfig || []\" class=\"button-grid cursor-pointer\"\n      (click)=\"action.next(button.event)\">\n      <button mat-raised-button class=\" header-btn text-white ws-mat-primary-background mat-button-base margin-right-l\">\n        <!-- <mat-icon class=\"text-white small-icon ws-mat-primary-text\">{{ button.icon }}</mat-icon> -->\n        {{ button.title }}\n      </button>\n\n    </div>\n\n\n    <!-- <button  mat-raised-button i18n class=\"header-btn text-white ws-mat-primary-background mat-button-base\" (click)=\"headerService.saveCourseContent()\">\n          Save</button> -->\n\n\n  </ng-container>\n\n\n\n  <span class=\"header-spacer\"></span>\n\n\n\n\n</mat-toolbar>";

    /***/
  },

  /***/"./project/ws/author/src/lib/constants/depth-rule.ts":
  /*!***********************************************************!*\
    !*** ./project/ws/author/src/lib/constants/depth-rule.ts ***!
    \***********************************************************/
  /*! exports provided: DEPTH_RUE */
  /***/
  function projectWsAuthorSrcLibConstantsDepthRuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DEPTH_RUE", function () {
      return DEPTH_RUE;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var DEPTH_RUE = {
      'Learning Path': 4,
      Course: 3,
      Collection: 2,
      Resource: 1
    };

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/collection-routing.module.ts":
  /*!******************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/collection-routing.module.ts ***!
    \******************************************************************************************************************/
  /*! exports provided: CollectionRoutingModule */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionCollectionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CollectionRoutingModule", function () {
      return CollectionRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _components_course_collection_course_collection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./components/course-collection/course-collection.component */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-collection/course-collection.component.ts");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");

    // import { CollectionComponent } from './components/collection/collection.component'

    var routes = [{
      path: '',
      component: _components_course_collection_course_collection_component__WEBPACK_IMPORTED_MODULE_1__["CourseCollectionComponent"]
    }];
    var CollectionRoutingModule = /*#__PURE__*/_createClass(function CollectionRoutingModule() {
      _classCallCheck(this, CollectionRoutingModule);
    });
    CollectionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
      providers: []
    })], CollectionRoutingModule);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/collection.module.ts":
  /*!**********************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/collection.module.ts ***!
    \**********************************************************************************************************/
  /*! exports provided: CollectionModule */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionCollectionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CollectionModule", function () {
      return CollectionModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/cdk/drag-drop */"./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/material/tree */"./node_modules/@angular/material/esm2015/tree.js");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/shared.module */"./project/ws/author/src/lib/modules/shared/shared.module.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_viewer_viewer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @ws/author/src/lib/modules/viewer/viewer.module */"./project/ws/author/src/lib/modules/viewer/viewer.module.ts");
    /* harmony import */
    var _ws_author_src_lib_routing_modules_editor_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @ws/author/src/lib/routing/modules/editor/shared/shared.module */"./project/ws/author/src/lib/routing/modules/editor/shared/shared.module.ts");
    /* harmony import */
    var _curate_curate_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./../curate/curate.module */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/curate.module.ts");
    /* harmony import */
    var _upload_upload_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./../upload/upload.module */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/upload/upload.module.ts");
    /* harmony import */
    var _collection_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./collection-routing.module */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/collection-routing.module.ts");
    /* harmony import */
    var _components_auth_collection_matmenu_auth_collection_matmenu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./components/auth-collection-matmenu/auth-collection-matmenu.component */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-collection-matmenu/auth-collection-matmenu.component.ts");
    /* harmony import */
    var _components_auth_editor_options_auth_editor_options_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./components/auth-editor-options/auth-editor-options.component */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-editor-options/auth-editor-options.component.ts");
    /* harmony import */
    var _components_auth_table_of_contents_auth_table_of_contents_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./components/auth-table-of-contents/auth-table-of-contents.component */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-of-contents/auth-table-of-contents.component.ts");
    /* harmony import */
    var _components_auth_table_tree_label_auth_table_tree_label_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./components/auth-table-tree-label/auth-table-tree-label.component */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-tree-label/auth-table-tree-label.component.ts");
    /* harmony import */
    var _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ./components/collection/collection.component */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/collection/collection.component.ts");
    /* harmony import */
    var _components_course_collection_course_collection_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ./components/course-collection/course-collection.component */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-collection/course-collection.component.ts");
    /* harmony import */
    var _components_auth_toc_auth_toc_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! ./components/auth-toc/auth-toc.component */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-toc/auth-toc.component.ts");
    /* harmony import */
    var _quiz_quiz_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ./../quiz/quiz.module */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/quiz.module.ts");
    /* harmony import */
    var _components_course_header_course_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! ./components/course-header/course-header.component */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-header/course-header.component.ts");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    /* harmony import */
    var _web_page_web_page_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! ./../web-page/web-page.module */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/web-page.module.ts");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    var CollectionModule = /*#__PURE__*/_createClass(function CollectionModule() {
      _classCallCheck(this, CollectionModule);
    });
    CollectionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_components_collection_collection_component__WEBPACK_IMPORTED_MODULE_15__["CollectionComponent"], _components_auth_table_of_contents_auth_table_of_contents_component__WEBPACK_IMPORTED_MODULE_13__["AuthTableOfContentsComponent"], _components_auth_editor_options_auth_editor_options_component__WEBPACK_IMPORTED_MODULE_12__["AuthEditorOptionsComponent"], _components_auth_table_tree_label_auth_table_tree_label_component__WEBPACK_IMPORTED_MODULE_14__["AuthTableTreeLabelComponent"], _components_auth_collection_matmenu_auth_collection_matmenu_component__WEBPACK_IMPORTED_MODULE_11__["AuthCollectionMatmenuComponent"], _components_course_collection_course_collection_component__WEBPACK_IMPORTED_MODULE_16__["CourseCollectionComponent"], _components_auth_toc_auth_toc_component__WEBPACK_IMPORTED_MODULE_17__["AuthTocComponent"], _components_course_header_course_header_component__WEBPACK_IMPORTED_MODULE_19__["CourseHeaderComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _collection_routing_module__WEBPACK_IMPORTED_MODULE_10__["CollectionRoutingModule"], _ws_author_src_lib_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _ws_author_src_lib_routing_modules_editor_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["EditorSharedModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"], _ws_author_src_lib_modules_viewer_viewer_module__WEBPACK_IMPORTED_MODULE_6__["AuthViewerModule"], _upload_upload_module__WEBPACK_IMPORTED_MODULE_9__["UploadModule"], _curate_curate_module__WEBPACK_IMPORTED_MODULE_8__["CurateModule"], _quiz_quiz_module__WEBPACK_IMPORTED_MODULE_18__["QuizModule"], _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], _ws_widget_collection__WEBPACK_IMPORTED_MODULE_20__["BtnPageBackModule"], _web_page_web_page_module__WEBPACK_IMPORTED_MODULE_21__["WebPageModule"]]
    })], CollectionModule);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-collection-matmenu/auth-collection-matmenu.component.scss":
  /*!***************************************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-collection-matmenu/auth-collection-matmenu.component.scss ***!
    \***************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsAuthCollectionMatmenuAuthCollectionMatmenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9hdXRoLWNvbGxlY3Rpb24tbWF0bWVudS9hdXRoLWNvbGxlY3Rpb24tbWF0bWVudS5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-collection-matmenu/auth-collection-matmenu.component.ts":
  /*!*************************************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-collection-matmenu/auth-collection-matmenu.component.ts ***!
    \*************************************************************************************************************************************************************/
  /*! exports provided: AuthCollectionMatmenuComponent */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsAuthCollectionMatmenuAuthCollectionMatmenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthCollectionMatmenuComponent", function () {
      return AuthCollectionMatmenuComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AuthCollectionMatmenuComponent = /*#__PURE__*/function () {
      function AuthCollectionMatmenuComponent() {
        _classCallCheck(this, AuthCollectionMatmenuComponent);
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      _createClass(AuthCollectionMatmenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "click",
        value: function click(action, type) {
          this.action.emit({
            action: action,
            type: type
          });
        }
      }]);
      return AuthCollectionMatmenuComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AuthCollectionMatmenuComponent.prototype, "action", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AuthCollectionMatmenuComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AuthCollectionMatmenuComponent.prototype, "childType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childMenu', {
      "static": true
    })], AuthCollectionMatmenuComponent.prototype, "childMenu", void 0);
    AuthCollectionMatmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-auth-collection-matmenu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./auth-collection-matmenu.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-collection-matmenu/auth-collection-matmenu.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./auth-collection-matmenu.component.scss */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-collection-matmenu/auth-collection-matmenu.component.scss"))["default"]]
    })], AuthCollectionMatmenuComponent);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-editor-options/auth-editor-options.component.scss":
  /*!*******************************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-editor-options/auth-editor-options.component.scss ***!
    \*******************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsAuthEditorOptionsAuthEditorOptionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".op500 {\n  opacity: 0.5;\n}\n\n.menu-icon {\n  position: relative;\n  top: 2px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9hdXRoLWVkaXRvci1vcHRpb25zL2F1dGgtZWRpdG9yLW9wdGlvbnMuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9hdXRoLWVkaXRvci1vcHRpb25zL2F1dGgtZWRpdG9yLW9wdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdC93cy9hdXRob3Ivc3JjL2xpYi9yb3V0aW5nL21vZHVsZXMvZWRpdG9yL3JvdXRpbmcvbW9kdWxlcy9jb2xsZWN0aW9uL2NvbXBvbmVudHMvYXV0aC1lZGl0b3Itb3B0aW9ucy9hdXRoLWVkaXRvci1vcHRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wNTAwIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubWVudS1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuIiwiLm9wNTAwIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubWVudS1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */";

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-editor-options/auth-editor-options.component.ts":
  /*!*****************************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-editor-options/auth-editor-options.component.ts ***!
    \*****************************************************************************************************************************************************/
  /*! exports provided: AuthEditorOptionsComponent */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsAuthEditorOptionsAuthEditorOptionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthEditorOptionsComponent", function () {
      return AuthEditorOptionsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ws_author_src_lib_constants_depth_rule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ws/author/src/lib/constants/depth-rule */"./project/ws/author/src/lib/constants/depth-rule.ts");
    /* harmony import */
    var _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ws/author/src/lib/routing/modules/editor/services/editor-content.service */"./project/ws/author/src/lib/routing/modules/editor/services/editor-content.service.ts");
    /* harmony import */
    var _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ws/author/src/lib/services/init.service */"./project/ws/author/src/lib/services/init.service.ts");
    /* harmony import */
    var _services_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./../../services/store.service */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/store.service.ts");
    var AuthEditorOptionsComponent = /*#__PURE__*/function () {
      function AuthEditorOptionsComponent(authInitService, accessService, storeService) {
        _classCallCheck(this, AuthEditorOptionsComponent);
        this.authInitService = authInitService;
        this.accessService = accessService;
        this.storeService = storeService;
        this.isInvalid = true;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.allowedChild = [];
        this.allowedSibling = [];
        this.canEdit = false;
        this.contentEditDisabled = false;
        this.metaEditDisabled = false;
      }
      _createClass(AuthEditorOptionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.creationContent = this.authInitService.creationEntity;
          var childrenConfig = this.authInitService.collectionConfig.childrenConfig;
          var contentTypeConfig = childrenConfig[this.node.category];
          var content = this.accessService.getUpdatedMeta(this.node.identifier);
          this.contentEditDisabled = content.isContentEditingDisabled;
          this.metaEditDisabled = content.isMetaEditingDisabled;
          this.canEdit = this.accessService.hasAccess(content);
          if (contentTypeConfig && this.node.editable && this.canEdit && contentTypeConfig.allowCreation) {
            this.allowedChild = this.formChildren(contentTypeConfig, this.node.level + 1);
          }
          if (this.node.parentId) {
            var parentType = this.storeService.flatNodeMap.get(this.node.parentId);
            var parentContent = this.accessService.getUpdatedMeta(parentType.identifier);
            if (parentType && childrenConfig[parentType.category] && this.node.editable && !parentContent.isContentEditingDisabled && this.accessService.hasAccess(parentContent) && childrenConfig[parentType.category].allowCreation) {
              this.allowedSibling = this.formChildren(childrenConfig[parentType.category], this.node.level);
            }
          }
        }
      }, {
        key: "formChildren",
        value: function formChildren(contentTypeConfig, currentDepth) {
          var _this = this;
          var topLevel = Array.from(this.creationContent.values());
          var child = [];
          topLevel.forEach(function (v) {
            if (v.id !== 'resource' && v.id !== 'collection' && contentTypeConfig.allowedCreationType && contentTypeConfig.allowedCreationType.includes(v.id) && _this.authInitService.collectionConfig.maxDepth >= currentDepth + (_ws_author_src_lib_constants_depth_rule__WEBPACK_IMPORTED_MODULE_2__["DEPTH_RUE"][v.contentType] || 1)) {
              child.push(_this.recursiveAddFunction(v));
            }
          });
          return child;
        }
      }, {
        key: "recursiveAddFunction",
        value: function recursiveAddFunction(content) {
          var children = [];
          var returnValue = {
            children: children,
            id: content.id,
            name: content.name,
            icon: content.icon
          };
          // if (content.id === 'resource' && content.children) {
          //   // console.log('children==>', content.children)
          //   content.children.forEach(v => {
          //     const entity = this.authInitService.creationEntity.get(v)
          //     // console.log('entity==>', entity)
          //     if (
          //       entity &&
          //       allowedType.includes(entity.id) &&
          //       this.authInitService.collectionConfig.maxDepth >=
          //       currentDepth + (DEPTH_RUE[entity.contentType] || 1)
          //     ) {
          //       children.push(this.recursiveAddFunction(entity, allowedType, currentDepth))
          //     }
          //   })
          // }
          return returnValue;
        }
      }, {
        key: "click",
        value: function click(action, type) {
          this.action.emit({
            action: action,
            type: type
          });
        }
      }]);
      return AuthEditorOptionsComponent;
    }();
    AuthEditorOptionsComponent.ctorParameters = function () {
      return [{
        type: _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_4__["AuthInitService"]
      }, {
        type: _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_3__["EditorContentService"]
      }, {
        type: _services_store_service__WEBPACK_IMPORTED_MODULE_5__["CollectionStoreService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AuthEditorOptionsComponent.prototype, "node", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AuthEditorOptionsComponent.prototype, "isInvalid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AuthEditorOptionsComponent.prototype, "action", void 0);
    AuthEditorOptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-auth-editor-options',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./auth-editor-options.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-editor-options/auth-editor-options.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./auth-editor-options.component.scss */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-editor-options/auth-editor-options.component.scss"))["default"]]
    })], AuthEditorOptionsComponent);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-of-contents/auth-table-of-contents.component.scss":
  /*!*************************************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-of-contents/auth-table-of-contents.component.scss ***!
    \*************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsAuthTableOfContentsAuthTableOfContentsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".custom-card {\n  height: 60px;\n  line-height: 50px;\n}\n\n.node-name {\n  max-width: 185px;\n  min-width: 145px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n\n.node-name + .placeholder {\n  margin-top: 19px;\n}\n\n.placeholder {\n  z-index: 2;\n  margin-top: -24px;\n  position: absolute;\n}\n\n.placeholder.second {\n  margin-top: 16px;\n}\n\n.placeholder .dot {\n  position: absolute;\n  background: #e3165b;\n  border-radius: 10px;\n  height: 6px;\n  width: 6px;\n}\n\n.placeholder .line {\n  position: absolute;\n  background: rgba(0, 0, 0, 0.54);\n  left: 6px;\n  top: 2px;\n  height: 1px;\n  width: 144px;\n}\n\n.mat-tree-node {\n  cursor: pointer;\n  min-height: 35px !important;\n  height: 35px !important;\n  margin-top: 5px;\n  border-radius: 5px;\n}\n\n.cdk-drag-preview {\n  background-color: grey;\n  margin-top: 15px;\n  margin-left: 15px;\n  position: relative;\n  padding: 5px;\n}\n\n.cdk-drag-preview mat-icon {\n  top: 4px;\n  position: absolute;\n}\n\n.cdk-drag-preview span {\n  margin-left: 30px;\n}\n\n.node-icon {\n  padding-left: 5px;\n  padding-right: 10px;\n  top: 1px;\n  position: relative;\n}\n\n.menu-icon {\n  position: relative;\n  top: 2px;\n  font-size: 20px;\n}\n\n.mat-menu-content {\n  padding: 0px;\n}\n\n.mat-menu-item {\n  height: 35px;\n  line-height: 35px;\n  min-width: 200px;\n}\n\nmat-tree {\n  max-height: 650px;\n  overflow: hidden;\n  width: 310px;\n  -webkit-overflow-scrolling: touch;\n}\n\nmat-tree:hover {\n  overflow: auto;\n}\n\nmat-tree::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n@media (hover: none) {\n  mat-tree::-webkit-scrollbar {\n    width: 0px !important;\n    height: 0px !important;\n  }\n}\n\n@media (pointer: coarse) {\n  mat-tree::-webkit-scrollbar {\n    width: 0px !important;\n    height: 0px !important;\n  }\n  mat-tree::-webkit-scrollbar::-webkit-scrollbar-track {\n    background: transparent;\n  }\n}\n\nmat-tree::-webkit-scrollbar-track {\n  background: #cfcfcf;\n}\n\nmat-tree::-webkit-scrollbar-thumb {\n  background: #9e9e9e;\n}\n\nmat-tree::-webkit-scrollbar-thumb:hover {\n  background: #707070;\n}\n\n.op500 {\n  opacity: 0.5;\n}\n\n.drag {\n  margin-right: 10px;\n}\n\n.transitionD {\n  transition: all 1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9hdXRoLXRhYmxlLW9mLWNvbnRlbnRzL2F1dGgtdGFibGUtb2YtY29udGVudHMuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9hdXRoLXRhYmxlLW9mLWNvbnRlbnRzL2F1dGgtdGFibGUtb2YtY29udGVudHMuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvc3R5bGVzL193cy12YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURNQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUF1Qiw0QkFBQTtFQUN2Qiw0QkFBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRkY7O0FESUU7RUFDRSxnQkFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNISjs7QURNRTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSko7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0xGOztBRFFBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDTEY7O0FET0U7RUFDRSxRQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURRRTtFQUNFLGlCQUFBO0FDTko7O0FEVUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDUEY7O0FEVUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FDUEY7O0FEVUE7RUFDRSxZQUFBO0FDUEY7O0FEVUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1BGOztBRFVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFLQSxpQ0FBQTtBQ1hGOztBRE9FO0VBQ0UsY0FBQTtBQ0xKOztBRFVFO0VBQ0UsVUVwR007RUZxR04sV0VyR007QUQ2RlY7O0FEVUk7RUFKRjtJQU1JLHFCQURjO0lBRWQsc0JBRmM7RUNObEI7QUFDRjs7QURVSTtFQVZGO0lBWUkscUJBRGM7SUFFZCxzQkFGYztFQ05sQjtFRFVJO0lBQ0UsdUJBQUE7RUNSTjtBQUNGOztBRFlFO0VBQ0UsbUJBQUE7QUNWSjs7QURhRTtFQUNFLG1CQUFBO0FDWEo7O0FEY0U7RUFDRSxtQkFBQTtBQ1pKOztBRGdCQTtFQUNFLFlBQUE7QUNiRjs7QURnQkE7RUFDRSxrQkFBQTtBQ2JGOztBRGdCQTtFQUNFLGtCQUFBO0FDYkYiLCJmaWxlIjoicHJvamVjdC93cy9hdXRob3Ivc3JjL2xpYi9yb3V0aW5nL21vZHVsZXMvZWRpdG9yL3JvdXRpbmcvbW9kdWxlcy9jb2xsZWN0aW9uL2NvbXBvbmVudHMvYXV0aC10YWJsZS1vZi1jb250ZW50cy9hdXRoLXRhYmxlLW9mLWNvbnRlbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuQGltcG9ydCAnc3R5bGVzL193cy1taXhpbnMuc2Nzcyc7XG5cbi5jdXN0b20tY2FyZCB7XG4gIGhlaWdodDogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIC8vdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm9kZS1uYW1lIHtcbiAgbWF4LXdpZHRoOiAxODVweDtcbiAgbWluLXdpZHRoOiAxNDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7IC8qIG51bWJlciBvZiBsaW5lcyB0byBzaG93ICovXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi5ub2RlLW5hbWUgKyAucGxhY2Vob2xkZXIge1xuICBtYXJnaW4tdG9wOiAxOXB4O1xufVxuXG4ucGxhY2Vob2xkZXIge1xuICB6LWluZGV4OiAyO1xuICBtYXJnaW4tdG9wOiAtMjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICYuc2Vjb25kIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5cbiAgLmRvdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6ICNlMzE2NWI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICB3aWR0aDogNnB4O1xuICB9XG5cbiAgLmxpbmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgIGxlZnQ6IDZweDtcbiAgICB0b3A6IDJweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMTQ0cHg7XG4gIH1cbn1cblxuLm1hdC10cmVlLW5vZGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweDtcblxuICBtYXQtaWNvbiB7XG4gICAgdG9wOiA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIH1cbn1cblxuLm5vZGUtaWNvbiB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB0b3A6IDFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWVudS1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubWF0LW1lbnUtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLm1hdC1tZW51LWl0ZW0ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG5tYXQtdHJlZSB7XG4gIG1heC1oZWlnaHQ6IDY1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMzEwcHg7XG4gICY6aG92ZXIge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHNpemUteHM7XG4gICAgaGVpZ2h0OiAkc2l6ZS14cztcblxuICAgIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICRzY3JvbGwtc2l6ZTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogJHNjcm9sbC1zaXplO1xuICAgICAgaGVpZ2h0OiAkc2Nyb2xsLXNpemU7XG4gICAgfVxuXG4gICAgQG1lZGlhIChwb2ludGVyOiBjb2Fyc2UpIHtcbiAgICAgICRzY3JvbGwtc2l6ZTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogJHNjcm9sbC1zaXplO1xuICAgICAgaGVpZ2h0OiAkc2Nyb2xsLXNpemU7XG5cbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICNjZmNmY2Y7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogIzllOWU5ZTtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNzA3MDcwO1xuICB9XG59XG5cbi5vcDUwMCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmRyYWcge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi50cmFuc2l0aW9uRCB7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbn1cbiIsIi5jdXN0b20tY2FyZCB7XG4gIGhlaWdodDogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG59XG5cbi5ub2RlLW5hbWUge1xuICBtYXgtd2lkdGg6IDE4NXB4O1xuICBtaW4td2lkdGg6IDE0NXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgLyogbnVtYmVyIG9mIGxpbmVzIHRvIHNob3cgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLm5vZGUtbmFtZSArIC5wbGFjZWhvbGRlciB7XG4gIG1hcmdpbi10b3A6IDE5cHg7XG59XG5cbi5wbGFjZWhvbGRlciB7XG4gIHotaW5kZXg6IDI7XG4gIG1hcmdpbi10b3A6IC0yNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ucGxhY2Vob2xkZXIuc2Vjb25kIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5wbGFjZWhvbGRlciAuZG90IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZTMxNjViO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDZweDtcbiAgd2lkdGg6IDZweDtcbn1cbi5wbGFjZWhvbGRlciAubGluZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgbGVmdDogNnB4O1xuICB0b3A6IDJweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxNDRweDtcbn1cblxuLm1hdC10cmVlLW5vZGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5jZGstZHJhZy1wcmV2aWV3IG1hdC1pY29uIHtcbiAgdG9wOiA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jZGstZHJhZy1wcmV2aWV3IHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLm5vZGUtaWNvbiB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB0b3A6IDFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWVudS1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubWF0LW1lbnUtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLm1hdC1tZW51LWl0ZW0ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG5tYXQtdHJlZSB7XG4gIG1heC1oZWlnaHQ6IDY1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMzEwcHg7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cbm1hdC10cmVlOmhvdmVyIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5tYXQtdHJlZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbn1cbkBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgbWF0LXRyZWU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChwb2ludGVyOiBjb2Fyc2UpIHtcbiAgbWF0LXRyZWU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgfVxuICBtYXQtdHJlZTo6LXdlYmtpdC1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxufVxubWF0LXRyZWU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2NmY2ZjZjtcbn1cbm1hdC10cmVlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM5ZTllOWU7XG59XG5tYXQtdHJlZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNzA3MDcwO1xufVxuXG4ub3A1MDAge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5kcmFnIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udHJhbnNpdGlvbkQge1xuICB0cmFuc2l0aW9uOiBhbGwgMXM7XG59IiwiJGZvbnQtZmFtaWx5LXNhbnM6ICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsXG4gICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJyxcbiAgJ05vdG8gQ29sb3IgRW1vamknO1xuJGZvbnQtZmFtaWx5LXNlcmlmOiBHZW9yZ2lhLCBDYW1icmlhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuJGZvbnQtZmFtaWx5LW1vbm86IE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuJGZvbnQtZmFtaWx5LW9wZW4tc2FuczogJ09wZW4gU2Fucyc7XG4kZm9udC1mYW1pbHktb3Blbi1wb3BwaW5zOiAnUm9ib3RvJztcblxuXG4kc2l6ZS14czogOHB4O1xuJHNpemUtczogMTJweDtcbiRzaXplLW06IDE2cHg7XG4kc2l6ZS1sOiAyNHB4O1xuJHNpemUteGw6IDMycHg7XG4kc2l6ZS1sZzogMjhweDtcbiRzaXplLXh4bDogNDBweDtcblxuJG1hdC10b29sYmFyLXhzOiA1MnB4O1xuJG1hdC10b29sYmFyLWd0LXhzOiA1NnB4O1xuIl19 */";

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-of-contents/auth-table-of-contents.component.ts":
  /*!***********************************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-of-contents/auth-table-of-contents.component.ts ***!
    \***********************************************************************************************************************************************************/
  /*! exports provided: AuthTableOfContentsComponent */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsAuthTableOfContentsAuthTableOfContentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthTableOfContentsComponent", function () {
      return AuthTableOfContentsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/cdk/tree */"./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/material/tree */"./node_modules/@angular/material/esm2015/tree.js");
    /* harmony import */
    var _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ws/author/src/lib/constants/constant */"./project/ws/author/src/lib/constants/constant.ts");
    /* harmony import */
    var _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @ws/author/src/lib/constants/notificationMessage */"./project/ws/author/src/lib/constants/notificationMessage.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component */"./project/ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/notification/notification.component */"./project/ws/author/src/lib/modules/shared/components/notification/notification.component.ts");
    /* harmony import */
    var _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @ws/author/src/lib/services/init.service */"./project/ws/author/src/lib/services/init.service.ts");
    /* harmony import */
    var _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @ws/author/src/lib/services/loader.service */"./project/ws/author/src/lib/services/loader.service.ts");
    /* harmony import */
    var _services_editor_content_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ../../../../../services/editor-content.service */"./project/ws/author/src/lib/routing/modules/editor/services/editor-content.service.ts");
    /* harmony import */
    var _shared_components_auth_picker_auth_picker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./../../../../../shared/components/auth-picker/auth-picker.component */"./project/ws/author/src/lib/routing/modules/editor/shared/components/auth-picker/auth-picker.component.ts");
    /* harmony import */
    var _services_store_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./../../services/store.service */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/store.service.ts");
    /* harmony import */
    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! @angular/cdk/layout */"./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    var AuthTableOfContentsComponent = /*#__PURE__*/function () {
      function AuthTableOfContentsComponent(dialog, snackBar, store, editorStore, loaderService, authInitService, breakpointObserver) {
        _classCallCheck(this, AuthTableOfContentsComponent);
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.store = store;
        this.editorStore = editorStore;
        this.loaderService = loaderService;
        this.authInitService = authInitService;
        this.breakpointObserver = breakpointObserver;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.isDragging = false;
        this.dropContainer = null;
        this.dragContainer = null;
        this.expandDelay = 500;
        this.isDropDisabled = false;
        this.draggingPosition = null;
        this.selectedNode = null;
        this.expandedNodes = new Set();
        this.drawer = true;
        this.menubtn = true;
        this.parentHierarchy = [];
        this.backUpInformation = {
          isDragging: false,
          dropContainer: null,
          dragContainer: null,
          draggingPosition: null
        };
        this.invalidIds = [];
        this.mediumScreen = false;
        this.mediumSizeBreakpoint$ = this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["Breakpoints"].Small]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["map"])(function (res) {
          return res.matches;
        }));
        this.leftarrow = true;
        this._transformer = function (node, level) {
          return {
            level: level,
            id: node.id,
            identifier: node.identifier,
            category: node.category,
            expandable: !!node.children && node.children.length > 0,
            children: node.children ? node.children.map(function (v) {
              return v.id;
            }) : [],
            editable: node.editable,
            childLoaded: node.childLoaded,
            parentId: node.parentId
          };
        };
      }
      _createClass(AuthTableOfContentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;
          this.parentNodeId = this.store.currentParentNode;
          this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](function (node) {
            return node.level;
          }, function (node) {
            return node.expandable;
          });
          this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlattener"](this._transformer, function (node) {
            return node.level;
          }, function (node) {
            return node.expandable;
          }, function (node) {
            return node.children;
          });
          this.store.onInvalidNodeChange.subscribe(function (v) {
            _this2.invalidIds = v;
            _this2.expandNodesById(v);
          });
          this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
          this.store.treeStructureChange.subscribe(function (data) {
            _this2.dataSource.data = [data];
            if (_this2.parentNodeId === _this2.store.currentParentNode) {
              _this2.expandNodesById();
              if (_this2.selectedNode && !_this2.store.flatNodeMap.get(_this2.selectedNode)) {
                _this2.parentHierarchy.forEach(function (v) {
                  if (_this2.store.flatNodeMap.get(v)) {
                    var identifier = _this2.store.uniqueIdMap.get(v);
                    _this2.selectedNode = v;
                    _this2.editorStore.currentContent = identifier;
                    _this2.store.currentSelectedNode = v;
                    _this2.editorStore.changeActiveCont.next(identifier);
                    return;
                  }
                });
              }
            } else {
              _this2.parentNodeId = _this2.store.currentParentNode;
            }
          });
          this.store.selectedNodeChange.subscribe(function (data) {
            if (data) {
              _this2.selectedNode = data;
            }
          });
          this.mediumSizeBreakpoint$.subscribe(function (isLtMedium) {
            _this2.mediumScreen = isLtMedium;
            if (isLtMedium) {
              _this2.drawer = true;
              _this2.leftarrow = false;
              _this2.menubtn = false;
            } else {
              _this2.leftarrow = true;
              _this2.menubtn = true;
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.loaderService.changeLoad.next(false);
        }
      }, {
        key: "onNodeSelect",
        value: function onNodeSelect(node) {
          if (node.id !== this.selectedNode) {
            this.selectedNode = node.id;
            this.editorStore.currentContent = node.identifier;
            this.store.currentSelectedNode = node.id;
            this.editorStore.changeActiveCont.next(node.identifier);
          }
        }
      }, {
        key: "closeSidenav",
        value: function closeSidenav() {
          this.closeEvent.emit(true);
        }
      }, {
        key: "dragStart",
        value: function dragStart(node) {
          this.isDragging = true;
          this.dragContainer = node;
        }
      }, {
        key: "dragEnd",
        value: function dragEnd() {
          this.backUpInformation = {
            isDragging: this.isDragging,
            dropContainer: this.dropContainer,
            dragContainer: this.dragContainer,
            draggingPosition: this.draggingPosition
          };
          this.isDragging = false;
          this.dropContainer = null;
          this.dragContainer = null;
          this.draggingPosition = null;
        }
      }, {
        key: "dragHover",
        value: function dragHover(node, event) {
          var _this3 = this;
          event.preventDefault();
          if (this.isDragging) {
            this.dropContainer = node;
            clearTimeout(this.expandTimeout);
            this.expandTimeout = setTimeout(function () {
              _this3.treeControl.expand(node);
              // tslint:disable-next-line: align
            }, this.expandDelay);
            var percentageY = event.offsetY / event.target.clientHeight;
            if (percentageY >= 0 && percentageY < 0.2) {
              this.draggingPosition = 'above';
            } else if (percentageY > 0.8) {
              this.draggingPosition = 'below';
            } else if (percentageY >= 0.2 && percentageY <= 0.8) {
              this.draggingPosition = 'center';
            }
            var parentHierarchy = [];
            var currNode = node;
            while (currNode) {
              if (currNode && currNode.parentId) {
                parentHierarchy.push(currNode.parentId);
              }
              currNode = this.getParentNode(currNode);
            }
            if (parentHierarchy.includes(this.dragContainer.id)) {
              this.isDropDisabled = true;
            } else if (this.dragContainer === this.dropContainer) {
              this.isDropDisabled = true;
            } else if (['above', 'below'].includes(this.draggingPosition)) {
              var parentNode = this.getParentNode(node);
              this.isDropDisabled = !parentNode ? true : !this.store.allowDrop(this.dragContainer, parentNode);
            } else {
              this.isDropDisabled = !this.store.allowDrop(this.dragContainer, this.dropContainer);
            }
          }
        }
      }, {
        key: "dragHoverEnd",
        value: function dragHoverEnd($event) {
          $event.preventDefault();
          if (this.isDragging) {
            clearTimeout(this.expandTimeout);
            this.backUpInformation.dropContainer = this.dropContainer;
            this.dropContainer = null;
          }
        }
      }, {
        key: "drop",
        value: function drop() {
          this.isDragging = false;
          if (!this.isDropDisabled) {
            this.preserveExpandedNodes();
            var isAdjacentDrop = ['above', 'below'].includes(this.backUpInformation.draggingPosition);
            var dropContainer = isAdjacentDrop ? this.getParentNode(this.backUpInformation.dropContainer) : this.backUpInformation.dropContainer;
            if (dropContainer.id !== this.backUpInformation.dragContainer.id) {
              this.store.dragAndDrop(this.backUpInformation.dragContainer, dropContainer, isAdjacentDrop ? this.backUpInformation.dropContainer.id : undefined, this.backUpInformation.draggingPosition);
            }
          }
        }
      }, {
        key: "preserveExpandedNodes",
        value: function preserveExpandedNodes() {
          var _this4 = this;
          this.expandedNodes = new Set();
          this.treeControl.dataNodes.forEach(function (v) {
            if (_this4.treeControl.isExpandable(v) && _this4.treeControl.isExpanded(v)) {
              _this4.expandedNodes.add(v.id);
            }
          });
        }
      }, {
        key: "expandNodesById",
        value: function expandNodesById(ids) {
          var _this5 = this;
          var idSet = ids ? new Set(ids) : this.expandedNodes;
          this.treeControl.dataNodes.forEach(function (node) {
            if (idSet.has(node.id)) {
              _this5.treeControl.expand(node);
              var parent = _this5.getParentNode(node);
              while (parent) {
                _this5.treeControl.expand(parent);
                parent = _this5.getParentNode(parent);
              }
            }
          });
        }
        /*
         Get the parent node of a node
          */
      }, {
        key: "getParentNode",
        value: function getParentNode(node) {
          var currentLevel = node.level;
          if (currentLevel < 1) {
            return null;
          }
          var startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
          for (var i = startIndex; i >= 0; i = i - 1) {
            var currentNode = this.treeControl.dataNodes[i];
            if (currentNode.level < currentLevel) {
              return currentNode;
            }
          }
          return null;
        }
      }, {
        key: "delete",
        value: function _delete(node) {
          var _this6 = this;
          var dialogRef = this.dialog.open(_ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogComponent"], {
            width: '500px',
            height: '175px',
            data: 'deleteTreeNode'
          });
          this.preserveExpandedNodes();
          dialogRef.afterClosed().subscribe(function (confirm) {
            if (confirm) {
              _this6.parentHierarchy = [];
              var currNode = node;
              while (currNode) {
                if (currNode && currNode.parentId) {
                  _this6.parentHierarchy.push(currNode.parentId);
                }
                currNode = _this6.getParentNode(currNode);
              }
              _this6.store.deleteNode(node.id);
              _this6.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"], {
                data: {
                  type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SUCCESS
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000
              });
            }
          });
        }
      }, {
        key: "addChildOrSibling",
        value: function addChildOrSibling(node) {
          var asSibling = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this7 = this;
            var children, dialogRef;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  children = (node.children || []).map(function (v) {
                    return _this7.store.uniqueIdMap.get(v);
                  });
                  dialogRef = this.dialog.open(_shared_components_auth_picker_auth_picker_component__WEBPACK_IMPORTED_MODULE_12__["AuthPickerComponent"], {
                    width: '90vw',
                    height: '90vh',
                    data: {
                      filter: this.authInitService.collectionConfig.childrenConfig[node.category].searchFilter,
                      selectedIds: children
                    }
                  });
                  this.preserveExpandedNodes();
                  dialogRef.afterClosed().subscribe(function (contents) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this7, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                      var parentNode, isDone;
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            if (!(contents && contents.length)) {
                              _context.next = 9;
                              break;
                            }
                            parentNode = asSibling ? this.getParentNode(node) : node;
                            this.expandedNodes.add(parentNode.id);
                            this.loaderService.changeLoad.next(true);
                            _context.next = 6;
                            return this.store.addChildOrSibling(contents, parentNode, asSibling ? node.id : undefined, 'below');
                          case 6:
                            isDone = _context.sent;
                            this.loaderService.changeLoad.next(false);
                            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"], {
                              data: {
                                type: isDone ? _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SUCCESS : _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].FAIL
                              },
                              duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000
                            });
                          case 9:
                          case "end":
                            return _context.stop();
                        }
                      }, _callee, this);
                    }));
                  });
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "createNewChildOrSibling",
        value: function createNewChildOrSibling(type, node) {
          var asSibling = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var parentNode, isDone;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  parentNode = asSibling ? this.getParentNode(node) : node;
                  this.loaderService.changeLoad.next(true);
                  this.preserveExpandedNodes();
                  this.expandedNodes.add(parentNode.id);
                  _context3.next = 6;
                  return this.store.createChildOrSibling(type, parentNode, asSibling ? node.id : undefined, 'below');
                case 6:
                  isDone = _context3.sent;
                  this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"], {
                    data: {
                      type: isDone ? _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SUCCESS : _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].FAIL
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000
                  });
                  this.loaderService.changeLoad.next(false);
                case 9:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "takeAction",
        value: function takeAction(action, node, type) {
          switch (action) {
            case 'editMeta':
            case 'editContent':
            case 'preview':
              this.onNodeSelect(node);
              this.action.emit({
                type: action,
                identifier: node.identifier
              });
              break;
            case 'delete':
              this["delete"](node);
              break;
            case 'addChild':
              this.addChildOrSibling(node);
              break;
            case 'addSibling':
              this.addChildOrSibling(node, true);
              break;
            case 'createChild':
              this.createNewChildOrSibling(type, node);
              break;
            case 'createSibling':
              this.createNewChildOrSibling(type, node, true);
              break;
            default:
              break;
          }
        }
      }]);
      return AuthTableOfContentsComponent;
    }();
    AuthTableOfContentsComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }, {
        type: _services_store_service__WEBPACK_IMPORTED_MODULE_13__["CollectionStoreService"]
      }, {
        type: _services_editor_content_service__WEBPACK_IMPORTED_MODULE_11__["EditorContentService"]
      }, {
        type: _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"]
      }, {
        type: _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_9__["AuthInitService"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["BreakpointObserver"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], AuthTableOfContentsComponent.prototype, "action", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], AuthTableOfContentsComponent.prototype, "closeEvent", void 0);
    AuthTableOfContentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'ws-auth-table-of-contents',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./auth-table-of-contents.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-of-contents/auth-table-of-contents.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./auth-table-of-contents.component.scss */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-of-contents/auth-table-of-contents.component.scss"))["default"]]
    })], AuthTableOfContentsComponent);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-tree-label/auth-table-tree-label.component.scss":
  /*!***********************************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-tree-label/auth-table-tree-label.component.scss ***!
    \***********************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsAuthTableTreeLabelAuthTableTreeLabelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".node-name {\n  position: relative;\n  top: 2px;\n  max-width: 185px;\n  min-width: 145px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n\n.node-icon {\n  padding-left: 5px;\n  padding-right: 10px;\n  top: 1px;\n  position: relative;\n}\n\ndiv {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9hdXRoLXRhYmxlLXRyZWUtbGFiZWwvYXV0aC10YWJsZS10cmVlLWxhYmVsLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hdXRob3Ivc3JjL2xpYi9yb3V0aW5nL21vZHVsZXMvZWRpdG9yL3JvdXRpbmcvbW9kdWxlcy9jb2xsZWN0aW9uL2NvbXBvbmVudHMvYXV0aC10YWJsZS10cmVlLWxhYmVsL2F1dGgtdGFibGUtdHJlZS1sYWJlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUF1Qiw0QkFBQTtFQUN2Qiw0QkFBQTtBQ0VGOztBRENBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtBQ0VGIiwiZmlsZSI6InByb2plY3Qvd3MvYXV0aG9yL3NyYy9saWIvcm91dGluZy9tb2R1bGVzL2VkaXRvci9yb3V0aW5nL21vZHVsZXMvY29sbGVjdGlvbi9jb21wb25lbnRzL2F1dGgtdGFibGUtdHJlZS1sYWJlbC9hdXRoLXRhYmxlLXRyZWUtbGFiZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9kZS1uYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbiAgbWF4LXdpZHRoOiAxODVweDtcbiAgbWluLXdpZHRoOiAxNDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7IC8qIG51bWJlciBvZiBsaW5lcyB0byBzaG93ICovXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi5ub2RlLWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgdG9wOiAxcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbiIsIi5ub2RlLW5hbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xuICBtYXgtd2lkdGg6IDE4NXB4O1xuICBtaW4td2lkdGg6IDE0NXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgLyogbnVtYmVyIG9mIGxpbmVzIHRvIHNob3cgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLm5vZGUtaWNvbiB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB0b3A6IDFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */";

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-tree-label/auth-table-tree-label.component.ts":
  /*!*********************************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-tree-label/auth-table-tree-label.component.ts ***!
    \*********************************************************************************************************************************************************/
  /*! exports provided: AuthTableTreeLabelComponent */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsAuthTableTreeLabelAuthTableTreeLabelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthTableTreeLabelComponent", function () {
      return AuthTableTreeLabelComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ws/author/src/lib/routing/modules/editor/services/editor-content.service */"./project/ws/author/src/lib/routing/modules/editor/services/editor-content.service.ts");
    /* harmony import */
    var _services_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./../../services/resolver.service */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/resolver.service.ts");
    var AuthTableTreeLabelComponent = /*#__PURE__*/function () {
      function AuthTableTreeLabelComponent(storeService, resolverService) {
        _classCallCheck(this, AuthTableTreeLabelComponent);
        this.storeService = storeService;
        this.resolverService = resolverService;
        this.isDragging = false;
        this.isInvalid = false;
        this.name = '';
        this.icon = '';
      }
      _createClass(AuthTableTreeLabelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;
          this.storeService.onContentChange.subscribe(function (v) {
            if (v === _this8.identifier) {
              _this8.getUpdatedContent();
            }
          });
          this.getUpdatedContent();
        }
      }, {
        key: "getUpdatedContent",
        value: function getUpdatedContent() {
          var updatedMeta = this.storeService.getUpdatedMeta(this.identifier);
          this.name = updatedMeta.name;
          this.icon = this.resolverService.getIcon(updatedMeta);
        }
      }]);
      return AuthTableTreeLabelComponent;
    }();
    AuthTableTreeLabelComponent.ctorParameters = function () {
      return [{
        type: _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_2__["EditorContentService"]
      }, {
        type: _services_resolver_service__WEBPACK_IMPORTED_MODULE_3__["CollectionResolverService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AuthTableTreeLabelComponent.prototype, "identifier", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AuthTableTreeLabelComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AuthTableTreeLabelComponent.prototype, "isDragging", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AuthTableTreeLabelComponent.prototype, "isInvalid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AuthTableTreeLabelComponent.prototype, "icon", void 0);
    AuthTableTreeLabelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-auth-table-tree-label',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./auth-table-tree-label.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-tree-label/auth-table-tree-label.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./auth-table-tree-label.component.scss */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-tree-label/auth-table-tree-label.component.scss"))["default"]]
    })], AuthTableTreeLabelComponent);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-toc/auth-toc.component.scss":
  /*!*********************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-toc/auth-toc.component.scss ***!
    \*********************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsAuthTocAuthTocComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "#cdk-drop-list-0 > mat-tree-node:nth-child(1) {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9hdXRoLXRvYy9hdXRoLXRvYy5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXV0aG9yL3NyYy9saWIvcm91dGluZy9tb2R1bGVzL2VkaXRvci9yb3V0aW5nL21vZHVsZXMvY29sbGVjdGlvbi9jb21wb25lbnRzL2F1dGgtdG9jL2F1dGgtdG9jLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3Qvd3MvYXV0aG9yL3NyYy9saWIvcm91dGluZy9tb2R1bGVzL2VkaXRvci9yb3V0aW5nL21vZHVsZXMvY29sbGVjdGlvbi9jb21wb25lbnRzL2F1dGgtdG9jL2F1dGgtdG9jLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Nkay1kcm9wLWxpc3QtMCA+IG1hdC10cmVlLW5vZGU6bnRoLWNoaWxkKDEpIHtcbiAgICBkaXNwbGF5OiBub25lXG59XG4vLyAjY2RrLWRyb3AtbGlzdC0wID4gbWF0LXRyZWUtbm9kZTpudGgtY2hpbGQoMikge1xuLy8gICAgIGJhY2tncm91bmQ6IHJnYmEoMzIsIDE1MCwgMjA1LCAwLjMpO1xuLy8gfVxuXG4iLCIjY2RrLWRyb3AtbGlzdC0wID4gbWF0LXRyZWUtbm9kZTpudGgtY2hpbGQoMSkge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */";

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-toc/auth-toc.component.ts":
  /*!*******************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-toc/auth-toc.component.ts ***!
    \*******************************************************************************************************************************/
  /*! exports provided: AuthTocComponent */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsAuthTocAuthTocComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthTocComponent", function () {
      return AuthTocComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/cdk/tree */"./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/material/tree */"./node_modules/@angular/material/esm2015/tree.js");
    /* harmony import */
    var _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ws/author/src/lib/constants/constant */"./project/ws/author/src/lib/constants/constant.ts");
    /* harmony import */
    var _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @ws/author/src/lib/constants/notificationMessage */"./project/ws/author/src/lib/constants/notificationMessage.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component */"./project/ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/notification/notification.component */"./project/ws/author/src/lib/modules/shared/components/notification/notification.component.ts");
    /* harmony import */
    var _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @ws/author/src/lib/services/init.service */"./project/ws/author/src/lib/services/init.service.ts");
    /* harmony import */
    var _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @ws/author/src/lib/services/loader.service */"./project/ws/author/src/lib/services/loader.service.ts");
    /* harmony import */
    var _services_editor_content_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ../../../../../services/editor-content.service */"./project/ws/author/src/lib/routing/modules/editor/services/editor-content.service.ts");
    /* harmony import */
    var _shared_components_auth_picker_auth_picker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./../../../../../shared/components/auth-picker/auth-picker.component */"./project/ws/author/src/lib/routing/modules/editor/shared/components/auth-picker/auth-picker.component.ts");
    /* harmony import */
    var _services_store_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./../../services/store.service */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/store.service.ts");
    /* harmony import */
    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! @angular/cdk/layout */"./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    var AuthTocComponent = /*#__PURE__*/function () {
      function AuthTocComponent(dialog, snackBar, store, editorStore, loaderService, authInitService, breakpointObserver) {
        _classCallCheck(this, AuthTocComponent);
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.store = store;
        this.editorStore = editorStore;
        this.loaderService = loaderService;
        this.authInitService = authInitService;
        this.breakpointObserver = breakpointObserver;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.node = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.data = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.isDragging = false;
        this.dropContainer = null;
        this.dragContainer = null;
        this.expandDelay = 500;
        this.isDropDisabled = false;
        this.draggingPosition = null;
        this.selectedNode = null;
        this.expandedNodes = new Set();
        this.drawer = true;
        this.menubtn = true;
        this.parentHierarchy = [];
        this.backUpInformation = {
          isDragging: false,
          dropContainer: null,
          dragContainer: null,
          draggingPosition: null
        };
        this.invalidIds = [];
        this.mediumScreen = false;
        this.mediumSizeBreakpoint$ = this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["Breakpoints"].Small]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["map"])(function (res) {
          return res.matches;
        }));
        this.leftarrow = true;
        this._transformer = function (node, level) {
          return {
            level: level,
            id: node.id,
            identifier: node.identifier,
            category: node.category,
            expandable: !!node.children && node.children.length > 0,
            children: node.children ? node.children.map(function (v) {
              return v.id;
            }) : [],
            editable: node.editable,
            childLoaded: node.childLoaded,
            parentId: node.parentId
          };
        };
      }
      _createClass(AuthTocComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;
          this.parentNodeId = this.store.currentParentNode;
          this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](function (node) {
            return node.level;
          }, function (node) {
            return node.expandable;
          });
          this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlattener"](this._transformer, function (node) {
            return node.level;
          }, function (node) {
            return node.expandable;
          }, function (node) {
            return node.children;
          });
          this.store.onInvalidNodeChange.subscribe(function (v) {
            _this9.invalidIds = v;
            _this9.expandNodesById(v);
          });
          this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
          this.store.treeStructureChange.subscribe(function (data) {
            _this9.dataSource.data = [data];
            if (_this9.parentNodeId === _this9.store.currentParentNode) {
              _this9.expandNodesById([_this9.parentNodeId]);
              if (_this9.selectedNode && !_this9.store.flatNodeMap.get(_this9.selectedNode)) {
                _this9.parentHierarchy.forEach(function (v) {
                  if (_this9.store.flatNodeMap.get(v)) {
                    var identifier = _this9.store.uniqueIdMap.get(v);
                    _this9.selectedNode = v;
                    _this9.editorStore.currentContent = identifier;
                    _this9.store.currentSelectedNode = v;
                    _this9.editorStore.changeActiveCont.next(identifier);
                    return;
                  }
                });
              }
            } else {
              _this9.parentNodeId = _this9.store.currentParentNode;
            }
          });
          this.store.selectedNodeChange.subscribe(function (data) {
            if (data) {
              _this9.selectedNode = data;
            }
          });
          this.mediumSizeBreakpoint$.subscribe(function (isLtMedium) {
            _this9.mediumScreen = isLtMedium;
            if (isLtMedium) {
              _this9.drawer = true;
              _this9.leftarrow = false;
              _this9.menubtn = false;
            } else {
              _this9.leftarrow = true;
              _this9.menubtn = true;
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if ($('#cdk-drop-list-0 > mat-tree-node').hasClass('selected') === false) {
            $('#cdk-drop-list-0 > mat-tree-node:nth-child(2)').trigger('click');
            $('#cdk-drop-list-0 > mat-tree-node:nth-child(2)').find('button.mat-icon-button').trigger('click');
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.loaderService.changeLoad.next(false);
        }
      }, {
        key: "onNodeSelect",
        value: function onNodeSelect(node) {
          if ($('#cdk-drop-list-0 > mat-tree-node').hasClass('selected')) {
            $('#cdk-drop-list-0 > mat-tree-node:nth-child(2)').removeClass('selected');
          }
          if (node.id !== this.selectedNode) {
            this.action.emit({
              type: 'editContent',
              identifier: node.identifier,
              nodeClicked: true
            });
            this.selectedNode = node.id;
            this.editorStore.currentContent = node.identifier;
            this.store.currentSelectedNode = node.id;
            this.editorStore.changeActiveCont.next(node.identifier);
          }
        }
      }, {
        key: "closeSidenav",
        value: function closeSidenav() {
          this.closeEvent.emit(true);
        }
      }, {
        key: "dragStart",
        value: function dragStart(node) {
          this.isDragging = true;
          this.dragContainer = node;
        }
      }, {
        key: "dragEnd",
        value: function dragEnd() {
          this.backUpInformation = {
            isDragging: this.isDragging,
            dropContainer: this.dropContainer,
            dragContainer: this.dragContainer,
            draggingPosition: this.draggingPosition
          };
          this.isDragging = false;
          this.dropContainer = null;
          this.dragContainer = null;
          this.draggingPosition = null;
        }
      }, {
        key: "dragHover",
        value: function dragHover(node, event) {
          var _this10 = this;
          event.preventDefault();
          if (this.isDragging) {
            this.dropContainer = node;
            clearTimeout(this.expandTimeout);
            this.expandTimeout = setTimeout(function () {
              _this10.treeControl.expand(node);
              // tslint:disable-next-line: align
            }, this.expandDelay);
            var percentageY = event.offsetY / event.target.clientHeight;
            if (percentageY >= 0 && percentageY < 0.2) {
              this.draggingPosition = 'above';
            } else if (percentageY > 0.8) {
              this.draggingPosition = 'below';
            } else if (percentageY >= 0.2 && percentageY <= 0.8) {
              this.draggingPosition = 'center';
            }
            var parentHierarchy = [];
            var currNode = node;
            while (currNode) {
              if (currNode && currNode.parentId) {
                parentHierarchy.push(currNode.parentId);
              }
              currNode = this.getParentNode(currNode);
            }
            if (parentHierarchy.includes(this.dragContainer.id)) {
              this.isDropDisabled = true;
            } else if (this.dragContainer === this.dropContainer) {
              this.isDropDisabled = true;
            } else if (['above', 'below'].includes(this.draggingPosition)) {
              var parentNode = this.getParentNode(node);
              this.isDropDisabled = !parentNode ? true : !this.store.allowDrop(this.dragContainer, parentNode);
            } else {
              this.isDropDisabled = !this.store.allowDrop(this.dragContainer, this.dropContainer);
            }
          }
        }
      }, {
        key: "dragHoverEnd",
        value: function dragHoverEnd($event) {
          $event.preventDefault();
          if (this.isDragging) {
            clearTimeout(this.expandTimeout);
            this.backUpInformation.dropContainer = this.dropContainer;
            this.dropContainer = null;
          }
        }
      }, {
        key: "drop",
        value: function drop() {
          this.isDragging = false;
          if (!this.isDropDisabled) {
            this.preserveExpandedNodes();
            var isAdjacentDrop = ['above', 'below'].includes(this.backUpInformation.draggingPosition);
            var dropContainer = isAdjacentDrop ? this.getParentNode(this.backUpInformation.dropContainer) : this.backUpInformation.dropContainer;
            if (dropContainer.id !== this.backUpInformation.dragContainer.id) {
              this.store.dragAndDrop(this.backUpInformation.dragContainer, dropContainer, isAdjacentDrop ? this.backUpInformation.dropContainer.id : undefined, this.backUpInformation.draggingPosition);
            }
          }
        }
      }, {
        key: "preserveExpandedNodes",
        value: function preserveExpandedNodes() {
          var _this11 = this;
          this.expandedNodes = new Set();
          this.treeControl.dataNodes.forEach(function (v) {
            if (_this11.treeControl.isExpandable(v) && _this11.treeControl.isExpanded(v)) {
              _this11.expandedNodes.add(v.id);
            }
          });
        }
      }, {
        key: "expandNodesById",
        value: function expandNodesById(ids) {
          var _this12 = this;
          var idSet = ids ? new Set(ids) : this.expandedNodes;
          this.treeControl.dataNodes.forEach(function (node) {
            if (idSet.has(node.id)) {
              _this12.treeControl.expand(node);
              var parent = _this12.getParentNode(node);
              while (parent) {
                _this12.treeControl.expand(parent);
                parent = _this12.getParentNode(parent);
              }
            }
          });
        }
        /*
         Get the parent node of a node
          */
      }, {
        key: "getParentNode",
        value: function getParentNode(node) {
          var currentLevel = node.level;
          if (currentLevel < 1) {
            return null;
          }
          var startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
          for (var i = startIndex; i >= 0; i = i - 1) {
            var currentNode = this.treeControl.dataNodes[i];
            if (currentNode.level < currentLevel) {
              return currentNode;
            }
          }
          return null;
        }
      }, {
        key: "delete",
        value: function _delete(node) {
          var _this13 = this;
          var dialogRef = this.dialog.open(_ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogComponent"], {
            width: '500px',
            height: '175px',
            data: 'deleteTreeNode'
          });
          this.preserveExpandedNodes();
          dialogRef.afterClosed().subscribe(function (confirm) {
            if (confirm) {
              _this13.parentHierarchy = [];
              var currNode = node;
              while (currNode) {
                if (currNode && currNode.parentId) {
                  _this13.parentHierarchy.push(currNode.parentId);
                }
                currNode = _this13.getParentNode(currNode);
              }
              _this13.store.deleteNode(node.id);
              _this13.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"], {
                data: {
                  type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SUCCESS
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000
              });
            }
          });
        }
      }, {
        key: "addChildOrSibling",
        value: function addChildOrSibling(node) {
          var asSibling = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var _this14 = this;
            var children, dialogRef;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  children = (node.children || []).map(function (v) {
                    return _this14.store.uniqueIdMap.get(v);
                  });
                  dialogRef = this.dialog.open(_shared_components_auth_picker_auth_picker_component__WEBPACK_IMPORTED_MODULE_12__["AuthPickerComponent"], {
                    width: '90vw',
                    height: '90vh',
                    data: {
                      filter: this.authInitService.collectionConfig.childrenConfig[node.category].searchFilter,
                      selectedIds: children
                    }
                  });
                  this.preserveExpandedNodes();
                  dialogRef.afterClosed().subscribe(function (contents) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this14, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                      var parentNode, isDone;
                      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                        while (1) switch (_context4.prev = _context4.next) {
                          case 0:
                            if (!(contents && contents.length)) {
                              _context4.next = 9;
                              break;
                            }
                            parentNode = asSibling ? this.getParentNode(node) : node;
                            this.expandedNodes.add(parentNode.id);
                            this.loaderService.changeLoad.next(true);
                            _context4.next = 6;
                            return this.store.addChildOrSibling(contents, parentNode, asSibling ? node.id : undefined, 'below');
                          case 6:
                            isDone = _context4.sent;
                            this.loaderService.changeLoad.next(false);
                            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"], {
                              data: {
                                type: isDone ? _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SUCCESS : _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].FAIL
                              },
                              duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000
                            });
                          case 9:
                          case "end":
                            return _context4.stop();
                        }
                      }, _callee4, this);
                    }));
                  });
                case 4:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "createNewChildOrSibling",
        value: function createNewChildOrSibling(type, node) {
          var asSibling = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var parentNode, isDone;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  parentNode = asSibling ? this.getParentNode(node) : node;
                  this.loaderService.changeLoad.next(true);
                  this.preserveExpandedNodes();
                  this.expandedNodes.add(parentNode.id);
                  _context6.next = 6;
                  return this.store.createChildOrSibling(type, parentNode, asSibling ? node.id : undefined, 'below', {}, type === 'web' ? 'link' : '');
                case 6:
                  isDone = _context6.sent;
                  this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"], {
                    data: {
                      type: isDone ? _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SUCCESS : _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].FAIL
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000
                  });
                  this.loaderService.changeLoad.next(false);
                case 9:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "takeAction",
        value: function takeAction(action, node, type) {
          switch (action) {
            case 'editMeta':
            case 'editContent':
            case 'preview':
              this.onNodeSelect(node);
              this.action.emit({
                type: action,
                identifier: node.identifier
              });
              break;
            case 'delete':
              this["delete"](node);
              break;
            case 'addChild':
              this.addChildOrSibling(node);
              break;
            case 'addSibling':
              this.addChildOrSibling(node, true);
              break;
            case 'createChild':
              this.createNewChildOrSibling(type, node);
              break;
            case 'createSibling':
              this.createNewChildOrSibling(type, node, true);
              break;
            default:
              break;
          }
        }
      }, {
        key: "addChapter",
        value: function addChapter() {
          // tslint:disable-next-line:max-line-length
          // this.allowedChild = [{"children":[],"id":"upload","name":"Upload Content","icon":"cloud_upload"},{"children":[],"id":"assessment","name":"Assessment","icon":"check_circle"},{"children":[],"id":"web","name":"Attach a Link","icon":"link"}]
          // this.action.emit({ type: 'showAddChapter', identifier: '' })
        }
      }]);
      return AuthTocComponent;
    }();
    AuthTocComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }, {
        type: _services_store_service__WEBPACK_IMPORTED_MODULE_13__["CollectionStoreService"]
      }, {
        type: _services_editor_content_service__WEBPACK_IMPORTED_MODULE_11__["EditorContentService"]
      }, {
        type: _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"]
      }, {
        type: _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_9__["AuthInitService"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["BreakpointObserver"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], AuthTocComponent.prototype, "createdFromCourse", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], AuthTocComponent.prototype, "action", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], AuthTocComponent.prototype, "closeEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], AuthTocComponent.prototype, "node", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], AuthTocComponent.prototype, "data", void 0);
    AuthTocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      // tslint:disable-next-line:component-selector
      selector: 'ws-author-auth-toc',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./auth-toc.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-toc/auth-toc.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./auth-toc.component.scss */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-toc/auth-toc.component.scss"))["default"]]
    })], AuthTocComponent);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/collection/collection.component.scss":
  /*!*************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/collection/collection.component.scss ***!
    \*************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsCollectionCollectionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".mat-sidenav-container {\n  min-height: 650px;\n  overflow: unset;\n}\n\n.mat-sidenav {\n  overflow: unset;\n}\n\n.mat-drawer-content {\n  padding-left: 3px;\n}\n\n.sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 50px;\n}\n\n.close-preview {\n  position: fixed;\n  top: 15px;\n  left: 15px;\n  z-index: 1;\n  font-size: 30px;\n  cursor: pointer;\n  z-index: 1001;\n}\n\n.hidden {\n  display: none;\n}\n\n.transitionD {\n  transition: all 0.5s;\n}\n\n.ui {\n  border: 1px solid #1a1919;\n  border-top-left-radius: 0px;\n  border-left-color: white;\n  border-bottom-left-radius: 0px;\n  border-top-right-radius: 50%;\n  border-bottom-right-radius: 50%;\n  box-shadow: 0.1px 2px 8px grey;\n  width: 42px;\n}\n\n.toHide {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7QUNGRjs7QURLQTtFQUNFLGlCQUFBO0FDRkY7O0FES0E7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsU0FBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtBQ0ZGOztBRElBO0VBQ0Usb0JBQUE7QUNERjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7QUNBRiIsImZpbGUiOiJwcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5AaW1wb3J0ICdzdHlsZXMvX3dzLW1peGlucy5zY3NzJztcblxuLm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDY1MHB4O1xuICBvdmVyZmxvdzogdW5zZXQ7XG59XG5cbi5tYXQtc2lkZW5hdiB7XG4gIG92ZXJmbG93OiB1bnNldDtcbn1cblxuLm1hdC1kcmF3ZXItY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xufVxuXG4uc3RpY2t5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiA1MHB4O1xufVxuXG4uY2xvc2UtcHJldmlldyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTAwMTtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udHJhbnNpdGlvbkQge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi51aSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNiwgMjUsIDI1KTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItbGVmdC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMC4xcHggMnB4IDhweCBncmV5O1xuICB3aWR0aDogNDJweDtcbn1cblxuLnRvSGlkZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbiIsIi5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiA2NTBweDtcbiAgb3ZlcmZsb3c6IHVuc2V0O1xufVxuXG4ubWF0LXNpZGVuYXYge1xuICBvdmVyZmxvdzogdW5zZXQ7XG59XG5cbi5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbn1cblxuLnN0aWNreSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogNTBweDtcbn1cblxuLmNsb3NlLXByZXZpZXcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMTVweDtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwMDE7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udHJhbnNpdGlvbkQge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLnVpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFhMTkxOTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItbGVmdC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMC4xcHggMnB4IDhweCBncmV5O1xuICB3aWR0aDogNDJweDtcbn1cblxuLnRvSGlkZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn0iXX0= */";

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/collection/collection.component.ts":
  /*!***********************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/collection/collection.component.ts ***!
    \***********************************************************************************************************************************/
  /*! exports provided: CollectionComponent */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsCollectionCollectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CollectionComponent", function () {
      return CollectionComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/delete-dialog/delete-dialog.component */"./project/ws/author/src/lib/modules/shared/components/delete-dialog/delete-dialog.component.ts");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ws/author/src/lib/constants/constant */"./project/ws/author/src/lib/constants/constant.ts");
    /* harmony import */
    var _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @ws/author/src/lib/constants/notificationMessage */"./project/ws/author/src/lib/constants/notificationMessage.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_comments_dialog_comments_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/comments-dialog/comments-dialog.component */"./project/ws/author/src/lib/modules/shared/components/comments-dialog/comments-dialog.component.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component */"./project/ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/error-parser/error-parser.component */"./project/ws/author/src/lib/modules/shared/components/error-parser/error-parser.component.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/notification/notification.component */"./project/ws/author/src/lib/modules/shared/components/notification/notification.component.ts");
    /* harmony import */
    var _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! @ws/author/src/lib/routing/modules/editor/services/editor-content.service */"./project/ws/author/src/lib/routing/modules/editor/services/editor-content.service.ts");
    /* harmony import */
    var _ws_author_src_lib_routing_modules_editor_services_editor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @ws/author/src/lib/routing/modules/editor/services/editor.service */"./project/ws/author/src/lib/routing/modules/editor/services/editor.service.ts");
    /* harmony import */
    var _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @ws/author/src/lib/services/init.service */"./project/ws/author/src/lib/services/init.service.ts");
    /* harmony import */
    var _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! @ws/author/src/lib/services/loader.service */"./project/ws/author/src/lib/services/loader.service.ts");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _services_resolver_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! ./../../services/resolver.service */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/resolver.service.ts");
    /* harmony import */
    var _services_store_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ./../../services/store.service */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/store.service.ts");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    /* harmony import */
    var _ws_author_src_lib_services_notification_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! @ws/author/src/lib/services/notification.service */"./project/ws/author/src/lib/services/notification.service.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/services/access-control.service */"./project/ws/author/src/lib/modules/shared/services/access-control.service.ts");
    /* harmony import */
    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! @angular/cdk/layout */"./node_modules/@angular/cdk/esm2015/layout.js");

    /**
     * @description
     * Parent component for the Collection editor. All the child component are loaded here. It decides the flow and the logic and
     * controls the api calls that are made for save and send for review and other
     *
     * @export
     * @class CollectionComponent
     * @implements {OnInit}
     */
    var CollectionComponent = /*#__PURE__*/function () {
      function CollectionComponent(contentService, activateRoute, storeService, resolverService, initService, loaderService, dialog, snackBar, editorService, router, notificationSvc, accessControlSvc, breakpointObserver) {
        _classCallCheck(this, CollectionComponent);
        this.contentService = contentService;
        this.activateRoute = activateRoute;
        this.storeService = storeService;
        this.resolverService = resolverService;
        this.initService = initService;
        this.loaderService = loaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.editorService = editorService;
        this.router = router;
        this.notificationSvc = notificationSvc;
        this.accessControlSvc = accessControlSvc;
        this.breakpointObserver = breakpointObserver;
        this.contents = [];
        this.stepper = [{
          title: 'Choose Type',
          disabled: true
        }, {
          title: 'Content',
          disabled: false
        }, {
          title: 'Details',
          disabled: false
        }];
        this.isSubmitPressed = false;
        this.showLanguageBar = false;
        this.actionButton = null;
        this.currentStep = 1;
        this.activeContentSubscription = null;
        this.routerSubscription = null;
        this.isChanged = false;
        this.previewIdentifier = null;
        this.viewMode = 'meta';
        this.mimeTypeRoute = '';
        this.mediumScreen = false;
        this.sideBarOpened = false;
        this.mediumSizeBreakpoint$ = this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__["Breakpoints"].Small]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["map"])(function (res) {
          return res.matches;
        }));
        this.mode$ = this.mediumSizeBreakpoint$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["map"])(function (isMedium) {
          return isMedium ? 'over' : 'side';
        }));
        this.leftArrow = true;
        this.fullScreenToggle = function () {
          var doc = document;
          var elm = doc.getElementById('auth-toc');
          if (elm.requestFullscreen) {
            !doc.fullscreenElement ? elm.requestFullscreen() : doc.exitFullscreen();
          } else if (elm.mozRequestFullScreen) {
            !doc.mozFullScreen ? elm.mozRequestFullScreen() : doc.mozCancelFullScreen();
          } else if (elm.msRequestFullscreen) {
            !doc.msFullscreenElement ? elm.msRequestFullscreen() : doc.msExitFullscreen();
          } else if (elm.webkitRequestFullscreen) {
            !doc.webkitIsFullscreen ? elm.webkitRequestFullscreen() : doc.webkitCancelFullscreen();
          }
        };
      }
      _createClass(CollectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;
          this.contentService.changeActiveCont.subscribe(function (data) {
            _this15.currentContent = data;
            if (_this15.contentService.getUpdatedMeta(data).contentType !== 'Resource') {
              _this15.viewMode = 'meta';
            }
          });
          if (this.activateRoute.parent && this.activateRoute.parent.parent) {
            this.routerSubscription = this.activateRoute.parent.parent.data.subscribe(function (data) {
              var contentDataMap = new Map();
              data.contents.map(function (v) {
                _this15.storeService.parentNode.push(v.content.identifier);
                _this15.resolverService.buildTreeAndMap(v.content, contentDataMap, _this15.storeService.flatNodeMap, _this15.storeService.uniqueIdMap, _this15.storeService.lexIdMap);
              });
              contentDataMap.forEach(function (content) {
                return _this15.contentService.setOriginalMeta(content);
              });
              var currentNode = _this15.storeService.lexIdMap.get(_this15.currentContent)[0];
              _this15.currentParentId = _this15.currentContent;
              _this15.storeService.treeStructureChange.next(_this15.storeService.flatNodeMap.get(currentNode));
              _this15.storeService.currentParentNode = currentNode;
              _this15.storeService.currentSelectedNode = currentNode;
              _this15.storeService.selectedNodeChange.next(currentNode);
            });
          }
          this.stepper = this.initService.collectionConfig.stepper;
          this.showLanguageBar = this.initService.collectionConfig.languageBar;
          var actionButton = [];
          this.initService.collectionConfig.actionButtons.buttons.forEach(function (action) {
            if (_this15.contentService.checkConditionV2(_this15.contentService.getOriginalMeta(_this15.currentParentId), action.conditions)) {
              actionButton.push({
                title: action.title,
                icon: action.icon,
                event: action.event,
                conditions: action.conditions
              });
            }
          });
          this.actionButton = {
            enabled: this.initService.collectionConfig.actionButtons.enabled,
            buttons: actionButton
          };
          this.mediumSizeBreakpoint$.subscribe(function (isLtMedium) {
            _this15.mediumScreen = isLtMedium;
            _this15.sideBarOpened = !isLtMedium;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.loaderService.changeLoad.next(false);
        }
      }, {
        key: "sidenavClose",
        value: function sidenavClose() {
          var _this16 = this;
          setTimeout(function () {
            return _this16.leftArrow = true;
          }, 500);
        }
      }, {
        key: "save",
        value: function save(nextAction) {
          var _this17 = this;
          var updatedContent = this.contentService.upDatedContent || {};
          if (Object.keys(updatedContent).length || Object.keys(this.storeService.changedHierarchy).length) {
            this.isChanged = true;
            this.loaderService.changeLoad.next(true);
            this.triggerSave().subscribe(function () {
              if (nextAction) {
                _this17.action(nextAction);
              }
              _this17.loaderService.changeLoad.next(false);
              _this17.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["NotificationComponent"], {
                data: {
                  type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SAVE_SUCCESS
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000
              });
            }, function (error) {
              if (error.status === 409) {
                var errorMap = new Map();
                Object.keys(_this17.contentService.originalContent).forEach(function (v) {
                  return errorMap.set(v, _this17.contentService.originalContent[v]);
                });
                var dialog = _this17.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_9__["ErrorParserComponent"], {
                  width: '80vw',
                  height: '90vh',
                  data: {
                    errorFromBackendData: error.error,
                    dataMapping: errorMap
                  }
                });
                dialog.afterClosed().subscribe(function (v) {
                  if (v) {
                    if (typeof v === 'string') {
                      _this17.storeService.selectedNodeChange.next(_this17.storeService.lexIdMap.get(v)[0]);
                      _this17.contentService.changeActiveCont.next(v);
                    } else {
                      _this17.storeService.selectedNodeChange.next(v);
                      _this17.contentService.changeActiveCont.next(_this17.storeService.uniqueIdMap.get(v));
                    }
                  }
                });
              }
              _this17.loaderService.changeLoad.next(false);
              _this17.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["NotificationComponent"], {
                data: {
                  type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SAVE_FAIL
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000
              });
            });
          } else {
            if (nextAction) {
              this.action(nextAction);
            } else {
              this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["NotificationComponent"], {
                data: {
                  type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].UP_TO_DATE
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000
              });
            }
          }
        }
      }, {
        key: "validationCheck",
        get: function get() {
          var _this18 = this;
          var currentNodeId = this.storeService.lexIdMap.get(this.currentParentId);
          var returnValue = this.storeService.validationCheck(currentNodeId[0]);
          if (returnValue) {
            var dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_9__["ErrorParserComponent"], {
              width: '80vw',
              height: '90vh',
              data: {
                processErrorData: returnValue
              }
            });
            dialog.afterClosed().subscribe(function (v) {
              if (v) {
                if (typeof v === 'string') {
                  _this18.storeService.selectedNodeChange.next(_this18.storeService.lexIdMap.get(v)[0]);
                  _this18.contentService.changeActiveCont.next(v);
                } else {
                  _this18.storeService.selectedNodeChange.next(v);
                  _this18.contentService.changeActiveCont.next(_this18.storeService.uniqueIdMap.get(v));
                }
              }
            });
            return false;
          }
          return true;
        }
      }, {
        key: "takeAction",
        value: function takeAction() {
          var _this19 = this;
          this.isSubmitPressed = true;
          var needSave = Object.keys(this.contentService.upDatedContent || {}).length;
          if (!needSave && !this.isChanged) {
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["NotificationComponent"], {
              data: {
                type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].UP_TO_DATE
              },
              duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000
            });
            return;
          }
          if (this.validationCheck) {
            var dialogRef = this.dialog.open(_ws_author_src_lib_modules_shared_components_comments_dialog_comments_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CommentsDialogComponent"], {
              width: '750px',
              height: '450px',
              data: this.contentService.getOriginalMeta(this.currentParentId)
            });
            dialogRef.afterClosed().subscribe(function (commentsForm) {
              _this19.finalCall(commentsForm);
            });
          }
        }
      }, {
        key: "finalCall",
        value: function finalCall(commentsForm) {
          var _this20 = this;
          if (commentsForm) {
            var body = {
              comment: commentsForm.controls.comments.value,
              operation: commentsForm.controls.action.value === 'accept' || ['Draft', 'Live'].includes(this.contentService.originalContent[this.currentParentId].status) ? 1 : 0
            };
            var updatedMeta = this.contentService.getUpdatedMeta(this.currentParentId);
            var needSave = Object.keys(this.contentService.upDatedContent || {}).length || Object.keys(this.storeService.changedHierarchy).length;
            var saveCall = (needSave ? this.triggerSave() : Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])({})).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["mergeMap"])(function () {
              return _this20.editorService.forwardBackward(body, _this20.currentParentId, _this20.contentService.originalContent[_this20.currentParentId].status).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["mergeMap"])(function () {
                return _this20.notificationSvc.triggerPushPullNotification(updatedMeta, body.comment, body.operation ? true : false).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["catchError"])(function () {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])({});
                }));
              }));
            }));
            this.loaderService.changeLoad.next(true);
            saveCall.subscribe(function () {
              _this20.loaderService.changeLoad.next(false);
              _this20.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["NotificationComponent"], {
                data: {
                  type: _this20.getMessage('success')
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000
              });
              _this20.contents = _this20.contents.filter(function (v) {
                return v.identifier !== _this20.currentParentId;
              });
              if (_this20.contents.length) {
                _this20.contentService.changeActiveCont.next(_this20.contents[0].identifier);
              } else {
                _this20.router.navigateByUrl('/author/home');
              }
            }, function (error) {
              if (error.status === 409) {
                var errorMap = new Map();
                Object.keys(_this20.contentService.originalContent).forEach(function (v) {
                  return errorMap.set(v, _this20.contentService.originalContent[v]);
                });
                var dialog = _this20.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_9__["ErrorParserComponent"], {
                  width: '80vw',
                  height: '90vh',
                  data: {
                    errorFromBackendData: error.error,
                    dataMapping: errorMap
                  }
                });
                dialog.afterClosed().subscribe(function (v) {
                  if (v) {
                    if (typeof v === 'string') {
                      _this20.storeService.selectedNodeChange.next(_this20.storeService.lexIdMap.get(v)[0]);
                      _this20.contentService.changeActiveCont.next(v);
                    } else {
                      _this20.storeService.selectedNodeChange.next(v);
                      _this20.contentService.changeActiveCont.next(_this20.storeService.uniqueIdMap.get(v));
                    }
                  }
                });
              }
              _this20.loaderService.changeLoad.next(false);
              _this20.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["NotificationComponent"], {
                data: {
                  type: _this20.getMessage('failure')
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000
              });
            });
          }
        }
      }, {
        key: "preview",
        value: function preview(id) {
          var _this21 = this;
          var updatedContent = this.contentService.upDatedContent || {};
          var saveCall = Object.keys(updatedContent).length || Object.keys(this.storeService.changedHierarchy).length ? this.triggerSave() : Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])({});
          this.loaderService.changeLoad.next(true);
          saveCall.subscribe(function () {
            _this21.mimeTypeRoute = Object(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_19__["VIEWER_ROUTE_FROM_MIME"])(_this21.contentService.getUpdatedMeta(id).mimeType);
            _this21.loaderService.changeLoad.next(false);
            _this21.previewIdentifier = id;
          }, function (error) {
            if (error.status === 409) {
              var errorMap = new Map();
              Object.keys(_this21.contentService.originalContent).forEach(function (v) {
                return errorMap.set(v, _this21.contentService.originalContent[v]);
              });
              var dialog = _this21.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_9__["ErrorParserComponent"], {
                width: '750px',
                height: '450px',
                data: {
                  errorFromBackendData: error.error,
                  dataMapping: errorMap
                }
              });
              dialog.afterClosed().subscribe(function (v) {
                if (v) {
                  if (typeof v === 'string') {
                    _this21.storeService.selectedNodeChange.next(_this21.storeService.lexIdMap.get(v)[0]);
                    _this21.contentService.changeActiveCont.next(v);
                  } else {
                    _this21.storeService.selectedNodeChange.next(v);
                    _this21.contentService.changeActiveCont.next(_this21.storeService.uniqueIdMap.get(v));
                  }
                }
              });
            }
            _this21.loaderService.changeLoad.next(false);
            _this21.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["NotificationComponent"], {
              data: {
                type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SAVE_FAIL
              },
              duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000
            });
          });
        }
      }, {
        key: "closePreview",
        value: function closePreview() {
          this.previewIdentifier = null;
        }
      }, {
        key: "triggerSave",
        value: function triggerSave() {
          var _this22 = this;
          var nodesModified = {};
          var isRootPresent = false;
          Object.keys(this.contentService.upDatedContent).forEach(function (v) {
            if (!isRootPresent) {
              isRootPresent = _this22.storeService.parentNode.includes(v);
            }
            nodesModified[v] = {
              isNew: false,
              root: _this22.storeService.parentNode.includes(v),
              metadata: _this22.contentService.upDatedContent[v]
            };
          });
          if (!isRootPresent) {
            nodesModified[this.currentParentId] = {
              isNew: false,
              root: true,
              metadata: {}
            };
          }
          var requestBody = {
            nodesModified: nodesModified,
            hierarchy: this.storeService.changedHierarchy
          };
          return this.editorService.updateContentV2(requestBody).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["tap"])(function () {
            _this22.storeService.changedHierarchy = {};
            Object.keys(_this22.contentService.upDatedContent).forEach(function (id) {
              _this22.contentService.resetOriginalMeta(_this22.contentService.upDatedContent[id], id);
            });
            _this22.contentService.upDatedContent = {};
          }));
        }
      }, {
        key: "getMessage",
        value: function getMessage(type) {
          if (type === 'success') {
            switch (this.contentService.originalContent[this.currentParentId].status) {
              case 'Draft':
              case 'Live':
                return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SEND_FOR_REVIEW_SUCCESS;
              case 'InReview':
                return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].REVIEW_SUCCESS;
              case 'Reviewed':
                return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].PUBLISH_SUCCESS;
              default:
                return '';
            }
          }
          switch (this.contentService.originalContent[this.currentParentId].status) {
            case 'Draft':
            case 'Live':
              return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SEND_FOR_REVIEW_FAIL;
            case 'InReview':
              return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].REVIEW_FAIL;
            case 'Reviewed':
              return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].PUBLISH_FAIL;
            default:
              return '';
          }
        }
      }, {
        key: "subAction",
        value: function subAction(event) {
          this.contentService.changeActiveCont.next(event.identifier);
          switch (event.type) {
            case 'editMeta':
              this.viewMode = 'meta';
              break;
            case 'editContent':
              var content = this.contentService.getUpdatedMeta(event.identifier);
              if (['application/pdf', 'application/x-mpegURL'].includes(content.mimeType)) {
                this.viewMode = 'upload';
              } else if (content.mimeType === 'application/html' && !content.isExternal) {
                this.viewMode = 'upload';
              } else if (content.mimeType === 'application/html') {
                this.viewMode = 'curate';
              }
              break;
            case 'preview':
              this.preview(event.identifier);
              break;
          }
        }
      }, {
        key: "action",
        value: function action(type) {
          var _this23 = this;
          switch (type) {
            case 'next':
              this.viewMode = 'meta';
              break;
            case 'save':
              this.save();
              break;
            case 'saveAndNext':
              this.save('next');
              break;
            case 'preview':
              this.preview(this.currentContent);
              break;
            case 'push':
              if (this.getAction() === 'publish') {
                var dialogRefForPublish = this.dialog.open(_ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialogComponent"], {
                  width: '70%',
                  data: 'publishMessage'
                });
                dialogRefForPublish.afterClosed().subscribe(function (result) {
                  if (result) {
                    _this23.takeAction();
                  }
                });
              } else {
                this.takeAction();
              }
              break;
            case 'delete':
              var dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DeleteDialogComponent"], {
                width: '600px',
                height: 'auto',
                data: this.contentService.getUpdatedMeta(this.currentParentId)
              });
              dialog.afterClosed().subscribe(function (confirm) {
                if (confirm) {
                  _this23.contents = _this23.contents.filter(function (v) {
                    return v.identifier !== _this23.currentParentId;
                  });
                  if (_this23.contents.length) {
                    _this23.contentService.changeActiveCont.next(_this23.contents[0].identifier);
                  } else {
                    _this23.router.navigateByUrl('/author/home');
                  }
                }
              });
              break;
            case 'fullscreen':
              this.fullScreenToggle();
              break;
            case 'close':
              this.router.navigateByUrl('/author/home');
              break;
          }
        }
      }, {
        key: "delete",
        value: function _delete() {
          var _this24 = this;
          this.loaderService.changeLoad.next(true);
          this.editorService.deleteContent(this.currentParentId).subscribe(function () {
            _this24.loaderService.changeLoad.next(false);
            _this24.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["NotificationComponent"], {
              data: {
                type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SUCCESS
              },
              duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000
            });
            _this24.contents = _this24.contents.filter(function (v) {
              return v.identifier !== _this24.currentParentId;
            });
            if (_this24.contents.length) {
              _this24.contentService.changeActiveCont.next(_this24.contents[0].identifier);
            } else {
              _this24.router.navigateByUrl('/author/home');
            }
          }, function (error) {
            if (error.status === 409) {
              var errorMap = new Map();
              Object.keys(_this24.contentService.originalContent).forEach(function (v) {
                return errorMap.set(v, _this24.contentService.originalContent[v]);
              });
              var dialog = _this24.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_9__["ErrorParserComponent"], {
                width: '750px',
                height: '450px',
                data: {
                  errorFromBackendData: error.error,
                  dataMapping: errorMap
                }
              });
              dialog.afterClosed().subscribe(function (v) {
                if (v) {
                  if (typeof v === 'string') {
                    _this24.storeService.selectedNodeChange.next(_this24.storeService.lexIdMap.get(v)[0]);
                    _this24.contentService.changeActiveCont.next(v);
                  } else {
                    _this24.storeService.selectedNodeChange.next(v);
                    _this24.contentService.changeActiveCont.next(_this24.storeService.uniqueIdMap.get(v));
                  }
                }
              });
            }
            _this24.loaderService.changeLoad.next(false);
            _this24.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["NotificationComponent"], {
              data: {
                type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].CONTENT_FAIL
              },
              duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000
            });
          });
        }
      }, {
        key: "getAction",
        value: function getAction() {
          switch (this.contentService.originalContent[this.currentParentId].status) {
            case 'Draft':
            case 'Live':
              return 'sendForReview';
            case 'InReview':
              return 'review';
            case 'Reviewed':
              return 'publish';
            default:
              return 'sendForReview';
          }
        }
      }, {
        key: "canDelete",
        value: function canDelete() {
          var _this25 = this;
          return this.accessControlSvc.hasRole(['editor', 'admin']) || ['Draft', 'Live'].includes(this.contentService.originalContent[this.currentParentId].status) && this.contentService.originalContent[this.currentParentId].creatorContacts.find(function (v) {
            return v.id === _this25.accessControlSvc.userId;
          });
        }
      }]);
      return CollectionComponent;
    }();
    CollectionComponent.ctorParameters = function () {
      return [{
        type: _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_11__["EditorContentService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _services_store_service__WEBPACK_IMPORTED_MODULE_18__["CollectionStoreService"]
      }, {
        type: _services_resolver_service__WEBPACK_IMPORTED_MODULE_17__["CollectionResolverService"]
      }, {
        type: _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_13__["AuthInitService"]
      }, {
        type: _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_14__["LoaderService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }, {
        type: _ws_author_src_lib_routing_modules_editor_services_editor_service__WEBPACK_IMPORTED_MODULE_12__["EditorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ws_author_src_lib_services_notification_service__WEBPACK_IMPORTED_MODULE_20__["NotificationService"]
      }, {
        type: _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_21__["AccessControlService"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__["BreakpointObserver"]
      }];
    };
    CollectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'ws-auth-collection',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./collection.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/collection/collection.component.html"))["default"],
      providers: [_services_store_service__WEBPACK_IMPORTED_MODULE_18__["CollectionStoreService"], _services_resolver_service__WEBPACK_IMPORTED_MODULE_17__["CollectionResolverService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./collection.component.scss */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/collection/collection.component.scss"))["default"]]
    })], CollectionComponent);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-collection/course-collection.component.scss":
  /*!***************************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-collection/course-collection.component.scss ***!
    \***************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsCourseCollectionCourseCollectionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".example-container {\n  height: 100vh;\n}\n\n::ng-deep #auth-toc .mat-drawer-inner-container {\n  min-width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9jb3Vyc2UtY29sbGVjdGlvbi9jb3Vyc2UtY29sbGVjdGlvbi5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXV0aG9yL3NyYy9saWIvcm91dGluZy9tb2R1bGVzL2VkaXRvci9yb3V0aW5nL21vZHVsZXMvY29sbGVjdGlvbi9jb21wb25lbnRzL2NvdXJzZS1jb2xsZWN0aW9uL2NvdXJzZS1jb2xsZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRHFCSTtFQUNFLGdCQUFBO0FDbEJOIiwiZmlsZSI6InByb2plY3Qvd3MvYXV0aG9yL3NyYy9saWIvcm91dGluZy9tb2R1bGVzL2VkaXRvci9yb3V0aW5nL21vZHVsZXMvY29sbGVjdGlvbi9jb21wb25lbnRzL2NvdXJzZS1jb2xsZWN0aW9uL2NvdXJzZS1jb2xsZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4vLyAub3V0ZXItZmxleCB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbi8vIH1cbi8vIC5jb250ZW50LWJveCB7XG4vLyAgICAgd2lkdGg6IDczJTtcbi8vIH1cbi8vIC5zaWRlYmFyIHtcbi8vICAgICB3aWR0aDogMjMlO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB0b3A6IC0zN3B4O1xuLy8gICAgIGJvdHRvbTogMDtcbi8vICAgICByaWdodDogMDtcbi8vICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4vLyAgICAgYmFja2dyb3VuZDogI2ZmZjtcbi8vICAgICBwYWRkaW5nLXRvcDogM2VtO1xuLy8gfVxuXG46Om5nLWRlZXAgI2F1dGgtdG9jIHtcbiAgICAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXIge1xuICAgICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICB9XG4gIH1cbiIsIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbjo6bmctZGVlcCAjYXV0aC10b2MgLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyIHtcbiAgbWluLXdpZHRoOiAyNTBweDtcbn0iXX0= */";

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-collection/course-collection.component.ts":
  /*!*************************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-collection/course-collection.component.ts ***!
    \*************************************************************************************************************************************************/
  /*! exports provided: CourseCollectionComponent */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsCourseCollectionCourseCollectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CourseCollectionComponent", function () {
      return CourseCollectionComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/delete-dialog/delete-dialog.component */"./project/ws/author/src/lib/modules/shared/components/delete-dialog/delete-dialog.component.ts");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @ws/author/src/lib/constants/constant */"./project/ws/author/src/lib/constants/constant.ts");
    /* harmony import */
    var _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @ws/author/src/lib/constants/notificationMessage */"./project/ws/author/src/lib/constants/notificationMessage.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_comments_dialog_comments_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/comments-dialog/comments-dialog.component */"./project/ws/author/src/lib/modules/shared/components/comments-dialog/comments-dialog.component.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component */"./project/ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/error-parser/error-parser.component */"./project/ws/author/src/lib/modules/shared/components/error-parser/error-parser.component.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/notification/notification.component */"./project/ws/author/src/lib/modules/shared/components/notification/notification.component.ts");
    /* harmony import */
    var _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @ws/author/src/lib/routing/modules/editor/services/editor-content.service */"./project/ws/author/src/lib/routing/modules/editor/services/editor-content.service.ts");
    /* harmony import */
    var _ws_author_src_lib_routing_modules_editor_services_editor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @ws/author/src/lib/routing/modules/editor/services/editor.service */"./project/ws/author/src/lib/routing/modules/editor/services/editor.service.ts");
    /* harmony import */
    var _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! @ws/author/src/lib/services/init.service */"./project/ws/author/src/lib/services/init.service.ts");
    /* harmony import */
    var _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! @ws/author/src/lib/services/loader.service */"./project/ws/author/src/lib/services/loader.service.ts");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _services_resolver_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ./../../services/resolver.service */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/resolver.service.ts");
    /* harmony import */
    var _services_store_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! ./../../services/store.service */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/store.service.ts");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    /* harmony import */
    var _ws_author_src_lib_services_notification_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! @ws/author/src/lib/services/notification.service */"./project/ws/author/src/lib/services/notification.service.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/services/access-control.service */"./project/ws/author/src/lib/modules/shared/services/access-control.service.ts");
    /* harmony import */
    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__( /*! @angular/cdk/layout */"./node_modules/@angular/cdk/esm2015/layout.js");
    var CourseCollectionComponent = /*#__PURE__*/function () {
      function CourseCollectionComponent(contentService, activateRoute, storeService, resolverService, initService, loaderService, dialog, snackBar, editorService, router, notificationSvc, accessControlSvc, breakpointObserver, fb) {
        _classCallCheck(this, CourseCollectionComponent);
        this.contentService = contentService;
        this.activateRoute = activateRoute;
        this.storeService = storeService;
        this.resolverService = resolverService;
        this.initService = initService;
        this.loaderService = loaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.editorService = editorService;
        this.router = router;
        this.notificationSvc = notificationSvc;
        this.accessControlSvc = accessControlSvc;
        this.breakpointObserver = breakpointObserver;
        this.fb = fb;
        this.contents = [];
        this.couseCreated = '';
        this.stepper = [{
          title: 'Choose Type',
          disabled: true
        }, {
          title: 'Content',
          disabled: false
        }, {
          title: 'Details',
          disabled: false
        }];
        this.isSubmitPressed = false;
        this.showLanguageBar = false;
        this.actionButton = null;
        this.currentStep = 1;
        this.activeContentSubscription = null;
        this.routerSubscription = null;
        this.isChanged = false;
        this.previewIdentifier = null;
        this.viewMode = 'meta';
        this.mimeTypeRoute = '';
        this.mediumScreen = false;
        this.sideBarOpened = false;
        this.mediumSizeBreakpoint$ = this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_23__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_23__["Breakpoints"].Small]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["map"])(function (res) {
          return res.matches;
        }));
        this.mode$ = this.mediumSizeBreakpoint$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["map"])(function (isMedium) {
          return isMedium ? 'over' : 'side';
        }));
        this.leftArrow = true;
        this.showAddchapter = false;
        this.reloadTOC = false;
        this.sideNavBarOpened = false;
        this.expandedNodes = new Set();
        this.triggerQuizSave = false;
        this.triggerUploadSave = false;
        this.fullScreenToggle = function () {
          var doc = document;
          var elm = doc.getElementById('auth-toc');
          if (elm.requestFullscreen) {
            !doc.fullscreenElement ? elm.requestFullscreen() : doc.exitFullscreen();
          } else if (elm.mozRequestFullScreen) {
            !doc.mozFullScreen ? elm.mozRequestFullScreen() : doc.mozCancelFullScreen();
          } else if (elm.msRequestFullscreen) {
            !doc.msFullscreenElement ? elm.msRequestFullscreen() : doc.msExitFullscreen();
          } else if (elm.webkitRequestFullscreen) {
            !doc.webkitIsFullscreen ? elm.webkitRequestFullscreen() : doc.webkitCancelFullscreen();
          }
        };
        // this.callSaveFn = this.headerService.isSavePressed
        // this.rootSvc.showNavbarDisplay$.next(false)
        // this.headerService.headerSaveData.subscribe(data => {
        //   if (data) {
        //     this.save()
        //   }
        // })
      }
      _createClass(CourseCollectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;
          this.routerValuesCall();
          this.parentNodeId = this.storeService.currentParentNode;
          // this.expandNodesById([this.parentNodeId])
          this.createTopicForm = this.fb.group({
            topicName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            topicDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
          });
          this.stepper = this.initService.collectionConfig.stepper;
          this.showLanguageBar = this.initService.collectionConfig.languageBar;
          var actionButton = [];
          this.initService.collectionConfig.actionButtons.buttons.forEach(function (action) {
            if (_this26.contentService.checkConditionV2(_this26.contentService.getOriginalMeta(_this26.currentParentId), action.conditions)) {
              actionButton.push({
                title: action.title,
                icon: action.icon,
                event: action.event,
                conditions: action.conditions
              });
            }
          });
          this.actionButton = {
            enabled: this.initService.collectionConfig.actionButtons.enabled,
            buttons: actionButton
          };
          this.mediumSizeBreakpoint$.subscribe(function (isLtMedium) {
            _this26.mediumScreen = isLtMedium;
            _this26.sideBarOpened = !isLtMedium;
          });
        }
      }, {
        key: "routerValuesCall",
        value: function routerValuesCall() {
          var _this27 = this;
          this.contentService.changeActiveCont.subscribe(function (data) {
            _this27.currentContent = data;
            if (_this27.contentService.getUpdatedMeta(data).contentType !== 'Resource') {
              _this27.viewMode = 'meta';
            }
          });
          if (this.activateRoute.parent && this.activateRoute.parent.parent) {
            this.routerSubscription = this.activateRoute.parent.parent.data.subscribe(function (data) {
              _this27.courseName = data.contents[0].content.name;
              var contentDataMap = new Map();
              data.contents.map(function (v) {
                _this27.storeService.parentNode.push(v.content.identifier);
                _this27.resolverService.buildTreeAndMap(v.content, contentDataMap, _this27.storeService.flatNodeMap, _this27.storeService.uniqueIdMap, _this27.storeService.lexIdMap);
              });
              contentDataMap.forEach(function (content) {
                return _this27.contentService.setOriginalMeta(content);
              });
              var currentNode = _this27.storeService.lexIdMap.get(_this27.currentContent)[0];
              _this27.currentParentId = _this27.currentContent;
              _this27.storeService.treeStructureChange.next(_this27.storeService.flatNodeMap.get(currentNode));
              _this27.storeService.currentParentNode = currentNode;
              _this27.storeService.currentSelectedNode = currentNode;
              var newCreatedNode = 0;
              var newCreatedLexid = _this27.editorService.newCreatedLexid;
              if (newCreatedLexid) {
                newCreatedNode = _this27.storeService.lexIdMap.get(newCreatedLexid)[0];
                _this27.storeService.selectedNodeChange.next(newCreatedNode);
              }
              if (data.contents[0] && data.contents[0].content && data.contents[0].content.children[0] && data.contents[0].content.children[0].identifier) {
                _this27.subAction({
                  type: 'editContent',
                  identifier: data.contents[0].content.children[0].identifier,
                  nodeClicked: true
                });
                _this27.storeService.selectedNodeChange.next(data.contents[0].content.children[0].identifier);
              }
              // this.storeService.selectedNodeChange.subscribe(node => {
              //   if (node) {
              //     console.log('selected node', node)
              //     const getNodeId = (this.storeService.lexIdMap.get(node.toString()) as number[])[0]
              //     this.storeService.currentSelectedNode = getNodeId
              //     // this.contentService.currentContent = node.toString()
              //     // this.contentService.changeActiveCont.next(node.toString())
              //   }
              // })
            });

            this.activateRoute.parent.url.subscribe(function (data) {
              var urlParam = data[0].path;
              // if (urlParam === 'collection') {
              //   this.headerService.showCreatorHeader(this.courseName)
              // }
            });
          }
        }
      }, {
        key: "expandNodesById",
        value: function expandNodesById(ids) {
          var _this28 = this;
          var idSet = ids ? new Set(ids) : this.expandedNodes;
          this.treeControl.dataNodes.forEach(function (node) {
            if (idSet.has(node.id)) {
              _this28.treeControl.expand(node);
              var parent = _this28.getParentNode(node);
              while (parent) {
                _this28.treeControl.expand(parent);
                parent = _this28.getParentNode(parent);
              }
            }
          });
        }
      }, {
        key: "getParentNode",
        value: function getParentNode(node) {
          var currentLevel = node.level;
          if (currentLevel < 1) {
            return null;
          }
          var startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
          for (var i = startIndex; i >= 0; i = i - 1) {
            var currentNode = this.treeControl.dataNodes[i];
            if (currentNode.level < currentLevel) {
              return currentNode;
            }
          }
          return null;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.loaderService.changeLoad.next(false);
          // this.headerService.showCreatorHeader('showlogo')
          // this.rootSvc.showNavbarDisplay$.next(true)
        }
      }, {
        key: "addChapterName",
        value: function addChapterName() {
          // console.log('newchap', this.newChapterName)
        }
      }, {
        key: "setContentType",
        value: function setContentType(param) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var asSibling, node, parentNode, isDone, newCreatedLexid, newCreatedNode;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  if (!(this.createTopicForm && this.createTopicForm.value)) {
                    _context7.next = 16;
                    break;
                  }
                  this.couseCreated = param;
                  asSibling = false;
                  node = {
                    id: this.storeService.currentParentNode,
                    identifier: this.storeService.parentNode[0],
                    editable: true,
                    category: 'Course',
                    childLoaded: true,
                    expandable: true,
                    level: 1
                  };
                  parentNode = node;
                  this.loaderService.changeLoad.next(true);
                  _context7.next = 8;
                  return this.storeService.createChildOrSibling(this.couseCreated, parentNode, asSibling ? node.id : undefined, 'below', this.createTopicForm.value, param === 'web' ? 'link' : '');
                case 8:
                  isDone = _context7.sent;
                  this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                    data: {
                      type: isDone ? _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SUCCESS : _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].FAIL
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000
                  });
                  if (isDone) {
                    newCreatedLexid = this.editorService.newCreatedLexid;
                    newCreatedNode = this.storeService.lexIdMap.get(newCreatedLexid)[0];
                    this.storeService.currentSelectedNode = newCreatedNode;
                    this.storeService.selectedNodeChange.next(newCreatedNode);
                    this.currentContent = this.editorService.newCreatedLexid;
                  }
                  this.showAddchapter = false;
                  this.loaderService.changeLoad.next(false);
                  this.subAction({
                    type: 'editContent',
                    identifier: this.editorService.newCreatedLexid,
                    nodeClicked: false
                  });
                  this.createTopicForm.reset();
                  this.save();
                case 16:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "sidenavClose",
        value: function sidenavClose() {
          var _this29 = this;
          setTimeout(function () {
            return _this29.leftArrow = true;
          }, 500);
        }
      }, {
        key: "save",
        value: function save(nextAction) {
          var _this30 = this;
          var updatedContent = this.contentService.upDatedContent || {};
          if (this.viewMode === 'assessment') {
            this.triggerQuizSave = true;
          } else if (this.viewMode === 'upload') {
            // TODO  console.log('viewmode', this.viewMode)
            this.triggerUploadSave = true;
          }
          if (Object.keys(updatedContent).length || Object.keys(this.storeService.changedHierarchy).length) {
            this.isChanged = true;
            this.loaderService.changeLoad.next(true);
            this.triggerSave().subscribe(function () {
              if (nextAction) {
                _this30.action(nextAction);
              }
              _this30.loaderService.changeLoad.next(false);
              _this30.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                  type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SAVE_SUCCESS
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000
              });
              // window.location.reload()
            }, function (error) {
              if (error.status === 409) {
                var errorMap = new Map();
                Object.keys(_this30.contentService.originalContent).forEach(function (v) {
                  return errorMap.set(v, _this30.contentService.originalContent[v]);
                });
                var dialog = _this30.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                  width: '80vw',
                  height: '90vh',
                  data: {
                    errorFromBackendData: error.error,
                    dataMapping: errorMap
                  }
                });
                dialog.afterClosed().subscribe(function (v) {
                  if (v) {
                    if (typeof v === 'string') {
                      _this30.storeService.selectedNodeChange.next(_this30.storeService.lexIdMap.get(v)[0]);
                      _this30.contentService.changeActiveCont.next(v);
                    } else {
                      _this30.storeService.selectedNodeChange.next(v);
                      _this30.contentService.changeActiveCont.next(_this30.storeService.uniqueIdMap.get(v));
                    }
                  }
                });
              }
              _this30.loaderService.changeLoad.next(false);
              _this30.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                  type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SAVE_FAIL
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000
              });
            });
          } else {
            if (nextAction) {
              this.action(nextAction);
            } else {
              this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                  type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].UP_TO_DATE
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000
              });
            }
          }
        }
      }, {
        key: "validationCheck",
        get: function get() {
          var _this31 = this;
          var currentNodeId = this.storeService.lexIdMap.get(this.currentParentId);
          var returnValue = this.storeService.validationCheck(currentNodeId[0]);
          if (returnValue) {
            var dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
              width: '80vw',
              height: '90vh',
              data: {
                processErrorData: returnValue
              }
            });
            dialog.afterClosed().subscribe(function (v) {
              if (v) {
                if (typeof v === 'string') {
                  _this31.storeService.selectedNodeChange.next(_this31.storeService.lexIdMap.get(v)[0]);
                  _this31.contentService.changeActiveCont.next(v);
                } else {
                  _this31.storeService.selectedNodeChange.next(v);
                  _this31.contentService.changeActiveCont.next(_this31.storeService.uniqueIdMap.get(v));
                }
              }
            });
            return false;
          }
          return true;
        }
      }, {
        key: "takeAction",
        value: function takeAction() {
          var _this32 = this;
          this.isSubmitPressed = true;
          var needSave = Object.keys(this.contentService.upDatedContent || {}).length;
          if (!needSave && !this.isChanged) {
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
              data: {
                type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].UP_TO_DATE
              },
              duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000
            });
            return;
          }
          if (this.validationCheck) {
            var dialogRef = this.dialog.open(_ws_author_src_lib_modules_shared_components_comments_dialog_comments_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CommentsDialogComponent"], {
              width: '750px',
              height: '450px',
              data: this.contentService.getOriginalMeta(this.currentParentId)
            });
            dialogRef.afterClosed().subscribe(function (commentsForm) {
              _this32.finalCall(commentsForm);
            });
          }
        }
      }, {
        key: "finalCall",
        value: function finalCall(commentsForm) {
          var _this33 = this;
          if (commentsForm) {
            var body = {
              comment: commentsForm.controls.comments.value,
              operation: commentsForm.controls.action.value === 'accept' || ['Draft', 'Live'].includes(this.contentService.originalContent[this.currentParentId].status) ? 1 : 0
            };
            var updatedMeta = this.contentService.getUpdatedMeta(this.currentParentId);
            var needSave = Object.keys(this.contentService.upDatedContent || {}).length || Object.keys(this.storeService.changedHierarchy).length;
            var saveCall = (needSave ? this.triggerSave() : Object(rxjs__WEBPACK_IMPORTED_MODULE_16__["of"])({})).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["mergeMap"])(function () {
              return _this33.editorService.forwardBackward(body, _this33.currentParentId, _this33.contentService.originalContent[_this33.currentParentId].status).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["mergeMap"])(function () {
                return _this33.notificationSvc.triggerPushPullNotification(updatedMeta, body.comment, body.operation ? true : false).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["catchError"])(function () {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_16__["of"])({});
                }));
              }));
            }));
            this.loaderService.changeLoad.next(true);
            saveCall.subscribe(function () {
              _this33.loaderService.changeLoad.next(false);
              _this33.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                  type: _this33.getMessage('success')
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000
              });
              _this33.contents = _this33.contents.filter(function (v) {
                return v.identifier !== _this33.currentParentId;
              });
              if (_this33.contents.length) {
                _this33.contentService.changeActiveCont.next(_this33.contents[0].identifier);
              } else {
                _this33.router.navigateByUrl('/author/home');
              }
            }, function (error) {
              if (error.status === 409) {
                var errorMap = new Map();
                Object.keys(_this33.contentService.originalContent).forEach(function (v) {
                  return errorMap.set(v, _this33.contentService.originalContent[v]);
                });
                var dialog = _this33.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                  width: '80vw',
                  height: '90vh',
                  data: {
                    errorFromBackendData: error.error,
                    dataMapping: errorMap
                  }
                });
                dialog.afterClosed().subscribe(function (v) {
                  if (v) {
                    if (typeof v === 'string') {
                      _this33.storeService.selectedNodeChange.next(_this33.storeService.lexIdMap.get(v)[0]);
                      _this33.contentService.changeActiveCont.next(v);
                    } else {
                      _this33.storeService.selectedNodeChange.next(v);
                      _this33.contentService.changeActiveCont.next(_this33.storeService.uniqueIdMap.get(v));
                    }
                  }
                });
              }
              _this33.loaderService.changeLoad.next(false);
              _this33.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                  type: _this33.getMessage('failure')
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000
              });
            });
          }
        }
      }, {
        key: "preview",
        value: function preview(id) {
          var _this34 = this;
          var updatedContent = this.contentService.upDatedContent || {};
          var saveCall = Object.keys(updatedContent).length || Object.keys(this.storeService.changedHierarchy).length ? this.triggerSave() : Object(rxjs__WEBPACK_IMPORTED_MODULE_16__["of"])({});
          this.loaderService.changeLoad.next(true);
          saveCall.subscribe(function () {
            _this34.mimeTypeRoute = Object(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_20__["VIEWER_ROUTE_FROM_MIME"])(_this34.contentService.getUpdatedMeta(id).mimeType);
            _this34.loaderService.changeLoad.next(false);
            _this34.previewIdentifier = id;
          }, function (error) {
            if (error.status === 409) {
              var errorMap = new Map();
              Object.keys(_this34.contentService.originalContent).forEach(function (v) {
                return errorMap.set(v, _this34.contentService.originalContent[v]);
              });
              var dialog = _this34.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                width: '750px',
                height: '450px',
                data: {
                  errorFromBackendData: error.error,
                  dataMapping: errorMap
                }
              });
              dialog.afterClosed().subscribe(function (v) {
                if (v) {
                  if (typeof v === 'string') {
                    _this34.storeService.selectedNodeChange.next(_this34.storeService.lexIdMap.get(v)[0]);
                    _this34.contentService.changeActiveCont.next(v);
                  } else {
                    _this34.storeService.selectedNodeChange.next(v);
                    _this34.contentService.changeActiveCont.next(_this34.storeService.uniqueIdMap.get(v));
                  }
                }
              });
            }
            _this34.loaderService.changeLoad.next(false);
            _this34.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
              data: {
                type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SAVE_FAIL
              },
              duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000
            });
          });
        }
      }, {
        key: "closePreview",
        value: function closePreview() {
          this.previewIdentifier = null;
        }
      }, {
        key: "triggerSave",
        value: function triggerSave() {
          var _this35 = this;
          var nodesModified = {};
          var isRootPresent = false;
          Object.keys(this.contentService.upDatedContent).forEach(function (v) {
            if (!isRootPresent) {
              isRootPresent = _this35.storeService.parentNode.includes(v);
            }
            nodesModified[v] = {
              isNew: false,
              root: _this35.storeService.parentNode.includes(v),
              metadata: _this35.contentService.upDatedContent[v]
            };
          });
          if (!isRootPresent) {
            nodesModified[this.currentParentId] = {
              isNew: false,
              root: true,
              metadata: {}
            };
          }
          var requestBody = {
            nodesModified: nodesModified,
            hierarchy: this.storeService.changedHierarchy
          };
          return this.editorService.updateContentV2(requestBody).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["tap"])(function () {
            _this35.storeService.changedHierarchy = {};
            Object.keys(_this35.contentService.upDatedContent).forEach(function (id) {
              _this35.contentService.resetOriginalMeta(_this35.contentService.upDatedContent[id], id);
            });
            _this35.contentService.upDatedContent = {};
            // window.location.reload()
          }));
        }
      }, {
        key: "getMessage",
        value: function getMessage(type) {
          if (type === 'success') {
            switch (this.contentService.originalContent[this.currentParentId].status) {
              case 'Draft':
              case 'Live':
                return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SEND_FOR_REVIEW_SUCCESS;
              case 'InReview':
                return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].REVIEW_SUCCESS;
              case 'Reviewed':
                return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].PUBLISH_SUCCESS;
              default:
                return '';
            }
          }
          switch (this.contentService.originalContent[this.currentParentId].status) {
            case 'Draft':
            case 'Live':
              return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SEND_FOR_REVIEW_FAIL;
            case 'InReview':
              return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].REVIEW_FAIL;
            case 'Reviewed':
              return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].PUBLISH_FAIL;
            default:
              return '';
          }
        }
      }, {
        key: "subAction",
        value: function subAction(event) {
          // const nodeClicked = event.nodeClicked
          this.contentService.changeActiveCont.next(event.identifier);
          switch (event.type) {
            case 'editMeta':
              this.viewMode = 'meta';
              break;
            case 'editContent':
              if (event.nodeClicked === false) {
                //  this.save('refresh')
              }
              var content = this.contentService.getUpdatedMeta(event.identifier);
              if (['application/pdf', 'application/x-mpegURL'].includes(content.mimeType)) {
                this.viewMode = 'upload';
              } else if (['video/x-youtube', 'application/html'].includes(content.mimeType) && content.fileType === 'link') {
                this.viewMode = 'curate';
              } else if (content.mimeType === 'application/html') {
                this.viewMode = 'upload';
              } else if (content.mimeType === 'application/quiz') {
                this.viewMode = 'assessment';
              } else if (content.mimeType === 'application/web-module') {
                this.viewMode = 'webmodule';
              }
              // this.save()
              // localStorage.setItem('afterClick', nodeClicked)
              // if (nodeClicked) {
              //   window.location.reload()
              // }
              // this.routerValuesCall()
              break;
            case 'preview':
              this.preview(event.identifier);
              break;
            case 'showAddChapter':
              this.showAddchapter = false;
          }
        }
      }, {
        key: "action",
        value: function action(type) {
          var _this36 = this;
          switch (type) {
            case 'next':
              this.viewMode = 'meta';
              break;
            case 'refresh':
              window.location.reload();
              break;
            case 'scroll':
              var el = document.getElementById('edit-meta');
              if (el) {
                el.scrollIntoView();
              }
              break;
            case 'save':
              this.save();
              break;
            case 'saveAndNext':
              this.save('next');
              break;
            case 'preview':
              this.preview(this.currentContent);
              break;
            case 'push':
              if (this.getAction() === 'publish') {
                var dialogRefForPublish = this.dialog.open(_ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"], {
                  width: '70%',
                  data: 'publishMessage'
                });
                dialogRefForPublish.afterClosed().subscribe(function (result) {
                  if (result) {
                    _this36.takeAction();
                  }
                });
              } else {
                this.takeAction();
              }
              break;
            case 'delete':
              var dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DeleteDialogComponent"], {
                width: '600px',
                height: 'auto',
                data: this.contentService.getUpdatedMeta(this.currentParentId)
              });
              dialog.afterClosed().subscribe(function (confirm) {
                if (confirm) {
                  _this36.contents = _this36.contents.filter(function (v) {
                    return v.identifier !== _this36.currentParentId;
                  });
                  if (_this36.contents.length) {
                    _this36.contentService.changeActiveCont.next(_this36.contents[0].identifier);
                  } else {
                    _this36.router.navigateByUrl('/author/home');
                  }
                }
              });
              break;
            case 'fullscreen':
              this.fullScreenToggle();
              break;
            case 'close':
              this.router.navigateByUrl('/author/home');
              break;
          }
        }
      }, {
        key: "delete",
        value: function _delete() {
          var _this37 = this;
          this.loaderService.changeLoad.next(true);
          this.editorService.deleteContent(this.currentParentId).subscribe(function () {
            _this37.loaderService.changeLoad.next(false);
            _this37.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
              data: {
                type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SUCCESS
              },
              duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000
            });
            _this37.contents = _this37.contents.filter(function (v) {
              return v.identifier !== _this37.currentParentId;
            });
            if (_this37.contents.length) {
              _this37.contentService.changeActiveCont.next(_this37.contents[0].identifier);
            } else {
              _this37.router.navigateByUrl('/author/home');
            }
          }, function (error) {
            if (error.status === 409) {
              var errorMap = new Map();
              Object.keys(_this37.contentService.originalContent).forEach(function (v) {
                return errorMap.set(v, _this37.contentService.originalContent[v]);
              });
              var dialog = _this37.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                width: '750px',
                height: '450px',
                data: {
                  errorFromBackendData: error.error,
                  dataMapping: errorMap
                }
              });
              dialog.afterClosed().subscribe(function (v) {
                if (v) {
                  if (typeof v === 'string') {
                    _this37.storeService.selectedNodeChange.next(_this37.storeService.lexIdMap.get(v)[0]);
                    _this37.contentService.changeActiveCont.next(v);
                  } else {
                    _this37.storeService.selectedNodeChange.next(v);
                    _this37.contentService.changeActiveCont.next(_this37.storeService.uniqueIdMap.get(v));
                  }
                }
              });
            }
            _this37.loaderService.changeLoad.next(false);
            _this37.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
              data: {
                type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].CONTENT_FAIL
              },
              duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000
            });
          });
        }
      }, {
        key: "getAction",
        value: function getAction() {
          switch (this.contentService.originalContent[this.currentParentId].status) {
            case 'Draft':
            case 'Live':
              return 'sendForReview';
            case 'InReview':
              return 'review';
            case 'Reviewed':
              var isDraftPresent = this.contentService.resetStatus();
              /**Change all content as draft, if one of the content is draft status */
              if (isDraftPresent) {
                this.contentService.changeStatusDraft();
                return 'sendForReview';
              }
              return 'publish';
            default:
              return 'sendForReview';
          }
        }
      }, {
        key: "canDelete",
        value: function canDelete() {
          var _this38 = this;
          return this.accessControlSvc.hasRole(['editor', 'admin']) || ['Draft', 'Live'].includes(this.contentService.originalContent[this.currentParentId].status) && this.contentService.originalContent[this.currentParentId].creatorContacts.find(function (v) {
            return v.id === _this38.accessControlSvc.userId;
          });
        }
      }]);
      return CourseCollectionComponent;
    }();
    CourseCollectionComponent.ctorParameters = function () {
      return [{
        type: _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_12__["EditorContentService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _services_store_service__WEBPACK_IMPORTED_MODULE_19__["CollectionStoreService"]
      }, {
        type: _services_resolver_service__WEBPACK_IMPORTED_MODULE_18__["CollectionResolverService"]
      }, {
        type: _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_14__["AuthInitService"]
      }, {
        type: _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_15__["LoaderService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }, {
        type: _ws_author_src_lib_routing_modules_editor_services_editor_service__WEBPACK_IMPORTED_MODULE_13__["EditorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ws_author_src_lib_services_notification_service__WEBPACK_IMPORTED_MODULE_21__["NotificationService"]
      }, {
        type: _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_22__["AccessControlService"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_23__["BreakpointObserver"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };
    CourseCollectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      // tslint:disable-next-line:component-selector
      selector: 'ws-author-course-collection',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./course-collection.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-collection/course-collection.component.html"))["default"],
      providers: [_services_store_service__WEBPACK_IMPORTED_MODULE_19__["CollectionStoreService"], _services_resolver_service__WEBPACK_IMPORTED_MODULE_18__["CollectionResolverService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./course-collection.component.scss */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-collection/course-collection.component.scss"))["default"]]
    })], CourseCollectionComponent);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-header/course-header.component.scss":
  /*!*******************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-header/course-header.component.scss ***!
    \*******************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsCourseHeaderCourseHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".app-logo {\n  max-width: 100px;\n  max-height: 60px;\n  border-left: solid 1px;\n  padding-left: 8px;\n  margin-left: 10px;\n}\n@media only screen and (max-width: 599px) {\n  .app-logo {\n    max-width: 80px;\n    max-height: 30px;\n  }\n}\n.mr-10 {\n  margin-right: 10px;\n}\n.xsmall {\n  position: absolute;\n  display: block;\n  right: 0;\n}\n.header-spacer {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9jb3Vyc2UtaGVhZGVyL2NvdXJzZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9jb3Vyc2UtaGVhZGVyL2NvdXJzZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvc3R5bGVzL193cy1taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNESjtBQ2FFO0VGakJGO0lBUUksZUFBQTtJQUNBLGdCQUFBO0VDQUY7QUFDRjtBREdBO0VBQ0Usa0JBQUE7QUNBRjtBREdBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtBQ0FGO0FER0E7RUFDRSxjQUFBO0FDQUYiLCJmaWxlIjoicHJvamVjdC93cy9hdXRob3Ivc3JjL2xpYi9yb3V0aW5nL21vZHVsZXMvZWRpdG9yL3JvdXRpbmcvbW9kdWxlcy9jb2xsZWN0aW9uL2NvbXBvbmVudHMvY291cnNlLWhlYWRlci9jb3Vyc2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy1taXhpbnMuc2Nzcyc7XG5cbi5hcHAtbG9nbyB7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG1heC1oZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14cyB7XG4gICAgbWF4LXdpZHRoOiA4MHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwcHg7XG4gIH1cbn1cblxuLm1yLTEwIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ueHNtYWxsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcmlnaHQ6IDA7XG59XG5cbi5oZWFkZXItc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59IiwiLmFwcC1sb2dvIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgbWF4LWhlaWdodDogNjBweDtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAuYXBwLWxvZ28ge1xuICAgIG1heC13aWR0aDogODBweDtcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xuICB9XG59XG5cbi5tci0xMCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnhzbWFsbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHJpZ2h0OiAwO1xufVxuXG4uaGVhZGVyLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufSIsIkBpbXBvcnQgJ3N0eWxlcy9fd3MtdmFycy5zY3NzJztcblxuQG1peGluIHJldGluYSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIHByaW50IHtcbiAgQG1lZGlhIG9ubHkgcHJpbnQge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBicmVha3BvaW50LXhzIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC14bCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSBhbmQgKG1heC13aWR0aDogNTAwMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LXMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC14bCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LXhzIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiJdfQ== */";

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-header/course-header.component.ts":
  /*!*****************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-header/course-header.component.ts ***!
    \*****************************************************************************************************************************************/
  /*! exports provided: CourseHeaderComponent */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionComponentsCourseHeaderCourseHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CourseHeaderComponent", function () {
      return CourseHeaderComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ws_widget_utils_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ws-widget/utils/src/public-api */"./library/ws-widget/utils/src/public-api.ts");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _services_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../services/store.service */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/store.service.ts");
    var CourseHeaderComponent = /*#__PURE__*/function () {
      function CourseHeaderComponent(configSvc, domSanitizer,
      // private headerService: HeaderServiceService,
      store) {
        _classCallCheck(this, CourseHeaderComponent);
        this.configSvc = configSvc;
        this.domSanitizer = domSanitizer;
        this.store = store;
        this.appIcon = null;
        this.buttonConfig = null;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.requiredConfig = [];
        // this.headerService.showCourseHeader.subscribe(data => {
        //   this.courseNameHeader = data
        // })
      }
      _createClass(CourseHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this39 = this;
          if (this.configSvc.instanceConfig) {
            this.domSanitizer.bypassSecurityTrustResourceUrl(this.appIcon = this.configSvc.instanceConfig.logos.app);
          }
          if (this.buttonConfig) {
            this.buttonConfig.buttons.forEach(function (button) {
              if (button.event === 'save' || button.event === 'push' || button.title === 'saveAndNext') {
                _this39.requiredConfig.push(button);
              }
            });
          }
        }
      }, {
        key: "showCourseSettings",
        value: function showCourseSettings() {
          this.subAction.emit({
            type: 'editContent',
            identifier: this.store.parentNode[0],
            nodeClicked: true
          });
        }
      }]);
      return CourseHeaderComponent;
    }();
    CourseHeaderComponent.ctorParameters = function () {
      return [{
        type: _ws_widget_utils_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ConfigurationsService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }, {
        type: _services_store_service__WEBPACK_IMPORTED_MODULE_4__["CollectionStoreService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CourseHeaderComponent.prototype, "buttonConfig", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CourseHeaderComponent.prototype, "action", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CourseHeaderComponent.prototype, "subAction", void 0);
    CourseHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      // tslint:disable-next-line:component-selector
      selector: 'ws-author-course-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./course-header.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-header/course-header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./course-header.component.scss */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-header/course-header.component.scss"))["default"]]
    })], CourseHeaderComponent);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/resolver.service.ts":
  /*!******************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/resolver.service.ts ***!
    \******************************************************************************************************************/
  /*! exports provided: CollectionResolverService */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionServicesResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CollectionResolverService", function () {
      return CollectionResolverService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ws/author/src/lib/constants/icons */"./project/ws/author/src/lib/constants/icons.ts");
    /* harmony import */
    var _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ws/author/src/lib/constants/mimeType */"./project/ws/author/src/lib/constants/mimeType.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/services/access-control.service */"./project/ws/author/src/lib/modules/shared/services/access-control.service.ts");
    /* harmony import */
    var _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ws/author/src/lib/routing/modules/editor/services/editor-content.service */"./project/ws/author/src/lib/routing/modules/editor/services/editor-content.service.ts");
    /* harmony import */
    var _services_init_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./../../../../../../../services/init.service */"./project/ws/author/src/lib/services/init.service.ts");
    var CollectionResolverService =
    /*#__PURE__*/
    /**
     * The service which contains the logic to parse the collection hierarch data and produce the
     * respective tree structure or json structure
     */
    function () {
      function CollectionResolverService(accessService, contentService, authInitService) {
        _classCallCheck(this, CollectionResolverService);
        this.accessService = accessService;
        this.contentService = contentService;
        this.authInitService = authInitService;
        // The set to hold the content type for which the lazy loading of children is required
        this.lazyLoad = new Set();
        this._uniqueId = 0;
      }
      _createClass(CollectionResolverService, [{
        key: "uniqueId",
        get: function get() {
          this._uniqueId += 1;
          return Date.now() + this._uniqueId;
        }
        /**
         * Restructure the hierarch passed from backend to a map and tree hierarch
         * which is easy to read and update the meta and tree structure
         *
         * @param { NSContent.IContentMeta } content - The hierarchy to be passed
         * @param { Map } content - The map which is used to read and populate meta data
         * @param { Map<string, NSContent.IContentMeta> } flatNodeMap - The map which is used to modify change in individual tree structure
         * @param { Map<number,string> } uniqueIdMap - The map which is used to get unique id against lex id
         *
         */
      }, {
        key: "buildTreeAndMap",
        value: function buildTreeAndMap(content, map, flatNodeMap, uniqueIdMap, lexIdMap) {
          var _this40 = this;
          /**
           * Recursive function which actually do the work
           *
           * @param { NSContent.IContentMeta } currContent - The hierarchy to be passed
           * @param { string[] } parentList - The parent lex ids in the hierarchy in the order of top to bottom
           * @param { boolean } editable - Whether the user have access to change the parent hierarch or not
           * @returns { IContentNode } the restructured hierarch data to load in tree
           */
          var recursiveFn = function recursiveFn(currContent) {
            var parentId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
            var editable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var treeStructure = {
              editable: editable,
              parentId: parentId,
              id: _this40.uniqueId,
              identifier: currContent.identifier,
              category: _this40.getCategory(currContent),
              childLoaded: !_this40.lazyLoad.has(_this40.getCategory(currContent)),
              children: []
            };
            map.set(currContent.identifier, currContent);
            uniqueIdMap.set(treeStructure.id, currContent.identifier);
            var uniqueIds = lexIdMap.get(treeStructure.identifier);
            if (uniqueIds) {
              uniqueIds.push(treeStructure.id);
            } else {
              lexIdMap.set(treeStructure.identifier, [treeStructure.id]);
            }
            /**
             * Checking the user have access or not
             */
            var haveAccessToChangeStructure = _this40.hasAccess(currContent);
            if (treeStructure.childLoaded && treeStructure.children) {
              var children = [];
              currContent.children.forEach(function (v) {
                return children.push(recursiveFn(v, treeStructure.id, haveAccessToChangeStructure));
              });
              treeStructure.children = children;
            }
            flatNodeMap.set(treeStructure.id, treeStructure);
            return treeStructure;
          };
          return recursiveFn(content);
        }
      }, {
        key: "getFlatHierarchy",
        value: function getFlatHierarchy(id, flatNodeMap) {
          var rightPermission = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          var returnValue = [];
          var recursiveFunction = function recursiveFunction(currId) {
            returnValue.push(currId);
            var node = flatNodeMap.get(currId);
            if (rightPermission && node.editable || !rightPermission) {
              var children = node.children || [];
              children.map(function (v) {
                return recursiveFunction(v.id);
              });
            }
          };
          recursiveFunction(id);
          return returnValue;
        }
        /**
         * Since the category is not populated for old content to make it backward compatible
         * we are checking the category first if it is not present we are sending the contentType
         *
         * @param { NSContent.IContentMeta } content - The content for which we need to get category
         * @returns { string } The category
         */
      }, {
        key: "getCategory",
        value: function getCategory(content) {
          return content.category || content.contentType;
        }
        /**
         * Since the categoryType is not populated for old content to make it backward compatible
         * we are checking the categoryType first if it is not present we are checking the contentType
         * and based on contentType we select resourceType or courseType
         *
         * @param { NSContent.IContentMeta } content - The content for which we need to get category
         * @returns { string } The category type
         */
      }, {
        key: "getCategoryType",
        value: function getCategoryType(content) {
          switch (this.getCategory(content)) {
            case 'Collection':
              return '';
            default:
              return '';
          }
        }
        /**
         * To get the respective Mat icon mapping for the each contents
         * For different resources we need different types of icons
         *
         * @param { NSContent.IContentMeta } content - The content for which we need to get category
         * @returns { string } The mat icon to be displayed
         */
      }, {
        key: "getIcon",
        value: function getIcon(content) {
          if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].collection) {
            if (content.contentType === 'Learning Path') {
              return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].program;
            }
            if (content.contentType === 'Course') {
              return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].course;
            }
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].learningModule;
          }
          if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].html) {
            if (content.resourceType === 'Certification') {
              return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].certificate;
            }
            if (content.isExternal) {
              return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].externalContent;
            }
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].internalContent;
          }
          if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].pdf) {
            if (!content.artifactUrl) {
              return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].emptyFile;
            }
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].pdf;
          }
          if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].youtube) {
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].youtube;
          }
          if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].quiz) {
            if (content.resourceType === 'Assessment') {
              return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].assessment;
            }
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].quiz;
          }
          if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].dragDrop) {
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].dragNDrop;
          }
          if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].htmlPicker) {
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].htmlPicker;
          }
          if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].webModule) {
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].internalContent;
          }
          if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].handson) {
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].handsOn;
          }
          if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].iap) {
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].iap;
          }
          if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].mp3) {
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].audio;
          }
          if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].mp4) {
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].video;
          }
          if (content.contentType === 'Collection') {
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].learningModule;
          }
          return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"]["default"];
        }
        /**
         * To get to know the user access to change the hierarchy structure or not
         * Respective role have different access on different status of the content.
         * @param { NSContent.IContentMeta } content - The content for which we need to get category
         * @returns { boolean } The mat icon to be displayed
         */
      }, {
        key: "hasAccess",
        value: function hasAccess(content, parentMeta) {
          return this.contentService.hasAccess(content, false, parentMeta) && content.status === 'InReview' ? this.authInitService.collectionConfig.enabledRole.includes('reviewer') : content.status === 'Reviewed' ? this.authInitService.collectionConfig.enabledRole.includes('publisher') : ['Draft', 'Live'].includes(content.status) ? this.authInitService.collectionConfig.enabledRole.includes('author') : this.accessService.hasRole(['admin']);
        }
        /**
         * To know whether the drop of one node is allowed based max depth logic
         * @param { IContentTreeNode } dropNode - The node for which depth needs to be checked
         * @param { IContentTreeNode } dragNode - The node for which depth needs to be checked
         * @param { number } maxDepth - Maximum depth allowed in the configuration
         * @returns { boolean } The mat icon to be displayed
         */
      }, {
        key: "allowMaxDepth",
        value: function allowMaxDepth(_dropNode, _dragNode, _maxDepth) {
          return true;
        }
      }]);
      return CollectionResolverService;
    }();
    CollectionResolverService.ctorParameters = function () {
      return [{
        type: _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_4__["AccessControlService"]
      }, {
        type: _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_5__["EditorContentService"]
      }, {
        type: _services_init_service__WEBPACK_IMPORTED_MODULE_6__["AuthInitService"]
      }];
    };
    CollectionResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    /**
     * The service which contains the logic to parse the collection hierarch data and produce the
     * respective tree structure or json structure
     */], CollectionResolverService);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/store.service.ts":
  /*!***************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/store.service.ts ***!
    \***************************************************************************************************************/
  /*! exports provided: CollectionStoreService */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesCollectionServicesStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CollectionStoreService", function () {
      return CollectionStoreService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ws-widget/utils */"./library/ws-widget/utils/src/public-api.ts");
    /* harmony import */
    var _ws_author_src_lib_constants_depth_rule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ws/author/src/lib/constants/depth-rule */"./project/ws/author/src/lib/constants/depth-rule.ts");
    /* harmony import */
    var _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ws/author/src/lib/routing/modules/editor/services/editor-content.service */"./project/ws/author/src/lib/routing/modules/editor/services/editor-content.service.ts");
    /* harmony import */
    var _ws_author_src_lib_routing_modules_editor_services_editor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ws/author/src/lib/routing/modules/editor/services/editor.service */"./project/ws/author/src/lib/routing/modules/editor/services/editor.service.ts");
    /* harmony import */
    var _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @ws/author/src/lib/services/init.service */"./project/ws/author/src/lib/services/init.service.ts");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var _resolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./resolver.service */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/resolver.service.ts");
    var CollectionStoreService = /*#__PURE__*/function () {
      function CollectionStoreService(contentService, editorService, resolver, authInitService, logger) {
        _classCallCheck(this, CollectionStoreService);
        this.contentService = contentService;
        this.editorService = editorService;
        this.resolver = resolver;
        this.authInitService = authInitService;
        this.logger = logger;
        this.parentNode = [];
        this.invalidIds = [];
        this.onInvalidNodeChange = new rxjs__WEBPACK_IMPORTED_MODULE_7__["ReplaySubject"]();
        /**
         * Map from flat node to nested node. This helps us finding the nested node to be modified
         */
        this.flatNodeMap = new Map();
        /**
         * Map for unique id and lex id. This helps us finding the lex id of the node
         */
        this.uniqueIdMap = new Map();
        /**
         * Map for Lex id with unique id. This helps us tracking the change
         */
        this.lexIdMap = new Map();
        this.changedHierarchy = {};
        this.treeStructureChange = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.selectedNodeChange = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
      }
      _createClass(CollectionStoreService, [{
        key: "selectedNode",
        get: function get() {
          return this.selectedNodeChange.value;
        }
      }, {
        key: "allowDrop",
        value: function allowDrop(dragNode, dropNode) {
          var allow = true;
          if (!dragNode.editable || !dropNode.editable) {
            allow = false;
          } else if (!this.authInitService.collectionConfig.childrenConfig[dropNode.category]) {
            allow = false;
          } else if (!this.resolver.hasAccess(this.contentService.getUpdatedMeta(dropNode.identifier), dropNode.parentId ? this.contentService.getUpdatedMeta(this.flatNodeMap.get(dropNode.parentId).identifier) : undefined)) {
            allow = false;
          } else if (this.authInitService.collectionConfig.maxDepth <= dropNode.level + _ws_author_src_lib_constants_depth_rule__WEBPACK_IMPORTED_MODULE_3__["DEPTH_RUE"][dragNode.category]) {
            allow = false;
          }
          return allow;
        }
      }, {
        key: "dragAndDrop",
        value: function dragAndDrop(dragNode, dropNode, adjacentId) {
          var dropLocation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'below';
          var emitChange = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
          var oldParentNode = dragNode.parentId ? this.flatNodeMap.get(dragNode.parentId) : undefined;
          var newParentNode = this.flatNodeMap.get(dropNode.id);
          var oldParentChildList = oldParentNode ? oldParentNode.children : [];
          var newParentChildList = newParentNode.children;
          oldParentChildList.splice(oldParentChildList.findIndex(function (v) {
            return v.id === dragNode.id;
          }), 1);
          var childNode = this.flatNodeMap.get(dragNode.id);
          childNode.parentId = dropNode.id;
          if (adjacentId) {
            var dropPosition = (dropNode.children || []).indexOf(adjacentId) + (dropLocation === 'above' ? -1 : 1);
            var children = newParentNode.children;
            children.splice(dropPosition, 0, childNode);
          } else {
            if (newParentChildList) {
              newParentChildList.push(childNode);
            } else {
              newParentNode.children = [childNode];
            }
          }
          if (oldParentNode) {
            this.changedHierarchy[oldParentNode.identifier] = {
              root: this.parentNode.includes(oldParentNode.identifier),
              children: oldParentChildList.map(function (v) {
                var child = {
                  identifier: v.identifier,
                  reasonAdded: 'Added from Authoring Tool',
                  childrenClassifiers: []
                };
                return child;
              })
            };
          }
          this.changedHierarchy[newParentNode.identifier] = {
            root: this.parentNode.includes(newParentNode.identifier),
            children: newParentChildList.map(function (v) {
              var child = {
                identifier: v.identifier,
                reasonAdded: 'Added from Authoring Tool',
                childrenClassifiers: []
              };
              return child;
            })
          };
          if (emitChange) {
            this.treeStructureChange.next(this.treeStructureChange.value);
          }
        }
      }, {
        key: "addChildOrSibling",
        value: function addChildOrSibling(ids, dropNode, adjacentId) {
          var dropLocation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'below';
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
            var _this41 = this;
            var contents, contentDataMap;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.prev = 0;
                  _context8.next = 3;
                  return this.editorService.readMultipleContent(ids).toPromise();
                case 3:
                  contents = _context8.sent;
                  contentDataMap = new Map();
                  contents.map(function (v, index) {
                    _this41.contentService.setOriginalMeta(v);
                    var treeStructure = _this41.resolver.buildTreeAndMap(v, contentDataMap, _this41.flatNodeMap, _this41.uniqueIdMap, _this41.lexIdMap);
                    _this41.dragAndDrop(treeStructure, dropNode, adjacentId, dropLocation, index === ids.length - 1);
                  });
                  return _context8.abrupt("return", true);
                case 9:
                  _context8.prev = 9;
                  _context8.t0 = _context8["catch"](0);
                  this.logger.error(_context8.t0);
                  return _context8.abrupt("return", false);
                case 13:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this, [[0, 9]]);
          }));
        }
      }, {
        key: "createChildOrSibling",
        value: function createChildOrSibling(type, dropNode, adjacentId) {
          var dropLocation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'below';
          var topicObj = arguments.length > 4 ? arguments[4] : undefined;
          var fileType = arguments.length > 5 ? arguments[5] : undefined;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            var meta, parentData, requestBody, content, contentDataMap, treeStructure;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.prev = 0;
                  meta = this.authInitService.creationEntity.get(type);
                  parentData = this.contentService.parentUpdatedMeta();
                  requestBody = Object.assign({
                    name: topicObj ? topicObj.topicName : 'New Content',
                    description: topicObj ? topicObj.topicDescription : '',
                    mimeType: meta.mimeType,
                    contentType: meta.contentType,
                    resourceType: parentData.categoryType || '',
                    categoryType: parentData.categoryType || '',
                    fileType: fileType || '',
                    // thumbnail: parentData.thumbnail,
                    // appIcon: parentData.appIcon,
                    posterImage: parentData.posterImage,
                    sourceName: parentData.sourceName,
                    subTitle: parentData.subTitle,
                    body: parentData.body,
                    //   sourceName : parentData.sourceName,
                    locale:
                    // tslint:disable-next-line: ter-computed-property-spacing
                    this.contentService.originalContent[this.flatNodeMap.get(this.currentParentNode).identifier
                    // tslint:disable-next-line: ter-computed-property-spacing
                    ].locale || 'en'
                  }, meta.additionalMeta || {}); // requestBody.posterImage = parentData.posterImage
                  // requestBody.sourceName = parentData.sourceName
                  // requestBody.subTitle = parentData.subTitle
                  // requestBody.body = parentData.body
                  // requestBody.categoryType = parentData.categoryType
                  _context9.next = 6;
                  return this.editorService.createAndReadContent(requestBody).toPromise();
                case 6:
                  content = _context9.sent;
                  // if (content) {
                  //  // content.thumbnail = parentData.thumbnail
                  //  // content.appIcon = parentData.appIcon
                  // }
                  this.contentService.setOriginalMeta(content);
                  contentDataMap = new Map();
                  treeStructure = this.resolver.buildTreeAndMap(content, contentDataMap, this.flatNodeMap, this.uniqueIdMap, this.lexIdMap);
                  this.dragAndDrop(treeStructure, dropNode, adjacentId, dropLocation);
                  return _context9.abrupt("return", true);
                case 14:
                  _context9.prev = 14;
                  _context9.t0 = _context9["catch"](0);
                  this.logger.error(_context9.t0);
                  return _context9.abrupt("return", false);
                case 18:
                case "end":
                  return _context9.stop();
              }
            }, _callee9, this, [[0, 14]]);
          }));
        }
      }, {
        key: "deleteNode",
        value: function deleteNode(id) {
          var _this42 = this;
          var deleteIds = this.resolver.getFlatHierarchy(id, this.flatNodeMap, false);
          var node = this.flatNodeMap.get(id);
          var parentNode = node.parentId ? this.flatNodeMap.get(node.parentId) : undefined;
          deleteIds.forEach(function (v) {
            _this42.flatNodeMap["delete"](v);
            var lexId = _this42.uniqueIdMap.get(v);
            _this42.uniqueIdMap["delete"](v);
            var uniqueIds = _this42.lexIdMap.get(lexId);
            if (uniqueIds.length > 1) {
              uniqueIds.splice(uniqueIds.findIndex(function (currId) {
                return v === currId;
              }), 1);
            } else {
              _this42.lexIdMap["delete"](lexId);
              delete _this42.contentService.originalContent[lexId];
              delete _this42.contentService.upDatedContent[lexId];
              delete _this42.changedHierarchy[lexId];
            }
          });
          if (parentNode) {
            var children = parentNode.children || [];
            children.splice(children.findIndex(function (v) {
              return v.id === id;
            }), 1);
            this.changedHierarchy[parentNode.identifier] = {
              root: this.parentNode.includes(parentNode.identifier),
              children: children.map(function (v) {
                var child = {
                  identifier: v.identifier,
                  reasonAdded: 'Added from Authoring Tool',
                  childrenClassifiers: []
                };
                return child;
              })
            };
          }
          this.treeStructureChange.next(this.treeStructureChange.value);
        }
      }, {
        key: "cascadeDown",
        value: function cascadeDown(id, value, field) {
          var _this43 = this;
          var single = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var dependantIds = this.resolver.getFlatHierarchy(id, this.flatNodeMap, true);
          if (dependantIds.length <= 1) {
            return false;
          }
          dependantIds.filter(function (v) {
            return v !== id;
          }).forEach(function (v) {
            var lexId = _this43.uniqueIdMap.get(v);
            if (single) {
              // tslint:disable-next-line: ter-computed-property-spacing
              var meta = _this43.contentService.getUpdatedMeta(lexId)[field
              // tslint:disable-next-line: ter-computed-property-spacing
              ];

              if (meta) {
                meta.push(value);
              } else {
                meta = [value];
              }
              _this43.contentService.setUpdatedMeta({
                field: meta
              }, lexId);
            } else {
              _this43.contentService.setUpdatedMeta({
                field: value
              }, lexId);
            }
          });
          return true;
        }
      }, {
        key: "validationCheck",
        value: function validationCheck(id) {
          var returnValue = new Map();
          var errorIds = new Set();
          var hierarchy = this.resolver.getFlatHierarchy(id, this.flatNodeMap);
          this.metaValidationCheck(hierarchy, errorIds, returnValue);
          this.hierarchyStructureCheck(hierarchy, errorIds, returnValue);
          this.onInvalidNodeChange.next(Array.from(errorIds));
          return returnValue.size ? Array.from(returnValue.values()) : null;
        }
      }, {
        key: "hierarchyStructureCheck",
        value: function hierarchyStructureCheck(ids, errorId, errorMap) {
          var _this44 = this;
          ids.forEach(function (v) {
            var contentNode = _this44.flatNodeMap.get(v);
            var category = contentNode.category;
            var childConfig = _this44.authInitService.collectionConfig.childrenConfig[category];
            var errorMsg = [];
            var lexId = _this44.uniqueIdMap.get(v);
            var content = _this44.contentService.getUpdatedMeta(lexId);
            var currNode = contentNode;
            var currentLevel = 0;
            while (currNode.parentId) {
              currentLevel = currentLevel + 1;
              currNode = _this44.flatNodeMap.get(currNode.parentId);
            }
            var excessLevel = _ws_author_src_lib_constants_depth_rule__WEBPACK_IMPORTED_MODULE_3__["DEPTH_RUE"][contentNode.category] + currentLevel - _this44.authInitService.collectionConfig.maxDepth;
            if (excessLevel > 0) {
              errorMsg.push("Breached maximum level of depth allowed. It should be ".concat(excessLevel, " level above"));
            }
            if (childConfig) {
              var allowedTypes = childConfig.childTypes;
              var childTypeMap = allowedTypes.map(function () {
                return 0;
              });
              var children = contentNode.children || [];
              if (childConfig.minChildren && children.length < childConfig.minChildren) {
                errorMsg.push("Minimum ".concat(childConfig.minChildren, " children is required. But ").concat(children.length ? children.length : 'nothing', " present"));
              }
              if (childConfig.maxChildren && children.length > childConfig.maxChildren) {
                errorMsg.push("Maximum ".concat(childConfig.minChildren, " children is allowed. But ").concat(children.length, " present"));
              }
              children.forEach(function (child, position) {
                var childContent = _this44.contentService.getUpdatedMeta(child.identifier);
                var canPresent = false;
                allowedTypes.forEach(function (element, index) {
                  var canAllow = _this44.contentService.checkConditionV2(childContent, element.conditions);
                  if (canAllow) {
                    canPresent = true;
                    childTypeMap[index] = childTypeMap[index] + 1;
                    if (position) {
                      return;
                    }
                    // if (element.position === 'n' && position !== children.length - 1) {
                    //   let isSameChild = true
                    //   children.slice(position).forEach(sibling => {
                    //     const siblingChild = this.contentService.getUpdatedMeta(sibling.identifier)
                    //     isSameChild = this.contentService.checkConditionV2(
                    //       siblingChild,
                    //       element.conditions,
                    //     )
                    //     // if (!isSameChild) {
                    //     //   errorMsg.push(`${childContent.name || 'Untitled Content'} should be last child`)
                    //     //   return
                    //     // }
                    //   })
                    // }
                    return;
                  }
                });
                if (!canPresent) {
                  errorMsg.push("".concat(childContent.name || 'Untitled Content', " is not allowed to add here"));
                }
              });
              allowedTypes.forEach(function (type, index) {
                if (type.minimum && childTypeMap[index] < type.minimum) {
                  errorMsg.push("Minimum ".concat(type.minimum, " contents of type ").concat(_this44.formStringFromCondition(type.conditions), " is required. But only ").concat(childTypeMap[index], " is present"));
                }
                if (type.maximum && type.maximum < childTypeMap[index]) {
                  errorMsg.push("Maximum ".concat(type.maximum, " contents of type ").concat(_this44.formStringFromCondition(type.conditions), " is allowed. But ").concat(childTypeMap[index], " is present"));
                }
              });
            } else if (contentNode.children && contentNode.children.length) {
              errorMsg.push("Should not contain any child. But ".concat(contentNode.children.length, " were added"));
            }
            _this44.populateErrorMsg(v, errorMsg, content, errorId, errorMap);
          });
        }
      }, {
        key: "formStringFromCondition",
        value: function formStringFromCondition(condition) {
          var returnValue = '';
          if (condition.fit) {
            condition.fit.forEach(function (subCondition, majorIndex) {
              Object.keys(subCondition).forEach(function (v, index) {
                returnValue = "".concat(returnValue).concat(majorIndex > 0 ? ' or ' : '').concat(index > 0 ? ' ' : '').concat(v, " in ").concat(subCondition[v].join(' or '));
              });
            });
          }
          return returnValue;
        }
      }, {
        key: "metaValidationCheck",
        value: function metaValidationCheck(ids, errorId, errorMap) {
          var _this45 = this;
          ids.forEach(function (v) {
            var errorMsg = [];
            var lexId = _this45.uniqueIdMap.get(v);
            var content = _this45.contentService.getUpdatedMeta(lexId);
            if (!_this45.contentService.isValid(lexId)) {
              errorMsg.push('Mandatory fields are missing');
            }
            if (content.category === 'Resource') {
              if (content.mimeType === 'application/html' && !content.artifactUrl && !content.body) {
                errorMsg.push('Provide URL or populate "Body" field');
              } else if (['application/pdf', 'application/x-mpegURL'].includes(content.mimeType) && !content.artifactUrl) {
                errorMsg.push('Upload file');
              }
            }
            _this45.populateErrorMsg(v, errorMsg, content, errorId, errorMap);
          });
        }
      }, {
        key: "populateErrorMsg",
        value: function populateErrorMsg(id, errorMsg, content, errorId, errorMap) {
          if (errorMsg.length) {
            errorId.add(id);
            if (errorMap.has(id)) {
              // tslint:disable-next-line: semicolon    // tslint:disable-next-line: whitespace
              ;
              errorMap.get(id).message = errorMap.get(id).message.concat(errorMsg);
            } else {
              errorMap.set(id, {
                id: id,
                name: content.name || 'Untitled Content',
                message: errorMsg
              });
            }
          }
        }
      }]);
      return CollectionStoreService;
    }();
    CollectionStoreService.ctorParameters = function () {
      return [{
        type: _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_4__["EditorContentService"]
      }, {
        type: _ws_author_src_lib_routing_modules_editor_services_editor_service__WEBPACK_IMPORTED_MODULE_5__["EditorService"]
      }, {
        type: _resolver_service__WEBPACK_IMPORTED_MODULE_8__["CollectionResolverService"]
      }, {
        type: _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_6__["AuthInitService"]
      }, {
        type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]
      }];
    };
    CollectionStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], CollectionStoreService);

    /***/
  }
}]);
//# sourceMappingURL=routing-modules-collection-collection-module-es5.js.map