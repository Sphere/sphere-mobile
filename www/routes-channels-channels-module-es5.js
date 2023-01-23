function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-channels-channels-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/channels/routes/channel-hubs/channel-hubs.component.html":
  /*!**************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/channels/routes/channel-hubs/channel-hubs.component.html ***!
    \**************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesChannelsRoutesChannelHubsChannelHubsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<section class=\"max-w-5xl m-auto p-8 mb-8\" *ngFor=\"let hub of pageData\">\n  <h1 class=\"mat-h1\">\n    {{ hub?.name }}\n  </h1>\n  <section class=\"flex flex-wrap -mr-8\">\n    <div class=\"w-full sm:w-1/2 lg:w-1/3\" *ngFor=\"let channel of hub?.channels\">\n      <ws-widget-card-channel [widgetData]=\"channel\"></ws-widget-card-channel>\n    </div>\n  </section>\n</section>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/channels/routes/channels-home/channels-home.component.html":
  /*!****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/channels/routes/channels-home/channels-home.component.html ***!
    \****************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesChannelsRoutesChannelsHomeChannelsHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-toolbar class=\"ws-mat-light-background\" [ngStyle]=\"configSvc?.pageNavBar?.styles\">\n  <ws-widget-btn-page-back [widgetData]=\"{ url: '/page/home' }\"></ws-widget-btn-page-back>\n  <span class=\"margin-left-s\" i18n>Channels</span>\n</mat-toolbar>\n\n\n<nav *ngIf=\"channelsConfig?.tabs\" mat-align-tabs=\"center\" mat-tab-nav-bar>\n  <a\n    *ngFor=\"let tab of tabs; let i = index\"\n    mat-tab-link\n    routerLinkActive\n    #rla=\"routerLinkActive\"\n    [active]=\"rla.isActive\"\n    [routerLink]=\"tab.routerLink\"\n  >\n    {{ tab.name }}\n  </a>\n</nav>\n<router-outlet></router-outlet>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/channels/routes/channels-resolver/channels-resolver.component.html":
  /*!************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/channels/routes/channels-resolver/channels-resolver.component.html ***!
    \************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesChannelsRoutesChannelsResolverChannelsResolverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div *ngIf=\"tabData\">\n  <div [ngSwitch]=\"tabData?.cardType\">\n    <div *ngSwitchCase=\"'hubs'\">\n      <ws-app-channel-hubs></ws-app-channel-hubs>\n    </div>\n    <div *ngSwitchCase=\"'leader-card'\">\n      <ws-app-leader-card [leaderData]=\"tabData?.data\"></ws-app-leader-card>\n    </div>\n    <div *ngSwitchCase=\"'initiatives-card'\">\n      <ws-app-initiatives-card [initiativesData]=\"tabData?.data\"></ws-app-initiatives-card>\n    </div>\n    <div *ngSwitchCase=\"'events-card'\">\n      <ws-app-events-card [eventsData]=\"tabData?.data\"></ws-app-events-card>\n    </div>\n    <div *ngSwitchDefault i18n>\n      This type is not yet supported.\n    </div>\n  </div>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/channels/routes/events-card/events-card.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/channels/routes/events-card/events-card.component.html ***!
    \************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesChannelsRoutesEventsCardEventsCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div\n  *ngIf=\"eventsData && eventsData?.length\"\n  class=\"margin-top-m text-center flex flex-wrapped flex-around\"\n>\n  <a *ngFor=\"let event of eventsData\" class=\"margin-m\" [routerLink]=\"event?.routerLink\">\n    <mat-card class=\"event cursor-pointer\">\n      <mat-icon class=\"event-icon\">event</mat-icon>\n      <h2 class=\"mat-h2 event-name font-weight-bold margin-top-l\" *ngIf=\"event?.eventName\">\n        {{ event?.eventName }}\n      </h2>\n      <div>\n        <div [ngTemplateOutlet]=\"startTime\" [ngTemplateOutletContext]=\"{ $implicit: event }\"></div>\n        <div [ngTemplateOutlet]=\"endTime\" [ngTemplateOutletContext]=\"{ $implicit: event }\"></div>\n      </div>\n    </mat-card>\n  </a>\n</div>\n\n<ng-template #startTime let-event>\n  <span class=\"mat-body-strong\">\n    <ng-container *ngIf=\"isCurrentTimeSmall(event.startTime); else eventStarted\" i18n\n      >Starts:\n    </ng-container>\n    <ng-template #eventStarted i18n>Started: </ng-template>\n  </span>\n  <span class=\"mat-body date-value\">{{ event.startTime | date }}</span>\n</ng-template>\n\n<ng-template #endTime let-event>\n  <span class=\"mat-body-strong\">\n    <ng-container *ngIf=\"isCurrentTimeSmall(event.endTime); else eventEnded\" i18n\n      >Ends:\n    </ng-container>\n    <ng-template #eventEnded i18n>Ended: </ng-template>\n  </span>\n  <span class=\"mat-body date-value\">{{ event.endTime | date }}</span>\n</ng-template>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/channels/routes/initiatives-card/initiatives-card.component.html":
  /*!**********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/channels/routes/initiatives-card/initiatives-card.component.html ***!
    \**********************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesChannelsRoutesInitiativesCardInitiativesCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div\n  *ngIf=\"initiativesData && initiativesData?.length\"\n  class=\"text-center margin-top-m flex flex-wrapped flex-around\"\n>\n  <a *ngFor=\"let channel of initiativesData\" class=\"margin-m\" [routerLink]=\"channel?.routerLink\">\n    <mat-card class=\"card cursor-pointer\">\n      <mat-icon class=\"icon\">{{ channel?.iconName }}</mat-icon>\n      <h2 class=\"mat-h2 title font-weight-bold margin-top-l\" *ngIf=\"channel?.title\">\n        {{ channel?.title }}\n      </h2>\n      <div *ngIf=\"channel.desc\" class=\"margin-top-l\">{{ channel?.desc }}</div>\n    </mat-card>\n  </a>\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/channels/routes/leader-card/leader-card.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/channels/routes/leader-card/leader-card.component.html ***!
    \************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesChannelsRoutesLeaderCardLeaderCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"text-center flex flex-wrapped margin-top-m flex-around\" *ngIf=\"leaderData?.length\">\n  <a\n    [routerLink]=\"leader.routerLink\"\n    *ngFor=\"let leader of leaderData\"\n    class=\"mat-card card margin-m\"\n  >\n    <img alt=\"Leader\" class=\"mat-lite-background\" [src]=\"leader?.profileImage\" />\n    <div class=\"text-center\">\n      <h2 class=\"margin-remove mat-h2 margin-top-xs\">{{ leader?.name }}</h2>\n      <h3 class=\"mat-h3\">{{ leader?.designation }}</h3>\n    </div>\n  </a>\n</div>\n\n<div class=\"text-center margin-top-m\">\n  <h2 class=\"mat-h2\" i18n *ngIf=\"!leaderData?.length\">\n    Leaders details will appear here\n  </h2>\n</div>\n";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/channels/channels-routing.module.ts":
  /*!***************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/channels/channels-routing.module.ts ***!
    \***************************************************************************************/
  /*! exports provided: ChannelsRoutingModule */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesChannelsChannelsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ChannelsRoutingModule", function () {
      return ChannelsRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _routes_channels_resolver_channels_resolver_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./routes/channels-resolver/channels-resolver.component */"./project/ws/app/src/lib/routes/infy/routes/channels/routes/channels-resolver/channels-resolver.component.ts");
    /* harmony import */
    var _routes_channels_home_channels_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./routes/channels-home/channels-home.component */"./project/ws/app/src/lib/routes/infy/routes/channels/routes/channels-home/channels-home.component.ts");
    /* harmony import */
    var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ws-widget/utils */"./library/ws-widget/utils/src/public-api.ts");
    var routes = [{
      path: '',
      pathMatch: 'full',
      component: _routes_channels_home_channels_home_component__WEBPACK_IMPORTED_MODULE_4__["ChannelsHomeComponent"]
    }, {
      path: ':tab',
      component: _routes_channels_resolver_channels_resolver_component__WEBPACK_IMPORTED_MODULE_3__["ChannelsResolverComponent"]
    }];
    var ChannelsRoutingModule = /*#__PURE__*/_createClass(function ChannelsRoutingModule() {
      _classCallCheck(this, ChannelsRoutingModule);
    });
    ChannelsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _routes_channels_home_channels_home_component__WEBPACK_IMPORTED_MODULE_4__["ChannelsHomeComponent"],
        data: {
          pageType: 'feature',
          pageKey: 'channels'
        },
        resolve: {
          channelsData: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_5__["PageResolve"]
        },
        children: routes
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChannelsRoutingModule);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/channels/channels.module.ts":
  /*!*******************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/channels/channels.module.ts ***!
    \*******************************************************************************/
  /*! exports provided: ChannelsModule */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesChannelsChannelsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ChannelsModule", function () {
      return ChannelsModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _channels_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./channels-routing.module */"./project/ws/app/src/lib/routes/infy/routes/channels/channels-routing.module.ts");
    /* harmony import */
    var _routes_channels_home_channels_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./routes/channels-home/channels-home.component */"./project/ws/app/src/lib/routes/infy/routes/channels/routes/channels-home/channels-home.component.ts");
    /* harmony import */
    var _routes_channels_resolver_channels_resolver_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./routes/channels-resolver/channels-resolver.component */"./project/ws/app/src/lib/routes/infy/routes/channels/routes/channels-resolver/channels-resolver.component.ts");
    /* harmony import */
    var _routes_events_card_events_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./routes/events-card/events-card.component */"./project/ws/app/src/lib/routes/infy/routes/channels/routes/events-card/events-card.component.ts");
    /* harmony import */
    var _routes_initiatives_card_initiatives_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./routes/initiatives-card/initiatives-card.component */"./project/ws/app/src/lib/routes/infy/routes/channels/routes/initiatives-card/initiatives-card.component.ts");
    /* harmony import */
    var _routes_leader_card_leader_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./routes/leader-card/leader-card.component */"./project/ws/app/src/lib/routes/infy/routes/channels/routes/leader-card/leader-card.component.ts");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    /* harmony import */
    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/material/button */"./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */
    var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! @angular/material/card */"./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */
    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @angular/material/icon */"./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */
    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @angular/material/toolbar */"./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */
    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! @angular/material/tabs */"./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */
    var _routes_channel_hubs_channel_hubs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ./routes/channel-hubs/channel-hubs.component */"./project/ws/app/src/lib/routes/infy/routes/channels/routes/channel-hubs/channel-hubs.component.ts");
    var ChannelsModule = /*#__PURE__*/_createClass(function ChannelsModule() {
      _classCallCheck(this, ChannelsModule);
    });
    ChannelsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_routes_channels_home_channels_home_component__WEBPACK_IMPORTED_MODULE_4__["ChannelsHomeComponent"], _routes_channels_resolver_channels_resolver_component__WEBPACK_IMPORTED_MODULE_5__["ChannelsResolverComponent"], _routes_events_card_events_card_component__WEBPACK_IMPORTED_MODULE_6__["EventsCardComponent"], _routes_initiatives_card_initiatives_card_component__WEBPACK_IMPORTED_MODULE_7__["InitiativesCardComponent"], _routes_leader_card_leader_card_component__WEBPACK_IMPORTED_MODULE_8__["LeaderCardComponent"], _routes_channel_hubs_channel_hubs_component__WEBPACK_IMPORTED_MODULE_15__["ChannelHubsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _channels_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChannelsRoutingModule"], _ws_widget_collection__WEBPACK_IMPORTED_MODULE_9__["CardChannelModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"], _ws_widget_collection__WEBPACK_IMPORTED_MODULE_9__["BtnPageBackModule"]]
    })], ChannelsModule);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/channels/routes/channel-hubs/channel-hubs.component.scss":
  /*!************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/channels/routes/channel-hubs/channel-hubs.component.scss ***!
    \************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesChannelsRoutesChannelHubsChannelHubsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9jaGFubmVscy9yb3V0ZXMvY2hhbm5lbC1odWJzL2NoYW5uZWwtaHVicy5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/channels/routes/channel-hubs/channel-hubs.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/channels/routes/channel-hubs/channel-hubs.component.ts ***!
    \**********************************************************************************************************/
  /*! exports provided: ChannelHubsComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesChannelsRoutesChannelHubsChannelHubsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ChannelHubsComponent", function () {
      return ChannelHubsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var ChannelHubsComponent = /*#__PURE__*/function () {
      function ChannelHubsComponent(http) {
        _classCallCheck(this, ChannelHubsComponent);
        this.http = http;
        this.baseUrl = "assets/configurations/".concat(location.host.replace(':', '_'));
      }
      _createClass(ChannelHubsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;
          this.http.get("".concat(this.baseUrl, "/feature/channel-hubs.json")).subscribe(function (response) {
            _this.pageData = response;
          });
        }
      }]);
      return ChannelHubsComponent;
    }();
    ChannelHubsComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };
    ChannelHubsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-channel-hubs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./channel-hubs.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/channels/routes/channel-hubs/channel-hubs.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./channel-hubs.component.scss */"./project/ws/app/src/lib/routes/infy/routes/channels/routes/channel-hubs/channel-hubs.component.scss"))["default"]]
    })], ChannelHubsComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/channels/routes/channels-home/channels-home.component.scss":
  /*!**************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/channels/routes/channels-home/channels-home.component.scss ***!
    \**************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesChannelsRoutesChannelsHomeChannelsHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9jaGFubmVscy9yb3V0ZXMvY2hhbm5lbHMtaG9tZS9jaGFubmVscy1ob21lLmNvbXBvbmVudC5zY3NzIn0= */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/channels/routes/channels-home/channels-home.component.ts":
  /*!************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/channels/routes/channels-home/channels-home.component.ts ***!
    \************************************************************************************************************/
  /*! exports provided: ChannelsHomeComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesChannelsRoutesChannelsHomeChannelsHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ChannelsHomeComponent", function () {
      return ChannelsHomeComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ws-widget/utils */"./library/ws-widget/utils/src/public-api.ts");
    var ChannelsHomeComponent = /*#__PURE__*/function () {
      function ChannelsHomeComponent(route, configSvc) {
        _classCallCheck(this, ChannelsHomeComponent);
        this.route = route;
        this.configSvc = configSvc;
        this.channelsConfig = null;
        this.errorFetchingJson = false;
        this.selectedIndex = 0;
        this.tabs = [];
        this.tabData = null;
      }
      _createClass(ChannelsHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;
          this.route.data.subscribe(function (response) {
            if (response.channelsData.data) {
              _this2.channelsConfig = response.channelsData.data;
              _this2.getDetails();
            } else if (response.channelsData.error) {
              _this2.errorFetchingJson = true;
            }
          });
        }
      }, {
        key: "getDetails",
        value: function getDetails() {
          var _this3 = this;
          var channelsConfig = this.channelsConfig;
          if (channelsConfig) {
            this.tabs = channelsConfig.tabs.map(function (tab) {
              return tab.tabDetails;
            });
            this.route.paramMap.subscribe(function (params) {
              var tabKey = params.get('tab') ? params.get('tab') : _this3.tabs[0].key;
              if (tabKey) {
                var index = channelsConfig.tabs.map(function (tab) {
                  return tab.tabDetails.key;
                }).indexOf(tabKey);
                _this3.tabData = channelsConfig.tabs[index].tabContent;
              }
            });
          }
        }
      }]);
      return ChannelsHomeComponent;
    }();
    ChannelsHomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_3__["ConfigurationsService"]
      }];
    };
    ChannelsHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-channels-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./channels-home.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/channels/routes/channels-home/channels-home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./channels-home.component.scss */"./project/ws/app/src/lib/routes/infy/routes/channels/routes/channels-home/channels-home.component.scss"))["default"]]
    })], ChannelsHomeComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/channels/routes/channels-resolver/channels-resolver.component.scss":
  /*!**********************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/channels/routes/channels-resolver/channels-resolver.component.scss ***!
    \**********************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesChannelsRoutesChannelsResolverChannelsResolverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9jaGFubmVscy9yb3V0ZXMvY2hhbm5lbHMtcmVzb2x2ZXIvY2hhbm5lbHMtcmVzb2x2ZXIuY29tcG9uZW50LnNjc3MifQ== */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/channels/routes/channels-resolver/channels-resolver.component.ts":
  /*!********************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/channels/routes/channels-resolver/channels-resolver.component.ts ***!
    \********************************************************************************************************************/
  /*! exports provided: ChannelsResolverComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesChannelsRoutesChannelsResolverChannelsResolverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ChannelsResolverComponent", function () {
      return ChannelsResolverComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var ChannelsResolverComponent = /*#__PURE__*/function () {
      function ChannelsResolverComponent(route) {
        _classCallCheck(this, ChannelsResolverComponent);
        this.route = route;
        this.channelsConfig = null;
        this.errorFetchingJson = false;
        this.selectedIndex = 0;
        this.tabs = [];
        this.tabData = null;
      }
      _createClass(ChannelsResolverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;
          var parentRoute = this.route.parent;
          if (parentRoute) {
            parentRoute.data.subscribe(function (response) {
              if (response.channelsData.data) {
                _this4.channelsConfig = response.channelsData.data;
                _this4.getDetails();
              } else if (response.channelsData.error) {
                _this4.errorFetchingJson = true;
              }
            });
          }
        }
      }, {
        key: "getDetails",
        value: function getDetails() {
          var _this5 = this;
          var channelsConfig = this.channelsConfig;
          if (channelsConfig) {
            this.tabs = channelsConfig.tabs.map(function (tab) {
              return tab.tabDetails;
            });
            this.route.paramMap.subscribe(function (params) {
              var tabKey = params.get('tab') ? params.get('tab') : _this5.tabs[0].key;
              if (tabKey) {
                var index = channelsConfig.tabs.map(function (tab) {
                  return tab.tabDetails.key;
                }).indexOf(tabKey);
                _this5.tabData = channelsConfig.tabs[index].tabContent;
              }
            });
          }
        }
      }]);
      return ChannelsResolverComponent;
    }();
    ChannelsResolverComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };
    ChannelsResolverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-channels-resolver',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./channels-resolver.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/channels/routes/channels-resolver/channels-resolver.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./channels-resolver.component.scss */"./project/ws/app/src/lib/routes/infy/routes/channels/routes/channels-resolver/channels-resolver.component.scss"))["default"]]
    })], ChannelsResolverComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/channels/routes/events-card/events-card.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/channels/routes/events-card/events-card.component.scss ***!
    \**********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesChannelsRoutesEventsCardEventsCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".event {\n  width: 14em;\n}\n\n.event-icon {\n  width: 1em;\n  height: 1em;\n  font-size: 3em;\n  margin-right: 16px;\n}\n\n@media only screen and (min-width: 600px) {\n  .event-icon {\n    margin-right: 0;\n  }\n}\n\n.event-name {\n  line-height: 1.2;\n  height: 2.4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9jaGFubmVscy9yb3V0ZXMvZXZlbnRzLWNhcmQvZXZlbnRzLWNhcmQuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9jaGFubmVscy9yb3V0ZXMvZXZlbnRzLWNhcmQvZXZlbnRzLWNhcmQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvc3R5bGVzL193cy1taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFdBQUE7QUNGRjs7QURLQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDRkY7O0FDdURFO0VGekRGO0lBTUksZUFBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNBRiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9jaGFubmVscy9yb3V0ZXMvZXZlbnRzLWNhcmQvZXZlbnRzLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvX3dzLW1peGlucy5zY3NzJztcbkBpbXBvcnQgJ3N0eWxlcy9fd3MtY29tbW9uLnNjc3MnO1xuXG4uZXZlbnQge1xuICB3aWR0aDogMTRlbTtcbn1cblxuLmV2ZW50LWljb24ge1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgZm9udC1zaXplOiAzZW07XG4gIG1hcmdpbi1yaWdodDogJHNpemUtbTtcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC1ndC14cyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG5cbi5ldmVudC1uYW1lIHtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgaGVpZ2h0OiAyLjRlbTtcbn1cbiIsIi5ldmVudCB7XG4gIHdpZHRoOiAxNGVtO1xufVxuXG4uZXZlbnQtaWNvbiB7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBmb250LXNpemU6IDNlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuZXZlbnQtaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG5cbi5ldmVudC1uYW1lIHtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgaGVpZ2h0OiAyLjRlbTtcbn0iLCJAaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5cbkBtaXhpbiByZXRpbmEge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBwcmludCB7XG4gIEBtZWRpYSBvbmx5IHByaW50IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gYnJlYWtwb2ludC14cyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQteGwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkgYW5kIChtYXgtd2lkdGg6IDUwMDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQteGwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC14cyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtbSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/channels/routes/events-card/events-card.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/channels/routes/events-card/events-card.component.ts ***!
    \********************************************************************************************************/
  /*! exports provided: EventsCardComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesChannelsRoutesEventsCardEventsCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EventsCardComponent", function () {
      return EventsCardComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var EventsCardComponent = /*#__PURE__*/function () {
      function EventsCardComponent() {
        _classCallCheck(this, EventsCardComponent);
        this.eventsData = null;
      }
      _createClass(EventsCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isCurrentTimeSmall",
        value: function isCurrentTimeSmall(timestamp) {
          return new Date() < new Date(timestamp);
        }
      }]);
      return EventsCardComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EventsCardComponent.prototype, "eventsData", void 0);
    EventsCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-events-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./events-card.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/channels/routes/events-card/events-card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./events-card.component.scss */"./project/ws/app/src/lib/routes/infy/routes/channels/routes/events-card/events-card.component.scss"))["default"]]
    })], EventsCardComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/channels/routes/initiatives-card/initiatives-card.component.scss":
  /*!********************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/channels/routes/initiatives-card/initiatives-card.component.scss ***!
    \********************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesChannelsRoutesInitiativesCardInitiativesCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".icon {\n  height: 1em;\n  width: 1em;\n  font-size: 4em;\n}\n\n.card {\n  width: 15em;\n  min-height: 17em;\n}\n\n.title {\n  line-height: 1.2;\n  height: 2.4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9jaGFubmVscy9yb3V0ZXMvaW5pdGlhdGl2ZXMtY2FyZC9pbml0aWF0aXZlcy1jYXJkLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMvY2hhbm5lbHMvcm91dGVzL2luaXRpYXRpdmVzLWNhcmQvaW5pdGlhdGl2ZXMtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNFRiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9jaGFubmVscy9yb3V0ZXMvaW5pdGlhdGl2ZXMtY2FyZC9pbml0aWF0aXZlcy1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge1xuICBoZWlnaHQ6IDFlbTtcbiAgd2lkdGg6IDFlbTtcbiAgZm9udC1zaXplOiA0ZW07XG59XG4uY2FyZCB7XG4gIHdpZHRoOiAxNWVtO1xuICBtaW4taGVpZ2h0OiAxN2VtO1xufVxuXG4udGl0bGUge1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBoZWlnaHQ6IDIuNGVtO1xufVxuIiwiLmljb24ge1xuICBoZWlnaHQ6IDFlbTtcbiAgd2lkdGg6IDFlbTtcbiAgZm9udC1zaXplOiA0ZW07XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDE1ZW07XG4gIG1pbi1oZWlnaHQ6IDE3ZW07XG59XG5cbi50aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGhlaWdodDogMi40ZW07XG59Il19 */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/channels/routes/initiatives-card/initiatives-card.component.ts":
  /*!******************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/channels/routes/initiatives-card/initiatives-card.component.ts ***!
    \******************************************************************************************************************/
  /*! exports provided: InitiativesCardComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesChannelsRoutesInitiativesCardInitiativesCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "InitiativesCardComponent", function () {
      return InitiativesCardComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var InitiativesCardComponent = /*#__PURE__*/function () {
      function InitiativesCardComponent() {
        _classCallCheck(this, InitiativesCardComponent);
        this.initiativesData = null;
      }
      _createClass(InitiativesCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return InitiativesCardComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], InitiativesCardComponent.prototype, "initiativesData", void 0);
    InitiativesCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-initiatives-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./initiatives-card.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/channels/routes/initiatives-card/initiatives-card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./initiatives-card.component.scss */"./project/ws/app/src/lib/routes/infy/routes/channels/routes/initiatives-card/initiatives-card.component.scss"))["default"]]
    })], InitiativesCardComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/channels/routes/leader-card/leader-card.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/channels/routes/leader-card/leader-card.component.scss ***!
    \**********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesChannelsRoutesLeaderCardLeaderCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "img {\n  width: 11em;\n  height: 11em;\n  border-radius: 50%;\n  margin-top: 12px;\n}\n\n.card {\n  width: 14em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9jaGFubmVscy9yb3V0ZXMvbGVhZGVyLWNhcmQvbGVhZGVyLWNhcmQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvc3R5bGVzL193cy12YXJzLnNjc3MiLCJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9jaGFubmVscy9yb3V0ZXMvbGVhZGVyLWNhcmQvbGVhZGVyLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFRSxXQURhO0VBRWIsWUFGYTtFQUdiLGtCQUFBO0VBQ0EsZ0JDRU87QUNMVDs7QUZLQTtFQUNFLFdBQUE7QUVGRiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9jaGFubmVscy9yb3V0ZXMvbGVhZGVyLWNhcmQvbGVhZGVyLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvX3dzLW1peGlucy5zY3NzJztcbkBpbXBvcnQgJ3N0eWxlcy9fd3MtdmFycy5zY3NzJztcblxuaW1nIHtcbiAgJGltYWdlLXNpemU6IDExZW07XG4gIHdpZHRoOiAkaW1hZ2Utc2l6ZTtcbiAgaGVpZ2h0OiAkaW1hZ2Utc2l6ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tdG9wOiAkc2l6ZS1zO1xufVxuLmNhcmQge1xuICB3aWR0aDogMTRlbTtcbn1cbiIsIiRmb250LWZhbWlseS1zYW5zOiAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLFxuICAnTm90byBTYW5zJywgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsXG4gICdOb3RvIENvbG9yIEVtb2ppJztcbiRmb250LWZhbWlseS1zZXJpZjogR2VvcmdpYSwgQ2FtYnJpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiRmb250LWZhbWlseS1tb25vOiBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0xpYmVyYXRpb24gTW9ubycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiRmb250LWZhbWlseS1vcGVuLXNhbnM6ICdPcGVuIFNhbnMnO1xuJGZvbnQtZmFtaWx5LW9wZW4tcG9wcGluczogJ1JvYm90byc7XG5cblxuJHNpemUteHM6IDhweDtcbiRzaXplLXM6IDEycHg7XG4kc2l6ZS1tOiAxNnB4O1xuJHNpemUtbDogMjRweDtcbiRzaXplLXhsOiAzMnB4O1xuJHNpemUtbGc6IDI4cHg7XG4kc2l6ZS14eGw6IDQwcHg7XG5cbiRtYXQtdG9vbGJhci14czogNTJweDtcbiRtYXQtdG9vbGJhci1ndC14czogNTZweDtcbiIsImltZyB7XG4gIHdpZHRoOiAxMWVtO1xuICBoZWlnaHQ6IDExZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogMTRlbTtcbn0iXX0= */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/channels/routes/leader-card/leader-card.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/channels/routes/leader-card/leader-card.component.ts ***!
    \********************************************************************************************************/
  /*! exports provided: LeaderCardComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesChannelsRoutesLeaderCardLeaderCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LeaderCardComponent", function () {
      return LeaderCardComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var LeaderCardComponent = /*#__PURE__*/function () {
      function LeaderCardComponent() {
        _classCallCheck(this, LeaderCardComponent);
        this.leaderData = null;
      }
      _createClass(LeaderCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return LeaderCardComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LeaderCardComponent.prototype, "leaderData", void 0);
    LeaderCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-leader-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./leader-card.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/channels/routes/leader-card/leader-card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./leader-card.component.scss */"./project/ws/app/src/lib/routes/infy/routes/channels/routes/leader-card/leader-card.component.scss"))["default"]]
    })], LeaderCardComponent);

    /***/
  }
}]);
//# sourceMappingURL=routes-channels-channels-module-es5.js.map