(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~routing-modules-collection-collection-module~routing-modules-web-page-web-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/components/upload-audio/upload-audio.component.html":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/components/upload-audio/upload-audio.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"{'opacity-50': isUploading}\">\n    <div mat-dialog-title class=\"flex justify-between\">\n        <h1 class=\"ws-mat-primary-text\">\n            <mat-icon>cloud_upload</mat-icon>&emsp;\n            <span i18n>Upload audio</span>\n        </h1>\n        <button mat-icon-button mat-dialog-close i18n-aria-label aria-label=\"close dialog\">\n            <mat-icon>close</mat-icon>\n        </button>\n    </div>\n    <div class=\"flex justify-between items-center\" mat-dialog-content>\n        <div class=\"flex flex-col pr-6 w-2/5\">\n            <label>\n                <b i18n>Language</b>\n            </label>\n            <mat-form-field class=\"margin-top-xs w-full\" appearance=\"outline\">\n                <mat-select [(ngModel)]=\"uploadedAudio.srclang\" required=\"true\">\n                    <mat-option *ngFor=\"let lang of allLanguages\" [value]=\"lang.srclang\">\n                        {{lang.label}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n        <div class=\"cursor-pointer h-12 w-2/5 upload-box flex items-center justify-center\" (click)=\"fileInput.click()\">\n            <span class=\"font-weight-500\" [hidden]=\"file\">\n                <input class=\"upload-audio\" type=\"file\" accept=\"audio/mp3,audio/*;capture=microphone\" (change)=\"onDrop($event.target.files[0]); fileInput.value = null\"\n                    #fileInput />\n            </span>\n            <label for=\"file\" class=\"mat-h2 margin-bottom-remove ws-mat-primary-text cursor-pointer flex flex-middle justify-center\">\n                <mat-icon style=\"margin-right:4px\">add</mat-icon>\n                <span i18n>Browse</span>\n            </label>\n        </div>\n    </div>\n</div>\n<!-- <div mat-dialog-actions class=\"flex-row-reverse\">\n    <button i18n mat-raised-button color=\"primary\" [mat-dialog-close]=\"result\">Change</button>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/components/web-module-editor/web-module-editor.component.html":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/components/web-module-editor/web-module-editor.component.html ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-xl margin-l-l margin-r-l\" [hidden]=\"previewMode\">\n  <!-- <div class=\"flex margin-left-xl flex-middle margin-bottom-xl flex-wrap\">\n    <div class=\"flex flex-middle\">\n      <p class=\"ws-mat-primary-text font-weight-bold title margin-right-xs\" i18n>\n        CONTENT CREATION\n      </p>\n      <mat-icon class=\"ws-mat-primary-text margin-bottom-xxs\">create</mat-icon>\n    </div>\n    <div class=\"margin-left grid\" *ngIf=\"currentStep >= 0\">\n      <div class=\"stepper-grid\" [ngClass]=\"{ 'cursor-disable': true }\">\n        <div class=\"ws-mat-primary-background-op30 stepper-container text-white cursor-pointer\" [ngClass]=\"{\n            'ws-mat-primary-background cursor-disable': currentStep >= 1\n          }\">\n          1\n        </div>\n        <p class=\"margin-left-xs margin-remove-bottom font-weight-500 op30 cursor-pointer\" [ngClass]=\"{ 'ws-mat-primary-text opacity-100': currentStep >= 1 }\"\n          i18n>\n          Choose Type\n        </p>\n        <span class=\"border border-solid text-gray-500 mx-3\" [ngClass]=\"{ 'ws-mat-primary-text': currentStep >= 2 }\"></span>\n      </div>\n      <div class=\"stepper-grid\">\n        <div class=\"ws-mat-primary-background-op30 stepper-container text-white cursor-pointer\" [ngClass]=\"{ 'ws-mat-primary-background': currentStep >= 2 }\"\n          (click)=\"customStepper(2)\" i18n>\n          2\n        </div>\n        <p class=\"margin-left-xs margin-remove-bottom font-weight-500 op30 cursor-pointer\" [ngClass]=\"{\n            'ws-mat-primary-text opacity-100': currentStep >= 2,\n            'ws-mat-primary-border-bottom-bolder': currentStep === 2\n          }\" (click)=\"customStepper(2)\" i18n>\n          Content\n        </p>\n        <span class=\"border border-solid text-gray-500 mx-3\" [ngClass]=\"{ 'ws-mat-primary-text': currentStep === 3 }\"></span>\n      </div>\n      <div class=\"flex flex-middle\">\n        <div class=\"ws-mat-primary-background-op30 stepper-container text-white cursor-pointer\" [ngClass]=\"{ 'ws-mat-primary-background': currentStep === 3 }\"\n          (click)=\"customStepper(3)\" i18n>\n          3\n        </div>\n        <p class=\"margin-left-xs margin-remove-bottom font-weight-500 op30 cursor-pointer\" [ngClass]=\"{\n            'ws-mat-primary-text opacity-100': currentStep === 3,\n            'ws-mat-primary-border-bottom-bolder': currentStep === 3\n          }\" (click)=\"customStepper(3)\" i18n>\n          Details\n        </p>\n      </div>\n    </div>\n  </div> -->\n\n  <div class=\"margin-left-xl margin-top-s margin-bottom-xs\">\n    <div class=\"flex flex-middle\">\n      <p class=\"margin-remove-bottom mat-h3 font-weight-bold\" i18n>Language</p>\n    </div>\n    <div class=\"flex flex-middle\">\n      <p class=\"p-2\" *ngFor=\"let content of allContents\" [ngClass]=\"{\n          'ws-mat-primary-border-bottom-bolder': currentId === content.identifier\n        }\" (click)=\"changeContent(content)\">\n        {{ content.locale | uppercase }}\n      </p>\n      <button mat-icon-button class=\"small-button padding-remove ws-mat-primary-background mat-elevation-z6 margin-left-s\">\n        <mat-icon class=\"text-white small-icon\" [matMenuTriggerFor]=\"menu\" aria-label=\"create content in other languages\" i18n-aria-label\n          i18n-matTooltip matTooltip=\"Add a language\">\n          add</mat-icon>\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item *ngFor=\"let lang of allLanguages\" (click)=\"createInAnotherLanguage(lang.srclang)\">\n          {{ lang.label }}\n        </button>\n      </mat-menu>\n    </div>\n  </div>\n  <div class=\"mat-app-background mb-10\">\n    <div class=\"margin-top-xl margin-right-xl\" *ngIf=\"currentStep === 2\">\n      <ng-container *ngIf=\"contentLoaded\">\n        <div class=\"flex justify-between\">\n          <button (click)=\"sideNavBar.toggle()\" *ngIf=\"mediumScreenSize\" mat-icon-button i18n-matTooltip aria-label=\"open menu\" i18n-aria-label>\n            <mat-icon>menu</mat-icon>\n          </button>\n        </div>\n        <mat-sidenav-container autosize=\"true\" class=\"nav-container\">\n          <mat-sidenav #sideNavBar class=\"h-full custom-scroll-small\" [mode]=\"mode$ | async\" [(opened)]=\"sideNavBarOpened\">\n            <div class=\"mat-app-background z-50 sticky top-0\">\n              <div class=\"w-full flex flex-row-reverse\" *ngIf=\"!mediumScreenSize\">\n                <button *ngIf=\"showContent\" mat-icon-button (click)=\"showContent = !showContent\" aria-label=\"Minimize the side panel\" i18n-aria-label\n                  i18n-matTooltip matTooltip=\"Minimize the side panel\" matTooltipShowDelay=\"1000\" matTooltipPosition=\"after\">\n                  <mat-icon>keyboard_arrow_left</mat-icon>\n                </button>\n                <button *ngIf=\"!showContent\" (click)=\"showContent = !showContent\" mat-icon-button matTooltip=\"Maximize the side panel\" matTooltipShowDelay=\"1000\"\n                  matTooltipPosition=\"after\" aria-label=\"Maximize the side panel\" i18n-aria-label i18n-matTooltip>\n                  <mat-icon>keyboard_arrow_right</mat-icon>\n                </button>\n              </div>\n              <ng-container *ngIf=\"mediumScreenSize || !mediumScreenSize && showContent\">\n                <div class=\"flex items-center pl-1 pt-3 sm:pt-0 pb-1\">\n                  <mat-card-title class=\"text-xl text-center w-9/12 ws-mat-primary-text\" i18n>Pages</mat-card-title>\n                  <button (click)=\"addPage()\" class=\"padding-remove margin-right-s ws-mat-primary-background mat-elevation-z6 margin-left-s self-center\"\n                    i18n-aria-label aria-label=\"add new page\" i18n-matTooltip matTooltip=\"Add new page\" mat-icon-button>\n                    <mat-icon class=\"text-white\">\n                      add</mat-icon>\n                  </button>\n                </div>\n              </ng-container>\n            </div>\n            <ng-container>\n              <div cdkDropList class=\"example-list \" (cdkDropListDropped)=\"drop($event)\" *ngIf=\"mediumScreenSize || !mediumScreenSize && showContent\">\n                <div class=\"custom-placeholder border border-solid\" *cdkDragPlaceholder></div>\n                <mat-card class=\"custom w-full mt-3\" *ngFor=\"let page of userData[currentId].pages;index as i\" [ngClass]=\"{'ws-mat-primary-background':i === selectedPage && !userData[currentId].pages[i].isInvalid, 'invalidQues': userData[currentId].pages[i].isInvalid}\"\n                  cdkDrag (click)=\"changePage(i)\" cdkDragBoundary=\".example-list\" i18n-aria-label aria-label=\"select page\">\n                  <div class=\"w-full flex items-center justify-between\">\n                    <span>\n                      <span i18n>Page</span>-{{i+1}}\n                    </span>\n                    <button mat-icon-button (click)=\"onDelete(i,$event)\" matTooltip=\"Delete this Page\" aria-label=\"delete page\" i18n-aria-label\n                      i18n-matTooltip>\n                      <mat-icon>delete</mat-icon>\n                    </button>\n                  </div>\n                </mat-card>\n              </div>\n            </ng-container>\n            <div class=\"flex flex-col w-full pt-4 custom-scroll\" *ngIf=\"!showContent && !mediumScreenSize\">\n              <button class=\"m-1 bordered\" *ngFor=\"let page of userData[currentId].pages;index as i\" i18n-aria-label aria-label=\"select page\"\n                type=\"button\" (click)=\"changePage(i)\" mat-icon-button [ngClass]=\"{'ws-mat-primary-background':i === selectedPage && !userData[currentId].pages[i].isInvalid, 'invalidQues': userData[currentId].pages[i].isInvalid}\">\n                {{i+1}}\n              </button>\n            </div>\n          </mat-sidenav>\n          <mat-sidenav-content>\n            <ng-container *ngIf=\"userData[currentId].pages.length\">\n              <div class=\"pl-3\">\n                <p class=\"font-weight-bold \" i18n=\"Title label|Label which explains the user to enter title\">\n                  Title\n                </p>\n                <mat-form-field class=\"w-full\" appearance=\"outline\">\n                  <input [ngModel]=\"userData[currentId].pageJson[selectedPage].title\" #title aria-label=\"page title|input for user to enter title\"\n                    matInput type=\"text\" maxlength=\"500\" (ngModelChange)=\"forTitle($event)\" />\n                  <mat-hint align=\"end\">{{ title.value.length }} / 500</mat-hint>\n                </mat-form-field>\n              </div>\n              <div class=\"pl-3 pt-4 web-module-container\">\n                <p class=\"font-weight-bold\" i18n=\"Title label|Label which explains the user to enter title\">\n                  Content\n                </p>\n\n                <ws-auth-plain-ckeditor [content]=\"(userData)? userData[currentId].pages[selectedPage].body : ''\" (value)=\"onBodyChange($event)\"\n                  [id]=\"currentId\">\n                </ws-auth-plain-ckeditor>\n\n              </div>\n              <!-- <div class=\"p-3\">\n                <mat-accordion>\n                  <mat-expansion-panel [(expanded)]=\"showAudioCard\">\n                    <mat-expansion-panel-header>\n                      <mat-panel-title>\n                        <p class=\"font-weight-bold pb-1 self-center  margin-remove-bottom\" i18n>\n                          Audios\n                        </p>\n                        <button mat-icon-button color='primary' (click)=\"$event.stopPropagation();audioADD()\" aria-label=\"add audio\" matTooltip=\"add audio file\"\n                          i18n-aria-label i18n-matTooltip>\n                          <mat-icon>add_circle_outline</mat-icon>\n                        </button>\n                      </mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <div class=\"mb-4 ws-mat-primary-lite-background pr-4\">\n                      <ws-auth-audio-strips *ngIf=\"userData[currentId].pageJson[selectedPage].audio.length\" [data]=\"userData[currentId].pageJson[selectedPage].audio\"\n                        (audioDeleted)=\"deleteAudio($event)\"></ws-auth-audio-strips>\n                      <div class=\"h-12 py-4 flex items-center justify-center\" *ngIf=\"!userData[currentId].pageJson[selectedPage].audio.length\">\n                        <span i18n>No audios found for this page</span>\n                      </div>\n                    </div>\n                  </mat-expansion-panel>\n                </mat-accordion>\n              </div> -->\n              <div class=\"p-3 mt-4\">\n                <mat-card class=\"audios-card-container\">\n                  <div class=\"cursor-pointer flex flex-row justify-between px-4 pt-2\" aria-label=\"click to expand card\" i18n-aria-label (click)=\"showAudioCard=!showAudioCard\">\n                    <div class=\"flex\">\n                      <p class=\"font-weight-bold pb-1 self-center  margin-remove-bottom\" i18n>\n                        Audios\n                      </p>\n                      <button aria-label=\"add audio\" id=\"abtn\" mat-icon-button color='primary' (click)=\"$event.stopPropagation();audioADD()\" matTooltip=\"Add audio file\">\n                        <mat-icon>add_circle_outline</mat-icon>\n                      </button>\n                    </div>\n                    <div class=\"self-center\">\n                      <mat-icon class=\"self-end\" *ngIf=\"!showAudioCard\">keyboard_arrow_down</mat-icon>\n                      <mat-icon class=\"self-end\" *ngIf=\"showAudioCard\">keyboard_arrow_up</mat-icon>\n                    </div>\n                  </div>\n                  <div class=\"mb-4 pr-8\" *ngIf=\"showAudioCard\">\n                    <ws-auth-audio-strips [data]=\"userData[currentId].pageJson[selectedPage].audio\" [doRegex]=\"true\" (audioDeleted)=\"deleteAudio($event)\"\n                      *ngIf=\"userData[currentId].pageJson[selectedPage].audio\n                      && userData[currentId].pageJson[selectedPage].audio.length\">\n                    </ws-auth-audio-strips>\n                    <div class=\"h-12 py-4 flex items-center justify-center\" *ngIf=\"!userData[currentId].pageJson[selectedPage].audio\n                    || !userData[currentId].pageJson[selectedPage].audio.length\">\n                      <span i18n>No audios found for this page</span>\n                    </div>\n                  </div>\n                </mat-card>\n              </div>\n              <div class=\"flex justify-between px-1 py-4\">\n                <button class=\"ws-mat-primary-background mat-elevation-z6 margin-left-s\" (click)=\"changePage(selectedPage-1)\" [disabled]=\"selectedPage === 0\"\n                  [ngClass]=\"{ 'opacity-25 cursor-disable': selectedPage === 0 }\" mat-button i18n-aria-label aria-label=\"previos page\">\n                  <span class=\"text-white\" i18n>Previous</span>\n                </button>\n                <button class=\"ws-mat-primary-background mat-elevation-z6 margin-left-s\" i18n-aria-label aria-label=\"next page\" mat-button\n                  (click)=\"changePage(selectedPage+1)\" [disabled]=\"selectedPage === userData[currentId].pages.length - 1\" [ngClass]=\"{'opacity-25 cursor-disable': selectedPage === userData[currentId].pages.length - 1}\">\n                  <span class=\"text-white\" i18n>Next</span>\n                </button>\n              </div>\n              <button (click)=\"action('save')\"  mat-menu-item>\n                <!-- <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Save content\">\n                  Save</mat-icon> -->\n                <ng-container i18n>Save</ng-container>\n              </button>\n            </ng-container>\n            <div class=\"flex items-center justify-center h-64\" *ngIf=\"!userData[currentId].pages.length\">\n              <span i18n>No pages found, Kindly add!</span>\n            </div>\n          </mat-sidenav-content>\n        </mat-sidenav-container>\n      </ng-container>\n    </div>\n    <div class=\"margin-top-xl margin-left-xl margin-right-xl\" *ngIf=\"currentStep === 3\">\n      <ws-auth-edit-meta [nextAction]=\"'publish'\" [isSubmitPressed]=\"submitPressed\" (data)=\"action($event)\">\n      </ws-auth-edit-meta>\n    </div>\n  </div>\n  <div class=\"buttons margin-top-xl\">\n    <!-- <div class=\"button-grid margin-right-xxs cursor-pointer\" (click)=\"toggleSettingButtons()\">\n      <button mat-icon-button class=\"padding-remove ws-mat-primary-background mat-elevation-z6\">\n        <mat-icon class=\"text-white\" *ngIf=\"showSettingButtons\" i18n-matTooltip matTooltip=\"Close\">close</mat-icon>\n        <mat-icon class=\"text-white\" *ngIf=\"!showSettingButtons\">more_vert</mat-icon>\n      </button>\n      <p class=\"mat-h5 margin-remove button-text padding-remove-top\" *ngIf=\"showSettingButtons\" i18n-matTooltip matTooltip=\"Close\">\n        Close\n      </p>\n    </div> -->\n    <!-- <ng-container *ngIf=\"showSettingButtons\">\n      <div class=\"button-grid cursor-pointer\" (click)=\"action('preview')\">\n        <button mat-icon-button class=\" mat-elevation-z5 small-button padding-remove  margin-top-l\" i18n-matTooltip matTooltip=\"Preview\">\n          <mat-icon class=\"text-white small-icon ws-mat-primary-text\">remove_red_eye</mat-icon>\n        </button>\n        <p class=\"mat-h5 margin-remove button-text\" i18n-matTooltip matTooltip=\"preview\">\n          Preview\n        </p>\n      </div>\n      <div class=\"button-grid cursor-pointer\" (click)=\"action('save')\">\n        <button mat-icon-button class=\" mat-elevation-z5 small-button padding-remove  margin-top-m\" i18n-matTooltip matTooltip=\"Save\">\n          <mat-icon class=\"text-white small-icon ws-mat-primary-text\">save</mat-icon>\n        </button>\n        <p class=\"mat-h5 margin-remove button-text\" i18n-matTooltip matTooltip=\"save\">\n          Save\n        </p>\n      </div>\n      <div class=\"button-grid cursor-pointer\" (click)=\"action('push'); submitPressed = true\">\n        <button mat-icon-button class=\" mat-elevation-z5 small-button padding-remove  margin-top-m\" i18n-matTooltip matTooltip=\"Publish\">\n          <mat-icon class=\"text-white small-icon ws-mat-primary-text\">rate_review</mat-icon>\n        </button>\n        <p class=\"mat-h5 margin-remove button-text\" *ngIf=\"getAction() === 'sendForReview'\" i18n-matTooltip matTooltip=\"Send for review\">\n          Send For Review\n        </p>\n        <p class=\"mat-h5 margin-remove button-text\" *ngIf=\"getAction() === 'review'\" i18n-matTooltip matTooltip=\"Review\">\n          Review\n        </p>\n        <p class=\"mat-h5 margin-remove button-text\" *ngIf=\"getAction() === 'publish'\" i18n-matTooltip matTooltip=\"Publish\">\n          Publish\n        </p>\n\n      </div>\n      <div *ngIf=\"canDelete()\" class=\"button-grid cursor-pointer\" (click)=\"action('delete')\">\n        <button mat-icon-button class=\" mat-elevation-z5 small-button padding-remove  margin-top-m\" i18n-matTooltip matTooltip=\"Delete\">\n          <mat-icon class=\"text-white small-icon ws-mat-primary-text\">delete</mat-icon>\n        </button>\n        <p class=\"mat-h5 margin-remove button-text\" i18n-matTooltip matTooltip=\"Delete\" i18n>\n          Delete\n        </p>\n      </div>\n    </ng-container> -->\n  </div>\n</div>\n<div *ngIf=\"previewMode\">\n  <mat-icon (click)=\"closePreview()\" class=\"close-preview\" matTooltip=\"Back\" i18n-matTooltip=\"Back button to go to previous page\">\n    arrow_back</mat-icon>\n  <ws-auth-viewer [identifier]=\"currentId\" [mimeTypeRoute]=\"mimeTypeRoute\"></ws-auth-viewer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/shared/component/audio-strips/audio-strips.component.html":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/shared/component/audio-strips/audio-strips.component.html ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ws-utils-horizontal-scroller *ngIf=\"audioData\" [loadStatus]=\"'done'\">\n  <div class=\"py-4\" *ngFor=\"let aud of audioData, let i = index\">\n    <mat-card class=\"card-container\" (mouseenter)=\"showStatusForCard=i\" (mouseleave)=\"showStatusForCard = isAudioPlaying? showStatusForCard : null\">\n      <button class=\"delete-button\" (click)=\"deleteAudio(i)\" mat-icon-button aria-label=\"delete this audio\" matTooltip=\"Delete audio\"\n        i18n-aria-label i18n-matTooltip>\n        <mat-icon>close</mat-icon>\n      </button>\n      <div>\n        <div class=\"flex items-center w-full justify-start\">\n          <mat-icon class=\"ws-mat-primary-text pb-2 large-icon\">music_note</mat-icon>\n          <span>{{aud.label}}</span>\n        </div>\n        <div class=\"flex flex-col items-center justify-center pt-2\" [ngClass]=\"{'opacity-50':!(showStatusForCard === i)}\">\n          <div class=\"icon-container ws-mat-primary-background-op30\" (click)=\"audioControl(aud.srclang)\">\n            <mat-icon class=\"cursor-pointer\" *ngIf=\"!isAudioPlaying\" aria-label=\"play this audio\" i18n-aria-label>\n              play_arrow\n            </mat-icon>\n            <mat-icon class=\"cursor-pointer\" *ngIf=\"isAudioPlaying\" aria-label=\"stop playing the audio\" i18n-aria-label>\n              stop\n            </mat-icon>\n          </div>\n          <span class=\"m-1 cursor-pointer\" i18n *ngIf=\"!isAudioPlaying\" (click)=\"audioControl( aud.srclang)\">Play</span>\n          <span class=\"m-1 cursor-pointer\" i18n *ngIf=\"isAudioPlaying\" (click)=\"audioControl(aud.srclang)\">Stop</span>\n          <!-- <span class=\"\" *ngIf=\"aud.duration\">{{aud.duration}}</span> -->\n        </div>\n      </div>\n      <audio class=\"hidden\" controlsList=\"nodownload\" [id]=\"aud.srclang\" [src]=\"aud.URL\"></audio>\n    </mat-card>\n  </div>\n</ws-utils-horizontal-scroller>");

/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/components/upload-audio/upload-audio.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/components/upload-audio/upload-audio.component.scss ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".upload-box {\n  border: 2px dashed rgba(28, 28, 28, 0.6);\n  border-radius: 2%;\n  height: 47px;\n  margin-top: 9px;\n  margin-right: 5%;\n}\n\n.upload-audio {\n  display: none;\n}\n\n.margin-bottom-remove {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL3dlYi1wYWdlL2NvbXBvbmVudHMvdXBsb2FkLWF1ZGlvL3VwbG9hZC1hdWRpby5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXV0aG9yL3NyYy9saWIvcm91dGluZy9tb2R1bGVzL2VkaXRvci9yb3V0aW5nL21vZHVsZXMvd2ViLXBhZ2UvY29tcG9uZW50cy91cGxvYWQtYXVkaW8vdXBsb2FkLWF1ZGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdC93cy9hdXRob3Ivc3JjL2xpYi9yb3V0aW5nL21vZHVsZXMvZWRpdG9yL3JvdXRpbmcvbW9kdWxlcy93ZWItcGFnZS9jb21wb25lbnRzL3VwbG9hZC1hdWRpby91cGxvYWQtYXVkaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkLWJveCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCByZ2JhKDI4LCAyOCwgMjgsIDAuNik7XG4gIGJvcmRlci1yYWRpdXM6IDIlO1xuICBoZWlnaHQ6IDQ3cHg7XG4gIG1hcmdpbi10b3A6IDlweDtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuLnVwbG9hZC1hdWRpb3tcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1hcmdpbi1ib3R0b20tcmVtb3Zle1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4iLCIudXBsb2FkLWJveCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCByZ2JhKDI4LCAyOCwgMjgsIDAuNik7XG4gIGJvcmRlci1yYWRpdXM6IDIlO1xuICBoZWlnaHQ6IDQ3cHg7XG4gIG1hcmdpbi10b3A6IDlweDtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuLnVwbG9hZC1hdWRpbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tYXJnaW4tYm90dG9tLXJlbW92ZSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/components/upload-audio/upload-audio.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/components/upload-audio/upload-audio.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: UploadAudioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadAudioComponent", function() { return UploadAudioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _ws_author_src_lib_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ws/author/src/lib/constants/apiEndpoints */ "./project/ws/author/src/lib/constants/apiEndpoints.ts");
/* harmony import */ var _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ws/author/src/lib/constants/constant */ "./project/ws/author/src/lib/constants/constant.ts");
/* harmony import */ var _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ws/author/src/lib/constants/notificationMessage */ "./project/ws/author/src/lib/constants/notificationMessage.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/notification/notification.component */ "./project/ws/author/src/lib/modules/shared/components/notification/notification.component.ts");
/* harmony import */ var _ws_author_src_lib_routing_modules_editor_shared_services_upload_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ws/author/src/lib/routing/modules/editor/shared/services/upload.service */ "./project/ws/author/src/lib/routing/modules/editor/shared/services/upload.service.ts");
/* harmony import */ var _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ws/author/src/lib/services/loader.service */ "./project/ws/author/src/lib/services/loader.service.ts");










let UploadAudioComponent = class UploadAudioComponent {
    // duration = 0
    constructor(snackBar, uploadService, loaderService, data, dialogRef) {
        this.snackBar = snackBar;
        this.uploadService = uploadService;
        this.loaderService = loaderService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.fileSelected = null;
        this.uploadedAudio = {
            title: '',
            URL: '',
            label: '',
            srclang: '',
        };
        this.allLanguages = [];
        this.isUploading = false;
        this.uploadedAudio.srclang = this.data.srclang;
    }
    ngOnInit() {
        this.allLanguages = this.data.languages;
    }
    onDrop(file) {
        const fileName = file.name.replace(/[^A-Za-z0-9.]/g, '');
        if (!fileName.toLowerCase().endsWith('.mp3')) {
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_7__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].INVALID_FORMAT,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000,
            });
        }
        else {
            this.file = file;
            // this.getDuration()
            this.upload();
        }
    }
    // getDuration() {
    //   const content = document.createElement('audio')
    //   content.preload = 'metadata'
    //   // this.enableUpload = false
    //   content.onloadedmetadata = () => {
    //     window.URL.revokeObjectURL(content.src)
    //     this.duration = Math.round(content.duration)
    //     // console.log(this.duration)
    //     //      this.enableUpload = true
    //   }
    //   content.src = URL.createObjectURL(this.file)
    // }
    upload() {
        const formdata = new FormData();
        formdata.append('content', this.file, this.file.name.replace(/[^A-Za-z0-9.]/g, ''));
        this.loaderService.changeLoad.next(true);
        this.isUploading = true;
        this.uploadService
            .upload(formdata, {
            contentId: this.data.id,
            contentType: _ws_author_src_lib_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_4__["CONTENT_BASE_WEBHOST_ASSETS"],
        })
            .subscribe(v => {
            if (v.code) {
                this.isUploading = false;
                this.loaderService.changeLoad.next(false);
                this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_7__["NotificationComponent"], {
                    data: {
                        type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].UPLOAD_SUCCESS,
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000,
                });
                this.uploadedAudio.title = v.artifactURL.slice(v.artifactURL.lastIndexOf('/') + 1, v.artifactURL.length);
                this.uploadedAudio.label = this.allLanguages.filter(e => e.srclang === this.uploadedAudio.srclang)[0].label;
                const splitUrl = (v.artifactURL || v.authArtifactUrl).split('/');
                const hostURL = `${splitUrl[0]}//${splitUrl[2]}`;
                this.uploadedAudio.URL = (v.artifactURL || v.authArtifactUrl).replace(hostURL, '');
                this.dialogRef.close(this.uploadedAudio);
            }
        }, () => {
            this.isUploading = false;
            this.loaderService.changeLoad.next(false);
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_7__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].UPLOAD_FAIL,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000,
            });
        });
    }
};
UploadAudioComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _ws_author_src_lib_routing_modules_editor_shared_services_upload_service__WEBPACK_IMPORTED_MODULE_8__["UploadService"] },
    { type: _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
UploadAudioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-auth-upload-audio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-audio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/components/upload-audio/upload-audio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-audio.component.scss */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/components/upload-audio/upload-audio.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], UploadAudioComponent);



/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/components/web-module-editor/web-module-editor.component.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/components/web-module-editor/web-module-editor.component.scss ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cursor-disable {\n  cursor: not-allowed !important;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  width: 65%;\n}\n\n.margin-left {\n  margin-left: 120px;\n}\n\n@media only screen and (max-width: 930px) {\n  .margin-left {\n    margin-left: 80px;\n  }\n}\n\n@media only screen and (max-width: 824px) {\n  .margin-left {\n    margin-left: 40px;\n  }\n}\n\n@media only screen and (max-width: 699px) {\n  .margin-left {\n    padding-top: 24px;\n  }\n}\n\n@media only screen and (max-width: 585px) {\n  .margin-left {\n    margin-left: 0px;\n  }\n}\n\n.audios-card-container {\n  padding: 5px;\n}\n\n::ng-deep .web-module-container #cke_1_contents, ::ng-deep .web-module-container .cke_contents {\n  min-height: 700px !important;\n}\n\n.stepper-container {\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n}\n\n.stepper-grid {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 0.2fr auto 1fr;\n}\n\n.text-white {\n  color: #fff;\n}\n\n.fullView {\n  height: 100vh;\n  overflow: hidden;\n  top: 0px;\n  left: 0px;\n  position: fixed;\n  right: 0px;\n  bottom: 0px;\n}\n\n.close-preview {\n  position: fixed;\n  top: 15px;\n  left: 15px;\n  z-index: 1;\n  font-size: 30px;\n  cursor: pointer;\n  z-index: 1001;\n}\n\n.buttons {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  position: absolute;\n  top: 110px;\n  right: 0px;\n  z-index: 50;\n}\n\n.small-button {\n  height: 32px;\n  width: 32px;\n  transition: 0.5s;\n  margin-right: 4px;\n}\n\n.normal-button {\n  border-radius: 50%;\n  height: 40px;\n  display: flex;\n  width: 40px;\n  z-index: 3;\n  justify-content: center;\n}\n\n.small-icon {\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n  height: auto;\n  width: auto;\n  transition: 0.5s;\n}\n\n.button-grid {\n  display: grid;\n  width: 160px;\n  grid-template-columns: 0.2fr 0.95fr;\n}\n\n.audio-container {\n  width: 40%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 10px;\n  border: 1px solid;\n}\n\n.audio-container audio {\n  width: 70%;\n}\n\n.bordered {\n  border: 2px solid #cecece;\n}\n\n.audio-tag {\n  position: relative;\n  top: 1px;\n}\n\n.button-text {\n  align-self: center;\n  padding-top: 17px;\n  padding-left: 4px;\n}\n\n.margin-right-xxs {\n  margin-right: 4px;\n}\n\n.ws-mat-primary-background {\n  color: #fff !important;\n}\n\n.invalidQues {\n  background-color: #ec4444 !important;\n  color: white !important;\n}\n\nmat-sidenav-container {\n  overflow: inherit !important;\n  min-height: 500px;\n}\n\nmat-sidenav {\n  overflow: auto;\n  width: auto;\n}\n\n.custom {\n  padding: 20px 10px;\n  height: 55px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.audioUpd {\n  border: 2px #117a94 solid;\n  border-radius: 25px;\n  padding-left: 6px;\n  padding-right: 6px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n@media only screen and (max-width: 600px) {\n  .audioUpd {\n    display: inline-flex;\n    flex-direction: row;\n    border: 2px #117a94 solid;\n    border-radius: 15px;\n    padding-left: 6px;\n    padding-right: 6px;\n    padding-top: 3px;\n    padding-bottom: 3px;\n    width: 190px;\n    justify-content: center;\n    align-items: center;\n    height: 30px;\n  }\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-list.cdk-drop-list-dragging .custom:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-list {\n  width: 200px;\n  margin: 10px;\n}\n\n::ng-deep .myfield .mat-form-field-wrapper {\n  padding: 0px !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL3dlYi1wYWdlL2NvbXBvbmVudHMvd2ViLW1vZHVsZS1lZGl0b3Ivd2ViLW1vZHVsZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL3dlYi1wYWdlL2NvbXBvbmVudHMvd2ViLW1vZHVsZS1lZGl0b3Ivd2ViLW1vZHVsZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURBRTtFQUZGO0lBSUksaUJBQUE7RUNFRjtBQUNGOztBREFFO0VBUEY7SUFRSSxpQkFBQTtFQ0dGO0FBQ0Y7O0FEREU7RUFYRjtJQVlJLGlCQUFBO0VDSUY7QUFDRjs7QURGRTtFQWZGO0lBZ0JJLGdCQUFBO0VDS0Y7QUFDRjs7QURGQTtFQUNFLFlBQUE7QUNLRjs7QURGQTtFQUNFLDRCQUFBO0FDS0Y7O0FERkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNLRjs7QURGQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0FDS0Y7O0FERkE7RUFDRSxXQUFBO0FDS0Y7O0FERkE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0tGOztBREZBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0tGOztBREZBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0tGOztBREZBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDS0Y7O0FERkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQ0tGOztBREZBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0tGOztBREZBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtBQ0tGOztBREZBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0tGOztBREpFO0VBQ0UsVUFBQTtBQ01KOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRjs7QURHQTtFQUNFLG9DQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNFLDRCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUFBLFlBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ0FGOztBRElBO0VBQ0U7SUFDQyxvQkFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0VDREQ7QUFDRjs7QURJQTtFQUNFLHNCQUFBO0VBQ0EscUhBQUE7QUNGRjs7QURPQTtFQUNFLFVBQUE7QUNKRjs7QURPQTtFQUNFLHNEQUFBO0FDSkY7O0FEUUE7RUFDRSxzREFBQTtBQ0xGOztBRFFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNMRjs7QURRQTtFQUNFLHVCQUFBO0FDTEY7O0FEUUE7RUFDRSwwQkFBQTtBQ0xGIiwiZmlsZSI6InByb2plY3Qvd3MvYXV0aG9yL3NyYy9saWIvcm91dGluZy9tb2R1bGVzL2VkaXRvci9yb3V0aW5nL21vZHVsZXMvd2ViLXBhZ2UvY29tcG9uZW50cy93ZWItbW9kdWxlLWVkaXRvci93ZWItbW9kdWxlLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXJzb3ItZGlzYWJsZSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcbn1cblxuLmdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICB3aWR0aDogNjUlO1xufVxuXG4ubWFyZ2luLWxlZnQge1xuICBtYXJnaW4tbGVmdDogMTIwcHg7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiA5MzBweCkge1xuICAgIC8vIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogODI0cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiA2OTlweCkge1xuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDU4NXB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxufVxuXG4uYXVkaW9zLWNhcmQtY29udGFpbmVye1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbjo6bmctZGVlcCAud2ViLW1vZHVsZS1jb250YWluZXIgI2NrZV8xX2NvbnRlbnRzLDo6bmctZGVlcCAud2ViLW1vZHVsZS1jb250YWluZXIgLmNrZV9jb250ZW50cyB7XG4gIG1pbi1oZWlnaHQ6IDcwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zdGVwcGVyLWNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5zdGVwcGVyLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMmZyIGF1dG8gMWZyO1xufVxuXG4udGV4dC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZnVsbFZpZXcge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xufVxuXG4uY2xvc2UtcHJldmlldyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTAwMTtcbn1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMTBweDtcbiAgcmlnaHQ6IDBweDtcbiAgei1pbmRleDogNTA7XG59XG5cbi5zbWFsbC1idXR0b24ge1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLm5vcm1hbC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDQwcHg7XG4gIHotaW5kZXg6IDM7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJ1dHRvbi1ncmlke1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogMTYwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yZnIgMC45NWZyO1xufVxuXG4uYXVkaW8tY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGF1ZGlvIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG59XG5cbi8vIC5ib3JkZXItcmlnaHR7XG4vLyAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIDtcbi8vIH1cblxuLmJvcmRlcmVke1xuICBib3JkZXI6IDJweCBzb2xpZCAjY2VjZWNlO1xufVxuXG4uYXVkaW8tdGFne1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4XG59XG5cbi5idXR0b24tdGV4dHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTdweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5tYXJnaW4tcmlnaHQteHhze1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLndzLW1hdC1wcmltYXJ5LWJhY2tncm91bmR7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cblxuLmludmFsaWRRdWVze1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMzYsIDY4LCA2OCkhaW1wb3J0YW50IDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lcntcbiAgb3ZlcmZsb3c6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNTAwcHg7XG59XG5cbm1hdC1zaWRlbmF2e1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5jdXN0b20ge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIGhlaWdodDogNTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbi5hdWRpb1VwZHtcbiAgYm9yZGVyOiAycHggcmdiKDE3LCAxMjIsIDE0OCkgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIHdpZHRoOiBmaXQtY29udGVudCA7XG5cblxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYXVkaW9VcGR7XG4gICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICBib3JkZXI6IDJweCByZ2IoMTcsIDEyMiwgMTQ4KSBzb2xpZDtcbiAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgd2lkdGg6IDE5MHB4IDtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGhlaWdodDogMzBweDtcbiB9XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG5cbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuY3VzdG9tOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZXhhbXBsZS1saXN0e1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuOjpuZy1kZWVwIC5teWZpZWxkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLm0tMXtcbiAgbWFyZ2luOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59IiwiLmN1cnNvci1kaXNhYmxlIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xufVxuXG4uZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIHdpZHRoOiA2NSU7XG59XG5cbi5tYXJnaW4tbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAxMjBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTMwcHgpIHtcbiAgLm1hcmdpbi1sZWZ0IHtcbiAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjRweCkge1xuICAubWFyZ2luLWxlZnQge1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY5OXB4KSB7XG4gIC5tYXJnaW4tbGVmdCB7XG4gICAgcGFkZGluZy10b3A6IDI0cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTg1cHgpIHtcbiAgLm1hcmdpbi1sZWZ0IHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG59XG5cbi5hdWRpb3MtY2FyZC1jb250YWluZXIge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbjo6bmctZGVlcCAud2ViLW1vZHVsZS1jb250YWluZXIgI2NrZV8xX2NvbnRlbnRzLCA6Om5nLWRlZXAgLndlYi1tb2R1bGUtY29udGFpbmVyIC5ja2VfY29udGVudHMge1xuICBtaW4taGVpZ2h0OiA3MDBweCAhaW1wb3J0YW50O1xufVxuXG4uc3RlcHBlci1jb250YWluZXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uc3RlcHBlci1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciBhdXRvIDFmcjtcbn1cblxuLnRleHQtd2hpdGUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmZ1bGxWaWV3IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbn1cblxuLmNsb3NlLXByZXZpZXcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMTVweDtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwMDE7XG59XG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTEwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDUwO1xufVxuXG4uc21hbGwtYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi5ub3JtYWwtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0MHB4O1xuICB6LWluZGV4OiAzO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNtYWxsLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5idXR0b24tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiAxNjBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciAwLjk1ZnI7XG59XG5cbi5hdWRpby1jb250YWluZXIge1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cbi5hdWRpby1jb250YWluZXIgYXVkaW8ge1xuICB3aWR0aDogNzAlO1xufVxuXG4uYm9yZGVyZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjY2VjZWNlO1xufVxuXG4uYXVkaW8tdGFnIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbn1cblxuLmJ1dHRvbi10ZXh0IHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTdweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5tYXJnaW4tcmlnaHQteHhzIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi53cy1tYXQtcHJpbWFyeS1iYWNrZ3JvdW5kIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmludmFsaWRRdWVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjNDQ0NCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNTAwcHg7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4uY3VzdG9tIHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG4uYXVkaW9VcGQge1xuICBib3JkZXI6IDJweCAjMTE3YTk0IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgcGFkZGluZy1yaWdodDogNnB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmF1ZGlvVXBkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJvcmRlcjogMnB4ICMxMTdhOTQgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgIHdpZHRoOiAxOTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxufVxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuY3VzdG9tOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZXhhbXBsZS1saXN0IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbjo6bmctZGVlcCAubXlmaWVsZCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubS0xIHtcbiAgbWFyZ2luOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/components/web-module-editor/web-module-editor.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/components/web-module-editor/web-module-editor.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: WebModuleEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebModuleEditorComponent", function() { return WebModuleEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/delete-dialog/delete-dialog.component */ "./project/ws/author/src/lib/modules/shared/components/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _upload_audio_upload_audio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../upload-audio/upload-audio.component */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/components/upload-audio/upload-audio.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/notification/notification.component */ "./project/ws/author/src/lib/modules/shared/components/notification/notification.component.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_comments_dialog_comments_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/comments-dialog/comments-dialog.component */ "./project/ws/author/src/lib/modules/shared/components/comments-dialog/comments-dialog.component.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component */ "./project/ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/error-parser/error-parser.component */ "./project/ws/author/src/lib/modules/shared/components/error-parser/error-parser.component.ts");
/* harmony import */ var _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ws/author/src/lib/routing/modules/editor/services/editor-content.service */ "./project/ws/author/src/lib/routing/modules/editor/services/editor-content.service.ts");
/* harmony import */ var _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ws/author/src/lib/services/loader.service */ "./project/ws/author/src/lib/services/loader.service.ts");
/* harmony import */ var _ws_author_src_lib_routing_modules_editor_shared_services_upload_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ws/author/src/lib/routing/modules/editor/shared/services/upload.service */ "./project/ws/author/src/lib/routing/modules/editor/shared/services/upload.service.ts");
/* harmony import */ var _ws_author_src_lib_routing_modules_editor_services_editor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ws/author/src/lib/routing/modules/editor/services/editor.service */ "./project/ws/author/src/lib/routing/modules/editor/services/editor.service.ts");
/* harmony import */ var _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ws/author/src/lib/services/init.service */ "./project/ws/author/src/lib/services/init.service.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/services/access-control.service */ "./project/ws/author/src/lib/modules/shared/services/access-control.service.ts");
/* harmony import */ var _web_module_class__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../web-module.class */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/components/web-module.class.ts");
/* harmony import */ var _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ws/author/src/lib/constants/notificationMessage */ "./project/ws/author/src/lib/constants/notificationMessage.ts");
/* harmony import */ var _ws_author_src_lib_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ws/author/src/lib/constants/apiEndpoints */ "./project/ws/author/src/lib/constants/apiEndpoints.ts");
/* harmony import */ var _ws_widget_collection_src_public_api__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ws-widget/collection/src/public-api */ "./library/ws-widget/collection/src/public-api.ts");
/* harmony import */ var _constant_web_module_constants__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../constant/web-module.constants */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/constant/web-module.constants.ts");
/* harmony import */ var _shared_components_plain_ckeditor_plain_ckeditor_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../shared/components/plain-ckeditor/plain-ckeditor.component */ "./project/ws/author/src/lib/routing/modules/editor/shared/components/plain-ckeditor/plain-ckeditor.component.ts");
/* harmony import */ var _ws_author_src_lib_services_notification_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ws/author/src/lib/services/notification.service */ "./project/ws/author/src/lib/services/notification.service.ts");




























let WebModuleEditorComponent = class WebModuleEditorComponent {
    constructor(dialog, snackBar, router, activateRoute, breakpointObserver, loaderService, metaContentService, uploadService, editorService, authInitService, accessService, notificationSvc) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.router = router;
        this.activateRoute = activateRoute;
        this.breakpointObserver = breakpointObserver;
        this.loaderService = loaderService;
        this.metaContentService = metaContentService;
        this.uploadService = uploadService;
        this.editorService = editorService;
        this.authInitService = authInitService;
        this.accessService = accessService;
        this.notificationSvc = notificationSvc;
        this.userData = {};
        this.currentId = '';
        this.selectedPage = 0;
        this.showContent = false;
        this.sideNavBarOpened = true;
        this.allContents = [];
        this.contentLoaded = false;
        this.allLanguages = [];
        this.changedContent = false;
        this.currentStep = 2;
        this.previewMode = false;
        this.submitPressed = false;
        this.showSettingButtons = true;
        this.mediumScreenSize = false;
        this.mediumSizeBreakpoint$ = this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["Breakpoints"].Small])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((res) => res.matches));
        this.mode$ = this.mediumSizeBreakpoint$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(isMedium => (isMedium ? 'over' : 'side')));
        this.showAudioCard = false;
        this.imagesUrlbase = '';
        // @ViewChild('editor', { static: false }) ckEditor!: any
        // downloadRegex = new RegExp(`(/content-store/.*?)(\\\)?\\\\?['"])`, 'gm')
        this.isCollectionEditor = false;
        this.isSubmitPressed = false;
    }
    ngOnDestroy() {
        if (this.activeContentSubscription) {
            this.activeContentSubscription.unsubscribe();
        }
    }
    // regexDownloadReplace(_str = '', group1: string, group2: string): string {
    //   return `${AUTHORING_CONTENT_BASE}${encodeURIComponent(group1)}${group2}`
    // }
    ngOnInit() {
        this.showSettingButtons = this.accessService.rootOrg === 'client1';
        // this.mediumSizeBreakpoint$.subscribe(isLtMedium => {
        //   this.sideNavBarOpened = !isLtMedium
        //   this.mediumScreenSize = isLtMedium
        //   if (isLtMedium) {
        //     this.showContent = false
        //   } else {
        //     this.showContent = true
        //   }
        // })
        if (this.activateRoute.parent && this.activateRoute.parent.parent) {
            const id = this.router.url.split('/')[3];
            // const self = this
            // get course details
            this.editorService.getDataForContent(id).subscribe(data => {
                const courseChildren = data[0].content.children;
                if (courseChildren) { }
                courseChildren.forEach((child) => {
                    if (child.mimeType === 'application/web-module') {
                        this.editorService.getDataForContent(child.identifier).subscribe(data2 => {
                            this.allContents.push(data[0].content);
                            const url = data[0].content.artifactUrl.substring(0, data[0].content.artifactUrl.lastIndexOf('/'));
                            this.imagesUrlbase = `${url}/assets/`;
                            const formattedObj = JSON.parse(JSON.stringify(data2));
                            if (formattedObj.pageJson) {
                                formattedObj.pageJson.map((obj) => {
                                    if (obj.audio && obj.audio.length) {
                                        obj.audio.map(audioObj => {
                                            // audioObj.URL = JSON.parse(JSON.stringify(
                                            //   audioBaseURL + audioObj.URL
                                            // ).replace(this.downloadRegex, this.regexDownloadReplace))
                                            audioObj.URL = this.imagesUrlbase + audioObj.URL;
                                            const splitUrl = audioObj.URL.split('/');
                                            const hostURL = `${splitUrl[0]}//${splitUrl[2]}`;
                                            audioObj.URL = audioObj.URL.replace(hostURL, '');
                                        });
                                    }
                                });
                            }
                            const getBodyReg = /\<body[^>]*\>([^]*)\<\/body/m;
                            // const reg1 = RegExp(`src\=\s*['"](.*?)`, 'gm')
                            // const reg2 = RegExp(`href\=\s*['"](.*?)['"]`, 'gm')
                            formattedObj.pages = formattedObj.pages.map((p, index) => {
                                let pageBody = p;
                                if (p.match(getBodyReg)) {
                                    pageBody = p.match(getBodyReg)[1]
                                        .replace('src="', ` src="${this.imagesUrlbase}`);
                                    // .replace(reg2, ` href="${this.imagesUrlbase}"`)
                                }
                                const fileInd = parseInt(formattedObj.pageJson[index].URL.replace('/assets/index', ''), 10);
                                return new _web_module_class__WEBPACK_IMPORTED_MODULE_21__["Page"]({ body: pageBody, fileIndex: fileInd });
                            });
                            this.userData[data[0].content.identifier] = formattedObj;
                        });
                    }
                });
            });
            // get children
            // loop over children
            // get data
            // this.activateRoute.parent.parent.data.subscribe(v => {
            //   if (v.contents && v.contents.length) {
            //     console.log(v)
            //     this.allContents.push(v.contents[0].content)
            //     if (v.contents[0].data) {
            //       const url = v.contents[0].content.artifactUrl.substring(0, v.contents[0].content.artifactUrl.lastIndexOf('/'))
            //       this.imagesUrlbase = `${url}/assets/`
            //       const formattedObj = JSON.parse(JSON.stringify(v.contents[0].data))
            //       formattedObj.pageJson.map((obj: ModuleObj) => {
            //         if (obj.audio && obj.audio.length) {
            //           obj.audio.map(audioObj => {
            //             // audioObj.URL = JSON.parse(JSON.stringify(
            //             //   audioBaseURL + audioObj.URL
            //             // ).replace(this.downloadRegex, this.regexDownloadReplace))
            //             audioObj.URL = this.imagesUrlbase + audioObj.URL
            //             const splitUrl = audioObj.URL.split('/')
            //             const hostURL = `${splitUrl[0]}//${splitUrl[2]}`
            //             audioObj.URL = audioObj.URL.replace(hostURL, '')
            //           })
            //         }
            //       })
            //       const getBodyReg = /\<body[^>]*\>([^]*)\<\/body/m
            //       // const reg1 = RegExp(`src\=\s*['"](.*?)`, 'gm')
            //       // const reg2 = RegExp(`href\=\s*['"](.*?)['"]`, 'gm')
            //       formattedObj.pages = formattedObj.pages.map((p: any, index: number) => {
            //         let pageBody = p
            //         if (p.match(getBodyReg)) {
            //           pageBody = p.match(getBodyReg)[1]
            //             .replace('src="', ` src="${this.imagesUrlbase}`)
            //           // .replace(reg2, ` href="${this.imagesUrlbase}"`)
            //         }
            //         const fileInd = parseInt(formattedObj.pageJson[index].URL.replace('/assets/index', ''), 10)
            //         return new Page({ body: pageBody, fileIndex: fileInd })
            //       })
            //       this.userData[v.contents[0].content.identifier] = formattedObj
            //     }
            //     this.contentLoaded = true
            //   }
            // })
        }
        this.contentLoaded = true;
        this.allLanguages = this.authInitService.ordinals.subTitles;
        this.loaderService.changeLoadState(true);
        // active lex id
        this.activeContentSubscription = this.metaContentService.changeActiveCont.subscribe(id => {
            if (!this.userData[id]) {
                this.userData[id] = new _web_module_class__WEBPACK_IMPORTED_MODULE_21__["WebModuleData"]({});
            }
            this.currentId = id;
            this.changePage(0);
        });
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["moveItemInArray"])(this.userData[this.currentId].pages, event.previousIndex, event.currentIndex);
        if (this.selectedPage === event.previousIndex) {
            this.selectedPage = event.currentIndex;
        }
        else if (this.selectedPage === event.currentIndex) {
            this.selectedPage = event.previousIndex;
        }
        this.changedContent = true;
    }
    deleteAudio(num) {
        if (this.userData[this.currentId].pageJson[this.selectedPage].audio) {
            this.userData[this.currentId].pageJson[this.selectedPage].audio.splice(num, 1);
            this.changedContent = true;
        }
    }
    checkValidity(lexId) {
        let returnVal = true;
        for (let i = 0; i < this.userData[lexId].pages.length; i = i + 1) {
            if (!this.userData[lexId].pages[i].body) {
                this.userData[lexId].pages[i].isInvalid = true;
                if (returnVal) {
                    this.changePage(i);
                }
                returnVal = false;
            }
        }
        return returnVal;
    }
    // getErrorMessages(){
    //   let errorPages: number[] = []
    //   this.userData[this.currentId].pages.forEach((page,index)=>{
    //     if(page.isInvalid){
    //       errorPages.push(index)
    //     }
    //   })
    //   let res: { [key: number]: string} = {}
    //   errorPages.map(num=>{
    //     res[num] = Notify.WEB_MODULE_PAGE_EMPTY
    //   })
    // }
    // save title
    forTitle(event) {
        this.userData[this.currentId].pageJson[this.selectedPage].title = event;
        this.changedContent = true;
    }
    // add new page
    addPage() {
        const fileIndex = this.userData[this.currentId].pages.length ?
            this.userData[this.currentId].pages[this.userData[this.currentId].pages.length - 1].fileIndex + 1
            : 1;
        const newModuleObj = new _web_module_class__WEBPACK_IMPORTED_MODULE_21__["ModuleObj"]({ URL: `${_ws_author_src_lib_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_23__["STREAM_FILES"]}index${fileIndex}.html`, title: '' });
        const newPageObj = new _web_module_class__WEBPACK_IMPORTED_MODULE_21__["Page"]({ fileIndex, body: '' });
        this.userData[this.currentId].pageJson.push(newModuleObj);
        this.userData[this.currentId].pages.push(newPageObj);
        this.changePage(this.userData[this.currentId].pages.length - 1);
        this.changedContent = true;
    }
    onBodyChange(i) {
        this.userData[this.currentId].pages[this.selectedPage].body = i;
        this.userData[this.currentId].pages[this.selectedPage].isBdchanged = true;
        // on save pressed if invalid it will be set as false otherwise it would be undefined
        if (this.userData[this.currentId].pages[this.selectedPage].isInvalid
            && this.userData[this.currentId].pages[this.selectedPage].body) {
            this.userData[this.currentId].pages[this.selectedPage].isInvalid = false;
        }
        this.changedContent = true;
    }
    changePage(index) {
        this.selectedPage = index;
        if (this.userData[this.currentId].pages[index] && this.userData[this.currentId].pages[index].isInvalid) {
            this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].WEB_MODULE_PAGE_EMPTY);
        }
        this.showAudioCard = false;
    }
    onDelete(i, event) {
        event.stopPropagation();
        const confirmDelete = this.dialog.open(_ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmDialogComponent"], {
            width: '500px',
            data: {
                type: 'deleteModulepg',
                index: i + 1,
            },
        });
        confirmDelete.afterClosed().subscribe(confirm => {
            if (confirm) {
                this.userData[this.currentId].pageJson.splice(i, 1);
                this.userData[this.currentId].pages.splice(i, 1);
                const dataLen = this.userData[this.currentId].pages.length;
                if (i === this.selectedPage) {
                    this.changePage(i && dataLen ? i - 1 : i);
                }
                else if (this.selectedPage > dataLen && i < this.selectedPage || this.selectedPage === dataLen) {
                    this.changePage(this.selectedPage - 1);
                }
                this.changedContent = true;
            }
        });
    }
    audioADD() {
        const languagesForDropDown = this.allLanguages.filter(lang => {
            if (this.userData[this.currentId].pageJson[this.selectedPage].audio) {
                const audios = this.userData[this.currentId].pageJson[this.selectedPage].audio;
                for (let i = 0; i < audios.length; i = i + 1) {
                    if (lang.srclang === audios[i].srclang) {
                        return false;
                    }
                }
                return true;
            }
            return true;
        });
        if (languagesForDropDown.length) {
            const contentLocale = this.metaContentService.getUpdatedMeta(this.currentId).locale;
            const defaultSelectedLang = languagesForDropDown.filter(l => l.srclang === contentLocale).length ?
                contentLocale : languagesForDropDown[0].srclang;
            const dialogRef = this.dialog.open(_upload_audio_upload_audio_component__WEBPACK_IMPORTED_MODULE_4__["UploadAudioComponent"], {
                data: {
                    id: this.currentId,
                    srclang: defaultSelectedLang,
                    languages: languagesForDropDown,
                },
                width: '500px',
            });
            dialogRef.afterClosed().subscribe((result) => {
                if (result) {
                    this.showAudioCard = true;
                    this.changedContent = true;
                    // if (!this.userData[this.currentId].pageJson[this.selectedPage].audio) {
                    //   this.userData[this.currentId].pageJson[this.selectedPage].audio = []
                    // }
                    const audios = this.userData[this.currentId].pageJson[this.selectedPage].audio || [];
                    audios.push(result);
                    this.userData[this.currentId].pageJson[this.selectedPage].audio = audios.slice();
                }
            });
        }
        else {
            this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].WEB_MODULE_AUDIO_ALL_LANGUAGES_PRESENT);
        }
    }
    uploadJson(data, fileName, location) {
        let content = JSON.parse(JSON.stringify(data));
        if (fileName.endsWith('.html')) {
            content = `<html><head></head><body>${content}</body></html>`;
            content = content.replace(new RegExp('\r?\n?\t', 'g'), '');
            // const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'text/html' })
            // const formdata = new FormData()
            // formdata.append('content', blob, fileName)
            // return this.uploadService.upload(
            //   formdata,
            //   { contentId: this.currentId, contentType: location }
            // )
        }
        return this.uploadService.encodedUpload(content, fileName, { contentId: this.currentId, contentType: location });
    }
    triggerUpload() {
        const moduledata = JSON.parse(JSON.stringify(this.userData[this.currentId].pageJson));
        moduledata.map((e) => {
            if (e.audio && e.audio.length) {
                e.audio.map(a => {
                    a.URL = _ws_author_src_lib_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_23__["STREAM_FILES"] + a.title;
                });
            }
            else {
                delete e.audio;
            }
        });
        const changedPages = this.userData[this.currentId].pages.filter(e => e.isBdchanged);
        const getUrlReg = new RegExp(/<img\s+[^>]*?src=("|')([^"']+)\1/);
        const res = changedPages.length ? changedPages.map(e => {
            if (!this.imagesUrlbase && e.body.match(getUrlReg)) {
                const url = e.body.match(getUrlReg)[2];
                this.imagesUrlbase = `${url.substring(0, url.lastIndexOf('/'))}/`;
            }
            const htmlFile = JSON.parse(JSON.stringify(e.body)
                .replace(/<a href/gm, '<a target=\\"_blank\\" href')
                .replace(this.imagesUrlbase, '')
                .replace(/(<img.*width=)['"](\d+?)['"](.*\/>)/gm, '$1"$2" style="width:100%; heigth: auto; max-width:$2" $3'));
            // .replace(/ href=\s*['"].*?\/web-hosted\/.*?lex_.*?\/assets\/(.*?)['"]/gm, ' href="$1"')
            const fileName = `index${e.fileIndex}.html`;
            return this.uploadJson(htmlFile, fileName, _ws_author_src_lib_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_23__["CONTENT_BASE_WEBHOST_ASSETS"]);
        }) : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])({});
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(res).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(() => {
            this.userData[this.currentId].pages.map(p => p.isBdchanged = false);
            return this.uploadJson(moduledata, _constant_web_module_constants__WEBPACK_IMPORTED_MODULE_25__["WEB_MODULE_JSON_FILE_NAME"], _ws_author_src_lib_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_23__["CONTENT_BASE_WEBHOST"]);
        }));
    }
    wrapperForTriggerSave() {
        this.loaderService.changeLoad.next(true);
        return (this.changedContent ? this.triggerUpload() : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])({}))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(v => {
            const updatedMeta = JSON.parse(JSON.stringify(this.metaContentService.upDatedContent[this.currentId] || {}));
            if (v && v.code) {
                updatedMeta.artifactUrl = (v.authArtifactURL || v.artifactURL).replace(/%2F/g, '/');
                updatedMeta.downloadUrl = v.downloadURL.replace(/%2F/g, '/');
                this.changedContent = false;
            }
            return this.triggerSave(updatedMeta, this.currentId);
        }));
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(() => this.metaContentService.resetOriginalMeta(meta, id)));
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
                this.takeAction();
                break;
            case 'delete':
                const dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DeleteDialogComponent"], {
                    width: '600px',
                    height: 'auto',
                    data: this.metaContentService.getUpdatedMeta(this.currentId),
                });
                dialog.afterClosed().subscribe(confirm => {
                    if (confirm) {
                        this.allContents = this.allContents.filter(v => v.identifier !== this.currentId);
                        if (this.allContents.length) {
                            this.metaContentService.changeActiveCont.next(this.allContents[0].identifier);
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
    delete() {
        const confirmDelete = this.dialog.open(_ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmDialogComponent"], {
            width: '400px',
            data: 'delete',
        });
        confirmDelete.afterClosed().subscribe(confirm => {
            if (confirm) {
                this.loaderService.changeLoad.next(true);
                this.editorService.deleteContent(this.currentId).subscribe(() => {
                    this.loaderService.changeLoad.next(false);
                    this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].SUCCESS);
                    this.allContents = this.allContents.filter(v => v.identifier !== this.currentId);
                    if (this.allContents.length) {
                        this.metaContentService.changeActiveCont.next(this.allContents[0].identifier);
                    }
                    else {
                        this.router.navigateByUrl('/author/home');
                    }
                }, () => {
                    this.loaderService.changeLoad.next(false);
                    this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].CONTENT_FAIL);
                });
            }
        });
    }
    isPublisherSame() {
        const publisherDetails = this.metaContentService.getUpdatedMeta(this.currentId).publisherDetails || [];
        return publisherDetails.find(v => v.id === this.accessService.userId) ? true : false;
    }
    isDirectPublish() {
        return (['Draft', 'Live'].includes(this.metaContentService.originalContent[this.currentId].status) &&
            this.isPublisherSame());
    }
    finalCall(commentsForm) {
        if (commentsForm) {
            const body = {
                comment: commentsForm.controls.comments.value,
                operation: commentsForm.controls.action.value === 'accept' ||
                    ['Draft', 'Live'].includes(this.metaContentService.originalContent[this.currentId].status)
                    ? ((this.accessService.authoringConfig.isMultiStepFlow && this.isDirectPublish()) ||
                        !this.accessService.authoringConfig.isMultiStepFlow) &&
                        this.accessService.rootOrg.toLowerCase() === 'client1'
                        ? 100000
                        : 1
                    : 0,
            };
            const updatedContent = this.metaContentService.upDatedContent[this.currentId] || null; /*{}*/
            const updatedMeta = this.metaContentService.getUpdatedMeta(this.currentId);
            const needSave = Object.keys(this.metaContentService.upDatedContent[this.currentId] || {})
                .length;
            const saveCall = (needSave
                ? this.triggerSave(updatedContent, this.currentId)
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])({})).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(() => this.editorService
                .forwardBackward(body, this.currentId, this.metaContentService.originalContent[this.currentId].status)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(() => this.notificationSvc
                .triggerPushPullNotification(updatedMeta, body.comment, body.operation ? true : false)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(() => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])({});
            }))))));
            this.loaderService.changeLoad.next(true);
            saveCall.subscribe(() => {
                this.loaderService.changeLoad.next(false);
                this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                    data: {
                        type: this.getMessage('success'),
                    },
                    duration: _constant_web_module_constants__WEBPACK_IMPORTED_MODULE_25__["NOTIFICATION_TIME"] * 1000,
                });
                this.allContents = this.allContents.filter(v => v.identifier !== this.currentId);
                if (this.allContents.length) {
                    this.metaContentService.changeActiveCont.next(this.allContents[0].identifier);
                }
                else {
                    this.router.navigateByUrl('/author/home');
                }
            }, error => {
                if (error.status === 409) {
                    const errorMap = new Map();
                    errorMap.set(this.currentId, this.metaContentService.getUpdatedMeta(this.currentId));
                    this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_14__["ErrorParserComponent"], {
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
                    duration: _constant_web_module_constants__WEBPACK_IMPORTED_MODULE_25__["NOTIFICATION_TIME"] * 1000,
                });
            });
        }
    }
    getMessage(type) {
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
    getAction() {
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
    takeAction() {
        const needSave = Object.keys((this.metaContentService.upDatedContent[this.currentId] || {})).length
            || this.changedContent;
        if (!needSave &&
            (this.metaContentService.getUpdatedMeta(this.currentId).status === 'Live')) {
            this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].UP_TO_DATE);
            return;
        }
        this.validationCheck().subscribe(valid => {
            this.loaderService.changeLoad.next(false);
            if (valid) {
                const dialogRef = this.dialog.open(_ws_author_src_lib_modules_shared_components_comments_dialog_comments_dialog_component__WEBPACK_IMPORTED_MODULE_12__["CommentsDialogComponent"], {
                    width: '750px',
                    height: '450px',
                    data: this.metaContentService.getOriginalMeta(this.currentId),
                });
                dialogRef.afterClosed().subscribe((commentsForm) => {
                    this.finalCall(commentsForm);
                });
            }
        }, 
        // tslint:disable-next-line: align
        () => {
            this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].SAVE_FAIL);
        });
    }
    validationCheck() {
        let returnValue = true;
        if (!this.metaContentService.isValid(this.currentId) || !this.metaContentService.isValid(this.currentId)
            && !this.metaContentService.getUpdatedMeta(this.currentId).artifactUrl) {
            this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].MANDATORY_FIELD_ERROR);
            returnValue = false;
        }
        else if (this.changedContent) {
            if (this.checkValidity(this.currentId)) {
                return this.wrapperForTriggerSave().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(() => true));
            }
            this.currentStep = 2;
            returnValue = false;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(returnValue);
    }
    preview() {
        if (this.userData[this.currentId].pages.length) {
            const needSave = this.changedContent ||
                Object.keys((this.metaContentService.upDatedContent[this.currentId] || {})).length;
            if (needSave) {
                if (this.checkValidity(this.currentId)) {
                    this.wrapperForTriggerSave().subscribe(() => {
                        this.loaderService.changeLoad.next(false);
                        this.previewMode = true;
                        this.mimeTypeRoute = Object(_ws_widget_collection_src_public_api__WEBPACK_IMPORTED_MODULE_24__["VIEWER_ROUTE_FROM_MIME"])(this.metaContentService.getUpdatedMeta(this.currentId).mimeType);
                    }, 
                    // tslint:disable-next-line: align
                    () => {
                        this.loaderService.changeLoad.next(false);
                        this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].SAVE_FAIL);
                    });
                }
            }
            else {
                this.previewMode = true;
                this.mimeTypeRoute = Object(_ws_widget_collection_src_public_api__WEBPACK_IMPORTED_MODULE_24__["VIEWER_ROUTE_FROM_MIME"])(this.metaContentService.getUpdatedMeta(this.currentId).mimeType);
            }
        }
        else {
            this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].WEB_MODULE_MIN_PAGE_REQUIRED);
        }
    }
    customStepper(step) {
        this.currentStep = step;
        // if (step === 3 && this.currentStep === 2) {
        //   if (this.userData[this.currentId].pages.length) {
        //     this.currentStep = step
        //   } else {
        //     this.showNotification(Notify.NO_CONTENT)
        //   }
        // } else {
        //   this.currentStep = step
        // }
    }
    changeContent(data) {
        this.currentId = data.identifier;
        this.metaContentService.changeActiveCont.next(data.identifier);
        this.selectedPage = 0;
    }
    createInAnotherLanguage(lang) {
        this.loaderService.changeLoad.next(true);
        this.metaContentService.createInAnotherLanguage(lang, { artifactURL: '', downloadUrl: '' })
            .subscribe(data => {
            this.loaderService.changeLoad.next(false);
            if (data !== true) {
                this.allContents.push(data);
                this.changeContent(data);
                this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].CONTENT_CREATE_SUCCESS);
            }
            else {
                this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].DATA_PRESENT);
            }
        }, error => {
            if (error.status === 409) {
                const errorMap = new Map();
                errorMap.set(this.currentId, this.metaContentService.getUpdatedMeta(this.currentId));
                this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_14__["ErrorParserComponent"], {
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
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].CONTENT_FAIL,
                },
                duration: 3 * 1000,
            });
        });
    }
    save() {
        const needSave = Object.keys((this.metaContentService.upDatedContent[this.currentId] || {})).length
            || this.changedContent;
        if (this.userData[this.currentId].pages.length > 0 && (needSave)) {
            if (this.checkValidity(this.currentId)) {
                // if any change in data, then upload json
                this.wrapperForTriggerSave().subscribe(() => {
                    this.loaderService.changeLoad.next(false);
                    this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].SAVE_SUCCESS);
                }, () => {
                    this.loaderService.changeLoad.next(false);
                    this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].SAVE_FAIL);
                });
            }
            else {
                if (this.currentStep !== 2) {
                    this.currentStep = 2;
                }
            }
        }
        else {
            if (!this.userData[this.currentId].pages.length) {
                this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].WEB_MODULE_MIN_PAGE_REQUIRED);
            }
            else {
                this.showNotification(_ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_22__["Notify"].UP_TO_DATE);
            }
        }
    }
    showNotification(errorType) {
        this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
            data: {
                type: errorType,
            },
            duration: _constant_web_module_constants__WEBPACK_IMPORTED_MODULE_25__["NOTIFICATION_TIME"] * 1000,
        });
    }
    toggleSettingButtons() {
        this.showSettingButtons = !this.showSettingButtons;
    }
    closePreview() {
        this.previewMode = false;
    }
    canDelete() {
        return this.accessService.hasRole(['editor', 'admin']) ||
            (['Draft', 'Live'].includes(this.metaContentService.originalContent[this.currentId].status) &&
                this.metaContentService.originalContent[this.currentId].creatorContacts.find(v => v.id === this.accessService.userId));
    }
};
WebModuleEditorComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["BreakpointObserver"] },
    { type: _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_16__["LoaderService"] },
    { type: _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_15__["EditorContentService"] },
    { type: _ws_author_src_lib_routing_modules_editor_shared_services_upload_service__WEBPACK_IMPORTED_MODULE_17__["UploadService"] },
    { type: _ws_author_src_lib_routing_modules_editor_services_editor_service__WEBPACK_IMPORTED_MODULE_18__["EditorService"] },
    { type: _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_19__["AuthInitService"] },
    { type: _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_20__["AccessControlService"] },
    { type: _ws_author_src_lib_services_notification_service__WEBPACK_IMPORTED_MODULE_27__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_shared_components_plain_ckeditor_plain_ckeditor_component__WEBPACK_IMPORTED_MODULE_26__["PlainCKEditorComponent"], { static: false })
], WebModuleEditorComponent.prototype, "ckEditor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], WebModuleEditorComponent.prototype, "isCollectionEditor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], WebModuleEditorComponent.prototype, "isSubmitPressed", void 0);
WebModuleEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ws-auth-web-module-editor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./web-module-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/components/web-module-editor/web-module-editor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./web-module-editor.component.scss */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/components/web-module-editor/web-module-editor.component.scss")).default]
    })
], WebModuleEditorComponent);



/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/components/web-module.class.ts":
/*!******************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/components/web-module.class.ts ***!
  \******************************************************************************************************************/
/*! exports provided: Page, ModuleObj, WebModuleData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleObj", function() { return ModuleObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebModuleData", function() { return WebModuleData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Page {
    constructor(init) {
        this.body = init.body || '';
        this.fileIndex = init.fileIndex || 0;
        this.isBdchanged = init.isBdchanged || true;
    }
}
// tslint:disable-next-line: max-classes-per-file
class ModuleObj {
    constructor(init) {
        this.URL = init.URL || '';
        this.title = init.title || '';
        this.audio = init.audio || [];
    }
}
// tslint:disable-next-line: max-classes-per-file
class WebModuleData {
    constructor(init) {
        this.pageJson = init.pageJson || [];
        this.pages = init.pages || [];
    }
}


/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/constant/web-module.constants.ts":
/*!********************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/constant/web-module.constants.ts ***!
  \********************************************************************************************************************/
/*! exports provided: WEB_MODULE_JSON_FILE_NAME, NOTIFICATION_TIME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB_MODULE_JSON_FILE_NAME", function() { return WEB_MODULE_JSON_FILE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_TIME", function() { return NOTIFICATION_TIME; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const WEB_MODULE_JSON_FILE_NAME = 'manifest.json';
const NOTIFICATION_TIME = 5;
// export const MAX_AUDIO_PER_PAGE = 18


/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/shared/component/audio-strips/audio-strips.component.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/shared/component/audio-strips/audio-strips.component.scss ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".view-more {\n  display: flex;\n  align-items: center;\n  text-align: center;\n}\n.view-more .icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  border: 1px solid;\n  border-radius: 50%;\n  padding: 8px;\n  margin-bottom: 8px;\n}\n.card-container {\n  width: 150px;\n  text-align: center;\n  height: 130px;\n  box-sizing: border-box;\n  margin-right: 15px;\n  padding: 5px;\n  margin: 0px 0.75rem;\n}\n.delete-button {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 100;\n}\n.large-icon {\n  font-size: 32px !important;\n  height: 32px;\n  width: 32px;\n}\n.icon-container {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.icon-container mat-icon {\n  width: 36px;\n  height: 36px;\n  font-size: 36px;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL3dlYi1wYWdlL3NoYXJlZC9jb21wb25lbnQvYXVkaW8tc3RyaXBzL2F1ZGlvLXN0cmlwcy5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXV0aG9yL3NyYy9saWIvcm91dGluZy9tb2R1bGVzL2VkaXRvci9yb3V0aW5nL21vZHVsZXMvd2ViLXBhZ2Uvc2hhcmVkL2NvbXBvbmVudC9hdWRpby1zdHJpcHMvYXVkaW8tc3RyaXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNGRjtBRElFO0VBRUUsZUFEWTtFQUVaLFdBRlk7RUFHWixZQUhZO0VBSVosaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0hKO0FET0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0pGO0FET0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0pGO0FET0E7RUFDRSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSkY7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0pGO0FES0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDSEoiLCJmaWxlIjoicHJvamVjdC93cy9hdXRob3Ivc3JjL2xpYi9yb3V0aW5nL21vZHVsZXMvZWRpdG9yL3JvdXRpbmcvbW9kdWxlcy93ZWItcGFnZS9zaGFyZWQvY29tcG9uZW50L2F1ZGlvLXN0cmlwcy9hdWRpby1zdHJpcHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5AaW1wb3J0ICdzdHlsZXMvX3dzLW1peGlucy5zY3NzJztcblxuLnZpZXctbW9yZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAuaWNvbiB7XG4gICAgJGljb24tc2l6ZTogMjRweDtcbiAgICBmb250LXNpemU6ICRpY29uLXNpemU7XG4gICAgd2lkdGg6ICRpY29uLXNpemU7XG4gICAgaGVpZ2h0OiAkaWNvbi1zaXplO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG59XG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAwcHggLjc1cmVtO1xufVxuXG4uZGVsZXRlLWJ1dHRvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4ubGFyZ2UtaWNvbntcbiAgZm9udC1zaXplOiAzMnB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG59XG5cbi5pY29uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hdC1pY29uIHtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iLCIudmlldy1tb3JlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnZpZXctbW9yZSAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAwcHggMC43NXJlbTtcbn1cblxuLmRlbGV0ZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMHB4O1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5sYXJnZS1pY29uIHtcbiAgZm9udC1zaXplOiAzMnB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG59XG5cbi5pY29uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaWNvbi1jb250YWluZXIgbWF0LWljb24ge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIG9wYWNpdHk6IDE7XG59Il19 */");

/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/shared/component/audio-strips/audio-strips.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/shared/component/audio-strips/audio-strips.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: AudioStripsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioStripsComponent", function() { return AudioStripsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../constants/apiEndpoints */ "./project/ws/author/src/lib/constants/apiEndpoints.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component */ "./project/ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component.ts");






let AudioStripsComponent = class AudioStripsComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.doRegex = true;
        this.audioDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isAudioPlaying = false;
        this.downloadRegex = new RegExp(`(/content-store/.*?)(\\\)?\\\\?['"])`, 'gm');
    }
    set data(val) {
        this.audioData = this.doRegex ? val.map((obj) => {
            return JSON.parse(JSON.stringify(obj).replace(this.downloadRegex, this.regexDownloadReplace));
        }) : [];
        // this.durations = []
        // this.audioData.forEach(aud=>{
        //   this.getDuration(aud.URL)
        // })
    }
    regexDownloadReplace(_str = '', group1, group2) {
        return `${_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_4__["AUTHORING_CONTENT_BASE"]}${encodeURIComponent(group1)}${group2}`;
    }
    ngOnInit() { }
    /**
     * Used to play or stop audio
     * @param id of the audio element
     */
    audioControl(id) {
        const audio = document.getElementById(id);
        if (!this.isAudioPlaying) {
            audio.play();
        }
        else {
            audio.pause();
            audio.currentTime = 0;
        }
        this.isAudioPlaying = !this.isAudioPlaying;
        this.listener = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(audio, 'ended').subscribe(() => {
            this.isAudioPlaying = false;
        });
    }
    deleteAudio(index) {
        const confirmDelete = this.dialog.open(_ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], {
            width: '500px',
            data: 'deleteAudio',
        });
        confirmDelete.afterClosed().subscribe(confirm => {
            if (confirm) {
                this.audioData.splice(index, 1);
                this.audioDeleted.emit(index);
            }
        });
    }
    ngOnDestroy() {
        if (this.listener) {
            this.listener.unsubscribe();
        }
    }
};
AudioStripsComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AudioStripsComponent.prototype, "data", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AudioStripsComponent.prototype, "doRegex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AudioStripsComponent.prototype, "audioDeleted", void 0);
AudioStripsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-auth-audio-strips',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./audio-strips.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/shared/component/audio-strips/audio-strips.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./audio-strips.component.scss */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/shared/component/audio-strips/audio-strips.component.scss")).default]
    })
], AudioStripsComponent);



/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/web-page-routing.module.ts":
/*!**************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/web-page-routing.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: WebPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPageRoutingModule", function() { return WebPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_web_module_editor_web_module_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/web-module-editor/web-module-editor.component */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/components/web-module-editor/web-module-editor.component.ts");




const routes = [
    {
        path: '',
        component: _components_web_module_editor_web_module_editor_component__WEBPACK_IMPORTED_MODULE_3__["WebModuleEditorComponent"],
    },
];
let WebPageRoutingModule = class WebPageRoutingModule {
};
WebPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WebPageRoutingModule);



/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/web-page.module.ts":
/*!******************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/web-page.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: WebPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPageModule", function() { return WebPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _ws_author_src_lib_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/shared.module */ "./project/ws/author/src/lib/modules/shared/shared.module.ts");
/* harmony import */ var _ws_author_src_lib_routing_modules_editor_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ws/author/src/lib/routing/modules/editor/shared/shared.module */ "./project/ws/author/src/lib/routing/modules/editor/shared/shared.module.ts");
/* harmony import */ var _ws_author_src_lib_modules_viewer_viewer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ws/author/src/lib/modules/viewer/viewer.module */ "./project/ws/author/src/lib/modules/viewer/viewer.module.ts");
/* harmony import */ var _web_page_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./web-page-routing.module */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/web-page-routing.module.ts");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _components_web_module_editor_web_module_editor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/web-module-editor/web-module-editor.component */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/components/web-module-editor/web-module-editor.component.ts");
/* harmony import */ var _components_upload_audio_upload_audio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/upload-audio/upload-audio.component */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/components/upload-audio/upload-audio.component.ts");
/* harmony import */ var _shared_component_audio_strips_audio_strips_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/component/audio-strips/audio-strips.component */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/shared/component/audio-strips/audio-strips.component.ts");












let WebPageModule = class WebPageModule {
};
WebPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_web_module_editor_web_module_editor_component__WEBPACK_IMPORTED_MODULE_9__["WebModuleEditorComponent"],
            _components_upload_audio_upload_audio_component__WEBPACK_IMPORTED_MODULE_10__["UploadAudioComponent"],
            _shared_component_audio_strips_audio_strips_component__WEBPACK_IMPORTED_MODULE_11__["AudioStripsComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ws_author_src_lib_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _ws_author_src_lib_routing_modules_editor_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["EditorSharedModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _ws_author_src_lib_modules_viewer_viewer_module__WEBPACK_IMPORTED_MODULE_6__["AuthViewerModule"],
            _web_page_routing_module__WEBPACK_IMPORTED_MODULE_7__["WebPageRoutingModule"],
            _ws_widget_utils__WEBPACK_IMPORTED_MODULE_8__["HorizontalScrollerModule"],
        ],
        exports: [_components_web_module_editor_web_module_editor_component__WEBPACK_IMPORTED_MODULE_9__["WebModuleEditorComponent"]],
        entryComponents: [_components_upload_audio_upload_audio_component__WEBPACK_IMPORTED_MODULE_10__["UploadAudioComponent"]],
    })
], WebPageModule);



/***/ })

}]);
//# sourceMappingURL=default~routing-modules-collection-collection-module~routing-modules-web-page-web-page-module-es2015.js.map