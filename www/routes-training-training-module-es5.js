function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-training-training-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/components/home/home.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/components/home/home.component.html ***!
    \**************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesTrainingComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<!-- <mat-toolbar [color]=\"pageNavbar.color\">\n  <ws-widget-btn-page-back [widgetData]=\"{ url: '/app/features',titles:[{title:'Training',url:'none'}] }\">\n  </ws-widget-btn-page-back>\n  <span class=\"margin-left-xs text-truncate\">\n    <span class=\"visible-xs-inline\" i18n>Training</span>\n  </span>\n</mat-toolbar> -->\n\n<router-outlet></router-outlet>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/components/training-type/training-type.component.html":
  /*!********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/components/training-type/training-type.component.html ***!
    \********************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesTrainingComponentsTrainingTypeTrainingTypeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ng-container [ngSwitch]=\"trainingType\">\n  <ng-container *ngSwitchCase=\"trainingTypes.Classroom\" i18n>Classroom Training</ng-container>\n  <ng-container *ngSwitchCase=\"trainingTypes.Virtual\" i18n>Virtual Training</ng-container>\n  <ng-container *ngSwitchCase=\"trainingTypes.Blended\" i18n>Blended Training</ng-container>\n  <ng-container *ngSwitchDefault i18n>Training</ng-container>\n</ng-container>\n";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/training/components/home/home.component.scss":
  /*!************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/training/components/home/home.component.scss ***!
    \************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesTrainingComponentsHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy90cmFpbmluZy9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/training/components/home/home.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/training/components/home/home.component.ts ***!
    \**********************************************************************************************/
  /*! exports provided: HomeComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesTrainingComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ws-widget/utils */"./library/ws-widget/utils/src/public-api.ts");
    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(configSvc) {
        _classCallCheck(this, HomeComponent);
        this.configSvc = configSvc;
        this.pageNavbar = this.configSvc.pageNavBar;
        this.pageNavbar = this.configSvc.pageNavBar;
      }
      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return HomeComponent;
    }();
    HomeComponent.ctorParameters = function () {
      return [{
        type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_2__["ConfigurationsService"]
      }];
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./home.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/components/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./home.component.scss */"./project/ws/app/src/lib/routes/infy/routes/training/components/home/home.component.scss"))["default"]]
    })], HomeComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/training/components/training-type/training-type.component.scss":
  /*!******************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/training/components/training-type/training-type.component.scss ***!
    \******************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesTrainingComponentsTrainingTypeTrainingTypeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy90cmFpbmluZy9jb21wb25lbnRzL3RyYWluaW5nLXR5cGUvdHJhaW5pbmctdHlwZS5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/training/components/training-type/training-type.component.ts":
  /*!****************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/training/components/training-type/training-type.component.ts ***!
    \****************************************************************************************************************/
  /*! exports provided: TrainingTypeComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesTrainingComponentsTrainingTypeTrainingTypeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TrainingTypeComponent", function () {
      return TrainingTypeComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _models_training_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../models/training.model */"./project/ws/app/src/lib/routes/infy/routes/training/models/training.model.ts");
    var TrainingTypeComponent = /*#__PURE__*/function () {
      function TrainingTypeComponent() {
        _classCallCheck(this, TrainingTypeComponent);
        this.trainingTypes = _models_training_model__WEBPACK_IMPORTED_MODULE_2__["ETrainingType"];
      }
      _createClass(TrainingTypeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return TrainingTypeComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TrainingTypeComponent.prototype, "trainingType", void 0);
    TrainingTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-training-type',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./training-type.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/training/components/training-type/training-type.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./training-type.component.scss */"./project/ws/app/src/lib/routes/infy/routes/training/components/training-type/training-type.component.scss"))["default"]]
    })], TrainingTypeComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/training/models/training.model.ts":
  /*!*************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/training/models/training.model.ts ***!
    \*************************************************************************************/
  /*! exports provided: ETrainingType */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesTrainingModelsTrainingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ETrainingType", function () {
      return ETrainingType;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var ETrainingType;
    (function (ETrainingType) {
      ETrainingType["Classroom"] = "Classroom";
      ETrainingType["Virtual"] = "Virtual Classroom";
      ETrainingType["Blended"] = "Blended Learning";
    })(ETrainingType || (ETrainingType = {}));

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/training/training-routing.module.ts":
  /*!***************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/training/training-routing.module.ts ***!
    \***************************************************************************************/
  /*! exports provided: TrainingRoutingModule */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesTrainingTrainingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TrainingRoutingModule", function () {
      return TrainingRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./components/home/home.component */"./project/ws/app/src/lib/routes/infy/routes/training/components/home/home.component.ts");
    var routes = [{
      path: 'dashboard',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | routes-training-dashboard-training-dashboard-module */[__webpack_require__.e("common"), __webpack_require__.e("routes-training-dashboard-training-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./routes/training-dashboard/training-dashboard.module */"./project/ws/app/src/lib/routes/infy/routes/training/routes/training-dashboard/training-dashboard.module.ts")).then(function (u) {
          return u.TrainingDashboardModule;
        });
      }
    }, {
      path: ':contentId',
      loadChildren: function loadChildren() {
        return Promise.all( /*! import() | routes-training-content-training-content-module */[__webpack_require__.e("common"), __webpack_require__.e("routes-training-content-training-content-module")]).then(__webpack_require__.bind(null, /*! ./routes/training-content/training-content.module */"./project/ws/app/src/lib/routes/infy/routes/training/routes/training-content/training-content.module.ts")).then(function (u) {
          return u.TrainingContentModule;
        });
      }
    }, {
      path: '',
      redirectTo: 'dashboard'
    }];
    var TrainingRoutingModule = /*#__PURE__*/_createClass(function TrainingRoutingModule() {
      _classCallCheck(this, TrainingRoutingModule);
    });
    TrainingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: routes
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TrainingRoutingModule);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/training/training.module.ts":
  /*!*******************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/training/training.module.ts ***!
    \*******************************************************************************/
  /*! exports provided: TrainingModule */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesTrainingTrainingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TrainingModule", function () {
      return TrainingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    /* harmony import */
    var _training_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./training-routing.module */"./project/ws/app/src/lib/routes/infy/routes/training/training-routing.module.ts");
    /* harmony import */
    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./components/home/home.component */"./project/ws/app/src/lib/routes/infy/routes/training/components/home/home.component.ts");
    /* harmony import */
    var _components_training_type_training_type_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./components/training-type/training-type.component */"./project/ws/app/src/lib/routes/infy/routes/training/components/training-type/training-type.component.ts");
    var TrainingModule = /*#__PURE__*/_createClass(function TrainingModule() {
      _classCallCheck(this, TrainingModule);
    });
    TrainingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_training_type_training_type_component__WEBPACK_IMPORTED_MODULE_7__["TrainingTypeComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _training_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrainingRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _ws_widget_collection__WEBPACK_IMPORTED_MODULE_4__["BtnPageBackModule"]],
      exports: [_components_training_type_training_type_component__WEBPACK_IMPORTED_MODULE_7__["TrainingTypeComponent"]]
    })], TrainingModule);

    /***/
  }
}]);
//# sourceMappingURL=routes-training-training-module-es5.js.map