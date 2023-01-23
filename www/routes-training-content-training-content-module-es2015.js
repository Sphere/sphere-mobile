(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-training-content-training-content-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/home/home.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/home/home.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"content\">\n  <section class=\"py-8 h-full container-balanced mx-auto px-4\">\n    <ws-app-training-header\n      [content]=\"content\"\n      [trainingCount]=\"trainingCount\"\n      [trainingPrivileges]=\"trainingPrivileges\"\n    ></ws-app-training-header>\n    <mat-divider></mat-divider>\n\n    <section class=\"padding-top-m\">\n      <router-outlet></router-outlet>\n    </section>\n  </section>\n</ng-container>\n\n<ng-container *ngIf=\"!content\">\n  <section class=\"padding-xl\">\n    <h2 class=\"mat-title text-center\" i18n>\n      Sorry, there was an error while fetching the content.\n    </h2>\n  </section>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-card/training-card.component.html":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-card/training-card.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"training-card flex flex-column flex-between h-full\">\n  <section class=\"training-details\">\n    <div class=\"flex flex-between\">\n      <div class=\"mat-body-2 text-uppercase text-truncate flex-grow-1 padding-right-m\">\n        <ws-app-training-type [trainingType]=\"training.deliveryType\"></ws-app-training-type>\n      </div>\n\n      <div class=\"width-3-10\">\n        <div class=\"relative\">\n          <div class=\"absolute training-options-container flex\">\n            <button mat-icon-button (click)=\"onClickBtnShare()\" matTooltip=\"Share\" i18n-matTooltip>\n              <mat-icon>share</mat-icon>\n            </button>\n            <button mat-icon-button class=\"btn-training-menu absolute\" [matMenuTriggerFor]=\"trainingOptionsMenu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n          </div>\n        </div>\n      </div>\n      <mat-menu #trainingOptionsMenu>\n        <button mat-menu-item [matMenuTriggerFor]=\"educatorsMenu\" *ngIf=\"training.sessions && training.sessions.length\">\n          <mat-icon>school</mat-icon>\n          <span i18n>Educators</span>\n        </button>\n      </mat-menu>\n      <mat-menu #educatorsMenu>\n        <ng-template matMenuContent>\n          <a mat-menu-item *ngFor=\"let educator of training.sessions[0].educator\" href=\"mailto:{{ educator.email }}\">\n            <mat-icon>email</mat-icon>\n            {{ educator.name }}\n          </a>\n        </ng-template>\n      </mat-menu>\n    </div>\n\n    <section class=\"my-4\">\n      <div class=\"margin-bottom-xs margin-top-xs flex\">\n        <div>\n          <mat-icon>calendar_today</mat-icon>\n        </div>\n        <div class=\"margin-left-xs width-9-10 flex\">\n          <div class=\"mat-body-2 text-truncate\">\n            {{\n              {\n                fromDate: training.start_dt,\n                toDate: training.end_dt\n              } | pipeConciseDateRange\n            }}\n          </div>\n          <div class=\"margin-left-xs mat-body-2 text-truncate\">\n            {{training.sessions[0].start_time}}-{{training.sessions[0].end_time}}\n\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"margin-bottom-xs margin-top-xs flex\">\n        <div>\n          <mat-icon>access_time</mat-icon>\n        </div>\n        <div class=\"margin-left-xs\">\n          <span class=\"mat-body-2\" i18n=\"time zone\">Time Zone: </span>\n          <span class=\"mat-body\"> {{ training.time_zone }}</span>\n        </div>\n      </div>\n\n      <div class=\"margin-bottom-xs margin-top-xs flex\" *ngIf=\"training.deliveryType === 'Classroom'\">\n        <div>\n          <mat-icon>location_on</mat-icon>\n        </div>\n        <div class=\"margin-left-xs\">\n\n          <span class=\"mat-body-2\" i18n>Location: </span>\n          <span\n            class=\"mat-body\">{{training.sessions[0].classroom + ' , ' +training.sessions[0].building + ' , ' + training.location}}</span>\n\n\n        </div>\n      </div>\n\n\n      <div class=\"margin-bottom-xs margin-top-xs flex\">\n        <div>\n          <mat-icon>assignment</mat-icon>\n        </div>\n        <div class=\"margin-left-xs width-9-10 flex flex-column flex-center\">\n          <div class=\"text-truncate\">\n            <span class=\"mat-body-2\" i18n=\"assessment; exam\">Assessment: </span>\n            <span class=\"mat-body\">\n              <ng-container *ngIf=\"training.hasAssessment\" i18n>Yes</ng-container>\n              <ng-container *ngIf=\"!training.hasAssessment\" i18n>No</ng-container>\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"margin-bottom-xs margin-top-xs flex\">\n        <div>\n          <mat-icon>event_seat</mat-icon>\n        </div>\n        <div class=\"margin-left-xs width-9-10 flex flex-column flex-center text-truncate\">\n          <div class=\"text-truncate\">\n            <ng-container *ngIf=\"training.slots_available; else noSeats\">\n              <span class=\"mat-body-2\" i18n=\"seats available\">Seats Available: </span>\n            </ng-container>\n            <ng-container *ngIf=\"training.slots_available\">{{\n              training.slots_available + ' '\n            }}</ng-container>\n            <ng-template #noSeats>\n              <span color=\"warn\" class=\"mat-body\" i18n=\"seats full\">Seats full!</span>\n            </ng-template>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"flex margin-bottom-xs\" *ngIf=\"!training.eligible\">\n        <mat-icon>warning</mat-icon>\n        <div class=\"margin-left-xs mat-caption\">\n          <ng-container [ngTemplateOutlet]=\"ineligibleForTraining\" [ngTemplateOutletContext]=\"{ $implicit: training }\">\n          </ng-container>\n        </div>\n      </div>\n    </section>\n  </section>\n\n  <div class=\"flex flex-center\">\n    <div [ngClass]=\"{'mr-4': trainingPrivileges.canNominate}\" *ngIf=\"!training.registered\">\n      <button mat-flat-button color=\"primary\" class=\"inline-block\" (click)=\"onClickBtnRegister(training)\"\n        [disabled]=\"!(training.slots_available && training.eligible) || registerStatus === 'sending'\" i18n>\n        Register\n      </button>\n    </div>\n\n    <div [ngClass]=\"{'mr-4': trainingPrivileges.canNominate}\" *ngIf=\"training.registered\">\n      <button mat-flat-button color=\"primary\" class=\"inline-block\" (click)=\"onClickBtnDeregister(training)\"\n        [disabled]=\"deregisterStatus === 'sending'\" [ngClass]=\"{'mr-4': trainingPrivileges.canNominate}\" i18n>\n        De-Register\n      </button>\n    </div>\n\n    <div *ngIf=\"trainingPrivileges.canNominate\">\n      <button mat-stroked-button color=\"primary\" class=\"inline-block\" [disabled]=\"\n        !training.slots_available || registerStatus === 'sending' || deregisterStatus === 'sending'\n      \" (click)=\"onClickBtnNominate()\" i18n=\"nominate\" matTooltip=\"Nominate other users to undergo this training.\"\n        i18n-matTooltip>\n        Nominate\n      </button>\n    </div>\n  </div>\n</mat-card>\n\n<!-- Templates -->\n<ng-template #ineligibleForTraining let-training>\n  <span [ngSwitch]=\"training.ineligibility_reasons[0]\">\n    <ng-container *ngSwitchCase=\"'JL'\" i18n>This training is not for your JL.</ng-container>\n    <ng-container *ngSwitchCase=\"'PU'\" i18n>This training is not for your unit.</ng-container>\n    <ng-container *ngSwitchCase=\"'Role'\" i18n>This training is not for your role.</ng-container>\n    <ng-container *ngSwitchDefault i18n>You are not eligible for this training.</ng-container>\n  </span>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-details/training-details.component.html":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-details/training-details.component.html ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>training-details works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-filter-dialog/training-filter-dialog.component.html":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-filter-dialog/training-filter-dialog.component.html ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"width-1-1\">\n  <h2 class=\"mat-title\" i18n>Filter Trainings</h2>\n\n  <form [formGroup]=\"filterForm\" (ngSubmit)=\"onApplyFilters()\">\n    <mat-form-field class=\"width-1-1\">\n      <mat-label>\n        <span i18n>Location</span>\n      </mat-label>\n      <mat-select formControlName=\"location\">\n        <mat-option *ngFor=\"let location of trainingLocations\" [value]=\"location.name\"\n          >{{ location.name }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <div class=\"margin-top-s mat-caption\" i18n>Starting between the following dates:</div>\n\n    <mat-form-field class=\"width-1-1\">\n      <input\n        required\n        matInput\n        [matDatepicker]=\"picker1\"\n        placeholder=\"Starting between ...\"\n        [min]=\"currentDate\"\n        formControlName=\"fromDate\"\n      />\n      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n      <mat-datepicker #picker1></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field class=\"width-1-1\">\n      <input\n        required\n        matInput\n        [matDatepicker]=\"picker2\"\n        placeholder=\"... and ...\"\n        [min]=\"filterForm.value.fromDate ? filterForm.value.fromDate : currentDate\"\n        formControlName=\"toDate\"\n      />\n      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n      <mat-datepicker #picker2></mat-datepicker>\n    </mat-form-field>\n\n    <section>\n      <mat-checkbox [color]=\"'primary'\" formControlName=\"assessmentOnly\" i18n>\n        Trainings with assessment\n      </mat-checkbox>\n    </section>\n\n    <section>\n      <mat-checkbox [color]=\"'primary'\" formControlName=\"seatsAvailableOnly\" i18n>\n        Trainings with seats available\n      </mat-checkbox>\n    </section>\n\n    <section>\n      <mat-checkbox [color]=\"'primary'\" formControlName=\"eligibleOnly\" i18n>\n        Eligible trainings\n      </mat-checkbox>\n    </section>\n\n    <section class=\"padding-top-m\">\n      <button mat-raised-button color=\"primary\" type=\"submit\" i18n [disabled]=\"!filterForm.valid\">\n        Apply\n      </button>\n      <button mat-stroked-button color=\"primary\" type=\"reset\" class=\"margin-left-m\" i18n>\n        Reset\n      </button>\n    </section>\n  </form>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-header/training-header.component.html":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-header/training-header.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"padding-bottom-s\">\n  <h1 class=\"mat-headline text-truncate\">{{ content.name }}</h1>\n\n  <div class=\"text-truncate\">\n    <span class=\"mat-body-2 uppercase\">\n      <ng-container [ngSwitch]=\"content.contentType\">\n        <ng-container *ngSwitchCase=\"contentTypes.PROGRAM\" i18n\n          >Program</ng-container\n        >\n        <ng-container *ngSwitchCase=\"contentTypes.COURSE\" i18n\n          >Course</ng-container\n        >\n        <ng-container *ngSwitchCase=\"contentTypes.MODULE\" i18n\n          >Module</ng-container\n        >\n        <ng-container *ngSwitchCase=\"contentTypes.RESOURCE\" i18n\n          >Resource</ng-container\n        >\n        <ng-container *ngSwitchDefault i18n>Content</ng-container>\n      </ng-container>\n    </span>\n    <span class=\"mat-body-2\" *ngIf=\"trainingCount\">\n      | {{ trainingCount }}\n      <ng-container *ngIf=\"trainingCount !== 1\" i18n=\"<x> trainings available\">\n        trainings available\n      </ng-container>\n      <ng-container *ngIf=\"trainingCount === 1\" i18n=\"training available\">\n        training available\n      </ng-container>\n    </span>\n  </div>\n\n  <div class=\"margin-top-s\">\n    <a\n      mat-flat-button\n      [color]=\"'primary'\"\n      class=\"margin-right-s\"\n      [routerLink]=\"'/app/toc/' + content.identifier + '/overview'\"\n      i18n=\"view TOC; view table of contents\"\n    >\n      View TOC\n    </a>\n\n    <a\n      mat-flat-button\n      [color]=\"'primary'\"\n      class=\"'margin-right-s'\"\n      i18n=\"request for training\"\n      *ngIf=\"trainingPrivileges && trainingPrivileges.canRequestJIT\"\n      [routerLink]=\"['/app/infy/training/dashboard/jit/request-training']\"\n      [queryParams]=\"{ contentId: content.identifier }\"\n    >\n      Request Training\n    </a>\n\n    <ng-container\n      *ngIf=\"\n        content.contentType === 'Course' &&\n        !content.isExternal &&\n        watchlistStatus\n      \"\n    >\n      <button\n        mat-icon-button\n        [color]=\"'primary'\"\n        matTooltip=\"Receive updates when new trainings are available.\"\n        i18n-matTooltip\n        *ngIf=\"!watchlistStatus.inWatchlist\"\n        [disabled]=\"watchlistAddStatus === 'sending'\"\n        (click)=\"addToWatchlist()\"\n      >\n        <mat-icon *ngIf=\"watchlistAddStatus !== 'sending'\">add_alert</mat-icon>\n        <mat-icon *ngIf=\"watchlistAddStatus === 'sending'\"\n          >hourglass_full</mat-icon\n        >\n      </button>\n\n      <button\n        mat-icon-button\n        [color]=\"'primary'\"\n        matTooltip=\"Stop receiving updates for new trainings.\"\n        i18n-matTooltip\n        *ngIf=\"watchlistStatus.inWatchlist\"\n        [disabled]=\"watchlistRemoveStatus === 'sending'\"\n        (click)=\"removeFromWatchlist()\"\n      >\n        <mat-icon *ngIf=\"watchlistRemoveStatus !== 'sending'\"\n          >notifications_off</mat-icon\n        >\n        <mat-icon *ngIf=\"watchlistRemoveStatus === 'sending'\"\n          >hourglass_full</mat-icon\n        >\n      </button>\n    </ng-container>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-nominate-dialog/training-nominate-dialog.component.html":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-nominate-dialog/training-nominate-dialog.component.html ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 class=\"mat-h4\" i18n>Nominate other users to attend this training.</h4>\n<div class=\"mat-body\">\n  <div class=\"margin-bottom-xs margin-top-xs flex\">\n    <div>\n      <mat-icon>access_time</mat-icon>\n    </div>\n    <div class=\"margin-left-xs width-9-10 flex flex-column flex-center\">\n      <div class=\"text-truncate\">\n        <span class=\"mat-body-2\" i18n>Duration: </span>\n        <span class=\"mat-body\">{{\n          {\n            fromDate: training.start_dt,\n            toDate: training.end_dt\n          } | pipeConciseDateRange\n        }}</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"margin-bottom-xs margin-top-xs flex\">\n    <div>\n      <mat-icon>location_on</mat-icon>\n    </div>\n    <div class=\"margin-left-xs width-9-10 flex flex-column flex-center\">\n      <div class=\"text-truncate\">\n        <span class=\"mat-body-2\" i18n>Location: </span>\n        <span class=\"mat-body\">{{ training.location + ' ' }}</span>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ws-widget-user-autocomplete (usersList)=\"updateUsers($event)\"></ws-widget-user-autocomplete>\n\n<button\n  mat-raised-button\n  color=\"primary\"\n  [disabled]=\"sendStatus === 'sending' || !users.length\"\n  (click)=\"onBtnNominateClick()\"\n  i18n\n>\n  Nominate\n</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-share-dialog/training-share-dialog.component.html":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-share-dialog/training-share-dialog.component.html ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 class=\"mat-h4\" i18n>Share this training with other users.</h4>\n<div class=\"mat-body\">\n  <div class=\"margin-bottom-xs margin-top-xs flex\">\n    <div>\n      <mat-icon>access_time</mat-icon>\n    </div>\n    <div class=\"margin-left-xs width-9-10 flex flex-column flex-center\">\n      <div class=\"text-truncate\">\n        <span class=\"mat-body-2\" i18n>Duration: </span>\n        <span class=\"mat-body\">{{\n          {\n            fromDate: training.start_dt,\n            toDate: training.end_dt\n          } | pipeConciseDateRange\n        }}</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"margin-bottom-xs margin-top-xs flex\">\n    <div>\n      <mat-icon>location_on</mat-icon>\n    </div>\n    <div class=\"margin-left-xs width-9-10 flex flex-column flex-center\">\n      <div class=\"text-truncate\">\n        <span class=\"mat-body-2\" i18n>Location: </span>\n        <span class=\"mat-body\">{{ training.location + ' ' }}</span>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ws-widget-user-autocomplete (usersList)=\"updateUsers($event)\"></ws-widget-user-autocomplete>\n\n<button\n  mat-raised-button\n  color=\"primary\"\n  [disabled]=\"sendStatus === 'sending' || !users.length\"\n  (click)=\"onBtnShareClick()\"\n  i18n\n>\n  Share\n</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-list/trainings-list.component.html":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-list/trainings-list.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"registeredTrainings && registeredTrainings.length\">\n  <h3 class=\"mat-h3\" i18n>Registered Trainings</h3>\n\n  <section class=\"padding-top-l padding-bottom-l x-scroll\">\n    <ws-app-trainings-registered\n      [registeredTrainings]=\"registeredTrainings\"\n      [trainingPrivileges]=\"trainingPrivileges\"\n      (deregistered)=\"onDeregister($event)\"\n    ></ws-app-trainings-registered>\n  </section>\n  <mat-divider></mat-divider>\n</ng-container>\n\n<ng-container *ngIf=\"trainingFetchStatus === 'done'\">\n  <ws-app-trainings-upcoming\n    [filterObj]=\"filterObj\"\n    [upcomingTrainings]=\"upcomingTrainings\"\n    [trainingPrivileges]=\"trainingPrivileges\"\n    [trainingConfig]=\"trainingConfig\"\n    (filtersApplied)=\"filterTrainings($event)\"\n    (registered)=\"onRegister($event)\"\n    (deregistered)=\"onDeregister($event)\"\n    *ngIf=\"upcomingTrainings && upcomingTrainings.length\"\n  ></ws-app-trainings-upcoming>\n\n  <ng-container *ngIf=\"upcomingTrainings && !upcomingTrainings.length\">\n    <section class=\"padding-top-l\">\n      <p class=\"mat-body text-center\" i18n>\n        No trainings available.\n      </p>\n    </section>\n  </ng-container>\n</ng-container>\n\n<ng-container *ngIf=\"trainingFetchStatus === 'fetching'\">\n  <section class=\"padding-top-l\">\n    <mat-progress-spinner\n      [color]=\"'primary'\"\n      [mode]=\"'indeterminate'\"\n      class=\"margin-auto\"\n    ></mat-progress-spinner>\n  </section>\n</ng-container>\n\n<ng-container *ngIf=\"trainingFetchStatus === 'error'\">\n  <section class=\"padding-top-l\">\n    <p class=\"mat-body text-center\" i18n>\n      Sorry, there was an error while fetching trainings.\n    </p>\n  </section>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-registered/trainings-registered.component.html":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-registered/trainings-registered.component.html ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"width-1-1 flex\">\n  <section class=\"margin-right-s\" *ngFor=\"let registeredTraining of registeredTrainings\">\n    <ws-app-training-card\n      [training]=\"registeredTraining\"\n      [trainingPrivileges]=\"trainingPrivileges\"\n      (deregistered)=\"onDeregister($event)\"\n    ></ws-app-training-card>\n  </section>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-upcoming/trainings-upcoming.component.html":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-upcoming/trainings-upcoming.component.html ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"padding-top-l padding-bottom-l\">\n  <h3 class=\"mat-h3\" i18n>Upcoming Trainings</h3>\n  <button\n    mat-mini-fab\n    [color]=\"'primary'\"\n    (click)=\"onClickBtnFilter()\"\n    [matBadge]=\"appliedFiltersCount\"\n    matBadgeColor=\"accent\"\n    matTooltip=\"Filter\"\n    i18n-matTooltip\n  >\n    <mat-icon>filter_list</mat-icon>\n  </button>\n\n  <section class=\"margin-top-l flex flex-wrap flex-center\">\n    <div class=\"margin-right-s margin-bottom-s\" *ngFor=\"let upcomingTraining of upcomingTrainings\">\n      <ws-app-training-card\n        [training]=\"upcomingTraining\"\n        [trainingPrivileges]=\"trainingPrivileges\"\n        (registered)=\"onRegister($event)\"\n        (deregistered)=\"onDeregister($event)\"\n      ></ws-app-training-card>\n    </div>\n  </section>\n</section>\n");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/home/home.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/home/home.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-balanced {\n  max-width: 1024px;\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy90cmFpbmluZy9yb3V0ZXMvdHJhaW5pbmctY29udGVudC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL3RyYWluaW5nL3JvdXRlcy90cmFpbmluZy1jb250ZW50L2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvdHJhaW5pbmcvcm91dGVzL3RyYWluaW5nLWNvbnRlbnQvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWJhbGFuY2VkIHtcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuIiwiLmNvbnRhaW5lci1iYWxhbmNlZCB7XG4gIG1heC13aWR0aDogMTAyNHB4O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/home/home.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/home/home.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HomeComponent = class HomeComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.routeDataSub = this.route.data.subscribe(data => {
            const contentResolve = data.contentResolve;
            const trainingCountResolve = data.trainingCountResolve;
            const trainingPrivilegesResolve = data.trainingPrivilegesResolve;
            this.content = contentResolve.data;
            this.contentError = contentResolve.error;
            this.trainingCount = trainingCountResolve.data;
            this.trainingCountError = trainingCountResolve.error;
            this.trainingPrivileges = trainingPrivilegesResolve.data;
            this.trainingPrivilegesError = trainingCountResolve.error;
        });
    }
    ngOnDestroy() {
        if (this.routeDataSub) {
            this.routeDataSub.unsubscribe();
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-card/training-card.component.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-card/training-card.component.scss ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".training-card {\n  width: 320px;\n  box-sizing: border-box;\n}\n\n.training-options-container {\n  top: -8px;\n  right: -8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy90cmFpbmluZy9yb3V0ZXMvdHJhaW5pbmctY29udGVudC9jb21wb25lbnRzL3RyYWluaW5nLWNhcmQvdHJhaW5pbmctY2FyZC5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL3RyYWluaW5nL3JvdXRlcy90cmFpbmluZy1jb250ZW50L2NvbXBvbmVudHMvdHJhaW5pbmctY2FyZC90cmFpbmluZy1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FDREY7O0FESUE7RUFDRSxTQUFBO0VBQ0EsV0FBQTtBQ0RGIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL3RyYWluaW5nL3JvdXRlcy90cmFpbmluZy1jb250ZW50L2NvbXBvbmVudHMvdHJhaW5pbmctY2FyZC90cmFpbmluZy1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuXG4udHJhaW5pbmctY2FyZCB7XG4gIHdpZHRoOiAzMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnRyYWluaW5nLW9wdGlvbnMtY29udGFpbmVyIHtcbiAgdG9wOiAtJHNpemUteHM7XG4gIHJpZ2h0OiAtJHNpemUteHM7XG59XG4iLCIudHJhaW5pbmctY2FyZCB7XG4gIHdpZHRoOiAzMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnRyYWluaW5nLW9wdGlvbnMtY29udGFpbmVyIHtcbiAgdG9wOiAtOHB4O1xuICByaWdodDogLThweDtcbn0iXX0= */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-card/training-card.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-card/training-card.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: TrainingCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingCardComponent", function() { return TrainingCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_training_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/training-content.service */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/services/training-content.service.ts");
/* harmony import */ var _training_share_dialog_training_share_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../training-share-dialog/training-share-dialog.component */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-share-dialog/training-share-dialog.component.ts");
/* harmony import */ var _training_nominate_dialog_training_nominate_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../training-nominate-dialog/training-nominate-dialog.component */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-nominate-dialog/training-nominate-dialog.component.ts");






let TrainingCardComponent = class TrainingCardComponent {
    constructor(dialog, trainingContentSvc) {
        this.dialog = dialog;
        this.trainingContentSvc = trainingContentSvc;
        this.registerStatus = 'none';
        this.deregisterStatus = 'none';
        this.trainingShareStatus = 'none';
        this.registered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deregistered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.trainingPrivileges = {
            canNominate: false,
            canRequestJIT: false,
        };
    }
    ngOnInit() { }
    onClickBtnRegister() {
        try {
            this.registerStatus = 'sending';
            this.trainingContentSvc.registerForTraining(this.training).subscribe(() => {
                this.registerStatus = 'done';
                this.registered.emit(this.training.offering_id);
            }, () => {
                this.registerStatus = 'error';
            });
        }
        catch (e) {
            return;
        }
    }
    onClickBtnDeregister() {
        try {
            this.deregisterStatus = 'sending';
            this.trainingContentSvc.deregisterFromTraining(this.training).subscribe(() => {
                this.deregisterStatus = 'done';
                this.deregistered.emit(this.training.offering_id);
            }, () => {
                this.deregisterStatus = 'error';
            });
        }
        catch (e) {
            return;
        }
    }
    onClickBtnShare() {
        this.dialog.open(_training_share_dialog_training_share_dialog_component__WEBPACK_IMPORTED_MODULE_4__["TrainingShareDialogComponent"], {
            data: this.training,
            minWidth: '320px',
        });
    }
    onClickBtnNominate() {
        this.dialog.open(_training_nominate_dialog_training_nominate_dialog_component__WEBPACK_IMPORTED_MODULE_5__["TrainingNominateDialogComponent"], {
            data: this.training,
            minWidth: '320px',
        });
    }
    extractIneligibilityReasons() {
        this.training.ineligibilityReasons = this.training.reason_not_eligible.split(',');
    }
};
TrainingCardComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _services_training_content_service__WEBPACK_IMPORTED_MODULE_3__["TrainingContentService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrainingCardComponent.prototype, "training", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrainingCardComponent.prototype, "trainingPrivileges", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TrainingCardComponent.prototype, "registered", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TrainingCardComponent.prototype, "deregistered", void 0);
TrainingCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-training-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./training-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-card/training-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./training-card.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-card/training-card.component.scss")).default]
    })
], TrainingCardComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-details/training-details.component.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-details/training-details.component.scss ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy90cmFpbmluZy9yb3V0ZXMvdHJhaW5pbmctY29udGVudC9jb21wb25lbnRzL3RyYWluaW5nLWRldGFpbHMvdHJhaW5pbmctZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-details/training-details.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-details/training-details.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: TrainingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingDetailsComponent", function() { return TrainingDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrainingDetailsComponent = class TrainingDetailsComponent {
    constructor() { }
    ngOnInit() { }
};
TrainingDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-training-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./training-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-details/training-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./training-details.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-details/training-details.component.scss")).default]
    })
], TrainingDetailsComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-filter-dialog/training-filter-dialog.component.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-filter-dialog/training-filter-dialog.component.scss ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy90cmFpbmluZy9yb3V0ZXMvdHJhaW5pbmctY29udGVudC9jb21wb25lbnRzL3RyYWluaW5nLWZpbHRlci1kaWFsb2cvdHJhaW5pbmctZmlsdGVyLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-filter-dialog/training-filter-dialog.component.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-filter-dialog/training-filter-dialog.component.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: TrainingFilterDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingFilterDialogComponent", function() { return TrainingFilterDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let TrainingFilterDialogComponent = class TrainingFilterDialogComponent {
    constructor(filterDialogData, dialogRef) {
        this.filterDialogData = filterDialogData;
        this.dialogRef = dialogRef;
        this.filterObj = this.filterDialogData.filterObj;
        this.trainingLocations = this.filterDialogData.trainingLocations || [];
        this.currentDate = new Date();
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.filterObj.external.fromDate),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.filterObj.external.toDate),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.filterObj.external.location),
            assessmentOnly: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.filterObj.internal.assessmentOnly),
            seatsAvailableOnly: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.filterObj.internal.seatsAvailableOnly),
            eligibleOnly: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.filterObj.internal.eligibleOnly),
        });
    }
    ngOnInit() { }
    onApplyFilters() {
        if (this.filterForm.invalid) {
            return;
        }
        const newFilterObj = {
            external: {
                fromDate: this.filterForm.value.fromDate,
                toDate: this.filterForm.value.toDate,
                location: this.filterForm.value.location,
            },
            internal: {
                assessmentOnly: this.filterForm.value.assessmentOnly,
                eligibleOnly: this.filterForm.value.eligibleOnly,
                seatsAvailableOnly: this.filterForm.value.seatsAvailableOnly,
            },
        };
        this.dialogRef.close(newFilterObj);
    }
};
TrainingFilterDialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
TrainingFilterDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-training-filter-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./training-filter-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-filter-dialog/training-filter-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./training-filter-dialog.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-filter-dialog/training-filter-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], TrainingFilterDialogComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-header/training-header.component.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-header/training-header.component.scss ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy90cmFpbmluZy9yb3V0ZXMvdHJhaW5pbmctY29udGVudC9jb21wb25lbnRzL3RyYWluaW5nLWhlYWRlci90cmFpbmluZy1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-header/training-header.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-header/training-header.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: TrainingHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingHeaderComponent", function() { return TrainingHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");
/* harmony import */ var _apis_training_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../apis/training-api.service */ "./project/ws/app/src/lib/routes/infy/routes/training/apis/training-api.service.ts");




let TrainingHeaderComponent = class TrainingHeaderComponent {
    constructor(trainingApi) {
        this.trainingApi = trainingApi;
        this.watchlistAddStatus = 'none';
        this.watchlistRemoveStatus = 'none';
        this.contentTypes = _ws_widget_collection__WEBPACK_IMPORTED_MODULE_2__["NsContent"].EContentTypes;
    }
    ngOnInit() {
        this.getWatchlistStatus();
    }
    addToWatchlist() {
        try {
            this.watchlistAddStatus = 'sending';
            this.trainingApi.addToWatchlist(this.content.identifier).subscribe(res => {
                this.watchlistAddStatus = 'done';
                if (res.res_code === 1) {
                    this.watchlistStatus = { inWatchlist: true };
                }
            }, () => {
                this.watchlistAddStatus = 'error';
            });
        }
        catch (e) {
            this.watchlistAddStatus = 'error';
        }
    }
    removeFromWatchlist() {
        try {
            this.watchlistRemoveStatus = 'sending';
            this.trainingApi.removeFromWatchlist(this.content.identifier).subscribe(() => {
                this.watchlistRemoveStatus = 'done';
                this.watchlistStatus = { inWatchlist: false };
            }, () => {
                this.watchlistRemoveStatus = 'error';
            });
        }
        catch (e) {
            this.watchlistRemoveStatus = 'error';
        }
    }
    getWatchlistStatus() {
        try {
            this.trainingApi.isContentInWatchlist(this.content.identifier).subscribe(watchlistStatus => {
                this.watchlistStatus = watchlistStatus;
            }, () => {
                this.watchlistStatus = { inWatchlist: false };
            });
        }
        catch (e) {
            this.watchlistStatus = { inWatchlist: false };
        }
    }
};
TrainingHeaderComponent.ctorParameters = () => [
    { type: _apis_training_api_service__WEBPACK_IMPORTED_MODULE_3__["TrainingApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrainingHeaderComponent.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrainingHeaderComponent.prototype, "trainingCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrainingHeaderComponent.prototype, "trainingPrivileges", void 0);
TrainingHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-training-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./training-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-header/training-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./training-header.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-header/training-header.component.scss")).default]
    })
], TrainingHeaderComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-nominate-dialog/training-nominate-dialog.component.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-nominate-dialog/training-nominate-dialog.component.scss ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy90cmFpbmluZy9yb3V0ZXMvdHJhaW5pbmctY29udGVudC9jb21wb25lbnRzL3RyYWluaW5nLW5vbWluYXRlLWRpYWxvZy90cmFpbmluZy1ub21pbmF0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-nominate-dialog/training-nominate-dialog.component.ts":
/*!**************************************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-nominate-dialog/training-nominate-dialog.component.ts ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: TrainingNominateDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingNominateDialogComponent", function() { return TrainingNominateDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _apis_training_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../apis/training-api.service */ "./project/ws/app/src/lib/routes/infy/routes/training/apis/training-api.service.ts");




let TrainingNominateDialogComponent = class TrainingNominateDialogComponent {
    constructor(training, dialogRef, trainingApi) {
        this.training = training;
        this.dialogRef = dialogRef;
        this.trainingApi = trainingApi;
        this.users = [];
        this.sendStatus = 'none';
    }
    updateUsers(usersList) {
        this.users = usersList;
    }
    onBtnNominateClick() {
        this.sendStatus = 'sending';
        this.trainingApi.nominateUsers(this.training.offering_id, this.users).subscribe(() => {
            this.sendStatus = 'done';
            this.dialogRef.close();
        }, () => {
            this.sendStatus = 'error';
        });
    }
};
TrainingNominateDialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _apis_training_api_service__WEBPACK_IMPORTED_MODULE_3__["TrainingApiService"] }
];
TrainingNominateDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-training-nominate-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./training-nominate-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-nominate-dialog/training-nominate-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./training-nominate-dialog.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-nominate-dialog/training-nominate-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], TrainingNominateDialogComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-share-dialog/training-share-dialog.component.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-share-dialog/training-share-dialog.component.scss ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy90cmFpbmluZy9yb3V0ZXMvdHJhaW5pbmctY29udGVudC9jb21wb25lbnRzL3RyYWluaW5nLXNoYXJlLWRpYWxvZy90cmFpbmluZy1zaGFyZS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-share-dialog/training-share-dialog.component.ts":
/*!********************************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-share-dialog/training-share-dialog.component.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: TrainingShareDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingShareDialogComponent", function() { return TrainingShareDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _apis_training_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../apis/training-api.service */ "./project/ws/app/src/lib/routes/infy/routes/training/apis/training-api.service.ts");




let TrainingShareDialogComponent = class TrainingShareDialogComponent {
    constructor(training, dialogRef, trainingApi) {
        this.training = training;
        this.dialogRef = dialogRef;
        this.trainingApi = trainingApi;
        this.users = [];
        this.sendStatus = 'none';
    }
    updateUsers(usersList) {
        this.users = usersList;
    }
    onBtnShareClick() {
        this.sendStatus = 'sending';
        this.trainingApi.shareTraining(this.training.offering_id, this.users).subscribe(() => {
            this.sendStatus = 'done';
            this.dialogRef.close();
        }, () => {
            this.sendStatus = 'error';
        });
    }
};
TrainingShareDialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _apis_training_api_service__WEBPACK_IMPORTED_MODULE_3__["TrainingApiService"] }
];
TrainingShareDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-training-share-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./training-share-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-share-dialog/training-share-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./training-share-dialog.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-share-dialog/training-share-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], TrainingShareDialogComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-list/trainings-list.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-list/trainings-list.component.scss ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy90cmFpbmluZy9yb3V0ZXMvdHJhaW5pbmctY29udGVudC9jb21wb25lbnRzL3RyYWluaW5ncy1saXN0L3RyYWluaW5ncy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-list/trainings-list.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-list/trainings-list.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: TrainingsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingsListComponent", function() { return TrainingsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _apis_training_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../apis/training-api.service */ "./project/ws/app/src/lib/routes/infy/routes/training/apis/training-api.service.ts");
/* harmony import */ var _services_training_content_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/training-content.service */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/services/training-content.service.ts");







let TrainingsListComponent = class TrainingsListComponent {
    constructor(route, router, trainingApi, trainingContentSvc) {
        this.route = route;
        this.router = router;
        this.trainingApi = trainingApi;
        this.trainingContentSvc = trainingContentSvc;
        this.trainingFetchStatus = 'none';
        this.trainingPrivileges = {
            canNominate: false,
            canRequestJIT: false,
        };
    }
    ngOnInit() {
        if (this.route.parent) {
            const trainingPrivilegesResolve = this.route.parent.snapshot.data
                .trainingPrivilegesResolve;
            if (trainingPrivilegesResolve.data) {
                this.trainingPrivileges = trainingPrivilegesResolve.data;
            }
        }
        this.setTrainingConfig();
        this.trainingFetchStatus = 'fetching';
        this.trainingSub = this.route.queryParams
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(params => this.trainingContentSvc.initFilterObj(params)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(filterObj => {
            this.filterObj = filterObj;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.route.parent)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(parent => {
            if (parent) {
                this.trainingFetchStatus = 'fetching';
                return parent.params;
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({});
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(parentParams => this.trainingApi.getTrainings(parentParams['contentId'], this.filterObj)))
            .subscribe(trainings => {
            this.trainings = trainings;
            this.registeredTrainings = this.trainingContentSvc.filterRegisteredTrainings(this.trainings);
            this.upcomingTrainings = this.trainingContentSvc.filterUpcomingTrainings(this.trainings, this.filterObj);
            this.trainingFetchStatus = 'done';
        }, () => {
            this.trainingFetchStatus = 'error';
        });
    }
    ngOnDestroy() {
        if (this.trainingSub && !this.trainingSub.closed) {
            this.trainingSub.unsubscribe();
        }
        if (this.trainingConfigSub && !this.trainingConfigSub.closed) {
            this.trainingConfigSub.unsubscribe();
        }
    }
    filterTrainings(newFilterObj) {
        try {
            this.filterObj = newFilterObj;
            this.router.navigate(['../trainings'], {
                queryParams: Object.assign({}, this.filterObj.internal, this.filterObj.external),
                relativeTo: this.route,
            });
        }
        catch (e) {
            return;
        }
    }
    onRegister(trainingId) {
        this.trainingContentSvc.addRegisteredTraining(this.registeredTrainings, this.upcomingTrainings, trainingId);
    }
    onDeregister(trainingId) {
        this.registeredTrainings = this.trainingContentSvc.removeDeregisteredTraining(this.registeredTrainings, trainingId);
    }
    setTrainingConfig() {
        this.trainingConfigSub = this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            return (data.trainingConfigResolve.data || {
                trainingLocations: [],
            });
        }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]))))
            .subscribe(config => {
            this.trainingConfig = config;
        });
    }
};
TrainingsListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _apis_training_api_service__WEBPACK_IMPORTED_MODULE_5__["TrainingApiService"] },
    { type: _services_training_content_service__WEBPACK_IMPORTED_MODULE_6__["TrainingContentService"] }
];
TrainingsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-trainings-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trainings-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-list/trainings-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trainings-list.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-list/trainings-list.component.scss")).default]
    })
], TrainingsListComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-registered/trainings-registered.component.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-registered/trainings-registered.component.scss ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy90cmFpbmluZy9yb3V0ZXMvdHJhaW5pbmctY29udGVudC9jb21wb25lbnRzL3RyYWluaW5ncy1yZWdpc3RlcmVkL3RyYWluaW5ncy1yZWdpc3RlcmVkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-registered/trainings-registered.component.ts":
/*!******************************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-registered/trainings-registered.component.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: TrainingsRegisteredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingsRegisteredComponent", function() { return TrainingsRegisteredComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrainingsRegisteredComponent = class TrainingsRegisteredComponent {
    constructor() {
        this.deregistered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.trainingPrivileges = {
            canNominate: false,
            canRequestJIT: false,
        };
    }
    ngOnInit() { }
    onDeregister(trainingId) {
        this.deregistered.emit(trainingId);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrainingsRegisteredComponent.prototype, "registeredTrainings", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrainingsRegisteredComponent.prototype, "trainingPrivileges", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TrainingsRegisteredComponent.prototype, "deregistered", void 0);
TrainingsRegisteredComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-trainings-registered',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trainings-registered.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-registered/trainings-registered.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trainings-registered.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-registered/trainings-registered.component.scss")).default]
    })
], TrainingsRegisteredComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-upcoming/trainings-upcoming.component.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-upcoming/trainings-upcoming.component.scss ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy90cmFpbmluZy9yb3V0ZXMvdHJhaW5pbmctY29udGVudC9jb21wb25lbnRzL3RyYWluaW5ncy11cGNvbWluZy90cmFpbmluZ3MtdXBjb21pbmcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-upcoming/trainings-upcoming.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-upcoming/trainings-upcoming.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: TrainingsUpcomingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingsUpcomingComponent", function() { return TrainingsUpcomingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _training_filter_dialog_training_filter_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../training-filter-dialog/training-filter-dialog.component */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-filter-dialog/training-filter-dialog.component.ts");
/* harmony import */ var _services_training_content_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/training-content.service */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/services/training-content.service.ts");






let TrainingsUpcomingComponent = class TrainingsUpcomingComponent {
    constructor(dialog, trainingContentSvc) {
        this.dialog = dialog;
        this.trainingContentSvc = trainingContentSvc;
        this.filtersApplied = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.registered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deregistered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.trainingPrivileges = {
            canNominate: false,
            canRequestJIT: false,
        };
    }
    ngOnInit() {
        this.appliedFiltersCount = this.trainingContentSvc.getFiltersCount(this.filterObj);
    }
    onClickBtnFilter() {
        const filterDialogData = {
            filterObj: this.filterObj,
            trainingLocations: this.trainingConfig.trainingLocations || [],
        };
        this.dialog
            .open(_training_filter_dialog_training_filter_dialog_component__WEBPACK_IMPORTED_MODULE_4__["TrainingFilterDialogComponent"], { data: filterDialogData })
            .afterClosed()
            .subscribe(newFilterObj => {
            if (newFilterObj) {
                this.filtersApplied.emit(newFilterObj);
            }
        }, rxjs__WEBPACK_IMPORTED_MODULE_3__["noop"]);
    }
    onRegister(trainingId) {
        this.registered.emit(trainingId);
    }
    onDeregister(trainingId) {
        this.deregistered.emit(trainingId);
    }
};
TrainingsUpcomingComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _services_training_content_service__WEBPACK_IMPORTED_MODULE_5__["TrainingContentService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrainingsUpcomingComponent.prototype, "filterObj", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrainingsUpcomingComponent.prototype, "upcomingTrainings", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrainingsUpcomingComponent.prototype, "trainingPrivileges", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrainingsUpcomingComponent.prototype, "trainingConfig", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TrainingsUpcomingComponent.prototype, "filtersApplied", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TrainingsUpcomingComponent.prototype, "registered", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TrainingsUpcomingComponent.prototype, "deregistered", void 0);
TrainingsUpcomingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-trainings-upcoming',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trainings-upcoming.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-upcoming/trainings-upcoming.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trainings-upcoming.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-upcoming/trainings-upcoming.component.scss")).default]
    })
], TrainingsUpcomingComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/resolvers/content.resolver.ts":
/*!******************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/resolvers/content.resolver.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ContentResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentResolver", function() { return ContentResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");





let ContentResolver = class ContentResolver {
    constructor(contentSvc) {
        this.contentSvc = contentSvc;
    }
    resolve(route, _state) {
        const contentId = route.paramMap.get('contentId');
        if (contentId) {
            return this.contentSvc.fetchContent(contentId, 'detail').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => ({ data, error: null })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ error, data: null })));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ error: 'NO_ID', data: null });
    }
};
ContentResolver.ctorParameters = () => [
    { type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["WidgetContentService"] }
];
ContentResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], ContentResolver);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/resolvers/training-count.resolver.ts":
/*!*************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/resolvers/training-count.resolver.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: TrainingCountResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingCountResolver", function() { return TrainingCountResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _apis_training_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../apis/training-api.service */ "./project/ws/app/src/lib/routes/infy/routes/training/apis/training-api.service.ts");





let TrainingCountResolver = class TrainingCountResolver {
    constructor(trainingApi) {
        this.trainingApi = trainingApi;
    }
    resolve(route) {
        const contentId = route.paramMap.get('contentId');
        if (contentId) {
            return this.trainingApi.getTrainingCount(contentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(trainingCount => {
                return {
                    data: trainingCount,
                    error: null,
                };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ error, data: null })));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ error: 'NO_ID', data: null });
    }
};
TrainingCountResolver.ctorParameters = () => [
    { type: _apis_training_api_service__WEBPACK_IMPORTED_MODULE_4__["TrainingApiService"] }
];
TrainingCountResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TrainingCountResolver);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/services/training-content.service.ts":
/*!*************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/services/training-content.service.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: TrainingContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingContentService", function() { return TrainingContentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _apis_training_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../apis/training-api.service */ "./project/ws/app/src/lib/routes/infy/routes/training/apis/training-api.service.ts");




let TrainingContentService = class TrainingContentService {
    constructor(trainingApi) {
        this.trainingApi = trainingApi;
    }
    initFilterObj(queryParams) {
        const fromDate = queryParams['fromDate'] && !isNaN(new Date(queryParams['fromDate']).getTime())
            ? new Date(`${queryParams['fromDate']}`)
            : new Date();
        const toDate = queryParams['toDate'] && !isNaN(new Date(queryParams['toDate']).getTime())
            ? new Date(`${queryParams['toDate']}`)
            : new Date(fromDate.getFullYear(), fromDate.getMonth() + 6, fromDate.getDate());
        const filterObj = {
            external: {
                fromDate,
                toDate,
                location: queryParams['location'] ? queryParams['location'] : undefined,
            },
            internal: {
                assessmentOnly: queryParams['assessmentOnly'] === 'true',
                seatsAvailableOnly: queryParams['seatsAvailableOnly'] === 'true',
                eligibleOnly: queryParams['eligibleOnly'] === 'true',
            },
        };
        return filterObj;
    }
    getFiltersCount(filterObj) {
        try {
            let filtersCount = 0;
            if (filterObj.external.fromDate && filterObj.external.toDate) {
                filtersCount += 2;
            }
            if (filterObj.external.location) {
                filtersCount += 1;
            }
            if (filterObj.internal.assessmentOnly) {
                filtersCount += 1;
            }
            if (filterObj.internal.eligibleOnly) {
                filtersCount += 1;
            }
            if (filterObj.internal.seatsAvailableOnly) {
                filtersCount += 1;
            }
            return filtersCount;
        }
        catch (e) {
            return 0;
        }
    }
    filterRegisteredTrainings(trainings) {
        try {
            return trainings.filter(training => training.registered);
        }
        catch (e) {
            return [];
        }
    }
    filterUpcomingTrainings(trainings, filterObj) {
        try {
            let upcomingTrainings = trainings.filter(() => true);
            if (filterObj.internal.assessmentOnly) {
                upcomingTrainings = upcomingTrainings.filter(training => training.hasAssessment);
            }
            if (filterObj.internal.eligibleOnly) {
                upcomingTrainings = upcomingTrainings.filter(training => training.eligible);
            }
            if (filterObj.internal.seatsAvailableOnly) {
                upcomingTrainings = upcomingTrainings.filter(training => training.slots_available > 0);
            }
            return upcomingTrainings;
        }
        catch (e) {
            return trainings;
        }
    }
    registerForTraining(training) {
        return this.trainingApi.registerForTraining(training.offering_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => {
            if (res.res_code === 1) {
                training.slots_available -= 1;
                training.registered = true;
            }
        }));
    }
    deregisterFromTraining(training) {
        return this.trainingApi.deregisterFromTraining(training.offering_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => {
            if (res.res_code === 1) {
                training.slots_available += 1;
                training.registered = false;
            }
        }));
    }
    addRegisteredTraining(registeredTrainings, upcomingTrainings, trainingId) {
        try {
            const training = upcomingTrainings.find(item => item.offering_id === trainingId);
            if (training) {
                registeredTrainings.push(training);
            }
        }
        catch (e) { }
    }
    removeDeregisteredTraining(registeredTrainings, trainingId) {
        try {
            const newTrainings = registeredTrainings.filter(training => training.offering_id !== trainingId);
            return newTrainings;
        }
        catch (e) {
            return registeredTrainings;
        }
    }
};
TrainingContentService.ctorParameters = () => [
    { type: _apis_training_api_service__WEBPACK_IMPORTED_MODULE_3__["TrainingApiService"] }
];
TrainingContentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TrainingContentService);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/training-content-routing.module.ts":
/*!***********************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/training-content-routing.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: TrainingContentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingContentRoutingModule", function() { return TrainingContentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/home/home.component.ts");
/* harmony import */ var _resolvers_content_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvers/content.resolver */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/resolvers/content.resolver.ts");
/* harmony import */ var _resolvers_training_count_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resolvers/training-count.resolver */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/resolvers/training-count.resolver.ts");
/* harmony import */ var _resolvers_training_privileges_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../resolvers/training-privileges.resolver */ "./project/ws/app/src/lib/routes/infy/routes/training/resolvers/training-privileges.resolver.ts");
/* harmony import */ var _components_trainings_list_trainings_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/trainings-list/trainings-list.component */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-list/trainings-list.component.ts");
/* harmony import */ var _components_training_details_training_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/training-details/training-details.component */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-details/training-details.component.ts");










const routes = [
    {
        path: 'trainings',
        component: _components_trainings_list_trainings_list_component__WEBPACK_IMPORTED_MODULE_8__["TrainingsListComponent"],
        resolve: {
            trainingConfigResolve: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_3__["PageResolve"],
        },
        data: {
            pageType: 'feature',
            pageKey: 'training',
        },
    },
    {
        path: ':trainingId',
        component: _components_training_details_training_details_component__WEBPACK_IMPORTED_MODULE_9__["TrainingDetailsComponent"],
    },
    {
        path: '',
        redirectTo: 'trainings',
    },
];
let TrainingContentRoutingModule = class TrainingContentRoutingModule {
};
TrainingContentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    children: routes,
                    resolve: {
                        contentResolve: _resolvers_content_resolver__WEBPACK_IMPORTED_MODULE_5__["ContentResolver"],
                        trainingCountResolve: _resolvers_training_count_resolver__WEBPACK_IMPORTED_MODULE_6__["TrainingCountResolver"],
                        trainingPrivilegesResolve: _resolvers_training_privileges_resolver__WEBPACK_IMPORTED_MODULE_7__["TrainingPrivilegesResolver"],
                    },
                },
            ]),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TrainingContentRoutingModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/training-content.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/training-content.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: TrainingContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingContentModule", function() { return TrainingContentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _training_content_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./training-content-routing.module */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/training-content-routing.module.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/home/home.component.ts");
/* harmony import */ var _components_training_header_training_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/training-header/training-header.component */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-header/training-header.component.ts");
/* harmony import */ var _components_trainings_list_trainings_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/trainings-list/trainings-list.component */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-list/trainings-list.component.ts");
/* harmony import */ var _components_training_details_training_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/training-details/training-details.component */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-details/training-details.component.ts");
/* harmony import */ var _components_trainings_registered_trainings_registered_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/trainings-registered/trainings-registered.component */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-registered/trainings-registered.component.ts");
/* harmony import */ var _components_training_card_training_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/training-card/training-card.component */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-card/training-card.component.ts");
/* harmony import */ var _components_trainings_upcoming_trainings_upcoming_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/trainings-upcoming/trainings-upcoming.component */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/trainings-upcoming/trainings-upcoming.component.ts");
/* harmony import */ var _components_training_filter_dialog_training_filter_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/training-filter-dialog/training-filter-dialog.component */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-filter-dialog/training-filter-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_training_content_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/training-content.service */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/services/training-content.service.ts");
/* harmony import */ var _training_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../training.module */ "./project/ws/app/src/lib/routes/infy/routes/training/training.module.ts");
/* harmony import */ var _components_training_share_dialog_training_share_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/training-share-dialog/training-share-dialog.component */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-share-dialog/training-share-dialog.component.ts");
/* harmony import */ var _components_training_nominate_dialog_training_nominate_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/training-nominate-dialog/training-nominate-dialog.component */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/components/training-nominate-dialog/training-nominate-dialog.component.ts");
/* harmony import */ var _resolvers_training_count_resolver__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./resolvers/training-count.resolver */ "./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/resolvers/training-count.resolver.ts");
/* harmony import */ var _resolvers_training_privileges_resolver__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../resolvers/training-privileges.resolver */ "./project/ws/app/src/lib/routes/infy/routes/training/resolvers/training-privileges.resolver.ts");






















let TrainingContentModule = class TrainingContentModule {
};
TrainingContentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _components_training_header_training_header_component__WEBPACK_IMPORTED_MODULE_8__["TrainingHeaderComponent"],
            _components_trainings_list_trainings_list_component__WEBPACK_IMPORTED_MODULE_9__["TrainingsListComponent"],
            _components_training_details_training_details_component__WEBPACK_IMPORTED_MODULE_10__["TrainingDetailsComponent"],
            _components_trainings_registered_trainings_registered_component__WEBPACK_IMPORTED_MODULE_11__["TrainingsRegisteredComponent"],
            _components_training_card_training_card_component__WEBPACK_IMPORTED_MODULE_12__["TrainingCardComponent"],
            _components_trainings_upcoming_trainings_upcoming_component__WEBPACK_IMPORTED_MODULE_13__["TrainingsUpcomingComponent"],
            _components_training_filter_dialog_training_filter_dialog_component__WEBPACK_IMPORTED_MODULE_14__["TrainingFilterDialogComponent"],
            _components_training_share_dialog_training_share_dialog_component__WEBPACK_IMPORTED_MODULE_18__["TrainingShareDialogComponent"],
            _components_training_nominate_dialog_training_nominate_dialog_component__WEBPACK_IMPORTED_MODULE_19__["TrainingNominateDialogComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _training_content_routing_module__WEBPACK_IMPORTED_MODULE_6__["TrainingContentRoutingModule"],
            _training_module__WEBPACK_IMPORTED_MODULE_17__["TrainingModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["DisplayContentTypeModule"],
            _ws_widget_utils__WEBPACK_IMPORTED_MODULE_5__["PipeConciseDateRangeModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["UserAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
        ],
        entryComponents: [
            _components_training_filter_dialog_training_filter_dialog_component__WEBPACK_IMPORTED_MODULE_14__["TrainingFilterDialogComponent"],
            _components_training_share_dialog_training_share_dialog_component__WEBPACK_IMPORTED_MODULE_18__["TrainingShareDialogComponent"],
            _components_training_nominate_dialog_training_nominate_dialog_component__WEBPACK_IMPORTED_MODULE_19__["TrainingNominateDialogComponent"],
        ],
        providers: [_services_training_content_service__WEBPACK_IMPORTED_MODULE_16__["TrainingContentService"], _resolvers_training_count_resolver__WEBPACK_IMPORTED_MODULE_20__["TrainingCountResolver"], _resolvers_training_privileges_resolver__WEBPACK_IMPORTED_MODULE_21__["TrainingPrivilegesResolver"]],
    })
], TrainingContentModule);



/***/ })

}]);
//# sourceMappingURL=routes-training-content-training-content-module-es2015.js.map