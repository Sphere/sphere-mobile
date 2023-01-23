function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~routing-modules-collection-collection-module~routing-modules-upload-upload-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/upload/components/upload/upload.component.html":
  /*!***************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/upload/components/upload/upload.component.html ***!
    \***************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAuthorSrcLibRoutingModulesEditorRoutingModulesUploadComponentsUploadUploadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"margin-top-xl margin-l-l margin-r-l\" [hidden]=\"previewMode\">\n  <div class=\"flex margin-left-xl flex-middle margin-bottom-xl flex-wrap\">\n    <div class=\"flex flex-middle\">\n      <p class=\"ws-mat-primary-text font-weight-bold title margin-right-xs\" i18n>\n        CONTENT CREATION\n      </p>\n      <mat-icon class=\"ws-mat-primary-text margin-bottom-xxs\">create</mat-icon>\n    </div>\n    <div class=\"margin-left grid\" *ngIf=\"currentStep >= 0\">\n      <div class=\"stepper-grid\" [ngClass]=\"{ 'cursor-disable': disableCursor === true }\">\n        <div class=\"ws-mat-primary-background-op30 stepper-container text-white cursor-pointer\" [ngClass]=\"{\n            'ws-mat-primary-background cursor-disable': currentStep >= 1\n          }\" (click)=\"customStepper(1)\" i18n>\n          1\n        </div>\n        <p class=\"margin-left-xs margin-remove-bottom font-weight-500 op30 cursor-pointer\"\n          [ngClass]=\"{ 'ws-mat-primary-text op100': currentStep >= 1 }\" i18n>\n          Choose Type\n        </p>\n        <span class=\"border border-solid text-gray-500 mx-3\"\n          [ngClass]=\"{ 'ws-mat-primary-text': currentStep >= 2 }\"></span>\n      </div>\n      <div class=\"stepper-grid\">\n        <div class=\"ws-mat-primary-background-op30 stepper-container text-white cursor-pointer\"\n          [ngClass]=\"{ 'ws-mat-primary-background': currentStep >= 2 }\" (click)=\"customStepper(2)\" i18n>\n          2\n        </div>\n        <p class=\"margin-left-xs margin-remove-bottom font-weight-500 op30 cursor-pointer\" [ngClass]=\"{\n            'ws-mat-primary-text op100': currentStep >= 2,\n            'ws-mat-primary-border-bottom-bolder': currentStep === 2\n          }\" (click)=\"customStepper(2)\" i18n>\n          Content\n        </p>\n        <span class=\"border border-solid text-gray-500 mx-3\"\n          [ngClass]=\"{ 'ws-mat-primary-text': currentStep === 3 }\"></span>\n      </div>\n      <div class=\"flex flex-middle\">\n        <div class=\"ws-mat-primary-background-op30 stepper-container text-white cursor-pointer\"\n          [ngClass]=\"{ 'ws-mat-primary-background': currentStep === 3 }\" (click)=\"customStepper(3)\" i18n>\n          3\n        </div>\n        <p class=\"margin-left-xs margin-remove-bottom font-weight-500 op30 cursor-pointer\" [ngClass]=\"{\n            'ws-mat-primary-text op100': currentStep === 3,\n            'ws-mat-primary-border-bottom-bolder': currentStep === 3\n          }\" (click)=\"customStepper(3)\" i18n>\n          Details\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"margin-left-xl margin-top-s margin-bottom-xs\">\n    <div class=\"flex flex-middle\">\n      <p class=\"margin-remove-bottom mat-h3 font-weight-bold\" i18n>Language</p>\n    </div>\n    <div class=\"flex flex-middle\">\n      <p class=\"margin-left-s margin-top-xs font-weight-500 margin-top-s cursor-pointer\"\n        *ngFor=\"let content of contents\" [ngClass]=\"{\n          'ws-mat-primary-border-bottom-bolder': currentContent === content.identifier\n        }\" (click)=\"changeContent(content)\">\n        {{ content.locale | uppercase }}\n      </p>\n      <button mat-icon-button\n        class=\"small-button padding-remove ws-mat-primary-background mat-elevation-z6 margin-left-s\">\n        <mat-icon class=\"text-white small-icon\" [matMenuTriggerFor]=\"menu\" i18n-matTooltip matTooltip=\"Add a language\">\n          add</mat-icon>\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item *ngFor=\"let lang of allLanguages\" (click)=\"createInAnotherLanguage(lang.srclang)\">\n          {{ lang.label | uppercase }}\n        </button>\n      </mat-menu>\n    </div>\n  </div>\n  <div id=\"upload-container\" class=\"mat-app-background\">\n    <div class=\"margin-top-xl margin-left-xl margin-right-xl\" *ngIf=\"currentStep === 2\">\n      <ws-auth-file-upload [canTransCode]=\"canTransCode\" [isSubmitPressed]=\"isSubmitPressed\" (data)=\"action($event)\">\n      </ws-auth-file-upload>\n    </div>\n    <div class=\"margin-top-xl margin-left-xl margin-right-xl\" *ngIf=\"currentStep === 3\">\n      <ws-auth-edit-meta [nextAction]=\"getAction()\" [isSubmitPressed]=\"isSubmitPressed\" (data)=\"action($event)\">\n      </ws-auth-edit-meta>\n    </div>\n  </div>\n\n  <div class=\"buttons margin-top-xl\">\n    <div class=\"button-grid margin-right-xxs cursor-pointer\" (click)=\"toggleSettingButtons()\">\n      <button mat-icon-button class=\"padding-remove ws-mat-primary-background mat-elevation-z6\">\n        <mat-icon class=\"text-white\" *ngIf=\"showSettingButtons\" i18n-matTooltip matTooltip=\"Close\">close</mat-icon>\n        <mat-icon class=\"text-white\" *ngIf=\"!showSettingButtons\">more_vert</mat-icon>\n      </button>\n      <p class=\"mat-h5 margin-remove button-text padding-remove-top\" *ngIf=\"showSettingButtons\" i18n-matTooltip\n        matTooltip=\"Close\">\n        Close\n      </p>\n    </div>\n    <ng-container *ngIf=\"showSettingButtons\">\n      <div class=\"button-grid cursor-pointer\" (click)=\"action('preview')\">\n        <button mat-icon-button class=\"mat-elevation-z5 small-button padding-remove margin-top-l\" i18n-matTooltip\n          matTooltip=\"Preview\">\n          <mat-icon class=\"text-white small-icon ws-mat-primary-text\">remove_red_eye</mat-icon>\n        </button>\n        <p class=\"mat-h5 margin-remove button-text\" i18n-matTooltip matTooltip=\"preview\">\n          Preview\n        </p>\n      </div>\n      <div class=\"button-grid cursor-pointer\" (click)=\"action('save')\">\n        <button mat-icon-button class=\"mat-elevation-z5 small-button padding-remove margin-top-m\" i18n-matTooltip\n          matTooltip=\"Save\">\n          <mat-icon class=\"text-white small-icon ws-mat-primary-text\">save</mat-icon>\n        </button>\n        <p class=\"mat-h5 margin-remove button-text\" i18n-matTooltip matTooltip=\"save\">\n          Save\n        </p>\n      </div>\n      <div class=\"button-grid cursor-pointer\" (click)=\"action('push'); isSubmitPressed = true\"\n        *ngIf=\"getAction() === 'sendForReview'\">\n        <button mat-icon-button class=\"mat-elevation-z5 small-button padding-remove margin-top-m\" i18n-matTooltip\n          matTooltip=\"Send For Review\">\n          <mat-icon class=\"text-white small-icon ws-mat-primary-text\">rate_review</mat-icon>\n        </button>\n        <p class=\"mat-h5 margin-remove button-text\" i18n-matTooltip matTooltip=\"send for review\">\n          Send For Review\n        </p>\n      </div>\n      <div class=\"button-grid cursor-pointer\" (click)=\"action('push'); isSubmitPressed = true\"\n        *ngIf=\"getAction() === 'review'\">\n        <button mat-icon-button class=\"mat-elevation-z5 small-button padding-remove margin-top-m\" i18n-matTooltip\n          matTooltip=\"Review\">\n          <mat-icon class=\"text-white small-icon ws-mat-primary-text\">rate_review</mat-icon>\n        </button>\n        <p class=\"mat-h5 margin-remove button-text\" i18n-matTooltip matTooltip=\"review\">\n          Review\n        </p>\n      </div>\n      <div class=\"button-grid cursor-pointer\" (click)=\"action('push'); isSubmitPressed = true\"\n        *ngIf=\"getAction() === 'publish'\">\n        <button mat-icon-button class=\"mat-elevation-z5 small-button padding-remove margin-top-m\" i18n-matTooltip\n          matTooltip=\"Publish\">\n          <mat-icon class=\"text-white small-icon ws-mat-primary-text\">rate_review</mat-icon>\n        </button>\n        <p class=\"mat-h5 margin-remove button-text\" i18n-matTooltip matTooltip=\"publish\">\n          Publish\n        </p>\n      </div>\n      <div *ngIf=\"canDelete()\" class=\"button-grid cursor-pointer\" (click)=\"action('delete')\">\n        <button mat-icon-button class=\"mat-elevation-z5 small-button padding-remove margin-top-m\" i18n-matTooltip\n          matTooltip=\"Delete\">\n          <mat-icon class=\"text-white small-icon ws-mat-primary-text\">delete</mat-icon>\n        </button>\n        <p class=\"mat-h5 margin-remove button-text\" i18n-matTooltip matTooltip=\"Delete\" i18n>\n          Delete\n        </p>\n      </div>\n      <div class=\"button-grid cursor-pointer\" (click)=\"fullScreenToggle()\">\n        <button mat-icon-button class=\"mat-elevation-z5 small-button padding-remove margin-top-m\" i18n-matTooltip\n          matTooltip=\"Fullscreen\">\n          <mat-icon class=\"text-white small-icon ws-mat-primary-text\">fullscreen</mat-icon>\n        </button>\n        <p class=\"mat-h5 margin-remove button-text\" i18n-matTooltip matTooltip=\"fullscreen\">\n          Fullscreen\n        </p>\n      </div>\n      <!-- <button mat-icon-button class=\" mat-elevation-z5 small-button padding-remove  margin-top-m\" i18n-matTooltip matTooltip=\"Copy\">\n            <mat-icon class=\"text-white small-icon ws-mat-primary-text\">crop_portrait</mat-icon>\n          </button> -->\n    </ng-container>\n  </div>\n</div>\n\n<div *ngIf=\"previewMode\">\n  <mat-icon (click)=\"closePreview()\" class=\"close-preview\" matTooltip=\"Back\"\n    i18n-matTooltip=\"Back button to go to previous page\">\n    arrow_back</mat-icon>\n  <ws-auth-viewer [identifier]=\"currentContent\" [mimeTypeRoute]=\"mimeTypeRoute\"></ws-auth-viewer>\n</div>";

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/upload/components/upload/upload.component.scss":
  /*!*************************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/upload/components/upload/upload.component.scss ***!
    \*************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesUploadComponentsUploadUploadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".cursor-disable {\n  cursor: not-allowed;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  width: 65%;\n}\n\n#upload-container {\n  overflow: auto;\n}\n\n.margin-left {\n  margin-left: 120px;\n}\n\n@media only screen and (max-width: 930px) {\n  .margin-left {\n    margin-left: 80px;\n  }\n}\n\n@media only screen and (max-width: 824px) {\n  .margin-left {\n    margin-left: 40px;\n  }\n}\n\n@media only screen and (max-width: 699px) {\n  .margin-left {\n    padding-top: 24px;\n  }\n}\n\n@media only screen and (max-width: 585px) {\n  .margin-left {\n    margin-left: 0px;\n  }\n}\n\n.stepper-container {\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n}\n\n.stepper-grid {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 0.2fr auto 1fr;\n}\n\n.op100 {\n  opacity: 1;\n}\n\n.text-white {\n  color: #fff;\n}\n\nul li {\n  margin: 20px 0;\n}\n\n.op30 {\n  opacity: 0.3;\n}\n\n.op100 {\n  opacity: 1;\n}\n\n.fullView {\n  height: 100vh;\n  overflow: hidden;\n  top: 0px;\n  left: 0px;\n  position: fixed;\n  right: 0px;\n  bottom: 0px;\n}\n\n.close-preview {\n  position: fixed;\n  top: 15px;\n  left: 15px;\n  z-index: 1;\n  font-size: 30px;\n  cursor: pointer;\n  z-index: 1001;\n}\n\n.buttons {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  position: absolute;\n  top: 110px;\n  right: 0px;\n  z-index: 50;\n}\n\n.small-button {\n  height: 32px;\n  width: 32px;\n  transition: 0.5s;\n  margin-right: 4px;\n}\n\n.small-icon {\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n  height: auto;\n  width: auto;\n  transition: 0.5s;\n}\n\n.button-grid {\n  display: grid;\n  width: 160px;\n  grid-template-columns: 0.2fr 0.95fr;\n}\n\n.button-text {\n  align-self: center;\n  padding-top: 17px;\n  padding-left: 4px;\n}\n\n.margin-right-xxs {\n  margin-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL3VwbG9hZC9jb21wb25lbnRzL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL3VwbG9hZC9jb21wb25lbnRzL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURERTtFQUZGO0lBSUksaUJBQUE7RUNHRjtBQUNGOztBRERFO0VBUEY7SUFRSSxpQkFBQTtFQ0lGO0FBQ0Y7O0FERkU7RUFYRjtJQVlJLGlCQUFBO0VDS0Y7QUFDRjs7QURIRTtFQWZGO0lBZ0JJLGdCQUFBO0VDTUY7QUFDRjs7QURIQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ01GOztBREhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QUNNRjs7QURIQTtFQUNFLFVBQUE7QUNNRjs7QURIQTtFQUNFLFdBQUE7QUNNRjs7QURIQTtFQUNFLGNBQUE7QUNNRjs7QURIQTtFQUNFLFlBQUE7QUNNRjs7QURIQTtFQUNFLFVBQUE7QUNNRjs7QURIQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDTUY7O0FESEE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDTUY7O0FESEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDTUY7O0FESEE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNNRjs7QURIQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNNRjs7QURIQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7QUNNRjs7QURIQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ01GOztBREhBO0VBQ0UsaUJBQUE7QUNNRiIsImZpbGUiOiJwcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL3VwbG9hZC9jb21wb25lbnRzL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Vyc29yLWRpc2FibGUge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLmdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICB3aWR0aDogNjUlO1xufVxuXG4jdXBsb2FkLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubWFyZ2luLWxlZnQge1xuICBtYXJnaW4tbGVmdDogMTIwcHg7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiA5MzBweCkge1xuICAgIC8vIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogODI0cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiA2OTlweCkge1xuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDU4NXB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxufVxuXG4uc3RlcHBlci1jb250YWluZXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uc3RlcHBlci1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciBhdXRvIDFmcjtcbn1cblxuLm9wMTAwIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnRleHQtd2hpdGUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxudWwgbGkge1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLm9wMzAge1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5vcDEwMCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5mdWxsVmlldyB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG59XG5cbi5jbG9zZS1wcmV2aWV3IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IDE1cHg7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMDAxO1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDExMHB4O1xuICByaWdodDogMHB4O1xuICB6LWluZGV4OiA1MDtcbn1cblxuLnNtYWxsLWJ1dHRvbiB7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJ1dHRvbi1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDE2MHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMmZyIDAuOTVmcjtcbn1cblxuLmJ1dHRvbi10ZXh0IHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTdweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5tYXJnaW4tcmlnaHQteHhzIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG4iLCIuY3Vyc29yLWRpc2FibGUge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIHdpZHRoOiA2NSU7XG59XG5cbiN1cGxvYWQtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5tYXJnaW4tbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAxMjBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTMwcHgpIHtcbiAgLm1hcmdpbi1sZWZ0IHtcbiAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjRweCkge1xuICAubWFyZ2luLWxlZnQge1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY5OXB4KSB7XG4gIC5tYXJnaW4tbGVmdCB7XG4gICAgcGFkZGluZy10b3A6IDI0cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTg1cHgpIHtcbiAgLm1hcmdpbi1sZWZ0IHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG59XG5cbi5zdGVwcGVyLWNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5zdGVwcGVyLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMmZyIGF1dG8gMWZyO1xufVxuXG4ub3AxMDAge1xuICBvcGFjaXR5OiAxO1xufVxuXG4udGV4dC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG51bCBsaSB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4ub3AzMCB7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLm9wMTAwIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmZ1bGxWaWV3IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbn1cblxuLmNsb3NlLXByZXZpZXcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMTVweDtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwMDE7XG59XG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTEwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDUwO1xufVxuXG4uc21hbGwtYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi5zbWFsbC1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uYnV0dG9uLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogMTYwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yZnIgMC45NWZyO1xufVxuXG4uYnV0dG9uLXRleHQge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxN3B4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cblxuLm1hcmdpbi1yaWdodC14eHMge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn0iXX0= */";

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/upload/components/upload/upload.component.ts":
  /*!***********************************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/upload/components/upload/upload.component.ts ***!
    \***********************************************************************************************************************/
  /*! exports provided: UploadComponent */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesUploadComponentsUploadUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UploadComponent", function () {
      return UploadComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/components/delete-dialog/delete-dialog.component */"./project/ws/author/src/lib/modules/shared/components/delete-dialog/delete-dialog.component.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/services/access-control.service */"./project/ws/author/src/lib/modules/shared/services/access-control.service.ts");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
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
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    /* harmony import */
    var _ws_author_src_lib_services_notification_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! @ws/author/src/lib/services/notification.service */"./project/ws/author/src/lib/services/notification.service.ts");
    var UploadComponent = /*#__PURE__*/function () {
      function UploadComponent(authInitService, contentService, snackBar, editorService, dialog, router, loaderService, accessService, notificationSvc) {
        _classCallCheck(this, UploadComponent);
        this.authInitService = authInitService;
        this.contentService = contentService;
        this.snackBar = snackBar;
        this.editorService = editorService;
        this.dialog = dialog;
        this.router = router;
        this.loaderService = loaderService;
        this.accessService = accessService;
        this.notificationSvc = notificationSvc;
        this.contents = [];
        this.currentContent = '';
        this.currentStep = 2;
        this.disableCursor = false;
        this.previewMode = false;
        this.canTransCode = true;
        this.showSettingButtons = true;
        this.isChanged = false;
        this.isSubmitPressed = false;
        this.mimeTypeRoute = '';
        this.isMobile = false;
        this.fullScreenToggle = function () {
          var doc = document;
          var elm = doc.getElementById('upload-container');
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
      _createClass(UploadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;
          this.showSettingButtons = this.accessService.rootOrg === 'client1';
          this.allLanguages = this.authInitService.ordinals.subTitles;
          this.canTransCode = this.authInitService.ordinals.canTransCode && this.authInitService.ordinals.canTransCode.length && this.authInitService.ordinals.canTransCode[0] ? this.authInitService.ordinals.canTransCode[0] : false;
          Object.keys(this.contentService.originalContent).map(function (v) {
            return _this.contents.push(_this.contentService.originalContent[v]);
          });
          if (this.contents[0] && this.contents[0].artifactUrl) {
            this.currentStep = 3;
          }
          this.contentService.changeActiveCont.subscribe(function (data) {
            _this.currentContent = data;
            if (_this.contentService.getOriginalMeta(data).isContentEditingDisabled) {
              _this.currentStep = 3;
            }
          });
          this.loaderService.changeLoadState(true);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.loaderService.changeLoad.next(false);
        }
      }, {
        key: "customStepper",
        value: function customStepper(step) {
          if (step === 2 && this.contentService.getOriginalMeta(this.currentContent).isContentEditingDisabled) {
            return;
          }
          if (step === 1) {
            this.disableCursor = true;
          } else if (this.currentStep === 2 && step !== 2 && !this.contentService.getUpdatedMeta(this.currentContent).artifactUrl) {
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
              data: {
                type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].UPLOAD_FILE
              },
              duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000
            });
          } else {
            this.currentStep = step;
          }
        }
      }, {
        key: "createInAnotherLanguage",
        value: function createInAnotherLanguage(language) {
          var _this2 = this;
          this.loaderService.changeLoad.next(true);
          var meta = {
            artifactUrl: ''
          };
          this.contentService.createInAnotherLanguage(language, meta).subscribe(function (data) {
            _this2.loaderService.changeLoad.next(false);
            if (data !== true) {
              _this2.contents.push(data);
              _this2.changeContent(data);
              _this2.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                  type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].CONTENT_CREATE_SUCCESS
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000
              });
            } else {
              _this2.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                  type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].DATA_PRESENT
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000
              });
            }
          }, function (error) {
            if (error.status === 409) {
              var errorMap = new Map();
              errorMap.set(_this2.currentContent, _this2.contentService.getUpdatedMeta(_this2.currentContent));
              _this2.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                width: '750px',
                height: '450px',
                data: {
                  errorFromBackendData: error.error,
                  dataMapping: errorMap
                }
              });
            }
            _this2.loaderService.changeLoad.next(false);
            _this2.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
              data: {
                type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].CONTENT_FAIL
              },
              duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000
            });
          });
        }
      }, {
        key: "changeContent",
        value: function changeContent(content) {
          this.contentService.changeActiveCont.next(content.identifier);
        }
      }, {
        key: "save",
        value: function save(nextAction) {
          var _this3 = this;
          var updatedContent = this.contentService.upDatedContent[this.currentContent] || null; /*{}*/
          if (Object.keys(updatedContent).length) {
            this.isChanged = true;
            this.loaderService.changeLoad.next(true);
            this.triggerSave(updatedContent, this.currentContent).subscribe(function () {
              if (nextAction) {
                _this3.action(nextAction);
              }
              _this3.loaderService.changeLoad.next(false);
              _this3.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                  type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SAVE_SUCCESS
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000
              });
            }, function (error) {
              if (error.status === 409) {
                var errorMap = new Map();
                errorMap.set(_this3.currentContent, _this3.contentService.getUpdatedMeta(_this3.currentContent));
                _this3.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                  width: '80vw',
                  height: '90vh',
                  data: {
                    errorFromBackendData: error.error,
                    dataMapping: errorMap
                  }
                });
              }
              _this3.loaderService.changeLoad.next(false);
              _this3.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                  type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SAVE_FAIL
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000
              });
            });
          } else {
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
              data: {
                type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].UP_TO_DATE
              },
              duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000
            });
          }
        }
      }, {
        key: "validationCheck",
        get: function get() {
          var returnValue = true;
          if (!this.contentService.isValid(this.currentContent)) {
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
              data: {
                type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].MANDATORY_FIELD_ERROR
              },
              duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000
            });
            returnValue = false;
          }
          if (!this.contentService.getUpdatedMeta(this.currentContent).artifactUrl) {
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
              data: {
                type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].UPLOAD_FILE
              },
              duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000
            });
            returnValue = false;
          }
          return returnValue;
        }
      }, {
        key: "takeAction",
        value: function takeAction() {
          var _this4 = this;
          var needSave = Object.keys(this.contentService.upDatedContent[this.currentContent] || {}).length;
          if (!needSave && this.contentService.getUpdatedMeta(this.currentContent).status === 'Live' && !this.isChanged) {
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
              data: this.contentService.getOriginalMeta(this.currentContent)
            });
            dialogRef.afterClosed().subscribe(function (commentsForm) {
              _this4.finalCall(commentsForm);
            });
          }
        }
      }, {
        key: "finalCall",
        value: function finalCall(commentsForm) {
          var _this5 = this;
          if (commentsForm) {
            var body = {
              comment: commentsForm.controls.comments.value,
              operation: commentsForm.controls.action.value === 'accept' || ['Draft', 'Live'].includes(this.contentService.originalContent[this.currentContent].status) ? (this.accessService.authoringConfig.isMultiStepFlow && this.isDirectPublish() || !this.accessService.authoringConfig.isMultiStepFlow) && this.accessService.rootOrg.toLowerCase() === 'client1' ? 100000 : 1 : 0
            };
            var updatedContent = this.contentService.upDatedContent[this.currentContent] || null; /*{}*/
            var needSave = Object.keys(this.contentService.upDatedContent[this.currentContent] || {}).length;
            var updatedMeta = this.contentService.getUpdatedMeta(this.currentContent);
            var saveCall = (needSave ? this.triggerSave(updatedContent, this.currentContent) : Object(rxjs__WEBPACK_IMPORTED_MODULE_16__["of"])({})).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["mergeMap"])(function () {
              return _this5.editorService.forwardBackward(body, _this5.currentContent, _this5.contentService.originalContent[_this5.currentContent].status).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["mergeMap"])(function () {
                return _this5.notificationSvc.triggerPushPullNotification(updatedMeta, body.comment, body.operation ? true : false).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["catchError"])(function () {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_16__["of"])({});
                }));
              }));
            }));
            this.loaderService.changeLoad.next(true);
            saveCall.subscribe(function () {
              _this5.loaderService.changeLoad.next(false);
              _this5.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                  type: _this5.getMessage('success')
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000
              });
              _this5.contents = _this5.contents.filter(function (v) {
                return v.identifier !== _this5.currentContent;
              });
              if (_this5.contents.length) {
                _this5.contentService.changeActiveCont.next(_this5.contents[0].identifier);
              } else {
                _this5.router.navigateByUrl('/author/home');
              }
            }, function (error) {
              if (error.status === 409) {
                var errorMap = new Map();
                errorMap.set(_this5.currentContent, _this5.contentService.getUpdatedMeta(_this5.currentContent));
                _this5.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                  width: '80vw',
                  height: '90vh',
                  data: {
                    errorFromBackendData: error.error,
                    dataMapping: errorMap
                  }
                });
              }
              _this5.loaderService.changeLoad.next(false);
              _this5.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                  type: _this5.getMessage('failure')
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000
              });
            });
          }
        }
      }, {
        key: "preview",
        value: function preview() {
          var _this6 = this;
          var updatedContent = this.contentService.upDatedContent[this.currentContent] || null; /*{}*/
          var saveCall = Object.keys(updatedContent).length ? this.triggerSave(updatedContent, this.currentContent) : Object(rxjs__WEBPACK_IMPORTED_MODULE_16__["of"])({});
          this.loaderService.changeLoad.next(true);
          saveCall.subscribe(function () {
            _this6.mimeTypeRoute = Object(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_18__["VIEWER_ROUTE_FROM_MIME"])(_this6.contentService.getUpdatedMeta(_this6.currentContent).mimeType);
            _this6.loaderService.changeLoad.next(false);
            _this6.previewMode = true;
          }, function (error) {
            if (error.status === 409) {
              var errorMap = new Map();
              errorMap.set(_this6.currentContent, _this6.contentService.getUpdatedMeta(_this6.currentContent));
              _this6.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                width: '750px',
                height: '450px',
                data: {
                  errorFromBackendData: error.error,
                  dataMapping: errorMap
                }
              });
            }
            _this6.loaderService.changeLoad.next(false);
            _this6.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
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
          this.previewMode = false;
        }
      }, {
        key: "toggleSettingButtons",
        value: function toggleSettingButtons() {
          this.showSettingButtons = !this.showSettingButtons;
        }
      }, {
        key: "triggerSave",
        value: function triggerSave(meta, id) {
          var _this7 = this;
          var requestBody = {
            hierarchy: {},
            nodesModified: _defineProperty({}, id, {
              isNew: false,
              root: true,
              metadata: meta
            })
          };
          return this.editorService.updateContent(requestBody).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["tap"])(function () {
            return _this7.contentService.resetOriginalMeta(meta, id);
          }));
        }
      }, {
        key: "getMessage",
        value: function getMessage(type) {
          if (type === 'success') {
            switch (this.contentService.originalContent[this.currentContent].status) {
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
          switch (this.contentService.originalContent[this.currentContent].status) {
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
        key: "action",
        value: function action(type) {
          var _this8 = this;
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
            case 'saveAndNext':
              this.save('next');
              break;
            case 'push':
              if (this.getAction() === 'publish') {
                var dialogRefForPublish = this.dialog.open(_ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"], {
                  width: '70%',
                  data: 'publishMessage'
                });
                dialogRefForPublish.afterClosed().subscribe(function (result) {
                  if (result) {
                    _this8.takeAction();
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
                data: this.contentService.getUpdatedMeta(this.currentContent)
              });
              dialog.afterClosed().subscribe(function (confirm) {
                if (confirm) {
                  _this8.contents = _this8.contents.filter(function (v) {
                    return v.identifier !== _this8.currentContent;
                  });
                  if (_this8.contents.length) {
                    _this8.contentService.changeActiveCont.next(_this8.contents[0].identifier);
                  } else {
                    _this8.router.navigateByUrl('/author/home');
                  }
                }
              });
              break;
            case 'close':
              this.router.navigateByUrl('/author/home');
              break;
          }
        }
      }, {
        key: "isDirectPublish",
        value: function isDirectPublish() {
          return ['Draft', 'Live'].includes(this.contentService.originalContent[this.currentContent].status) && this.isPublisherSame();
        }
      }, {
        key: "delete",
        value: function _delete() {
          var _this9 = this;
          this.loaderService.changeLoad.next(true);
          this.editorService.deleteContent(this.currentContent).subscribe(function () {
            _this9.loaderService.changeLoad.next(false);
            _this9.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
              data: {
                type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SUCCESS
              },
              duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000
            });
            _this9.contents = _this9.contents.filter(function (v) {
              return v.identifier !== _this9.currentContent;
            });
            if (_this9.contents.length) {
              _this9.contentService.changeActiveCont.next(_this9.contents[0].identifier);
            } else {
              _this9.router.navigateByUrl('/author/home');
            }
          }, function (error) {
            if (error.status === 409) {
              _this9.loaderService.changeLoad.next(false);
              var errorMap = new Map();
              errorMap.set(_this9.currentContent, _this9.contentService.getUpdatedMeta(_this9.currentContent));
              _this9.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                width: '750px',
                height: '450px',
                data: {
                  errorFromBackendData: error.error,
                  dataMapping: errorMap
                }
              });
            }
            _this9.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
              data: {
                type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].CONTENT_FAIL
              },
              duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000
            });
          });
        }
      }, {
        key: "isPublisherSame",
        value: function isPublisherSame() {
          var _this10 = this;
          var publisherDetails = this.contentService.getUpdatedMeta(this.currentContent).publisherDetails || [];
          return publisherDetails.find(function (v) {
            return v.id === _this10.accessService.userId;
          }) ? true : false;
        }
      }, {
        key: "getAction",
        value: function getAction() {
          if ((this.accessService.authoringConfig.isMultiStepFlow && this.isDirectPublish() || !this.accessService.authoringConfig.isMultiStepFlow) && this.accessService.rootOrg.toLowerCase() === 'client1') {
            return 'publish';
          }
          if (this.contentService.originalContent[this.currentContent].contentType === 'Knowledge Artifact') {
            return 'publish';
          }
          switch (this.contentService.originalContent[this.currentContent].status) {
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
          var _this11 = this;
          return this.accessService.hasRole(['editor', 'admin']) || ['Draft', 'Live'].includes(this.contentService.originalContent[this.currentContent].status) && this.contentService.originalContent[this.currentContent].creatorContacts.find(function (v) {
            return v.id === _this11.accessService.userId;
          });
        }
      }]);
      return UploadComponent;
    }();
    UploadComponent.ctorParameters = function () {
      return [{
        type: _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_14__["AuthInitService"]
      }, {
        type: _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_12__["EditorContentService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }, {
        type: _ws_author_src_lib_routing_modules_editor_services_editor_service__WEBPACK_IMPORTED_MODULE_13__["EditorService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_15__["LoaderService"]
      }, {
        type: _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_2__["AccessControlService"]
      }, {
        type: _ws_author_src_lib_services_notification_service__WEBPACK_IMPORTED_MODULE_19__["NotificationService"]
      }];
    };
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'ws-auth-upload',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./upload.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/upload/components/upload/upload.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./upload.component.scss */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/upload/components/upload/upload.component.scss"))["default"]]
    })], UploadComponent);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/upload/upload-routing.module.ts":
  /*!**********************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/upload/upload-routing.module.ts ***!
    \**********************************************************************************************************/
  /*! exports provided: UploadRoutingModule */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesUploadUploadRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UploadRoutingModule", function () {
      return UploadRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./components/upload/upload.component */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/upload/components/upload/upload.component.ts");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var routes = [{
      path: '',
      component: _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_1__["UploadComponent"]
    }];
    var UploadRoutingModule = /*#__PURE__*/_createClass(function UploadRoutingModule() {
      _classCallCheck(this, UploadRoutingModule);
    });
    UploadRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], UploadRoutingModule);

    /***/
  },

  /***/"./project/ws/author/src/lib/routing/modules/editor/routing/modules/upload/upload.module.ts":
  /*!**************************************************************************************************!*\
    !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/upload/upload.module.ts ***!
    \**************************************************************************************************/
  /*! exports provided: UploadModule */
  /***/
  function projectWsAuthorSrcLibRoutingModulesEditorRoutingModulesUploadUploadModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UploadModule", function () {
      return UploadModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ws_author_src_lib_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ws/author/src/lib/modules/shared/shared.module */"./project/ws/author/src/lib/modules/shared/shared.module.ts");
    /* harmony import */
    var _ws_author_src_lib_modules_viewer_viewer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ws/author/src/lib/modules/viewer/viewer.module */"./project/ws/author/src/lib/modules/viewer/viewer.module.ts");
    /* harmony import */
    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../../../shared/shared.module */"./project/ws/author/src/lib/routing/modules/editor/shared/shared.module.ts");
    /* harmony import */
    var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./components/upload/upload.component */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/upload/components/upload/upload.component.ts");
    /* harmony import */
    var _upload_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./upload-routing.module */"./project/ws/author/src/lib/routing/modules/editor/routing/modules/upload/upload-routing.module.ts");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");

    // import { FileUploadComponent } from './components/file-upload/file-upload.component'

    var UploadModule = /*#__PURE__*/_createClass(function UploadModule() {
      _classCallCheck(this, UploadModule);
    });
    UploadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_components_upload_upload_component__WEBPACK_IMPORTED_MODULE_6__["UploadComponent"]],
      exports: [
        // FileUploadComponent
      ],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ws_author_src_lib_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["EditorSharedModule"], _upload_routing_module__WEBPACK_IMPORTED_MODULE_7__["UploadRoutingModule"], _ws_author_src_lib_modules_viewer_viewer_module__WEBPACK_IMPORTED_MODULE_4__["AuthViewerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"]]
    })], UploadModule);

    /***/
  }
}]);
//# sourceMappingURL=default~routing-modules-collection-collection-module~routing-modules-upload-upload-module-es5.js.map