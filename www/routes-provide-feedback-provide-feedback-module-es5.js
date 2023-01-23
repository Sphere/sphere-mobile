function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-provide-feedback-provide-feedback-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/content-request/content-request.component.html":
  /*!***************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/content-request/content-request.component.html ***!
    \***************************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesFeedbackV2RoutesProvideFeedbackComponentsContentRequestContentRequestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"container-balanced mat-toolbar p-4 rounded \">\n  <form [formGroup]=\"contentRequestForm\" (ngSubmit)=\"submitContentRequest()\">\n    <section class=\"w-full mb-8\">\n      <h3 class=\"mat-h3\" i18n>What new content would you like to see?</h3>\n      <div class=\"mat-body\">\n        <mat-form-field class=\"w-full\">\n          <textarea matInput [matTextareaAutosize] [matAutosizeMaxRows]=\"10\" [matAutosizeMinRows]=\"3\"\n            formControlName=\"contentRequest\" placeholder=\"Type your request here\" i18n-placeholder></textarea>\n          <mat-hint i18n>\n            Limit to 2000 characters.\n          </mat-hint>\n          <mat-error i18n>\n            You have exceeded 2000 characters.\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </section>\n\n    <div class=\"mt-4 flex justify-end\">\n      <div class=\"mr-2\">\n        <mat-progress-spinner [color]=\"'primary'\" [diameter]=\"40\" [strokeWidth]=\"4\" [mode]=\"'indeterminate'\"\n          *ngIf=\"sendStatus === 'sending'\"></mat-progress-spinner>\n      </div>\n      <button mat-flat-button color=\"primary\" type=\"submit\" [disabled]=\"\n          contentRequestForm.pristine || contentRequestForm.invalid || sendStatus === 'sending'\n        \">\n        <ng-container i18n>Submit</ng-container>\n      </button>\n    </div>\n  </form>\n</section>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/feedback/feedback.component.html":
  /*!*************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/feedback/feedback.component.html ***!
    \*************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesFeedbackV2RoutesProvideFeedbackComponentsFeedbackFeedbackComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"container-balanced mat-toolbar p-4 rounded \">\n  <ng-container [ngTemplateOutlet]=\"sentimentForm\"\n    *ngIf=\"!feedbackConfig || (feedbackConfig && feedbackConfig.feedbackSentimentMode)\"></ng-container>\n\n  <ng-container [ngTemplateOutlet]=\"singleInputForm\" *ngIf=\"feedbackConfig && !feedbackConfig.feedbackSentimentMode\">\n  </ng-container>\n</section>\n\n<!-- Templates -->\n<ng-template #sentimentForm>\n  <form [formGroup]=\"feedbackForm\" (ngSubmit)=\"submitFeedback()\">\n    <section class=\"w-full mb-8\">\n      <h3 class=\"mat-h3\" i18n>What was helpful?</h3>\n      <div class=\"mat-body\">\n        <mat-form-field class=\"w-full\">\n          <textarea matInput [matTextareaAutosize] [matAutosizeMaxRows]=\"10\" [matAutosizeMinRows]=\"3\"\n            formControlName=\"positive\" placeholder=\"Type your feedback here\" i18n-placeholder></textarea>\n          <mat-hint i18n>\n            Limit to 2000 characters.\n          </mat-hint>\n          <mat-error i18n>\n            You have exceeded 2000 characters.\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </section>\n\n    <section class=\"w-full\">\n      <section>\n        <h3 class=\"mat-h3\" i18n>What can be improved?</h3>\n        <div class=\"mat-body\">\n          <mat-form-field class=\"w-full\">\n            <textarea matInput [matTextareaAutosize] [matAutosizeMaxRows]=\"10\" [matAutosizeMinRows]=\"3\"\n              formControlName=\"negative\" placeholder=\"Type your feedback here\" i18n-placeholder></textarea>\n            <mat-hint i18n>\n              Limit to 2000 characters.\n            </mat-hint>\n            <mat-error i18n>\n              You have exceeded 2000 characters.\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </section>\n    </section>\n    <div class=\"mt-4 flex justify-end\">\n      <div class=\"mr-2\">\n        <mat-progress-spinner [color]=\"'primary'\" [diameter]=\"40\" [strokeWidth]=\"4\" [mode]=\"'indeterminate'\" *ngIf=\"\n            positiveFeedbackSendStatus === 'sending' || negativeFeedbackSendStatus === 'sending'\n          \"></mat-progress-spinner>\n      </div>\n      <button mat-flat-button color=\"primary\" type=\"submit\" [disabled]=\"\n          feedbackForm.pristine ||\n          feedbackForm.invalid ||\n          positiveFeedbackSendStatus === 'sending' ||\n          negativeFeedbackSendStatus === 'sending'\n        \">\n        <ng-container i18n>Submit</ng-container>\n      </button>\n    </div>\n  </form>\n</ng-template>\n\n<ng-template #singleInputForm>\n  <form [formGroup]=\"singleFeedbackForm\" (ngSubmit)=\"submitSingleFeedback()\">\n    <section class=\"w-full mb-8\">\n      <div class=\"mat-body\">\n        <mat-form-field class=\"w-full\">\n          <textarea matInput [matTextareaAutosize] [matAutosizeMaxRows]=\"10\" [matAutosizeMinRows]=\"3\"\n            formControlName=\"feedback\" placeholder=\"Type your feedback here\" i18n-placeholder></textarea>\n          <mat-hint i18n>\n            Limit to 2000 characters.\n          </mat-hint>\n          <mat-error i18n>\n            You have exceeded 2000 characters.\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </section>\n    <div class=\"mt-4 flex justify-end\">\n      <div class=\"mr-2\">\n        <mat-progress-spinner [color]=\"'primary'\" [diameter]=\"40\" [strokeWidth]=\"4\" [mode]=\"'indeterminate'\"\n          *ngIf=\"singleFeedbackSendStatus === 'sending'\"></mat-progress-spinner>\n      </div>\n      <button mat-flat-button color=\"primary\" type=\"submit\" [disabled]=\"\n          singleFeedbackForm.pristine ||\n          singleFeedbackForm.invalid ||\n          singleFeedbackSendStatus === 'sending'\n        \">\n        <ng-container i18n>Submit</ng-container>\n      </button>\n    </div>\n  </form>\n</ng-template>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/home/home.component.html":
  /*!*****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/home/home.component.html ***!
    \*****************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesFeedbackV2RoutesProvideFeedbackComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"container-balanced py-8 h-full mx-auto px-4\">\n  <section class=\"flex flex-wrap justify-between mb-8\">\n    <div class=\"p-4\">\n      <h2 class=\"mat-title w-full\" i18n>We appreciate your feedback</h2>\n    </div>\n    <div class=\"p-4\">\n      <a mat-flat-button color=\"primary\" [routerLink]=\"'./my-feedback'\"\n        [matBadge]=\"newItemsCount <= 99 ? newItemsCount : '99+'\" [matBadgeColor]=\"'accent'\"\n        [matBadgeHidden]=\"!newItemsCount\" i18n>\n        My Feedback\n      </a>\n    </div>\n  </section>\n\n  <mat-tab-group mat-align-tabs=\"center\" (selectedTabChange)=\"navigateToTab($event)\" [(selectedIndex)]=\"currentTabIndex\"\n    *ngIf=\"rolesSet.size > 1\">\n    <mat-tab label=\"Platform Feedback\" *ngIf=\"showTab(feedbackTypes.Platform)\" i18n-label></mat-tab>\n    <mat-tab label=\"Request Content\" *ngIf=\"showTab(feedbackTypes.ContentRequest)\" i18n-label></mat-tab>\n    <mat-tab label=\"Other Requests\" *ngIf=\"showTab(feedbackTypes.ServiceRequest)\" i18n-label></mat-tab>\n  </mat-tab-group>\n\n  <section class=\"py-8 h-full\">\n    <router-outlet></router-outlet>\n  </section>\n</section>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/service-request/service-request.component.html":
  /*!***************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/service-request/service-request.component.html ***!
    \***************************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesFeedbackV2RoutesProvideFeedbackComponentsServiceRequestServiceRequestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"container-balanced mat-toolbar p-4 rounded \">\n  <form [formGroup]=\"serviceRequestForm\" (ngSubmit)=\"submitServiceRequest()\">\n    <section class=\"w-full mb-8\">\n      <h3 class=\"mat-h3\" i18n>What services would you like from our platform?</h3>\n      <div class=\"mat-body\">\n        <mat-form-field class=\"w-full\">\n          <textarea matInput [matTextareaAutosize] [matAutosizeMaxRows]=\"10\" [matAutosizeMinRows]=\"3\"\n            formControlName=\"serviceRequest\" placeholder=\"Type your feedback here\" i18n-placeholder></textarea>\n          <mat-hint i18n>\n            Limit to 2000 characters.\n          </mat-hint>\n          <mat-error i18n>\n            You have exceeded 2000 characters.\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </section>\n\n    <div class=\"mt-4 flex justify-end\">\n      <div class=\"mr-2\">\n        <mat-progress-spinner [color]=\"'primary'\" [diameter]=\"40\" [strokeWidth]=\"4\" [mode]=\"'indeterminate'\"\n          *ngIf=\"sendStatus === 'sending'\"></mat-progress-spinner>\n      </div>\n      <button mat-flat-button color=\"primary\" type=\"submit\" [disabled]=\"\n          serviceRequestForm.pristine || serviceRequestForm.invalid || sendStatus === 'sending'\n        \">\n        <ng-container i18n>Submit</ng-container>\n      </button>\n    </div>\n  </form>\n</section>";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/apis/feedback-api.service.ts":
  /*!********************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/apis/feedback-api.service.ts ***!
    \********************************************************************************/
  /*! exports provided: FeedbackApiService */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2ApisFeedbackApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FeedbackApiService", function () {
      return FeedbackApiService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var FeedbackApiService = /*#__PURE__*/function () {
      function FeedbackApiService(http) {
        _classCallCheck(this, FeedbackApiService);
        this.http = http;
        this.FEEDBACK_API_BASE = '/apis/protected/v8/user/feedbackV2';
        this.ROOT_ORG = 'Infosys';
      }
      _createClass(FeedbackApiService, [{
        key: "searchFeedback",
        value: function searchFeedback(query) {
          return this.http.post("".concat(this.FEEDBACK_API_BASE, "/search"), query, {
            headers: {
              rootOrg: this.ROOT_ORG
            }
          });
        }
      }, {
        key: "submitPlatformFeedback",
        value: function submitPlatformFeedback(feedback) {
          return this.http.post("".concat(this.FEEDBACK_API_BASE, "/platform"), feedback, {
            headers: {
              rootOrg: this.ROOT_ORG
            }
          });
        }
      }]);
      return FeedbackApiService;
    }();
    FeedbackApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };
    FeedbackApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], FeedbackApiService);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/content-request/content-request.component.scss":
  /*!*************************************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/content-request/content-request.component.scss ***!
    \*************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesProvideFeedbackComponentsContentRequestContentRequestComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".container-balanced {\n  max-width: 1160px;\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLWNvbW1vbi5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvZmVlZGJhY2stdjIvcm91dGVzL3Byb3ZpZGUtZmVlZGJhY2svY29tcG9uZW50cy9jb250ZW50LXJlcXVlc3QvY29udGVudC1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0UsaUJBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0FDVEYiLCJmaWxlIjoicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvZmVlZGJhY2stdjIvcm91dGVzL3Byb3ZpZGUtZmVlZGJhY2svY29tcG9uZW50cy9jb250ZW50LXJlcXVlc3QvY29udGVudC1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuQGltcG9ydCAnc3R5bGVzL193cy1taXhpbnMuc2Nzcyc7XG5cbiViYWNrZ3JvdW5kLWltYWdlLWNlbnRlciB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuJXBhZ2UtY2VudGVyIHtcbiAgbWF4LXdpZHRoOiAxMTYwcHg7XG4gIC8vODAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4laGVpZ2h0LW1hdC10b29sYmFyLXNpYmxpbmcge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JG1hdC10b29sYmFyLXhzfSk7XG5cbiAgLy8gcGFkZGluZzogJHNpemUtbTtcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC1ndC14cyB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRtYXQtdG9vbGJhci1ndC14c30pO1xuICB9XG59XG4iLCIuY29udGFpbmVyLWJhbGFuY2VkIHtcbiAgbWF4LXdpZHRoOiAxMTYwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xufSJdfQ== */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/content-request/content-request.component.ts":
  /*!***********************************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/content-request/content-request.component.ts ***!
    \***********************************************************************************************************************************/
  /*! exports provided: ContentRequestComponent */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesProvideFeedbackComponentsContentRequestContentRequestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ContentRequestComponent", function () {
      return ContentRequestComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    var ContentRequestComponent = /*#__PURE__*/function () {
      function ContentRequestComponent(feedbackSvc, snackbar) {
        _classCallCheck(this, ContentRequestComponent);
        this.feedbackSvc = feedbackSvc;
        this.snackbar = snackbar;
        this.sendStatus = 'none';
        this.contentRequestForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          contentRequest: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2000)])
        });
      }
      _createClass(ContentRequestComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._submitSub) {
            this._submitSub.unsubscribe();
          }
        }
      }, {
        key: "submitContentRequest",
        value: function submitContentRequest() {
          var _this = this;
          if (this.contentRequestForm.invalid) {
            return;
          }
          this.sendStatus = 'sending';
          this._submitSub = this.feedbackSvc.submitContentRequest({
            text: this.contentRequestForm.value['contentRequest'],
            type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["EFeedbackType"].ContentRequest,
            role: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["EFeedbackRole"].User
          }).subscribe(function () {
            _this.sendStatus = 'done';
            _this.contentRequestForm.patchValue({
              contentRequest: null
            });
            _this.snackbar.openFromComponent(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["FeedbackSnackbarComponent"], {
              data: {
                action: 'content_request_submit',
                code: 'success'
              }
            });
          }, function () {
            _this.sendStatus = 'error';
            _this.snackbar.openFromComponent(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["FeedbackSnackbarComponent"], {
              data: {
                action: 'content_request_submit',
                code: 'failure'
              }
            });
          });
        }
      }]);
      return ContentRequestComponent;
    }();
    ContentRequestComponent.ctorParameters = function () {
      return [{
        type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["FeedbackService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }];
    };
    ContentRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-content-request',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./content-request.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/content-request/content-request.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./content-request.component.scss */"./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/content-request/content-request.component.scss"))["default"]]
    })], ContentRequestComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/feedback/feedback.component.scss":
  /*!***********************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/feedback/feedback.component.scss ***!
    \***********************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesProvideFeedbackComponentsFeedbackFeedbackComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".container-balanced {\n  max-width: 1160px;\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLWNvbW1vbi5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvZmVlZGJhY2stdjIvcm91dGVzL3Byb3ZpZGUtZmVlZGJhY2svY29tcG9uZW50cy9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNFLGlCQUFBO0VBRUEsNEJBQUE7RUFDQSw2QkFBQTtBQ1RGIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2ZlZWRiYWNrLXYyL3JvdXRlcy9wcm92aWRlLWZlZWRiYWNrL2NvbXBvbmVudHMvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5AaW1wb3J0ICdzdHlsZXMvX3dzLW1peGlucy5zY3NzJztcblxuJWJhY2tncm91bmQtaW1hZ2UtY2VudGVyIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4lcGFnZS1jZW50ZXIge1xuICBtYXgtd2lkdGg6IDExNjBweDtcbiAgLy84MDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbiVoZWlnaHQtbWF0LXRvb2xiYXItc2libGluZyB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gI3skbWF0LXRvb2xiYXIteHN9KTtcblxuICAvLyBwYWRkaW5nOiAkc2l6ZS1tO1xuICBAaW5jbHVkZSBicmVha3BvaW50LWd0LXhzIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JG1hdC10b29sYmFyLWd0LXhzfSk7XG4gIH1cbn1cbiIsIi5jb250YWluZXItYmFsYW5jZWQge1xuICBtYXgtd2lkdGg6IDExNjBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59Il19 */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/feedback/feedback.component.ts":
  /*!*********************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/feedback/feedback.component.ts ***!
    \*********************************************************************************************************************/
  /*! exports provided: FeedbackComponent */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesProvideFeedbackComponentsFeedbackFeedbackComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ws-widget/utils */"./library/ws-widget/utils/src/public-api.ts");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var FeedbackComponent = /*#__PURE__*/function () {
      function FeedbackComponent(feedbackApi, snackbar, route, configSvc) {
        _classCallCheck(this, FeedbackComponent);
        this.feedbackApi = feedbackApi;
        this.snackbar = snackbar;
        this.route = route;
        this.configSvc = configSvc;
        this.positiveFeedbackSendStatus = 'none';
        this.negativeFeedbackSendStatus = 'none';
        this.singleFeedbackSendStatus = 'none';
        this.feedbackForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          positive: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(2000)]),
          negative: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(2000)])
        });
        this.singleFeedbackForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          feedback: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(2000)])
        });
        var feedbackConfigResolve = this.route.snapshot.data['feedbackConfig'];
        if (feedbackConfigResolve && feedbackConfigResolve.data) {
          this.feedbackConfig = feedbackConfigResolve.data;
        }
      }
      _createClass(FeedbackComponent, [{
        key: "submitPositiveFeedback",
        value: function submitPositiveFeedback(text) {
          var _this2 = this;
          this.positiveFeedbackSendStatus = 'sending';
          this.feedbackApi.submitPlatformFeedback({
            text: text,
            type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["EFeedbackType"].Platform,
            sentiment: 'positive',
            role: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["EFeedbackRole"].User
          }).subscribe(function () {
            _this2.positiveFeedbackSendStatus = 'done';
            _this2.feedbackForm.patchValue({
              positive: null
            });
            _this2.snackbar.openFromComponent(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["FeedbackSnackbarComponent"], {
              data: {
                action: 'platform_feedback_submit',
                code: 'success'
              }
            });
          }, function () {
            _this2.positiveFeedbackSendStatus = 'error';
            _this2.snackbar.openFromComponent(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["FeedbackSnackbarComponent"], {
              data: {
                action: 'platform_feedback_submit',
                code: 'failure'
              }
            });
          });
        }
      }, {
        key: "submitNegativeFeedback",
        value: function submitNegativeFeedback(text) {
          var _this3 = this;
          this.negativeFeedbackSendStatus = 'sending';
          this.feedbackApi.submitPlatformFeedback({
            text: text,
            type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["EFeedbackType"].Platform,
            sentiment: 'negative',
            role: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["EFeedbackRole"].User
          }).subscribe(function () {
            _this3.negativeFeedbackSendStatus = 'done';
            _this3.feedbackForm.patchValue({
              negative: null
            });
            _this3.snackbar.openFromComponent(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["FeedbackSnackbarComponent"], {
              data: {
                action: 'platform_feedback_submit',
                code: 'success'
              }
            });
          }, function () {
            _this3.negativeFeedbackSendStatus = 'error';
            _this3.snackbar.openFromComponent(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["FeedbackSnackbarComponent"], {
              data: {
                action: 'platform_feedback_submit',
                code: 'failure'
              }
            });
          });
        }
      }, {
        key: "submitFeedback",
        value: function submitFeedback() {
          if (this.feedbackForm.controls['positive'].valid && this.feedbackForm.value['positive']) {
            this.submitPositiveFeedback(this.feedbackForm.value['positive']);
          }
          if (this.feedbackForm.controls['negative'].valid && this.feedbackForm.value['negative']) {
            this.submitNegativeFeedback(this.feedbackForm.value['negative']);
          }
        }
      }, {
        key: "submitSingleFeedback",
        value: function submitSingleFeedback() {
          var _this4 = this;
          this.singleFeedbackSendStatus = 'sending';
          this.feedbackApi.submitPlatformFeedback({
            text: this.singleFeedbackForm.value['feedback'],
            role: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["EFeedbackRole"].User,
            type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["EFeedbackType"].Platform
          }).subscribe(function () {
            _this4.singleFeedbackSendStatus = 'done';
            if (_this4.configSvc.instanceConfig && _this4.configSvc.instanceConfig.rootOrg === 'RootOrg') {
              var req = {
                'event-id': 'platform_feedback',
                'tag-value-pair': {
                  '#feedback': _this4.singleFeedbackForm.value['feedback']
                },
                recipients: {
                  learner: [_this4.configSvc.userProfile && _this4.configSvc.userProfile.userId || '']
                }
              };
              _this4.feedbackApi.contentShareNew(req).subscribe();
            }
            _this4.singleFeedbackForm.patchValue({
              feedback: null
            });
            _this4.snackbar.openFromComponent(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["FeedbackSnackbarComponent"], {
              data: {
                action: 'content_feedback_submit',
                code: 'success'
              }
            });
          }, function () {
            _this4.singleFeedbackSendStatus = 'error';
            _this4.snackbar.openFromComponent(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["FeedbackSnackbarComponent"], {
              data: {
                action: 'content_feedback_submit',
                code: 'failure'
              }
            });
          });
        }
      }]);
      return FeedbackComponent;
    }();
    FeedbackComponent.ctorParameters = function () {
      return [{
        type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["FeedbackService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_4__["ConfigurationsService"]
      }];
    };
    FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-feedback',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./feedback.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/feedback/feedback.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./feedback.component.scss */"./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/feedback/feedback.component.scss"))["default"]]
    })], FeedbackComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/home/home.component.scss":
  /*!***************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/home/home.component.scss ***!
    \***************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesProvideFeedbackComponentsHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".container-balanced {\n  max-width: 1160px;\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLWNvbW1vbi5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvZmVlZGJhY2stdjIvcm91dGVzL3Byb3ZpZGUtZmVlZGJhY2svY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDRSxpQkFBQTtFQUVBLDRCQUFBO0VBQ0EsNkJBQUE7QUNURiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9mZWVkYmFjay12Mi9yb3V0ZXMvcHJvdmlkZS1mZWVkYmFjay9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy9fd3MtdmFycy5zY3NzJztcbkBpbXBvcnQgJ3N0eWxlcy9fd3MtbWl4aW5zLnNjc3MnO1xuXG4lYmFja2dyb3VuZC1pbWFnZS1jZW50ZXIge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbiVwYWdlLWNlbnRlciB7XG4gIG1heC13aWR0aDogMTE2MHB4O1xuICAvLzgwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuJWhlaWdodC1tYXQtdG9vbGJhci1zaWJsaW5nIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRtYXQtdG9vbGJhci14c30pO1xuXG4gIC8vIHBhZGRpbmc6ICRzaXplLW07XG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQtZ3QteHMge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gI3skbWF0LXRvb2xiYXItZ3QteHN9KTtcbiAgfVxufVxuIiwiLmNvbnRhaW5lci1iYWxhbmNlZCB7XG4gIG1heC13aWR0aDogMTE2MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn0iXX0= */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/home/home.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/home/home.component.ts ***!
    \*************************************************************************************************************/
  /*! exports provided: HomeComponent */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesProvideFeedbackComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(route, router) {
        var _this5 = this;
        _classCallCheck(this, HomeComponent);
        this.route = route;
        this.router = router;
        this.subscriptionSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.feedbackTypes = _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackType"];
        this.newItemsCount = 0;
        this.tabs = [];
        this.rolesSet = new Set();
        var feedbackSummaryResolve = this.route.snapshot.data['feedbackSummary'];
        if (feedbackSummaryResolve.data) {
          this.feedbackSummary = feedbackSummaryResolve.data;
          this.newItemsCount = feedbackSummaryResolve.data.forActionCount;
          this.feedbackSummary.roles.forEach(function (role) {
            if (role.enabled && role.role !== _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].Author && role.role !== _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].Platform) {
              _this5.rolesSet.add(role.role);
            }
          });
        }
        this.typeToRoleMap = new Map([[_ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackType"].Platform, _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].User], [_ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackType"].ContentRequest, _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].Content], [_ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackType"].ServiceRequest, _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].Service]]);
        this.initTabs();
      }
      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;
          var tab;
          if (this.route.children[0].snapshot.url.length) {
            tab = this.route.children[0].snapshot.url[0].path;
          } else {
            tab = '';
          }
          this.currentTabIndex = tab ? this.tabs.indexOf(tab) : 0;
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.subscriptionSubject$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
              return true;
            }
            return false;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return _this6.route.children[0].url;
          })).subscribe(function (url) {
            try {
              var tabName = url[0].path;
              _this6.currentTabIndex = _this6.tabs.indexOf(tabName);
            } catch (e) {
              _this6.currentTabIndex = 0;
            }
          }, function () {
            _this6.currentTabIndex = 0;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptionSubject$.next();
          this.subscriptionSubject$.complete();
        }
      }, {
        key: "navigateToTab",
        value: function navigateToTab(event) {
          this.router.navigate(["".concat(this.tabs[event.index] || this.tabs[0])], {
            relativeTo: this.route
          });
        }
      }, {
        key: "showTab",
        value: function showTab(feedbackType) {
          var feedbackRole = this.typeToRoleMap.get(feedbackType);
          if (feedbackRole && this.rolesSet.has(feedbackRole) && this.rolesSet.size > 1) {
            return true;
          }
          return false;
        }
      }, {
        key: "initTabs",
        value: function initTabs() {
          var _this7 = this;
          var allTabs = [_ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackType"].Platform, _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackType"].ContentRequest, _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackType"].ServiceRequest];
          allTabs.forEach(function (tab) {
            var feedbackRole = _this7.typeToRoleMap.get(tab);
            var roleDetail = _this7.feedbackSummary ? _this7.feedbackSummary.roles.find(function (role) {
              return role.role === feedbackRole;
            }) : undefined;
            if (roleDetail && roleDetail.enabled) {
              _this7.tabs.push(tab);
            }
          });
        }
      }]);
      return HomeComponent;
    }();
    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./home.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./home.component.scss */"./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/home/home.component.scss"))["default"]]
    })], HomeComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/service-request/service-request.component.scss":
  /*!*************************************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/service-request/service-request.component.scss ***!
    \*************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesProvideFeedbackComponentsServiceRequestServiceRequestComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".container-balanced {\n  max-width: 1160px;\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLWNvbW1vbi5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvZmVlZGJhY2stdjIvcm91dGVzL3Byb3ZpZGUtZmVlZGJhY2svY29tcG9uZW50cy9zZXJ2aWNlLXJlcXVlc3Qvc2VydmljZS1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0UsaUJBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0FDVEYiLCJmaWxlIjoicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvZmVlZGJhY2stdjIvcm91dGVzL3Byb3ZpZGUtZmVlZGJhY2svY29tcG9uZW50cy9zZXJ2aWNlLXJlcXVlc3Qvc2VydmljZS1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuQGltcG9ydCAnc3R5bGVzL193cy1taXhpbnMuc2Nzcyc7XG5cbiViYWNrZ3JvdW5kLWltYWdlLWNlbnRlciB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuJXBhZ2UtY2VudGVyIHtcbiAgbWF4LXdpZHRoOiAxMTYwcHg7XG4gIC8vODAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4laGVpZ2h0LW1hdC10b29sYmFyLXNpYmxpbmcge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JG1hdC10b29sYmFyLXhzfSk7XG5cbiAgLy8gcGFkZGluZzogJHNpemUtbTtcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC1ndC14cyB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRtYXQtdG9vbGJhci1ndC14c30pO1xuICB9XG59XG4iLCIuY29udGFpbmVyLWJhbGFuY2VkIHtcbiAgbWF4LXdpZHRoOiAxMTYwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xufSJdfQ== */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/service-request/service-request.component.ts":
  /*!***********************************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/service-request/service-request.component.ts ***!
    \***********************************************************************************************************************************/
  /*! exports provided: ServiceRequestComponent */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesProvideFeedbackComponentsServiceRequestServiceRequestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ServiceRequestComponent", function () {
      return ServiceRequestComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    var ServiceRequestComponent = /*#__PURE__*/function () {
      function ServiceRequestComponent(feedbackSvc, snackbar) {
        _classCallCheck(this, ServiceRequestComponent);
        this.feedbackSvc = feedbackSvc;
        this.snackbar = snackbar;
        this.sendStatus = 'none';
        this.serviceRequestForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          serviceRequest: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2000)])
        });
      }
      _createClass(ServiceRequestComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._submitSub) {
            this._submitSub.unsubscribe();
          }
        }
      }, {
        key: "submitServiceRequest",
        value: function submitServiceRequest() {
          var _this8 = this;
          if (this.serviceRequestForm.invalid) {
            return;
          }
          this.sendStatus = 'sending';
          this._submitSub = this.feedbackSvc.submitServiceRequest({
            text: this.serviceRequestForm.value['serviceRequest'],
            type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["EFeedbackType"].ServiceRequest,
            role: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["EFeedbackRole"].User
          }).subscribe(function () {
            _this8.sendStatus = 'done';
            _this8.serviceRequestForm.patchValue({
              serviceRequest: null
            });
            _this8.snackbar.openFromComponent(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["FeedbackSnackbarComponent"], {
              data: {
                action: 'service_request_submit',
                code: 'success'
              }
            });
          }, function () {
            _this8.sendStatus = 'error';
            _this8.snackbar.openFromComponent(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["FeedbackSnackbarComponent"], {
              data: {
                action: 'service_request_submit',
                code: 'failure'
              }
            });
          });
        }
      }]);
      return ServiceRequestComponent;
    }();
    ServiceRequestComponent.ctorParameters = function () {
      return [{
        type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["FeedbackService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }];
    };
    ServiceRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-service-request',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./service-request.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/service-request/service-request.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./service-request.component.scss */"./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/service-request/service-request.component.scss"))["default"]]
    })], ServiceRequestComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/provide-feedback-routing.module.ts":
  /*!**************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/provide-feedback-routing.module.ts ***!
    \**************************************************************************************************************/
  /*! exports provided: ProvideFeedbackRoutingModule */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesProvideFeedbackProvideFeedbackRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProvideFeedbackRoutingModule", function () {
      return ProvideFeedbackRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    /* harmony import */
    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./components/home/home.component */"./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/home/home.component.ts");
    /* harmony import */
    var _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./components/feedback/feedback.component */"./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/feedback/feedback.component.ts");
    /* harmony import */
    var _components_content_request_content_request_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./components/content-request/content-request.component */"./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/content-request/content-request.component.ts");
    /* harmony import */
    var _components_service_request_service_request_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./components/service-request/service-request.component */"./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/service-request/service-request.component.ts");
    /* harmony import */
    var _resolvers_feedback_summary_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../../resolvers/feedback-summary.resolver */"./project/ws/app/src/lib/routes/feedback-v2/resolvers/feedback-summary.resolver.ts");
    /* harmony import */
    var _resolvers_feedback_config_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ../../resolvers/feedback-config.resolver */"./project/ws/app/src/lib/routes/feedback-v2/resolvers/feedback-config.resolver.ts");
    var routes = [{
      path: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackType"].Platform,
      component: _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_5__["FeedbackComponent"],
      resolve: {
        feedbackConfig: _resolvers_feedback_config_resolver__WEBPACK_IMPORTED_MODULE_9__["FeedbackConfigResolver"]
      }
    }, {
      path: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackType"].ContentRequest,
      component: _components_content_request_content_request_component__WEBPACK_IMPORTED_MODULE_6__["ContentRequestComponent"]
    }, {
      path: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackType"].ServiceRequest,
      component: _components_service_request_service_request_component__WEBPACK_IMPORTED_MODULE_7__["ServiceRequestComponent"]
    }, {
      path: '',
      redirectTo: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackType"].Platform
    }];
    var ProvideFeedbackRoutingModule = /*#__PURE__*/_createClass(function ProvideFeedbackRoutingModule() {
      _classCallCheck(this, ProvideFeedbackRoutingModule);
    });
    ProvideFeedbackRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        children: routes,
        resolve: {
          feedbackSummary: _resolvers_feedback_summary_resolver__WEBPACK_IMPORTED_MODULE_8__["FeedbackSummaryResolver"]
        }
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProvideFeedbackRoutingModule);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/provide-feedback.module.ts":
  /*!******************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/provide-feedback.module.ts ***!
    \******************************************************************************************************/
  /*! exports provided: ProvideFeedbackModule */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesProvideFeedbackProvideFeedbackModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProvideFeedbackModule", function () {
      return ProvideFeedbackModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    /* harmony import */
    var _apis_feedback_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../apis/feedback-api.service */"./project/ws/app/src/lib/routes/feedback-v2/apis/feedback-api.service.ts");
    /* harmony import */
    var _resolvers_feedback_config_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../../resolvers/feedback-config.resolver */"./project/ws/app/src/lib/routes/feedback-v2/resolvers/feedback-config.resolver.ts");
    /* harmony import */
    var _resolvers_feedback_summary_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../../resolvers/feedback-summary.resolver */"./project/ws/app/src/lib/routes/feedback-v2/resolvers/feedback-summary.resolver.ts");
    /* harmony import */
    var _components_content_request_content_request_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./components/content-request/content-request.component */"./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/content-request/content-request.component.ts");
    /* harmony import */
    var _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./components/feedback/feedback.component */"./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/feedback/feedback.component.ts");
    /* harmony import */
    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./components/home/home.component */"./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/home/home.component.ts");
    /* harmony import */
    var _components_service_request_service_request_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./components/service-request/service-request.component */"./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/components/service-request/service-request.component.ts");
    /* harmony import */
    var _provide_feedback_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./provide-feedback-routing.module */"./project/ws/app/src/lib/routes/feedback-v2/routes/provide-feedback/provide-feedback-routing.module.ts");
    var ProvideFeedbackModule = /*#__PURE__*/_createClass(function ProvideFeedbackModule() {
      _classCallCheck(this, ProvideFeedbackModule);
    });
    ProvideFeedbackModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_10__["FeedbackComponent"], _components_content_request_content_request_component__WEBPACK_IMPORTED_MODULE_9__["ContentRequestComponent"], _components_service_request_service_request_component__WEBPACK_IMPORTED_MODULE_12__["ServiceRequestComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _provide_feedback_routing_module__WEBPACK_IMPORTED_MODULE_13__["ProvideFeedbackRoutingModule"], _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["BtnContentFeedbackV2Module"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"]],
      providers: [_apis_feedback_api_service__WEBPACK_IMPORTED_MODULE_6__["FeedbackApiService"], _resolvers_feedback_summary_resolver__WEBPACK_IMPORTED_MODULE_8__["FeedbackSummaryResolver"], _resolvers_feedback_config_resolver__WEBPACK_IMPORTED_MODULE_7__["FeedbackConfigResolver"]]
    })], ProvideFeedbackModule);

    /***/
  }
}]);
//# sourceMappingURL=routes-provide-feedback-provide-feedback-module-es5.js.map