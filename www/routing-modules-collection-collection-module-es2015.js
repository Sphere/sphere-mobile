(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routing-modules-collection-collection-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-collection-matmenu/auth-collection-matmenu.component.html":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-collection-matmenu/auth-collection-matmenu.component.html ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-menu #childMenu=\"matMenu\">\n\n  <ng-container *ngFor=\"let option of childType\">\n\n\n    <button\n    *ngIf=\"option.children && option.children.length\"\n    mat-menu-item\n    (click)=\"click(type, option.id)\"\n      [matMenuTriggerFor]=\"child.childMenu\"\n      >\n      <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\">{{\n        option.icon\n      }}</mat-icon>\n      <ng-container>{{ option.name }}</ng-container>\n      <ws-auth-collection-matmenu\n      [type]=\"type\"\n      [childType]=\"option.children\"\n      (action)=\"click($event.action, $event.type)\"\n      #child\n      ></ws-auth-collection-matmenu>\n    </button>\n    <button\n    *ngIf=\"!option.children || !option.children.length\"\n     mat-menu-item\n     (click)=\"click(type, option.id)\"\n     >\n      <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\">{{\n        option.icon\n      }}</mat-icon>\n      <ng-container>{{ option.name }}</ng-container>\n    </button>\n\n  </ng-container>\n  <button (click)=\"click('delete')\"  mat-menu-item>\n    <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Delete content\">\n      delete</mat-icon>\n    <ng-container i18n>Delete</ng-container>\n    </button>\n</mat-menu>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-editor-options/auth-editor-options.component.html":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-editor-options/auth-editor-options.component.html ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <mat-icon aria-hidden=\"false\" class=\"menu-icon ws-mat-primary-text\" [class.ws-mat-warn-text]=\"isInvalid\"\n  [class.ws-mat-primary-text]=\"!isInvalid\" [matMenuTriggerFor]=\"menu\" (click)=\"$event.stopPropagation()\" i18n-aria-label\n  aria-label=\"Menu for content\">more_vert</mat-icon> -->\n\n  <button [hidden]=\"!allowedChild.length\" [class.op500]=\"!allowedChild.length\" mat-menu-item\n    [matMenuTriggerFor]=\"child.childMenu\">\n    <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Create New Child\">\n      more_vert</mat-icon>\n    <!-- <ng-container i18n>Create New Child</ng-container> -->\n    <ws-auth-collection-matmenu [type]=\"'createChild'\" [childType]=\"allowedChild\"\n      (action)=\"click($event.action, $event.type)\" #child></ws-auth-collection-matmenu>\n      <button (click)=\"click('delete')\" [disabled]=\"!node.parentId && node.editable\"\n      [class.op500]=\"!node.parentId && node.editable\" mat-menu-item>\n      <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Delete content\">\n        </mat-icon>\n    </button>\n  </button>\n  <button *ngIf=\"node.category === 'Resource'\" [class.op500]=\"!canEdit\" [matMenuTriggerFor]=\"edit\" mat-menu-item\n    [disabled]=\"!canEdit || (metaEditDisabled && contentEditDisabled)\">\n    <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Edit content\"> more_vert\n    </mat-icon>\n    <!-- <ng-container i18n>Edit</ng-container> -->\n  </button>\n\n\n<!-- <mat-menu #menu=\"matMenu\"> -->\n  <!--\n  <button *ngIf=\"node.category === 'Resource'\" mat-menu-item (click)=\"click('preview')\">\n    <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Preview\">\n      remove_red_eye</mat-icon>\n    <ng-container i18n>Preview</ng-container>\n  </button>-->\n  <!-- <button (click)=\"click('delete')\" [disabled]=\"!node.parentId && node.editable\"\n    [class.op500]=\"!node.parentId && node.editable\" mat-menu-item>\n    <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Delete content\">\n      delete</mat-icon>\n    <ng-container i18n>Delete</ng-container>\n  </button>  -->\n  <!-- <button [matMenuTriggerFor]=\"sibling.childMenu\" [disabled]=\"!node.parentId || !allowedSibling.length\"\n    [class.op500]=\"!node.parentId || !allowedSibling.length\" mat-menu-item>\n    <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Create New Sibling\">\n      next_week</mat-icon>\n    <ng-container i18n>Create New Sibling</ng-container>\n    <ws-auth-collection-matmenu [type]=\"'createSibling'\" [childType]=\"allowedSibling\"\n      (action)=\"click($event.action, $event.type)\" #sibling></ws-auth-collection-matmenu>\n  </button> -->\n\n  <!-- <button *ngIf=\"node.category !== 'Resource'\" [disabled]=\"!canEdit || contentEditDisabled\"\n    [class.op500]=\"!canEdit || contentEditDisabled\" mat-menu-item (click)=\"click('addChild')\">\n    <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Add a Child\">\n      library_add</mat-icon>\n    <ng-container i18n>Add a Child</ng-container>\n  </button> -->\n<!-- </mat-menu> -->\n\n<mat-menu #edit=\"matMenu\">\n  <!-- <button [disabled]=\"contentEditDisabled\" [class.op500]=\"contentEditDisabled\" mat-menu-item\n    (click)=\"click('editContent')\">\n    <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Edit content\">build\n    </mat-icon>\n    <ng-container i18n>Edit Content</ng-container>\n  </button>\n  <button mat-menu-item [disabled]=\"metaEditDisabled\" [class.op500]=\"metaEditDisabled\" (click)=\"click('editMeta')\">\n    <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Edit content\">ballot\n    </mat-icon>\n    <ng-container i18n>Edit Meta</ng-container>\n  </button> -->\n  <button *ngIf=\"node.category === 'Resource'\" mat-menu-item (click)=\"click('preview')\">\n    <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Preview\">\n      remove_red_eye</mat-icon>\n    <ng-container i18n>Preview</ng-container>\n  </button>\n  <button (click)=\"click('delete')\" [disabled]=\"!node.parentId && node.editable\"\n    [class.op500]=\"!node.parentId && node.editable\" mat-menu-item>\n    <mat-icon aria-hidden=\"false\" class=\"node-icon ws-mat-primary-text\" i18n-aria-label aria-label=\"Delete content\">\n      delete</mat-icon>\n    <ng-container i18n>Delete</ng-container>\n  </button>\n</mat-menu>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-of-contents/auth-table-of-contents.component.html":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-of-contents/auth-table-of-contents.component.html ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex\">\n  <ng-container *ngIf=\"!mediumScreen\">\n    <div *ngIf=\"!menubtn\" class=\"p-2 pt-4 transitionD\">\n      <button\n        mat-icon-button\n        (click)=\"drawer = !drawer; menubtn = !menubtn\"\n        i18n-aria-label\n        aria-label=\"Maximize side panel\"\n        i18n-matTooltip\n        matTooltipPosition=\"right\"\n        matTooltip=\"Open side panel\"\n      >\n        <mat-icon>menu</mat-icon>\n      </button>\n    </div>\n  </ng-container>\n  <div *ngIf=\"drawer\" class=\"transitionD\">\n    <mat-card class=\"flex items-center mat-card custom-card\">\n      <h2 class=\"flex mat-h w-full justify-center pt-5\" i18n>\n        TABLE OF CONTENTS\n      </h2>\n\n      <button\n        *ngIf=\"!mediumScreen\"\n        mat-icon-button\n        (click)=\"drawer = !drawer; menubtn = !menubtn\"\n        i18n-aria-label\n        aria-label=\"Open side panel\"\n        i18n-matTooltip\n        matTooltipPosition=\"right\"\n        matTooltip=\"Minimize side panel\"\n      >\n        <mat-icon>chevron_left</mat-icon>\n      </button>\n      <button\n        *ngIf=\"mediumScreen\"\n        mat-icon-button\n        (click)=\"closeSidenav()\"\n        i18n-aria-label\n        aria-label=\"Close side panel\"\n        i18n-matTooltip\n        matTooltipPosition=\"right\"\n        matTooltip=\"Close side panel\"\n      >\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <hr />\n    </mat-card>\n    <mat-tree\n      [dataSource]=\"dataSource\"\n      [treeControl]=\"treeControl\"\n      cdkDropList\n      cdkDropListSortingDisabled\n      (cdkDropListDropped)=\"drop()\"\n      class=\"px-2\"\n    >\n      <mat-tree-node\n        class=\"auth-tree-node\"\n        [class.selected]=\"node.id === selectedNode\"\n        [class.ws-mat-warn-text]=\"invalidIds.includes(node.id)\"\n        [matTreeNodePaddingIndent]=\"20\"\n        *matTreeNodeDef=\"let node\"\n        matTreeNodePadding\n        cdkDrag=\"node.parent?.length && node.editable\"\n        [cdkDragData]=\"node\"\n        (mousemove)=\"dragHover(node, $event)\"\n        (mouseleave)=\"dragHoverEnd($event)\"\n        (cdkDragStarted)=\"dragStart(node)\"\n        (cdkDragReleased)=\"dragEnd()\"\n        (click)=\"onNodeSelect(node)\"\n      >\n        <div\n          *ngIf=\"draggingPosition === 'above' && node === dropContainer && node.parentId\"\n          class=\"placeholder\"\n        >\n          <span class=\"dot\"></span>\n          <span class=\"line\"></span>\n        </div>\n        <button\n          *ngIf=\"node.expandable\"\n          mat-icon-button\n          matTreeNodeToggle\n          [attr.aria-label]=\"'toggle ' + node.name\"\n        >\n          <mat-icon\n            class=\"mat-icon-rtl-mirror\"\n            [class.ws-mat-warn-text]=\"invalidIds.includes(node.id)\"\n            [class.ws-mat-primary-text]=\"!invalidIds.includes(node.id)\"\n          >\n            {{ treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right' }}\n          </mat-icon>\n        </button>\n        <button *ngIf=\"!node.expandable\" mat-icon-button disabled></button>\n        <ws-auth-table-tree-label\n          [isInvalid]=\"invalidIds.includes(node.id)\"\n          [identifier]=\"node.identifier\"\n          [isDragging]=\"isDragging\"\n          [id]=\"node.id\"\n        ></ws-auth-table-tree-label>\n        <ws-auth-editor-options\n          *ngIf=\"node.editable\"\n          [isInvalid]=\"invalidIds.includes(node.id)\"\n          (action)=\"takeAction($event.action, node, $event.type)\"\n          [node]=\"node\"\n        ></ws-auth-editor-options>\n        <div *cdkDragPreview>\n          <ws-auth-table-tree-label\n            [identifier]=\"node.identifier\"\n            [isDragging]=\"isDragging\"\n            [icon]=\"\n              isDropDisabled\n                ? 'block'\n                : !isDropDisabled && draggingPosition === 'center'\n                ? 'add_circle'\n                : 'format_indent_increase'\n            \"\n            [id]=\"node.id\"\n          ></ws-auth-table-tree-label>\n        </div>\n        <div\n          *ngIf=\"draggingPosition === 'below' && node === dropContainer && node.parentId\"\n          class=\"placeholder second\"\n        >\n          <span class=\"dot\"></span>\n          <span class=\"line\"></span>\n        </div>\n      </mat-tree-node>\n    </mat-tree>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-tree-label/auth-table-tree-label.component.html":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-tree-label/auth-table-tree-label.component.html ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-icon\n    class=\"node-icon\"\n    [class.ws-mat-warn-text]=\"isInvalid\"\n    [class.ws-mat-primary-text]=\"!isInvalid\"\n    aria-hidden=\"false\"\n    i18n-aria-label\n    aria-label=\"icon\"\n    >{{ icon }}</mat-icon\n  >\n  <span\n    [matTooltipDisabled]=\"name?.length < 25 || isDragging\"\n    [matTooltip]=\"name\"\n    class=\"node-name\"\n  >\n    <ng-container *ngIf=\"name\">{{\n      name.length > 25 ? name.slice(0, 22) + '...' : name\n    }}</ng-container>\n    <ng-container i18n *ngIf=\"!name\">Untitled Content</ng-container>\n  </span>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-toc/auth-toc.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-toc/auth-toc.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex\">\n  <ng-container *ngIf=\"!mediumScreen\">\n    <div *ngIf=\"!menubtn\" class=\"p-2 pt-4 transitionD\">\n      <button mat-icon-button (click)=\"drawer = !drawer; menubtn = !menubtn\" i18n-aria-label\n        aria-label=\"Maximize side panel\" i18n-matTooltip matTooltipPosition=\"right\" matTooltip=\"Open side panel\">\n        <mat-icon>menu</mat-icon>\n      </button>\n    </div>\n  </ng-container>\n  <div *ngIf=\"drawer\" class=\"transitionD\">\n\n    <mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" cdkDropList cdkDropListSortingDisabled\n      (cdkDropListDropped)=\"drop()\" class=\"px-2\">\n      <mat-tree-node class=\"auth-tree-node\" [class.selected]=\"node.id === selectedNode\"\n        [class.ws-mat-warn-text]=\"invalidIds.includes(node.id)\" [matTreeNodePaddingIndent]=\"20\"\n        *matTreeNodeDef=\"let node\" matTreeNodePadding cdkDrag=\"node.parent?.length && node.editable\"\n        [cdkDragData]=\"node\" (mousemove)=\"dragHover(node, $event)\" (mouseleave)=\"dragHoverEnd($event)\"\n        (cdkDragStarted)=\"dragStart(node)\" (cdkDragReleased)=\"dragEnd()\" (click)=\"onNodeSelect(node)\">\n        <div *ngIf=\"draggingPosition === 'above' && node === dropContainer && node.parentId\" class=\"placeholder\">\n          <span class=\"dot\"></span>\n          <span class=\"line\"></span>\n        </div>\n        <button *ngIf=\"node.expandable\" mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\n          <mat-icon class=\"mat-icon-rtl-mirror\" [class.ws-mat-warn-text]=\"invalidIds.includes(node.id)\"\n            [class.ws-mat-primary-text]=\"!invalidIds.includes(node.id)\">\n            {{ treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right' }}\n          </mat-icon>\n        </button>\n        <button *ngIf=\"!node.expandable\" mat-icon-button disabled></button>\n        <ws-auth-table-tree-label class=\"tree-label\" [isInvalid]=\"invalidIds.includes(node.id)\" [identifier]=\"node.identifier\"\n          [isDragging]=\"isDragging\" [id]=\"node.id\"></ws-auth-table-tree-label>\n\n        <ws-auth-editor-options  class=\"editor-options\" *ngIf=\"node.editable\" [isInvalid]=\"invalidIds.includes(node.id)\"\n          (action)=\"takeAction($event.action, node, $event.type)\" [node]=\"node\"></ws-auth-editor-options>\n        <div *cdkDragPreview>\n          <ws-auth-table-tree-label [identifier]=\"node.identifier\" [isDragging]=\"isDragging\" [icon]=\"\n              isDropDisabled\n                ? 'block'\n                : !isDropDisabled && draggingPosition === 'center'\n                ? 'add_circle'\n                : 'format_indent_increase'\n            \" [id]=\"node.id\"></ws-auth-table-tree-label>\n        </div>\n        <div *ngIf=\"draggingPosition === 'below' && node === dropContainer && node.parentId\" class=\"placeholder second\">\n          <span class=\"dot\"></span>\n          <span class=\"line\"></span>\n        </div>\n      </mat-tree-node>\n    </mat-tree>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/collection/collection.component.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/collection/collection.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!previewIdentifier\">\n  <ws-auth-editor-action-buttons (action)=\"action($event)\" [buttonConfig]=\"actionButton\">\n  </ws-auth-editor-action-buttons>\n  <ws-auth-editor-steps\n    [steps]=\"stepper\"\n    [currentStep]=\"currentStep\"\n    (change)=\"currentStep = $event\"\n  >\n  </ws-auth-editor-steps>\n  <div *ngIf=\"mediumScreen\">\n    <div class=\"ui\" [ngClass]=\"{ toHide: !leftArrow }\">\n      <button\n        class=\"p-1\"\n        mat-icon-button\n        (click)=\"sidenav.toggle(); leftArrow = !leftArrow\"\n        i18n-aria-label\n        aria-label=\"Open side panel\"\n        i18n-matTooltip\n        matTooltipPosition=\"right\"\n        matTooltip=\"Open side panel\"\n      >\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n    </div>\n  </div>\n  <mat-sidenav-container autosize=\"true\" id=\"auth-toc\" class=\"example-container\">\n    <mat-sidenav\n      #sidenav\n      [mode]=\"mode$ | async\"\n      [(opened)]=\"sideBarOpened\"\n      (closedStart)=\"sidenavClose()\"\n    >\n      <div class=\"sticky\">\n        <ws-auth-table-of-contents\n          (action)=\"subAction($event)\"\n          (closeEvent)=\"sidenav.toggle(); leftArrow = !leftArrow\"\n        ></ws-auth-table-of-contents>\n      </div>\n    </mat-sidenav>\n\n    <mat-sidenav-content class=\"pl-6 pr-6 ml-6\">\n      <div>\n        <ws-auth-edit-meta\n          [parentContent]=\"currentParentId\"\n          [class.hidden]=\"viewMode !== 'meta'\"\n          [isSubmitPressed]=\"isSubmitPressed\"\n          (data)=\"action($event)\"\n        ></ws-auth-edit-meta>\n        <ws-auth-url-upload\n          [isCollectionEditor]=\"true\"\n          *ngIf=\"viewMode === 'curate'\"\n          [isSubmitPressed]=\"isSubmitPressed\"\n          (data)=\"action($event)\"\n        ></ws-auth-url-upload>\n        <ws-auth-file-upload\n          [isCollectionEditor]=\"true\"\n          *ngIf=\"viewMode === 'upload'\"\n          [isSubmitPressed]=\"isSubmitPressed\"\n          (data)=\"action($event)\"\n        >\n        </ws-auth-file-upload>\n      </div>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</ng-container>\n<div *ngIf=\"previewIdentifier\">\n  <mat-icon\n    (click)=\"closePreview()\"\n    class=\"close-preview\"\n    matTooltip=\"Back\"\n    i18n-matTooltip=\"Back button to go to previous page\"\n  >\n    arrow_back</mat-icon\n  >\n  <ws-auth-viewer [identifier]=\"previewIdentifier\" [mimeTypeRoute]=\"mimeTypeRoute\"></ws-auth-viewer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-collection/course-collection.component.html":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-collection/course-collection.component.html ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ws-author-course-header [buttonConfig]=\"actionButton\" (action)=\"action($event)\" (subAction)=\"subAction($event)\">\n</ws-author-course-header>\n\n<mat-drawer-container autosize=\"true\" id=\"auth-toc\" class=\"example-container\">\n  <mat-drawer mode=\"side\" [(opened)]=\"sideBarOpened\">\n\n    <div class=\"sticky\">\n      <!-- (closeEvent)=\"sidenav.toggle(); leftArrow = !leftArrow\" check on this -->\n\n      <ws-author-auth-toc (action)=\"subAction($event)\" [createdFromCourse]=\"couseCreated\">\n      </ws-author-auth-toc>\n\n      <div class=\"margin-left-l margin-top-m \">\n        <a class=\"flex flex-middle margin-left-l\" (click)=\"showAddchapter = true\"><span class=\"material-icons\">\n            add\n          </span>\n          <p class=\"margin-left-xs margin-remove-bottom cursor-pointer\">Add Content</p>\n        </a>\n\n\n      </div>\n\n    </div>\n\n  </mat-drawer>\n  <mat-drawer-content>\n\n\n\n    <mat-sidenav-container class=\"nav-container\">\n\n\n      <form [formGroup]=\"createTopicForm\" *ngIf=\"showAddchapter\" class=\"margin-left-l\">\n        <div class=\"margin-top-s\">\n          <h1>Build your course by adding Topics</h1>\n          <p>Add your content, quizzes, discussions and publish</p>\n          <p class=\"required margin-remove-bottom\">\n            Hi, Lets start with a Topic name\n          </p>\n          <div class=\"margin-top-xs width-3-5\">\n            <mat-form-field appearance=\"outline\" class=\"margin-top-xs width-1-4\">\n              <input matInput i18n-placeholder placeholder=\"Topic Name\" formControlName=\"topicName\" />\n            </mat-form-field>\n          </div>\n          <div class=\"margin-top-xs width-3-5\">\n            <mat-form-field appearance=\"outline\" class=\"margin-top-xs width-1-4\">\n              <textarea matInput i18n-placeholder placeholder=\"Topic Description\" formControlName=\"topicDescription\">\n            </textarea>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"example-button-container\">\n\n          <button mat-raised-button (click)=\"showAddchapter=false\" class=\"\n          text-white ws-mat-primary-background  mat-button-base margin-right-xl\">Cancel</button>\n\n          <button mat-raised-button [disabled]=\"!createTopicForm.valid\" [matMenuTriggerFor]=\"menu\"\n            aria-label=\"Example icon-button with a menu\" class=\"text-white ws-mat-primary-background  mat-button-base\">\n            <mat-icon>add</mat-icon> Add Topic/Resource\n          </button>\n\n\n\n          <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item (click)=\"setContentType('collection')\">\n              <mat-icon>book</mat-icon>\n              <span>Topic</span>\n            </button>\n            <button mat-menu-item (click)=\"setContentType('assessment')\">\n              <mat-icon>check_circle</mat-icon>\n              <span>Add Assessment</span>\n            </button>\n            <button mat-menu-item (click)=\"setContentType('web')\">\n              <mat-icon>link</mat-icon>\n              <span>Attach a link</span>\n            </button>\n            <button mat-menu-item (click)=\"setContentType('upload')\">\n              <mat-icon>cloud_upload</mat-icon>\n              <span>Upload content</span>\n            </button>\n            <button mat-menu-item (click)=\"setContentType('webModule')\">\n              <mat-icon>insert_drive_file</mat-icon>\n              <span>Web Page</span>\n            </button>\n\n          </mat-menu>\n        </div>\n\n      </form>\n\n      <ws-auth-url-upload [isCollectionEditor]=\"true\" *ngIf=\"!showAddchapter && viewMode === 'curate'\"\n        [isSubmitPressed]=\"isSubmitPressed\" (data)=\"action($event)\"></ws-auth-url-upload>\n      <ws-auth-file-upload [isCollectionEditor]=\"true\" *ngIf=\"!showAddchapter && viewMode === 'upload'\"\n        [isSubmitPressed]=\"isSubmitPressed\" (data)=\"action($event)\">\n      </ws-auth-file-upload>\n      <ws-auth-quiz [isCollectionEditor]=\"true\" *ngIf=\"!showAddchapter && viewMode === 'assessment'\"\n        [isSubmitPressed]=\"isSubmitPressed\" (data)=\"action($event)\"></ws-auth-quiz>\n\n        <ws-auth-web-module-editor  *ngIf=\"!showAddchapter && viewMode === 'webmodule'\" (data)=\"action($event)\">\n        </ws-auth-web-module-editor>\n\n      <ws-auth-edit-meta [parentContent]=\"currentParentId\" [isSubmitPressed]=\"isSubmitPressed\" (data)=\"action($event)\"\n        *ngIf=\"!showAddchapter && viewMode === 'meta'\"></ws-auth-edit-meta>\n\n      <!--  [class.hidden]=\"viewMode !== 'meta'\" -->\n\n      <ws-auth-edit-meta [parentContent]=\"currentParentId\" [isSubmitPressed]=\"isSubmitPressed\" (data)=\"action($event)\"\n        *ngIf=\"!showAddchapter && viewMode !== 'meta'\"></ws-auth-edit-meta>\n\n\n    </mat-sidenav-container>\n  </mat-drawer-content>\n</mat-drawer-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-header/course-header.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-header/course-header.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"mat-primary mat-elevation-z3\">\n\n  <span class=\"material-icons\" routerLink=\"/page/home\" i18n-matTooltip matTooltip=\"Home\">\n    home\n  </span>\n\n  <img [src]=\"appIcon \" alt=\" Logo\" class=\"app-logo viewer-logo\" />\n\n\n\n  <ng-container *ngIf=\" courseNameHeader\">\n    <a routerLink=\"/page/home\" i18n-matTooltip matTooltip=\"Home\" class=\"logo-dim\">\n      <img [src]=\"appIcon\" alt=\"Application Logo\" id=\"app-logo\" class=\"app-logo\" />\n    </a>\n    <h3 class=\"mt-name margin-left-l\">{{courseNameHeader}}</h3>\n\n    <span class=\"spacer width-1-1\"></span>\n\n    <mat-icon i18n-matTooltip matTooltip=\"Course Settings\" class=\"margin-right-l\" (click)=\"showCourseSettings()\">\n      settings</mat-icon>\n\n    <div *ngFor=\"let button of requiredConfig || []\" class=\"button-grid cursor-pointer\"\n      (click)=\"action.next(button.event)\">\n      <button mat-raised-button class=\" header-btn text-white ws-mat-primary-background mat-button-base margin-right-l\">\n        <!-- <mat-icon class=\"text-white small-icon ws-mat-primary-text\">{{ button.icon }}</mat-icon> -->\n        {{ button.title }}\n      </button>\n\n    </div>\n\n\n    <!-- <button  mat-raised-button i18n class=\"header-btn text-white ws-mat-primary-background mat-button-base\" (click)=\"headerService.saveCourseContent()\">\n          Save</button> -->\n\n\n  </ng-container>\n\n\n\n  <span class=\"header-spacer\"></span>\n\n\n\n\n</mat-toolbar>");

/***/ }),

/***/ "./project/ws/author/src/lib/constants/depth-rule.ts":
/*!***********************************************************!*\
  !*** ./project/ws/author/src/lib/constants/depth-rule.ts ***!
  \***********************************************************/
/*! exports provided: DEPTH_RUE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEPTH_RUE", function() { return DEPTH_RUE; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const DEPTH_RUE = {
    'Learning Path': 4,
    Course: 3,
    Collection: 2,
    Resource: 1,
};


/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/collection-routing.module.ts":
/*!******************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/collection-routing.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: CollectionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionRoutingModule", function() { return CollectionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_course_collection_course_collection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/course-collection/course-collection.component */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-collection/course-collection.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");


// import { CollectionComponent } from './components/collection/collection.component'


const routes = [
    {
        path: '',
        component: _components_course_collection_course_collection_component__WEBPACK_IMPORTED_MODULE_1__["CourseCollectionComponent"],
    },
];
let CollectionRoutingModule = class CollectionRoutingModule {
};
CollectionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        providers: [],
    })
], CollectionRoutingModule);



/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/collection.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/collection.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CollectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionModule", function() { return CollectionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
/* harmony import */ var _ws_author_src_lib_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/shared.module */ "./project/ws/author/src/lib/modules/shared/shared.module.ts");
/* harmony import */ var _ws_author_src_lib_modules_viewer_viewer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ws/author/src/lib/modules/viewer/viewer.module */ "./project/ws/author/src/lib/modules/viewer/viewer.module.ts");
/* harmony import */ var _ws_author_src_lib_routing_modules_editor_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ws/author/src/lib/routing/modules/editor/shared/shared.module */ "./project/ws/author/src/lib/routing/modules/editor/shared/shared.module.ts");
/* harmony import */ var _curate_curate_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../curate/curate.module */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/curate/curate.module.ts");
/* harmony import */ var _upload_upload_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../upload/upload.module */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/upload/upload.module.ts");
/* harmony import */ var _collection_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./collection-routing.module */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/collection-routing.module.ts");
/* harmony import */ var _components_auth_collection_matmenu_auth_collection_matmenu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/auth-collection-matmenu/auth-collection-matmenu.component */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-collection-matmenu/auth-collection-matmenu.component.ts");
/* harmony import */ var _components_auth_editor_options_auth_editor_options_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/auth-editor-options/auth-editor-options.component */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-editor-options/auth-editor-options.component.ts");
/* harmony import */ var _components_auth_table_of_contents_auth_table_of_contents_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/auth-table-of-contents/auth-table-of-contents.component */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-of-contents/auth-table-of-contents.component.ts");
/* harmony import */ var _components_auth_table_tree_label_auth_table_tree_label_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/auth-table-tree-label/auth-table-tree-label.component */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-tree-label/auth-table-tree-label.component.ts");
/* harmony import */ var _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/collection/collection.component */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/collection/collection.component.ts");
/* harmony import */ var _components_course_collection_course_collection_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/course-collection/course-collection.component */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-collection/course-collection.component.ts");
/* harmony import */ var _components_auth_toc_auth_toc_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/auth-toc/auth-toc.component */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-toc/auth-toc.component.ts");
/* harmony import */ var _quiz_quiz_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../quiz/quiz.module */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/quiz/quiz.module.ts");
/* harmony import */ var _components_course_header_course_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/course-header/course-header.component */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-header/course-header.component.ts");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");
/* harmony import */ var _web_page_web_page_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./../web-page/web-page.module */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/web-page/web-page.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");























let CollectionModule = class CollectionModule {
};
CollectionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_15__["CollectionComponent"],
            _components_auth_table_of_contents_auth_table_of_contents_component__WEBPACK_IMPORTED_MODULE_13__["AuthTableOfContentsComponent"],
            _components_auth_editor_options_auth_editor_options_component__WEBPACK_IMPORTED_MODULE_12__["AuthEditorOptionsComponent"],
            _components_auth_table_tree_label_auth_table_tree_label_component__WEBPACK_IMPORTED_MODULE_14__["AuthTableTreeLabelComponent"],
            _components_auth_collection_matmenu_auth_collection_matmenu_component__WEBPACK_IMPORTED_MODULE_11__["AuthCollectionMatmenuComponent"],
            _components_course_collection_course_collection_component__WEBPACK_IMPORTED_MODULE_16__["CourseCollectionComponent"],
            _components_auth_toc_auth_toc_component__WEBPACK_IMPORTED_MODULE_17__["AuthTocComponent"],
            _components_course_header_course_header_component__WEBPACK_IMPORTED_MODULE_19__["CourseHeaderComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _collection_routing_module__WEBPACK_IMPORTED_MODULE_10__["CollectionRoutingModule"],
            _ws_author_src_lib_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ws_author_src_lib_routing_modules_editor_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["EditorSharedModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
            _ws_author_src_lib_modules_viewer_viewer_module__WEBPACK_IMPORTED_MODULE_6__["AuthViewerModule"],
            _upload_upload_module__WEBPACK_IMPORTED_MODULE_9__["UploadModule"],
            _curate_curate_module__WEBPACK_IMPORTED_MODULE_8__["CurateModule"],
            _quiz_quiz_module__WEBPACK_IMPORTED_MODULE_18__["QuizModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_20__["BtnPageBackModule"],
            _web_page_web_page_module__WEBPACK_IMPORTED_MODULE_21__["WebPageModule"],
        ],
    })
], CollectionModule);



/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-collection-matmenu/auth-collection-matmenu.component.scss":
/*!***************************************************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-collection-matmenu/auth-collection-matmenu.component.scss ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9hdXRoLWNvbGxlY3Rpb24tbWF0bWVudS9hdXRoLWNvbGxlY3Rpb24tbWF0bWVudS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-collection-matmenu/auth-collection-matmenu.component.ts":
/*!*************************************************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-collection-matmenu/auth-collection-matmenu.component.ts ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: AuthCollectionMatmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthCollectionMatmenuComponent", function() { return AuthCollectionMatmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthCollectionMatmenuComponent = class AuthCollectionMatmenuComponent {
    constructor() {
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    click(action, type) {
        this.action.emit({ action, type });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AuthCollectionMatmenuComponent.prototype, "action", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AuthCollectionMatmenuComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AuthCollectionMatmenuComponent.prototype, "childType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childMenu', { static: true })
], AuthCollectionMatmenuComponent.prototype, "childMenu", void 0);
AuthCollectionMatmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-auth-collection-matmenu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-collection-matmenu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-collection-matmenu/auth-collection-matmenu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth-collection-matmenu.component.scss */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-collection-matmenu/auth-collection-matmenu.component.scss")).default]
    })
], AuthCollectionMatmenuComponent);



/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-editor-options/auth-editor-options.component.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-editor-options/auth-editor-options.component.scss ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".op500 {\n  opacity: 0.5;\n}\n\n.menu-icon {\n  position: relative;\n  top: 2px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9hdXRoLWVkaXRvci1vcHRpb25zL2F1dGgtZWRpdG9yLW9wdGlvbnMuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9hdXRoLWVkaXRvci1vcHRpb25zL2F1dGgtZWRpdG9yLW9wdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdC93cy9hdXRob3Ivc3JjL2xpYi9yb3V0aW5nL21vZHVsZXMvZWRpdG9yL3JvdXRpbmcvbW9kdWxlcy9jb2xsZWN0aW9uL2NvbXBvbmVudHMvYXV0aC1lZGl0b3Itb3B0aW9ucy9hdXRoLWVkaXRvci1vcHRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wNTAwIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubWVudS1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuIiwiLm9wNTAwIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubWVudS1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-editor-options/auth-editor-options.component.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-editor-options/auth-editor-options.component.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: AuthEditorOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEditorOptionsComponent", function() { return AuthEditorOptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ws_author_src_lib_constants_depth_rule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ws/author/src/lib/constants/depth-rule */ "./project/ws/author/src/lib/constants/depth-rule.ts");
/* harmony import */ var _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ws/author/src/lib/routing/modules/editor/services/editor-content.service */ "./project/ws/author/src/lib/routing/modules/editor/services/editor-content.service.ts");
/* harmony import */ var _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ws/author/src/lib/services/init.service */ "./project/ws/author/src/lib/services/init.service.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/store.service */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/store.service.ts");






let AuthEditorOptionsComponent = class AuthEditorOptionsComponent {
    constructor(authInitService, accessService, storeService) {
        this.authInitService = authInitService;
        this.accessService = accessService;
        this.storeService = storeService;
        this.isInvalid = true;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.allowedChild = [];
        this.allowedSibling = [];
        this.canEdit = false;
        this.contentEditDisabled = false;
        this.metaEditDisabled = false;
    }
    ngOnInit() {
        this.creationContent = this.authInitService.creationEntity;
        const childrenConfig = this.authInitService.collectionConfig.childrenConfig;
        const contentTypeConfig = childrenConfig[this.node.category];
        const content = this.accessService.getUpdatedMeta(this.node.identifier);
        this.contentEditDisabled = content.isContentEditingDisabled;
        this.metaEditDisabled = content.isMetaEditingDisabled;
        this.canEdit = this.accessService.hasAccess(content);
        if (contentTypeConfig &&
            this.node.editable &&
            this.canEdit &&
            contentTypeConfig.allowCreation) {
            this.allowedChild = this.formChildren(contentTypeConfig, this.node.level + 1);
        }
        if (this.node.parentId) {
            const parentType = this.storeService.flatNodeMap.get(this.node.parentId);
            const parentContent = this.accessService.getUpdatedMeta(parentType.identifier);
            if (parentType &&
                childrenConfig[parentType.category] &&
                this.node.editable &&
                !parentContent.isContentEditingDisabled &&
                this.accessService.hasAccess(parentContent) &&
                childrenConfig[parentType.category].allowCreation) {
                this.allowedSibling = this.formChildren(childrenConfig[parentType.category], this.node.level);
            }
        }
    }
    formChildren(contentTypeConfig, currentDepth) {
        const topLevel = Array.from(this.creationContent.values());
        const child = [];
        topLevel.forEach(v => {
            if (v.id !== 'resource' &&
                v.id !== 'collection' &&
                contentTypeConfig.allowedCreationType &&
                contentTypeConfig.allowedCreationType.includes(v.id) &&
                this.authInitService.collectionConfig.maxDepth >=
                    currentDepth + (_ws_author_src_lib_constants_depth_rule__WEBPACK_IMPORTED_MODULE_2__["DEPTH_RUE"][v.contentType] || 1)) {
                child.push(this.recursiveAddFunction(v));
            }
        });
        return child;
    }
    recursiveAddFunction(content) {
        const children = [];
        const returnValue = {
            children,
            id: content.id,
            name: content.name,
            icon: content.icon,
        };
        // if (content.id === 'resource' && content.children) {
        //   // console.log('children==>', content.children)
        //   content.children.forEach(v => {
        //     const entity = this.authInitService.creationEntity.get(v)
        //     // console.log('entity==>', entity)
        //     if (
        //       entity &&
        //       allowedType.includes(entity.id) &&
        //       this.authInitService.collectionConfig.maxDepth >=
        //       currentDepth + (DEPTH_RUE[entity.contentType] || 1)
        //     ) {
        //       children.push(this.recursiveAddFunction(entity, allowedType, currentDepth))
        //     }
        //   })
        // }
        return returnValue;
    }
    click(action, type) {
        this.action.emit({ action, type });
    }
};
AuthEditorOptionsComponent.ctorParameters = () => [
    { type: _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_4__["AuthInitService"] },
    { type: _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_3__["EditorContentService"] },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_5__["CollectionStoreService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AuthEditorOptionsComponent.prototype, "node", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AuthEditorOptionsComponent.prototype, "isInvalid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AuthEditorOptionsComponent.prototype, "action", void 0);
AuthEditorOptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-auth-editor-options',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-editor-options.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-editor-options/auth-editor-options.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth-editor-options.component.scss */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-editor-options/auth-editor-options.component.scss")).default]
    })
], AuthEditorOptionsComponent);



/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-of-contents/auth-table-of-contents.component.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-of-contents/auth-table-of-contents.component.scss ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-card {\n  height: 60px;\n  line-height: 50px;\n}\n\n.node-name {\n  max-width: 185px;\n  min-width: 145px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n\n.node-name + .placeholder {\n  margin-top: 19px;\n}\n\n.placeholder {\n  z-index: 2;\n  margin-top: -24px;\n  position: absolute;\n}\n\n.placeholder.second {\n  margin-top: 16px;\n}\n\n.placeholder .dot {\n  position: absolute;\n  background: #e3165b;\n  border-radius: 10px;\n  height: 6px;\n  width: 6px;\n}\n\n.placeholder .line {\n  position: absolute;\n  background: rgba(0, 0, 0, 0.54);\n  left: 6px;\n  top: 2px;\n  height: 1px;\n  width: 144px;\n}\n\n.mat-tree-node {\n  cursor: pointer;\n  min-height: 35px !important;\n  height: 35px !important;\n  margin-top: 5px;\n  border-radius: 5px;\n}\n\n.cdk-drag-preview {\n  background-color: grey;\n  margin-top: 15px;\n  margin-left: 15px;\n  position: relative;\n  padding: 5px;\n}\n\n.cdk-drag-preview mat-icon {\n  top: 4px;\n  position: absolute;\n}\n\n.cdk-drag-preview span {\n  margin-left: 30px;\n}\n\n.node-icon {\n  padding-left: 5px;\n  padding-right: 10px;\n  top: 1px;\n  position: relative;\n}\n\n.menu-icon {\n  position: relative;\n  top: 2px;\n  font-size: 20px;\n}\n\n.mat-menu-content {\n  padding: 0px;\n}\n\n.mat-menu-item {\n  height: 35px;\n  line-height: 35px;\n  min-width: 200px;\n}\n\nmat-tree {\n  max-height: 650px;\n  overflow: hidden;\n  width: 310px;\n  -webkit-overflow-scrolling: touch;\n}\n\nmat-tree:hover {\n  overflow: auto;\n}\n\nmat-tree::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n@media (hover: none) {\n  mat-tree::-webkit-scrollbar {\n    width: 0px !important;\n    height: 0px !important;\n  }\n}\n\n@media (pointer: coarse) {\n  mat-tree::-webkit-scrollbar {\n    width: 0px !important;\n    height: 0px !important;\n  }\n  mat-tree::-webkit-scrollbar::-webkit-scrollbar-track {\n    background: transparent;\n  }\n}\n\nmat-tree::-webkit-scrollbar-track {\n  background: #cfcfcf;\n}\n\nmat-tree::-webkit-scrollbar-thumb {\n  background: #9e9e9e;\n}\n\nmat-tree::-webkit-scrollbar-thumb:hover {\n  background: #707070;\n}\n\n.op500 {\n  opacity: 0.5;\n}\n\n.drag {\n  margin-right: 10px;\n}\n\n.transitionD {\n  transition: all 1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9hdXRoLXRhYmxlLW9mLWNvbnRlbnRzL2F1dGgtdGFibGUtb2YtY29udGVudHMuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9hdXRoLXRhYmxlLW9mLWNvbnRlbnRzL2F1dGgtdGFibGUtb2YtY29udGVudHMuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvc3R5bGVzL193cy12YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURNQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUF1Qiw0QkFBQTtFQUN2Qiw0QkFBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRkY7O0FESUU7RUFDRSxnQkFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNISjs7QURNRTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSko7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0xGOztBRFFBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDTEY7O0FET0U7RUFDRSxRQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURRRTtFQUNFLGlCQUFBO0FDTko7O0FEVUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDUEY7O0FEVUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FDUEY7O0FEVUE7RUFDRSxZQUFBO0FDUEY7O0FEVUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1BGOztBRFVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFLQSxpQ0FBQTtBQ1hGOztBRE9FO0VBQ0UsY0FBQTtBQ0xKOztBRFVFO0VBQ0UsVUVwR007RUZxR04sV0VyR007QUQ2RlY7O0FEVUk7RUFKRjtJQU1JLHFCQURjO0lBRWQsc0JBRmM7RUNObEI7QUFDRjs7QURVSTtFQVZGO0lBWUkscUJBRGM7SUFFZCxzQkFGYztFQ05sQjtFRFVJO0lBQ0UsdUJBQUE7RUNSTjtBQUNGOztBRFlFO0VBQ0UsbUJBQUE7QUNWSjs7QURhRTtFQUNFLG1CQUFBO0FDWEo7O0FEY0U7RUFDRSxtQkFBQTtBQ1pKOztBRGdCQTtFQUNFLFlBQUE7QUNiRjs7QURnQkE7RUFDRSxrQkFBQTtBQ2JGOztBRGdCQTtFQUNFLGtCQUFBO0FDYkYiLCJmaWxlIjoicHJvamVjdC93cy9hdXRob3Ivc3JjL2xpYi9yb3V0aW5nL21vZHVsZXMvZWRpdG9yL3JvdXRpbmcvbW9kdWxlcy9jb2xsZWN0aW9uL2NvbXBvbmVudHMvYXV0aC10YWJsZS1vZi1jb250ZW50cy9hdXRoLXRhYmxlLW9mLWNvbnRlbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuQGltcG9ydCAnc3R5bGVzL193cy1taXhpbnMuc2Nzcyc7XG5cbi5jdXN0b20tY2FyZCB7XG4gIGhlaWdodDogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIC8vdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm9kZS1uYW1lIHtcbiAgbWF4LXdpZHRoOiAxODVweDtcbiAgbWluLXdpZHRoOiAxNDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7IC8qIG51bWJlciBvZiBsaW5lcyB0byBzaG93ICovXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi5ub2RlLW5hbWUgKyAucGxhY2Vob2xkZXIge1xuICBtYXJnaW4tdG9wOiAxOXB4O1xufVxuXG4ucGxhY2Vob2xkZXIge1xuICB6LWluZGV4OiAyO1xuICBtYXJnaW4tdG9wOiAtMjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICYuc2Vjb25kIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5cbiAgLmRvdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6ICNlMzE2NWI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICB3aWR0aDogNnB4O1xuICB9XG5cbiAgLmxpbmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgIGxlZnQ6IDZweDtcbiAgICB0b3A6IDJweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMTQ0cHg7XG4gIH1cbn1cblxuLm1hdC10cmVlLW5vZGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweDtcblxuICBtYXQtaWNvbiB7XG4gICAgdG9wOiA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIH1cbn1cblxuLm5vZGUtaWNvbiB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB0b3A6IDFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWVudS1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubWF0LW1lbnUtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLm1hdC1tZW51LWl0ZW0ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG5tYXQtdHJlZSB7XG4gIG1heC1oZWlnaHQ6IDY1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMzEwcHg7XG4gICY6aG92ZXIge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHNpemUteHM7XG4gICAgaGVpZ2h0OiAkc2l6ZS14cztcblxuICAgIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICRzY3JvbGwtc2l6ZTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogJHNjcm9sbC1zaXplO1xuICAgICAgaGVpZ2h0OiAkc2Nyb2xsLXNpemU7XG4gICAgfVxuXG4gICAgQG1lZGlhIChwb2ludGVyOiBjb2Fyc2UpIHtcbiAgICAgICRzY3JvbGwtc2l6ZTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogJHNjcm9sbC1zaXplO1xuICAgICAgaGVpZ2h0OiAkc2Nyb2xsLXNpemU7XG5cbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICNjZmNmY2Y7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogIzllOWU5ZTtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNzA3MDcwO1xuICB9XG59XG5cbi5vcDUwMCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmRyYWcge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi50cmFuc2l0aW9uRCB7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbn1cbiIsIi5jdXN0b20tY2FyZCB7XG4gIGhlaWdodDogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG59XG5cbi5ub2RlLW5hbWUge1xuICBtYXgtd2lkdGg6IDE4NXB4O1xuICBtaW4td2lkdGg6IDE0NXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgLyogbnVtYmVyIG9mIGxpbmVzIHRvIHNob3cgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLm5vZGUtbmFtZSArIC5wbGFjZWhvbGRlciB7XG4gIG1hcmdpbi10b3A6IDE5cHg7XG59XG5cbi5wbGFjZWhvbGRlciB7XG4gIHotaW5kZXg6IDI7XG4gIG1hcmdpbi10b3A6IC0yNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ucGxhY2Vob2xkZXIuc2Vjb25kIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5wbGFjZWhvbGRlciAuZG90IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZTMxNjViO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDZweDtcbiAgd2lkdGg6IDZweDtcbn1cbi5wbGFjZWhvbGRlciAubGluZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgbGVmdDogNnB4O1xuICB0b3A6IDJweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxNDRweDtcbn1cblxuLm1hdC10cmVlLW5vZGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5jZGstZHJhZy1wcmV2aWV3IG1hdC1pY29uIHtcbiAgdG9wOiA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jZGstZHJhZy1wcmV2aWV3IHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLm5vZGUtaWNvbiB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB0b3A6IDFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWVudS1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubWF0LW1lbnUtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLm1hdC1tZW51LWl0ZW0ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG5tYXQtdHJlZSB7XG4gIG1heC1oZWlnaHQ6IDY1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMzEwcHg7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cbm1hdC10cmVlOmhvdmVyIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5tYXQtdHJlZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbn1cbkBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgbWF0LXRyZWU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChwb2ludGVyOiBjb2Fyc2UpIHtcbiAgbWF0LXRyZWU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgfVxuICBtYXQtdHJlZTo6LXdlYmtpdC1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxufVxubWF0LXRyZWU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2NmY2ZjZjtcbn1cbm1hdC10cmVlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM5ZTllOWU7XG59XG5tYXQtdHJlZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNzA3MDcwO1xufVxuXG4ub3A1MDAge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5kcmFnIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udHJhbnNpdGlvbkQge1xuICB0cmFuc2l0aW9uOiBhbGwgMXM7XG59IiwiJGZvbnQtZmFtaWx5LXNhbnM6ICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsXG4gICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJyxcbiAgJ05vdG8gQ29sb3IgRW1vamknO1xuJGZvbnQtZmFtaWx5LXNlcmlmOiBHZW9yZ2lhLCBDYW1icmlhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuJGZvbnQtZmFtaWx5LW1vbm86IE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuJGZvbnQtZmFtaWx5LW9wZW4tc2FuczogJ09wZW4gU2Fucyc7XG4kZm9udC1mYW1pbHktb3Blbi1wb3BwaW5zOiAnUm9ib3RvJztcblxuXG4kc2l6ZS14czogOHB4O1xuJHNpemUtczogMTJweDtcbiRzaXplLW06IDE2cHg7XG4kc2l6ZS1sOiAyNHB4O1xuJHNpemUteGw6IDMycHg7XG4kc2l6ZS1sZzogMjhweDtcbiRzaXplLXh4bDogNDBweDtcblxuJG1hdC10b29sYmFyLXhzOiA1MnB4O1xuJG1hdC10b29sYmFyLWd0LXhzOiA1NnB4O1xuIl19 */");

/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-of-contents/auth-table-of-contents.component.ts":
/*!***********************************************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-of-contents/auth-table-of-contents.component.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: AuthTableOfContentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTableOfContentsComponent", function() { return AuthTableOfContentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
/* harmony import */ var _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ws/author/src/lib/constants/constant */ "./project/ws/author/src/lib/constants/constant.ts");
/* harmony import */ var _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ws/author/src/lib/constants/notificationMessage */ "./project/ws/author/src/lib/constants/notificationMessage.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component */ "./project/ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/notification/notification.component */ "./project/ws/author/src/lib/modules/shared/components/notification/notification.component.ts");
/* harmony import */ var _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ws/author/src/lib/services/init.service */ "./project/ws/author/src/lib/services/init.service.ts");
/* harmony import */ var _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ws/author/src/lib/services/loader.service */ "./project/ws/author/src/lib/services/loader.service.ts");
/* harmony import */ var _services_editor_content_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../services/editor-content.service */ "./project/ws/author/src/lib/routing/modules/editor/services/editor-content.service.ts");
/* harmony import */ var _shared_components_auth_picker_auth_picker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../../../shared/components/auth-picker/auth-picker.component */ "./project/ws/author/src/lib/routing/modules/editor/shared/components/auth-picker/auth-picker.component.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../services/store.service */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/store.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
















let AuthTableOfContentsComponent = class AuthTableOfContentsComponent {
    constructor(dialog, snackBar, store, editorStore, loaderService, authInitService, breakpointObserver) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.store = store;
        this.editorStore = editorStore;
        this.loaderService = loaderService;
        this.authInitService = authInitService;
        this.breakpointObserver = breakpointObserver;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.isDragging = false;
        this.dropContainer = null;
        this.dragContainer = null;
        this.expandDelay = 500;
        this.isDropDisabled = false;
        this.draggingPosition = null;
        this.selectedNode = null;
        this.expandedNodes = new Set();
        this.drawer = true;
        this.menubtn = true;
        this.parentHierarchy = [];
        this.backUpInformation = {
            isDragging: false,
            dropContainer: null,
            dragContainer: null,
            draggingPosition: null,
        };
        this.invalidIds = [];
        this.mediumScreen = false;
        this.mediumSizeBreakpoint$ = this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["Breakpoints"].Small])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["map"])((res) => res.matches));
        this.leftarrow = true;
        this._transformer = (node, level) => {
            return {
                level,
                id: node.id,
                identifier: node.identifier,
                category: node.category,
                expandable: !!node.children && node.children.length > 0,
                children: node.children ? node.children.map(v => v.id) : [],
                editable: node.editable,
                childLoaded: node.childLoaded,
                parentId: node.parentId,
            };
        };
    }
    ngOnInit() {
        this.parentNodeId = this.store.currentParentNode;
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](node => node.level, node => node.expandable);
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlattener"](this._transformer, node => node.level, node => node.expandable, node => node.children);
        this.store.onInvalidNodeChange.subscribe(v => {
            this.invalidIds = v;
            this.expandNodesById(v);
        });
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.store.treeStructureChange.subscribe(data => {
            this.dataSource.data = [data];
            if (this.parentNodeId === this.store.currentParentNode) {
                this.expandNodesById();
                if (this.selectedNode && !this.store.flatNodeMap.get(this.selectedNode)) {
                    this.parentHierarchy.forEach(v => {
                        if (this.store.flatNodeMap.get(v)) {
                            const identifier = this.store.uniqueIdMap.get(v);
                            this.selectedNode = v;
                            this.editorStore.currentContent = identifier;
                            this.store.currentSelectedNode = v;
                            this.editorStore.changeActiveCont.next(identifier);
                            return;
                        }
                    });
                }
            }
            else {
                this.parentNodeId = this.store.currentParentNode;
            }
        });
        this.store.selectedNodeChange.subscribe(data => {
            if (data) {
                this.selectedNode = data;
            }
        });
        this.mediumSizeBreakpoint$.subscribe(isLtMedium => {
            this.mediumScreen = isLtMedium;
            if (isLtMedium) {
                this.drawer = true;
                this.leftarrow = false;
                this.menubtn = false;
            }
            else {
                this.leftarrow = true;
                this.menubtn = true;
            }
        });
    }
    ngOnDestroy() {
        this.loaderService.changeLoad.next(false);
    }
    onNodeSelect(node) {
        if (node.id !== this.selectedNode) {
            this.selectedNode = node.id;
            this.editorStore.currentContent = node.identifier;
            this.store.currentSelectedNode = node.id;
            this.editorStore.changeActiveCont.next(node.identifier);
        }
    }
    closeSidenav() {
        this.closeEvent.emit(true);
    }
    dragStart(node) {
        this.isDragging = true;
        this.dragContainer = node;
    }
    dragEnd() {
        this.backUpInformation = {
            isDragging: this.isDragging,
            dropContainer: this.dropContainer,
            dragContainer: this.dragContainer,
            draggingPosition: this.draggingPosition,
        };
        this.isDragging = false;
        this.dropContainer = null;
        this.dragContainer = null;
        this.draggingPosition = null;
    }
    dragHover(node, event) {
        event.preventDefault();
        if (this.isDragging) {
            this.dropContainer = node;
            clearTimeout(this.expandTimeout);
            this.expandTimeout = setTimeout(() => {
                this.treeControl.expand(node);
                // tslint:disable-next-line: align
            }, this.expandDelay);
            const percentageY = event.offsetY / event.target.clientHeight;
            if (percentageY >= 0 && percentageY < 0.2) {
                this.draggingPosition = 'above';
            }
            else if (percentageY > 0.8) {
                this.draggingPosition = 'below';
            }
            else if (percentageY >= 0.2 && percentageY <= 0.8) {
                this.draggingPosition = 'center';
            }
            const parentHierarchy = [];
            let currNode = node;
            while (currNode) {
                if (currNode && currNode.parentId) {
                    parentHierarchy.push(currNode.parentId);
                }
                currNode = this.getParentNode(currNode);
            }
            if (parentHierarchy.includes(this.dragContainer.id)) {
                this.isDropDisabled = true;
            }
            else if (this.dragContainer === this.dropContainer) {
                this.isDropDisabled = true;
            }
            else if (['above', 'below'].includes(this.draggingPosition)) {
                const parentNode = this.getParentNode(node);
                this.isDropDisabled = !parentNode
                    ? true
                    : !this.store.allowDrop(this.dragContainer, parentNode);
            }
            else {
                this.isDropDisabled = !this.store.allowDrop(this.dragContainer, this.dropContainer);
            }
        }
    }
    dragHoverEnd($event) {
        $event.preventDefault();
        if (this.isDragging) {
            clearTimeout(this.expandTimeout);
            this.backUpInformation.dropContainer = this.dropContainer;
            this.dropContainer = null;
        }
    }
    drop() {
        this.isDragging = false;
        if (!this.isDropDisabled) {
            this.preserveExpandedNodes();
            const isAdjacentDrop = ['above', 'below'].includes(this.backUpInformation.draggingPosition);
            const dropContainer = isAdjacentDrop
                ? this.getParentNode(this.backUpInformation.dropContainer)
                : this.backUpInformation.dropContainer;
            if (dropContainer.id !== this.backUpInformation.dragContainer.id) {
                this.store.dragAndDrop(this.backUpInformation.dragContainer, dropContainer, isAdjacentDrop ? this.backUpInformation.dropContainer.id : undefined, this.backUpInformation.draggingPosition);
            }
        }
    }
    preserveExpandedNodes() {
        this.expandedNodes = new Set();
        this.treeControl.dataNodes.forEach(v => {
            if (this.treeControl.isExpandable(v) && this.treeControl.isExpanded(v)) {
                this.expandedNodes.add(v.id);
            }
        });
    }
    expandNodesById(ids) {
        const idSet = ids ? new Set(ids) : this.expandedNodes;
        this.treeControl.dataNodes.forEach(node => {
            if (idSet.has(node.id)) {
                this.treeControl.expand(node);
                let parent = this.getParentNode(node);
                while (parent) {
                    this.treeControl.expand(parent);
                    parent = this.getParentNode(parent);
                }
            }
        });
    }
    /*
     Get the parent node of a node
      */
    getParentNode(node) {
        const currentLevel = node.level;
        if (currentLevel < 1) {
            return null;
        }
        const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
        for (let i = startIndex; i >= 0; i = i - 1) {
            const currentNode = this.treeControl.dataNodes[i];
            if (currentNode.level < currentLevel) {
                return currentNode;
            }
        }
        return null;
    }
    delete(node) {
        const dialogRef = this.dialog.open(_ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogComponent"], {
            width: '500px',
            height: '175px',
            data: 'deleteTreeNode',
        });
        this.preserveExpandedNodes();
        dialogRef.afterClosed().subscribe(confirm => {
            if (confirm) {
                this.parentHierarchy = [];
                let currNode = node;
                while (currNode) {
                    if (currNode && currNode.parentId) {
                        this.parentHierarchy.push(currNode.parentId);
                    }
                    currNode = this.getParentNode(currNode);
                }
                this.store.deleteNode(node.id);
                this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"], {
                    data: {
                        type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SUCCESS,
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000,
                });
            }
        });
    }
    addChildOrSibling(node, asSibling = false) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const children = (node.children || []).map(v => this.store.uniqueIdMap.get(v));
            const dialogRef = this.dialog.open(_shared_components_auth_picker_auth_picker_component__WEBPACK_IMPORTED_MODULE_12__["AuthPickerComponent"], {
                width: '90vw',
                height: '90vh',
                data: {
                    filter: this.authInitService.collectionConfig.childrenConfig[node.category].searchFilter,
                    selectedIds: children,
                },
            });
            this.preserveExpandedNodes();
            dialogRef.afterClosed().subscribe((contents) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (contents && contents.length) {
                    const parentNode = (asSibling ? this.getParentNode(node) : node);
                    this.expandedNodes.add(parentNode.id);
                    this.loaderService.changeLoad.next(true);
                    const isDone = yield this.store.addChildOrSibling(contents, parentNode, asSibling ? node.id : undefined, 'below');
                    this.loaderService.changeLoad.next(false);
                    this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"], {
                        data: {
                            type: isDone ? _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SUCCESS : _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].FAIL,
                        },
                        duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000,
                    });
                }
            }));
        });
    }
    createNewChildOrSibling(type, node, asSibling = false) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const parentNode = (asSibling ? this.getParentNode(node) : node);
            this.loaderService.changeLoad.next(true);
            this.preserveExpandedNodes();
            this.expandedNodes.add(parentNode.id);
            const isDone = yield this.store.createChildOrSibling(type, parentNode, asSibling ? node.id : undefined, 'below');
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"], {
                data: {
                    type: isDone ? _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SUCCESS : _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].FAIL,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000,
            });
            this.loaderService.changeLoad.next(false);
        });
    }
    takeAction(action, node, type) {
        switch (action) {
            case 'editMeta':
            case 'editContent':
            case 'preview':
                this.onNodeSelect(node);
                this.action.emit({ type: action, identifier: node.identifier });
                break;
            case 'delete':
                this.delete(node);
                break;
            case 'addChild':
                this.addChildOrSibling(node);
                break;
            case 'addSibling':
                this.addChildOrSibling(node, true);
                break;
            case 'createChild':
                this.createNewChildOrSibling(type, node);
                break;
            case 'createSibling':
                this.createNewChildOrSibling(type, node, true);
                break;
            default:
                break;
        }
    }
};
AuthTableOfContentsComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_13__["CollectionStoreService"] },
    { type: _services_editor_content_service__WEBPACK_IMPORTED_MODULE_11__["EditorContentService"] },
    { type: _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"] },
    { type: _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_9__["AuthInitService"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["BreakpointObserver"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], AuthTableOfContentsComponent.prototype, "action", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], AuthTableOfContentsComponent.prototype, "closeEvent", void 0);
AuthTableOfContentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ws-auth-table-of-contents',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-table-of-contents.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-of-contents/auth-table-of-contents.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth-table-of-contents.component.scss */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-of-contents/auth-table-of-contents.component.scss")).default]
    })
], AuthTableOfContentsComponent);



/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-tree-label/auth-table-tree-label.component.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-tree-label/auth-table-tree-label.component.scss ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".node-name {\n  position: relative;\n  top: 2px;\n  max-width: 185px;\n  min-width: 145px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n\n.node-icon {\n  padding-left: 5px;\n  padding-right: 10px;\n  top: 1px;\n  position: relative;\n}\n\ndiv {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9hdXRoLXRhYmxlLXRyZWUtbGFiZWwvYXV0aC10YWJsZS10cmVlLWxhYmVsLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hdXRob3Ivc3JjL2xpYi9yb3V0aW5nL21vZHVsZXMvZWRpdG9yL3JvdXRpbmcvbW9kdWxlcy9jb2xsZWN0aW9uL2NvbXBvbmVudHMvYXV0aC10YWJsZS10cmVlLWxhYmVsL2F1dGgtdGFibGUtdHJlZS1sYWJlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUF1Qiw0QkFBQTtFQUN2Qiw0QkFBQTtBQ0VGOztBRENBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtBQ0VGIiwiZmlsZSI6InByb2plY3Qvd3MvYXV0aG9yL3NyYy9saWIvcm91dGluZy9tb2R1bGVzL2VkaXRvci9yb3V0aW5nL21vZHVsZXMvY29sbGVjdGlvbi9jb21wb25lbnRzL2F1dGgtdGFibGUtdHJlZS1sYWJlbC9hdXRoLXRhYmxlLXRyZWUtbGFiZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9kZS1uYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbiAgbWF4LXdpZHRoOiAxODVweDtcbiAgbWluLXdpZHRoOiAxNDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7IC8qIG51bWJlciBvZiBsaW5lcyB0byBzaG93ICovXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi5ub2RlLWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgdG9wOiAxcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbiIsIi5ub2RlLW5hbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xuICBtYXgtd2lkdGg6IDE4NXB4O1xuICBtaW4td2lkdGg6IDE0NXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgLyogbnVtYmVyIG9mIGxpbmVzIHRvIHNob3cgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLm5vZGUtaWNvbiB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB0b3A6IDFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */");

/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-tree-label/auth-table-tree-label.component.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-tree-label/auth-table-tree-label.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: AuthTableTreeLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTableTreeLabelComponent", function() { return AuthTableTreeLabelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ws/author/src/lib/routing/modules/editor/services/editor-content.service */ "./project/ws/author/src/lib/routing/modules/editor/services/editor-content.service.ts");
/* harmony import */ var _services_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/resolver.service */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/resolver.service.ts");




let AuthTableTreeLabelComponent = class AuthTableTreeLabelComponent {
    constructor(storeService, resolverService) {
        this.storeService = storeService;
        this.resolverService = resolverService;
        this.isDragging = false;
        this.isInvalid = false;
        this.name = '';
        this.icon = '';
    }
    ngOnInit() {
        this.storeService.onContentChange.subscribe(v => {
            if (v === this.identifier) {
                this.getUpdatedContent();
            }
        });
        this.getUpdatedContent();
    }
    getUpdatedContent() {
        const updatedMeta = this.storeService.getUpdatedMeta(this.identifier);
        this.name = updatedMeta.name;
        this.icon = this.resolverService.getIcon(updatedMeta);
    }
};
AuthTableTreeLabelComponent.ctorParameters = () => [
    { type: _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_2__["EditorContentService"] },
    { type: _services_resolver_service__WEBPACK_IMPORTED_MODULE_3__["CollectionResolverService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AuthTableTreeLabelComponent.prototype, "identifier", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AuthTableTreeLabelComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AuthTableTreeLabelComponent.prototype, "isDragging", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AuthTableTreeLabelComponent.prototype, "isInvalid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AuthTableTreeLabelComponent.prototype, "icon", void 0);
AuthTableTreeLabelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-auth-table-tree-label',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-table-tree-label.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-tree-label/auth-table-tree-label.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth-table-tree-label.component.scss */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-table-tree-label/auth-table-tree-label.component.scss")).default]
    })
], AuthTableTreeLabelComponent);



/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-toc/auth-toc.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-toc/auth-toc.component.scss ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#cdk-drop-list-0 > mat-tree-node:nth-child(1) {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9hdXRoLXRvYy9hdXRoLXRvYy5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXV0aG9yL3NyYy9saWIvcm91dGluZy9tb2R1bGVzL2VkaXRvci9yb3V0aW5nL21vZHVsZXMvY29sbGVjdGlvbi9jb21wb25lbnRzL2F1dGgtdG9jL2F1dGgtdG9jLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3Qvd3MvYXV0aG9yL3NyYy9saWIvcm91dGluZy9tb2R1bGVzL2VkaXRvci9yb3V0aW5nL21vZHVsZXMvY29sbGVjdGlvbi9jb21wb25lbnRzL2F1dGgtdG9jL2F1dGgtdG9jLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Nkay1kcm9wLWxpc3QtMCA+IG1hdC10cmVlLW5vZGU6bnRoLWNoaWxkKDEpIHtcbiAgICBkaXNwbGF5OiBub25lXG59XG4vLyAjY2RrLWRyb3AtbGlzdC0wID4gbWF0LXRyZWUtbm9kZTpudGgtY2hpbGQoMikge1xuLy8gICAgIGJhY2tncm91bmQ6IHJnYmEoMzIsIDE1MCwgMjA1LCAwLjMpO1xuLy8gfVxuXG4iLCIjY2RrLWRyb3AtbGlzdC0wID4gbWF0LXRyZWUtbm9kZTpudGgtY2hpbGQoMSkge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-toc/auth-toc.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-toc/auth-toc.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: AuthTocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTocComponent", function() { return AuthTocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
/* harmony import */ var _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ws/author/src/lib/constants/constant */ "./project/ws/author/src/lib/constants/constant.ts");
/* harmony import */ var _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ws/author/src/lib/constants/notificationMessage */ "./project/ws/author/src/lib/constants/notificationMessage.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component */ "./project/ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/notification/notification.component */ "./project/ws/author/src/lib/modules/shared/components/notification/notification.component.ts");
/* harmony import */ var _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ws/author/src/lib/services/init.service */ "./project/ws/author/src/lib/services/init.service.ts");
/* harmony import */ var _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ws/author/src/lib/services/loader.service */ "./project/ws/author/src/lib/services/loader.service.ts");
/* harmony import */ var _services_editor_content_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../services/editor-content.service */ "./project/ws/author/src/lib/routing/modules/editor/services/editor-content.service.ts");
/* harmony import */ var _shared_components_auth_picker_auth_picker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../../../shared/components/auth-picker/auth-picker.component */ "./project/ws/author/src/lib/routing/modules/editor/shared/components/auth-picker/auth-picker.component.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../services/store.service */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/store.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
















let AuthTocComponent = class AuthTocComponent {
    constructor(dialog, snackBar, store, editorStore, loaderService, authInitService, breakpointObserver) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.store = store;
        this.editorStore = editorStore;
        this.loaderService = loaderService;
        this.authInitService = authInitService;
        this.breakpointObserver = breakpointObserver;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.node = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.data = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.isDragging = false;
        this.dropContainer = null;
        this.dragContainer = null;
        this.expandDelay = 500;
        this.isDropDisabled = false;
        this.draggingPosition = null;
        this.selectedNode = null;
        this.expandedNodes = new Set();
        this.drawer = true;
        this.menubtn = true;
        this.parentHierarchy = [];
        this.backUpInformation = {
            isDragging: false,
            dropContainer: null,
            dragContainer: null,
            draggingPosition: null,
        };
        this.invalidIds = [];
        this.mediumScreen = false;
        this.mediumSizeBreakpoint$ = this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["Breakpoints"].Small])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["map"])((res) => res.matches));
        this.leftarrow = true;
        this._transformer = (node, level) => {
            return {
                level,
                id: node.id,
                identifier: node.identifier,
                category: node.category,
                expandable: !!node.children && node.children.length > 0,
                children: node.children ? node.children.map(v => v.id) : [],
                editable: node.editable,
                childLoaded: node.childLoaded,
                parentId: node.parentId,
            };
        };
    }
    ngOnInit() {
        this.parentNodeId = this.store.currentParentNode;
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](node => node.level, node => node.expandable);
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlattener"](this._transformer, node => node.level, node => node.expandable, node => node.children);
        this.store.onInvalidNodeChange.subscribe(v => {
            this.invalidIds = v;
            this.expandNodesById(v);
        });
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.store.treeStructureChange.subscribe(data => {
            this.dataSource.data = [data];
            if (this.parentNodeId === this.store.currentParentNode) {
                this.expandNodesById([this.parentNodeId]);
                if (this.selectedNode && !this.store.flatNodeMap.get(this.selectedNode)) {
                    this.parentHierarchy.forEach(v => {
                        if (this.store.flatNodeMap.get(v)) {
                            const identifier = this.store.uniqueIdMap.get(v);
                            this.selectedNode = v;
                            this.editorStore.currentContent = identifier;
                            this.store.currentSelectedNode = v;
                            this.editorStore.changeActiveCont.next(identifier);
                            return;
                        }
                    });
                }
            }
            else {
                this.parentNodeId = this.store.currentParentNode;
            }
        });
        this.store.selectedNodeChange.subscribe(data => {
            if (data) {
                this.selectedNode = data;
            }
        });
        this.mediumSizeBreakpoint$.subscribe(isLtMedium => {
            this.mediumScreen = isLtMedium;
            if (isLtMedium) {
                this.drawer = true;
                this.leftarrow = false;
                this.menubtn = false;
            }
            else {
                this.leftarrow = true;
                this.menubtn = true;
            }
        });
    }
    ngAfterViewInit() {
        if ($('#cdk-drop-list-0 > mat-tree-node').hasClass('selected') === false) {
            $('#cdk-drop-list-0 > mat-tree-node:nth-child(2)').trigger('click');
            $('#cdk-drop-list-0 > mat-tree-node:nth-child(2)').find('button.mat-icon-button').trigger('click');
        }
    }
    ngOnDestroy() {
        this.loaderService.changeLoad.next(false);
    }
    onNodeSelect(node) {
        if ($('#cdk-drop-list-0 > mat-tree-node').hasClass('selected')) {
            $('#cdk-drop-list-0 > mat-tree-node:nth-child(2)').removeClass('selected');
        }
        if (node.id !== this.selectedNode) {
            this.action.emit({ type: 'editContent', identifier: node.identifier, nodeClicked: true });
            this.selectedNode = node.id;
            this.editorStore.currentContent = node.identifier;
            this.store.currentSelectedNode = node.id;
            this.editorStore.changeActiveCont.next(node.identifier);
        }
    }
    closeSidenav() {
        this.closeEvent.emit(true);
    }
    dragStart(node) {
        this.isDragging = true;
        this.dragContainer = node;
    }
    dragEnd() {
        this.backUpInformation = {
            isDragging: this.isDragging,
            dropContainer: this.dropContainer,
            dragContainer: this.dragContainer,
            draggingPosition: this.draggingPosition,
        };
        this.isDragging = false;
        this.dropContainer = null;
        this.dragContainer = null;
        this.draggingPosition = null;
    }
    dragHover(node, event) {
        event.preventDefault();
        if (this.isDragging) {
            this.dropContainer = node;
            clearTimeout(this.expandTimeout);
            this.expandTimeout = setTimeout(() => {
                this.treeControl.expand(node);
                // tslint:disable-next-line: align
            }, this.expandDelay);
            const percentageY = event.offsetY / event.target.clientHeight;
            if (percentageY >= 0 && percentageY < 0.2) {
                this.draggingPosition = 'above';
            }
            else if (percentageY > 0.8) {
                this.draggingPosition = 'below';
            }
            else if (percentageY >= 0.2 && percentageY <= 0.8) {
                this.draggingPosition = 'center';
            }
            const parentHierarchy = [];
            let currNode = node;
            while (currNode) {
                if (currNode && currNode.parentId) {
                    parentHierarchy.push(currNode.parentId);
                }
                currNode = this.getParentNode(currNode);
            }
            if (parentHierarchy.includes(this.dragContainer.id)) {
                this.isDropDisabled = true;
            }
            else if (this.dragContainer === this.dropContainer) {
                this.isDropDisabled = true;
            }
            else if (['above', 'below'].includes(this.draggingPosition)) {
                const parentNode = this.getParentNode(node);
                this.isDropDisabled = !parentNode
                    ? true
                    : !this.store.allowDrop(this.dragContainer, parentNode);
            }
            else {
                this.isDropDisabled = !this.store.allowDrop(this.dragContainer, this.dropContainer);
            }
        }
    }
    dragHoverEnd($event) {
        $event.preventDefault();
        if (this.isDragging) {
            clearTimeout(this.expandTimeout);
            this.backUpInformation.dropContainer = this.dropContainer;
            this.dropContainer = null;
        }
    }
    drop() {
        this.isDragging = false;
        if (!this.isDropDisabled) {
            this.preserveExpandedNodes();
            const isAdjacentDrop = ['above', 'below'].includes(this.backUpInformation.draggingPosition);
            const dropContainer = isAdjacentDrop
                ? this.getParentNode(this.backUpInformation.dropContainer)
                : this.backUpInformation.dropContainer;
            if (dropContainer.id !== this.backUpInformation.dragContainer.id) {
                this.store.dragAndDrop(this.backUpInformation.dragContainer, dropContainer, isAdjacentDrop ? this.backUpInformation.dropContainer.id : undefined, this.backUpInformation.draggingPosition);
            }
        }
    }
    preserveExpandedNodes() {
        this.expandedNodes = new Set();
        this.treeControl.dataNodes.forEach(v => {
            if (this.treeControl.isExpandable(v) && this.treeControl.isExpanded(v)) {
                this.expandedNodes.add(v.id);
            }
        });
    }
    expandNodesById(ids) {
        const idSet = ids ? new Set(ids) : this.expandedNodes;
        this.treeControl.dataNodes.forEach(node => {
            if (idSet.has(node.id)) {
                this.treeControl.expand(node);
                let parent = this.getParentNode(node);
                while (parent) {
                    this.treeControl.expand(parent);
                    parent = this.getParentNode(parent);
                }
            }
        });
    }
    /*
     Get the parent node of a node
      */
    getParentNode(node) {
        const currentLevel = node.level;
        if (currentLevel < 1) {
            return null;
        }
        const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
        for (let i = startIndex; i >= 0; i = i - 1) {
            const currentNode = this.treeControl.dataNodes[i];
            if (currentNode.level < currentLevel) {
                return currentNode;
            }
        }
        return null;
    }
    delete(node) {
        const dialogRef = this.dialog.open(_ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogComponent"], {
            width: '500px',
            height: '175px',
            data: 'deleteTreeNode',
        });
        this.preserveExpandedNodes();
        dialogRef.afterClosed().subscribe(confirm => {
            if (confirm) {
                this.parentHierarchy = [];
                let currNode = node;
                while (currNode) {
                    if (currNode && currNode.parentId) {
                        this.parentHierarchy.push(currNode.parentId);
                    }
                    currNode = this.getParentNode(currNode);
                }
                this.store.deleteNode(node.id);
                this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"], {
                    data: {
                        type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SUCCESS,
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000,
                });
            }
        });
    }
    addChildOrSibling(node, asSibling = false) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const children = (node.children || []).map(v => this.store.uniqueIdMap.get(v));
            const dialogRef = this.dialog.open(_shared_components_auth_picker_auth_picker_component__WEBPACK_IMPORTED_MODULE_12__["AuthPickerComponent"], {
                width: '90vw',
                height: '90vh',
                data: {
                    filter: this.authInitService.collectionConfig.childrenConfig[node.category].searchFilter,
                    selectedIds: children,
                },
            });
            this.preserveExpandedNodes();
            dialogRef.afterClosed().subscribe((contents) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (contents && contents.length) {
                    const parentNode = (asSibling ? this.getParentNode(node) : node);
                    this.expandedNodes.add(parentNode.id);
                    this.loaderService.changeLoad.next(true);
                    const isDone = yield this.store.addChildOrSibling(contents, parentNode, asSibling ? node.id : undefined, 'below');
                    this.loaderService.changeLoad.next(false);
                    this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"], {
                        data: {
                            type: isDone ? _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SUCCESS : _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].FAIL,
                        },
                        duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000,
                    });
                }
            }));
        });
    }
    createNewChildOrSibling(type, node, asSibling = false) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const parentNode = (asSibling ? this.getParentNode(node) : node);
            this.loaderService.changeLoad.next(true);
            this.preserveExpandedNodes();
            this.expandedNodes.add(parentNode.id);
            const isDone = yield this.store.createChildOrSibling(type, parentNode, asSibling ? node.id : undefined, 'below', {}, type === 'web' ? 'link' : '');
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"], {
                data: {
                    type: isDone ? _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SUCCESS : _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].FAIL,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000,
            });
            this.loaderService.changeLoad.next(false);
        });
    }
    takeAction(action, node, type) {
        switch (action) {
            case 'editMeta':
            case 'editContent':
            case 'preview':
                this.onNodeSelect(node);
                this.action.emit({ type: action, identifier: node.identifier });
                break;
            case 'delete':
                this.delete(node);
                break;
            case 'addChild':
                this.addChildOrSibling(node);
                break;
            case 'addSibling':
                this.addChildOrSibling(node, true);
                break;
            case 'createChild':
                this.createNewChildOrSibling(type, node);
                break;
            case 'createSibling':
                this.createNewChildOrSibling(type, node, true);
                break;
            default:
                break;
        }
    }
    addChapter() {
        // tslint:disable-next-line:max-line-length
        // this.allowedChild = [{"children":[],"id":"upload","name":"Upload Content","icon":"cloud_upload"},{"children":[],"id":"assessment","name":"Assessment","icon":"check_circle"},{"children":[],"id":"web","name":"Attach a Link","icon":"link"}]
        // this.action.emit({ type: 'showAddChapter', identifier: '' })
    }
};
AuthTocComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_13__["CollectionStoreService"] },
    { type: _services_editor_content_service__WEBPACK_IMPORTED_MODULE_11__["EditorContentService"] },
    { type: _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"] },
    { type: _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_9__["AuthInitService"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["BreakpointObserver"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], AuthTocComponent.prototype, "createdFromCourse", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], AuthTocComponent.prototype, "action", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], AuthTocComponent.prototype, "closeEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], AuthTocComponent.prototype, "node", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], AuthTocComponent.prototype, "data", void 0);
AuthTocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'ws-author-auth-toc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-toc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-toc/auth-toc.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth-toc.component.scss */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/auth-toc/auth-toc.component.scss")).default]
    })
], AuthTocComponent);



/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/collection/collection.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/collection/collection.component.scss ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-sidenav-container {\n  min-height: 650px;\n  overflow: unset;\n}\n\n.mat-sidenav {\n  overflow: unset;\n}\n\n.mat-drawer-content {\n  padding-left: 3px;\n}\n\n.sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 50px;\n}\n\n.close-preview {\n  position: fixed;\n  top: 15px;\n  left: 15px;\n  z-index: 1;\n  font-size: 30px;\n  cursor: pointer;\n  z-index: 1001;\n}\n\n.hidden {\n  display: none;\n}\n\n.transitionD {\n  transition: all 0.5s;\n}\n\n.ui {\n  border: 1px solid #1a1919;\n  border-top-left-radius: 0px;\n  border-left-color: white;\n  border-bottom-left-radius: 0px;\n  border-top-right-radius: 50%;\n  border-bottom-right-radius: 50%;\n  box-shadow: 0.1px 2px 8px grey;\n  width: 42px;\n}\n\n.toHide {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7QUNGRjs7QURLQTtFQUNFLGlCQUFBO0FDRkY7O0FES0E7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsU0FBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtBQ0ZGOztBRElBO0VBQ0Usb0JBQUE7QUNERjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7QUNBRiIsImZpbGUiOiJwcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5AaW1wb3J0ICdzdHlsZXMvX3dzLW1peGlucy5zY3NzJztcblxuLm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDY1MHB4O1xuICBvdmVyZmxvdzogdW5zZXQ7XG59XG5cbi5tYXQtc2lkZW5hdiB7XG4gIG92ZXJmbG93OiB1bnNldDtcbn1cblxuLm1hdC1kcmF3ZXItY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xufVxuXG4uc3RpY2t5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiA1MHB4O1xufVxuXG4uY2xvc2UtcHJldmlldyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTAwMTtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udHJhbnNpdGlvbkQge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi51aSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNiwgMjUsIDI1KTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItbGVmdC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMC4xcHggMnB4IDhweCBncmV5O1xuICB3aWR0aDogNDJweDtcbn1cblxuLnRvSGlkZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbiIsIi5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiA2NTBweDtcbiAgb3ZlcmZsb3c6IHVuc2V0O1xufVxuXG4ubWF0LXNpZGVuYXYge1xuICBvdmVyZmxvdzogdW5zZXQ7XG59XG5cbi5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbn1cblxuLnN0aWNreSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogNTBweDtcbn1cblxuLmNsb3NlLXByZXZpZXcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMTVweDtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwMDE7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udHJhbnNpdGlvbkQge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLnVpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFhMTkxOTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItbGVmdC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMC4xcHggMnB4IDhweCBncmV5O1xuICB3aWR0aDogNDJweDtcbn1cblxuLnRvSGlkZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn0iXX0= */");

/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/collection/collection.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/collection/collection.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: CollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionComponent", function() { return CollectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/delete-dialog/delete-dialog.component */ "./project/ws/author/src/lib/modules/shared/components/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ws/author/src/lib/constants/constant */ "./project/ws/author/src/lib/constants/constant.ts");
/* harmony import */ var _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ws/author/src/lib/constants/notificationMessage */ "./project/ws/author/src/lib/constants/notificationMessage.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_comments_dialog_comments_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/comments-dialog/comments-dialog.component */ "./project/ws/author/src/lib/modules/shared/components/comments-dialog/comments-dialog.component.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component */ "./project/ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/error-parser/error-parser.component */ "./project/ws/author/src/lib/modules/shared/components/error-parser/error-parser.component.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/notification/notification.component */ "./project/ws/author/src/lib/modules/shared/components/notification/notification.component.ts");
/* harmony import */ var _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ws/author/src/lib/routing/modules/editor/services/editor-content.service */ "./project/ws/author/src/lib/routing/modules/editor/services/editor-content.service.ts");
/* harmony import */ var _ws_author_src_lib_routing_modules_editor_services_editor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ws/author/src/lib/routing/modules/editor/services/editor.service */ "./project/ws/author/src/lib/routing/modules/editor/services/editor.service.ts");
/* harmony import */ var _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ws/author/src/lib/services/init.service */ "./project/ws/author/src/lib/services/init.service.ts");
/* harmony import */ var _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ws/author/src/lib/services/loader.service */ "./project/ws/author/src/lib/services/loader.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_resolver_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../services/resolver.service */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/resolver.service.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../../services/store.service */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/store.service.ts");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");
/* harmony import */ var _ws_author_src_lib_services_notification_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ws/author/src/lib/services/notification.service */ "./project/ws/author/src/lib/services/notification.service.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/services/access-control.service */ "./project/ws/author/src/lib/modules/shared/services/access-control.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");























/**
 * @description
 * Parent component for the Collection editor. All the child component are loaded here. It decides the flow and the logic and
 * controls the api calls that are made for save and send for review and other
 *
 * @export
 * @class CollectionComponent
 * @implements {OnInit}
 */
let CollectionComponent = class CollectionComponent {
    constructor(contentService, activateRoute, storeService, resolverService, initService, loaderService, dialog, snackBar, editorService, router, notificationSvc, accessControlSvc, breakpointObserver) {
        this.contentService = contentService;
        this.activateRoute = activateRoute;
        this.storeService = storeService;
        this.resolverService = resolverService;
        this.initService = initService;
        this.loaderService = loaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.editorService = editorService;
        this.router = router;
        this.notificationSvc = notificationSvc;
        this.accessControlSvc = accessControlSvc;
        this.breakpointObserver = breakpointObserver;
        this.contents = [];
        this.stepper = [
            { title: 'Choose Type', disabled: true },
            { title: 'Content', disabled: false },
            { title: 'Details', disabled: false },
        ];
        this.isSubmitPressed = false;
        this.showLanguageBar = false;
        this.actionButton = null;
        this.currentStep = 1;
        this.activeContentSubscription = null;
        this.routerSubscription = null;
        this.isChanged = false;
        this.previewIdentifier = null;
        this.viewMode = 'meta';
        this.mimeTypeRoute = '';
        this.mediumScreen = false;
        this.sideBarOpened = false;
        this.mediumSizeBreakpoint$ = this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__["Breakpoints"].Small])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["map"])((res) => res.matches));
        this.mode$ = this.mediumSizeBreakpoint$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["map"])(isMedium => (isMedium ? 'over' : 'side')));
        this.leftArrow = true;
        this.fullScreenToggle = () => {
            const doc = document;
            const elm = doc.getElementById('auth-toc');
            if (elm.requestFullscreen) {
                !doc.fullscreenElement ? elm.requestFullscreen() : doc.exitFullscreen();
            }
            else if (elm.mozRequestFullScreen) {
                !doc.mozFullScreen ? elm.mozRequestFullScreen() : doc.mozCancelFullScreen();
            }
            else if (elm.msRequestFullscreen) {
                !doc.msFullscreenElement ? elm.msRequestFullscreen() : doc.msExitFullscreen();
            }
            else if (elm.webkitRequestFullscreen) {
                !doc.webkitIsFullscreen ? elm.webkitRequestFullscreen() : doc.webkitCancelFullscreen();
            }
        };
    }
    ngOnInit() {
        this.contentService.changeActiveCont.subscribe(data => {
            this.currentContent = data;
            if (this.contentService.getUpdatedMeta(data).contentType !== 'Resource') {
                this.viewMode = 'meta';
            }
        });
        if (this.activateRoute.parent && this.activateRoute.parent.parent) {
            this.routerSubscription = this.activateRoute.parent.parent.data.subscribe(data => {
                const contentDataMap = new Map();
                data.contents.map((v) => {
                    this.storeService.parentNode.push(v.content.identifier);
                    this.resolverService.buildTreeAndMap(v.content, contentDataMap, this.storeService.flatNodeMap, this.storeService.uniqueIdMap, this.storeService.lexIdMap);
                });
                contentDataMap.forEach(content => this.contentService.setOriginalMeta(content));
                const currentNode = this.storeService.lexIdMap.get(this.currentContent)[0];
                this.currentParentId = this.currentContent;
                this.storeService.treeStructureChange.next(this.storeService.flatNodeMap.get(currentNode));
                this.storeService.currentParentNode = currentNode;
                this.storeService.currentSelectedNode = currentNode;
                this.storeService.selectedNodeChange.next(currentNode);
            });
        }
        this.stepper = this.initService.collectionConfig.stepper;
        this.showLanguageBar = this.initService.collectionConfig.languageBar;
        const actionButton = [];
        this.initService.collectionConfig.actionButtons.buttons.forEach(action => {
            if (this.contentService.checkConditionV2(this.contentService.getOriginalMeta(this.currentParentId), action.conditions)) {
                actionButton.push({
                    title: action.title,
                    icon: action.icon,
                    event: action.event,
                    conditions: action.conditions,
                });
            }
        });
        this.actionButton = {
            enabled: this.initService.collectionConfig.actionButtons.enabled,
            buttons: actionButton,
        };
        this.mediumSizeBreakpoint$.subscribe(isLtMedium => {
            this.mediumScreen = isLtMedium;
            this.sideBarOpened = !isLtMedium;
        });
    }
    ngOnDestroy() {
        this.loaderService.changeLoad.next(false);
    }
    sidenavClose() {
        setTimeout(() => (this.leftArrow = true), 500);
    }
    save(nextAction) {
        const updatedContent = this.contentService.upDatedContent || {};
        if (Object.keys(updatedContent).length ||
            Object.keys(this.storeService.changedHierarchy).length) {
            this.isChanged = true;
            this.loaderService.changeLoad.next(true);
            this.triggerSave().subscribe(() => {
                if (nextAction) {
                    this.action(nextAction);
                }
                this.loaderService.changeLoad.next(false);
                this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["NotificationComponent"], {
                    data: {
                        type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SAVE_SUCCESS,
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000,
                });
            }, (error) => {
                if (error.status === 409) {
                    const errorMap = new Map();
                    Object.keys(this.contentService.originalContent).forEach(v => errorMap.set(v, this.contentService.originalContent[v]));
                    const dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_9__["ErrorParserComponent"], {
                        width: '80vw',
                        height: '90vh',
                        data: {
                            errorFromBackendData: error.error,
                            dataMapping: errorMap,
                        },
                    });
                    dialog.afterClosed().subscribe(v => {
                        if (v) {
                            if (typeof v === 'string') {
                                this.storeService.selectedNodeChange.next(this.storeService.lexIdMap.get(v)[0]);
                                this.contentService.changeActiveCont.next(v);
                            }
                            else {
                                this.storeService.selectedNodeChange.next(v);
                                this.contentService.changeActiveCont.next(this.storeService.uniqueIdMap.get(v));
                            }
                        }
                    });
                }
                this.loaderService.changeLoad.next(false);
                this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["NotificationComponent"], {
                    data: {
                        type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SAVE_FAIL,
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000,
                });
            });
        }
        else {
            if (nextAction) {
                this.action(nextAction);
            }
            else {
                this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["NotificationComponent"], {
                    data: {
                        type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].UP_TO_DATE,
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000,
                });
            }
        }
    }
    get validationCheck() {
        const currentNodeId = this.storeService.lexIdMap.get(this.currentParentId);
        const returnValue = this.storeService.validationCheck(currentNodeId[0]);
        if (returnValue) {
            const dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_9__["ErrorParserComponent"], {
                width: '80vw',
                height: '90vh',
                data: {
                    processErrorData: returnValue,
                },
            });
            dialog.afterClosed().subscribe(v => {
                if (v) {
                    if (typeof v === 'string') {
                        this.storeService.selectedNodeChange.next(this.storeService.lexIdMap.get(v)[0]);
                        this.contentService.changeActiveCont.next(v);
                    }
                    else {
                        this.storeService.selectedNodeChange.next(v);
                        this.contentService.changeActiveCont.next(this.storeService.uniqueIdMap.get(v));
                    }
                }
            });
            return false;
        }
        return true;
    }
    takeAction() {
        this.isSubmitPressed = true;
        const needSave = Object.keys(this.contentService.upDatedContent || {}).length;
        if (!needSave && !this.isChanged) {
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].UP_TO_DATE,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000,
            });
            return;
        }
        if (this.validationCheck) {
            const dialogRef = this.dialog.open(_ws_author_src_lib_modules_shared_components_comments_dialog_comments_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CommentsDialogComponent"], {
                width: '750px',
                height: '450px',
                data: this.contentService.getOriginalMeta(this.currentParentId),
            });
            dialogRef.afterClosed().subscribe((commentsForm) => {
                this.finalCall(commentsForm);
            });
        }
    }
    finalCall(commentsForm) {
        if (commentsForm) {
            const body = {
                comment: commentsForm.controls.comments.value,
                operation: commentsForm.controls.action.value === 'accept' ||
                    ['Draft', 'Live'].includes(this.contentService.originalContent[this.currentParentId].status)
                    ? 1
                    : 0,
            };
            const updatedMeta = this.contentService.getUpdatedMeta(this.currentParentId);
            const needSave = Object.keys(this.contentService.upDatedContent || {}).length ||
                Object.keys(this.storeService.changedHierarchy).length;
            const saveCall = (needSave ? this.triggerSave() : Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])({})).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["mergeMap"])(() => this.editorService
                .forwardBackward(body, this.currentParentId, this.contentService.originalContent[this.currentParentId].status)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["mergeMap"])(() => this.notificationSvc
                .triggerPushPullNotification(updatedMeta, body.comment, body.operation ? true : false)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["catchError"])(() => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])({});
            }))))));
            this.loaderService.changeLoad.next(true);
            saveCall.subscribe(() => {
                this.loaderService.changeLoad.next(false);
                this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["NotificationComponent"], {
                    data: {
                        type: this.getMessage('success'),
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000,
                });
                this.contents = this.contents.filter(v => v.identifier !== this.currentParentId);
                if (this.contents.length) {
                    this.contentService.changeActiveCont.next(this.contents[0].identifier);
                }
                else {
                    this.router.navigateByUrl('/author/home');
                }
            }, (error) => {
                if (error.status === 409) {
                    const errorMap = new Map();
                    Object.keys(this.contentService.originalContent).forEach(v => errorMap.set(v, this.contentService.originalContent[v]));
                    const dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_9__["ErrorParserComponent"], {
                        width: '80vw',
                        height: '90vh',
                        data: {
                            errorFromBackendData: error.error,
                            dataMapping: errorMap,
                        },
                    });
                    dialog.afterClosed().subscribe(v => {
                        if (v) {
                            if (typeof v === 'string') {
                                this.storeService.selectedNodeChange.next(this.storeService.lexIdMap.get(v)[0]);
                                this.contentService.changeActiveCont.next(v);
                            }
                            else {
                                this.storeService.selectedNodeChange.next(v);
                                this.contentService.changeActiveCont.next(this.storeService.uniqueIdMap.get(v));
                            }
                        }
                    });
                }
                this.loaderService.changeLoad.next(false);
                this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["NotificationComponent"], {
                    data: {
                        type: this.getMessage('failure'),
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000,
                });
            });
        }
    }
    preview(id) {
        const updatedContent = this.contentService.upDatedContent || {};
        const saveCall = Object.keys(updatedContent).length || Object.keys(this.storeService.changedHierarchy).length
            ? this.triggerSave()
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])({});
        this.loaderService.changeLoad.next(true);
        saveCall.subscribe(() => {
            this.mimeTypeRoute = Object(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_19__["VIEWER_ROUTE_FROM_MIME"])(this.contentService.getUpdatedMeta(id).mimeType);
            this.loaderService.changeLoad.next(false);
            this.previewIdentifier = id;
        }, error => {
            if (error.status === 409) {
                const errorMap = new Map();
                Object.keys(this.contentService.originalContent).forEach(v => errorMap.set(v, this.contentService.originalContent[v]));
                const dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_9__["ErrorParserComponent"], {
                    width: '750px',
                    height: '450px',
                    data: {
                        errorFromBackendData: error.error,
                        dataMapping: errorMap,
                    },
                });
                dialog.afterClosed().subscribe(v => {
                    if (v) {
                        if (typeof v === 'string') {
                            this.storeService.selectedNodeChange.next(this.storeService.lexIdMap.get(v)[0]);
                            this.contentService.changeActiveCont.next(v);
                        }
                        else {
                            this.storeService.selectedNodeChange.next(v);
                            this.contentService.changeActiveCont.next(this.storeService.uniqueIdMap.get(v));
                        }
                    }
                });
            }
            this.loaderService.changeLoad.next(false);
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SAVE_FAIL,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000,
            });
        });
    }
    closePreview() {
        this.previewIdentifier = null;
    }
    triggerSave() {
        const nodesModified = {};
        let isRootPresent = false;
        Object.keys(this.contentService.upDatedContent).forEach(v => {
            if (!isRootPresent) {
                isRootPresent = this.storeService.parentNode.includes(v);
            }
            nodesModified[v] = {
                isNew: false,
                root: this.storeService.parentNode.includes(v),
                metadata: this.contentService.upDatedContent[v],
            };
        });
        if (!isRootPresent) {
            nodesModified[this.currentParentId] = {
                isNew: false,
                root: true,
                metadata: {},
            };
        }
        const requestBody = {
            nodesModified,
            hierarchy: this.storeService.changedHierarchy,
        };
        return this.editorService.updateContentV2(requestBody).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["tap"])(() => {
            this.storeService.changedHierarchy = {};
            Object.keys(this.contentService.upDatedContent).forEach(id => {
                this.contentService.resetOriginalMeta(this.contentService.upDatedContent[id], id);
            });
            this.contentService.upDatedContent = {};
        }));
    }
    getMessage(type) {
        if (type === 'success') {
            switch (this.contentService.originalContent[this.currentParentId].status) {
                case 'Draft':
                case 'Live':
                    return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SEND_FOR_REVIEW_SUCCESS;
                case 'InReview':
                    return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].REVIEW_SUCCESS;
                case 'Reviewed':
                    return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].PUBLISH_SUCCESS;
                default:
                    return '';
            }
        }
        switch (this.contentService.originalContent[this.currentParentId].status) {
            case 'Draft':
            case 'Live':
                return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SEND_FOR_REVIEW_FAIL;
            case 'InReview':
                return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].REVIEW_FAIL;
            case 'Reviewed':
                return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].PUBLISH_FAIL;
            default:
                return '';
        }
    }
    subAction(event) {
        this.contentService.changeActiveCont.next(event.identifier);
        switch (event.type) {
            case 'editMeta':
                this.viewMode = 'meta';
                break;
            case 'editContent':
                const content = this.contentService.getUpdatedMeta(event.identifier);
                if (['application/pdf', 'application/x-mpegURL'].includes(content.mimeType)) {
                    this.viewMode = 'upload';
                }
                else if (content.mimeType === 'application/html' && !content.isExternal) {
                    this.viewMode = 'upload';
                }
                else if (content.mimeType === 'application/html') {
                    this.viewMode = 'curate';
                }
                break;
            case 'preview':
                this.preview(event.identifier);
                break;
        }
    }
    action(type) {
        switch (type) {
            case 'next':
                this.viewMode = 'meta';
                break;
            case 'save':
                this.save();
                break;
            case 'saveAndNext':
                this.save('next');
                break;
            case 'preview':
                this.preview(this.currentContent);
                break;
            case 'push':
                if (this.getAction() === 'publish') {
                    const dialogRefForPublish = this.dialog.open(_ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialogComponent"], {
                        width: '70%',
                        data: 'publishMessage',
                    });
                    dialogRefForPublish.afterClosed().subscribe(result => {
                        if (result) {
                            this.takeAction();
                        }
                    });
                }
                else {
                    this.takeAction();
                }
                break;
            case 'delete':
                const dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DeleteDialogComponent"], {
                    width: '600px',
                    height: 'auto',
                    data: this.contentService.getUpdatedMeta(this.currentParentId),
                });
                dialog.afterClosed().subscribe(confirm => {
                    if (confirm) {
                        this.contents = this.contents.filter(v => v.identifier !== this.currentParentId);
                        if (this.contents.length) {
                            this.contentService.changeActiveCont.next(this.contents[0].identifier);
                        }
                        else {
                            this.router.navigateByUrl('/author/home');
                        }
                    }
                });
                break;
            case 'fullscreen':
                this.fullScreenToggle();
                break;
            case 'close':
                this.router.navigateByUrl('/author/home');
                break;
        }
    }
    delete() {
        this.loaderService.changeLoad.next(true);
        this.editorService.deleteContent(this.currentParentId).subscribe(() => {
            this.loaderService.changeLoad.next(false);
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].SUCCESS,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000,
            });
            this.contents = this.contents.filter(v => v.identifier !== this.currentParentId);
            if (this.contents.length) {
                this.contentService.changeActiveCont.next(this.contents[0].identifier);
            }
            else {
                this.router.navigateByUrl('/author/home');
            }
        }, error => {
            if (error.status === 409) {
                const errorMap = new Map();
                Object.keys(this.contentService.originalContent).forEach(v => errorMap.set(v, this.contentService.originalContent[v]));
                const dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_9__["ErrorParserComponent"], {
                    width: '750px',
                    height: '450px',
                    data: {
                        errorFromBackendData: error.error,
                        dataMapping: errorMap,
                    },
                });
                dialog.afterClosed().subscribe(v => {
                    if (v) {
                        if (typeof v === 'string') {
                            this.storeService.selectedNodeChange.next(this.storeService.lexIdMap.get(v)[0]);
                            this.contentService.changeActiveCont.next(v);
                        }
                        else {
                            this.storeService.selectedNodeChange.next(v);
                            this.contentService.changeActiveCont.next(this.storeService.uniqueIdMap.get(v));
                        }
                    }
                });
            }
            this.loaderService.changeLoad.next(false);
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_6__["Notify"].CONTENT_FAIL,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_TIME"] * 1000,
            });
        });
    }
    getAction() {
        switch (this.contentService.originalContent[this.currentParentId].status) {
            case 'Draft':
            case 'Live':
                return 'sendForReview';
            case 'InReview':
                return 'review';
            case 'Reviewed':
                return 'publish';
            default:
                return 'sendForReview';
        }
    }
    canDelete() {
        return (this.accessControlSvc.hasRole(['editor', 'admin']) ||
            (['Draft', 'Live'].includes(this.contentService.originalContent[this.currentParentId].status) &&
                this.contentService.originalContent[this.currentParentId].creatorContacts.find(v => v.id === this.accessControlSvc.userId)));
    }
};
CollectionComponent.ctorParameters = () => [
    { type: _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_11__["EditorContentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_18__["CollectionStoreService"] },
    { type: _services_resolver_service__WEBPACK_IMPORTED_MODULE_17__["CollectionResolverService"] },
    { type: _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_13__["AuthInitService"] },
    { type: _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_14__["LoaderService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _ws_author_src_lib_routing_modules_editor_services_editor_service__WEBPACK_IMPORTED_MODULE_12__["EditorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ws_author_src_lib_services_notification_service__WEBPACK_IMPORTED_MODULE_20__["NotificationService"] },
    { type: _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_21__["AccessControlService"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__["BreakpointObserver"] }
];
CollectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ws-auth-collection',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./collection.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/collection/collection.component.html")).default,
        providers: [_services_store_service__WEBPACK_IMPORTED_MODULE_18__["CollectionStoreService"], _services_resolver_service__WEBPACK_IMPORTED_MODULE_17__["CollectionResolverService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./collection.component.scss */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/collection/collection.component.scss")).default]
    })
], CollectionComponent);



/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-collection/course-collection.component.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-collection/course-collection.component.scss ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\n  height: 100vh;\n}\n\n::ng-deep #auth-toc .mat-drawer-inner-container {\n  min-width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9jb3Vyc2UtY29sbGVjdGlvbi9jb3Vyc2UtY29sbGVjdGlvbi5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXV0aG9yL3NyYy9saWIvcm91dGluZy9tb2R1bGVzL2VkaXRvci9yb3V0aW5nL21vZHVsZXMvY29sbGVjdGlvbi9jb21wb25lbnRzL2NvdXJzZS1jb2xsZWN0aW9uL2NvdXJzZS1jb2xsZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRHFCSTtFQUNFLGdCQUFBO0FDbEJOIiwiZmlsZSI6InByb2plY3Qvd3MvYXV0aG9yL3NyYy9saWIvcm91dGluZy9tb2R1bGVzL2VkaXRvci9yb3V0aW5nL21vZHVsZXMvY29sbGVjdGlvbi9jb21wb25lbnRzL2NvdXJzZS1jb2xsZWN0aW9uL2NvdXJzZS1jb2xsZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4vLyAub3V0ZXItZmxleCB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbi8vIH1cbi8vIC5jb250ZW50LWJveCB7XG4vLyAgICAgd2lkdGg6IDczJTtcbi8vIH1cbi8vIC5zaWRlYmFyIHtcbi8vICAgICB3aWR0aDogMjMlO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB0b3A6IC0zN3B4O1xuLy8gICAgIGJvdHRvbTogMDtcbi8vICAgICByaWdodDogMDtcbi8vICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4vLyAgICAgYmFja2dyb3VuZDogI2ZmZjtcbi8vICAgICBwYWRkaW5nLXRvcDogM2VtO1xuLy8gfVxuXG46Om5nLWRlZXAgI2F1dGgtdG9jIHtcbiAgICAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXIge1xuICAgICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICB9XG4gIH1cbiIsIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbjo6bmctZGVlcCAjYXV0aC10b2MgLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyIHtcbiAgbWluLXdpZHRoOiAyNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-collection/course-collection.component.ts":
/*!*************************************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-collection/course-collection.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: CourseCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseCollectionComponent", function() { return CourseCollectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/delete-dialog/delete-dialog.component */ "./project/ws/author/src/lib/modules/shared/components/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ws/author/src/lib/constants/constant */ "./project/ws/author/src/lib/constants/constant.ts");
/* harmony import */ var _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ws/author/src/lib/constants/notificationMessage */ "./project/ws/author/src/lib/constants/notificationMessage.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_comments_dialog_comments_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/comments-dialog/comments-dialog.component */ "./project/ws/author/src/lib/modules/shared/components/comments-dialog/comments-dialog.component.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component */ "./project/ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/error-parser/error-parser.component */ "./project/ws/author/src/lib/modules/shared/components/error-parser/error-parser.component.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/notification/notification.component */ "./project/ws/author/src/lib/modules/shared/components/notification/notification.component.ts");
/* harmony import */ var _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ws/author/src/lib/routing/modules/editor/services/editor-content.service */ "./project/ws/author/src/lib/routing/modules/editor/services/editor-content.service.ts");
/* harmony import */ var _ws_author_src_lib_routing_modules_editor_services_editor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ws/author/src/lib/routing/modules/editor/services/editor.service */ "./project/ws/author/src/lib/routing/modules/editor/services/editor.service.ts");
/* harmony import */ var _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ws/author/src/lib/services/init.service */ "./project/ws/author/src/lib/services/init.service.ts");
/* harmony import */ var _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ws/author/src/lib/services/loader.service */ "./project/ws/author/src/lib/services/loader.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_resolver_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../../services/resolver.service */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/resolver.service.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../../services/store.service */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/store.service.ts");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");
/* harmony import */ var _ws_author_src_lib_services_notification_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ws/author/src/lib/services/notification.service */ "./project/ws/author/src/lib/services/notification.service.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/services/access-control.service */ "./project/ws/author/src/lib/modules/shared/services/access-control.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
























let CourseCollectionComponent = class CourseCollectionComponent {
    constructor(contentService, activateRoute, storeService, resolverService, initService, loaderService, dialog, snackBar, editorService, router, notificationSvc, accessControlSvc, breakpointObserver, fb) {
        this.contentService = contentService;
        this.activateRoute = activateRoute;
        this.storeService = storeService;
        this.resolverService = resolverService;
        this.initService = initService;
        this.loaderService = loaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.editorService = editorService;
        this.router = router;
        this.notificationSvc = notificationSvc;
        this.accessControlSvc = accessControlSvc;
        this.breakpointObserver = breakpointObserver;
        this.fb = fb;
        this.contents = [];
        this.couseCreated = '';
        this.stepper = [
            { title: 'Choose Type', disabled: true },
            { title: 'Content', disabled: false },
            { title: 'Details', disabled: false },
        ];
        this.isSubmitPressed = false;
        this.showLanguageBar = false;
        this.actionButton = null;
        this.currentStep = 1;
        this.activeContentSubscription = null;
        this.routerSubscription = null;
        this.isChanged = false;
        this.previewIdentifier = null;
        this.viewMode = 'meta';
        this.mimeTypeRoute = '';
        this.mediumScreen = false;
        this.sideBarOpened = false;
        this.mediumSizeBreakpoint$ = this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_23__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_23__["Breakpoints"].Small])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["map"])((res) => res.matches));
        this.mode$ = this.mediumSizeBreakpoint$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["map"])(isMedium => (isMedium ? 'over' : 'side')));
        this.leftArrow = true;
        this.showAddchapter = false;
        this.reloadTOC = false;
        this.sideNavBarOpened = false;
        this.expandedNodes = new Set();
        this.triggerQuizSave = false;
        this.triggerUploadSave = false;
        this.fullScreenToggle = () => {
            const doc = document;
            const elm = doc.getElementById('auth-toc');
            if (elm.requestFullscreen) {
                !doc.fullscreenElement ? elm.requestFullscreen() : doc.exitFullscreen();
            }
            else if (elm.mozRequestFullScreen) {
                !doc.mozFullScreen ? elm.mozRequestFullScreen() : doc.mozCancelFullScreen();
            }
            else if (elm.msRequestFullscreen) {
                !doc.msFullscreenElement ? elm.msRequestFullscreen() : doc.msExitFullscreen();
            }
            else if (elm.webkitRequestFullscreen) {
                !doc.webkitIsFullscreen ? elm.webkitRequestFullscreen() : doc.webkitCancelFullscreen();
            }
        };
        // this.callSaveFn = this.headerService.isSavePressed
        // this.rootSvc.showNavbarDisplay$.next(false)
        // this.headerService.headerSaveData.subscribe(data => {
        //   if (data) {
        //     this.save()
        //   }
        // })
    }
    ngOnInit() {
        this.routerValuesCall();
        this.parentNodeId = this.storeService.currentParentNode;
        // this.expandNodesById([this.parentNodeId])
        this.createTopicForm = this.fb.group({
            topicName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            topicDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
        this.stepper = this.initService.collectionConfig.stepper;
        this.showLanguageBar = this.initService.collectionConfig.languageBar;
        const actionButton = [];
        this.initService.collectionConfig.actionButtons.buttons.forEach(action => {
            if (this.contentService.checkConditionV2(this.contentService.getOriginalMeta(this.currentParentId), action.conditions)) {
                actionButton.push({
                    title: action.title,
                    icon: action.icon,
                    event: action.event,
                    conditions: action.conditions,
                });
            }
        });
        this.actionButton = {
            enabled: this.initService.collectionConfig.actionButtons.enabled,
            buttons: actionButton,
        };
        this.mediumSizeBreakpoint$.subscribe(isLtMedium => {
            this.mediumScreen = isLtMedium;
            this.sideBarOpened = !isLtMedium;
        });
    }
    routerValuesCall() {
        this.contentService.changeActiveCont.subscribe(data => {
            this.currentContent = data;
            if (this.contentService.getUpdatedMeta(data).contentType !== 'Resource') {
                this.viewMode = 'meta';
            }
        });
        if (this.activateRoute.parent && this.activateRoute.parent.parent) {
            this.routerSubscription = this.activateRoute.parent.parent.data.subscribe(data => {
                this.courseName = data.contents[0].content.name;
                const contentDataMap = new Map();
                data.contents.map((v) => {
                    this.storeService.parentNode.push(v.content.identifier);
                    this.resolverService.buildTreeAndMap(v.content, contentDataMap, this.storeService.flatNodeMap, this.storeService.uniqueIdMap, this.storeService.lexIdMap);
                });
                contentDataMap.forEach(content => this.contentService.setOriginalMeta(content));
                const currentNode = this.storeService.lexIdMap.get(this.currentContent)[0];
                this.currentParentId = this.currentContent;
                this.storeService.treeStructureChange.next(this.storeService.flatNodeMap.get(currentNode));
                this.storeService.currentParentNode = currentNode;
                this.storeService.currentSelectedNode = currentNode;
                let newCreatedNode = 0;
                const newCreatedLexid = this.editorService.newCreatedLexid;
                if (newCreatedLexid) {
                    newCreatedNode = this.storeService.lexIdMap.get(newCreatedLexid)[0];
                    this.storeService.selectedNodeChange.next(newCreatedNode);
                }
                if (data.contents[0] && data.contents[0].content && data.contents[0].content.children[0] &&
                    data.contents[0].content.children[0].identifier) {
                    this.subAction({ type: 'editContent', identifier: data.contents[0].content.children[0].identifier, nodeClicked: true });
                    this.storeService.selectedNodeChange.next(data.contents[0].content.children[0].identifier);
                }
                // this.storeService.selectedNodeChange.subscribe(node => {
                //   if (node) {
                //     console.log('selected node', node)
                //     const getNodeId = (this.storeService.lexIdMap.get(node.toString()) as number[])[0]
                //     this.storeService.currentSelectedNode = getNodeId
                //     // this.contentService.currentContent = node.toString()
                //     // this.contentService.changeActiveCont.next(node.toString())
                //   }
                // })
            });
            this.activateRoute.parent.url.subscribe(data => {
                const urlParam = data[0].path;
                // if (urlParam === 'collection') {
                //   this.headerService.showCreatorHeader(this.courseName)
                // }
            });
        }
    }
    expandNodesById(ids) {
        const idSet = ids ? new Set(ids) : this.expandedNodes;
        this.treeControl.dataNodes.forEach(node => {
            if (idSet.has(node.id)) {
                this.treeControl.expand(node);
                let parent = this.getParentNode(node);
                while (parent) {
                    this.treeControl.expand(parent);
                    parent = this.getParentNode(parent);
                }
            }
        });
    }
    getParentNode(node) {
        const currentLevel = node.level;
        if (currentLevel < 1) {
            return null;
        }
        const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
        for (let i = startIndex; i >= 0; i = i - 1) {
            const currentNode = this.treeControl.dataNodes[i];
            if (currentNode.level < currentLevel) {
                return currentNode;
            }
        }
        return null;
    }
    ngOnDestroy() {
        this.loaderService.changeLoad.next(false);
        // this.headerService.showCreatorHeader('showlogo')
        // this.rootSvc.showNavbarDisplay$.next(true)
    }
    addChapterName() {
        // console.log('newchap', this.newChapterName)
    }
    setContentType(param) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.createTopicForm && this.createTopicForm.value) {
                this.couseCreated = param;
                const asSibling = false;
                const node = {
                    id: this.storeService.currentParentNode,
                    identifier: this.storeService.parentNode[0],
                    editable: true,
                    category: 'Course',
                    childLoaded: true,
                    expandable: true,
                    level: 1,
                };
                const parentNode = node;
                this.loaderService.changeLoad.next(true);
                const isDone = yield this.storeService.createChildOrSibling(this.couseCreated, parentNode, asSibling ? node.id : undefined, 'below', this.createTopicForm.value, param === 'web' ? 'link' : '');
                this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                    data: {
                        type: isDone ? _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SUCCESS : _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].FAIL,
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
                });
                if (isDone) {
                    const newCreatedLexid = this.editorService.newCreatedLexid;
                    const newCreatedNode = this.storeService.lexIdMap.get(newCreatedLexid)[0];
                    this.storeService.currentSelectedNode = newCreatedNode;
                    this.storeService.selectedNodeChange.next(newCreatedNode);
                    this.currentContent = this.editorService.newCreatedLexid;
                }
                this.showAddchapter = false;
                this.loaderService.changeLoad.next(false);
                this.subAction({ type: 'editContent', identifier: this.editorService.newCreatedLexid, nodeClicked: false });
                this.createTopicForm.reset();
                this.save();
            }
        });
    }
    sidenavClose() {
        setTimeout(() => (this.leftArrow = true), 500);
    }
    save(nextAction) {
        const updatedContent = this.contentService.upDatedContent || {};
        if (this.viewMode === 'assessment') {
            this.triggerQuizSave = true;
        }
        else if (this.viewMode === 'upload') {
            // TODO  console.log('viewmode', this.viewMode)
            this.triggerUploadSave = true;
        }
        if (Object.keys(updatedContent).length ||
            Object.keys(this.storeService.changedHierarchy).length) {
            this.isChanged = true;
            this.loaderService.changeLoad.next(true);
            this.triggerSave().subscribe(() => {
                if (nextAction) {
                    this.action(nextAction);
                }
                this.loaderService.changeLoad.next(false);
                this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                    data: {
                        type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SAVE_SUCCESS,
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
                });
                // window.location.reload()
            }, (error) => {
                if (error.status === 409) {
                    const errorMap = new Map();
                    Object.keys(this.contentService.originalContent).forEach(v => errorMap.set(v, this.contentService.originalContent[v]));
                    const dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                        width: '80vw',
                        height: '90vh',
                        data: {
                            errorFromBackendData: error.error,
                            dataMapping: errorMap,
                        },
                    });
                    dialog.afterClosed().subscribe(v => {
                        if (v) {
                            if (typeof v === 'string') {
                                this.storeService.selectedNodeChange.next(this.storeService.lexIdMap.get(v)[0]);
                                this.contentService.changeActiveCont.next(v);
                            }
                            else {
                                this.storeService.selectedNodeChange.next(v);
                                this.contentService.changeActiveCont.next(this.storeService.uniqueIdMap.get(v));
                            }
                        }
                    });
                }
                this.loaderService.changeLoad.next(false);
                this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                    data: {
                        type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SAVE_FAIL,
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
                });
            });
        }
        else {
            if (nextAction) {
                this.action(nextAction);
            }
            else {
                this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                    data: {
                        type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].UP_TO_DATE,
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
                });
            }
        }
    }
    get validationCheck() {
        const currentNodeId = this.storeService.lexIdMap.get(this.currentParentId);
        const returnValue = this.storeService.validationCheck(currentNodeId[0]);
        if (returnValue) {
            const dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                width: '80vw',
                height: '90vh',
                data: {
                    processErrorData: returnValue,
                },
            });
            dialog.afterClosed().subscribe(v => {
                if (v) {
                    if (typeof v === 'string') {
                        this.storeService.selectedNodeChange.next(this.storeService.lexIdMap.get(v)[0]);
                        this.contentService.changeActiveCont.next(v);
                    }
                    else {
                        this.storeService.selectedNodeChange.next(v);
                        this.contentService.changeActiveCont.next(this.storeService.uniqueIdMap.get(v));
                    }
                }
            });
            return false;
        }
        return true;
    }
    takeAction() {
        this.isSubmitPressed = true;
        const needSave = Object.keys(this.contentService.upDatedContent || {}).length;
        if (!needSave && !this.isChanged) {
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].UP_TO_DATE,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
            });
            return;
        }
        if (this.validationCheck) {
            const dialogRef = this.dialog.open(_ws_author_src_lib_modules_shared_components_comments_dialog_comments_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CommentsDialogComponent"], {
                width: '750px',
                height: '450px',
                data: this.contentService.getOriginalMeta(this.currentParentId),
            });
            dialogRef.afterClosed().subscribe((commentsForm) => {
                this.finalCall(commentsForm);
            });
        }
    }
    finalCall(commentsForm) {
        if (commentsForm) {
            const body = {
                comment: commentsForm.controls.comments.value,
                operation: commentsForm.controls.action.value === 'accept' ||
                    ['Draft', 'Live'].includes(this.contentService.originalContent[this.currentParentId].status)
                    ? 1
                    : 0,
            };
            const updatedMeta = this.contentService.getUpdatedMeta(this.currentParentId);
            const needSave = Object.keys(this.contentService.upDatedContent || {}).length ||
                Object.keys(this.storeService.changedHierarchy).length;
            const saveCall = (needSave ? this.triggerSave() : Object(rxjs__WEBPACK_IMPORTED_MODULE_16__["of"])({})).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["mergeMap"])(() => this.editorService
                .forwardBackward(body, this.currentParentId, this.contentService.originalContent[this.currentParentId].status)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["mergeMap"])(() => this.notificationSvc
                .triggerPushPullNotification(updatedMeta, body.comment, body.operation ? true : false)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["catchError"])(() => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_16__["of"])({});
            }))))));
            this.loaderService.changeLoad.next(true);
            saveCall.subscribe(() => {
                this.loaderService.changeLoad.next(false);
                this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                    data: {
                        type: this.getMessage('success'),
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
                });
                this.contents = this.contents.filter(v => v.identifier !== this.currentParentId);
                if (this.contents.length) {
                    this.contentService.changeActiveCont.next(this.contents[0].identifier);
                }
                else {
                    this.router.navigateByUrl('/author/home');
                }
            }, (error) => {
                if (error.status === 409) {
                    const errorMap = new Map();
                    Object.keys(this.contentService.originalContent).forEach(v => errorMap.set(v, this.contentService.originalContent[v]));
                    const dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                        width: '80vw',
                        height: '90vh',
                        data: {
                            errorFromBackendData: error.error,
                            dataMapping: errorMap,
                        },
                    });
                    dialog.afterClosed().subscribe(v => {
                        if (v) {
                            if (typeof v === 'string') {
                                this.storeService.selectedNodeChange.next(this.storeService.lexIdMap.get(v)[0]);
                                this.contentService.changeActiveCont.next(v);
                            }
                            else {
                                this.storeService.selectedNodeChange.next(v);
                                this.contentService.changeActiveCont.next(this.storeService.uniqueIdMap.get(v));
                            }
                        }
                    });
                }
                this.loaderService.changeLoad.next(false);
                this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                    data: {
                        type: this.getMessage('failure'),
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
                });
            });
        }
    }
    preview(id) {
        const updatedContent = this.contentService.upDatedContent || {};
        const saveCall = Object.keys(updatedContent).length || Object.keys(this.storeService.changedHierarchy).length
            ? this.triggerSave()
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_16__["of"])({});
        this.loaderService.changeLoad.next(true);
        saveCall.subscribe(() => {
            this.mimeTypeRoute = Object(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_20__["VIEWER_ROUTE_FROM_MIME"])(this.contentService.getUpdatedMeta(id).mimeType);
            this.loaderService.changeLoad.next(false);
            this.previewIdentifier = id;
        }, error => {
            if (error.status === 409) {
                const errorMap = new Map();
                Object.keys(this.contentService.originalContent).forEach(v => errorMap.set(v, this.contentService.originalContent[v]));
                const dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                    width: '750px',
                    height: '450px',
                    data: {
                        errorFromBackendData: error.error,
                        dataMapping: errorMap,
                    },
                });
                dialog.afterClosed().subscribe(v => {
                    if (v) {
                        if (typeof v === 'string') {
                            this.storeService.selectedNodeChange.next(this.storeService.lexIdMap.get(v)[0]);
                            this.contentService.changeActiveCont.next(v);
                        }
                        else {
                            this.storeService.selectedNodeChange.next(v);
                            this.contentService.changeActiveCont.next(this.storeService.uniqueIdMap.get(v));
                        }
                    }
                });
            }
            this.loaderService.changeLoad.next(false);
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SAVE_FAIL,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
            });
        });
    }
    closePreview() {
        this.previewIdentifier = null;
    }
    triggerSave() {
        const nodesModified = {};
        let isRootPresent = false;
        Object.keys(this.contentService.upDatedContent).forEach(v => {
            if (!isRootPresent) {
                isRootPresent = this.storeService.parentNode.includes(v);
            }
            nodesModified[v] = {
                isNew: false,
                root: this.storeService.parentNode.includes(v),
                metadata: this.contentService.upDatedContent[v],
            };
        });
        if (!isRootPresent) {
            nodesModified[this.currentParentId] = {
                isNew: false,
                root: true,
                metadata: {},
            };
        }
        const requestBody = {
            nodesModified,
            hierarchy: this.storeService.changedHierarchy,
        };
        return this.editorService.updateContentV2(requestBody).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["tap"])(() => {
            this.storeService.changedHierarchy = {};
            Object.keys(this.contentService.upDatedContent).forEach(id => {
                this.contentService.resetOriginalMeta(this.contentService.upDatedContent[id], id);
            });
            this.contentService.upDatedContent = {};
            // window.location.reload()
        }));
    }
    getMessage(type) {
        if (type === 'success') {
            switch (this.contentService.originalContent[this.currentParentId].status) {
                case 'Draft':
                case 'Live':
                    return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SEND_FOR_REVIEW_SUCCESS;
                case 'InReview':
                    return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].REVIEW_SUCCESS;
                case 'Reviewed':
                    return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].PUBLISH_SUCCESS;
                default:
                    return '';
            }
        }
        switch (this.contentService.originalContent[this.currentParentId].status) {
            case 'Draft':
            case 'Live':
                return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SEND_FOR_REVIEW_FAIL;
            case 'InReview':
                return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].REVIEW_FAIL;
            case 'Reviewed':
                return _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].PUBLISH_FAIL;
            default:
                return '';
        }
    }
    subAction(event) {
        // const nodeClicked = event.nodeClicked
        this.contentService.changeActiveCont.next(event.identifier);
        switch (event.type) {
            case 'editMeta':
                this.viewMode = 'meta';
                break;
            case 'editContent':
                if (event.nodeClicked === false) {
                    //  this.save('refresh')
                }
                const content = this.contentService.getUpdatedMeta(event.identifier);
                if (['application/pdf', 'application/x-mpegURL'].includes(content.mimeType)) {
                    this.viewMode = 'upload';
                }
                else if (['video/x-youtube', 'application/html'].includes(content.mimeType) && content.fileType === 'link') {
                    this.viewMode = 'curate';
                }
                else if (content.mimeType === 'application/html') {
                    this.viewMode = 'upload';
                }
                else if (content.mimeType === 'application/quiz') {
                    this.viewMode = 'assessment';
                }
                else if (content.mimeType === 'application/web-module') {
                    this.viewMode = 'webmodule';
                }
                // this.save()
                // localStorage.setItem('afterClick', nodeClicked)
                // if (nodeClicked) {
                //   window.location.reload()
                // }
                // this.routerValuesCall()
                break;
            case 'preview':
                this.preview(event.identifier);
                break;
            case 'showAddChapter':
                this.showAddchapter = false;
        }
    }
    action(type) {
        switch (type) {
            case 'next':
                this.viewMode = 'meta';
                break;
            case 'refresh':
                window.location.reload();
                break;
            case 'scroll':
                const el = document.getElementById('edit-meta');
                if (el) {
                    el.scrollIntoView();
                }
                break;
            case 'save':
                this.save();
                break;
            case 'saveAndNext':
                this.save('next');
                break;
            case 'preview':
                this.preview(this.currentContent);
                break;
            case 'push':
                if (this.getAction() === 'publish') {
                    const dialogRefForPublish = this.dialog.open(_ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"], {
                        width: '70%',
                        data: 'publishMessage',
                    });
                    dialogRefForPublish.afterClosed().subscribe(result => {
                        if (result) {
                            this.takeAction();
                        }
                    });
                }
                else {
                    this.takeAction();
                }
                break;
            case 'delete':
                const dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DeleteDialogComponent"], {
                    width: '600px',
                    height: 'auto',
                    data: this.contentService.getUpdatedMeta(this.currentParentId),
                });
                dialog.afterClosed().subscribe(confirm => {
                    if (confirm) {
                        this.contents = this.contents.filter(v => v.identifier !== this.currentParentId);
                        if (this.contents.length) {
                            this.contentService.changeActiveCont.next(this.contents[0].identifier);
                        }
                        else {
                            this.router.navigateByUrl('/author/home');
                        }
                    }
                });
                break;
            case 'fullscreen':
                this.fullScreenToggle();
                break;
            case 'close':
                this.router.navigateByUrl('/author/home');
                break;
        }
    }
    delete() {
        this.loaderService.changeLoad.next(true);
        this.editorService.deleteContent(this.currentParentId).subscribe(() => {
            this.loaderService.changeLoad.next(false);
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SUCCESS,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
            });
            this.contents = this.contents.filter(v => v.identifier !== this.currentParentId);
            if (this.contents.length) {
                this.contentService.changeActiveCont.next(this.contents[0].identifier);
            }
            else {
                this.router.navigateByUrl('/author/home');
            }
        }, error => {
            if (error.status === 409) {
                const errorMap = new Map();
                Object.keys(this.contentService.originalContent).forEach(v => errorMap.set(v, this.contentService.originalContent[v]));
                const dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                    width: '750px',
                    height: '450px',
                    data: {
                        errorFromBackendData: error.error,
                        dataMapping: errorMap,
                    },
                });
                dialog.afterClosed().subscribe(v => {
                    if (v) {
                        if (typeof v === 'string') {
                            this.storeService.selectedNodeChange.next(this.storeService.lexIdMap.get(v)[0]);
                            this.contentService.changeActiveCont.next(v);
                        }
                        else {
                            this.storeService.selectedNodeChange.next(v);
                            this.contentService.changeActiveCont.next(this.storeService.uniqueIdMap.get(v));
                        }
                    }
                });
            }
            this.loaderService.changeLoad.next(false);
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].CONTENT_FAIL,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
            });
        });
    }
    getAction() {
        switch (this.contentService.originalContent[this.currentParentId].status) {
            case 'Draft':
            case 'Live':
                return 'sendForReview';
            case 'InReview':
                return 'review';
            case 'Reviewed':
                const isDraftPresent = this.contentService.resetStatus();
                /**Change all content as draft, if one of the content is draft status */
                if (isDraftPresent) {
                    this.contentService.changeStatusDraft();
                    return 'sendForReview';
                }
                return 'publish';
            default:
                return 'sendForReview';
        }
    }
    canDelete() {
        return (this.accessControlSvc.hasRole(['editor', 'admin']) ||
            (['Draft', 'Live'].includes(this.contentService.originalContent[this.currentParentId].status) &&
                this.contentService.originalContent[this.currentParentId].creatorContacts.find(v => v.id === this.accessControlSvc.userId)));
    }
};
CourseCollectionComponent.ctorParameters = () => [
    { type: _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_12__["EditorContentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_19__["CollectionStoreService"] },
    { type: _services_resolver_service__WEBPACK_IMPORTED_MODULE_18__["CollectionResolverService"] },
    { type: _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_14__["AuthInitService"] },
    { type: _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_15__["LoaderService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _ws_author_src_lib_routing_modules_editor_services_editor_service__WEBPACK_IMPORTED_MODULE_13__["EditorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ws_author_src_lib_services_notification_service__WEBPACK_IMPORTED_MODULE_21__["NotificationService"] },
    { type: _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_22__["AccessControlService"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_23__["BreakpointObserver"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
CourseCollectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'ws-author-course-collection',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./course-collection.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-collection/course-collection.component.html")).default,
        providers: [_services_store_service__WEBPACK_IMPORTED_MODULE_19__["CollectionStoreService"], _services_resolver_service__WEBPACK_IMPORTED_MODULE_18__["CollectionResolverService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./course-collection.component.scss */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-collection/course-collection.component.scss")).default]
    })
], CourseCollectionComponent);



/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-header/course-header.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-header/course-header.component.scss ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-logo {\n  max-width: 100px;\n  max-height: 60px;\n  border-left: solid 1px;\n  padding-left: 8px;\n  margin-left: 10px;\n}\n@media only screen and (max-width: 599px) {\n  .app-logo {\n    max-width: 80px;\n    max-height: 30px;\n  }\n}\n.mr-10 {\n  margin-right: 10px;\n}\n.xsmall {\n  position: absolute;\n  display: block;\n  right: 0;\n}\n.header-spacer {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9jb3Vyc2UtaGVhZGVyL2NvdXJzZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9lZGl0b3Ivcm91dGluZy9tb2R1bGVzL2NvbGxlY3Rpb24vY29tcG9uZW50cy9jb3Vyc2UtaGVhZGVyL2NvdXJzZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvc3R5bGVzL193cy1taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNESjtBQ2FFO0VGakJGO0lBUUksZUFBQTtJQUNBLGdCQUFBO0VDQUY7QUFDRjtBREdBO0VBQ0Usa0JBQUE7QUNBRjtBREdBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtBQ0FGO0FER0E7RUFDRSxjQUFBO0FDQUYiLCJmaWxlIjoicHJvamVjdC93cy9hdXRob3Ivc3JjL2xpYi9yb3V0aW5nL21vZHVsZXMvZWRpdG9yL3JvdXRpbmcvbW9kdWxlcy9jb2xsZWN0aW9uL2NvbXBvbmVudHMvY291cnNlLWhlYWRlci9jb3Vyc2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy1taXhpbnMuc2Nzcyc7XG5cbi5hcHAtbG9nbyB7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG1heC1oZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG5cbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14cyB7XG4gICAgbWF4LXdpZHRoOiA4MHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwcHg7XG4gIH1cbn1cblxuLm1yLTEwIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ueHNtYWxsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcmlnaHQ6IDA7XG59XG5cbi5oZWFkZXItc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59IiwiLmFwcC1sb2dvIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgbWF4LWhlaWdodDogNjBweDtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAuYXBwLWxvZ28ge1xuICAgIG1heC13aWR0aDogODBweDtcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xuICB9XG59XG5cbi5tci0xMCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnhzbWFsbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHJpZ2h0OiAwO1xufVxuXG4uaGVhZGVyLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufSIsIkBpbXBvcnQgJ3N0eWxlcy9fd3MtdmFycy5zY3NzJztcblxuQG1peGluIHJldGluYSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIHByaW50IHtcbiAgQG1lZGlhIG9ubHkgcHJpbnQge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBicmVha3BvaW50LXhzIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC14bCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSBhbmQgKG1heC13aWR0aDogNTAwMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LXMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC14bCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LXhzIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-header/course-header.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-header/course-header.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: CourseHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseHeaderComponent", function() { return CourseHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ws_widget_utils_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ws-widget/utils/src/public-api */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/store.service */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/store.service.ts");





let CourseHeaderComponent = class CourseHeaderComponent {
    constructor(configSvc, domSanitizer, 
    // private headerService: HeaderServiceService,
    store) {
        this.configSvc = configSvc;
        this.domSanitizer = domSanitizer;
        this.store = store;
        this.appIcon = null;
        this.buttonConfig = null;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.requiredConfig = [];
        // this.headerService.showCourseHeader.subscribe(data => {
        //   this.courseNameHeader = data
        // })
    }
    ngOnInit() {
        if (this.configSvc.instanceConfig) {
            this.domSanitizer.bypassSecurityTrustResourceUrl(this.appIcon = this.configSvc.instanceConfig.logos.app);
        }
        if (this.buttonConfig) {
            this.buttonConfig.buttons.forEach(button => {
                if (button.event === 'save' || button.event === 'push' || button.title === 'saveAndNext') {
                    this.requiredConfig.push(button);
                }
            });
        }
    }
    showCourseSettings() {
        this.subAction.emit({ type: 'editContent', identifier: this.store.parentNode[0], nodeClicked: true });
    }
};
CourseHeaderComponent.ctorParameters = () => [
    { type: _ws_widget_utils_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ConfigurationsService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_4__["CollectionStoreService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CourseHeaderComponent.prototype, "buttonConfig", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CourseHeaderComponent.prototype, "action", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CourseHeaderComponent.prototype, "subAction", void 0);
CourseHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'ws-author-course-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./course-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-header/course-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./course-header.component.scss */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/components/course-header/course-header.component.scss")).default]
    })
], CourseHeaderComponent);



/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/resolver.service.ts":
/*!******************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/resolver.service.ts ***!
  \******************************************************************************************************************/
/*! exports provided: CollectionResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionResolverService", function() { return CollectionResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ws/author/src/lib/constants/icons */ "./project/ws/author/src/lib/constants/icons.ts");
/* harmony import */ var _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ws/author/src/lib/constants/mimeType */ "./project/ws/author/src/lib/constants/mimeType.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/services/access-control.service */ "./project/ws/author/src/lib/modules/shared/services/access-control.service.ts");
/* harmony import */ var _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ws/author/src/lib/routing/modules/editor/services/editor-content.service */ "./project/ws/author/src/lib/routing/modules/editor/services/editor-content.service.ts");
/* harmony import */ var _services_init_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../../../../services/init.service */ "./project/ws/author/src/lib/services/init.service.ts");







let CollectionResolverService = 
/**
 * The service which contains the logic to parse the collection hierarch data and produce the
 * respective tree structure or json structure
 */
class CollectionResolverService {
    constructor(accessService, contentService, authInitService) {
        this.accessService = accessService;
        this.contentService = contentService;
        this.authInitService = authInitService;
        // The set to hold the content type for which the lazy loading of children is required
        this.lazyLoad = new Set();
        this._uniqueId = 0;
    }
    get uniqueId() {
        this._uniqueId += 1;
        return Date.now() + this._uniqueId;
    }
    /**
     * Restructure the hierarch passed from backend to a map and tree hierarch
     * which is easy to read and update the meta and tree structure
     *
     * @param { NSContent.IContentMeta } content - The hierarchy to be passed
     * @param { Map } content - The map which is used to read and populate meta data
     * @param { Map<string, NSContent.IContentMeta> } flatNodeMap - The map which is used to modify change in individual tree structure
     * @param { Map<number,string> } uniqueIdMap - The map which is used to get unique id against lex id
     *
     */
    buildTreeAndMap(content, map, flatNodeMap, uniqueIdMap, lexIdMap) {
        /**
         * Recursive function which actually do the work
         *
         * @param { NSContent.IContentMeta } currContent - The hierarchy to be passed
         * @param { string[] } parentList - The parent lex ids in the hierarchy in the order of top to bottom
         * @param { boolean } editable - Whether the user have access to change the parent hierarch or not
         * @returns { IContentNode } the restructured hierarch data to load in tree
         */
        const recursiveFn = (currContent, parentId = undefined, editable = true) => {
            const treeStructure = {
                editable,
                parentId,
                id: this.uniqueId,
                identifier: currContent.identifier,
                category: this.getCategory(currContent),
                childLoaded: !this.lazyLoad.has(this.getCategory(currContent)),
                children: [],
            };
            map.set(currContent.identifier, currContent);
            uniqueIdMap.set(treeStructure.id, currContent.identifier);
            const uniqueIds = lexIdMap.get(treeStructure.identifier);
            if (uniqueIds) {
                uniqueIds.push(treeStructure.id);
            }
            else {
                lexIdMap.set(treeStructure.identifier, [treeStructure.id]);
            }
            /**
             * Checking the user have access or not
             */
            const haveAccessToChangeStructure = this.hasAccess(currContent);
            if (treeStructure.childLoaded && treeStructure.children) {
                const children = [];
                currContent.children.forEach(v => children.push(recursiveFn(v, treeStructure.id, haveAccessToChangeStructure)));
                treeStructure.children = children;
            }
            flatNodeMap.set(treeStructure.id, treeStructure);
            return treeStructure;
        };
        return recursiveFn(content);
    }
    getFlatHierarchy(id, flatNodeMap, rightPermission = true) {
        const returnValue = [];
        const recursiveFunction = (currId) => {
            returnValue.push(currId);
            const node = flatNodeMap.get(currId);
            if ((rightPermission && node.editable) || !rightPermission) {
                const children = node.children || [];
                children.map(v => recursiveFunction(v.id));
            }
        };
        recursiveFunction(id);
        return returnValue;
    }
    /**
     * Since the category is not populated for old content to make it backward compatible
     * we are checking the category first if it is not present we are sending the contentType
     *
     * @param { NSContent.IContentMeta } content - The content for which we need to get category
     * @returns { string } The category
     */
    getCategory(content) {
        return content.category || content.contentType;
    }
    /**
     * Since the categoryType is not populated for old content to make it backward compatible
     * we are checking the categoryType first if it is not present we are checking the contentType
     * and based on contentType we select resourceType or courseType
     *
     * @param { NSContent.IContentMeta } content - The content for which we need to get category
     * @returns { string } The category type
     */
    getCategoryType(content) {
        switch (this.getCategory(content)) {
            case 'Collection':
                return '';
            default:
                return '';
        }
    }
    /**
     * To get the respective Mat icon mapping for the each contents
     * For different resources we need different types of icons
     *
     * @param { NSContent.IContentMeta } content - The content for which we need to get category
     * @returns { string } The mat icon to be displayed
     */
    getIcon(content) {
        if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].collection) {
            if (content.contentType === 'Learning Path') {
                return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].program;
            }
            if (content.contentType === 'Course') {
                return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].course;
            }
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].learningModule;
        }
        if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].html) {
            if (content.resourceType === 'Certification') {
                return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].certificate;
            }
            if (content.isExternal) {
                return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].externalContent;
            }
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].internalContent;
        }
        if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].pdf) {
            if (!content.artifactUrl) {
                return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].emptyFile;
            }
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].pdf;
        }
        if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].youtube) {
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].youtube;
        }
        if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].quiz) {
            if (content.resourceType === 'Assessment') {
                return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].assessment;
            }
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].quiz;
        }
        if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].dragDrop) {
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].dragNDrop;
        }
        if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].htmlPicker) {
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].htmlPicker;
        }
        if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].webModule) {
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].internalContent;
        }
        if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].handson) {
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].handsOn;
        }
        if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].iap) {
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].iap;
        }
        if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].mp3) {
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].audio;
        }
        if (content.mimeType === _ws_author_src_lib_constants_mimeType__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].mp4) {
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].video;
        }
        if (content.contentType === 'Collection') {
            return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].learningModule;
        }
        return _ws_author_src_lib_constants_icons__WEBPACK_IMPORTED_MODULE_2__["ICON_TYPE"].default;
    }
    /**
     * To get to know the user access to change the hierarchy structure or not
     * Respective role have different access on different status of the content.
     * @param { NSContent.IContentMeta } content - The content for which we need to get category
     * @returns { boolean } The mat icon to be displayed
     */
    hasAccess(content, parentMeta) {
        return this.contentService.hasAccess(content, false, parentMeta) &&
            content.status === 'InReview'
            ? this.authInitService.collectionConfig.enabledRole.includes('reviewer')
            : content.status === 'Reviewed'
                ? this.authInitService.collectionConfig.enabledRole.includes('publisher')
                : ['Draft', 'Live'].includes(content.status)
                    ? this.authInitService.collectionConfig.enabledRole.includes('author')
                    : this.accessService.hasRole(['admin']);
    }
    /**
     * To know whether the drop of one node is allowed based max depth logic
     * @param { IContentTreeNode } dropNode - The node for which depth needs to be checked
     * @param { IContentTreeNode } dragNode - The node for which depth needs to be checked
     * @param { number } maxDepth - Maximum depth allowed in the configuration
     * @returns { boolean } The mat icon to be displayed
     */
    allowMaxDepth(_dropNode, _dragNode, _maxDepth) {
        return true;
    }
};
CollectionResolverService.ctorParameters = () => [
    { type: _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_4__["AccessControlService"] },
    { type: _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_5__["EditorContentService"] },
    { type: _services_init_service__WEBPACK_IMPORTED_MODULE_6__["AuthInitService"] }
];
CollectionResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    /**
     * The service which contains the logic to parse the collection hierarch data and produce the
     * respective tree structure or json structure
     */
], CollectionResolverService);



/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/store.service.ts":
/*!***************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/store.service.ts ***!
  \***************************************************************************************************************/
/*! exports provided: CollectionStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionStoreService", function() { return CollectionStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _ws_author_src_lib_constants_depth_rule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ws/author/src/lib/constants/depth-rule */ "./project/ws/author/src/lib/constants/depth-rule.ts");
/* harmony import */ var _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ws/author/src/lib/routing/modules/editor/services/editor-content.service */ "./project/ws/author/src/lib/routing/modules/editor/services/editor-content.service.ts");
/* harmony import */ var _ws_author_src_lib_routing_modules_editor_services_editor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ws/author/src/lib/routing/modules/editor/services/editor.service */ "./project/ws/author/src/lib/routing/modules/editor/services/editor.service.ts");
/* harmony import */ var _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ws/author/src/lib/services/init.service */ "./project/ws/author/src/lib/services/init.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _resolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resolver.service */ "./project/ws/author/src/lib/routing/modules/editor/routing/modules/collection/services/resolver.service.ts");









let CollectionStoreService = class CollectionStoreService {
    constructor(contentService, editorService, resolver, authInitService, logger) {
        this.contentService = contentService;
        this.editorService = editorService;
        this.resolver = resolver;
        this.authInitService = authInitService;
        this.logger = logger;
        this.parentNode = [];
        this.invalidIds = [];
        this.onInvalidNodeChange = new rxjs__WEBPACK_IMPORTED_MODULE_7__["ReplaySubject"]();
        /**
         * Map from flat node to nested node. This helps us finding the nested node to be modified
         */
        this.flatNodeMap = new Map();
        /**
         * Map for unique id and lex id. This helps us finding the lex id of the node
         */
        this.uniqueIdMap = new Map();
        /**
         * Map for Lex id with unique id. This helps us tracking the change
         */
        this.lexIdMap = new Map();
        this.changedHierarchy = {};
        this.treeStructureChange = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.selectedNodeChange = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
    }
    get selectedNode() {
        return this.selectedNodeChange.value;
    }
    allowDrop(dragNode, dropNode) {
        let allow = true;
        if (!dragNode.editable || !dropNode.editable) {
            allow = false;
        }
        else if (!this.authInitService.collectionConfig.childrenConfig[dropNode.category]) {
            allow = false;
        }
        else if (!this.resolver.hasAccess(this.contentService.getUpdatedMeta(dropNode.identifier), dropNode.parentId
            ? this.contentService.getUpdatedMeta(this.flatNodeMap.get(dropNode.parentId).identifier)
            : undefined)) {
            allow = false;
        }
        else if (this.authInitService.collectionConfig.maxDepth <=
            dropNode.level + _ws_author_src_lib_constants_depth_rule__WEBPACK_IMPORTED_MODULE_3__["DEPTH_RUE"][dragNode.category]) {
            allow = false;
        }
        return allow;
    }
    dragAndDrop(dragNode, dropNode, adjacentId, dropLocation = 'below', emitChange = true) {
        const oldParentNode = dragNode.parentId ? this.flatNodeMap.get(dragNode.parentId) : undefined;
        const newParentNode = this.flatNodeMap.get(dropNode.id);
        const oldParentChildList = oldParentNode ? oldParentNode.children : [];
        const newParentChildList = newParentNode.children;
        oldParentChildList.splice(oldParentChildList.findIndex(v => v.id === dragNode.id), 1);
        const childNode = this.flatNodeMap.get(dragNode.id);
        childNode.parentId = dropNode.id;
        if (adjacentId) {
            const dropPosition = (dropNode.children || []).indexOf(adjacentId) + (dropLocation === 'above' ? -1 : 1);
            const children = newParentNode.children;
            children.splice(dropPosition, 0, childNode);
        }
        else {
            if (newParentChildList) {
                newParentChildList.push(childNode);
            }
            else {
                newParentNode.children = [childNode];
            }
        }
        if (oldParentNode) {
            this.changedHierarchy[oldParentNode.identifier] = {
                root: this.parentNode.includes(oldParentNode.identifier),
                children: oldParentChildList.map(v => {
                    const child = {
                        identifier: v.identifier,
                        reasonAdded: 'Added from Authoring Tool',
                        childrenClassifiers: [],
                    };
                    return child;
                }),
            };
        }
        this.changedHierarchy[newParentNode.identifier] = {
            root: this.parentNode.includes(newParentNode.identifier),
            children: newParentChildList.map(v => {
                const child = {
                    identifier: v.identifier,
                    reasonAdded: 'Added from Authoring Tool',
                    childrenClassifiers: [],
                };
                return child;
            }),
        };
        if (emitChange) {
            this.treeStructureChange.next(this.treeStructureChange.value);
        }
    }
    addChildOrSibling(ids, dropNode, adjacentId, dropLocation = 'below') {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const contents = yield this.editorService.readMultipleContent(ids).toPromise();
                const contentDataMap = new Map();
                contents.map((v, index) => {
                    this.contentService.setOriginalMeta(v);
                    const treeStructure = this.resolver.buildTreeAndMap(v, contentDataMap, this.flatNodeMap, this.uniqueIdMap, this.lexIdMap);
                    this.dragAndDrop(treeStructure, dropNode, adjacentId, dropLocation, index === ids.length - 1);
                });
                return true;
            }
            catch (ex) {
                this.logger.error(ex);
                return false;
            }
        });
    }
    createChildOrSibling(type, dropNode, adjacentId, dropLocation = 'below', topicObj, fileType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const meta = this.authInitService.creationEntity.get(type);
                const parentData = this.contentService.parentUpdatedMeta();
                const requestBody = Object.assign({ name: topicObj ? topicObj.topicName : 'New Content', description: topicObj ? topicObj.topicDescription : '', mimeType: meta.mimeType, contentType: meta.contentType, resourceType: parentData.categoryType || '', categoryType: parentData.categoryType || '', fileType: fileType || '', 
                    // thumbnail: parentData.thumbnail,
                    // appIcon: parentData.appIcon,
                    posterImage: parentData.posterImage, sourceName: parentData.sourceName, subTitle: parentData.subTitle, body: parentData.body, 
                    //   sourceName : parentData.sourceName,
                    locale: 
                    // tslint:disable-next-line: ter-computed-property-spacing
                    this.contentService.originalContent[this.flatNodeMap.get(this.currentParentNode).identifier
                    // tslint:disable-next-line: ter-computed-property-spacing
                    ].locale || 'en' }, (meta.additionalMeta || {}));
                // requestBody.posterImage = parentData.posterImage
                // requestBody.sourceName = parentData.sourceName
                // requestBody.subTitle = parentData.subTitle
                // requestBody.body = parentData.body
                // requestBody.categoryType = parentData.categoryType
                const content = yield this.editorService.createAndReadContent(requestBody).toPromise();
                // if (content) {
                //  // content.thumbnail = parentData.thumbnail
                //  // content.appIcon = parentData.appIcon
                // }
                this.contentService.setOriginalMeta(content);
                const contentDataMap = new Map();
                const treeStructure = this.resolver.buildTreeAndMap(content, contentDataMap, this.flatNodeMap, this.uniqueIdMap, this.lexIdMap);
                this.dragAndDrop(treeStructure, dropNode, adjacentId, dropLocation);
                return true;
            }
            catch (ex) {
                this.logger.error(ex);
                return false;
            }
        });
    }
    deleteNode(id) {
        const deleteIds = this.resolver.getFlatHierarchy(id, this.flatNodeMap, false);
        const node = this.flatNodeMap.get(id);
        const parentNode = node.parentId ? this.flatNodeMap.get(node.parentId) : undefined;
        deleteIds.forEach(v => {
            this.flatNodeMap.delete(v);
            const lexId = this.uniqueIdMap.get(v);
            this.uniqueIdMap.delete(v);
            const uniqueIds = this.lexIdMap.get(lexId);
            if (uniqueIds.length > 1) {
                uniqueIds.splice(uniqueIds.findIndex(currId => v === currId), 1);
            }
            else {
                this.lexIdMap.delete(lexId);
                delete this.contentService.originalContent[lexId];
                delete this.contentService.upDatedContent[lexId];
                delete this.changedHierarchy[lexId];
            }
        });
        if (parentNode) {
            const children = parentNode.children || [];
            children.splice(children.findIndex(v => v.id === id), 1);
            this.changedHierarchy[parentNode.identifier] = {
                root: this.parentNode.includes(parentNode.identifier),
                children: children.map(v => {
                    const child = {
                        identifier: v.identifier,
                        reasonAdded: 'Added from Authoring Tool',
                        childrenClassifiers: [],
                    };
                    return child;
                }),
            };
        }
        this.treeStructureChange.next(this.treeStructureChange.value);
    }
    cascadeDown(id, value, field, single = false) {
        const dependantIds = this.resolver.getFlatHierarchy(id, this.flatNodeMap, true);
        if (dependantIds.length <= 1) {
            return false;
        }
        dependantIds
            .filter(v => v !== id)
            .forEach(v => {
            const lexId = this.uniqueIdMap.get(v);
            if (single) {
                // tslint:disable-next-line: ter-computed-property-spacing
                let meta = this.contentService.getUpdatedMeta(lexId)[field
                // tslint:disable-next-line: ter-computed-property-spacing
                ];
                if (meta) {
                    meta.push(value);
                }
                else {
                    meta = [value];
                }
                this.contentService.setUpdatedMeta({ field: meta }, lexId);
            }
            else {
                this.contentService.setUpdatedMeta({ field: value }, lexId);
            }
        });
        return true;
    }
    validationCheck(id) {
        const returnValue = new Map();
        const errorIds = new Set();
        const hierarchy = this.resolver.getFlatHierarchy(id, this.flatNodeMap);
        this.metaValidationCheck(hierarchy, errorIds, returnValue);
        this.hierarchyStructureCheck(hierarchy, errorIds, returnValue);
        this.onInvalidNodeChange.next(Array.from(errorIds));
        return returnValue.size ? Array.from(returnValue.values()) : null;
    }
    hierarchyStructureCheck(ids, errorId, errorMap) {
        ids.forEach(v => {
            const contentNode = this.flatNodeMap.get(v);
            const category = contentNode.category;
            const childConfig = this.authInitService.collectionConfig.childrenConfig[category];
            const errorMsg = [];
            const lexId = this.uniqueIdMap.get(v);
            const content = this.contentService.getUpdatedMeta(lexId);
            let currNode = contentNode;
            let currentLevel = 0;
            while (currNode.parentId) {
                currentLevel = currentLevel + 1;
                currNode = this.flatNodeMap.get(currNode.parentId);
            }
            const excessLevel = _ws_author_src_lib_constants_depth_rule__WEBPACK_IMPORTED_MODULE_3__["DEPTH_RUE"][contentNode.category] +
                currentLevel -
                this.authInitService.collectionConfig.maxDepth;
            if (excessLevel > 0) {
                errorMsg.push(`Breached maximum level of depth allowed. It should be ${excessLevel} level above`);
            }
            if (childConfig) {
                const allowedTypes = childConfig.childTypes;
                const childTypeMap = allowedTypes.map(() => 0);
                const children = contentNode.children || [];
                if (childConfig.minChildren && children.length < childConfig.minChildren) {
                    errorMsg.push(`Minimum ${childConfig.minChildren} children is required. But ${children.length ? children.length : 'nothing'} present`);
                }
                if (childConfig.maxChildren && children.length > childConfig.maxChildren) {
                    errorMsg.push(`Maximum ${childConfig.minChildren} children is allowed. But ${children.length} present`);
                }
                children.forEach((child, position) => {
                    const childContent = this.contentService.getUpdatedMeta(child.identifier);
                    let canPresent = false;
                    allowedTypes.forEach((element, index) => {
                        const canAllow = this.contentService.checkConditionV2(childContent, element.conditions);
                        if (canAllow) {
                            canPresent = true;
                            childTypeMap[index] = childTypeMap[index] + 1;
                            if (position) {
                                return;
                            }
                            // if (element.position === 'n' && position !== children.length - 1) {
                            //   let isSameChild = true
                            //   children.slice(position).forEach(sibling => {
                            //     const siblingChild = this.contentService.getUpdatedMeta(sibling.identifier)
                            //     isSameChild = this.contentService.checkConditionV2(
                            //       siblingChild,
                            //       element.conditions,
                            //     )
                            //     // if (!isSameChild) {
                            //     //   errorMsg.push(`${childContent.name || 'Untitled Content'} should be last child`)
                            //     //   return
                            //     // }
                            //   })
                            // }
                            return;
                        }
                    });
                    if (!canPresent) {
                        errorMsg.push(`${childContent.name || 'Untitled Content'} is not allowed to add here`);
                    }
                });
                allowedTypes.forEach((type, index) => {
                    if (type.minimum && childTypeMap[index] < type.minimum) {
                        errorMsg.push(`Minimum ${type.minimum} contents of type ${this.formStringFromCondition(type.conditions)} is required. But only ${childTypeMap[index]} is present`);
                    }
                    if (type.maximum && type.maximum < childTypeMap[index]) {
                        errorMsg.push(`Maximum ${type.maximum} contents of type ${this.formStringFromCondition(type.conditions)} is allowed. But ${childTypeMap[index]} is present`);
                    }
                });
            }
            else if (contentNode.children && contentNode.children.length) {
                errorMsg.push(`Should not contain any child. But ${contentNode.children.length} were added`);
            }
            this.populateErrorMsg(v, errorMsg, content, errorId, errorMap);
        });
    }
    formStringFromCondition(condition) {
        let returnValue = '';
        if (condition.fit) {
            condition.fit.forEach((subCondition, majorIndex) => {
                Object.keys(subCondition).forEach((v, index) => {
                    returnValue = `${returnValue}${majorIndex > 0 ? ' or ' : ''}${index > 0 ? ' ' : ''}${v} in ${subCondition[v].join(' or ')}`;
                });
            });
        }
        return returnValue;
    }
    metaValidationCheck(ids, errorId, errorMap) {
        ids.forEach(v => {
            const errorMsg = [];
            const lexId = this.uniqueIdMap.get(v);
            const content = this.contentService.getUpdatedMeta(lexId);
            if (!this.contentService.isValid(lexId)) {
                errorMsg.push('Mandatory fields are missing');
            }
            if (content.category === 'Resource') {
                if (content.mimeType === 'application/html' && !content.artifactUrl && !content.body) {
                    errorMsg.push('Provide URL or populate "Body" field');
                }
                else if (['application/pdf', 'application/x-mpegURL'].includes(content.mimeType) &&
                    !content.artifactUrl) {
                    errorMsg.push('Upload file');
                }
            }
            this.populateErrorMsg(v, errorMsg, content, errorId, errorMap);
        });
    }
    populateErrorMsg(id, errorMsg, content, errorId, errorMap) {
        if (errorMsg.length) {
            errorId.add(id);
            if (errorMap.has(id)) {
                // tslint:disable-next-line: semicolon    // tslint:disable-next-line: whitespace
                ;
                errorMap.get(id).message = errorMap.get(id).message.concat(errorMsg);
            }
            else {
                errorMap.set(id, {
                    id,
                    name: content.name || 'Untitled Content',
                    message: errorMsg,
                });
            }
        }
    }
};
CollectionStoreService.ctorParameters = () => [
    { type: _ws_author_src_lib_routing_modules_editor_services_editor_content_service__WEBPACK_IMPORTED_MODULE_4__["EditorContentService"] },
    { type: _ws_author_src_lib_routing_modules_editor_services_editor_service__WEBPACK_IMPORTED_MODULE_5__["EditorService"] },
    { type: _resolver_service__WEBPACK_IMPORTED_MODULE_8__["CollectionResolverService"] },
    { type: _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_6__["AuthInitService"] },
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_2__["LoggerService"] }
];
CollectionStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CollectionStoreService);



/***/ })

}]);
//# sourceMappingURL=routing-modules-collection-collection-module-es2015.js.map