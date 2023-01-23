function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-knowledge-hub-knowledge-hub-module"], {
  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/items-list/items-list.component.html":
  /*!*******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/items-list/items-list.component.html ***!
    \*******************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesKnowledgeHubComponentsItemsListItemsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"items-list\">\n  <header *ngIf=\"item.data.length > 0\" class=\"heading-items\" [ngClass]=\"item.type\">\n    <label class=\"title-labels ws-mat-primary-text text-xl font-medium\">\n      <span class=\"countTypes\">{{ item.data.length }}</span>\n      <span> {{ item.headingText }}</span>\n    </label>\n  </header>\n  <footer class=\"items-collection\">\n    <ul>\n      <li [ngClass]=\"item.itemsMinShown == 6 ? 'items-box' : 'items-full-length'\" *ngFor=\"let str of item.data | slice: 0:showMoreLess.limit\">\n        <div *ngIf=\"str\">\n          <p *ngIf=\"item.type == 'contribution'\">\n            <a ng-if=\"str.id !== null\">{{ str?.title }}</a>\n            <!-- [routerLink]=\"'/app/infy/khub/view/project' + str?.id + '/PROMPT'\" -->\n          </p>\n          <p *ngIf=\"item.type == 'risk'\" title=\"Description : {{ str?.description }}\">\n            {{ str?.name }}\n          </p>\n          <p *ngIf=\"item.type == 'strategy' || item.type == 'tool'\">\n            {{ str?.name }}\n          </p>\n        </div>\n      </li>\n    </ul>\n\n    <div class=\"types\" *ngIf=\"item.data.length > item.itemsMinShown\" (click)=\"changeItemShow()\">\n      {{ showMoreLess.text }}\n    </div>\n  </footer>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/project-snapshot/project-snapshot.component.html":
  /*!*******************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/project-snapshot/project-snapshot.component.html ***!
    \*******************************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesKnowledgeHubComponentsProjectSnapshotProjectSnapshotComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<article class=\"project-snapshot-wrapper\">\n  <div class=\"heading-title\">\n    <div class=\"flex flex-wrapped\">\n      <span>\n        <span class=\"project-project-status\">\n          <span *ngIf=\"projectDetails.status === 'closed'\" [matTooltip]=\"'Project Status : Closed'\">\n            <span class=\"status-icon closed\"></span>\n          </span>\n          <span *ngIf=\"projectDetails.status === 'active'\" [matTooltip]=\"'Project Status : Active'\">\n            <span class=\"status-icon open\"></span>\n          </span>\n          <span\n            *ngIf=\"projectDetails.status === 'inactive'\"\n            [matTooltip]=\"'Project Status : Not Available'\"\n          >\n            <span class=\"status-icon not-available\"></span>\n          </span>\n          <span\n            *ngIf=\"projectDetails.status === 'archieved'\"\n            [matTooltip]=\"'Project Status : Archived'\"\n          >\n            <span class=\"status-icon archived\"></span>\n          </span>\n        </span>\n        &nbsp;\n        <b>{{ projectDetails.mstProjectName }}</b>\n      </span>\n      <!-- style=\"float:right;margin-top: 20px;\" -->\n      <!-- <span class=\"spacer\"></span> -->\n      <!-- <span style=\"margin-top: 20px;\" [matTooltip]=\"'Contract Type'\">\n        {{ projectDetails.mstContractType }}\n      </span> -->\n    </div>\n    <hr />\n    <div class=\"flex flex-wrapped\">\n      <span>PU : {{ projectDetails.puName }} </span>\n      <span class=\"spacer\"></span>\n      <span>BU : {{ projectDetails.ibuName }}</span>\n    </div>\n    <div>\n      <span i18n=\"view: Khub Project start date\">Start Date: </span>\n      {{ projectDetails.dateStartDate | date }}\n    </div>\n    <hr />\n    <!-- <p *ngIf=\"projectDetails.mstProjectScope.length > 0\">\n      <b><span i18n=\"tile: Khub tile Scope Label\">Project Scope</span></b\n      >: {{ projectDetails.mstProjectScope }}\n    </p> -->\n    <!-- [innerHtml]=\"projectDetails.mstProjectScope | safeHtml\" <b>Project Scope</b> : {{ projectDetails.mstProjectScope | safeHtml }} -->\n    <!-- <p\n      *ngIf=\"\n        projectDetails.mstProjectScope.length === 0 &&\n        projectDetails.mstInfyObjectives.length > 0\n      \"\n    >\n      <b\n        ><span i18n=\"tile: Khub tile Business Objective Label\"\n          >Infosys Objectives</span\n        ></b\n      >: {{ projectDetails.mstInfyObjectives }}\n    </p>\n    <p *ngIf=\"projectDetails.mstInfosysRole.length > 0\">\n      <b\n        ><span i18n=\"tile: Khub tile Business InfyRole Label\"\n          >Infosys Role</span\n        ></b\n      >: {{ projectDetails.mstInfosysRole }}\n    </p>\n    <p\n      *ngIf=\"\n        projectDetails.mstInfosysRole.length === 0 &&\n        projectDetails.mstBusinessContext.length > 0\n      \"\n    >\n      <b\n        ><span i18n=\"tile: Khub tile Business Context Label\"\n          >Business Context</span\n        ></b\n      >: {{ projectDetails.mstBusinessContext }}\n    </p> -->\n    <p\n      *ngIf=\"!islargeScreen\"\n      [matTooltip]=\"'This detail is currently available only on Infosys Network'\"\n      style=\"padding: 5px 0px 5px 0px;\"\n    >\n      <span i18n=\"view: Khub Project Elaborated details\"\n        >If you are on Infosys Network, Explore more about this project\n        <a href=\"{{ url }}\" target=\"_blank\" style=\"color:cadetblue;\">Here</a></span\n      >\n    </p>\n    <div\n      class=\"margin-top-s margin-top-xs flex flex-wrapped\"\n      *ngIf=\"projectDetails.pm.length > 0 || projectDetails.dm.length > 0\"\n    >\n      <div *ngIf=\"projectDetails.pm.length > 0\">\n        <span class=\"flex pm-dm-class\">\n          <!-- <app-user-image\n            class=\"user-profile-image\"\n            [email]=\"projectDetails.pm[0].mailId\"\n            [matTooltip]=\"'Project Manager'\"\n          ></app-user-image> -->\n          <span class=\"user-profile-image\">\n            <mat-icon class=\"user-icon\">person</mat-icon>\n          </span>\n          <div>\n            <span>{{ projectDetails.pm[0].name }}</span\n            ><br /><span i18n=\"view: Khub Project Manager Label\">Project Manager</span>\n          </div>\n        </span>\n      </div>\n      <div *ngIf=\"projectDetails.dm.length > 0\">\n        <span class=\"flex pm-dm-class\">\n          <!-- <app-user-image\n            class=\"user-profile-image\"\n            [email]=\"projectDetails.pm[0].mailId\"\n            [matTooltip]=\"'Project Manager'\"\n          ></app-user-image> -->\n          <span class=\"user-profile-image\">\n            <mat-icon class=\"user-icon\">person</mat-icon>\n          </span>\n          <div>\n            <span>{{ projectDetails.dm[0].name }}</span\n            ><br /><span i18n=\"view: Khub Delivery Manager Label\">Delivery Manager</span>\n          </div>\n        </span>\n      </div>\n    </div>\n    <div *ngFor=\"let item of toolsRisksContributions\">\n      <ws-app-infy-item-list [item]=\"item\"></ws-app-infy-item-list>\n    </div>\n  </div>\n</article>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/topic-tagger/topic-tagger.component.html":
  /*!***********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/topic-tagger/topic-tagger.component.html ***!
    \***********************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesKnowledgeHubComponentsTopicTaggerTopicTaggerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-card class=\"topic-tagger-wrapper\">\n  <mat-card-header class=\"topic-card-header\">\n    <!-- <p class=\"text-xl font-medium ws-mat-primary-text\">Tags</p> -->\n    <span class=\"mat-body-1\">\n      <span>This</span>\n      <span> {{ itemType }}</span>\n      <span> is tagged with</span>\n    </span>\n  </mat-card-header>\n  <mat-divider></mat-divider>\n  <mat-card-content class=\"topic-card-body flex flex-wrapped\">\n    <mat-form-field>\n      <mat-chip-list #chipList>\n        <mat-chip *ngFor=\"let selectedTag of selectedTags\" [selectable]=\"true\" [removable]=\"true\" (removed)=\"removeTag(selectedTag)\">\n          {{ selectedTag.name }}\n          <mat-icon matChipRemove>cancel</mat-icon>\n        </mat-chip>\n        <input *ngIf=\"selectedTags.length < 1\" i18n-placeholder placeholder=\"Add or Remove topics\" #tagsInput [formControl]=\"tagsCtrl\"\n          [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" />\n      </mat-chip-list>\n      <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selectTag($event)\">\n        <mat-option *ngIf=\"fetchTagsStatus === 'fetching'\">...</mat-option>\n        <mat-option *ngIf=\"fetchTagsStatus === 'error'\"> No tag found</mat-option>\n        <mat-option *ngFor=\"let filteredTag of autocompleteAllTags\" [value]=\"filteredTag\">\n          {{ filteredTag.name }}\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n    <button *ngIf=\"addTopic.topic.length\" (click)=\"addOrDeleteTopic('add', addTopic.topic)\" mat-button i18n=\"Add new tags\">\n      Add</button>\n    <br />\n    <mat-chip-list class=\"margin-top-s margin-top-xs my-2\">\n      <mat-chip *ngFor=\"let tag of topics | slice: 0:sliceValue\" [matTooltip]=\"tag\" (click)=\"addOrDeleteTopic('delete', tag)\">\n        <mat-icon (click)=\"addOrDeleteTopic('delete', tag)\" matChipRemove i18n=\"Remove from existing list\">cancel </mat-icon>{{ tag | pipeLimitTo: 24 }}\n      </mat-chip>\n    </mat-chip-list>\n    <button *ngIf=\"topics.length > showLimit && sliceValue !== topics.length\" (click)=\"showAll()\" mat-button i18n=\"Show all tags\">\n      All\n    </button>\n  </mat-card-content>\n</mat-card>\n<input type=\"hidden\" i18n-value value=\"Topic updated successfully\" #saved />\n<input type=\"hidden\" i18n-value value=\"Topic saved in the drafts\" #savedDraft />\n<input type=\"hidden\" i18n-value value=\"Topic published successfully\" #publish />\n<input type=\"hidden\" i18n-value value=\"Topic already added\" #duplicate />\n<input type=\"hidden\" i18n-value value=\"You can add tag from dropdown only\" #invalidTag />\n<input type=\"hidden\" i18n-value value=\"Unable to save. Please retry\" #error />";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/routes/khub-home/khub-home.component.html":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/routes/khub-home/khub-home.component.html ***!
    \*************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesKnowledgeHubRoutesKhubHomeKhubHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-toolbar id=\"khubHome-id-12\" [color]=\"pageNavbar.color\" [ngStyle]=\"pageNavbar?.styles\">\n  <ws-widget-btn-page-back [widgetData]=\"{ url: 'back' }\"></ws-widget-btn-page-back>\n  <span i18n=\"page title: Khub home\" class=\"margin-left-xs\">Knowledge Hub</span>\n  <span class=\"spacer\"></span>\n</mat-toolbar>\n<!-- <div class=\"text-center note-text\">\n  <span>Submit your knowledge artifacts </span>\n</div> -->\n<!-- <div\n  class=\"note-text\"\n  style=\"position: absolute;top: 70%;\"\n  [matTooltip]=\"'This detail is currently available only on Infosys Network'\"\n>\n  <span>Visit KShop classic </span\n  ><a\n    href=\"http://iscls4apps/MyKshop/ASPX/MyKshopAllHomePage.aspx\"\n    target=\"_blank\"\n    style=\"color:cadetblue;\"\n    >Here</a\n  >\n</div> -->\n<div *ngIf=\"loader\" class=\"margin-top-m flex flex-center\">\n  <mat-spinner></mat-spinner>\n  <!-- <h3>Loading...</h3> -->\n</div>\n<div class=\"scroller-dev\" *ngFor=\"let data of resultObj\">\n  <h1 class=\"mat-h1\">{{ data.title }}</h1>\n  <ws-utils-horizontal-scroller [loadStatus]=\"'done'\">\n    <ws-app-item-tile class=\"card-display\" *ngFor=\"let item of data.data\" [data]=\"item\">\n    </ws-app-item-tile>\n  </ws-utils-horizontal-scroller>\n</div>\n<div *ngIf=\"error.load\" class=\"flex flex-center\">\n  <!-- <page-error-internal-server></page-error-internal-server> -->\n  <!-- <h3>Some Error Occured</h3> -->\n  <ng-container [wsResolverWidget]=\"errorWidget\"> </ng-container>\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/routes/khub-view/khub-view.component.html":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/routes/khub-view/khub-view.component.html ***!
    \*************************************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsProjectWsAppSrcLibRoutesInfyRoutesKnowledgeHubRoutesKhubViewKhubViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-toolbar id=\"khubHome-id-12\" [color]=\"pageNavbar.color\" [ngStyle]=\"pageNavbar?.styles\" class=\"mt-6\">\n  <ws-widget-btn-page-back [widgetData]=\"{ url: 'back' }\"></ws-widget-btn-page-back>\n  <span class=\"margin-left-xs\">{{ sObject.category | titlecase }}</span>\n  <span class=\"spacer\"></span>\n</mat-toolbar>\n<!-- <ws-spinner *ngIf=\"loader\"></ws-spinner> -->\n<div *ngIf=\"loader\" class=\"margin-top-m flex flex-center\">\n  <mat-spinner></mat-spinner>\n  <!-- <h3>Loading...</h3> -->\n</div>\n<article class=\"flex flex-wrapped flex-center khub-view-wrapper\" *ngIf=\"!loader && !error.load\">\n  <section class=\"first-section\">\n    <!-- *appFixedTop -->\n    <div *ngIf=\"viewData.source !== 'PROMT'\">\n      <div>\n        <span class=\"text-{{ viewData?.source?.toLowerCase() }}\" style=\"float:left;\">\n          <b>{{ viewData.source }}</b>\n        </span>\n        <br />\n        <span>\n          {{ viewData.dateCreated | date }}\n        </span>\n      </div>\n      <br />\n      <h2 class=\"\">\n        <b>{{ viewData.title }}</b>\n      </h2>\n      <ng-container>\n        <p *ngIf=\"viewData?.description\">\n          {{ viewData.description }}\n        </p>\n      </ng-container>\n      <div class=\"flex flex-wrapped\">\n        <span class=\"margin-top-s margin-top-xs flex\" *ngFor=\"let author of viewData.author\">\n          <!-- <app-user-image\n                            class=\"user-profile-image\"\n                            [email]=\"viewData.author[0].mailId\"\n                          ></app-user-image> -->\n          <!-- <ws-widget-user-image class=\"author-image\"></ws-widget-user-image> -->\n          <span class=\"user-profile-image\">\n            <mat-icon class=\"user-icon\">person</mat-icon>\n          </span>\n          <span style=\"margin-top: 15px;\">{{ author.name }}</span>\n        </span>\n      </div>\n      <p *ngIf=\"viewData?.url?.length > 0 && !screenSizeIsLtMedium && !hasInternetUrl\">\n        <span i18n>You can access it </span>\n        <a style=\"color:cadetblue;\" href=\"{{ viewData.url }}\" target=\"_blank\">\n          <b i18n>Here</b>\n        </a>\n        <br />\n        <!-- <span i18n=\"message saying it will soon be available\"\n          >You can soon access this and many other artifacts from anywhere, any\n          time</span\n        > -->\n      </p>\n      <!-- <p *ngIf=\"viewData?.url?.length > 0 && hasInternetUrl\">\n        <span i18n=\"message saying the url link\">You can access it </span>\n        <a style=\"color:cadetblue;\" [routerLink]=\"'/viewer/' + url\"><b>Here</b></a>\n        <br />\n      </p> -->\n      <p *ngIf=\"viewData?.url?.length > 0 && !hasInternetUrl\" i18n=\"message saying content available in intranet\">\n        This artifact is currently available only on Infosys Network. You can soon access this and many other artifacts from anywhere,\n        any time.\n        <br />\n      </p>\n      <!-- <iframe *ngIf=\"hasInternetUrl\" [src]=\"url\" width=\"100%\" height=\"600px\" style=\"background-color: white;\"></iframe> -->\n    </div>\n    <div *ngIf=\"viewData.source === 'PROMT'\" class=\"mt-4\">\n      <ws-app-infy-project-snapshot [projectDetails]=\"projectResult\" [isIntranet]=\"true\" [islargeScreen]=\"screenSizeIsLtMedium\"></ws-app-infy-project-snapshot>\n    </div>\n  </section>\n  <!--SIDEBAR-->\n  <section *ngIf=\"!loader\" class=\"second-section flex flex-wrapped\">\n    <ws-app-infy-topic-tagger style=\"width:100%\" [itemType]=\"viewData?.itemType\" [topics]=\"viewData.topics\" [showLimit]=\"3\" [itemId]=\"viewData?.itemId\"></ws-app-infy-topic-tagger>\n    <!-- <ws-spinner *ngIf=\"!recsStatus\"></ws-spinner> -->\n    <mat-spinner *ngIf=\"!recsStatus\"></mat-spinner>\n    <div>\n      <h3 *ngIf=\"recsStatus && moreRecs.length > 0\" style=\"margin-top: 10px;\">\n        <span i18n=\"Label for showing morelike Recommendations\">Explore Similar</span>\n        {{ sObject.category }}s\n      </h3>\n      <div *ngIf=\"recsStatus && !screenSizeIsLtMedium\">\n        <section *ngFor=\"let tile of moreRecs | slice: 0:5; index as i\" style=\"margin-bottom:15px;\">\n          <ws-app-item-tile [data]=\"tile\"></ws-app-item-tile>\n        </section>\n      </div>\n      <div class=\"scrolling-wrapper\" *ngIf=\"recsStatus && screenSizeIsLtMedium\">\n        <div class=\"card\" *ngFor=\"let tile of moreRecs\" style=\"display:inline-flex;margin-right: 20px;\">\n          <!-- <ws-app-search-item-tile [data]=\"tile\"></ws-app-search-item-tile> -->\n        </div>\n      </div>\n    </div>\n  </section>\n</article>\n<div *ngIf=\"error.load\">\n  <ng-container [wsResolverWidget]=\"errorWidget\"> </ng-container>\n</div>";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/items-list/items-list.component.scss":
  /*!*****************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/items-list/items-list.component.scss ***!
    \*****************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesKnowledgeHubComponentsItemsListItemsListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".items-list {\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n.items-list .items-collection .items-box {\n  display: inline-block;\n  width: 32.5%;\n  height: 65px;\n}\n.items-list .items-collection .items-box p {\n  text-align: initial;\n}\n.items-list .items-collection .types {\n  margin-left: 84%;\n  margin-top: 5px;\n  cursor: pointer;\n  color: #1976d2;\n}\n.items-list .items-collection .items-full-length {\n  vertical-align: top;\n  font-size: 15px;\n  color: black;\n}\n.items-list .heading-items {\n  padding-top: 6px;\n  padding-left: 7px;\n  padding-bottom: 6px;\n  border-radius: 2px;\n}\n.items-list .heading-items .title-labels {\n  color: white;\n  font-weight: 600;\n}\n.items-list .heading-items .title-labels .countTypes {\n  font-family: Segoe UI, Arial, sans-serif;\n}\n.items-list .innovate {\n  border: 1px solid #4caf50;\n  background-color: #4caf50;\n}\n.items-list .risk {\n  border: 1px solid rgba(165, 175, 76, 0.63);\n  background-color: rgba(165, 175, 76, 0.63);\n}\n.items-list .strategy {\n  border: 1px solid #4a5cbf;\n  background-color: #4a5cbf;\n}\n.items-list .yammer {\n  background-color: salmon;\n  border: 1px solid salmon;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9rbm93bGVkZ2UtaHViL2NvbXBvbmVudHMvaXRlbXMtbGlzdC9pdGVtcy1saXN0LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMva25vd2xlZGdlLWh1Yi9jb21wb25lbnRzL2l0ZW1zLWxpc3QvaXRlbXMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQTtFQUVFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNiRjtBRGVJO0VBQ0UscUJBQUE7RUFLQSxZQUFBO0VBQ0EsWUFBQTtBQ2pCTjtBRG1CTTtFQUNFLG1CQUFBO0FDakJSO0FEb0JJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBN0J1QjtBQ1c3QjtBRG9CSTtFQUNFLG1CQUFBO0VBS0EsZUFBQTtFQUNBLFlBQUE7QUN0Qk47QUR5QkU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ3ZCSjtBRHdCSTtFQUNFLFlBekNRO0VBMENSLGdCQUFBO0FDdEJOO0FEdUJNO0VBRUUsd0NBQUE7QUN0QlI7QUQwQkU7RUFDRSx5QkFBQTtFQUNBLHlCQXZEdUI7QUMrQjNCO0FEOEJFO0VBQ0UsMENBQUE7RUFDQSwwQ0E5RDZCO0FDa0NqQztBRDhCRTtFQUNFLHlCQUFBO0VBQ0EseUJBakVpQjtBQ3FDckI7QURrQ0U7RUFDRSx3QkFBQTtFQUNBLHdCQUFBO0FDaENKIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL2tub3dsZWRnZS1odWIvY29tcG9uZW50cy9pdGVtcy1saXN0L2l0ZW1zLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvX3dzLWNvbW1vbi5zY3NzJztcbkBpbXBvcnQgJ3N0eWxlcy9fd3MtdmFycy5zY3NzJztcbkBpbXBvcnQgJ3N0eWxlcy9fd3MtbWl4aW5zLnNjc3MnO1xuLy8gQGltcG9ydCAnd3MtYW5pbWF0aW9uJztcbiRjb2xvci10aGluLWdyYXk6ICNkOGQ4ZDg7XG4kY29sb3ItY2RnLWxpZ2h0ZXN0LWdyYXk6ICNmNWY1ZjU7XG4kY29sb3ItcHJpbWFyeS1za3libHVlLWRhcms6ICMxOTc2ZDI7XG4kY29sb3ItcHJpbWFyeS1kYXJrZ3JlZW46ICMyYzgwNmY7XG4kY29sb3ItcHJpbWFyeS1saWdodGdyZWVuOiAjNGNhZjUwO1xuJGNvbG9yLXByaW1hcnktbGlnaHRncmVlbi1saWdodDogcmdiYSgxNjUsIDE3NSwgNzYsIDAuNjMpO1xuJGNvbG9yLWNkZy10YWctYmx1ZTogIzRhNWNiZjtcbiRjb2xvci1jZGctdG9vbDogIzI4YTliMjtcbiRjb2xvci13aGl0ZTogd2hpdGU7XG4uaXRlbXMtbGlzdCB7XG4gIC8vIHBhZGRpbmc6IDEwcHggNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICAuaXRlbXMtY29sbGVjdGlvbiB7XG4gICAgLml0ZW1zLWJveCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItdGhpbi1ncmF5O1xuICAgICAgLy8gdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIC8vIG1hcmdpbjogNHB4IDFweCAxcHggNHB4O1xuICAgICAgLy8gcGFkZGluZzogMTVweCAxNHB4O1xuICAgICAgd2lkdGg6IDMyLjUlO1xuICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWNkZy1saWdodGVzdC1ncmF5O1xuICAgICAgcCB7XG4gICAgICAgIHRleHQtYWxpZ246IGluaXRpYWw7XG4gICAgICB9XG4gICAgfVxuICAgIC50eXBlcyB7XG4gICAgICBtYXJnaW4tbGVmdDogODQlO1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5LXNreWJsdWUtZGFyaztcbiAgICB9XG4gICAgLml0ZW1zLWZ1bGwtbGVuZ3RoIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItdGhpbi1ncmF5O1xuICAgICAgLy8gbWFyZ2luOiA0cHggMXB4IDFweCA0cHg7XG4gICAgICAvLyBwYWRkaW5nOiAxMHB4O1xuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWNkZy1saWdodGVzdC1ncmF5O1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgfVxuICAuaGVhZGluZy1pdGVtcyB7XG4gICAgcGFkZGluZy10b3A6IDZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAudGl0bGUtbGFiZWxzIHtcbiAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgLmNvdW50VHlwZXMge1xuICAgICAgICAvLyBAaW5jbHVkZSBmb250LXNpemUoMTZweCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBTZWdvZSBVSSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5pbm5vdmF0ZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXByaW1hcnktbGlnaHRncmVlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeS1saWdodGdyZWVuO1xuICB9XG4gIC8vIC5jb250cmlidXRpb24ge1xuICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5LWRhcmtncmVlbjtcbiAgLy8gICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItcHJpbWFyeS1kYXJrZ3JlZW47XG4gIC8vIH1cbiAgLnJpc2sge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1wcmltYXJ5LWxpZ2h0Z3JlZW4tbGlnaHQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnktbGlnaHRncmVlbi1saWdodDtcbiAgfVxuICAuc3RyYXRlZ3kge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1jZGctdGFnLWJsdWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWNkZy10YWctYmx1ZTtcbiAgfVxuICAvLyAudG9vbCB7XG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWNkZy10b29sO1xuICAvLyAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1jZGctdG9vbDtcbiAgLy8gfVxuICAueWFtbWVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzYWxtb247XG4gICAgYm9yZGVyOiAxcHggc29saWQgc2FsbW9uO1xuICB9XG59XG4iLCIuaXRlbXMtbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uaXRlbXMtbGlzdCAuaXRlbXMtY29sbGVjdGlvbiAuaXRlbXMtYm94IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzIuNSU7XG4gIGhlaWdodDogNjVweDtcbn1cbi5pdGVtcy1saXN0IC5pdGVtcy1jb2xsZWN0aW9uIC5pdGVtcy1ib3ggcCB7XG4gIHRleHQtYWxpZ246IGluaXRpYWw7XG59XG4uaXRlbXMtbGlzdCAuaXRlbXMtY29sbGVjdGlvbiAudHlwZXMge1xuICBtYXJnaW4tbGVmdDogODQlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMxOTc2ZDI7XG59XG4uaXRlbXMtbGlzdCAuaXRlbXMtY29sbGVjdGlvbiAuaXRlbXMtZnVsbC1sZW5ndGgge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5pdGVtcy1saXN0IC5oZWFkaW5nLWl0ZW1zIHtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5pdGVtcy1saXN0IC5oZWFkaW5nLWl0ZW1zIC50aXRsZS1sYWJlbHMge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaXRlbXMtbGlzdCAuaGVhZGluZy1pdGVtcyAudGl0bGUtbGFiZWxzIC5jb3VudFR5cGVzIHtcbiAgZm9udC1mYW1pbHk6IFNlZ29lIFVJLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbi5pdGVtcy1saXN0IC5pbm5vdmF0ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0Y2FmNTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG59XG4uaXRlbXMtbGlzdCAucmlzayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTY1LCAxNzUsIDc2LCAwLjYzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsIDE3NSwgNzYsIDAuNjMpO1xufVxuLml0ZW1zLWxpc3QgLnN0cmF0ZWd5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRhNWNiZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNWNiZjtcbn1cbi5pdGVtcy1saXN0IC55YW1tZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzYWxtb247XG4gIGJvcmRlcjogMXB4IHNvbGlkIHNhbG1vbjtcbn0iXX0= */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/items-list/items-list.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/items-list/items-list.component.ts ***!
    \***************************************************************************************************************/
  /*! exports provided: ItemsListComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesKnowledgeHubComponentsItemsListItemsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ItemsListComponent", function () {
      return ItemsListComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var ItemsListComponent = /*#__PURE__*/function () {
      function ItemsListComponent() {
        _classCallCheck(this, ItemsListComponent);
        this.item = {};
        this.showMoreLess = {
          initial: true,
          text: 'Show More...',
          limit: 0
        };
      }
      _createClass(ItemsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showMoreLess.limit = this.item.itemsMinShown;
        }
      }, {
        key: "changeItemShow",
        value: function changeItemShow() {
          try {
            this.showMoreLess.initial = !this.showMoreLess.initial;
            this.showMoreLess.text = this.showMoreLess.initial ? 'Show More...' : 'Show Less';
            this.showMoreLess.limit = this.showMoreLess.initial ? this.item.itemsMinShown : this.item.data.length;
          } catch (e) {
            throw e;
          }
        }
      }]);
      return ItemsListComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ItemsListComponent.prototype, "item", void 0);
    ItemsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-infy-item-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./items-list.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/items-list/items-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./items-list.component.scss */"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/items-list/items-list.component.scss"))["default"]]
    })], ItemsListComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/project-snapshot/project-snapshot.component.scss":
  /*!*****************************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/project-snapshot/project-snapshot.component.scss ***!
    \*****************************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesKnowledgeHubComponentsProjectSnapshotProjectSnapshotComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".project-snapshot-wrapper hr {\n  width: 100%;\n}\n.project-snapshot-wrapper p {\n  overflow-wrap: break-word;\n  line-height: 1.5;\n  font-size: 1.5em;\n}\n.project-snapshot-wrapper .heading-title .project-project-status {\n  display: inline-block;\n  width: 14px;\n}\n.project-snapshot-wrapper .heading-title .project-project-status .status-icon {\n  height: 15px;\n  width: 15px;\n}\n.project-snapshot-wrapper .heading-title .project-project-status .status-icon.open::before {\n  background-color: #4caf50;\n}\n.project-snapshot-wrapper .heading-title .project-project-status .status-icon.closed::before {\n  background-color: #f44336;\n}\n.project-snapshot-wrapper .heading-title .project-project-status .status-icon.archived::before {\n  background-color: #795548;\n}\n.project-snapshot-wrapper .heading-title .project-project-status .status-icon.not-available::before {\n  background-color: #a5a5a5;\n}\n.project-snapshot-wrapper .heading-title .project-project-status span:before {\n  content: \"\";\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n}\n.project-snapshot-wrapper .heading-title .user-profile-image {\n  margin: 0px 10px 0px 0px;\n  width: 60px;\n  height: 60px;\n  font-size: 60px;\n  display: block;\n}\n.project-snapshot-wrapper .heading-title .pm-dm-class {\n  width: 100%;\n  padding: 0px 10px;\n}\n.project-snapshot-wrapper .user-image {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n.project-snapshot-wrapper .user-icon {\n  font-size: 1em;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9rbm93bGVkZ2UtaHViL2NvbXBvbmVudHMvcHJvamVjdC1zbmFwc2hvdC9wcm9qZWN0LXNuYXBzaG90LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMva25vd2xlZGdlLWh1Yi9jb21wb25lbnRzL3Byb2plY3Qtc25hcHNob3QvcHJvamVjdC1zbmFwc2hvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLRTtFQUNFLFdBQUE7QUNKSjtBRE1FO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSko7QURPSTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ0xOO0FETU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0pSO0FETVU7RUFDRSx5QkFBQTtBQ0paO0FEUVU7RUFDRSx5QkFBQTtBQ05aO0FEVVU7RUFDRSx5QkFBQTtBQ1JaO0FEWVU7RUFDRSx5QkFBQTtBQ1ZaO0FEY007RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1pSO0FEZUk7RUFFRSx3QkFBQTtFQUNBLFdBRlk7RUFHWixZQUhZO0VBSVosZUFKWTtFQUtaLGNBQUE7QUNkTjtBRGdCSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ2ROO0FEbUJFO0VBQ0UsV0FIVTtFQUlWLFlBSlU7RUFLVixrQkFBQTtBQ2pCSjtBRG9CRTtFQU9FLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ3hCSiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9rbm93bGVkZ2UtaHViL2NvbXBvbmVudHMvcHJvamVjdC1zbmFwc2hvdC9wcm9qZWN0LXNuYXBzaG90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy1jb21tb24uc2Nzcyc7XG5AaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5AaW1wb3J0ICdzdHlsZXMvX3dzLW1peGlucy5zY3NzJztcbiRjb2xvci1jZGctcHJvamVjdDogI2U5NGE0ODtcbi5wcm9qZWN0LXNuYXBzaG90LXdyYXBwZXIge1xuICBociB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgcCB7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gIH1cbiAgLmhlYWRpbmctdGl0bGUge1xuICAgIC5wcm9qZWN0LXByb2plY3Qtc3RhdHVzIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgLnN0YXR1cy1pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgJi5vcGVuIHtcbiAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5jbG9zZWQge1xuICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmFyY2hpdmVkIHtcbiAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTU0ODtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5ub3QtYXZhaWxhYmxlIHtcbiAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E1YTVhNTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNwYW46YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnVzZXItcHJvZmlsZS1pbWFnZSB7XG4gICAgICAkdXNlci1zaXplOiA2MHB4O1xuICAgICAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xuICAgICAgd2lkdGg6ICR1c2VyLXNpemU7XG4gICAgICBoZWlnaHQ6ICR1c2VyLXNpemU7XG4gICAgICBmb250LXNpemU6ICR1c2VyLXNpemU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLnBtLWRtLWNsYXNzIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgfVxuICB9XG4gICR1c2VyLXNpemU6IDEwMCU7XG5cbiAgLnVzZXItaW1hZ2Uge1xuICAgIHdpZHRoOiAkdXNlci1zaXplO1xuICAgIGhlaWdodDogJHVzZXItc2l6ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAudXNlci1pY29uIHtcbiAgICAvLyBmb250LXNpemU6IDQwcHg7XG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vIHRvcDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgICAvLyBsZWZ0OiBjYWxjKDUwJSAtIDIwcHgpO1xuICAgIC8vIHdpZHRoOiA0MHB4O1xuICAgIC8vIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbiIsIi5wcm9qZWN0LXNuYXBzaG90LXdyYXBwZXIgaHIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9qZWN0LXNuYXBzaG90LXdyYXBwZXIgcCB7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG4ucHJvamVjdC1zbmFwc2hvdC13cmFwcGVyIC5oZWFkaW5nLXRpdGxlIC5wcm9qZWN0LXByb2plY3Qtc3RhdHVzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTRweDtcbn1cbi5wcm9qZWN0LXNuYXBzaG90LXdyYXBwZXIgLmhlYWRpbmctdGl0bGUgLnByb2plY3QtcHJvamVjdC1zdGF0dXMgLnN0YXR1cy1pY29uIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbn1cbi5wcm9qZWN0LXNuYXBzaG90LXdyYXBwZXIgLmhlYWRpbmctdGl0bGUgLnByb2plY3QtcHJvamVjdC1zdGF0dXMgLnN0YXR1cy1pY29uLm9wZW46OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG59XG4ucHJvamVjdC1zbmFwc2hvdC13cmFwcGVyIC5oZWFkaW5nLXRpdGxlIC5wcm9qZWN0LXByb2plY3Qtc3RhdHVzIC5zdGF0dXMtaWNvbi5jbG9zZWQ6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG4ucHJvamVjdC1zbmFwc2hvdC13cmFwcGVyIC5oZWFkaW5nLXRpdGxlIC5wcm9qZWN0LXByb2plY3Qtc3RhdHVzIC5zdGF0dXMtaWNvbi5hcmNoaXZlZDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTU0ODtcbn1cbi5wcm9qZWN0LXNuYXBzaG90LXdyYXBwZXIgLmhlYWRpbmctdGl0bGUgLnByb2plY3QtcHJvamVjdC1zdGF0dXMgLnN0YXR1cy1pY29uLm5vdC1hdmFpbGFibGU6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNWE1YTU7XG59XG4ucHJvamVjdC1zbmFwc2hvdC13cmFwcGVyIC5oZWFkaW5nLXRpdGxlIC5wcm9qZWN0LXByb2plY3Qtc3RhdHVzIHNwYW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xufVxuLnByb2plY3Qtc25hcHNob3Qtd3JhcHBlciAuaGVhZGluZy10aXRsZSAudXNlci1wcm9maWxlLWltYWdlIHtcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDYwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnByb2plY3Qtc25hcHNob3Qtd3JhcHBlciAuaGVhZGluZy10aXRsZSAucG0tZG0tY2xhc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG59XG4ucHJvamVjdC1zbmFwc2hvdC13cmFwcGVyIC51c2VyLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnByb2plY3Qtc25hcHNob3Qtd3JhcHBlciAudXNlci1pY29uIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/project-snapshot/project-snapshot.component.ts":
  /*!***************************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/project-snapshot/project-snapshot.component.ts ***!
    \***************************************************************************************************************************/
  /*! exports provided: ProjectSnapshotComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesKnowledgeHubComponentsProjectSnapshotProjectSnapshotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProjectSnapshotComponent", function () {
      return ProjectSnapshotComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var ProjectSnapshotComponent = /*#__PURE__*/function () {
      function ProjectSnapshotComponent() {
        _classCallCheck(this, ProjectSnapshotComponent);
        this.projectDetails = {};
        this.isIntranet = null;
        this.islargeScreen = null;
        this.url = '';
        this.toolsRisksContributions = [];
      }
      _createClass(ProjectSnapshotComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.url = "http://localhost:6789/view?source=promt&type=project&itemId=".concat(this.projectDetails.itemId, "&ref=home");
          this.projectDetails.mstBusinessContext = this.projectDetails.mstBusinessContext === null ? '' : this.projectDetails.mstBusinessContext;
          this.projectDetails.mstInfosysRole = this.projectDetails.mstInfosysRole === null ? '' : this.projectDetails.mstInfosysRole;
          this.projectDetails.mstInfyObjectives = this.projectDetails.mstInfyObjectives === null ? '' : this.projectDetails.mstInfyObjectives;
          this.projectDetails.mstProjectScope = this.projectDetails.mstProjectScope === null ? '' : this.projectDetails.mstProjectScope;
          this.projectDetails.risks.map(function (arr) {
            if (arr.name === 'NA') {
              arr.description = arr.description.length > 50 ? "".concat(arr.description.substring(0, 50), "...") : arr.description;
              arr.name = "Risk - ".concat(arr.id, " : a").concat(arr.description);
            }
          });
          this.projectDetails.tools = this.projectDetails.tools.filter(function (tool) {
            return tool.name !== null;
          });
          this.projectDetails.strategies = this.projectDetails.strategies.filter(function (strategy) {
            return strategy.name !== null;
          });
          var str = this.projectDetails.contributions.length > 1 ? 's' : '';
          var str1 = this.projectDetails.tools.length > 1 ? 's' : '';
          this.toolsRisksContributions = [{
            data: this.projectDetails.contributions,
            type: 'contribution',
            itemsMinShown: 3,
            headingText: "Contribution".concat(str)
          },
          // {
          //   data: this.projectDetails.risks,
          //   type: 'risk',
          //   itemsMinShown: 3,
          //   headingText:
          //     'References of Risk' +
          //     (this.projectDetails.risks.length > 1 ? 's' : '')
          // },
          // {
          //   data: this.projectDetails.strategies,
          //   type: 'strategy',
          //   itemsMinShown: 3,
          //   headingText:
          //     'Strateg' +
          //     (this.projectDetails.strategies.length > 1 ? 'ies' : 'y') +
          //     ' implemented'
          // },
          {
            data: this.projectDetails.tools,
            type: 'tool',
            itemsMinShown: 3,
            headingText: "Innovation".concat(str1)
          }];
        }
      }]);
      return ProjectSnapshotComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProjectSnapshotComponent.prototype, "projectDetails", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProjectSnapshotComponent.prototype, "isIntranet", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProjectSnapshotComponent.prototype, "islargeScreen", void 0);
    ProjectSnapshotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-infy-project-snapshot',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./project-snapshot.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/project-snapshot/project-snapshot.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./project-snapshot.component.scss */"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/project-snapshot/project-snapshot.component.scss"))["default"]]
    })], ProjectSnapshotComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/topic-tagger/topic-tagger.component.scss":
  /*!*********************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/topic-tagger/topic-tagger.component.scss ***!
    \*********************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesKnowledgeHubComponentsTopicTaggerTopicTaggerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".topic-tagger-wrapper {\n  width: 91%;\n  min-width: 255px;\n  padding: 5px;\n}\n@media only screen and (max-width: 599px) {\n  .topic-tagger-wrapper {\n    width: 94%;\n    margin: 3%;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 959px) {\n  .topic-tagger-wrapper {\n    width: 90%;\n    margin: 3%;\n  }\n}\n.topic-tagger-wrapper .topic-card-header {\n  padding-top: 2%;\n  padding-bottom: 2%;\n  margin: 0 -18px;\n}\n.topic-tagger-wrapper .topic-card-body {\n  width: 90%;\n  margin: 1% 5% 1% 5%;\n}\n.topic-tagger-wrapper .mat-standard-chip.mat-chip-with-trailing-icon {\n  padding-left: 0px;\n}\n.topic-tagger-wrapper .example-form {\n  min-width: 150px;\n  max-width: 80%;\n  width: 100%;\n}\n.topic-tagger-wrapper .example-full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9rbm93bGVkZ2UtaHViL2NvbXBvbmVudHMvdG9waWMtdGFnZ2VyL3RvcGljLXRhZ2dlci5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL2luZnkvcm91dGVzL2tub3dsZWRnZS1odWIvY29tcG9uZW50cy90b3BpYy10YWdnZXIvdG9waWMtdGFnZ2VyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc29uYXNoYWp1L1ZpZGVvcy9zcGhlcmUtbW9iaWxlL3N0eWxlcy9fd3MtbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDREY7QUNlRTtFRmpCRjtJQUtJLFVBQUE7SUFDQSxVQUFBO0VDQ0Y7QUFDRjtBQ2NFO0VGdEJGO0lBU0ksVUFBQTtJQUNBLFVBQUE7RUNHRjtBQUNGO0FERkU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDSUo7QURGRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQ0lKO0FERkU7RUFDRSxpQkFBQTtBQ0lKO0FERkU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDSUo7QURERTtFQUNFLFdBQUE7QUNHSiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9rbm93bGVkZ2UtaHViL2NvbXBvbmVudHMvdG9waWMtdGFnZ2VyL3RvcGljLXRhZ2dlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy9fd3MtY29tbW9uLnNjc3MnO1xuQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuLnRvcGljLXRhZ2dlci13cmFwcGVyIHtcbiAgd2lkdGg6IDkxJTtcbiAgbWluLXdpZHRoOiAyNTVweDtcbiAgcGFkZGluZzogNXB4O1xuICBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgICB3aWR0aDogOTQlO1xuICAgIG1hcmdpbjogMyU7XG4gIH1cbiAgQGluY2x1ZGUgYnJlYWtwb2ludC1zIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMyU7XG4gIH1cbiAgLnRvcGljLWNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xuICAgIG1hcmdpbjogMCAtMThweDtcbiAgfVxuICAudG9waWMtY2FyZC1ib2R5IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMSUgNSUgMSUgNSU7XG4gIH1cbiAgLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXdpdGgtdHJhaWxpbmctaWNvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH1cbiAgLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iLCIudG9waWMtdGFnZ2VyLXdyYXBwZXIge1xuICB3aWR0aDogOTElO1xuICBtaW4td2lkdGg6IDI1NXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC50b3BpYy10YWdnZXItd3JhcHBlciB7XG4gICAgd2lkdGg6IDk0JTtcbiAgICBtYXJnaW46IDMlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgLnRvcGljLXRhZ2dlci13cmFwcGVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMyU7XG4gIH1cbn1cbi50b3BpYy10YWdnZXItd3JhcHBlciAudG9waWMtY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIHBhZGRpbmctYm90dG9tOiAyJTtcbiAgbWFyZ2luOiAwIC0xOHB4O1xufVxuLnRvcGljLXRhZ2dlci13cmFwcGVyIC50b3BpYy1jYXJkLWJvZHkge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDElIDUlIDElIDUlO1xufVxuLnRvcGljLXRhZ2dlci13cmFwcGVyIC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC13aXRoLXRyYWlsaW5nLWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cbi50b3BpYy10YWdnZXItd3JhcHBlciAuZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvcGljLXRhZ2dlci13cmFwcGVyIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn0iLCJAaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5cbkBtaXhpbiByZXRpbmEge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBwcmludCB7XG4gIEBtZWRpYSBvbmx5IHByaW50IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gYnJlYWtwb2ludC14cyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQteGwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkgYW5kIChtYXgtd2lkdGg6IDUwMDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQteGwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC14cyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtbSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/topic-tagger/topic-tagger.component.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/topic-tagger/topic-tagger.component.ts ***!
    \*******************************************************************************************************************/
  /*! exports provided: TopicTaggerComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesKnowledgeHubComponentsTopicTaggerTopicTaggerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TopicTaggerComponent", function () {
      return TopicTaggerComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/cdk/keycodes */"./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _services_knowledge_hub_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../services/knowledge-hub.service */"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/services/knowledge-hub.service.ts");

    // import { WsSocialService } from '../../../../../social/services/ws-social.service';
    var TopicTaggerComponent = /*#__PURE__*/function () {
      function TopicTaggerComponent(
      // private socialSvc: WsSocialService,
      matSnackBar,
      // private authSvc: Se,
      khubServ) {
        var _this = this;
        _classCallCheck(this, TopicTaggerComponent);
        this.matSnackBar = matSnackBar;
        this.khubServ = khubServ;
        this.itemType = '';
        this.topics = [];
        this.showLimit = 0;
        this.itemId = '';
        this.missingTopic = '';
        this.sliceValue = 0;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
        this.tagsCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.selectedTags = [];
        this.autocompleteAllTags = [];
        this.fetchTagsStatus = 'none';
        this.addTopic = {
          item: this.itemId,
          topic: '',
          user: '',
          action: 'add'
        };
        this.deleteTopic = {
          item: this.itemId,
          topic: '',
          user: '',
          action: 'delete'
        };
        this.respo = {};
        this.tagsInput = null;
        this.matAutocomplete = null;
        this.tagsCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])()).subscribe(function (value) {
          if (value && value.length) {
            _this.autocompleteAllTags = [];
            _this.fetchTagsStatus = 'fetching';
            // this.socialSvc.fetchAutoComplete(value).subscribe(
            //   (tags: IWsKhubPostTag[]) => {
            //     this.autocompleteAllTags = tags || []
            //     if (tags.length === 0) {
            //       this.addTopic.topic = value
            //     }
            //     this.fetchTagsStatus = 'done'
            //   },
            //   () => {
            //     this.fetchTagsStatus = 'error'
            //   },
            // )
            // this.autocompleteAllTags = []
          }
        });
      }
      _createClass(TopicTaggerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.itemType === '' || this.itemType === undefined) {
            this.itemType = 'Project';
          }
          this.sliceValue = this.showLimit ? this.showLimit : 3;
        }
      }, {
        key: "showAll",
        value: function showAll() {
          try {
            this.sliceValue = this.topics.length;
          } catch (e) {
            throw e;
          }
        }
      }, {
        key: "removeTag",
        value: function removeTag(tag) {
          var index = this.selectedTags.findIndex(function (pTag) {
            return pTag.id === tag.id;
          });
          if (index >= 0) {
            this.selectedTags.splice(index, 1);
          }
        }
      }, {
        key: "selectTag",
        value: function selectTag(event) {
          this.selectedTags.push(event.option.value);
          this.addTopic.topic = event.option.value.name;
          // this.tagsInput.nativeElement.value = ''
          this.tagsCtrl.setValue(null);
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar(message) {
          this.matSnackBar.open(message);
        }
      }, {
        key: "addOrDeleteTopic",
        value: function addOrDeleteTopic(type, topic) {
          var _this2 = this;
          try {
            if (type === 'add') {
              this.addTopic.item = this.itemId;
              this.khubServ.postTopicTaggerAction(this.addTopic).subscribe(function (data) {
                _this2.respo = data;
                _this2.openSnackBar('topic submitted for approval');
                _this2.selectedTags = [];
              }, function () {
                _this2.openSnackBar('Some error occured try  later');
              });
            } else if (type === 'delete') {
              this.deleteTopic.topic = topic;
              this.deleteTopic.item = this.itemId;
              this.khubServ.postTopicTaggerAction(this.deleteTopic).subscribe(function (data) {
                _this2.respo = data;
                _this2.openSnackBar('Removal of topic submitted for approval');
              }, function () {
                _this2.openSnackBar('Some error occured try  later');
              });
            }
          } catch (e) {
            throw e;
          }
        }
      }]);
      return TopicTaggerComponent;
    }();
    TopicTaggerComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }, {
        type: _services_knowledge_hub_service__WEBPACK_IMPORTED_MODULE_6__["KnowledgeHubService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TopicTaggerComponent.prototype, "itemType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TopicTaggerComponent.prototype, "topics", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TopicTaggerComponent.prototype, "showLimit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TopicTaggerComponent.prototype, "itemId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tagsInput', {
      "static": false
    })], TopicTaggerComponent.prototype, "tagsInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('auto', {
      "static": true
    })], TopicTaggerComponent.prototype, "matAutocomplete", void 0);
    TopicTaggerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-infy-topic-tagger',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./topic-tagger.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/topic-tagger/topic-tagger.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./topic-tagger.component.scss */"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/topic-tagger/topic-tagger.component.scss"))["default"]]
    })], TopicTaggerComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/knowledge-hub-routing.module.ts":
  /*!*************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/knowledge-hub-routing.module.ts ***!
    \*************************************************************************************************/
  /*! exports provided: KnowledgeHubRoutingModule */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesKnowledgeHubKnowledgeHubRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "KnowledgeHubRoutingModule", function () {
      return KnowledgeHubRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _routes_khub_view_khub_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./routes/khub-view/khub-view.component */"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/routes/khub-view/khub-view.component.ts");
    /* harmony import */
    var _routes_khub_home_khub_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./routes/khub-home/khub-home.component */"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/routes/khub-home/khub-home.component.ts");
    var routes = [{
      path: '',
      pathMatch: 'full',
      component: _routes_khub_home_khub_home_component__WEBPACK_IMPORTED_MODULE_4__["KhubHomeComponent"]
    }, {
      path: 'view/:category/:itemId/:source',
      component: _routes_khub_view_khub_view_component__WEBPACK_IMPORTED_MODULE_3__["KhubViewComponent"]
    }];
    var KnowledgeHubRoutingModule = /*#__PURE__*/_createClass(function KnowledgeHubRoutingModule() {
      _classCallCheck(this, KnowledgeHubRoutingModule);
    });
    KnowledgeHubRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], KnowledgeHubRoutingModule);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/knowledge-hub.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/knowledge-hub.module.ts ***!
    \*****************************************************************************************/
  /*! exports provided: KnowledgeHubModule */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesKnowledgeHubKnowledgeHubModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "KnowledgeHubModule", function () {
      return KnowledgeHubModule;
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
    var _knowledge_hub_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./knowledge-hub-routing.module */"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/knowledge-hub-routing.module.ts");
    /* harmony import */
    var _routes_khub_home_khub_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./routes/khub-home/khub-home.component */"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/routes/khub-home/khub-home.component.ts");
    /* harmony import */
    var _routes_khub_view_khub_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./routes/khub-view/khub-view.component */"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/routes/khub-view/khub-view.component.ts");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _components_items_list_items_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./components/items-list/items-list.component */"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/items-list/items-list.component.ts");
    /* harmony import */
    var _components_project_snapshot_project_snapshot_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./components/project-snapshot/project-snapshot.component */"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/project-snapshot/project-snapshot.component.ts");
    /* harmony import */
    var _components_topic_tagger_topic_tagger_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./components/topic-tagger/topic-tagger.component */"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/components/topic-tagger/topic-tagger.component.ts");
    /* harmony import */
    var _search_search_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ../../../search/search.module */"./project/ws/app/src/lib/routes/search/search.module.ts");
    /* harmony import */
    var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @ws-widget/utils */"./library/ws-widget/utils/src/public-api.ts");
    /* harmony import */
    var _ws_widget_resolver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! @ws-widget/resolver */"./library/ws-widget/resolver/src/public-api.ts");
    /* harmony import */
    var _app_toc_app_toc_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ../../../app-toc/app-toc.module */"./project/ws/app/src/lib/routes/app-toc/app-toc.module.ts");
    var KnowledgeHubModule = /*#__PURE__*/_createClass(function KnowledgeHubModule() {
      _classCallCheck(this, KnowledgeHubModule);
    });
    KnowledgeHubModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_routes_khub_home_khub_home_component__WEBPACK_IMPORTED_MODULE_5__["KhubHomeComponent"], _routes_khub_view_khub_view_component__WEBPACK_IMPORTED_MODULE_6__["KhubViewComponent"], _components_items_list_items_list_component__WEBPACK_IMPORTED_MODULE_9__["ItemsListComponent"], _components_project_snapshot_project_snapshot_component__WEBPACK_IMPORTED_MODULE_10__["ProjectSnapshotComponent"], _components_topic_tagger_topic_tagger_component__WEBPACK_IMPORTED_MODULE_11__["TopicTaggerComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _knowledge_hub_routing_module__WEBPACK_IMPORTED_MODULE_4__["KnowledgeHubRoutingModule"], _ws_widget_collection__WEBPACK_IMPORTED_MODULE_7__["BtnPageBackModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"], _search_search_module__WEBPACK_IMPORTED_MODULE_12__["SearchModule"], _ws_widget_utils__WEBPACK_IMPORTED_MODULE_13__["HorizontalScrollerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _ws_widget_utils__WEBPACK_IMPORTED_MODULE_13__["PipeLimitToModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _ws_widget_collection__WEBPACK_IMPORTED_MODULE_7__["ErrorResolverModule"], _ws_widget_resolver__WEBPACK_IMPORTED_MODULE_14__["WidgetResolverModule"], _ws_widget_collection__WEBPACK_IMPORTED_MODULE_7__["BtnContentShareModule"], _app_toc_app_toc_module__WEBPACK_IMPORTED_MODULE_15__["AppTocModule"]]
    })], KnowledgeHubModule);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/routes/khub-home/khub-home.component.scss":
  /*!***********************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/routes/khub-home/khub-home.component.scss ***!
    \***********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesKnowledgeHubRoutesKhubHomeKhubHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".scroller-dev {\n  width: 95%;\n  margin: 1%;\n}\n\n.card-display {\n  max-width: 270px;\n  margin: 0 15px 10px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9rbm93bGVkZ2UtaHViL3JvdXRlcy9raHViLWhvbWUva2h1Yi1ob21lLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMva25vd2xlZGdlLWh1Yi9yb3V0ZXMva2h1Yi1ob21lL2todWItaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0FDRUYiLCJmaWxlIjoicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMva25vd2xlZGdlLWh1Yi9yb3V0ZXMva2h1Yi1ob21lL2todWItaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGxlci1kZXYge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDEgJSAyLjUlO1xufVxuLmNhcmQtZGlzcGxheSB7XG4gIG1heC13aWR0aDogMjcwcHg7XG4gIG1hcmdpbjogMCAxNXB4IDEwcHggMTVweDtcbn1cbiIsIi5zY3JvbGxlci1kZXYge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDElO1xufVxuXG4uY2FyZC1kaXNwbGF5IHtcbiAgbWF4LXdpZHRoOiAyNzBweDtcbiAgbWFyZ2luOiAwIDE1cHggMTBweCAxNXB4O1xufSJdfQ== */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/routes/khub-home/khub-home.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/routes/khub-home/khub-home.component.ts ***!
    \*********************************************************************************************************/
  /*! exports provided: KhubHomeComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesKnowledgeHubRoutesKhubHomeKhubHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "KhubHomeComponent", function () {
      return KhubHomeComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_knowledge_hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../services/knowledge-hub.service */"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/services/knowledge-hub.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ws-widget/utils */"./library/ws-widget/utils/src/public-api.ts");
    /* harmony import */
    var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ws-widget/collection */"./library/ws-widget/collection/src/public-api.ts");
    var KhubHomeComponent = /*#__PURE__*/function () {
      function KhubHomeComponent(khubSrv, route, activated, configSvc) {
        _classCallCheck(this, KhubHomeComponent);
        this.khubSrv = khubSrv;
        this.route = route;
        this.activated = activated;
        this.configSvc = configSvc;
        this.sObject = {
          size: 25
        };
        this.resultObj = [];
        this.loader = true;
        this.error = {
          load: false,
          message: ''
        };
        this.pageNavbar = this.configSvc.pageNavBar;
        this.errorWidget = {
          widgetType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["ROOT_WIDGET_CONFIG"].errorResolver._type,
          widgetSubType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["ROOT_WIDGET_CONFIG"].errorResolver.errorResolver,
          widgetData: {
            errorType: 'internalServer'
          }
        };
      }
      _createClass(KhubHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;
          this.searchResultsSubscription = this.khubSrv.fetchPersonalization(this.sObject).subscribe(function (data) {
            for (var key in data) {
              if (key) {
                var resObj = {};
                if (key === 'project') {
                  resObj.title = 'Project References';
                  resObj.data = _this3.khubSrv.setTileProject(data.project);
                } else if (key === 'automationcentral') {
                  resObj.title = 'Tools';
                  resObj.data = _this3.khubSrv.setTilesDocs(data.automationcentral);
                } else if (key === 'kshop') {
                  resObj.title = 'Documents';
                  resObj.data = _this3.khubSrv.setTilesDocs(data.kshop);
                }
                _this3.resultObj.push(resObj);
              }
            }
            _this3.loader = false;
          }, function (error) {
            _this3.loader = false;
            _this3.error.load = true;
            _this3.error.message = error;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.searchResultsSubscription) {
            this.searchResultsSubscription.unsubscribe();
          }
        }
      }, {
        key: "goToView",
        value: function goToView(data) {
          try {
            this.route.navigate(["view/".concat(data.category, "/").concat(data.itemId, "/").concat(data.source)], {
              relativeTo: this.activated.parent
            });
          } catch (e) {
            throw e;
          }
        }
      }]);
      return KhubHomeComponent;
    }();
    KhubHomeComponent.ctorParameters = function () {
      return [{
        type: _services_knowledge_hub_service__WEBPACK_IMPORTED_MODULE_2__["KnowledgeHubService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_4__["ConfigurationsService"]
      }];
    };
    KhubHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-infy-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./khub-home.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/routes/khub-home/khub-home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./khub-home.component.scss */"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/routes/khub-home/khub-home.component.scss"))["default"]]
    })], KhubHomeComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/routes/khub-view/khub-view.component.scss":
  /*!***********************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/routes/khub-view/khub-view.component.scss ***!
    \***********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesKnowledgeHubRoutesKhubViewKhubViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".khub-view-wrapper {\n  width: 88%;\n  margin-left: 6%;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  /* Track */\n  /* Handle */\n  /* Handle on hover */\n}\n@media only screen and (max-width: 599px) {\n  .khub-view-wrapper {\n    width: 95%;\n    margin-left: 2.5%;\n    margin-bottom: 10px;\n    margin-top: 10px;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 959px) {\n  .khub-view-wrapper {\n    width: 90%;\n    margin-left: 5%;\n    margin-bottom: 10px;\n    margin-top: 10px;\n  }\n}\n.khub-view-wrapper .first-section {\n  width: 68%;\n}\n@media only screen and (max-width: 599px) {\n  .khub-view-wrapper .first-section {\n    width: 95%;\n    margin: auto;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 959px) {\n  .khub-view-wrapper .first-section {\n    width: 95%;\n    margin: auto;\n  }\n}\n.khub-view-wrapper .first-section .user-profile-image {\n  margin: 0px 10px 0px 0px;\n  width: 60px;\n  height: 60px;\n  font-size: 60px;\n  display: block;\n}\n.khub-view-wrapper .first-section .pm-dm-class {\n  width: 95%;\n}\n@media only screen and (max-width: 599px) {\n  .khub-view-wrapper .first-section .pm-dm-class {\n    width: 100%;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 959px) {\n  .khub-view-wrapper .first-section .pm-dm-class {\n    width: 100%;\n  }\n}\n.khub-view-wrapper .second-section {\n  width: 26%;\n  margin-left: 5.5%;\n}\n@media only screen and (max-width: 599px) {\n  .khub-view-wrapper .second-section {\n    width: 95%;\n    margin: auto;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 959px) {\n  .khub-view-wrapper .second-section {\n    width: 95%;\n    margin: auto;\n  }\n}\n.khub-view-wrapper p {\n  line-height: 1.5;\n  font-size: 1.5em;\n}\n.khub-view-wrapper .example-form-tags {\n  min-width: 150px;\n  width: 100%;\n  margin-bottom: 30px;\n}\n@media only screen and (max-width: 599px) {\n  .khub-view-wrapper .example-form-tags {\n    width: 95%;\n    margin: auto;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 959px) {\n  .khub-view-wrapper .example-form-tags {\n    width: 80%;\n    margin: auto;\n  }\n}\n.khub-view-wrapper .toc-discussion-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap-reverse;\n}\n.khub-view-wrapper .toc-discussion-container .discussion {\n  flex: 1;\n  min-width: 1px;\n}\n.khub-view-wrapper .example-chip-list {\n  width: 100%;\n}\n.khub-view-wrapper .mat-standard-chip {\n  min-height: 26px !important;\n}\n.khub-view-wrapper .scrolling-wrapper {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  scroll-behavior: smooth;\n  white-space: nowrap;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: none;\n  overflow-x: -moz-scrollbars-none;\n}\n.khub-view-wrapper .scrolling-wrapper .card {\n  display: inline-block;\n}\n.khub-view-wrapper ::-webkit-scrollbar {\n  height: 0px;\n}\n.khub-view-wrapper ::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n.khub-view-wrapper ::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 10px;\n}\n.khub-view-wrapper ::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n.khub-view-wrapper .user-image {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n.khub-view-wrapper .user-icon {\n  font-size: 1em;\n  width: 100%;\n  height: 100%;\n}\n.khub-view-wrapper .text-kshop,\n.khub-view-wrapper .text-Kshop,\n.khub-view-wrapper .text-KShop,\n.khub-view-wrapper .text-qorus,\n.khub-view-wrapper .text-Qorus {\n  color: #f6a11c !important;\n}\n.khub-view-wrapper .text-promt,\n.khub-view-wrapper .text-Promt,\n.khub-view-wrapper .text-PROMT {\n  color: #e94a48 !important;\n}\n.khub-view-wrapper .text-automationcentral {\n  color: #28a9b2 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9rbm93bGVkZ2UtaHViL3JvdXRlcy9raHViLXZpZXcva2h1Yi12aWV3LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvaW5meS9yb3V0ZXMva25vd2xlZGdlLWh1Yi9yb3V0ZXMva2h1Yi12aWV3L2todWItdmlldy5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLW1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBZ0hBLFVBQUE7RUFNQSxXQUFBO0VBTUEsb0JBQUE7QUM3SEY7QUNXRTtFRmRGO0lBTUksVUFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQ0NGO0FBQ0Y7QUNRRTtFRm5CRjtJQVlJLFVBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQ0dGO0FBQ0Y7QURGRTtFQUNFLFVBQUE7QUNJSjtBQ1JFO0VGR0E7SUFHSSxVQUFBO0lBQ0EsWUFBQTtFQ01KO0FBQ0Y7QUNURTtFRkZBO0lBT0ksVUFBQTtJQUNBLFlBQUE7RUNRSjtBQUNGO0FEUEk7RUFFRSx3QkFBQTtFQUNBLFdBRlk7RUFHWixZQUhZO0VBSVosZUFKWTtFQUtaLGNBQUE7QUNRTjtBRE5JO0VBQ0UsVUFBQTtBQ1FOO0FDOUJFO0VGcUJFO0lBR0ksV0FBQTtFQ1VOO0FBQ0Y7QUM5QkU7RUZnQkU7SUFNSSxXQUFBO0VDWU47QUFDRjtBRFRFO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDV0o7QUM1Q0U7RUYrQkE7SUFJSSxVQUFBO0lBQ0EsWUFBQTtFQ2FKO0FBQ0Y7QUM3Q0U7RUYwQkE7SUFRSSxVQUFBO0lBQ0EsWUFBQTtFQ2VKO0FBQ0Y7QURiRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNlSjtBRGJFO0VBQ0UsZ0JBQUE7RUFFQSxXQUFBO0VBQ0EsbUJBQUE7QUNjSjtBQ2pFRTtFRitDQTtJQU1JLFVBQUE7SUFDQSxZQUFBO0VDZ0JKO0FBQ0Y7QUNsRUU7RUYwQ0E7SUFVSSxVQUFBO0lBQ0EsWUFBQTtFQ2tCSjtBQUNGO0FEaEJBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUNrQkY7QURqQkU7RUFDRSxPQUFBO0VBQ0EsY0FBQTtBQ21CSjtBRGhCRTtFQUNFLFdBQUE7QUNrQko7QURoQkU7RUFDRSwyQkFBQTtBQ2tCSjtBRGhCRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0FDa0JKO0FEUEk7RUFDRSxxQkFBQTtBQ1NOO0FETkU7RUFDRSxXQUFBO0FDUUo7QURKRTtFQUVFLG1CQUFBO0FDS0o7QURERTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNHSjtBRENFO0VBQ0UsZ0JBQUE7QUNDSjtBREdFO0VBQ0UsV0FIVTtFQUlWLFlBSlU7RUFLVixrQkFBQTtBQ0RKO0FESUU7RUFPRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNSSjtBRFVFOzs7OztFQUtFLHlCQUFBO0FDUko7QURXRTs7O0VBR0UseUJBQUE7QUNUSjtBRFlFO0VBQ0UseUJBQUE7QUNWSiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9pbmZ5L3JvdXRlcy9rbm93bGVkZ2UtaHViL3JvdXRlcy9raHViLXZpZXcva2h1Yi12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy1jb21tb24uc2Nzcyc7XG5AaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG4kY29sb3ItY2RnLXByb2plY3Q6ICNlOTRhNDg7XG4kY29sb3ItY2RnLWRvY3VtZW50OiAjZjZhMTFjO1xuJGNvbG9yLWNkZy10b29sOiAjMjhhOWIyO1xuLmtodWItdmlldy13cmFwcGVyIHtcbiAgd2lkdGg6IDg4JTtcbiAgbWFyZ2luLWxlZnQ6IDYlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICBAaW5jbHVkZSBicmVha3BvaW50LXMge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAuZmlyc3Qtc2VjdGlvbiB7XG4gICAgd2lkdGg6IDY4JTtcbiAgICBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQtcyB7XG4gICAgICB3aWR0aDogOTUlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICAudXNlci1wcm9maWxlLWltYWdlIHtcbiAgICAgICR1c2VyLXNpemU6IDYwcHg7XG4gICAgICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XG4gICAgICB3aWR0aDogJHVzZXItc2l6ZTtcbiAgICAgIGhlaWdodDogJHVzZXItc2l6ZTtcbiAgICAgIGZvbnQtc2l6ZTogJHVzZXItc2l6ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAucG0tZG0tY2xhc3Mge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQtcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuc2Vjb25kLXNlY3Rpb24ge1xuICAgIHdpZHRoOiAyNiU7XG4gICAgbWFyZ2luLWxlZnQ6IDUuNSU7XG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludC14cyB7XG4gICAgICB3aWR0aDogOTUlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICBAaW5jbHVkZSBicmVha3BvaW50LXMge1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gIH1cbiAgcCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICB9XG4gIC5leGFtcGxlLWZvcm0tdGFncyB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAvLyBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludC14cyB7XG4gICAgICB3aWR0aDogOTUlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICBAaW5jbHVkZSBicmVha3BvaW50LXMge1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gIH1cbi50b2MtZGlzY3Vzc2lvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xuICAuZGlzY3Vzc2lvbiB7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDFweDtcbiAgfVxufVxuICAuZXhhbXBsZS1jaGlwLWxpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5tYXQtc3RhbmRhcmQtY2hpcCB7XG4gICAgbWluLWhlaWdodDogMjZweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zY3JvbGxpbmctd3JhcHBlciB7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8vIElFIDEwK1xuICAgIG92ZXJmbG93LXg6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuICAgIC8vIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAvLyAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgLy8gICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgLy8gfVxuICAgIC8vICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAvLyAgICAgZGlzcGxheTogbm9uZTtcbiAgICAvLyB9XG4gICAgLy8gJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIC8vICAgICBkaXNwbGF5OiBub25lO1xuICAgIC8vIH1cbiAgICAuY2FyZCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICB9XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGhlaWdodDogMHB4O1xuICB9XG5cbiAgLyogVHJhY2sgKi9cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgLy8gYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgLyogSGFuZGxlICovXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICM4ODg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xuICB9XG4gICR1c2VyLXNpemU6IDEwMCU7XG5cbiAgLnVzZXItaW1hZ2Uge1xuICAgIHdpZHRoOiAkdXNlci1zaXplO1xuICAgIGhlaWdodDogJHVzZXItc2l6ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAudXNlci1pY29uIHtcbiAgICAvLyBmb250LXNpemU6IDQwcHg7XG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vIHRvcDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgICAvLyBsZWZ0OiBjYWxjKDUwJSAtIDIwcHgpO1xuICAgIC8vIHdpZHRoOiA0MHB4O1xuICAgIC8vIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLnRleHQta3Nob3AsXG4gIC50ZXh0LUtzaG9wLFxuICAudGV4dC1LU2hvcCxcbiAgLnRleHQtcW9ydXMsXG4gIC50ZXh0LVFvcnVzIHtcbiAgICBjb2xvcjogJGNvbG9yLWNkZy1kb2N1bWVudCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnRleHQtcHJvbXQsXG4gIC50ZXh0LVByb210LFxuICAudGV4dC1QUk9NVCB7XG4gICAgY29sb3I6ICRjb2xvci1jZGctcHJvamVjdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnRleHQtYXV0b21hdGlvbmNlbnRyYWwge1xuICAgIGNvbG9yOiAkY29sb3ItY2RnLXRvb2wgIWltcG9ydGFudDtcbiAgfVxufVxuIiwiLmtodWItdmlldy13cmFwcGVyIHtcbiAgd2lkdGg6IDg4JTtcbiAgbWFyZ2luLWxlZnQ6IDYlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICAvKiBUcmFjayAqL1xuICAvKiBIYW5kbGUgKi9cbiAgLyogSGFuZGxlIG9uIGhvdmVyICovXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5raHViLXZpZXctd3JhcHBlciB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW4tbGVmdDogMi41JTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAua2h1Yi12aWV3LXdyYXBwZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuLmtodWItdmlldy13cmFwcGVyIC5maXJzdC1zZWN0aW9uIHtcbiAgd2lkdGg6IDY4JTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLmtodWItdmlldy13cmFwcGVyIC5maXJzdC1zZWN0aW9uIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIC5raHViLXZpZXctd3JhcHBlciAuZmlyc3Qtc2VjdGlvbiB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cbi5raHViLXZpZXctd3JhcHBlciAuZmlyc3Qtc2VjdGlvbiAudXNlci1wcm9maWxlLWltYWdlIHtcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDYwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmtodWItdmlldy13cmFwcGVyIC5maXJzdC1zZWN0aW9uIC5wbS1kbS1jbGFzcyB7XG4gIHdpZHRoOiA5NSU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5raHViLXZpZXctd3JhcHBlciAuZmlyc3Qtc2VjdGlvbiAucG0tZG0tY2xhc3Mge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgLmtodWItdmlldy13cmFwcGVyIC5maXJzdC1zZWN0aW9uIC5wbS1kbS1jbGFzcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5raHViLXZpZXctd3JhcHBlciAuc2Vjb25kLXNlY3Rpb24ge1xuICB3aWR0aDogMjYlO1xuICBtYXJnaW4tbGVmdDogNS41JTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLmtodWItdmlldy13cmFwcGVyIC5zZWNvbmQtc2VjdGlvbiB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAua2h1Yi12aWV3LXdyYXBwZXIgLnNlY29uZC1zZWN0aW9uIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuLmtodWItdmlldy13cmFwcGVyIHAge1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuLmtodWItdmlldy13cmFwcGVyIC5leGFtcGxlLWZvcm0tdGFncyB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAua2h1Yi12aWV3LXdyYXBwZXIgLmV4YW1wbGUtZm9ybS10YWdzIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIC5raHViLXZpZXctd3JhcHBlciAuZXhhbXBsZS1mb3JtLXRhZ3Mge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG4ua2h1Yi12aWV3LXdyYXBwZXIgLnRvYy1kaXNjdXNzaW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XG59XG4ua2h1Yi12aWV3LXdyYXBwZXIgLnRvYy1kaXNjdXNzaW9uLWNvbnRhaW5lciAuZGlzY3Vzc2lvbiB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMXB4O1xufVxuLmtodWItdmlldy13cmFwcGVyIC5leGFtcGxlLWNoaXAtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmtodWItdmlldy13cmFwcGVyIC5tYXQtc3RhbmRhcmQtY2hpcCB7XG4gIG1pbi1oZWlnaHQ6IDI2cHggIWltcG9ydGFudDtcbn1cbi5raHViLXZpZXctd3JhcHBlciAuc2Nyb2xsaW5nLXdyYXBwZXIge1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdy14OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbn1cbi5raHViLXZpZXctd3JhcHBlciAuc2Nyb2xsaW5nLXdyYXBwZXIgLmNhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ua2h1Yi12aWV3LXdyYXBwZXIgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGhlaWdodDogMHB4O1xufVxuLmtodWItdmlldy13cmFwcGVyIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmtodWItdmlldy13cmFwcGVyIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmtodWItdmlldy13cmFwcGVyIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xufVxuLmtodWItdmlldy13cmFwcGVyIC51c2VyLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmtodWItdmlldy13cmFwcGVyIC51c2VyLWljb24ge1xuICBmb250LXNpemU6IDFlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5raHViLXZpZXctd3JhcHBlciAudGV4dC1rc2hvcCxcbi5raHViLXZpZXctd3JhcHBlciAudGV4dC1Lc2hvcCxcbi5raHViLXZpZXctd3JhcHBlciAudGV4dC1LU2hvcCxcbi5raHViLXZpZXctd3JhcHBlciAudGV4dC1xb3J1cyxcbi5raHViLXZpZXctd3JhcHBlciAudGV4dC1Rb3J1cyB7XG4gIGNvbG9yOiAjZjZhMTFjICFpbXBvcnRhbnQ7XG59XG4ua2h1Yi12aWV3LXdyYXBwZXIgLnRleHQtcHJvbXQsXG4ua2h1Yi12aWV3LXdyYXBwZXIgLnRleHQtUHJvbXQsXG4ua2h1Yi12aWV3LXdyYXBwZXIgLnRleHQtUFJPTVQge1xuICBjb2xvcjogI2U5NGE0OCAhaW1wb3J0YW50O1xufVxuLmtodWItdmlldy13cmFwcGVyIC50ZXh0LWF1dG9tYXRpb25jZW50cmFsIHtcbiAgY29sb3I6ICMyOGE5YjIgIWltcG9ydGFudDtcbn0iLCJAaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5cbkBtaXhpbiByZXRpbmEge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBwcmludCB7XG4gIEBtZWRpYSBvbmx5IHByaW50IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gYnJlYWtwb2ludC14cyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQteGwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkgYW5kIChtYXgtd2lkdGg6IDUwMDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQteGwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC14cyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtbSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */";

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/routes/khub-view/khub-view.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/routes/khub-view/khub-view.component.ts ***!
    \*********************************************************************************************************/
  /*! exports provided: KhubViewComponent */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesKnowledgeHubRoutesKhubViewKhubViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "KhubViewComponent", function () {
      return KhubViewComponent;
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
    var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ws-widget/utils */"./library/ws-widget/utils/src/public-api.ts");
    /* harmony import */
    var _services_knowledge_hub_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../../services/knowledge-hub.service */"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/services/knowledge-hub.service.ts");

    // import { WsSharedValuesService } from '@ws-shared/services/src/public-api'
    // import { map } from 'rxjs/operators'

    var KhubViewComponent = /*#__PURE__*/function () {
      function KhubViewComponent(activated, khubSrv, configSvc, valueSvc, utilitySvc) {
        _classCallCheck(this, KhubViewComponent);
        this.activated = activated;
        this.khubSrv = khubSrv;
        this.configSvc = configSvc;
        this.valueSvc = valueSvc;
        this.utilitySvc = utilitySvc;
        this.content = null;
        this.defaultSideNavBarOpenedSubscription = null;
        this.isLtMedium$ = this.valueSvc.isLtMedium$;
        this.screenSizeIsLtMedium = false;
        this.sideNavBarOpened = true;
        this.viewData = {};
        this.moreRecs = [];
        this.projectResult = {};
        this.sObject = {};
        this.error = {
          load: false,
          message: ''
        };
        this.errorRecsys = false;
        this.loader = true;
        this.hasInternetUrl = false;
        this.recsStatus = false;
        this.pageNavbar = this.configSvc.pageNavBar;
        this.errorWidget = {
          widgetType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["ROOT_WIDGET_CONFIG"].errorResolver._type,
          widgetSubType: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["ROOT_WIDGET_CONFIG"].errorResolver.errorResolver,
          widgetData: {
            errorType: 'internalServer'
          }
        };
        this.isDownloadableDesktop = false;
        this.isDownloadableMobile = false;
      }
      _createClass(KhubViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;
          this.defaultSideNavBarOpenedSubscription = this.isLtMedium$.subscribe(function (isLtMedium) {
            _this4.screenSizeIsLtMedium = isLtMedium;
            if (isLtMedium) {
              _this4.sideNavBarOpened = !isLtMedium;
            } else {
              _this4.sideNavBarOpened = true;
            }
          });
          this.routeSubscription = this.activated.params.subscribe(function (params) {
            _this4.sObject.category = params.category.toLowerCase();
            _this4.sObject.itemId = params.itemId.toLowerCase();
            _this4.sObject.source = params.source.toLowerCase();
            _this4.getViewData();
          });
          if (this.configSvc.restrictedFeatures) {
            this.isDownloadableMobile = this.configSvc.restrictedFeatures.has('mobileDownloadRequest');
            this.isDownloadableDesktop = this.configSvc.restrictedFeatures.has('downloadRequest');
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.searchResultsSubscription) {
            this.searchResultsSubscription.unsubscribe();
          }
          if (this.routeSubscription) {
            this.routeSubscription.unsubscribe();
          }
          if (this.defaultSideNavBarOpenedSubscription) {
            this.defaultSideNavBarOpenedSubscription.unsubscribe();
          }
        }
      }, {
        key: "getViewData",
        value: function getViewData() {
          var _this5 = this;
          try {
            this.searchResultsSubscription = this.khubSrv.fetchViewData(this.sObject).subscribe(function (data) {
              if (_this5.sObject.category === 'project') {
                _this5.viewData = _this5.khubSrv.setTileProject(data.project)[0];
                _this5.projectResult = data.project[0];
              } else if (_this5.sObject.category === 'document') {
                _this5.viewData = _this5.khubSrv.setTilesDocs(data.kshop)[0];
              } else {
                _this5.viewData = _this5.khubSrv.setTilesDocs(data.automationcentral)[0];
              }
              _this5.loader = false;
              _this5.discussionForumData = {
                title: _this5.viewData.title || '',
                identifier: _this5.viewData.itemId ? _this5.viewData.itemId.toString() : '',
                description: _this5.viewData.description || '',
                name: _this5.viewData.title || ''
              };
              // //console.log(this.viewData, this.projectResult)
              _this5.getMoreLikeThis();
            }, function (error) {
              _this5.error.load = true;
              _this5.loader = false;
              _this5.error.message = error;
            });
          } catch (e) {
            throw e;
          }
        }
      }, {
        key: "getMoreLikeThis",
        value: function getMoreLikeThis() {
          var _this6 = this;
          try {
            this.searchResultsSubscription = this.khubSrv.fetchMoreLikeThis(this.sObject).subscribe(function (data) {
              if (_this6.sObject.category === 'project') {
                _this6.moreRecs = _this6.khubSrv.setTileProject(data.hits);
              } else if (_this6.sObject.category === 'document') {
                _this6.moreRecs = _this6.khubSrv.setTilesDocs(data.hits);
              } else {
                _this6.moreRecs = _this6.khubSrv.setTilesDocs(data.hits);
              }
              _this6.recsStatus = true;
            }, function () {
              _this6.errorRecsys = true;
              _this6.recsStatus = true;
            });
          } catch (e) {
            throw e;
          }
        }
      }, {
        key: "isDownloadable",
        get: function get() {
          if (this.configSvc.instanceConfig && this.configSvc.instanceConfig.isDownloadableSource && this.content && this.content.sourceName) {
            if (this.utilitySvc.isMobile && !this.isDownloadableMobile) {
              return true;
            }
            if (!this.utilitySvc.isMobile && !this.isDownloadableDesktop) {
              return true;
            }
            return false;
          }
          return false;
        }
      }, {
        key: "download",
        value: function download() {
          if (this.content) {
            var link = document.createElement('a');
            link.download = this.content.name;
            link.target = '_self';
            // Construct the URI
            link.href = this.content.artifactUrl || '';
            document.body.appendChild(link);
            link.click();
            // Cleanup the DOM
            document.body.removeChild(link);
          }
          // delete link;
        }
      }]);
      return KhubViewComponent;
    }();
    KhubViewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_knowledge_hub_service__WEBPACK_IMPORTED_MODULE_5__["KnowledgeHubService"]
      }, {
        type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_4__["ConfigurationsService"]
      }, {
        type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_4__["ValueService"]
      }, {
        type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], KhubViewComponent.prototype, "content", void 0);
    KhubViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ws-app-infy-khub-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./khub-view.component.html */"./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/routes/khub-view/khub-view.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./khub-view.component.scss */"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/routes/khub-view/khub-view.component.scss"))["default"]]
    })], KhubViewComponent);

    /***/
  },

  /***/"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/services/knowledge-hub.service.ts":
  /*!***************************************************************************************************!*\
    !*** ./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/services/knowledge-hub.service.ts ***!
    \***************************************************************************************************/
  /*! exports provided: KnowledgeHubService */
  /***/
  function projectWsAppSrcLibRoutesInfyRoutesKnowledgeHubServicesKnowledgeHubServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "KnowledgeHubService", function () {
      return KnowledgeHubService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _apis_knowledge_hub_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../apis/knowledge-hub-api.service */"./project/ws/app/src/lib/routes/infy/routes/knowledge-hub/apis/knowledge-hub-api.service.ts");
    var KnowledgeHubService = /*#__PURE__*/function () {
      function KnowledgeHubService(khubApiSrv) {
        _classCallCheck(this, KnowledgeHubService);
        this.khubApiSrv = khubApiSrv;
      }
      _createClass(KnowledgeHubService, [{
        key: "fetchPersonalization",
        value: function fetchPersonalization(request) {
          return this.khubApiSrv.fetchPersonalizedData(request);
        }
      }, {
        key: "fetchViewData",
        value: function fetchViewData(request) {
          return this.khubApiSrv.fetchViewData(request);
        }
      }, {
        key: "fetchMoreLikeThis",
        value: function fetchMoreLikeThis(request) {
          return this.khubApiSrv.fetchMoreRecs(request);
        }
      }, {
        key: "postTopicTaggerAction",
        value: function postTopicTaggerAction(request) {
          return this.khubApiSrv.postTopicTagger(request);
        }
        // tslint:disable-next-line: prefer-array-literal
      }, {
        key: "setTilesDocs",
        value: function setTilesDocs(response) {
          try {
            var tiles = [];
            response.map(function (cur) {
              var tile = {
                author: cur.authors || [],
                category: cur.category || '',
                description: cur.description || '',
                itemId: cur.itemId,
                itemType: cur.itemType || '',
                noOfViews: cur.noOfViews || 0,
                restricted: cur.isAccessRestricted || 'N',
                source: cur.source,
                title: cur.title || '',
                topics: cur.topics || [],
                url: cur.url || '',
                dateCreated: cur.dateCreated ? new Date(cur.dateCreated) : new Date(),
                color: cur.source.toLowerCase() === 'kshop' ? '3px solid #f26522' : '3px solid #28a9b2',
                sourceId: cur.sourceId || 0
              };
              tiles.push(tile);
            });
            return tiles;
          } catch (e) {
            throw e;
          }
        }
      }, {
        key: "setTileProject",
        value: function setTileProject(response) {
          try {
            var tilesProject = [];
            response.map(function (cur) {
              var tile = {
                pm: cur.pm || [],
                dm: cur.dm || [],
                objectives: cur.mstInfyObjectives || '',
                risks: cur.risks || [],
                contribution: cur.contributions || [],
                category: 'Project',
                // description: '',
                projectScope: cur.mstProjectScope,
                businessContext: cur.mstBusinessContext,
                itemId: cur.itemId,
                restricted: cur.isAccessRestricted || 'N',
                source: 'PROMT',
                title: cur.mstProjectName || '',
                topics: cur.topics || [],
                url: '',
                dateCreated: new Date(cur.dateStartDate),
                color: '3px solid #e94a48',
                sourceId: 0
              };
              tilesProject.push(tile);
            });
            return tilesProject;
          } catch (e) {
            throw e;
          }
        }
      }]);
      return KnowledgeHubService;
    }();
    KnowledgeHubService.ctorParameters = function () {
      return [{
        type: _apis_knowledge_hub_api_service__WEBPACK_IMPORTED_MODULE_2__["KnowledgeHubApiService"]
      }];
    };
    KnowledgeHubService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], KnowledgeHubService);

    /***/
  }
}]);
//# sourceMappingURL=routes-knowledge-hub-knowledge-hub-module-es5.js.map