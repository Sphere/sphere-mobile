function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-events-events-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/events/live-events/live-events.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/events/live-events/live-events.component.html ***!
    \***************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesEventsLiveEventsLiveEventsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-toolbar class=\"ws-mat-light-background\" [ngStyle]=\"configSvc?.pageNavBar?.styles\">\n  <ws-widget-btn-page-back [widgetData]=\"{ url: '/app/features' }\"></ws-widget-btn-page-back>\n  <span class=\"margin-left-s\" i18n>Events</span>\n  <span class=\"spacer\"></span>\n  <span class=\"spacer\"></span>\n  <a *ngIf=\"!isLiveStream && urlHasLiveUrl\" type=\"button\" mat-button [href]=\"liveUrl\" target=\"_blank\">Open\n    in New Tab</a>\n</mat-toolbar>\n\n<ng-container>\n  <div class=\"events-container\">\n    <div class=\"margin-top-m margin-bottom-l text-center\" *ngIf=\"!urlHasLiveUrl\">\n      <h2 *ngIf=\"isLiveStream && fetchStatus === 'done'\" class=\"mat-h2\" i18n>\n        LIVE streaming will be on only during the event.\n      </h2>\n      <h2 *ngIf=\"!isLiveStream && fetchStatus === 'done' && !liveEvents.length\" class=\"mat-h2 text-center\" i18n>\n        No LIVE event at the moment.\n      </h2>\n      <h2 *ngIf=\"!isLiveStream && fetchStatus === 'fetching'\" class=\"mat-h2 text-center\" i18n>\n        Checking for LIVE events...\n      </h2>\n      <mat-card *ngIf=\"!isLiveStreamMobile\" class=\"margin-top-m margin-bottom-m\">\n        <div class=\"position-relative\">\n          <h2 class=\"text-center\">\n            App Live Streaming\n            <span class=\"beta-badge mat-primary-text\" i18n>Beta</span>\n          </h2>\n        </div>\n        <mat-accordion>\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title i18n>\n                Live\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <a [routerLink]=\"'/viewer/lex_auth_0127271733829632009'\" color=\"primary\" mat-raised-button i18n>Watch</a>\n            <button *ngIf=\"mobileAppsSvc.isAndroidApp\" type=\"button\" class=\"margin-left-m\" mat-raised-button i18n>\n              Go Live\n            </button>\n          </mat-expansion-panel>\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title i18n>\n                Classroom Broadcast\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <a [routerLink]=\"'/viewer/lex_auth_0126128852332052481032'\" color=\"primary\" mat-raised-button i18n>Watch</a>\n            <button *ngIf=\"mobileAppsSvc.isAndroidApp\" type=\"button\" class=\"margin-left-m\" mat-raised-button i18n>\n              Go Live\n            </button>\n          </mat-expansion-panel>\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title i18n>\n                360 video\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <a [routerLink]=\"'/viewer/lex_auth_01272703404378521670'\" mat-raised-button color=\"primary\" i18n>Watch</a>\n          </mat-expansion-panel>\n        </mat-accordion>\n      </mat-card>\n      <div class=\"flex flex-between flex-wrapped\" *ngIf=\"!isLiveStream && !urlHasLiveUrl\">\n        <mat-card *ngFor=\"let event of liveEvents\" class=\"live-card\">\n          <a [routerLink]=\"'/app/infy/events'\" [queryParams]=\"{ liveUrl: event.event_url }\">\n            <h2 class=\"mat-h2\">{{ event.event_name }}</h2>\n            <div>\n              <ng-container [ngTemplateOutlet]=\"startTime\" [ngTemplateOutletContext]=\"{ $implicit: event }\">\n              </ng-container>\n            </div>\n            <div>\n              <ng-container [ngTemplateOutlet]=\"endTime\" [ngTemplateOutletContext]=\"{ $implicit: event }\">\n              </ng-container>\n            </div>\n          </a>\n        </mat-card>\n      </div>\n    </div>\n    <mat-card *ngIf=\"showIframeSupportWarning && !isLiveStream && urlHasLiveUrl\">\n      <mat-card-content>\n        <h2 class=\"mat-h2\" i18n>\n          If facing issues in video, please click 'Open in new tab' above\n        </h2>\n        <mat-divider></mat-divider>\n        <div class=\"text-center padding-top-s\">\n          <button type=\"button\" mat-button (click)=\"showIframeSupportWarning = false\">\n            Dismiss\n          </button>\n        </div>\n      </mat-card-content>\n    </mat-card>\n    <div class=\"live-event-container\" *ngIf=\"!isLiveStream && urlHasLiveUrl\">\n      <iframe i18n-title title=\"live event\" allow=\"fullscreen\" class=\"live-event\" [src]=\"safeLiveUrl\"></iframe>\n    </div>\n  </div>\n  <!-- <div *ngIf=\"events\" class=\"text-center margin-top-m margin-bottom-m\">\n    <h2 class=\"mat-h2\" i18n>Events:</h2>\n    <a\n      class=\"margin-right-m margin-top-m\"\n      mat-stroked-button\n      *ngFor=\"let event of events | keyvalue\"\n      [color]=\"'primary'\"\n      [routerLink]=\"'/events/' + event.key\"\n    >\n      {{ event.value.title }}\n    </a>\n  </div> -->\n\n  <!-- Templates -->\n  <ng-template #startTime let-event>\n    <span class=\"mat-body-strong\">\n      <ng-container *ngIf=\"isCurrentTimeSmall(event.start_time); else eventStarted\" i18n>Starts: </ng-container>\n      <ng-template #eventStarted i18n>Started: </ng-template>\n    </span>\n    <span class=\"mat-body date-value\">{{ event.start_time | date: \"d MMM, yyyy HH:mm a\" }}</span>\n  </ng-template>\n\n  <ng-template #endTime let-event>\n    <span class=\"mat-body-strong\">\n      <ng-container *ngIf=\"isCurrentTimeSmall(event.end_time); else eventEnded\" i18n>Ends: </ng-container>\n      <ng-template #eventEnded i18n>Ended: </ng-template>\n    </span>\n    <span class=\"mat-body date-value\">{{ event.end_time | date: \"d MMM, yyyy HH:mm a\" }}</span>\n  </ng-template>\n\n  <input type=\"hidden\" i18n-value value=\"Please update your app to use this feature.\" #appOutdated />\n</ng-container>\n";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/events/events-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/events/events-routing.module.ts ***!
    \***********************************************************************************/
  /*! exports provided: EventsRoutingModule */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesEventsEventsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EventsRoutingModule", function () {
      return EventsRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _live_events_live_events_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./live-events/live-events.component */"./project/ws/app/src/lib/routes/infy/routes/events/live-events/live-events.component.ts");
    var routes = [{
      path: '',
      pathMatch: 'full',
      component: _live_events_live_events_component__WEBPACK_IMPORTED_MODULE_3__["LiveEventsComponent"]
    }];
    var EventsRoutingModule = /*#__PURE__*/_createClass(function EventsRoutingModule() {
      _classCallCheck(this, EventsRoutingModule);
    });
    EventsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EventsRoutingModule);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/events/events.module.ts":
  /*!***************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/events/events.module.ts ***!
    \***************************************************************************/
  /*! exports provided: EventsModule */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesEventsEventsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EventsModule", function () {
      return EventsModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _events_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./events-routing.module */"./project/ws/app/src/lib/routes/infy/routes/events/events-routing.module.ts");
    /* harmony import */
    var _live_events_live_events_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./live-events/live-events.component */"./project/ws/app/src/lib/routes/infy/routes/events/live-events/live-events.component.ts");
    /* harmony import */
    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/material/toolbar */"./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */
    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/material/icon */"./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */
    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/material/button */"./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */
    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/material/card */"./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */
    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/material/divider */"./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _ws_widget_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! @ws-widget/resolver */"./library/ws-widget/resolver/src/public-api.ts");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");

    // material

    var EventsModule = /*#__PURE__*/_createClass(function EventsModule() {
      _classCallCheck(this, EventsModule);
    });
    EventsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_live_events_live_events_component__WEBPACK_IMPORTED_MODULE_4__["LiveEventsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _events_routing_module__WEBPACK_IMPORTED_MODULE_3__["EventsRoutingModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], _ws_widget_resolver__WEBPACK_IMPORTED_MODULE_11__["WidgetResolverModule"], _ws_widget_collection__WEBPACK_IMPORTED_MODULE_12__["BtnPageBackModule"]]
    })], EventsModule);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/events/live-events/live-events.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/events/live-events/live-events.component.scss ***!
    \*************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesEventsLiveEventsLiveEventsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "@media only screen and (max-width: 599px) {\n  .events-container {\n    padding: 0 0 16px 0;\n  }\n}\n@media only screen and (min-width: 600px) {\n  .events-container {\n    padding: 0 48px;\n  }\n}\n.events-container .live-event-container {\n  height: calc(100vh - 2 * 64px);\n}\n.events-container .live-event-container .live-event {\n  max-width: 160vh;\n  max-height: calc(100vh - 64px);\n  width: 100%;\n  height: 100%;\n  display: block;\n  margin: auto;\n}\n.beta-badge {\n  position: absolute;\n  top: -12px;\n  font-size: 16px;\n  padding: 4px 16px;\n}\n.go-live {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}\n.live-card {\n  width: 48%;\n  box-sizing: border-box;\n  margin-bottom: 12px;\n}\n@media only screen and (max-width: 599px) {\n  .live-card {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLW1peGlucy5zY3NzIiwiL2hvbWUvc29uYXNoYWp1L1ZpZGVvcy9zcGhlcmUtbW9iaWxlL3Byb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL2V2ZW50cy9saXZlLWV2ZW50cy9saXZlLWV2ZW50cy5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL2V2ZW50cy9saXZlLWV2ZW50cy9saXZlLWV2ZW50cy5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLXZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkU7RUNoQkY7SUFJSSxtQkFBQTtFQ0pGO0FBQ0Y7QUY0REU7RUM3REY7SUFRSSxlQUFBO0VDSEY7QUFDRjtBREtFO0VBQ0UsOEJBQUE7QUNISjtBREtJO0VBQ0UsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNITjtBRFFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUVwQk87RUZxQlAsaUJBQUE7QUNMRjtBRFFBO0VBQ0Usa0JBQUE7RUFDQSxRRTVCUTtFRjZCUixVRTdCUTtBRHdCVjtBRFFBO0VBQ0UsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJFbENPO0FENkJUO0FGcEJFO0VDNkJBO0lBQ0UsV0FBQTtFQ0xGO0FBQ0YiLCJmaWxlIjoicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvZXZlbnRzL2xpdmUtZXZlbnRzL2xpdmUtZXZlbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuXG5AbWl4aW4gcmV0aW5hIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gICAgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gcHJpbnQge1xuICBAbWVkaWEgb25seSBwcmludCB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGJyZWFrcG9pbnQteHMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LXMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LXhsIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDAwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQtbSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQtbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LXhsIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QteHMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LXMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIiwiQGltcG9ydCAnc3R5bGVzL193cy1taXhpbnMuc2Nzcyc7XG5AaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5cbi5ldmVudHMtY29udGFpbmVyIHtcblxuICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMge1xuICAgIHBhZGRpbmc6IDAgMCAkc2l6ZS1tIDA7XG4gIH1cblxuICBAaW5jbHVkZSBicmVha3BvaW50LWd0LXhzIHtcbiAgICBwYWRkaW5nOiAwIDIqJHNpemUtbDtcbiAgfVxuXG4gIC5saXZlLWV2ZW50LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMiAqIDY0cHgpO1xuXG4gICAgLmxpdmUtZXZlbnQge1xuICAgICAgbWF4LXdpZHRoOiAxNjB2aDtcbiAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICB9XG59XG5cbi5iZXRhLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0kc2l6ZS1zO1xuICBmb250LXNpemU6ICRzaXplLW07XG4gIHBhZGRpbmc6IDAuNSAqICRzaXplLXhzIDIgKiAkc2l6ZS14cztcbn1cblxuLmdvLWxpdmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogJHNpemUteHM7XG4gIHJpZ2h0OiAkc2l6ZS14cztcbn1cblxuLmxpdmUtY2FyZCB7XG4gIHdpZHRoOiA0OCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbi1ib3R0b206ICRzaXplLXM7XG59XG5cbkBpbmNsdWRlIGJyZWFrcG9pbnQteHMge1xuICAubGl2ZS1jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAuZXZlbnRzLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAwIDE2cHggMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuZXZlbnRzLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCA0OHB4O1xuICB9XG59XG4uZXZlbnRzLWNvbnRhaW5lciAubGl2ZS1ldmVudC1jb250YWluZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyICogNjRweCk7XG59XG4uZXZlbnRzLWNvbnRhaW5lciAubGl2ZS1ldmVudC1jb250YWluZXIgLmxpdmUtZXZlbnQge1xuICBtYXgtd2lkdGg6IDE2MHZoO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5iZXRhLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDRweCAxNnB4O1xufVxuXG4uZ28tbGl2ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiA4cHg7XG59XG5cbi5saXZlLWNhcmQge1xuICB3aWR0aDogNDglO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5saXZlLWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59IiwiJGZvbnQtZmFtaWx5LXNhbnM6ICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsXG4gICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJyxcbiAgJ05vdG8gQ29sb3IgRW1vamknO1xuJGZvbnQtZmFtaWx5LXNlcmlmOiBHZW9yZ2lhLCBDYW1icmlhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuJGZvbnQtZmFtaWx5LW1vbm86IE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuJGZvbnQtZmFtaWx5LW9wZW4tc2FuczogJ09wZW4gU2Fucyc7XG4kZm9udC1mYW1pbHktb3Blbi1wb3BwaW5zOiAnUm9ib3RvJztcblxuXG4kc2l6ZS14czogOHB4O1xuJHNpemUtczogMTJweDtcbiRzaXplLW06IDE2cHg7XG4kc2l6ZS1sOiAyNHB4O1xuJHNpemUteGw6IDMycHg7XG4kc2l6ZS1sZzogMjhweDtcbiRzaXplLXh4bDogNDBweDtcblxuJG1hdC10b29sYmFyLXhzOiA1MnB4O1xuJG1hdC10b29sYmFyLWd0LXhzOiA1NnB4O1xuIl19 */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/events/live-events/live-events.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/events/live-events/live-events.component.ts ***!
    \***********************************************************************************************/
  /*! exports provided: LiveEventsComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesEventsLiveEventsLiveEventsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LiveEventsComponent", function () {
      return LiveEventsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ws-widget/utils */"./library/ws-widget/utils/src/public-api.ts");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var _src_app_services_mobile_apps_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../../../../../../../../../src/app/services/mobile-apps.service */"./src/app/services/mobile-apps.service.ts");
    /* harmony import */
    var _services_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../services/events.service */"./project/ws/app/src/lib/routes/infy/routes/events/services/events.service.ts");
    var LiveEventsComponent = /*#__PURE__*/function () {
      function LiveEventsComponent(activatedRoute, sanitizer, mobileAppsSvc,
      // private snackBar: MatSnackBar,
      configSvc, eventsSvc, logger) {
        _classCallCheck(this, LiveEventsComponent);
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.mobileAppsSvc = mobileAppsSvc;
        this.configSvc = configSvc;
        this.eventsSvc = eventsSvc;
        this.logger = logger;
        this.showIframeSupportWarning = true;
        this.urlHasLiveUrl = false;
        this.fetchStatus = 'fetching';
        this.isLiveStream = true;
        this.isLiveStreamMobile = true;
        this.liveUrl = '';
      }
      _createClass(LiveEventsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;
          this.eventsSvc.fetchLiveEvents().subscribe(function (response) {
            _this.logger.log('Got response', response);
            var events = (response || []).filter(function (event) {
              return new Date(event.end_time) > new Date();
            });
            // tslint:disable-next-line:max-line-length
            // const events = [{ event_name: 'RedHat Tech day Track 2', start_time: new Date(), end_time: new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000)), event_url: 'https://join-apac.broadcast.skype.com/wingspan.com/98cd8c9825b64b91ba62b427f59894da' }]
            _this.liveEvents = events;
            _this.fetchStatus = 'done';
          }, function () {
            _this.fetchStatus = 'error';
          });
          if (this.configSvc.restrictedFeatures) {
            this.isLiveStream = this.configSvc.restrictedFeatures.has('live_stream');
            this.isLiveStreamMobile = this.configSvc.restrictedFeatures.has('live_stream_mob');
          }
          this.activatedRoute.queryParamMap.subscribe(function (qparamsMap) {
            _this.liveUrl = qparamsMap.get('liveUrl');
            if (_this.liveUrl) {
              _this.urlHasLiveUrl = true;
              if (_this.notifierSubscription) {
                _this.notifierSubscription.unsubscribe();
              }
              // this.notifier('RUNNING')
              _this.notifierSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(30000).subscribe(function () {
                // this.notifier('RUNNING')
              });
              _this.safeLiveUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.liveUrl);
            } else {
              _this.urlHasLiveUrl = false;
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.notifierSubscription) {
            this.notifierSubscription.unsubscribe();
          }
        }
      }, {
        key: "isCurrentTimeSmall",
        value: function isCurrentTimeSmall(timestamp) {
          return new Date() < new Date(timestamp);
        }
      }, {
        key: "currentTime",
        get: function get() {
          return new Date();
        }
      }]);
      return LiveEventsComponent;
    }();
    LiveEventsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }, {
        type: _src_app_services_mobile_apps_service__WEBPACK_IMPORTED_MODULE_6__["MobileAppsService"]
      }, {
        type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_2__["ConfigurationsService"]
      }, {
        type: _services_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"]
      }, {
        type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]
      }];
    };
    LiveEventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-live-events',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./live-events.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/events/live-events/live-events.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./live-events.component.scss */"./project/ws/app/src/lib/routes/infy/routes/events/live-events/live-events.component.scss"))["default"]]
    })], LiveEventsComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/events/services/events.service.ts":
  /*!*************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/events/services/events.service.ts ***!
    \*************************************************************************************/
  /*! exports provided: EventsService */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesEventsServicesEventsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EventsService", function () {
      return EventsService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var PROTECTED_SLAG_V8 = '/apis/protected/v8';
    var API_END_POINTS = {
      LIVE_EVENTS: "".concat(PROTECTED_SLAG_V8, "/events")
    };
    var EventsService = /*#__PURE__*/function () {
      function EventsService(http) {
        _classCallCheck(this, EventsService);
        this.http = http;
      }
      _createClass(EventsService, [{
        key: "fetchLiveEvents",
        value: function fetchLiveEvents() {
          return this.http.get("".concat(API_END_POINTS.LIVE_EVENTS));
        }
      }]);
      return EventsService;
    }();
    EventsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };
    EventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EventsService);

    /***/
  }
}]);
//# sourceMappingURL=routes-events-events-module-es5.js.map