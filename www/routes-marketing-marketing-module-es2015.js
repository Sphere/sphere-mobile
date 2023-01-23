(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-marketing-marketing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/marketing/marketing-services/marketing-services.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/marketing/marketing-services/marketing-services.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div class=\"flex display-toggle-margin\">\n    <img\n      i18n-alt\n      alt=\"pentagon filter\"\n      src=\"\\assets\\images\\marketing\\pentagon-filter.svg\"\n      (click)=\"displayType = 'pentagon'\"\n      class=\"pentagon-toggle cur-pointer\"\n      [ngClass]=\"{\n        'big-pentagon': displayType === 'pentagon',\n        'small-pentagon': displayType === 'a2z'\n      }\"\n    />\n    <span class=\"mat-title mx-2\"> | </span>\n    <span\n      class=\"mat-title cur-pointer\"\n      (click)=\"displayType = 'a2z'\"\n      i18n=\"marketing services a-z offerings\"\n      [ngClass]=\"{ 'bold-text': displayType === 'a2z' }\"\n      >A-Z</span\n    >\n  </div>\n  <ws-app-pentagon\n    *ngIf=\"displayType === 'pentagon'\"\n    [default]=\"'Accelerate'\"\n    (trackClicked)=\"trackClicked($event)\"\n  >\n  </ws-app-pentagon>\n  <section *ngIf=\"selectedPillar\" class=\"margin-top-m content-strip mat-elevation-z2\">\n    <ng-container [wsResolverWidget]=\"widgetResolverData\"></ng-container>\n    <mat-list role=\"list\" *ngIf=\"displayType === 'a2z'\">\n      <mat-list-item\n        class=\"cur-pointer\"\n        role=\"listitem\"\n        *ngFor=\"let offering of azOfferings\"\n        (click)=\"navigateToSubTrack(offering)\"\n      >\n        {{ offering.displayName }}\n      </mat-list-item>\n    </mat-list>\n  </section>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/marketing/marketing.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/marketing/marketing.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar [color]=\"pageNavbar.color\" [ngStyle]=\"pageNavbar?.styles\">\n  <div class=\"flex flex-middle\">\n    <ws-widget-btn-page-back [widgetData]=\"{ url: 'back' }\"></ws-widget-btn-page-back>\n    <button type=\"button\" mat-icon-button (click)=\"sideNavBarOpened = !sideNavBarOpened\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span i18n=\"page title: marketing\" class=\"margin-left-xs\">Marketing</span>\n  </div>\n</mat-toolbar>\n\n<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav class=\"sidenav\" [mode]=\"mode$ | async\" [(opened)]=\"sideNavBarOpened\">\n    <mat-nav-list class=\"padding-remove-top\">\n      <a\n        mat-list-item\n        [routerLink]=\"'/app/infy/marketing/brandAssets'\"\n        routerLinkActive=\"faq-active-class mat-toolbar mat-stroked-button\"\n        (click)=\"sideNavOnClick()\"\n        i18n=\"page faq side nav item one\"\n        accesskey=\"1\"\n        >Brand Assets</a\n      >\n      <a\n        mat-list-item\n        aria-label=\"ODC Access Related Faqs\"\n        class=\"\"\n        [routerLink]=\"'/app/infy/marketing/experience'\"\n        routerLinkActive=\"faq-active-class mat-toolbar mat-stroked-button\"\n        (click)=\"sideNavOnClick()\"\n        i18n=\"page faq side nav item two\"\n        accesskey=\"2\"\n        >Experiential Showcase</a\n      >\n      <a\n        mat-list-item\n        aria-label=\"Compatibility Related Faqs\"\n        class=\"\"\n        [routerLink]=\"'/app/infy/marketing/hubs'\"\n        routerLinkActive=\"faq-active-class mat-toolbar mat-stroked-button\"\n        (click)=\"sideNavOnClick()\"\n        i18n=\"page faq side nav item three\"\n        accesskey=\"3\"\n        >Hubs</a\n      >\n      <a\n        mat-list-item\n        aria-label=\"Installation Related Faqs\"\n        class=\"\"\n        [routerLink]=\"'/app/infy/marketing/clientStories'\"\n        routerLinkActive=\"faq-active-class mat-toolbar mat-stroked-button\"\n        (click)=\"sideNavOnClick()\"\n        i18n=\"page faq side nav item four\"\n        accesskey=\"4\"\n        >Client Stories</a\n      >\n      <a\n        mat-list-item\n        aria-label=\"Progress Completion Related Faqs\"\n        class=\"\"\n        [routerLink]=\"'/app/infy/marketing/services'\"\n        routerLinkActive=\"faq-active-class mat-toolbar mat-stroked-button\"\n        (click)=\"sideNavOnClick()\"\n        i18n=\"page faq side nav item five\"\n        accesskey=\"5\"\n        >Services</a\n      >\n      <a\n        mat-list-item\n        aria-label=\"Video Related Faqs\"\n        class=\"\"\n        [routerLink]=\"'/app/infy/marketing/marketing-industries'\"\n        routerLinkActive=\"faq-active-class mat-toolbar mat-stroked-button\"\n        (click)=\"sideNavOnClick()\"\n        i18n=\"page faq side nav item six\"\n        accesskey=\"6\"\n        >Industries</a\n      >\n      <a\n        mat-list-item\n        aria-label=\"Authoring Related Faqs\"\n        class=\"\"\n        [routerLink]=\"'/app/infy/marketing/marketing-products'\"\n        routerLinkActive=\"faq-active-class mat-toolbar mat-stroked-button\"\n        (click)=\"sideNavOnClick()\"\n        i18n=\"page faq side nav item seven\"\n        accesskey=\"7\"\n        >Products and Subsidiaries</a\n      >\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <div *ngIf=\"screenSizeIsLtMedium\" class=\"flex flex-middle\">\n      <!-- <button type=\"button\" mat-icon-button (click)=\"sideNavBarOpened = !sideNavBarOpened\">\n        <mat-icon>menu</mat-icon>\n      </button> -->\n      <h2 class=\"mat-subheading-2 margin-remove padding-left-xs\" [ngSwitch]=\"currentTab\">\n        <span *ngSwitchCase=\"'brandAssets'\" i18n=\"page faq mobile top nav item one\" accesskey=\"1\"\n          >Brand Assets</span\n        >\n        <span *ngSwitchCase=\"'experience'\" i18n=\"page faq mobile top nav item two\" accesskey=\"2\"\n          >Experiential Showcase</span\n        >\n        <span *ngSwitchCase=\"'hubs'\" i18n=\"page faq mobile top nav item three\" accesskey=\"3\"\n          >Hubs</span\n        >\n        <span *ngSwitchCase=\"'clientStories'\" i18n=\"page faq mobile top nav item four\" accesskey=\"4\"\n          >Client Stories</span\n        >\n        <span *ngSwitchCase=\"'services'\" i18n=\"page faq mobile top nav item five\" accesskey=\"5\"\n          >Services</span\n        >\n        <span *ngSwitchCase=\"'industries'\" i18n=\"page faq mobile top nav item six\" accesskey=\"6\"\n          >Industries</span\n        >\n        <span\n          *ngSwitchCase=\"'productSubsidiary'\"\n          i18n=\"page faq mobile top nav item seven\"\n          accesskey=\"7\"\n          >Products and Subsidiaries</span\n        >\n      </h2>\n    </div>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/marketing/marketing-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/marketing/marketing-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: MarketingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingRoutingModule", function() { return MarketingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _marketing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marketing.component */ "./project/ws/app/src/lib/routes/infy/routes/marketing/marketing.component.ts");
/* harmony import */ var _marketing_services_marketing_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./marketing-services/marketing-services.component */ "./project/ws/app/src/lib/routes/infy/routes/marketing/marketing-services/marketing-services.component.ts");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");







const BASE_URL = `assets/configurations/${location.host.replace(':', '_')}`;
const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'brandAssets',
    },
    {
        path: 'offering/:tag',
        component: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__["PageComponent"],
        data: {
            pageUrl: `${BASE_URL}/page/marketing-offering.json`,
        },
        resolve: {
            pageData: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_5__["MarketingOfferingResolve"],
        },
    },
    {
        path: 'services',
        component: _marketing_services_marketing_services_component__WEBPACK_IMPORTED_MODULE_4__["MarketingServicesComponent"],
    },
    {
        path: ':tab',
        component: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__["PageComponent"],
        data: {
            pageType: 'page',
            pageKey: 'tab',
        },
        resolve: {
            pageData: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_5__["PageResolve"],
        },
    },
];
let MarketingRoutingModule = class MarketingRoutingModule {
};
MarketingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _marketing_component__WEBPACK_IMPORTED_MODULE_3__["MarketingComponent"],
                    children: routes,
                },
            ]),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MarketingRoutingModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/marketing/marketing-services/marketing-services.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/marketing/marketing-services/marketing-services.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-right {\n  text-align: right !important;\n}\n\n.display-toggle-margin {\n  margin: 16px;\n}\n\n.pentagon-toggle {\n  vertical-align: text-bottom;\n}\n\n.cur-pointer {\n  cursor: pointer;\n}\n\n.bold-text {\n  font-weight: bold;\n}\n\n.big-pentagon {\n  vertical-align: sub;\n  max-width: 28px;\n  max-height: 28px;\n}\n\n.small-pentagon {\n  vertical-align: sub;\n  max-width: 20px;\n  max-height: 20px;\n}\n\n.cur-pointer {\n  cursor: pointer;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n  margin: 0 !important;\n}\n\n.catalog-tree-invisible {\n  display: none;\n}\n\n.catalog-tree ul,\n.catalog-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n.catalog-tree {\n  background: inherit !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9tYXJrZXRpbmcvbWFya2V0aW5nLXNlcnZpY2VzL21hcmtldGluZy1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL21hcmtldGluZy9tYXJrZXRpbmctc2VydmljZXMvbWFya2V0aW5nLXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc29uYXNoYWp1L1ZpZGVvcy9zcGhlcmUtbW9iaWxlL3N0eWxlcy9fd3MtdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsNEJBQUE7QUNERjs7QURJQTtFQUNFLFlFSU87QURMVDs7QURJQTtFQUNFLDJCQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0FDREY7O0FESUE7RUFDRSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0FDREY7O0FESUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtBQ0RGOztBRElBOztFQUVFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDREY7O0FESUE7RUFDRSw4QkFBQTtBQ0RGIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL21hcmtldGluZy9tYXJrZXRpbmctc2VydmljZXMvbWFya2V0aW5nLXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXNwbGF5LXRvZ2dsZS1tYXJnaW4ge1xuICBtYXJnaW46ICRzaXplLW07XG59XG5cbi5wZW50YWdvbi10b2dnbGUge1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG59XG5cbi5jdXItcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYmlnLXBlbnRhZ29uIHtcbiAgdmVydGljYWwtYWxpZ246IHN1YjtcbiAgbWF4LXdpZHRoOiAyOHB4O1xuICBtYXgtaGVpZ2h0OiAyOHB4O1xufVxuXG4uc21hbGwtcGVudGFnb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICBtYXgtd2lkdGg6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDIwcHg7XG59XG5cbi5jdXItcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4uY2F0YWxvZy10cmVlLWludmlzaWJsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jYXRhbG9nLXRyZWUgdWwsXG4uY2F0YWxvZy10cmVlIGxpIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uY2F0YWxvZy10cmVlIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuIiwiLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uZGlzcGxheS10b2dnbGUtbWFyZ2luIHtcbiAgbWFyZ2luOiAxNnB4O1xufVxuXG4ucGVudGFnb24tdG9nZ2xlIHtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xufVxuXG4uY3VyLXBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJpZy1wZW50YWdvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gIG1heC13aWR0aDogMjhweDtcbiAgbWF4LWhlaWdodDogMjhweDtcbn1cblxuLnNtYWxsLXBlbnRhZ29uIHtcbiAgdmVydGljYWwtYWxpZ246IHN1YjtcbiAgbWF4LXdpZHRoOiAyMHB4O1xuICBtYXgtaGVpZ2h0OiAyMHB4O1xufVxuXG4uY3VyLXBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLmNhdGFsb2ctdHJlZS1pbnZpc2libGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2F0YWxvZy10cmVlIHVsLFxuLmNhdGFsb2ctdHJlZSBsaSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLmNhdGFsb2ctdHJlZSB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQgIWltcG9ydGFudDtcbn0iLCIkZm9udC1mYW1pbHktc2FuczogJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCxcbiAgJ05vdG8gU2FucycsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLFxuICAnTm90byBDb2xvciBFbW9qaSc7XG4kZm9udC1mYW1pbHktc2VyaWY6IEdlb3JnaWEsIENhbWJyaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4kZm9udC1mYW1pbHktbW9ubzogTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdMaWJlcmF0aW9uIE1vbm8nLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4kZm9udC1mYW1pbHktb3Blbi1zYW5zOiAnT3BlbiBTYW5zJztcbiRmb250LWZhbWlseS1vcGVuLXBvcHBpbnM6ICdSb2JvdG8nO1xuXG5cbiRzaXplLXhzOiA4cHg7XG4kc2l6ZS1zOiAxMnB4O1xuJHNpemUtbTogMTZweDtcbiRzaXplLWw6IDI0cHg7XG4kc2l6ZS14bDogMzJweDtcbiRzaXplLWxnOiAyOHB4O1xuJHNpemUteHhsOiA0MHB4O1xuXG4kbWF0LXRvb2xiYXIteHM6IDUycHg7XG4kbWF0LXRvb2xiYXItZ3QteHM6IDU2cHg7XG4iXX0= */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/marketing/marketing-services/marketing-services.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/marketing/marketing-services/marketing-services.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: MarketingServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingServicesComponent", function() { return MarketingServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MarketingServicesComponent = class MarketingServicesComponent {
    constructor() {
        this.pentagonFetchInProgress = true;
        this.displayType = 'pentagon';
        this.selectedPillar = '';
        this.pentagon = null;
        this.widgetResolverData = {
            widgetData: {
                url: '/apis/protected/v8/catalog/tags',
                baseClickUrl: '/app/infy/marketing/offering',
                type: 'Pentagon',
                tags: 'Pentagon>Accelerate',
            },
            widgetType: 'tree',
            widgetSubType: 'treeCatalog',
        };
    }
    ngOnInit() {
    }
    trackClicked(event) {
        this.selectedPillar = event;
        const tags = `Pentagon>${event}`;
        this.widgetResolverData = Object.assign({}, this.widgetResolverData, { widgetData: Object.assign({}, this.widgetResolverData.widgetData, { tags }) });
    }
};
MarketingServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-marketing-services',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./marketing-services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/marketing/marketing-services/marketing-services.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./marketing-services.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/marketing/marketing-services/marketing-services.component.scss")).default]
    })
], MarketingServicesComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/marketing/marketing-services/marketing-services.module.ts":
/*!*************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/marketing/marketing-services/marketing-services.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: MarketingServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingServicesModule", function() { return MarketingServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _marketing_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./marketing-services.component */ "./project/ws/app/src/lib/routes/infy/routes/marketing/marketing-services/marketing-services.component.ts");
/* harmony import */ var _pentagon_pentagon_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pentagon/pentagon.module */ "./project/ws/app/src/lib/routes/infy/routes/marketing/pentagon/pentagon.module.ts");
/* harmony import */ var _ws_widget_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ws-widget/resolver */ "./library/ws-widget/resolver/src/public-api.ts");







let MarketingServicesModule = class MarketingServicesModule {
};
MarketingServicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_marketing_services_component__WEBPACK_IMPORTED_MODULE_4__["MarketingServicesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _pentagon_pentagon_module__WEBPACK_IMPORTED_MODULE_5__["PentagonModule"],
            _ws_widget_resolver__WEBPACK_IMPORTED_MODULE_6__["WidgetResolverModule"],
        ],
        exports: [_marketing_services_component__WEBPACK_IMPORTED_MODULE_4__["MarketingServicesComponent"]],
    })
], MarketingServicesModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/marketing/marketing.component.scss":
/*!**************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/marketing/marketing.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  min-height: calc(100vh - 2 * 56px);\n}\n\n.text-center {\n  text-align: center;\n}\n\n.faq-container {\n  margin: 24px;\n}\n\n.page-heading {\n  margin-bottom: 32px;\n}\n\n.faq-active-class {\n  border-right-color: transparent;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9tYXJrZXRpbmcvbWFya2V0aW5nLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvbWFya2V0aW5nL21hcmtldGluZy5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLXZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGtDQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0UsWUFBQTtBQ0ZGOztBREtBO0VBQ0UsbUJFSFE7QURDVjs7QURhQTtFQUNFLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUNWRiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9tYXJrZXRpbmcvbWFya2V0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy1jb21tb24uc2Nzcyc7XG5AaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5cbi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyICogI3skbWF0LXRvb2xiYXItZ3QteHN9KTtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZmFxLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogJHNpemUtbDtcbn1cblxuLnBhZ2UtaGVhZGluZyB7XG4gIG1hcmdpbi1ib3R0b206ICRzaXplLXhsO1xufVxuXG4vLyAuc2lkZW5hdiB7XG4vLyAgIHdpZHRoOiAyNSU7XG4vLyAgIG1pbi13aWR0aDogMjUwcHg7XG4vLyAgIHBhZGRpbmctbGVmdDogJHNpemUtbTtcbi8vICAgcGFkZGluZy1yaWdodDogJHNpemUtbTtcbi8vICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbi8vIH1cblxuLmZhcS1hY3RpdmUtY2xhc3Mge1xuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG4iLCIuc2lkZW5hdi1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMiAqIDU2cHgpO1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mYXEtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyNHB4O1xufVxuXG4ucGFnZS1oZWFkaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cblxuLmZhcS1hY3RpdmUtY2xhc3Mge1xuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59IiwiJGZvbnQtZmFtaWx5LXNhbnM6ICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsXG4gICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJyxcbiAgJ05vdG8gQ29sb3IgRW1vamknO1xuJGZvbnQtZmFtaWx5LXNlcmlmOiBHZW9yZ2lhLCBDYW1icmlhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuJGZvbnQtZmFtaWx5LW1vbm86IE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuJGZvbnQtZmFtaWx5LW9wZW4tc2FuczogJ09wZW4gU2Fucyc7XG4kZm9udC1mYW1pbHktb3Blbi1wb3BwaW5zOiAnUm9ib3RvJztcblxuXG4kc2l6ZS14czogOHB4O1xuJHNpemUtczogMTJweDtcbiRzaXplLW06IDE2cHg7XG4kc2l6ZS1sOiAyNHB4O1xuJHNpemUteGw6IDMycHg7XG4kc2l6ZS1sZzogMjhweDtcbiRzaXplLXh4bDogNDBweDtcblxuJG1hdC10b29sYmFyLXhzOiA1MnB4O1xuJG1hdC10b29sYmFyLWd0LXhzOiA1NnB4O1xuIl19 */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/marketing/marketing.component.ts":
/*!************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/marketing/marketing.component.ts ***!
  \************************************************************************************/
/*! exports provided: MarketingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingComponent", function() { return MarketingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");





let MarketingComponent = class MarketingComponent {
    constructor(route, valueSvc, configSvc) {
        this.route = route;
        this.valueSvc = valueSvc;
        this.configSvc = configSvc;
        this.errorMessageCode = 'NONE';
        this.sideNavBarOpened = true;
        this.isMarketingFeature = true;
        this.isLtMedium$ = this.valueSvc.isLtMedium$;
        this.pageNavbar = this.configSvc.pageNavBar;
        this.defaultSideNavBarOpenedSubscription = null;
        this.mode$ = this.isLtMedium$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(isMedium => (isMedium ? 'over' : 'side')));
        this.screenSizeIsLtMedium = false;
        this.currentTab = '';
        this.tabs = [
            'brandAssets',
            'experience',
            'hubs',
            'clientStories',
            'services',
            'industries',
            'productSubsidiary',
        ];
        this.paramSubscription = null;
    }
    ngOnInit() {
        if (this.configSvc.restrictedFeatures) {
            this.isMarketingFeature = !this.configSvc.restrictedFeatures.has(_ws_widget_utils__WEBPACK_IMPORTED_MODULE_4__["EFeatures"].MARKETING_PAGE);
        }
        this.defaultSideNavBarOpenedSubscription = this.isLtMedium$.subscribe((isLtMedium) => {
            this.sideNavBarOpened = !isLtMedium;
            this.screenSizeIsLtMedium = isLtMedium;
        });
        this.paramSubscription = this.route.paramMap.subscribe((params) => {
            let tab = params.get('tab');
            if (tab) {
                if (this.tabs.indexOf(tab) === -1) {
                    tab = 'brandAssets';
                }
                this.currentTab = tab;
            }
        });
    }
    ngOnDestroy() {
        if (this.defaultSideNavBarOpenedSubscription) {
            this.defaultSideNavBarOpenedSubscription.unsubscribe();
        }
    }
    sideNavOnClick() {
        if (this.screenSizeIsLtMedium) {
            this.sideNavBarOpened = !this.sideNavBarOpened;
        }
    }
};
MarketingComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_4__["ValueService"] },
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_4__["ConfigurationsService"] }
];
MarketingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-marketing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./marketing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/marketing/marketing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./marketing.component.scss */ "./project/ws/app/src/lib/routes/infy/routes/marketing/marketing.component.scss")).default]
    })
], MarketingComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/infy/routes/marketing/marketing.module.ts":
/*!*********************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/infy/routes/marketing/marketing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: MarketingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingModule", function() { return MarketingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _marketing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marketing.component */ "./project/ws/app/src/lib/routes/infy/routes/marketing/marketing.component.ts");
/* harmony import */ var _marketing_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./marketing-routing.module */ "./project/ws/app/src/lib/routes/infy/routes/marketing/marketing-routing.module.ts");
/* harmony import */ var _marketing_services_marketing_services_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marketing-services/marketing-services.module */ "./project/ws/app/src/lib/routes/infy/routes/marketing/marketing-services/marketing-services.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");








let MarketingModule = class MarketingModule {
};
MarketingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_marketing_component__WEBPACK_IMPORTED_MODULE_3__["MarketingComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _marketing_routing_module__WEBPACK_IMPORTED_MODULE_4__["MarketingRoutingModule"],
            _marketing_services_marketing_services_module__WEBPACK_IMPORTED_MODULE_5__["MarketingServicesModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_7__["PageModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_7__["BtnPageBackModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        ],
    })
], MarketingModule);



/***/ })

}]);
//# sourceMappingURL=routes-marketing-marketing-module-es2015.js.map