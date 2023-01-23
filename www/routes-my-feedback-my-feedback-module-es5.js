function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-my-feedback-my-feedback-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-filter-dialog/feedback-filter-dialog.component.html":
  /*!************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-filter-dialog/feedback-filter-dialog.component.html ***!
    \************************************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackComponentsFeedbackFilterDialogFeedbackFilterDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<h2 class=\"mat-h2 m-0\" i18n>Feedback</h2>\n\n<section class=\"mb-2\">\n  <div class=\"mat-body\" i18n>Filter by:</div>\n  <form [formGroup]=\"filterForm\" id=\"filterForm\" (ngSubmit)=\"applyFilters()\">\n    <mat-form-field\n      class=\"w-full\"\n      [color]=\"'primary'\"\n      *ngIf=\"filterDialogData.viewedBy === feedbackRoles.User\"\n    >\n      <mat-select\n        multiple\n        formControlName=\"feedbackType\"\n        placeholder=\"Feedback type\"\n        i18n-placeholder\n      >\n        <mat-option [value]=\"feedbackTypes.Content\" i18n>\n          Content Feedback\n        </mat-option>\n        <mat-option\n          [value]=\"feedbackTypes.Platform\"\n          *ngIf=\"showFeedbackTypeFilter(feedbackTypes.Platform)\"\n          i18n\n        >\n          Platform Feedback\n        </mat-option>\n        <mat-option\n          [value]=\"feedbackTypes.ContentRequest\"\n          *ngIf=\"showFeedbackTypeFilter(feedbackTypes.ContentRequest)\"\n          i18n\n        >\n          Content Requests\n        </mat-option>\n        <mat-option\n          [value]=\"feedbackTypes.ServiceRequest\"\n          *ngIf=\"showFeedbackTypeFilter(feedbackTypes.ServiceRequest)\"\n          i18n\n        >\n          Other Requests\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"w-full\" [color]=\"'primary'\" *ngIf=\"showContentTypeControl()\">\n      <mat-select\n        multiple\n        formControlName=\"contentType\"\n        placeholder=\"Content type\"\n        i18n-placeholder\n      >\n        <mat-option [value]=\"contentTypes.PROGRAM\" i18n>Program</mat-option>\n        <mat-option [value]=\"contentTypes.COURSE\" i18n>Course</mat-option>\n        <mat-option [value]=\"contentTypes.MODULE\" i18n>Module</mat-option>\n        <mat-option [value]=\"contentTypes.RESOURCE\" i18n>Resource</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-checkbox formControlName=\"showLimited\">\n      <ng-container *ngIf=\"filterDialogData.viewedBy === feedbackRoles.User\" i18n>\n        Show only unread items\n      </ng-container>\n      <ng-container *ngIf=\"filterDialogData.viewedBy !== feedbackRoles.User\" i18n>\n        Show only unanswered items\n      </ng-container>\n    </mat-checkbox>\n  </form>\n</section>\n\n<section>\n  <button mat-flat-button color=\"primary\" type=\"submit\" form=\"filterForm\" i18n>Apply</button>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-list/feedback-list.component.html":
  /*!******************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-list/feedback-list.component.html ***!
    \******************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackComponentsFeedbackListFeedbackListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"pt-8\">\n  <h3 class=\"mat-h3\" [ngSwitch]=\"viewedBy\" *ngIf=\"feedbackData && feedbackData.hits\">\n    <ng-container *ngSwitchCase=\"feedbackRoles.User\" i18n>\n      Feedback that you have given.\n    </ng-container>\n    <ng-container *ngSwitchCase=\"feedbackRoles.Author\" i18n>\n      Feedback that you have received for your content.\n    </ng-container>\n    <ng-container *ngSwitchCase=\"feedbackRoles.Platform\" i18n>\n      Feedback on the platform.\n    </ng-container>\n    <ng-container *ngSwitchCase=\"feedbackRoles.Content\" i18n>\n      View and reply to content requests.\n    </ng-container>\n    <ng-container *ngSwitchCase=\"feedbackRoles.Service\" i18n>\n      View and reply to service requests.\n    </ng-container>\n  </h3>\n</section>\n\n<section\n  [ngClass]=\"{ flex: viewedBy === feedbackRoles.User || viewedBy === feedbackRoles.Author }\"\n  *ngIf=\"hasHits\"\n>\n  <div class=\"w-full pr-2\">\n    <form [formGroup]=\"searchForm\" (ngSubmit)=\"fetchFeedbacks()\">\n      <mat-form-field class=\"w-full\" [color]=\"'primary'\">\n        <input type=\"text\" matInput formControlName=\"query\" placeholder=\"Search\" i18n-placeholder />\n        <mat-icon matSuffix>search</mat-icon>\n      </mat-form-field>\n    </form>\n  </div>\n  <div class=\"mb-4\" *ngIf=\"viewedBy !== feedbackRoles.User && viewedBy !== feedbackRoles.Author\">\n    <mat-checkbox [formControl]=\"unseenCtrl\">\n      <ng-container *ngIf=\"viewedBy === feedbackRoles.User\" i18n>\n        Show only unread items\n      </ng-container>\n      <ng-container *ngIf=\"viewedBy !== feedbackRoles.User\" i18n>\n        Show only unanswered items\n      </ng-container>\n    </mat-checkbox>\n  </div>\n  <button\n    mat-mini-fab\n    color=\"primary\"\n    matTooltip=\"Filter\"\n    i18n-matTooltip\n    (click)=\"openFilterDialog()\"\n    *ngIf=\"viewedBy === feedbackRoles.User || viewedBy === feedbackRoles.Author\"\n  >\n    <mat-icon>filter_list</mat-icon>\n  </button>\n</section>\n\n<ng-container *ngIf=\"feedbackFetchStatus === 'done' && feedbackData\">\n  <ng-container *ngIf=\"feedbackData.result.length\">\n    <mat-list>\n      <ng-container *ngFor=\"let feedback of feedbackData.result\">\n        <ng-container\n          [ngTemplateOutlet]=\"listItemDefault\"\n          [ngTemplateOutletContext]=\"{ $implicit: feedback }\"\n          *ngIf=\"viewedBy !== feedbackRoles.User\"\n        ></ng-container>\n        <ng-container\n          [ngTemplateOutlet]=\"listItemUser\"\n          [ngTemplateOutletContext]=\"{ $implicit: feedback }\"\n          *ngIf=\"viewedBy === feedbackRoles.User\"\n        ></ng-container>\n        <mat-divider></mat-divider>\n      </ng-container>\n    </mat-list>\n  </ng-container>\n\n  <ng-container *ngIf=\"!feedbackData.result.length\">\n    <section class=\"my-16 flex flex-center\">\n      <h3 class=\"mat-h3\" i18n>\n        No results found.\n      </h3>\n    </section>\n  </ng-container>\n</ng-container>\n\n<ng-container *ngIf=\"feedbackFetchStatus === 'error'\">\n  <section class=\"my-16 flex flex-center\">\n    <h3 class=\"mat-h3\" i18n>\n      There was an error while searching for feedback.\n    </h3>\n  </section>\n</ng-container>\n\n<!-- Templates -->\n\n<!-- Normal list item -->\n<ng-template #listItemDefault let-feedback>\n  <mat-list-item\n    matRipple\n    class=\"mat-toolbar cursor-pointer\"\n    (click)=\"onFeedbackItemClick(feedback)\"\n  >\n    <div mat-list-avatar>\n      <ws-widget-user-image [email]=\"feedback.feedbackBy.email\"></ws-widget-user-image>\n    </div>\n    <div mat-line>\n      <div class=\"w-full sm:flex sm:flex-between\">\n        <h3\n          class=\"mat-h3 truncate m-0 flex-grow\"\n          [style.font-weight]=\"!feedback.replied ? 500 : 'inherit'\"\n        >\n          {{ feedback.feedbackBy.name }}\n        </h3>\n        <div\n          class=\"mat-caption hidden sm:block\"\n          [style.font-weight]=\"!feedback.replied ? 500 : 'inherit'\"\n        >\n          {{ feedback.lastActivityOn | date: 'dd MMM yyyy hh:mm a' }}\n        </div>\n      </div>\n    </div>\n    <div mat-line>\n      <span class=\"mat-caption sm:hidden\" [style.font-weight]=\"!feedback.replied ? 500 : 'inherit'\">\n        {{ feedback.lastActivityOn | date: 'dd MMM yyyy hh:mm a' }}\n      </span>\n    </div>\n    <div mat-line class=\"flex\" *ngIf=\"feedback.feedbackType === feedbackTypes.Content\">\n      <span class=\"truncate m-0 mat-body-2\">\n        {{ feedback.contentTitle }}\n      </span>\n    </div>\n    <div mat-line class=\"flex\">\n      <span\n        mat-line\n        class=\"truncate m-0\"\n        [style.font-weight]=\"!feedback.replied ? 500 : 'inherit'\"\n        [innerHTML]=\"feedback.feedbackText | pipeSafeSanitizer: 'html'\"\n      ></span>\n    </div>\n  </mat-list-item>\n</ng-template>\n\n<!-- User list item -->\n<ng-template #listItemUser let-feedback>\n  <mat-list-item\n    matRipple\n    class=\"mat-toolbar cursor-pointer\"\n    (click)=\"onFeedbackItemClick(feedback)\"\n  >\n    <div mat-line>\n      <!-- <div class=\"w-full sm:flex sm:flex-between\">\n        <h3\n          class=\"mat-h3 truncate m-0 flex-grow\"\n          [style.font-weight]=\"feedback.replied && !feedback.seenReply ? 500 : 'inherit'\"\n        >\n          <ws-app-feedback-type [feedbackType]=\"feedback.feedbackType\"></ws-app-feedback-type>\n        </h3>\n        <div\n          class=\"mat-caption hidden sm:block\"\n          [style.font-weight]=\"feedback.replied && !feedback.seenReply ? 500 : 'inherit'\"\n        >\n          {{ feedback.lastActivityOn | date: 'dd MMM yyyy hh:mm a' }}\n        </div>\n      </div> -->\n      <div class=\"sm:text-right\">\n        <span\n          class=\"mat-caption hidden sm:block\"\n          [style.font-weight]=\"feedback.replied && !feedback.seenReply ? 500 : 'inherit'\"\n        >\n          {{ feedback.lastActivityOn | date: 'dd MMM yyyy hh:mm a' }}\n        </span>\n      </div>\n    </div>\n\n    <div mat-line>\n      <span\n        class=\"mat-caption sm:hidden\"\n        [style.font-weight]=\"feedback.replied && !feedback.seenReply ? 500 : 'inherit'\"\n      >\n        {{ feedback.lastActivityOn | date: 'dd MMM yyyy hh:mm a' }}\n      </span>\n    </div>\n\n    <div mat-line class=\"flex\" *ngIf=\"feedback.feedbackType === feedbackTypes.Content\">\n      <span class=\"truncate m-0 mat-body-2\">\n        {{ feedback.contentTitle }}\n      </span>\n    </div>\n\n    <div mat-line class=\"flex\">\n      <span\n        class=\"truncate m-0\"\n        [style.font-weight]=\"feedback.replied && !feedback.seenReply ? 500 : 'inherit'\"\n        [innerHTML]=\"feedback.feedbackText | pipeSafeSanitizer: 'html'\"\n      ></span>\n    </div>\n  </mat-list-item>\n</ng-template>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread-header/feedback-thread-header.component.html":
  /*!************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread-header/feedback-thread-header.component.html ***!
    \************************************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackComponentsFeedbackThreadHeaderFeedbackThreadHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"mb-2\" *ngIf=\"threadHead.feedbackType === feedbackTypes.Content\">\n  <div>\n    <a [routerLink]=\"['/app/toc', threadHead.contentId]\">\n      <h2 class=\"mat-title content-name\">{{ threadHead.contentTitle }}</h2>\n    </a>\n  </div>\n  <div class=\"mat-body-2 uppercase my-auto\">\n    <ng-container [ngSwitch]=\"threadHead.contentType\">\n      <ng-container *ngSwitchCase=\"contentTypes.PROGRAM\" i18n>Program</ng-container>\n      <ng-container *ngSwitchCase=\"contentTypes.COURSE\" i18n>Course</ng-container>\n      <ng-container *ngSwitchCase=\"contentTypes.MODULE\" i18n>Module</ng-container>\n      <ng-container *ngSwitchCase=\"contentTypes.RESOURCE\" i18n>Resource</ng-container>\n      <ng-container *ngSwitchDefault i18n>Content</ng-container>\n    </ng-container>\n  </div>\n</section>\n\n<!-- <section class=\"flex mat-body mb-2\">\n  <div class=\"flex flex-col flex-center\">\n    <ws-widget-user-image [email]=\"threadHead.feedbackBy.email\"></ws-widget-user-image>\n  </div>\n\n  <div class=\"flex-grow ml-2\">\n    <h3 class=\"mat-h3 truncate thread-head-name\">\n      <ng-container *ngIf=\"threadHead.feedbackBy.userId !== userId\">\n        {{ threadHead.feedbackBy.name }}\n      </ng-container>\n      <ng-container *ngIf=\"threadHead.feedbackBy.userId === userId\">\n        <ng-container\n          *ngIf=\"\n            threadHead.feedbackType === feedbackTypes.Content ||\n            threadHead.feedbackType === feedbackTypes.Platform\n          \"\n          i18n\n        >\n          You gave this feedback\n        </ng-container>\n        <ng-container\n          *ngIf=\"\n            threadHead.feedbackType === feedbackTypes.ContentRequest ||\n            threadHead.feedbackType === feedbackTypes.ServiceRequest\n          \"\n          i18n\n        >\n          You raised this request\n        </ng-container>\n      </ng-container>\n    </h3>\n\n    <div class=\"mat-caption\">\n      {{ threadHead.createdOn | date: 'dd MMM yyyy hh:mm a' }}\n    </div>\n  </div>\n</section> -->\n\n<!-- <section class=\"mx-2 my-auto\" *ngIf=\"feedbackConfig\">\n  <button\n    mat-flat-button\n    [color]=\"'primary'\"\n    [matMenuTriggerFor]=\"categoryMenu\"\n    *ngIf=\"!feedbackCategory && viewedBy !== feedbackRoles.User\"\n  >\n    <mat-icon>category</mat-icon>\n    <span class=\"ml-1\" i18n>Assign category</span>\n  </button>\n\n  <mat-menu #categoryMenu=\"matMenu\">\n    <button\n      mat-menu-item\n      *ngFor=\"let category of feedbackConfig.feedbackCategories\"\n      (click)=\"updateCategory(category)\"\n    >\n      {{ category }}\n    </button>\n  </mat-menu>\n\n  <mat-chip-list *ngIf=\"feedbackCategory\">\n    <mat-chip [color]=\"'primary'\" [removable]=\"true\" (removed)=\"updateCategory('none')\">\n      {{ feedbackCategory }}\n      <mat-icon matChipRemove *ngIf=\"viewedBy !== feedbackRoles.User\">cancel</mat-icon>\n    </mat-chip>\n  </mat-chip-list>\n</section> -->\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread-item/feedback-thread-item.component.html":
  /*!********************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread-item/feedback-thread-item.component.html ***!
    \********************************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackComponentsFeedbackThreadItemFeedbackThreadItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"mat-toolbar p-4\">\n  <div class=\"flex mat-body\">\n    <div class=\"flex flex-col flex-center\">\n      <ws-widget-user-image [email]=\"threadItem.feedbackBy.email\"></ws-widget-user-image>\n    </div>\n\n    <div class=\"flex-grow ml-1\">\n      <div class=\"w-full sm:flex sm:flex-between\">\n        <h3 class=\"mat-h3 truncate m-0 flex-grow\">{{ threadItem.feedbackBy.name }}</h3>\n        <div class=\"mat-caption hidden sm:block\">\n          {{ threadItem.createdOn | date: 'dd MMM yyyy hh:mm a' }}\n        </div>\n      </div>\n\n      <div class=\"mat-caption sm:hidden\">\n        {{ threadItem.createdOn | date: 'dd MMM yyyy hh:mm a' }}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"pt-4 mat-body\">\n    <div\n      class=\"feedback-text\"\n      [innerHTML]=\"threadItem.feedbackText | pipeSafeSanitizer: 'html'\"\n    ></div>\n  </div>\n</section>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread/feedback-thread.component.html":
  /*!**********************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread/feedback-thread.component.html ***!
    \**********************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackComponentsFeedbackThreadFeedbackThreadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"py-4 h-full container-balanced mx-auto px-4\">\n  <section class=\"w-full md:overflow-y-auto custom-scroll\">\n    <ng-container *ngIf=\"(threadFetchStatus === 'done' || threadFetchStatus === 'none') && feedbackThread\">\n      <section class=\"mb-4\">\n        <ws-app-feedback-thread-header [threadHead]=\"feedbackThread[0]\" [viewedBy]=\"viewedBy\">\n        </ws-app-feedback-thread-header>\n      </section>\n\n      <ul class=\"list-none p-0\">\n        <ng-container *ngFor=\"let threadItem of feedbackThread\">\n          <li>\n            <ws-app-feedback-thread-item [threadItem]=\"threadItem\"></ws-app-feedback-thread-item>\n            <mat-divider></mat-divider>\n          </li>\n        </ng-container>\n      </ul>\n      <div class=\"mat-toolbar p-4 rounded\">\n        <form [formGroup]=\"replyForm\" (ngSubmit)=\"submitReply()\">\n          <div class=\"mat-body\">\n            <mat-form-field class=\"w-full\">\n              <textarea matInput [matTextareaAutosize] [matAutosizeMaxRows]=\"10\" [matAutosizeMinRows]=\"3\"\n                formControlName=\"reply\" placeholder=\"Type your text here\" i18n-placeholder></textarea>\n              <mat-hint i18n>\n                Limit to 2000 characters.\n              </mat-hint>\n              <mat-error i18n>\n                You have exceeded 2000 characters.\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"mt-4 flex justify-end\">\n            <div class=\"mr-2\">\n              <mat-progress-spinner [color]=\"'primary'\" [diameter]=\"40\" [strokeWidth]=\"4\" [mode]=\"'indeterminate'\"\n                *ngIf=\"sendStatus === 'sending'\"></mat-progress-spinner>\n            </div>\n            <button mat-flat-button color=\"primary\" type=\"submit\"\n              [disabled]=\"replyForm.pristine || replyForm.invalid || sendStatus === 'sending'\">\n              <ng-container i18n>Submit</ng-container>\n            </button>\n          </div>\n        </form>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"threadFetchStatus === 'error'\">\n      <section class=\"my-24 flex flex-center\">\n        <h3 class=\"mat-h3\" i18n>\n          There was an error while fetching this feedback thread.\n        </h3>\n      </section>\n    </ng-container>\n  </section>\n</section>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-type/feedback-type.component.html":
  /*!******************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-type/feedback-type.component.html ***!
    \******************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackComponentsFeedbackTypeFeedbackTypeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ng-container [ngSwitch]=\"feedbackType\">\n  <ng-container *ngSwitchCase=\"feedbackTypes.Content\" i18n>Content Feedback</ng-container>\n  <ng-container *ngSwitchCase=\"feedbackTypes.Platform\" i18n>Platform Feedback</ng-container>\n  <ng-container *ngSwitchCase=\"feedbackTypes.ContentRequest\" i18n>Content Request</ng-container>\n  <ng-container *ngSwitchCase=\"feedbackTypes.ServiceRequest\" i18n>Service Request</ng-container>\n  <ng-container *ngSwitchDefault i18n></ng-container>\n</ng-container>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/home/home.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/home/home.component.html ***!
    \************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"py-8 h-full container-balanced mx-auto px-4\">\n  <ng-container *ngIf=\"showTabNavBar()\">\n    <mat-tab-group mat-align-tabs=\"center\" [selectedIndex]=\"currentTabIndex\"\n      (selectedIndexChange)=\"navigateToTab($event)\">\n      <mat-tab label=\"User\" *ngIf=\"showTab(feedbackRoles.User)\" i18n-label></mat-tab>\n      <mat-tab label=\"Author\" *ngIf=\"showTab(feedbackRoles.Author)\" i18n-label></mat-tab>\n      <mat-tab label=\"Platform\" *ngIf=\"showTab(feedbackRoles.Platform)\" i18n-label></mat-tab>\n      <mat-tab label=\"Content Requests\" *ngIf=\"showTab(feedbackRoles.Content)\" i18n-label></mat-tab>\n      <mat-tab label=\"Service Requests\" *ngIf=\"showTab(feedbackRoles.Service)\" i18n-label></mat-tab>\n    </mat-tab-group>\n  </ng-container>\n\n  <router-outlet></router-outlet>\n</section>";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-filter-dialog/feedback-filter-dialog.component.scss":
  /*!**********************************************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-filter-dialog/feedback-filter-dialog.component.scss ***!
    \**********************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackComponentsFeedbackFilterDialogFeedbackFilterDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9mZWVkYmFjay12Mi9yb3V0ZXMvbXktZmVlZGJhY2svY29tcG9uZW50cy9mZWVkYmFjay1maWx0ZXItZGlhbG9nL2ZlZWRiYWNrLWZpbHRlci1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-filter-dialog/feedback-filter-dialog.component.ts":
  /*!********************************************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-filter-dialog/feedback-filter-dialog.component.ts ***!
    \********************************************************************************************************************************************/
  /*! exports provided: FeedbackFilterDialogComponent */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackComponentsFeedbackFilterDialogFeedbackFilterDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FeedbackFilterDialogComponent", function () {
      return FeedbackFilterDialogComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    var FeedbackFilterDialogComponent = /*#__PURE__*/function () {
      function FeedbackFilterDialogComponent(filterDialogData, dialogRef) {
        _classCallCheck(this, FeedbackFilterDialogComponent);
        this.filterDialogData = filterDialogData;
        this.dialogRef = dialogRef;
        this.feedbackTypes = _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackType"];
        this.feedbackRoles = _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"];
        this.contentTypes = _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["NsContent"].EContentTypes;
        var filterObj = this.filterDialogData.filterObj;
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
          feedbackType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.filterDialogData.viewedBy === this.feedbackRoles.User ? filterObj.feedbackType : null),
          contentType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.filterDialogData.viewedBy === this.feedbackRoles.User || this.filterDialogData.viewedBy === this.feedbackRoles.Author ? filterObj.contentType : null),
          showLimited: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](filterObj.showLimited)
        });
        this.typeToRoleMap = new Map([[_ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackType"].Platform, _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].Platform], [_ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackType"].ContentRequest, _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].Content], [_ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackType"].ServiceRequest, _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].Service]]);
      }
      _createClass(FeedbackFilterDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;
          this.feedbackTypeSub = this.filterForm.controls['feedbackType'].valueChanges.subscribe(function (value) {
            if (!value.includes(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackType"].Content)) {
              _this.filterForm.controls['contentType'].patchValue(null);
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.feedbackTypeSub && !this.feedbackTypeSub.closed) {
            this.feedbackTypeSub.unsubscribe();
          }
        }
      }, {
        key: "applyFilters",
        value: function applyFilters() {
          var newFilterObj = {
            showLimited: this.filterForm.value['showLimited']
          };
          var contentTypes = this.filterForm.value['contentType'];
          var feedbackTypes = this.filterForm.value['feedbackType'];
          if (contentTypes && contentTypes.length) {
            newFilterObj.contentType = contentTypes;
          }
          if (feedbackTypes && feedbackTypes.length) {
            newFilterObj.feedbackType = feedbackTypes;
          }
          this.dialogRef.close(newFilterObj);
        }
      }, {
        key: "showContentTypeControl",
        value: function showContentTypeControl() {
          if (!(this.filterDialogData.viewedBy === this.feedbackRoles.User || this.filterDialogData.viewedBy === this.feedbackRoles.Author)) {
            return false;
          }
          if (this.filterDialogData.viewedBy === this.feedbackRoles.Author) {
            return true;
          }
          var value = this.filterForm.controls['feedbackType'].value;
          if (value && value.length && value.includes(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackType"].Content)) {
            return true;
          }
          return false;
        }
      }, {
        key: "showFeedbackTypeFilter",
        value: function showFeedbackTypeFilter(feedbackType) {
          var feedbackRole = this.typeToRoleMap.get(feedbackType);
          if (feedbackRole) {
            var roleDetail = this.filterDialogData.feedbackSummary.roles.find(function (role) {
              return role.role === feedbackRole;
            });
            if (roleDetail && roleDetail.enabled) {
              return true;
            }
          }
          return false;
        }
      }]);
      return FeedbackFilterDialogComponent;
    }();
    FeedbackFilterDialogComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }];
    };
    FeedbackFilterDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-feedback-filter-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./feedback-filter-dialog.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-filter-dialog/feedback-filter-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./feedback-filter-dialog.component.scss */"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-filter-dialog/feedback-filter-dialog.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], FeedbackFilterDialogComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-list/feedback-list.component.scss":
  /*!****************************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-list/feedback-list.component.scss ***!
    \****************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackComponentsFeedbackListFeedbackListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".mat-list-item {\n  line-height: 16px;\n}\n.mat-list-item .mat-list-base {\n  font-size: unset;\n}\nws-widget-user-image {\n  width: 40px;\n  height: 40px;\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9mZWVkYmFjay12Mi9yb3V0ZXMvbXktZmVlZGJhY2svY29tcG9uZW50cy9mZWVkYmFjay1saXN0L2ZlZWRiYWNrLWxpc3QuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvc3R5bGVzL193cy12YXJzLnNjc3MiLCJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9mZWVkYmFjay12Mi9yb3V0ZXMvbXktZmVlZGJhY2svY29tcG9uZW50cy9mZWVkYmFjay1saXN0L2ZlZWRiYWNrLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkNRTztBQ1RUO0FGRUU7RUFDRSxnQkFBQTtBRUFKO0FGSUE7RUFFRSxXQURZO0VBRVosWUFGWTtFQUdaLGVBSFk7QUVDZCIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9mZWVkYmFjay12Mi9yb3V0ZXMvbXktZmVlZGJhY2svY29tcG9uZW50cy9mZWVkYmFjay1saXN0L2ZlZWRiYWNrLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5cbi5tYXQtbGlzdC1pdGVtIHtcbiAgbGluZS1oZWlnaHQ6ICRzaXplLW07XG4gIC5tYXQtbGlzdC1iYXNlIHtcbiAgICBmb250LXNpemU6IHVuc2V0O1xuICB9XG59XG5cbndzLXdpZGdldC11c2VyLWltYWdlIHtcbiAgJHVzZXItc2l6ZTogNDBweDtcbiAgd2lkdGg6ICR1c2VyLXNpemU7XG4gIGhlaWdodDogJHVzZXItc2l6ZTtcbiAgZm9udC1zaXplOiAkdXNlci1zaXplO1xufVxuIiwiJGZvbnQtZmFtaWx5LXNhbnM6ICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsXG4gICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJyxcbiAgJ05vdG8gQ29sb3IgRW1vamknO1xuJGZvbnQtZmFtaWx5LXNlcmlmOiBHZW9yZ2lhLCBDYW1icmlhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuJGZvbnQtZmFtaWx5LW1vbm86IE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuJGZvbnQtZmFtaWx5LW9wZW4tc2FuczogJ09wZW4gU2Fucyc7XG4kZm9udC1mYW1pbHktb3Blbi1wb3BwaW5zOiAnUm9ib3RvJztcblxuXG4kc2l6ZS14czogOHB4O1xuJHNpemUtczogMTJweDtcbiRzaXplLW06IDE2cHg7XG4kc2l6ZS1sOiAyNHB4O1xuJHNpemUteGw6IDMycHg7XG4kc2l6ZS1sZzogMjhweDtcbiRzaXplLXh4bDogNDBweDtcblxuJG1hdC10b29sYmFyLXhzOiA1MnB4O1xuJG1hdC10b29sYmFyLWd0LXhzOiA1NnB4O1xuIiwiLm1hdC1saXN0LWl0ZW0ge1xuICBsaW5lLWhlaWdodDogMTZweDtcbn1cbi5tYXQtbGlzdC1pdGVtIC5tYXQtbGlzdC1iYXNlIHtcbiAgZm9udC1zaXplOiB1bnNldDtcbn1cblxud3Mtd2lkZ2V0LXVzZXItaW1hZ2Uge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDQwcHg7XG59Il19 */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-list/feedback-list.component.ts":
  /*!**************************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-list/feedback-list.component.ts ***!
    \**************************************************************************************************************************/
  /*! exports provided: FeedbackListComponent */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackComponentsFeedbackListFeedbackListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FeedbackListComponent", function () {
      return FeedbackListComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    /* harmony import */
    var _services_my_feedback_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../../services/my-feedback.service */"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/services/my-feedback.service.ts");
    /* harmony import */
    var _feedback_filter_dialog_feedback_filter_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../feedback-filter-dialog/feedback-filter-dialog.component */"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-filter-dialog/feedback-filter-dialog.component.ts");
    var FeedbackListComponent = /*#__PURE__*/function () {
      function FeedbackListComponent(feedbackApi, myFeedbackSvc, dialog, route, router) {
        _classCallCheck(this, FeedbackListComponent);
        this.feedbackApi = feedbackApi;
        this.myFeedbackSvc = myFeedbackSvc;
        this.dialog = dialog;
        this.route = route;
        this.router = router;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          query: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          showLimited: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.unseenCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.feedbackFetchStatus = 'none';
        this.feedbackTypes = _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__["EFeedbackType"];
        this.feedbackRoles = _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__["EFeedbackRole"];
        this.viewedBy = this.route.snapshot.url[0].path;
        this.filterObj = this.myFeedbackSvc.initFilterObj(this.viewedBy);
        this.pageNo = 0;
        this.pageSize = 50;
        this.hasHits = false;
        if (this.route.parent) {
          var feedbackSummaryResolve = this.route.parent.snapshot.data.feedbackSummary;
          if (feedbackSummaryResolve.data) {
            this.feedbackSummary = feedbackSummaryResolve.data;
          }
        }
      }
      _createClass(FeedbackListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;
          this.fetchFeedbacks();
          this.unseenCtrlSub = this.unseenCtrl.valueChanges.subscribe(function (value) {
            _this2.filterObj.showLimited = value;
            _this2.fetchFeedbacks();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.unseenCtrlSub && !this.unseenCtrlSub.closed) {
            this.unseenCtrlSub.unsubscribe();
          }
        }
      }, {
        key: "onFeedbackItemClick",
        value: function onFeedbackItemClick(feedback) {
          this.router.navigate(["../".concat(this.viewedBy, "/").concat(feedback.rootFeedbackId)], {
            relativeTo: this.route,
            queryParams: {
              feedbackType: feedback.feedbackType
            }
          });
        }
      }, {
        key: "fetchFeedbacks",
        value: function fetchFeedbacks() {
          var _this3 = this;
          var query = this.myFeedbackSvc.getSearchObj(this.filterObj, this.viewedBy, this.pageNo, this.pageSize, this.searchForm.value.query);
          this.feedbackFetchStatus = 'fetching';
          this.feedbackApi.searchFeedback(query).subscribe(function (result) {
            _this3.feedbackData = result;
            _this3.feedbackFetchStatus = 'done';
            if (_this3.feedbackData && _this3.feedbackData.hits) {
              _this3.hasHits = true;
            }
          }, function () {
            _this3.feedbackFetchStatus = 'error';
          });
        }
      }, {
        key: "openFilterDialog",
        value: function openFilterDialog() {
          var _this4 = this;
          this.dialog.open(_feedback_filter_dialog_feedback_filter_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FeedbackFilterDialogComponent"], {
            data: {
              filterObj: this.filterObj,
              viewedBy: this.viewedBy,
              feedbackSummary: this.feedbackSummary
            },
            width: '320px'
          }).afterClosed().subscribe(function (filterObj) {
            if (filterObj) {
              _this4.filterObj = filterObj;
              _this4.fetchFeedbacks();
            }
          }, rxjs__WEBPACK_IMPORTED_MODULE_5__["noop"]);
        }
      }]);
      return FeedbackListComponent;
    }();
    FeedbackListComponent.ctorParameters = function () {
      return [{
        type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__["FeedbackService"]
      }, {
        type: _services_my_feedback_service__WEBPACK_IMPORTED_MODULE_7__["MyFeedbackService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };
    FeedbackListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-feedback-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./feedback-list.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-list/feedback-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./feedback-list.component.scss */"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-list/feedback-list.component.scss"))["default"]]
    })], FeedbackListComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread-header/feedback-thread-header.component.scss":
  /*!**********************************************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread-header/feedback-thread-header.component.scss ***!
    \**********************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackComponentsFeedbackThreadHeaderFeedbackThreadHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "h2.content-name,\nh3.thread-head-name {\n  margin: 0;\n}\n\nws-widget-user-image {\n  width: 40px;\n  height: 40px;\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9mZWVkYmFjay12Mi9yb3V0ZXMvbXktZmVlZGJhY2svY29tcG9uZW50cy9mZWVkYmFjay10aHJlYWQtaGVhZGVyL2ZlZWRiYWNrLXRocmVhZC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9mZWVkYmFjay12Mi9yb3V0ZXMvbXktZmVlZGJhY2svY29tcG9uZW50cy9mZWVkYmFjay10aHJlYWQtaGVhZGVyL2ZlZWRiYWNrLXRocmVhZC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsU0FBQTtBQ0NGOztBREVBO0VBRUUsV0FEWTtFQUVaLFlBRlk7RUFHWixlQUhZO0FDR2QiLCJmaWxlIjoicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvZmVlZGJhY2stdjIvcm91dGVzL215LWZlZWRiYWNrL2NvbXBvbmVudHMvZmVlZGJhY2stdGhyZWFkLWhlYWRlci9mZWVkYmFjay10aHJlYWQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIuY29udGVudC1uYW1lLFxuaDMudGhyZWFkLWhlYWQtbmFtZSB7XG4gIG1hcmdpbjogMDtcbn1cblxud3Mtd2lkZ2V0LXVzZXItaW1hZ2Uge1xuICAkdXNlci1zaXplOiA0MHB4O1xuICB3aWR0aDogJHVzZXItc2l6ZTtcbiAgaGVpZ2h0OiAkdXNlci1zaXplO1xuICBmb250LXNpemU6ICR1c2VyLXNpemU7XG59XG4iLCJoMi5jb250ZW50LW5hbWUsXG5oMy50aHJlYWQtaGVhZC1uYW1lIHtcbiAgbWFyZ2luOiAwO1xufVxuXG53cy13aWRnZXQtdXNlci1pbWFnZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn0iXX0= */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread-header/feedback-thread-header.component.ts":
  /*!********************************************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread-header/feedback-thread-header.component.ts ***!
    \********************************************************************************************************************************************/
  /*! exports provided: FeedbackThreadHeaderComponent */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackComponentsFeedbackThreadHeaderFeedbackThreadHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FeedbackThreadHeaderComponent", function () {
      return FeedbackThreadHeaderComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    /* harmony import */
    var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ws-widget/utils */"./library/ws-widget/utils/src/public-api.ts");
    var FeedbackThreadHeaderComponent = /*#__PURE__*/function () {
      function FeedbackThreadHeaderComponent(feedbackApi, route, configSvc) {
        _classCallCheck(this, FeedbackThreadHeaderComponent);
        this.feedbackApi = feedbackApi;
        this.route = route;
        this.configSvc = configSvc;
        var userProfile = this.configSvc.userProfile;
        if (userProfile) {
          this.userId = userProfile.userId;
        }
        this.feedbackTypes = _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["EFeedbackType"];
        this.feedbackRoles = _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["EFeedbackRole"];
        this.contentTypes = _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["NsContent"].EContentTypes;
        var feedbackConfigResolve = this.route.snapshot.data['feedbackConfig'];
        if (feedbackConfigResolve && feedbackConfigResolve.data) {
          this.feedbackConfig = feedbackConfigResolve.data;
        }
      }
      _createClass(FeedbackThreadHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.feedbackCategory = this.threadHead.feedbackCategory;
        }
      }, {
        key: "updateCategory",
        value: function updateCategory(category) {
          var _this5 = this;
          this.feedbackApi.updateFeedbackStatus(this.threadHead.rootFeedbackId, category).subscribe(function (threadItem) {
            _this5.feedbackCategory = threadItem.feedbackCategory;
          }, rxjs__WEBPACK_IMPORTED_MODULE_3__["noop"]);
        }
      }]);
      return FeedbackThreadHeaderComponent;
    }();
    FeedbackThreadHeaderComponent.ctorParameters = function () {
      return [{
        type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["FeedbackService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_5__["ConfigurationsService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FeedbackThreadHeaderComponent.prototype, "threadHead", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FeedbackThreadHeaderComponent.prototype, "viewedBy", void 0);
    FeedbackThreadHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-feedback-thread-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./feedback-thread-header.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread-header/feedback-thread-header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./feedback-thread-header.component.scss */"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread-header/feedback-thread-header.component.scss"))["default"]]
    })], FeedbackThreadHeaderComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread-item/feedback-thread-item.component.scss":
  /*!******************************************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread-item/feedback-thread-item.component.scss ***!
    \******************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackComponentsFeedbackThreadItemFeedbackThreadItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "ws-widget-user-image {\n  width: 40px;\n  height: 40px;\n  font-size: 40px;\n}\n\n.feedback-text {\n  max-width: 100%;\n  overflow-wrap: break-word;\n  white-space: pre-line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9mZWVkYmFjay12Mi9yb3V0ZXMvbXktZmVlZGJhY2svY29tcG9uZW50cy9mZWVkYmFjay10aHJlYWQtaXRlbS9mZWVkYmFjay10aHJlYWQtaXRlbS5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2ZlZWRiYWNrLXYyL3JvdXRlcy9teS1mZWVkYmFjay9jb21wb25lbnRzL2ZlZWRiYWNrLXRocmVhZC1pdGVtL2ZlZWRiYWNrLXRocmVhZC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUUsV0FEWTtFQUVaLFlBRlk7RUFHWixlQUhZO0FDQ2Q7O0FES0E7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0ZGIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2ZlZWRiYWNrLXYyL3JvdXRlcy9teS1mZWVkYmFjay9jb21wb25lbnRzL2ZlZWRiYWNrLXRocmVhZC1pdGVtL2ZlZWRiYWNrLXRocmVhZC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuXG53cy13aWRnZXQtdXNlci1pbWFnZSB7XG4gICR1c2VyLXNpemU6IDQwcHg7XG4gIHdpZHRoOiAkdXNlci1zaXplO1xuICBoZWlnaHQ6ICR1c2VyLXNpemU7XG4gIGZvbnQtc2l6ZTogJHVzZXItc2l6ZTtcbn1cblxuLmZlZWRiYWNrLXRleHQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn1cbiIsIndzLXdpZGdldC11c2VyLWltYWdlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4uZmVlZGJhY2stdGV4dCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xufSJdfQ== */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread-item/feedback-thread-item.component.ts":
  /*!****************************************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread-item/feedback-thread-item.component.ts ***!
    \****************************************************************************************************************************************/
  /*! exports provided: FeedbackThreadItemComponent */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackComponentsFeedbackThreadItemFeedbackThreadItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FeedbackThreadItemComponent", function () {
      return FeedbackThreadItemComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var FeedbackThreadItemComponent = /*#__PURE__*/function () {
      function FeedbackThreadItemComponent() {
        _classCallCheck(this, FeedbackThreadItemComponent);
        this.truncatedText = '';
      }
      _createClass(FeedbackThreadItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return FeedbackThreadItemComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FeedbackThreadItemComponent.prototype, "threadItem", void 0);
    FeedbackThreadItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-feedback-thread-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./feedback-thread-item.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread-item/feedback-thread-item.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./feedback-thread-item.component.scss */"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread-item/feedback-thread-item.component.scss"))["default"]]
    })], FeedbackThreadItemComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread/feedback-thread.component.scss":
  /*!********************************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread/feedback-thread.component.scss ***!
    \********************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackComponentsFeedbackThreadFeedbackThreadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".container-balanced {\n  max-width: 1160px;\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLWNvbW1vbi5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvZmVlZGJhY2stdjIvcm91dGVzL215LWZlZWRiYWNrL2NvbXBvbmVudHMvZmVlZGJhY2stdGhyZWFkL2ZlZWRiYWNrLXRocmVhZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNFLGlCQUFBO0VBRUEsNEJBQUE7RUFDQSw2QkFBQTtBQ1RGIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2ZlZWRiYWNrLXYyL3JvdXRlcy9teS1mZWVkYmFjay9jb21wb25lbnRzL2ZlZWRiYWNrLXRocmVhZC9mZWVkYmFjay10aHJlYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5AaW1wb3J0ICdzdHlsZXMvX3dzLW1peGlucy5zY3NzJztcblxuJWJhY2tncm91bmQtaW1hZ2UtY2VudGVyIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4lcGFnZS1jZW50ZXIge1xuICBtYXgtd2lkdGg6IDExNjBweDtcbiAgLy84MDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbiVoZWlnaHQtbWF0LXRvb2xiYXItc2libGluZyB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gI3skbWF0LXRvb2xiYXIteHN9KTtcblxuICAvLyBwYWRkaW5nOiAkc2l6ZS1tO1xuICBAaW5jbHVkZSBicmVha3BvaW50LWd0LXhzIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JG1hdC10b29sYmFyLWd0LXhzfSk7XG4gIH1cbn1cbiIsIi5jb250YWluZXItYmFsYW5jZWQge1xuICBtYXgtd2lkdGg6IDExNjBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59Il19 */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread/feedback-thread.component.ts":
  /*!******************************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread/feedback-thread.component.ts ***!
    \******************************************************************************************************************************/
  /*! exports provided: FeedbackThreadComponent */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackComponentsFeedbackThreadFeedbackThreadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FeedbackThreadComponent", function () {
      return FeedbackThreadComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    /* harmony import */
    var _services_my_feedback_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../../services/my-feedback.service */"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/services/my-feedback.service.ts");
    var FeedbackThreadComponent = /*#__PURE__*/function () {
      function FeedbackThreadComponent(route, feedbackApi, myFeedbackSvc, snackbar) {
        _classCallCheck(this, FeedbackThreadComponent);
        this.route = route;
        this.feedbackApi = feedbackApi;
        this.myFeedbackSvc = myFeedbackSvc;
        this.snackbar = snackbar;
        this.threadFetchStatus = 'none';
        this.sendStatus = 'none';
        this.viewedBy = this.route.snapshot.url[0].path;
        this.replyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          reply: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2000)])
        });
      }
      _createClass(FeedbackThreadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var routeParam = this.route.snapshot.paramMap.get('feedbackId');
          if (routeParam) {
            this.feedbackId = routeParam;
          }
          this.fetchThread();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!changes.feedbackId.isFirstChange() && changes.feedbackId.currentValue !== changes.feedbackId.previousValue) {
            this.fetchThread();
          }
        }
      }, {
        key: "fetchThread",
        value: function fetchThread() {
          var _this6 = this;
          this.threadFetchStatus = 'fetching';
          this.feedbackApi.getFeedbackThread(this.feedbackId).subscribe(function (thread) {
            _this6.feedbackThread = thread;
            _this6.threadFetchStatus = 'done';
            var threadHead = _this6.feedbackThread[0];
            _this6.feedbackReply = {
              rootFeedbackId: threadHead.rootFeedbackId,
              type: threadHead.feedbackType,
              text: '',
              role: _this6.viewedBy
            };
            if (threadHead.feedbackType === _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__["EFeedbackType"].Content) {
              _this6.feedbackReply.contentId = threadHead.contentId;
            }
            if (_this6.viewedBy === _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__["EFeedbackRole"].User && threadHead.replied && !threadHead.seenReply) {
              _this6.updateThread();
            }
          }, function () {
            _this6.threadFetchStatus = 'error';
          });
        }
      }, {
        key: "updateThread",
        value: function updateThread(category) {
          this.feedbackApi.updateFeedbackStatus(this.feedbackId, category).subscribe(rxjs__WEBPACK_IMPORTED_MODULE_5__["noop"], rxjs__WEBPACK_IMPORTED_MODULE_5__["noop"]);
        }
      }, {
        key: "submitReply",
        value: function submitReply() {
          var _this7 = this;
          if (this.replyForm.invalid) {
            return;
          }
          this.feedbackReply.text = this.replyForm.value['reply'];
          this.sendStatus = 'sending';
          this.myFeedbackSvc.submitReply(this.feedbackReply).subscribe(function (reply) {
            _this7.sendStatus = 'done';
            _this7.replyForm.patchValue({
              reply: null
            });
            _this7.feedbackThread.push(reply.response);
            var threadHead = _this7.feedbackThread[0];
            _this7.feedbackReply = {
              rootFeedbackId: threadHead.rootFeedbackId,
              type: threadHead.feedbackType,
              text: '',
              role: _this7.viewedBy
            };
          }, function () {
            _this7.sendStatus = 'error';
            _this7.snackbar.openFromComponent(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__["FeedbackSnackbarComponent"], {
              data: {
                action: 'feedback_reply_submit',
                code: 'failure'
              }
            });
          });
        }
      }]);
      return FeedbackThreadComponent;
    }();
    FeedbackThreadComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__["FeedbackService"]
      }, {
        type: _services_my_feedback_service__WEBPACK_IMPORTED_MODULE_7__["MyFeedbackService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FeedbackThreadComponent.prototype, "feedbackId", void 0);
    FeedbackThreadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-feedback-thread',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./feedback-thread.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread/feedback-thread.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./feedback-thread.component.scss */"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread/feedback-thread.component.scss"))["default"]]
    })], FeedbackThreadComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-type/feedback-type.component.scss":
  /*!****************************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-type/feedback-type.component.scss ***!
    \****************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackComponentsFeedbackTypeFeedbackTypeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9mZWVkYmFjay12Mi9yb3V0ZXMvbXktZmVlZGJhY2svY29tcG9uZW50cy9mZWVkYmFjay10eXBlL2ZlZWRiYWNrLXR5cGUuY29tcG9uZW50LnNjc3MifQ== */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-type/feedback-type.component.ts":
  /*!**************************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-type/feedback-type.component.ts ***!
    \**************************************************************************************************************************/
  /*! exports provided: FeedbackTypeComponent */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackComponentsFeedbackTypeFeedbackTypeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FeedbackTypeComponent", function () {
      return FeedbackTypeComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    var FeedbackTypeComponent = /*#__PURE__*/function () {
      function FeedbackTypeComponent() {
        _classCallCheck(this, FeedbackTypeComponent);
        this.feedbackTypes = _ws_widget_collection__WEBPACK_IMPORTED_MODULE_2__["EFeedbackType"];
      }
      _createClass(FeedbackTypeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return FeedbackTypeComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FeedbackTypeComponent.prototype, "feedbackType", void 0);
    FeedbackTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-feedback-type',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./feedback-type.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-type/feedback-type.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./feedback-type.component.scss */"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-type/feedback-type.component.scss"))["default"]]
    })], FeedbackTypeComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/home/home.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/home/home.component.scss ***!
    \**********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackComponentsHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".container-balanced {\n  max-width: 1160px;\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLWNvbW1vbi5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvZmVlZGJhY2stdjIvcm91dGVzL215LWZlZWRiYWNrL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0UsaUJBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0FDVEYiLCJmaWxlIjoicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvZmVlZGJhY2stdjIvcm91dGVzL215LWZlZWRiYWNrL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuQGltcG9ydCAnc3R5bGVzL193cy1taXhpbnMuc2Nzcyc7XG5cbiViYWNrZ3JvdW5kLWltYWdlLWNlbnRlciB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuJXBhZ2UtY2VudGVyIHtcbiAgbWF4LXdpZHRoOiAxMTYwcHg7XG4gIC8vODAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4laGVpZ2h0LW1hdC10b29sYmFyLXNpYmxpbmcge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JG1hdC10b29sYmFyLXhzfSk7XG5cbiAgLy8gcGFkZGluZzogJHNpemUtbTtcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC1ndC14cyB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRtYXQtdG9vbGJhci1ndC14c30pO1xuICB9XG59XG4iLCIuY29udGFpbmVyLWJhbGFuY2VkIHtcbiAgbWF4LXdpZHRoOiAxMTYwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xufSJdfQ== */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/home/home.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/home/home.component.ts ***!
    \********************************************************************************************************/
  /*! exports provided: HomeComponent */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
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
        _classCallCheck(this, HomeComponent);
        this.route = route;
        this.router = router;
        this.subscriptionSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.tabs = [];
        this.feedbackRoles = _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"];
        this.rolesSet = new Set();
        this.initTabs();
      }
      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;
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
            return _this8.route.children[0].url;
          })).subscribe(function (url) {
            try {
              var tabName = url[0].path;
              _this8.currentTabIndex = _this8.tabs.indexOf(tabName);
            } catch (e) {
              _this8.currentTabIndex = 0;
            }
          }, function () {
            _this8.currentTabIndex = 0;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptionSubject$.next();
          this.subscriptionSubject$.complete();
        }
      }, {
        key: "showTabNavBar",
        value: function showTabNavBar() {
          if (this.rolesSet.size === 1) {
            return false;
          }
          return true;
        }
      }, {
        key: "showTab",
        value: function showTab(tabKey) {
          if (this.rolesSet.has(tabKey)) {
            return true;
          }
          return false;
        }
      }, {
        key: "navigateToTab",
        value: function navigateToTab(tabIndex) {
          this.currentTabIndex = tabIndex;
          this.router.navigate(["".concat(this.tabs[tabIndex] || this.tabs[0])], {
            relativeTo: this.route
          });
        }
      }, {
        key: "onClickFeedbackItem",
        value: function onClickFeedbackItem(feedbackId) {
          this.router.navigate(["./".concat(feedbackId)], {
            relativeTo: this.route
          });
        }
      }, {
        key: "initTabs",
        value: function initTabs() {
          var _this9 = this;
          var allTabs = [_ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].User, _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].Author, _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].Platform, _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].Content, _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].Service];
          var feedbackSummaryResolve = this.route.snapshot.data.feedbackSummary;
          if (feedbackSummaryResolve && feedbackSummaryResolve.data) {
            var roles = feedbackSummaryResolve.data.roles;
            roles.forEach(function (feedbackRole) {
              if (feedbackRole.enabled && feedbackRole.hasAccess) {
                _this9.rolesSet.add(feedbackRole.role);
              }
            });
            allTabs.forEach(function (tab) {
              if (_this9.showTab(tab)) {
                _this9.tabs.push(tab);
              }
            });
          }
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
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./home.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./home.component.scss */"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/home/home.component.scss"))["default"]]
    })], HomeComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/my-feedback-routing.module.ts":
  /*!****************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/my-feedback-routing.module.ts ***!
    \****************************************************************************************************/
  /*! exports provided: MyFeedbackRoutingModule */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackMyFeedbackRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MyFeedbackRoutingModule", function () {
      return MyFeedbackRoutingModule;
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
    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./components/home/home.component */"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/home/home.component.ts");
    /* harmony import */
    var _components_feedback_thread_feedback_thread_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./components/feedback-thread/feedback-thread.component */"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread/feedback-thread.component.ts");
    /* harmony import */
    var _components_feedback_list_feedback_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./components/feedback-list/feedback-list.component */"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-list/feedback-list.component.ts");
    /* harmony import */
    var _resolvers_feedback_summary_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../../resolvers/feedback-summary.resolver */"./project/ws/app/src/lib/routes/feedback-v2/resolvers/feedback-summary.resolver.ts");
    /* harmony import */
    var _resolvers_feedback_config_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../../resolvers/feedback-config.resolver */"./project/ws/app/src/lib/routes/feedback-v2/resolvers/feedback-config.resolver.ts");
    var routes = [{
      path: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].User,
      component: _components_feedback_list_feedback_list_component__WEBPACK_IMPORTED_MODULE_6__["FeedbackListComponent"]
    }, {
      path: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].Author,
      component: _components_feedback_list_feedback_list_component__WEBPACK_IMPORTED_MODULE_6__["FeedbackListComponent"]
    }, {
      path: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].Platform,
      component: _components_feedback_list_feedback_list_component__WEBPACK_IMPORTED_MODULE_6__["FeedbackListComponent"]
    }, {
      path: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].Content,
      component: _components_feedback_list_feedback_list_component__WEBPACK_IMPORTED_MODULE_6__["FeedbackListComponent"]
    }, {
      path: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].Service,
      component: _components_feedback_list_feedback_list_component__WEBPACK_IMPORTED_MODULE_6__["FeedbackListComponent"]
    }, {
      path: '',
      redirectTo: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].User
    }];
    var MyFeedbackRoutingModule = /*#__PURE__*/_createClass(function MyFeedbackRoutingModule() {
      _classCallCheck(this, MyFeedbackRoutingModule);
    });
    MyFeedbackRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        children: routes,
        resolve: {
          feedbackSummary: _resolvers_feedback_summary_resolver__WEBPACK_IMPORTED_MODULE_7__["FeedbackSummaryResolver"]
        }
      }, {
        path: "".concat(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].User, "/:feedbackId"),
        component: _components_feedback_thread_feedback_thread_component__WEBPACK_IMPORTED_MODULE_5__["FeedbackThreadComponent"],
        resolve: {
          feedbackConfig: _resolvers_feedback_config_resolver__WEBPACK_IMPORTED_MODULE_8__["FeedbackConfigResolver"]
        }
      }, {
        path: "".concat(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].Author, "/:feedbackId"),
        component: _components_feedback_thread_feedback_thread_component__WEBPACK_IMPORTED_MODULE_5__["FeedbackThreadComponent"],
        resolve: {
          feedbackConfig: _resolvers_feedback_config_resolver__WEBPACK_IMPORTED_MODULE_8__["FeedbackConfigResolver"]
        }
      }, {
        path: "".concat(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].Platform, "/:feedbackId"),
        component: _components_feedback_thread_feedback_thread_component__WEBPACK_IMPORTED_MODULE_5__["FeedbackThreadComponent"],
        resolve: {
          feedbackConfig: _resolvers_feedback_config_resolver__WEBPACK_IMPORTED_MODULE_8__["FeedbackConfigResolver"]
        }
      }, {
        path: "".concat(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].Content, "/:feedbackId"),
        component: _components_feedback_thread_feedback_thread_component__WEBPACK_IMPORTED_MODULE_5__["FeedbackThreadComponent"],
        resolve: {
          feedbackConfig: _resolvers_feedback_config_resolver__WEBPACK_IMPORTED_MODULE_8__["FeedbackConfigResolver"]
        }
      }, {
        path: "".concat(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["EFeedbackRole"].Service, "/:feedbackId"),
        component: _components_feedback_thread_feedback_thread_component__WEBPACK_IMPORTED_MODULE_5__["FeedbackThreadComponent"],
        resolve: {
          feedbackConfig: _resolvers_feedback_config_resolver__WEBPACK_IMPORTED_MODULE_8__["FeedbackConfigResolver"]
        }
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyFeedbackRoutingModule);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/my-feedback.module.ts":
  /*!********************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/my-feedback.module.ts ***!
    \********************************************************************************************/
  /*! exports provided: MyFeedbackModule */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackMyFeedbackModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MyFeedbackModule", function () {
      return MyFeedbackModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/cdk/layout */"./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @ws-widget/utils */"./library/ws-widget/utils/src/public-api.ts");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    /* harmony import */
    var _my_feedback_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./my-feedback-routing.module */"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/my-feedback-routing.module.ts");
    /* harmony import */
    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./components/home/home.component */"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/home/home.component.ts");
    /* harmony import */
    var _components_feedback_list_feedback_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./components/feedback-list/feedback-list.component */"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-list/feedback-list.component.ts");
    /* harmony import */
    var _components_feedback_thread_feedback_thread_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./components/feedback-thread/feedback-thread.component */"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread/feedback-thread.component.ts");
    /* harmony import */
    var _components_feedback_thread_item_feedback_thread_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./components/feedback-thread-item/feedback-thread-item.component */"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread-item/feedback-thread-item.component.ts");
    /* harmony import */
    var _services_my_feedback_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./services/my-feedback.service */"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/services/my-feedback.service.ts");
    /* harmony import */
    var _components_feedback_filter_dialog_feedback_filter_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./components/feedback-filter-dialog/feedback-filter-dialog.component */"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-filter-dialog/feedback-filter-dialog.component.ts");
    /* harmony import */
    var _components_feedback_type_feedback_type_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ./components/feedback-type/feedback-type.component */"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-type/feedback-type.component.ts");
    /* harmony import */
    var _components_feedback_thread_header_feedback_thread_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ./components/feedback-thread-header/feedback-thread-header.component */"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/components/feedback-thread-header/feedback-thread-header.component.ts");
    /* harmony import */
    var _resolvers_feedback_summary_resolver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! ../../resolvers/feedback-summary.resolver */"./project/ws/app/src/lib/routes/feedback-v2/resolvers/feedback-summary.resolver.ts");
    /* harmony import */
    var _resolvers_feedback_config_resolver__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ../../resolvers/feedback-config.resolver */"./project/ws/app/src/lib/routes/feedback-v2/resolvers/feedback-config.resolver.ts");
    var MyFeedbackModule = /*#__PURE__*/_createClass(function MyFeedbackModule() {
      _classCallCheck(this, MyFeedbackModule);
    });
    MyFeedbackModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _components_feedback_list_feedback_list_component__WEBPACK_IMPORTED_MODULE_10__["FeedbackListComponent"], _components_feedback_thread_feedback_thread_component__WEBPACK_IMPORTED_MODULE_11__["FeedbackThreadComponent"], _components_feedback_thread_item_feedback_thread_item_component__WEBPACK_IMPORTED_MODULE_12__["FeedbackThreadItemComponent"], _components_feedback_filter_dialog_feedback_filter_dialog_component__WEBPACK_IMPORTED_MODULE_14__["FeedbackFilterDialogComponent"], _components_feedback_type_feedback_type_component__WEBPACK_IMPORTED_MODULE_15__["FeedbackTypeComponent"], _components_feedback_thread_header_feedback_thread_header_component__WEBPACK_IMPORTED_MODULE_16__["FeedbackThreadHeaderComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _ws_widget_utils__WEBPACK_IMPORTED_MODULE_6__["PipeSafeSanitizerModule"], _ws_widget_collection__WEBPACK_IMPORTED_MODULE_7__["UserImageModule"], _ws_widget_collection__WEBPACK_IMPORTED_MODULE_7__["DisplayContentTypeModule"], _ws_widget_collection__WEBPACK_IMPORTED_MODULE_7__["BtnContentFeedbackV2Module"], _my_feedback_routing_module__WEBPACK_IMPORTED_MODULE_8__["MyFeedbackRoutingModule"]],
      providers: [_services_my_feedback_service__WEBPACK_IMPORTED_MODULE_13__["MyFeedbackService"], _resolvers_feedback_summary_resolver__WEBPACK_IMPORTED_MODULE_17__["FeedbackSummaryResolver"], _resolvers_feedback_config_resolver__WEBPACK_IMPORTED_MODULE_18__["FeedbackConfigResolver"]],
      entryComponents: [_components_feedback_filter_dialog_feedback_filter_dialog_component__WEBPACK_IMPORTED_MODULE_14__["FeedbackFilterDialogComponent"]]
    })], MyFeedbackModule);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/services/my-feedback.service.ts":
  /*!******************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/feedback-v2/routes/my-feedback/services/my-feedback.service.ts ***!
    \******************************************************************************************************/
  /*! exports provided: MyFeedbackService */
  /***/
  function projectWsAppSrcLibRoutesFeedbackV2RoutesMyFeedbackServicesMyFeedbackServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MyFeedbackService", function () {
      return MyFeedbackService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    var MyFeedbackService = /*#__PURE__*/function () {
      function MyFeedbackService(feedbackApi) {
        _classCallCheck(this, MyFeedbackService);
        this.feedbackApi = feedbackApi;
      }
      _createClass(MyFeedbackService, [{
        key: "initFilterObj",
        value: function initFilterObj(viewedBy) {
          switch (viewedBy) {
            case _ws_widget_collection__WEBPACK_IMPORTED_MODULE_2__["EFeedbackRole"].User:
              return {
                showLimited: false
              };
            case _ws_widget_collection__WEBPACK_IMPORTED_MODULE_2__["EFeedbackRole"].Author:
              return {
                showLimited: false,
                feedbackType: [_ws_widget_collection__WEBPACK_IMPORTED_MODULE_2__["EFeedbackType"].Content]
              };
            case _ws_widget_collection__WEBPACK_IMPORTED_MODULE_2__["EFeedbackRole"].Platform:
              return {
                showLimited: false,
                feedbackType: [_ws_widget_collection__WEBPACK_IMPORTED_MODULE_2__["EFeedbackType"].Platform]
              };
            case _ws_widget_collection__WEBPACK_IMPORTED_MODULE_2__["EFeedbackRole"].Content:
              return {
                showLimited: false,
                feedbackType: [_ws_widget_collection__WEBPACK_IMPORTED_MODULE_2__["EFeedbackType"].ContentRequest]
              };
            case _ws_widget_collection__WEBPACK_IMPORTED_MODULE_2__["EFeedbackRole"].Service:
              return {
                showLimited: false,
                feedbackType: [_ws_widget_collection__WEBPACK_IMPORTED_MODULE_2__["EFeedbackType"].ServiceRequest]
              };
            default:
              return {
                showLimited: false
              };
          }
        }
      }, {
        key: "getSearchObj",
        value: function getSearchObj(filterObj, viewedBy, pageNo, pageSize, query) {
          var searchObj = {
            viewedBy: viewedBy,
            query: query || '',
            filters: {},
            all: !filterObj.showLimited,
            from: pageNo,
            size: pageSize
          };
          if (filterObj.contentType && filterObj.contentType.length) {
            searchObj.filters['contentType'] = filterObj.contentType;
          }
          if (filterObj.feedbackType && filterObj.feedbackType.length) {
            searchObj.filters['feedbackType'] = filterObj.feedbackType;
          }
          return searchObj;
        }
      }, {
        key: "submitReply",
        value: function submitReply(feedbackReply) {
          try {
            var submission$;
            switch (feedbackReply.type) {
              case _ws_widget_collection__WEBPACK_IMPORTED_MODULE_2__["EFeedbackType"].Content:
                submission$ = this.feedbackApi.submitContentFeedback(feedbackReply);
                break;
              case _ws_widget_collection__WEBPACK_IMPORTED_MODULE_2__["EFeedbackType"].Platform:
                submission$ = this.feedbackApi.submitPlatformFeedback(feedbackReply);
                break;
              case _ws_widget_collection__WEBPACK_IMPORTED_MODULE_2__["EFeedbackType"].ContentRequest:
                submission$ = this.feedbackApi.submitContentRequest(feedbackReply);
                break;
              case _ws_widget_collection__WEBPACK_IMPORTED_MODULE_2__["EFeedbackType"].ServiceRequest:
                submission$ = this.feedbackApi.submitServiceRequest(feedbackReply);
                break;
              default:
                submission$ = this.feedbackApi.submitPlatformFeedback(feedbackReply);
            }
            return submission$;
          } catch (e) {
            return this.feedbackApi.submitPlatformFeedback(feedbackReply);
          }
        }
      }]);
      return MyFeedbackService;
    }();
    MyFeedbackService.ctorParameters = function () {
      return [{
        type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"]
      }];
    };
    MyFeedbackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], MyFeedbackService);

    /***/
  }
}]);
//# sourceMappingURL=routes-my-feedback-my-feedback-module-es5.js.map