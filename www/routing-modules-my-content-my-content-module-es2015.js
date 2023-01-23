(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routing-modules-my-content-my-content-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/my-content/components/content-card-v2/content-card-v2.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/my-content/components/content-card-v2/content-card-v2.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"content-card margin-l\">\n  <a class=\"cursor-pointer\" [routerLink]=\"(content | pipeContentRoute: true).url\">\n    <img mat-card-image [src]=\"content.appIcon | relativeUrl\" (error)=\"changeToDefaultImg($event)\"\n      [alt]=\"content.name\" />\n  </a>\n  <mat-card-content>\n    <div class=\"flex justify-center content-center\">\n      <div class=\"self-center\">\n        <mat-icon class=\"icon\" [matTooltip]=\"categoryType\" aria-hidden=\"false\" [attr.aria-label]=\"categoryType\">\n          {{ icon }}</mat-icon>\n      </div>\n      <div class=\"w-full overflow-prevent font-medium ws-mat-primary-text px-2 self-center\" wsAuthShowHideToolTip\n        [matTooltip]=\"content.name\">\n        <ng-container *ngIf=\"content.name; else noName\">{{ content.name }}</ng-container>\n        <ng-template #noName>Untitled Content</ng-template>\n      </div>\n      <span i18n-matTooltip [matTooltip]=\"'An older version available in Live'\"\n        *ngIf=\"content.identifier.includes('.img')\" class=\"circle\">\n      </span>\n    </div>\n    <div class=\"pt-2 w-full flex\">\n      <span [matTooltip]=\"category\" wsAuthShowHideToolTip class=\"w-2/4 overflow-prevent\">{{ category }}</span>\n      <ws-auth-status-display class=\"overflow-prevent flex w-2/4 justify-end\" [status]=\"content.status\">\n      </ws-auth-status-display>\n    </div>\n    <div class=\"pt-2\" *ngIf=\"content.lastUpdatedOn\">\n      <ws-auth-last-update-display [perspective]=\"timeLinePerspective\" [expiryDate]=\"content.expiryDate\"\n        [lastUpdatedOn]=\"content.lastUpdatedOn\"></ws-auth-last-update-display>\n    </div>\n    <div class=\"pt-2\">\n      <div class=\"flex justify-between items-center\">\n        <button [routerLink]=\"'/author/editor/' + content.identifier\" *ngIf=\"mainAction === 'edit'\"\n          [disabled]=\"disabledActions.includes('edit')\" mat-raised-button color=\"primary\">\n          <!-- <mat-icon class=\"custom-icon\">edit</mat-icon> -->\n          <span i18n>Edit</span>\n        </button>\n        <button [routerLink]=\"'/author/editor/' + content.identifier\" *ngIf=\"mainAction === 'takeAction'\"\n          mat-raised-button color=\"primary\">\n          <!-- <mat-icon class=\"custom-icon\">call_to_action</mat-icon> -->\n          <span *ngIf=\"content.status === 'InReview'\" i18n>Review</span>\n          <span *ngIf=\"content.status === 'Reviewed'\" i18n>Publish</span>\n          <span *ngIf=\"content.status === 'QualityReview'\" i18n>Quality Review</span>\n        </button>\n        <button (click)=\"moveToDraft()\" *ngIf=\"mainAction === 'pullBack'\" i18n-matTooltip\n          [matTooltip]=\"'Pull back content to Draft'\" mat-raised-button color=\"primary\">\n          <!-- <mat-icon class=\"custom-icon\">cancel_schedule_send</mat-icon> -->\n          <span i18n>Edit</span>\n        </button>\n        <button (click)=\"moveToDraft()\" *ngIf=\"mainAction === 'moveToDraft'\" i18n-matTooltip\n          [matTooltip]=\"'Move content to draft'\" mat-raised-button color=\"primary\">\n          <!-- <mat-icon class=\"custom-icon\">archive</mat-icon> -->\n          <span i18n>Edit</span>\n        </button>\n        <button (click)=\"unpublish()\" *ngIf=\"mainAction === 'unpublish'\" i18n-matTooltip\n          [matTooltip]=\"'Remove content from Live'\" mat-raised-button color=\"primary\">\n          <!-- <mat-icon class=\"custom-icon\">archive</mat-icon> -->\n          <span i18n>Unpublish</span>\n        </button>\n        <button (click)=\"restore()\" *ngIf=\"mainAction === 'restore'\" [matTooltip]=\"'Pull the content to Draft'\"\n          mat-raised-button color=\"primary\">\n          <!-- <mat-icon class=\"custom-icon\">restore_from_trash</mat-icon> -->\n          <span i18n>Edit</span>\n        </button>\n        <button (click)=\"extendOrExpiry()\" *ngIf=\"mainAction === 'extend'\" i18n-matTooltip\n          [matTooltip]=\"'Extend or Mark for Deletion'\" mat-raised-button color=\"primary\">\n          <!-- <mat-icon class=\"custom-icon\">date_range</mat-icon> -->\n          <span i18n>Extend</span>\n        </button>\n        <span [matTooltip]=\"locale\" class=\"flex items-center\">\n          <img class=\"img\" (error)=\"changeToGlobalSymbol($event)\"\n            [src]=\"'/assets/common/flags/' +content.locale+'.png'\">\n          <span>{{content.locale | uppercase}}</span>\n        </span>\n        <button i18n-matTooltip [matTooltip]=\"'More Actions'\" *ngIf=\"allowedActions.length\" mat-icon-button\n          [matMenuTriggerFor]=\"moreMenu\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n        <span *ngIf=\"!allowedActions.length\"></span>\n      </div>\n    </div>\n  </mat-card-content>\n</mat-card>\n\n<mat-menu #moreMenu=\"matMenu\">\n  <a [disabled]=\"disabledActions.includes('edit')\" mat-menu-item *ngIf=\"allowedActions.includes('edit')\"\n    [routerLink]=\"'/author/editor/' + content.identifier\">\n    <mat-icon>edit</mat-icon><span i18n>Edit</span>\n  </a>\n  <a [disabled]=\"disabledActions.includes('delete')\" mat-menu-item\n    (click)=\"disabledActions.includes('delete') ? null : delete()\" *ngIf=\"allowedActions.includes('delete')\">\n    <mat-icon>delete</mat-icon><span i18n>Delete</span>\n  </a>\n  <a mat-menu-item (click)=\"moveToDraft()\" i18n-matTooltip [matTooltip]=\"'Pull back content to Draft'\"\n    *ngIf=\"allowedActions.includes('pullBack')\">\n    <!-- <mat-icon>cancel_schedule_send</mat-icon><span i18n>Edit</span> -->\n    <mat-icon>edit</mat-icon><span i18n>Edit</span>\n  </a>\n  <a mat-menu-item (click)=\"unpublish()\" *ngIf=\"allowedActions.includes('unpublish')\">\n    <mat-icon>archive</mat-icon>\n    <span i18n>Unpublish</span>\n  </a>\n  <a mat-menu-item *ngIf=\"allowedActions.includes('takeAction')\" [routerLink]=\"'/author/editor/' + content.identifier\">\n    <mat-icon>call_to_action</mat-icon>\n    <span *ngIf=\"content.status === 'InReview'\" i18n>Review</span>\n    <span *ngIf=\"content.status === 'Reviewed'\" i18n>Publish</span>\n    <span *ngIf=\"content.status === 'QualityReview'\" i18n>Quality Review</span>\n  </a>\n  <a mat-menu-item (click)=\"actionHistory()\" *ngIf=\"allowedActions.includes('history')\">\n    <mat-icon>chat</mat-icon>\n    <span i18n>Action History</span>\n  </a>\n  <a *ngIf=\"allowedActions.includes('newLanguage')\" mat-menu-item [matMenuTriggerFor]=\"langMenu\">\n    <mat-icon>translate</mat-icon>\n    <span i18n>Languages</span>\n  </a>\n</mat-menu>\n<mat-menu #langMenu=\"matMenu\">\n  <ng-container *ngIf=\"translationArray && translationArray.length\">\n    <a mat-menu-item *ngFor=\"let item of translationArray\"\n      [routerLink]=\"'/author/toc/' + item.identifier + '/overview'\">\n      <span class=\"flex items-center\">\n        <img class=\"img\" (error)=\"changeToGlobalSymbol($event)\" [src]=\"'/assets/common/flags/' +item.locale+'.png'\">\n        <span>{{item.locale | uppercase}}</span>\n      </span>\n    </a>\n  </ng-container>\n  <a mat-menu-item [matMenuTriggerFor]=\"ordinalsLangMenu\">\n    <mat-icon>add</mat-icon>\n    <span i18n>Add language</span>\n  </a>\n</mat-menu>\n<mat-menu #ordinalsLangMenu=\"matMenu\">\n  <a mat-menu-item *ngFor=\"let lang of languages\">\n    <span [matTooltip]=\"lang.label\" class=\"flex items-center\">\n      <img class=\"img\" (error)=\"changeToGlobalSymbol($event)\" [src]=\"'/assets/common/flags/' +lang.srclang+'.png'\">\n      <span>{{lang.srclang | uppercase}}</span>\n    </span>\n  </a>\n</mat-menu>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/my-content/components/content-card/content-card.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/my-content/components/content-card/content-card.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-container\" *ngIf=\"!changeView\">\n  <mat-card>\n    <a [ngClass]=\"{\n        pointer: data.contentType !== 'Knowledge Board',\n        cursor: data.contentType === 'Knowledge Board'\n      }\" [routerLink]=\"\n        data.contentType !== 'Knowledge Board' ? ['/author/viewer/' + data.identifier] : []\n      \" [queryParamsHandling]=\"data.contentType === 'Knowledge Board' ? 'preserve' : ''\">\n      <img mat-card-image class=\"card-img mat-lite-background\" role=\"link\" [src]=\"data.appIcon | relativeUrl\"\n        (error)=\"changeToDefaultImg($event)\" [alt]=\"data.name\" class=\"card-img\" />\n    </a>\n    <mat-card-content [ngClass]=\"{\n        pointer: data.contentType !== 'Knowledge Board',\n        cursor: data.contentType === 'Knowledge Board'\n      }\">\n      <a [ngClass]=\"{\n          pointer: data.contentType !== 'Knowledge Board',\n          cursor: data.contentType === 'Knowledge Board'\n        }\" [routerLink]=\"(data | pipeContentRoute: true).url\" [title]=\"data.name\" aria-label=\"Content\"\n        i18n-aria-label=\"Content | Click to view\">\n        <h3 class=\"ws-mat-primary-text mat-title text-truncate font-weight-bold\">\n          {{ data.name || 'Untitled Content' }}\n        </h3>\n      </a>\n    </mat-card-content>\n    <mat-card-actions>\n      <span class=\"ws-mat-primary-text uppercase font-weight-500\">{{ data.contentType }}</span>\n      <p class=\"mat-h5 margin-remove font-weight-bold\">\n        {{ data.locale | uppercase }}\n      </p>\n      <button *ngIf=\"!forExpiry && !forDelete\" mat-icon-button [matMenuTriggerFor]=\"moreMenu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <button *ngIf=\"forExpiry\" (click)=\"takeAction('expiryExtend')\" i18n-matTooltip matTooltip=\"Take Action\"\n        mat-icon-button>\n        <mat-icon>date_range</mat-icon>\n      </button>\n      <button *ngIf=\"forDelete\" (click)=\"takeAction('restoreDeleted')\" i18n-matTooltip matTooltip=\"Take Action\"\n        mat-icon-button>\n        <mat-icon>restore_from_trash</mat-icon>\n      </button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n\n<div class=\"d-flex\" *ngIf=\"changeView\">\n  <div class=\"item1\">\n    <a [ngClass]=\"{\n      pointer: data.contentType !== 'Knowledge Board',\n      cursor: data.contentType === 'Knowledge Board'\n    }\" [routerLink]=\"\n      data.contentType !== 'Knowledge Board' ? ['/author/viewer/' + data.identifier] : []\n    \" [queryParamsHandling]=\"data.contentType === 'Knowledge Board' ? 'preserve' : ''\">\n      <img class=\"\" role=\"link\" [src]=\"data.appIcon | relativeUrl\" (error)=\"changeToDefaultImg($event)\"\n        [alt]=\"data.name\" />\n    </a>\n  </div>\n  <div class=\"item2\">\n    <a [ngClass]=\"{\n        pointer: data.contentType !== 'Knowledge Board',\n        cursor: data.contentType === 'Knowledge Board'\n      }\" [routerLink]=\"(data | pipeContentRoute: true).url\" [title]=\"data.name\" aria-label=\"Content\"\n      i18n-aria-label=\"Content | Click to view\">\n      <span class=\"font-weight-500\">{{ data.name || 'Untitled Content' }} </span>\n    </a>\n    <!-- <span class=\"ws-mat-primary-text uppercase font-weight-500\">{{\n        data.description\n      }}</span> -->\n    <p class=\"fs-13 margin-remove flex items-center\">\n     <span class=\"mr-1 max-width-name\"> by {{ data.creatorContacts[0].name}} </span> <span class=\"mr-1\" *ngIf=\"data?.publishedOn\"> on\n        {{ data?.publishedOn | date }},</span> \n        <span class=\"mr-1\" *ngIf=\"!data?.publishedOn && data?.lastUpdatedOn\"> on\n          {{ data?.lastUpdatedOn | date }},</span>\n\n      <span class=\"mr-1\"> {{data.viewCount}} Views, </span> <span  class=\"mr-1\"> {{data.uniqueUsersCount}} Learners </span>\n      <span class=\"flex items-center ml-3 mr-2\">\n        <mat-icon class=\"mr-1\" *ngIf=\"data.totalRating == 5\" color=\"accent\">star</mat-icon>\n        <mat-icon class=\"mr-1\" *ngIf=\"data.totalRating && data.totalRating != 5\" color=\"accent\">\n          star_half</mat-icon>\n        <mat-icon class=\"mr-1\" *ngIf=\"!data.totalRating\">star_border</mat-icon>\n       {{ data.totalRating | number: '1.1-1' }}\n      </span>\n      <span *ngIf=\"data.duration\" class=\"flex items-center ml-3 mr-2\"><mat-icon>access_time</mat-icon> {{ data.duration | pipeDurationTransform: 'hms'}}</span>\n    </p>\n  </div>\n\n\n  <!-- <div mat-line> {{folder.updated | date}} </div> -->\n  <div class=\"item3 action-buttons\">\n\n    <button *ngIf=\"!forExpiry && !forDelete\" mat-icon-button [matMenuTriggerFor]=\"moreMenu\">\n      <mat-icon>more_vert</mat-icon>\n    </button>\n    <button *ngIf=\"forExpiry\" (click)=\"takeAction('expiryExtend')\" i18n-matTooltip matTooltip=\"Take Action\"\n      mat-icon-button>\n      <mat-icon>date_range</mat-icon>\n    </button>\n    <button *ngIf=\"forDelete\" (click)=\"takeAction('restoreDeleted')\" i18n-matTooltip matTooltip=\"Take Action\"\n      mat-icon-button>\n      <mat-icon>restore_from_trash</mat-icon>\n    </button>\n  </div>\n</div>\n\n<mat-menu #moreMenu=\"matMenu\">\n  <a *ngIf=\"showMenuItem('edit')\" mat-menu-item (click)=\"takeAction('edit')\">\n    <mat-icon>edit</mat-icon>\n    <span i18n>Edit </span>\n  </a>\n  <a *ngIf=\"showMenuItem('delete')\" mat-menu-item (click)=\"takeAction('delete')\">\n    <mat-icon>delete</mat-icon>\n    <span i18n>Delete </span>\n  </a>\n  <a *ngIf=\"showMenuItem('publish')\" mat-menu-item (click)=\"takeAction('publish')\">\n    <mat-icon>publish</mat-icon>\n    <span i18n>Publish</span>\n  </a>\n  <a *ngIf=\"showMenuItem('unpublish')\" mat-menu-item (click)=\"takeAction('unpublish')\">\n    <mat-icon>reply</mat-icon>\n    <span i18n>Unpublish content</span>\n  </a>\n  <a *ngIf=\"showMenuItem('review')\" mat-menu-item (click)=\"takeAction('review')\">\n    <mat-icon>rate_review</mat-icon>\n    <span i18n>Review</span>\n  </a>\n  <a *ngIf=\"showMenuItem('moveToDraft')\" mat-menu-item (click)=\"takeAction('moveToDraft')\">\n    <mat-icon>reply</mat-icon>\n    <span i18n>Recall content to draft</span>\n  </a>\n  <a *ngIf=\"showMenuItem('moveToInReview')\" mat-menu-item (click)=\"takeAction('moveToInReview')\">\n    <mat-icon>reply</mat-icon>\n    <span i18n>Send content to previous state</span>\n  </a>\n  <ng-container>\n    <a *ngIf=\"showMenuItem('lang')\" mat-menu-item [matMenuTriggerFor]=\"langMenu\">\n      <mat-icon>translate</mat-icon>\n      <span i18n>Languages</span>\n    </a>\n  </ng-container>\n</mat-menu>\n<mat-menu #langMenu=\"matMenu\">\n  <ng-container *ngIf=\"translationArray && translationArray.length\">\n    <a mat-menu-item *ngFor=\"let item of translationArray\" [routerLink]=\"'/author/editor/' + item.identifier\">\n      <span>{{ getName(item.locale) }}</span>\n    </a>\n  </ng-container>\n  <a mat-menu-item [matMenuTriggerFor]=\"ordinalsLangMenu\">\n    <mat-icon>add</mat-icon>\n    <span i18n>Add language</span>\n  </a>\n</mat-menu>\n<mat-menu #ordinalsLangMenu=\"matMenu\">\n  <a mat-menu-item *ngFor=\"let lang of filteredSubTitles\">\n    <span (click)=\"create(lang.srclang)\">{{ lang.label }}</span>\n  </a>\n</mat-menu>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/my-content/components/my-content/my-content.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/my-content/components/my-content/my-content.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div *ngIf=\"allowAuthor\"\nclass=\"matExpansion flex flex-middle margin-top-m margin-left-l margin-right-l padding-remove-left create-button\">\n<button mat-button class=\"font-weight-bold margin-remove-bottom mat-h3 ws-mat-primary-text ws-mat-primary-border\"\n  [routerLink]=\"'/author/create'\" id=\"ws-auth-root-home-btn-create\" name=\"ws-auth-root-home-btn-create\">\n  <ng-container i18n>Create Content</ng-container>\n  <mat-icon class=\"ws-mat-primary-text margin-left-m margin-bottom-xxs\">create</mat-icon>\n</button>\n</div> -->\n<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" class=\"width-240\" opened>\n    <ng-container *ngIf=\"isNewDesign\">\n      <mat-accordion expanded *ngIf=\"allowAuthor\">\n        <mat-expansion-panel [expanded]=\"true\" class=\"no-shadow\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              <span class=\"font-weight-500\" i18n>My Content</span>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <mat-list role=\"list\">\n            <mat-list-item mat-button role=\"listitem\" class=\"draftss\">\n              <a routerLink=\"/author/my-content\" [queryParams]=\"{ status: 'draft' }\"\n                [routerLinkActive]=\"status=='draft'\" [class.active]=\"status=='draft'\" class=\"draft\" i18n>Draft</a>\n            </mat-list-item>\n            <mat-list-item mat-button role=\"listitem\">\n              <a routerLink=\"/author/my-content\" [queryParams]=\"{ status: 'inreview' }\" i18n>Sent for review</a>\n            </mat-list-item>\n            <mat-list-item mat-button role=\"listitem\">\n              <a routerLink=\"/author/my-content\" [queryParams]=\"{ status: 'published' }\" i18n>Published</a>\n            </mat-list-item>\n            <mat-list-item mat-button role=\"listitem\">\n              <a routerLink=\"/author/my-content\" [queryParams]=\"{ status: 'unpublished' }\" i18n>Unpublished</a>\n            </mat-list-item>\n            <mat-list-item *ngIf=\"allowExpiry\" mat-button role=\"listitem\">\n              <a routerLink=\"/author/my-content\" [queryParams]=\"{ status: 'expiry' }\" i18n>Expiring</a>\n            </mat-list-item>\n            <mat-list-item *ngIf=\"allowRestore\" mat-button role=\"listitem\">\n              <a routerLink=\"/author/my-content\" [queryParams]=\"{ status: 'deleted' }\" i18n>Deleted</a>\n            </mat-list-item>\n          </mat-list>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </ng-container>\n\n\n    <ng-container *ngIf=\"isNewDesign\">\n      <mat-accordion expanded *ngIf=\"allowAuthor\">\n        <mat-expansion-panel [expanded]=\"true\" class=\"no-shadow\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              <span class=\"font-weight-500\" i18n>My Content</span>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <mat-list role=\"list\">\n            <mat-list-item mat-button role=\"listitem\" class=\"draftss\">\n              <a routerLink=\"/author/my-content\" [queryParams]=\"{ status: 'draft' }\"\n                [routerLinkActive]=\"status=='draft'\" [class.active]=\"status=='draft'\" class=\"draft\" i18n>Draft</a>\n            </mat-list-item>\n            <mat-list-item mat-button role=\"listitem\">\n              <a routerLink=\"/author/my-content\" [queryParams]=\"{ status: 'inreview' }\" i18n>Sent for review</a>\n            </mat-list-item>\n            <mat-list-item mat-button role=\"listitem\">\n              <a routerLink=\"/author/my-content\" [queryParams]=\"{ status: 'published' }\" i18n>Published</a>\n            </mat-list-item>\n            <mat-list-item mat-button role=\"listitem\">\n              <a routerLink=\"/author/my-content\" [queryParams]=\"{ status: 'unpublished' }\" i18n>Unpublished</a>\n            </mat-list-item>\n            <mat-list-item *ngIf=\"allowExpiry\" mat-button role=\"listitem\">\n              <a routerLink=\"/author/my-content\" [queryParams]=\"{ status: 'expiry' }\" i18n>Expiring</a>\n            </mat-list-item>\n            <mat-list-item *ngIf=\"allowRestore\" mat-button role=\"listitem\">\n              <a routerLink=\"/author/my-content\" [queryParams]=\"{ status: 'deleted' }\" i18n>Deleted</a>\n            </mat-list-item>\n          </mat-list>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </ng-container>\n    <ng-container *ngIf=\"!isNewDesign\">\n      <mat-accordion expanded *ngIf=\"allowAuthor\">\n        <mat-expansion-panel [expanded]=\"true\" class=\"no-shadow\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              <span class=\"font-weight-500\" i18n>My Content</span>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <!-- Shown when logged in as admin-->\n          <mat-list role=\"list\">\n            <!-- <mat-list-item mat-button role=\"listitem\" [routerLinkActive]=\"['active']\">\n              <a routerLink=\"/author/my-content\" [queryParams]=\"{ status: 'all' }\" i18n>All</a>\n            </mat-list-item> -->\n            <mat-list-item mat-button role=\"listitem\" [routerLinkActive]=\"['active']\">\n              <a routerLink=\"/author/my-content\" [queryParams]=\"{ status: 'draft' }\" i18n>Draft</a>\n            </mat-list-item>\n            <mat-list-item mat-button role=\"listitem\" [routerLinkActive]=\"['active']\">\n              <a routerLink=\"/author/my-content\" [queryParams]=\"{ status: 'inreview' }\" i18n>Sent for review</a>\n            </mat-list-item>\n            <mat-list-item mat-button role=\"listitem\" [routerLinkActive]=\"['active']\">\n              <a routerLink=\"/author/my-content\" [queryParams]=\"{ status: 'published' }\" i18n>Published</a>\n            </mat-list-item>\n            <mat-list-item mat-button role=\"listitem\" [routerLinkActive]=\"['active']\">\n              <a routerLink=\"/author/my-content\" [queryParams]=\"{ status: 'unpublished' }\" i18n>Unpublished</a>\n            </mat-list-item>\n            <mat-list-item *ngIf=\"allowExpiry\" mat-button role=\"listitem\" [routerLinkActive]=\"['active']\">\n              <a routerLink=\"/author/my-content\" [queryParams]=\"{ status: 'expiry' }\" i18n>Expiring</a>\n            </mat-list-item>\n            <mat-list-item *ngIf=\"allowRestore\" mat-button role=\"listitem\" [routerLinkActive]=\"['active']\">\n              <a routerLink=\"/author/my-content\" [queryParams]=\"{ status: 'deleted' }\" i18n>Deleted</a>\n            </mat-list-item>\n          </mat-list>\n        </mat-expansion-panel>\n      </mat-accordion>\n      <!-- allowAuthor -->\n      <mat-accordion *ngIf=\"allowReview || allowPublish\">\n        <mat-expansion-panel [expanded]=\"false\" class=\"no-shadow\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              <span class=\"font-weight-500\" i18n>Action Items</span>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <mat-list role=\"list\">\n            <mat-list-item role=\"listitem\" *ngIf=\"allowRedo\" [routerLinkActive]=\"['active']\">\n              <a routerLink=\"/author/my-content\" [queryParams]=\"{ status: 'rejected' }\" i18n>Redo</a>\n            </mat-list-item>\n            <mat-list-item role=\"listitem\" *ngIf=\"allowReview\" [routerLinkActive]=\"['active']\">\n              <a routerLink=\"/author/my-content\" [queryParams]=\"{ status: 'review' }\" i18n>Review</a>\n            </mat-list-item>\n            <mat-list-item role=\"listitem\" *ngIf=\"allowPublish\" [routerLinkActive]=\"['active']\">\n              <a routerLink=\"/author/my-content\" [queryParams]=\"{ status: 'publish' }\" i18n>Publish</a>\n            </mat-list-item>\n          </mat-list>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </ng-container>\n  </mat-drawer>\n  <mat-drawer-content>\n    <mat-sidenav-container class=\"nav-container\">\n      <mat-sidenav class=\"padding-s width-300\" position=\"end\" [fixedInViewport]=\"true\" [(opened)]=\"sideNavBarOpened\">\n        <h4 class=\"ws-mat-primary-text font-weight-bold margin-remove\">\n          <div class=\"flex flex-between flex-baseline\">\n            <span class=\"mat-h2 font-weight-500 margin-left-s\" i18n>Filters</span>\n            <button mat-icon-button color=\"primary\" class=\"text-middle close-button margin-bottom-s\"\n              (click)=\"sideNavBarOpened = false\">\n              <mat-icon class=\"\">clear</mat-icon>\n            </button>\n          </div>\n        </h4>\n        <mat-tree *ngIf=\"cardContent && cardContent.length\" class=\"margin-s\" [dataSource]=\"dataSource\"\n          [treeControl]=\"filterMenuTreeControl\">\n          <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n            <ng-container>\n              <mat-checkbox color=\"primary\" [value]=\"node.displayName\" (change)=\"filterApplyEvent(node)\"\n                [(ngModel)]=\"node.checked\" class=\"checklist-leaf-node\">{{ node.displayName + ' (' + node.count + ')' }}\n              </mat-checkbox>\n            </ng-container>\n          </mat-tree-node>\n          <mat-tree-node [ngClass]=\"{\n          hidden:\n            (status === 'draft' && node.displayName === 'Published Date') ||\n            (status === 'inreview' && node.displayName === 'Published Date')\n        }\" class=\"border-bottom\" *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n            <div class=\"grid\">\n              <h5 class=\"font-size-m margin-top-xs margin-remove-bottom\" matTreeNodeToggle>\n                {{ node.displayName }}\n              </h5>\n              <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.displayName\">\n                <mat-icon class=\"mat-icon-rtl-mirror\">\n                  {{ filterMenuTreeControl.isExpanded(node) ? 'expand_more' : 'chevron_right' }}\n                </mat-icon>\n              </button>\n            </div>\n          </mat-tree-node>\n        </mat-tree>\n      </mat-sidenav>\n\n\n      <mat-sidenav-content class=\"sidenav-content\">\n        <div class=\"outer-flex\">\n          <div class=\"content-box\">\n            <nav class=\"flex flex-middle flex-wrap p-4 ws-mat-primary-text\">\n              <div class=\"mat-subheading-2 margin-remove-bottom\">\n                <a i18n>\n                  My Contents\n                </a>\n              </div>\n              <mat-icon class=\"px-1\">chevron_right</mat-icon>\n              <!-- <div class=\"mat-subheading-2 margin-remove-bottom\">\n                <a routerLink=\"/author/my-content\" [queryParams]=\"{ status: 'all' }\" i18n>\n                  All\n                </a>\n              </div>\n              <mat-icon class=\"px-1\" *ngIf=\"status !== 'all'\">chevron_right</mat-icon> -->\n              <div class=\"mat-subheading-2 margin-remove-bottom\">\n                <a routerLink=\"/author/my-content\" *ngIf=\"status === 'draft'\" [queryParams]=\"{ status: 'draft' }\"\n                  i18n>Draft</a>\n                <a routerLink=\"/author/my-content\" *ngIf=\"status === 'inreview'\" [queryParams]=\"{ status: 'inreview' }\"\n                  i18n>Sent for review</a>\n                <a routerLink=\"/author/my-content\" *ngIf=\"status === 'review'\" [queryParams]=\"{ status: 'review' }\"\n                  i18n>Review</a>\n                <a routerLink=\"/author/my-content\" *ngIf=\"status === 'publish'\" [queryParams]=\"{ status: 'publish' }\"\n                  i18n>Publish</a>\n                <a routerLink=\"/author/my-content\" *ngIf=\"status === 'published'\"\n                  [queryParams]=\"{ status: 'published' }\" i18n>Published</a>\n                <a routerLink=\"/author/my-content\" *ngIf=\"status === 'unpublished'\"\n                  [queryParams]=\"{ status: 'unpublished' }\" i18n>Unpublished</a>\n                <a routerLink=\"/author/my-content\" *ngIf=\"status === 'expiry'\" [queryParams]=\"{ status: 'expiry' }\"\n                  i18n>Expiring</a>\n                <a routerLink=\"/author/my-content\" *ngIf=\"status === 'deleted'\" [queryParams]=\"{ status: 'deleted' }\"\n                  i18n>Deleted</a>\n              </div>\n            </nav>\n            <div class=\"flex flex-wrapped flex-between margin-horizontal-s margin-top-xs\">\n              <div>\n                <h4 *ngIf=\"filterMenuItems.length\" class=\"ws-mat-primary-text font-size-m font-weight-bold\">\n                  <span i18n> Apply Filters</span>\n                  <button mat-icon-button color=\"primary\" class=\"text-middle\" (click)=\"sideNavBarOpened = true\">\n                    <mat-icon>filter_list</mat-icon>\n                  </button>\n                </h4>\n                <mat-chip-list *ngIf=\"filters && filters.length\" #chipList aria-label=\"Filter\">\n                  <mat-chip [selectable]=\"true\" [removable]=\"false\">\n                    <span class=\"ws-mat-primary-text\" i18n>Clear All</span>\n                    <mat-icon [color]=\"'primary'\" (click)=\"clearAllFilters()\" matChipRemove>cancel</mat-icon>\n                  </mat-chip>\n                  <mat-chip *ngFor=\"let item of filters; let i = index\" [selectable]=\"true\" [removable]=\"true\"\n                    (removed)=\"filterApplyEvent(item)\">\n                    <span class=\"ws-mat-primary-text\">{{ item.displayName }}</span>\n                    <mat-icon [color]=\"'primary'\" matChipRemove>cancel</mat-icon>\n                  </mat-chip>\n                </mat-chip-list>\n              </div>\n              <div class=\"flex items-center search border border-solid search-border\">\n                <div class=\"border-right flex items-center\" *ngIf=\"allLanguages?.length\">\n                  <button mat-button [matMenuTriggerFor]=\"sortLang\">\n                    <span *ngIf=\"searchLanguage\">{{ searchLanguage | uppercase }}</span>\n                    <span *ngIf=\"!searchLanguage\" i18n>ALL</span>\n                    <mat-icon>arrow_drop_down</mat-icon>\n                  </button>\n                </div>\n                <div class=\"width-3-4 pl-2\">\n                  <mat-form-field class=\"w-full\" appearance=\"none\" [floatLabel]=\"'never'\">\n                    <input type=\"text\" (keyup.enter)=\"search()\" matInput #searchInput name=\"searchBox\"\n                      placeholder=\"Search for content\" />\n                  </mat-form-field>\n                </div>\n                <div (click)=\"search()\" class=\"flex items-center justify-center w-16 pointer\">\n                  <mat-icon>search</mat-icon>\n                </div>\n              </div>\n              <div class=\"flex items-center\">\n                <div (click)=\"listview=false\"><span class=\"mr-2\">\n                    <mat-icon class=\"pointer\">border_all</mat-icon>\n                  </span>\n                </div>\n                <div (click)=\"listview=true\"><span><mat-icon class=\"pointer\">list</mat-icon></span></div>\n              </div>\n\n            </div>\n            <div *ngIf=\"cardContent\" class=\"flex flex-wrapped flex-dynamic margin-xs\">\n              <ng-template #oldDesign>\n                <div [ngClass]=\"listview == true ? 'full-width-field': 'margin-l'\" *ngFor=\"let content of cardContent\">\n                  <ws-auth-root-content-card [data]=\"content\" [forExpiry]=\"status === 'expiry'\" [changeView]=\"listview\"\n                    [forDelete]=\"status === 'deleted'\" [ordinals]=\"ordinals\" (action)=\"action($event)\">\n                  </ws-auth-root-content-card>\n                </div>\n              </ng-template>\n              <ng-container *ngIf=\"newDesign; else oldDesign\">\n                <ws-auth-content-card-v2 (action)=\"action({ type: $event.action, data: $event.content })\"\n                  [perspective]=\"currentAction\" *ngFor=\"let content of cardContent\" [content]=\"content\">\n                </ws-auth-content-card-v2>\n              </ng-container>\n            </div>\n            <div class=\"text-right margin-right-xxl margin-bottom-m\" *ngIf=\"showLoadMore\">\n              <button mat-raised-button [color]=\"'primary'\" (click)=\"loadMore()\" i18n>Load More...</button>\n            </div>\n            <div class=\"flat-no-data-alert margin-m\" *ngIf=\"!fetchError && cardContent && !cardContent.length\">\n              <mat-icon class=\"large-icon\">info</mat-icon>\n              <span class=\"font-weight-bold margin-left-s mat-h3 margin-remove-bottom\" i18n>No data found</span>\n            </div>\n            <div class=\"flat-error-alert margin-m\" *ngIf=\"fetchError\">\n              <mat-icon class=\"large-icon\">info</mat-icon>\n              <span class=\"font-weight-bold margin-left-s mat-h3 margin-remove-bottom\" i18n>Unable to fetch data</span>\n            </div>\n          </div>\n          <div class=\"sidebar mt-10\">\n            <div class=\"info-section mb-6\">\n              <h3 class=\"mb-3\">In case it helps</h3>\n              <div>Test test Test testTest testTest testTest testTest testTest testTest testTest testTest testTest\n                testTest testTest testTest testTest testTest testTest testTest test </div>\n              <a mat-button href=\"https://www.google.com/\" target=\"_blank\">Try it now</a>\n            </div>\n            <div class=\"info-section mb-6\">\n              <h3 class=\"mb-3\">In case it helps</h3>\n              <div>Test test Test testTest testTest testTest testTest testTest testTest testTest testTest testTest\n                testTest testTest testTest testTest testTest testTest testTest test </div>\n              <a mat-button href=\"https://www.google.com/\" target=\"_blank\">Try it now</a>\n            </div>\n            <div class=\"info-section mb-6\">\n              <h3 class=\"mb-3\">In case it helps</h3>\n              <div>Test test Test testTest testTest testTest testTest testTest testTest testTest testTest testTest\n                testTest testTest testTest testTest testTest testTest testTest test </div>\n              <a mat-button href=\"https://www.google.com/\" target=\"_blank\">Try it now</a>\n            </div>\n\n          </div>\n        </div>\n      </mat-sidenav-content>\n\n\n    </mat-sidenav-container>\n    <mat-menu #sortLang=\"matMenu\">\n      <ng-template matMenuContent>\n        <button mat-menu-item class=\"flex flex-between\" (click)=\"setCurrentLanguage('')\">\n          <span i18n class=\"flex items-center w-full\">ALL\n            <mat-icon class=\"ml-2\" *ngIf=\"searchLanguage === ''\">check</mat-icon>\n          </span>\n        </button>\n        <button mat-menu-item class=\"flex flex-between\" *ngFor=\"let lang of allLanguages\"\n          (click)=\"setCurrentLanguage(lang.srclang)\">\n          <span class=\"flex items-center w-full\">\n            <span>{{ lang.label | uppercase }}</span>\n            <mat-icon class=\"ml-2\" *ngIf=\"lang.srclang === searchLanguage\">check</mat-icon>\n          </span>\n        </button>\n      </ng-template>\n    </mat-menu>\n  </mat-drawer-content>\n</mat-drawer-container>");

/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/my-content/components/content-card-v2/content-card-v2.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/my-content/components/content-card-v2/content-card-v2.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".name {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.overflow-prevent {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.width-40 {\n  min-width: 20%;\n  max-width: 34%;\n}\n\n.width-30 {\n  min-width: 20%;\n  max-width: 33%;\n}\n\n.content {\n  margin: 0px 5px;\n}\n\n.content::before {\n  content: \"| \";\n}\n\n.content-card {\n  padding: 0px;\n  width: 265px;\n}\n\n.mat-card-image {\n  width: 265px;\n  margin: 0px;\n  padding: 0px;\n  height: 150px;\n}\n\n.icon {\n  top: 3px;\n  position: relative;\n}\n\n.white {\n  color: white;\n}\n\nmat-card-content {\n  margin-top: -7px !important;\n  padding: 0.75rem;\n  padding-top: 0.25rem;\n}\n\n.custom-icon {\n  font-size: 18px;\n  position: relative;\n  top: 3px;\n  padding-right: 8px;\n}\n\n.mr-0-imp {\n  margin-right: 0px !important;\n}\n\n.img {\n  height: 14px;\n  width: 20px;\n  padding-right: 5px;\n}\n\n.checkmark {\n  display: inline-block;\n  width: 22px;\n  height: 22px;\n  /* IE 9 */\n  /* Chrome, Safari, Opera */\n  transform: rotate(45deg);\n}\n\n.circle {\n  -moz-border-radius: 50px/50px;\n  -webkit-border-radius: 50px 50px;\n  position: relative;\n  top: 8px;\n  border-radius: 50px/50px;\n  border: solid 4px green;\n  width: 10px;\n  height: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9teS1jb250ZW50L2NvbXBvbmVudHMvY29udGVudC1jYXJkLXYyL2NvbnRlbnQtY2FyZC12Mi5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXV0aG9yL3NyYy9saWIvcm91dGluZy9tb2R1bGVzL215LWNvbnRlbnQvY29tcG9uZW50cy9jb250ZW50LWNhcmQtdjIvY29udGVudC1jYXJkLXYyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREFFO0VBQ0UsYUFBQTtBQ0VKOztBREVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFFBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQzhCLFNBQUE7RUFDSSwwQkFBQTtFQUNsQyx3QkFBQTtBQ0dGOztBREFBO0VBQ0UsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0dGIiwiZmlsZSI6InByb2plY3Qvd3MvYXV0aG9yL3NyYy9saWIvcm91dGluZy9tb2R1bGVzL215LWNvbnRlbnQvY29tcG9uZW50cy9jb250ZW50LWNhcmQtdjIvY29udGVudC1jYXJkLXYyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hbWUge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLm92ZXJmbG93LXByZXZlbnQge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLndpZHRoLTQwIHtcbiAgbWluLXdpZHRoOiAyMCU7XG4gIG1heC13aWR0aDogMzQlO1xufVxuXG4ud2lkdGgtMzAge1xuICBtaW4td2lkdGg6IDIwJTtcbiAgbWF4LXdpZHRoOiAzMyU7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICd8ICc7XG4gIH1cbn1cblxuLmNvbnRlbnQtY2FyZCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDI2NXB4O1xufVxuXG4ubWF0LWNhcmQtaW1hZ2Uge1xuICB3aWR0aDogMjY1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbi5pY29uIHtcbiAgdG9wOiAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLndoaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5tYXQtY2FyZC1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogLTdweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbn1cblxuLmN1c3RvbS1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbi5tci0wLWltcCB7XG4gIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pbWcge1xuICBoZWlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5jaGVja21hcmsge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IC8qIElFIDkgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5jaXJjbGUge1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwcHgvNTBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHgvNTBweDtcbiAgYm9yZGVyOiBzb2xpZCA0cHggZ3JlZW47XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDhweDtcbn1cbiIsIi5uYW1lIHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5vdmVyZmxvdy1wcmV2ZW50IHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi53aWR0aC00MCB7XG4gIG1pbi13aWR0aDogMjAlO1xuICBtYXgtd2lkdGg6IDM0JTtcbn1cblxuLndpZHRoLTMwIHtcbiAgbWluLXdpZHRoOiAyMCU7XG4gIG1heC13aWR0aDogMzMlO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbjogMHB4IDVweDtcbn1cbi5jb250ZW50OjpiZWZvcmUge1xuICBjb250ZW50OiBcInwgXCI7XG59XG5cbi5jb250ZW50LWNhcmQge1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAyNjVweDtcbn1cblxuLm1hdC1jYXJkLWltYWdlIHtcbiAgd2lkdGg6IDI2NXB4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4uaWNvbiB7XG4gIHRvcDogM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxubWF0LWNhcmQtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IC03cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XG59XG5cbi5jdXN0b20taWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG4ubXItMC1pbXAge1xuICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaW1nIHtcbiAgaGVpZ2h0OiAxNHB4O1xuICB3aWR0aDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uY2hlY2ttYXJrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAvKiBJRSA5ICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uY2lyY2xlIHtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MHB4LzUwcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTBweCA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4LzUwcHg7XG4gIGJvcmRlcjogc29saWQgNHB4IGdyZWVuO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiA4cHg7XG59Il19 */");

/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/my-content/components/content-card-v2/content-card-v2.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/my-content/components/content-card-v2/content-card-v2.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ContentCardV2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentCardV2Component", function() { return ContentCardV2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modules_shared_components_status_track_status_track_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../modules/shared/components/status-track/status-track.component */ "./project/ws/author/src/lib/modules/shared/components/status-track/status-track.component.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_auth_expiry_date_confirm_auth_expiry_date_confirm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/auth-expiry-date-confirm/auth-expiry-date-confirm.component */ "./project/ws/author/src/lib/modules/shared/components/auth-expiry-date-confirm/auth-expiry-date-confirm.component.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_draft_dialog_draft_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/draft-dialog/draft-dialog.component */ "./project/ws/author/src/lib/modules/shared/components/draft-dialog/draft-dialog.component.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_unpublish_dialog_unpublish_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/unpublish-dialog/unpublish-dialog.component */ "./project/ws/author/src/lib/modules/shared/components/unpublish-dialog/unpublish-dialog.component.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_restore_dialog_restore_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/restore-dialog/restore-dialog.component */ "./project/ws/author/src/lib/modules/shared/components/restore-dialog/restore-dialog.component.ts");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ws/author/src/lib/services/init.service */ "./project/ws/author/src/lib/services/init.service.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/services/access-control.service */ "./project/ws/author/src/lib/modules/shared/services/access-control.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/delete-dialog/delete-dialog.component */ "./project/ws/author/src/lib/modules/shared/components/delete-dialog/delete-dialog.component.ts");












let ContentCardV2Component = class ContentCardV2Component {
    constructor(accessService, dialog, initService, valueSvc) {
        this.accessService = accessService;
        this.dialog = dialog;
        this.initService = initService;
        this.valueSvc = valueSvc;
        this.languages = [];
        this.translationArray = [];
        this.category = '';
        this.locale = '';
        this.categoryType = '';
        this.icon = '';
        this.showLanguageBar = false;
        this.mainAction = 'edit';
        this.allowedActions = [];
        this.disabledActions = [];
        this.isMobile = false;
        this.timeLinePerspective = 'lastUpdated';
        this.perspective = 'author';
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    }
    getLocale(locale) {
        const language = this.initService.ordinals.subTitles.find((v) => v.srclang === locale);
        return language ? language.label : 'English';
    }
    ngOnInit() {
        this.valueSvc.isXSmall$.subscribe(isMobile => (this.isMobile = isMobile));
        if (this.content.hasTranslations && this.content.hasTranslations.length) {
            this.translationArray = this.translationArray.concat(this.content.hasTranslations);
        }
        if (this.content.isTranslationOf && this.content.isTranslationOf.length) {
            this.translationArray = this.translationArray.concat(this.content.isTranslationOf);
        }
        this.languages = this.initService.ordinals.subTitles.filter((elem) => !this.translationArray.find((item) => elem.srclang === item.locale));
        this.translationArray = this.translationArray.map(v => {
            return {
                locale: this.getLocale(v.locale),
                identifier: v.identifier,
            };
        });
        this.icon = this.accessService.getIcon(this.content);
        this.categoryType = this.accessService.getCategoryType(this.content);
        this.category = this.accessService.getCategory(this.content);
        this.locale = this.getLocale(this.content.locale);
        if (this.perspective === 'author' || this.perspective === 'reviewer') {
            if (this.content.status === 'Draft') {
                this.mainAction = 'edit';
                this.allowedActions = this.allowedActions.concat(['newLanguage', 'delete', 'history']);
                this.timeLinePerspective = 'lastUpdated';
            }
            else if (this.content.status === 'Live') {
                this.timeLinePerspective = 'lastPublished';
                this.mainAction = 'edit';
                this.allowedActions = this.allowedActions.concat([
                    'newLanguage',
                    'delete',
                    'unpublish',
                    'history',
                ]);
            }
            else if (this.content.status === 'Unpublished') {
                this.timeLinePerspective = 'lastUnpublished';
                this.mainAction = 'moveToDraft';
                this.allowedActions = this.allowedActions.concat(['newLanguage', 'delete', 'history']);
            }
            else if (['InReview', 'Reviewed', 'QualityReview'].includes(this.content.status)) {
                this.timeLinePerspective = 'lastAction';
                if (this.accessService.hasRole(['editor', 'admin'])) {
                    this.mainAction = 'takeAction';
                    this.allowedActions = this.allowedActions.concat(['newLanguage', 'pullBack', 'history']);
                }
                else if (this.content.publisherDetails.find(v => v.id === this.accessService.userId) ||
                    this.content.trackContacts.find(v => v.id === this.accessService.userId)) {
                    this.mainAction = 'takeAction';
                }
                else if (this.content.creatorContacts.find(v => v.id === this.accessService.userId)) {
                    this.mainAction = 'pullBack';
                    this.allowedActions = this.allowedActions.concat(['newLanguage', 'history']);
                }
            }
            else if (this.content.status === 'Deleted') {
                this.mainAction = 'restore';
                this.timeLinePerspective = 'deleted';
                this.allowedActions = this.allowedActions.concat(['newLanguage', 'history']);
            }
        }
        else if (this.perspective === 'expiry') {
            this.mainAction = 'extend';
            this.timeLinePerspective = 'expires';
            this.allowedActions = this.allowedActions.concat(['newLanguage', 'delete', 'history']);
        }
        if (this.content.status === 'Processing') {
            this.allowedActions.push('history');
        }
        if (this.content.isMetaEditingDisabled || this.content.isAuthoringDisabled) {
            this.disabledActions = this.disabledActions.concat(['edit', 'delete']);
        }
        if (this.content.isContentEditingDisabled) {
            this.disabledActions = this.disabledActions.concat(['delete']);
        }
        if (!this.initService.authAdditionalConfig.allowActionHistory) {
            const index = this.allowedActions.indexOf('history');
            this.allowedActions.slice(index, 1);
        }
    }
    changeToDefaultImg($event) {
        $event.target.src = this.accessService.defaultLogo;
    }
    onClick(action) {
        this.action.emit({ action, content: this.content });
    }
    create(lang) {
        this.action.emit({
            action: 'create',
            content: Object.assign({}, this.content, { locale: lang }),
        });
    }
    delete() {
        const dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DeleteDialogComponent"], {
            width: this.isMobile ? '90vw' : '600px',
            height: 'auto',
            data: this.content,
        });
        dialog.afterClosed().subscribe(v => {
            if (v) {
                this.onClick('remove');
            }
        });
    }
    actionHistory() {
        this.dialog.open(_modules_shared_components_status_track_status_track_component__WEBPACK_IMPORTED_MODULE_1__["StatusTrackComponent"], {
            width: this.isMobile ? '90vw' : '600px',
            height: 'auto',
            data: this.content,
        });
    }
    restore() {
        const dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_restore_dialog_restore_dialog_component__WEBPACK_IMPORTED_MODULE_5__["RestoreDialogComponent"], {
            width: this.isMobile ? '90vw' : '600px',
            height: 'auto',
            data: this.content,
        });
        dialog.afterClosed().subscribe(v => {
            if (v) {
                this.onClick('edit');
            }
        });
    }
    unpublish() {
        const dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_unpublish_dialog_unpublish_dialog_component__WEBPACK_IMPORTED_MODULE_4__["UnpublishDialogComponent"], {
            width: this.isMobile ? '90vw' : '600px',
            height: 'auto',
            data: this.content,
        });
        dialog.afterClosed().subscribe(v => {
            if (v) {
                this.onClick('edit');
            }
        });
    }
    moveToDraft() {
        const dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_draft_dialog_draft_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DraftDialogComponent"], {
            width: this.isMobile ? '90vw' : '600px',
            height: 'auto',
            data: this.content,
        });
        dialog.afterClosed().subscribe(v => {
            if (v) {
                this.onClick('edit');
            }
        });
    }
    extendOrExpiry() {
        const dialog = this.dialog.open(_ws_author_src_lib_modules_shared_components_auth_expiry_date_confirm_auth_expiry_date_confirm_component__WEBPACK_IMPORTED_MODULE_2__["AuthExpiryDateConfirmComponent"], {
            width: this.isMobile ? '90vw' : '600px',
            height: 'auto',
            data: this.content,
        });
        dialog.afterClosed().subscribe(v => {
            if (v) {
                this.onClick('remove');
            }
        });
    }
    changeToGlobalSymbol($event) {
        $event.target.src = '/assets/common/flags/pref.png';
    }
};
ContentCardV2Component.ctorParameters = () => [
    { type: _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_8__["AccessControlService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
    { type: _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_7__["AuthInitService"] },
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_6__["ValueService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"])()
], ContentCardV2Component.prototype, "perspective", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"])()
], ContentCardV2Component.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"])()
], ContentCardV2Component.prototype, "action", void 0);
ContentCardV2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'ws-auth-content-card-v2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content-card-v2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/my-content/components/content-card-v2/content-card-v2.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content-card-v2.component.scss */ "./project/ws/author/src/lib/routing/modules/my-content/components/content-card-v2/content-card-v2.component.scss")).default]
    })
], ContentCardV2Component);



/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/my-content/components/content-card/content-card.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/my-content/components/content-card/content-card.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-container {\n  position: relative;\n  width: 265px;\n  height: 100%;\n}\n\nmat-card {\n  width: 100%;\n  height: auto;\n  box-sizing: border-box;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.cursor {\n  cursor: auto;\n}\n\n.card-img {\n  height: 150px;\n}\n\n.action-buttons {\n  float: right;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.item1 {\n  padding: 10px 10px 10px 30px;\n  width: 7%;\n}\n\n.item1 img {\n  width: 48px;\n  margin-top: 0.6rem;\n}\n\n.item2 {\n  padding: 10px;\n  width: 75%;\n  font-size: 16px;\n}\n\n.item3 {\n  padding: 10px;\n  width: 15%;\n}\n\n.max-width-name {\n  width: 122px;\n  max-width: 140px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.fs-13 {\n  font-size: 13px;\n}\n\nmat-card-actions {\n  position: absolute;\n  z-index: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nmat-card-content {\n  margin-top: 0px;\n}\n\nmat-card-actions {\n  position: absolute;\n  z-index: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.background-color {\n  background-color: #c7c7c7;\n  border-radius: 5px;\n  padding: 5px;\n}\n\n.position-absolute {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.opacity {\n  opacity: 0.6;\n  font-weight: bold;\n}\n\n.border-bottom {\n  border-bottom: 1px solid lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9teS1jb250ZW50L2NvbXBvbmVudHMvY29udGVudC1jYXJkL2NvbnRlbnQtY2FyZC5jb21wb25lbnQuc2NzcyIsInByb2plY3Qvd3MvYXV0aG9yL3NyYy9saWIvcm91dGluZy9tb2R1bGVzL215LWNvbnRlbnQvY29tcG9uZW50cy9jb250ZW50LWNhcmQvY29udGVudC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtBQ0ZGOztBREtBO0VBQ0UsWUFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtBQ0ZGOztBREtBO0VBQ0UsWUFBQTtBQ0ZGOztBRElBO0VBQ0UsYUFBQTtBQ0RGOztBREdBO0VBQ0UsNEJBQUE7RUFDQSxTQUFBO0FDQUY7O0FERUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURJQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0RGOztBREdBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUNBRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFHQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURNQTtFQUNFLGtCQUFBO0VBR0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0xGOztBRFFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ0xGOztBRFFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDTEY7O0FEUUE7RUFDRSxrQ0FBQTtBQ0xGIiwiZmlsZSI6InByb2plY3Qvd3MvYXV0aG9yL3NyYy9saWIvcm91dGluZy9tb2R1bGVzL215LWNvbnRlbnQvY29tcG9uZW50cy9jb250ZW50LWNhcmQvY29udGVudC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGltcG9ydCAnfnNyYy9zdHlsZXMvX3dzLXZhcnMnO1xuLy8gJGNhcmQtcGFkZGluZzogJHNpemUtbTtcbi8vICRhY3Rpb24tYnRuLXNpemU6IDIuNSAqICRzaXplLW07IC8vIDQwcHhcbi5jYXJkLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI2NXB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jdXJzb3Ige1xuICBjdXJzb3I6IGF1dG87XG59XG5cbi5jYXJkLWltZyB7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLml0ZW0xIHtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMzBweDtcbiAgd2lkdGg6IDclO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgbWFyZ2luLXRvcDogMC42cmVtO1xuICB9XG59XG5cbi5pdGVtMiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA3NSU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5pdGVtMyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxNSU7XG59XG4ubWF4LXdpZHRoLW5hbWUge1xuICB3aWR0aDogMTIycHg7XG4gIG1heC13aWR0aDogMTQwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZnMtMTMge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyBib3R0b206ICRjYXJkLXBhZGRpbmc7XG4gIC8vIHdpZHRoOiBjYWxjKDEwMCUgLSAjeyRjYXJkLXBhZGRpbmd9KTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5tYXQtY2FyZC1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICAvLyBtYXJnaW4tYm90dG9tOiAoJGNhcmQtcGFkZGluZyAvIDIpICsgJGFjdGlvbi1idG4tc2l6ZTtcbiAgLy8gbWFyZ2luLWxlZnQ6IC0wLjUgKiAkY2FyZC1wYWRkaW5nO1xuICAvLyBtYXJnaW4tcmlnaHQ6IC0wLjUgKiAkY2FyZC1wYWRkaW5nO1xufVxuXG5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyBib3R0b206ICRjYXJkLXBhZGRpbmc7XG4gIC8vIHdpZHRoOiBjYWxjKDEwMCUgLSAjeyRjYXJkLXBhZGRpbmd9KTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYmFja2dyb3VuZC1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjN2M3Yzc7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ucG9zaXRpb24tYWJzb2x1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLm9wYWNpdHkge1xuICBvcGFjaXR5OiAwLjY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG59XG4iLCIuY2FyZC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyNjVweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY3Vyc29yIHtcbiAgY3Vyc29yOiBhdXRvO1xufVxuXG4uY2FyZC1pbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4uYWN0aW9uLWJ1dHRvbnMge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaXRlbTEge1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAzMHB4O1xuICB3aWR0aDogNyU7XG59XG4uaXRlbTEgaW1nIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIG1hcmdpbi10b3A6IDAuNnJlbTtcbn1cblxuLml0ZW0yIHtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDc1JTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaXRlbTMge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTUlO1xufVxuXG4ubWF4LXdpZHRoLW5hbWUge1xuICB3aWR0aDogMTIycHg7XG4gIG1heC13aWR0aDogMTQwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZnMtMTMge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbm1hdC1jYXJkLWFjdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxubWF0LWNhcmQtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxubWF0LWNhcmQtYWN0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYmFja2dyb3VuZC1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjN2M3Yzc7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ucG9zaXRpb24tYWJzb2x1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLm9wYWNpdHkge1xuICBvcGFjaXR5OiAwLjY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG59Il19 */");

/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/my-content/components/content-card/content-card.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/my-content/components/content-card/content-card.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ContentCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentCardComponent", function() { return ContentCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/services/access-control.service */ "./project/ws/author/src/lib/modules/shared/services/access-control.service.ts");



let ContentCardComponent = class ContentCardComponent {
    constructor(accessService) {
        this.accessService = accessService;
        this.forExpiry = false;
        this.forDelete = false;
        this.changeView = false;
        this.filteredSubTitles = [];
        this.translationArray = [];
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isBaseContent = true;
    }
    ngOnInit() {
        if (this.data.hasTranslations && this.data.hasTranslations.length) {
            this.translationArray = this.translationArray.concat(this.data.hasTranslations);
        }
        if (this.data.isTranslationOf && this.data.isTranslationOf.length) {
            this.isBaseContent = false;
            this.translationArray = this.translationArray.concat(this.data.isTranslationOf);
        }
        this.filteredSubTitles = this.translationArray.length
            ? this.ordinals.subTitles.filter((elem) => !this.translationArray.find((item) => elem.srclang === item.locale))
            : this.ordinals.subTitles;
        this.userId = this.accessService.userId;
    }
    getName(lang) {
        const language = this.ordinals.subTitles.find((v) => v.srclang === lang);
        return language ? language.label : lang;
    }
    showMenuItem(menuType) {
        let returnValue = false;
        switch (menuType) {
            case 'edit':
            case 'delete':
                if (this.data.status === 'Draft' || this.data.status === 'Live') {
                    returnValue = this.accessService.hasAccess(this.data);
                }
                if (this.data.authoringDisabled && menuType === 'edit') {
                    returnValue = false;
                }
                break;
            case 'moveToDraft':
                if (this.data.status === 'InReview' ||
                    this.data.status === 'Unpublished' ||
                    this.data.status === 'Reviewed' ||
                    this.data.status === 'QualityReview') {
                    returnValue = this.accessService.hasAccess(Object.assign({}, this.data, { status: 'Draft' }));
                }
                break;
            case 'moveToInReview':
                if (this.data.status === 'Reviewed' || this.data.status === 'QualityReview') {
                    returnValue = this.accessService.hasAccess(Object.assign({}, this.data, { status: 'InReview' }));
                }
                break;
            case 'publish':
                if (this.data.status === 'Reviewed') {
                    returnValue = this.accessService.hasAccess(this.data);
                }
                break;
            case 'unpublish':
                if (this.data.status === 'Live') {
                    returnValue = this.accessService.hasAccess(this.data);
                }
                break;
            case 'review':
                if (this.data.status === 'InReview' || this.data.status === 'QualityReview') {
                    returnValue = this.accessService.hasAccess(this.data);
                }
                break;
            case 'lang':
                returnValue = this.accessService.hasAccess(Object.assign({}, this.data, { status: 'Draft' }));
                break;
        }
        return returnValue;
    }
    create(language) {
        this.action.emit({
            type: 'create',
            data: Object.assign({}, this.data, { locale: language }),
        });
    }
    viewComments() {
        this.action.emit({
            type: 'comments',
        });
    }
    takeAction(actionType) {
        this.action.emit({
            type: actionType,
            data: this.data,
        });
    }
    changeToDefaultImg($event) {
        $event.target.src = this.accessService.defaultLogo;
    }
};
ContentCardComponent.ctorParameters = () => [
    { type: _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_2__["AccessControlService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContentCardComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContentCardComponent.prototype, "ordinals", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContentCardComponent.prototype, "forExpiry", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContentCardComponent.prototype, "forDelete", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContentCardComponent.prototype, "changeView", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ContentCardComponent.prototype, "action", void 0);
ContentCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-auth-root-content-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/my-content/components/content-card/content-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content-card.component.scss */ "./project/ws/author/src/lib/routing/modules/my-content/components/content-card/content-card.component.scss")).default]
    })
], ContentCardComponent);



/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/my-content/components/my-content/my-content.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/my-content/components/my-content/my-content.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-container {\n  position: relative;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  min-height: calc(100vh - 164px);\n}\n\n.vertical-align {\n  vertical-align: text-bottom;\n}\n\n.width-300 {\n  width: 300px;\n}\n\n.width-240 {\n  width: 240px;\n}\n\n.font-size-m {\n  font-size: 16px;\n}\n\n.border-bottom {\n  border-bottom: 1px solid lightgray;\n}\n\n.mat-drawer-content {\n  overflow: hidden !important;\n}\n\n.flat-no-data-alert {\n  padding-left: 40px;\n  z-index: 10;\n  display: flex;\n  flex-direction: row;\n  min-height: 100px;\n  border-radius: 4px;\n  align-items: center;\n  box-shadow: 1px 1px 10px 0 #20f06c;\n  background-color: #99fdbe;\n}\n\n.flat-error-alert {\n  padding-left: 40px;\n  z-index: 10;\n  display: flex;\n  flex-direction: row;\n  min-height: 100px;\n  border-radius: 4px;\n  align-items: center;\n  box-shadow: 1px 1px 10px 0 #f02f2fb3;\n  background-color: #f38c8c94;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.margin-right-xxl {\n  margin-right: 50px;\n}\n\n.margin-horizontal-s {\n  margin-left: 3%;\n  margin-right: 2%;\n}\n\n.flex-dynamic {\n  justify-content: flex-start;\n}\n\n@media only screen and (min-width: 960px) {\n  .flex-dynamic {\n    justify-content: center;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .flex-dynamic {\n    justify-content: center;\n  }\n}\n\n@media only screen and (max-width: 599px) {\n  .flex-dynamic {\n    justify-content: center;\n  }\n}\n\n@media only screen and (min-width: 1280px) {\n  .flex-dynamic {\n    justify-content: flex-start;\n  }\n}\n\n.large-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n}\n\n.sidenav {\n  width: 20%;\n  min-width: 250px;\n  background: inherit;\n  box-shadow: none;\n}\n\n.sidenav-content {\n  margin: 0;\n  padding: 0 16px 24px;\n  box-sizing: border-box;\n  min-height: calc(100vh);\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 0.3fr;\n  grid-auto-columns: minmax(auto, 300px);\n  width: 90%;\n}\n\n.close-button {\n  margin-right: 50px;\n}\n\n.hidden {\n  display: none;\n}\n\n.border-right {\n  border-right: 1px solid #cecece;\n}\n\n:host ::ng-deep .search .mat-form-field-wrapper {\n  padding-bottom: 0px !important;\n}\n\n:host ::ng-deep .search .mat-form-field-infix {\n  border-top-width: 2px !important;\n}\n\n.search-border {\n  border-radius: 0.75rem;\n  border-color: #cecece;\n}\n\n.search {\n  width: 100%;\n  max-width: 500px;\n  box-sizing: border-box;\n  max-height: 40px;\n}\n\nws-auth-content-card-v2 {\n  display: contents;\n}\n\n.mat-list-item.active {\n  background: rgba(0, 0, 0, 0.04);\n}\n\n.outer-flex {\n  display: flex;\n  align-items: flex-start;\n}\n\n.content-box {\n  width: 80%;\n}\n\n.sidebar {\n  width: 19%;\n  position: absolute;\n  top: -37px;\n  bottom: 0;\n  right: 0;\n  padding-right: 10px;\n  background: #fff;\n  padding-left: 2em;\n  padding-top: 3em;\n  border-left: 2px solid #dddd;\n}\n\n.mb-3 {\n  margin-bottom: 0.45rem !important;\n}\n\n.full-width-field {\n  width: 100%;\n}\n\n.full-width-field:hover {\n  background-color: #f5f5f5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2F1dGhvci9zcmMvbGliL3JvdXRpbmcvbW9kdWxlcy9teS1jb250ZW50L2NvbXBvbmVudHMvbXktY29udGVudC9teS1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hdXRob3Ivc3JjL2xpYi9yb3V0aW5nL21vZHVsZXMvbXktY29udGVudC9jb21wb25lbnRzL215LWNvbnRlbnQvbXktY29udGVudC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLW1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7QUNGRjs7QURLQTtFQUNFLDJCQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0FDRkY7O0FES0E7RUFDRSxrQ0FBQTtBQ0ZGOztBREtBO0VBQ0UsMkJBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7QUNGRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7QUNIRjs7QURPQTtFQUNFLGVBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNKRjs7QURPQTtFQUNFLDJCQUFBO0FDSkY7O0FDSEU7RUZNRjtJQUdJLHVCQUFBO0VDRkY7QUFDRjs7QUNiRTtFRldGO0lBTUksdUJBQUE7RUNBRjtBQUNGOztBQy9ERTtFRndERjtJQVNJLHVCQUFBO0VDRUY7QUFDRjs7QUNiRTtFRkNGO0lBWUksMkJBQUE7RUNJRjtBQUNGOztBRERBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSUY7O0FEREE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLGdCQUFBO0FDR0Y7O0FEQ0E7RUFDRSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDRUY7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLFVBQUE7QUNFRjs7QURDQTtFQUNFLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxhQUFBO0FDRUY7O0FEQ0E7RUFDRSwrQkFBQTtBQ0VGOztBREVFO0VBQ0UsOEJBQUE7QUNDSjs7QURDRTtFQUNFLGdDQUFBO0FDQ0o7O0FER0E7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsK0JBQUE7QUNBRjs7QURVQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ1BGOztBRFVBO0VBQ0UsVUFBQTtBQ1BGOztBRFNBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ05GOztBRFFBO0VBQ0UsaUNBQUE7QUNMRjs7QURPQTtFQUNFLFdBQUE7QUNKRjs7QURLRTtFQUNFLHlCQUFBO0FDSEoiLCJmaWxlIjoicHJvamVjdC93cy9hdXRob3Ivc3JjL2xpYi9yb3V0aW5nL21vZHVsZXMvbXktY29udGVudC9jb21wb25lbnRzL215LWNvbnRlbnQvbXktY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy9fd3MtY29tbW9uLnNjc3MnO1xuQGltcG9ydCAnc3R5bGVzL193cy1taXhpbnMuc2Nzcyc7XG5cbi5uYXYtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjRweCk7XG59XG5cbi52ZXJ0aWNhbC1hbGlnbiB7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbn1cblxuLndpZHRoLTMwMCB7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLndpZHRoLTI0MCB7XG4gIHdpZHRoOiAyNDBweDtcbn1cblxuLmZvbnQtc2l6ZS1tIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5mbGF0LW5vLWRhdGEtYWxlcnQge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHotaW5kZXg6IDEwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggMCAjMjBmMDZjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTlmZGJlO1xuICAvLyB3aWR0aDogMTAwJTtcbn1cblxuLmZsYXQtZXJyb3ItYWxlcnQge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHotaW5kZXg6IDEwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggMCAjZjAyZjJmYjM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMzhjOGM5NDtcbiAgLy8gd2lkdGg6IDEwMCU7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWFyZ2luLXJpZ2h0LXh4bCB7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxuLm1hcmdpbi1ob3Jpem9udGFsLXMge1xuICBtYXJnaW4tbGVmdDogMyU7XG4gIG1hcmdpbi1yaWdodDogMiU7XG59XG5cbi5mbGV4LWR5bmFtaWMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQtZ3QtcyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgQGluY2x1ZGUgYnJlYWtwb2ludC1ndC14cyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14cyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgQGluY2x1ZGUgYnJlYWtwb2ludC1ndC1tIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbn1cblxuLmxhcmdlLWljb24ge1xuICBmb250LXNpemU6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwJTtcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgLy8gcGFkZGluZy1sZWZ0OiAkc2l6ZS1tO1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBib3gtc2hhZG93OiBub25lO1xuICAvLyBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuXG4uc2lkZW5hdi1jb250ZW50IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwICRzaXplLW0gJHNpemUtbDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCk7XG59XG5cbi5ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMC4zZnI7XG4gIGdyaWQtYXV0by1jb2x1bW5zOiBtaW5tYXgoYXV0bywgMzAwcHgpO1xuICB3aWR0aDogOTAlO1xufVxuXG4uY2xvc2UtYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJvcmRlci1yaWdodCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZWNlY2U7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuc2VhcmNoIHtcbiAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgfVxuICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDJweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5zZWFyY2gtYm9yZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgYm9yZGVyLWNvbG9yOiAjY2VjZWNlO1xufVxuXG4uc2VhcmNoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG59XG5cbndzLWF1dGgtY29udGVudC1jYXJkLXYyIHtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5cbi5tYXQtbGlzdC1pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjA0KVxufVxuXG4vLyAubWF0LWxpc3QtYmFzZSwgLmZ1bGwtd2lkdGgtZmllbGQge1xuLy8gICB3aWR0aDogMTAwJTtcbi8vIH1cbi8vIHdzLWF1dGgtcm9vdC1jb250ZW50LWNhcmQge1xuLy8gICB3aWR0aDogMTAwJTtcbi8vIH1cblxuLm91dGVyLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmNvbnRlbnQtYm94IHtcbiAgd2lkdGg6IDgwJTtcbn1cbi5zaWRlYmFyIHtcbiAgd2lkdGg6IDE5JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0zN3B4O1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nLWxlZnQ6IDJlbTtcbiAgcGFkZGluZy10b3A6IDNlbTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZGRkZDtcbn1cbi5tYi0zIHtcbiAgbWFyZ2luLWJvdHRvbTogMC40NXJlbSAhaW1wb3J0YW50O1xufVxuLmZ1bGwtd2lkdGgtZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNVxuICB9XG59IiwiLm5hdi1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE2NHB4KTtcbn1cblxuLnZlcnRpY2FsLWFsaWduIHtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xufVxuXG4ud2lkdGgtMzAwIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4ud2lkdGgtMjQwIHtcbiAgd2lkdGg6IDI0MHB4O1xufVxuXG4uZm9udC1zaXplLW0ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuLm1hdC1kcmF3ZXItY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLmZsYXQtbm8tZGF0YS1hbGVydCB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgei1pbmRleDogMTA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAwICMyMGYwNmM7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OWZkYmU7XG59XG5cbi5mbGF0LWVycm9yLWFsZXJ0IHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IDAgI2YwMmYyZmIzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM4YzhjOTQ7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWFyZ2luLXJpZ2h0LXh4bCB7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxuLm1hcmdpbi1ob3Jpem9udGFsLXMge1xuICBtYXJnaW4tbGVmdDogMyU7XG4gIG1hcmdpbi1yaWdodDogMiU7XG59XG5cbi5mbGV4LWR5bmFtaWMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gIC5mbGV4LWR5bmFtaWMge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5mbGV4LWR5bmFtaWMge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5mbGV4LWR5bmFtaWMge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuICAuZmxleC1keW5hbWljIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbn1cblxuLmxhcmdlLWljb24ge1xuICBmb250LXNpemU6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwJTtcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnNpZGVuYXYtY29udGVudCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAxNnB4IDI0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmgpO1xufVxuXG4uZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDAuM2ZyO1xuICBncmlkLWF1dG8tY29sdW1uczogbWlubWF4KGF1dG8sIDMwMHB4KTtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5ib3JkZXItcmlnaHQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2VjZWNlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnNlYXJjaCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuc2VhcmNoIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDJweCAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoLWJvcmRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gIGJvcmRlci1jb2xvcjogI2NlY2VjZTtcbn1cblxuLnNlYXJjaCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xufVxuXG53cy1hdXRoLWNvbnRlbnQtY2FyZC12MiB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4ubWF0LWxpc3QtaXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG4ub3V0ZXItZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uY29udGVudC1ib3gge1xuICB3aWR0aDogODAlO1xufVxuXG4uc2lkZWJhciB7XG4gIHdpZHRoOiAxOSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMzdweDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZy1sZWZ0OiAyZW07XG4gIHBhZGRpbmctdG9wOiAzZW07XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2RkZGQ7XG59XG5cbi5tYi0zIHtcbiAgbWFyZ2luLWJvdHRvbTogMC40NXJlbSAhaW1wb3J0YW50O1xufVxuXG4uZnVsbC13aWR0aC1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZ1bGwtd2lkdGgtZmllbGQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufSIsIkBpbXBvcnQgJ3N0eWxlcy9fd3MtdmFycy5zY3NzJztcblxuQG1peGluIHJldGluYSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIHByaW50IHtcbiAgQG1lZGlhIG9ubHkgcHJpbnQge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBicmVha3BvaW50LXhzIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC14bCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSBhbmQgKG1heC13aWR0aDogNTAwMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LXMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC14bCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LXhzIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/my-content/components/my-content/my-content.component.ts":
/*!************************************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/my-content/components/my-content/my-content.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: MyContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyContentComponent", function() { return MyContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_auth_expiry_date_confirm_auth_expiry_date_confirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/auth-expiry-date-confirm/auth-expiry-date-confirm.component */ "./project/ws/author/src/lib/modules/shared/components/auth-expiry-date-confirm/auth-expiry-date-confirm.component.ts");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ws/author/src/lib/constants/constant */ "./project/ws/author/src/lib/constants/constant.ts");
/* harmony import */ var _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ws/author/src/lib/constants/notificationMessage */ "./project/ws/author/src/lib/constants/notificationMessage.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_comments_dialog_comments_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/comments-dialog/comments-dialog.component */ "./project/ws/author/src/lib/modules/shared/components/comments-dialog/comments-dialog.component.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component */ "./project/ws/author/src/lib/modules/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/error-parser/error-parser.component */ "./project/ws/author/src/lib/modules/shared/components/error-parser/error-parser.component.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/components/notification/notification.component */ "./project/ws/author/src/lib/modules/shared/components/notification/notification.component.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/services/access-control.service */ "./project/ws/author/src/lib/modules/shared/services/access-control.service.ts");
/* harmony import */ var _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ws/author/src/lib/services/init.service */ "./project/ws/author/src/lib/services/init.service.ts");
/* harmony import */ var _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ws/author/src/lib/services/loader.service */ "./project/ws/author/src/lib/services/loader.service.ts");
/* harmony import */ var _services_my_content_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/my-content.service */ "./project/ws/author/src/lib/routing/modules/my-content/services/my-content.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ws_author_src_lib_constants_content_role__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ws/author/src/lib/constants/content-role */ "./project/ws/author/src/lib/constants/content-role.ts");


















let MyContentComponent = class MyContentComponent {
    constructor(myContSvc, activatedRoute, router, loadService, accessService, snackBar, dialog, authInitService) {
        this.myContSvc = myContSvc;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loadService = loadService;
        this.accessService = accessService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.authInitService = authInitService;
        this.sideNavBarOpened = false;
        this.newDesign = true;
        this.filters = [];
        this.status = 'draft';
        this.fetchError = false;
        this.contentType = [];
        this.complexityLevel = [];
        this.unit = [];
        this.finalFilters = [];
        this.allLanguages = [];
        this.searchLanguage = '';
        this.routerSubscription = {};
        this.queryFilter = '';
        this.isAdmin = false;
        this.currentAction = 'author';
        this.listview = true;
        this.searchInputElem = {};
        // sideNavBarOpened = true
        this.panelOpenState = false;
        this.allowReview = false;
        this.allowAuthor = false;
        this.allowRedo = false;
        this.allowPublish = false;
        this.allowExpiry = false;
        this.allowRestore = false;
        this.isNewDesign = false;
        this.filterMenuItems = [];
        this.hasChild = (_, node) => node.expandable;
        this._transformer = (node, level) => {
            return {
                expandable: !!node.content && node.content.length > 0,
                displayName: node.displayName,
                checked: node.checked,
                type: node.type,
                count: node.count,
                levels: level,
            };
        };
        this.filterMenuTreeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["FlatTreeControl"](node => node.levels, node => node.expandable);
        this.filterMenuTreeFlattener = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlattener"](this._transformer, node => node.levels, node => node.expandable, node => node.content);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlatDataSource"](this.filterMenuTreeControl, this.filterMenuTreeFlattener);
        this.dataSource.data = this.filterMenuItems;
        this.userId = this.accessService.userId;
        this.isAdmin = this.accessService.hasRole(['admin', 'super-admin', 'content-admin', 'editor']);
    }
    ngOnDestroy() {
        if (this.routerSubscription.unsubscribe) {
            this.routerSubscription.unsubscribe();
        }
        this.loadService.changeLoad.next(false);
    }
    ngOnInit() {
        this.pagination = {
            offset: 0,
            limit: 24,
        };
        this.newDesign = this.accessService.authoringConfig.newDesign;
        this.ordinals = this.authInitService.ordinals;
        this.allLanguages = this.authInitService.ordinals.subTitles || [];
        this.activatedRoute.queryParams.subscribe(params => {
            this.status = params.status;
            this.setAction();
            this.fetchContent(false);
        });
        this.allowAuthor = this.canShow('author');
        this.allowRedo = this.accessService.authoringConfig.allowRedo;
        this.allowRestore = this.accessService.authoringConfig.allowRestore;
        this.allowExpiry = this.accessService.authoringConfig.allowExpiry;
        this.allowReview = this.canShow('review') && this.accessService.authoringConfig.allowReview;
        this.allowPublish = this.canShow('publish') && this.accessService.authoringConfig.allowPublish;
    }
    fetchStatus() {
        switch (this.status) {
            case 'draft':
            case 'rejected':
                return ['Draft'];
            case 'inreview':
                return ['InReview', 'Reviewed', 'QualityReview'];
            case 'review':
                return ['InReview'];
            case 'published':
            case 'expiry':
                return ['Live'];
            case 'publish':
                return ['Reviewed'];
            case 'processing':
                return ['Processing'];
            case 'unpublished':
                return ['Unpublished'];
            case 'deleted':
                return ['Deleted'];
        }
        return ['Draft'];
    }
    setAction() {
        switch (this.status) {
            case 'draft':
            case 'rejected':
            case 'inreview':
            case 'review':
            case 'published':
            case 'publish':
            case 'processing':
            case 'unpublished':
            case 'deleted':
                this.currentAction = 'author';
                break;
            case 'expiry':
                this.currentAction = 'expiry';
                break;
        }
    }
    fetchContent(loadMoreFlag, changeFilter = true) {
        const searchV6Data = this.myContSvc.getSearchBody(this.status, this.searchLanguage ? [this.searchLanguage] : [], loadMoreFlag ? this.pagination.offset : 0, this.queryFilter, this.isAdmin);
        const requestData = {
            request: {
                locale: this.searchLanguage ? [this.searchLanguage] : [],
                query: this.queryFilter,
                filters: {
                    status: this.fetchStatus(),
                    creatorContacts: [],
                    trackContacts: [],
                    publisherDetails: [],
                    isMetaEditingDisabled: [false],
                    isContentEditingDisabled: [false],
                },
                pageNo: loadMoreFlag ? this.pagination.offset : 0,
                sort: [{ lastUpdatedOn: 'desc' }],
                pageSize: this.pagination.limit,
                uuid: this.userId,
                rootOrg: this.accessService.rootOrg,
                // this is for Author Only
                isUserRecordEnabled: !this.isAdmin,
            },
        };
        if (this.finalFilters.length) {
            this.finalFilters.forEach((v) => {
                searchV6Data.filters.forEach((filter) => {
                    filter.andFilters[0] = Object.assign({}, filter.andFilters[0], { [v.key]: v.value });
                });
                requestData.request.filters = Object.assign({}, requestData.request.filters, { [v.key]: v.value });
            });
        }
        if (this.queryFilter) {
            delete requestData.request.sort;
        }
        if ([
            'draft',
            'rejected',
            'inreview',
            'published',
            'unpublished',
            'processing',
            'deleted',
        ].indexOf(this.status) > -1 &&
            !this.isAdmin) {
            requestData.request.filters.creatorContacts.push(this.userId);
        }
        if (this.status === 'review' && !this.isAdmin) {
            requestData.request.filters.trackContacts.push(this.userId);
        }
        if (this.status === 'publish' && !this.isAdmin) {
            requestData.request.filters.publisherDetails.push(this.userId);
        }
        this.loadService.changeLoad.next(true);
        const observable = this.status === 'expiry' || this.newDesign
            ? this.myContSvc.fetchFromSearchV6(searchV6Data, this.isAdmin).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["map"])((v) => {
                return {
                    result: {
                        response: v,
                    },
                };
            }))
            : this.myContSvc.fetchContent(requestData);
        this.loadService.changeLoad.next(true);
        observable.subscribe(data => {
            this.loadService.changeLoad.next(false);
            if (changeFilter) {
                this.filterMenuItems =
                    data && data.result && data.result.response && data.result.response.filters
                        ? data.result.response.filters
                        : this.filterMenuItems;
                this.dataSource.data = this.filterMenuItems;
            }
            this.cardContent =
                loadMoreFlag && !this.queryFilter
                    ? (this.cardContent || []).concat(data && data.result && data.result.response ? data.result.response.result : [])
                    : data && data.result.response
                        ? data.result.response.result
                        : [];
            this.totalContent = data && data.result.response ? data.result.response.totalHits : 0;
            this.showLoadMore =
                this.pagination.offset * this.pagination.limit + this.pagination.limit < this.totalContent
                    ? true
                    : false;
            this.fetchError = false;
        }, () => {
            this.fetchError = true;
            this.cardContent = [];
            this.showLoadMore = false;
            this.loadService.changeLoad.next(false);
        });
    }
    search() {
        if (this.searchInputElem.nativeElement) {
            this.queryFilter = this.searchInputElem.nativeElement.value.trim();
        }
        this.fetchContent(false, false);
    }
    filterApplyEvent(node) {
        this.pagination.offset = 0;
        this.sideNavBarOpened = false;
        const filterIndex = this.filters.findIndex(v => v.displayName === node.displayName);
        const filterMenuItemsIndex = this.filterMenuItems.findIndex((obj) => obj.content.some((val) => val.type === node.type));
        const ind = this.finalFilters.indexOf(this.filterMenuItems[filterMenuItemsIndex].type);
        if (filterIndex === -1 && node.checked) {
            this.filters.push(node);
            this.filterMenuItems[filterMenuItemsIndex].content.find((v) => v.displayName === node.displayName).checked = true;
            if (ind === -1) {
                this.finalFilters.push({
                    key: this.filterMenuItems[filterMenuItemsIndex].type,
                    value: [node.type],
                });
            }
            else {
                this.finalFilters[ind].value.push(node.type);
            }
        }
        else {
            this.filterMenuItems[filterMenuItemsIndex].content.find((v) => v.displayName === node.displayName).checked = false;
            this.filters.splice(filterIndex, 1);
            this.finalFilters.splice(ind, 1);
        }
        this.dataSource.data = this.filterMenuItems;
        this.fetchContent(false, false);
    }
    deleteContent(request) {
        this.loadService.changeLoad.next(true);
        this.myContSvc
            .deleteContent(request.identifier, request.contentType === 'Knowledge Board')
            .subscribe(() => {
            this.loadService.changeLoad.next(false);
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SUCCESS,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
            });
            this.cardContent = (this.cardContent || []).filter(v => v.identifier !== request.identifier);
        }, error => {
            if (error.status === 409) {
                this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                    width: '80vw',
                    height: '90vh',
                    data: {
                        errorFromBackendData: error.error,
                    },
                });
            }
            this.loadService.changeLoad.next(false);
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].CONTENT_FAIL,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
            });
        });
    }
    restoreContent(request) {
        this.loadService.changeLoad.next(true);
        this.myContSvc.restoreContent(request.identifier).subscribe(() => {
            this.loadService.changeLoad.next(false);
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SUCCESS,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
            });
            this.cardContent = (this.cardContent || []).filter(v => v.identifier !== request.identifier);
        }, error => {
            if (error.status === 409) {
                this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                    width: '80vw',
                    height: '90vh',
                    data: {
                        errorFromBackendData: error.error,
                    },
                });
            }
            this.loadService.changeLoad.next(false);
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].CONTENT_FAIL,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
            });
        });
    }
    createContent(request) {
        this.loadService.changeLoad.next(true);
        this.myContSvc.createInAnotherLanguage(request.identifier, request.locale).subscribe((id) => {
            this.loadService.changeLoad.next(false);
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].CONTENT_CREATE_SUCCESS,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
            });
            this.router.navigateByUrl(`/author/editor/${id}`);
        }, error => {
            if (error.status === 409) {
                this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                    width: '750px',
                    height: '450px',
                    data: {
                        errorFromBackendData: error.error,
                    },
                });
            }
            this.loadService.changeLoad.next(false);
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].CONTENT_FAIL,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
            });
        });
    }
    clearAllFilters() {
        this.finalFilters = [];
        this.searchInputElem.nativeElement.value = '';
        this.queryFilter = '';
        this.filterMenuItems.map((val) => val.content.map((v) => (v.checked = false)));
        this.dataSource.data = this.filterMenuItems;
        this.filters = [];
        this.fetchContent(false);
    }
    loadMore() {
        this.pagination.offset += 1;
        this.fetchContent(true, false);
    }
    confirmAction(content) {
        let message = '';
        if (content.type === 'delete') {
            message = 'delete';
        }
        else if (content.type === 'restoreDeleted') {
            message = 'restoreDeleted';
        }
        else if (content.type === 'unpublish') {
            message = 'unpublish';
        }
        else if (content.type === 'moveToDraft' || content.type === 'moveToInReview') {
            if (content.data.mimeType.indexOf('collection') >= 0) {
                message = 'retrieveParent';
            }
            else {
                message = 'retrieveChild';
            }
        }
        else {
            this.forwardBackward(content);
            return;
        }
        const dialogRef = this.dialog.open(_ws_author_src_lib_modules_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"], {
            width: '600px',
            height: '200px',
            data: message,
        });
        dialogRef.afterClosed().subscribe((confirm) => {
            if (confirm) {
                if (content.type === 'delete') {
                    this.deleteContent(content.data);
                }
                else if (content.type === 'restoreDeleted') {
                    this.restoreContent(content.data);
                }
                else if (content.type === 'unpublish' ||
                    (content.type === 'moveToDraft' && content.data.status === 'Unpublished')) {
                    this.unPublishOrDraft(content.data);
                }
                else {
                    this.forwardBackward(content);
                }
            }
        });
    }
    unPublishOrDraft(request) {
        this.loadService.changeLoad.next(true);
        this.myContSvc.upPublishOrDraft(request.identifier, request.status !== 'Unpublished').subscribe(() => {
            this.loadService.changeLoad.next(false);
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SUCCESS,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
            });
            this.cardContent = (this.cardContent || []).filter(v => v.identifier !== request.identifier);
        }, error => {
            if (error.status === 409) {
                this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                    width: '750px',
                    height: '450px',
                    data: {
                        errorFromBackendData: error.error,
                    },
                });
            }
            this.loadService.changeLoad.next(false);
            this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                data: {
                    type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].CONTENT_FAIL,
                },
                duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
            });
        });
    }
    forwardBackward(content) {
        const dialogRef = this.dialog.open(_ws_author_src_lib_modules_shared_components_comments_dialog_comments_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CommentsDialogComponent"], {
            width: '750px',
            height: '450px',
            data: Object.assign({}, content.data, { status: 'Draft' }),
        });
        dialogRef.afterClosed().subscribe((commentsForm) => {
            if (commentsForm) {
                this.finalCall(commentsForm, content);
            }
        });
    }
    finalCall(commentsForm, content) {
        if (commentsForm) {
            let operationValue;
            switch (content.type) {
                case 'moveToDraft':
                    operationValue = 0;
                    break;
                case 'moveToInReview':
                    operationValue = -1;
                    break;
            }
            const body = {
                comment: commentsForm.controls.comments.value,
                operation: operationValue,
            };
            this.loadService.changeLoad.next(true);
            this.myContSvc.forwardBackward(body, content.data.identifier, content.data.status).subscribe(() => {
                this.loadService.changeLoad.next(false);
                this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                    data: {
                        type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].SUCCESS,
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
                });
                this.cardContent = (this.cardContent || []).filter(v => v.identifier !== content.data.identifier);
            }, error => {
                if (error.status === 409) {
                    this.dialog.open(_ws_author_src_lib_modules_shared_components_error_parser_error_parser_component__WEBPACK_IMPORTED_MODULE_10__["ErrorParserComponent"], {
                        width: '80vw',
                        height: '90vh',
                        data: {
                            errorFromBackendData: error.error,
                        },
                    });
                }
                this.loadService.changeLoad.next(false);
                this.snackBar.openFromComponent(_ws_author_src_lib_modules_shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], {
                    data: {
                        type: _ws_author_src_lib_constants_notificationMessage__WEBPACK_IMPORTED_MODULE_7__["Notify"].CONTENT_FAIL,
                    },
                    duration: _ws_author_src_lib_constants_constant__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATION_TIME"] * 1000,
                });
            });
        }
    }
    action(event) {
        switch (event.type) {
            case 'create':
                this.createContent(event.data);
                break;
            case 'review':
            case 'publish':
            case 'edit':
                this.router.navigateByUrl(`/author/editor/${event.data.identifier}`);
                break;
            case 'remove':
                this.cardContent = (this.cardContent || []).filter(v => v.identifier !== event.data.identifier);
                break;
            case 'moveToInReview':
            case 'moveToDraft':
            case 'delete':
            case 'unpublish':
            case 'restoreDeleted':
                this.confirmAction(event);
                break;
            case 'expiryExtend':
                this.actionOnExpiry(event.data);
        }
    }
    actionOnExpiry(content) {
        const dialogRef = this.dialog.open(_ws_author_src_lib_modules_shared_components_auth_expiry_date_confirm_auth_expiry_date_confirm_component__WEBPACK_IMPORTED_MODULE_1__["AuthExpiryDateConfirmComponent"], {
            width: '750px',
            height: '300px',
            data: content,
        });
        dialogRef.afterClosed().subscribe((userAction) => {
            if (userAction) {
                this.cardContent = (this.cardContent || []).filter(v => v.identifier !== content.identifier);
            }
        });
    }
    setCurrentLanguage(lang) {
        this.searchLanguage = lang;
    }
    canShow(role) {
        switch (role) {
            case 'review':
                return this.accessService.hasRole(_ws_author_src_lib_constants_content_role__WEBPACK_IMPORTED_MODULE_17__["REVIEW_ROLE"]);
            case 'publish':
                return this.accessService.hasRole(_ws_author_src_lib_constants_content_role__WEBPACK_IMPORTED_MODULE_17__["PUBLISH_ROLE"]);
            case 'author':
                return this.accessService.hasRole(_ws_author_src_lib_constants_content_role__WEBPACK_IMPORTED_MODULE_17__["CREATE_ROLE"]);
            default:
                return false;
        }
    }
};
MyContentComponent.ctorParameters = () => [
    { type: _services_my_content_service__WEBPACK_IMPORTED_MODULE_15__["MyContentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ws_author_src_lib_services_loader_service__WEBPACK_IMPORTED_MODULE_14__["LoaderService"] },
    { type: _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_12__["AccessControlService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _ws_author_src_lib_services_init_service__WEBPACK_IMPORTED_MODULE_13__["AuthInitService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('searchInput', { static: false })
], MyContentComponent.prototype, "searchInputElem", void 0);
MyContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ws-auth-my-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/author/src/lib/routing/modules/my-content/components/my-content/my-content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-content.component.scss */ "./project/ws/author/src/lib/routing/modules/my-content/components/my-content/my-content.component.scss")).default]
    })
], MyContentComponent);



/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/my-content/my-content-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/my-content/my-content-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: MyContentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyContentRoutingModule", function() { return MyContentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_my_content_my_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/my-content/my-content.component */ "./project/ws/author/src/lib/routing/modules/my-content/components/my-content/my-content.component.ts");




const routes = [
    {
        path: '',
        component: _components_my_content_my_content_component__WEBPACK_IMPORTED_MODULE_3__["MyContentComponent"],
    },
];
let MyContentRoutingModule = class MyContentRoutingModule {
};
MyContentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyContentRoutingModule);



/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/my-content/my-content.module.ts":
/*!***********************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/my-content/my-content.module.ts ***!
  \***********************************************************************************/
/*! exports provided: MyContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyContentModule", function() { return MyContentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/shared.module */ "./project/ws/author/src/lib/modules/shared/shared.module.ts");
/* harmony import */ var _components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/content-card/content-card.component */ "./project/ws/author/src/lib/routing/modules/my-content/components/content-card/content-card.component.ts");
/* harmony import */ var _components_my_content_my_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/my-content/my-content.component */ "./project/ws/author/src/lib/routing/modules/my-content/components/my-content/my-content.component.ts");
/* harmony import */ var _my_content_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-content-routing.module */ "./project/ws/author/src/lib/routing/modules/my-content/my-content-routing.module.ts");
/* harmony import */ var _services_my_content_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/my-content.service */ "./project/ws/author/src/lib/routing/modules/my-content/services/my-content.service.ts");
/* harmony import */ var _components_content_card_v2_content_card_v2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/content-card-v2/content-card-v2.component */ "./project/ws/author/src/lib/routing/modules/my-content/components/content-card-v2/content-card-v2.component.ts");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");











let MyContentModule = class MyContentModule {
};
MyContentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_my_content_my_content_component__WEBPACK_IMPORTED_MODULE_6__["MyContentComponent"], _components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_5__["ContentCardComponent"], _components_content_card_v2_content_card_v2_component__WEBPACK_IMPORTED_MODULE_9__["ContentCardV2Component"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ws_author_src_lib_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _my_content_routing_module__WEBPACK_IMPORTED_MODULE_7__["MyContentRoutingModule"], _ws_widget_collection__WEBPACK_IMPORTED_MODULE_3__["PipeContentRouteModule"], _ws_widget_utils__WEBPACK_IMPORTED_MODULE_10__["PipeDurationTransformModule"]],
        providers: [_services_my_content_service__WEBPACK_IMPORTED_MODULE_8__["MyContentService"]],
    })
], MyContentModule);



/***/ }),

/***/ "./project/ws/author/src/lib/routing/modules/my-content/services/my-content.service.ts":
/*!*********************************************************************************************!*\
  !*** ./project/ws/author/src/lib/routing/modules/my-content/services/my-content.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: MyContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyContentService", function() { return MyContentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _ws_author_src_lib_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ws/author/src/lib/constants/apiEndpoints */ "./project/ws/author/src/lib/constants/apiEndpoints.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/services/access-control.service */ "./project/ws/author/src/lib/modules/shared/services/access-control.service.ts");
/* harmony import */ var _ws_author_src_lib_modules_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ws/author/src/lib/modules/shared/services/api.service */ "./project/ws/author/src/lib/modules/shared/services/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_init_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../services/init.service */ "./project/ws/author/src/lib/services/init.service.ts");









let MyContentService = class MyContentService {
    constructor(authInitService, apiService, accessService, configSvc) {
        this.authInitService = authInitService;
        this.apiService = apiService;
        this.accessService = accessService;
        this.configSvc = configSvc;
    }
    fetchContent(searchData) {
        return this.apiService
            .post(_ws_author_src_lib_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_4__["SEARCH"], searchData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((data) => data));
    }
    deleteContent(id, isKnowledgeBoard = false) {
        return isKnowledgeBoard
            ? this.apiService.delete(`${_ws_author_src_lib_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_4__["CONTENT_DELETE"]}/${id}/kb${this.accessService.orgRootOrgAsQuery}`)
            : this.apiService.post(`${_ws_author_src_lib_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_4__["CONTENT_DELETE"]}${this.accessService.orgRootOrgAsQuery}`, {
                identifier: id,
                author: this.accessService.userId,
                isAdmin: this.accessService.hasRole(['editor', 'admin']),
            });
    }
    restoreContent(id) {
        return this.apiService.post(`${_ws_author_src_lib_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_4__["CONTENT_RESTORE"]}${this.accessService.orgRootOrgAsQuery}`, {
            identifier: id,
            author: this.accessService.userId,
            isAdmin: this.accessService.hasRole(['editor', 'admin']),
        });
    }
    fetchFromSearchV6(searchData, forAdmin = false) {
        return this.apiService.post(forAdmin ? _ws_author_src_lib_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_4__["SEARCH_V6_ADMIN"] : _ws_author_src_lib_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_4__["SEARCH_V6_AUTH"], searchData);
    }
    readContent(id) {
        return this.apiService.get(`${_ws_author_src_lib_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_4__["CONTENT_READ"]}${id}${this.accessService.orgRootOrgAsQuery}`);
    }
    createInAnotherLanguage(id, lang) {
        return this.readContent(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(content => {
            let requestObj = {};
            Object.keys(this.authInitService.authConfig).map(v => (requestObj[v] = content[v]
                ? content[v]
                : JSON.parse(JSON.stringify(this.authInitService.authConfig[v].defaultValue[content.contentType
                // tslint:disable-next-line: ter-computed-property-spacing
                ][0].value))));
            requestObj = Object.assign({}, requestObj, { name: '', description: '', body: '', locale: lang, subTitle: '', appIcon: '', posterImage: '', thumbnail: '', isTranslationOf: id });
            delete requestObj.identifier;
            delete requestObj.status;
            delete requestObj.categoryType;
            delete requestObj.accessPaths;
            return this.create(requestObj);
        }));
    }
    create(meta) {
        const requestBody = {
            content: Object.assign({ isExternal: false }, meta, { createdBy: this.accessService.userId, locale: meta.locale ? meta.locale : this.accessService.locale }),
        };
        if (this.accessService.rootOrg === 'client2') {
            if (meta.contentType === 'Knowledge Artifact') {
                try {
                    const userPath = `client2/Australia/dealer_code-${this.configSvc.unMappedUser.json_unmapped_fields.dealer_group_code}`;
                    requestBody.content.accessPaths = userPath;
                }
                catch (_a) {
                    requestBody.content.accessPaths = 'client2';
                }
            }
            else {
                requestBody.content.accessPaths = 'client2';
            }
        }
        return this.apiService
            .post(
        // tslint:disable-next-line:max-line-length
        `${_ws_author_src_lib_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_4__["CONTENT_CREATE"]}${this.accessService.orgRootOrgAsQuery}`, requestBody)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((data) => {
            return data.identifier;
        }));
    }
    forwardBackward(meta, id, status) {
        const requestBody = Object.assign({ actor: this.accessService.userId }, meta, { org: this.accessService.org, rootOrg: this.accessService.rootOrg || '', appName: this.accessService.appName, appUrl: window.location.origin, actorName: this.accessService.userName, action: this.accessService.getAction(status, meta.operation) });
        return this.apiService.post(_ws_author_src_lib_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_4__["STATUS_CHANGE"] + id, requestBody);
    }
    actionOnExpiry(meta, id) {
        const requestBody = Object.assign({}, meta, { identifier: id, org: this.accessService.org, rootOrg: this.accessService.rootOrg || '' });
        return this.apiService.post(_ws_author_src_lib_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_4__["EXPIRY_DATE_ACTION"], requestBody);
    }
    upPublishOrDraft(id, unpublish = true) {
        const requestBody = {
            unpublish,
            identifier: id,
        };
        return this.apiService.post(`${_ws_author_src_lib_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_4__["UNPUBLISH"]}${this.accessService.orgRootOrgAsQuery}`, requestBody, true, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Accept: 'text/plain',
            }),
            responseType: 'text',
        });
    }
    getSearchBody(mode, locale = [], pageNo = 0, query = '*', forAdmin = false, pageSize = 24) {
        const searchV6Body = {
            locale,
            pageSize,
            pageNo,
            query,
            filters: [
                {
                    andFilters: [
                        {
                            status: [],
                            creatorContacts: undefined,
                            trackContacts: undefined,
                            publisherDetails: undefined,
                            expiryDate: undefined,
                        },
                    ],
                },
            ],
            visibleFilters: {
                learningMode: { displayName: 'Mode' },
                duration: { displayName: 'Duration' },
                contentType: { displayName: 'Content Type' },
                exclusiveContent: { displayName: 'Costs' },
                complexityLevel: { displayName: 'Level' },
                catalogPaths: { displayName: 'Catalog', order: [{ _key: 'asc' }] },
                sourceShortName: { displayName: 'Source' },
                resourceType: { displayName: 'Format' },
                region: { displayName: 'Region' },
                concepts: { displayName: 'Concepts' },
                lastUpdatedOn: { displayName: 'Last Updated' },
                creatorContacts: { displayName: 'Curators', order: [{ _key: 'asc' }] },
            },
            sort: undefined,
            uuid: this.accessService.userId,
            rootOrg: this.accessService.rootOrg,
        };
        if (mode === 'all') {
            searchV6Body.sort = [{ lastUpdatedOn: 'desc' }];
            if (!forAdmin) {
                searchV6Body.filters[0] = {
                    andFilters: [
                        {
                            creatorContacts: [this.accessService.userId],
                            status: [
                                'Draft',
                                'InReview',
                                'Reviewed',
                                'Processing',
                                'Live',
                                'Deleted',
                                'Unpublished',
                                'QualityReview',
                                'Expired',
                                'MarkedForDeletion',
                            ],
                        },
                    ],
                };
                searchV6Body.filters[1] = {
                    andFilters: [{ trackContacts: [this.accessService.userId], status: ['InReview'] }],
                };
                searchV6Body.filters[2] = {
                    andFilters: [{ publisherDetails: [this.accessService.userId], status: ['Reviewed'] }],
                };
            }
            else {
                searchV6Body.filters[0].andFilters[0].status = [
                    'Draft',
                    'InReview',
                    'Reviewed',
                    'Processing',
                    'Live',
                    'Deleted',
                    'Unpublished',
                    'QualityReview',
                    'Expired',
                    'MarkedForDeletion',
                ];
            }
        }
        else if (mode === 'expiry') {
            searchV6Body.filters[0].andFilters[0].creatorContacts = [this.accessService.userId];
            searchV6Body.filters[0].andFilters[0].status.push('Live');
            searchV6Body.filters[0].andFilters[0].expiryDate = [
                {
                    lte: this.accessService.convertToESDate(new Date(new Date().setMonth(new Date().getMonth() + 1))),
                    gte: this.accessService.convertToESDate(new Date()),
                },
            ];
            searchV6Body.sort = [{ expiryDate: 'asc' }];
        }
        else if (mode === 'draft') {
            searchV6Body.filters[0].andFilters[0].creatorContacts = [this.accessService.userId];
            searchV6Body.filters[0].andFilters[0].status.push('Draft');
            searchV6Body.sort = [{ lastUpdatedOn: 'desc' }];
        }
        else if (mode === 'inreview') {
            searchV6Body.filters[0].andFilters[0].creatorContacts = [this.accessService.userId];
            searchV6Body.sort = [{ lastUpdatedOn: 'desc' }];
            searchV6Body.filters[0].andFilters[0].status = ['InReview', 'Reviewed', 'QualityReview'];
        }
        else if (mode === 'published') {
            searchV6Body.filters[0].andFilters[0].creatorContacts = [this.accessService.userId];
            searchV6Body.sort = [{ lastUpdatedOn: 'desc' }];
            searchV6Body.filters[0].andFilters[0].status.push('Live');
        }
        else if (mode === 'unpublished') {
            searchV6Body.filters[0].andFilters[0].creatorContacts = [this.accessService.userId];
            searchV6Body.sort = [{ lastUpdatedOn: 'desc' }];
            searchV6Body.filters[0].andFilters[0].status.push('Unpublished');
        }
        else if (mode === 'deleted') {
            searchV6Body.filters[0].andFilters[0].creatorContacts = [this.accessService.userId];
            searchV6Body.sort = [{ lastUpdatedOn: 'desc' }];
            searchV6Body.filters[0].andFilters[0].status.push('Deleted');
        }
        else if (mode === 'processing') {
            searchV6Body.filters[0].andFilters[0].creatorContacts = [this.accessService.userId];
            searchV6Body.sort = [{ lastUpdatedOn: 'desc' }];
            searchV6Body.filters[0].andFilters[0].status.push('Processing');
        }
        else if (mode === 'review') {
            searchV6Body.filters[0].andFilters[0].trackContacts = [this.accessService.userId];
            searchV6Body.sort = [{ lastUpdatedOn: 'asc' }];
            searchV6Body.filters[0].andFilters[0].status.push('InReview');
        }
        else if (mode === 'qualityReview') {
            searchV6Body.sort = [{ lastUpdatedOn: 'asc' }];
            searchV6Body.filters[0].andFilters[0].status.push('QualityReview');
        }
        else if (mode === 'publish') {
            searchV6Body.sort = [{ lastUpdatedOn: 'asc' }];
            searchV6Body.filters[0].andFilters[0].publisherDetails = [this.accessService.userId];
            searchV6Body.filters[0].andFilters[0].status.push('Reviewed');
        }
        if (forAdmin) {
            searchV6Body.filters[0].andFilters[0].publisherDetails = undefined;
            searchV6Body.filters[0].andFilters[0].creatorContacts = undefined;
            searchV6Body.filters[0].andFilters[0].trackContacts = undefined;
        }
        if (query && query !== 'all' && query !== '*') {
            searchV6Body.sort = undefined;
        }
        return searchV6Body;
    }
};
MyContentService.ctorParameters = () => [
    { type: _services_init_service__WEBPACK_IMPORTED_MODULE_8__["AuthInitService"] },
    { type: _ws_author_src_lib_modules_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _ws_author_src_lib_modules_shared_services_access_control_service__WEBPACK_IMPORTED_MODULE_5__["AccessControlService"] },
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_3__["ConfigurationsService"] }
];
MyContentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], MyContentService);



/***/ })

}]);
//# sourceMappingURL=routing-modules-my-content-my-content-module-es2015.js.map