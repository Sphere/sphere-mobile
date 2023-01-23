function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-socialSearch-social-search-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/socialSearch/social-search.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/socialSearch/social-search.component.html ***!
    \*************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesSocialRoutesSocialSearchSocialSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-toolbar [color]=\"pageNavbar.color\" [ngStyle]=\"pageNavbar?.styles\">\n\n  <!-- <ws-widget-btn-page-back [widgetData]=\"{ url: 'back' }\"></ws-widget-btn-page-back> -->\n  <!-- <span class=\"ml-2\" i18n>Search</span> -->\n  <span class=\"spacer\"></span>\n  <div class=\"flex items-center border search border-solid search\" style=\"width: 100%;\n    max-width: 500px;\n    box-sizing: border-box;\n    border-radius: 50px;\n    max-height: 50px;\">\n\n    <div class=\"w-full search\">\n\n      <mat-form-field appearance=\"none\" class=\"autocomplete-form\" color=\"primary\" style=\"width:100%;;\"\n        [floatLabel]=\"'never'\">\n        <input type=\"search\" class=\"border-2 border-gray-300 bg-white pr-16 rounded-lg text-sm focus:outline-none\"\n          i18n-placeholder=\"search content\" [placeholder]=\"placeHolder\" i18-aria-label aria-label=\"Query\"\n          style=\"width:90%;margin-left: 10%;\" matInput [(ngModel)]=\"queryEntered\" />\n\n      </mat-form-field>\n\n    </div>\n    <div class=\"flex items-center justify-center w-8 sm:w-16 cursor-pointer\">\n      <mat-icon (click)=\"getSearchResults('firstCall')\">search</mat-icon>\n    </div>\n  </div>\n\n</mat-toolbar>\n<!-- <span i18n=\"search route hits showing\">Showing </span>\n<span>{{ searchResult.total}} </span>\n<span *ngIf=\"searchResult.total > 1\" i18n=\"search route hits results\">results </span>\n<span *ngIf=\"searchResult.total <= 1\" i18n=\"search route hits result\">result </span> -->\n<!-- <div *ngIf=\"!showFilter && filterEnabled\" class=\"text-right\">\n  <button mat-icon-button *ngIf=\"!showFilter\" (click)=\"showFilter = !showFilter;\">\n    <mat-icon>filter_list</mat-icon>\n  </button></div> -->\n<!-- <button mat-icon-button class=\"width-auto\" [ngClass]=\"{ 'hide-filter-btn': sideNavBarOpened }\"\n  (click)=\"sideNavBarOpened = !sideNavBarOpened\">\n  <mat-icon>filter_list</mat-icon>\n</button> -->\n\n<mat-sidenav-container autosize=\"true\" class=\"sidenav-content-min-height\">\n\n  <mat-sidenav #sideNavBar [opened]=\"sideNavBarOpened\" (closed)=\"closeFilter(false)\"\n    [mode]=\"screenSizeIsLtMedium ? 'over' : 'side'\">\n\n    <div class=\"w-full\">\n\n      <div *ngIf=\"showFilter && filterEnabled\">\n        <mat-card *ngIf=\"predefinedAdminFiltersExist\">\n          <mat-card-content>\n            <!-- <h2 class=\"example-h2\">Checkbox configuration</h2> -->\n\n            <!-- <section class=\"example-section\">\n                    <mat-checkbox class=\"example-margin\" [(ngModel)]=\"query\" (change)=\"changeAdminQueryFilter()\">Q&A\n                    </mat-checkbox>\n                    <mat-checkbox class=\"example-margin\" [(ngModel)]=\"forumPosts\" (change)=\"changeAdminForumFilter()\">Forum\n                      Posts\n                    </mat-checkbox>\n                    <mat-checkbox class=\"example-margin\" [(ngModel)]=\"blogPosts\" (change)=\"changeAdminBlogFilter()\">Blog\n                      Posts\n                    </mat-checkbox>\n                  </section> -->\n\n\n\n          </mat-card-content>\n        </mat-card>\n\n        <ws-app-search-filter-display [sideNavBarOpened]=\"sideNavBarOpened\" [filtersResponse]=\"filtersResponse\"\n          (filterClose)=\"closeFilter(false)\" [filtersResetAble]=\"filtersResetAble\">\n        </ws-app-search-filter-display>\n\n\n\n        <!--filters for admin end-->\n\n      </div>\n\n    </div>\n  </mat-sidenav>\n\n  <mat-sidenav-content class=\"sidenav-content-min-height\">\n    <span i18n=\"search route hits showing\">Showing </span>\n    <span>{{ searchResult.total}} </span>\n    <span *ngIf=\"searchResult.total > 1\" i18n=\"search route hits results\">results </span>\n    <span *ngIf=\"searchResult.total <= 1\" i18n=\"search route hits result\">result </span>\n    <!-- <div *ngIf=\"!showFilter && filterEnabled\" class=\"text-right\">\n      <button mat-icon-button *ngIf=\"!showFilter\" (click)=\"showFilter = !showFilter;\">\n        <mat-icon>filter_list</mat-icon>\n      </button></div> -->\n\n    <button mat-icon-button class=\"width-auto\" [ngClass]=\"{ 'hide-filter-btn': sideNavBarOpened }\"\n      (click)=\"sideNavBarOpened = !sideNavBarOpened\" (click)=\"showFilter = !showFilter;\">\n      <mat-icon>filter_list</mat-icon>\n    </button>\n\n    <mat-card style=\"padding-bottom: 0.5rem;margin-bottom:1%\" *ngFor=\"let post of searchResult.result\">\n      {{searchResult.result.postCreatorId}}\n\n      <div class=\"flex\">\n        <div class=\"flex-auto  text-center \" style=\"width:15%;\" *ngIf=\"post.postKind!='Blog'\">\n          <div class=\"flex flex-col justify-center bg-grey-lighter\" style=\"height: 100%;\">\n            <div class=\"text-grey-darker text-center px-4 py-2 m-2\">\n              <ws-widget-btn-social-vote class=\"block\" [voteType]=\"'upVote'\" [postId]=\"post.id\"\n                [postCreatorId]=\"post.postCreator?.postCreatorId\" [activity]=\"post.activity\" [iconType]=\"'triangle'\">\n              </ws-widget-btn-social-vote>\n            </div>\n            <div class=\"vote-count\">\n              {{ post.activity.activityData.upVote - post.activity.activityData.downVote }}\n            </div>\n            <div class=\"text-grey-darker text-center  px-4 py-2 m-2\">\n              <ws-widget-btn-social-vote class=\"block\" [voteType]=\"'downVote'\" [postId]=\"post.id\"\n                [postCreatorId]=\"post?.postCreator?.postCreatorId\" [activity]=\"post.activity\" [iconType]=\"'triangle'\">\n              </ws-widget-btn-social-vote>\n            </div>\n\n          </div>\n        </div>\n        <div class=\"flex-auto  \" style=\"width:60%;\">\n\n          <div *ngIf=\"post\" class=\"text-overwrap w-full\">\n\n            <a [routerLink]=\"'/app/social/forums/post/' + post.id\" class=\"ws-mat-primary-text mat-title pb-2\">\n              {{ post.title }}\n            </a>\n            <div class=\"mb-4 mt-1 text-abstract-trim\">\n              {{ post.abstract }}\n            </div>\n            <div class=\"flex flex-middle\">\n              <mat-icon>account_circle</mat-icon>\n              <div class=\"px-2 ws-mat-primary-text\">\n                {{post.postCreator?.name}}\n              </div>\n              <div class=\"px-2\" *ngIf=\"post.source.forumName && partOfRequired\">\n                <span class=\"ws-mat-primary-text\"><span i18n>Part Of: </span>{{ post.source.forumName }}</span>\n              </div>\n            </div>\n            <div class=\"flex flex-between\" *ngIf=\"post.activity\">\n              <div class=\"flex flex-middle\">\n                <span class=\"ws-mat-primary-text mat-caption pr-4\"><span i18n>Modified:\n                  </span>{{ post.dtLastModified | date }}</span>\n                <ws-widget-btn-social-vote class=\"block\" [voteType]=\"'upVote'\" [postId]=\"post.id\"\n                  [postCreatorId]=\"post.postCreator?.postCreatorId\" [activity]=\"post.activity\" [iconType]=\"'triangle'\">\n                </ws-widget-btn-social-vote>\n\n                <span class=\"ws-mat-primary-text flex flex-middle\">{{post.activity.activityData.upVote}}</span>\n                <ws-widget-btn-social-vote class=\"block\" [voteType]=\"'downVote'\" [postId]=\"post.id\"\n                  [postCreatorId]=\"post?.postCreator?.postCreatorId\" [activity]=\"post.activity\" [iconType]=\"'triangle'\">\n                </ws-widget-btn-social-vote>\n                <span class=\"ws-mat-primary-text flex flex-middle\">{{post.activity.activityData.downVote}}</span>\n              </div>\n              <span class=\"ws-mat-primary-text flex flex-middle\">\n                <mat-icon class=\"px-2 grey-icons\">comment</mat-icon>{{ post.replyCount }}\n              </span>\n            </div>\n          </div>\n          <mat-card-content>\n            <!-- <p class=\"mat-caption\" class=\"mat-caption text-truncate\">\n              {{post.body}}\n            </p> -->\n            <div [innerHTML]=\"truncateHTML(post.body)\" class=\"mat-caption text-truncate\">\n\n            </div>\n          </mat-card-content>\n        </div>\n        <div *ngIf=\"false\" class=\"flex-auto text-gray-700 text-center bg-gray-400 h-auto\" style=\"width:25%;\">\n\n          <img src=\"https://images.yourstory.com/cs/wordpress/2018/03/coding-job.png?fm=png&auto=format\"\n            class=\"h-full  w-full object-cover\">\n\n        </div>\n      </div>\n    </mat-card>\n\n    <h2 class=\"text-center margin-top-m\" i18n *ngIf=\"timelineFetchStatus === 'none'\">\n      There are no posts present on the searched keyword\n    </h2>\n    <div *ngIf=\"timelineFetchStatus === 'fetching'\" class=\"text-center margin-top-s\">\n      <mat-spinner></mat-spinner>\n    </div>\n    <div *ngIf=\"timelineFetchStatus === 'hasMore'\" class=\"text-center\">\n      <button (click)=\"  getSearchResults('subsequentCall')\" type=\"button\" mat-raised-button color=\"primary\">\n        <mat-icon>add</mat-icon>&nbsp;\n        <ng-container>View More</ng-container>\n      </button>\n    </div>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/socialSearch/widgets/search-filter-display/search-filter-display.component.html":
  /*!***************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/socialSearch/widgets/search-filter-display/search-filter-display.component.html ***!
    \***************************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesSocialRoutesSocialSearchWidgetsSearchFilterDisplaySearchFilterDisplayComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"flex flex-between flex-middle\">\n  <h2 class=\"mat-h2 margin-remove padding-left-m\" i18n>Filters</h2>\n  <span class=\"spacer\"></span>\n  <button [hidden]=\"!filtersResetAble\" (click)=\"removeFilters()\" type=\"button\" mat-icon-button>\n    <mat-icon>restore</mat-icon>\n  </button>\n  <button mat-icon-button (click)=\"filterClose.emit(!sideNavBarOpened)\" aria-label=\"icon-button with close icon\">\n    <mat-icon>close</mat-icon>\n  </button>\n</div>\n<mat-accordion multi=\"true\" *ngIf=\"filtersResponse\">\n  <mat-expansion-panel [expanded]=\"filter.checked\"\n    *ngFor=\"let filter of filtersResponse; trackBy: filterUnitResponseTrackBy\">\n    <mat-expansion-panel-header>\n      {{ translatedFilters[filter.displayName.toLowerCase()]?.translatedField || filter.displayName }}\n    </mat-expansion-panel-header>\n    <ng-container *ngTemplateOutlet=\"\n        filtersHolder;\n        context: {\n          $implicit: { filters: filter.content, filterType: filter.type, parentFilter: filter.displayName }\n        }\n      \"></ng-container>\n  </mat-expansion-panel>\n</mat-accordion>\n<!-- <ng-container *ngIf=\"advancedFilters?.length\">\n  <h2 class=\"mat-h2 margin-remove padding-left-m\" i18n=\"search advanced filters\">Advanced Filters</h2>\n  <div *ngFor=\"let filter of advancedFilters\">\n    <button mat-raised-button (click)=\"advancedFilterClick(filter)\">\n      {{ filter.title }}\n    </button>\n  </div>\n</ng-container> -->\n\n<ng-template #filtersHolder let-unitFiltersCollection>\n  <ul class=\"\">\n    <li *ngFor=\"let unitFilter of unitFiltersCollection.filters; trackBy: filterUnitTrackBy\">\n      <div class=\"flex flex-middle\">\n        <button (click)=\"unitFilter.isExpanded = !unitFilter.isExpanded\" mat-icon-button type=\"button\"\n          *ngIf=\"unitFilter?.children?.length\">\n          <mat-icon *ngIf=\"!unitFilter.isExpanded\">chevron_right</mat-icon>\n          <mat-icon *ngIf=\"unitFilter.isExpanded\">expand_less</mat-icon>\n        </button>\n        <button mat-icon-button type=\"button\"\n          *ngIf=\"!unitFilter?.children?.length && unitFiltersCollection.filterType==='catalogPaths'\">\n          <mat-icon>remove</mat-icon>\n\n        </button>\n        <ng-container *ngTemplateOutlet=\"\n            unitFilterHolder;\n            context: {\n              $implicit: {\n                unitFilter: unitFilter,\n                filterType: unitFiltersCollection.filterType,\n                parentFilter: unitFiltersCollection.parentFilter\n              }\n            }\n          \"></ng-container>\n      </div>\n      <ul class=\"nested-filters\" *ngIf=\"unitFilter?.children?.length\" [hidden]=\"!unitFilter.isExpanded\">\n        <li *ngFor=\"let childFilter of unitFilter?.children; trackBy: filterUnitTrackBy\" class=\"flex\">\n          <ng-container *ngTemplateOutlet=\"\n              unitFilterHolder;\n              context: {\n                $implicit: {\n                  unitFilter: childFilter,\n                  filterType: unitFiltersCollection.filterType\n                }\n              }\n            \"></ng-container>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</ng-template>\n\n<ng-template #unitFilterHolder let-unitFilterObject>\n  <mat-checkbox (change)=\"applyFilters(unitFilterObject)\"\n    [checked]=\"unitFilterObject.unitFilter.checked && unitFilterObject.filterType.length\"\n    class=\"width-expand fit-checkbox-to-width\">\n    <span class=\"flex\">\n      <span class=\"width-expand text-truncate\">{{ translatedFilters[unitFilterObject.parentFilter?.toLowerCase()]?.value[unitFilterObject.unitFilter.displayName.toLowerCase()] || unitFilterObject.unitFilter.displayName\n        }}\n      </span>\n    </span>\n  </mat-checkbox>\n  <span class=\"width-auto padding-left-s\"\n    *ngIf=\"unitFilterObject.unitFilter.count\">{{ unitFilterObject.unitFilter.count }}\n  </span>\n</ng-template>";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/social/routes/socialSearch/api/social-search.service.ts":
  /*!***********************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/social/routes/socialSearch/api/social-search.service.ts ***!
    \***********************************************************************************************/
  /*! exports provided: SocialSearchService */
  /***/
  function projectWsAppSrcLibRoutesSocialRoutesSocialSearchApiSocialSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SocialSearchService", function () {
      return SocialSearchService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var PROTECTED_SLAG_V8 = '/apis/protected/v8';
    var API_END_POINTS = {
      SOCIAL_SEARCH_TIMELINE: "".concat(PROTECTED_SLAG_V8, "/social/post/search")
    };
    var SocialSearchService = /*#__PURE__*/function () {
      function SocialSearchService(http) {
        _classCallCheck(this, SocialSearchService);
        this.http = http;
      }
      _createClass(SocialSearchService, [{
        key: "fetchSearchTimelineData",
        value: function fetchSearchTimelineData(request) {
          return this.http.post(API_END_POINTS.SOCIAL_SEARCH_TIMELINE, request);
        }
      }]);
      return SocialSearchService;
    }();
    SocialSearchService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };
    SocialSearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SocialSearchService);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/social/routes/socialSearch/social-search-routing.module.ts":
  /*!**************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/social/routes/socialSearch/social-search-routing.module.ts ***!
    \**************************************************************************************************/
  /*! exports provided: SocialSearchRoutingModule */
  /***/
  function projectWsAppSrcLibRoutesSocialRoutesSocialSearchSocialSearchRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SocialSearchRoutingModule", function () {
      return SocialSearchRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _social_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./social-search.component */"./project/ws/app/src/lib/routes/social/routes/socialSearch/social-search.component.ts");
    var forumroutes = [{
      path: '',
      redirectTo: 'view-search',
      pathMatch: 'full'
    }, {
      path: 'view-search',
      component: _social_search_component__WEBPACK_IMPORTED_MODULE_3__["SocialSearchComponent"]
    }];
    var SocialSearchRoutingModule = /*#__PURE__*/_createClass(function SocialSearchRoutingModule() {
      _classCallCheck(this, SocialSearchRoutingModule);
    });
    SocialSearchRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _social_search_component__WEBPACK_IMPORTED_MODULE_3__["SocialSearchComponent"],
        // resolve: {
        //   content: ModeratorTimelineService,
        // },
        children: forumroutes
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SocialSearchRoutingModule);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/social/routes/socialSearch/social-search.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/social/routes/socialSearch/social-search.component.scss ***!
    \***********************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesSocialRoutesSocialSearchSocialSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".sidenav {\n  background: inherit;\n  box-shadow: none;\n}\n\nmat-sidenav-container {\n  height: 100%;\n}\n\nmat-sidenav-content {\n  margin: 0;\n  padding: 0 16px 24px;\n  box-sizing: border-box;\n  min-height: calc(100vh - 145px);\n  overflow-x: hidden !important;\n}\n\n.qna-home-container {\n  background-color: rosybrown;\n  border-radius: 0;\n  box-sizing: border-box;\n  min-height: calc(100vh - 112px);\n  width: 60%;\n  max-width: 900px;\n  margin: auto;\n  padding: 20px 0;\n}\n\n.qna-home-container .qna-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.margin-remove {\n  margin: 0;\n}\n\n.day-mode .mat-drawer-backdrop.mat-drawer-shown {\n  background-color: none !important;\n}\n\n.sidenav-content-header {\n  height: 40px;\n}\n\n.best-result {\n  float: right;\n  margin: 5px;\n}\n\n.concept {\n  text-align: center;\n  margin-right: 12px;\n  height: 100px;\n  min-width: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px;\n  box-sizing: border-box;\n  font: inherit;\n}\n\n.search-card {\n  display: block;\n  margin-bottom: 8px;\n}\n\n.catalog-link {\n  border-bottom: 1px dotted;\n}\n\n.hide-filter-btn {\n  visibility: hidden;\n}\n\n.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  line-height: 30px;\n  padding: 0 12px;\n}\n\nexample-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.example-radio-button {\n  margin: 5px;\n  margin-right: 30%;\n}\n\n.tempcolor {\n  background-color: #3f51b5;\n}\n\n.example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n\n.line-height-username1 {\n  line-height: 3.75rem;\n}\n\n.change_color_on_hover :hover {\n  background-color: #e7eaf3;\n  cursor: pointer;\n}\n\n.mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n\nh1 {\n  color: #FFFFFF;\n  left: 20px;\n  position: absolute;\n  top: 0px;\n}\n\nul.avatars {\n  display: flex;\n  /* Causes LI items to display in row. */\n  list-style-type: none;\n  margin: auto;\n  /* Centers vertically / horizontally in flex container. */\n  padding: 0px 7px 0px 0px;\n  /*\n  By using the row-reverse layout, the visual ordering will be opposite of\n  the DOM ordering. This will allows us to stack the items in the opposite\n  direction of the natural stacking order without having to mess with the\n  zIndex value. The MAJOR DOWNSIDE is that the HTML itself now reads\n  backwards, which super janky.\n  */\n  flex-direction: row-reverse;\n}\n\nli.avatars__item {\n  height: 49px;\n  margin: 0px 0px 0px 0px;\n  padding: 0px 0px 0px 0px;\n  position: relative;\n  width: 42px;\n  /* Forces flex items to be smaller than their contents. */\n}\n\n/*\nThese items are all 49px wide while the flex-item (in which they live) is\nonly 42px wide. As such, there will be several pixels of overflow content,\nwhich will be stacked using the natural DOM-based stacking order.\n*/\n\nimg.avatars__img,\nspan.avatars__initials,\nspan.avatars__others {\n  background-color: #596376;\n  border: 2px solid #1F2532;\n  border-radius: 100px 100px 100px 100px;\n  color: #FFFFFF;\n  display: block;\n  font-family: sans-serif;\n  font-size: 12px;\n  font-weight: 100;\n  height: 45px;\n  line-height: 45px;\n  text-align: center;\n  width: 45px;\n}\n\nspan.avatars__others {\n  background-color: #1E8FE1;\n}\n\n.line-height-username1 {\n  line-height: 3.75rem;\n}\n\n.example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\n.hide-filter-btn {\n  visibility: hidden;\n}\n\n.vote-count {\n  width: 40px;\n  height: 40px;\n  font-size: 24px;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL3NvY2lhbFNlYXJjaC9zb2NpYWwtc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvc29jaWFsL3JvdXRlcy9zb2NpYWxTZWFyY2gvc29jaWFsLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLXZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUlFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNQRjs7QURVQTtFQUNFLFlBQUE7QUNQRjs7QURZQTtFQUNFLFNBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtBQ1RGOztBRGNBO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ1hGOztBRFlFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNWSjs7QURhQTtFQUNFLFNBQUE7QUNWRjs7QURlRTtFQUNFLGlDQUFBO0FDWko7O0FEZ0JBO0VBQ0UsWUFBQTtBQ2JGOztBRGdCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDYkY7O0FEZ0JBO0VBQ0Usa0JBQUE7RUFDQSxrQkV4RE87RUZ5RFAsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhRTlETztFRitEUCxzQkFBQTtFQUNBLGFBQUE7QUNiRjs7QURnQkE7RUFDRSxjQUFBO0VBQ0Esa0JFdEVRO0FEeURWOztBRGdCQTtFQUNFLHlCQUFBO0FDYkY7O0FEZ0JBO0VBQ0Usa0JBQUE7QUNiRjs7QURlQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ1pKOztBRGNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ1hGOztBRGNBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDWEY7O0FEYUU7RUFDRix5QkFBQTtBQ1ZBOztBRGFBO0VBQ0UsWUFBQTtBQ1ZGOztBRGFBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDVkY7O0FEYUE7RUFDRSxjQUFBO0FDVkY7O0FEZUE7RUFDQyxvQkFBQTtBQ1pEOztBRGNBO0VBQ0MseUJBQUE7RUFDQSxlQUFBO0FDWEQ7O0FEYUE7RUFDQyxnQkFBQTtBQ1ZEOztBRGFFO0VBQ0QsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNWRDs7QURhQztFQUNBLGFBQUE7RUFBZ0IsdUNBQUE7RUFDaEIscUJBQUE7RUFDQSxZQUFBO0VBQWUseURBQUE7RUFDZix3QkFBQTtFQUVBOzs7Ozs7R0FBQTtFQU9BLDJCQUFBO0FDVEQ7O0FEWUM7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUFjLHlEQUFBO0FDUmY7O0FEV0M7Ozs7Q0FBQTs7QUFLQTs7O0VBR0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNDQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ1JEOztBRFdDO0VBQ0EseUJBQUE7QUNSRDs7QURVQztFQUNDLG9CQUFBO0FDUEY7O0FEU0M7RUFDQyxnQkFBQTtBQ05GOztBRFNHO0VBQ0QsbUZBQUE7RUFDQSxzQkFBQTtBQ05GOztBRFFJO0VBQ0Ysa0JBQUE7QUNMRjs7QURRQztFQUNLLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0xOIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL3NvY2lhbC9yb3V0ZXMvc29jaWFsU2VhcmNoL3NvY2lhbC1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5AaW1wb3J0ICdzdHlsZXMvX3dzLW1peGlucy5zY3NzJztcbkBpbXBvcnQgJ3N0eWxlcy9fd3MtY29tbW9uLnNjc3MnO1xuXG4vLyBDb250ZW50cyBvZiBTaWRlTmF2IE1lbnVcbi5zaWRlbmF2IHtcbiAgLy8gd2lkdGg6IDIwJTtcbiAgLy8gbWluLXdpZHRoOiAyNTBweDtcbiAgLy8gcGFkZGluZzogJHNpemUtcztcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuIC8vIG1pbi1oZWlnaHQ6IDgwdmg7XG59XG5cbi8vIENvbnRlbnRzIG9mIFNpZGUgTmF2IENvbnRlbnRcbm1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgJHNpemUtbSAkc2l6ZS1sO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTQ1cHgpO1xuICBvdmVyZmxvdy14OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuXG5cbi5xbmEtaG9tZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByb3N5YnJvd247XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTJweCk7XG4gIHdpZHRoOiA2MCU7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweCAwO1xuICAucW5hLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG4ubWFyZ2luLXJlbW92ZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuXG4uZGF5LW1vZGUge1xuICAubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3duIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnNpZGVuYXYtY29udGVudC1oZWFkZXIge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5iZXN0LXJlc3VsdCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5jb25jZXB0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6ICRzaXplLXM7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1pbi13aWR0aDogNSAqICRzaXplLWw7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAkc2l6ZS1zO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250OiBpbmhlcml0O1xufVxuXG4uc2VhcmNoLWNhcmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogJHNpemUteHM7XG59XG5cbi5jYXRhbG9nLWxpbmsge1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xufVxuXG4uaGlkZS1maWx0ZXItYnRuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmc6IDAgMTJweDtcbn1cbmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMzAlXG59XG4gIC50ZW1wY29sb3J7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICB9XG5cbi5leGFtcGxlLWgyIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZXhhbXBsZS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5leGFtcGxlLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG5cblxuLmxpbmUtaGVpZ2h0LXVzZXJuYW1lMSB7XG5cdGxpbmUtaGVpZ2h0OiAzLjc1cmVtO1xufVxuLmNoYW5nZV9jb2xvcl9vbl9ob3ZlciA6aG92ZXJ7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlN2VhZjM7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XG5cdG1hcmdpbi1sZWZ0OiA4cHg7XG4gIH1cblxuICBoMSB7XG5cdGNvbG9yOiAjRkZGRkZGIDtcblx0bGVmdDogMjBweCA7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZSA7XG5cdHRvcDogMHB4IDtcblx0fVxuXG5cdHVsLmF2YXRhcnMge1xuXHRkaXNwbGF5OiBmbGV4IDsgLyogQ2F1c2VzIExJIGl0ZW1zIHRvIGRpc3BsYXkgaW4gcm93LiAqL1xuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmUgO1xuXHRtYXJnaW46IGF1dG8gOyAvKiBDZW50ZXJzIHZlcnRpY2FsbHkgLyBob3Jpem9udGFsbHkgaW4gZmxleCBjb250YWluZXIuICovXG5cdHBhZGRpbmc6IDBweCA3cHggMHB4IDBweCA7XG5cblx0Lypcblx0QnkgdXNpbmcgdGhlIHJvdy1yZXZlcnNlIGxheW91dCwgdGhlIHZpc3VhbCBvcmRlcmluZyB3aWxsIGJlIG9wcG9zaXRlIG9mXG5cdHRoZSBET00gb3JkZXJpbmcuIFRoaXMgd2lsbCBhbGxvd3MgdXMgdG8gc3RhY2sgdGhlIGl0ZW1zIGluIHRoZSBvcHBvc2l0ZVxuXHRkaXJlY3Rpb24gb2YgdGhlIG5hdHVyYWwgc3RhY2tpbmcgb3JkZXIgd2l0aG91dCBoYXZpbmcgdG8gbWVzcyB3aXRoIHRoZVxuXHR6SW5kZXggdmFsdWUuIFRoZSBNQUpPUiBET1dOU0lERSBpcyB0aGF0IHRoZSBIVE1MIGl0c2VsZiBub3cgcmVhZHNcblx0YmFja3dhcmRzLCB3aGljaCBzdXBlciBqYW5reS5cblx0Ki9cblx0ZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlIDtcblx0fVxuXG5cdGxpLmF2YXRhcnNfX2l0ZW0ge1xuXHRoZWlnaHQ6IDQ5cHggO1xuXHRtYXJnaW46IDBweCAwcHggMHB4IDBweCA7XG5cdHBhZGRpbmc6IDBweCAwcHggMHB4IDBweCA7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZSA7XG5cdHdpZHRoOiA0MnB4IDsgLyogRm9yY2VzIGZsZXggaXRlbXMgdG8gYmUgc21hbGxlciB0aGFuIHRoZWlyIGNvbnRlbnRzLiAqL1xuXHR9XG5cblx0Lypcblx0VGhlc2UgaXRlbXMgYXJlIGFsbCA0OXB4IHdpZGUgd2hpbGUgdGhlIGZsZXgtaXRlbSAoaW4gd2hpY2ggdGhleSBsaXZlKSBpc1xuXHRvbmx5IDQycHggd2lkZS4gQXMgc3VjaCwgdGhlcmUgd2lsbCBiZSBzZXZlcmFsIHBpeGVscyBvZiBvdmVyZmxvdyBjb250ZW50LFxuXHR3aGljaCB3aWxsIGJlIHN0YWNrZWQgdXNpbmcgdGhlIG5hdHVyYWwgRE9NLWJhc2VkIHN0YWNraW5nIG9yZGVyLlxuXHQqL1xuXHRpbWcuYXZhdGFyc19faW1nLFxuXHRzcGFuLmF2YXRhcnNfX2luaXRpYWxzLFxuXHRzcGFuLmF2YXRhcnNfX290aGVycyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM1OTYzNzYgO1xuXHRib3JkZXI6IDJweCBzb2xpZCAjMUYyNTMyIDtcblx0Ym9yZGVyLXJhZGl1czogMTAwcHggMTAwcHggMTAwcHggMTAwcHggO1xuXHRjb2xvcjogI0ZGRkZGRiA7XG5cdGRpc3BsYXk6IGJsb2NrIDtcblx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWYgO1xuXHRmb250LXNpemU6IDEycHggO1xuXHRmb250LXdlaWdodDogMTAwIDtcblx0aGVpZ2h0OiA0NXB4IDtcblx0bGluZS1oZWlnaHQ6IDQ1cHggO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXIgO1xuXHR3aWR0aDogNDVweCA7XG5cdH1cblxuXHRzcGFuLmF2YXRhcnNfX290aGVycyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMxRThGRTEgO1xuXHR9XG5cdC5saW5lLWhlaWdodC11c2VybmFtZTEge1xuXHRcdGxpbmUtaGVpZ2h0OiAzLjc1cmVtO1xuXHR9XG5cdC5leGFtcGxlLWNhcmQge1xuXHRcdG1heC13aWR0aDogNDAwcHg7XG5cdCAgfVxuXG5cdCAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcblx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHQgIH1cbiAgICAuaGlkZS1maWx0ZXItYnRuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4gLnZvdGUtY291bnQge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH0iLCIuc2lkZW5hdiB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LXNpZGVuYXYtY29udGVudCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAxNnB4IDI0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNDVweCk7XG4gIG92ZXJmbG93LXg6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4ucW5hLWhvbWUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcm9zeWJyb3duO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEycHgpO1xuICB3aWR0aDogNjAlO1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbi5xbmEtaG9tZS1jb250YWluZXIgLnFuYS10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1hcmdpbi1yZW1vdmUge1xuICBtYXJnaW46IDA7XG59XG5cbi5kYXktbW9kZSAubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3duIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc2lkZW5hdi1jb250ZW50LWhlYWRlciB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmJlc3QtcmVzdWx0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDVweDtcbn1cblxuLmNvbmNlcHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbi5zZWFyY2gtY2FyZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5jYXRhbG9nLWxpbmsge1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xufVxuXG4uaGlkZS1maWx0ZXItYnRuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG59XG5cbmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMzAlO1xufVxuXG4udGVtcGNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbn1cblxuLmV4YW1wbGUtaDIge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5leGFtcGxlLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmV4YW1wbGUtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5saW5lLWhlaWdodC11c2VybmFtZTEge1xuICBsaW5lLWhlaWdodDogMy43NXJlbTtcbn1cblxuLmNoYW5nZV9jb2xvcl9vbl9ob3ZlciA6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlYWYzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbmgxIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGxlZnQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG59XG5cbnVsLmF2YXRhcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBDYXVzZXMgTEkgaXRlbXMgdG8gZGlzcGxheSBpbiByb3cuICovXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiBhdXRvO1xuICAvKiBDZW50ZXJzIHZlcnRpY2FsbHkgLyBob3Jpem9udGFsbHkgaW4gZmxleCBjb250YWluZXIuICovXG4gIHBhZGRpbmc6IDBweCA3cHggMHB4IDBweDtcbiAgLypcbiAgQnkgdXNpbmcgdGhlIHJvdy1yZXZlcnNlIGxheW91dCwgdGhlIHZpc3VhbCBvcmRlcmluZyB3aWxsIGJlIG9wcG9zaXRlIG9mXG4gIHRoZSBET00gb3JkZXJpbmcuIFRoaXMgd2lsbCBhbGxvd3MgdXMgdG8gc3RhY2sgdGhlIGl0ZW1zIGluIHRoZSBvcHBvc2l0ZVxuICBkaXJlY3Rpb24gb2YgdGhlIG5hdHVyYWwgc3RhY2tpbmcgb3JkZXIgd2l0aG91dCBoYXZpbmcgdG8gbWVzcyB3aXRoIHRoZVxuICB6SW5kZXggdmFsdWUuIFRoZSBNQUpPUiBET1dOU0lERSBpcyB0aGF0IHRoZSBIVE1MIGl0c2VsZiBub3cgcmVhZHNcbiAgYmFja3dhcmRzLCB3aGljaCBzdXBlciBqYW5reS5cbiAgKi9cbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG5saS5hdmF0YXJzX19pdGVtIHtcbiAgaGVpZ2h0OiA0OXB4O1xuICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0MnB4O1xuICAvKiBGb3JjZXMgZmxleCBpdGVtcyB0byBiZSBzbWFsbGVyIHRoYW4gdGhlaXIgY29udGVudHMuICovXG59XG5cbi8qXG5UaGVzZSBpdGVtcyBhcmUgYWxsIDQ5cHggd2lkZSB3aGlsZSB0aGUgZmxleC1pdGVtIChpbiB3aGljaCB0aGV5IGxpdmUpIGlzXG5vbmx5IDQycHggd2lkZS4gQXMgc3VjaCwgdGhlcmUgd2lsbCBiZSBzZXZlcmFsIHBpeGVscyBvZiBvdmVyZmxvdyBjb250ZW50LFxud2hpY2ggd2lsbCBiZSBzdGFja2VkIHVzaW5nIHRoZSBuYXR1cmFsIERPTS1iYXNlZCBzdGFja2luZyBvcmRlci5cbiovXG5pbWcuYXZhdGFyc19faW1nLFxuc3Bhbi5hdmF0YXJzX19pbml0aWFscyxcbnNwYW4uYXZhdGFyc19fb3RoZXJzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NjM3NjtcbiAgYm9yZGVyOiAycHggc29saWQgIzFGMjUzMjtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHggMTAwcHggMTAwcHggMTAwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNDVweDtcbn1cblxuc3Bhbi5hdmF0YXJzX19vdGhlcnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUU4RkUxO1xufVxuXG4ubGluZS1oZWlnaHQtdXNlcm5hbWUxIHtcbiAgbGluZS1oZWlnaHQ6IDMuNzVyZW07XG59XG5cbi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uaGlkZS1maWx0ZXItYnRuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4udm90ZS1jb3VudCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iLCIkZm9udC1mYW1pbHktc2FuczogJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCxcbiAgJ05vdG8gU2FucycsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLFxuICAnTm90byBDb2xvciBFbW9qaSc7XG4kZm9udC1mYW1pbHktc2VyaWY6IEdlb3JnaWEsIENhbWJyaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4kZm9udC1mYW1pbHktbW9ubzogTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdMaWJlcmF0aW9uIE1vbm8nLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4kZm9udC1mYW1pbHktb3Blbi1zYW5zOiAnT3BlbiBTYW5zJztcbiRmb250LWZhbWlseS1vcGVuLXBvcHBpbnM6ICdSb2JvdG8nO1xuXG5cbiRzaXplLXhzOiA4cHg7XG4kc2l6ZS1zOiAxMnB4O1xuJHNpemUtbTogMTZweDtcbiRzaXplLWw6IDI0cHg7XG4kc2l6ZS14bDogMzJweDtcbiRzaXplLWxnOiAyOHB4O1xuJHNpemUteHhsOiA0MHB4O1xuXG4kbWF0LXRvb2xiYXIteHM6IDUycHg7XG4kbWF0LXRvb2xiYXItZ3QteHM6IDU2cHg7XG4iXX0= */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/social/routes/socialSearch/social-search.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/social/routes/socialSearch/social-search.component.ts ***!
    \*********************************************************************************************/
  /*! exports provided: SocialSearchComponent */
  /***/
  function projectWsAppSrcLibRoutesSocialRoutesSocialSearchSocialSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SocialSearchComponent", function () {
      return SocialSearchComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _library_ws_widget_utils_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../../../../../../../library/ws-widget/utils/src/public-api */"./library/ws-widget/utils/src/public-api.ts");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _forums_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../forums/models/SocialForumposts.model */"./project/ws/app/src/lib/routes/social/routes/forums/models/SocialForumposts.model.ts");
    /* harmony import */
    var _forums_service_EmitterService_forum_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../forums/service/EmitterService/forum-handler.service */"./project/ws/app/src/lib/routes/social/routes/forums/service/EmitterService/forum-handler.service.ts");
    /* harmony import */
    var _api_social_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./api/social-search.service */"./project/ws/app/src/lib/routes/social/routes/socialSearch/api/social-search.service.ts");
    var SocialSearchComponent = /*#__PURE__*/function () {
      // borrowed code eneds
      function SocialSearchComponent(_eventEmiter, configSvc, valueSvc, activated, socialServ) {
        _classCallCheck(this, SocialSearchComponent);
        this._eventEmiter = _eventEmiter;
        this.configSvc = configSvc;
        this.valueSvc = valueSvc;
        this.activated = activated;
        this.socialServ = socialServ;
        this.opened = true;
        this.searchResult = {
          total: 0,
          result: [],
          filters: []
        };
        this.filtersResponse = [];
        this.searchRequest = {
          filters: {}
        };
        this.socialSearchReq = {
          query: 'all',
          pageNo: 0,
          pageSize: 10,
          postKind: _forums_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_5__["SocialForum"].EPostKind.BLOG,
          sessionId: Date.now(),
          filters: {}
        };
        this.timelineFetchStatus = 'none';
        this.queryEntered = 'all';
        this.favoriteSeason = 'Published';
        this.seasons = ['In Review', 'Published', 'Rejected', 'Drafts'];
        // borrowed code from forum-hime starts
        this.screenSizeIsLtMedium = false;
        this.showText = true;
        this.showFilter = true;
        this.navbarMode = false;
        this.filterEnabled = true;
        this.pageNavbar = this.configSvc.pageNavBar;
        this.defaultSideNavBarOpenedSubscription = null;
        this.isLtMedium$ = this.valueSvc.isLtMedium$;
        this.sideNavBarOpened = true;
        this.mode$ = this.isLtMedium$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (isMedium) {
          return isMedium ? 'over' : 'side';
        }));
        this.panelOpenState = true;
        this.defaultColorTab = true;
        this.predefinedFiltersExist = false;
        this.predefinedAdminFiltersExist = false;
        // borrowed code ends
        // borrowed from search input
        // queryControl = new FormControl(this.activated.snapshot.queryParams.q || 'all')
        this.placeHolder = 'Enter your search here';
        this.isXSmall$ = this.valueSvc.isXSmall$;
      }
      _createClass(SocialSearchComponent, [{
        key: "setDataStr",
        value: function setDataStr() {
          var _this = this;
          this._eventEmiter.dataStr.subscribe(function (data) {
            return _this.filtersResponse = data;
          });
          // console.log('the filter data is' + this.filtersResponse)
        }
      }, {
        key: "truncateHTML",
        value: function truncateHTML(text) {
          var charlimit = 160;
          if (!text || text.length <= charlimit) {
            return text;
          }
          var withouthtml = text.replace(/<(?:.|\n)*?>/gm, '');
          var shortened = "".concat(withouthtml.substring(0, charlimit), " ,'...'");
          return shortened;
        }
      }, {
        key: "getSearchResults",
        value: function getSearchResults(type) {
          var _this2 = this;
          if (type === 'firstCall') {
            this.socialSearchReq.pageNo = 0;
          } else {
            this.socialSearchReq.pageNo += 1;
          }
          // if (this.timelineFetchStatus === 'done') {
          //   return
          // }
          this.socialSearchReq.query = this.queryEntered;
          this.timelineFetchStatus = 'fetching';
          // console.log('The data received when the object is' + type)
          // (this.timelineRequest.pgNo as number) += 1
          //  this.timelineRequest.pgNo = 0
          this.socialServ.fetchSearchTimelineData(this.socialSearchReq).subscribe(function (data) {
            if (data.result) {
              //  console.log('DATA: ')
              // trial to make view more work properly
              // console.log("The page number is set to " + this.timelineRequest.pgNo)
              //  this.timelineData.result = [...this.timelineData.result, ...data.result]
              _this2.searchResult.result = data.result;
              // Trial ends here
              _this2.searchResult.total = data.total;
              _this2.searchResult.filters = [].concat(_toConsumableArray(data.filters));
              //       console.log("filters are" + JSON.stringify(this.searchResult.filters))
              //      console.log("Search result is are" + JSON.stringify(this.searchResult.result))
              // console.log("The filters that are checked in recent forum in search request is" + JSON.stringify(this.searchRequest.filters))
              // check if the filter is checked
              // second attempt
              _this2.searchResult.filters.forEach(function (receivedFilter) {
                // console.log("Tag name from timelinedata 2nd attempt is" + JSON.stringify(receivedFilter.displayName))
                Object.keys(_this2.searchRequest.filters).forEach(function (appliedfiltertype) {
                  // console.log("The matched data type is " + appliedfiltertype)
                  if (receivedFilter.type === appliedfiltertype) {
                    // console.log("The matched data type is " + appliedfiltertype)
                    // console.log("The corresponding key value is" + this.searchRequest.filters[appliedfiltertype])
                    var temp = _this2.searchRequest.filters[appliedfiltertype];
                    // console.log("The filter to be operated is" + JSON.stringify(receivedFilter))
                    receivedFilter.checked = true;
                    receivedFilter.content.forEach(function (subtag) {
                      //     console.log("The sub tags are" + JSON.stringify(subtag))
                      //  console.log("The value of temp is" + subtag.toString())
                      temp.forEach(function (tempElement) {
                        //  console.log("The value of temp is" + JSON.stringify(tempElement))
                        if (subtag.type === tempElement.toString() || subtag.type === tempElement.type) {
                          subtag.checked = true;
                        }
                      });
                    });
                  }
                });
              });
              // checking filter ends
              //  console.log("The filters sentb finally are" + JSON.stringify(this.searchResult.filters))
              //  this.filtersResponse= this.socialSearchReq
              //    this.setDataStr()
              _this2._eventEmiter.sendMessage(_this2.searchResult.filters);
              // console.log("results are" + this.timelineData.result)
              // console.log("the tuimeline data length is" + this.timelineData.result.length)
              // console.log("The data hits are" + data.hits)
              if (data.total > _this2.searchResult.result.length) {
                _this2.timelineFetchStatus = 'hasMore';
              } else {
                _this2.timelineFetchStatus = 'done';
              }
            } else {
              _this2.timelineFetchStatus = 'none';
            }
          }, function () {
            _this2.timelineFetchStatus = 'error';
          });
        }
      }, {
        key: "closeFilter",
        value: function closeFilter(value) {
          this.showFilter = value;
          this.sideNavBarOpened = value;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;
          this.defaultSideNavBarOpenedSubscription = this.isLtMedium$.subscribe(function (isLtMedium) {
            _this3.screenSizeIsLtMedium = isLtMedium;
          });
          if (this.screenSizeIsLtMedium) {
            this.sideNavBarOpened = false;
            this.showFilter = false;
          }
          this.activated.queryParamMap.subscribe(function (queryMap) {
            if (queryMap.has('search')) {
              var queryReceived = queryMap.get('search');
              if (queryReceived !== '' || queryReceived !== null) {
                _this3.queryEntered = queryReceived || 'all';
                // console.log("Query Received is ACCEPTED" + this.queryEntered)
              }
            }

            if (queryMap.has('f')) {
              var filters = JSON.parse(queryMap.get('f') || '{}');
              // console.log('The filters in recent forum is' + JSON.stringify(filters))
              _this3.searchRequest.filters = filters;
              // console.log("The filters in recent forum in search request is" + JSON.stringify(this.searchRequest.filters))
              _this3.socialSearchReq.filters = _this3.searchRequest.filters;
            } else {
              _this3.socialSearchReq.filters = {};
            }
            _this3.timelineFetchStatus = 'fetching';
            _this3.getSearchResults('firstCall');
          });
          this.setDataStr();
        }
      }]);
      return SocialSearchComponent;
    }();
    SocialSearchComponent.ctorParameters = function () {
      return [{
        type: _forums_service_EmitterService_forum_handler_service__WEBPACK_IMPORTED_MODULE_6__["ForumHandlerService"]
      }, {
        type: _library_ws_widget_utils_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ConfigurationsService"]
      }, {
        type: _library_ws_widget_utils_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ValueService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _api_social_search_service__WEBPACK_IMPORTED_MODULE_7__["SocialSearchService"]
      }];
    };
    SocialSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-social-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./social-search.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/socialSearch/social-search.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./social-search.component.scss */"./project/ws/app/src/lib/routes/social/routes/socialSearch/social-search.component.scss"))["default"]]
    })], SocialSearchComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/social/routes/socialSearch/social-search.module.ts":
  /*!******************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/social/routes/socialSearch/social-search.module.ts ***!
    \******************************************************************************************/
  /*! exports provided: SocialSearchModule */
  /***/
  function projectWsAppSrcLibRoutesSocialRoutesSocialSearchSocialSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SocialSearchModule", function () {
      return SocialSearchModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _social_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./social-search.component */"./project/ws/app/src/lib/routes/social/routes/socialSearch/social-search.component.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _social_search_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./social-search-routing.module */"./project/ws/app/src/lib/routes/social/routes/socialSearch/social-search-routing.module.ts");
    /* harmony import */
    var _library_ws_widget_collection_src_public_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../../../../../../../../../library/ws-widget/collection/src/public-api */"./library/ws-widget/collection/src/public-api.ts");
    /* harmony import */
    var _forums_service_EmitterService_forum_handler_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ../forums/service/EmitterService/forum-handler.service */"./project/ws/app/src/lib/routes/social/routes/forums/service/EmitterService/forum-handler.service.ts");
    /* harmony import */
    var _widgets_search_filter_display_search_filter_display_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./widgets/search-filter-display/search-filter-display.component */"./project/ws/app/src/lib/routes/social/routes/socialSearch/widgets/search-filter-display/search-filter-display.component.ts");
    var SocialSearchModule = /*#__PURE__*/_createClass(function SocialSearchModule() {
      _classCallCheck(this, SocialSearchModule);
    } // console.log('Social Search Module Called')
    );

    SocialSearchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_social_search_component__WEBPACK_IMPORTED_MODULE_3__["SocialSearchComponent"], _widgets_search_filter_display_search_filter_display_component__WEBPACK_IMPORTED_MODULE_10__["SearchFilterDisplayComponent"]],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _library_ws_widget_collection_src_public_api__WEBPACK_IMPORTED_MODULE_8__["BtnSocialVoteModule"], _library_ws_widget_collection_src_public_api__WEBPACK_IMPORTED_MODULE_8__["BtnSocialLikeModule"], _social_search_routing_module__WEBPACK_IMPORTED_MODULE_7__["SocialSearchRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], _library_ws_widget_collection_src_public_api__WEBPACK_IMPORTED_MODULE_8__["BtnPageBackModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"]],
      providers: [_forums_service_EmitterService_forum_handler_service__WEBPACK_IMPORTED_MODULE_9__["ForumHandlerService"]],
      exports: [_social_search_component__WEBPACK_IMPORTED_MODULE_3__["SocialSearchComponent"]]
    })], SocialSearchModule);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/social/routes/socialSearch/widgets/search-filter-display/search-filter-display.component.scss":
  /*!*************************************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/social/routes/socialSearch/widgets/search-filter-display/search-filter-display.component.scss ***!
    \*************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesSocialRoutesSocialSearchWidgetsSearchFilterDisplaySearchFilterDisplayComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "ul,\nli {\n  list-style-type: none;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  padding-left: 0px;\n}\n\n.nested-filters {\n  padding-left: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL3NvY2lhbFNlYXJjaC93aWRnZXRzL3NlYXJjaC1maWx0ZXItZGlzcGxheS9zZWFyY2gtZmlsdGVyLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL3NvY2lhbFNlYXJjaC93aWRnZXRzL3NlYXJjaC1maWx0ZXItZGlzcGxheS9zZWFyY2gtZmlsdGVyLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7O0VBRUUscUJBQUE7RUFDQSwwQkFBQTtVQUFBLHlCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvc29jaWFsL3JvdXRlcy9zb2NpYWxTZWFyY2gvd2lkZ2V0cy9zZWFyY2gtZmlsdGVyLWRpc3BsYXkvc2VhcmNoLWZpbHRlci1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xudWwsXG5saSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgcGFkZGluZy1sZWZ0OjBweDtcbn1cbi5uZXN0ZWQtZmlsdGVycyB7XG4gIHBhZGRpbmctbGVmdDogMiAqICRzaXplLXhsO1xufVxuIiwidWwsXG5saSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5uZXN0ZWQtZmlsdGVycyB7XG4gIHBhZGRpbmctbGVmdDogNjRweDtcbn0iXX0= */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/social/routes/socialSearch/widgets/search-filter-display/search-filter-display.component.ts":
  /*!***********************************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/social/routes/socialSearch/widgets/search-filter-display/search-filter-display.component.ts ***!
    \***********************************************************************************************************************************/
  /*! exports provided: SearchFilterDisplayComponent */
  /***/
  function projectWsAppSrcLibRoutesSocialRoutesSocialSearchWidgetsSearchFilterDisplaySearchFilterDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SearchFilterDisplayComponent", function () {
      return SearchFilterDisplayComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _library_ws_widget_utils_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../../../../../../../../../../library/ws-widget/utils/src/public-api */"./library/ws-widget/utils/src/public-api.ts");
    /* harmony import */
    var _forums_service_sub_services_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../../forums/service/sub-services/filter.service */"./project/ws/app/src/lib/routes/social/routes/forums/service/sub-services/filter.service.ts");
    var SearchFilterDisplayComponent = /*#__PURE__*/function () {
      function SearchFilterDisplayComponent(activated, router, filterServ, configSvc) {
        _classCallCheck(this, SearchFilterDisplayComponent);
        this.activated = activated;
        this.router = router;
        this.filterServ = filterServ;
        this.configSvc = configSvc;
        this.filtersResponse = [];
        this.sideNavBarOpened = false;
        this.filtersResetAble = false;
        this.filterClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.translatedFilters = {};
        this.searchRequest = {
          filters: {}
        };
      }
      _createClass(SearchFilterDisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;
          this.activated.queryParamMap.subscribe(function (queryMap) {
            if (queryMap.has('f')) {
              var filters = JSON.parse(queryMap.get('f') || '{}');
              //  console.log('THE FILTERS ACTIVATEDDDDDDDDDDDDDDDDDD IN FILTER COMPONENT IS' + JSON.stringify(filters))
              _this4.searchRequest.filters = filters;
            }
          });
          var lang = this.configSvc.userPreference && this.configSvc.userPreference.selectedLocale;
          this.filterServ.translateSearchFilters(lang || 'en').then(function (val) {
            _this4.translatedFilters = val;
          });
        }
      }, {
        key: "filterUnitResponseTrackBy",
        value: function filterUnitResponseTrackBy(filter) {
          return filter.id;
        }
      }, {
        key: "filterUnitTrackBy",
        value: function filterUnitTrackBy(filter) {
          return filter.id;
        }
      }, {
        key: "applyFilters",
        value: function applyFilters(unitFilterObject) {
          //   console.log(unitFilterObject)
          //  console.log("The aTYPE OF apply filters received is" + unitFilterObject.filterType)
          this.filtersResponse = [];
          // last  published filter handling starts
          // last  published filter handling ends`
          var filterItem = {
            key: unitFilterObject.filterType,
            value: unitFilterObject.unitFilter.type || '',
            from: unitFilterObject.unitFilter.from || '',
            to: unitFilterObject.unitFilter.to || ''
          };
          // if (unitFilterObject.filterType === "dtPublished") {
          //   filterItem.value = tempval
          // }
          var requestFilters = this.searchRequest.filters;
          var filterRemove = false;
          // console.log("Request filters XXXXXXXXXXXXXXXXXX is" + JSON.stringify(requestFilters[filterItem.key]))
          /// Trial starts
          if (unitFilterObject.filterType === 'dtPublished' && requestFilters[filterItem.key]) {
            requestFilters[filterItem.key].forEach(function (x) {
              //  console.log(x.type)
              if (x.type === unitFilterObject.unitFilter.type) {
                //  console.log("filtertype remove")
                filterRemove = true;
              }
            });
          }
          // trial ends
          // console.log("the val RRRRRRRRRRRRRRRRRRRR is" + requestFilters[filterItem.key].indexOf(filterItem.value))
          if (requestFilters) {
            // console.log("the key RRRRRRRRRRRRRRRRRRRR is" + JSON.stringify(filterItem.key))
            // console.log("the VAlue RRRRRRRRRRRRRRRRRRRR is" + JSON.stringify(filterItem.value))
            //  console.log("the val SSSSSSSSSSS is" + requestFilters[filterItem.key].indexOf(filterItem.value))
            if (requestFilters[filterItem.key] && requestFilters[filterItem.key].indexOf(filterItem.value) !== -1) {
              filterRemove = true;
            }
          }
          if (!filterRemove) {
            this.addFilter(filterItem);
          } else {
            this.removeFilter(filterItem);
          }
        }
      }, {
        key: "addFilter",
        value: function addFilter(_ref) {
          var key = _ref.key,
            value = _ref.value,
            from = _ref.from,
            to = _ref.to;
          var filters = Object.assign({}, this.searchRequest.filters);
          // console.log('IN THE FILTER COMPONENT IS' + JSON.stringify(key) + " value is" + JSON.stringify(value))
          var tempvalx = {
            from: from,
            to: to,
            type: value
          };
          if (key in filters) {
            // console.log("filter key is" + filters[key])
            if (to !== '') {
              //     console.log("case 1")
              filters[key] = [].concat(_toConsumableArray(filters[key]), [tempvalx]);
            } else {
              //  console.log("case 2")
              filters[key] = [].concat(_toConsumableArray(filters[key]), [value]);
            }
          } else {
            // console.log("case 3")
            if (to !== '') {
              // console.log("case 1")
              // filters[key] = [...filters[key], tempvalx]
              filters[key] = [tempvalx];
            } else {
              filters[key] = [value];
            }
          }
          this.router.navigate([], {
            queryParams: {
              f: JSON.stringify(filters)
            },
            relativeTo: this.activated.parent,
            queryParamsHandling: 'merge'
          });
        }
      }, {
        key: "removeFilter",
        value: function removeFilter(_ref2) {
          var key = _ref2.key,
            value = _ref2.value;
          // console.log("The remove filter is CSALLED" + value + " key is " + key)
          var filters = Object.assign({}, this.searchRequest.filters);
          // const dFilters=
          if (key in filters || filters) {
            // console.log("filters key is" + JSON.stringify(filters[key]))
            filters[key] = filters[key].filter(function (filter) {
              return filter !== value;
            });
            for (var fil in filters) {
              // console.log("length of filter " + filters[fil] + " lengthhhh is " + filters[fil].length)
              if (filters[fil].length === 0) {
                delete filters[fil];
              }
            }
          }
          if (key === 'dtPublished') {
            //   console.log("The from is " + from)
            //
            //  console.log("filters XXXXX key is" + JSON.stringify(filters[key].forEach(e => { console.log("E is " + e.type) })))
            //  console.log("E is " + e.type)
            // if (e.type === value) {
            //   delete filters[key]
            // }
            Object.keys(filters).forEach(function (filx) {
              filters[filx].forEach(function (m) {
                //    console.log("m is " + m.type)
                if (m.type === value) {
                  //   console.log("The updated filter isz " + JSON.stringify(filters[filx]))
                  var index = filters[filx].indexOf(m, 0);
                  if (index > -1) {
                    //    console.log("The index is " + index)
                    filters[filx].splice(index, 1);
                  }
                  //   delete filters[filx]
                }
              });
            });
            // for (const filx in filters) {
            //   //  console.log("length xxxxxyyyyyy of filter " + filters[filx] + " lengthhhh is " + filters[filx].length)
            //   filters[filx].forEach(m => {
            //     //    console.log("m is " + m.type)
            //     if (m.type === value) {
            //       //   console.log("The updated filter isz " + JSON.stringify(filters[filx]))
            //       const index = filters[filx].indexOf(m, 0)
            //       if (index > -1) {
            //         //    console.log("The index is " + index)
            //         filters[filx].splice(index, 1)
            //       }
            //       //   delete filters[filx]
            //     }
            //   })
            //   // if (filters[filx].type === e.type) {
            //   //   delete filters[filx]
            //   // }
            // }
          }

          this.router.navigate([], {
            queryParams: {
              f: JSON.stringify(filters)
            },
            relativeTo: this.activated.parent,
            queryParamsHandling: 'merge'
          });
          /// trial
          // if (value in filters || filters) {
          //   console.log("filters val is" + JSON.stringify(filters[value]))
          //   filters[key] = filters[key].filter(filter => { filter !== value })
          //   for (const fil in filters) {
          //     if (filters[fil].length === 0) {
          //       delete filters[fil]
          //     }
          //   }
          //   this.router.navigate([], {
          //     queryParams: { f: JSON.stringify(filters) },
          //     relativeTo: this.activated.parent,
          //     queryParamsHandling: 'merge',
          //   })
          // }
        }
      }, {
        key: "removeFilters",
        value: function removeFilters() {
          this.router.navigate([], {
            queryParams: {
              f: null
            },
            queryParamsHandling: 'merge',
            relativeTo: this.activated.parent
          });
        }
      }]);
      return SearchFilterDisplayComponent;
    }();
    SearchFilterDisplayComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _forums_service_sub_services_filter_service__WEBPACK_IMPORTED_MODULE_4__["FilterService"]
      }, {
        type: _library_ws_widget_utils_src_public_api__WEBPACK_IMPORTED_MODULE_3__["ConfigurationsService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SearchFilterDisplayComponent.prototype, "filtersResponse", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SearchFilterDisplayComponent.prototype, "sideNavBarOpened", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SearchFilterDisplayComponent.prototype, "filtersResetAble", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SearchFilterDisplayComponent.prototype, "filterClose", void 0);
    SearchFilterDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-search-filter-display',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./search-filter-display.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/socialSearch/widgets/search-filter-display/search-filter-display.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./search-filter-display.component.scss */"./project/ws/app/src/lib/routes/social/routes/socialSearch/widgets/search-filter-display/search-filter-display.component.scss"))["default"]]
    })], SearchFilterDisplayComponent);

    /***/
  }
}]);
//# sourceMappingURL=routes-socialSearch-social-search-module-es5.js.map