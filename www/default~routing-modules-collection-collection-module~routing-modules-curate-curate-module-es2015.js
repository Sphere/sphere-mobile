(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~routing-modules-collection-collection-module~routing-modules-curate-curate-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/components/curate/curate.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/components/curate/curate.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-xl margin-l-l margin-r-l mobile-r\" [hidden]=\"previewMode\">\n  <div class=\"flex margin-left-xl flex-middle margin-bottom-xl flex-wrap flex-row\">\n    <div class=\"flex\">\n      <div class=\"flex\">\n        <p class=\"ws-mat-primary-text font-weight-bold title margin-right-xs\" i18n>\n          CONTENT CREATION\n        </p>\n        <mat-icon class=\" ws-mat-primary-text margin-bottom-xxs\">create</mat-icon>\n      </div>\n      <div class=\"buttons\">\n        <div class=\"button-grid margin-right-xxs cursor-pointer\" (click)=\"toggleSettingButtons()\">\n          <button mat-icon-button class=\"padding-remove ws-mat-primary-background mat-elevation-z6\">\n            <mat-icon class=\"text-white\" *ngIf=\"showSettingButtons\" i18n-matTooltip matTooltip=\"Close\">close</mat-icon>\n            <mat-icon class=\"text-white\" *ngIf=\"!showSettingButtons\">more_vert</mat-icon>\n          </button>\n          <p class=\"mat-h5 margin-remove button-text padding-remove-top\" *ngIf=\"showSettingButtons\" i18n-matTooltip\n            matTooltip=\"Close\">\n            Close\n          </p>\n        </div>\n        <ng-container *ngIf=\"showSettingButtons\">\n          <div class=\"button-grid cursor-pointer\" (click)=\"action('preview')\">\n            <button mat-icon-button class=\" mat-elevation-z5 small-button padding-remove  margin-top-l\" i18n-matTooltip\n              matTooltip=\"Preview\">\n              <mat-icon class=\"text-white small-icon ws-mat-primary-text\">remove_red_eye</mat-icon>\n            </button>\n            <p class=\"mat-h5 margin-remove button-text\" i18n-matTooltip matTooltip=\"preview\">\n              Preview\n            </p>\n          </div>\n          <div class=\"button-grid cursor-pointer\" (click)=\"action('save')\">\n            <button mat-icon-button class=\" mat-elevation-z5 small-button padding-remove  margin-top-m\" i18n-matTooltip\n              matTooltip=\"Save\">\n              <mat-icon class=\"text-white small-icon ws-mat-primary-text\">save</mat-icon>\n            </button>\n            <p class=\"mat-h5 margin-remove button-text\" i18n-matTooltip matTooltip=\"save\">\n              Save\n            </p>\n          </div>\n          <div class=\"button-grid cursor-pointer\" (click)=\"action('push'); isSubmitPressed = true\"\n            *ngIf=\"getAction() === 'sendForReview'\">\n            <button mat-icon-button class=\" mat-elevation-z5 small-button padding-remove  margin-top-m\" i18n-matTooltip\n              matTooltip=\"Send For Review\">\n              <mat-icon class=\"text-white small-icon ws-mat-primary-text\">rate_review</mat-icon>\n            </button>\n            <p class=\"mat-h5 margin-remove button-text\" i18n-matTooltip matTooltip=\"send for review\">\n              Send For Review\n            </p>\n          </div>\n          <div class=\"button-grid cursor-pointer\" (click)=\"action('push'); isSubmitPressed = true\"\n            *ngIf=\"getAction() === 'review'\">\n            <button mat-icon-button class=\" mat-elevation-z5 small-button padding-remove  margin-top-m\" i18n-matTooltip\n              matTooltip=\"Review\">\n              <mat-icon class=\"text-white small-icon ws-mat-primary-text\">rate_review</mat-icon>\n            </button>\n            <p class=\"mat-h5 margin-remove button-text\" i18n-matTooltip matTooltip=\"review\">\n              Review\n            </p>\n          </div>\n          <div class=\"button-grid cursor-pointer\" (click)=\"action('push'); isSubmitPressed = true\"\n            *ngIf=\"getAction() === 'publish'\">\n            <button mat-icon-button class=\" mat-elevation-z5 small-button padding-remove  margin-top-m\" i18n-matTooltip\n              matTooltip=\"Publish\">\n              <mat-icon class=\"text-white small-icon ws-mat-primary-text\">rate_review</mat-icon>\n            </button>\n            <p class=\"mat-h5 margin-remove button-text\" i18n-matTooltip matTooltip=\"publish\">\n              Publish\n            </p>\n          </div>\n          <div class=\"button-grid cursor-pointer\" (click)=\"action('delete')\">\n            <button mat-icon-button class=\" mat-elevation-z5 small-button padding-remove  margin-top-m\" i18n-matTooltip\n              matTooltip=\"Delete\">\n              <mat-icon class=\"text-white small-icon ws-mat-primary-text\">delete</mat-icon>\n            </button>\n            <p class=\"mat-h5 margin-remove button-text\" i18n-matTooltip matTooltip=\"Delete\" i18n>\n              Delete\n            </p>\n          </div>\n          <div class=\"button-grid cursor-pointer\" (click)=\"fullScreenToggle()\">\n            <button mat-icon-button class=\" mat-elevation-z5 small-button padding-remove  margin-top-m\" i18n-matTooltip\n              matTooltip=\"Fullscreen\">\n              <mat-icon class=\"text-white small-icon ws-mat-primary-text\">fullscreen</mat-icon>\n            </button>\n            <p class=\"mat-h5 margin-remove button-text\" i18n-matTooltip matTooltip=\"fullscreen\">\n              Fullscreen\n            </p>\n          </div>\n          <!-- <button mat-icon-button class=\" mat-elevation-z5 small-button padding-remove  margin-top-m\" i18n-matTooltip matTooltip=\"Copy\">\n            <mat-icon class=\"text-white small-icon ws-mat-primary-text\">crop_portrait</mat-icon>\n          </button> -->\n        </ng-container>\n      </div>\n    </div>\n    \n  </div>\n  <div class=\"margin-left margin-auto grid\" *ngIf=\"currentStep >= 0\">\n    <div class=\"stepper-grid\" [ngClass]=\"{ 'cursor-disable': disableCursor === true }\">\n      <div class=\"ws-mat-primary-background-op30 stepper-container text-white cursor-pointer\" [ngClass]=\"{\n          'ws-mat-primary-background cursor-disable': currentStep >= 1\n        }\" (click)=\"customStepper(1)\">\n        1\n      </div>\n      <p class=\"margin-left-xs margin-remove-bottom font-weight-500 op30 cursor-pointer\"\n        [ngClass]=\"{ 'ws-mat-primary-text op100': currentStep >= 1 }\" i18n>\n        Choose Type\n      </p>\n      <span class=\" border border-solid text-gray-500 mx-3\"\n        [ngClass]=\"{ 'ws-mat-primary-text': currentStep >= 2 }\"></span>\n    </div>\n    <div class=\"stepper-grid\">\n      <div class=\"ws-mat-primary-background-op30 stepper-container text-white cursor-pointer\"\n        [ngClass]=\"{ 'ws-mat-primary-background': currentStep >= 2 }\" (click)=\"customStepper(2)\" i18n>\n        2\n      </div>\n      <p class=\"margin-left-xs margin-remove-bottom font-weight-500 op30 cursor-pointer\" [ngClass]=\"{\n          'ws-mat-primary-text op100': currentStep >= 2,\n          'ws-mat-primary-border-bottom-bolder': currentStep === 2\n        }\" (click)=\"customStepper(2)\" i18n>\n        Content\n      </p>\n      <span class=\" border border-solid text-gray-500 mx-3\"\n        [ngClass]=\"{ 'ws-mat-primary-text': currentStep === 3 }\"></span>\n    </div>\n    <div class=\"flex flex-middle\">\n      <div class=\"ws-mat-primary-background-op30 stepper-container text-white cursor-pointer\"\n        [ngClass]=\"{ 'ws-mat-primary-background': currentStep === 3 }\" (click)=\"customStepper(3)\" i18n>\n        3\n      </div>\n      <p class=\"margin-left-xs margin-remove-bottom font-weight-500 op30 cursor-pointer\" [ngClass]=\"{\n          'ws-mat-primary-text op100': currentStep === 3,\n          'ws-mat-primary-border-bottom-bolder': currentStep === 3\n        }\" (click)=\"customStepper(3)\" i18n>\n        Details\n      </p>\n    </div>\n  </div>\n  <div class=\" margin-left-xl margin-top-s margin-bottom-xs\">\n    <div class=\"flex flex-middle\">\n      <p class=\"margin-remove-bottom mat-h3 font-weight-bold\" i18n>Language</p>\n    </div>\n    <div class=\"flex flex-middle\">\n      <p class=\"margin-left-s margin-top-xs font-weight-500 margin-top-s cursor-pointer\"\n        *ngFor=\"let content of contents\" [ngClass]=\"{\n          'ws-mat-primary-border-bottom-bolder': currentContent === content.identifier\n        }\" (click)=\"changeContent(content)\">\n        {{ content.locale | uppercase }}\n      </p>\n      <button mat-icon-button\n        class=\" small-button padding-remove ws-mat-primary-background mat-elevation-z6 margin-left-s\">\n        <mat-icon class=\"text-white small-icon\" [matMenuTriggerFor]=\"menu\" i18n-matTooltip matTooltip=\"Add a language\">\n          add</mat-icon>\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item *ngFor=\"let lang of allLanguages\" (click)=\"createInAnotherLanguage(lang.srclang)\">\n          {{ lang.label | uppercase }}\n        </button>\n      </mat-menu>\n    </div>\n  </div>\n\n  <div id=\"curate-container\" class=\"mat-app-background\">\n    <div class=\"margin-top-xl margin-left-xl margin-right-xl\" *ngIf=\"currentStep === 2\">\n      <ws-auth-url-upload [isSubmitPressed]=\"isSubmitPressed\" (data)=\"action($event)\"></ws-auth-url-upload>\n    </div>\n    <div class=\"margin-top-xl margin-left-xl margin-right-xl\" *ngIf=\"currentStep === 3\">\n      <ws-auth-edit-meta [stage]=\"1\" [nextAction]=\"'done'\" [isSubmitPressed]=\"isSubmitPressed\" (data)=\"action($event)\">\n      </ws-auth-edit-meta>\n    </div>\n  </div>\n\n</div>\n\n<div *ngIf=\"previewMode\">\n  <mat-icon (click)=\"closePreview()\" class=\"close-preview\" matTooltip=\"Back\"\n    i18n-matTooltip=\"Back button to go to previous page\">\n    arrow_back</mat-icon>\n  <ws-auth-viewer [identifier]=\"currentContent\" [mimeTypeRoute]=\"mimeTypeRoute\"></ws-auth-viewer>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/components/url-upload/url-upload.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/components/url-upload/url-upload.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-m margin-left-xl width-2-3\">\n  <form class=\"\" [formGroup]=\"urlUploadForm\">\n    <div class=\"flex-middle\">\n      <!-- margin-left15<div class=\"flex margin-top-xl margin-bottom-m   flex-middle\">\n        <p class=\"mat-h2  font-weight-500 margin-right-s\" i18n>Link</p>\n        <mat-form-field appearance=\"outline\" class=\" margin-left5 flex-grow60 padding-remove-bottom\">\n          <input type=\"url\" matInput autoComplete=\"false\" i18n-placeholder formControlName=\"artifactUrl\" placeholder=\"Enter or paste URL here\"\n            class=\"input ws-mat-primary-text\" />\n          <mat-error *ngIf=\"showError(urlUploadForm.controls.artifactUrl)\" i18n=\"Name Error|Explains name is required\">\n            URL is mandatory\n          </mat-error>\n        </mat-form-field>\n      </div> -->\n      <div class=\"margin-top-xl\">\n        <p class=\"font-weight-bold margin-remove-bottom\" i18n>\n          Link\n        </p>\n        <mat-form-field appearance=\"outline\" class=\"margin-top-xs\" style=\"width: 80%;\">\n          <input type=\"url\" matInput formControlName=\"artifactUrl\" i18n-placeholder\n            placeholder=\"Enter or paste URL here\" />\n          <mat-error *ngIf=\"showError(urlUploadForm.controls.artifactUrl)\" i18n>\n            URL is mandatory\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div class=\"margin-top-xs\">\n        <p class=\"font-weight-bold margin-remove-bottom\" i18n>\n          Is It Available on internet ?\n        </p>\n        <mat-form-field appearance=\"outline\" class=\"margin-top-xs\">\n          <mat-select formControlName=\"isInIntranet\" placeholder=\"e.g. Yes\">\n            <mat-option [value]=\"false\" i18n>Yes</mat-option>\n            <mat-option [value]=\"true\" i18n>No</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"margin-top-xs\">\n        <p class=\"font-weight-bold margin-remove-bottom\" i18n>\n          Opens in a new tab?\n        </p>\n        <mat-form-field appearance=\"outline\" class=\"margin-top-xs\">\n          <mat-select formControlName=\"isIframeSupported\" placeholder=\"e.g. Yes\">\n            <mat-option [value]=\"'Yes'\" i18n>No</mat-option>\n            <mat-option [value]=\"'No'\" i18n>Yes</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <!-- <div class=\"flex flex-middle margin-top-xs padding-top-l\">\n        <mat-checkbox [checked]=\"iprAccepted\" (change)=\"iprChecked()\"></mat-checkbox>\n        <p class=\"margin-left-xs margin-remove-bottom\">\n          I have read and agree to the\n          <span class=\"ws-mat-primary-text font-weight-bold cursor-pointer\" (click)=\"showIpr()\">IPR Declaration</span>\n        </p>\n      </div> -->\n    </div>\n    <!-- <div class=\"flex flex-start\">\n      <button type=\"button\" mat-raised-button class=\"ws-mat-primary-background margin-top-m\" (click)=\"submit()\">\n        <div class=\"flex flex-middle\">\n          <p class=\"text-white margin-remove-bottom\" i18n>Update Content</p>\n        </div>\n      </button>\n    </div> -->\n  </form>\n</div>\n");

/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/components/curate/curate.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/components/curate/curate.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cursor-disable {\n  cursor: not-allowed;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  width: 65%;\n}\n\n#curate-container {\n  overflow: auto;\n}\n\n.mobile-r {\n  display: flex;\n  flex-direction: column;\n}\n\n.margin-left {\n  margin-left: 120px;\n}\n\n@media only screen and (max-width: 930px) {\n  .margin-left {\n    margin-left: 80px;\n  }\n}\n\n@media only screen and (max-width: 824px) {\n  .margin-left {\n    margin-left: 40px;\n  }\n}\n\n@media only screen and (max-width: 699px) {\n  .margin-left {\n    padding-top: 24px;\n  }\n}\n\n@media only screen and (max-width: 585px) {\n  .margin-left {\n    margin-left: 0px;\n  }\n}\n\n.stepper-container {\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n}\n\n.stepper-grid {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 0.2fr auto 1fr;\n}\n\n.op100 {\n  opacity: 1;\n}\n\n.text-white {\n  color: #fff;\n}\n\nul li {\n  margin: 20px 0;\n}\n\n.op30 {\n  opacity: 0.3;\n}\n\n.op100 {\n  opacity: 1;\n}\n\n.fullView {\n  height: 100vh;\n  overflow: hidden;\n  top: 0px;\n  left: 0px;\n  position: fixed;\n  right: 0px;\n  bottom: 0px;\n}\n\n.close-preview {\n  position: fixed;\n  top: 15px;\n  left: 15px;\n  z-index: 1;\n  font-size: 30px;\n  cursor: pointer;\n  z-index: 1001;\n}\n\n.buttons {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  position: absolute;\n  right: 0px;\n  z-index: 50;\n}\n\n.small-button {\n  height: 32px;\n  width: 32px;\n  transition: 0.5s;\n  margin-right: 4px;\n}\n\n.small-icon {\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n  height: auto;\n  width: auto;\n  transition: 0.5s;\n}\n\n.normal-button {\n  border-radius: 50%;\n  height: 40px;\n  display: flex;\n  width: 40px;\n  z-index: 3;\n  justify-content: center;\n}\n\n.button-grid {\n  display: grid;\n  width: 160px;\n  grid-template-columns: 0.2fr 0.95fr;\n}\n\n@media only screen and (max-width: 930px) {\n  .button-grid {\n    width: 125px;\n  }\n}\n\n.margin-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n@media only screen and (max-width: 400px) {\n  .margin-auto {\n    margin: 0;\n    margin-left: 20px;\n  }\n}\n\n.button-text {\n  align-self: center;\n  padding-top: 17px;\n  padding-left: 4px;\n  font-weight: 600;\n}\n\n.margin-right-xxs {\n  margin-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2N1cmF0ZS9jb21wb25lbnRzL2N1cmF0ZS9jdXJhdGUuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2N1cmF0ZS9jb21wb25lbnRzL2N1cmF0ZS9jdXJhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBREFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDR0Y7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBRENFO0VBRkY7SUFJSSxpQkFBQTtFQ0NGO0FBQ0Y7O0FEQ0U7RUFQRjtJQVFJLGlCQUFBO0VDRUY7QUFDRjs7QURBRTtFQVhGO0lBWUksaUJBQUE7RUNHRjtBQUNGOztBRERFO0VBZkY7SUFnQkksZ0JBQUE7RUNJRjtBQUNGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSUY7O0FEREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtBQ0lGOztBRERBO0VBQ0UsVUFBQTtBQ0lGOztBRERBO0VBQ0UsV0FBQTtBQ0lGOztBRERBO0VBQ0UsY0FBQTtBQ0lGOztBRERBO0VBQ0UsWUFBQTtBQ0lGOztBRERBO0VBQ0UsVUFBQTtBQ0lGOztBRERBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNJRjs7QUREQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNJRjs7QUREQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtBQ0dGOztBREFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDR0Y7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQ0dGOztBREFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtBQ0dGOztBREZFO0VBSkY7SUFLSSxZQUFBO0VDS0Y7QUFDRjs7QURIQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNNRjs7QURMRTtFQUhGO0lBSUksU0FBQTtJQUNBLGlCQUFBO0VDUUY7QUFDRjs7QUROQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDU0Y7O0FETkE7RUFDRSxpQkFBQTtBQ1NGIiwiZmlsZSI6InByb2plY3Qvd3MvYXV0aG9yL3NyYy9saWIvcm91dGluZy9tb2R1bGVzL2VkaXRvci9yb3V0aW5nL21vZHVsZXMvY3VyYXRlL2NvbXBvbmVudHMvY3VyYXRlL2N1cmF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXJzb3ItZGlzYWJsZSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIHdpZHRoOiA2NSU7XG59XG5cbiNjdXJhdGUtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4ubW9iaWxlLXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8vIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5NjBweCkge1xuICAvLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLy8gfVxufVxuXG4ubWFyZ2luLWxlZnQge1xuICBtYXJnaW4tbGVmdDogMTIwcHg7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiA5MzBweCkge1xuICAgIC8vIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogODI0cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiA2OTlweCkge1xuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDU4NXB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxufVxuXG4uc3RlcHBlci1jb250YWluZXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uc3RlcHBlci1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciBhdXRvIDFmcjtcbn1cblxuLm9wMTAwIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnRleHQtd2hpdGUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxudWwgbGkge1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLm9wMzAge1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5vcDEwMCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5mdWxsVmlldyB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG59XG5cbi5jbG9zZS1wcmV2aWV3IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IDE1cHg7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMDAxO1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyB0b3A6IDExMHB4O1xuICByaWdodDogMHB4O1xuICB6LWluZGV4OiA1MDtcbn1cblxuLnNtYWxsLWJ1dHRvbiB7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLm5vcm1hbC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDQwcHg7XG4gIHotaW5kZXg6IDM7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnV0dG9uLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogMTYwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yZnIgMC45NWZyO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogOTMwcHgpIHtcbiAgICB3aWR0aDogMTI1cHg7XG4gIH1cbn1cbi5tYXJnaW4tYXV0b3tcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG59XG4uYnV0dG9uLXRleHQge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxN3B4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1hcmdpbi1yaWdodC14eHMge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbiIsIi5jdXJzb3ItZGlzYWJsZSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgd2lkdGg6IDY1JTtcbn1cblxuI2N1cmF0ZS1jb250YWluZXIge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm1vYmlsZS1yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm1hcmdpbi1sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzBweCkge1xuICAubWFyZ2luLWxlZnQge1xuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyNHB4KSB7XG4gIC5tYXJnaW4tbGVmdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgLm1hcmdpbi1sZWZ0IHtcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODVweCkge1xuICAubWFyZ2luLWxlZnQge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbn1cblxuLnN0ZXBwZXItY29udGFpbmVyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLnN0ZXBwZXItZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yZnIgYXV0byAxZnI7XG59XG5cbi5vcDEwMCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi50ZXh0LXdoaXRlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbnVsIGxpIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi5vcDMwIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4ub3AxMDAge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uZnVsbFZpZXcge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xufVxuXG4uY2xvc2UtcHJldmlldyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTAwMTtcbn1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgei1pbmRleDogNTA7XG59XG5cbi5zbWFsbC1idXR0b24ge1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLnNtYWxsLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5ub3JtYWwtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0MHB4O1xuICB6LWluZGV4OiAzO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbi1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDE2MHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMmZyIDAuOTVmcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTMwcHgpIHtcbiAgLmJ1dHRvbi1ncmlkIHtcbiAgICB3aWR0aDogMTI1cHg7XG4gIH1cbn1cblxuLm1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLm1hcmdpbi1hdXRvIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbn1cblxuLmJ1dHRvbi10ZXh0IHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTdweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tYXJnaW4tcmlnaHQteHhzIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59Il19 */");

/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/components/curate/curate.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/components/curate/curate.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: CurateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurateComponent", function() { return CurateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/delete-dialog/delete-dialog.component */ "./project/ws/author/src/lib/modules/shared/components/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var _ws_author_src_lib_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ws/author/src/lib/services/notification.service */ "./project/ws/author/src/lib/services/notification.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ws/author/src/lib/constants/constant */ "./project/ws/author/src/lib/constants/constant.ts");
/* harmony import */ var _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ws/author/src/lib/constants/notificationMessage */ "./project/ws/author/src/lib/constants/notificationMessage.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_comments_dialog_comments_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/comments-dialog/comments-dialog.component */ "./project/ws/author/src/lib/modules/shared/components/comments-dialog/comments-dialog.component.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component */ "./project/ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/error-parser/error-parser.component */ "./project/ws/author/src/lib/modules/shared/components/error-parser/error-parser.component.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/notification/notification.component */ "./project/ws/author/src/lib/modules/shared/components/notification/notification.component.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/services/access-control.service */ "./project/ws/author/src/lib/modules/shared/services/access-control.service.ts");
/* harmony import */ var _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ws/author/src/lib/routing/modules/editor/services/editor-content.service */ "./project/ws/author/src/lib/routing/modules/editor/services/editor-content.service.ts");
/* harmony import */ var _ws_author_src_lib_routing_modules_editor_services_editor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ws/author/src/lib/routing/modules/editor/services/editor.service */ "./project/ws/author/src/lib/routing/modules/editor/services/editor.service.ts");
/* harmony import */ var _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ws/author/src/lib/services/init.service */ "./project/ws/author/src/lib/services/init.service.ts");
/* harmony import */ var _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ws/author/src/lib/services/loader.service */ "./project/ws/author/src/lib/services/loader.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _url_upload_url_upload_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../url-upload/url-upload.component */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/components/url-upload/url-upload.component.ts");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");





















let CurateComponent = class CurateComponent {
    constructor(contentService, snackBar, editorService, dialog, router, loaderService, authInitService, accessService, notificationSvc) {
        this.contentService = contentService;
        this.snackBar = snackBar;
        this.editorService = editorService;
        this.dialog = dialog;
        this.router = router;
        this.loaderService = loaderService;
        this.authInitService = authInitService;
        this.accessService = accessService;
        this.notificationSvc = notificationSvc;
        this.contents = [];
        this.currentContent = '';
        this.currentStep = 2;
        this.disableCursor = false;
        this.previewMode = false;
        this.showSettingButtons = true;
        this.isSubmitPressed = false;
        this.isChanged = false;
        this.mimeTypeRoute = '';
        this.fullScreenToggle = () => {
            const doc = document;
            const elm = doc.getElementById('curate-container');
            if (elm.requestFullscreen) {
                !doc.fullscreenElement ? elm.requestFullscreen() : doc.exitFullscreen();
            }
            else if (elm.mozRequestFullScreen) {
                !doc.mozFullScreen ? elm.mozRequestFullScreen() : doc.mozCancelFullScreen();
            }
            else if (elm.msRequestFullscreen) {
                !doc.msFullscreenElement ? elm.msRequestFullscreen() : doc.msExitFullscreen();
            }
            else if (elm.webkitRequestFullscreen) {
                !doc.webkitIsFullscreen ? elm.webkitRequestFullscreen() : doc.webkitCancelFullscreen();
            }
        };
    }
    ngOnInit() {
        this.showSettingButtons = this.accessService.rootOrg === 'client1';
        this.allLanguages = this.authInitService.ordinals.subTitles;
        Object.keys(this.contentService.originalContent).map(v => this.contents.push(this.contentService.originalContent[v]));
        this.contentService.changeActiveCont.subscribe(data => {
            this.currentContent = data;
            if (this.contentService.getOriginalMeta(data).isContentEditingDisabled) {
                this.currentStep = 3;
            }
        });
        this.loaderService.changeLoadState(true);
    }
    ngOnDestroy() {
        this.loaderService.changeLoad.next(false);
    }
    customStepper(step) {
        if (step === 2 &&
            this.contentService.getOriginalMeta(this.currentContent).isContentEditingDisabled) {
            return;
        }
        if (step === 1) {
            this.disableCursor = true;
        }
        else if (this.currentStep === 2 && step === 3) {
            this.urlComponent.isSubmitPressed = true;
            this.urlComponent.submit();
        }
        else if (step !== 3 && this.currentStep !== 2) {
            this.currentStep = step;
        }
    }
    createInAnotherLanguage(language) {
        this.loaderService.changeLoad.next(true);
        this.contentService.createInAnotherLanguage(language).subscribe(data => {
            this.loaderService.changeLoad.next(false);
            if (data !== true) {
                this.contents.push(data);
                this.changeContent(data);
                this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                    data: {
                        type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].CONTENT_CREATE_SUCCESS,
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
                });
            }
            else {
                this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                    data: {
                        type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].DATA_PRESENT,
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
                });
            }
        }, error => {
            if (error.status === 409) {
                const errorMap = new Map();
                errorMap.set(this.currentContent, this.contentService.getUpdatedMeta(this.currentContent));
                this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                    width: '750px',
                    height: '450px',
                    data: {
                        errorFromBackendData: error.error,
                        dataMapping: errorMap,
                    },
                });
            }
            this.loaderService.changeLoad.next(false);
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].CONTENT_FAIL,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
            });
        });
    }
    changeContent(content) {
        this.contentService.changeActiveCont.next(content.identifier);
    }
    save() {
        const updatedContent = this.contentService.upDatedContent[this.currentContent] || null; /*{}*/
        if (Object.keys(updatedContent).length) {
            this.isChanged = true;
            this.loaderService.changeLoad.next(true);
            this.triggerSave(updatedContent, this.currentContent).subscribe(() => {
                this.loaderService.changeLoad.next(false);
                this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                    data: {
                        type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SAVE_SUCCESS,
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
                });
            }, error => {
                if (error.status === 409) {
                    const errorMap = new Map();
                    errorMap.set(this.currentContent, this.contentService.getUpdatedMeta(this.currentContent));
                    this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                        width: '80vw',
                        height: '90vh',
                        data: {
                            errorFromBackendData: error.error,
                            dataMapping: errorMap,
                        },
                    });
                }
                this.loaderService.changeLoad.next(false);
                this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                    data: {
                        type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SAVE_FAIL,
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
                });
            });
        }
        else {
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].UP_TO_DATE,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
            });
        }
    }
    get validationCheck() {
        let returnValue = true;
        if (!this.contentService.isValid(this.currentContent)) {
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].MANDATORY_FIELD_ERROR,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
            });
            returnValue = false;
        }
        else if (!this.contentService.getUpdatedMeta(this.currentContent).artifactUrl &&
            !this.contentService.getUpdatedMeta(this.currentContent).body) {
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].BODY_OR_URL,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
            });
            returnValue = false;
        }
        return returnValue;
    }
    takeAction() {
        const needSave = Object.keys(this.contentService.upDatedContent[this.currentContent] || {})
            .length;
        if (!needSave &&
            this.contentService.getUpdatedMeta(this.currentContent).status === 'Live' &&
            !this.isChanged) {
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].UP_TO_DATE,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
            });
            return;
        }
        if (this.validationCheck) {
            const dialogRef = this.dialog.open(_ws_author_src_lib_modules_shared_components_comments_dialog_comments_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CommentsDialogComponent"], {
                width: '750px',
                height: '450px',
                data: this.contentService.getOriginalMeta(this.currentContent),
            });
            dialogRef.afterClosed().subscribe((commentsForm) => {
                this.finalCall(commentsForm);
            });
        }
    }
    finalCall(commentsForm) {
        if (commentsForm) {
            const body = {
                comment: commentsForm.controls.comments.value,
                operation: commentsForm.controls.action.value === 'accept' ||
                    ['Draft', 'Live'].includes(this.contentService.originalContent[this.currentContent].status)
                    ? ((this.accessService.authoringConfig.isMultiStepFlow && this.isDirectPublish()) ||
                        !this.accessService.authoringConfig.isMultiStepFlow) &&
                        this.accessService.rootOrg.toLowerCase() === 'client1'
                        ? 100000
                        : 1
                    : 0,
            };
            const updatedContent = this.contentService.upDatedContent[this.currentContent] || null; /*{}*/
            const updatedMeta = this.contentService.getUpdatedMeta(this.currentContent);
            const needSave = Object.keys(this.contentService.upDatedContent[this.currentContent] || {})
                .length;
            const saveCall = (needSave
                ? this.triggerSave(updatedContent, this.currentContent)
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["of"])({})).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["mergeMap"])(() => this.editorService
                .forwardBackward(body, this.currentContent, this.contentService.originalContent[this.currentContent].status)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["mergeMap"])(() => this.notificationSvc
                .triggerPushPullNotification(updatedMeta, body.comment, body.operation ? true : false)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["catchError"])(() => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["of"])({});
            }))))));
            this.loaderService.changeLoad.next(true);
            saveCall.subscribe(() => {
                this.loaderService.changeLoad.next(false);
                this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                    data: {
                        type: this.getMessage('success'),
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
                });
                this.contents = this.contents.filter(v => v.identifier !== this.currentContent);
                if (this.contents.length) {
                    this.contentService.changeActiveCont.next(this.contents[0].identifier);
                }
                else {
                    this.router.navigateByUrl('/author/home');
                }
            }, error => {
                if (error.status === 409) {
                    const errorMap = new Map();
                    errorMap.set(this.currentContent, this.contentService.getUpdatedMeta(this.currentContent));
                    this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                        width: '80vw',
                        height: '90vh',
                        data: {
                            errorFromBackendData: error.error,
                            dataMapping: errorMap,
                        },
                    });
                }
                this.loaderService.changeLoad.next(false);
                this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                    data: {
                        type: this.getMessage('failure'),
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
                });
            });
        }
    }
    isPublisherSame() {
        const publisherDetails = this.contentService.getUpdatedMeta(this.currentContent).publisherDetails || [];
        return publisherDetails.find(v => v.id === this.accessService.userId) ? true : false;
    }
    preview() {
        const updatedContent = this.contentService.upDatedContent[this.currentContent] || null; /*{}*/
        const saveCall = Object.keys(updatedContent).length
            ? this.triggerSave(updatedContent, this.currentContent)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["of"])({});
        this.loaderService.changeLoad.next(true);
        saveCall.subscribe(() => {
            this.loaderService.changeLoad.next(false);
            this.previewMode = true;
            this.mimeTypeRoute = Object(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_20__["VIEWER_ROUTE_FROM_MIME"])(this.contentService.getUpdatedMeta(this.currentContent).mimeType);
        }, error => {
            if (error.status === 409) {
                const errorMap = new Map();
                errorMap.set(this.currentContent, this.contentService.getUpdatedMeta(this.currentContent));
                this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                    width: '750px',
                    height: '450px',
                    data: {
                        errorFromBackendData: error.error,
                        dataMapping: errorMap,
                    },
                });
            }
            this.loaderService.changeLoad.next(false);
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SAVE_FAIL,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
            });
        });
    }
    closePreview() {
        this.previewMode = false;
    }
    toggleSettingButtons() {
        this.showSettingButtons = !this.showSettingButtons;
    }
    triggerSave(meta, id) {
        const requestBody = {
            hierarchy: {},
            nodesModified: {
                [id]: {
                    isNew: false,
                    root: true,
                    metadata: meta,
                },
            },
        };
        return this.editorService
            .updateContent(requestBody)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["tap"])(() => this.contentService.resetOriginalMeta(meta, id)));
    }
    getMessage(type) {
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
    action(type) {
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
                if (this.getAction() === 'publish') {
                    const dialogRefForPublish = this.dialog.open(_ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"], {
                        width: '70%',
                        data: this.isDirectPublish() ? 'directPublishMessage' : 'publishMessage',
                    });
                    dialogRefForPublish.afterClosed().subscribe(result => {
                        if (result) {
                            this.takeAction();
                        }
                    });
                }
                else {
                    this.takeAction();
                }
                break;
            case 'delete':
                const dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DeleteDialogComponent"], {
                    width: '600px',
                    height: 'auto',
                    data: this.contentService.getUpdatedMeta(this.currentContent),
                });
                dialog.afterClosed().subscribe(confirm => {
                    if (confirm) {
                        this.contents = this.contents.filter(v => v.identifier !== this.currentContent);
                        if (this.contents.length) {
                            this.contentService.changeActiveCont.next(this.contents[0].identifier);
                        }
                        else {
                            this.router.navigateByUrl('/author/home');
                        }
                    }
                });
                break;
            case 'close':
                this.router.navigateByUrl('/author/home');
                break;
        }
    }
    isDirectPublish() {
        return (['Draft', 'Live'].includes(this.contentService.originalContent[this.currentContent].status) &&
            this.isPublisherSame());
    }
    delete() {
        this.loaderService.changeLoad.next(true);
        this.editorService.deleteContent(this.currentContent).subscribe(() => {
            this.loaderService.changeLoad.next(false);
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SUCCESS,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
            });
            this.contents = this.contents.filter(v => v.identifier !== this.currentContent);
            if (this.contents.length) {
                this.contentService.changeActiveCont.next(this.contents[0].identifier);
            }
            else {
                this.router.navigateByUrl('/author/home');
            }
        }, error => {
            if (error.status === 409) {
                const errorMap = new Map();
                errorMap.set(this.currentContent, this.contentService.getUpdatedMeta(this.currentContent));
                this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                    width: '750px',
                    height: '450px',
                    data: {
                        errorFromBackendData: error.error,
                        dataMapping: errorMap,
                    },
                });
            }
            this.loaderService.changeLoad.next(false);
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].CONTENT_FAIL,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
            });
        });
    }
    getAction() {
        if (((this.accessService.authoringConfig.isMultiStepFlow && this.isDirectPublish()) ||
            !this.accessService.authoringConfig.isMultiStepFlow) &&
            this.accessService.rootOrg.toLowerCase() === 'client1') {
            return 'publish';
        }
        switch (this.contentService.originalContent[this.currentContent].status) {
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
    canDelete() {
        return (this.accessService.hasRole(['editor', 'admin']) ||
            (['Draft', 'Live'].includes(this.contentService.originalContent[this.currentContent].status) &&
                this.contentService.originalContent[this.currentContent].creatorContacts.find(v => v.id === this.accessService.userId)));
    }
};
CurateComponent.ctorParameters = () => [
    { type: _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_13__["EditorContentService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _ws_author_src_lib_routing_modules_editor_services_editor_service__WEBPACK_IMPORTED_MODULE_14__["EditorService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_16__["LoaderService"] },
    { type: _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_15__["AuthInitService"] },
    { type: _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_12__["AccessControlService"] },
    { type: _ws_author_src_lib_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_url_upload_url_upload_component__WEBPACK_IMPORTED_MODULE_19__["UrlUploadComponent"], { static: false })
], CurateComponent.prototype, "urlComponent", void 0);
CurateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ws-auth-curate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./curate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/components/curate/curate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./curate.component.scss */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/components/curate/curate.component.scss")).default]
    })
], CurateComponent);



/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/components/url-upload/url-upload.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/components/url-upload/url-upload.component.scss ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".op100 {\n  opacity: 1;\n}\n\n.upload-box {\n  border: 2px dashed rgba(28, 28, 28, 0.6);\n  border-radius: 2%;\n  width: 235px;\n}\n\n.text-white {\n  color: #fff;\n}\n\nul li {\n  margin: 20px 0;\n}\n\ninput {\n  line-height: 1px;\n}\n\n.inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.inputfile + label {\n  font-size: 1.25em;\n  color: white;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.close-button {\n  top: -70px;\n  left: 60px;\n}\n\n.padding-remove-bottom {\n  padding: 0;\n}\n\n.flex-grow60 {\n  flex-grow: 0.6;\n}\n\n.input {\n  font-size: 16px;\n}\n\n.margin-left15 {\n  margin-left: 15rem;\n}\n\n.margin-left5 {\n  margin-left: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2N1cmF0ZS9jb21wb25lbnRzL3VybC11cGxvYWQvdXJsLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXV0aG9yL3NyYy9saWIvcm91dGluZy9tb2R1bGVzL2VkaXRvci9yb3V0aW5nL21vZHVsZXMvY3VyYXRlL2NvbXBvbmVudHMvdXJsLXVwbG9hZC91cmwtdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0Usd0NBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREdBO0VBQ0UsVUFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBRElBO0VBQ0UsZUFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0FDREYiLCJmaWxlIjoicHJvamVjdC93cy9hdXRob3Ivc3JjL2xpYi9yb3V0aW5nL21vZHVsZXMvZWRpdG9yL3JvdXRpbmcvbW9kdWxlcy9jdXJhdGUvY29tcG9uZW50cy91cmwtdXBsb2FkL3VybC11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3AxMDAge1xuICBvcGFjaXR5OiAxO1xufVxuXG4udXBsb2FkLWJveCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCByZ2JhKDI4LCAyOCwgMjgsIDAuNik7XG4gIGJvcmRlci1yYWRpdXM6IDIlO1xuICB3aWR0aDogMjM1cHg7XG59XG5cbi50ZXh0LXdoaXRlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbnVsIGxpIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbmlucHV0e1xuICBsaW5lLWhlaWdodDogMXB4O1xufVxuXG4uaW5wdXRmaWxlIHtcbiAgd2lkdGg6IDAuMXB4O1xuICBoZWlnaHQ6IDAuMXB4O1xuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uaW5wdXRmaWxlICsgbGFiZWwge1xuICBmb250LXNpemU6IDEuMjVlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIHRvcDogLTcwcHg7XG4gIGxlZnQ6IDYwcHg7XG59XG5cblxuLnBhZGRpbmctcmVtb3ZlLWJvdHRvbSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5mbGV4LWdyb3c2MHtcbiAgZmxleC1ncm93OiAwLjY7XG59XG5cblxuLmlucHV0e1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5tYXJnaW4tbGVmdDE1e1xuICBtYXJnaW4tbGVmdDogMTVyZW07XG59XG5cbi5tYXJnaW4tbGVmdDV7XG4gIG1hcmdpbi1sZWZ0OiA1cmVtO1xufVxuIiwiLm9wMTAwIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnVwbG9hZC1ib3gge1xuICBib3JkZXI6IDJweCBkYXNoZWQgcmdiYSgyOCwgMjgsIDI4LCAwLjYpO1xuICBib3JkZXItcmFkaXVzOiAyJTtcbiAgd2lkdGg6IDIzNXB4O1xufVxuXG4udGV4dC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG51bCBsaSB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG5pbnB1dCB7XG4gIGxpbmUtaGVpZ2h0OiAxcHg7XG59XG5cbi5pbnB1dGZpbGUge1xuICB3aWR0aDogMC4xcHg7XG4gIGhlaWdodDogMC4xcHg7XG4gIG9wYWNpdHk6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5pbnB1dGZpbGUgKyBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2xvc2UtYnV0dG9uIHtcbiAgdG9wOiAtNzBweDtcbiAgbGVmdDogNjBweDtcbn1cblxuLnBhZGRpbmctcmVtb3ZlLWJvdHRvbSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5mbGV4LWdyb3c2MCB7XG4gIGZsZXgtZ3JvdzogMC42O1xufVxuXG4uaW5wdXQge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5tYXJnaW4tbGVmdDE1IHtcbiAgbWFyZ2luLWxlZnQ6IDE1cmVtO1xufVxuXG4ubWFyZ2luLWxlZnQ1IHtcbiAgbWFyZ2luLWxlZnQ6IDVyZW07XG59Il19 */");

/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/components/url-upload/url-upload.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/components/url-upload/url-upload.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: UrlUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlUploadComponent", function() { return UrlUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ws/author/src/lib/routing/modules/editor/services/editor-content.service */ "./project/ws/author/src/lib/routing/modules/editor/services/editor-content.service.ts");
/* harmony import */ var _services_init_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../../../../services/init.service */ "./project/ws/author/src/lib/services/init.service.ts");
/* harmony import */ var _url_upload_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./url-upload.helper */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/components/url-upload/url-upload.helper.ts");



// import { MatSnackBar } from '@angular/material'
// import { MatDialog } from '@angular/material/dialog'

// import { IprDialogComponent } from '@ws/author/src/lib/modules/shared/components/ipr-dialog/ipr-dialog.component'
// import { NotificationComponent } from '@ws/author/src/lib/modules/shared/components/notification/notification.component'



let UrlUploadComponent = class UrlUploadComponent {
    constructor(formBuilder, 
    // private snackBar: MatSnackBar,
    // private dialog: MatDialog,
    contentService, configSvc, initService) {
        this.formBuilder = formBuilder;
        this.contentService = contentService;
        this.configSvc = configSvc;
        this.initService = initService;
        // iprAccepted = false
        this.currentContent = '';
        this.canUpdate = true;
        this.isCollectionEditor = false;
        this.isSubmitPressed = false;
        this.data = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.currentContent = this.contentService.currentContent;
        this.contentService.changeActiveCont.subscribe(data => {
            this.currentContent = data;
            this.triggerDataChange();
        });
    }
    triggerDataChange() {
        const updatedMeta = this.contentService.getUpdatedMeta(this.currentContent);
        if (!this.isCollectionEditor ||
            (this.isCollectionEditor && updatedMeta.category === 'Resource')) {
            this.assignData(updatedMeta);
        }
    }
    createForm() {
        this.urlUploadForm = this.formBuilder.group({
            artifactUrl: [''],
            isIframeSupported: [{ value: 'Yes', disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mimeType: [],
            isInIntranet: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            isExternal: [],
        });
        this.urlUploadForm.valueChanges.subscribe(() => {
            if (this.canUpdate) {
                this.storeData();
            }
        });
        this.urlUploadForm.controls.artifactUrl.valueChanges.subscribe(() => {
            if (this.canUpdate) {
                this.check();
                // this.iprAccepted = false
            }
        });
    }
    assignData(meta) {
        if (!this.urlUploadForm) {
            this.createForm();
        }
        this.canUpdate = false;
        this.urlUploadForm.controls.artifactUrl.setValue(meta.artifactUrl || '');
        this.urlUploadForm.controls.mimeType.setValue(meta.mimeType || 'application/html');
        this.urlUploadForm.controls.isIframeSupported.setValue(meta.isIframeSupported || 'No');
        this.urlUploadForm.controls.isInIntranet.setValue(meta.isInIntranet || false);
        this.urlUploadForm.controls.isExternal.setValue(true);
        this.canUpdate = true;
        // if (meta.artifactUrl) {
        //   this.iprAccepted = true
        // }
        if (meta.artifactUrl) {
            this.check();
        }
        else {
            this.storeData();
        }
        this.urlUploadForm.markAsPristine();
        this.urlUploadForm.markAsUntouched();
    }
    // showIpr() {
    //   const dialogRef = this.dialog.open(IprDialogComponent, {
    //     width: '70%',
    //     data: { iprAccept: this.iprAccepted },
    //   })
    //   dialogRef.afterClosed().subscribe(result => {
    //     this.iprAccepted = result
    //   })
    // }
    // iprChecked() {
    //   this.iprAccepted = !this.iprAccepted
    // }
    submit() {
        // if (this.urlUploadForm.controls.artifactUrl.value && !this.iprAccepted) {
        //   this.snackBar.openFromComponent(NotificationComponent, {
        //     data: {
        //       type: Notify.IPR_DECLARATION,
        //     },
        //     duration: NOTIFICATION_TIME * 1000,
        //   })
        // } else {
        this.storeData();
        this.data.emit('save');
        // }
    }
    storeData() {
        const originalMeta = this.contentService.getOriginalMeta(this.currentContent);
        const currentMeta = this.urlUploadForm.value;
        const meta = {};
        // if (currentMeta.artifactUrl && !this.iprAccepted) {
        //   return
        // }
        Object.keys(currentMeta).map(v => {
            if (JSON.stringify(currentMeta[v]) !==
                JSON.stringify(originalMeta[v])) {
                if (currentMeta[v] ||
                    (this.initService.authConfig[v].type === 'boolean' &&
                        meta[v] === false)) {
                    meta[v] = currentMeta[v];
                }
                else {
                    meta[v] = JSON.parse(JSON.stringify(this.initService.authConfig[v].defaultValue[originalMeta.contentType
                    // tslint:disable-next-line: ter-computed-property-spacing
                    ][0].value));
                }
            }
        });
        this.contentService.setUpdatedMeta(meta, this.currentContent);
    }
    check() {
        // const disableIframe = true
        const artifactUrl = this.urlUploadForm.controls.artifactUrl.value;
        this.canUpdate = false;
        if (this.configSvc.instanceConfig &&
            this.configSvc.instanceConfig.authoring &&
            this.configSvc.instanceConfig.authoring.urlPatternMatching) {
            this.configSvc.instanceConfig.authoring.urlPatternMatching.map(v => {
                if (artifactUrl.match(v.pattern)) {
                    if (v.allowIframe && v.source === 'youtube') {
                        this.urlUploadForm.controls.isIframeSupported.setValue('Yes');
                    }
                    else {
                        this.urlUploadForm.controls.isIframeSupported.setValue('No');
                        this.urlUploadForm.controls.mimeType.setValue('application/html');
                        // disableIframe = false
                    }
                    // if (v.allowReplace) {
                    switch (v.source) {
                        case 'youtube':
                            this.urlUploadForm.controls.artifactUrl.setValue(_url_upload_helper__WEBPACK_IMPORTED_MODULE_6__["URLCheckerClass"].youTubeUrlChange(artifactUrl));
                            // disableIframe = false;
                            this.urlUploadForm.controls.mimeType.setValue('video/x-youtube');
                            break;
                    }
                    // }
                }
                else {
                    this.urlUploadForm.controls.isIframeSupported.setValue('No');
                }
            });
        }
        this.canUpdate = true;
        this.storeData();
        // const iframe = this.urlUploadForm.controls.isIframeSupported
        // if (disableIframe) {
        //   iframe.disable()
        // } else {
        //   iframe.enable()
        // }
    }
    showError(formControl) {
        if (formControl.invalid) {
            if (this.isSubmitPressed) {
                return true;
            }
            if (formControl && formControl.touched) {
                return true;
            }
            return false;
        }
        return false;
    }
};
UrlUploadComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_4__["EditorContentService"] },
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_3__["ConfigurationsService"] },
    { type: _services_init_service__WEBPACK_IMPORTED_MODULE_5__["AuthInitService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UrlUploadComponent.prototype, "isCollectionEditor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UrlUploadComponent.prototype, "isSubmitPressed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UrlUploadComponent.prototype, "data", void 0);
UrlUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-auth-url-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./url-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/components/url-upload/url-upload.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./url-upload.component.scss */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/components/url-upload/url-upload.component.scss")).default]
    })
], UrlUploadComponent);



/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/components/url-upload/url-upload.helper.ts":
/*!****************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/components/url-upload/url-upload.helper.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: URLCheckerClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLCheckerClass", function() { return URLCheckerClass; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class URLCheckerClass {
    static youTubeUrlChange(url) {
        // const regExp = /^.*(youtube.com\/|embed\/|watch\?v=)([^#\&\?]*).*/
        // const match = url.match(regExp)
        // if (match && match[2].length === 11) {
        //   return `https://www.youtube.com/embed/${match[2]}`
        // }
        // return url
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        if (match && match[2].length === 11) {
            return `https://www.youtube.com/embed/${match[2]}`;
        }
        return 'error';
        // return `https://www.youtube.com/embed/${id}`
    }
}


/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/curate-routing.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/curate-routing.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CurateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurateRoutingModule", function() { return CurateRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_curate_curate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/curate/curate.component */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/components/curate/curate.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _components_curate_curate_component__WEBPACK_IMPORTED_MODULE_1__["CurateComponent"],
    },
];
let CurateRoutingModule = class CurateRoutingModule {
};
CurateRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], CurateRoutingModule);



/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/curate.module.ts":
/*!**************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/curate.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: CurateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurateModule", function() { return CurateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ws_author_src_lib_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/shared.module */ "./project/ws/author/src/lib/modules/shared/shared.module.ts");
/* harmony import */ var _ws_author_src_lib_modules_viewer_viewer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ws/author/src/lib/modules/viewer/viewer.module */ "./project/ws/author/src/lib/modules/viewer/viewer.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./project/ws/author/src/lib/routing/modules/editor/shared/shared.module.ts");
/* harmony import */ var _components_curate_curate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/curate/curate.component */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/components/curate/curate.component.ts");
/* harmony import */ var _components_url_upload_url_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/url-upload/url-upload.component */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/components/url-upload/url-upload.component.ts");
/* harmony import */ var _curate_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./curate-routing.module */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/curate-routing.module.ts");









let CurateModule = class CurateModule {
};
CurateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_curate_curate_component__WEBPACK_IMPORTED_MODULE_6__["CurateComponent"], _components_url_upload_url_upload_component__WEBPACK_IMPORTED_MODULE_7__["UrlUploadComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["EditorSharedModule"], _ws_author_src_lib_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _curate_routing_module__WEBPACK_IMPORTED_MODULE_8__["CurateRoutingModule"], _ws_author_src_lib_modules_viewer_viewer_module__WEBPACK_IMPORTED_MODULE_4__["AuthViewerModule"]],
        exports: [_components_url_upload_url_upload_component__WEBPACK_IMPORTED_MODULE_7__["UrlUploadComponent"]],
    })
], CurateModule);



/***/ })

}]);
//# sourceMappingURL=default~routing-modules-collection-collection-module~routing-modules-curate-curate-module-es2015.js.map