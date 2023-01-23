function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~routing-modules-collection-collection-module~routing-modules-quiz-quiz-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/fill-ups-editor/fill-ups-editor.component.html":
  /*!*******************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/fill-ups-editor/fill-ups-editor.component.html ***!
    \*******************************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizComponentsFillUpsEditorFillUpsEditorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<form [formGroup]=\"quizForm\" *ngIf=\"contentLoaded\">\n  <!-- <div class=\"header1\">\n    <mat-card class=\"absolute padding top-0 customheader border-b-4 items-center flex flex-row\">\n      <div class=\"item1 item-spacing\">\n        <mat-card-title>\n          <p class=\"text-center ws-mat-primary-text titlePadding\" i18n>Answer</p>\n        </mat-card-title>\n      </div>\n      <div class=\"absolute right-0 top-0 p-3 sm:pr-6 xl:pr-8 content-center pt-4\">\n        <button\n          class=\"small-button padding-remove ws-mat-primary-background mat-elevation-z6 margin-left-s\"\n          (click)=\"addOption()\"\n          type=\"button\"\n          mat-icon-button\n          i18n-matTooltip\n          matTooltipPosition=\"below\"\n          matTooltip=\"Add option\"\n          i18n-aria-label\n          aria-label=\"Add option\"\n        >\n          <mat-icon class=\"text-white small-icon\">add</mat-icon>\n        </button>\n      </div>\n    </mat-card>\n  </div> -->\n  <div class=\"flex addpadding items-center margin-top-l margin-bottom-m\">\n    <p class=\"mat-h3 font-weight-bold margin-remove\" i18n>Add Options</p>\n    <button class=\"mat-elevation-z5 small-button padding-remove ws-mat-primary-background margin-left-s\" (click)=\"addOption()\"\n      type=\"button\" mat-icon-button i18n-matTooltip matTooltipPosition=\"below\" matTooltip=\"Add option\" i18n-aria-label aria-label=\"add option\">\n      <mat-icon class=\"text-white small-icon\">add</mat-icon>\n    </button>\n  </div>\n  <div *ngIf=\"!isSmallScreen\" class=\"optionlist\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\n    <mat-card *ngFor=\"let option of selectedQuiz.options; let i = index\" class=\"w-full custom\" cdkDrag formArrayName=\"options\"\n      cdkDragBoundary=\" .optionlist\">\n      <div class=\"custom-placeholder\" *cdkDragPlaceholder></div>\n      <div class=\"flex justify-between w-full\" [formGroupName]=\"i\">\n        <div class=\"flex romanN text-center items-center pl-4\">{{ i + 1 | romanconvert }}.</div>\n        <div class=\"cursor-auto item1 item-spacing\">\n          <mat-form-field class=\"myfield w-full\" appearance=\"outline\" appearance=\"outline\">\n            <input matInput formControlName=\"text\" i18n-aria-label aria-label=\"enter answer\" />\n          </mat-form-field>\n        </div>\n        <div class=\"flex hint-button justify-center item-spacing\" *ngIf=\"showHint\">\n          <button class=\"inline-flex py-2 px-4 items-center\" (click)=\"openCkEditor(i)\" mat-button i18n-aria-label aria-label=\"edit hint\"\n            type=\"button\">\n            <mat-icon class=\"fill-current w-4 h-4 mr-2\">info</mat-icon>\n            <span class=\"padding-1\" i18n>Hint</span>\n          </button>\n        </div>\n        <div class=\"flex justify-center items-center width-4 item-spacing\">\n          <button mat-icon-button (click)=\"removeOption(i)\" i18n-aria-label aria-label=\"delete this option\" i18n-matTooltip matTooltipPosition=\"below\"\n            matTooltip=\"Delete this option\" type=\"button\">\n            <mat-icon>delete</mat-icon>\n          </button>\n        </div>\n      </div>\n    </mat-card>\n  </div>\n  <div *ngIf=\"isSmallScreen\">\n    <div cdkDropList (cdkDropListDropped)=\"drop($event)\">\n      <mat-card *ngFor=\"let option of selectedQuiz.options; let i = index\" class=\"custom\" cdkDrag formArrayName=\"options\" cdkDragBoundary=\" .optionlist\">\n        <div class=\"custom-placeholder\" *cdkDragPlaceholder></div>\n        <div class=\"w-full\" [formGroupName]=\"i\">\n          <div class=\"flex-col\">\n            <div class=\"flex justify-between\">\n              <div class=\"flex romanN text-center items-center pl-4\">\n                {{ i + 1 | romanconvert }}.\n              </div>\n              <div class=\"flex-e items-center pr-1\">\n                <button mat-icon-button (click)=\"removeOption(i)\" [disabled]=\"selectedQuiz.options.length === fillUpsOptions.minOptions\"\n                  i18n-aria-label aria-label=\"delete this option\" [ngClass]=\"{\n                    'cursor-not-allowed': selectedQuiz.options.length === fillUpsOptions.minOptions\n                  }\" i18n-matTooltip matTooltipPosition=\"below\" matTooltip=\"Delete this option\" type=\"button\">\n                  <mat-icon>delete</mat-icon>\n                </button>\n              </div>\n            </div>\n            <div class=\"flex-col w-full\">\n              <div class=\"cursor-auto item-spacing\">\n                <mat-form-field class=\"myfield w-full\" appearance=\"outline\" appearance=\"outline\">\n                  <input matInput formControlName=\"text\" i18n-aria-label aria-label=\"enter answer\" />\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"flex justify-start forHeight\" *ngIf=\"showHint\">\n              <div class=\"flex hint-button justify-center item-spacing\">\n                <button class=\"inline-flex py-2 px-4 items-center hint remove-padding\" (click)=\"openCkEditor(i)\" mat-icon-button i18n-aria-label\n                  aria-label=\"edit hint\" type=\"button\">\n                  <mat-icon class=\"fill-current w-4 h-4 mr-2\">info</mat-icon>\n                  <span class=\"padding-1\" i18n>Hint</span>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </mat-card>\n    </div>\n  </div>\n</form>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/match-the-following/match-the-following.component.html":
  /*!***************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/match-the-following/match-the-following.component.html ***!
    \***************************************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizComponentsMatchTheFollowingMatchTheFollowingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<form [formGroup]=\"quizForm\" *ngIf=\"contentLoaded\">\n  <!-- <div class=\"header1\">\n        <mat-card #matchTheFollowing class=\"padding customheader flex border-b-4 items-center flex-row forMob\">\n            <div class=\"mx-4 mb-0\" [ngClass]=\"{'w-4/12 sm:w-5/12': !showHint,'item1':showHint}\">\n                <mat-card-title class=\"text-center p-1 padding-title\" *ngIf=\"editColName !=='colAName'\">\n                    <span class=\"break-words ws-mat-primary-text \">{{quizForm.controls['colAName'].value}} </span>\n                    <button class=\"edit-btn\" (click)=\"editColNameFn('colAName')\" type=\"button\" mat-icon-button i18n-matTooltip matTooltipPosition=\"below\"\n                        matTooltip=\"Edit column name\" i18n-aria-label aria-label=\"edit column name\">\n                        <mat-icon>edit</mat-icon>\n                    </button>\n                </mat-card-title>\n                <div class=\"text-center\" *ngIf=\"editColName ==='colAName'\">\n                    <mat-form-field class=\"w-8/12 myfield\" appearance=\"outline\">\n                        <input formControlName='colAName' type=\"text\" #colAName matInput i18n-aria-label aria-label=\"enter column name\" (blur)=\"saveChanges()\">\n                        <mat-error *ngIf=\"!quizForm.controls['colAName'].value\">\n                            <p i18n>Column name should be</p>\n                            {{matchOptions.colNameMinLength}}-{{matchOptions.colNameMaxLength}}\n                            <p i18n>characters</p>\n                        </mat-error>\n                    </mat-form-field>\n\n                </div>\n            </div>\n            <div class=\"mx-4 mb-0\" [ngClass]=\"{'w-4/12 sm:w-5/12': !showHint,'item1':showHint}\">\n                <mat-card-title class=\" text-center p-1 padding-title2\" *ngIf=\"editColName !=='colBName'\">\n                    <span class=\"break-words ws-mat-primary-text\"> {{quizForm.controls['colBName'].value}} </span>\n                    <button class=\"edit-btn\" (click)=\"editColNameFn('colBName')\" type=\"button\" mat-icon-button i18n-matTooltip matTooltipPosition=\"below\"\n                        matTooltip=\"Edit column name\" i18n-aria-label aria-label=\"edit column name\">\n                        <mat-icon>edit</mat-icon>\n                    </button>\n                </mat-card-title>\n                <div class=\"text-center \" *ngIf=\"editColName ==='colBName'\">\n                    <mat-form-field class=\"w-8/12 myfield\" appearance=\"outline\">\n                        <input formControlName=\"colBName\" type=\"text\" #colBName matInput i18n-aria-label aria-label=\"enter column name\" (blur)=\"saveChanges()\">\n                        <mat-error *ngIf=\"!quizForm.controls['colBName'].value\">\n                            <p i18n>Column name should be</p>\n                            {{matchOptions.colNameMinLength}}-{{matchOptions.colNameMaxLength}}\n                            <p i18n>characters</p>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"absolute right-0 sm:pr-6 xl:pr-8 \">\n                <button class=\"small-button padding-remove ws-mat-primary-background mat-elevation-z6\" (click)=\"addOption()\" type=\"button\"\n                    mat-icon-button i18n-matTooltip matTooltipPosition=\"below\" matTooltip=\"Add option\" i18n-aria-label aria-label=\"add new option\">\n                    <mat-icon class=\"text-white\">add</mat-icon>\n                </button>\n            </div>\n    </mat-card>\n  </div> -->\n  <div class=\"flex addpadding items-center margin-top-l margin-bottom-m\">\n    <p class=\"mat-h3 font-weight-bold margin-remove\" i18n>Add Options</p>\n    <button class=\"mat-elevation-z5 small-button padding-remove ws-mat-primary-background margin-left-s\" (click)=\"addOption()\"\n      type=\"button\" mat-icon-button i18n-matTooltip matTooltipPosition=\"below\" matTooltip=\"Add option\" i18n-aria-label aria-label=\"add option\">\n      <mat-icon class=\"text-white small-icon\">add</mat-icon>\n    </button>\n  </div>\n  <div *ngIf=\"!isSmallScreen\" class=\"forMob\">\n    <div class=\"optionlist\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\n      <mat-card *ngFor=\"let option of selectedQuiz.options; let i = index\" formArrayName=\"options\" class=\"custom w-full\" cdkDrag\n        cdkDragBoundary=\" .optionlist\">\n        <div class=\"custom-placeholder\" *cdkDragPlaceholder></div>\n        <div class=\"flex w-full justify-between\" [formGroupName]=\"i\">\n          <div class=\"flex romanN text-center items-center pl-4\">{{ i + 1 | romanconvert }}.</div>\n          <div class=\"cursor-auto item1 item-spacing\" [ngClass]=\"{ 'width-31': showHint }\">\n            <!-- fxFlex.lt-sm=\"34%\" fxFlex.lt-md=\"35%\" fxFlex=\"37%\" -->\n            <mat-form-field class=\"w-full myfield\" appearance=\"outline\">\n              <input matInput formControlName=\"text\" i18n-aria-label aria-label=\"enter text\" />\n            </mat-form-field>\n          </div>\n          <div class=\"cursor-auto item1 item-spacing\" [ngClass]=\"{ 'width-31': showHint }\">\n            <mat-form-field class=\"w-full myfield\" appearance=\"outline\">\n              <input matInput formControlName=\"match\" i18n-aria-label aria-label=\"enter match\" />\n            </mat-form-field>\n          </div>\n          <div class=\"flex hint-button justify-center item-spacing\" *ngIf=\"showHint\">\n            <button class=\"inline-flex py-2 px-4 items-center hint\" (click)=\"openCkEditor(i)\" mat-button i18n-aria-label aria-label=\"edit hint\"\n              type=\"button\">\n              <mat-icon class=\"fill-current w-4 h-4 mr-2\">info</mat-icon>\n              <span class=\"padding-1\" i18n>Hint</span>\n            </button>\n          </div>\n          <div class=\"flex justify-center width-4 items-center item-spacing\">\n            <button mat-icon-button (click)=\"removeOption(i)\" i18n-aria-label aria-label=\"Delete this option\" i18n-matTooltip matTooltipPosition=\"below\"\n              matTooltip=\"Delete this option\" type=\"button\">\n              <mat-icon>delete</mat-icon>\n            </button>\n          </div>\n        </div>\n      </mat-card>\n    </div>\n  </div>\n  <div *ngIf=\"isSmallScreen\">\n    <div cdkDropList (cdkDropListDropped)=\"drop($event)\">\n      <mat-card *ngFor=\"let option of selectedQuiz.options; let i = index\" formArrayName=\"options\" class=\"custom\" cdkDrag cdkDragBoundary=\" .optionlist\">\n        <div class=\"custom-placeholder\" *cdkDragPlaceholder></div>\n        <div class=\"w-full\" [formGroupName]=\"i\">\n          <div class=\"flex-col\">\n            <div class=\"flex justify-between\">\n              <div class=\"flex romanN text-center items-center pl-4\">\n                {{ i + 1 | romanconvert }}.\n              </div>\n              <div class=\"flex-e items-center pr-1\">\n                <button mat-icon-button (click)=\"removeOption(i)\" [disabled]=\"selectedQuiz.options.length === matchOptions.minOptions\" i18n-aria-label\n                  aria-label=\"Delete this option\" [ngClass]=\"{\n                    'cursor-not-allowed': selectedQuiz.options.length === matchOptions.minOptions\n                  }\" i18n-matTooltip matTooltipPosition=\"below\" matTooltip=\"Delete this option\" type=\"button\">\n                  <mat-icon>delete</mat-icon>\n                </button>\n              </div>\n            </div>\n            <div class=\"flex moreMob forInput\">\n              <div class=\"flex items-center minorChange\">\n                <div class=\"w-1/3\" *ngIf=\"isSmallScreenMobile\">\n                  <h2 class=\"mat-h2 text-center pt-3 ws-mat-primary-text\" i18n>COL-A</h2>\n                  <!--<mat-card-title class=\"text-center p-1 padding-title\"\n                                        *ngIf=\"editColName !=='colAName'\">\n                                        <span\n                                            class=\"break-words ws-mat-primary-text \">{{quizForm.controls['colAName'].value}}\n                                        </span>\n                                         <button class=\"edit-btn\" (click)=\"editColNameFn('colAName')\" type=\"button\"\n                                            mat-icon-button i18n-matTooltip matTooltipPosition=\"below\"\n                                            matTooltip=\"Edit column name\" i18n-aria-label aria-label=\"edit column name\">\n                                            <mat-icon>edit</mat-icon>\n                                        </button>\n                                    </mat-card-title>-->\n                  <!-- <div class=\"text-center\" *ngIf=\"editColName ==='colAName'\">\n                                        <mat-form-field class=\"w-8/12 myfield\" appearance=\"outline\">\n                                            <input formControlName='colAName' type=\"text\" #colAName matInput\n                                                i18n-aria-label aria-label=\"enter column name\" (blur)=\"saveChanges()\">\n                                            <mat-error *ngIf=\"!quizForm.controls['colAName'].value\">\n                                                <p i18n>Column name should be</p>\n                                                {{matchOptions.colNameMinLength}}-{{matchOptions.colNameMaxLength}}\n                                                <p i18n>characters</p>\n                                            </mat-error>\n                                        </mat-form-field>\n\n                                    </div> -->\n                </div>\n\n                <div class=\"cursor-auto flex-grow pr-1 minorChange WidthForsmall paddforInput\">\n                  <mat-form-field class=\"myfield w-full\" appearance=\"outline\">\n                    <input matInput formControlName=\"text\" i18n-aria-label aria-label=\"enter text\" />\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"flex items-center minorChange\">\n                <div class=\"w-1/3\" *ngIf=\"isSmallScreenMobile\">\n                  <h2 class=\"mat-h2 text-center pt-3 ws-mat-primary-text\" i18n>COL-B</h2>\n                  <!--<mat-card-title class=\" text-center pl-2 p-1 padding-title\"\n                                        *ngIf=\"editColName !=='colBName'\">\n                                        <span class=\"break-words ws-mat-primary-text\">\n                                            {{quizForm.controls['colBName'].value}} </span>\n                                         <button class=\"edit-btn\" (click)=\"editColNameFn('colBName')\" type=\"button\"\n                                            mat-icon-button i18n-matTooltip matTooltipPosition=\"below\"\n                                            matTooltip=\"Edit column name\" i18n-aria-label aria-label=\"edit column name\">\n                                            <mat-icon>edit</mat-icon>\n                                        </button>\n                                    </mat-card-title>-->\n                  <!-- <div class=\"text-center \" *ngIf=\"editColName ==='colBName'\">\n                                        <mat-form-field class=\"w-8/12 myfield\" appearance=\"outline\">\n                                            <input formControlName=\"colBName\" type=\"text\" #colBName matInput\n                                                i18n-aria-label aria-label=\"enter column name\" (blur)=\"saveChanges()\">\n                                            <mat-error *ngIf=\"!quizForm.controls['colBName'].value\">\n                                                <p i18n>Column name should be</p>\n                                                {{matchOptions.colNameMinLength}}-{{matchOptions.colNameMaxLength}}\n                                                <p i18n>characters</p>\n                                            </mat-error>\n                                        </mat-form-field>\n                                    </div> -->\n                </div>\n\n                <div class=\"cursor-auto pr-1 flex-grow minorChange WidthForsmall paddforInput\">\n                  <mat-form-field class=\"myfield w-full\" appearance=\"outline\">\n                    <input matInput formControlName=\"match\" i18n-aria-label aria-label=\"enter match\" />\n                  </mat-form-field>\n                </div>\n              </div>\n            </div>\n            <div class=\"flex justify-start forhint\" *ngIf=\"showHint\">\n              <div class=\"pl-3 hint-button justify-center item-spacing\">\n                <button class=\"inline-flex py-2 px-4 items-center hint remove-padding\" (click)=\"openCkEditor(i)\" mat-icon-button i18n-aria-label\n                  aria-label=\"edit hint\" type=\"button\">\n                  <mat-icon class=\"fill-current w-4 h-4 mr-2\">info</mat-icon>\n                  <span class=\"padding-1\" i18n>Hint</span>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </mat-card>\n    </div>\n  </div>\n</form>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/multiple-choice-question/multiple-choice-question.component.html":
  /*!*************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/multiple-choice-question/multiple-choice-question.component.html ***!
    \*************************************************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizComponentsMultipleChoiceQuestionMultipleChoiceQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<form [formGroup]=\"quizForm\" *ngIf=\"contentLoaded\">\n  <!-- <div class=\"header1\">\n    <mat-card class=\"customheader padding flex border-b-4 flex-row items-center\">\n      <div class=\"px-4 sm:px-0 w-3/12\">\n        <mat-card-title>\n          <p class=\"ws-mat-primary-text text-left titlePadding\" i18n>Answer</p>\n        </mat-card-title>\n      </div>\n      <div class=\"w-4/12 item-spacing\">\n        <mat-card-title class=\"ws-mat-primary-text text-center\" i18n>Option</mat-card-title>\n      </div>\n      <div class=\"absolute right-0 top-0 p-3 sm:pr-6 xl:pr-8 content-center pt-4\">\n        <button\n          class=\"small-button padding-remove ws-mat-primary-background mat-elevation-z6 margin-left-s\"\n          (click)=\"addOption()\"\n          type=\"button\"\n          mat-icon-button\n          i18n-matTooltip\n          matTooltipPosition=\"below\"\n          matTooltip=\"Add option\"\n          i18n-aria-label\n          aria-label=\"add option\"\n        >\n          <mat-icon class=\"text-white small-icon\">add</mat-icon>\n        </button>\n      </div>\n    </mat-card>\n  </div> -->\n  <div class=\"flex addpadding items-center margin-top-l margin-bottom-m\">\n    <p class=\"mat-h3 font-weight-bold margin-remove\" i18n>Add Options</p>\n    <button class=\"mat-elevation-z5 small-button padding-remove ws-mat-primary-background margin-left-s\" (click)=\"addOption()\"\n      type=\"button\" mat-icon-button i18n-matTooltip matTooltipPosition=\"below\" matTooltip=\"Add option\" i18n-aria-label aria-label=\"add option\">\n      <mat-icon class=\"text-white small-icon\">add</mat-icon>\n    </button>\n  </div>\n  <div *ngIf=\"!isSmallScreen\" class=\"optionlist\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\n    <mat-card *ngFor=\"let option of selectedQuiz.options; let i = index\" class=\"custom w-full\" cdkDrag cdkDragBoundary=\".optionlist\"\n      formArrayName=\"options\">\n      <div class=\"custom-placeholder\" *cdkDragPlaceholder></div>\n      <div class=\"flex w-full justify-between\" [formGroupName]=\"i\">\n        <div class=\"flex romanN text-center items-center pl-4\">{{ i + 1 | romanconvert }}.</div>\n        <div class=\"flex items-center item1 px-3\">\n          <div class=\"w-2/5\"></div>\n          <mat-checkbox formControlName=\"isCorrect\" (change)=\"onSelected($event)\" i18n-matTooltip matTooltipPosition=\"below\" matTooltip=\"Check for correct answer\"\n            i18n-aria-label aria-label=\"Check for correct answer\"></mat-checkbox>\n        </div>\n        <div class=\"cursor-auto item2 item-spacing\">\n          <!-- fxFlex.lt-sm=\"53%\" fxFlex=\"63%\" fxFlex.lt-md=\"58%\" -->\n          <mat-form-field class=\"w-full myfield\" appearance=\"outline\">\n            <input matInput formControlName=\"text\" i18n-aria-label aria-label=\"Enter answer\" />\n          </mat-form-field>\n        </div>\n        <div class=\"flex hint-button justify-center item-spacing\" *ngIf=\"showHint\">\n          <button class=\"inline-flex remove-padding items-center\" (click)=\"openCkEditor(i)\" i18n-aria-label aria-label=\"edit hint\"\n            type=\"button\" mat-button>\n            <mat-icon class=\"fill-current w-4 h-4 mr-2\">info</mat-icon>\n            <span class=\"padding-1\" i18n>Hint</span>\n          </button>\n        </div>\n        <div class=\"width-4 ml-4 justify-center flex items-center item-spacing\">\n          <button mat-icon-button (click)=\"removeOption(i)\" i18n-aria-label aria-label=\"delete option\" i18n-matTooltip matTooltipPosition=\"below\"\n            matTooltip=\"Delete this option\" type=\"button\">\n            <mat-icon>delete</mat-icon>\n          </button>\n        </div>\n      </div>\n    </mat-card>\n  </div>\n  <div *ngIf=\"isSmallScreen\">\n    <div cdkDropList (cdkDropListDropped)=\"drop($event)\">\n      <mat-card *ngFor=\"let option of selectedQuiz.options; let i = index\" class=\"matheight custom\" cdkDrag cdkDragBoundary=\".optionlist\"\n        formArrayName=\"options\">\n        <div class=\"custom-placeholder\" *cdkDragPlaceholder></div>\n        <div class=\"w-full\" [formGroupName]=\"i\">\n          <div class=\"flex-col\">\n            <div class=\"flex justify-between\">\n              <div class=\"flex romanN text-center items-center pl-4\">\n                {{ i + 1 | romanconvert }}.\n              </div>\n              <div class=\"flex-e items-center pr-1\">\n                <button mat-icon-button (click)=\"removeOption(i)\" [disabled]=\"selectedQuiz.options.length === mcqOptions.minOptions\" i18n-aria-label\n                  aria-label=\"delete option\" [ngClass]=\"{\n                    'cursor-not-allowed': selectedQuiz.options.length === mcqOptions.minOptions\n                  }\" i18n-matTooltip matTooltipPosition=\"below\" matTooltip=\"Delete this option\" type=\"button\">\n                  <mat-icon>delete</mat-icon>\n                </button>\n              </div>\n            </div>\n            <div class=\"flex-col w-full\">\n              <div class=\"cursor-auto item-spacing\">\n                <!-- fxFlex.lt-sm=\"53%\" fxFlex=\"63%\" fxFlex.lt-md=\"58%\" -->\n                <mat-form-field class=\"w-full myfield\" appearance=\"outline\">\n                  <input matInput formControlName=\"text\" i18n-aria-label aria-label=\"Enter answer\" />\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"flex justify-between forHeight\">\n              <div class=\"flex items-center item1 px-3\">\n                <div class=\"w-2/5\"></div>\n                <mat-checkbox formControlName=\"isCorrect\" (change)=\"onSelected($event)\" i18n-matTooltip matTooltipPosition=\"below\" matTooltip=\"Check for correct answer\"\n                  i18n-aria-label aria-label=\"Check for correct answer\">\n                  <span i18n>is correct</span>\n                </mat-checkbox>\n              </div>\n              <div class=\"flex hint-button justify-center item-spacing pr-1\" *ngIf=\"showHint\">\n                <button class=\"inline-flex remove-padding items-center\" (click)=\"openCkEditor(i)\" i18n-aria-label aria-label=\"edit hint\"\n                  type=\"button\" mat-icon-button>\n                  <mat-icon class=\"fill-current remove-padding w-4 h-4 mr-2\">info</mat-icon>\n                  <span class=\"padding-1\" i18n>Hint</span>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </mat-card>\n    </div>\n  </div>\n</form>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/question-editor/question-editor.component.html":
  /*!*******************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/question-editor/question-editor.component.html ***!
    \*******************************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizComponentsQuestionEditorQuestionEditorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ng-container *ngIf=\"selectedQuiz\">\n  <!-- <mat-card-title class=\"text-xl ws-mat-primary-text p-3 pl-2\" i18n>Details</mat-card-title> -->\n  <div class=\"headerpadding margin-top-l mat-h3 font-weight-bold\" i18n>Problem Statement</div>\n  <ng-container\n    *ngIf=\"\n      selectedQuiz.questionType === 'mtf' ||\n      selectedQuiz.questionType === 'mcq-mca' ||\n      selectedQuiz.questionType === 'mcq-sca' ||\n      selectedQuiz.questionType === 'fitb'\n    \"\n  >\n    <div class=\"editorpadding\">\n      <ws-auth-plain-ckeditor\n        [content]=\"quizStoreSvc.getQuiz(quizIndex)?.question || ''\"\n        (value)=\"updateSelectedQuiz($event, 'question')\"\n        [id]=\"currentId\"\n      ></ws-auth-plain-ckeditor>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"selectedQuiz.questionType === 'mtf'\">\n    <ws-auth-match-the-following\n      [currentId]=\"currentId\"\n      [showHint]=\"showHint\"\n      [submitPressed]=\"submitPressed\"\n      (value)=\"updateSelectedQuiz($event)\"\n    ></ws-auth-match-the-following>\n  </ng-container>\n\n  <ng-container\n    *ngIf=\"selectedQuiz.questionType === 'mcq-mca' || selectedQuiz.questionType === 'mcq-sca'\"\n  >\n    <ws-auth-multiple-choice-question\n      [currentId]=\"currentId\"\n      [showHint]=\"showHint\"\n      [submitPressed]=\"submitPressed\"\n      (value)=\"updateSelectedQuiz($event)\"\n    ></ws-auth-multiple-choice-question>\n  </ng-container>\n\n  <ng-container *ngIf=\"selectedQuiz.questionType === 'fitb'\">\n    <ws-auth-fill-ups-editor\n      [currentId]=\"currentId\"\n      [showHint]=\"showHint\"\n      [submitPressed]=\"submitPressed\"\n      (value)=\"updateSelectedQuiz($event)\"\n    ></ws-auth-fill-ups-editor>\n  </ng-container>\n</ng-container>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/quiz/quiz.component.html":
  /*!*********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/quiz/quiz.component.html ***!
    \*********************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizComponentsQuizQuizComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"margin-top-xl margin-l-l margin-r-l\" [hidden]=\"previewMode\">\n  <!-- <div class=\"flex margin-left-xl flex-middle margin-bottom-xl flex-wrap\">\n    <div class=\"flex flex-middle\">\n      <p class=\"ws-mat-primary-text font-weight-bold title margin-right-xs\" i18n>CONTENT CREATION</p>\n      <mat-icon class=\" ws-mat-primary-text margin-bottom-xxs\">create</mat-icon>\n\n    </div>\n    <div class=\"margin-left grid\" *ngIf=\"currentStep >= 0\">\n      <div class=\"stepper-grid\" [ngClass]=\"{ 'cursor-disable': true }\">\n        <div class=\"ws-mat-primary-background-op30 stepper-container text-white cursor-pointer\" [ngClass]=\"{\n            'ws-mat-primary-background cursor-disable': currentStep >= 1\n          }\">\n          1\n        </div>\n        <p class=\"margin-left-xs margin-remove-bottom font-weight-500 op30 cursor-pointer\" [ngClass]=\"{ 'ws-mat-primary-text opacity-100': currentStep >= 1 }\"\n          i18n>\n          Choose Type\n        </p>\n        <span class=\"border border-solid text-gray-500 mx-3\" [ngClass]=\"{ 'ws-mat-primary-text': currentStep >= 2 }\"></span>\n      </div>\n      <div class=\"stepper-grid\">\n        <div class=\"ws-mat-primary-background-op30 stepper-container text-white cursor-pointer\" [ngClass]=\"{ 'ws-mat-primary-background': currentStep >= 2 }\"\n          (click)=\"customStepper(2)\" i18n>\n          2\n        </div>\n        <p class=\"margin-left-xs margin-remove-bottom font-weight-500 op30 cursor-pointer\" [ngClass]=\"{\n            'ws-mat-primary-text opacity-100': currentStep >= 2,\n            'ws-mat-primary-border-bottom-bolder': currentStep === 2\n          }\" (click)=\"customStepper(2)\" i18n>\n          Content\n        </p>\n        <span class=\"border border-solid text-gray-500 mx-3\" [ngClass]=\"{ 'ws-mat-primary-text': currentStep === 3 }\"></span>\n      </div>\n      <div class=\"flex flex-middle\">\n        <div class=\"ws-mat-primary-background-op30 stepper-container text-white cursor-pointer\" [ngClass]=\"{ 'ws-mat-primary-background': currentStep === 3 }\"\n          (click)=\"customStepper(3)\" i18n>\n          3\n        </div>\n        <p class=\"margin-left-xs margin-remove-bottom font-weight-500 op30 cursor-pointer\" [ngClass]=\"{\n            'ws-mat-primary-text opacity-100': currentStep === 3,\n            'ws-mat-primary-border-bottom-bolder': currentStep === 3\n          }\" (click)=\"customStepper(3)\" i18n>\n          Details\n        </p>\n      </div>\n    </div>\n  </div> -->\n\n  <div class=\" margin-left-xl margin-top-s margin-bottom-xs hidden\">\n    <div class=\"flex flex-middle\">\n      <p class=\"margin-remove-bottom mat-h3 font-weight-bold\" i18n>Language</p>\n    </div>\n    <div class=\"flex flex-middle\">\n      <p class=\"p-2\" *ngFor=\"let content of allContents\" [ngClass]=\"{\n         'ws-mat-primary-border-bottom-bolder':\n          currentId === content.identifier\n        }\" (click)=\"changeContent(content)\">\n        {{ content.locale | uppercase }}\n      </p>\n      <button mat-icon-button class=\" small-button padding-remove ws-mat-primary-background mat-elevation-z6 margin-left-s\" i18n-matTooltip\n        matTooltip=\"Add a language\" aria-label=\"create content in other languages\">\n        <mat-icon class=\"text-white small-icon\" [matMenuTriggerFor]=\"menu\">\n          add</mat-icon>\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item *ngFor=\"let lang of allLanguages\" (click)=\"createInAnotherLanguage(lang.srclang)\">\n          {{ lang.label }}\n        </button>\n      </mat-menu>\n    </div>\n  </div>\n  <div class=\"mat-app-background mb-10\">\n    <div class=\"margin-top-xl margin-right-xl\" *ngIf=\"currentStep === 2\">\n      <ng-container *ngIf=\"contentLoaded\">\n        <div class=\"flex justify-between\">\n          <button (click)=\"sideNavBar.toggle()\"  mat-icon-button>\n            <mat-icon>menu</mat-icon>\n          </button>\n          <!-- <button type=\"button\" (click)=\"showErrorLog()\" mat-icon-button>\n                        <mat-icon>speaker_notes</mat-icon>\n                    </button> -->\n        </div>\n        <mat-sidenav-container autosize=\"true\" class=\"nav-container quiz-list\">\n          <mat-sidenav #sideNavBar class=\"h-full custom-scroll\" [mode]=\"mode$ | async\" [(opened)]=\"sideNavBarOpened\">\n            <ws-auth-question-editor-sidebar [showContent]=\"showContent\" [type]=\"'assessment'\" [(data)]=\"questionsArr\" [canEdit]=\"canEditJson\"></ws-auth-question-editor-sidebar>\n          </mat-sidenav>\n          <mat-sidenav-content>\n            <div *ngIf=\"questionsArr.length\">\n              <!-- <mat-card-title class=\"w-full h-6 text-center ws-mat-primary-background text-white h-12 rounded flex items-center justify-center\"\n                                *ngIf=\"selectedQuizIndex !== undefined && canEditJson\">\n                                <span i18n>Quiz-</span>{{selectedQuizIndex + 1}}\n                            </mat-card-title> -->\n              <ws-auth-question-editor *ngIf=\"questionsArr.length && canEditJson\" [submitPressed]=\"canValidate\">\n              </ws-auth-question-editor>\n              <div class=\"flex justify-between px-1 pt-6 pb-6\" *ngIf=\"questionsArr && canEditJson\">\n                <button class=\" ws-mat-primary-background mat-elevation-z6 margin-left-s\" (click)=\"changeQuiz(-1)\" [disabled]=\"selectedQuizIndex === 0\"\n                  [ngClass]=\"{'opacity-25 cursor-disable':selectedQuizIndex === (0)}\" mat-button i18n-aria-label aria-label=\"navigate to next quiz\">\n                  <span class=\"text-white small-operators\" i18n>Previous</span>\n                </button>\n                <button class=\" ws-mat-primary-background mat-elevation-z6 margin-left-s\" [disabled]=\"selectedQuizIndex === (questionsArr.length-1)\"\n                  mat-button [ngClass]=\"{'opacity-25 cursor-disable':selectedQuizIndex === (questionsArr.length-1)}\" (click)=\"changeQuiz(1)\"\n                  i18n-aria-label aria-label=\"navigate to previous quiz\">\n                  <span class=\"text-white small-operators\" i18n>Next</span>\n                </button>\n              </div>\n            </div>\n            <div class=\"flex items-center justify-center h-64\" *ngIf=\"!questionsArr.length || !canEditJson\">\n              <div class=\"p-1\">\n                <span i18n *ngIf=\"!questionsArr.length && canEditJson\">No quiz found, Kindly add</span>\n                <span i18n *ngIf=\"!canEditJson\">Reviewer or Publisher cannot add or edit Quiz</span>\n                <!-- <mat-icon class=\"align-middle\">error</mat-icon> -->\n              </div>\n            </div>\n          </mat-sidenav-content>\n        </mat-sidenav-container>\n      </ng-container>\n    </div>\n    <div class=\"margin-top-xl margin-left-xl margin-right-xl\" *ngIf=\"currentStep === 3\">\n      <ws-auth-edit-meta [nextAction]=\"'publish'\" [isSubmitPressed]=\"submitPressed\" (data)=\"action($event)\">\n      </ws-auth-edit-meta>\n    </div>\n  </div>\n  <button (click)=\"action('save')\"  mat-menu-item>\n\n    <ng-container i18n>Save</ng-container>\n  </button>\n<!--\n  <button (click)=\"action('save')\"  mat-menu-item>\n    <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Save content\">\n      Save</mat-icon>\n    <ng-container i18n>Save</ng-container>\n  </button> -->\n\n  <!-- <div class=\"flex justify-end px-1 pt-6 pb-6\">\n  <button class=\" ws-mat-primary-background mat-elevation-z6 margin-left-s\"\n  mat-button  (click)=\"action('save')\"\n  i18n-aria-label aria-label=\"save\">\n  <span class=\"text-white small-operators\" i18n>Save</span>\n</button>\n</div> -->\n\n  <!-- <div class=\"buttons margin-top-xl\">\n    <div class=\"button-grid margin-right-xxs cursor-pointer\" (click)=\"toggleSettingButtons()\">\n      <button mat-icon-button class=\"padding-remove ws-mat-primary-background mat-elevation-z6\">\n        <mat-icon class=\"text-white\" *ngIf=\"showSettingButtons\" i18n-matTooltip matTooltip=\"Close\">close</mat-icon>\n        <mat-icon class=\"text-white\" *ngIf=\"!showSettingButtons\">more_vert</mat-icon>\n      </button>\n      <p class=\"mat-h5 margin-remove button-text padding-remove-top\" *ngIf=\"showSettingButtons\" i18n-matTooltip matTooltip=\"Close\">\n        Close\n      </p>\n    </div>\n    <ng-container *ngIf=\"showSettingButtons\">\n      <div class=\"button-grid cursor-pointer\" (click)=\"action('preview')\">\n        <button mat-icon-button class=\"mat-elevation-z5 small-button padding-remove margin-top-l\" i18n-matTooltip matTooltip=\"Preview\">\n          <mat-icon class=\"text-white small-icon ws-mat-primary-text\">remove_red_eye</mat-icon>\n        </button>\n        <p class=\"mat-h5 margin-remove button-text\" i18n-matTooltip matTooltip=\"preview\" i18n>\n          Preview\n        </p>\n      </div>\n      <div class=\"button-grid cursor-pointer\" (click)=\"action('save')\">\n        <button mat-icon-button class=\"mat-elevation-z5 small-button padding-remove margin-top-m\" i18n-matTooltip matTooltip=\"Save\">\n          <mat-icon class=\"text-white small-icon ws-mat-primary-text\">save</mat-icon>\n        </button>\n        <p class=\"mat-h5 margin-remove button-text\" i18n-matTooltip matTooltip=\"save\" i18n>\n          Save\n        </p>\n      </div>\n      <div class=\"button-grid cursor-pointer\" (click)=\"action('push'); submitPressed = true\">\n        <button mat-icon-button class=\" mat-elevation-z5 small-button padding-remove  margin-top-m\" i18n-matTooltip matTooltip=\"Publish\">\n          <mat-icon class=\"text-white small-icon ws-mat-primary-text\">rate_review</mat-icon>\n        </button>\n        <p class=\"mat-h5 margin-remove button-text\" *ngIf=\"getAction() === 'sendForReview'\" i18n-matTooltip matTooltip=\"Send For Review\"\n          i18n>\n          Send For Review\n        </p>\n        <p class=\"mat-h5 margin-remove button-text\" *ngIf=\"getAction() === 'review'\" i18n-matTooltip matTooltip=\"Review\" i18n>\n          Review\n        </p>\n        <p class=\"mat-h5 margin-remove button-text\" *ngIf=\"getAction() === 'publish'\" i18n-matTooltip matTooltip=\"publish\" i18n>\n          Publish\n        </p>\n\n      </div>\n      <div *ngIf=\"canDelete()\" class=\"button-grid cursor-pointer\" (click)=\"action('delete')\">\n        <button mat-icon-button class=\"mat-elevation-z5 small-button padding-remove margin-top-m\" i18n-matTooltip matTooltip=\"Delete\">\n          <mat-icon class=\"text-white small-icon ws-mat-primary-text\">delete</mat-icon>\n        </button>\n        <p class=\"mat-h5 margin-remove button-text\" i18n-matTooltip matTooltip=\"Delete\" i18n>\n          Delete\n        </p>\n      </div>\n      <div class=\"button-grid cursor-pointer\" (click)=\"fullScreenToggle()\">\n                <button mat-icon-button class=\" mat-elevation-z5 small-button padding-remove  margin-top-m\" i18n-matTooltip matTooltip=\"Fullscreen\">\n                    <mat-icon class=\"text-white small-icon ws-mat-primary-text\">fullscreen</mat-icon>\n                </button>\n                <p class=\"mat-h5 margin-remove button-text\" i18n-matTooltip matTooltip=\"fullscreen\" i18n>\n                    Fullscreen\n                </p>\n            </div>\n    </ng-container>\n  </div>\n</div> -->\n\n<div *ngIf=\"previewMode\">\n  <mat-icon (click)=\"closePreview()\" class=\"close-preview\" matTooltip=\"Back\" i18n-matTooltip=\"Back button to go to previous page\">\n    arrow_back</mat-icon>\n  <ws-auth-viewer [identifier]=\"currentId\" [mimeTypeRoute]=\"mimeTypeRoute\"></ws-auth-viewer>\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/components/open-plain-ck-editor/open-plain-ck-editor.component.html":
  /*!************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/components/open-plain-ck-editor/open-plain-ck-editor.component.html ***!
    \************************************************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizSharedComponentsOpenPlainCkEditorOpenPlainCkEditorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div>\n  <div mat-dialog-title class=\"flex flex-between\">\n    <h1 class=\"ws-mat-primary-text\" *ngIf=\"data.type==='HINT_EDITOR'\">\n      <span i18n=\"edit hint! edit hint for selected option\">Hint for option-</span>{{data.index}}\n    </h1>\n    <button mat-dialog-close mat-icon-button class=\"float-right cursor-pointer\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </div>\n  <div mat-dialog-content>\n    <ng-container *ngIf=\"data.content !== undefined\">\n      <ws-auth-plain-ckeditor [content]=\"data.content\" (value)=\"result = $event\" [id]=\"data.identifier\">\n      </ws-auth-plain-ckeditor>\n    </ng-container>\n  </div>\n  <div mat-dialog-actions class=\"flex-row-reverse\">\n    <button class=\"btnpdg\" i18n mat-raised-button color=\"primary\" [mat-dialog-close]=\"result\">Update</button>\n    <button class=\"btnpdg\" i18n mat-raised-button [mat-dialog-close]=\"undefined\" cdkFocusInitial>Cancel</button>\n  </div>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/components/question-editor-sidenav/question-editor-sidenav.component.html":
  /*!******************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/components/question-editor-sidenav/question-editor-sidenav.component.html ***!
    \******************************************************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizSharedComponentsQuestionEditorSidenavQuestionEditorSidenavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"quiz-cards\" *ngIf=\"mediumScreen || showContent\">\n  <div class=\"flex flex-col pl-1 mat-app-background z-50 sticky top-0\">\n    <div class=\"pb-1\" *ngIf=\"type === 'assessment'\">\n      <div class=\"flex pt-4 pb-3 items-center justify-center\">\n        <mat-card-title class=\"pt-2 text-xl flex justify-center ws-mat-primary-text w-full\"\n          *ngIf=\"type === 'assessment'\" i18n>\n          Questions</mat-card-title>\n        <button *ngIf=\"!mediumScreen\" class=\"float-right\" (click)=\"showContent = !showContent\" mat-icon-button\n          i18n-matTooltip matTooltipPosition=\"right\" matTooltip=\"Minimize the side panel\"\n          aria-label=\"Minimize side panel\" i18n-aria-label>\n          <mat-icon>keyboard_arrow_left</mat-icon>\n        </button>\n      </div>\n      <div class=\"flex pl-3\">\n        <mat-form-field class=\"w-8/12 myfield\" appearance=\"outline\" i18n-aria-label aria-label=\"Select question type\">\n          <mat-select [(ngModel)]=\"questionType\" placeholder=\"Question Type\">\n            <mat-option value=\"mcq-sca\" i18n=\"MCQ| acronym for multiple choice question\">MCQ</mat-option>\n\n            <mat-option value=\"fitb\" i18n>Fill in the Blanks</mat-option>\n            <mat-option value=\"mtf\" i18n>Match the Following</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <button (click)=\"addEntity()\"\n          class=\"padding-remove ws-mat-primary-background mat-elevation-z6 margin-left-s self-center\" i18n-aria-label\n          i18n-matTooltip matTooltip=\"Add new quiz\" mat-icon-button\n          [ngClass]=\"{ 'opacity-25 cursor-disable': !canEdit }\" aria-label=\"add new quiz\" [disabled]=\"!canEdit\">\n          <mat-icon class=\"text-white\"> add</mat-icon>\n        </button>\n      </div>\n    </div>\n    <div class=\"pb-1\" *ngIf=\"type === 'web-module'\">\n      <div>\n        <button *ngIf=\"!mediumScreen\" class=\"float-right\" (click)=\"showContent = !showContent\" mat-icon-button\n          i18n-matTooltip matTooltipPosition=\"right\" matTooltip=\"Minimize the side panel\"\n          aria-label=\"Minimize side panel\" i18n-aria-label>\n          <mat-icon>keyboard_arrow_left</mat-icon>\n        </button>\n      </div>\n      <mat-card-title class=\"text-xl flex justify-center w-10/12 ws-mat-primary-text w-full\" i18n>Pages\n      </mat-card-title>\n      <button (click)=\"addEntity()\"\n        class=\"padding-remove ws-mat-primary-background mat-elevation-z6 margin-left-s self-center\"\n        [ngClass]=\"{ 'opacity-25 cursor-disable': !canEdit }\" [disabled]=\"!canEdit\" i18n-aria-label\n        aria-label=\"add new page\" i18n-matTooltip matTooltip=\"Add new page\" mat-icon-button>\n        <mat-icon class=\"text-white\"> add</mat-icon>\n      </button>\n    </div>\n  </div>\n  <div class=\"pt-2 px-3\">\n    <div class=\"questionlist m-1 new-display\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\n      <div class=\"px-3 custom-placeholder border border-solid\" *cdkDragPlaceholder></div>\n      <mat-card id=\"{{ 'quiz-' + i }}\" class=\"custom w-full mt-2\" cdkDrag cdkDragBoundary=\" .questionlist\"\n        (click)=\"selectEntity(i)\" *ngFor=\"let quesObj of data; let i = index\" [ngClass]=\"{\n          'ws-mat-primary-background mat-elevation-z6 text-white':\n            i === selectedQuizIndex && !data[i].isInValid,\n          invalidQues: data[i].isInValid\n        }\">\n        <div class=\"w-full flex items-center justify-between\" *ngIf=\"type === 'assessment'\">\n          <span class=\"px-2\">\n            <span i18n>Quiz</span>-{{ i + 1 }} :\n            <span i18n=\"MCQ| acronym for multiple choice question\"\n              *ngIf=\"quesObj.questionType === 'mcq-mca' || quesObj.questionType === 'mcq-sca'\">MCQ</span>\n            <span i18n=\"FITB| acronym for fill in the blanks\" *ngIf=\"quesObj.questionType === 'fitb'\">FITB</span>\n            <span i18n=\"MTF| acronym for match the Following\" *ngIf=\"quesObj.questionType === 'mtf'\">MTF</span>\n          </span>\n          <button class=\"float-right\" (click)=\"removeEntity(i, $event)\" mat-button\n            [ngClass]=\"{ 'opacity-25 cursor-disable': !canEdit }\" [disabled]=\"!canEdit\" i18n-matTooltip\n            matTooltip=\"Delete this quiz\" aria-label=\"delete this quiz\" i18n-aria-label>\n            <mat-icon>delete</mat-icon>\n          </button>\n        </div>\n        <div class=\"w-full flex items-center justify-between\" *ngIf=\"type === 'web-module'\">\n          <span>\n            <span i18n>Page</span>-{{ i + 1 }} </span>\n          <button mat-button class=\"float-right\" (click)=\"removeEntity(i, $event)\"\n            [ngClass]=\"{ 'opacity-25 cursor-disable': !canEdit }\" [disabled]=\"!canEdit\" i18n-matTooltip\n            matTooltip=\"Delete this Page\" aria-label=\"delete this page\" i18n-aria-label>\n            <mat-icon>delete</mat-icon>\n          </button>\n        </div>\n      </mat-card>\n    </div>\n  </div>\n</div>\n<div class=\"flex flex-col w-full pt-4\" *ngIf=\"!mediumScreen && !showContent\">\n  <div class=\"w-full\">\n    <button class=\"float-right\" (click)=\"showContent = !showContent\" i18n-matTooltip\n      matTooltip=\"Maximize the side panel\" matTooltipPosition=\"right\" mat-icon-button\n      aria-label=\"Maximize the side panel\">\n      <mat-icon>keyboard_arrow_right</mat-icon>\n    </button>\n  </div>\n  <button class=\"m-1 bordered\" (click)=\"selectEntity(i, $event)\" id=\"{{ 'quiz-' + i }}\" [ngClass]=\"{\n      'ws-mat-primary-background mat-elevation-z6': i === selectedQuizIndex && !data[i].isInValid,\n      'invalidQues ': data[i].isInValid\n    }\" *ngFor=\"let quesObj of data; let i = index\" mat-icon-button>\n    {{ i + 1 }}\n  </button>\n</div>\n";

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/fill-ups-editor/fill-ups-editor.component.scss":
  /*!*****************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/fill-ups-editor/fill-ups-editor.component.scss ***!
    \*****************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizComponentsFillUpsEditorFillUpsEditorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".romanN {\n  min-width: 25px;\n  max-width: 25px;\n}\n\n.titlePadding {\n  padding-left: 2.75rem;\n  padding-right: 0rem;\n}\n\n@media only screen and (min-width: 400px) {\n  .titlePadding {\n    padding-left: 0rem;\n    padding-right: 8.25rem;\n  }\n}\n\n.customheader.mat-card {\n  margin: 0;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.padding1 {\n  padding-left: 2.5rem;\n}\n\n.padding {\n  padding: 22px;\n}\n\n.header1 {\n  padding-left: 20px;\n}\n\n.custom {\n  margin-right: 10px;\n  margin-left: 10px;\n  margin-top: 6px;\n  margin-bottom: 6px;\n  display: flex;\n  box-sizing: border-box;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n  padding: 5px;\n}\n\n@media only screen and (max-width: 600px) {\n  .custom {\n    margin-left: 32px;\n    margin-right: 1px;\n  }\n}\n\n@media only screen and (min-width: 601px) and (max-width: 960px) {\n  .custom {\n    margin-right: 0px;\n    margin-left: 0px;\n    margin-top: 6px;\n    margin-bottom: 6px;\n  }\n}\n\n.small-icon {\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n  height: auto;\n  width: auto;\n  transition: 0.5s;\n}\n\n.small-button {\n  height: 32px;\n  width: 32px;\n  transition: 0.5s;\n  margin-right: 4px;\n}\n\n.custom-placeholder {\n  background: rebeccapurple;\n  border: dotted 3px #999;\n  min-height: 85px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.optionlist {\n  padding: 0 1rem;\n}\n\n@media only screen and (max-width: 960px) {\n  .optionlist {\n    padding-left: 32px;\n    padding-right: 1px;\n  }\n}\n\n.bordered {\n  border: 2px solid #cecece;\n}\n\n.padding-1 {\n  padding: 1px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border: 2px solid #cecece;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.optionlist.cdk-drop-list-dragging .custom:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n::ng-deep .myfield .mat-form-field-wrapper {\n  padding: 0px !important;\n}\n\n.mat-button {\n  padding: 14px !important;\n}\n\n.hint-button {\n  width: 15%;\n  min-width: 5rem;\n}\n\n.edit-btn {\n  position: relative;\n  top: -4px;\n}\n\n.item1 {\n  max-width: 90%;\n  flex: 1 1 100%;\n}\n\n.item-spacing {\n  margin-right: 15px;\n  margin-left: 15px;\n}\n\n@media only screen and (max-width: 599px) {\n  .item-spacing {\n    margin-right: 5px;\n    margin-left: 5px;\n  }\n}\n\n.width-4 {\n  min-width: 4rem;\n}\n\n.forHeight {\n  height: 45px;\n}\n\n.addpadding {\n  padding-left: 0.75rem;\n}\n\n@media only screen and (max-width: 960px) {\n  .addpadding {\n    padding-left: 32px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL3F1aXovY29tcG9uZW50cy9maWxsLXVwcy1lZGl0b3IvZmlsbC11cHMtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hdXRob3Ivc3JjL2xpYi9yb3V0aW5nL21vZHVsZXMvZWRpdG9yL3JvdXRpbmcvbW9kdWxlcy9xdWl6L2NvbXBvbmVudHMvZmlsbC11cHMtZWRpdG9yL2ZpbGwtdXBzLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0U7RUFKRjtJQUtJLGtCQUFBO0lBQ0Esc0JBQUE7RUNFRjtBQUNGOztBRENBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURBQTtFQUNFLG9CQUFBO0FDR0Y7O0FEQUE7RUFDRSxhQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxZQUFBO0FDSUY7O0FESEU7RUFURjtJQVVJLGlCQUFBO0lBQ0EsaUJBQUE7RUNNRjtBQUNGOztBRExFO0VBYkY7SUFjSSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VDUUY7QUFDRjs7QURMQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNRRjs7QURMQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1FGOztBRExBO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0RBQUE7QUNRRjs7QURMQTtFQUNFLGVBQUE7QUNRRjs7QURQRTtFQUZGO0lBR0ksa0JBQUE7SUFDQSxrQkFBQTtFQ1VGO0FBQ0Y7O0FEUEE7RUFDRSx5QkFBQTtBQ1VGOztBRFBBO0VBQ0UsWUFBQTtBQ1VGOztBRFBBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUNVRjs7QUROQTtFQUNFLFVBQUE7QUNTRjs7QUROQTtFQUNFLHNEQUFBO0FDU0Y7O0FETkE7RUFDRSxzREFBQTtBQ1NGOztBRE5BO0VBQ0UsdUJBQUE7QUNTRjs7QUROQTtFQUNFLHdCQUFBO0FDU0Y7O0FETkE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQ1NGOztBRE5BO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDU0Y7O0FETkE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQ1NGOztBRE5BO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ1NGOztBRFJFO0VBSEY7SUFJSSxpQkFBQTtJQUNBLGdCQUFBO0VDV0Y7QUFDRjs7QURSQTtFQUNFLGVBQUE7QUNXRjs7QURUQTtFQUNFLFlBQUE7QUNZRjs7QURUQTtFQUNFLHFCQUFBO0FDWUY7O0FEWEU7RUFGRjtJQUdJLGtCQUFBO0VDY0Y7QUFDRiIsImZpbGUiOiJwcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL3F1aXovY29tcG9uZW50cy9maWxsLXVwcy1lZGl0b3IvZmlsbC11cHMtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvbWFuTiB7XG4gIG1pbi13aWR0aDogMjVweDtcbiAgbWF4LXdpZHRoOiAyNXB4O1xufVxuXG4udGl0bGVQYWRkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAyLjc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwcmVtO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgcGFkZGluZy1yaWdodDogOC4yNXJlbTtcbiAgfVxufVxuXG4uY3VzdG9taGVhZGVyLm1hdC1jYXJkIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLnBhZGRpbmcxIHtcbiAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XG59XG5cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogMjJweDtcbn1cblxuLmhlYWRlcjEge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4uY3VzdG9tIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG4gIHBhZGRpbmc6IDVweDtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMXB4O1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgfVxufVxuXG4uc21hbGwtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnNtYWxsLWJ1dHRvbiB7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4uY3VzdG9tLXBsYWNlaG9sZGVyIHtcbiAgYmFja2dyb3VuZDogcmViZWNjYXB1cnBsZTtcbiAgYm9yZGVyOiBkb3R0ZWQgM3B4ICM5OTk7XG4gIG1pbi1oZWlnaHQ6IDg1cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLm9wdGlvbmxpc3Qge1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gICAgcGFkZGluZy1yaWdodDogMXB4O1xuICB9XG59XG5cbi5ib3JkZXJlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjZWNlY2U7XG59XG5cbi5wYWRkaW5nLTEge1xuICBwYWRkaW5nOiAxcHg7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAycHggc29saWQgI2NlY2VjZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLm9wdGlvbmxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuY3VzdG9tOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG46Om5nLWRlZXAgLm15ZmllbGQgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLm1hdC1idXR0b24ge1xuICBwYWRkaW5nOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oaW50LWJ1dHRvbiB7XG4gIHdpZHRoOiAxNSU7XG4gIG1pbi13aWR0aDogNXJlbTtcbn1cblxuLmVkaXQtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00cHg7XG59XG5cbi5pdGVtMSB7XG4gIG1heC13aWR0aDogOTAlO1xuICBmbGV4OiAxIDEgMTAwJTtcbn1cblxuLml0ZW0tc3BhY2luZyB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG59XG5cbi53aWR0aC00IHtcbiAgbWluLXdpZHRoOiA0cmVtO1xufVxuLmZvckhlaWdodCB7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmFkZHBhZGRpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gIH1cbn1cbiIsIi5yb21hbk4ge1xuICBtaW4td2lkdGg6IDI1cHg7XG4gIG1heC13aWR0aDogMjVweDtcbn1cblxuLnRpdGxlUGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMi43NXJlbTtcbiAgcGFkZGluZy1yaWdodDogMHJlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcbiAgLnRpdGxlUGFkZGluZyB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDguMjVyZW07XG4gIH1cbn1cblxuLmN1c3RvbWhlYWRlci5tYXQtY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLnBhZGRpbmcxIHtcbiAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XG59XG5cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogMjJweDtcbn1cblxuLmhlYWRlcjEge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5jdXN0b20ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBncmFiYmluZztcbiAgcGFkZGluZzogNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY3VzdG9tIHtcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDFweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5jdXN0b20ge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgfVxufVxuXG4uc21hbGwtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnNtYWxsLWJ1dHRvbiB7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4uY3VzdG9tLXBsYWNlaG9sZGVyIHtcbiAgYmFja2dyb3VuZDogcmViZWNjYXB1cnBsZTtcbiAgYm9yZGVyOiBkb3R0ZWQgM3B4ICM5OTk7XG4gIG1pbi1oZWlnaHQ6IDg1cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLm9wdGlvbmxpc3Qge1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5vcHRpb25saXN0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gICAgcGFkZGluZy1yaWdodDogMXB4O1xuICB9XG59XG5cbi5ib3JkZXJlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjZWNlY2U7XG59XG5cbi5wYWRkaW5nLTEge1xuICBwYWRkaW5nOiAxcHg7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAycHggc29saWQgI2NlY2VjZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5vcHRpb25saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmN1c3RvbTpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuOjpuZy1kZWVwIC5teWZpZWxkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZzogMTRweCAhaW1wb3J0YW50O1xufVxuXG4uaGludC1idXR0b24ge1xuICB3aWR0aDogMTUlO1xuICBtaW4td2lkdGg6IDVyZW07XG59XG5cbi5lZGl0LWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNHB4O1xufVxuXG4uaXRlbTEge1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgZmxleDogMSAxIDEwMCU7XG59XG5cbi5pdGVtLXNwYWNpbmcge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAuaXRlbS1zcGFjaW5nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG59XG5cbi53aWR0aC00IHtcbiAgbWluLXdpZHRoOiA0cmVtO1xufVxuXG4uZm9ySGVpZ2h0IHtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uYWRkcGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLmFkZHBhZGRpbmcge1xuICAgIHBhZGRpbmctbGVmdDogMzJweDtcbiAgfVxufSJdfQ== */";

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/fill-ups-editor/fill-ups-editor.component.ts":
  /*!***************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/fill-ups-editor/fill-ups-editor.component.ts ***!
    \***************************************************************************************************************************************/
  /*! exports provided: FillUpsEditorComponent */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizComponentsFillUpsEditorFillUpsEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FillUpsEditorComponent", function () {
      return FillUpsEditorComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/cdk/drag-drop */"./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/cdk/layout */"./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component */"./project/ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */
    var _quiz_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../quiz-class */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/quiz-class.ts");
    /* harmony import */
    var _services_store_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ../../services/store.service */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/services/store.service.ts");
    /* harmony import */
    var _shared_components_open_plain_ck_editor_open_plain_ck_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ../../shared/components/open-plain-ck-editor/open-plain-ck-editor.component */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/components/open-plain-ck-editor/open-plain-ck-editor.component.ts");

    // import { NotificationComponent } from '@ws/author/src/lib/modules/shared/components/notification/notification.component.ts'

    var FillUpsEditorComponent = /*#__PURE__*/function () {
      function FillUpsEditorComponent(formBuilder, dialog, snackBar, quizStoreSvc, breakpointObserver) {
        _classCallCheck(this, FillUpsEditorComponent);
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.quizStoreSvc = quizStoreSvc;
        this.breakpointObserver = breakpointObserver;
        this.submitPressed = false;
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentId = '';
        this.identifier = '';
        this.fillUpsOptions = {};
        this.contentLoaded = false;
        this.smallScreen = this.breakpointObserver.observe('(max-width:600px)').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
          return res.matches;
        }));
        this.isSmallScreen = false;
      }
      _createClass(FillUpsEditorComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.activeIndexSubscription) {
            this.activeIndexSubscription.unsubscribe();
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.submitPressed && this.quizForm) {
            this.assignForm();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;
          this.smallScreen.subscribe(function (v) {
            return _this.isSmallScreen = v;
          });
          this.activeIndexSubscription = this.quizStoreSvc.selectedQuizIndex.subscribe(function (index) {
            _this.contentLoaded = false;
            var val = _this.quizStoreSvc.getQuiz(index);
            _this.selectedIndex = index;
            _this.selectedQuiz = val && val.questionType === 'fitb' ? new _quiz_class__WEBPACK_IMPORTED_MODULE_8__["FillUps"](val) : undefined;
            if (val && val.questionType === 'fitb') {
              _this.setUp();
              _this.contentLoaded = true;
            }
          });
        }
      }, {
        key: "openCkEditor",
        value: function openCkEditor(index) {
          var _this2 = this;
          var hint = (this.quizForm.controls.options.at(index).get('hint') || /*{}*/null).value || '';
          var dialogRef = this.dialog.open(_shared_components_open_plain_ck_editor_open_plain_ck_editor_component__WEBPACK_IMPORTED_MODULE_10__["OpenPlainCkEditorComponent"], {
            width: '800px',
            data: {
              content: hint,
              identifier: this.currentId,
              type: 'HINT_EDITOR',
              index: index + 1
            }
          });
          dialogRef.afterClosed().subscribe(function (res) {
            if (res !== undefined) {
              var optionsArr = _this2.quizForm.controls['options'];
              if (optionsArr && optionsArr.at(index) && optionsArr.at(index).get('hint')) {
                optionsArr.at(index).get('hint').setValue(res);
              }
            }
          });
        }
      }, {
        key: "drop",
        value: function drop(event) {
          var optionsArr = this.quizForm.controls['options'].value;
          Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(optionsArr, event.previousIndex, event.currentIndex);
          for (var i = 0; i < optionsArr.length; i = i + 1) {
            this.quizForm.controls['options'].at(i).setValue(optionsArr[i]);
          }
        }
      }, {
        key: "addOption",
        value: function addOption() {
          if (this.selectedQuiz && this.selectedQuiz.options.length < this.fillUpsOptions.maxOptions) {
            var newOption = new _quiz_class__WEBPACK_IMPORTED_MODULE_8__["Option"]({
              isCorrect: true
            });
            this.createOptionControl(newOption);
            this.selectedQuiz.options.push(newOption);
          } else {
            // this.snackBar.openFromComponent(NotificationComponent, {
            //   data: {
            //     type: Notify.MAX_OPTIONS_REACHED,
            //   },
            //   duration: NOTIFICATION_TIME * 1000,
            // })
          }
        }
      }, {
        key: "removeOption",
        value: function removeOption(optionIndex) {
          var _this3 = this;
          var confirmDelete = this.dialog.open(_ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogComponent"], {
            width: '400px',
            data: 'delete'
          });
          confirmDelete.afterClosed().subscribe(function (confirm) {
            if (confirm && _this3.selectedQuiz && _this3.selectedQuiz.options) {
              var optionsArr = _this3.quizForm.controls['options'];
              optionsArr.removeAt(optionIndex);
              _this3.selectedQuiz.options.splice(optionIndex, 1);
              if (_this3.selectedQuiz.options.length < _this3.fillUpsOptions.minOptions) {
                _this3.addOption();
              }
            }
          });
        }
      }, {
        key: "setUp",
        value: function setUp() {
          if (this.fillUpsOptions) {
            this.fillUpsOptions = this.quizStoreSvc.getQuizConfig('fitb');
          }
          this.createForm();
          for (var i = 0; i < this.fillUpsOptions.minOptions; i = i + 1) {
            if (this.selectedQuiz && this.selectedQuiz.options.length < this.fillUpsOptions.minOptions) {
              this.addOption();
            }
          }
          this.assignForm();
        }
      }, {
        key: "updateContentService",
        value: function updateContentService($event, optionIndex) {
          var optionsArr = this.quizForm.controls['options'];
          if (optionsArr && optionsArr.at(optionIndex) && optionsArr.at(optionIndex).get('hint')) {
            optionsArr.at(optionIndex).get('hint').setValue($event);
          }
        }
      }, {
        key: "createOptionControl",
        value: function createOptionControl(optionObj) {
          var noWhiteSpace = new RegExp('\\S');
          var newControl = this.formBuilder.group({
            hint: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](optionObj.hint || ''),
            text: [optionObj.text || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(noWhiteSpace)]]
          });
          var optionsArr = this.quizForm.controls['options'];
          optionsArr.push(newControl);
        }
      }, {
        key: "assignForm",
        value: function assignForm() {
          var _this4 = this;
          var newData = this.quizStoreSvc.getQuiz(this.selectedIndex);
          if (newData && newData.isInValid) {
            Object.keys(this.quizForm.controls).map(function (v) {
              var optionsArr = _this4.quizForm.controls[v];
              optionsArr.controls.map(function (d) {
                Object.keys(d.controls).map(function (e) {
                  if (e === 'text') {
                    d.controls[e].markAsDirty();
                    d.controls[e].markAsTouched();
                  }
                });
              });
            });
          }
        }
      }, {
        key: "createForm",
        value: function createForm() {
          var _this5 = this;
          this.quizForm = this.formBuilder.group({
            options: this.formBuilder.array([])
          });
          if (this.selectedQuiz && this.selectedQuiz.options.length) {
            this.selectedQuiz.options.forEach(function (v) {
              _this5.createOptionControl(v);
            });
          }
          this.quizForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(100)).subscribe(function () {
            var updatedValue = JSON.parse(JSON.stringify(_this5.quizForm.value));
            updatedValue.options.map(function (op) {
              return op.isCorrect = true;
            });
            _this5.value.emit(updatedValue);
          });
        }
      }]);
      return FillUpsEditorComponent;
    }();
    FillUpsEditorComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }, {
        type: _services_store_service__WEBPACK_IMPORTED_MODULE_9__["QuizStoreService"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["BreakpointObserver"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FillUpsEditorComponent.prototype, "submitPressed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], FillUpsEditorComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FillUpsEditorComponent.prototype, "currentId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FillUpsEditorComponent.prototype, "showHint", void 0);
    FillUpsEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-auth-fill-ups-editor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./fill-ups-editor.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/fill-ups-editor/fill-ups-editor.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./fill-ups-editor.component.scss */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/fill-ups-editor/fill-ups-editor.component.scss"))["default"]]
    })], FillUpsEditorComponent);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/match-the-following/match-the-following.component.scss":
  /*!*************************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/match-the-following/match-the-following.component.scss ***!
    \*************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizComponentsMatchTheFollowingMatchTheFollowingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".romanN {\n  min-width: 25px;\n  max-width: 25px;\n}\n\n.customheader.mat-card {\n  margin: 0;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n@media only screen and (max-width: 451px) {\n  .customheader.mat-card {\n    margin-left: 9px;\n    justify-content: center;\n  }\n}\n\n.padding {\n  padding: 10px;\n}\n\n.header1 {\n  padding-left: 20px;\n}\n\n.padding-title {\n  padding-left: 7rem;\n}\n\n@media only screen and (max-width: 641px) {\n  .padding-title {\n    padding-left: 0rem;\n    rotate: 90;\n  }\n}\n\n.padding-title2 {\n  padding-left: 2rem;\n}\n\n@media only screen and (max-width: 451px) {\n  .padding-title2 {\n    padding-left: 0rem;\n  }\n}\n\n.small-icon {\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n  height: auto;\n  width: auto;\n  transition: 0.5s;\n}\n\n.small-button {\n  height: 32px;\n  width: 32px;\n  transition: 0.5s;\n  margin-right: 4px;\n}\n\n.custom {\n  margin-right: 10px;\n  margin-left: 10px;\n  margin-top: 6px;\n  margin-bottom: 6px;\n  display: flex;\n  box-sizing: border-box;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n  padding: 5px;\n}\n\n@media only screen and (max-width: 700px) {\n  .custom {\n    margin-left: 32px;\n    margin-right: 1px;\n  }\n}\n\n@media only screen and (min-width: 701px) and (max-width: 960px) {\n  .custom {\n    margin-right: 0px;\n    margin-left: 0px;\n    margin-top: 6px;\n    margin-bottom: 6px;\n  }\n}\n\n.custom-placeholder {\n  background: rebeccapurple;\n  border: dotted 3px #999;\n  min-height: 100px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.optionlist {\n  padding: 0 1rem;\n}\n\n@media only screen and (max-width: 960px) {\n  .optionlist {\n    padding-left: 32px;\n    padding-right: 1px;\n  }\n}\n\n.bordered {\n  border: 2px solid #cecece;\n}\n\n.padding-1 {\n  padding: 1px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border: 2px solid #cecece;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.optionlist.cdk-drop-list-dragging .custom:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n::ng-deep .myfield .mat-form-field-wrapper {\n  padding: 0px !important;\n}\n\n.mat-button {\n  padding: 14px !important;\n}\n\n.edit-btn {\n  position: relative;\n  top: -4px;\n}\n\n.hint-button {\n  width: 15%;\n  min-width: 5rem;\n}\n\n.item1 {\n  max-width: 37%;\n  flex: 1 1 100%;\n}\n\n@media only screen and (max-width: 599px) {\n  .item1 {\n    max-width: 48%;\n  }\n}\n\n@media screen and (max-width: 959px) {\n  .item1 {\n    max-width: 31%;\n  }\n}\n\n@media only screen and (max-width: 599px) {\n  .width-31 {\n    max-width: 28% !important;\n  }\n}\n\n.item-spacing {\n  margin-left: 15px;\n}\n\n@media only screen and (max-width: 599px) {\n  .item-spacing {\n    margin-left: 3px;\n  }\n}\n\n.width-4 {\n  min-width: 4rem;\n}\n\n.forhint {\n  height: 45px;\n  align-items: center;\n}\n\n.item5 {\n  width: 48%;\n}\n\n.moreMob {\n  flex-direction: row;\n}\n\n@media only screen and (max-width: 449px) {\n  .moreMob {\n    flex-direction: column;\n  }\n}\n\n@media only screen and (min-width: 449px) {\n  .forInput {\n    justify-content: center;\n    padding-right: 0.25rem;\n    padding-left: 0.25rem;\n    flex-grow: 1;\n  }\n}\n\n@media only screen and (min-width: 450px) and (max-width: 499px) {\n  .minorChange {\n    width: 40%;\n  }\n}\n\n@media only screen and (min-width: 449px) {\n  .minorChange {\n    flex-grow: 1;\n  }\n}\n\n@media only screen and (max-width: 449px) {\n  .WidthForsmall {\n    width: 66%;\n  }\n}\n\n@media only screen and (min-width: 450px) {\n  .paddforInput {\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n  }\n}\n\n.addpadding {\n  padding-left: 0.75rem;\n}\n\n@media only screen and (max-width: 960px) {\n  .addpadding {\n    padding-left: 32px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL3F1aXovY29tcG9uZW50cy9tYXRjaC10aGUtZm9sbG93aW5nL21hdGNoLXRoZS1mb2xsb3dpbmcuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL3F1aXovY29tcG9uZW50cy9tYXRjaC10aGUtZm9sbG93aW5nL21hdGNoLXRoZS1mb2xsb3dpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ05GOztBRFNBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNORjs7QURPRTtFQUpGO0lBS0ksZ0JBQUE7SUFDQSx1QkFBQTtFQ0pGO0FBQ0Y7O0FET0E7RUFDRSxhQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtBQ0pGOztBRE1BO0VBQ0Usa0JBQUE7QUNIRjs7QURJRTtFQUZGO0lBR0ksa0JBQUE7SUFDQSxVQUFBO0VDREY7QUFDRjs7QURJQTtFQUNFLGtCQUFBO0FDREY7O0FERUU7RUFGRjtJQUdJLGtCQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQUU7RUFURjtJQVVJLGlCQUFBO0lBQ0EsaUJBQUE7RUNHRjtBQUNGOztBREZFO0VBYkY7SUFjSSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VDS0Y7QUFDRjs7QURGQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNEQUFBO0FDS0Y7O0FERkE7RUFDRSxlQUFBO0FDS0Y7O0FESkU7RUFGRjtJQUdJLGtCQUFBO0lBQ0Esa0JBQUE7RUNPRjtBQUNGOztBREpBO0VBQ0UseUJBQUE7QUNPRjs7QURKQTtFQUNFLFlBQUE7QUNPRjs7QURKQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FDT0Y7O0FESEE7RUFDRSxVQUFBO0FDTUY7O0FESEE7RUFDRSxzREFBQTtBQ01GOztBREhBO0VBQ0Usc0RBQUE7QUNNRjs7QURIQTtFQUNFLHVCQUFBO0FDTUY7O0FESEE7RUFDRSx3QkFBQTtBQ01GOztBREhBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDTUY7O0FESEE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQ01GOztBREhBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNNRjs7QURMRTtFQUhGO0lBSUksY0FBQTtFQ1FGO0FBQ0Y7O0FEUEU7RUFORjtJQU9JLGNBQUE7RUNVRjtBQUNGOztBREpFO0VBREY7SUFFSSx5QkFBQTtFQ1FGO0FBQ0Y7O0FESkE7RUFDRSxpQkFBQTtBQ09GOztBRE5FO0VBRkY7SUFHSSxnQkFBQTtFQ1NGO0FBQ0Y7O0FETkE7RUFDRSxlQUFBO0FDU0Y7O0FEUEE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNVRjs7QURSQTtFQUNFLFVBQUE7QUNXRjs7QURUQTtFQUNFLG1CQUFBO0FDWUY7O0FEWEU7RUFGRjtJQUdJLHNCQUFBO0VDY0Y7QUFDRjs7QURWRTtFQURGO0lBRUksdUJBQUE7SUFDQSxzQkFBQTtJQUNBLHFCQUFBO0lBQ0EsWUFBQTtFQ2NGO0FBQ0Y7O0FEVkU7RUFERjtJQUVJLFVBQUE7RUNjRjtBQUNGOztBRGJFO0VBSkY7SUFLSSxZQUFBO0VDZ0JGO0FBQ0Y7O0FEWkU7RUFERjtJQUVJLFVBQUE7RUNnQkY7QUFDRjs7QURaRTtFQURGO0lBRUkscUJBQUE7SUFDQSxzQkFBQTtFQ2dCRjtBQUNGOztBRGJBO0VBQ0UscUJBQUE7QUNnQkY7O0FEZkU7RUFGRjtJQUdJLGtCQUFBO0VDa0JGO0FBQ0YiLCJmaWxlIjoicHJvamVjdC93cy9hdXRob3Ivc3JjL2xpYi9yb3V0aW5nL21vZHVsZXMvZWRpdG9yL3JvdXRpbmcvbW9kdWxlcy9xdWl6L2NvbXBvbmVudHMvbWF0Y2gtdGhlLWZvbGxvd2luZy9tYXRjaC10aGUtZm9sbG93aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmZvck1vYntcbi8vICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTVweCl7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICB9XG4vLyB9XG5cbi5yb21hbk4ge1xuICBtaW4td2lkdGg6IDI1cHg7XG4gIG1heC13aWR0aDogMjVweDtcbn1cblxuLmN1c3RvbWhlYWRlci5tYXQtY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTFweCkge1xuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaGVhZGVyMSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5wYWRkaW5nLXRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiA3cmVtO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MXB4KSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xuICAgIHJvdGF0ZTogOTA7XG4gIH1cbn1cblxuLnBhZGRpbmctdGl0bGUyIHtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MXB4KSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xuICB9XG59XG5cbi5zbWFsbC1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uc21hbGwtYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi5jdXN0b20ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBncmFiYmluZztcbiAgcGFkZGluZzogNXB4O1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDFweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICB9XG59XG5cbi5jdXN0b20tcGxhY2Vob2xkZXIge1xuICBiYWNrZ3JvdW5kOiByZWJlY2NhcHVycGxlO1xuICBib3JkZXI6IGRvdHRlZCAzcHggIzk5OTtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLm9wdGlvbmxpc3Qge1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gICAgcGFkZGluZy1yaWdodDogMXB4O1xuICB9XG59XG5cbi5ib3JkZXJlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjZWNlY2U7XG59XG5cbi5wYWRkaW5nLTEge1xuICBwYWRkaW5nOiAxcHg7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAycHggc29saWQgI2NlY2VjZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLm9wdGlvbmxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuY3VzdG9tOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG46Om5nLWRlZXAgLm15ZmllbGQgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLm1hdC1idXR0b24ge1xuICBwYWRkaW5nOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lZGl0LWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNHB4O1xufVxuXG4uaGludC1idXR0b24ge1xuICB3aWR0aDogMTUlO1xuICBtaW4td2lkdGg6IDVyZW07XG59XG5cbi5pdGVtMSB7XG4gIG1heC13aWR0aDogMzclO1xuICBmbGV4OiAxIDEgMTAwJTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIG1heC13aWR0aDogNDglO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgbWF4LXdpZHRoOiAzMSU7XG4gIH1cbiAgLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDZweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIC8vICAgbWF4LXdpZHRoOiAzNTM1JTtcbiAgLy8gfVxufVxuLndpZHRoLTMxIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIG1heC13aWR0aDogMjglICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8vICBmeEZsZXgubHQtc209XCIzNCVcIiBmeEZsZXgubHQtbWQ9XCIzNSVcIiBmeEZsZXg9XCIzNyVcIlxuXG4uaXRlbS1zcGFjaW5nIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xuICB9XG59XG5cbi53aWR0aC00IHtcbiAgbWluLXdpZHRoOiA0cmVtO1xufVxuLmZvcmhpbnQge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaXRlbTUge1xuICB3aWR0aDogNDglO1xufVxuLm1vcmVNb2Ige1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ0OXB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG4uZm9ySW5wdXQge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ0OXB4KSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW07XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG59XG5cbi5taW5vckNoYW5nZSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDUwcHgpIGFuZCAobWF4LXdpZHRoOiA0OTlweCkge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0NDlweCkge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxufVxuXG4uV2lkdGhGb3JzbWFsbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDQ5cHgpIHtcbiAgICB3aWR0aDogNjYlO1xuICB9XG59XG5cbi5wYWRkZm9ySW5wdXQge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ1MHB4KSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07XG4gIH1cbn1cblxuLmFkZHBhZGRpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gIH1cbn1cbiIsIi5yb21hbk4ge1xuICBtaW4td2lkdGg6IDI1cHg7XG4gIG1heC13aWR0aDogMjVweDtcbn1cblxuLmN1c3RvbWhlYWRlci5tYXQtY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUxcHgpIHtcbiAgLmN1c3RvbWhlYWRlci5tYXQtY2FyZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5oZWFkZXIxIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4ucGFkZGluZy10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogN3JlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQxcHgpIHtcbiAgLnBhZGRpbmctdGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogMHJlbTtcbiAgICByb3RhdGU6IDkwO1xuICB9XG59XG5cbi5wYWRkaW5nLXRpdGxlMiB7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUxcHgpIHtcbiAgLnBhZGRpbmctdGl0bGUyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gIH1cbn1cblxuLnNtYWxsLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5zbWFsbC1idXR0b24ge1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLmN1c3RvbSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IGdyYWJiaW5nO1xuICBwYWRkaW5nOiA1cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5jdXN0b20ge1xuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMXB4KSBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLmN1c3RvbSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICB9XG59XG5cbi5jdXN0b20tcGxhY2Vob2xkZXIge1xuICBiYWNrZ3JvdW5kOiByZWJlY2NhcHVycGxlO1xuICBib3JkZXI6IGRvdHRlZCAzcHggIzk5OTtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLm9wdGlvbmxpc3Qge1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5vcHRpb25saXN0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gICAgcGFkZGluZy1yaWdodDogMXB4O1xuICB9XG59XG5cbi5ib3JkZXJlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjZWNlY2U7XG59XG5cbi5wYWRkaW5nLTEge1xuICBwYWRkaW5nOiAxcHg7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAycHggc29saWQgI2NlY2VjZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5vcHRpb25saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmN1c3RvbTpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuOjpuZy1kZWVwIC5teWZpZWxkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZzogMTRweCAhaW1wb3J0YW50O1xufVxuXG4uZWRpdC1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTRweDtcbn1cblxuLmhpbnQtYnV0dG9uIHtcbiAgd2lkdGg6IDE1JTtcbiAgbWluLXdpZHRoOiA1cmVtO1xufVxuXG4uaXRlbTEge1xuICBtYXgtd2lkdGg6IDM3JTtcbiAgZmxleDogMSAxIDEwMCU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5pdGVtMSB7XG4gICAgbWF4LXdpZHRoOiA0OCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIC5pdGVtMSB7XG4gICAgbWF4LXdpZHRoOiAzMSU7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAud2lkdGgtMzEge1xuICAgIG1heC13aWR0aDogMjglICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLml0ZW0tc3BhY2luZyB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAuaXRlbS1zcGFjaW5nIHtcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xuICB9XG59XG5cbi53aWR0aC00IHtcbiAgbWluLXdpZHRoOiA0cmVtO1xufVxuXG4uZm9yaGludCB7XG4gIGhlaWdodDogNDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLml0ZW01IHtcbiAgd2lkdGg6IDQ4JTtcbn1cblxuLm1vcmVNb2Ige1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDlweCkge1xuICAubW9yZU1vYiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ0OXB4KSB7XG4gIC5mb3JJbnB1dCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW07XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDUwcHgpIGFuZCAobWF4LXdpZHRoOiA0OTlweCkge1xuICAubWlub3JDaGFuZ2Uge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDQ5cHgpIHtcbiAgLm1pbm9yQ2hhbmdlIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDlweCkge1xuICAuV2lkdGhGb3JzbWFsbCB7XG4gICAgd2lkdGg6IDY2JTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ1MHB4KSB7XG4gIC5wYWRkZm9ySW5wdXQge1xuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtO1xuICB9XG59XG5cbi5hZGRwYWRkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuYWRkcGFkZGluZyB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICB9XG59Il19 */";

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/match-the-following/match-the-following.component.ts":
  /*!***********************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/match-the-following/match-the-following.component.ts ***!
    \***********************************************************************************************************************************************/
  /*! exports provided: MatchTheFollowingComponent */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizComponentsMatchTheFollowingMatchTheFollowingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MatchTheFollowingComponent", function () {
      return MatchTheFollowingComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/cdk/drag-drop */"./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _services_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../services/store.service */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/services/store.service.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component */"./project/ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */
    var _quiz_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../quiz-class */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/quiz-class.ts");
    /* harmony import */
    var _shared_components_open_plain_ck_editor_open_plain_ck_editor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ../../shared/components/open-plain-ck-editor/open-plain-ck-editor.component */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/components/open-plain-ck-editor/open-plain-ck-editor.component.ts");
    /* harmony import */
    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/cdk/layout */"./node_modules/@angular/cdk/esm2015/layout.js");

    // import { NotificationComponent } from '@ws/author/src/lib/modules/shared/components/notification/notification.component.ts'

    var MatchTheFollowingComponent = /*#__PURE__*/function () {
      function MatchTheFollowingComponent(formBuilder, dialog, snackBar, quizStoreSvc, breakpointObserver) {
        _classCallCheck(this, MatchTheFollowingComponent);
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.quizStoreSvc = quizStoreSvc;
        this.breakpointObserver = breakpointObserver;
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submitPressed = false;
        this.currentId = '';
        this.matchOptions = {};
        this.canUpdate = true;
        this.contentLoaded = false;
        this.smallMobile = this.breakpointObserver.observe('(max-width:449px)').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
          return res.matches;
        }));
        this.smallScreen = this.breakpointObserver.observe('(max-width:700px)').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
          return res.matches;
        }));
        this.isSmallScreenMobile = false;
        this.isSmallScreen = false;
      }
      _createClass(MatchTheFollowingComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.activeIndexSubscription) {
            this.activeIndexSubscription.unsubscribe();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;
          this.smallScreen.subscribe(function (v) {
            return _this6.isSmallScreen = v;
          });
          this.smallMobile.subscribe(function (v) {
            return _this6.isSmallScreenMobile = v;
          });
          this.activeIndexSubscription = this.quizStoreSvc.selectedQuizIndex.subscribe(function (index) {
            _this6.contentLoaded = false;
            var val = _this6.quizStoreSvc.getQuiz(index);
            _this6.selectedIndez = index;
            _this6.selectedQuiz = val && val.questionType === 'mtf' ? new _quiz_class__WEBPACK_IMPORTED_MODULE_8__["MatchQuiz"](val) : undefined;
            if (val && val.questionType === 'mtf') {
              _this6.setUp();
              _this6.contentLoaded = true;
            }
          });
          // if (this.breakpointObserver.isMatched('(max-width:450px)')) {
          //   this.smallMobile = true
          // } else {
          //   this.smallMobile = false
          // }
        }
      }, {
        key: "openCkEditor",
        value: function openCkEditor(index) {
          var _this7 = this;
          var hint = (this.quizForm.controls.options.at(index).get('hint') || /*{}*/null).value || '';
          var dialogRef = this.dialog.open(_shared_components_open_plain_ck_editor_open_plain_ck_editor_component__WEBPACK_IMPORTED_MODULE_9__["OpenPlainCkEditorComponent"], {
            width: '800px',
            data: {
              content: hint,
              identifier: this.currentId,
              type: 'HINT_EDITOR',
              index: index + 1
            }
          });
          dialogRef.afterClosed().subscribe(function (res) {
            if (res !== undefined) {
              var optionsArr = _this7.quizForm.controls['options'];
              if (optionsArr && optionsArr.at(index) && optionsArr.at(index).get('hint')) {
                optionsArr.at(index).get('hint').setValue(res);
              }
            }
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.submitPressed && this.quizForm) {
            this.assignForm();
          }
        }
      }, {
        key: "setUp",
        value: function setUp() {
          if (this.matchOptions) {
            this.matchOptions = this.quizStoreSvc.getQuizConfig('mtf');
          }
          this.createForm();
          for (var i = 0; i < this.matchOptions.minOptions; i = i + 1) {
            if (this.selectedQuiz && this.selectedQuiz.options && this.selectedQuiz.options.length < this.matchOptions.minOptions) {
              this.addOption();
            }
          }
          this.assignForm();
        }
      }, {
        key: "drop",
        value: function drop(event) {
          var optionsArr = this.quizForm.controls['options'].value;
          Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(optionsArr, event.previousIndex, event.currentIndex);
          for (var i = 0; i < optionsArr.length; i = i + 1) {
            this.quizForm.controls['options'].at(i).setValue(optionsArr[i]);
          }
        }
      }, {
        key: "addOption",
        value: function addOption() {
          if (this.selectedQuiz) {
            var optionsLen = this.selectedQuiz.options.length;
            if (optionsLen < this.matchOptions.maxOptions) {
              var newOption = new _quiz_class__WEBPACK_IMPORTED_MODULE_8__["MatchOption"]({
                isCorrect: true
              });
              this.createOptionControl(newOption);
              this.selectedQuiz.options.push(newOption);
            } else {
              // this.snackBar.openFromComponent(NotificationComponent, {
              //   data: {
              //     type: Notify.MAX_OPTIONS_REACHED,
              //   },
              //   duration: NOTIFICATION_TIME * 1000,
              // })
            }
          }
        }
      }, {
        key: "removeOption",
        value: function removeOption(optionIndex) {
          var _this8 = this;
          var confirmDelete = this.dialog.open(_ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogComponent"], {
            width: '400px',
            data: 'delete'
          });
          confirmDelete.afterClosed().subscribe(function (confirm) {
            if (confirm && _this8.selectedQuiz) {
              var optionsArr = _this8.quizForm.controls['options'];
              optionsArr.removeAt(optionIndex);
              _this8.selectedQuiz.options.splice(optionIndex, 1);
              if (_this8.selectedQuiz.options.length < _this8.matchOptions.minOptions) {
                _this8.addOption();
              }
            }
          });
        }
        // saveChanges() {
        //   if (this.editColName) {
        //     if (this.quizForm.controls[this.editColName].value) {
        //       this.canUpdate = true
        //       this.value.emit(this.quizForm.value)
        //     } else {
        //       const colname = this.selectedQuiz ? this.selectedQuiz[this.editColName] as string : ''
        //       this.quizForm.controls[this.editColName].setValue(colname)
        //     }
        //     this.editColName = undefined
        //   }
        // }
      }, {
        key: "editColNameFn",
        value: function editColNameFn(colName) {
          var _this9 = this;
          this.editColName = colName;
          setTimeout(function () {
            if (colName === 'colAName') {
              _this9.colAInput.first.nativeElement.focus();
            } else {
              _this9.colBInput.first.nativeElement.focus();
            }
          }, 100);
          this.canUpdate = false;
        }
      }, {
        key: "updateContentService",
        value: function updateContentService($event, optionIndex) {
          var optionsArr = this.quizForm.controls['options'];
          if (optionsArr && optionsArr.at(optionIndex) && optionsArr.at(optionIndex).get('hint')) {
            optionsArr.at(optionIndex).get('hint').setValue($event);
          }
        }
      }, {
        key: "createOptionControl",
        value: function createOptionControl(optionObj) {
          var noWhiteSpace = new RegExp('\\S');
          var newControl = this.formBuilder.group({
            text: [optionObj.text || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(noWhiteSpace)]],
            match: [optionObj.match || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(noWhiteSpace)]],
            hint: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](optionObj.hint || '')
          });
          var optionsArr = this.quizForm.controls['options'];
          optionsArr.push(newControl);
        }
      }, {
        key: "assignForm",
        value: function assignForm() {
          var _this10 = this;
          var newData = this.quizStoreSvc.getQuiz(this.selectedIndez);
          if (newData && newData.isInValid) {
            Object.keys(this.quizForm.controls).map(function (v) {
              if (v === 'options') {
                var optionsArr = _this10.quizForm.controls[v];
                optionsArr.controls.map(function (d) {
                  Object.keys(d.controls).map(function (e) {
                    if (e === 'text' || e === 'match') {
                      d.controls[e].markAsDirty();
                      d.controls[e].markAsTouched();
                    }
                  });
                });
              }
            });
          }
        }
      }, {
        key: "createForm",
        value: function createForm() {
          var _this11 = this;
          // const noWhiteSpace = new RegExp('\\S')
          this.quizForm = this.formBuilder.group({
            // colAName: [this.selectedQuiz ? this.selectedQuiz.colAName : '', [Validators.required, Validators.pattern(noWhiteSpace)]],
            // colBName: [this.selectedQuiz ? this.selectedQuiz.colBName : '', [Validators.required, Validators.pattern(noWhiteSpace)]],
            options: this.formBuilder.array([])
          });
          if (this.selectedQuiz && this.selectedQuiz.options.length) {
            this.selectedQuiz.options.forEach(function (v) {
              _this11.createOptionControl(v);
            });
          }
          this.quizForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(100)).subscribe(function () {
            var updatedValue = JSON.parse(JSON.stringify(_this11.quizForm.value));
            updatedValue.options.map(function (op) {
              return op.isCorrect = true;
            });
            _this11.value.emit(updatedValue);
          });
        }
      }]);
      return MatchTheFollowingComponent;
    }();
    MatchTheFollowingComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }, {
        type: _services_store_service__WEBPACK_IMPORTED_MODULE_6__["QuizStoreService"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["BreakpointObserver"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MatchTheFollowingComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatchTheFollowingComponent.prototype, "submitPressed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatchTheFollowingComponent.prototype, "currentId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MatchTheFollowingComponent.prototype, "showHint", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('colAName')], MatchTheFollowingComponent.prototype, "colAInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('colBName')], MatchTheFollowingComponent.prototype, "colBInput", void 0);
    MatchTheFollowingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-auth-match-the-following',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./match-the-following.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/match-the-following/match-the-following.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./match-the-following.component.scss */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/match-the-following/match-the-following.component.scss"))["default"]]
    })], MatchTheFollowingComponent);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/multiple-choice-question/multiple-choice-question.component.scss":
  /*!***********************************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/multiple-choice-question/multiple-choice-question.component.scss ***!
    \***********************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizComponentsMultipleChoiceQuestionMultipleChoiceQuestionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".romanN {\n  min-width: 25px;\n  max-width: 25px;\n}\n\n.padding {\n  padding: 22px;\n}\n\n.titlePadding {\n  padding-left: 1.25rem;\n}\n\n@media only screen and (max-width: 1279px) {\n  .titlePadding {\n    padding-left: 1.25rem;\n  }\n}\n\n@media only screen and (min-width: 1280px) {\n  .titlePadding {\n    padding-left: 2.5rem;\n  }\n}\n\n.customheader.mat-card {\n  margin: 0;\n  padding-left: 60px;\n  padding-right: 0px;\n}\n\n@media only screen and (max-width: 599px) {\n  .customheader.mat-card {\n    padding-left: 0rem;\n  }\n}\n\n.header1 {\n  padding-left: 13px;\n}\n\n.small-icon {\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n  height: auto;\n  width: auto;\n  transition: 0.5s;\n}\n\n.small-button {\n  height: 32px;\n  width: 32px;\n  transition: 0.5s;\n  margin-right: 4px;\n}\n\n.padding-ttl {\n  padding-left: 1.5rem;\n}\n\n@media only screen and (max-width: 599px) {\n  .padding-ttl {\n    padding-left: 0rem;\n  }\n}\n\n.custom {\n  display: flex;\n  margin-right: 10px;\n  margin-left: 10px;\n  margin-top: 6px;\n  margin-bottom: 6px;\n  box-sizing: border-box;\n  cursor: -webkit-grab;\n  cursor: grab;\n  padding: 5px;\n}\n\n@media only screen and (max-width: 600px) {\n  .custom {\n    margin-left: 32px;\n    margin-right: 1px;\n  }\n}\n\n@media only screen and (min-width: 601px) and (max-width: 960px) {\n  .custom {\n    margin-right: 0px;\n    margin-left: 0px;\n    margin-top: 6px;\n    margin-bottom: 6px;\n  }\n}\n\n.optionlist {\n  padding: 0 1rem;\n}\n\n@media only screen and (max-width: 960px) {\n  .optionlist {\n    padding-left: 32px;\n    padding-right: 1px;\n  }\n}\n\n.padding-1 {\n  padding: 1px;\n}\n\n.remove-padding {\n  padding: 0px !important;\n}\n\n.custom-placeholder {\n  border: dotted 3px #999;\n  min-height: 85px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: 0;\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.optionlist .cdk-drop-list-dragging .custom:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  opacity: 1;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n::ng-deep .myfield .mat-form-field-wrapper {\n  padding: 0px !important;\n}\n\n.mat-button {\n  padding: 14px !important;\n}\n\n.edit-btn {\n  position: relative;\n  top: -4px;\n}\n\n.hint-button {\n  width: 15%;\n  min-width: 5rem;\n}\n\n.item1 {\n  max-width: 15%;\n  flex: 1 1 100%;\n}\n\n.item2 {\n  max-width: 75%;\n  flex: 1 1 100%;\n}\n\n@media only screen and (max-width: 959px) {\n  .item2 {\n    max-width: 58%;\n  }\n}\n\n.item3 {\n  max-width: 94%;\n}\n\n.item-spacing {\n  margin-right: 15px;\n  margin-left: 10px;\n}\n\n@media only screen and (max-width: 599px) {\n  .item-spacing {\n    margin-right: 5px;\n    margin-left: 5px;\n  }\n}\n\n.width-4 {\n  min-width: 4rem;\n}\n\n.forHeight {\n  height: 45px;\n}\n\n.matheight {\n  height: 155px;\n}\n\n.addpadding {\n  padding-left: 0.75rem;\n}\n\n@media only screen and (max-width: 960px) {\n  .addpadding {\n    padding-left: 32px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL3F1aXovY29tcG9uZW50cy9tdWx0aXBsZS1jaG9pY2UtcXVlc3Rpb24vbXVsdGlwbGUtY2hvaWNlLXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hdXRob3Ivc3JjL2xpYi9yb3V0aW5nL21vZHVsZXMvZWRpdG9yL3JvdXRpbmcvbW9kdWxlcy9xdWl6L2NvbXBvbmVudHMvbXVsdGlwbGUtY2hvaWNlLXF1ZXN0aW9uL211bHRpcGxlLWNob2ljZS1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREFFO0VBRkY7SUFHSSxxQkFBQTtFQ0dGO0FBQ0Y7O0FERkU7RUFMRjtJQU1JLG9CQUFBO0VDS0Y7QUFDRjs7QURGQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDS0Y7O0FESkU7RUFKRjtJQUtJLGtCQUFBO0VDT0Y7QUFDRjs7QURKQTtFQUNFLGtCQUFBO0FDT0Y7O0FESkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDT0Y7O0FESkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNPRjs7QURKQTtFQUNFLG9CQUFBO0FDT0Y7O0FETkU7RUFGRjtJQUdJLGtCQUFBO0VDU0Y7QUFDRjs7QURQQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUFBLFlBQUE7RUFDQSxZQUFBO0FDVUY7O0FEVEU7RUFURjtJQVVJLGlCQUFBO0lBQ0EsaUJBQUE7RUNZRjtBQUNGOztBRFhFO0VBYkY7SUFjSSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VDY0Y7QUFDRjs7QURYQTtFQUNFLGVBQUE7QUNjRjs7QURiRTtFQUZGO0lBR0ksa0JBQUE7SUFDQSxrQkFBQTtFQ2dCRjtBQUNGOztBRGJBO0VBQ0UsWUFBQTtBQ2dCRjs7QURiQTtFQUNFLHVCQUFBO0FDZ0JGOztBRGJBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNEQUFBO0VBQ0EsVUFBQTtBQ2dCRjs7QURiQTtFQUNFLFVBQUE7QUNnQkY7O0FEZEE7RUFDRSxzREFBQTtBQ2lCRjs7QURkQTtFQUNFLHNEQUFBO0FDaUJGOztBRGRBO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0EscUhBQUE7QUNpQkY7O0FEYkE7RUFDRSx1QkFBQTtBQ2dCRjs7QURiQTtFQUNFLHdCQUFBO0FDZ0JGOztBRGJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDZ0JGOztBRGJBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNnQkY7O0FEYkE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQ2dCRjs7QURiQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDZ0JGOztBRGRFO0VBSkY7SUFLSSxjQUFBO0VDaUJGO0FBQ0Y7O0FEZEE7RUFDRSxjQUFBO0FDaUJGOztBRGRBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ2lCRjs7QURoQkU7RUFIRjtJQUlJLGlCQUFBO0lBQ0EsZ0JBQUE7RUNtQkY7QUFDRjs7QURoQkE7RUFDRSxlQUFBO0FDbUJGOztBRGhCQTtFQUNFLFlBQUE7QUNtQkY7O0FEakJBO0VBQ0UsYUFBQTtBQ29CRjs7QURqQkE7RUFDRSxxQkFBQTtBQ29CRjs7QURuQkU7RUFGRjtJQUdJLGtCQUFBO0VDc0JGO0FBQ0YiLCJmaWxlIjoicHJvamVjdC93cy9hdXRob3Ivc3JjL2xpYi9yb3V0aW5nL21vZHVsZXMvZWRpdG9yL3JvdXRpbmcvbW9kdWxlcy9xdWl6L2NvbXBvbmVudHMvbXVsdGlwbGUtY2hvaWNlLXF1ZXN0aW9uL211bHRpcGxlLWNob2ljZS1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb21hbk4ge1xuICBtaW4td2lkdGg6IDI1cHg7XG4gIG1heC13aWR0aDogMjVweDtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiAyMnB4O1xufVxuXG4udGl0bGVQYWRkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAgIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICB9XG59XG5cbi5jdXN0b21oZWFkZXIubWF0LWNhcmQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctbGVmdDogNjBweDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xuICB9XG59XG5cbi5oZWFkZXIxIHtcbiAgcGFkZGluZy1sZWZ0OiAxM3B4O1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnNtYWxsLWJ1dHRvbiB7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4ucGFkZGluZy10dGwge1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIHBhZGRpbmctbGVmdDogMHJlbTtcbiAgfVxufVxuLmN1c3RvbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IGdyYWI7XG4gIHBhZGRpbmc6IDVweDtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMXB4O1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgfVxufVxuXG4ub3B0aW9ubGlzdCB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgIHBhZGRpbmctbGVmdDogMzJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XG4gIH1cbn1cblxuLnBhZGRpbmctMSB7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxuLnJlbW92ZS1wYWRkaW5nIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tcGxhY2Vob2xkZXIge1xuICBib3JkZXI6IGRvdHRlZCAzcHggIzk5OTtcbiAgbWluLWhlaWdodDogODVweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLm9wdGlvbmxpc3QgLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmN1c3RvbTpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvcGFjaXR5OiAxO1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuOjpuZy1kZWVwIC5teWZpZWxkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZzogMTRweCAhaW1wb3J0YW50O1xufVxuXG4uZWRpdC1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTRweDtcbn1cblxuLmhpbnQtYnV0dG9uIHtcbiAgd2lkdGg6IDE1JTtcbiAgbWluLXdpZHRoOiA1cmVtO1xufVxuXG4uaXRlbTEge1xuICBtYXgtd2lkdGg6IDE1JTtcbiAgZmxleDogMSAxIDEwMCU7XG59XG5cbi5pdGVtMiB7XG4gIG1heC13aWR0aDogNzUlO1xuICBmbGV4OiAxIDEgMTAwJTtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgbWF4LXdpZHRoOiA1OCU7XG4gIH1cbn1cblxuLml0ZW0zIHtcbiAgbWF4LXdpZHRoOiA5NCU7XG59XG5cbi5pdGVtLXNwYWNpbmcge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxufVxuXG4ud2lkdGgtNCB7XG4gIG1pbi13aWR0aDogNHJlbTtcbn1cblxuLmZvckhlaWdodCB7XG4gIGhlaWdodDogNDVweDtcbn1cbi5tYXRoZWlnaHQge1xuICBoZWlnaHQ6IDE1NXB4O1xufVxuXG4uYWRkcGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgIHBhZGRpbmctbGVmdDogMzJweDtcbiAgfVxufVxuIiwiLnJvbWFuTiB7XG4gIG1pbi13aWR0aDogMjVweDtcbiAgbWF4LXdpZHRoOiAyNXB4O1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDIycHg7XG59XG5cbi50aXRsZVBhZGRpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAudGl0bGVQYWRkaW5nIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gIC50aXRsZVBhZGRpbmcge1xuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICB9XG59XG5cbi5jdXN0b21oZWFkZXIubWF0LWNhcmQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctbGVmdDogNjBweDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAuY3VzdG9taGVhZGVyLm1hdC1jYXJkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gIH1cbn1cblxuLmhlYWRlcjEge1xuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG59XG5cbi5zbWFsbC1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uc21hbGwtYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi5wYWRkaW5nLXR0bCB7XG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAucGFkZGluZy10dGwge1xuICAgIHBhZGRpbmctbGVmdDogMHJlbTtcbiAgfVxufVxuXG4uY3VzdG9tIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogZ3JhYjtcbiAgcGFkZGluZzogNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY3VzdG9tIHtcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDFweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5jdXN0b20ge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgfVxufVxuXG4ub3B0aW9ubGlzdCB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLm9wdGlvbmxpc3Qge1xuICAgIHBhZGRpbmctbGVmdDogMzJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XG4gIH1cbn1cblxuLnBhZGRpbmctMSB7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxuLnJlbW92ZS1wYWRkaW5nIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tcGxhY2Vob2xkZXIge1xuICBib3JkZXI6IGRvdHRlZCAzcHggIzk5OTtcbiAgbWluLWhlaWdodDogODVweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4ub3B0aW9ubGlzdCAuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuY3VzdG9tOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG9wYWNpdHk6IDE7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuOjpuZy1kZWVwIC5teWZpZWxkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZzogMTRweCAhaW1wb3J0YW50O1xufVxuXG4uZWRpdC1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTRweDtcbn1cblxuLmhpbnQtYnV0dG9uIHtcbiAgd2lkdGg6IDE1JTtcbiAgbWluLXdpZHRoOiA1cmVtO1xufVxuXG4uaXRlbTEge1xuICBtYXgtd2lkdGg6IDE1JTtcbiAgZmxleDogMSAxIDEwMCU7XG59XG5cbi5pdGVtMiB7XG4gIG1heC13aWR0aDogNzUlO1xuICBmbGV4OiAxIDEgMTAwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgLml0ZW0yIHtcbiAgICBtYXgtd2lkdGg6IDU4JTtcbiAgfVxufVxuXG4uaXRlbTMge1xuICBtYXgtd2lkdGg6IDk0JTtcbn1cblxuLml0ZW0tc3BhY2luZyB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5pdGVtLXNwYWNpbmcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cbn1cblxuLndpZHRoLTQge1xuICBtaW4td2lkdGg6IDRyZW07XG59XG5cbi5mb3JIZWlnaHQge1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5tYXRoZWlnaHQge1xuICBoZWlnaHQ6IDE1NXB4O1xufVxuXG4uYWRkcGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLmFkZHBhZGRpbmcge1xuICAgIHBhZGRpbmctbGVmdDogMzJweDtcbiAgfVxufSJdfQ== */";

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/multiple-choice-question/multiple-choice-question.component.ts":
  /*!*********************************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/multiple-choice-question/multiple-choice-question.component.ts ***!
    \*********************************************************************************************************************************************************/
  /*! exports provided: MultipleChoiceQuestionComponent */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizComponentsMultipleChoiceQuestionMultipleChoiceQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MultipleChoiceQuestionComponent", function () {
      return MultipleChoiceQuestionComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/cdk/drag-drop */"./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */
    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/material/snack-bar */"./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/cdk/layout */"./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */
    var _services_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../../services/store.service */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/services/store.service.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component */"./project/ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */
    var _quiz_class__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ../quiz-class */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/quiz-class.ts");
    /* harmony import */
    var _shared_components_open_plain_ck_editor_open_plain_ck_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ../../shared/components/open-plain-ck-editor/open-plain-ck-editor.component */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/components/open-plain-ck-editor/open-plain-ck-editor.component.ts");

    // import { NotificationComponent } from '@ws/author/src/lib/modules/shared/components/notification/notification.component.ts'

    var MultipleChoiceQuestionComponent = /*#__PURE__*/function () {
      function MultipleChoiceQuestionComponent(formBuilder, dialog, snackBar, quizStoreSvc, breakpointObserver) {
        _classCallCheck(this, MultipleChoiceQuestionComponent);
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.quizStoreSvc = quizStoreSvc;
        this.breakpointObserver = breakpointObserver;
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentId = '';
        this.selectedCount = 0;
        this.mcqOptions = {};
        // snackbarRef?: MatSnackBarRef<NotificationComponent>
        this.contentLoaded = false;
        this.identifier = '';
        this.smallScreen = this.breakpointObserver.observe('(max-width:600px)').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
          return res.matches;
        }));
        this.isSmallScreen = false;
      }
      _createClass(MultipleChoiceQuestionComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.activeIndexSubscription) {
            this.activeIndexSubscription.unsubscribe();
          }
        }
      }, {
        key: "openCkEditor",
        value: function openCkEditor(index) {
          var _this12 = this;
          var hint = (this.quizForm.controls.options.at(index).get('hint') || /*{}*/null).value || '';
          var dialogRef = this.dialog.open(_shared_components_open_plain_ck_editor_open_plain_ck_editor_component__WEBPACK_IMPORTED_MODULE_11__["OpenPlainCkEditorComponent"], {
            width: '800px',
            data: {
              content: hint,
              identifier: this.currentId,
              type: 'HINT_EDITOR',
              index: index + 1
            }
          });
          dialogRef.afterClosed().subscribe(function (res) {
            if (res !== undefined) {
              var optionsArr = _this12.quizForm.controls['options'];
              if (optionsArr && optionsArr.at(index) && optionsArr.at(index).get('hint')) {
                optionsArr.at(index).get('hint').setValue(res);
              }
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;
          this.smallScreen.subscribe(function (v) {
            return _this13.isSmallScreen = v;
          });
          this.activeIndexSubscription = this.quizStoreSvc.selectedQuizIndex.subscribe(function (index) {
            _this13.contentLoaded = false;
            _this13.index = index;
            var val = _this13.quizStoreSvc.getQuiz(index);
            _this13.selectedQuiz = val && (val.questionType === 'mcq-sca' || val.questionType === 'mcq-mca') ? new _quiz_class__WEBPACK_IMPORTED_MODULE_10__["McqQuiz"](val) : undefined;
            if (val && (val.questionType === 'mcq-sca' || val.questionType === 'mcq-mca')) {
              _this13.setUp();
              _this13.contentLoaded = true;
            }
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.submitPressed && this.quizForm) {
            this.assignForm();
          }
        }
      }, {
        key: "setUp",
        value: function setUp() {
          var _this14 = this;
          if (this.selectedQuiz && this.selectedQuiz.options) {
            if (this.mcqOptions) {
              this.mcqOptions = this.quizStoreSvc.getQuizConfig('mcq-sca');
            }
            this.createForm();
            for (var i = 0; i < this.mcqOptions.minOptions; i = i + 1) {
              if (this.selectedQuiz.options.length < this.mcqOptions.minOptions) {
                this.addOption();
              }
            }
            this.assignForm();
            this.selectedCount = 0;
            this.selectedQuiz.options.forEach(function (op) {
              if (op.isCorrect) {
                _this14.selectedCount = _this14.selectedCount + 1;
              }
            });
          }
        }
      }, {
        key: "drop",
        value: function drop(event) {
          var optionsArr = this.quizForm.controls['options'].value;
          Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(optionsArr, event.previousIndex, event.currentIndex);
          for (var i = 0; i < optionsArr.length; i = i + 1) {
            this.quizForm.controls['options'].at(i).setValue(optionsArr[i]);
          }
        }
      }, {
        key: "addOption",
        value: function addOption() {
          if (this.selectedQuiz) {
            var optionsLen = this.selectedQuiz.options.length;
            if (optionsLen < this.mcqOptions.maxOptions) {
              var newOption = new _quiz_class__WEBPACK_IMPORTED_MODULE_10__["Option"]({
                isCorrect: false
              });
              this.createOptionControl(newOption);
              this.selectedQuiz.options.push(newOption);
            } else {
              // this.snackBar.openFromComponent(NotificationComponent, {
              //   data: {
              //     type: Notify.MAX_OPTIONS_REACHED,
              //   },
              //   duration: NOTIFICATION_TIME * 1000,
              // })
            }
          }
        }
      }, {
        key: "removeOption",
        value: function removeOption(optionIndex) {
          var _this15 = this;
          var confirmDelete = this.dialog.open(_ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"], {
            width: '400px',
            data: 'delete'
          });
          confirmDelete.afterClosed().subscribe(function (confirm) {
            if (confirm && _this15.selectedQuiz && _this15.selectedQuiz.options.length) {
              var optionsArr = _this15.quizForm.controls['options'];
              optionsArr.removeAt(optionIndex);
              _this15.selectedQuiz.options.splice(optionIndex, 1);
              if (_this15.selectedQuiz.options.length < _this15.mcqOptions.minOptions) {
                _this15.addOption();
              }
            }
          });
        }
      }, {
        key: "onSelected",
        value: function onSelected($event) {
          this.selectedCount = $event.checked ? this.selectedCount + 1 : this.selectedCount - 1;
          // if (
          //   this.selectedQuiz &&
          //   this.selectedQuiz.options &&
          //   this.selectedCount === this.selectedQuiz.options.length
          // ) {
          //   this.snackbarRef = this.snackBar.openFromComponent(NotificationComponent, {
          //     data: {
          //       type: Notify.MCQ_ALL_OPTIONS_CORRECT,
          //     },
          //     duration: NOTIFICATION_TIME * 500,
          //   })
          // } else {
          //   if (this.snackbarRef) {
          //     this.snackbarRef.dismiss()
          //   }
          // }
        }
      }, {
        key: "createOptionControl",
        value: function createOptionControl(optionObj) {
          var noWhiteSpace = new RegExp('\\S');
          var newControl = this.formBuilder.group({
            text: [optionObj.text || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(noWhiteSpace)]],
            isCorrect: [optionObj.isCorrect || false],
            hint: [optionObj.hint || '']
          });
          var optionsArr = this.quizForm.controls['options'];
          optionsArr.push(newControl);
        }
      }, {
        key: "assignForm",
        value: function assignForm() {
          var _this16 = this;
          var newData = this.quizStoreSvc.getQuiz(this.index);
          if (newData && newData.isInValid) {
            // this.quizForm.markAllAsTouched()
            Object.keys(this.quizForm.controls).map(function (v) {
              var optionsArr = _this16.quizForm.controls[v];
              optionsArr.controls.map(function (d) {
                Object.keys(d.controls).map(function (e) {
                  if (e === 'text') {
                    d.controls[e].markAsDirty();
                    d.controls[e].markAsTouched();
                  }
                });
              });
            });
          }
        }
      }, {
        key: "createForm",
        value: function createForm() {
          var _this17 = this;
          this.quizForm = this.formBuilder.group({
            options: this.formBuilder.array([])
          });
          if (this.selectedQuiz && this.selectedQuiz.options.length) {
            this.selectedQuiz.options.forEach(function (v) {
              _this17.createOptionControl(v);
            });
          }
          this.quizForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(100)).subscribe(function () {
            _this17.value.emit(JSON.parse(JSON.stringify(_this17.quizForm.value)));
          });
        }
      }]);
      return MultipleChoiceQuestionComponent;
    }();
    MultipleChoiceQuestionComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }, {
        type: _services_store_service__WEBPACK_IMPORTED_MODULE_8__["QuizStoreService"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["BreakpointObserver"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MultipleChoiceQuestionComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MultipleChoiceQuestionComponent.prototype, "submitPressed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MultipleChoiceQuestionComponent.prototype, "currentId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MultipleChoiceQuestionComponent.prototype, "showHint", void 0);
    MultipleChoiceQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-auth-multiple-choice-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./multiple-choice-question.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/multiple-choice-question/multiple-choice-question.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./multiple-choice-question.component.scss */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/multiple-choice-question/multiple-choice-question.component.scss"))["default"]]
    })], MultipleChoiceQuestionComponent);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/question-editor/question-editor.component.scss":
  /*!*****************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/question-editor/question-editor.component.scss ***!
    \*****************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizComponentsQuestionEditorQuestionEditorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".editorpadding {\n  padding-left: 1rem;\n}\n@media only screen and (max-width: 960px) {\n  .editorpadding {\n    justify-content: center;\n    padding-left: 32px;\n  }\n}\n.headerpadding {\n  padding-left: 32px;\n}\n@media only screen and (min-width: 961px) {\n  .headerpadding {\n    padding-left: 0.75rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL3F1aXovY29tcG9uZW50cy9xdWVzdGlvbi1lZGl0b3IvcXVlc3Rpb24tZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hdXRob3Ivc3JjL2xpYi9yb3V0aW5nL21vZHVsZXMvZWRpdG9yL3JvdXRpbmcvbW9kdWxlcy9xdWl6L2NvbXBvbmVudHMvcXVlc3Rpb24tZWRpdG9yL3F1ZXN0aW9uLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7QURBRTtFQUZGO0lBR0ksdUJBQUE7SUFDQSxrQkFBQTtFQ0dGO0FBQ0Y7QURBQTtFQUNFLGtCQUFBO0FDR0Y7QURGRTtFQUZGO0lBR0kscUJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InByb2plY3Qvd3MvYXV0aG9yL3NyYy9saWIvcm91dGluZy9tb2R1bGVzL2VkaXRvci9yb3V0aW5nL21vZHVsZXMvcXVpei9jb21wb25lbnRzL3F1ZXN0aW9uLWVkaXRvci9xdWVzdGlvbi1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdG9ycGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMzJweDtcbiAgfVxufVxuXG4uaGVhZGVycGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjFweCkge1xuICAgIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbiAgfVxufVxuIiwiLmVkaXRvcnBhZGRpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5lZGl0b3JwYWRkaW5nIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gIH1cbn1cblxuLmhlYWRlcnBhZGRpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MXB4KSB7XG4gIC5oZWFkZXJwYWRkaW5nIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gIH1cbn0iXX0= */";

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/question-editor/question-editor.component.ts":
  /*!***************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/question-editor/question-editor.component.ts ***!
    \***************************************************************************************************************************************/
  /*! exports provided: QuestionEditorComponent */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizComponentsQuestionEditorQuestionEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "QuestionEditorComponent", function () {
      return QuestionEditorComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/material/snack-bar */"./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */
    var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../services/store.service */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/services/store.service.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_notification_notification_component_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/notification/notification.component.ts */"./project/ws/author/src/lib/modules/shared/components/notification/notification.component.ts");
    /* harmony import */
    var _constants_quiz_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../../constants/quiz-constants */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/constants/quiz-constants.ts");
    /* harmony import */
    var _services_editor_content_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../../../../services/editor-content.service */"./project/ws/author/src/lib/routing/modules/editor/services/editor-content.service.ts");
    var QuestionEditorComponent = /*#__PURE__*/function () {
      function QuestionEditorComponent(quizStoreSvc, snackBar, metaContentService) {
        _classCallCheck(this, QuestionEditorComponent);
        this.quizStoreSvc = quizStoreSvc;
        this.snackBar = snackBar;
        this.metaContentService = metaContentService;
        this.submitPressed = false;
        this.currentId = '';
      }
      _createClass(QuestionEditorComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.activeIndexSubscription) {
            this.activeIndexSubscription.unsubscribe();
          }
          if (this.activeContentSubscription) {
            this.activeContentSubscription.unsubscribe();
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.selectedQuiz && this.submitPressed) {
            this.validateNdShowError(this.submitPressed);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;
          this.activeContentSubscription = this.metaContentService.changeActiveCont.subscribe(function (id) {
            _this18.currentId = id;
            _this18.showHint = _this18.metaContentService.getOriginalMeta(id).resourceType !== _constants_quiz_constants__WEBPACK_IMPORTED_MODULE_5__["ASSESSMENT"];
          });
          this.activeIndexSubscription = this.quizStoreSvc.selectedQuizIndex.subscribe(function (index) {
            _this18.quizIndex = index;
            var val = _this18.quizStoreSvc.getQuiz(index);
            _this18.selectedQuiz = val ? val : null;
            if (_this18.submitPressed && val) {
              _this18.validateNdShowError(true);
            }
          });
        }
        /**
         * Updates emitted data to the corresponding quiz object
         * @param $event data
         * @param type updated property name
         */
      }, {
        key: "updateSelectedQuiz",
        value: function updateSelectedQuiz($event, type) {
          var quizData = JSON.parse(JSON.stringify(this.quizStoreSvc.getQuiz(this.quizIndex)));
          var updatedVal = {};
          if (type === 'question') {
            updatedVal = quizData;
            updatedVal.question = $event;
          } else {
            updatedVal = Object.assign({}, quizData, $event);
            for (var i = 0; i < updatedVal.options.length; i = i + 1) {
              updatedVal.options[i] = Object.assign({}, quizData.options[i], $event.options[i]);
            }
          }
          this.quizStoreSvc.updateQuiz(this.quizIndex, updatedVal);
          if (updatedVal.isInValid) {
            this.validateNdShowError();
          }
        }
        /**
         * Validates the quiz and shows the error if any only once
         */
      }, {
        key: "validateNdShowError",
        value: function validateNdShowError(showError) {
          var errorType = this.quizStoreSvc.validateQuiz(this.quizIndex);
          if (showError) {
            if (errorType) {
              this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component_ts__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"], {
                data: {
                  type: errorType
                },
                duration: _constants_quiz_constants__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 500
              });
            }
          }
        }
      }]);
      return QuestionEditorComponent;
    }();
    QuestionEditorComponent.ctorParameters = function () {
      return [{
        type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["QuizStoreService"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }, {
        type: _services_editor_content_service__WEBPACK_IMPORTED_MODULE_6__["EditorContentService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QuestionEditorComponent.prototype, "submitPressed", void 0);
    QuestionEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-auth-question-editor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./question-editor.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/question-editor/question-editor.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./question-editor.component.scss */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/question-editor/question-editor.component.scss"))["default"]]
    })], QuestionEditorComponent);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/quiz-class.ts":
  /*!********************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/quiz-class.ts ***!
    \********************************************************************************************************/
  /*! exports provided: Question, FillUps, McqQuiz, MatchQuiz, Option, MatchOption */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizComponentsQuizClassTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Question", function () {
      return Question;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FillUps", function () {
      return FillUps;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "McqQuiz", function () {
      return McqQuiz;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MatchQuiz", function () {
      return MatchQuiz;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Option", function () {
      return Option;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MatchOption", function () {
      return MatchOption;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var Question = /*#__PURE__*/_createClass(function Question(init) {
      _classCallCheck(this, Question);
      this.questionId = init.questionId || '';
      this.question = init.question || '';
      this.questionType = init.questionType || 'mcq-sca';
    }); // tslint:disable-next-line: max-classes-per-file
    var FillUps = /*#__PURE__*/function (_Question) {
      _inherits(FillUps, _Question);
      var _super = _createSuper(FillUps);
      function FillUps(init) {
        var _this19;
        _classCallCheck(this, FillUps);
        _this19 = _super.call(this, init);
        _this19.options = init.options ? init.options.map(function (op) {
          return new Option(op);
        }) : [];
        return _this19;
      }
      return _createClass(FillUps);
    }(Question); // tslint:disable-next-line: max-classes-per-file
    var McqQuiz = /*#__PURE__*/function (_Question2) {
      _inherits(McqQuiz, _Question2);
      var _super2 = _createSuper(McqQuiz);
      function McqQuiz(init) {
        var _this20;
        _classCallCheck(this, McqQuiz);
        _this20 = _super2.call(this, init);
        _this20.options = _this20.options = init.options ? init.options.map(function (op) {
          return new Option(op);
        }) : [];
        _this20.multiSelection = init.multiSelection || false;
        return _this20;
      }
      return _createClass(McqQuiz);
    }(Question); // tslint:disable-next-line: max-classes-per-file
    var MatchQuiz = /*#__PURE__*/function (_Question3) {
      _inherits(MatchQuiz, _Question3);
      var _super3 = _createSuper(MatchQuiz);
      function MatchQuiz(init) {
        var _this21;
        _classCallCheck(this, MatchQuiz);
        _this21 = _super3.call(this, init);
        // this.colAName = init.colAName || ''
        // this.colBName = init.colBName || ''
        _this21.options = _this21.options = init.options ? init.options.map(function (op) {
          return new MatchOption(op);
        }) : [];
        return _this21;
      }
      return _createClass(MatchQuiz);
    }(Question); // tslint:disable-next-line: max-classes-per-file
    var Option = /*#__PURE__*/_createClass(function Option(init) {
      _classCallCheck(this, Option);
      this.text = init.text || '';
      this.optionId = init.optionId || '';
      this.isCorrect = init.isCorrect;
    }); // tslint:disable-next-line: max-classes-per-file
    var MatchOption = /*#__PURE__*/function (_Option) {
      _inherits(MatchOption, _Option);
      var _super4 = _createSuper(MatchOption);
      function MatchOption(init) {
        var _this22;
        _classCallCheck(this, MatchOption);
        _this22 = _super4.call(this, init);
        _this22.match = init.match || '';
        return _this22;
      }
      return _createClass(MatchOption);
    }(Option);
    /***/
  },
  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/quiz/quiz.component.scss":
  /*!*******************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/quiz/quiz.component.scss ***!
    \*******************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizComponentsQuizQuizComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".cursor-disable {\n  cursor: not-allowed !important;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  width: 65%;\n}\n\n.margin-left {\n  margin-left: 120px;\n}\n\n@media only screen and (max-width: 930px) {\n  .margin-left {\n    margin-left: 80px;\n  }\n}\n\n@media only screen and (max-width: 824px) {\n  .margin-left {\n    margin-left: 40px;\n  }\n}\n\n@media only screen and (max-width: 699px) {\n  .margin-left {\n    padding-top: 24px;\n  }\n}\n\n@media only screen and (max-width: 585px) {\n  .margin-left {\n    margin-left: 0px;\n  }\n}\n\n.stepper-container {\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n}\n\n.stepper-grid {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 0.2fr auto 1fr;\n}\n\n.text-white {\n  color: #fff;\n}\n\n.fullView {\n  height: 100vh;\n  overflow: hidden;\n  top: 0px;\n  left: 0px;\n  position: fixed;\n  right: 0px;\n  bottom: 0px;\n}\n\n.close-preview {\n  position: fixed;\n  top: 15px;\n  left: 15px;\n  z-index: 1;\n  font-size: 30px;\n  cursor: pointer;\n  z-index: 1001;\n}\n\n.buttons {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  position: absolute;\n  top: 110px;\n  right: 0px;\n  z-index: 50;\n}\n\n.small-button {\n  height: 32px;\n  width: 32px;\n  transition: 0.5s;\n  margin-right: 4px;\n}\n\n.normal-button {\n  border-radius: 50%;\n  height: 40px;\n  display: flex;\n  width: 40px;\n  z-index: 3;\n  justify-content: center;\n}\n\n.button-grid {\n  display: grid;\n  width: 160px;\n  grid-template-columns: 0.2fr 0.95fr;\n}\n\n.button-text {\n  align-self: center;\n  padding-top: 17px;\n  padding-left: 4px;\n}\n\n.margin-right-xxs {\n  margin-right: 4px;\n}\n\nmat-sidenav-container {\n  overflow: inherit !important;\n  min-height: 500px;\n}\n\nmat-sidenav {\n  overflow: auto;\n  width: auto;\n  max-width: 240px;\n}\n\n.border-bottom {\n  border-bottom: 2px #005f87 solid;\n}\n\n.op60 {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n\n.margin-left-s {\n  margin-left: 12px !important;\n}\n\n.margin-right-xs {\n  margin-right: 8px !important;\n}\n\n.bordered {\n  border: 2px solid #cecece;\n}\n\n.small-icon {\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n  height: auto;\n  width: auto;\n  transition: 0.5s;\n}\n\n.small-operators {\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n  height: auto;\n  width: auto;\n  transition: 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL3F1aXovY29tcG9uZW50cy9xdWl6L3F1aXouY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL3F1aXovY29tcG9uZW50cy9xdWl6L3F1aXouY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURBRTtFQUZGO0lBSUksaUJBQUE7RUNFRjtBQUNGOztBREFFO0VBUEY7SUFRSSxpQkFBQTtFQ0dGO0FBQ0Y7O0FEREU7RUFYRjtJQVlJLGlCQUFBO0VDSUY7QUFDRjs7QURGRTtFQWZGO0lBZ0JJLGdCQUFBO0VDS0Y7QUFDRjs7QURGQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0tGOztBREZBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QUNLRjs7QURGQTtFQUNFLFdBQUE7QUNLRjs7QURGQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDS0Y7O0FERkE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDS0Y7O0FERkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDS0Y7O0FERkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNLRjs7QURGQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FDS0Y7O0FERkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0FDS0Y7O0FERkE7RUFDTSxrQkFBQTtFQUNGLGlCQUFBO0VBQ0EsaUJBQUE7QUNLSjs7QURGQTtFQUNFLGlCQUFBO0FDS0Y7O0FERkE7RUFDRSw0QkFBQTtFQUNBLGlCQUFBO0FDS0Y7O0FERkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDS0Y7O0FERkE7RUFDRSxnQ0FBQTtBQ0tGOztBREZBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDS0Y7O0FERkE7RUFDRSw0QkFBQTtBQ0tGOztBREhBO0VBQ0UsNEJBQUE7QUNNRjs7QURIQTtFQUNFLHlCQUFBO0FDTUY7O0FESEE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDTUY7O0FESkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNPRiIsImZpbGUiOiJwcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL3F1aXovY29tcG9uZW50cy9xdWl6L3F1aXouY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Vyc29yLWRpc2FibGUge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG59XG5cbi5ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgd2lkdGg6IDY1JTtcbn1cblxuLm1hcmdpbi1sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogOTMwcHgpIHtcbiAgICAvLyBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDgyNHB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogNjk5cHgpIHtcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiA1ODVweCkge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbn1cblxuLnN0ZXBwZXItY29udGFpbmVyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLnN0ZXBwZXItZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yZnIgYXV0byAxZnI7XG59XG5cbi50ZXh0LXdoaXRlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5mdWxsVmlldyB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG59XG5cbi5jbG9zZS1wcmV2aWV3IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IDE1cHg7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMDAxO1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDExMHB4O1xuICByaWdodDogMHB4O1xuICB6LWluZGV4OiA1MDtcbn1cblxuLnNtYWxsLWJ1dHRvbiB7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4ubm9ybWFsLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNDBweDtcbiAgei1pbmRleDogMztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idXR0b24tZ3JpZHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDE2MHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMmZyIDAuOTVmcjtcbn1cblxuLmJ1dHRvbi10ZXh0e1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxN3B4O1xuICAgIHBhZGRpbmctbGVmdDogNHB4O1xufVxuXG4ubWFyZ2luLXJpZ2h0LXh4c3tcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lcntcbiAgb3ZlcmZsb3c6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNTAwcHg7XG59XG5cbm1hdC1zaWRlbmF2e1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMjQwcHg7XG59XG5cbi5ib3JkZXItYm90dG9te1xuICBib3JkZXItYm90dG9tOiAycHggIzAwNWY4NyBzb2xpZDtcbn1cblxuLm9wNjB7XG4gIG9wYWNpdHk6IC4zO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4ubWFyZ2luLWxlZnQtc3tcbiAgbWFyZ2luLWxlZnQ6IDEycHggIWltcG9ydGFudDtcbn1cbi5tYXJnaW4tcmlnaHQteHN7XG4gIG1hcmdpbi1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXJlZHtcbiAgYm9yZGVyOiAycHggc29saWQgI2NlY2VjZVxufVxuXG4uc21hbGwtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cbi5zbWFsbC1vcGVyYXRvcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufSIsIi5jdXJzb3ItZGlzYWJsZSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcbn1cblxuLmdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICB3aWR0aDogNjUlO1xufVxuXG4ubWFyZ2luLWxlZnQge1xuICBtYXJnaW4tbGVmdDogMTIwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzMHB4KSB7XG4gIC5tYXJnaW4tbGVmdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODI0cHgpIHtcbiAgLm1hcmdpbi1sZWZ0IHtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2OTlweCkge1xuICAubWFyZ2luLWxlZnQge1xuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4NXB4KSB7XG4gIC5tYXJnaW4tbGVmdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxufVxuXG4uc3RlcHBlci1jb250YWluZXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uc3RlcHBlci1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciBhdXRvIDFmcjtcbn1cblxuLnRleHQtd2hpdGUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmZ1bGxWaWV3IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbn1cblxuLmNsb3NlLXByZXZpZXcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMTVweDtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwMDE7XG59XG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTEwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDUwO1xufVxuXG4uc21hbGwtYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi5ub3JtYWwtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0MHB4O1xuICB6LWluZGV4OiAzO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbi1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDE2MHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMmZyIDAuOTVmcjtcbn1cblxuLmJ1dHRvbi10ZXh0IHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTdweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5tYXJnaW4tcmlnaHQteHhzIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiAyNDBweDtcbn1cblxuLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAycHggIzAwNWY4NyBzb2xpZDtcbn1cblxuLm9wNjAge1xuICBvcGFjaXR5OiAwLjM7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5tYXJnaW4tbGVmdC1zIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHggIWltcG9ydGFudDtcbn1cblxuLm1hcmdpbi1yaWdodC14cyB7XG4gIG1hcmdpbi1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXJlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjZWNlY2U7XG59XG5cbi5zbWFsbC1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uc21hbGwtb3BlcmF0b3JzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgdHJhbnNpdGlvbjogMC41cztcbn0iXX0= */";

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/quiz/quiz.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/quiz/quiz.component.ts ***!
    \*****************************************************************************************************************/
  /*! exports provided: QuizComponent */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizComponentsQuizQuizComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "QuizComponent", function () {
      return QuizComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/delete-dialog/delete-dialog.component */"./project/ws/author/src/lib/modules/shared/components/delete-dialog/delete-dialog.component.ts");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/material/snack-bar */"./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */
    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/cdk/layout */"./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/notification/notification.component */"./project/ws/author/src/lib/modules/shared/components/notification/notification.component.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_comments_dialog_comments_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/comments-dialog/comments-dialog.component */"./project/ws/author/src/lib/modules/shared/components/comments-dialog/comments-dialog.component.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component */"./project/ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/error-parser/error-parser.component */"./project/ws/author/src/lib/modules/shared/components/error-parser/error-parser.component.ts");
    /* harmony import */
    var _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @ws/author/src/lib/routing/modules/editor/services/editor-content.service */"./project/ws/author/src/lib/routing/modules/editor/services/editor-content.service.ts");
    /* harmony import */
    var _services_store_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ../../services/store.service */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/services/store.service.ts");
    /* harmony import */
    var _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! @ws/author/src/lib/services/loader.service */"./project/ws/author/src/lib/services/loader.service.ts");
    /* harmony import */
    var _ws_author_src_lib_routing_modules_editor_shared_services_upload_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! @ws/author/src/lib/routing/modules/editor/shared/services/upload.service */"./project/ws/author/src/lib/routing/modules/editor/shared/services/upload.service.ts");
    /* harmony import */
    var _ws_author_src_lib_routing_modules_editor_services_editor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! @ws/author/src/lib/routing/modules/editor/services/editor.service */"./project/ws/author/src/lib/routing/modules/editor/services/editor.service.ts");
    /* harmony import */
    var _services_resolver_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ../../services/resolver.service */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/services/resolver.service.ts");
    /* harmony import */
    var _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! @ws/author/src/lib/services/init.service */"./project/ws/author/src/lib/services/init.service.ts");
    /* harmony import */
    var _ws_author_src_lib_services_notification_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! @ws/author/src/lib/services/notification.service */"./project/ws/author/src/lib/services/notification.service.ts");
    /* harmony import */
    var _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! @ws/author/src/lib/routing/modules/editor/routing/modules/quiz/constants/quiz-constants */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/constants/quiz-constants.ts");
    /* harmony import */
    var _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! @ws/author/src/lib/constants/notificationMessage */"./project/ws/author/src/lib/constants/notificationMessage.ts");
    /* harmony import */
    var _ws_author_src_lib_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__( /*! @ws/author/src/lib/constants/apiEndpoints */"./project/ws/author/src/lib/constants/apiEndpoints.ts");
    /* harmony import */
    var _ws_widget_collection_src_public_api__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__( /*! @ws-widget/collection/src/public-api */"./library/ws-widget/collection/src/public-api.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/services/access-control.service */"./project/ws/author/src/lib/modules/shared/services/access-control.service.ts");

    // import {
    //   FillUps,
    //   MatchQuiz,
    //   McqQuiz,
    // } from '@ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/quiz-class'

    var QuizComponent = /*#__PURE__*/function () {
      function QuizComponent(router, activateRoute, cdr, breakpointObserver, dialog, snackBar, quizStoreSvc, loaderService, metaContentService, uploadService, editorService, notificationSvc, authInitService, quizResolverSvc, accessControl) {
        _classCallCheck(this, QuizComponent);
        this.router = router;
        this.activateRoute = activateRoute;
        this.cdr = cdr;
        this.breakpointObserver = breakpointObserver;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.quizStoreSvc = quizStoreSvc;
        this.loaderService = loaderService;
        this.metaContentService = metaContentService;
        this.uploadService = uploadService;
        this.editorService = editorService;
        this.notificationSvc = notificationSvc;
        this.authInitService = authInitService;
        this.quizResolverSvc = quizResolverSvc;
        this.accessControl = accessControl;
        this.allContents = [];
        this.contentLoaded = false;
        this.allLanguages = [];
        this.showContent = true;
        this.sideNavBarOpened = false;
        this.submitPressed = false;
        this.canValidate = false;
        this.showSettingButtons = true;
        this.currentId = '';
        this.disableCursor = false;
        this.resourceType = '';
        this.isValid = true;
        this.currentStep = 2;
        this.previewMode = false;
        this.questionsArr = [];
        /**
         * reviwer and publisher cannot add or delete or edit quizs but can rearrange them
         */
        this.canEditJson = true;
        this.mediumScreenSize = false;
        this.mediumSizeBreakpoint$ = this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Small]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
          return res.matches;
        }));
        this.mode$ = this.mediumSizeBreakpoint$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (isMedium) {
          return isMedium ? 'over' : 'side';
        }));
        // @ViewChild(MatSidenavContainer) sidenavContainer: MatSidenavContainer;
        this.isCollectionEditor = false;
        this.isSubmitPressed = false;
        this.data = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.callSave = false;
      }
      _createClass(QuizComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.cdr.detach();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;
          this.showSettingButtons = this.accessControl.rootOrg === 'client1';
          if (this.activateRoute.parent && this.activateRoute.parent.parent) {
            this.activateRoute.parent.parent.data.subscribe(function (v) {
              var courseChildren = v.contents[0].content.children;
              // Children
              var firstLevelChilds = courseChildren.filter(function (item) {
                return item.category === 'Collection';
              });
              // find assements
              var firstLevelchildArray = [];
              firstLevelChilds.map(function (item) {
                firstLevelchildArray = firstLevelchildArray.concat(item.children);
              });
              courseChildren = courseChildren.concat(firstLevelchildArray);
              // Children
              if (courseChildren) {
                courseChildren.forEach(function (element) {
                  if (element.mimeType === 'application/quiz') {
                    // do a get for the data
                    _this23.allContents.push(element);
                    _this23.editorService.getDataForContent(element.identifier).subscribe(function (data) {
                      v.contents = data;
                      _this23.quizStoreSvc.collectiveQuiz[element.identifier] = v.contents[0].data ? v.contents[0].data.questions : [];
                      _this23.canEditJson = _this23.quizResolverSvc.canEdit(v.contents[0].content);
                      _this23.resourceType = v.contents[0].content.categoryType || 'Quiz';
                      _this23.quizDuration = v.contents[0].content.duration || 300;
                      _this23.questionsArr = _this23.quizStoreSvc.collectiveQuiz[v.contents[0].content.identifier] || [];
                      _this23.contentLoaded = true;
                    });
                  }
                });
              }
              // this.canEditJson = this.quizResolverSvc.canEdit(v.contents[0].content)
              // this.resourceType = v.contents[0].content.categoryType || 'Quiz'
              // this.quizDuration = v.contents[0].content.duration || 300
              // this.questionsArr =
              //   this.quizStoreSvc.collectiveQuiz[v.contents[0].content.identifier] || []
              _this23.contentLoaded = true;
              if (!_this23.quizStoreSvc.collectiveQuiz[v.contents[0].content.identifier]) {
                _this23.quizStoreSvc.collectiveQuiz[v.contents[0].content.identifier] = [];
              }
            });
          }
          this.allLanguages = this.authInitService.ordinals.subTitles;
          this.loaderService.changeLoadState(true);
          this.quizConfig = this.quizStoreSvc.getQuizConfig('ques');
          this.mediumSizeBreakpoint$.subscribe(function (isLtMedium) {
            _this23.sideNavBarOpened = !isLtMedium;
            _this23.mediumScreenSize = isLtMedium;
            if (isLtMedium) {
              _this23.showContent = false;
            } else {
              _this23.showContent = true;
            }
          });
          // selected quiz index
          this.activeIndexSubscription = this.quizStoreSvc.selectedQuizIndex.subscribe(function (index) {
            _this23.selectedQuizIndex = index;
          });
          // active lex id
          this.activeContentSubscription = this.metaContentService.changeActiveCont.subscribe(function (id) {
            if (!_this23.quizStoreSvc.collectiveQuiz[id]) {
              _this23.quizStoreSvc.collectiveQuiz[id] = [];
            }
            _this23.questionsArr = _this23.quizStoreSvc.collectiveQuiz[id];
            _this23.currentId = id;
            _this23.quizStoreSvc.currentId = id;
            _this23.quizStoreSvc.changeQuiz(0);
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          // if (this.callSave) {
          //   this.save()
          // }
        }
      }, {
        key: "customStepper",
        value: function customStepper(step) {
          if (step === 1) {
            this.disableCursor = true;
          } else {
            this.currentStep = step;
          }
        }
      }, {
        key: "changeContent",
        value: function changeContent(data) {
          this.currentId = data.identifier;
          this.metaContentService.changeActiveCont.next(data.identifier);
        }
        /**
         * Navigates to the selected quiz
         * @param steps no of steps it should move
         */
      }, {
        key: "changeQuiz",
        value: function changeQuiz(steps) {
          var _this24 = this;
          var index = this.selectedQuizIndex + steps;
          this.quizStoreSvc.changeQuiz(index);
          var selectedElem = document.getElementById("quiz-".concat(index));
          // if (this.mediumScreenSize) {
          //    this.sidenav.close()
          // }
          if (selectedElem) {
            setTimeout(function () {
              _this24.cdr.detectChanges();
              selectedElem.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
              // tslint:disable-next-line: align
            }, 200);
          }
        }
      }, {
        key: "createInAnotherLanguage",
        value: function createInAnotherLanguage(lang) {
          var _this25 = this;
          this.loaderService.changeLoad.next(true);
          this.metaContentService.createInAnotherLanguage(lang, {
            artifactURL: '',
            downloadUrl: ''
          }).subscribe(function (data) {
            _this25.loaderService.changeLoad.next(false);
            if (data !== true) {
              _this25.allContents.push(data);
              _this25.changeContent(data);
              _this25.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].CONTENT_CREATE_SUCCESS);
            } else {
              _this25.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].DATA_PRESENT);
            }
          }, function (error) {
            if (error.status === 409) {
              var errorMap = new Map();
              errorMap.set(_this25.currentId, _this25.metaContentService.getUpdatedMeta(_this25.currentId));
              _this25.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_12__["ErrorParserComponent"], {
                width: '750px',
                height: '450px',
                data: {
                  errorFromBackendData: error.error,
                  dataMapping: errorMap
                }
              });
            }
            _this25.loaderService.changeLoad.next(false);
            _this25.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_9__["NotificationComponent"], {
              data: {
                type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].CONTENT_FAIL
              },
              duration: _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_21__["NOTIFICATION_TIME"] * 1000
            });
          });
        }
      }, {
        key: "triggerSave",
        value: function triggerSave(meta, id) {
          var _this26 = this;
          var requestBody = {
            hierarchy: {},
            nodesModified: _defineProperty({}, id, {
              isNew: false,
              root: true,
              metadata: meta
            })
          };
          return this.editorService.updateContent(requestBody).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            return _this26.metaContentService.resetOriginalMeta(meta, id);
          }));
        }
      }, {
        key: "wrapperForTriggerSave",
        value: function wrapperForTriggerSave() {
          var _this27 = this;
          this.loaderService.changeLoad.next(true);
          var updatedQuizData = this.quizStoreSvc.collectiveQuiz[this.currentId];
          var hasTimeChanged = (this.metaContentService.upDatedContent[this.currentId] || /*{}*/null).duration && this.quizDuration !== this.metaContentService.upDatedContent[this.currentId].duration;
          var doUploadJson = this.quizStoreSvc.hasChanged || hasTimeChanged;
          if (!(this.metaContentService.getUpdatedMeta(this.currentId) || /*{}*/null).duration) {
            this.metaContentService.setUpdatedMeta({
              duration: this.quizDuration
            }, this.currentId);
          }
          return (doUploadJson ? this.triggerUpload(JSON.parse(JSON.stringify(updatedQuizData))) : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({})).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (v) {
            var updatedMeta = JSON.parse(JSON.stringify(_this27.metaContentService.upDatedContent[_this27.currentId] || {}));
            var check = _this27.resourceType === _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_21__["ASSESSMENT"] ? v.length && v[1] && v[1].code : true;
            if (v && v[0] && v[0].code && check) {
              updatedMeta.artifactUrl = (v[0].authArtifactURL || v[0].artifactURL).replace(/%2F/g, '/');
              _this27.quizDuration = _this27.metaContentService.getUpdatedMeta(_this27.currentId).duration;
              updatedMeta.downloadUrl = v[0].downloadURL.replace(/%2F/g, '/');
              _this27.quizStoreSvc.hasChanged = false;
            }
            return _this27.triggerSave(updatedMeta, _this27.currentId);
          }));
        }
      }, {
        key: "save",
        value: function save() {
          var _this28 = this;
          this.canValidate = true;
          var hasMinLen = this.resourceType !== _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_21__["ASSESSMENT"] && this.questionsArr.length || this.resourceType === _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_21__["ASSESSMENT"] && this.questionsArr.length >= this.quizConfig.minQues;
          var needSave = Object.keys(this.metaContentService.upDatedContent[this.currentId] || {}).length || this.quizStoreSvc.hasChanged;
          if (hasMinLen && needSave) {
            if (this.canEditJson) {
              this.checkValidity();
            }
            if (this.isValid) {
              // if any change in quiz, then upload json
              this.wrapperForTriggerSave().subscribe(function () {
                _this28.canValidate = false;
                _this28.loaderService.changeLoad.next(false);
                _this28.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].SAVE_SUCCESS);
              }, function () {
                _this28.canValidate = false;
                _this28.loaderService.changeLoad.next(false);
                _this28.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].SAVE_FAIL);
              });
            } else {
              this.currentStep = 2;
            }
          } else {
            // enters if the quiz array does not have min len or no changes has been made in meta or quiz
            if (this.resourceType !== _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_21__["ASSESSMENT"] && !this.questionsArr.length) {
              this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].RESOURCE_NO_QUIZ);
              this.currentStep = 2;
            } else if (this.resourceType === _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_21__["ASSESSMENT"] && this.questionsArr.length < this.quizConfig.minQues) {
              this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].ASSESSMENT_MIN_QUIZ);
              // this.currentStep = 2
            } else {
              this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].UP_TO_DATE);
            }
          }
        }
      }, {
        key: "uploadJson",
        value: function uploadJson(array, fileName) {
          this.quizDuration = this.metaContentService.getUpdatedMeta(this.currentId).duration;
          var quizData = {
            timeLimit: this.quizDuration,
            isAssessment: this.resourceType === _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_21__["ASSESSMENT"],
            questions: array
          };
          // const blob = new Blob([JSON.stringify(quizData, null, 2)], { type: 'application/json' })
          // const formdata = new FormData()
          // formdata.append('content', blob)
          return this.uploadService.encodedUpload(quizData, fileName, {
            contentId: this.currentId,
            contentType: _ws_author_src_lib_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_23__["CONTENT_BASE_WEBHOST"]
          });
        }
      }, {
        key: "shuffle",
        value: function shuffle(data) {
          var currentIndex = data.length;
          var temporaryValue;
          var randomIndex;
          // While there remain elements to shuffle...
          while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = data[currentIndex];
            data[currentIndex] = data[randomIndex];
            data[randomIndex] = temporaryValue;
          }
          return data;
        }
        // have to upload two jsons one original json and other without answer
        // original json will be in assessment-key.json and other in assessment.json
      }, {
        key: "triggerUpload",
        value: function triggerUpload(data) {
          var _this29 = this;
          var dataWithOutAns = JSON.parse(JSON.stringify(data));
          var dataWithAns = JSON.parse(JSON.stringify(data));
          dataWithOutAns.map(function (ques) {
            delete ques.isInValid;
            var arr = [];
            if (ques.questionType === 'mtf') {
              arr = _this29.shuffle(ques.options.map(function (elem) {
                return elem.match;
              }));
            }
            ques.options.map(function (op, i) {
              if (!op.hint) {
                delete op.hint;
              }
              if (ques.questionType === 'fitb') {
                op.text = '';
              } else if (ques.questionType === 'mtf') {
                op.match = arr[i];
              }
              op.isCorrect = false;
            });
          });
          dataWithAns.map(function (ques) {
            delete ques.isInValid;
            ques.options.map(function (op) {
              if (!op.hint) {
                delete op.hint;
              }
            });
          });
          this.resourceType = this.metaContentService.getUpdatedMeta(this.currentId).categoryType;
          // console.log(dataWithAns, dataWithOutAns)
          var uploadData = this.resourceType === _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_21__["ASSESSMENT"] ? dataWithOutAns : dataWithAns;
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])([this.uploadJson(uploadData, this.resourceType === _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_21__["ASSESSMENT"] ? _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_21__["ASSESSMENT_JSON_WITHOUT_KEY"] : _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_21__["QUIZ_JSON"]), this.resourceType === _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_21__["ASSESSMENT"] ? this.uploadJson(dataWithAns, _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_21__["ASSESSMENT_JSON_WITH_KEY"]) : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({})]);
        }
      }, {
        key: "action",
        value: function action(type) {
          var _this30 = this;
          switch (type) {
            case 'next':
              this.currentStep += 1;
              break;
            case 'preview':
              this.preview();
              break;
            case 'save':
              this.save();
              break;
            case 'push':
              this.takeAction();
              break;
            case 'delete':
              var dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DeleteDialogComponent"], {
                width: '600px',
                height: 'auto',
                data: this.metaContentService.getUpdatedMeta(this.currentId)
              });
              dialog.afterClosed().subscribe(function (confirm) {
                if (confirm) {
                  _this30.allContents = _this30.allContents.filter(function (v) {
                    return v.identifier !== _this30.currentId;
                  });
                  if (_this30.allContents.length) {
                    _this30.metaContentService.changeActiveCont.next(_this30.allContents[0].identifier);
                  } else {
                    _this30.router.navigateByUrl('/author/home');
                  }
                }
              });
              break;
            case 'close':
              this.router.navigateByUrl('/author/home');
              break;
          }
        }
        /**
         * Checks the validity of selected quiz collection and navigates to the first invalid quiz
         * @returns True if the all the quiz is valid else false
         */
      }, {
        key: "checkValidity",
        value: function checkValidity() {
          this.isValid = true;
          for (var itr = 0; itr < this.questionsArr.length; itr = itr + 1) {
            var errorType = this.quizStoreSvc.validateQuiz(itr);
            if (errorType) {
              // change quiz only once
              if (this.isValid) {
                if (itr !== this.selectedQuizIndex) {
                  this.quizStoreSvc.changeQuiz(itr);
                } else {
                  this.showNotification(errorType);
                }
              }
              this.isValid = false;
              // this.showErrorMessage(errorMessage)
            }
          }
        }
      }, {
        key: "delete",
        value: function _delete() {
          var _this31 = this;
          var confirmDelete = this.dialog.open(_ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"], {
            width: '400px',
            data: 'delete'
          });
          confirmDelete.afterClosed().subscribe(function (confirm) {
            if (confirm) {
              _this31.loaderService.changeLoad.next(true);
              _this31.editorService.deleteContent(_this31.currentId).subscribe(function () {
                _this31.loaderService.changeLoad.next(false);
                _this31.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].SUCCESS);
                _this31.allContents = _this31.allContents.filter(function (v) {
                  return v.identifier !== _this31.currentId;
                });
                if (_this31.allContents.length) {
                  _this31.metaContentService.changeActiveCont.next(_this31.allContents[0].identifier);
                } else {
                  _this31.router.navigateByUrl('/author/home');
                }
              }, function () {
                _this31.loaderService.changeLoad.next(false);
                _this31.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].CONTENT_FAIL);
              });
            }
          });
        }
      }, {
        key: "preview",
        value: function preview() {
          var _this32 = this;
          if (this.resourceType === _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_21__["ASSESSMENT"] && this.questionsArr.length === 0) {
            this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].RESOURCE_NO_QUIZ);
          } else if (this.resourceType === _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_21__["ASSESSMENT"] && this.questionsArr.length < this.quizConfig.minQues) {
            this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].ASSESSMENT_MIN_QUIZ);
          } else {
            var needSave = this.quizStoreSvc.hasChanged || Object.keys(this.metaContentService.upDatedContent[this.currentId] || {}).length;
            if (needSave) {
              this.checkValidity();
              if (this.isValid) {
                this.wrapperForTriggerSave().subscribe(function () {
                  _this32.loaderService.changeLoad.next(false);
                  _this32.previewMode = true;
                  _this32.mimeTypeRoute = Object(_ws_widget_collection_src_public_api__WEBPACK_IMPORTED_MODULE_24__["VIEWER_ROUTE_FROM_MIME"])(_this32.metaContentService.getUpdatedMeta(_this32.currentId).mimeType);
                }, function () {
                  _this32.loaderService.changeLoad.next(false);
                  _this32.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].SAVE_FAIL);
                });
              }
            } else {
              this.previewMode = true;
              this.mimeTypeRoute = Object(_ws_widget_collection_src_public_api__WEBPACK_IMPORTED_MODULE_24__["VIEWER_ROUTE_FROM_MIME"])(this.metaContentService.getUpdatedMeta(this.currentId).mimeType);
            }
          }
        }
      }, {
        key: "validationCheck",
        value: function validationCheck() {
          var returnValue = true;
          if (this.resourceType === _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_21__["ASSESSMENT"] && !this.questionsArr.length) {
            returnValue = false;
            this.currentStep = 2;
            this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].RESOURCE_NO_QUIZ);
          } else if (this.resourceType === _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_21__["ASSESSMENT"] && this.questionsArr.length < this.quizConfig.minQues) {
            returnValue = false;
            this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].ASSESSMENT_MIN_QUIZ);
            this.currentStep = 2;
          } else if (!this.metaContentService.isValid(this.currentId) || !this.metaContentService.isValid(this.currentId) && !this.metaContentService.getUpdatedMeta(this.currentId).artifactUrl) {
            this.submitPressed = true;
            this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].MANDATORY_FIELD_ERROR);
            returnValue = false;
            this.currentStep = 3;
          } else if (this.quizStoreSvc.hasChanged) {
            this.checkValidity();
            if (this.isValid) {
              return this.wrapperForTriggerSave().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
                return true;
              }));
            }
            returnValue = false;
          }
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(returnValue);
        }
      }, {
        key: "takeAction",
        value: function takeAction() {
          var _this33 = this;
          var needSave = Object.keys(this.metaContentService.upDatedContent[this.currentId] || {}).length || this.quizStoreSvc.hasChanged;
          if (!needSave && this.metaContentService.getUpdatedMeta(this.currentId).status === 'Live') {
            this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].UP_TO_DATE);
            return;
          }
          this.validationCheck().subscribe(function (valid) {
            if (valid) {
              var dialogRef = _this33.dialog.open(_ws_author_src_lib_modules_shared_components_comments_dialog_comments_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CommentsDialogComponent"], {
                width: '750px',
                height: '450px',
                data: _this33.metaContentService.getOriginalMeta(_this33.currentId)
              });
              dialogRef.afterClosed().subscribe(function (commentsForm) {
                _this33.finalCall(commentsForm);
              });
            }
          }, function () {
            _this33.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].SAVE_FAIL);
          });
        }
      }, {
        key: "isPublisherSame",
        value: function isPublisherSame() {
          var _this34 = this;
          var publisherDetails = this.metaContentService.getUpdatedMeta(this.currentId).publisherDetails || [];
          return publisherDetails.find(function (v) {
            return v.id === _this34.accessControl.userId;
          }) ? true : false;
        }
      }, {
        key: "isDirectPublish",
        value: function isDirectPublish() {
          return ['Draft', 'Live'].includes(this.metaContentService.originalContent[this.currentId].status) && this.isPublisherSame();
        }
      }, {
        key: "finalCall",
        value: function finalCall(commentsForm) {
          var _this35 = this;
          if (commentsForm) {
            var body = {
              comment: commentsForm.controls.comments.value,
              operation: commentsForm.controls.action.value === 'accept' || ['Draft', 'Live'].includes(this.metaContentService.originalContent[this.currentId].status) ? (this.accessControl.authoringConfig.isMultiStepFlow && this.isDirectPublish() || !this.accessControl.authoringConfig.isMultiStepFlow) && this.accessControl.rootOrg.toLowerCase() === 'client1' ? 100000 : 1 : 0
            };
            var updatedContent = this.metaContentService.upDatedContent[this.currentId] || null; /*{}*/
            var updatedMeta = this.metaContentService.getUpdatedMeta(this.currentId);
            var needSave = Object.keys(this.metaContentService.upDatedContent[this.currentId] || {}).length;
            var saveCall = (needSave ? this.triggerSave(updatedContent, this.currentId) : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({})).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function () {
              return _this35.editorService.forwardBackward(body, _this35.currentId, _this35.metaContentService.originalContent[_this35.currentId].status).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function () {
                return _this35.notificationSvc.triggerPushPullNotification(updatedMeta, body.comment, body.operation ? true : false).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({});
                }));
              }));
            }));
            this.loaderService.changeLoad.next(true);
            saveCall.subscribe(function () {
              _this35.loaderService.changeLoad.next(false);
              _this35.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_9__["NotificationComponent"], {
                data: {
                  type: _this35.getMessage('success')
                },
                duration: _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_21__["NOTIFICATION_TIME"] * 1000
              });
              _this35.allContents = _this35.allContents.filter(function (v) {
                return v.identifier !== _this35.currentId;
              });
              if (_this35.allContents.length) {
                _this35.metaContentService.changeActiveCont.next(_this35.allContents[0].identifier);
              } else {
                _this35.router.navigateByUrl('/author/home');
              }
            }, function (error) {
              if (error.status === 409) {
                var errorMap = new Map();
                errorMap.set(_this35.currentId, _this35.metaContentService.getUpdatedMeta(_this35.currentId));
                _this35.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_12__["ErrorParserComponent"], {
                  width: '80vw',
                  height: '90vh',
                  data: {
                    errorFromBackendData: error.error,
                    dataMapping: errorMap
                  }
                });
              }
              _this35.loaderService.changeLoad.next(false);
              _this35.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_9__["NotificationComponent"], {
                data: {
                  type: _this35.getMessage('failure')
                },
                duration: _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_21__["NOTIFICATION_TIME"] * 1000
              });
            });
          }
        }
      }, {
        key: "getMessage",
        value: function getMessage(type) {
          if (type === 'success') {
            switch (this.metaContentService.originalContent[this.currentId].status) {
              case 'Draft':
              case 'Live':
                return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].SEND_FOR_REVIEW_SUCCESS;
              case 'InReview':
                return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].REVIEW_SUCCESS;
              case 'Reviewed':
                return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].PUBLISH_SUCCESS;
              default:
                return '';
            }
          }
          switch (this.metaContentService.originalContent[this.currentId].status) {
            case 'Draft':
            case 'Live':
              return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].SEND_FOR_REVIEW_FAIL;
            case 'InReview':
              return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].REVIEW_FAIL;
            case 'Reviewed':
              return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].PUBLISH_FAIL;
            default:
              return '';
          }
        }
      }, {
        key: "getAction",
        value: function getAction() {
          switch (this.metaContentService.originalContent[this.currentId].status) {
            case 'Draft':
            case 'Live':
              return 'sendForReview';
            case 'InReview':
            case 'QualityReview':
              return 'review';
            case 'Reviewed':
              return 'publish';
            default:
              return 'sendForReview';
          }
        }
      }, {
        key: "showNotification",
        value: function showNotification(errorType) {
          this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_9__["NotificationComponent"], {
            data: {
              type: errorType
            },
            duration: _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_21__["NOTIFICATION_TIME"] * 1000
          });
        }
      }, {
        key: "closePreview",
        value: function closePreview() {
          this.previewMode = false;
        }
      }, {
        key: "toggleSettingButtons",
        value: function toggleSettingButtons() {
          this.showSettingButtons = !this.showSettingButtons;
        }
      }, {
        key: "canDelete",
        value: function canDelete() {
          var _this36 = this;
          return this.accessControl.hasRole(['editor', 'admin']) || ['Draft', 'Live'].includes(this.metaContentService.originalContent[this.currentId].status) && this.metaContentService.originalContent[this.currentId].creatorContacts.find(function (v) {
            return v.id === _this36.accessControl.userId;
          });
        }
      }]);
      return QuizComponent;
    }();
    QuizComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }, {
        type: _services_store_service__WEBPACK_IMPORTED_MODULE_14__["QuizStoreService"]
      }, {
        type: _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_15__["LoaderService"]
      }, {
        type: _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_13__["EditorContentService"]
      }, {
        type: _ws_author_src_lib_routing_modules_editor_shared_services_upload_service__WEBPACK_IMPORTED_MODULE_16__["UploadService"]
      }, {
        type: _ws_author_src_lib_routing_modules_editor_services_editor_service__WEBPACK_IMPORTED_MODULE_17__["EditorService"]
      }, {
        type: _ws_author_src_lib_services_notification_service__WEBPACK_IMPORTED_MODULE_20__["NotificationService"]
      }, {
        type: _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_19__["AuthInitService"]
      }, {
        type: _services_resolver_service__WEBPACK_IMPORTED_MODULE_18__["QuizResolverService"]
      }, {
        type: _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_25__["AccessControlService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], QuizComponent.prototype, "isCollectionEditor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], QuizComponent.prototype, "isSubmitPressed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], QuizComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], QuizComponent.prototype, "callSave", void 0);
    QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'ws-auth-quiz',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./quiz.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/quiz/quiz.component.html"))["default"],
      providers: [_services_resolver_service__WEBPACK_IMPORTED_MODULE_18__["QuizResolverService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./quiz.component.scss */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/quiz/quiz.component.scss"))["default"]]
    })], QuizComponent);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/constants/quiz-constants.ts":
  /*!***********************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/constants/quiz-constants.ts ***!
    \***********************************************************************************************************/
  /*! exports provided: QUESTION_CONFIG, QUIZCONFIG, QUIZ_QUESTION_TYPE, NOTIFICATION_TIME, QUIZ_JSON, ASSESSMENT_JSON_WITHOUT_KEY, ASSESSMENT_JSON_WITH_KEY, ASSESSMENT */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizConstantsQuizConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "QUESTION_CONFIG", function () {
      return QUESTION_CONFIG;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "QUIZCONFIG", function () {
      return QUIZCONFIG;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "QUIZ_QUESTION_TYPE", function () {
      return QUIZ_QUESTION_TYPE;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NOTIFICATION_TIME", function () {
      return NOTIFICATION_TIME;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "QUIZ_JSON", function () {
      return QUIZ_JSON;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ASSESSMENT_JSON_WITHOUT_KEY", function () {
      return ASSESSMENT_JSON_WITHOUT_KEY;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ASSESSMENT_JSON_WITH_KEY", function () {
      return ASSESSMENT_JSON_WITH_KEY;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ASSESSMENT", function () {
      return ASSESSMENT;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var QUESTION_CONFIG = {
      matchOptionsConfig: {
        colNameMinLength: 1,
        colNameMaxLength: 30,
        minOptions: 3,
        maxOptions: 7
      },
      fillUpsOptionsConfig: {
        minOptions: 1,
        maxOptions: 7
      },
      mcqOptionsConfig: {
        minOptions: 2,
        maxOptions: 7
      },
      minMaxQuesConfig: {
        minQues: 1
      }
    };
    var QUIZCONFIG = {
      mtf: 'matchOptionsConfig',
      fitb: 'fillUpsOptionsConfig',
      'mcq-sca': 'mcqOptionsConfig',
      'mcq-mca': 'mcqOptionsConfig',
      ques: 'minMaxQuesConfig'
    };
    var QUIZ_QUESTION_TYPE = {
      fillInTheBlanks: 'fitb',
      matchTheFollowing: 'mtf',
      multipleChoiceQuestionSingleCorrectAnswer: 'mcq-sca',
      multipleChoiceQuestionMultipleCorrectAnswer: 'mcq-mca'
    };
    var NOTIFICATION_TIME = 5;
    var QUIZ_JSON = 'quiz.json';
    var ASSESSMENT_JSON_WITHOUT_KEY = 'assessment.json';
    var ASSESSMENT_JSON_WITH_KEY = 'assessment-key.json';
    var ASSESSMENT = 'Assessment';

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/quiz-routing.module.ts":
  /*!******************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/quiz-routing.module.ts ***!
    \******************************************************************************************************/
  /*! exports provided: QuizRoutingModule */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizQuizRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "QuizRoutingModule", function () {
      return QuizRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./components/quiz/quiz.component */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/quiz/quiz.component.ts");
    var routes = [{
      path: '',
      component: _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_3__["QuizComponent"]
    }];
    var QuizRoutingModule = /*#__PURE__*/_createClass(function QuizRoutingModule() {
      _classCallCheck(this, QuizRoutingModule);
    });
    QuizRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: []
    })], QuizRoutingModule);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/quiz.module.ts":
  /*!**********************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/quiz.module.ts ***!
    \**********************************************************************************************/
  /*! exports provided: QuizModule */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizQuizModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "QuizModule", function () {
      return QuizModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/cdk/drag-drop */"./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/shared.module */"./project/ws/author/src/lib/modules/shared/shared.module.ts");
    /* harmony import */
    var _ws_author_src_lib_routing_modules_editor_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ws/author/src/lib/routing/modules/editor/shared/shared.module */"./project/ws/author/src/lib/routing/modules/editor/shared/shared.module.ts");
    /* harmony import */
    var _quiz_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./quiz-routing.module */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/quiz-routing.module.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_viewer_viewer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @ws/author/src/lib/modules/viewer/viewer.module */"./project/ws/author/src/lib/modules/viewer/viewer.module.ts");
    /* harmony import */
    var _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/quiz/quiz.component */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/quiz/quiz.component.ts");
    /* harmony import */
    var _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_components_match_the_following_match_the_following_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/match-the-following/match-the-following.component */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/match-the-following/match-the-following.component.ts");
    /* harmony import */
    var _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_components_multiple_choice_question_multiple_choice_question_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/multiple-choice-question/multiple-choice-question.component */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/multiple-choice-question/multiple-choice-question.component.ts");
    /* harmony import */
    var _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_components_fill_ups_editor_fill_ups_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! @ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/fill-ups-editor/fill-ups-editor.component */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/fill-ups-editor/fill-ups-editor.component.ts");
    /* harmony import */
    var _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_components_question_editor_question_editor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/question-editor/question-editor.component */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/question-editor/question-editor.component.ts");
    /* harmony import */
    var _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_shared_components_question_editor_sidenav_question_editor_sidenav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/components/question-editor-sidenav/question-editor-sidenav.component */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/components/question-editor-sidenav/question-editor-sidenav.component.ts");
    /* harmony import */
    var _services_store_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./services/store.service */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/services/store.service.ts");
    /* harmony import */
    var _shared_components_open_plain_ck_editor_open_plain_ck_editor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ./shared/components/open-plain-ck-editor/open-plain-ck-editor.component */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/components/open-plain-ck-editor/open-plain-ck-editor.component.ts");
    /* harmony import */
    var _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_shared_roman_convert_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! @ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/roman-convert.pipe */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/roman-convert.pipe.ts");
    var QuizModule = /*#__PURE__*/_createClass(function QuizModule() {
      _classCallCheck(this, QuizModule);
    });
    QuizModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_ws_author_src_lib_routing_modules_editor_routing_modules_quiz_components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__["QuizComponent"], _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_components_question_editor_question_editor_component__WEBPACK_IMPORTED_MODULE_12__["QuestionEditorComponent"], _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_components_match_the_following_match_the_following_component__WEBPACK_IMPORTED_MODULE_9__["MatchTheFollowingComponent"], _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_components_multiple_choice_question_multiple_choice_question_component__WEBPACK_IMPORTED_MODULE_10__["MultipleChoiceQuestionComponent"], _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_components_fill_ups_editor_fill_ups_editor_component__WEBPACK_IMPORTED_MODULE_11__["FillUpsEditorComponent"], _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_shared_components_question_editor_sidenav_question_editor_sidenav_component__WEBPACK_IMPORTED_MODULE_13__["QuestionEditorSidenavComponent"], _shared_components_open_plain_ck_editor_open_plain_ck_editor_component__WEBPACK_IMPORTED_MODULE_15__["OpenPlainCkEditorComponent"], _ws_author_src_lib_routing_modules_editor_routing_modules_quiz_shared_roman_convert_pipe__WEBPACK_IMPORTED_MODULE_16__["RomanConvertPipe"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ws_author_src_lib_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ws_author_src_lib_routing_modules_editor_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["EditorSharedModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _quiz_routing_module__WEBPACK_IMPORTED_MODULE_6__["QuizRoutingModule"], _ws_author_src_lib_modules_viewer_viewer_module__WEBPACK_IMPORTED_MODULE_7__["AuthViewerModule"]],
      exports: [_ws_author_src_lib_routing_modules_editor_routing_modules_quiz_components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__["QuizComponent"]],
      providers: [_services_store_service__WEBPACK_IMPORTED_MODULE_14__["QuizStoreService"]],
      entryComponents: [_shared_components_open_plain_ck_editor_open_plain_ck_editor_component__WEBPACK_IMPORTED_MODULE_15__["OpenPlainCkEditorComponent"]]
    })], QuizModule);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/services/resolver.service.ts":
  /*!************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/services/resolver.service.ts ***!
    \************************************************************************************************************/
  /*! exports provided: QuizResolverService */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizServicesResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "QuizResolverService", function () {
      return QuizResolverService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../../../../../modules/shared/services/access-control.service */"./project/ws/author/src/lib/modules/shared/services/access-control.service.ts");
    var QuizResolverService = /*#__PURE__*/function () {
      function QuizResolverService(accessControl) {
        _classCallCheck(this, QuizResolverService);
        this.accessControl = accessControl;
      }
      _createClass(QuizResolverService, [{
        key: "canEdit",
        value: function canEdit(meta) {
          var _this37 = this;
          // reviwer or publisher cannot edit or add or delete
          var returnVal = true;
          if (meta.trackContacts && meta.trackContacts.length) {
            meta.trackContacts.forEach(function (v) {
              if (v.id === _this37.accessControl.userId) {
                returnVal = false;
              }
            });
          }
          if (meta.publisherDetails && meta.publisherDetails.length && meta.status === 'InReview') {
            meta.publisherDetails.forEach(function (v) {
              if (v.id === _this37.accessControl.userId) {
                returnVal = false;
              }
            });
          }
          if (meta.creatorContacts && meta.creatorContacts.length && meta.status === 'Reviewed') {
            meta.creatorContacts.forEach(function (v) {
              if (v.id === _this37.accessControl.userId) {
                returnVal = true;
              }
            });
          }
          return returnVal;
        }
      }]);
      return QuizResolverService;
    }();
    QuizResolverService.ctorParameters = function () {
      return [{
        type: _modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_2__["AccessControlService"]
      }];
    };
    QuizResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], QuizResolverService);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/services/store.service.ts":
  /*!*********************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/services/store.service.ts ***!
    \*********************************************************************************************************/
  /*! exports provided: QuizStoreService */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizServicesStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "QuizStoreService", function () {
      return QuizStoreService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var _components_quiz_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../components/quiz-class */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/components/quiz-class.ts");
    /* harmony import */
    var _constants_quiz_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../constants/quiz-constants */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/constants/quiz-constants.ts");
    /* harmony import */
    var _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ws/author/src/lib/constants/notificationMessage */"./project/ws/author/src/lib/constants/notificationMessage.ts");
    var QuizStoreService = /*#__PURE__*/function () {
      function QuizStoreService() {
        _classCallCheck(this, QuizStoreService);
        this.selectedQuizIndex = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.currentQuizIndex = 0;
        this.collectiveQuiz = {};
        this.validationDoneStatus = false;
        this.resourceType = 'Quiz';
        this.currentId = '';
        this.errorLog = {};
        this.hasChanged = false;
      }
      _createClass(QuizStoreService, [{
        key: "changeQuiz",
        value: function changeQuiz(index) {
          this.currentQuizIndex = index;
          this.selectedQuizIndex.next(index);
        }
      }, {
        key: "updateQuiz",
        value: function updateQuiz(index, quizObj) {
          this.hasChanged = true;
          this.collectiveQuiz[this.currentId][index] = quizObj;
        }
      }, {
        key: "getQuiz",
        value: function getQuiz(index) {
          return this.collectiveQuiz[this.currentId][index] ? JSON.parse(JSON.stringify(this.collectiveQuiz[this.currentId][index])) : null;
        }
      }, {
        key: "getQuizConfig",
        value: function getQuizConfig(questionType) {
          if (!this.questionConfig) {
            // this.questionConfig  =  this.http.get().catch(err=>'some error happened')
            this.questionConfig = _constants_quiz_constants__WEBPACK_IMPORTED_MODULE_4__["QUESTION_CONFIG"];
          }
          return this.questionConfig[_constants_quiz_constants__WEBPACK_IMPORTED_MODULE_4__["QUIZCONFIG"][questionType]];
        }
      }, {
        key: "addQuestion",
        value: function addQuestion(questionType) {
          var ques;
          var config = this.getQuizConfig(questionType);
          switch (questionType) {
            case 'fitb':
              ques = new _components_quiz_class__WEBPACK_IMPORTED_MODULE_3__["FillUps"]({
                questionType: questionType
              });
              ques.options = Array(config.minOptions).fill(new _components_quiz_class__WEBPACK_IMPORTED_MODULE_3__["Option"]({
                isCorrect: true
              }));
              break;
            case 'mtf':
              ques = new _components_quiz_class__WEBPACK_IMPORTED_MODULE_3__["MatchQuiz"]({
                questionType: questionType
              });
              ques.options = Array(config.minOptions).fill(new _components_quiz_class__WEBPACK_IMPORTED_MODULE_3__["MatchOption"]({
                isCorrect: true
              }));
              break;
            default:
              ques = new _components_quiz_class__WEBPACK_IMPORTED_MODULE_3__["McqQuiz"]({
                questionType: questionType
              });
              ques.options = Array(config.minOptions).fill(new _components_quiz_class__WEBPACK_IMPORTED_MODULE_3__["Option"]({
                isCorrect: false
              }));
              break;
          }
          this.collectiveQuiz[this.currentId].push(ques);
          this.changeQuiz(this.collectiveQuiz[this.currentId].length - 1);
          this.hasChanged = true;
        }
      }, {
        key: "removeQuestion",
        value: function removeQuestion(index) {
          var dataArr = this.collectiveQuiz[this.currentId];
          dataArr.splice(index, 1);
          var i = this.currentQuizIndex;
          if (this.currentQuizIndex === index) {
            i = index ? index >= dataArr.length ? index - 1 : index : index;
            this.changeQuiz(i);
          } else if (this.currentQuizIndex > dataArr.length && this.currentQuizIndex > index || this.currentQuizIndex === dataArr.length) {
            i = this.currentQuizIndex - 1;
            this.changeQuiz(i);
          }
          this.hasChanged = true;
        }
      }, {
        key: "generateOptionId",
        value: function generateOptionId(questionId, lastNum) {
          return "".concat(questionId, "-").concat(String.fromCharCode(97 + lastNum));
        }
      }, {
        key: "generateQuestionId",
        value: function generateQuestionId(lastNum) {
          return "".concat(this.resourceType.slice(0, 1), "1").concat(lastNum < 10 ? "0".concat(lastNum) : lastNum);
        }
        // 1:{}
      }, {
        key: "updateErrorlog",
        value: function updateErrorlog(errorData) {
          if (errorData.type) {
            if (!this.errorLog[errorData.quizNumber] && errorData.message) {
              this.errorLog[errorData.quizNumber] = {};
            }
            if (this.errorLog[errorData.quizNumber]) {
              this.errorLog[errorData.quizNumber][errorData.type] = errorData.message;
            }
          }
        }
      }, {
        key: "validateQuiz",
        value: function validateQuiz(quizIndex) {
          var quizObj = this.collectiveQuiz[this.currentId][quizIndex];
          var errMessage = '';
          var errType = '';
          var errMessageForLog = '';
          quizObj.questionId = this.generateQuestionId(quizIndex);
          if (quizObj.question === '' || quizObj.question.trim().length === 0) {
            errMessageForLog = quizObj.question && quizObj.question.trim().length === 0 ? _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_5__["Notify"].QUESTION_SPACES_ALONE : _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_5__["Notify"].QUESTION_EMPTY;
            errMessage = errMessageForLog;
          } else {
            errMessageForLog = '';
          }
          this.updateErrorlog({
            type: 'question',
            quizNumber: quizIndex,
            message: errMessageForLog
          });
          if (quizObj.questionType === 'fitb') {
            errType = 'question';
            if (!quizObj.question.match(/<input/g) || quizObj.question.match(/<input/g).length !== quizObj.options.length) {
              errMessageForLog = _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_5__["Notify"].FILLUPS_BLANKS_OPTIONS;
              if (!errMessage) {
                errMessage = errMessageForLog;
              }
            } else {
              errMessageForLog = '';
            }
            this.updateErrorlog({
              type: errType,
              quizNumber: quizIndex,
              message: errMessageForLog
            });
          }
          var correctAnswersCount = 0;
          for (var ctr = 0; ctr < quizObj.options.length; ctr = ctr + 1) {
            var quesOpt = quizObj.options[ctr];
            var generalCondition = quesOpt.text === '' || quesOpt.text.trim().length === 0;
            var condition = quizObj.questionType === 'mtf' ? generalCondition && quesOpt.match === '' || quesOpt.match.trim().length === 0 : generalCondition;
            if (condition) {
              var checkForNotEmpty = quizObj.questionType === 'mtf' ? quesOpt.text.length || quesOpt.match.length : quesOpt.text.length;
              errMessageForLog = checkForNotEmpty ? _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_5__["Notify"].OPTION_SPACES_ALONE : _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_5__["Notify"].OPTION_EMPTY;
              if (!errMessage) {
                errMessage = errMessageForLog;
              }
            } else {
              errMessageForLog = '';
            }
            if (quesOpt.isCorrect) {
              correctAnswersCount = correctAnswersCount + 1;
            }
            if (!errMessage) {
              quizObj.options[ctr].optionId = this.generateOptionId(quizObj.questionId, ctr);
            }
            errType = String(ctr);
            this.updateErrorlog({
              type: errType,
              quizNumber: quizIndex,
              message: errMessageForLog
            });
          }
          // all options would have got validated
          errMessageForLog = '';
          if (correctAnswersCount === 0 && (quizObj.questionType === 'mcq-sca' || quizObj.questionType === 'mcq-mca')) {
            errMessageForLog = _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_5__["Notify"].MCQ_NO_OPTION_CORRECT;
            if (!errMessage) {
              errMessage = errMessageForLog;
            }
          }
          if (correctAnswersCount === quizObj.options.length && (quizObj.questionType === 'mcq-sca' || quizObj.questionType === 'mcq-mca')) {
            errMessageForLog = _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_5__["Notify"].MCQ_ALL_OPTIONS_CORRECT;
            if (!errMessage) {
              errMessage = errMessageForLog;
            }
          }
          this.updateErrorlog({
            type: 'options',
            quizNumber: quizIndex,
            message: errMessageForLog
          });
          if (quizObj.questionType === 'mcq-sca' && correctAnswersCount > 1) {
            quizObj.questionType = 'mcq-mca';
            quizObj.multiSelection = true;
          }
          if (errMessage) {
            quizObj.isInValid = true;
          } else {
            quizObj.isInValid = false;
          }
          return errMessage;
        }
      }]);
      return QuizStoreService;
    }();
    QuizStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], QuizStoreService);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/components/open-plain-ck-editor/open-plain-ck-editor.component.scss":
  /*!**********************************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/components/open-plain-ck-editor/open-plain-ck-editor.component.scss ***!
    \**********************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizSharedComponentsOpenPlainCkEditorOpenPlainCkEditorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".btnpdg {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL3F1aXovc2hhcmVkL2NvbXBvbmVudHMvb3Blbi1wbGFpbi1jay1lZGl0b3Ivb3Blbi1wbGFpbi1jay1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL3F1aXovc2hhcmVkL2NvbXBvbmVudHMvb3Blbi1wbGFpbi1jay1lZGl0b3Ivb3Blbi1wbGFpbi1jay1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3Qvd3MvYXV0aG9yL3NyYy9saWIvcm91dGluZy9tb2R1bGVzL2VkaXRvci9yb3V0aW5nL21vZHVsZXMvcXVpei9zaGFyZWQvY29tcG9uZW50cy9vcGVuLXBsYWluLWNrLWVkaXRvci9vcGVuLXBsYWluLWNrLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5wZGd7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbn0iLCIuYnRucGRnIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn0iXX0= */";

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/components/open-plain-ck-editor/open-plain-ck-editor.component.ts":
  /*!********************************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/components/open-plain-ck-editor/open-plain-ck-editor.component.ts ***!
    \********************************************************************************************************************************************************/
  /*! exports provided: OpenPlainCkEditorComponent */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizSharedComponentsOpenPlainCkEditorOpenPlainCkEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OpenPlainCkEditorComponent", function () {
      return OpenPlainCkEditorComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    var OpenPlainCkEditorComponent = /*#__PURE__*/function () {
      function OpenPlainCkEditorComponent(data) {
        _classCallCheck(this, OpenPlainCkEditorComponent);
        this.data = data;
        this.result = '';
      }
      _createClass(OpenPlainCkEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return OpenPlainCkEditorComponent;
    }();
    OpenPlainCkEditorComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };
    OpenPlainCkEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-auth-open-plain-ck-editor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./open-plain-ck-editor.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/components/open-plain-ck-editor/open-plain-ck-editor.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./open-plain-ck-editor.component.scss */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/components/open-plain-ck-editor/open-plain-ck-editor.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], OpenPlainCkEditorComponent);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/components/question-editor-sidenav/question-editor-sidenav.component.scss":
  /*!****************************************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/components/question-editor-sidenav/question-editor-sidenav.component.scss ***!
    \****************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizSharedComponentsQuestionEditorSidenavQuestionEditorSidenavComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".custom {\n  padding: 20px 10px;\n  height: 55px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.new-display {\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  opacity: 1;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.bordered {\n  border: 1px solid #cecece;\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.questionlist.cdk-drop-list-dragging .custom:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.invalidQues {\n  background-color: #ec4444 !important;\n  color: #fff !important;\n}\n\n.ws-mat-primary-background {\n  color: #fff !important;\n}\n\n.custom-placeholder {\n  border: dotted 3px #999;\n  min-height: 85px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: 0;\n}\n\n::ng-deep .myfield .mat-form-field-wrapper {\n  padding: 0px !important;\n}\n\n.small-button {\n  height: 32px;\n  width: 32px;\n  transition: 0.5s;\n  margin-right: 4px;\n}\n\n.small-icon {\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n  height: auto;\n  width: auto;\n  transition: 0.5s;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.cursor-disable {\n  cursor: not-allowed !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL3F1aXovc2hhcmVkL2NvbXBvbmVudHMvcXVlc3Rpb24tZWRpdG9yLXNpZGVuYXYvcXVlc3Rpb24tZWRpdG9yLXNpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL3F1aXovc2hhcmVkL2NvbXBvbmVudHMvcXVlc3Rpb24tZWRpdG9yLXNpZGVuYXYvcXVlc3Rpb24tZWRpdG9yLXNpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUFBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0EscUhBQUE7QUNDRjs7QURJQTtFQUNFLHlCQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0FDREY7O0FESUE7RUFDRSxzREFBQTtBQ0RGOztBRElBO0VBQ0Usc0RBQUE7QUNERjs7QURJQTtFQUNFLG9DQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURLQTtFQUNFLHNCQUFBO0FDRkY7O0FES0E7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0RBQUE7RUFDQSxVQUFBO0FDRkY7O0FES0E7RUFDRSx1QkFBQTtBQ0ZGOztBREtBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSwwQkFBQTtBQ0ZGOztBREtBO0VBQ0UsOEJBQUE7QUNGRiIsImZpbGUiOiJwcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL3F1aXovc2hhcmVkL2NvbXBvbmVudHMvcXVlc3Rpb24tZWRpdG9yLXNpZGVuYXYvcXVlc3Rpb24tZWRpdG9yLXNpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tIHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG4ubmV3LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3BhY2l0eTogMTtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmJvcmRlcmVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlY2VjZTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLnF1ZXN0aW9ubGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5jdXN0b206bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5pbnZhbGlkUXVlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDY4LCA2OCkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgO1xufVxuXG4ud3MtbWF0LXByaW1hcnktYmFja2dyb3VuZCB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tcGxhY2Vob2xkZXIge1xuICBib3JkZXI6IGRvdHRlZCAzcHggIzk5OTtcbiAgbWluLWhlaWdodDogODVweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICBvcGFjaXR5OiAwO1xufVxuXG46Om5nLWRlZXAgLm15ZmllbGQgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnNtYWxsLWJ1dHRvbiB7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLm0tMSB7XG4gIG1hcmdpbjogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4uY3Vyc29yLWRpc2FibGUge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG59XG4iLCIuY3VzdG9tIHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG4ubmV3LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3BhY2l0eTogMTtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uYm9yZGVyZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VjZWNlO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4ucXVlc3Rpb25saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmN1c3RvbTpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmludmFsaWRRdWVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjNDQ0NCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4ud3MtbWF0LXByaW1hcnktYmFja2dyb3VuZCB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tcGxhY2Vob2xkZXIge1xuICBib3JkZXI6IGRvdHRlZCAzcHggIzk5OTtcbiAgbWluLWhlaWdodDogODVweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICBvcGFjaXR5OiAwO1xufVxuXG46Om5nLWRlZXAgLm15ZmllbGQgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnNtYWxsLWJ1dHRvbiB7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLm0tMSB7XG4gIG1hcmdpbjogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4uY3Vyc29yLWRpc2FibGUge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG59Il19 */";

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/components/question-editor-sidenav/question-editor-sidenav.component.ts":
  /*!**************************************************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/components/question-editor-sidenav/question-editor-sidenav.component.ts ***!
    \**************************************************************************************************************************************************************/
  /*! exports provided: QuestionEditorSidenavComponent */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizSharedComponentsQuestionEditorSidenavQuestionEditorSidenavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "QuestionEditorSidenavComponent", function () {
      return QuestionEditorSidenavComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/cdk/drag-drop */"./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */
    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/cdk/layout */"./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _services_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../../services/store.service */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/services/store.service.ts");
    /* harmony import */
    var _constants_quiz_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../../../constants/quiz-constants */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/constants/quiz-constants.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component */"./project/ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component.ts");
    var QuestionEditorSidenavComponent = /*#__PURE__*/function () {
      function QuestionEditorSidenavComponent(quizStoreSvc, dialog, breakpointObserver) {
        _classCallCheck(this, QuestionEditorSidenavComponent);
        this.quizStoreSvc = quizStoreSvc;
        this.dialog = dialog;
        this.breakpointObserver = breakpointObserver;
        this.type = '';
        this.data = [];
        this.mediumSizeBreakpoint$ = this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Small]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
          return res.matches;
        }));
        this.mediumScreen = false;
        this.questionType = _constants_quiz_constants__WEBPACK_IMPORTED_MODULE_7__["QUIZ_QUESTION_TYPE"]['multipleChoiceQuestionSingleCorrectAnswer'];
      }
      _createClass(QuestionEditorSidenavComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.activeIndexSubscription) {
            this.activeIndexSubscription.unsubscribe();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this38 = this;
          this.entityMinMaxConfig = this.type === 'assessment' ? this.quizStoreSvc.getQuizConfig('ques') : null;
          this.activeIndexSubscription = this.quizStoreSvc.selectedQuizIndex.subscribe(function (index) {
            _this38.selectedQuizIndex = index;
          });
          this.mediumSizeBreakpoint$.subscribe(function (isLtMedium) {
            _this38.mediumScreen = isLtMedium;
          });
          // this.quizStoreSvc.activeLexId.subscribe(id => {
          //   this.data =  this.quizStoreSvc.getUpdatedArr()
          // })
        }
        /**
        * Adds an entity to the selected entity array
        */
      }, {
        key: "addEntity",
        value: function addEntity() {
          this.quizStoreSvc.addQuestion(this.questionType);
        }
        /**
        * Removes an entity in the selected entity array by index
        * @param index of data element in the array
        */
      }, {
        key: "removeEntity",
        value: function removeEntity(index, event) {
          var _this39 = this;
          event.stopPropagation();
          var confirmDelete = this.dialog.open(_ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialogComponent"], {
            width: '500px',
            data: {
              type: 'deleteQues',
              index: index + 1
            }
          });
          confirmDelete.afterClosed().subscribe(function (confirm) {
            if (confirm) {
              _this39.quizStoreSvc.removeQuestion(index);
            }
          });
        }
        /**
         * Selects the quiz, closes navbar in mobile view and the notification
         * @param index of element in the array
         */
      }, {
        key: "selectEntity",
        value: function selectEntity(index) {
          this.quizStoreSvc.changeQuiz(index);
          if (this.snackbarRef) {
            this.snackbarRef.dismiss();
          }
        }
        /**
        * Rearranges the elements into new position based on drag and drop event
        * @param event CdkDragDrop which has the entity's previous index and current index placed at
        */
      }, {
        key: "drop",
        value: function drop(event) {
          Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.data, event.previousIndex, event.currentIndex);
          this.quizStoreSvc.hasChanged = true;
          if (this.selectedQuizIndex === event.previousIndex) {
            this.selectEntity(event.currentIndex);
          }
        }
      }]);
      return QuestionEditorSidenavComponent;
    }();
    QuestionEditorSidenavComponent.ctorParameters = function () {
      return [{
        type: _services_store_service__WEBPACK_IMPORTED_MODULE_6__["QuizStoreService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QuestionEditorSidenavComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QuestionEditorSidenavComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QuestionEditorSidenavComponent.prototype, "showContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QuestionEditorSidenavComponent.prototype, "canEdit", void 0);
    QuestionEditorSidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-auth-question-editor-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./question-editor-sidenav.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/components/question-editor-sidenav/question-editor-sidenav.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./question-editor-sidenav.component.scss */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/components/question-editor-sidenav/question-editor-sidenav.component.scss"))["default"]]
    })], QuestionEditorSidenavComponent);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/roman-convert.pipe.ts":
  /*!************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/shared/roman-convert.pipe.ts ***!
    \************************************************************************************************************/
  /*! exports provided: RomanConvertPipe */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesQuizSharedRomanConvertPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RomanConvertPipe", function () {
      return RomanConvertPipe;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var RomanConvertPipe = /*#__PURE__*/function () {
      function RomanConvertPipe() {
        _classCallCheck(this, RomanConvertPipe);
        this.list = {
          M: 1000,
          CM: 900,
          D: 500,
          CD: 400,
          C: 100,
          XC: 90,
          L: 50,
          XL: 40,
          X: 10,
          IX: 9,
          V: 5,
          IV: 4,
          I: 1
        };
        this.roman = '';
      }
      _createClass(RomanConvertPipe, [{
        key: "transform",
        value: function transform(value) {
          this.roman = '';
          var temp = value;
          for (var i in this.list) {
            if (this.list[i]) {
              while (temp >= this.list[i]) {
                this.roman += i;
                temp -= this.list[i];
              }
            }
          }
          return this.roman;
        }
      }]);
      return RomanConvertPipe;
    }();
    RomanConvertPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'romanconvert'
    })], RomanConvertPipe);

    /***/
  }
}]);
//# sourceMappingURL=default~routing-modules-collection-collection-module~routing-modules-quiz-quiz-module-es5.js.map