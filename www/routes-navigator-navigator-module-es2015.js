(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-navigator-navigator-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/components/multiline-snackbar/multiline-snackbar.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/components/multiline-snackbar/multiline-snackbar.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p *ngFor=\"let line of snackbarLines\">{{ line }}</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/account-details/account-details.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/account-details/account-details.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <a mat-icon-button routerLink=\"/app/infy/navigator\">\n    <mat-icon>arrow_back</mat-icon>\n  </a>\n  <span i18n=\"page title: navigator industries\" class=\"margin-left-xs\">Titan Account</span>\n  <span class=\"spacer\"></span>\n</mat-toolbar>\n\n<div *ngIf=\"accountsData\" class=\"margin-bottom-xl\">\n  <mat-tab-group mat-align-tabs=\"center\" (selectedTabChange)=\"navigate($event)\" [selectedIndex]=\"getSelectedIndex()\"\n    dynamicHeight=\"true\">\n    <mat-tab [label]=\"caps(tab)\" *ngFor=\"let tab of tabs\">\n      <div *ngIf=\"\n          accountsData &&\n          (isObjectEmpty(accountsData[selectedTab]) ||\n            isObjectEmpty(accountsData[selectedTab][selectedAccount]))\n        \" class=\"margin-top-xl\">\n        <ng-container [wsResolverWidget]=\"errorWidget\"></ng-container>\n      </div>\n\n\n      <div *ngIf=\"!isObjectEmpty(accountsData[selectedTab]) || !noData\">\n        <mat-card class=\"margin-bottom-m mat-elevation-z3\">\n          <h2 i18n class=\"margin-bottom-s mat-h2\">Select your Account:</h2>\n          <mat-card-content>\n            <ws-utils-horizontal-scroller [loadStatus]=\"'done'\">\n              <a class=\"concept mat-toolbar cur-pointer\" *ngFor=\"let account of fetchAccounts(); let i = index\"\n                (click)=\"accountClicked(account)\">{{ account | titlecase }}</a>\n            </ws-utils-horizontal-scroller>\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <div class=\"flex flex-wrapped flex-center padding-s\" *ngIf=\"\n          accountsData &&\n          accountsData[selectedTab] &&\n          !isObjectEmpty(accountsData[selectedTab][selectedAccount])\n        \">\n        <div class=\"card-section margin-bottom-xl\">\n          <mat-card class=\"height-1-1\">\n            <h2 class=\"mat-h2\" i18n>Select the Portfolio</h2>\n            <mat-chip-list>\n              <mat-chip *ngFor=\"let portfolio of fetchPortfolios()\" class=\"width-1-1\"\n                [selected]=\"portfolio === selectedPortfolio\" color=\"primary\" (click)=\"portfolioClicked(portfolio)\">\n                <span class=\"width-1-1 text-center text-truncate\">{{ portfolio | titlecase }}</span>\n              </mat-chip>\n            </mat-chip-list>\n          </mat-card>\n        </div>\n        <div class=\"card-section margin-bottom-xl\">\n          <mat-card class=\"height-1-1\">\n            <h2 class=\"mat-h2\" i18n>Select a Pillar</h2>\n            <ws-app-pentagon [default]=\"'Accelerate'\" (trackClicked)=\"pillarClicked($event)\"></ws-app-pentagon>\n          </mat-card>\n        </div>\n        <div class=\"card-section margin-bottom-xl\">\n          <mat-card class=\"height-1-1\">\n            <h2 class=\"mat-h2\" i18n>Select a Theme</h2>\n            <mat-chip-list>\n              <mat-chip *ngFor=\"let theme of fetchThemes()\" class=\"width-1-1\" [selected]=\"theme === selectedTheme\"\n                color=\"primary\" (click)=\"themeClicked(theme)\">\n                <span class=\"width-1-1 text-center text-truncate\">{{ theme | titlecase }}</span>\n              </mat-chip>\n            </mat-chip-list>\n          </mat-card>\n        </div>\n      </div>\n      <div *ngIf=\"accountsData && selectedTheme &&!noData\" id=\"contentStrips\">\n        <ng-container [wsResolverWidget]=\"overviewWidgetResolverData\"></ng-container>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/bpm-details/bpm-details.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/bpm-details/bpm-details.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <a mat-icon-button routerLink=\"/app/infy/navigator/\">\n    <mat-icon>arrow_back</mat-icon>\n  </a>\n  <span class=\"margin-left-xs\">BPM Navigator</span>\n</mat-toolbar>\n\n<div *ngIf=\"fetchStatus === 'done'\">\n  <div class=\"banner ws-mat-primary-background-op50\">\n    <div class=\"content-strip margin-bottom-m \">\n      <h1\n        class=\"mat-display-1 margin-bottom-l ws-mat-primary-text text-bold padding-top-l margin-bottom-remove\"\n      >\n        {{ selectedBpmData.group_heading }}\n      </h1>\n      <h2 class=\"mat-title margin-top-xs description\">\n        {{ selectedBpmData.group_description }}\n      </h2>\n    </div>\n  </div>\n\n  <div *ngIf=\"coursesFetch === 'done'\">\n    <ng-container [wsResolverWidget]=\"coursesResolverData\"></ng-container>\n  </div>\n\n  <div class=\"margin-top-xl\" *ngIf=\"hasExternal\">\n    <p class=\"mat-h1 margin-left-l\">Learning Paths</p>\n\n    <div class=\"flex-container margin-left-xl margin-bottom-xl\">\n      <mat-card\n        class=\"card\"\n        *ngFor=\"let externalData of selectedBpmData.member_list_external\"\n        (click)=\"changeRoute(externalData.member_linked_url)\"\n        [matTooltip]=\"externalData.member_title\"\n      >\n        <!-- <a [routerLink] = externalData.member_linked_url> -->\n        <img\n          [src]=\"externalData.member_image_id\"\n          class=\"member-image\"\n          [wsUtilsDefaultThumbnail]=\"defaultThumbnail\"\n        />\n        <div class=\"card-information\">\n          <p class=\"mat-title ws-mat-primary-text font-weight-500 title-text\">\n            {{ externalData.member_title }}\n          </p>\n          <p class=\"mat-body\">{{ externalData.member_description }}</p>\n        </div>\n        <!-- </a> -->\n      </mat-card>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/explore/components/navigator-card/navigator-card.component.html":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/explore/components/navigator-card/navigator-card.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-container\" *ngIf=\"fetchStatus === 'done'\">\n  <mat-card>\n    <div class=\"card\">\n      <div class=\"width-auto\" [matTooltip]=\"navigatorCard.title\">\n        <img class=\"card-image\" [src]=\"navigatorCard.thumbnail\" [alt]=\"navigatorCard.title\" *ngIf=\"navigatorCard.thumbnail != ''\"\n          (click)=\"imageClicked(navigatorCard.type)\" [wsUtilsDefaultThumbnail]=\"defaultThumbnail\" />\n      </div>\n      <div class=\"card-information\">\n        <div class=\"mat-headline title text-truncate\">{{ navigatorCard.title }}</div>\n        <div class=\"grid\">\n          <div class=\"mat-body-1 title description \" *ngIf=\"!screenSizeIsLtMedium\">\n            {{ navigatorCard.description | pipeLimitTo: 138 }}\n          </div>\n          <div class=\"button-holder\" *ngIf=\"navigatorCard.type === 'lp'\">\n            <a mat-flat-button [routerLink]=\"'/app/infy/navigator/lp/' + navigatorCard.routeButton\" [queryParams]=\"{ showProfile: true }\">\n              <span class=\"mat-subheading-1 ws-mat-primary-text font-weight-bold\" i18n>KNOW MORE</span>\n              <mat-icon color=\"primary\" class=\"font-weight-bold\">play_arrow</mat-icon>\n            </a>\n          </div>\n          <div class=\"button-holder\" *ngIf=\"navigatorCard.type === 'fs'\">\n            <a mat-flat-button [routerLink]=\"'/app/infy/navigator/fs/program/' + navigatorCard.routeButton\">\n              <span class=\"mat-subheading-1 ws-mat-primary-text font-weight-bold\" i18n>KNOW MORE</span>\n              <mat-icon color=\"primary\" class=\"font-weight-bold\">play_arrow</mat-icon>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </mat-card>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/explore/explore.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/explore/explore.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <div>\n    <a mat-icon-button routerLink=\"/app/infy/navigator\">\n      <mat-icon>arrow_back</mat-icon>\n    </a>\n    <span i18n=\"page title: navigator explore\" class=\"margin-left-xs\">Explore</span>\n  </div>\n</mat-toolbar>\n\n<mat-tab-group animationDuration=\"0ms\" mat-align-tabs=\"center\" class=\"mat-tab-labels\" [selectedIndex]=\"selectedIndex\"\n  (selectedTabChange)=\"selectedIndex = $event.index\">\n  <mat-tab label=\"Learning Paths\">\n    <div class=\"headings mat-headline ws-mat-primary-text margin-top\">\n      <div *ngIf=\"status === 'done'; else loader\">\n        <div class=\"toolbar margin-top-xl\">\n          <p [ngClass]=\"smallScreen == false ? 'mat-headline' : 'mat-title'\" i18n>\n            Learning path(s) in high demand\n          </p>\n          <div class=\"button-holder\">\n            <a mat-flat-button [routerLink]=\"['/app/infy/navigator/tech/learning-path/result']\"\n              [queryParams]=\"selectionjava\">\n              <span class=\"mat-subheading-1 ws-mat-primary-text font-weight-bold \" i18n>SEE ALL</span>\n              <mat-icon color=\"primary\" class=\"font-weight-bold\">play_arrow</mat-icon>\n            </a>\n          </div>\n        </div>\n\n        <div *ngIf=\"lpData.length\" class=\"card-container\">\n          <ws-utils-horizontal-scroller>\n            <div *ngIf=\"lpData.length\" class=\"card-holder\" #cardContents>\n              <div *ngFor=\"let lpData of lpData\">\n                <ws-app-navigator-card [navigatorCard]=\"lpData\"></ws-app-navigator-card>\n              </div>\n            </div>\n          </ws-utils-horizontal-scroller>\n        </div>\n      </div>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Full Stack Programs\">\n    <div class=\"headings mat-headline ws-mat-primary-text margin-top\">\n      <div *ngIf=\"statusFs === 'done'\">\n        <div class=\"toolbar margin-top-xl\">\n          <p [ngClass]=\"smallScreen == false ? 'mat-headline' : 'mat-title'\" i18n>\n            Pick a full stack offering of your choice to learn\n          </p>\n\n          <div class=\"button-holder\">\n            <a mat-flat-button [routerLink]=\"'/app/infy/navigator/fs/all/'\">\n              <span class=\"mat-subheading-1 ws-mat-primary-text font-weight-bold\" i18n>SEE ALL</span>\n              <mat-icon color=\"primary\" class=\"font-weight-bold\">play_arrow</mat-icon>\n            </a>\n          </div>\n        </div>\n        <div *ngIf=\"fsData.length\" class=\"card-container\">\n          <ws-utils-horizontal-scroller>\n            <div *ngIf=\"fsData.length\" class=\"card-holder\" #cardContents>\n              <div *ngFor=\"let fsData of fsData\">\n                <ws-app-navigator-card [navigatorCard]=\"fsData\"></ws-app-navigator-card>\n              </div>\n            </div>\n          </ws-utils-horizontal-scroller>\n        </div>\n      </div>\n    </div>\n  </mat-tab>\n</mat-tab-group>\n\n\n<ng-template #loader>\n  <div class=\"text-center\">\n    <mat-spinner></mat-spinner>\n  </div>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fs-home/fs-home.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fs-home/fs-home.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" *ngIf=\"fetchStatus === 'done'\">\n  <a mat-icon-button routerLink=\"/app/infy/navigator/explore\">\n    <mat-icon>arrow_back</mat-icon>\n  </a>\n  <span i18n=\"page title: navigator suggestions\" class=\"padding-left-xs\">\n    <!-- fullStackData.fs_name -->\n    Full Stack Programs\n  </span>\n</mat-toolbar>\n\n<div class=\"margin-bottom-xl\">\n  <div class=\"banner ws-mat-primary-background-op50\">\n    <div class=\"banner-description margin-bottom-m padding-top-m \">\n      <h1 class=\"mat-display-1 margin-bottom-l ws-mat-primary-text text-bold padding-top-l small-banner-text\" i18n>\n        Choose from one of the full stack program below\n      </h1>\n      <h2 i18n class=\"mat-title margin-top-xl small-banner-description \">\n        After learning you can take certifications to strengthen your knowledge\n      </h2>\n    </div>\n  </div>\n  <div class=\"my-6 mx-3 flex\" *ngIf=\"fsData.length && fetchStatus === 'done'; else loader\">\n    <div *ngIf=\"fsData.length\" class=\"flex flex-wrap\" #cardContents>\n      <div *ngFor=\"let navigatorCard of fsData\">\n        <div class=\"card-container\">\n          <mat-card>\n            <div class=\"card\">\n              <div class=\"width-auto\" [matTooltip]=\"navigatorCard.title\">\n                <img class=\"card-image\" [src]=\"navigatorCard.thumbnail\" [alt]=\"navigatorCard.title\"\n                  *ngIf=\"navigatorCard.thumbnail != ''\" [wsUtilsDefaultThumbnail]=\"defaultThumbnail\"\n                  (click)=\"imageClicked(navigatorCard.routeButton)\" />\n              </div>\n              <div class=\"card-information\">\n                <div class=\"mat-headline title text-truncate\">{{ navigatorCard.title }}</div>\n                <div class=\"know-more\" *ngIf=\"navigatorCard.type === 'fs'\">\n                  <a class=\"know-button margin-top-xs margin-bottom-m\" mat-flat-button\n                    [routerLink]=\"'/app/infy/navigator/fs/program/' + navigatorCard.routeButton\">\n                    <div class=\"know-more flex flex-center\">\n                      <span class=\"mat-subheading-1 ws-mat-primary-text font-weight-bold\" i18n>KNOW MORE</span>\n                      <mat-icon color=\"primary\" class=\"font-weight-bold\">play_arrow</mat-icon>\n                    </div>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </mat-card>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ng-template #loader>\n    <div class=\"text-center\">\n      <mat-spinner></mat-spinner>\n    </div>\n  </ng-template>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fullstack-program/components/fs-card/fs-card.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fullstack-program/components/fs-card/fs-card.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-container\">\n  <mat-card>\n    <div class=\"card\">\n      <div class=\"width-auto\" [matTooltip]=\"navigatorCard.title\">\n        <img class=\"card-image\" [src]=\"navigatorCard.thumbnail\" [alt]=\"navigatorCard.title\"\n          *ngIf=\"navigatorCard.thumbnail != ''\" />\n      </div>\n      <div class=\"card-information\">\n        <div class=\"mat-headline title text-truncate\">{{ navigatorCard.title }}</div>\n        <div class=\"mat-body-1 title \">{{ navigatorCard.description | pipeLimitTo: 138 }}</div>\n        <div class=\"button-holder\"\n          *ngIf=\"navigatorCard.routeButton != '' && navigatorCard.type === 'internal' || navigatorCard.type === 'external'\">\n          <button mat-flat-button (click)=\"launchCertification()\">\n            <span class=\"mat-subheading-1 ws-mat-primary-text font-weight-bold\" i18n>LAUNCH NOW</span>\n            <mat-icon color=\"primary\" class=\"font-weight-bold\">play_arrow</mat-icon>\n          </button>\n        </div>\n        <!-- <div\n          class=\"button-holder\"\n          *ngIf=\"navigatorCard.routeButton === ''\"\n        >\n          <span class=\"mat-subheading-1 ws-mat-primary-text font-weight-bold\" i18n\n            >I'M INTERESTED</span\n          >\n          <mat-icon color=\"primary\" class=\"font-weight-bold\">play_arrow</mat-icon>\n        </div> -->\n      </div>\n    </div>\n  </mat-card>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fullstack-program/fullstack-program.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fullstack-program/fullstack-program.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" *ngIf=\"fetchStatus === 'done'\">\n  <a mat-icon-button routerLink=\"/app/infy/navigator/explore\">\n    <mat-icon>arrow_back</mat-icon>\n  </a>\n  <span class=\"padding-left-xs\">{{\n    fullStackData.fs_name\n  }}</span>\n</mat-toolbar>\n\n<div class=\"margin-bottom-xl\">\n  <div class=\"banner ws-mat-primary-background-op50\">\n    <div class=\"banner-description margin-bottom-m padding-top-m \">\n      <h1 class=\"mat-display-1 margin-bottom-l ws-mat-primary-text text-bold padding-top-l small-banner-text\" i18n>\n        Choose a course below that you need to learn\n      </h1>\n      <h2 i18n class=\"mat-title margin-top-xl small-banner-description \">\n        After learning you can take certifications to strengthen your knowledge\n      </h2>\n    </div>\n  </div>\n  <div class=\"margin-top-xl desc-container\">\n    <div class=\"mat-subheading-2 text-bold padding-left-m padding-right-m margin-bottom-m\">\n      <ng-container *ngIf=\"fullStackData\">\n        {{ fullStackData.fs_desc }}\n      </ng-container>\n    </div>\n    <div *ngIf=\"fetchStatus === 'done'\">\n      <ng-container [wsResolverWidget]=\"coursesResolverData\"></ng-container>\n    </div>\n    <div class=\"margin-top-xs practice-certification\">\n      <div class=\"margin-top-l margin-left-l\" *ngIf=\"playgroundData.length\">\n        <h1 class=\"mat-headline padding-top-l text-bold padding-left-l\" i18n>Practice</h1>\n        <div class=\"card-holder\">\n          <ng-container *ngFor=\"let playItem of playgroundData\">\n            <ws-app-lp-card [navigatorCard]=\"playItem\"></ws-app-lp-card>\n          </ng-container>\n        </div>\n      </div>\n      <div class=\"margin-top-l margin-left-l\" *ngIf=\"certificationData.length\">\n        <h1 class=\"mat-headline padding-top-l text-bold padding-left-l margin-remove-bottom\" i18n>Certification\n          <ng-container *ngIf=\"certificationData.length>1\">s</ng-container>\n        </h1>\n        <ws-utils-horizontal-scroller>\n          <ng-container *ngFor=\"let certData of certificationData\">\n            <ws-app-fs-card [navigatorCard]=\"certData\"></ws-app-fs-card>\n          </ng-container>\n        </ws-utils-horizontal-scroller>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industries/industries.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industries/industries.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <a mat-icon-button routerLink=\"/app/infy/navigator\">\n    <mat-icon>arrow_back</mat-icon>\n  </a>\n  <span i18n=\"page title: navigator industries\" class=\"margin-left-xs\">Industries</span>\n  <span class=\"spacer\"></span>\n  <button mat-raised-button (click)=\"navigateToAnalytics()\"> {{selectedTab}} Analytics</button>\n</mat-toolbar>\n\n<mat-tab-group mat-align-tabs=\"center\" (selectedTabChange)=\"navigate($event)\" [selectedIndex]=\"getSelectedIndex()\"\n  dynamicHeight=\"true\">\n  <mat-tab [label]=\"tab\" *ngFor=\"let tab of tabs\">\n    <ng-template matTabContent>\n      <div *ngIf=\"industriesData && industriesData[selectedTab]\">\n        <div class=\"flex flex-center flex-wrapped padding-s\">\n          <div class=\"card-section margin-bottom-xl\" *ngIf=\"fetchSubDomains() && fetchSubDomains()[0]\">\n            <mat-card class=\"height-1-1\">\n              <h2 class=\"mat-title\" i18n>Select a SubDomain</h2>\n              <mat-chip-list>\n                <mat-chip *ngFor=\"let subdomain of fetchSubDomains()\" class=\"width-1-1\"\n                  [selected]=\"subdomain === selectedSubDomain\" color=\"primary\" (click)=\"subDomainClicked(subdomain)\">\n                  <span class=\"width-1-1 text-center text-truncate\">{{ subdomain }}</span>\n                </mat-chip>\n              </mat-chip-list>\n            </mat-card>\n          </div>\n          <div class=\"card-section margin-bottom-xl\">\n            <mat-card class=\"height-1-1\">\n              <h2 class=\"mat-title margin-bottom-m\">\n                <ng-container i18n>Select a </ng-container>\n                <ng-container *ngIf=\"selectedType === displayTypes[0]\" i18n>Mega Trend</ng-container>\n                <ng-container *ngIf=\"selectedType !== displayTypes[0]\" i18n>Pillar</ng-container>\n              </h2>\n              <mat-radio-group [(ngModel)]=\"selectedType\" class=\"flex flex-around margin-bottom-m\">\n                <mat-radio-button [value]=\"displayTypes[1]\" i18n>Digital Pentagon</mat-radio-button>\n                <mat-radio-button [value]=\"displayTypes[0]\" i18n>Mega Trend</mat-radio-button>\n              </mat-radio-group>\n              <ws-app-pentagon *ngIf=\"selectedType === displayTypes[1]\" [default]=\"'Accelerate'\"\n                (trackClicked)=\"trackClicked($event)\"></ws-app-pentagon>\n\n              <mat-chip-list *ngIf=\"selectedType === displayTypes[0]\">\n                <mat-chip *ngFor=\"let trend of industriesData[selectedTab][selectedSubDomain]['megatrends']\"\n                  class=\"width-1-1\" [selected]=\"trend.trendName === selectedTrend\" color=\"primary\"\n                  (click)=\"updateMegaTrends(trend)\">\n                  <span class=\"width-1-1 text-center text-truncate\">{{ trend.trendName }}</span>\n                </mat-chip>\n              </mat-chip-list>\n            </mat-card>\n          </div>\n          <div class=\"card-section margin-bottom-xl\" *ngIf=\"selectedType === displayTypes[1]\">\n            <mat-card class=\"height-1-1\">\n              <h2 class=\"mat-title\" *ngIf=\"\n                  industriesData[selectedTab] &&\n                  industriesData[selectedTab][selectedSubDomain] &&\n                  industriesData[selectedTab][selectedSubDomain][selectedPillar]?.length\n                \" i18n>\n                Select a Theme\n              </h2>\n              <h2 class=\"mat-title text-center margin-top-xl\"\n                *ngIf=\"!industriesData[selectedTab][selectedSubDomain][selectedPillar]?.length\" i18n>\n                No themes for this Pillar\n              </h2>\n              <mat-chip-list>\n                <mat-chip *ngFor=\"\n                    let theme of industriesData[selectedTab][selectedSubDomain][selectedPillar]\n                  \" class=\"width-1-1\" [selected]=\"theme.themeName === selectedTheme\" color=\"primary\"\n                  (click)=\"roleClicked(theme.themeName)\">\n                  <span class=\"width-1-1 text-center text-truncate\">{{ theme.themeName }}</span>\n                </mat-chip>\n              </mat-chip-list>\n            </mat-card>\n          </div>\n        </div>\n        <section *ngIf=\"selectedType === displayTypes[0] && megaTrendSelected\" class=\"content-strip\">\n          <ng-container [wsResolverWidget]=\"megaTrendwidgetResolverData\"></ng-container>\n        </section>\n        <div *ngIf=\"\n            industriesData[selectedTab][selectedSubDomain][selectedPillar]?.length &&\n            industriesData[selectedTab]['hasData'] &&\n            selectedType === displayTypes[1]\n          \" id=\"contentStrips\">\n          <div *ngIf=\"fetchingContentData\" class=\"margin-top-xl\">\n            <!-- <app-spinner></app-spinner> -->\n            <ng-container [wsResolverWidget]=\"navigatorwidgetResolverData\"></ng-container>\n\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industry-analytics/industry-analytics.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industry-analytics/industry-analytics.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar [color]=\"pageNavbar.color\" [ngStyle]=\"pageNavbar?.styles\">\n  <ws-widget-btn-page-back [widgetData]=\"{ url: 'back' }\"></ws-widget-btn-page-back>\n  <ng-container>\n    <span class=\"margin-left-xs\">\n      {{tag}}</span>\n    <span class=\"margin-left-xs\" i18n>\n      Analytics</span>\n  </ng-container>\n</mat-toolbar>\n<div *ngIf=\"fetchStatus === 'fetching'\" class=\"flex flex-center analytics-loader\">\n  <mat-spinner></mat-spinner>\n</div>\n\n<ng-container *ngIf=\"fetchStatus === 'error'\" [wsResolverWidget]=\"errorWidget\"></ng-container>\n<div *ngIf=\"fetchStatus === 'done' && uniqueUsers === 0\" class=\"text-center my-8\">\n  <h2 i18n>We are gathering the data to provide insights! Coming soon ...</h2>\n</div>\n\n<div *ngIf=\"fetchStatus === 'done' && uniqueUsers > 0\" class=\"ml-8 mr-8 mb-4\">\n  <ng-container *ngIf=\"!isExpandTrue\">\n    <ng-container>\n      <mat-card *ngIf=\"uniqueUsers\" class=\"unique-users-card margin-top-xl p-4\">\n        <mat-card-header class=\"flex flex-center flex-wrapped\">\n          <mat-card-title>\n            <h4 class=\"padding-left-xs mat-body-strong\" i18n=\"Unique Users\">Unique Users</h4>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"flex flex-center flex-wrapped\">\n          <h1 class=\"mat-display-2 font-bold\">{{uniqueUsers}}</h1>\n        </mat-card-content>\n      </mat-card>\n    </ng-container>\n    <div class=\"flex flex-between flex-wrapped\">\n      <ng-container>\n        <mat-card class=\"graph-card\">\n          <div class=\"flex flex-between flex-middle mat-toolbar mat-primary\">\n            <div class=\"flex flex-middle p-2\">\n              <mat-icon class=\"feature-icon mt-0\">bar_chart</mat-icon>\n              <p class=\"margin-left-m mat-body-strong margin-remove-bottom\" i18n=\"Participants By Onsite Offshore\">\n                Participants By Onsite Offshore\n              </p>\n            </div>\n          </div>\n          <div class=\"margin-m\">\n            <ng-container [wsResolverWidget]=\"onsiteOffshoreData\"> </ng-container>\n          </div>\n        </mat-card>\n      </ng-container>\n      <ng-container>\n        <mat-card class=\"graph-card\">\n          <div class=\"flex flex-between flex-middle mat-toolbar mat-primary\">\n            <div class=\"flex flex-middle p-2\">\n              <mat-icon class=\"feature-icon mt-0\">bar_chart</mat-icon>\n              <p class=\"margin-left-m mat-body-strong margin-remove-bottom\" i18n=\"Participants By Unit\">\n                Participants By Unit\n              </p>\n            </div>\n            <button *ngIf=\"analyticsData?.participants.ibu.length > 20\" mat-icon-button (click)=\"onExpand('ibu')\">\n              <mat-icon class=\"feature-icon mt-0\">open_in_new</mat-icon>\n            </button>\n          </div>\n          <div class=\"margin-m\">\n            <ng-container [wsResolverWidget]=\"barChartUnitData\"> </ng-container>\n          </div>\n        </mat-card>\n      </ng-container>\n      <ng-container>\n        <mat-card class=\"graph-card\">\n          <div class=\"flex flex-between flex-middle mat-toolbar mat-primary\">\n            <div class=\"flex flex-middle p-2\">\n              <mat-icon class=\"feature-icon mt-0\">bar_chart</mat-icon>\n              <p class=\"margin-left-m mat-body-strong margin-remove-bottom\" i18n=\"Participants By PU\">\n                Participants By PU\n              </p>\n            </div>\n            <button *ngIf=\"analyticsData?.participants.pu.length > 20\" mat-icon-button (click)=\"onExpand('pu')\">\n              <mat-icon class=\"feature-icon mt-0\">open_in_new</mat-icon>\n            </button>\n          </div>\n          <div class=\"margin-m\">\n            <ng-container [wsResolverWidget]=\"barChartPuData\"> </ng-container>\n          </div>\n        </mat-card>\n      </ng-container>\n      <ng-container>\n        <mat-card class=\"graph-card\">\n          <div class=\"flex flex-between flex-middle mat-toolbar mat-primary\">\n            <div class=\"flex flex-middle p-2\">\n              <mat-icon class=\"feature-icon mt-0\">bar_chart</mat-icon>\n              <p class=\"margin-left-m mat-body-strong margin-remove-bottom\" i18n=\"Participants By JL\">\n                Participants By JL\n              </p>\n            </div>\n            <button *ngIf=\"analyticsData?.participants.jl.length > 20\" mat-icon-button (click)=\"onExpand('jl')\">\n              <mat-icon class=\"feature-icon mt-0\">open_in_new</mat-icon>\n            </button>\n          </div>\n          <div class=\"m-4\">\n            <ng-container [wsResolverWidget]=\"barChartJLData\"> </ng-container>\n          </div>\n        </mat-card>\n      </ng-container>\n      <ng-container>\n        <mat-card class=\"graph-card\">\n          <div class=\"flex flex-between flex-middle mat-toolbar mat-primary\">\n            <div class=\"flex flex-middle p-2\">\n              <mat-icon class=\"feature-icon mt-0\">bar_chart</mat-icon>\n              <p class=\"margin-left-m mat-body-strong margin-remove-bottom\" i18n=\"Participants By DU\">\n                Participants By DU\n              </p>\n            </div>\n            <button *ngIf=\"analyticsData?.participants.du.length > 20\" mat-icon-button (click)=\"onExpand('du')\">\n              <mat-icon class=\"feature-icon mt-0\">open_in_new</mat-icon>\n            </button>\n          </div>\n          <div class=\"margin-m\">\n            <ng-container [wsResolverWidget]=\"barChartDuData\"> </ng-container>\n          </div>\n        </mat-card>\n      </ng-container>\n      <ng-container>\n        <mat-card class=\"graph-card\">\n          <div class=\"flex flex-between flex-middle mat-toolbar mat-primary\">\n            <div class=\"flex flex-middle p-2\">\n              <mat-icon class=\"feature-icon mt-0\">bar_chart</mat-icon>\n              <p class=\"margin-left-m mat-body-strong margin-remove-bottom\" i18n=\"Participants By Location\">\n                Participants By Location\n              </p>\n            </div>\n            <button *ngIf=\"analyticsData?.participants.location.length > 20\" mat-icon-button\n              (click)=\"onExpand('location')\">\n              <mat-icon class=\"feature-icon mt-0\">open_in_new</mat-icon>\n            </button>\n          </div>\n          <div class=\"m-4\">\n            <ng-container [wsResolverWidget]=\"barChartLocationData\"> </ng-container>\n          </div>\n        </mat-card>\n      </ng-container>\n      <ng-container>\n        <mat-card class=\"graph-card\">\n          <div class=\"flex flex-between flex-middle mat-toolbar mat-primary\">\n            <div class=\"flex flex-middle p-2\">\n              <mat-icon class=\"feature-icon mt-0\">bar_chart</mat-icon>\n              <p class=\"margin-left-m mat-body-strong margin-remove-bottom\" i18n=\"Participants By Account\">\n                Participants By Account\n              </p>\n            </div>\n            <button *ngIf=\"analyticsData?.participants.account.length > 20\" mat-icon-button\n              (click)=\"onExpand('account')\">\n              <mat-icon class=\"feature-icon mt-0\">open_in_new</mat-icon>\n            </button>\n          </div>\n          <div class=\"m-4\">\n            <ng-container [wsResolverWidget]=\"barChartAccountData\"> </ng-container>\n          </div>\n        </mat-card>\n      </ng-container>\n    </div>\n  </ng-container>\n\n  <div class=\"mt-6\" *ngIf=\"isExpandTrue\">\n    <button (click)=\"onClose()\" mat-raised-button i18n-matTooltip=\"back Action Btn Tooltip\" matTooltip=\"back\"\n      color=\"primary\">\n      <mat-icon class=\"mr-1\">arrow_back</mat-icon>\n      Back\n    </button>\n    <ng-container [wsResolverWidget]=\"barChartOnExpandData\"> </ng-container>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industry/industry.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industry/industry.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <a mat-icon-button routerLink=\"/app/infy/navigator\">\n    <mat-icon>arrow_back</mat-icon>\n  </a>\n  <span i18n=\"page title: navigator industries\" class=\"margin-left-xs\">Industries</span>\n  <span class=\"spacer\"></span>\n</mat-toolbar>\n\n<div class=\"margin-bottom-xl\">\n  <div class=\"banner ws-mat-primary-lite-background\">\n    <div class=\"banner-description margin-bottom-m padding-top-m\">\n      <h1 class=\"mat-display-1 margin-bottom-l ws-mat-primary-text text-bold padding-top-l small-banner-text\" i18n>\n        Select an Industry to get started\n      </h1>\n      <h2 i18n class=\"mat-title margin-top-xl\">\n        Get courses based on the selected industry.\n      </h2>\n    </div>\n  </div>\n  <div class=\"grid-display my-10 px-10\">\n    <ng-container *ngFor=\"let tab of tabs\">\n      <div class=\"grid-data\" [ngStyle]=\"tab.style\">\n        {{ tab.name }}\n      </div>\n    </ng-container>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/launchpad/launchpad.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/launchpad/launchpad.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <a mat-icon-button routerLink=\"/app/infy/navigator/\">\n    <mat-icon>arrow_back</mat-icon>\n  </a>\n  <span i18n=\"page title: navigator suggestions\" class=\"margin-left-xs\">\n    Sales Launchpad\n  </span>\n</mat-toolbar>\n\n\n<div class=\"margin-bottom-xl\">\n  <div class=\"banner ws-mat-primary-background-op50\">\n    <div class=\"content-strip margin-bottom-m \">\n      <h1 class=\"mat-display-1 margin-bottom-l ws-mat-primary-text text-bold padding-top-l\" i18n>\n        Onboarding for new joiners\n      </h1>\n      <h2 i18n class=\"mat-title margin-top-xl\">\n        Create goals to track your learning and get certified.\n      </h2>\n    </div>\n  </div>\n  <div *ngIf=\"coursesFetched\" class=\"margin-top-l margin-bottom-l\">\n    <ng-container [wsResolverWidget]=\"coursesResolverData\"></ng-container>\n  </div>\n  <div *ngIf=\"!coursesFetched\" class=\"margin-top-l margin-bottom-l\">\n    <h1 class=\"mat-title flex text-center margin-left-l padding-left-m flex-middle flex-center\" i18n>Coming Soon ...\n    </h1>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/leaders/leaders.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/leaders/leaders.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <a mat-icon-button routerLink=\"/app/infy/navigator\">\n    <mat-icon>arrow_back</mat-icon>\n  </a>\n  <span i18n=\"page title: navigator suggestions\" class=\"margin-left-xs\">For Leaders</span>\n</mat-toolbar>\n\n<div class=\"margin-bottom-xl\">\n  <div class=\"banner ws-mat-primary-background-op50\">\n    <div class=\"content-strip\">\n      <h1 class=\"mat-display-1 margin-bottom-l ws-mat-primary-text text-bold padding-top-l\" i18n>\n        Good News for Business and Technology Leaders\n      </h1>\n      <p class=\"mat-title margin-top-xl\" i18n>\n        Learn the latest technologies and gain competitive advantage\n      </p>\n    </div>\n  </div>\n\n  <div class=\"margin-top-l margin-bottom-l\">\n    <p class=\"mat-h2 text-center\">Select a Pillar</p>\n    <ws-app-pentagon [default]=\"'Accelerate'\" (trackClicked)=\"trackClicked($event)\"></ws-app-pentagon>\n  </div>\n\n  <div class=\"margin-top-xl margin-bottom-xl\">\n    <div class=\"margin-top-m margin-bottom-m margin-left-xl\" *ngIf=\"idsObtained\">\n      <ng-container *ngIf=\"selectedTrack === 'Accelerate'\" [wsResolverWidget]=\"accelerateWidgetResolverData\">\n      </ng-container>\n      <ng-container *ngIf=\"selectedTrack === 'Assure'\" [wsResolverWidget]=\"assureWidgetResolverData\"></ng-container>\n      <ng-container *ngIf=\"selectedTrack === 'Experience'\" [wsResolverWidget]=\"experienceWidgetResolverData\">\n      </ng-container>\n      <ng-container *ngIf=\"selectedTrack === 'Insight'\" [wsResolverWidget]=\"insightWidgetResolverData\"></ng-container>\n      <ng-container *ngIf=\"selectedTrack === 'Innovate'\" [wsResolverWidget]=\"innovateWidgetResolverData\"></ng-container>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/learning-path/components/result/result.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/learning-path/components/result/result.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"mat-primary-lite-background\">\n  <div>\n    <a mat-icon-button routerLink=\"/app/infy/navigator/tech/learning-path/\">\n      <mat-icon>arrow_back</mat-icon>\n    </a>\n    <span i18n=\"page title: navigator explore\" class=\"margin-left-xs\">What Can I Learn? </span>\n  </div>\n</mat-toolbar>\n<mat-sidenav-container class=\"sidenav-container\" autosize *ngIf=\"status === 'done'\">\n  <mat-sidenav #sideNavBar class=\"sidenav\" [opened]=\"sideNavBarOpened\" [mode]=\"screenSizeIsLtMedium ? 'over' : 'side'\">\n    <div class=\"flex flex-between margin-top margin-left-m\">\n      <h2 class=\"mat-h2 text-bold\" i18n>Select Topics</h2>\n      <mat-divider class=\"margin-bottom-m\"></mat-divider>\n\n      <button type=\"button\" (click)=\"sideNavBarOpened = !sideNavBarOpened\" mat-icon-button>\n        <mat-icon>close</mat-icon>\n      </button>\n    </div>\n    <div>\n      <mat-checkbox *ngFor=\"let tech of filterList\" (change)=\"techChange(tech.technologyName)\" [checked]=\"tech.checked\"\n        class=\"width-expand fit-checkbox-to-width\">\n        <span class=\"flex\">\n          <span class=\"width-expand text-truncate mat-subheading-2 filter-name text-bold \">{{\n            tech.technologyName\n          }}</span>\n        </span>\n      </mat-checkbox>\n    </div>\n  </mat-sidenav>\n\n  <mat-sidenav-content class=\"sidenav-content\" *ngIf=\"status === 'done'\">\n    <div class=\"content-strip\" *ngIf=\"suggestedLp.length\">\n      <ng-container>\n        <span class=\"mat-headline text-bold heading ws-mat-primary-text\" i18n>\n          Learning Paths based on your selected topic(s)\n        </span>\n        <button mat-icon-button class=\"width-auto\" [ngClass]=\"{ 'hide-filter-btn': sideNavBarOpened }\"\n          (click)=\"sideNavBarOpened = !sideNavBarOpened\" matTooltip=\"Show Topics\">\n          <mat-icon>filter_list</mat-icon>\n        </button>\n      </ng-container>\n\n      <mat-selection-list #suggestedCheckList class=\"app-class mat-title\">\n        <ng-container *ngFor=\"let lp of suggestedLp\">\n          <mat-list-option checkboxPosition=\"before\" [value]=\"lp?.lp_id\">\n            <div class=\"flex margin-top-m margin-bottom-m topic-container \">\n              <img [src]=\"lp.lp_image\" class=\"member-image\" [wsUtilsDefaultThumbnail]=\"defaultThumbnail\" />\n              <div class=\" margin-left-l  text-truncate topic-text\">\n                <span class=\"ws-mat-primary-text mat-title\">{{ lp.lp_name }}</span>\n\n                <div class=\"flex radio mat-body-1\">\n                  <mat-icon>access_time</mat-icon>\n                  <p class=\"margin-left-xss text-bold mat-h5 margin-remove-bottom\">\n                    {{lp.profiles[0]?.profile_time + ' DAYS' }}</p>\n                </div>\n                <span class=\"mat-subheading-2 text-bold courses-profile\">\n                  {{ lp.lp_description }}\n                </span>\n              </div>\n            </div>\n          </mat-list-option>\n        </ng-container>\n      </mat-selection-list>\n      <div class=\"margin-top-l flex flex-wrap\">\n        <button *ngIf=\"shouldClipSuggested\" mat-raised-button color=\"primary\" (click)=\"viewMoreLp('suggested')\"\n          class=\"margin-right-m\" i18n>\n          View more\n        </button>\n        <button *ngIf=\"displayLessSuggested\" mat-raised-button color=\"primary\" (click)=\"viewLessLp('suggested')\"\n          class=\"margin-left-m\" i18n>\n          View Less\n        </button>\n      </div>\n      <div class=\"text-center margin-top-l\">\n        <button *ngIf=\"!goalsAddingInProgess\" mat-raised-button color=\"primary\"\n          [disabled]=\"!suggestedCheckList.selectedOptions.selected.length\"\n          (click)=\"createGoalClicked(suggestedCheckList.selectedOptions.selected, 'suggested')\" i18n>\n          Create Goal\n        </button>\n        <mat-spinner *ngIf=\"goalsAddingInProgess\" class=\"display-inline-block\"></mat-spinner>\n      </div>\n    </div>\n    <div class=\"content-strip\" *ngIf=\"skillsList?.length && otherLp.length\">\n      <ng-container>\n        <span class=\"mat-headline text-bold heading ws-mat-primary-text\" i18n>\n          Other Learning Paths which you might like\n        </span>\n        <button mat-icon-button class=\"width-auto\" [ngClass]=\"{ 'hide-filter-btn': sideNavBarOpened }\"\n          (click)=\"sideNavBarOpened = !sideNavBarOpened\" matTooltip=\"Show Topics\">\n          <mat-icon>filter_list</mat-icon>\n        </button>\n      </ng-container>\n\n      <mat-selection-list #othersCheckList class=\"app-class\">\n        <ng-container *ngFor=\"let lp of otherLp\">\n          <mat-list-option checkboxPosition=\"before\" [value]=\"lp?.lp_id\">\n            <div class=\"flex margin-top-m margin-bottom-m\">\n              <img [src]=\"lp.lp_image\" class=\"member-image\" [wsUtilsDefaultThumbnail]=\"defaultThumbnail\" />\n              <div class=\" margin-left-l  text-truncate\">\n                <span class=\"ws-mat-primary-text mat-title\">{{ lp.lp_name }}</span>\n\n                <p class=\"flex radio mat-body-1\">\n                  <mat-icon>access_time</mat-icon>\n                  <span class=\"margin-left-xs/2 text-bold\">{{lp.profiles[0]?.profile_time + ' DAYS' }}</span>\n                </p>\n                <span class=\"mat-subheading-2 text-bold courses-profile\">\n                  {{ lp.lp_description }}\n                </span>\n              </div>\n            </div>\n          </mat-list-option>\n        </ng-container>\n        <!-- <ng-container *ngFor=\"let lp of otherLp\">\n          <mat-list-option checkboxPosition=\"before\" [value]=\"lp?.lp_id\">\n            <div class=\"lp-name\">\n              <p class=\"mat-title text-bold checklist\">{{ lp.lp_name }}</p>\n            </div>\n          </mat-list-option>\n          <div class=\"checklist-desc\">\n            <p class=\"flex checklist mat-body-1\">\n              <mat-icon>access_time</mat-icon>\n              <span class=\"margin-left-xs/2 text-bold\">{{\n                lp.profiles[0]?.profile_time + ' DAYS'\n              }}</span>\n            </p>\n            <span class=\"mat-subheading-2 text-bold\">\n              {{ lp.lp_description }}\n            </span>\n          </div>\n          <mat-divider class=\"margin-bottom-m margin-top-m\"></mat-divider>\n        </ng-container> -->\n      </mat-selection-list>\n      <div class=\"margin-top-l flex flex-wrap\">\n        <button *ngIf=\"shouldClipOthers\" mat-raised-button color=\"primary\" (click)=\"viewMoreLp('other')\"\n          class=\"margin-right-m\" i18n>\n          View More\n        </button>\n        <button *ngIf=\"displayLessOthers\" mat-raised-button color=\"primary\" (click)=\"viewLessLp('other')\"\n          class=\"margin-left-m\" i18n>\n          View Less\n        </button>\n      </div>\n      <div class=\"text-center margin-top-l\">\n        <button *ngIf=\"!goalsAddingInProgess && otherLp.length\" mat-raised-button color=\"primary\"\n          [disabled]=\"!othersCheckList.selectedOptions.selected.length\"\n          (click)=\"createGoalClicked(othersCheckList.selectedOptions.selected, 'others')\" i18n>\n          Create Goal\n        </button>\n        <mat-spinner *ngIf=\"goalsAddingInProgess\" class=\"display-inline-block\"></mat-spinner>\n      </div>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/learning-path/learning-path.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/learning-path/learning-path.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <a mat-icon-button routerLink=\"/app/infy/navigator\">\n    <mat-icon>arrow_back</mat-icon>\n  </a>\n  <span i18n=\"page title: navigator suggestions\" class=\"margin-left-xs\">Skill based Suggestions</span>\n</mat-toolbar>\n<div class=\"margin-bottom-xl\">\n  <div class=\"banner ws-mat-primary-background-op50\">\n    <div class=\"banner-description margin-bottom-m padding-top-m\">\n      <h1 class=\"mat-display-1 margin-bottom-l ws-mat-primary-text text-bold padding-top-l small-banner-text\" i18n>\n        What Can I Learn?\n      </h1>\n      <h2 i18n class=\"mat-title margin-top-xl\">\n        Get suggestions based on current skills.\n      </h2>\n    </div>\n  </div>\n  <div class=\"\" *ngIf=\"!technologies.length\">\n    <h2 class=\"mat-display-1 text-center margin-top-xl\" i18n>Please wait while we are getting the data</h2>\n  </div>\n  <div class=\"margin-top-l margin-bottom-l padding-left-l padding-right-l\" *ngIf=\"technologies.length\">\n    <h1 class=\"mat-headline ws-mat-primary-text padding-top-xs padding-bottom-l padding-left-l\" i18n>Select topics to\n      get suggestions</h1>\n    <!-- <div [ngClass]=\"{ scrollable: isMobile }\"> -->\n    <!-- <div *ngIf=\"searchInProgress\" class=\"margin-top-xl\"> -->\n    <!-- <mat-spinner></mat-spinner> -->\n    <!-- </div> -->\n    <h2 class=\"heading uk-position-center\" *ngIf=\"!searchInProgress && technologies?.length === 0\" i18n>\n      No Results for your search\n    </h2>\n    <div class=\"padding-left-l margin-left-l margin-right-l\">\n      <mat-chip-list>\n        <ng-container *ngFor=\"let tech of technologies\">\n          <mat-chip class=\"mat-chips padding-left-m padding-right-m\" *ngIf=\"isSelected(tech)\" color=\"primary\" selected\n            (click)=\"toggleChipSelection(tech)\">\n            {{ tech }}\n            <mat-icon matChipRemove (click)=\"toggleChipSelection(tech)\">cancel</mat-icon>\n          </mat-chip>\n          <mat-chip *ngIf=\"!isSelected(tech)\" (click)=\"toggleChipSelection(tech)\">{{ tech }}</mat-chip>\n        </ng-container>\n      </mat-chip-list>\n    </div>\n    <!-- </div> -->\n  </div>\n  <div class=\"text-center\" *ngIf=\"technologies.length\">\n    <button mat-raised-button [disabled]=\"!selectedTechChips?.size\" color=\"primary\" (click)=\"navigateToSuggestions()\"\n      i18n>\n      Get Suggestions\n    </button>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/lp-details/components/lp-card/lp-card.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/lp-details/components/lp-card/lp-card.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-container\">\n  <mat-card>\n    <div class=\"card\">\n      <div class=\"width-auto\" [matTooltip]=\"navigatorCard.title\">\n        <img class=\"card-image\" [src]=\"navigatorCard.thumbnail\" [alt]=\"navigatorCard.title\"\n          *ngIf=\"navigatorCard.thumbnail != ''\" />\n      </div>\n      <div class=\"card-information\">\n        <div class=\"mat-headline title text-truncate\">{{ navigatorCard.title }}</div>\n        <div class=\"mat-body-1 title \">{{ navigatorCard.description | pipeLimitTo: 138 }}</div>\n        <div class=\"button-holder\">\n          <button mat-flat-button (click)=\"launchCertification()\">\n            <span class=\"mat-subheading-1 ws-mat-primary-text font-weight-bold\" i18n>LAUNCH NOW</span>\n            <mat-icon color=\"primary\" class=\"font-weight-bold\">play_arrow</mat-icon>\n          </button>\n\n        </div>\n      </div>\n    </div>\n  </mat-card>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/lp-details/lp-details.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/lp-details/lp-details.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" *ngIf=\"fetchStatus === 'done'\">\n  <a mat-icon-button routerLink=\"/app/infy/navigator/explore\">\n    <mat-icon>arrow_back</mat-icon>\n  </a>\n  <span class=\"margin-left-xs\">{{\n    learningPath.lp_name\n  }}</span>\n</mat-toolbar>\n\n<div class=\"margin-bottom-xl\">\n  <div class=\"banner ws-mat-primary-background-op50\">\n    <div class=\"banner-description margin-bottom-m padding-top-m\">\n      <h1 class=\"mat-display-1 margin-bottom-l ws-mat-primary-text text-bold padding-top-l small-banner-text\" i18n>\n        Choose a profile below to discover the courses that you need to learn\n      </h1>\n      <h2 i18n class=\"mat-title margin-top-xl\">\n        Create goals to track your learning and get certified.\n      </h2>\n    </div>\n  </div>\n  <div class=\"margin-top-xl description \">\n    <div class=\"mat-subheading-2 text-bold\">\n      <ng-container *ngIf=\"learningPath\">\n        {{ learningPath.lp_description }}\n      </ng-container>\n    </div>\n    <div class=\"margin-top-l\">\n      <h1 class=\"mat-headline padding-top-l text-bold\" i18n>\n        Profiles for the selected Learning Path\n      </h1>\n      <mat-radio-group>\n        <ng-container *ngFor=\"let profile of learningPath?.profiles; let idx = index\">\n          <mat-radio-button name=\"profile\" [value]=\"profile?.profile_id\" [checked]=\"idx === 0\"\n            (change)=\"onProfileChange(profile?.profile_id)\" class=\"mat-title ws-mat-primary-text\">\n            {{ profile?.profile_display_name }}\n          </mat-radio-button>\n          <div class=\"radio-desc\">\n            <p class=\"flex radio mat-body-1\">\n              <mat-icon>access_time</mat-icon>\n              <span class=\"margin-left-xs/2 text-bold\">{{ profile.profile_time + ' DAYS' }}</span>\n            </p>\n            <span class=\"mat-subheading-2 text-bold courses-profile\"\n              *ngFor=\"let course of (learningPath?.profiles)[idx].courses; let cIdx = index\">\n              {{ course.course_name }}\n              <ng-container *ngIf=\"cIdx < (learningPath?.profiles)[idx].courses.length - 1\">,\n              </ng-container>\n            </span>\n          </div>\n          <mat-divider class=\"margin-bottom-l\"></mat-divider>\n        </ng-container>\n      </mat-radio-group>\n    </div>\n    <div class=\"text-center margin-top-xl\">\n      <button *ngIf=\"!goalsAddingInProgess\" mat-raised-button color=\"primary\" (click)=\"createGoalClicked()\">\n        Create Goal\n      </button>\n      <mat-spinner *ngIf=\"goalsAddingInProgess\" class=\"display-inline-block\"></mat-spinner>\n    </div>\n    <div *ngIf=\"coursesFetched\">\n      <ng-container [wsResolverWidget]=\"coursesResolverData\"></ng-container>\n    </div>\n    <div class=\"margin-top-m practice-certification\">\n      <div class=\"margin-top-l\" *ngIf=\"playgroundData.length\">\n        <h1 class=\"mat-headline padding-top-l text-bold padding-left-l\" i18n>Practice</h1>\n        <div class=\"card-holder\">\n          <ng-container *ngFor=\"let playItem of playgroundData\">\n            <ws-app-lp-card [navigatorCard]=\"playItem\"></ws-app-lp-card>\n          </ng-container>\n        </div>\n      </div>\n      <div class=\"margin-top-l\" *ngIf=\"certificationData.length\">\n        <h1 class=\"mat-headline padding-top-l text-bold padding-left-l\" i18n>Certification</h1>\n        <div class=\"card-holder\">\n          <ng-container *ngFor=\"let certData of certificationData\">\n            <ws-app-lp-card [navigatorCard]=\"certData\"></ws-app-lp-card>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/navigator-home/components/feature-card/feature-card.component.html":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/navigator-home/components/feature-card/feature-card.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card\n  class=\"feature-container position-relative  ws-mat-primary-border-top-bolder\"\n  [ngClass]=\"{ disable: !active }\"\n>\n  <a [routerLink]=\"url\" [queryParams]=\"{ id: groupId }\">\n    <div class=\"card-header ws-mat-primary-background\"></div>\n    <div class=\"flex height-1-1\">\n      <div class=\"width-1-1 text-left\">\n        <div class=\"flex\">\n          <h2 class=\"mat-h2 card-title width-expand card-txt ws-mat-primary-text\">\n            {{ name }}\n          </h2>\n          <mat-icon class=\"ws-mat-primary-text\">play_arrow</mat-icon>\n        </div>\n        <p class=\"margin-remove card-txt mat-subheading-1 text-bold\">{{ description }}</p>\n      </div>\n    </div>\n  </a>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/navigator-home/navigator-home.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/navigator-home/navigator-home.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"ws-mat-light-background\" [ngStyle]=\"configSvc?.pageNavBar?.styles\">\n  <ws-widget-btn-page-back [widgetData]=\"{ url: '/page/home' }\"></ws-widget-btn-page-back>\n  <span class=\"margin-left-s\" i18n>Navigator</span>\n</mat-toolbar>\n\n<div class=\"\">\n  <mat-tab-group\n    animationDuration=\"0ms\"\n    class=\"mat-tab-labels\"\n    mat-stretch-tabs\n    [selectedIndex]=\"selectedIndex\"\n    (selectedTabChange)=\"selectedIndex = $event.index\"\n  >\n    <mat-tab label=\"Tech Navigator\" *ngIf=\"navigatorTabs && navigatorTabs?.techNavigator\">\n      <div class=\"flex flex-middle margin-left-l margin-top-l padding-left-l\">\n        <div>\n          <mat-icon class=\"padding-right-s margin-left-l margin-top-l\">important_devices</mat-icon>\n        </div>\n        <div class=\"margin-top-s\">\n          <span class=\"mat-headline\">\n            Tech Navigator\n          </span>\n        </div>\n      </div>\n      <div class=\"flex flex-start flex-wrapped margin-m padding-left-l\">\n        <div *ngIf=\"navigatorCards?.techNavigator?.newServices\" class=\"card-section\">\n          <ws-app-feature-card\n            url=\"/app/infy/navigator/roles\"\n            i18n-name\n            i18n-description\n            name=\"Get Refactored into New Services\"\n            description=\"Explore learning paths based on Industry needs\"\n          >\n          </ws-app-feature-card>\n        </div>\n        <div *ngIf=\"navigatorCards?.techNavigator?.explore\" class=\"card-section\">\n          <ws-app-feature-card\n            url=\"/app/infy/navigator/explore\"\n            i18n-name\n            i18n-description\n            name=\"Explore\"\n            description=\"Explore and Acquire Skills Based on Your Interest\"\n          >\n          </ws-app-feature-card>\n        </div>\n        <div *ngIf=\"navigatorCards?.techNavigator?.whatYouKnow\" class=\"card-section\">\n          <ws-app-feature-card\n            url=\"/app/infy/navigator/tech/learning-path\"\n            i18n-name\n            i18n-description\n            name=\"Build on what you know\"\n            description=\"Get Suggestions Based on Your Current Skills\"\n          >\n          </ws-app-feature-card>\n        </div>\n        <div *ngIf=\"navigatorCards?.techNavigator?.industries\" class=\"card-section\">\n          <ws-app-feature-card\n            url=\"/app/infy/navigator/industries\"\n            i18n-name\n            i18n-description\n            name=\"Get ready for your Industries\"\n            description=\"Get up-to-date on Industry verticals and related tech skills\"\n          >\n          </ws-app-feature-card>\n        </div>\n        <div *ngIf=\"navigatorCards?.techNavigator?.leaders\" class=\"card-section\">\n          <ws-app-feature-card\n            url=\"/app/infy/navigator/leaders\"\n            i18n-name\n            i18n-description\n            name=\"Courses for Leaders\"\n            description=\"Learn the latest technologies and gain competitive advantage\"\n          >\n          </ws-app-feature-card>\n        </div>\n      </div>\n    </mat-tab>\n    <mat-tab label=\"Sales Navigator\" *ngIf=\"navigatorTabs && navigatorTabs?.salesNavigator\">\n      <div class=\"flex flex-middle margin-left-l margin-top-l padding-left-l\">\n        <div>\n          <mat-icon class=\"padding-right-s margin-top\">trending_up</mat-icon>\n        </div>\n        <div class=\"category-title\">\n          <span class=\"mat-headline\">\n            Sales Navigator\n          </span>\n        </div>\n      </div>\n\n      <div class=\"flex flex-start flex-wrapped margin-m padding-left-l\">\n        <div *ngIf=\"navigatorCards?.salesNavigator?.tipOfSpear\" class=\"card-section\">\n          <ws-app-feature-card\n            url=\"/app/toc/lex_auth_0126130158325104641110/overview\"\n            i18n-name\n            i18n-description\n            name=\"Tip Of the Spear (TOST)\"\n            description=\"Become an effective front line sales leader\"\n          >\n          </ws-app-feature-card>\n        </div>\n        <div *ngIf=\"navigatorCards?.salesNavigator?.readyForIndustries\" class=\"card-section\">\n          <ws-app-feature-card\n            url=\"/app/infy/navigator/industries\"\n            i18n-name\n            i18n-description\n            name=\"Get Ready for your Industries\"\n            description=\"Get up-to-date on Industry verticals and related tech skills\"\n          >\n          </ws-app-feature-card>\n        </div>\n        <div *ngIf=\"navigatorCards?.salesNavigator?.digitalForSale\" class=\"card-section\">\n          <ws-app-feature-card\n            url=\"/app/infy/navigator/leaders\"\n            i18n-name\n            i18n-description\n            name=\"Digital for Sales\"\n            description=\"Learn the latest technologies and gain competitive advantage\"\n          ></ws-app-feature-card>\n        </div>\n        <div *ngIf=\"navigatorCards?.salesNavigator?.titanAccounts\" class=\"card-section\">\n          <ws-app-feature-card\n            url=\"/app/infy/navigator/accounts/COMMUNICATIONS\"\n            i18n-name\n            i18n-description\n            name=\"Titan Accounts\"\n            description=\"Account based Learning and Sharing\"\n          ></ws-app-feature-card>\n        </div>\n      </div>\n    </mat-tab>\n    <mat-tab\n      label=\"Onboarding Navigator\"\n      *ngIf=\"navigatorTabs && navigatorTabs?.onboardingNavigator\"\n    >\n      <div class=\"flex flex-middle margin-left-l margin-top-l padding-left-l\">\n        <div>\n          <mat-icon class=\"padding-right-s margin-top\">people</mat-icon>\n        </div>\n        <div>\n          <span class=\"mat-headline\" i18n>\n            Onboarding Navigator\n          </span>\n        </div>\n      </div>\n      <div class=\"flex flex-start flex-wrapped margin-m padding-left-l\">\n        <div *ngIf=\"navigatorCards?.onboardingNavigator?.salesLaunchpad\" class=\"card-section\">\n          <ws-app-feature-card\n            url=\"/app/infy/navigator/sales/launchpad\"\n            i18n-name\n            i18n-description\n            name=\"Sales Launchpad\"\n            description=\"Onboarding for new joiners\"\n          ></ws-app-feature-card>\n        </div>\n        <div *ngIf=\"navigatorCards?.onboardingNavigator?.cohortLearning\" class=\"card-section\">\n          <ws-app-feature-card\n            url=\"/page/cohort\"\n            i18n-name\n            i18n-description\n            name=\"Cohort Learning\"\n            description=\"Relive targeted in-person cohort learning\"\n          ></ws-app-feature-card>\n        </div>\n        <div *ngIf=\"navigatorCards?.onboardingNavigator?.roleInduction\" class=\"card-section\">\n          <ws-app-feature-card\n            url=\"/page/onboarding\"\n            i18n-name\n            i18n-description\n            name=\"Role Induction\"\n            description=\"Transition into your new role effectively\"\n          ></ws-app-feature-card>\n        </div>\n        <div *ngIf=\"navigatorCards?.onboardingNavigator?.bridgeWingspan\" class=\"card-section\">\n          <ws-app-feature-card\n            url=\"/app/toc/lex_14700930272894420000/overview\"\n            i18n-name\n            i18n-description\n            name=\"Bridge Wingspan\"\n            description=\"Get ready to move to Sales career stream\"\n          ></ws-app-feature-card>\n        </div>\n      </div>\n    </mat-tab>\n    <mat-tab\n      label=\"BPM Navigator\"\n      *ngIf=\"navigatorTabs && navigatorTabs?.bpmNavigator && status === 'done'\"\n    >\n      <div class=\"flex flex-middle margin-left-l margin-top-l padding-left-l\">\n        <div class=\"flex justify-center flex-middle\">\n          <mat-icon class=\"padding-right-s\">important_devices</mat-icon>\n          <span class=\"mat-headline margin-remove-bottom\" i18n>\n            BPM Navigator\n          </span>\n        </div>\n      </div>\n      <ng-container>\n        <div class=\"flex flex-start flex-wrapped margin-m padding-left-l\">\n          <div class=\"card-section\" *ngFor=\"let bpm of bpmData\">\n            <ws-app-feature-card\n              url=\"/app/infy/navigator/bpm\"\n              i18n-name\n              i18n-description\n              name=\"{{ bpm.group_heading }}\"\n              description=\"{{ bpm.group_description }}\"\n              [active]=\"bpm.is_active\"\n              [groupId]=\"bpm.groupd_id\"\n            >\n            </ws-app-feature-card>\n          </div>\n        </div>\n      </ng-container>\n    </mat-tab>\n  </mat-tab-group>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/role/role-details/role-details.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/role/role-details/role-details.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"fetchStatus === 'done'\">\n  <mat-toolbar class=\"ws-mat-light-background\" [ngStyle]=\"configSvc?.pageNavBar?.styles\">\n    <ws-widget-btn-page-back [widgetData]=\"{ url: 'back' }\"></ws-widget-btn-page-back>\n    <span class=\"margin-left-s\">{{lpData.lp_name}}</span>\n  </mat-toolbar>\n\n\n\n  <div class=\"banner ws-mat-primary-background-op50\">\n    <div class=\"content-strip margin-bottom-m \">\n      <h1 class=\"mat-display-1 margin-bottom-l ws-mat-primary-text text-bold padding-top-l margin-bottom-remove\">\n        {{lpData.lp_name}}\n      </h1>\n      <h2 class=\"mat-title margin-top-xs description\">\n        {{lpData.lp_description}}\n      </h2>\n    </div>\n  </div>\n\n  <div *ngIf=\"fetchStatus === 'done'\">\n    <ng-container *ngIf=\"hasCourses\" [wsResolverWidget]=\"coursesResolverData\"></ng-container>\n    <div *ngIf=\"!hasCourses\" class=\"margin-top-xl margin-bottom-xl\">\n      <p class=\"mat-h2 text-center font-weight-500\">Courses are Coming Soon..</p>\n    </div>\n  </div>\n\n  <div *ngIf=\"fetchStatus === 'done'\" class=\"margin-top-s\">\n    <div *ngIf=\"hasCertifications\">\n      <ng-container [wsResolverWidget]=\"certificationsResolverData\"></ng-container>\n      <ng-container [wsResolverWidget]=\"alternateCertificationsResolverData\"></ng-container>\n    </div>\n    <div *ngIf=\"!hasCertifications\" class=\"margin-top-l margin-bottom-l\">\n      <p class=\"mat-h2 text-center font-weight-500\">Certifications are Coming Soon..</p>\n    </div>\n  </div>\n\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/role/role.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/role/role.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" *ngIf=\"fetchStatus === 'done'\">\n  <a mat-icon-button routerLink=\"/app/infy/navigator/roles\">\n    <mat-icon>arrow_back</mat-icon>\n  </a>\n  <span class=\"margin-left-xs\">{{ selectedRole.role_name }}</span>\n</mat-toolbar>\n\n<div class=\"margin-bottom-xl\">\n  <div class=\"banner ws-mat-primary-background-op50\">\n    <div class=\"content-strip margin-bottom-m \">\n      <h1 class=\"mat-display-1 margin-bottom-l ws-mat-primary-text text-bold padding-top-l\" i18n>\n        Learning Paths in the Selected Offering\n      </h1>\n      <h2 i18n class=\"mat-title margin-top-xl\">\n        Create goals to track your learning and get certified.\n      </h2>\n    </div>\n  </div>\n  <div class=\"margin-top-xl description\" *ngIf=\"fetchStatus === 'done'\">\n    <div class=\"mat-subheading-2 text-bold\">{{ selectedRole.role_description }}</div>\n    <div class=\"margin-top-m\" *ngFor=\"let group of selectedVariant?.group; let idx = index\">\n      <h1 class=\"mat-headline padding-top-l text-bold margin-bottom-xs\">\n        {{ group.lp_groupname }} Certification\n        <span class=\"mat-subheading-2 text-bold margin-left-xs\" *ngIf=\"group.certification_mandatory\">\n          (Mandatory)\n        </span>\n        <span class=\"mat-subheading-2 text-bold margin-left-xs\" *ngIf=\"!group.certification_mandatory\">\n          (Optional)\n        </span>\n      </h1>\n\n      <h2 class=\"mat-title marg\">{{ group.lp_groupdesc }}</h2>\n\n      <mat-radio-group *ngIf=\"fetchStatus === 'done' && groupMemberData[idx].length > 1\">\n        <ng-container *ngFor=\"let member of groupMemberData[idx]; let memberIdx = index\">\n          <mat-radio-button name=\"member.lp_name\" [value]=\"member.lp_id\" [checked]=\"memberIdx === 0\" (change)=\"groupMemberChanged(memberIdx)\"\n            class=\"mat-title\">\n            <div class=\"flex margin-top-m margin-bottom-m\">\n              <img [src]=\"member.lp_image\" class=\"member-image\" [wsUtilsDefaultThumbnail]=\"defaultThumbnail\" />\n              <div class=\" margin-left-l  text-truncate\">\n                <span class=\"ws-mat-primary-text\">{{ member.lp_name }}</span>\n\n                <p class=\"flex radio mat-body-1\">\n                  <mat-icon>access_time</mat-icon>\n                  <span class=\"margin-left-xs/2 text-bold mat-h5 margin-remove\">10 DAYS</span>\n                </p>\n                <div class=\"mat-subheading-2 text-bold text-truncate margin-top-s\">\n                  {{ member.lp_description }}\n                </div>\n                <button mat-raised-button color=\"primary\" class=\"left margin-bottom-xs\">\n                  <a [routerLink]=\"'/app/infy/navigator/role-details/' + selectedVariant?.variant_id\" [queryParams]=\"{id: member.lp_id}\">Know More\n                  </a>\n                </button>\n              </div>\n            </div>\n          </mat-radio-button>\n\n          <mat-divider class=\"margin-bottom-m\"></mat-divider>\n        </ng-container>\n      </mat-radio-group>\n      <ng-container *ngIf=\"groupMemberData[idx].length === 1\">\n        <div *ngFor=\"let member of groupMemberData[idx]; let memberIdx = index\" class=\"mat-title margin-top-xl\">\n          <div class=\"flex margin-top-m margin-bottom-m\">\n            <img [src]=\"member.lp_image\" [wsUtilsDefaultThumbnail]=\"defaultThumbnail\" class=\"member-image\" />\n            <div class=\" margin-left-l  text-truncate\">\n              <span class=\"ws-mat-primary-text\">{{ member.lp_name }}</span>\n\n              <p class=\"flex radio mat-body-1\">\n                <mat-icon>access_time</mat-icon>\n                <span class=\"margin-left-xs/2 text-bold mat-h5 margin-remove\" i18n>10 DAYS</span>\n              </p>\n              <div class=\"mat-subheading-2 text-bold text-truncate\">\n                {{ member.lp_description }}\n              </div>\n              <button mat-raised-button color=\"primary\" class=\"left margin-bottom-xs\">\n                <a [routerLink]=\"'/app/infy/navigator/role-details/' + selectedVariant?.variant_id\" [queryParams]=\"{id: member.lp_id}\">Know More\n                </a>\n              </button>\n            </div>\n          </div>\n          <mat-divider class=\"margin-bottom-m\"></mat-divider>\n        </div>\n      </ng-container>\n      <div class=\"text-right margin-top-xl\">\n        <button *ngIf=\"!goalsAddingInProgess\" mat-raised-button color=\"primary\" (click)=\"createGoalClicked(group)\" i18n>\n          Add to Goal\n        </button>\n        <mat-spinner *ngIf=\"goalsAddingInProgess\" class=\"display-inline-block\"></mat-spinner>\n      </div>\n    </div>\n    <div class=\"margin-top-xl margin-bottom-xl mat-headline text-bold\">\n      <p class=\"mat-headline text-bold margin-bottom-l margin-left-xl\" i18n *ngIf=\"hasCertifications\">\n        Certifications Based on the Selected Learning\n        <ng-container *ngIf=\"selectedMemberList.length >1\">Paths\n        </ng-container>\n        <ng-container *ngIf=\"selectedMemberList.length == 1\">Path\n        </ng-container>\n      </p>\n      <div class=\"flex flex-wrapped margin-left-xl\">\n        <div>\n          <!-- <mat-chip-list>\n            <div class=\"margin-left-xl flexflex-wrapped\">\n              <mat-chip *ngFor=\"let member of selectedMemberList\">\n                {{ member }}\n              </mat-chip>\n            </div>\n          </mat-chip-list> -->\n        </div>\n        <div class=\"flex alternatives\" *ngIf=\"hasAlternatives && hasCertifications\">\n          <button mat-raised-button color=\"primary\" (click)=\"displayAlternatives()\">\n            <p class=\"margin-remove\" *ngIf=\"!showAlternatives\">Show Alternatives</p>\n            <p class=\"margin-remove\" *ngIf=\"showAlternatives\">Hide Alternatives</p>\n          </button>\n        </div>\n      </div>\n      <div *ngIf=\"fetchStatus === 'done'\" class=\"margin-top-m\">\n        <ng-container [wsResolverWidget]=\"certificationsResolverData\"></ng-container>\n      </div>\n      <div *ngIf=\"showAlternatives\">\n        <ng-container [wsResolverWidget]=\"alternateCertificationsResolverData\"></ng-container>\n      </div>\n\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/roles/components/role-card/role-card.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/roles/components/role-card/role-card.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"card-container\" *ngIf=\"roleOffering\">\n  <div [routerLink]=\"'/app/infy/navigator/role/' + roleOffering.role_id\"\n    [queryParams]=\"{ variant: selectedVariant?.variant_id }\" class=\"width-auto cursor-pointer\">\n    <img class=\"card-image\" [src]=\"roleOffering.role_image\" [alt]=\"roleOffering.role_name\"\n      *ngIf=\"roleOffering.role_image != ''\" [wsUtilsDefaultThumbnail]=\"defaultThumbnail\" />\n  </div>\n  <div class=\"card-information\">\n    <div class=\"mat-headline title text-truncate\">{{ roleOffering.role_name }}</div>\n    <div class=\"mat-body-1 title description\" *ngIf=\"roleOffering.variants.length >= 2\">\n      {{ roleOffering.role_description | pipeLimitTo: 137 }}\n    </div>\n    <div class=\"mat-body-1 title description\" *ngIf=\"roleOffering.variants.length <= 1\">\n      {{ roleOffering.role_description | pipeLimitTo: 298 }}\n    </div>\n    <div class=\"radio-buttons\">\n      <mat-radio-group *ngIf=\"allVariants.length > 1\" class=\"radio-buttons\">\n        <div class=\"mat-subheading-1 ws-mat-primary-text margin-left-xs font-weight-bold margin-bottom-xs\"\n          *ngIf=\"allVariants.length <= 3\">\n          Showing {{ variants.length }} variants\n        </div>\n        <div class=\"mat-subheading-1 ws-mat-primary-text margin-left-xs font-weight-bold margin-bottom-xs\"\n          *ngIf=\"allVariants.length > 3\">\n          Showing {{ variants.length }} of {{ allVariants.length }} variants\n        </div>\n        <mat-radio-button *ngFor=\"let variant of variants; let idx = index\" color=\"primary\"\n          class=\"variant-radio-label mat-body\" [name]=\"variant.variant_name\" [value]=\"variant.variant_id\"\n          [checked]=\"selectedVariant.variant_id === variant.variant_id\" (change)=\"onSelectionChange(variant)\">\n          {{ variant.variant_name }}</mat-radio-button>\n      </mat-radio-group>\n    </div>\n  </div>\n  <div class=\"grid\">\n    <div class=\"flex\" [ngClass]=\"{'flex-between': showLess, 'flex-end' : !showLess}\">\n      <div class=\"flex \" *ngIf=\"showLess\">\n        <button class=\"ws-mat-border flex-end\" mat-button *ngIf=\"allVariants.length > 3\"\n          (click)=\"changeVariants('prev')\">\n          <mat-icon class=\"small-icon\">keyboard_arrow_left</mat-icon>\n\n          Prev\n        </button>\n      </div>\n      <div class=\"flex flex-end\" *ngIf=\"showMore\">\n        <button class=\"ws-mat-border\" style mat-button *ngIf=\"allVariants.length > 3\" (click)=\"changeVariants('next')\">\n          Next\n          <mat-icon class=\"small-icon\">keyboard_arrow_right</mat-icon>\n        </button>\n      </div>\n    </div>\n    <div class=\"button-holder\">\n      <button mat-flat-button class=\"margin-top-xs\">\n        <a mat-flat-button class=\"ws-mat-primary-border margin-right-s padding-left-xs padding-right-xs\"\n          [routerLink]=\"'/app/infy/navigator/role/' + roleOffering.role_id\"\n          [queryParams]=\"{ variant: selectedVariant?.variant_id }\">\n          <span class=\"mat-subheading-1 ws-mat-primary-text font-weight-bold\" i18n>PURSUE OFFERING</span>\n          <mat-icon color=\"primary\" class=\"font-weight-bold\">play_arrow</mat-icon>\n        </a>\n      </button>\n    </div>\n  </div>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/roles/roles.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/roles/roles.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <div>\n    <a mat-icon-button routerLink=\"/app/infy/navigator\">\n      <mat-icon>arrow_back</mat-icon>\n    </a>\n    <span i18n=\"page title: navigator explore\" class=\"margin-left-xs\">Offerings</span>\n  </div>\n</mat-toolbar>\n\n<div class=\"headings mat-headline  margin-top\">\n  <div *ngIf=\"status === 'done'\">\n    <div class=\"toolbar\">\n      <p class=\"mat-title\" i18n>\n        Explore learning paths for new service offerings based on Industry trends\n      </p>\n    </div>\n    <div class=\"margin-top-l\">\n      <p class=\"mat-h2 text-center\" i18n>Select a Pillar</p>\n      <ws-app-pentagon [default]=\"'Accelerate'\" (trackClicked)=\"trackClicked($event)\"></ws-app-pentagon>\n    </div>\n    <div class=\"role\">\n      <p class=\"mat-headline ws-mat-primary-text\">{{selectedTrack}}</p>\n      <div>\n        <ws-utils-horizontal-scroller [loadStatus]=hasMore>\n          <div *ngIf=\"currentTrackData\" class=\"card-holder\" #cardContents>\n            <ng-container *ngFor=\"let roles of currentTrackData\">\n              <ws-app-role-card [roleOffering]=\"roles\"></ws-app-role-card>\n            </ng-container>\n          </div>\n        </ws-utils-horizontal-scroller>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/components/multiline-snackbar/multiline-snackbar.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/components/multiline-snackbar/multiline-snackbar.component.scss ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3IvY29tcG9uZW50cy9tdWx0aWxpbmUtc25hY2tiYXIvbXVsdGlsaW5lLXNuYWNrYmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/components/multiline-snackbar/multiline-snackbar.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/components/multiline-snackbar/multiline-snackbar.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: MultilineSnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultilineSnackbarComponent", function() { return MultilineSnackbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let MultilineSnackbarComponent = class MultilineSnackbarComponent {
    constructor(snackbarLines) {
        this.snackbarLines = snackbarLines;
    }
    ngOnInit() { }
};
MultilineSnackbarComponent.ctorParameters = () => [
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"],] }] }
];
MultilineSnackbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-multiline-snackbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./multiline-snackbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/components/multiline-snackbar/multiline-snackbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./multiline-snackbar.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/navigator/components/multiline-snackbar/multiline-snackbar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"]))
], MultilineSnackbarComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/navigator-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/navigator-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: NavigatorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorRoutingModule", function() { return NavigatorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _routes_navigator_home_navigator_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/navigator-home/navigator-home.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/navigator-home/navigator-home.component.ts");
/* harmony import */ var _routes_industries_industries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/industries/industries.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industries/industries.component.ts");
/* harmony import */ var _routes_explore_explore_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/explore/explore.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/explore/explore.component.ts");
/* harmony import */ var _routes_roles_roles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/roles/roles.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/roles/roles.component.ts");
/* harmony import */ var _routes_leaders_leaders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/leaders/leaders.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/leaders/leaders.component.ts");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _routes_learning_path_learning_path_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/learning-path/learning-path.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/learning-path/learning-path.component.ts");
/* harmony import */ var _routes_learning_path_components_result_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/learning-path/components/result/result.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/learning-path/components/result/result.component.ts");
/* harmony import */ var _resolvers_search_result_resolve__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resolvers/search-result.resolve */ "./project/ws/app/src/lib/routes/infy/routes/navigator/resolvers/search-result.resolve.ts");
/* harmony import */ var _routes_account_details_account_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes/account-details/account-details.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/account-details/account-details.component.ts");
/* harmony import */ var _routes_role_role_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes/role/role.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/role/role.component.ts");
/* harmony import */ var _routes_lp_details_lp_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes/lp-details/lp-details.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/lp-details/lp-details.component.ts");
/* harmony import */ var _routes_fullstack_program_fullstack_program_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routes/fullstack-program/fullstack-program.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fullstack-program/fullstack-program.component.ts");
/* harmony import */ var _routes_launchpad_launchpad_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./routes/launchpad/launchpad.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/launchpad/launchpad.component.ts");
/* harmony import */ var _routes_fs_home_fs_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./routes/fs-home/fs-home.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fs-home/fs-home.component.ts");
/* harmony import */ var _routes_industry_analytics_industry_analytics_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./routes/industry-analytics/industry-analytics.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industry-analytics/industry-analytics.component.ts");
/* harmony import */ var _routes_role_role_details_role_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./routes/role/role-details/role-details.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/role/role-details/role-details.component.ts");
/* harmony import */ var _routes_bpm_details_bpm_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./routes/bpm-details/bpm-details.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/bpm-details/bpm-details.component.ts");





















const API_SERVER_BASE = '/apis';
const PROXIES_SLAG_V8 = `${API_SERVER_BASE}/proxies/v8`;
const routes = [
    {
        path: '',
        component: _routes_navigator_home_navigator_home_component__WEBPACK_IMPORTED_MODULE_3__["NavigatorHomeComponent"],
        data: {
            pageType: 'feature',
            pageKey: 'navigator',
        },
        resolve: {
            pageData: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_8__["PageResolve"],
        },
    },
    {
        path: 'accounts',
        component: _routes_account_details_account_details_component__WEBPACK_IMPORTED_MODULE_12__["AccountDetailsComponent"],
        data: {
            pageUrl: `${PROXIES_SLAG_V8}/web-hosted/navigator/json/accounts_data`,
        },
        resolve: {
            pageData: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_8__["PageResolve"],
        },
    },
    {
        path: 'accounts/:tab',
        component: _routes_account_details_account_details_component__WEBPACK_IMPORTED_MODULE_12__["AccountDetailsComponent"],
        data: {
            pageUrl: `${PROXIES_SLAG_V8}/web-hosted/navigator/json/accounts_data`,
        },
        resolve: {
            pageData: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_8__["PageResolve"],
        },
    }, {
        path: 'bpm',
        component: _routes_bpm_details_bpm_details_component__WEBPACK_IMPORTED_MODULE_20__["BpmDetailsComponent"],
    },
    {
        path: 'explore',
        component: _routes_explore_explore_component__WEBPACK_IMPORTED_MODULE_5__["ExploreComponent"],
    },
    {
        path: 'fs/all',
        component: _routes_fs_home_fs_home_component__WEBPACK_IMPORTED_MODULE_17__["FsHomeComponent"],
    },
    {
        path: 'fs/program/:id',
        component: _routes_fullstack_program_fullstack_program_component__WEBPACK_IMPORTED_MODULE_15__["FullstackProgramComponent"],
    },
    {
        path: 'industries',
        component: _routes_industries_industries_component__WEBPACK_IMPORTED_MODULE_4__["IndustriesComponent"],
        data: {
            pageUrl: `${PROXIES_SLAG_V8}/web-hosted/navigator/json/industries_data`,
        },
        resolve: {
            pageData: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_8__["PageResolve"],
        },
    },
    {
        path: 'analytics/:tag',
        component: _routes_industry_analytics_industry_analytics_component__WEBPACK_IMPORTED_MODULE_18__["IndustryAnalyticsComponent"],
    },
    {
        path: 'industries/:tab',
        component: _routes_industries_industries_component__WEBPACK_IMPORTED_MODULE_4__["IndustriesComponent"],
        data: {
            pageUrl: `${PROXIES_SLAG_V8}/web-hosted/navigator/json/industries_data`,
        },
        resolve: {
            pageData: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_8__["PageResolve"],
        },
    },
    {
        path: 'leaders',
        component: _routes_leaders_leaders_component__WEBPACK_IMPORTED_MODULE_7__["LeadersComponent"],
        data: {
            pageUrl: `${PROXIES_SLAG_V8}/web-hosted/navigator/json/dmdata`,
        },
        resolve: {
            pageData: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_8__["PageResolve"],
        },
    },
    {
        path: 'lp/:id',
        component: _routes_lp_details_lp_details_component__WEBPACK_IMPORTED_MODULE_14__["LpDetailsComponent"],
        data: {
            pageUrl: `${PROXIES_SLAG_V8}/web-hosted/navigator/json/data`,
        },
        resolve: {
            pageData: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_8__["PageResolve"],
        },
    },
    {
        path: 'roles',
        component: _routes_roles_roles_component__WEBPACK_IMPORTED_MODULE_6__["RolesComponent"],
    },
    {
        path: 'role/:id',
        component: _routes_role_role_component__WEBPACK_IMPORTED_MODULE_13__["RoleComponent"],
    }, {
        path: 'role-details/:variant',
        component: _routes_role_role_details_role_details_component__WEBPACK_IMPORTED_MODULE_19__["RoleDetailsComponent"],
    },
    {
        path: 'sales/launchpad',
        component: _routes_launchpad_launchpad_component__WEBPACK_IMPORTED_MODULE_16__["LaunchpadComponent"],
    },
    {
        path: 'tech/learning-path',
        component: _routes_learning_path_learning_path_component__WEBPACK_IMPORTED_MODULE_9__["LearningPathComponent"],
    },
    {
        path: 'tech/learning-path/result',
        component: _routes_learning_path_components_result_result_component__WEBPACK_IMPORTED_MODULE_10__["ResultComponent"],
        resolve: {
            lpdata: _resolvers_search_result_resolve__WEBPACK_IMPORTED_MODULE_11__["SearchResultResolve"],
        },
    },
];
let NavigatorRoutingModule = class NavigatorRoutingModule {
};
NavigatorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_resolvers_search_result_resolve__WEBPACK_IMPORTED_MODULE_11__["SearchResultResolve"]],
    })
], NavigatorRoutingModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/navigator.module.ts":
/*!*********************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/navigator.module.ts ***!
  \*********************************************************************************/
/*! exports provided: NavigatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorModule", function() { return NavigatorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _navigator_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigator-routing.module */ "./project/ws/app/src/lib/routes/infy/routes/navigator/navigator-routing.module.ts");
/* harmony import */ var _routes_account_details_account_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/account-details/account-details.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/account-details/account-details.component.ts");
/* harmony import */ var _routes_explore_explore_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/explore/explore.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/explore/explore.component.ts");
/* harmony import */ var _routes_industries_industries_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/industries/industries.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industries/industries.component.ts");
/* harmony import */ var _routes_leaders_leaders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/leaders/leaders.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/leaders/leaders.component.ts");
/* harmony import */ var _routes_learning_path_learning_path_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/learning-path/learning-path.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/learning-path/learning-path.component.ts");
/* harmony import */ var _routes_roles_roles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/roles/roles.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/roles/roles.component.ts");
/* harmony import */ var _routes_explore_components_navigator_card_navigator_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/explore/components/navigator-card/navigator-card.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/explore/components/navigator-card/navigator-card.component.ts");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _routes_roles_components_role_card_role_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes/roles/components/role-card/role-card.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/roles/components/role-card/role-card.component.ts");
/* harmony import */ var _ws_widget_resolver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ws-widget/resolver */ "./library/ws-widget/resolver/src/public-api.ts");
/* harmony import */ var _infy_routes_marketing_pentagon_pentagon_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../infy/routes/marketing/pentagon/pentagon.module */ "./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.module.ts");
/* harmony import */ var _navigator_components_multiline_snackbar_multiline_snackbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../navigator/components/multiline-snackbar/multiline-snackbar.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/components/multiline-snackbar/multiline-snackbar.component.ts");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _routes_navigator_home_navigator_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./routes/navigator-home/navigator-home.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/navigator-home/navigator-home.component.ts");
/* harmony import */ var _routes_navigator_home_components_feature_card_feature_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./routes/navigator-home/components/feature-card/feature-card.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/navigator-home/components/feature-card/feature-card.component.ts");
/* harmony import */ var _routes_learning_path_components_result_result_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./routes/learning-path/components/result/result.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/learning-path/components/result/result.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _routes_role_role_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./routes/role/role.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/role/role.component.ts");
/* harmony import */ var _routes_lp_details_lp_details_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./routes/lp-details/lp-details.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/lp-details/lp-details.component.ts");
/* harmony import */ var _routes_lp_details_components_lp_card_lp_card_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./routes/lp-details/components/lp-card/lp-card.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/lp-details/components/lp-card/lp-card.component.ts");
/* harmony import */ var _routes_fullstack_program_fullstack_program_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./routes/fullstack-program/fullstack-program.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fullstack-program/fullstack-program.component.ts");
/* harmony import */ var _routes_fullstack_program_components_fs_card_fs_card_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./routes/fullstack-program/components/fs-card/fs-card.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fullstack-program/components/fs-card/fs-card.component.ts");
/* harmony import */ var _routes_launchpad_launchpad_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./routes/launchpad/launchpad.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/launchpad/launchpad.component.ts");
/* harmony import */ var _routes_industry_industry_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./routes/industry/industry.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industry/industry.component.ts");
/* harmony import */ var _routes_fs_home_fs_home_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./routes/fs-home/fs-home.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fs-home/fs-home.component.ts");
/* harmony import */ var _routes_industry_analytics_industry_analytics_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./routes/industry-analytics/industry-analytics.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industry-analytics/industry-analytics.component.ts");
/* harmony import */ var _routes_role_role_details_role_details_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./routes/role/role-details/role-details.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/role/role-details/role-details.component.ts");
/* harmony import */ var _routes_bpm_details_bpm_details_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./routes/bpm-details/bpm-details.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/bpm-details/bpm-details.component.ts");

































let NavigatorModule = class NavigatorModule {
};
NavigatorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _routes_account_details_account_details_component__WEBPACK_IMPORTED_MODULE_4__["AccountDetailsComponent"],
            _routes_explore_explore_component__WEBPACK_IMPORTED_MODULE_5__["ExploreComponent"],
            _routes_industries_industries_component__WEBPACK_IMPORTED_MODULE_6__["IndustriesComponent"],
            _routes_leaders_leaders_component__WEBPACK_IMPORTED_MODULE_7__["LeadersComponent"],
            _routes_learning_path_learning_path_component__WEBPACK_IMPORTED_MODULE_8__["LearningPathComponent"],
            _routes_roles_roles_component__WEBPACK_IMPORTED_MODULE_9__["RolesComponent"],
            _routes_explore_components_navigator_card_navigator_card_component__WEBPACK_IMPORTED_MODULE_10__["NavigatorCardComponent"],
            _routes_roles_components_role_card_role_card_component__WEBPACK_IMPORTED_MODULE_12__["RoleCardComponent"],
            _routes_navigator_home_navigator_home_component__WEBPACK_IMPORTED_MODULE_18__["NavigatorHomeComponent"],
            _routes_navigator_home_components_feature_card_feature_card_component__WEBPACK_IMPORTED_MODULE_19__["FeatureCardComponent"],
            _routes_learning_path_components_result_result_component__WEBPACK_IMPORTED_MODULE_20__["ResultComponent"],
            _navigator_components_multiline_snackbar_multiline_snackbar_component__WEBPACK_IMPORTED_MODULE_15__["MultilineSnackbarComponent"],
            _routes_role_role_component__WEBPACK_IMPORTED_MODULE_22__["RoleComponent"],
            _routes_lp_details_lp_details_component__WEBPACK_IMPORTED_MODULE_23__["LpDetailsComponent"],
            _routes_lp_details_components_lp_card_lp_card_component__WEBPACK_IMPORTED_MODULE_24__["LpCardComponent"],
            _routes_fullstack_program_fullstack_program_component__WEBPACK_IMPORTED_MODULE_25__["FullstackProgramComponent"],
            _routes_fullstack_program_components_fs_card_fs_card_component__WEBPACK_IMPORTED_MODULE_26__["FsCardComponent"],
            _routes_launchpad_launchpad_component__WEBPACK_IMPORTED_MODULE_27__["LaunchpadComponent"],
            _routes_industry_industry_component__WEBPACK_IMPORTED_MODULE_28__["IndustryComponent"],
            _routes_fs_home_fs_home_component__WEBPACK_IMPORTED_MODULE_29__["FsHomeComponent"],
            _routes_industry_analytics_industry_analytics_component__WEBPACK_IMPORTED_MODULE_30__["IndustryAnalyticsComponent"],
            _routes_role_role_details_role_details_component__WEBPACK_IMPORTED_MODULE_31__["RoleDetailsComponent"],
            _routes_bpm_details_bpm_details_component__WEBPACK_IMPORTED_MODULE_32__["BpmDetailsComponent"],
        ],
        entryComponents: [_navigator_components_multiline_snackbar_multiline_snackbar_component__WEBPACK_IMPORTED_MODULE_15__["MultilineSnackbarComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _navigator_routing_module__WEBPACK_IMPORTED_MODULE_3__["NavigatorRoutingModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_16__["BtnPageBackModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatTreeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
            _ws_widget_utils__WEBPACK_IMPORTED_MODULE_11__["PipeLimitToModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"],
            _ws_widget_resolver__WEBPACK_IMPORTED_MODULE_13__["WidgetResolverModule"],
            _ws_widget_utils__WEBPACK_IMPORTED_MODULE_11__["HorizontalScrollerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
            _ws_widget_utils__WEBPACK_IMPORTED_MODULE_11__["DefaultThumbnailModule"],
            _infy_routes_marketing_pentagon_pentagon_module__WEBPACK_IMPORTED_MODULE_14__["PentagonModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_16__["BtnGoalsModule"],
        ],
    })
], NavigatorModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/resolvers/search-result.resolve.ts":
/*!************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/resolvers/search-result.resolve.ts ***!
  \************************************************************************************************/
/*! exports provided: SearchResultResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultResolve", function() { return SearchResultResolve; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/navigator.service */ "./project/ws/app/src/lib/routes/infy/routes/navigator/services/navigator.service.ts");





let SearchResultResolve = class SearchResultResolve {
    constructor(navigatorSvc) {
        this.navigatorSvc = navigatorSvc;
    }
    resolve() {
        return this.navigatorSvc.fetchLearningPathData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => ({ data, error: null })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_ => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ data: null, error: null })));
    }
};
SearchResultResolve.ctorParameters = () => [
    { type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_4__["NavigatorService"] }
];
SearchResultResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SearchResultResolve);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/account-details/account-details.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/account-details/account-details.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".concept {\n  text-align: center;\n  margin-right: 12px;\n  height: 100px;\n  min-width: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px;\n  box-sizing: border-box;\n  font: inherit;\n}\n\n.cur-pointer {\n  cursor: pointer;\n}\n\n.card-section {\n  min-width: 380px;\n  width: 30%;\n  margin: 16px;\n}\n\n@media only screen and (max-width: 599px) {\n  .card-section {\n    width: 100%;\n    margin: 12px;\n  }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 959px) {\n  .card-section {\n    width: 45%;\n    margin: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL2FjY291bnQtZGV0YWlscy9hY2NvdW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvc3R5bGVzL193cy12YXJzLnNjc3MiLCJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL2FjY291bnQtZGV0YWlscy9hY2NvdW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JBO0VBQ0Usa0JBQUE7RUFDQSxrQkNSTztFRFNQLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUNkTztFRGVQLHNCQUFBO0VBQ0EsYUFBQTtBRWZGOztBRmtCQTtFQUNFLGVBQUE7QUVmRjs7QUZrQkE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQ3pCTztBQ1VUOztBRmpCRTtFQTZCRjtJQU1JLFdBQUE7SUFDQSxZQzlCSztFQ2dCUDtBQUNGOztBRmpCRTtFQXVCRjtJQVdJLFVBQUE7SUFDQSxZQ25DSztFQ3NCUDtBQUNGIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL25hdmlnYXRvci9yb3V0ZXMvYWNjb3VudC1kZXRhaWxzL2FjY291bnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy9fd3MtY29tbW9uLnNjc3MnO1xuQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuXG5AbWl4aW4gYnJlYWtwb2ludC14cyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gYnJlYWtwb2ludC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuXG4uY29uY2VwdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAkc2l6ZS1zO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtaW4td2lkdGg6IDUgKiAkc2l6ZS1sO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogJHNpemUtcztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuLmN1ci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZC1zZWN0aW9uIHtcbiAgbWluLXdpZHRoOiAzODBweDtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luOiAkc2l6ZS1tO1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogJHNpemUtcztcbiAgfVxuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQtcyB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBtYXJnaW46ICRzaXplLXM7XG4gIH1cbn1cbiIsIiRmb250LWZhbWlseS1zYW5zOiAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLFxuICAnTm90byBTYW5zJywgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsXG4gICdOb3RvIENvbG9yIEVtb2ppJztcbiRmb250LWZhbWlseS1zZXJpZjogR2VvcmdpYSwgQ2FtYnJpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiRmb250LWZhbWlseS1tb25vOiBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0xpYmVyYXRpb24gTW9ubycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiRmb250LWZhbWlseS1vcGVuLXNhbnM6ICdPcGVuIFNhbnMnO1xuJGZvbnQtZmFtaWx5LW9wZW4tcG9wcGluczogJ1JvYm90byc7XG5cblxuJHNpemUteHM6IDhweDtcbiRzaXplLXM6IDEycHg7XG4kc2l6ZS1tOiAxNnB4O1xuJHNpemUtbDogMjRweDtcbiRzaXplLXhsOiAzMnB4O1xuJHNpemUtbGc6IDI4cHg7XG4kc2l6ZS14eGw6IDQwcHg7XG5cbiRtYXQtdG9vbGJhci14czogNTJweDtcbiRtYXQtdG9vbGJhci1ndC14czogNTZweDtcbiIsIi5jb25jZXB0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250OiBpbmhlcml0O1xufVxuXG4uY3VyLXBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLXNlY3Rpb24ge1xuICBtaW4td2lkdGg6IDM4MHB4O1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW46IDE2cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5jYXJkLXNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTJweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIC5jYXJkLXNlY3Rpb24ge1xuICAgIHdpZHRoOiA0NSU7XG4gICAgbWFyZ2luOiAxMnB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/account-details/account-details.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/account-details/account-details.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: AccountDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailsComponent", function() { return AccountDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");




let AccountDetailsComponent = class AccountDetailsComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.tabs = [];
        this.fetchingContentData = false;
        this.contentStripsHash = {};
        this.accountsData = {};
        this.accountsActive = false;
        this.updateCalled = false;
        this.contentStrips = [
            {
                id: 'overview',
                title: 'Overview',
            },
            {
                id: 'gtm',
                title: 'Case Study',
            },
            {
                id: 'tech',
                title: 'Technology',
            },
        ];
        this.selectedPillar = 'Accelerate';
        this.noData = false;
        this.baseAccountsUrl = '/app/infy/navigator/accounts/';
        this.overviewWidgetResolverData = {
            // tslint:disable-next-line: ter-indent
            widgetType: 'contentStrip',
            // tslint:disable-next-line: ter-indent
            widgetSubType: 'contentStripMultiple',
            // tslint:disable-next-line: ter-indent
            widgetData: {
                strips: [
                    {
                        key: 'overview-strip',
                        preWidgets: [],
                        title: 'Overview',
                        filters: [],
                        request: {
                            ids: [],
                        },
                    },
                    {
                        key: 'gtm-strip',
                        preWidgets: [],
                        title: 'Contents',
                        filters: [],
                        request: {
                            ids: [],
                        },
                    },
                    {
                        key: 'tech-strip',
                        preWidgets: [],
                        title: 'Tech Skills',
                        filters: [],
                        request: {
                            ids: [],
                        },
                    },
                ],
                errorWidget: {
                    widgetType: 'errorResolver',
                    widgetSubType: 'errorResolver',
                    widgetData: {
                        errorType: 'contentUnavailable',
                    },
                }, noDataWidget: {
                    widgetData: {
                        // tslint:disable-next-line: max-line-length
                        html: '<div class="padding-s"> <div class="margin-bottom-s margin-top-m" i18n> <p class = "mat-h2 padding-left-m padding-right-m text-center margin-top-l font-weight">Contents will appear soon...</div>',
                        containerStyle: {},
                    },
                    widgetSubType: 'elementHtml',
                    widgetType: 'element',
                },
                loader: true,
            },
        };
        this.errorWidget = {
            widgetType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["ROOT_WIDGET_CONFIG"].errorResolver._type,
            widgetSubType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["ROOT_WIDGET_CONFIG"].errorResolver.errorResolver,
            widgetData: {
                errorType: 'contentUnavailable',
            },
        };
        this.routeSubscription = null;
        this.selectedAccount = '';
        this.selectedPillar = '';
        this.selectedTheme = '';
        this.selectedPortfolio = '';
        this.selectedTab = '';
    }
    ngOnInit() {
        this.accountsData = this.route.snapshot.data.pageData.data;
        this.tabs = Object.keys(this.accountsData).sort();
        this.routeSubscription = this.route.params.subscribe(params => {
            if (params['tab']) {
                this.selectedTab = params.tab.toLowerCase() || 'communications';
                // this.logger.log('selected', this.selectedTab)
                const data = this.accountsData[this.selectedTab];
                if (Object.keys(data).length) {
                    this.noData = false;
                    this.updateData();
                }
                else {
                    this.noData = true;
                }
            }
            else {
                this.selectedTab = 'communications';
                this.updateData();
            }
        });
    }
    updateData() {
        this.updateCalled = true;
        this.fetchingContentData = true;
        // this.logger.log('tab', this.selectedTab)
        this.selectedAccount = this.fetchAccounts()[0];
        // this.logger.log('Check account', this.selectedAccount)
        this.selectedPortfolio = this.fetchPortfolios()[0];
        // this.logger.log('Check portfolio', this.selectedPortfolio)
        this.selectedTheme = this.fetchThemes()[0];
        // this.logger.log('Check theme', this.selectedTheme)
        //     const pillars: ISubPillar = this.accountsData[this.selectedTab][this.selectedAccount][
        // this.selectedPortfolio
        // ][this.selectedPillar][this.selectedTheme]
        // this.logger.log('Check pillars', pillars)
        this.updateContentStrip();
    }
    getStripMeta(stripName) {
        return {
            ctitle: stripName,
        };
    }
    updateContentStrip() {
        if (this.updateCalled) {
            const pillars = this.accountsData[this.selectedTab][this.selectedAccount][this.selectedPortfolio][this.selectedPillar][this.selectedTheme];
            const gtmIds = [];
            const overViewIds = [];
            const techIds = [];
            pillars.gtm.forEach((pillarSection) => {
                gtmIds.push(pillarSection.identifier);
            });
            pillars.overview.forEach((pillarSection) => {
                overViewIds.push(pillarSection.identifier);
            });
            pillars.tech.forEach((pillarSection) => {
                techIds.push(pillarSection.identifier);
            });
            this.overviewWidgetResolverData.widgetData.strips.forEach(strip => {
                if (strip.key === 'overview-strip' && strip.request && strip.request.ids) {
                    const overviewSet = new Set(overViewIds);
                    strip.request.ids = Array.from(overviewSet);
                }
                else if (strip.key === 'gtm-strip' && strip.request) {
                    strip.request.ids = gtmIds;
                }
                else if (strip.key === 'tech-strip' && strip.request) {
                    strip.request.ids = techIds;
                }
            });
            this.overviewWidgetResolverData = Object.assign({}, this.overviewWidgetResolverData);
            this.updateCalled = false;
            // this.logger.log('gtm', this.gtmWidgetResolverData)
        }
    }
    knowMoreClicked(lpItem) {
        this.router.navigateByUrl(lpItem.lp_external_certification[0].lp_external_certification_link);
    }
    fetchAccounts() {
        try {
            return Object.keys(this.accountsData[this.selectedTab]);
        }
        catch (e) {
            return [];
        }
    }
    fetchPortfolios() {
        try {
            return Object.keys(this.accountsData[this.selectedTab][this.selectedAccount]);
        }
        catch (e) {
            return [];
        }
    }
    fetchThemes() {
        try {
            return Object.keys(this.accountsData[this.selectedTab][this.selectedAccount][this.selectedPortfolio][this.selectedPillar]);
        }
        catch (e) {
            return [];
        }
    }
    accountClicked(account) {
        this.updateCalled = true;
        this.selectedAccount = account;
        this.selectedPortfolio = this.fetchPortfolios()[0];
        this.selectedTheme = this.fetchThemes()[0];
        if (!this.accountsData[this.selectedTab][this.selectedAccount].length) {
            // this.logger.log('empty')
            this.noData = true;
        }
        else {
            // this.logger.log('Account', this.selectedAccount, this.selectedPortfolio, this.selectedTheme)
            this.updateContentStrip();
        }
    }
    portfolioClicked(portfolio) {
        this.updateCalled = true;
        this.selectedPortfolio = portfolio;
        this.selectedTheme = this.fetchThemes()[0];
        this.updateContentStrip();
    }
    pillarClicked(pillar) {
        if (this.selectedPillar !== pillar) {
            this.updateCalled = true;
            this.selectedPillar = pillar;
            this.selectedTheme = this.fetchThemes()[0];
            this.updateContentStrip();
            this.selectedPillar = pillar;
        }
    }
    themeClicked(theme) {
        this.updateCalled = true;
        this.selectedTheme = theme;
        this.updateContentStrip();
    }
    isObjectEmpty(obj) {
        if (!obj) {
            return true;
        }
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    getSelectedIndex() {
        return this.tabs.indexOf(this.selectedTab);
    }
    navigate(event) {
        this.updateCalled = true;
        this.routeSubscription = this.route.params.subscribe(params => {
            if (params['tab']) {
                this.selectedTab = params.tab.toLowerCase() || 'communications';
                const data = this.accountsData[this.selectedTab];
                if (Object.keys(data).length) {
                    this.noData = false;
                    this.updateData();
                }
                else {
                    this.noData = true;
                }
            }
            else {
                this.selectedTab = 'communications';
                this.updateData();
            }
        });
        this.noData = false;
        this.router.navigateByUrl(this.baseAccountsUrl + event.tab.textLabel);
    }
    caps(str) {
        return str.toLocaleUpperCase();
    }
};
AccountDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AccountDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-account-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/account-details/account-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account-details.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/account-details/account-details.component.scss")).default]
    })
], AccountDetailsComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/bpm-details/bpm-details.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/bpm-details/bpm-details.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.card {\n  width: 265px;\n  height: 372.8px;\n  padding: 0 !important;\n  margin: 12px 16px;\n  cursor: pointer;\n}\n\n.member-image {\n  width: 265px;\n  height: 150px;\n}\n\n.card-information {\n  padding: 0 16px;\n}\n\n.title-text {\n  margin: 12px 0;\n  position: relative;\n  overflow: hidden;\n  height: 2.6em;\n  line-height: 1.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL2JwbS1kZXRhaWxzL2JwbS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvbmF2aWdhdG9yL3JvdXRlcy9icG0tZGV0YWlscy9icG0tZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FER0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFFQSxlQUFBO0FDREY7O0FET0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0pGOztBRFFBO0VBQ0UsZUFBQTtBQ0xGOztBRFFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNMRiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL2JwbS1kZXRhaWxzL2JwbS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5cbi5jYXJkIHtcbiAgd2lkdGg6IDI2NXB4O1xuICBoZWlnaHQ6IDM3Mi44cHg7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxMnB4IDE2cHg7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvLyAmOmZpcnN0LWNoaWxkIHtcbiAgLy8gICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIC8vIH1cbn1cblxuLm1lbWJlci1pbWFnZSB7XG4gIHdpZHRoOiAyNjVweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuXG4uY2FyZC1pbmZvcm1hdGlvbiB7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cblxuLnRpdGxlLXRleHQge1xuICBtYXJnaW46IDEycHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDIuNmVtO1xuICBsaW5lLWhlaWdodDogMS4zZW07XG59XG4iLCIuZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDI2NXB4O1xuICBoZWlnaHQ6IDM3Mi44cHg7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxMnB4IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbWJlci1pbWFnZSB7XG4gIHdpZHRoOiAyNjVweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLmNhcmQtaW5mb3JtYXRpb24ge1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG5cbi50aXRsZS10ZXh0IHtcbiAgbWFyZ2luOiAxMnB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAyLjZlbTtcbiAgbGluZS1oZWlnaHQ6IDEuM2VtO1xufSJdfQ== */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/bpm-details/bpm-details.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/bpm-details/bpm-details.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: BpmDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpmDetailsComponent", function() { return BpmDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/navigator.service */ "./project/ws/app/src/lib/routes/infy/routes/navigator/services/navigator.service.ts");





let BpmDetailsComponent = class BpmDetailsComponent {
    constructor(configSvc, navSvc, route, router) {
        this.configSvc = configSvc;
        this.navSvc = navSvc;
        this.route = route;
        this.router = router;
        this.fetchStatus = 'none';
        this.coursesFetch = 'none';
        this.bpmData = [];
        this.hasExternal = true;
        this.defaultThumbnail = '';
        this.selectedBpmData = {};
        this.coursesResolverData = {
            widgetType: 'contentStrip',
            widgetSubType: 'contentStripMultiple',
            widgetData: {
                strips: [
                    {
                        key: 'courses-strip',
                        preWidgets: [],
                        title: 'Courses',
                        filters: [],
                        request: {
                            ids: [],
                        },
                    },
                ],
            },
        };
        this.groupMemberId = this.route.snapshot.queryParams.id;
    }
    ngOnInit() {
        if (this.configSvc.instanceConfig) {
            this.defaultThumbnail = this.configSvc.instanceConfig.logos.defaultContent;
        }
        this.navSvc.fetchBpmData().subscribe((res) => {
            this.bpmData = res.data;
            // console.log(res.data)
            const bpmSelected = this.bpmData.find(bpm => {
                return bpm.groupd_id === Number(this.groupMemberId);
            });
            if (bpmSelected) {
                this.selectedBpmData = bpmSelected;
            }
            if (this.selectedBpmData.member_list_internal) {
                this.coursesResolverData.widgetData.strips.forEach(strip => {
                    if (strip.key === 'courses-strip' && strip.request) {
                        strip.request.ids = this.selectedBpmData.member_list_internal;
                    }
                });
                this.coursesResolverData = Object.assign({}, this.coursesResolverData);
                this.coursesFetch = 'done';
            }
            const ids = [];
            this.selectedBpmData.member_list_external.forEach(externalMember => {
                ids.push(externalMember.member_image_id);
            });
            if (ids.length > 0) {
                this.navSvc.fetchImageForContentIDs(ids).subscribe((resp) => {
                    resp.forEach(child => {
                        this.selectedBpmData.member_list_external.forEach(externalMember => {
                            if (externalMember.member_image_id === child.identifier) {
                                externalMember.member_image_id = child.appIcon;
                                // externalMember.member_linked_url = encodeURIComponent(externalMember.member_linked_url)
                            }
                        });
                    });
                    this.fetchStatus = 'done';
                    this.hasExternal = true;
                }, () => {
                    this.fetchStatus = 'done';
                    this.hasExternal = false;
                });
            }
        });
    }
    changeRoute(url) {
        // console.log('the url', url)
        // console.log(decodeURIComponent(url))
        if (url.includes('role-details')) {
            const splittedUrl = url.split('?id=');
            const roleId = splittedUrl[1];
            this.router.navigate([splittedUrl[0]], { queryParams: { id: roleId } });
        }
        else if (url.includes('variant')) {
            const splittedUrl = url.split('?variant=');
            const variantId = splittedUrl[1];
            this.router.navigate([splittedUrl[0]], { queryParams: { variant: variantId } });
        }
        else {
            this.router.navigate([decodeURIComponent(url)]);
        }
    }
};
BpmDetailsComponent.ctorParameters = () => [
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_3__["ConfigurationsService"] },
    { type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_4__["NavigatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BpmDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-bpm-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bpm-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/bpm-details/bpm-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bpm-details.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/bpm-details/bpm-details.component.scss")).default]
    })
], BpmDetailsComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/explore/components/navigator-card/navigator-card.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/explore/components/navigator-card/navigator-card.component.scss ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-container {\n  position: relative;\n  width: 290px;\n  height: 400px;\n  margin: 20px 20px;\n}\n@media only screen and (max-width: 599px) {\n  .card-container {\n    width: 230px;\n    height: 250px;\n  }\n}\n.card-image {\n  width: 290px;\n  height: 160px;\n  border-radius: 8px 8px 0 0;\n  cursor: pointer;\n}\n@media only screen and (max-width: 599px) {\n  .card-image {\n    width: 230px;\n  }\n}\n.mat-card {\n  padding: 0;\n}\n@media only screen and (max-width: 599px) {\n  .mat-card {\n    height: 390px;\n  }\n}\n.card-information {\n  margin: 12px 16px;\n  display: flex;\n  flex-direction: column;\n}\n.button-holder {\n  display: flex;\n  justify-content: flex-end;\n}\n.title {\n  margin-left: 8px;\n}\n.card {\n  height: 380px;\n}\n.desciption {\n  position: relative;\n}\n.grid {\n  display: grid !important;\n  grid-template-rows: 110px 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL2V4cGxvcmUvY29tcG9uZW50cy9uYXZpZ2F0b3ItY2FyZC9uYXZpZ2F0b3ItY2FyZC5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL25hdmlnYXRvci9yb3V0ZXMvZXhwbG9yZS9jb21wb25lbnRzL25hdmlnYXRvci1jYXJkL25hdmlnYXRvci1jYXJkLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc29uYXNoYWp1L1ZpZGVvcy9zcGhlcmUtbW9iaWxlL3N0eWxlcy9fd3MtbWl4aW5zLnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvc3R5bGVzL193cy12YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNORjtBQ2NFO0VGWkY7SUFPSSxZQUFBO0lBQ0EsYUFBQTtFQ0xGO0FBQ0Y7QURRQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDTEY7QUNDRTtFRkFGO0lBT0ksWUFBQTtFQ0pGO0FBQ0Y7QURPQTtFQUNFLFVBQUE7QUNKRjtBQ1JFO0VGV0Y7SUFJSSxhQUFBO0VDSEY7QUFDRjtBRE1BO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNIRjtBRE1BO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDSEY7QURzQkE7RUFDRSxnQkd6RFE7QUZzQ1Y7QURzQkE7RUFDRSxhQUFBO0FDbkJGO0FEdUJBO0VBQ0Usa0JBQUE7QUNwQkY7QUR1QkE7RUFDRSx3QkFBQTtFQUNBLDhCQUFBO0FDcEJGIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL25hdmlnYXRvci9yb3V0ZXMvZXhwbG9yZS9jb21wb25lbnRzL25hdmlnYXRvci1jYXJkL25hdmlnYXRvci1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuQGltcG9ydCAnc3R5bGVzL193cy1taXhpbnMuc2Nzcyc7XG5cbiRtZWRpdW0tYmFkZ2Utc2l6ZTogOTBweDtcbiRzbWFsbC1iYWRnZS1zaXplOiA1MHB4O1xuJGJhZGdlLXBhZGRpbmc6IDEycHg7XG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI5MHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBtYXJnaW46IDIwcHggMjBweDtcblxuICBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgfVxufVxuXG4uY2FyZC1pbWFnZSB7XG4gIHdpZHRoOiAyOTBweDtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgICB3aWR0aDogMjMwcHg7XG4gIH1cbn1cblxuLm1hdC1jYXJkIHtcbiAgcGFkZGluZzogMDtcblxuICBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgICBoZWlnaHQ6IDM5MHB4O1xuICB9XG59XG5cbi5jYXJkLWluZm9ybWF0aW9uIHtcbiAgbWFyZ2luOiAkc2l6ZS1zICRzaXplLW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5idXR0b24taG9sZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgLy8gbWFyZ2luLXRvcDogKCRzaXplLXhsICogNSkgLSAkc2l6ZS14cztcbiAgLy8gYm9yZGVyLXJhZGl1czogMDtcbiAgLy8gYWxpZ24tY29udGVudDogY2VudGVyO1xuICAvLyBib3JkZXI6IG5vbmU7XG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gbWFyZ2luLWxlZnQ6ICgkc2l6ZS14bCAqIDUpIC0gKCRzaXplLW0gKiAyLjUpO1xuXG4gIC8vIHNwYW4ge1xuICAvLyAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAvLyB9XG5cbiAgLy8gQGluY2x1ZGUgYnJlYWtwb2ludC14cyB7XG4gIC8vICAgbWFyZ2luLXRvcDogKCRzaXplLXhsICogNSkgKyAoJHNpemUteHMpO1xuXG4gIC8vICAgbWFyZ2luLWxlZnQ6ICgkc2l6ZS1sICsgJHNpemUtbC8yKVxuICAvLyB9XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAkc2l6ZS14cztcbn1cblxuLmNhcmQge1xuICBoZWlnaHQ6IDM4MHB4O1xufVxuXG5cbi5kZXNjaXB0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMTBweCAzMHB4O1xufSIsIi5jYXJkLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI5MHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBtYXJnaW46IDIwcHggMjBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLmNhcmQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgfVxufVxuXG4uY2FyZC1pbWFnZSB7XG4gIHdpZHRoOiAyOTBweDtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLmNhcmQtaW1hZ2Uge1xuICAgIHdpZHRoOiAyMzBweDtcbiAgfVxufVxuXG4ubWF0LWNhcmQge1xuICBwYWRkaW5nOiAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAubWF0LWNhcmQge1xuICAgIGhlaWdodDogMzkwcHg7XG4gIH1cbn1cblxuLmNhcmQtaW5mb3JtYXRpb24ge1xuICBtYXJnaW46IDEycHggMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJ1dHRvbi1ob2xkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uY2FyZCB7XG4gIGhlaWdodDogMzgwcHg7XG59XG5cbi5kZXNjaXB0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMTBweCAzMHB4O1xufSIsIkBpbXBvcnQgJ3N0eWxlcy9fd3MtdmFycy5zY3NzJztcblxuQG1peGluIHJldGluYSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIHByaW50IHtcbiAgQG1lZGlhIG9ubHkgcHJpbnQge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBicmVha3BvaW50LXhzIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC14bCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSBhbmQgKG1heC13aWR0aDogNTAwMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LXMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC14bCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LXhzIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiIsIiRmb250LWZhbWlseS1zYW5zOiAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLFxuICAnTm90byBTYW5zJywgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsXG4gICdOb3RvIENvbG9yIEVtb2ppJztcbiRmb250LWZhbWlseS1zZXJpZjogR2VvcmdpYSwgQ2FtYnJpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiRmb250LWZhbWlseS1tb25vOiBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0xpYmVyYXRpb24gTW9ubycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiRmb250LWZhbWlseS1vcGVuLXNhbnM6ICdPcGVuIFNhbnMnO1xuJGZvbnQtZmFtaWx5LW9wZW4tcG9wcGluczogJ1JvYm90byc7XG5cblxuJHNpemUteHM6IDhweDtcbiRzaXplLXM6IDEycHg7XG4kc2l6ZS1tOiAxNnB4O1xuJHNpemUtbDogMjRweDtcbiRzaXplLXhsOiAzMnB4O1xuJHNpemUtbGc6IDI4cHg7XG4kc2l6ZS14eGw6IDQwcHg7XG5cbiRtYXQtdG9vbGJhci14czogNTJweDtcbiRtYXQtdG9vbGJhci1ndC14czogNTZweDtcbiJdfQ== */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/explore/components/navigator-card/navigator-card.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/explore/components/navigator-card/navigator-card.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: NavigatorCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorCardComponent", function() { return NavigatorCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/navigator.service */ "./project/ws/app/src/lib/routes/infy/routes/navigator/services/navigator.service.ts");





let NavigatorCardComponent = class NavigatorCardComponent {
    constructor(router, configSvc, valueSvc, navSvc) {
        this.router = router;
        this.configSvc = configSvc;
        this.valueSvc = valueSvc;
        this.navSvc = navSvc;
        this.baseLpUrl = '/app/infy/navigator/lp/';
        this.baseFsUrl = '/app/infy/navigator/fs/program/';
        this.defaultThumbnail = '/assets/images/missing-thumbnail.png';
        this.fetchStatus = 'none';
        this.isXSmall$ = this.valueSvc.isXSmall$;
        this.screenSizeIsLtMedium = false;
    }
    ngOnInit() {
        this.navSvc.fetchImageForContentID(this.navigatorCard.linkedIds).subscribe(res => {
            if (res) {
                this.navigatorCard.thumbnail = res[0].appIcon;
            }
            else {
                if (this.configSvc.instanceConfig) {
                    this.defaultThumbnail = this.configSvc.instanceConfig.logos.defaultContent;
                }
            }
            this.fetchStatus = 'done';
        }, () => {
            if (this.configSvc.instanceConfig) {
                this.defaultThumbnail = this.configSvc.instanceConfig.logos.defaultContent;
            }
            this.fetchStatus = 'done';
        });
        this.isXSmall$.subscribe((isXSmall) => {
            this.screenSizeIsLtMedium = isXSmall;
        });
    }
    imageClicked(navType) {
        if (navType === 'lp') {
            this.router.navigate([this.baseLpUrl + this.navigatorCard.routeButton]);
        }
        else {
            this.router.navigate([this.baseFsUrl + this.navigatorCard.routeButton]);
        }
    }
};
NavigatorCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_3__["ConfigurationsService"] },
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_3__["ValueService"] },
    { type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_4__["NavigatorService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavigatorCardComponent.prototype, "navigatorCard", void 0);
NavigatorCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-navigator-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigator-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/explore/components/navigator-card/navigator-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigator-card.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/explore/components/navigator-card/navigator-card.component.scss")).default]
    })
], NavigatorCardComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/explore/explore.component.scss":
/*!***************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/explore/explore.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headings {\n  margin: 0 30px;\n}\n\n.margin-top {\n  margin-top: 20px;\n}\n\np {\n  font-weight: 400;\n}\n\n.card-container {\n  position: relative;\n  min-height: 100px;\n  margin: 0 15px;\n}\n\n.card-holder {\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  position: relative;\n}\n\n.toolbar {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n  align-items: center;\n}\n\n.button-holder {\n  display: flex;\n  justify-content: flex-end;\n  border-radius: 0;\n  align-content: center;\n  border: none;\n  margin-right: 16px;\n}\n\n.button-holder a {\n  background: none;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL2V4cGxvcmUvZXhwbG9yZS5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL25hdmlnYXRvci9yb3V0ZXMvZXhwbG9yZS9leHBsb3JlLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc29uYXNoYWp1L1ZpZGVvcy9zcGhlcmUtbW9iaWxlL3N0eWxlcy9fd3MtdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsY0FBQTtBQ0pGOztBRE9BO0VBQ0UsZ0JBQUE7QUNKRjs7QURPQTtFQUNFLGdCQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0pGOztBRE9BO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JFdEJPO0VGdUJQLG1CQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCRWhDTztBRDRCVDs7QURNRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0pKIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL25hdmlnYXRvci9yb3V0ZXMvZXhwbG9yZS9leHBsb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuQGltcG9ydCAnc3R5bGVzL193cy1taXhpbnMuc2Nzcyc7XG5cbiRjb250ZW50LW1hcmdpbi1sZWZ0OiA2MHB4O1xuXG4uaGVhZGluZ3Mge1xuICBtYXJnaW46IDAgJGNvbnRlbnQtbWFyZ2luLWxlZnQvMjtcbn1cblxuLm1hcmdpbi10b3Age1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5wIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAwICRjb250ZW50LW1hcmdpbi1sZWZ0LzQ7XG59XG5cbi5jYXJkLWhvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAkc2l6ZS1tO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnV0dG9uLWhvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6ICRzaXplLW07XG5cbiAgYSB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbn1cbiIsIi5oZWFkaW5ncyB7XG4gIG1hcmdpbjogMCAzMHB4O1xufVxuXG4ubWFyZ2luLXRvcCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbnAge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDAgMTVweDtcbn1cblxuLmNhcmQtaG9sZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idXR0b24taG9sZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5idXR0b24taG9sZGVyIGEge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59IiwiJGZvbnQtZmFtaWx5LXNhbnM6ICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsXG4gICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJyxcbiAgJ05vdG8gQ29sb3IgRW1vamknO1xuJGZvbnQtZmFtaWx5LXNlcmlmOiBHZW9yZ2lhLCBDYW1icmlhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuJGZvbnQtZmFtaWx5LW1vbm86IE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuJGZvbnQtZmFtaWx5LW9wZW4tc2FuczogJ09wZW4gU2Fucyc7XG4kZm9udC1mYW1pbHktb3Blbi1wb3BwaW5zOiAnUm9ib3RvJztcblxuXG4kc2l6ZS14czogOHB4O1xuJHNpemUtczogMTJweDtcbiRzaXplLW06IDE2cHg7XG4kc2l6ZS1sOiAyNHB4O1xuJHNpemUteGw6IDMycHg7XG4kc2l6ZS1sZzogMjhweDtcbiRzaXplLXh4bDogNDBweDtcblxuJG1hdC10b29sYmFyLXhzOiA1MnB4O1xuJG1hdC10b29sYmFyLWd0LXhzOiA1NnB4O1xuIl19 */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/explore/explore.component.ts":
/*!*************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/explore/explore.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ExploreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreComponent", function() { return ExploreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigator.service */ "./project/ws/app/src/lib/routes/infy/routes/navigator/services/navigator.service.ts");




let ExploreComponent = class ExploreComponent {
    constructor(navSvc, valueSvc) {
        this.navSvc = navSvc;
        this.valueSvc = valueSvc;
        this.status = 'none';
        this.statusFs = 'none';
        this.smallScreen = false;
        this.selectedIndex = 0;
        this.isLtMedium$ = this.valueSvc.isLtMedium$;
        this.screenSizeIsLtMedium = false;
        this.lpDict = {};
        this.fsDict = {};
        this.lpData = [];
        this.fsData = [];
        this.navSvc.fetchLearningPathData().subscribe((response) => {
            let data = [];
            if (response.length > 10) {
                data = response.slice(0, 10);
            }
            else {
                data = response;
            }
            let count = 0;
            // this.logger.log('data check', data)
            this.learningPathData = data;
            // this.logger.log(this.learningPathData[0])
            this.learningPathData.forEach((lp) => {
                const pathData = {
                    title: lp.lp_name,
                    routeButton: String(lp.lp_id),
                    thumbnail: lp.lp_image,
                    linkedIds: lp.linked_program,
                    // temporary
                    // thumbnail: '/assets/images/content-card/AngularDeveloper.jpg',
                    description: lp.lp_description,
                    type: 'lp',
                };
                this.lpDict[pathData.linkedIds] = pathData.thumbnail;
                this.lpData[count] = pathData;
                count += 1;
            });
            const ids = [];
            this.lpData.forEach(lp => {
                if (lp.linkedIds) {
                    if (!lp.linkedIds.includes('/about') && !lp.linkedIds.includes('_na')) {
                        ids.push(lp.linkedIds);
                    }
                }
            });
            const finalIds = ids.splice(0, 150);
            finalIds.concat(ids.splice(300, 150));
            this.navSvc.fetchImageForContentIDs(finalIds).subscribe((resp) => {
                resp.forEach(child => {
                    this.lpDict[child.identifier] = child.appIcon;
                });
                this.lpData.forEach(lp => {
                    lp.thumbnail = this.lpDict[lp.linkedIds];
                });
                this.status = 'done';
            });
        });
        this.navSvc.fetchFullStackData().subscribe((response) => {
            let data = [];
            if (response.length > 10) {
                data = response.slice(0, 10);
            }
            else {
                {
                    data = response;
                }
            }
            let count = 0;
            // this.logger.log('data check fs', data)
            this.fullStackData = data;
            this.fullStackData.forEach((fs) => {
                const stackData = {
                    title: fs.fs_name,
                    linkedIds: fs.fs_linked_program,
                    routeButton: String(fs.fs_id),
                    thumbnail: fs.fs_image,
                    // temporary
                    // thumbnail: '/assets/images/content-card/AngularDeveloper.jpg',
                    description: fs.fs_desc,
                    type: 'fs',
                };
                this.fsDict[stackData.linkedIds] = stackData.thumbnail;
                this.fsData[count] = stackData;
                count += 1;
            });
            const ids = [];
            this.fsData.forEach(fs => {
                if (!fs.linkedIds.includes('/about')) {
                    ids.push(fs.linkedIds);
                }
            });
            this.navSvc.fetchImageForContentIDs(ids).subscribe((resp) => {
                resp.forEach(child => {
                    this.fsDict[child.identifier] = child.appIcon;
                });
                this.fsData.forEach(fs => {
                    fs.thumbnail = this.fsDict[fs.linkedIds];
                });
                this.statusFs = 'done';
            });
        });
    }
    ngOnInit() {
        this.isLtMedium$.subscribe((isLtMedium) => {
            this.screenSizeIsLtMedium = isLtMedium;
        });
    }
};
ExploreComponent.ctorParameters = () => [
    { type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_3__["NavigatorService"] },
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_2__["ValueService"] }
];
ExploreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-explore',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./explore.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/explore/explore.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./explore.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/explore/explore.component.scss")).default]
    })
], ExploreComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fs-home/fs-home.component.scss":
/*!***************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fs-home/fs-home.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner {\n  background-position: right;\n  background-size: cover;\n  height: 200px;\n  width: 100%;\n}\n@media only screen and (max-width: 725px) {\n  .banner {\n    height: 230px;\n  }\n}\n.banner-description {\n  margin: 0 16px;\n}\n.card-holder {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  position: relative;\n}\n.button-holder {\n  display: flex;\n  justify-content: flex-end;\n  border-radius: 0;\n  align-content: center;\n  border: none;\n}\n.button-holder span {\n  margin-right: 5px;\n}\n.card-container {\n  position: relative;\n  width: 270px;\n  height: 100%;\n  margin: 20px 20px;\n}\n.card-information {\n  display: flex;\n  flex-direction: column;\n}\n.card-image {\n  width: 270px;\n  height: 160px;\n  border-radius: 8px 8px 0 0;\n  cursor: pointer;\n}\n.mat-card {\n  padding: 0;\n}\n.know-button {\n  margin-left: 95px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL2ZzLWhvbWUvZnMtaG9tZS5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL25hdmlnYXRvci9yb3V0ZXMvZnMtaG9tZS9mcy1ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRUUsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDSEY7QURLRTtFQVBGO0lBUUksYUFBQTtFQ0ZGO0FBQ0Y7QURTQTtFQUVFLGNBQUE7QUNQRjtBRHNCQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ25CRjtBRHNCQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDbkJGO0FEcUJFO0VBQ0UsaUJBQUE7QUNuQko7QUQ2QkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUMxQkY7QUQwQ0E7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7QUN4Q0Y7QUQyQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ3hDRjtBRCtDQTtFQUNFLFVBQUE7QUM1Q0Y7QURvREE7RUFDRSxpQkFBQTtBQ2pERiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL2ZzLWhvbWUvZnMtaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgJ35zcmMvc3R5bGVzL3dzLXZhcnMnO1xuLy8gQGltcG9ydCAnfnNyYy9zdHlsZXMvd3MtbWl4aW5zJztcblxuLmJhbm5lciB7XG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvY29tbW9uLy9uYXZpZ2F0b3IvYmFubmVycy9iaV9uc28uanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjVweCkge1xuICAgIGhlaWdodDogMjMwcHg7XG4gIH1cblxuICAvLyBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgLy8gICBoZWlnaHQ6IDI1MHB4O1xuICAvLyB9XG59XG5cbi5iYW5uZXItZGVzY3JpcHRpb24ge1xuICAvLyBwYWRkaW5nOiAwICRzaXplLXhsO1xuICBtYXJnaW46IDAgMTZweDtcbn1cblxuLy8gLnNtYWxsLWJhbm5lci10ZXh0IHtcbiAgLy8gQGluY2x1ZGUgYnJlYWtwb2ludC14cyB7XG4gIC8vICAgZm9udC1zaXplOiAxLjVyZW07XG4gIC8vIH1cbi8vIH1cblxuLy8gLnNtYWxsLWJhbm5lci1kZXNjcmlwdGlvbiB7XG4gIC8vIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMge1xuICAvLyAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAvLyB9XG4vLyB9XG5cbi5jYXJkLWhvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnV0dG9uLWhvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuXG4gIHNwYW4ge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG5cbiAgLy8gQGluY2x1ZGUgYnJlYWtwb2ludC14cyB7XG4gIC8vICAgbWFyZ2luLXRvcDogKCRzaXplLXhsICogNSkgKyAoJHNpemUteHMpO1xuXG4gIC8vICAgbWFyZ2luLWxlZnQ6ICgkc2l6ZS1sICsgJHNpemUtbC8yKTtcbiAgLy8gfVxufVxuXG4uY2FyZC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyNzBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDIwcHggMjBweDtcblxuICAvLyBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgLy8gICB3aWR0aDogMjMwcHg7XG4gIC8vICAgaGVpZ2h0OiAzMDBweDtcbiAgLy8gfVxufVxuXG4vLyAua25vdy1tb3JlIHtcbiAgLy8gQGluY2x1ZGUgYnJlYWtwb2ludC14cyB7XG4gIC8vICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAvLyAgIDtcbiAgLy8gfVxuLy8gfVxuXG5cbi5jYXJkLWluZm9ybWF0aW9uIHtcbiAgLy8gbWFyZ2luOiAkc2l6ZS1zICRzaXplLW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jYXJkLWltYWdlIHtcbiAgd2lkdGg6IDI3MHB4O1xuICBoZWlnaHQ6IDE2MHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIC8vIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMge1xuICAvLyAgIHdpZHRoOiAyMzBweDtcbiAgLy8gfVxufVxuXG4ubWF0LWNhcmQge1xuICBwYWRkaW5nOiAwO1xuXG4gIC8vIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMge1xuICAvLyAgIGhlaWdodDogMzAwcHg7XG4gIC8vIH1cbn1cblxuXG4ua25vdy1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogOTVweDtcblxuICAvLyBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgLy8gICBtYXJnaW4tbGVmdDogNTVweDtcbiAgLy8gfVxufVxuIiwiLmJhbm5lciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzI1cHgpIHtcbiAgLmJhbm5lciB7XG4gICAgaGVpZ2h0OiAyMzBweDtcbiAgfVxufVxuXG4uYmFubmVyLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi5jYXJkLWhvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnV0dG9uLWhvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xufVxuLmJ1dHRvbi1ob2xkZXIgc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyNzBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDIwcHggMjBweDtcbn1cblxuLmNhcmQtaW5mb3JtYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY2FyZC1pbWFnZSB7XG4gIHdpZHRoOiAyNzBweDtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1hdC1jYXJkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmtub3ctYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDk1cHg7XG59Il19 */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fs-home/fs-home.component.ts":
/*!*************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fs-home/fs-home.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: FsHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FsHomeComponent", function() { return FsHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigator.service */ "./project/ws/app/src/lib/routes/infy/routes/navigator/services/navigator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let FsHomeComponent = class FsHomeComponent {
    constructor(navSvc, router, configSvc) {
        this.navSvc = navSvc;
        this.router = router;
        this.configSvc = configSvc;
        this.fetchStatus = 'none';
        this.defaultThumbnail = '/assets/images/missing-thumbnail.png';
        this.baseFsUrl = '/app/infy/navigator/fs/program/';
        this.fsDict = {};
        this.fsData = [];
        this.fullStackData = [];
    }
    ngOnInit() {
        if (this.configSvc.instanceConfig) {
            this.defaultThumbnail = this.configSvc.instanceConfig.logos.defaultContent;
        }
        this.navSvc.fetchFullStackData().subscribe((data) => {
            this.fullStackData = data;
            let count = 0;
            // this.logger.log('data check fs', data)
            this.fullStackData = data;
            this.fullStackData.forEach((fs) => {
                const stackData = {
                    title: fs.fs_name,
                    routeButton: String(fs.fs_id),
                    thumbnail: fs.fs_image,
                    linkedIds: fs.fs_linked_program,
                    // temporary
                    // thumbnail: '/assets/images/content-card/AngularDeveloper.jpg',
                    description: fs.fs_desc,
                    type: 'fs',
                };
                this.fsDict[stackData.linkedIds] = stackData.thumbnail;
                this.fsData[count] = stackData;
                count += 1;
            });
            const ids = [];
            this.fsData.forEach(fs => {
                if (!fs.linkedIds.includes('/about')) {
                    ids.push(fs.linkedIds);
                }
            });
            this.navSvc.fetchImageForContentIDs(ids).subscribe((resp) => {
                resp.forEach(child => {
                    this.fsDict[child.identifier] = child.appIcon;
                });
                this.fsData.forEach(fs => {
                    fs.thumbnail = this.fsDict[fs.linkedIds];
                });
                this.fetchStatus = 'done';
            });
        });
    }
    imageClicked(navigateRoute) {
        this.router.navigate([this.baseFsUrl + navigateRoute]);
    }
};
FsHomeComponent.ctorParameters = () => [
    { type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_3__["NavigatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_2__["ConfigurationsService"] }
];
FsHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-fs-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fs-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fs-home/fs-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fs-home.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fs-home/fs-home.component.scss")).default]
    })
], FsHomeComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fullstack-program/components/fs-card/fs-card.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fullstack-program/components/fs-card/fs-card.component.scss ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-container {\n  position: relative;\n  width: 290px;\n  height: 400px;\n  margin: 20px 20px;\n}\n\n.card-image {\n  width: 290px;\n  border-radius: 8px 8px 0 0;\n}\n\n.mat-card {\n  padding: 0;\n}\n\n.card-information {\n  display: flex;\n  flex-direction: column;\n}\n\n.button-holder {\n  display: flex;\n  justify-content: flex-end;\n  border-radius: 0;\n  align-content: center;\n  border: none;\n  position: absolute;\n}\n\n.button-holder span {\n  margin-right: 5px;\n}\n\n.card {\n  height: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL2Z1bGxzdGFjay1wcm9ncmFtL2NvbXBvbmVudHMvZnMtY2FyZC9mcy1jYXJkLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvbmF2aWdhdG9yL3JvdXRlcy9mdWxsc3RhY2stcHJvZ3JhbS9jb21wb25lbnRzL2ZzLWNhcmQvZnMtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ05GOztBRGNBO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0FDWEY7O0FEa0JBO0VBQ0UsVUFBQTtBQ2ZGOztBRHNCQTtFQUVFLGFBQUE7RUFDQSxzQkFBQTtBQ3BCRjs7QUR1QkE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFFQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDckJGOztBRHdCRTtFQUNFLGlCQUFBO0FDdEJKOztBRG9DQTtFQUNFLGFBQUE7QUNqQ0YiLCJmaWxlIjoicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvbmF2aWdhdG9yL3JvdXRlcy9mdWxsc3RhY2stcHJvZ3JhbS9jb21wb25lbnRzL2ZzLWNhcmQvZnMtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgJ35zcmMvc3R5bGVzL3dzLXZhcnMnO1xuLy8gQGltcG9ydCAnfnNyYy9zdHlsZXMvd3MtbWl4aW5zJztcblxuJG1lZGl1bS1iYWRnZS1zaXplOiA5MHB4O1xuJHNtYWxsLWJhZGdlLXNpemU6IDUwcHg7XG4kYmFkZ2UtcGFkZGluZzogMTJweDtcblxuLmNhcmQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjkwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIG1hcmdpbjogMjBweCAyMHB4O1xuXG4gIC8vIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMge1xuICAvLyAgIC8vIHdpZHRoOiAyMzBweDtcbiAgLy8gICBoZWlnaHQ6IDM1MHB4O1xuICAvLyB9XG59XG5cbi5jYXJkLWltYWdlIHtcbiAgd2lkdGg6IDI5MHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcblxuICAvLyBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgLy8gICAvLyB3aWR0aDogMjMwcHg7XG4gIC8vIH1cbn1cblxuLm1hdC1jYXJkIHtcbiAgcGFkZGluZzogMDtcblxuICAvLyBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgLy8gICBoZWlnaHQ6IDM3MHB4O1xuICAvLyB9XG59XG5cbi5jYXJkLWluZm9ybWF0aW9uIHtcbiAgLy8gbWFyZ2luOiAkc2l6ZS1zICRzaXplLW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5idXR0b24taG9sZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgLy8gbWFyZ2luLXRvcDogKCRzaXplLXhsICogNSkgLSAkc2l6ZS14cztcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gbWFyZ2luLWxlZnQ6ICgkc2l6ZS14bCAqIDUpIC0gKCRzaXplLW0gKiA0KTtcblxuICBzcGFuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuXG4gIC8vIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMge1xuICAvLyAgIG1hcmdpbi10b3A6ICgkc2l6ZS14bCAqIDUpICsgKCRzaXplLXhzKTtcblxuICAvLyAgIG1hcmdpbi1sZWZ0OiAoJHNpemUtbCArICRzaXplLWwvMik7XG4gIC8vIH1cbn1cblxuLy8gLnRpdGxlIHtcbi8vICAgbWFyZ2luLWxlZnQ6ICRzaXplLXhzO1xuLy8gfVxuXG4uY2FyZCB7XG4gIGhlaWdodDogMzUwcHg7XG59XG4iLCIuY2FyZC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyOTBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luOiAyMHB4IDIwcHg7XG59XG5cbi5jYXJkLWltYWdlIHtcbiAgd2lkdGg6IDI5MHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcbn1cblxuLm1hdC1jYXJkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNhcmQtaW5mb3JtYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYnV0dG9uLWhvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uYnV0dG9uLWhvbGRlciBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5jYXJkIHtcbiAgaGVpZ2h0OiAzNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fullstack-program/components/fs-card/fs-card.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fullstack-program/components/fs-card/fs-card.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: FsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FsCardComponent", function() { return FsCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FsCardComponent = class FsCardComponent {
    constructor() {
    }
    launchCertification() {
        // //console.log('card data', this.navigatorCard)
        if (this.navigatorCard.routeButton.includes('Wingspan')) {
        }
        else {
            window.open(this.navigatorCard.routeButton);
        }
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FsCardComponent.prototype, "navigatorCard", void 0);
FsCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-fs-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fs-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fullstack-program/components/fs-card/fs-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fs-card.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fullstack-program/components/fs-card/fs-card.component.scss")).default]
    })
], FsCardComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fullstack-program/fullstack-program.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fullstack-program/fullstack-program.component.scss ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner {\n  background-position: right;\n  background-size: cover;\n  height: 200px;\n  width: 100%;\n}\n@media only screen and (max-width: 725px) {\n  .banner {\n    height: 230px;\n  }\n}\n.banner-description {\n  margin: 0 16px;\n}\n.text-white {\n  color: white;\n}\n.text-bold {\n  font-weight: 500;\n}\n.practice-certification {\n  display: flex;\n}\n@media only screen and (max-width: 709px) {\n  .practice-certification {\n    display: block;\n    margin: auto;\n  }\n}\n.text-center {\n  align-content: center;\n}\n.small-banner-description {\n  font-size: 1.3rem;\n}\n@media only screen and (max-width: 756px) {\n  .small-banner-description {\n    font-size: 1.1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL2Z1bGxzdGFjay1wcm9ncmFtL2Z1bGxzdGFjay1wcm9ncmFtLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvbmF2aWdhdG9yL3JvdXRlcy9mdWxsc3RhY2stcHJvZ3JhbS9mdWxsc3RhY2stcHJvZ3JhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVFLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0hGO0FES0U7RUFQRjtJQVFJLGFBQUE7RUNGRjtBQUNGO0FEU0E7RUFFRSxjQUFBO0FDUEY7QURXQTtFQUNFLFlBQUE7QUNSRjtBRGVBO0VBQ0UsZ0JBQUE7QUNaRjtBRGVBO0VBQ0UsYUFBQTtBQ1pGO0FEY0U7RUFIRjtJQUlJLGNBQUE7SUFDQSxZQUFBO0VDWEY7QUFDRjtBRGNBO0VBQ0UscUJBQUE7QUNYRjtBRDBCQTtFQUNFLGlCQUFBO0FDdkJGO0FEeUJFO0VBSEY7SUFJSSxpQkFBQTtFQ3RCRjtBQUNGIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL25hdmlnYXRvci9yb3V0ZXMvZnVsbHN0YWNrLXByb2dyYW0vZnVsbHN0YWNrLXByb2dyYW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0ICd+c3JjL3N0eWxlcy93cy12YXJzJztcbi8vIEBpbXBvcnQgJ35zcmMvc3R5bGVzL3dzLW1peGlucyc7XG5cbi5iYW5uZXIge1xuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2NvbW1vbi8vbmF2aWdhdG9yL2Jhbm5lcnMvYmlfbnNvLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzI1cHgpIHtcbiAgICBoZWlnaHQ6IDIzMHB4O1xuICB9XG5cbiAgLy8gQGluY2x1ZGUgYnJlYWtwb2ludC14cyB7XG4gIC8vICAgaGVpZ2h0OiAyNTBweDtcbiAgLy8gfVxufVxuXG4uYmFubmVyLWRlc2NyaXB0aW9uIHtcbiAgLy8gcGFkZGluZzogMCAkc2l6ZS14bDtcbiAgbWFyZ2luOiAwIDE2cHg7XG5cbn1cblxuLnRleHQtd2hpdGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8vIC5kZXNjLWNvbnRhaW5lciB7XG4vLyAgIG1hcmdpbjogJHNpemUtbDtcbi8vIH1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wcmFjdGljZS1jZXJ0aWZpY2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwOXB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLy8gLmZzLWRlc2Mge1xuICAvLyBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgLy8gICBmb250LXNpemU6IDAuOTUgcmVtO1xuICAvLyB9XG4vLyB9XG5cbi8vIC5zbWFsbC1iYW5uZXItdGV4dCB7XG4gIC8vIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMge1xuICAvLyAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAvLyB9XG4vLyB9XG5cbi5zbWFsbC1iYW5uZXItZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuM3JlbTtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1NnB4KSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cbn1cbiIsIi5iYW5uZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyNXB4KSB7XG4gIC5iYW5uZXIge1xuICAgIGhlaWdodDogMjMwcHg7XG4gIH1cbn1cblxuLmJhbm5lci1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMCAxNnB4O1xufVxuXG4udGV4dC13aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wcmFjdGljZS1jZXJ0aWZpY2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzA5cHgpIHtcbiAgLnByYWN0aWNlLWNlcnRpZmljYXRpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuXG4udGV4dC1jZW50ZXIge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zbWFsbC1iYW5uZXItZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzU2cHgpIHtcbiAgLnNtYWxsLWJhbm5lci1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fullstack-program/fullstack-program.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fullstack-program/fullstack-program.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: FullstackProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullstackProgramComponent", function() { return FullstackProgramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigator.service */ "./project/ws/app/src/lib/routes/infy/routes/navigator/services/navigator.service.ts");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");





let FullstackProgramComponent = class FullstackProgramComponent {
    constructor(route, navSvc, configSvc) {
        this.route = route;
        this.navSvc = navSvc;
        this.configSvc = configSvc;
        this.availablePlaygrounds = [];
        this.fetchingCourses = false;
        this.availableCertifications = [];
        this.playground = [];
        this.fetchStatus = 'none';
        this.defaultThumbnail = '';
        this.coursesResolverData = {
            widgetType: 'contentStrip',
            widgetSubType: 'contentStripMultiple',
            widgetData: {
                strips: [
                    {
                        key: 'courses-strip',
                        preWidgets: [],
                        title: 'Content',
                        filters: [],
                        request: {
                            ids: [],
                        },
                    },
                ],
            },
        };
        this.fsData = [];
        this.playgroundData = [];
        this.certificationData = [];
        this.navSvc.fetchFullStackData().subscribe((data) => {
            this.fsData = data;
            this.fullStackData = this.fsData.filter((fs) => {
                return fs.fs_id === Number(this.route.snapshot.params.id);
            })[0];
            const ids = this.fullStackData.fs_course.map(course => {
                return course.course_lex_link.split('/').reverse()[0];
            });
            this.fetchContentForFs(ids);
            this.initializePracticeCertifications();
            this.fetchStatus = 'done';
        });
    }
    ngOnInit() {
        if (this.configSvc.instanceConfig) {
            this.defaultThumbnail = this.configSvc.instanceConfig.logos.defaultContent;
        }
    }
    fetchContentForFs(ids) {
        this.coursesResolverData.widgetData.strips.forEach(strip => {
            if (strip.key === 'courses-strip' && strip.request) {
                strip.request.ids = ids;
            }
        });
        this.coursesResolverData = Object.assign({}, this.coursesResolverData);
    }
    initializePracticeCertifications() {
        this.fullStackData.fs_playground.forEach((playground) => {
            const playData = {
                thumbnail: '/assets/images/content-card/card_img.jpg',
                title: playground.playground_name,
                description: playground.playground_desc,
                routeButton: playground.playground_link,
                type: 'internal',
            };
            this.playgroundData.push(playData);
        });
        this.fullStackData.fs_internal_certification.forEach(fsData => {
            if (fsData.internal_certification_link !== '') {
                const certificationData = {
                    thumbnail: '/assets/images/content-card/card_img.jpg',
                    title: fsData.internal_certification_name,
                    description: fsData.internal_certification_desc,
                    routeButton: fsData.internal_certification_link,
                    type: 'internal',
                };
                this.certificationData.push(certificationData);
            }
        });
        this.fullStackData.fs_external_certification.forEach(fsData => {
            if (fsData.external_certification_link !== '') {
                const certificationData = {
                    thumbnail: '/assets/images/content-card/card_img.jpg',
                    title: fsData.external_certification_name,
                    description: fsData.external_certification_desc,
                    routeButton: fsData.external_certification_link,
                    type: 'external',
                };
                this.certificationData.push(certificationData);
            }
        });
    }
};
FullstackProgramComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_3__["NavigatorService"] },
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_4__["ConfigurationsService"] }
];
FullstackProgramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-fullstack-program',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fullstack-program.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fullstack-program/fullstack-program.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fullstack-program.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/fullstack-program/fullstack-program.component.scss")).default]
    })
], FullstackProgramComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industries/industries.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industries/industries.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scrollable {\n  height: 352px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.pentagon-toggle {\n  vertical-align: text-bottom;\n}\n\n.cur-pointer {\n  cursor: pointer;\n}\n\n.card-section {\n  min-width: 380px;\n  width: 30%;\n  margin: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL2luZHVzdHJpZXMvaW5kdXN0cmllcy5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL25hdmlnYXRvci9yb3V0ZXMvaW5kdXN0cmllcy9pbmR1c3RyaWVzLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc29uYXNoYWp1L1ZpZGVvcy9zcGhlcmUtbW9iaWxlL3N0eWxlcy9fd3MtdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLDJCQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0FDRkY7O0FES0E7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZRVRPO0FET1QiLCJmaWxlIjoicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvbmF2aWdhdG9yL3JvdXRlcy9pbmR1c3RyaWVzL2luZHVzdHJpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5AaW1wb3J0ICdzdHlsZXMvX3dzLW1peGlucy5zY3NzJztcblxuLnNjcm9sbGFibGUge1xuICBoZWlnaHQ6IDM1MnB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5wZW50YWdvbi10b2dnbGUge1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG59XG5cbi5jdXItcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtc2VjdGlvbiB7XG4gIG1pbi13aWR0aDogMzgwcHg7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbjogJHNpemUtbTtcblxuICAvLyBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgLy8gICB3aWR0aDogMTAwJTtcbiAgLy8gICBtYXJnaW46ICRzaXplLXM7XG4gIC8vIH1cblxuICAvLyBAaW5jbHVkZSBicmVha3BvaW50LXNtIHtcbiAgLy8gICB3aWR0aDogNDUlO1xuICAvLyAgIG1hcmdpbjogJHNpemUtcztcbiAgLy8gfVxufVxuIiwiLnNjcm9sbGFibGUge1xuICBoZWlnaHQ6IDM1MnB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5wZW50YWdvbi10b2dnbGUge1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG59XG5cbi5jdXItcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtc2VjdGlvbiB7XG4gIG1pbi13aWR0aDogMzgwcHg7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbjogMTZweDtcbn0iLCIkZm9udC1mYW1pbHktc2FuczogJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCxcbiAgJ05vdG8gU2FucycsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLFxuICAnTm90byBDb2xvciBFbW9qaSc7XG4kZm9udC1mYW1pbHktc2VyaWY6IEdlb3JnaWEsIENhbWJyaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4kZm9udC1mYW1pbHktbW9ubzogTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdMaWJlcmF0aW9uIE1vbm8nLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4kZm9udC1mYW1pbHktb3Blbi1zYW5zOiAnT3BlbiBTYW5zJztcbiRmb250LWZhbWlseS1vcGVuLXBvcHBpbnM6ICdSb2JvdG8nO1xuXG5cbiRzaXplLXhzOiA4cHg7XG4kc2l6ZS1zOiAxMnB4O1xuJHNpemUtbTogMTZweDtcbiRzaXplLWw6IDI0cHg7XG4kc2l6ZS14bDogMzJweDtcbiRzaXplLWxnOiAyOHB4O1xuJHNpemUteHhsOiA0MHB4O1xuXG4kbWF0LXRvb2xiYXIteHM6IDUycHg7XG4kbWF0LXRvb2xiYXItZ3QteHM6IDU2cHg7XG4iXX0= */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industries/industries.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industries/industries.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: IndustriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndustriesComponent", function() { return IndustriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let IndustriesComponent = class IndustriesComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.industriesData = this.route.snapshot.data.pageData.data;
        this.tabs = [];
        this.displayTypes = ['Mega Trends', 'Digital Pentagon'];
        this.dummyTrends = ['Trend 1', 'Trend 2', 'Trend 3'];
        this.enablePrev = false;
        this.enableNext = false;
        this.subDomains = {};
        this.contentStripsHash = {
            narratives: [],
            clientStories: [],
            techSkills: [],
            reference: [],
            megatrends: [],
        };
        this.baseIndustriesUrl = '/app/infy/navigator/industries/';
        this.selectedTab = 'CME';
        this.selectedTabRoute = 'CME';
        this.anaylticsTab = 'CME';
        this.selectedPillar = 'Accelerate';
        this.selectedSubDomain = 'Banking';
        this.megaTrendSelected = false;
        this.megaTrendwidgetResolverData = {
            widgetType: 'contentStrip',
            widgetSubType: 'contentStripMultiple',
            widgetData: {
                strips: [
                    {
                        key: 'megaTrends-strip',
                        preWidgets: [],
                        title: 'Mega Trends',
                        filters: [],
                        request: {
                            ids: [],
                        },
                    },
                ],
                noDataWidget: {
                    widgetData: {
                        html: 
                        // tslint:disable-next-line: max-line-length
                        '<div class="padding-s"> <div class="margin-bottom-s margin-top-m" i18n> <p class = "mat-h2 padding-left-m padding-right-m text-center margin-top-l font-weight">Contents will appear soon...</div>',
                        containerStyle: {},
                    },
                    widgetSubType: 'elementHtml',
                    widgetType: 'element',
                },
                errorWidget: {
                    widgetType: 'errorResolver',
                    widgetSubType: 'errorResolver',
                    widgetData: {
                        errorType: 'internalServer',
                    },
                },
            },
        };
        this.navigatorwidgetResolverData = {
            widgetType: 'contentStrip',
            widgetSubType: 'contentStripMultiple',
            widgetData: {
                strips: [
                    {
                        key: 'narratives-strip',
                        preWidgets: [],
                        title: 'Narratives',
                        filters: [],
                        request: {
                            ids: [],
                        },
                    },
                    {
                        key: 'references-strip',
                        preWidgets: [],
                        title: 'References',
                        filters: [],
                        request: {
                            ids: [],
                        },
                    },
                    {
                        key: 'clientStories-strip',
                        preWidgets: [],
                        title: 'Client Stories',
                        filters: [],
                        request: {
                            ids: [],
                        },
                    },
                    {
                        key: 'techSkills-strip',
                        preWidgets: [],
                        title: 'Tech Skills',
                        filters: [],
                        request: {
                            ids: [],
                        },
                    },
                ],
                noDataWidget: {
                    widgetData: {
                        html: 
                        // tslint:disable-next-line: max-line-length
                        '<div class="padding-s"> <div class="margin-bottom-s margin-top-m" i18n> <p class = "mat-h2 padding-left-m padding-right-m text-center margin-top-l font-weight">Contents will appear soon...</div>',
                        containerStyle: {},
                    },
                    widgetSubType: 'elementHtml',
                    widgetType: 'element',
                },
                errorWidget: {
                    widgetType: 'errorResolver',
                    widgetSubType: 'errorResolver',
                    widgetData: {
                        errorType: 'internalServer',
                    },
                },
            },
        };
        this.selectedType = this.displayTypes[1];
        this.selectedTrend = this.dummyTrends[0];
        this.selectedTheme = '';
        this.fetchingData = true;
        this.fetchingContentData = true;
    }
    ngOnInit() {
        this.fetchingData = true;
        this.fetchingData = false;
        this.tabs = Object.keys(this.industriesData);
        this.route.params.subscribe(params => {
            this.selectedTabRoute = params.tab ? params.tab : 'CME';
            this.selectedTab = params.tab ? params.tab.split('-').join(' ') : 'CME';
            this.anaylticsTab = this.selectedTab;
            this.anaylticsTab = this.anaylticsTab.replace(' ', '-');
            this.selectedSubDomain = Object.keys(this.industriesData[this.selectedTab])[0];
            if (this.industriesData[this.selectedTab] &&
                this.industriesData[this.selectedTab][this.selectedSubDomain] &&
                this.industriesData[this.selectedTab][this.selectedSubDomain][this.selectedPillar] &&
                this.industriesData[this.selectedTab][this.selectedSubDomain][this.selectedPillar].length) {
                this.selectedTheme = this.industriesData[this.selectedTab][this.selectedSubDomain][this.selectedPillar][0].themeName;
            }
            this.selectedType = this.displayTypes[1];
            this.selectedTrend = this.dummyTrends[0];
            // this.selectFirstTheme();
            this.selectMegaTrend();
            this.updateContent();
        });
    }
    fetchSubDomains() {
        if (this.industriesData) {
            const subDomains = Object.keys(this.industriesData[this.selectedTab]);
            const idx = Object.keys(this.industriesData[this.selectedTab]).indexOf('hasData');
            if (idx > -1) {
                subDomains.splice(idx, 1);
            }
            return subDomains;
        }
        return [];
    }
    subDomainClicked(subDomain) {
        // this.loggerSvc.log('subdomain clicked', subDomain)
        this.selectedSubDomain = subDomain;
        if (this.industriesData[this.selectedTab][this.selectedSubDomain][this.selectedPillar] &&
            this.industriesData[this.selectedTab][this.selectedSubDomain][this.selectedPillar].length) {
            this.selectedTheme = this.industriesData[this.selectedTab][this.selectedSubDomain][this.selectedPillar][0].themeName;
        }
        // this.loggerSvc.log('selectedtheme', this.selectedTheme)
        // this.selectMegaTrend()
        this.updateContent();
    }
    trackClicked(track) {
        this.selectedPillar = track;
        if (this.industriesData[this.selectedTab][this.selectedSubDomain][this.selectedPillar] &&
            this.industriesData[this.selectedTab][this.selectedSubDomain][this.selectedPillar].length) {
            this.selectedTheme = this.industriesData[this.selectedTab][this.selectedSubDomain][this.selectedPillar][0].themeName;
        }
        this.updateContent();
        // this.selectedTheme = dummyData[this.selectedTab][track][0]["themeName"];
    }
    updateContent() {
        this.fetchingContentData = true;
        this.contentStripsHash = {
            narratives: [],
            clientStories: [],
            techSkills: [],
            reference: [],
            megatrends: [],
        };
        this.updateContentStrip();
    }
    megaTrendModeClicked() {
        this.selectedType = this.displayTypes[0];
        this.selectMegaTrend();
    }
    navigateToAnalytics() {
        this.router.navigate(['/app/infy/navigator/analytics', this.anaylticsTab]);
    }
    selectMegaTrend() {
        try {
            this.updateMegaTrends(this.industriesData[this.selectedTab][this.selectedSubDomain].megatrends[0]);
        }
        catch (e) {
            // //console.log(e);
        }
    }
    updateMegaTrends(trend) {
        const ids = trend.content;
        this.selectedTrend = trend.trendName;
        this.fetchingContentData = false;
        this.megaTrendSelected = true;
        this.megaTrendwidgetResolverData.widgetData.strips.forEach(strip => {
            if (strip.key === 'megaTrends-strip' && strip.request) {
                strip.request.ids = ids;
            }
        });
        this.megaTrendwidgetResolverData = Object.assign({}, this.megaTrendwidgetResolverData);
        // this.loggerSvc.log('widgetdata', this.megaTrendwidgetResolverData)
    }
    updateContentStrip() {
        const strips = ['narratives', 'clientStories', 'techSkills', 'reference'];
        strips.forEach(stripName => {
            const idObjects = this.industriesData[this.selectedTab][this.selectedSubDomain][this.selectedPillar].find((themes) => {
                return themes.themeName === this.selectedTheme;
            })[stripName];
            const ids = idObjects.map(id => id.identifier);
            // this.contentStripsHash[stripName] = ids
            this.navigatorwidgetResolverData.widgetData.strips.forEach(strip => {
                if (strip.key === 'narratives-strip' && strip.request && stripName === 'narratives') {
                    strip.request.ids = ids;
                }
                else if (strip.key === 'references-strip' && strip.request && stripName === 'reference') {
                    strip.request.ids = ids;
                }
                else if (strip.key === 'clientStories-strip' &&
                    strip.request &&
                    stripName === 'clientStories') {
                    strip.request.ids = ids;
                    // //console.log("Ids assigned to client Stories", ids);
                }
                else if (strip.key === 'techSkills-strip' &&
                    strip.request &&
                    stripName === 'techSkills') {
                    strip.request.ids = ids;
                    // //console.log("Ids assigned to tech", ids);
                }
            });
        });
        this.navigatorwidgetResolverData = Object.assign({}, this.navigatorwidgetResolverData);
    }
    getStripMeta(stripName) {
        return {
            ctitle: stripName,
        };
    }
    roleClicked(role) {
        this.selectedTheme = role;
        this.updateContent();
    }
    getSelectedIndex() {
        return this.tabs.indexOf(this.selectedTab);
    }
    navigate(event) {
        // this.loggerSvc.log(event.tab.textLabel)
        this.router.navigateByUrl(this.baseIndustriesUrl + event.tab.textLabel.split(' ').join('-'));
    }
};
IndustriesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IndustriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-industries',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./industries.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industries/industries.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./industries.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industries/industries.component.scss")).default]
    })
], IndustriesComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industry-analytics/industry-analytics.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industry-analytics/industry-analytics.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".analytics-loader {\n  margin: 32px auto;\n  max-width: 320px;\n}\n\n.graph-card {\n  padding: 0px;\n  width: 30%;\n  margin-top: 1.5rem;\n}\n\n@media only screen and (min-width: 960px) and (max-width: 1279px) {\n  .graph-card {\n    width: 45%;\n    margin-top: 1.5rem;\n  }\n}\n\n@media only screen and (max-width: 959px) {\n  .graph-card {\n    width: 45%;\n    margin-top: 1.5rem;\n  }\n}\n\n@media only screen and (max-width: 599px) {\n  .graph-card {\n    width: 100%;\n    margin-top: 1.5rem;\n  }\n}\n\n.unique-users-card {\n  width: 27.5%;\n}\n\n@media only screen and (min-width: 960px) and (max-width: 1279px) {\n  .unique-users-card {\n    width: 96%;\n  }\n}\n\n@media only screen and (max-width: 959px) {\n  .unique-users-card {\n    width: 93%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL2luZHVzdHJ5LWFuYWx5dGljcy9pbmR1c3RyeS1hbmFseXRpY3MuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL2luZHVzdHJ5LWFuYWx5dGljcy9pbmR1c3RyeS1hbmFseXRpY3MuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvc3R5bGVzL193cy1taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNERjs7QUNvQkU7RUZ0QkY7SUFNSSxVQUFBO0lBQ0Esa0JBQUE7RUNBRjtBQUNGOztBQ2tDRTtFRjFDRjtJQVdJLFVBQUE7SUFDQSxrQkFBQTtFQ0NGO0FBQ0Y7O0FDdUJFO0VGckNGO0lBZ0JJLFdBQUE7SUFDQSxrQkFBQTtFQ0VGO0FBQ0Y7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FDRkU7RUZERjtJQUlJLFVBQUE7RUNHRjtBQUNGOztBQ2FFO0VGckJGO0lBUUksVUFBQTtFQ0lGO0FBQ0YiLCJmaWxlIjoicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvbmF2aWdhdG9yL3JvdXRlcy9pbmR1c3RyeS1hbmFseXRpY3MvaW5kdXN0cnktYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy1taXhpbnMuc2Nzcyc7XG5cbi5hbmFseXRpY3MtbG9hZGVyIHtcbiAgbWFyZ2luOiAkc2l6ZS14bCBhdXRvO1xuICBtYXgtd2lkdGg6IDMyMHB4O1xufVxuXG4uZ3JhcGgtY2FyZCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQtbSB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIH1cblxuICBAaW5jbHVkZSBicmVha3BvaW50LWx0LW0ge1xuICAgIHdpZHRoOiA0NSU7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICB9XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludC1sdC1zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIH1cbn1cblxuLnVuaXF1ZS11c2Vycy1jYXJkIHtcbiAgd2lkdGg6IDI3LjUlO1xuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQtbSB7XG4gICAgd2lkdGg6IDk2JTtcbiAgfVxuXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQtbHQtbSB7XG4gICAgd2lkdGg6IDkzJTtcbiAgfVxufVxuIiwiLmFuYWx5dGljcy1sb2FkZXIge1xuICBtYXJnaW46IDMycHggYXV0bztcbiAgbWF4LXdpZHRoOiAzMjBweDtcbn1cblxuLmdyYXBoLWNhcmQge1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgLmdyYXBoLWNhcmQge1xuICAgIHdpZHRoOiA0NSU7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIC5ncmFwaC1jYXJkIHtcbiAgICB3aWR0aDogNDUlO1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAuZ3JhcGgtY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICB9XG59XG5cbi51bmlxdWUtdXNlcnMtY2FyZCB7XG4gIHdpZHRoOiAyNy41JTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgLnVuaXF1ZS11c2Vycy1jYXJkIHtcbiAgICB3aWR0aDogOTYlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIC51bmlxdWUtdXNlcnMtY2FyZCB7XG4gICAgd2lkdGg6IDkzJTtcbiAgfVxufSIsIkBpbXBvcnQgJ3N0eWxlcy9fd3MtdmFycy5zY3NzJztcblxuQG1peGluIHJldGluYSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIHByaW50IHtcbiAgQG1lZGlhIG9ubHkgcHJpbnQge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBicmVha3BvaW50LXhzIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC14bCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSBhbmQgKG1heC13aWR0aDogNTAwMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LXMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC14bCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LXhzIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industry-analytics/industry-analytics.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industry-analytics/industry-analytics.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: IndustryAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndustryAnalyticsComponent", function() { return IndustryAnalyticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/navigator.service */ "./project/ws/app/src/lib/routes/infy/routes/navigator/services/navigator.service.ts");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");






let IndustryAnalyticsComponent = class IndustryAnalyticsComponent {
    constructor(route, analyticsSrv, configSvc) {
        this.route = route;
        this.analyticsSrv = analyticsSrv;
        this.configSvc = configSvc;
        this.content = null;
        this.routeParentSubscription = null;
        this.analyticsData = null;
        this.pageNavbar = this.configSvc.pageNavBar;
        this.uniqueUsers = 0;
        this.tagName = '';
        this.tag = '';
        this.isCustomizableColor = false;
        this.isCustomizableType = false;
        this.isExpandTrue = false;
        this.barChartUnitData = {};
        this.barChartAccountData = {};
        this.barChartLocationData = {};
        this.barChartPuData = {};
        this.barChartDuData = {};
        this.barChartJLData = {};
        this.barChartOnExpandData = {};
        this.fetchStatus = 'none';
        this.prefChangeSubscription = null;
        this.onsiteOffshoreData = {};
        this.errorWidget = {
            widgetType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["ROOT_WIDGET_CONFIG"].errorResolver._type,
            widgetSubType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["ROOT_WIDGET_CONFIG"].errorResolver.errorResolver,
            widgetData: {
                errorType: 'internalServer',
            },
        };
        this.route.params.subscribe(queryParameters => {
            if (queryParameters) {
                if (queryParameters['tag']) {
                    this.tag = queryParameters['tag'].split('-').join(' ');
                    const tempTag = queryParameters['tag'].split('-').join('_');
                    this.tagName = `IND_NAV_${tempTag}`;
                }
            }
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.prefChangeSubscription = this.configSvc.prefChangeNotifier.subscribe(() => {
                this.populateChartData();
            });
            this.initData(this.tagName);
        });
    }
    ngOnDestroy() {
        if (this.routeParentSubscription) {
            this.routeParentSubscription.unsubscribe();
        }
        if (this.prefChangeSubscription) {
            this.prefChangeSubscription.unsubscribe();
        }
    }
    initData(tagName) {
        if (this.tagName) {
            this.fetchStatus = 'fetching';
            this.analyticsSrv.getContentAnalytics(tagName).subscribe((result) => {
                this.analyticsData = result;
                this.fetchStatus = 'done';
                this.populateChartData();
            }, () => {
                this.analyticsData = null;
                this.fetchStatus = 'error';
            });
        }
        else {
            this.fetchStatus = 'none';
            this.analyticsData = null;
        }
    }
    populateChartData() {
        if (this.analyticsData) {
            // unique users count
            this.analyticsData.uniqueParticipants.forEach((count) => {
                if (count.key === 'Wingspan') {
                    this.uniqueUsers = count.uniqueCount;
                }
            });
            // Onsite-Offshore PieChart Data
            const pieChartData = [];
            const pieChartLabel = [];
            this.analyticsData.participants.onsiteOffshoreIndicator.forEach((onsiteOffshore) => {
                if (onsiteOffshore.key !== 'NA') {
                    pieChartData.push(onsiteOffshore.count);
                    pieChartLabel.push(onsiteOffshore.key);
                }
                this.onsiteOffshoreData = {
                    widgetType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["ROOT_WIDGET_CONFIG"].graph._type,
                    widgetSubType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["ROOT_WIDGET_CONFIG"].graph.graphGeneral,
                    widgetData: {
                        graphId: 'onsiteOffshoreChart',
                        graphType: 'pie',
                        graphHeight: '250px',
                        graphWidth: '90%',
                        graphLegend: true,
                        graphLegendPosition: 'top',
                        graphLegendFontSize: 11,
                        graphTicksFontSize: 11,
                        graphGridLinesDisplay: false,
                        graphIsCustomizableColor: this.isCustomizableColor,
                        graphIsCustomizableType: this.isCustomizableType,
                        graphDefaultPalette: 'default',
                        graphData: {
                            labels: pieChartLabel,
                            datasets: [
                                {
                                    label: '',
                                    data: pieChartData,
                                    backgroundColor: [
                                        this.configSvc.activeThemeObject
                                            ? this.configSvc.activeThemeObject.color.primary
                                            : '',
                                        this.configSvc.activeThemeObject
                                            ? this.configSvc.activeThemeObject.color.accent
                                            : '',
                                    ],
                                    borderWidth: 1,
                                },
                            ],
                        },
                    },
                };
            });
            // Participants by Unit BarChart Data
            const barChartUnitLabel = [];
            const offshoreUnitData = [];
            const onsiteUnitData = [];
            this.analyticsData.participants.ibu = this.analyticsData.participants.ibu.sort((a, b) => (a.count > b.count ? -1 : a.count < b.count ? 1 : 0));
            this.analyticsData.participants.ibu.forEach((unit) => {
                if (barChartUnitLabel.length < 20) {
                    barChartUnitLabel.push(unit.key);
                }
                unit.value.forEach((val) => {
                    if (val.key.toLowerCase() === 'offshore') {
                        offshoreUnitData.push(val.value);
                    }
                    if (val.key.toLowerCase() === 'onsite') {
                        onsiteUnitData.push(val.value);
                    }
                });
            });
            this.barChartUnitData = {
                widgetType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["ROOT_WIDGET_CONFIG"].graph._type,
                widgetSubType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["ROOT_WIDGET_CONFIG"].graph.graphGeneral,
                widgetData: {
                    graphId: 'unitChart',
                    graphType: 'horizontalBar',
                    graphHeight: '300px',
                    graphWidth: '100%',
                    graphLegend: true,
                    graphLegendPosition: 'top',
                    graphLegendFontSize: 11,
                    graphTicksFontSize: 11,
                    graphGridLinesDisplay: false,
                    graphTicksXAxisDisplay: false,
                    graphTicksYAxisDisplay: true,
                    graphIsCustomizableColor: this.isCustomizableColor,
                    graphIsCustomizableType: this.isCustomizableType,
                    graphDefaultPalette: 'default',
                    graphData: {
                        labels: barChartUnitLabel,
                        datasets: [
                            {
                                label: 'Offshore',
                                backgroundColor: this.configSvc.activeThemeObject
                                    ? this.configSvc.activeThemeObject.color.primary
                                    : '',
                                borderWidth: 1,
                                data: offshoreUnitData,
                            },
                            {
                                label: 'Onsite',
                                backgroundColor: this.configSvc.activeThemeObject
                                    ? this.configSvc.activeThemeObject.color.accent
                                    : '',
                                borderWidth: 1,
                                data: onsiteUnitData,
                            },
                        ],
                    },
                },
            };
            // Participants by PU BarChart Data
            const barChartPULabel = [];
            const offshorePuData = [];
            const onsitePuData = [];
            this.analyticsData.participants.pu = this.analyticsData.participants.pu.sort((a, b) => (a.count > b.count ? -1 : a.count < b.count ? 1 : 0));
            this.analyticsData.participants.pu.forEach((pu) => {
                if (barChartPULabel.length < 20) {
                    barChartPULabel.push(pu.key);
                }
                pu.value.forEach((val) => {
                    if (val.key.toLowerCase() === 'offshore') {
                        offshorePuData.push(val.value);
                    }
                    if (val.key.toLowerCase() === 'onsite') {
                        onsitePuData.push(val.value);
                    }
                });
            });
            this.barChartPuData = {
                widgetType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["ROOT_WIDGET_CONFIG"].graph._type,
                widgetSubType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["ROOT_WIDGET_CONFIG"].graph.graphGeneral,
                widgetData: {
                    graphId: 'puChart',
                    graphType: 'horizontalBar',
                    graphHeight: '300px',
                    graphWidth: '100%',
                    graphLegend: true,
                    graphLegendPosition: 'top',
                    graphLegendFontSize: 11,
                    graphTicksFontSize: 11,
                    graphTicksXAxisDisplay: false,
                    graphTicksYAxisDisplay: true,
                    graphGridLinesDisplay: false,
                    graphIsCustomizableColor: this.isCustomizableColor,
                    graphIsCustomizableType: this.isCustomizableType,
                    graphDefaultPalette: 'default',
                    graphData: {
                        labels: barChartPULabel,
                        datasets: [
                            {
                                label: 'Offshore',
                                backgroundColor: this.configSvc.activeThemeObject
                                    ? this.configSvc.activeThemeObject.color.primary
                                    : '',
                                borderWidth: 1,
                                data: offshorePuData,
                            },
                            {
                                label: 'Onsite',
                                backgroundColor: this.configSvc.activeThemeObject
                                    ? this.configSvc.activeThemeObject.color.accent
                                    : '',
                                borderWidth: 1,
                                data: onsitePuData,
                            },
                        ],
                    },
                },
            };
            // Participants by DU BarChart Data
            const barChartDULabel = [];
            const offshoreDuData = [];
            const onsiteDuData = [];
            this.analyticsData.participants.du = this.analyticsData.participants.du.sort((a, b) => (a.count > b.count ? -1 : a.count < b.count ? 1 : 0));
            this.analyticsData.participants.du.forEach((du) => {
                if (barChartDULabel.length < 20) {
                    barChartDULabel.push(du.key);
                }
                du.value.forEach((val) => {
                    if (val.key.toLowerCase() === 'offshore') {
                        offshoreDuData.push(val.value);
                    }
                    if (val.key.toLowerCase() === 'onsite') {
                        onsiteDuData.push(val.value);
                    }
                });
            });
            this.barChartDuData = {
                widgetType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["ROOT_WIDGET_CONFIG"].graph._type,
                widgetSubType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["ROOT_WIDGET_CONFIG"].graph.graphGeneral,
                widgetData: {
                    graphId: 'duChart',
                    graphType: 'horizontalBar',
                    graphHeight: '300px',
                    graphWidth: '100%',
                    graphLegend: true,
                    graphLegendPosition: 'top',
                    graphLegendFontSize: 11,
                    graphTicksFontSize: 11,
                    graphTicksXAxisDisplay: false,
                    graphTicksYAxisDisplay: true,
                    graphGridLinesDisplay: false,
                    graphIsCustomizableColor: this.isCustomizableColor,
                    graphIsCustomizableType: this.isCustomizableType,
                    graphDefaultPalette: 'default',
                    graphData: {
                        labels: barChartDULabel,
                        datasets: [
                            {
                                label: 'Offshore',
                                backgroundColor: this.configSvc.activeThemeObject
                                    ? this.configSvc.activeThemeObject.color.primary
                                    : '',
                                borderWidth: 1,
                                data: offshoreDuData,
                            },
                            {
                                label: 'Onsite',
                                backgroundColor: this.configSvc.activeThemeObject
                                    ? this.configSvc.activeThemeObject.color.accent
                                    : '',
                                borderWidth: 1,
                                data: onsiteDuData,
                            },
                        ],
                    },
                },
            };
            // Participants by JL BarChart Data
            const barChartJLLabel = [];
            const offshoreJLData = [];
            const onsiteJLData = [];
            this.analyticsData.participants.jl = this.analyticsData.participants.jl.sort((a, b) => (a.count > b.count ? -1 : a.count < b.count ? 1 : 0));
            this.analyticsData.participants.jl.forEach((jl) => {
                if (barChartJLLabel.length < 20) {
                    barChartJLLabel.push(jl.key);
                }
                jl.value.forEach((val) => {
                    if (val.key.toLowerCase() === 'offshore') {
                        offshoreJLData.push(val.value);
                    }
                    if (val.key.toLowerCase() === 'onsite') {
                        onsiteJLData.push(val.value);
                    }
                });
            });
            this.barChartJLData = {
                widgetType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["ROOT_WIDGET_CONFIG"].graph._type,
                widgetSubType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["ROOT_WIDGET_CONFIG"].graph.graphGeneral,
                widgetData: {
                    graphId: 'jlChart',
                    graphType: 'horizontalBar',
                    graphHeight: '300px',
                    graphWidth: '100%',
                    graphLegend: true,
                    graphLegendPosition: 'top',
                    graphLegendFontSize: 11,
                    graphTicksFontSize: 11,
                    graphTicksXAxisDisplay: false,
                    graphTicksYAxisDisplay: true,
                    graphGridLinesDisplay: false,
                    graphIsCustomizableColor: this.isCustomizableColor,
                    graphIsCustomizableType: this.isCustomizableType,
                    graphDefaultPalette: 'default',
                    graphData: {
                        labels: barChartJLLabel,
                        datasets: [
                            {
                                label: 'Offshore',
                                backgroundColor: this.configSvc.activeThemeObject
                                    ? this.configSvc.activeThemeObject.color.primary
                                    : '',
                                borderWidth: 1,
                                data: offshoreJLData,
                            },
                            {
                                label: 'Onsite',
                                backgroundColor: this.configSvc.activeThemeObject
                                    ? this.configSvc.activeThemeObject.color.accent
                                    : '',
                                borderWidth: 1,
                                data: onsiteJLData,
                            },
                        ],
                    },
                },
            };
            // Participants by Location BarChart Data
            const barChartLocationLabel = [];
            const offshoreLocationData = [];
            const onsiteLocationData = [];
            this.analyticsData.participants.location = this.analyticsData.participants.location.sort((a, b) => (a.count > b.count ? -1 : a.count < b.count ? 1 : 0));
            this.analyticsData.participants.location.forEach((location) => {
                if (barChartLocationLabel.length < 20) {
                    barChartLocationLabel.push(location.key);
                }
                location.value.forEach((val) => {
                    if (val.key.toLowerCase() === 'offshore') {
                        offshoreLocationData.push(val.value);
                    }
                    if (val.key.toLowerCase() === 'onsite') {
                        onsiteLocationData.push(val.value);
                    }
                });
            });
            this.barChartLocationData = {
                widgetType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["ROOT_WIDGET_CONFIG"].graph._type,
                widgetSubType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["ROOT_WIDGET_CONFIG"].graph.graphGeneral,
                widgetData: {
                    graphId: 'locationChart',
                    graphType: 'horizontalBar',
                    graphHeight: '300px',
                    graphWidth: '100%',
                    graphLegend: true,
                    graphLegendPosition: 'top',
                    graphLegendFontSize: 11,
                    graphTicksFontSize: 11,
                    graphTicksXAxisDisplay: false,
                    graphTicksYAxisDisplay: true,
                    graphGridLinesDisplay: false,
                    graphIsCustomizableColor: this.isCustomizableColor,
                    graphIsCustomizableType: this.isCustomizableType,
                    graphDefaultPalette: 'default',
                    graphData: {
                        labels: barChartLocationLabel,
                        datasets: [
                            {
                                label: 'Offshore',
                                backgroundColor: this.configSvc.activeThemeObject
                                    ? this.configSvc.activeThemeObject.color.primary
                                    : '',
                                borderWidth: 1,
                                data: offshoreLocationData,
                            },
                            {
                                label: 'Onsite',
                                backgroundColor: this.configSvc.activeThemeObject
                                    ? this.configSvc.activeThemeObject.color.accent
                                    : '',
                                borderWidth: 1,
                                data: onsiteLocationData,
                            },
                        ],
                    },
                },
            };
            // Participants by Account BarChart Data
            const barChartAccountLabel = [];
            const offshoreAccountData = [];
            const onsiteAccountData = [];
            this.analyticsData.participants.account = this.analyticsData.participants.account.sort((a, b) => (a.count > b.count ? -1 : a.count < b.count ? 1 : 0));
            this.analyticsData.participants.account.forEach((account) => {
                if (barChartAccountLabel.length < 20) {
                    barChartAccountLabel.push(account.key);
                }
                account.value.forEach((val) => {
                    if (val.key.toLowerCase() === 'offshore') {
                        offshoreAccountData.push(val.value);
                    }
                    if (val.key.toLowerCase() === 'onsite') {
                        onsiteAccountData.push(val.value);
                    }
                });
            });
            this.barChartAccountData = {
                widgetType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["ROOT_WIDGET_CONFIG"].graph._type,
                widgetSubType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["ROOT_WIDGET_CONFIG"].graph.graphGeneral,
                widgetData: {
                    graphId: 'accountChart',
                    graphType: 'horizontalBar',
                    graphHeight: '300px',
                    graphWidth: '100%',
                    graphLegend: true,
                    graphLegendPosition: 'top',
                    graphLegendFontSize: 11,
                    graphTicksFontSize: 11,
                    graphTicksXAxisDisplay: false,
                    graphTicksYAxisDisplay: true,
                    graphGridLinesDisplay: false,
                    graphIsCustomizableColor: this.isCustomizableColor,
                    graphIsCustomizableType: this.isCustomizableType,
                    graphDefaultPalette: 'default',
                    graphData: {
                        labels: barChartAccountLabel,
                        datasets: [
                            {
                                label: 'Offshore',
                                backgroundColor: this.configSvc.activeThemeObject
                                    ? this.configSvc.activeThemeObject.color.primary
                                    : '',
                                borderWidth: 1,
                                data: offshoreAccountData,
                            },
                            {
                                label: 'Onsite',
                                backgroundColor: this.configSvc.activeThemeObject
                                    ? this.configSvc.activeThemeObject.color.accent
                                    : '',
                                borderWidth: 1,
                                data: onsiteAccountData,
                            },
                        ],
                    },
                },
            };
            // Participants by Topics BarChart Data
            // const barChartTopicsLabel: string[] = []
            // const offshoreTopicsData: number[] = []
            // const onsiteTopicsData: number[] = []
            // const data: any = []
            // this.analyticsData.refiners.forEach(element => {
            //   if (Object.keys(element)[0] === 'topics') {
            //   }
            // })
            // this.analyticsData.participants.account.forEach((account: IParticipantObj) => {
            //   if (barChartAccountLabel.length < 20) {
            //     barChartAccountLabel.push(account.key)
            //   }
            //   account.value.forEach((val: IObjPair) => {
            //     if (val.key.toLowerCase() === 'offshore') {
            //       offshoreAccountData.push(val.value)
            //     }
            //     if (val.key.toLowerCase() === 'onsite') {
            //       onsiteAccountData.push(val.value)
            //     }
            //   })
            // })
            // this.barChartAccountData = {
            //   widgetType: ROOT_WIDGET_CONFIG.graph._type,
            //   widgetSubType: ROOT_WIDGET_CONFIG.graph.graphGeneral,
            //   widgetData: {
            //     graphId: 'accountChart',
            //     graphType: 'horizontalBar',
            //     graphHeight: '300px',
            //     graphWidth: '100%',
            //     graphLegend: true,
            //     graphLegendPosition: 'top',
            //     graphLegendFontSize: 11,
            //     graphTicksFontSize: 11,
            //     graphTicksXAxisDisplay: false,
            //     graphTicksYAxisDisplay: true,
            //     graphGridLinesDisplay: false,
            //     graphIsCustomizableColor: this.isCustomizableColor,
            //     graphIsCustomizableType: this.isCustomizableType,
            //     graphDefaultPalette: 'default',
            //     graphData: {
            //       labels: barChartAccountLabel,
            //       datasets: [
            //         {
            //           label: 'Offshore',
            //           backgroundColor: this.configSvc.activeThemeObject
            //             ? this.configSvc.activeThemeObject.color.primary
            //             : '',
            //           borderWidth: 1,
            //           data: offshoreAccountData,
            //         },
            //         {
            //           label: 'Onsite',
            //           backgroundColor: this.configSvc.activeThemeObject
            //             ? this.configSvc.activeThemeObject.color.accent
            //             : '',
            //           borderWidth: 1,
            //           data: onsiteAccountData,
            //         },
            //       ],
            //     },
            //   },
            // }
        }
    }
    onExpand(field) {
        const barChartOnExpandLabel = [];
        const offshoreOnExpandData = [];
        const onsiteOnExpandData = [];
        if (this.analyticsData) {
            this.analyticsData.participants[field].forEach((expandData) => {
                barChartOnExpandLabel.push(expandData.key);
                expandData.value.forEach((val) => {
                    if (val.key.toLowerCase() === 'offshore') {
                        offshoreOnExpandData.push(val.value);
                    }
                    if (val.key.toLowerCase() === 'onsite') {
                        onsiteOnExpandData.push(val.value);
                    }
                });
            });
        }
        this.barChartOnExpandData = {
            widgetType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["ROOT_WIDGET_CONFIG"].graph._type,
            widgetSubType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["ROOT_WIDGET_CONFIG"].graph.graphGeneral,
            widgetData: {
                graphId: 'expandChart',
                graphType: 'horizontalBar',
                graphHeight: '4000px',
                graphWidth: '100%',
                graphLegend: true,
                graphLegendPosition: 'top',
                graphLegendFontSize: 11,
                graphTicksFontSize: 11,
                graphTicksXAxisDisplay: false,
                graphTicksYAxisDisplay: true,
                graphGridLinesDisplay: false,
                graphIsCustomizableColor: this.isCustomizableColor,
                graphIsCustomizableType: this.isCustomizableType,
                graphDefaultPalette: 'default',
                graphData: {
                    labels: barChartOnExpandLabel,
                    datasets: [
                        {
                            label: 'Offshore',
                            backgroundColor: this.configSvc.activeThemeObject
                                ? this.configSvc.activeThemeObject.color.primary
                                : '',
                            borderWidth: 1,
                            data: offshoreOnExpandData,
                        },
                        {
                            label: 'Onsite',
                            backgroundColor: this.configSvc.activeThemeObject
                                ? this.configSvc.activeThemeObject.color.accent
                                : '',
                            borderWidth: 1,
                            data: onsiteOnExpandData,
                        },
                    ],
                },
            },
        };
        this.isExpandTrue = true;
    }
    onClose() {
        this.isExpandTrue = false;
    }
};
IndustryAnalyticsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_4__["NavigatorService"] },
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_2__["ConfigurationsService"] }
];
IndustryAnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-industry-analytics',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./industry-analytics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industry-analytics/industry-analytics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./industry-analytics.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industry-analytics/industry-analytics.component.scss")).default]
    })
], IndustryAnalyticsComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industry/industry.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industry/industry.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner {\n  background-position: right;\n  background-size: cover;\n  height: 200px;\n  width: 100%;\n}\n\n.banner-description {\n  margin: 0 16px;\n}\n\n.grid-display {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-row-gap: 2px;\n  grid-column-gap: 2px;\n  grid-auto-rows: 100px;\n}\n\n.grid-data {\n  border: 1px solid #3f51b5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL2luZHVzdHJ5L2luZHVzdHJ5LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvbmF2aWdhdG9yL3JvdXRlcy9pbmR1c3RyeS9pbmR1c3RyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVFLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0hGOztBRFVBO0VBRUUsY0FBQTtBQ1JGOztBRHVCQTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQ3BCRjs7QUR1QkE7RUFDRSx5QkFBQTtBQ3BCRiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL2luZHVzdHJ5L2luZHVzdHJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGltcG9ydCAnfnNyYy9zdHlsZXMvd3MtdmFycyc7XG4vLyBAaW1wb3J0ICd+c3JjL3N0eWxlcy93cy1taXhpbnMnO1xuXG4uYmFubmVyIHtcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9jb21tb24vL25hdmlnYXRvci9iYW5uZXJzL2JpX25zby5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcblxuICAvLyBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgLy8gICBoZWlnaHQ6IDI1MHB4O1xuICAvLyB9XG59XG5cbi5iYW5uZXItZGVzY3JpcHRpb24ge1xuICAvLyBwYWRkaW5nOiAwICRzaXplLXhsO1xuICBtYXJnaW46IDAgMTZweDtcbn1cblxuLy8gLnNtYWxsLWJhbm5lci10ZXh0IHtcbi8vICAgQGluY2x1ZGUgYnJlYWtwb2ludC14cyB7XG4vLyAgICAgZm9udC1zaXplOiAxLjVyZW07XG4vLyAgIH1cbi8vIH1cblxuLy8gLnNtYWxsLWJhbm5lci1kZXNjcmlwdGlvbiB7XG4vLyAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMge1xuLy8gICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuLy8gICB9XG4vLyB9XG5cbi5ncmlkLWRpc3BsYXkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICBncmlkLXJvdy1nYXA6IDJweDtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAycHg7XG4gIGdyaWQtYXV0by1yb3dzOiAxMDBweDtcbn1cblxuLmdyaWQtZGF0YSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZjUxYjU7XG59XG4iLCIuYmFubmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmFubmVyLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi5ncmlkLWRpc3BsYXkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICBncmlkLXJvdy1nYXA6IDJweDtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAycHg7XG4gIGdyaWQtYXV0by1yb3dzOiAxMDBweDtcbn1cblxuLmdyaWQtZGF0YSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZjUxYjU7XG59Il19 */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industry/industry.component.ts":
/*!***************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industry/industry.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: IndustryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndustryComponent", function() { return IndustryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let IndustryComponent = class IndustryComponent {
    constructor(route) {
        this.route = route;
        this.industriesData = this.route.snapshot.data.pageData.data;
        this.tabNames = [];
        this.defaultThumbnail = '/assets/images/missing-thumbnail.png';
        this.tabs = [];
        this.styles = [{}];
        this.tabNames = Object.keys(this.industriesData);
        const styler = {
            color: 'white',
            'background-image': `url(${this.defaultThumbnail})`,
            'grid-column-start': 1,
            'grid-column-end': 3,
        };
        const style2 = {
            color: 'white',
            'background-image': `url(${this.defaultThumbnail})`,
            'grid-row-start': 3,
            'grid-row-end': 5,
        };
        this.styles.push(styler);
        this.styles.push(style2);
        let count = 0;
        this.tabNames.forEach(tab => {
            const data = {
                name: tab,
                image: this.defaultThumbnail,
                style: this.styles[count],
            };
            this.tabs.push(data);
            count += 1;
        });
    }
    ngOnInit() { }
};
IndustryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
IndustryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-industry',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./industry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industry/industry.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./industry.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/industry/industry.component.scss")).default]
    })
], IndustryComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/launchpad/launchpad.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/launchpad/launchpad.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner {\n  height: 200px;\n  width: 100%;\n}\n\n.text-white {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL2xhdW5jaHBhZC9sYXVuY2hwYWQuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL2xhdW5jaHBhZC9sYXVuY2hwYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBO0VBQ0UsWUFBQTtBQ0ZGIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL25hdmlnYXRvci9yb3V0ZXMvbGF1bmNocGFkL2xhdW5jaHBhZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgJ35zcmMvc3R5bGVzL3dzLXZhcnMnO1xuLy8gQGltcG9ydCAnfnNyYy9zdHlsZXMvd3MtbWl4aW5zJztcblxuLmJhbm5lciB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGV4dC13aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiIsIi5iYW5uZXIge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRleHQtd2hpdGUge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/launchpad/launchpad.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/launchpad/launchpad.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: LaunchpadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaunchpadComponent", function() { return LaunchpadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LaunchpadComponent = class LaunchpadComponent {
    constructor() {
        this.coursesFetched = false;
        this.coursesResolverData = {
            widgetType: 'contentStrip',
            widgetSubType: 'contentStripMultiple',
            widgetData: {
                strips: [
                    {
                        key: '',
                        preWidgets: [],
                        title: '',
                        filters: [],
                        request: {
                            ids: ['lex_auth_012612333141950464848'],
                        },
                    },
                ],
                loader: true,
            },
        };
        this.coursesFetched = false;
    }
    ngOnInit() { }
};
LaunchpadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-launchpad',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./launchpad.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/launchpad/launchpad.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./launchpad.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/launchpad/launchpad.component.scss")).default]
    })
], LaunchpadComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/leaders/leaders.component.scss":
/*!***************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/leaders/leaders.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner {\n  background-position: right;\n  background-size: cover;\n  height: 200px;\n  width: 100%;\n}\n\n.text-white {\n  color: white;\n}\n\n.text-bold {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL2xlYWRlcnMvbGVhZGVycy5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL25hdmlnYXRvci9yb3V0ZXMvbGVhZGVycy9sZWFkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL25hdmlnYXRvci9yb3V0ZXMvbGVhZGVycy9sZWFkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lciB7XG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvY29tbW9uLy9uYXZpZ2F0b3IvYmFubmVycy9iaV9uc28uanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXh0LXdoaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iLCIuYmFubmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGV4dC13aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/leaders/leaders.component.ts":
/*!*************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/leaders/leaders.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: LeadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadersComponent", function() { return LeadersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LeadersComponent = class LeadersComponent {
    constructor(route) {
        this.route = route;
        this.accelerateWidgetResolverData = {
            widgetType: 'contentStrip',
            widgetSubType: 'contentStripMultiple',
            widgetData: {
                strips: [
                    {
                        key: 'accelerate-strip',
                        preWidgets: [
                            {
                                widgetData: {
                                    // tslint:disable-next-line: max-line-length
                                    html: `<img class="w-full h-full" src="/assets/images/marketing/Pentagon_Accelerate.svg"/>`,
                                    containerStyle: {
                                        width: '265px',
                                    },
                                },
                                widgetSubType: 'elementHtml',
                                widgetType: 'element',
                                widgetHostClass: 'flex margin-right-l ws-mat-primary-text',
                                widgetInstanceId: 'strip_featured',
                            },
                        ],
                        title: 'Accelerate',
                        filters: [],
                        request: {
                            ids: [],
                        },
                    },
                ],
                noDataWidget: {
                    widgetData: {
                        html: 
                        // tslint:disable-next-line: max-line-length
                        '<div class="padding-s"> <div class="margin-bottom-s margin-top-m" i18n> <p class = "mat-h2 padding-left-m padding-right-m text-center margin-top-l font-weight">Contents will appear soon...</div>',
                        containerStyle: {},
                    },
                    widgetSubType: 'elementHtml',
                    widgetType: 'element',
                },
                errorWidget: {
                    widgetType: 'errorResolver',
                    widgetSubType: 'errorResolver',
                    widgetData: {
                        errorType: 'internalServer',
                    },
                },
                loader: true,
            },
        };
        this.assureWidgetResolverData = {
            widgetType: 'contentStrip',
            widgetSubType: 'contentStripMultiple',
            widgetData: {
                strips: [
                    {
                        key: 'assure-strip',
                        preWidgets: [
                            {
                                widgetData: {
                                    // tslint:disable-next-line: max-line-length
                                    html: `<img class="w-full h-full" src="/assets/images/marketing/Pentagon_Assure.svg"/>`,
                                    containerStyle: { width: '265px' },
                                },
                                widgetSubType: 'elementHtml',
                                widgetType: 'element',
                                widgetHostClass: 'flex margin-right-l',
                                widgetInstanceId: 'strip_featured',
                            },
                        ],
                        title: 'Assure',
                        filters: [],
                        request: {
                            ids: ['lex_13387578105992038000'],
                        },
                    },
                ],
                noDataWidget: {
                    widgetData: {
                        html: 
                        // tslint:disable-next-line: max-line-length
                        '<div class="padding-s"> <div class="margin-bottom-s margin-top-m" i18n> <p class = "mat-h2 padding-left-m padding-right-m text-center margin-top-l font-weight">Contents will appear soon...</div>',
                        containerStyle: {},
                    },
                    widgetSubType: 'elementHtml',
                    widgetType: 'element',
                },
                errorWidget: {
                    widgetType: 'errorResolver',
                    widgetSubType: 'errorResolver',
                    widgetData: {
                        errorType: 'internalServer',
                    },
                },
                loader: true,
            },
        };
        this.experienceWidgetResolverData = {
            widgetType: 'contentStrip',
            widgetSubType: 'contentStripMultiple',
            widgetData: {
                strips: [
                    {
                        key: 'experience-strip',
                        preWidgets: [
                            {
                                widgetData: {
                                    // tslint:disable-next-line: max-line-length
                                    html: `<img class="w-full h-full" src="/assets/images/marketing/Pentagon_Experience.svg"/>`,
                                    containerStyle: {
                                        width: '265px',
                                    },
                                },
                                widgetSubType: 'elementHtml',
                                widgetType: 'element',
                                widgetHostClass: 'flex margin-right-l',
                                widgetInstanceId: 'strip_featured',
                            },
                        ],
                        title: 'Experience',
                        filters: [],
                        request: {
                            ids: ['lex_13387578105992038000'],
                        },
                    },
                ],
                noDataWidget: {
                    widgetData: {
                        html: 
                        // tslint:disable-next-line: max-line-length
                        '<div class="padding-s"> <div class="margin-bottom-s margin-top-m" i18n> <p class = "mat-h2 padding-left-m padding-right-m text-center margin-top-l font-weight">Contents will appear soon...</div>',
                        containerStyle: {},
                    },
                    widgetSubType: 'elementHtml',
                    widgetType: 'element',
                },
                errorWidget: {
                    widgetType: 'errorResolver',
                    widgetSubType: 'errorResolver',
                    widgetData: {
                        errorType: 'internalServer',
                    },
                },
                loader: true,
            },
        };
        this.insightWidgetResolverData = {
            widgetType: 'contentStrip',
            widgetSubType: 'contentStripMultiple',
            widgetData: {
                strips: [
                    {
                        key: 'insight-strip',
                        preWidgets: [
                            {
                                widgetData: {
                                    // tslint:disable-next-line: max-line-length
                                    html: `<img class="w-full h-full" src="/assets/images/marketing/Pentagon_Insight.svg"/>`,
                                    containerStyle: {
                                        width: '265px',
                                    },
                                },
                                widgetSubType: 'elementHtml',
                                widgetType: 'element',
                                widgetHostClass: 'flex margin-right-l',
                                widgetInstanceId: 'strip_featured',
                            },
                        ],
                        title: 'Insight',
                        filters: [],
                        request: {
                            ids: ['lex_13387578105992038000'],
                        },
                    },
                ],
                noDataWidget: {
                    widgetData: {
                        html: 
                        // tslint:disable-next-line: max-line-length
                        '<div class="padding-s"> <div class="margin-bottom-s margin-top-m" i18n> <p class = "mat-h2 padding-left-m padding-right-m text-center margin-top-l font-weight">Contents will appear soon...</div>',
                        containerStyle: {},
                    },
                    widgetSubType: 'elementHtml',
                    widgetType: 'element',
                },
                errorWidget: {
                    widgetType: 'errorResolver',
                    widgetSubType: 'errorResolver',
                    widgetData: {
                        errorType: 'internalServer',
                    },
                },
                loader: true,
            },
        };
        this.innovateWidgetResolverData = {
            widgetType: 'contentStrip',
            widgetSubType: 'contentStripMultiple',
            widgetData: {
                strips: [
                    {
                        key: 'innovate-strip',
                        preWidgets: [
                            {
                                widgetData: {
                                    // tslint:disable-next-line: max-line-length
                                    html: `<img class="w-full h-full" src="/assets/images/marketing/Pentagon_Innovate.svg"/>`,
                                    containerStyle: {
                                        width: '265px',
                                    },
                                },
                                widgetSubType: 'elementHtml',
                                widgetType: 'element',
                                widgetHostClass: 'flex margin-right-l',
                                widgetInstanceId: 'strip_featured',
                            },
                        ],
                        title: 'Innovate',
                        filters: [],
                        request: {
                            ids: ['lex_13387578105992038000'],
                        },
                    },
                ],
                noDataWidget: {
                    widgetData: {
                        html: 
                        // tslint:disable-next-line: max-line-length
                        '<div class="padding-s"> <div class="margin-bottom-s margin-top-m" i18n> <p class = "mat-h2 padding-left-m padding-right-m text-center margin-top-l font-weight">Contents will appear soon...</div>',
                        containerStyle: {},
                    },
                    widgetSubType: 'elementHtml',
                    widgetType: 'element',
                },
                errorWidget: {
                    widgetType: 'errorResolver',
                    widgetSubType: 'errorResolver',
                    widgetData: {
                        errorType: 'internalServer',
                    },
                },
                loader: true,
            },
        };
        this.idsObtained = true;
        this.selectedTrack = 'Accelerate';
        this.leadersData = this.route.snapshot.data.pageData.data.dm_data;
        this.leadersArray = [];
        this.availableCourses = [];
        // this.loggerSvc.log('Leaders Data', this.leadersData)
        this.initializeTrack('Accelerate');
    }
    ngOnInit() { }
    initializeTrack(trackName) {
        for (let i = 0; i < this.leadersData.length; i += 1) {
            if (this.leadersData[i].arm_name === 'Accelerate' && trackName === 'Accelerate') {
                const ids = this.leadersData[i].courses.map(course => {
                    return course.course_link.split('/').reverse()[0];
                });
                this.accelerateWidgetResolverData.widgetData.strips.forEach(strip => {
                    if (strip.key === 'accelerate-strip' && strip.request && strip.preWidgets) {
                        strip.request.ids = ids;
                    }
                });
                this.accelerateWidgetResolverData = Object.assign({}, this.accelerateWidgetResolverData);
            }
            else if (this.leadersData[i].arm_name === 'Assure' && trackName === 'Assure') {
                const ids = this.leadersData[i].courses.map(course => {
                    return course.course_link.split('/').reverse()[0];
                });
                this.assureWidgetResolverData.widgetData.strips.forEach(strip => {
                    if (strip.key === 'assure-strip' && strip.request && strip.preWidgets) {
                        strip.request.ids = ids;
                    }
                });
                this.assureWidgetResolverData = Object.assign({}, this.assureWidgetResolverData);
            }
            else if (this.leadersData[i].arm_name === 'Experience' && trackName === 'Experience') {
                const ids = this.leadersData[i].courses.map(course => {
                    return course.course_link.split('/').reverse()[0];
                });
                this.experienceWidgetResolverData.widgetData.strips.forEach(strip => {
                    if (strip.key === 'experience-strip' && strip.request && strip.preWidgets) {
                        strip.request.ids = ids;
                    }
                });
                this.experienceWidgetResolverData = Object.assign({}, this.experienceWidgetResolverData);
            }
            else if (this.leadersData[i].arm_name === 'Insight' && trackName === 'Insight') {
                const ids = this.leadersData[i].courses.map(course => {
                    return course.course_link.split('/').reverse()[0];
                });
                this.insightWidgetResolverData.widgetData.strips.forEach(strip => {
                    if (strip.key === 'insight-strip' && strip.request && strip.preWidgets) {
                        strip.request.ids = ids;
                    }
                });
                this.insightWidgetResolverData = Object.assign({}, this.insightWidgetResolverData);
            }
            else if (this.leadersData[i].arm_name === 'Innovate' && trackName === 'Innovate') {
                const ids = this.leadersData[i].courses.map(course => {
                    return course.course_link.split('/').reverse()[0];
                });
                this.innovateWidgetResolverData.widgetData.strips.forEach(strip => {
                    if (strip.key === 'innovate-strip' && strip.request && strip.preWidgets) {
                        strip.request.ids = ids;
                    }
                });
                this.innovateWidgetResolverData = Object.assign({}, this.innovateWidgetResolverData);
            }
        }
        this.idsObtained = true;
    }
    trackClicked(newTrack) {
        this.selectedTrack = newTrack;
        this.initializeTrack(newTrack);
    }
};
LeadersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
LeadersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-leaders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leaders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/leaders/leaders.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leaders.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/leaders/leaders.component.scss")).default]
    })
], LeadersComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/learning-path/components/result/result.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/learning-path/components/result/result.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 25%;\n  min-width: 300px;\n  padding-left: 16px;\n  background: inherit;\n  box-shadow: none;\n}\n\n.sidenav-content {\n  margin: 0;\n  padding: 0 16px 24px;\n  box-sizing: border-box;\n  min-height: calc(100vh);\n}\n\n.day-mode .mat-drawer-backdrop.mat-drawer-shown {\n  background-color: none !important;\n}\n\n.sidenav-content-header {\n  height: 40px;\n}\n\n.lp_name {\n  display: block;\n  margin: 10px;\n}\n\n.mat-list-option {\n  margin: 5px 0px;\n  padding: 5px;\n}\n\n.text-bold {\n  font-weight: 500;\n}\n\n.hide-filter-btn {\n  visibility: hidden;\n}\n\n.heading {\n  margin: 0;\n}\n\n.margin-top {\n  align-items: baseline;\n  margin-top: 12px;\n}\n\n.mat-selection-list {\n  outline: none;\n}\n\n.filter-name {\n  margin: 0;\n  font-size: 1.1rem;\n}\n\n.label {\n  margin-bottom: 10px;\n}\n\n.app-class .mat-list-option {\n  height: auto;\n}\n\n.checklist {\n  margin: 8px 0;\n}\n\n.checklist .mat-icon {\n  font-size: 20px;\n}\n\n.checklist-desc {\n  margin-left: 50px;\n  margin-top: -10px;\n  padding-bottom: 10px;\n}\n\n.mat-list-option:hover {\n  background: none;\n}\n\n.lp-name {\n  font-weight: 500;\n}\n\n.member-image {\n  width: 180px;\n  margin-left: 16px;\n}\n\n@media only screen and (max-width: 736px) {\n  .member-image {\n    width: 150px;\n    height: 90px;\n  }\n}\n\n.radio {\n  margin: 0px -2px;\n  align-items: center;\n}\n\n.radio .mat-icon {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n}\n\n.courses-profile {\n  margin-left: 2px;\n}\n\n@media only screen and (max-width: 736px) {\n  .topic-container {\n    flex-wrap: wrap;\n  }\n}\n\n@media only screen and (max-width: 736px) {\n  .topic-text {\n    margin-top: 12px;\n  }\n}\n\n.margin-left-xss {\n  margin-left: 4px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL2xlYXJuaW5nLXBhdGgvY29tcG9uZW50cy9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvbmF2aWdhdG9yL3JvdXRlcy9sZWFybmluZy1wYXRoL2NvbXBvbmVudHMvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLXZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLFlBQUE7QUNIRjs7QURPQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCRURPO0VGRVAsbUJBQUE7RUFDQSxnQkFBQTtBQ0pGOztBRFFBO0VBQ0UsU0FBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0xGOztBRFNFO0VBQ0UsaUNBQUE7QUNOSjs7QURVQTtFQUNFLFlBQUE7QUNQRjs7QURVQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FDUEY7O0FEVUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ1BGOztBRFVBO0VBQ0UsZ0JBQUE7QUNQRjs7QURVQTtFQUNFLGtCQUFBO0FDUEY7O0FEVUE7RUFDRSxTQUFBO0FDUEY7O0FEVUE7RUFDRSxxQkFBQTtFQUNBLGdCRWpETztBRDBDVDs7QURVQTtFQUNFLGFBQUE7QUNQRjs7QURVQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtBQ1BGOztBRFVBO0VBQ0UsbUJBQUE7QUNQRjs7QURVQTtFQUNFLFlBQUE7QUNQRjs7QURVQTtFQUNFLGFBQUE7QUNQRjs7QURTRTtFQUNFLGVBQUE7QUNQSjs7QURXQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ1JGOztBRFdBO0VBQ0UsZ0JBQUE7QUNSRjs7QURZQTtFQUVFLGdCQUFBO0FDVkY7O0FEYUE7RUFDRSxZQUFBO0VBRUEsaUJFL0ZPO0FEb0ZUOztBRGFFO0VBTEY7SUFNSSxZQUFBO0lBQ0EsWUFBQTtFQ1ZGO0FBQ0Y7O0FEY0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDWEY7O0FEYUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNYSjs7QURlQTtFQUNFLGdCQUFBO0FDWkY7O0FEaUJFO0VBREY7SUFFSSxlQUFBO0VDYkY7QUFDRjs7QURpQkU7RUFERjtJQUVJLGdCQUFBO0VDYkY7QUFDRjs7QURpQkE7RUFDRSwyQkFBQTtBQ2RGIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL25hdmlnYXRvci9yb3V0ZXMvbGVhcm5pbmctcGF0aC9jb21wb25lbnRzL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5AaW1wb3J0ICdzdHlsZXMvX3dzLW1peGlucy5zY3NzJztcbkBpbXBvcnQgJ3N0eWxlcy9fd3MtY29tbW9uLnNjc3MnO1xuXG4uc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8vIENvbnRlbnRzIG9mIFNpZGVOYXYgTWVudVxuLnNpZGVuYXYge1xuICB3aWR0aDogMjUlO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nLWxlZnQ6ICRzaXplLW07XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8vIENvbnRlbnRzIG9mIFNpZGUgTmF2IENvbnRlbnRcbi5zaWRlbmF2LWNvbnRlbnQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgJHNpemUtbSAkc2l6ZS1sO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoKTtcbn1cblxuLmRheS1tb2RlIHtcbiAgLm1hdC1kcmF3ZXItYmFja2Ryb3AubWF0LWRyYXdlci1zaG93biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5zaWRlbmF2LWNvbnRlbnQtaGVhZGVyIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ubHBfbmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5tYXQtbGlzdC1vcHRpb24ge1xuICBtYXJnaW46IDVweCAwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5oaWRlLWZpbHRlci1idG4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5oZWFkaW5nIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWFyZ2luLXRvcCB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgbWFyZ2luLXRvcDogJHNpemUtcztcbn1cblxuLm1hdC1zZWxlY3Rpb24tbGlzdCB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5maWx0ZXItbmFtZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5hcHAtY2xhc3MgLm1hdC1saXN0LW9wdGlvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmNoZWNrbGlzdCB7XG4gIG1hcmdpbjogOHB4IDA7XG5cbiAgLm1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cblxuLmNoZWNrbGlzdC1kZXNjIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLm1hdC1saXN0LW9wdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cblxuLmxwLW5hbWUge1xuICAvLyBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMFxufVxuXG4ubWVtYmVyLWltYWdlIHtcbiAgd2lkdGg6IDE4MHB4O1xuICAvLyBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAkc2l6ZS1tO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICB9XG59XG5cblxuLnJhZGlvIHtcbiAgbWFyZ2luOiAwcHggLTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAubWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2cHg7XG4gIH1cbn1cblxuLmNvdXJzZXMtcHJvZmlsZSB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG5cbn1cblxuLnRvcGljLWNvbnRhaW5lciB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cblxuLnRvcGljLXRleHQge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxufVxuXG5cbi5tYXJnaW4tbGVmdC14c3Mge1xuICBtYXJnaW4tbGVmdDogNHB4ICFpbXBvcnRhbnQ7XG59IiwiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyNSU7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnNpZGVuYXYtY29udGVudCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAxNnB4IDI0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmgpO1xufVxuXG4uZGF5LW1vZGUgLm1hdC1kcmF3ZXItYmFja2Ryb3AubWF0LWRyYXdlci1zaG93biB7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnNpZGVuYXYtY29udGVudC1oZWFkZXIge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5scF9uYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLm1hdC1saXN0LW9wdGlvbiB7XG4gIG1hcmdpbjogNXB4IDBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4udGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmhpZGUtZmlsdGVyLWJ0biB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmhlYWRpbmcge1xuICBtYXJnaW46IDA7XG59XG5cbi5tYXJnaW4tdG9wIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4ubWF0LXNlbGVjdGlvbi1saXN0IHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmZpbHRlci1uYW1lIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLmxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmFwcC1jbGFzcyAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uY2hlY2tsaXN0IHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cbi5jaGVja2xpc3QgLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY2hlY2tsaXN0LWRlc2Mge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ubWF0LWxpc3Qtb3B0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmxwLW5hbWUge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWVtYmVyLWltYWdlIHtcbiAgd2lkdGg6IDE4MHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm1lbWJlci1pbWFnZSB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogOTBweDtcbiAgfVxufVxuXG4ucmFkaW8ge1xuICBtYXJnaW46IDBweCAtMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJhZGlvIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbn1cblxuLmNvdXJzZXMtcHJvZmlsZSB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLnRvcGljLWNvbnRhaW5lciB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLnRvcGljLXRleHQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cbn1cblxuLm1hcmdpbi1sZWZ0LXhzcyB7XG4gIG1hcmdpbi1sZWZ0OiA0cHggIWltcG9ydGFudDtcbn0iLCIkZm9udC1mYW1pbHktc2FuczogJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCxcbiAgJ05vdG8gU2FucycsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLFxuICAnTm90byBDb2xvciBFbW9qaSc7XG4kZm9udC1mYW1pbHktc2VyaWY6IEdlb3JnaWEsIENhbWJyaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4kZm9udC1mYW1pbHktbW9ubzogTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdMaWJlcmF0aW9uIE1vbm8nLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4kZm9udC1mYW1pbHktb3Blbi1zYW5zOiAnT3BlbiBTYW5zJztcbiRmb250LWZhbWlseS1vcGVuLXBvcHBpbnM6ICdSb2JvdG8nO1xuXG5cbiRzaXplLXhzOiA4cHg7XG4kc2l6ZS1zOiAxMnB4O1xuJHNpemUtbTogMTZweDtcbiRzaXplLWw6IDI0cHg7XG4kc2l6ZS14bDogMzJweDtcbiRzaXplLWxnOiAyOHB4O1xuJHNpemUteHhsOiA0MHB4O1xuXG4kbWF0LXRvb2xiYXIteHM6IDUycHg7XG4kbWF0LXRvb2xiYXItZ3QteHM6IDU2cHg7XG4iXX0= */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/learning-path/components/result/result.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/learning-path/components/result/result.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _components_multiline_snackbar_multiline_snackbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/multiline-snackbar/multiline-snackbar.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/components/multiline-snackbar/multiline-snackbar.component.ts");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/navigator.service */ "./project/ws/app/src/lib/routes/infy/routes/navigator/services/navigator.service.ts");









let ResultComponent = class ResultComponent {
    constructor(navSvc, valueSvc, route, router, snackBar, btnGoalsSvc, configSvc) {
        this.navSvc = navSvc;
        this.valueSvc = valueSvc;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.btnGoalsSvc = btnGoalsSvc;
        this.configSvc = configSvc;
        this.status = 'none';
        this.sideNavBarOpenedUser = true;
        this.suggestedLp = [];
        this.otherLp = [];
        this.shouldClipSuggested = false;
        this.shouldClipOthers = false;
        this.displayLessSuggested = false;
        this.displayLessOthers = false;
        this.goalsAddingInProgess = false;
        this.commonsData = [];
        this.isLtMedium$ = this.valueSvc.isLtMedium$;
        this.lpdata = this.route.snapshot.data.lpdata.data;
        this.screenSizeIsLtMedium = false;
        this.sideNavBarOpened = false;
        this.suggestedClip = [];
        this.otherClip = [];
        this.mode$ = this.isLtMedium$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(isMedium => (isMedium ? 'over' : 'side')));
        // isNavigatorGoalsStatus = this.configSvc.instanceConfig.features.navigator.subFeatures
        //   .navigatorGoals
        // private defaultSideNavBarOpenedSubscription: Subscription | undefined
        this.defaultThumbnail = '/assets/images/missing-thumbnail.png';
        this.technologies = [];
        this.skillsList = [];
        this.filterList = [];
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params.selection) {
                this.skillsList = params.selection.split(',').filter((item) => item.length);
                this.suggestedLp = [];
                this.otherLp = [];
                this.clipLists();
            }
            if (!this.skillsList.length) {
                this.skillsList.push('Web Development');
            }
            this.lpdata.forEach(lp => {
                this.navSvc.fetchImageForContentID(lp.linked_program).subscribe(res => {
                    lp.lp_image = res[0].appIcon;
                });
            });
            // this.loggerSvc.log('LP data check', this.lpdata)
            Object.values(this.lpdata).forEach((lp) => {
                const allTech = [];
                lp.profiles.forEach((profile) => allTech.push(...profile.technology));
                if (this.hasCommonTech(this.skillsList, allTech)) {
                    this.suggestedLp.push(lp);
                }
                else {
                    this.otherLp.push(lp);
                }
            });
        });
        this.navSvc.fetchNavigatorTopics().subscribe((data) => {
            this.technologies = data;
            this.status = 'done';
            // this.loggerSvc.log('data fetched', this.technologies, this.status)
            this.initializeFilterList();
        });
        this.navSvc.fetchCommonsData().subscribe(data => {
            this.commonsData = data.goal_data;
            // this.loggerSvc.log('Commons Data', this.commonsData)
        });
        this.clipLists();
        if (this.configSvc.instanceConfig) {
            this.defaultThumbnail = this.configSvc.instanceConfig.logos.defaultContent;
        }
        this.isLtMedium$.subscribe((isLtMedium) => {
            this.sideNavBarOpened = !isLtMedium;
            this.screenSizeIsLtMedium = isLtMedium;
        });
    }
    ngOnChanges() {
        this.clipLists();
    }
    hasCommonTech(arr1, arr2) {
        return arr1.filter(value => -1 !== arr2.indexOf(value)).length > 0;
    }
    clipLists() {
        if (this.suggestedLp.length > 6) {
            this.suggestedClip = this.suggestedLp;
            this.suggestedLp = this.suggestedClip.splice(0, 6);
            this.shouldClipSuggested = true;
        }
        if (this.otherLp.length > 6) {
            this.otherClip = this.otherLp;
            this.otherLp = this.otherLp.splice(0, 6);
            this.shouldClipOthers = true;
        }
    }
    initializeFilterList() {
        let data;
        this.technologies.forEach((tech) => {
            if (this.skillsList.includes(tech)) {
                data = { technologyName: tech, checked: true };
            }
            else {
                data = { technologyName: tech, checked: false };
            }
            this.filterList.push(data);
        });
        // this.snackBar.open('Select your Learning Paths')
    }
    removeSkill(skill) {
        this.skillsList = this.skillsList.filter(item => item !== skill);
        this.router.navigate(['/app/infy/navigator/tech/learning-path/result'], {
            queryParams: { selection: this.skillsList.join(',') },
        });
    }
    addSkill(skill) {
        if (!this.skillsList.includes(skill)) {
            this.skillsList.push(skill);
            this.router.navigate(['/app/infy/navigator/tech/learning-path/result'], {
                queryParams: {
                    selection: this.skillsList.join(','),
                },
            });
        }
    }
    viewMoreLp(type) {
        if (type === 'suggested' && this.suggestedClip.length) {
            const lp = this.suggestedClip.splice(0, 6);
            this.suggestedLp = this.suggestedLp.concat(lp);
            if (!this.suggestedClip.length) {
                this.shouldClipSuggested = false;
            }
            if (this.suggestedLp.length > 6) {
                this.displayLessSuggested = true;
            }
        }
        if (type === 'other' && this.otherClip.length) {
            const lp = this.otherClip.splice(0, 6);
            this.otherLp = this.otherLp.concat(lp);
            if (!this.otherClip.length) {
                this.shouldClipOthers = false;
            }
            if (this.otherLp.length > 6) {
                this.displayLessOthers = true;
            }
        }
    }
    viewLessLp(type) {
        if (type === 'suggested' && this.suggestedLp.length > 6) {
            const lp = this.suggestedLp.splice(this.suggestedLp.length - 6, 6);
            this.suggestedClip = this.suggestedClip.concat(lp);
            if (this.suggestedLp.length <= 6) {
                this.displayLessSuggested = false;
            }
            if (this.suggestedClip.length) {
                this.shouldClipSuggested = true;
            }
        }
        if (type === 'other' && this.otherLp.length > 6) {
            const lp = this.otherLp.splice(this.otherLp.length - 6, 6);
            this.otherClip = this.otherClip.concat(lp);
            if (this.otherLp.length <= 6) {
                this.displayLessOthers = false;
            }
            if (this.otherClip.length) {
                this.shouldClipOthers = true;
            }
        }
    }
    techChange(technology) {
        let count = 0;
        this.filterList.forEach((tech) => {
            if (tech.technologyName === technology) {
                this.filterList[count].checked = !this.filterList[count].checked;
            }
            if (this.filterList[count].checked) {
                this.addSkill(this.filterList[count].technologyName);
            }
            else {
                this.removeSkill(this.filterList[count].technologyName);
            }
            count += 1;
        });
    }
    createGoalClicked(selectedLp, type) {
        const resultLines = [];
        this.goalsAddingInProgess = true;
        const goalRequests = [];
        const goalsData = selectedLp.map((option) => String(option.value));
        if (type === 'suggested') {
            goalsData.forEach((goal) => {
                const duration = this.suggestedLp.find((lpdata) => {
                    return lpdata.lp_id === Number(goal);
                }).profiles[0].profile_time;
                // //console.log('duration', duration)
                const id = this.commonsData.find((commonData) => {
                    return commonData.lp_id === goal;
                });
                if (id) {
                    const goals = {
                        duration: parseInt(duration, 0),
                        id: id.goal_id,
                        type: 'common',
                    };
                    goalRequests.push(goals);
                }
            });
        }
        else {
            goalsData.forEach((goal) => {
                const duration = this.otherLp.find((lpdata) => {
                    return lpdata.lp_id === Number(goal);
                }).profiles[0].profile_time;
                // //console.log('duration', duration)
                const id = this.commonsData.find((commonData) => {
                    return commonData.lp_id === goal;
                });
                if (id) {
                    const goals = {
                        duration: parseInt(duration, 0),
                        id: id.goal_id,
                        type: 'common',
                    };
                    goalRequests.push(goals);
                }
            });
        }
        // //console.log('Goal requests', goalRequests)
        if (!goalRequests.length) {
            this.goalsAddingInProgess = false;
            this.snackBar.open('Goal not launched yet');
        }
        else {
            this.btnGoalsSvc.createGoals(goalRequests).subscribe(response => {
                for (let i = 0; i < response.length; i += 1) {
                    let goalName = '';
                    if (type === 'suggested') {
                        goalName = this.suggestedLp.find((lpdata) => {
                            return lpdata.lp_id === Number(goalsData[i]);
                        }).lp_name;
                    }
                    else {
                        goalName = this.otherLp.find((lpdata) => {
                            return lpdata.lp_id === Number(goalsData[i]);
                        }).lp_name;
                    }
                    if (response[i] === 'invalid.commongoal') {
                        // this.loggerSvc.log(goalsData[i], 'failed')
                        const res = `${goalName} is not launched yet`;
                        resultLines.push(res);
                    }
                    else if (response[i] === 'goal.alreadyexists') {
                        const res = `${goalName} is already present in your Goals`;
                        resultLines.push(res);
                    }
                    else {
                        // this.loggerSvc.log(goalsData[i], 'success')
                        const res = `${goalName} Added Successfully`;
                        resultLines.push(res);
                    }
                }
                // this.loggerSvc.log('results', resultLines)
                this.snackBar.openFromComponent(_components_multiline_snackbar_multiline_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["MultilineSnackbarComponent"], {
                    data: resultLines,
                });
                this.goalsAddingInProgess = false;
            });
        }
    }
};
ResultComponent.ctorParameters = () => [
    { type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_8__["NavigatorService"] },
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_5__["ValueService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["BtnGoalsService"] },
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_5__["ConfigurationsService"] }
];
ResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-result',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./result.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/learning-path/components/result/result.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./result.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/learning-path/components/result/result.component.scss")).default]
    })
], ResultComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/learning-path/learning-path.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/learning-path/learning-path.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner {\n  background-position: right;\n  background-size: cover;\n  height: 200px;\n  width: 100%;\n}\n\n.banner-description {\n  padding: 0 32px;\n  margin: 0 16px;\n}\n\n.scrollable {\n  height: 210px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.text-white {\n  color: white;\n}\n\n.content-strip h2 {\n  margin: 0;\n  margin-bottom: 24px;\n}\n\n.mat-chips {\n  padding: 0 16px;\n  margin: 8px;\n}\n\n.text-bold {\n  font-weight: 500;\n}\n\n.mat-chip-list-wrapper {\n  margin: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL2xlYXJuaW5nLXBhdGgvbGVhcm5pbmctcGF0aC5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL25hdmlnYXRvci9yb3V0ZXMvbGVhcm5pbmctcGF0aC9sZWFybmluZy1wYXRoLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc29uYXNoYWp1L1ZpZGVvcy9zcGhlcmUtbW9iaWxlL3N0eWxlcy9fd3MtdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBRUUsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDSkY7O0FEV0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ1JGOztBRFdBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNSRjs7QURXQTtFQUNFLFlBQUE7QUNSRjs7QURhRTtFQUNFLFNBQUE7RUFDQSxtQkV2Qks7QURhVDs7QURlQTtFQUNFLGVBQUE7RUFDQSxXRWpDUTtBRHFCVjs7QUQ0QkE7RUFDRSxnQkFBQTtBQ3pCRjs7QUQ0QkE7RUFDRSxXQUFBO0FDekJGIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL25hdmlnYXRvci9yb3V0ZXMvbGVhcm5pbmctcGF0aC9sZWFybmluZy1wYXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuLy8gQGltcG9ydCAnfnNyYy9zdHlsZXMvd3MtbWl4aW5zJztcblxuXG4uYmFubmVyIHtcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9jb21tb24vL25hdmlnYXRvci9iYW5uZXJzL2JpX25zby5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcblxuICAvLyBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgLy8gICBoZWlnaHQ6IDI1MHB4O1xuICAvLyB9XG59XG5cbi5iYW5uZXItZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAwICRzaXplLXhsO1xuICBtYXJnaW46IDAgMTZweDtcbn1cblxuLnNjcm9sbGFibGUge1xuICBoZWlnaHQ6IDIxMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi50ZXh0LXdoaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5cbi5jb250ZW50LXN0cmlwIHtcbiAgaDIge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAkc2l6ZS1sO1xuICB9XG59XG5cblxuLm1hdC1jaGlwcyB7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgbWFyZ2luOiAkc2l6ZS14c1xufVxuXG4uc21hbGwtYmFubmVyLXRleHQge1xuICAvLyBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgLy8gICBmb250LXNpemU6IDEuOHJlbTtcbiAgLy8gfVxufVxuXG5cbi8vIC5zbWFsbC1iYW5uZXItZGVzY3JpcHRpb24ge1xuLy8gICBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbi8vICAgICBmb250LXNpemU6IDEuMnJlbTtcbi8vICAgfVxuLy8gfVxuXG4udGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDUwMFxufVxuXG4ubWF0LWNoaXAtbGlzdC13cmFwcGVyIHtcbiAgbWFyZ2luOiA4cHg7XG59XG4iLCIuYmFubmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmFubmVyLWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMCAzMnB4O1xuICBtYXJnaW46IDAgMTZweDtcbn1cblxuLnNjcm9sbGFibGUge1xuICBoZWlnaHQ6IDIxMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi50ZXh0LXdoaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGVudC1zdHJpcCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLm1hdC1jaGlwcyB7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LWNoaXAtbGlzdC13cmFwcGVyIHtcbiAgbWFyZ2luOiA4cHg7XG59IiwiJGZvbnQtZmFtaWx5LXNhbnM6ICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsXG4gICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJyxcbiAgJ05vdG8gQ29sb3IgRW1vamknO1xuJGZvbnQtZmFtaWx5LXNlcmlmOiBHZW9yZ2lhLCBDYW1icmlhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuJGZvbnQtZmFtaWx5LW1vbm86IE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuJGZvbnQtZmFtaWx5LW9wZW4tc2FuczogJ09wZW4gU2Fucyc7XG4kZm9udC1mYW1pbHktb3Blbi1wb3BwaW5zOiAnUm9ib3RvJztcblxuXG4kc2l6ZS14czogOHB4O1xuJHNpemUtczogMTJweDtcbiRzaXplLW06IDE2cHg7XG4kc2l6ZS1sOiAyNHB4O1xuJHNpemUteGw6IDMycHg7XG4kc2l6ZS1sZzogMjhweDtcbiRzaXplLXh4bDogNDBweDtcblxuJG1hdC10b29sYmFyLXhzOiA1MnB4O1xuJG1hdC10b29sYmFyLWd0LXhzOiA1NnB4O1xuIl19 */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/learning-path/learning-path.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/learning-path/learning-path.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: LearningPathComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningPathComponent", function() { return LearningPathComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigator.service */ "./project/ws/app/src/lib/routes/infy/routes/navigator/services/navigator.service.ts");




let LearningPathComponent = class LearningPathComponent {
    constructor(navSvc, router) {
        this.navSvc = navSvc;
        this.router = router;
        this.technologyLearningPathHash = {};
        this.selectedTechChips = new Set();
        this.searchInProgress = true;
        this.technologies = [];
        this.navSvc.fetchNavigatorTopics().subscribe((data) => {
            this.technologies = data;
        });
    }
    ngOnInit() { }
    navigateToSuggestions() {
        const selectionList = [];
        // //console.log('this chips', this.selectedTechChips)
        this.selectedTechChips.forEach((elem) => {
            if (elem) {
                selectionList.push(elem);
            }
        });
        this.router.navigate(['/app/infy/navigator/tech/learning-path/result'], {
            queryParams: { selection: selectionList.join(',') },
        });
    }
    toggleChipSelection(tech) {
        if (this.isSelected(tech)) {
            this.selectedTechChips.delete(tech);
        }
        else {
            this.selectedTechChips.add(tech);
        }
    }
    isSelected(tech) {
        return this.selectedTechChips.has(tech);
    }
};
LearningPathComponent.ctorParameters = () => [
    { type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_3__["NavigatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LearningPathComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-learning-path',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./learning-path.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/learning-path/learning-path.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./learning-path.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/learning-path/learning-path.component.scss")).default]
    })
], LearningPathComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/lp-details/components/lp-card/lp-card.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/lp-details/components/lp-card/lp-card.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-container {\n  position: relative;\n  width: 290px;\n  height: 400px;\n  margin: 20px 20px;\n}\n\n.card-image {\n  width: 290px;\n  border-radius: 8px 8px 0 0;\n}\n\n.mat-card {\n  padding: 0;\n}\n\n.card-information {\n  display: flex;\n  flex-direction: column;\n}\n\n.button-holder {\n  display: flex;\n  justify-content: flex-end;\n  border-radius: 0;\n  align-content: center;\n  border: none;\n  position: absolute;\n}\n\n.button-holder span {\n  margin-right: 5px;\n}\n\n.card {\n  height: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL2xwLWRldGFpbHMvY29tcG9uZW50cy9scC1jYXJkL2xwLWNhcmQuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL2xwLWRldGFpbHMvY29tcG9uZW50cy9scC1jYXJkL2xwLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNORjs7QURjQTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtBQ1hGOztBRGtCQTtFQUNFLFVBQUE7QUNmRjs7QURzQkE7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7QUNwQkY7O0FEdUJBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBRUEsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ3JCRjs7QUR3QkU7RUFDRSxpQkFBQTtBQ3RCSjs7QURvQ0E7RUFDRSxhQUFBO0FDakNGIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL25hdmlnYXRvci9yb3V0ZXMvbHAtZGV0YWlscy9jb21wb25lbnRzL2xwLWNhcmQvbHAtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgJ35zcmMvc3R5bGVzL3dzLXZhcnMnO1xuLy8gQGltcG9ydCAnfnNyYy9zdHlsZXMvd3MtbWl4aW5zJztcblxuJG1lZGl1bS1iYWRnZS1zaXplOiA5MHB4O1xuJHNtYWxsLWJhZGdlLXNpemU6IDUwcHg7XG4kYmFkZ2UtcGFkZGluZzogMTJweDtcblxuLmNhcmQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjkwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIG1hcmdpbjogMjBweCAyMHB4O1xuXG4gIC8vIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMge1xuICAvLyAgIC8vIHdpZHRoOiAyMzBweDtcbiAgLy8gICBoZWlnaHQ6IDM1MHB4O1xuICAvLyB9XG59XG5cbi5jYXJkLWltYWdlIHtcbiAgd2lkdGg6IDI5MHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcblxuICAvLyBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgLy8gICAvLyB3aWR0aDogMjMwcHg7XG4gIC8vIH1cbn1cblxuLm1hdC1jYXJkIHtcbiAgcGFkZGluZzogMDtcblxuICAvLyBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgLy8gICBoZWlnaHQ6IDM3MHB4O1xuICAvLyB9XG59XG5cbi5jYXJkLWluZm9ybWF0aW9uIHtcbiAgLy8gbWFyZ2luOiAkc2l6ZS1zICRzaXplLW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5idXR0b24taG9sZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgLy8gbWFyZ2luLXRvcDogKCRzaXplLXhsICogNSkgLSAkc2l6ZS14cztcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gbWFyZ2luLWxlZnQ6ICgkc2l6ZS14bCAqIDUpIC0gKCRzaXplLW0gKiA0KTtcblxuICBzcGFuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuXG4gIC8vIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMge1xuICAvLyAgIG1hcmdpbi10b3A6ICgkc2l6ZS14bCAqIDUpICsgKCRzaXplLXhzKTtcblxuICAvLyAgIG1hcmdpbi1sZWZ0OiAoJHNpemUtbCArICRzaXplLWwvMik7XG4gIC8vIH1cbn1cblxuLy8gLnRpdGxlIHtcbi8vICAgbWFyZ2luLWxlZnQ6ICRzaXplLXhzO1xuLy8gfVxuXG4uY2FyZCB7XG4gIGhlaWdodDogMzUwcHg7XG59XG4iLCIuY2FyZC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyOTBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luOiAyMHB4IDIwcHg7XG59XG5cbi5jYXJkLWltYWdlIHtcbiAgd2lkdGg6IDI5MHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcbn1cblxuLm1hdC1jYXJkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNhcmQtaW5mb3JtYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYnV0dG9uLWhvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uYnV0dG9uLWhvbGRlciBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5jYXJkIHtcbiAgaGVpZ2h0OiAzNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/lp-details/components/lp-card/lp-card.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/lp-details/components/lp-card/lp-card.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: LpCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LpCardComponent", function() { return LpCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LpCardComponent = class LpCardComponent {
    constructor() { }
    ngOnInit() { }
    launchCertification() {
        // //console.log('card data', this.navigatorCard)
        window.open(this.navigatorCard.routeButton);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LpCardComponent.prototype, "navigatorCard", void 0);
LpCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-lp-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lp-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/lp-details/components/lp-card/lp-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lp-card.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/lp-details/components/lp-card/lp-card.component.scss")).default]
    })
], LpCardComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/lp-details/lp-details.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/lp-details/lp-details.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner {\n  background-position: right;\n  background-size: cover;\n  height: 200px;\n  width: 100%;\n}\n\n.banner-description {\n  margin: 0 16px;\n}\n\n.text-white {\n  color: white;\n}\n\n.radio-desc {\n  margin-left: 28px;\n  margin-top: -10px;\n  padding-bottom: 10px;\n}\n\n.radio {\n  margin: 8px 0;\n}\n\n.radio .mat-icon {\n  font-size: 20px;\n}\n\n.courses-profile {\n  margin: 0;\n}\n\n.text-bold {\n  font-weight: 500;\n}\n\n.practice-certification {\n  display: flex;\n}\n\n@media only screen and (max-width: 709px) {\n  .practice-certification {\n    display: block;\n    margin: auto;\n  }\n}\n\n.text-center {\n  align-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL2xwLWRldGFpbHMvbHAtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL25hdmlnYXRvci9yb3V0ZXMvbHAtZGV0YWlscy9scC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRUUsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDSEY7O0FEVUE7RUFFRSxjQUFBO0FDUkY7O0FEV0E7RUFDRSxZQUFBO0FDUkY7O0FEZ0JBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDYkY7O0FEaUJBO0VBQ0UsYUFBQTtBQ2RGOztBRGdCRTtFQUNFLGVBQUE7QUNkSjs7QURrQkE7RUFDRSxTQUFBO0FDZkY7O0FEbUJBO0VBQ0UsZ0JBQUE7QUNoQkY7O0FEbUJBO0VBQ0UsYUFBQTtBQ2hCRjs7QURtQkU7RUFKRjtJQUtJLGNBQUE7SUFDQSxZQUFBO0VDaEJGO0FBQ0Y7O0FEbUJBO0VBQ0UscUJBQUE7QUNoQkYiLCJmaWxlIjoicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvbmF2aWdhdG9yL3JvdXRlcy9scC1kZXRhaWxzL2xwLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0ICd+c3JjL3N0eWxlcy93cy12YXJzJztcbi8vIEBpbXBvcnQgJ35zcmMvc3R5bGVzL3dzLW1peGlucyc7XG5cbi5iYW5uZXIge1xuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2NvbW1vbi8vbmF2aWdhdG9yL2Jhbm5lcnMvYmlfbnNvLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC8vIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMge1xuICAvLyAgIGhlaWdodDogMjUwcHg7XG4gIC8vIH1cbn1cblxuLmJhbm5lci1kZXNjcmlwdGlvbiB7XG4gIC8vIHBhZGRpbmc6IDAgJHNpemUteGw7XG4gIG1hcmdpbjogMCAxNnB4O1xufVxuXG4udGV4dC13aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG4vLyAuY29udGFpbmVyIHtcbi8vICAgbWFyZ2luOiAkc2l6ZS1sO1xuLy8gfVxuXG4ucmFkaW8tZGVzYyB7XG4gIG1hcmdpbi1sZWZ0OiAyOHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cblxuLnJhZGlvIHtcbiAgbWFyZ2luOiA4cHggMDtcblxuICAubWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuXG4uY291cnNlcy1wcm9maWxlIHtcbiAgbWFyZ2luOiAwO1xuXG59XG5cbi50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogNTAwXG59XG5cbi5wcmFjdGljZS1jZXJ0aWZpY2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcblxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzA5cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cblxuLnRleHQtY2VudGVyIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4vLyAuZGVzY3JpcHRpb24ge1xuLy8gICBtYXJnaW46IDAgJHNpemUtbTtcbi8vICAgcGFkZGluZzogMCAkc2l6ZS14bDtcbi8vIH1cblxuXG4vLyAuc21hbGwtYmFubmVyLXRleHQge1xuLy8gICBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbi8vICAgICBmb250LXNpemU6IDEuNXJlbTtcbi8vICAgfVxuLy8gfVxuXG5cbi8vIC5zbWFsbC1iYW5uZXItZGVzY3JpcHRpb24ge1xuLy8gICBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbi8vICAgICBmb250LXNpemU6IDEuMnJlbTtcbi8vICAgfVxuLy8gfSIsIi5iYW5uZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5iYW5uZXItZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDAgMTZweDtcbn1cblxuLnRleHQtd2hpdGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5yYWRpby1kZXNjIHtcbiAgbWFyZ2luLWxlZnQ6IDI4cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnJhZGlvIHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cbi5yYWRpbyAubWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jb3Vyc2VzLXByb2ZpbGUge1xuICBtYXJnaW46IDA7XG59XG5cbi50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucHJhY3RpY2UtY2VydGlmaWNhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwOXB4KSB7XG4gIC5wcmFjdGljZS1jZXJ0aWZpY2F0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cblxuLnRleHQtY2VudGVyIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/lp-details/lp-details.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/lp-details/lp-details.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LpDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LpDetailsComponent", function() { return LpDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");
/* harmony import */ var _components_multiline_snackbar_multiline_snackbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/multiline-snackbar/multiline-snackbar.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/components/multiline-snackbar/multiline-snackbar.component.ts");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/navigator.service */ "./project/ws/app/src/lib/routes/infy/routes/navigator/services/navigator.service.ts");







let LpDetailsComponent = class LpDetailsComponent {
    constructor(router, route, navSvc, snackBar, btnGoalsSvc) {
        this.router = router;
        this.route = route;
        this.navSvc = navSvc;
        this.snackBar = snackBar;
        this.btnGoalsSvc = btnGoalsSvc;
        this.courses = [];
        this.practises = [];
        this.availableCertifications = [];
        this.currentDuration = 0;
        this.fetchStatus = 'none';
        this.lpData = this.route.snapshot.data.pageData.data.lp_data;
        this.coursesFetched = false;
        this.baseUrl = '/app/infy/navigator/lp';
        this.goalsAddingInProgess = false;
        this.commonsData = [];
        this.coursesResolverData = {
            widgetType: 'contentStrip',
            widgetSubType: 'contentStripMultiple',
            widgetData: {
                strips: [
                    {
                        key: 'courses-strip',
                        preWidgets: [],
                        title: 'Content',
                        filters: [],
                        request: {
                            ids: [],
                        },
                    },
                ],
            },
        };
        this.randomNumber = 1;
        this.playgroundData = [];
        this.certificationData = [];
        this.showProfile = this.route.snapshot.queryParams.showProfile;
        // this.logger.log('datacheck ,', this.lpData, this.route.snapshot.params.id)
        this.learningPath = this.lpData.filter((lp) => {
            return lp.lp_id === this.route.snapshot.params.id;
        })[0];
        if (this.learningPath.profiles && this.learningPath.profiles.length > 0) {
            this.selectedProfileId =
                this.route.snapshot.queryParams.profile || this.learningPath.profiles[0].profile_id;
        }
        this.fetchStatus = 'done';
        // this.logger.log('check it', this.learningPath)
        this.learningPath.lp_playground.forEach(playground => {
            const playData = {
                thumbnail: '/assets/images/content-card/card_img.jpg',
                title: playground.playground_name,
                description: playground.playground_description,
                routeButton: playground.playground_link,
            };
            this.playgroundData.push(playData);
        });
        this.fetchContentForProfile(this.selectedProfileId);
        // this.logger.log('play ground check', this.playgroundData)
    }
    ngOnInit() {
        this.navSvc.fetchCommonsData().subscribe(data => {
            this.commonsData = data.goal_data;
        });
        this.learningPath.lp_internal_certification.forEach(certification => {
            const certificationData = {
                thumbnail: '/assets/images/content-card/card_img.jpg',
                title: certification.lp_internal_certification_name,
                description: certification.lp_internal_certification_description,
                routeButton: certification.lp_internal_certification_link,
            };
            this.certificationData.push(certificationData);
        });
        this.currentDuration = this.learningPath.profiles[0].profile_time;
    }
    fetchContentForProfile(profileIndex) {
        const profiles = this.learningPath.profiles.find(profile => {
            return profile.profile_id === Number(profileIndex);
        });
        if (profiles) {
            // this.logger.log('coure', profiles.courses_list)
            this.coursesResolverData.widgetData.strips.forEach(strip => {
                if (strip.key === 'courses-strip' && strip.request) {
                    strip.request.ids = profiles.courses_list;
                }
            });
            this.coursesResolverData = Object.assign({}, this.coursesResolverData);
            // this.logger.log(this.coursesResolverData)
            this.coursesFetched = true;
        }
    }
    onCourseClicked(courseId) {
        const course = this.courses.find(item => item.identifier === courseId);
        const url = course.link.replace('https://wingspan.com', '');
        this.router.navigateByUrl(url);
    }
    onPractiseClicked(practiceId) {
        const playItem = this.learningPath.lp_playground.find(item => item.playground_id === practiceId);
        if (playItem) {
            const url = playItem.playground_link.replace('https://wingspan.com/', '');
            this.router.navigateByUrl(url);
        }
    }
    // certificationClicked(certificateId: string) {
    //   // const certification = this.availableCertifications.find(item => item.id === certificateId)
    //   // this.utilSvc
    //   //   .sendCertificationEmail(
    //   //     certification.certificationType,
    //   //     certification.title,
    //   //     certification.description,
    //   //     certification.certificationUrl,
    //   //   )
    //   //   .subscribe(
    //   //     data => {
    //   //       this.snackBar.open('A mail has been sent to you with more details')
    //   //     },
    //   //     _ => {
    //   //       this.snackBar.open('Error sending mail. Please try again later')
    //   //     },
    //   //   )
    // }
    openLearningPath() {
        this.router.navigateByUrl(this.baseUrl + this.learningPath.lp_id);
    }
    profileDescription(courses) {
        return courses.map(course => course.course_name).join(', ');
    }
    onProfileChange(idx) {
        this.selectedProfileId = idx;
        this.currentDuration = this.learningPath.profiles[idx].profile_time;
        this.courses = [];
        this.fetchContentForProfile(idx);
        this.generateRandomNumber();
    }
    generateRandomNumber() {
        this.randomNumber = Date.now();
    }
    createGoalClicked() {
        const resultLines = [];
        this.goalsAddingInProgess = true;
        const goalRequests = [];
        const id = this.commonsData.find((commonData) => {
            return commonData.lp_id === this.route.snapshot.params.id;
        });
        if (id) {
            const goals = {
                type: 'common',
                id: id.goal_id,
                duration: this.currentDuration,
            };
            goalRequests.push(goals);
        }
        // //console.log('requ', goalRequests)
        this.btnGoalsSvc.createGoals(goalRequests).subscribe(response => {
            for (let i = 0; i < response.length; i += 1) {
                const goalName = this.learningPath.lp_name;
                if (response[i] === 'invalid.commongoal') {
                    // this.loggerSvc.log(goalsData[i], 'failed')
                    const res = `${goalName} is not launched yet`;
                    resultLines.push(res);
                }
                else if (response[i] === 'goal.alreadyexists') {
                    const res = `${goalName} is already present in your Goals`;
                    resultLines.push(res);
                }
                else {
                    // this.loggerSvc.log(goalsData[i], 'success')
                    const res = `${goalName} Added Successfully`;
                    resultLines.push(res);
                }
            }
            // this.logger.log('results', resultLines)
            this.snackBar.openFromComponent(_components_multiline_snackbar_multiline_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["MultilineSnackbarComponent"], {
                data: resultLines,
            });
            this.goalsAddingInProgess = false;
        });
    }
};
LpDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_6__["NavigatorService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["BtnGoalsService"] }
];
LpDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-lp-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lp-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/lp-details/lp-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lp-details.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/lp-details/lp-details.component.scss")).default]
    })
], LpDetailsComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/navigator-home/components/feature-card/feature-card.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/navigator-home/components/feature-card/feature-card.component.scss ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".feature-container {\n  border-radius: 4px;\n  text-align: center;\n  height: 112px;\n  max-height: 112px;\n}\n@media only screen and (max-width: 730px) {\n  .feature-container {\n    height: 150px;\n  }\n}\n.card-header {\n  height: 2px;\n  position: absolute;\n  top: 0px;\n}\n.card-title {\n  line-height: 1.2;\n}\n.grey-filter {\n  -webkit-filter: grayscale(0.9) contrast(0.7) opacity(0.9);\n          filter: grayscale(0.9) contrast(0.7) opacity(0.9);\n  cursor: auto;\n}\n.card-border {\n  border-bottom: none;\n}\n.text-bold {\n  font-weight: 400;\n}\n.disable {\n  opacity: 0.4;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL25hdmlnYXRvci1ob21lL2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkL2ZlYXR1cmUtY2FyZC5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL25hdmlnYXRvci9yb3V0ZXMvbmF2aWdhdG9yLWhvbWUvY29tcG9uZW50cy9mZWF0dXJlLWNhcmQvZmVhdHVyZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBTFk7RUFNWixpQkFOWTtBQ0tkO0FER0U7RUFORjtJQU9JLGFBQUE7RUNBRjtBQUNGO0FER0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDQUY7QURHQTtFQUNFLGdCQUFBO0FDQUY7QURPQTtFQUNFLHlEQUFBO1VBQUEsaURBQUE7RUFDQSxZQUFBO0FDSkY7QURPQTtFQUNFLG1CQUFBO0FDSkY7QURPQTtFQUNFLGdCQUFBO0FDSkY7QURPQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQ0pGIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL25hdmlnYXRvci9yb3V0ZXMvbmF2aWdhdG9yLWhvbWUvY29tcG9uZW50cy9mZWF0dXJlLWNhcmQvZmVhdHVyZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNhcmQtaGVpZ2h0OiAxMTJweDtcblxuLmZlYXR1cmUtY29udGFpbmVyIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogJGNhcmQtaGVpZ2h0O1xuICBtYXgtaGVpZ2h0OiAkY2FyZC1oZWlnaHQ7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzBweCkge1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgaGVpZ2h0OiAycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLy8gLmNhcmQtdHh0IHtcbi8vICAgY29sb3I6ICRjb2xvci10ZXh0LWRhcms7XG4vLyB9XG5cbi5ncmV5LWZpbHRlciB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDAuOSkgY29udHJhc3QoMC43KSBvcGFjaXR5KDAuOSk7XG4gIGN1cnNvcjogYXV0bztcbn1cblxuLmNhcmQtYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5kaXNhYmxlIHtcbiAgb3BhY2l0eTogMC40O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbiIsIi5mZWF0dXJlLWNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDExMnB4O1xuICBtYXgtaGVpZ2h0OiAxMTJweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzMwcHgpIHtcbiAgLmZlYXR1cmUtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGhlaWdodDogMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi5ncmV5LWZpbHRlciB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDAuOSkgY29udHJhc3QoMC43KSBvcGFjaXR5KDAuOSk7XG4gIGN1cnNvcjogYXV0bztcbn1cblxuLmNhcmQtYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5kaXNhYmxlIHtcbiAgb3BhY2l0eTogMC40O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/navigator-home/components/feature-card/feature-card.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/navigator-home/components/feature-card/feature-card.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: FeatureCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureCardComponent", function() { return FeatureCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FeatureCardComponent = class FeatureCardComponent {
    constructor() {
        this.url = '';
        this.name = '';
        this.description = '';
        this.active = true;
        this.groupId = 0;
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FeatureCardComponent.prototype, "url", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FeatureCardComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FeatureCardComponent.prototype, "description", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FeatureCardComponent.prototype, "active", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FeatureCardComponent.prototype, "groupId", void 0);
FeatureCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-feature-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feature-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/navigator-home/components/feature-card/feature-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feature-card.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/navigator-home/components/feature-card/feature-card.component.scss")).default]
    })
], FeatureCardComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/navigator-home/navigator-home.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/navigator-home/navigator-home.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-section {\n  width: 30%;\n}\n@media only screen and (max-width: 1018px) {\n  .card-section {\n    width: 45%;\n  }\n}\n@media only screen and (max-width: 756px) {\n  .card-section {\n    width: 40%;\n  }\n}\n.margin-top {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL25hdmlnYXRvci1ob21lL25hdmlnYXRvci1ob21lLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvbmF2aWdhdG9yL3JvdXRlcy9uYXZpZ2F0b3ItaG9tZS9uYXZpZ2F0b3ItaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFVBQUE7QUNGRjtBREtFO0VBSkY7SUFLSSxVQUFBO0VDRkY7QUFDRjtBRElFO0VBUkY7SUFTSSxVQUFBO0VDREY7QUFDRjtBRGNBO0VBQ0UsZ0JBQUE7QUNYRiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL25hdmlnYXRvci1ob21lL25hdmlnYXRvci1ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGltcG9ydCAnc3JjL3N0eWxlcy93cy12YXJzJztcbi8vIEBpbXBvcnQgJ3NyYy9zdHlsZXMvd3MtbWl4aW5zJztcblxuLmNhcmQtc2VjdGlvbiB7XG4gIHdpZHRoOiAzMCU7XG4gIC8vIG1hcmdpbjogJHNpemUtbTtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMThweCkge1xuICAgIHdpZHRoOiA0NSU7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1NnB4KSB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuXG4gIC8vIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMge1xuICAvLyAgIHdpZHRoOiA5NSU7XG4gIC8vICAgbWFyZ2luOiAkc2l6ZS1zO1xuICAvLyB9XG59XG5cbi5jYXRlZ29yeS10aXRsZSB7XG4gIC8vIG1hcmdpbi10b3A6ICRzaXplLXhzICsgKCRzaXplLXhzLzQpXG59XG5cblxuLm1hcmdpbi10b3Age1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgLy8gbWFyZ2luOiAoJHNpemUteGwgKiAxLjUpIDA7XG59XG4iLCIuY2FyZC1zZWN0aW9uIHtcbiAgd2lkdGg6IDMwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxOHB4KSB7XG4gIC5jYXJkLXNlY3Rpb24ge1xuICAgIHdpZHRoOiA0NSU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzU2cHgpIHtcbiAgLmNhcmQtc2VjdGlvbiB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxufVxuXG4ubWFyZ2luLXRvcCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/navigator-home/navigator-home.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/navigator-home/navigator-home.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: NavigatorHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorHomeComponent", function() { return NavigatorHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigator.service */ "./project/ws/app/src/lib/routes/infy/routes/navigator/services/navigator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let NavigatorHomeComponent = class NavigatorHomeComponent {
    constructor(configSvc, navSvc, route) {
        this.configSvc = configSvc;
        this.navSvc = navSvc;
        this.route = route;
        this.bpmData = [];
        this.status = 'none';
        this.routeSubscription = null;
        this.navigatorTabs = null;
        this.navigatorCards = null;
        this.selectedIndex = 0;
    }
    ngOnInit() {
        this.routeSubscription = this.route.data.subscribe((data) => {
            this.navigatorTabs = data.pageData.data.tabs;
            this.navigatorCards = data.pageData.data.cards;
            if (this.navigatorTabs && this.navigatorTabs.bpmNavigator) {
                this.navSvc.fetchBpmData().subscribe((res) => {
                    this.bpmData = res.data;
                    this.status = 'done';
                });
            }
        });
    }
};
NavigatorHomeComponent.ctorParameters = () => [
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_2__["ConfigurationsService"] },
    { type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_3__["NavigatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
NavigatorHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-navigator-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigator-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/navigator-home/navigator-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigator-home.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/navigator-home/navigator-home.component.scss")).default]
    })
], NavigatorHomeComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/role/role-details/role-details.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/role/role-details/role-details.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner {\n  height: 200px;\n  width: 100%;\n}\n@media only screen and (max-width: 706px) {\n  .banner {\n    flex-wrap: wrap;\n    height: 280px;\n    margin-bottom: 24px;\n  }\n}\n.description {\n  font-size: 1.28em;\n}\n@media only screen and (max-width: 463px) {\n  .description {\n    font-size: 0.95em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL3JvbGUvcm9sZS1kZXRhaWxzL3JvbGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL25hdmlnYXRvci9yb3V0ZXMvcm9sZS9yb2xlLWRldGFpbHMvcm9sZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNGRjtBRFFFO0VBUkY7SUFTSSxlQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0VDTEY7QUFDRjtBRFFBO0VBQ0UsaUJBQUE7QUNMRjtBRE9FO0VBSEY7SUFJSSxpQkFBQTtFQ0pGO0FBQ0YiLCJmaWxlIjoicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvbmF2aWdhdG9yL3JvdXRlcy9yb2xlL3JvbGUtZGV0YWlscy9yb2xlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0ICd+c3JjL3N0eWxlcy93cy12YXJzJztcbi8vIEBpbXBvcnQgJ35zcmMvc3R5bGVzL3dzLW1peGlucyc7XG5cbi5iYW5uZXIge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcblxuICAvLyBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgLy8gICBoZWlnaHQ6IDI0MHB4O1xuICAvLyB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDZweCkge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIH1cbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjI4ZW07XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjNweCkge1xuICAgIGZvbnQtc2l6ZTogMC45NWVtO1xuICB9XG5cbn1cbiIsIi5iYW5uZXIge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzA2cHgpIHtcbiAgLmJhbm5lciB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGhlaWdodDogMjgwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgfVxufVxuXG4uZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuMjhlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYzcHgpIHtcbiAgLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDAuOTVlbTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/role/role-details/role-details.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/role/role-details/role-details.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: RoleDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDetailsComponent", function() { return RoleDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/navigator.service */ "./project/ws/app/src/lib/routes/infy/routes/navigator/services/navigator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");






let RoleDetailsComponent = class RoleDetailsComponent {
    constructor(configSvc, navSvc, route, contentSvc) {
        this.configSvc = configSvc;
        this.navSvc = navSvc;
        this.route = route;
        this.contentSvc = contentSvc;
        this.fetchStatus = 'none';
        this.hasAlternatives = false;
        this.hasCertifications = false;
        this.hasCourses = true;
        this.showAlternatives = false;
        this.strips = [];
        this.certificationIds = [];
        this.coursesResolverData = {
            widgetType: 'contentStrip',
            widgetSubType: 'contentStripMultiple',
            widgetData: {
                strips: [
                    {
                        key: 'courses-strip',
                        preWidgets: [],
                        title: 'Courses',
                        filters: [],
                        request: {
                            ids: [],
                        },
                    },
                ],
            },
        };
        this.certificationsResolverData = {
            widgetType: 'contentStrip',
            widgetSubType: 'contentStripMultiple',
            widgetData: {
                strips: [
                    {
                        key: 'certifications-strip',
                        preWidgets: [],
                        title: 'Certifications',
                        filters: [],
                        request: {
                            ids: [],
                        },
                    },
                ],
            },
        };
        this.alternateCertificationsResolverData = {
            widgetType: 'contentStrip',
            widgetSubType: 'contentStripMultiple',
            widgetData: {
                strips: [],
            },
        };
        this.variantId = this.route.snapshot.params.variant;
        this.roleId = this.route.snapshot.queryParams.id;
    }
    ngOnInit() {
        this.navSvc
            .fetchLearningPathIdData(String(this.roleId))
            .subscribe((lpResult) => {
            this.lpData = lpResult;
            this.fetchStatus = 'done';
            this.fetchContent(this.lpData.profiles[0].courses_list);
            this.getCertificationsForGM(this.lpData);
            this.getAlternativeCertificationsForGM(this.lpData);
        });
    }
    fetchContent(ids) {
        this.coursesResolverData.widgetData.strips.forEach(strip => {
            if (strip.key === 'courses-strip' && strip.request) {
                strip.request.ids = ids;
                this.navSvc.fetchImageForContentIDs(strip.request.ids).subscribe(_ => {
                }, _ => {
                    this.hasCourses = false;
                });
            }
        });
        this.coursesResolverData = Object.assign({}, this.coursesResolverData);
    }
    getCertificationsForGM(data) {
        let ids = [];
        data.certification_data.forEach((certification) => {
            ids.push(certification.primary_certificationId);
        });
        this.certificationsResolverData.widgetData.strips.forEach(strip => {
            if (strip.key === 'certifications-strip' && strip.request && strip.request.ids) {
                ids = [...strip.request.ids, ...ids];
                const setIds = new Set(ids);
                this.certificationIds = Array.from(setIds);
                strip.request.ids = Array.from(setIds);
            }
        });
        if (this.certificationsResolverData.widgetData.strips[0]) {
            // tslint:disable-next-line: max-line-length
            if (this.certificationsResolverData.widgetData.strips[0].request && this.certificationsResolverData.widgetData.strips[0].request.ids) {
                if (this.certificationsResolverData.widgetData.strips[0].request.ids.length > 0) {
                    this.hasCertifications = true;
                }
            }
        }
        else {
            this.hasCertifications = false;
        }
        this.certificationsResolverData = Object.assign({}, this.certificationsResolverData);
        this.navSvc.fetchImageForContentIDs(this.certificationIds).subscribe(_ => {
            // console.log('no error')
        }, _ => {
            // console.log('error occured')
            this.hasCertifications = false;
        });
        // console.log('Has certifications', this.hasCertifications)
    }
    displayAlternatives() {
        this.showAlternatives = !this.showAlternatives;
    }
    getAlternativeCertificationsForGM(data) {
        data.certification_data.forEach((certification) => {
            const certID = [certification.primary_certificationId];
            const alternateIds = certification.alternate_certificationId;
            if (alternateIds.length > 0) {
                this.contentSvc.fetchMultipleContent(certID).subscribe((result) => {
                    const stripData = {
                        key: `alternate-strip${certID}`,
                        preWidgets: [],
                        title: `Alternate Certification for ${result[0].name}`,
                        filters: [],
                        request: {
                            ids: alternateIds,
                        },
                    };
                    this.strips.push(stripData);
                }, () => {
                }, () => {
                    this.alternateCertificationsResolverData.widgetData.strips = this.strips;
                    this.alternateCertificationsResolverData = Object.assign({}, this.alternateCertificationsResolverData);
                    if (this.alternateCertificationsResolverData.widgetData.strips.length > 0) {
                        this.hasAlternatives = true;
                    }
                    else {
                        this.hasAlternatives = false;
                    }
                });
            }
            else {
            }
        });
    }
};
RoleDetailsComponent.ctorParameters = () => [
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_2__["ConfigurationsService"] },
    { type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_3__["NavigatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["WidgetContentService"] }
];
RoleDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-role-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./role-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/role/role-details/role-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./role-details.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/role/role-details/role-details.component.scss")).default]
    })
], RoleDetailsComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/role/role.component.scss":
/*!*********************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/role/role.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner {\n  height: 200px;\n  width: 100%;\n}\n\n.radio-desc {\n  margin-left: 24px;\n  margin-top: -10px;\n  padding-bottom: 10px;\n}\n\n.courses-profile {\n  margin-left: 2px;\n  overflow-x: hidden !important;\n  text-overflow: ellipsis !important;\n}\n\n.text-bold {\n  font-weight: 500;\n}\n\n.practice-certification {\n  display: flex;\n  justify-content: space-around;\n}\n\n.text-right {\n  align-content: right;\n}\n\n.radio {\n  display: flex;\n  align-items: center;\n}\n\n.radio .mat-icon {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n}\n\n.text-desc {\n  font-size: 1.2rem;\n}\n\n.member-image {\n  width: 180px !important;\n  height: 153.33px !important;\n}\n\n.truncate {\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n}\n\n.card-holder {\n  display: flex;\n  flex-direction: row;\n}\n\nmat-radio-button {\n  display: block;\n}\n\n@media only screen and (max-width: 628px) {\n  .alternatives {\n    margin-top: 16px;\n    float: left;\n  }\n}\n\nmat-chip {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL3JvbGUvcm9sZS5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL25hdmlnYXRvci9yb3V0ZXMvcm9sZS9yb2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNGRjs7QURrQkE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNmRjs7QURrQkE7RUFDRSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7QUNmRjs7QURrQkE7RUFDRSxnQkFBQTtBQ2ZGOztBRGtCQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQ2ZGOztBRGtCQTtFQUNFLG9CQUFBO0FDZkY7O0FEa0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDZkY7O0FEaUJFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDZko7O0FEbUJBO0VBQ0UsaUJBQUE7QUNoQkY7O0FEbUJBO0VBQ0UsdUJBQUE7RUFFQSwyQkFBQTtBQ2pCRjs7QURzQkE7RUFDRSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7QUNuQkY7O0FEc0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDbkJGOztBRHVCQTtFQUNFLGNBQUE7QUNwQkY7O0FEd0JFO0VBREY7SUFFSSxnQkFBQTtJQUNBLFdBQUE7RUNwQkY7QUFDRjs7QUQwQkE7RUFDRSxZQUFBO0FDdkJGIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL25hdmlnYXRvci9yb3V0ZXMvcm9sZS9yb2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGltcG9ydCAnfnNyYy9zdHlsZXMvd3MtdmFycyc7XG4vLyBAaW1wb3J0ICd+c3JjL3N0eWxlcy93cy1taXhpbnMnO1xuXG4uYmFubmVyIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLy8gQGluY2x1ZGUgYnJlYWtwb2ludC14cyB7XG4gIC8vICAgaGVpZ2h0OiAyNDBweDtcbiAgLy8gfVxufVxuXG4uZGVzY3JpcHRpb24ge1xuICAvLyBtYXJnaW46IDAgJHNpemUtbTtcbiAgLy8gcGFkZGluZzogMCAkc2l6ZS1tO1xufVxuXG4uY29udGFpbmVyIHtcbiAgLy8gbWFyZ2luOiAkc2l6ZS1sO1xufVxuXG4ucmFkaW8tZGVzYyB7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5jb3Vyc2VzLXByb2ZpbGUge1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wcmFjdGljZS1jZXJ0aWZpY2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgYWxpZ24tY29udGVudDogcmlnaHQ7XG59XG5cbi5yYWRpbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLm1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICB9XG59XG5cbi50ZXh0LWRlc2Mge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLm1lbWJlci1pbWFnZSB7XG4gIHdpZHRoOiAxODBweCAhaW1wb3J0YW50O1xuICAvLyBoZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogMTUzLjMzcHggIWltcG9ydGFudDtcbiAgLy8gbWFyZ2luLWxlZnQ6ICRzaXplLW07XG59XG5cblxuLnRydW5jYXRlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWhvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cblxubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYWx0ZXJuYXRpdmVzIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjhweCkge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG5cbiAgfVxufVxuXG5cblxubWF0LWNoaXAge1xuICBoZWlnaHQ6IGF1dG87XG59XG4iLCIuYmFubmVyIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yYWRpby1kZXNjIHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmNvdXJzZXMtcHJvZmlsZSB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnByYWN0aWNlLWNlcnRpZmljYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnRleHQtcmlnaHQge1xuICBhbGlnbi1jb250ZW50OiByaWdodDtcbn1cblxuLnJhZGlvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5yYWRpbyAubWF0LWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG59XG5cbi50ZXh0LWRlc2Mge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLm1lbWJlci1pbWFnZSB7XG4gIHdpZHRoOiAxODBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE1My4zM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi50cnVuY2F0ZSB7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC1ob2xkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjI4cHgpIHtcbiAgLmFsdGVybmF0aXZlcyB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxufVxuXG5tYXQtY2hpcCB7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/role/role.component.ts":
/*!*******************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/role/role.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _components_multiline_snackbar_multiline_snackbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/multiline-snackbar/multiline-snackbar.component */ "./project/ws/app/src/lib/routes/infy/routes/navigator/components/multiline-snackbar/multiline-snackbar.component.ts");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/navigator.service */ "./project/ws/app/src/lib/routes/infy/routes/navigator/services/navigator.service.ts");








let RoleComponent = class RoleComponent {
    constructor(route, navSvc, btnGoalsSvc, snackBar, configSvc, contentSvc) {
        this.route = route;
        this.navSvc = navSvc;
        this.btnGoalsSvc = btnGoalsSvc;
        this.snackBar = snackBar;
        this.configSvc = configSvc;
        this.contentSvc = contentSvc;
        this.goalsAddingInProgess = false;
        this.groupMemberIndex = 0;
        this.defaultThumbnail = '/assets/images/missing-thumbnail-playlist.png';
        this.allLpData = [];
        this.fetchStatus = 'none';
        this.commonsData = [];
        this.selectedMemberList = [];
        this.strips = [];
        this.hasAlternatives = false;
        this.hasCertifications = false;
        this.showAlternatives = false;
        this.certificationsResolverData = {
            widgetType: 'contentStrip',
            widgetSubType: 'contentStripMultiple',
            widgetData: {
                strips: [
                    {
                        key: 'certifications-strip',
                        preWidgets: [],
                        title: '',
                        filters: [],
                        request: {
                            ids: [],
                        },
                    },
                ],
            },
        };
        this.alternateCertificationsResolverData = {
            widgetType: 'contentStrip',
            widgetSubType: 'contentStripMultiple',
            widgetData: {
                strips: [],
            },
        };
        this.allRoles = [];
        this.learningPathData = [];
        this.groupMemberData = [];
        this.selectedRole = {
            role_description: '',
            role_id: '',
            role_image: '',
            variants: [],
            role_name: '',
            roles_defined: false,
            courses_available: false,
        };
        this.selectedVariant = {
            variant_id: '',
            variant_image: '',
            variant_description: '',
            variant_name: '',
        };
        this.certificationsData = [];
        this.roleId = this.route.snapshot.params.id;
        this.variantId = this.route.snapshot.queryParams.variant;
        this.navSvc.fetchNavigatorRoles().subscribe((data) => {
            this.rolesData = data;
            this.findRole();
        });
        this.navSvc.fetchRolesVariantData(this.roleId, this.variantId).subscribe((data) => {
            this.selectedVariant = data;
            // //console.log('var', this.selectedVariant)
            if (this.selectedVariant.group) {
                this.selectedVariant.group.forEach((group) => {
                    const linkedLpData = [];
                    group.group_member.forEach((member) => {
                        let matchedLp;
                        this.navSvc
                            .fetchLearningPathIdData(String(member.lp_linked_id))
                            .subscribe((lpResult) => {
                            matchedLp = lpResult;
                            linkedLpData.push(matchedLp);
                            this.navSvc.fetchImageForContentID(matchedLp.linked_program).subscribe(res => {
                                matchedLp.lp_image = res[0].appIcon;
                            }, () => { });
                            this.allLpData.push(matchedLp);
                        });
                    });
                    this.groupMemberData.push(linkedLpData);
                });
            }
            // //console.log('groupM', this.groupMemberData)
            this.getCertificationsData(this.selectedVariant);
            this.fetchStatus = 'done';
        });
    }
    // getProfileTime(profiles: IProfile[], profileId: number) {
    //   return profiles.find(profile => profile.profile_id === profileId).profile_time
    // }
    ngOnInit() {
        this.navSvc.fetchCommonsData().subscribe(data => {
            this.commonsData = data.goal_data;
        });
        if (this.configSvc.instanceConfig) {
            this.defaultThumbnail = this.configSvc.instanceConfig.logos.defaultContent;
        }
    }
    findRole() {
        const offeringRoles = [];
        offeringRoles.push(this.rolesData.Accelerate.roles);
        offeringRoles.push(this.rolesData.Assure.roles);
        offeringRoles.push(this.rolesData.Experience.roles);
        offeringRoles.push(this.rolesData.Innovate.roles);
        offeringRoles.push(this.rolesData.Insight.roles);
        offeringRoles.forEach(roles => {
            roles.forEach(roleData => {
                this.allRoles.push(roleData);
            });
        });
        const role = this.allRoles.find((roleData) => {
            return roleData.role_id === this.roleId;
        });
        if (role) {
            this.selectedRole = role;
            // //console.log('selected role', role)
        }
    }
    createGoalClicked(group) {
        let linkedId;
        if (group.group_member.length > 1) {
            // //console.log('Goal Attack', group.group_member[this.groupMemberIndex].lp_linked_id)
            linkedId = group.group_member[this.groupMemberIndex].lp_linked_id;
        }
        else {
            // //console.log('Selected Member', group.group_member[0].lp_linked_id)
            linkedId = group.group_member[0].lp_linked_id;
        }
        const resultLines = [];
        this.goalsAddingInProgess = true;
        const goalRequests = [];
        const id = this.commonsData.find((commonData) => {
            return commonData.lp_id === String(linkedId);
        });
        if (id) {
            const goals = {
                type: 'common',
                id: id.goal_id,
                duration: 10,
            };
            goalRequests.push(goals);
        }
        // //console.log('requ', goalRequests)
        // //console.log('all', this.allLpData)
        if (goalRequests.length) {
            this.btnGoalsSvc.createGoals(goalRequests).subscribe(response => {
                for (let i = 0; i < response.length; i += 1) {
                    const goalName = this.allLpData.find((lp) => {
                        return lp.lp_id === linkedId;
                    });
                    if (goalName) {
                        if (response[i] === 'invalid.commongoal') {
                            // this.loggerSvc.log(goalsData[i], 'failed')
                            const res = `${goalName.lp_name} is not launched yet`;
                            resultLines.push(res);
                        }
                        else if (response[i] === 'goal.alreadyexists') {
                            const res = `${goalName.lp_name} is already present in your Goals`;
                            resultLines.push(res);
                        }
                        else {
                            // this.loggerSvc.log(goalsData[i], 'success')
                            const res = `${goalName.lp_name} Added Successfully`;
                            resultLines.push(res);
                        }
                    }
                }
                // //console.log('results', resultLines)
                this.snackBar.openFromComponent(_components_multiline_snackbar_multiline_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["MultilineSnackbarComponent"], {
                    data: resultLines,
                });
                this.goalsAddingInProgess = false;
            });
        }
        else {
            this.goalsAddingInProgess = false;
            this.snackBar.open('Goal not launched yet');
        }
    }
    groupMemberChanged(index) {
        // //console.log(index, 'select radio ')
        this.selectedMemberList = [];
        this.groupMemberIndex = index;
        if (this.selectedVariant) {
            if (this.certificationsResolverData.widgetData && this.certificationsResolverData.widgetData.strips[0].request) {
                this.certificationsResolverData.widgetData.strips[0].request.ids = [];
            }
            this.getCertificationsData(this.selectedVariant);
        }
    }
    getCertificationsData(selectedVariant) {
        // //console.log('variant under certification', selectedVariant)
        if (selectedVariant && selectedVariant.group) {
            selectedVariant.group.forEach(group => {
                if (group.group_member.length > 1) {
                    // //console.log('Group check', group.group_member)
                    // //console.log('Group linked id', group.group_member[this.groupMemberIndex].lp_linked_id)
                    this.navSvc
                        .fetchLearningPathIdData(String(group.group_member[this.groupMemberIndex].lp_linked_id))
                        .subscribe((data) => {
                        // //console.log('data fetch multiple ', data)
                        this.selectedMemberList.push(data.lp_name);
                        this.getCertificationsForGM(data);
                        this.strips = [];
                        this.getAlternativeCertificationsForGM(data);
                    });
                }
                else {
                    this.navSvc
                        .fetchLearningPathIdData(String(group.group_member[0].lp_linked_id))
                        .subscribe((data) => {
                        // //console.log('data fetch id ', data)
                        this.selectedMemberList.push(data.lp_name);
                        this.getCertificationsForGM(data);
                        this.strips = [];
                        this.getAlternativeCertificationsForGM(data);
                    });
                }
            });
        }
    }
    getCertificationsForGM(data) {
        let ids = [];
        data.certification_data.forEach((certification) => {
            ids.push(certification.primary_certificationId);
        });
        this.certificationsResolverData.widgetData.strips.forEach(strip => {
            if (strip.key === 'certifications-strip' && strip.request && strip.request.ids) {
                ids = [...strip.request.ids, ...ids];
                const setIds = new Set(ids);
                strip.request.ids = Array.from(setIds);
            }
        });
        if (this.certificationsResolverData.widgetData.strips[0]) {
            // tslint:disable-next-line: max-line-length
            if (this.certificationsResolverData.widgetData.strips[0].request && this.certificationsResolverData.widgetData.strips[0].request.ids) {
                if (this.certificationsResolverData.widgetData.strips[0].request.ids.length > 0) {
                    this.hasCertifications = true;
                }
            }
        }
        else {
            this.hasCertifications = false;
        }
        this.certificationsResolverData = Object.assign({}, this.certificationsResolverData);
    }
    displayAlternatives() {
        this.showAlternatives = !this.showAlternatives;
    }
    getAlternativeCertificationsForGM(data) {
        data.certification_data.forEach((certification) => {
            const certID = [certification.primary_certificationId];
            const alternateIds = certification.alternate_certificationId;
            if (alternateIds.length > 0) {
                this.contentSvc.fetchMultipleContent(certID).subscribe((result) => {
                    const stripData = {
                        key: `alternate-strip${certID}`,
                        preWidgets: [],
                        title: `Alternate Certification for ${result[0].name}`,
                        filters: [],
                        request: {
                            ids: alternateIds,
                        },
                    };
                    this.strips.push(stripData);
                }, () => {
                }, () => {
                    this.alternateCertificationsResolverData.widgetData.strips = this.strips;
                    this.alternateCertificationsResolverData = Object.assign({}, this.alternateCertificationsResolverData);
                    if (this.alternateCertificationsResolverData.widgetData.strips.length > 0) {
                        this.hasAlternatives = true;
                    }
                    else {
                        this.hasAlternatives = false;
                    }
                });
            }
            else { }
        });
    }
};
RoleComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_7__["NavigatorService"] },
    { type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["BtnGoalsService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_5__["ConfigurationsService"] },
    { type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["WidgetContentService"] }
];
RoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-role',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./role.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/role/role.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./role.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/role/role.component.scss")).default]
    })
], RoleComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/roles/components/role-card/role-card.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/roles/components/role-card/role-card.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-container {\n  position: relative;\n  width: 290px;\n}\n@media only screen and (max-width: 599px) {\n  .card-container {\n    width: 230px;\n  }\n}\n.card-image {\n  width: 290px;\n  border-radius: 8px 8px 0 0;\n  height: 150px;\n}\n@media only screen and (max-width: 599px) {\n  .card-image {\n    width: 230px;\n  }\n}\n.mat-card {\n  padding: 0;\n  height: 100%;\n}\n.card-information {\n  margin: 12px 16px;\n  display: flex;\n  flex-direction: column;\n}\n.button-holder {\n  display: flex;\n  justify-content: flex-end;\n  border-radius: 0;\n  align-content: center;\n  border: none;\n  margin: 12px 0;\n}\n.button-holder button {\n  padding-right: 0;\n}\n.button-holder span {\n  margin-right: 5px;\n}\n@media only screen and (max-width: 599px) {\n  .button-holder {\n    margin-top: 10px;\n  }\n}\n.title {\n  margin-left: 8px;\n}\n.description {\n  height: 80px;\n}\n.radio-buttons {\n  margin-top: 8px;\n  display: flex;\n  flex-direction: column;\n  height: 151.58px;\n  position: relative;\n}\n.variant-radio-label {\n  margin: 8px;\n}\n.mat-radio-group {\n  height: 151.58px;\n  overflow: hidden;\n}\n.small-icon {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.grid {\n  display: grid;\n  grid-template-rows: 0.5fr 0.5fr;\n}\n.end {\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL3JvbGVzL2NvbXBvbmVudHMvcm9sZS1jYXJkL3JvbGUtY2FyZC5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL25hdmlnYXRvci9yb3V0ZXMvcm9sZXMvY29tcG9uZW50cy9yb2xlLWNhcmQvcm9sZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc29uYXNoYWp1L1ZpZGVvcy9zcGhlcmUtbW9iaWxlL3N0eWxlcy9fd3MtbWl4aW5zLnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvc3R5bGVzL193cy12YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNORjtBQ2dCRTtFRlpGO0lBS0ksWUFBQTtFQ0xGO0FBQ0Y7QURRQTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7QUNMRjtBQ0tFO0VGSEY7SUFNSSxZQUFBO0VDSkY7QUFDRjtBRE9BO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNKRjtBRFNBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNORjtBRFNBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDTkY7QURRRTtFQUNFLGdCQUFBO0FDTko7QURTRTtFQUNFLGlCQUFBO0FDUEo7QUMxQkU7RUZvQkY7SUFpQkksZ0JBQUE7RUNQRjtBQUNGO0FEVUE7RUFDRSxnQkdwRFE7QUY2Q1Y7QURVQTtFQUNFLFlBQUE7QUNQRjtBRFVBO0VBQ0UsZUc1RFE7RUg2RFIsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1BGO0FEVUE7RUFDRSxXR3BFUTtBRjZEVjtBRFVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ1BGO0FEV0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNSRjtBRFdBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0FDUkY7QURXQTtFQUNFLHlCQUFBO0FDUkYiLCJmaWxlIjoicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvbmF2aWdhdG9yL3JvdXRlcy9yb2xlcy9jb21wb25lbnRzL3JvbGUtY2FyZC9yb2xlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5AaW1wb3J0ICdzdHlsZXMvX3dzLW1peGlucy5zY3NzJztcblxuJG1lZGl1bS1iYWRnZS1zaXplOiA5MHB4O1xuJHNtYWxsLWJhZGdlLXNpemU6IDUwcHg7XG4kYmFkZ2UtcGFkZGluZzogMTJweDtcblxuLmNhcmQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjkwcHg7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14cyB7XG4gICAgd2lkdGg6IDIzMHB4O1xuICB9XG59XG5cbi5jYXJkLWltYWdlIHtcbiAgd2lkdGg6IDI5MHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcbiAgaGVpZ2h0OiAxNTBweDtcblxuICBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgICB3aWR0aDogMjMwcHg7XG4gIH1cbn1cblxuLm1hdC1jYXJkIHtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuXG5cbn1cblxuLmNhcmQtaW5mb3JtYXRpb24ge1xuICBtYXJnaW46ICRzaXplLXMgJHNpemUtbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJ1dHRvbi1ob2xkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAkc2l6ZS1zIDA7XG5cbiAgYnV0dG9uIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG5cbiAgc3BhbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cblxuICBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAkc2l6ZS14cztcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4ucmFkaW8tYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6ICRzaXplLXhzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDE1MS41OHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi52YXJpYW50LXJhZGlvLWxhYmVsIHtcbiAgbWFyZ2luOiAkc2l6ZS14cztcbn1cblxuLm1hdC1yYWRpby1ncm91cCB7XG4gIGhlaWdodDogMTUxLjU4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuLnNtYWxsLWljb24ge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAwLjVmcjtcbn1cblxuLmVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4iLCIuY2FyZC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyOTBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLmNhcmQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMjMwcHg7XG4gIH1cbn1cblxuLmNhcmQtaW1hZ2Uge1xuICB3aWR0aDogMjkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwO1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAuY2FyZC1pbWFnZSB7XG4gICAgd2lkdGg6IDIzMHB4O1xuICB9XG59XG5cbi5tYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcmQtaW5mb3JtYXRpb24ge1xuICBtYXJnaW46IDEycHggMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJ1dHRvbi1ob2xkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAxMnB4IDA7XG59XG4uYnV0dG9uLWhvbGRlciBidXR0b24ge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLmJ1dHRvbi1ob2xkZXIgc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAuYnV0dG9uLWhvbGRlciB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuXG4udGl0bGUge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5yYWRpby1idXR0b25zIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDE1MS41OHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi52YXJpYW50LXJhZGlvLWxhYmVsIHtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5tYXQtcmFkaW8tZ3JvdXAge1xuICBoZWlnaHQ6IDE1MS41OHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDAuNWZyO1xufVxuXG4uZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn0iLCJAaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5cbkBtaXhpbiByZXRpbmEge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBwcmludCB7XG4gIEBtZWRpYSBvbmx5IHByaW50IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gYnJlYWtwb2ludC14cyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQteGwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkgYW5kIChtYXgtd2lkdGg6IDUwMDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQteGwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC14cyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtbSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iLCIkZm9udC1mYW1pbHktc2FuczogJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCxcbiAgJ05vdG8gU2FucycsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLFxuICAnTm90byBDb2xvciBFbW9qaSc7XG4kZm9udC1mYW1pbHktc2VyaWY6IEdlb3JnaWEsIENhbWJyaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4kZm9udC1mYW1pbHktbW9ubzogTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdMaWJlcmF0aW9uIE1vbm8nLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4kZm9udC1mYW1pbHktb3Blbi1zYW5zOiAnT3BlbiBTYW5zJztcbiRmb250LWZhbWlseS1vcGVuLXBvcHBpbnM6ICdSb2JvdG8nO1xuXG5cbiRzaXplLXhzOiA4cHg7XG4kc2l6ZS1zOiAxMnB4O1xuJHNpemUtbTogMTZweDtcbiRzaXplLWw6IDI0cHg7XG4kc2l6ZS14bDogMzJweDtcbiRzaXplLWxnOiAyOHB4O1xuJHNpemUteHhsOiA0MHB4O1xuXG4kbWF0LXRvb2xiYXIteHM6IDUycHg7XG4kbWF0LXRvb2xiYXItZ3QteHM6IDU2cHg7XG4iXX0= */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/roles/components/role-card/role-card.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/roles/components/role-card/role-card.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: RoleCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleCardComponent", function() { return RoleCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");



let RoleCardComponent = class RoleCardComponent {
    constructor(configSvc) {
        this.configSvc = configSvc;
        this.showMore = true;
        this.showLess = false;
        this.variantStart = 0;
        this.defaultThumbnail = '/assets/images/missing-thumbnail.png';
        this.variants = [];
        this.otherVariants = [];
        this.allVariants = [];
    }
    ngOnInit() {
        // //console.log('test', this.roleOffering)
        this.selectedVariant = {
            variant_id: this.roleOffering.variants[0].variant_id,
            variant_name: this.roleOffering.variants[0].variant_name,
            variant_image: this.roleOffering.variants[0].variant_image,
            variant_description: this.roleOffering.variants[0].variant_description,
        };
        if (this.configSvc.instanceConfig) {
            this.defaultThumbnail = this.configSvc.instanceConfig.logos.defaultContent;
        }
        this.allVariants = this.roleOffering.variants;
        if (this.allVariants.length > 3) {
            const tempVariants = this.allVariants.concat();
            this.variants = tempVariants.slice(this.variantStart, 3);
            this.otherVariants = tempVariants.slice(this.variantStart);
        }
        else {
            this.variants = this.allVariants.slice();
        }
    }
    onSelectionChange(entry) {
        if (this.selectedVariant) {
            this.selectedVariant.variant_id = entry.variant_id;
            this.selectedVariant.variant_name = entry.variant_name;
        }
    }
    changeVariants(mode) {
        if (mode === 'prev') {
            this.showMore = true;
            this.variantStart -= 3;
            const tempVariants = this.allVariants.concat();
            this.variants = tempVariants.splice(this.variantStart, 3);
            if (this.variantStart <= 2) {
                this.variantStart = 0;
                this.showLess = false;
            }
        }
        else {
            this.showLess = true;
            // here we update the variants based on the selection
            if (this.allVariants.length - 3 > 3) {
                this.variantStart += 3;
                const tempVariants = this.allVariants.concat();
                this.variants = tempVariants.splice(this.variantStart, 3);
            }
            else {
                this.variantStart += 3;
                const tempVariants = this.allVariants.concat();
                this.variants = tempVariants.splice(this.variantStart, 3);
            }
            if (this.variantStart + 2 >= this.allVariants.length - 1) {
                this.variantStart = this.allVariants.length - 1;
                this.showMore = false;
            }
        }
        // //console.log('new variants', this.variants, this.otherVariants)
    }
};
RoleCardComponent.ctorParameters = () => [
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_2__["ConfigurationsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RoleCardComponent.prototype, "roleOffering", void 0);
RoleCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-role-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./role-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/roles/components/role-card/role-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./role-card.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/roles/components/role-card/role-card.component.scss")).default]
    })
], RoleCardComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/roles/roles.component.scss":
/*!***********************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/roles/roles.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headings {\n  margin: 0 30px;\n}\n\n.margin-top {\n  margin-top: 20px;\n}\n\np {\n  font-weight: 400;\n}\n\n.card-container {\n  position: relative;\n  min-height: 100px;\n  margin: 0 15px;\n}\n\n.card-holder {\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  position: relative;\n}\n\n.card-holder:first {\n  margin-left: 0px;\n}\n\n.card-holder ws-app-role-card {\n  margin: 20px;\n}\n\n.toolbar {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n  align-items: center;\n}\n\n.button-holder {\n  display: flex;\n  justify-content: flex-end;\n  border-radius: 0;\n  align-content: center;\n  border: none;\n  margin-right: 16px;\n}\n\n.role {\n  margin: 16px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9uYXZpZ2F0b3Ivcm91dGVzL3JvbGVzL3JvbGVzLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvbmF2aWdhdG9yL3JvdXRlcy9yb2xlcy9yb2xlcy5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLXZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGNBQUE7QUNKRjs7QURPQTtFQUNFLGdCQUFBO0FDSkY7O0FET0E7RUFDRSxnQkFBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNKRjs7QURPQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURNRTtFQUNFLGdCQUFBO0FDSko7O0FET0U7RUFDRSxZQUFBO0FDTEo7O0FEU0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkU5Qk87RUYrQlAsbUJBQUE7QUNORjs7QURTQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JFeENPO0FEa0NUOztBRFNBO0VBQ0UsY0FBQTtBQ05GIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL25hdmlnYXRvci9yb3V0ZXMvcm9sZXMvcm9sZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5AaW1wb3J0ICdzdHlsZXMvX3dzLW1peGlucy5zY3NzJztcblxuJGNvbnRlbnQtbWFyZ2luLWxlZnQ6IDYwcHg7XG5cbi5oZWFkaW5ncyB7XG4gIG1hcmdpbjogMCAkY29udGVudC1tYXJnaW4tbGVmdC8yO1xufVxuXG4ubWFyZ2luLXRvcCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbnAge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDAgJGNvbnRlbnQtbWFyZ2luLWxlZnQvNDtcbn1cblxuLmNhcmQtaG9sZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOmZpcnN0IHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG5cbiAgd3MtYXBwLXJvbGUtY2FyZCB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG59XG5cbi50b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAkc2l6ZS1tO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnV0dG9uLWhvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6ICRzaXplLW07XG59XG5cbi5yb2xlIHtcbiAgbWFyZ2luOiAkc2l6ZS1tIDA7XG59XG4iLCIuaGVhZGluZ3Mge1xuICBtYXJnaW46IDAgMzBweDtcbn1cblxuLm1hcmdpbi10b3Age1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5wIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAwIDE1cHg7XG59XG5cbi5jYXJkLWhvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2FyZC1ob2xkZXI6Zmlyc3Qge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLmNhcmQtaG9sZGVyIHdzLWFwcC1yb2xlLWNhcmQge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi50b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnV0dG9uLWhvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5yb2xlIHtcbiAgbWFyZ2luOiAxNnB4IDA7XG59IiwiJGZvbnQtZmFtaWx5LXNhbnM6ICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsXG4gICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJyxcbiAgJ05vdG8gQ29sb3IgRW1vamknO1xuJGZvbnQtZmFtaWx5LXNlcmlmOiBHZW9yZ2lhLCBDYW1icmlhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuJGZvbnQtZmFtaWx5LW1vbm86IE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuJGZvbnQtZmFtaWx5LW9wZW4tc2FuczogJ09wZW4gU2Fucyc7XG4kZm9udC1mYW1pbHktb3Blbi1wb3BwaW5zOiAnUm9ib3RvJztcblxuXG4kc2l6ZS14czogOHB4O1xuJHNpemUtczogMTJweDtcbiRzaXplLW06IDE2cHg7XG4kc2l6ZS1sOiAyNHB4O1xuJHNpemUteGw6IDMycHg7XG4kc2l6ZS1sZzogMjhweDtcbiRzaXplLXh4bDogNDBweDtcblxuJG1hdC10b29sYmFyLXhzOiA1MnB4O1xuJG1hdC10b29sYmFyLWd0LXhzOiA1NnB4O1xuIl19 */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/roles/roles.component.ts":
/*!*********************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/routes/roles/roles.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/navigator.service */ "./project/ws/app/src/lib/routes/infy/routes/navigator/services/navigator.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");




let RolesComponent = class RolesComponent {
    constructor(navSvc, breakpointObserver) {
        this.navSvc = navSvc;
        this.breakpointObserver = breakpointObserver;
        this.status = 'none';
        this.smallScreen = false;
        this.selectedTrack = 'Accelerate';
        this.hasMore = false;
        this.isSmallScreen$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].XSmall);
        this.navSvc.fetchNavigatorRoles().subscribe((data) => {
            this.rolesData = data;
            this.currentTrackData = this.rolesData.Accelerate.roles;
            this.status = 'done';
        });
        this.isSmallScreen$.subscribe((breakPointState) => {
            if (breakPointState.matches) {
                this.smallScreen = true;
            }
            else {
                this.smallScreen = false;
            }
        });
    }
    ngOnInit() { }
    trackClicked(newTrack) {
        this.selectedTrack = newTrack;
        this.hasMore = false;
        if (newTrack === 'Assure') {
            this.currentTrackData = this.rolesData.Assure.roles;
        }
        else if (newTrack === 'Experience') {
            this.currentTrackData = this.rolesData.Experience.roles;
        }
        else if (newTrack === 'Insight') {
            this.currentTrackData = this.rolesData.Insight.roles;
        }
        else if (newTrack === 'Innovate') {
            this.currentTrackData = this.rolesData.Innovate.roles;
        }
        else {
            this.currentTrackData = this.rolesData.Accelerate.roles;
        }
        if (this.currentTrackData.length > 3) {
            this.hasMore = true;
        }
    }
};
RolesComponent.ctorParameters = () => [
    { type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] }
];
RolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-roles',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./roles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/navigator/routes/roles/roles.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./roles.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/navigator/routes/roles/roles.component.scss")).default]
    })
], RolesComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/navigator/services/navigator.service.ts":
/*!*******************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/navigator/services/navigator.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: NavigatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorService", function() { return NavigatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






const PROTECTED_SLAG_V8 = '/apis/protected/v8';
const API_SERVER_BASE = '/apis';
const PROXIES_SLAG_V8 = `${API_SERVER_BASE}/proxies/v8`;
const API_END_POINTS = {
    NAVIGATOR_LP: `${PROTECTED_SLAG_V8}/navigator/lp`,
    NAVIGATOR_FS: `${PROTECTED_SLAG_V8}/navigator/fp`,
    NAVIGATOR_ROLES: `${PROTECTED_SLAG_V8}/navigator/roles`,
    NAVIGATOR_ROLE: `${PROTECTED_SLAG_V8}/navigator/role`,
    NAVIGATOR_SUGGESTIONS: `${PROTECTED_SLAG_V8}/navigator/topics`,
    NAVIGATOR_COMMONS_DATA: `${PROXIES_SLAG_V8}/web-hosted/navigator/json/commonsdata.json`,
    NAVIGATOR_LP_DATA: `${PROXIES_SLAG_V8}/web-hosted/navigator/json/data.json`,
    NAVIGATOR_ROLES_DATA: `${PROXIES_SLAG_V8}/web-hosted/navigator/json/nsodata.json`,
    NAVIGATOR_BPM_DATA: `${PROTECTED_SLAG_V8}/navigator/bpm`,
};
let NavigatorService = class NavigatorService {
    constructor(http, contentSvc) {
        this.http = http;
        this.contentSvc = contentSvc;
        this.analyticsFetchStatus = 'none';
        this.analyticsReplaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](0);
    }
    fetchLearningPathData() {
        return this.http.get(`${API_END_POINTS.NAVIGATOR_LP}`);
    }
    fetchFullStackData() {
        return this.http.get(`${API_END_POINTS.NAVIGATOR_FS}`);
    }
    fetchNavigatorRoles() {
        return this.http.get(`${API_END_POINTS.NAVIGATOR_ROLES}`);
    }
    fetchNavigatorTopics() {
        return this.http.get(`${API_END_POINTS.NAVIGATOR_LP_DATA}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((data) => {
            const topics = new Set();
            data.lp_data.forEach((lp) => {
                lp.profiles.forEach((profile) => {
                    profile.technology.forEach((technology) => {
                        topics.add(technology.trim());
                    });
                });
            });
            return Array.from(topics);
        }));
    }
    fetchCommonsData() {
        return this.http.get(`${API_END_POINTS.NAVIGATOR_COMMONS_DATA}`);
    }
    fetchRolesVariantData(roleId, variantId) {
        return this.http.get(`${API_END_POINTS.NAVIGATOR_ROLE}/${roleId}/${variantId}`);
    }
    fetchLearningPathIdData(lpId) {
        return this.http.get(`${API_END_POINTS.NAVIGATOR_LP}/${lpId}`);
    }
    fetchBpmData() {
        return this.http.get(`${API_END_POINTS.NAVIGATOR_BPM_DATA}`);
    }
    fetchContentAnalyticsData(tagName) {
        if (this.analyticsFetchStatus !== 'fetching' && this.analyticsFetchStatus !== 'done') {
            this.getContentAnalytics(tagName);
        }
        return this.analyticsReplaySubject;
    }
    getContentAnalytics(tagName) {
        this.analyticsFetchStatus = 'fetching';
        // tslint:disable-next-line: max-line-length
        const url = `${PROXIES_SLAG_V8}/LA/LA/api/participants?aggsSize=1000&endDate=${this.endDate}&startDate=${this.startDate}&from=0&refinementfilter=${encodeURIComponent('"source":["Wingspan","Learning Hub"]')}$${encodeURIComponent(`"topics": ["${tagName}"]`)}`;
        // this.http
        //   .get(url)
        //   .subscribe(
        //     result => {
        //       this.analyticsFetchStatus = 'done'
        //       this.analyticsReplaySubject.next(result)
        //     },
        //     () => {
        //       this.analyticsReplaySubject.next(null)
        //       this.analyticsFetchStatus = 'done'
        //     },
        // )
        return this.http.get(url);
    }
    fetchImageForContentID(contentId) {
        if (contentId) {
            const ids = [];
            ids.push(contentId);
            return this.contentSvc.fetchMultipleContent(ids);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(['']);
    }
    fetchImageForContentIDs(contentIds) {
        return this.contentSvc.fetchMultipleContent(contentIds);
    }
    get endDate() {
        return `${new Date().getFullYear()}-${`0${new Date().getMonth() + 1}`.slice(-2)}-${`0${new Date().getDate()}`.slice(-2)}`;
    }
    get startDate() {
        return `2018-04-01`;
    }
};
NavigatorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["WidgetContentService"] }
];
NavigatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], NavigatorService);



/***/ })

}]);
//# sourceMappingURL=routes-navigator-navigator-module-es2015.js.map