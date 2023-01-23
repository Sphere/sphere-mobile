(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-forums-forum-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-admin/components/admin-timeline.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-admin/components/admin-timeline.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-5/5 \">\n\n  <mat-tab-group (selectedTabChange)=\"tabClick($event)\">\n    <mat-tab label=\"Flagged\">\n      <mat-list-item *ngFor=\"let result of adminTimelineFlaggedResponse?.result\">\n        <mat-card style=\"padding-bottom: 0.5rem;margin-bottom:1%\" *ngIf=\"!result.hidden\">\n\n\n          <div class=\" margin-bottom-s \">\n            <div class=\"flex\">\n              <div class=\"h-auto\" style=\"width: 100%;\">\n\n                <mat-card-header>\n\n                  <mat-card-title class=\"ws-mat-primary-text mat-h2 blog-title\">{{ result.postContent.title }}\n                  </mat-card-title>\n                  <mat-card-subtitle class=\"mat-caption text-grey-darker text-base\">\n                    {{ result.postContent.abstract}}\n                  </mat-card-subtitle>\n                </mat-card-header>\n                <div class=\"flex items-center\" style=\"margin-bottom: 3%;\">\n\n                  <mat-icon _ngcontent-sgx-c44=\"\"\n                    class=\"user-icon mat-icon notranslate material-icons mat-icon-no-color ng-star-inserted\" role=\"img\"\n                    aria-hidden=\"true\" style=\"margin-right: 2%;\">person</mat-icon>\n                  <!-- <img (click)=\"openDialog()\" class=\"w-10 h-10 rounded-full mr-4\"\n                    src=\"https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg\"\n                    alt=\"Avatar of Jonathan Reinink\"> -->\n                  <span class=\"change_color_on_hover\" (click)=\"openDialog()\" style=\" margin-right: 10%;\">\n                    <div class=\"text-sm\">\n                      <span class=\"ws-mat-primary-text\">\n                        {{ result.postCreator.name }}\n                      </span>\n                      <div i18n-matTooltip matTooltip=\"Updated on\" class=\"mat-caption\">\n                        {{ result.dtLastModified | date }}\n                      </div>\n\n                    </div>\n                  </span>\n\n                  <mat-icon _ngcontent-sgx-c44=\"\"\n                    class=\"user-icon mat-icon notranslate material-icons mat-icon-no-color ng-star-inserted\" role=\"img\"\n                    aria-hidden=\"true\" style=\"margin-right: 2%;\">supervisor_account</mat-icon>\n                  <span class=\"change_color_on_hover\" (click)=\"openDialogForum()\" style=\" margin-right: 10%;\">\n                    <div class=\"text-sm\">\n                      <span class=\"ws-mat-primary-text\">\n                        {{result.source.forumName}}\n                      </span>\n\n                      <div i18n-matTooltip matTooltip=\"\" class=\"mat-caption\">\n                        Forum\n                      </div>\n\n                    </div>\n                  </span>\n\n\n                </div>\n                <mat-card-content>\n                  <p class=\"mat-caption\" style=\" word-wrap: break-word; \">\n                    {{ result.postContent.body}}\n                  </p>\n                </mat-card-content>\n                <!--trial attempt-->\n                <div class=\"flex py-1\" style=\"pointer-events: none;height:15%;width: 80%;\">\n                  <button\n                    class=\"appearance-none flex-1 flex items-center justify-center text-center text-red hover:bg-grey-lighter\">\n\n                    <span class=\"material-icons\" style=\"font-size: 30px;width: 44px;cursor: pointer;\">\n                      remove_red_eye\n                    </span>\n                    50\n                  </button>\n                  <button\n                    class=\"appearance-none flex-1 flex items-center justify-center text-center text-grey-darker hover:bg-grey-lighter\">\n                    <ws-widget-btn-social-vote class=\" block\" [voteType]=\"'upVote'\" [postId]=\"result.id\"\n                      [postCreatorId]=\"result?.postCreator?.postCreatorId\" [activity]=\"result.activity\"\n                      [iconType]=\"'triangle'\" style=\"display: contents;width: 100%;\">\n                    </ws-widget-btn-social-vote>\n                    {{result.activity.activityData.upVote}}\n                  </button>\n                  <button\n                    class=\"appearance-none flex-1 flex items-center justify-center text-center text-grey-darker hover:bg-grey-lighter\">\n                    <ws-widget-btn-social-vote class=\"block\" [voteType]=\"'downVote'\" [postId]=\"result.id\"\n                      [postCreatorId]=\"result?.postCreator?.postCreatorId\" [activity]=\"result.activity\"\n                      [iconType]=\"'triangle'\">\n                    </ws-widget-btn-social-vote>\n\n                    {{result.activity.activityData.downVote}}\n                  </button>\n                </div>\n\n\n\n                <!-- trial attempt ends -->\n\n                <!-- <div class=\"flex bg-gray-200\" style=\"pointer-events: none;\">\n                  <div class=\"flex-1 text-gray-700 text-center px-4  h-8\">\n                    <div class=\"flex items-center\">\n                      <div style=\"width: 90%;\">\n                        <span class=\"material-icons\" style=\"font-size: 30px;width: 44px;cursor: pointer;\">\n                          remove_red_eye\n                        </span>\n\n                      </div>\n                      <div class=\"rounded-lg bg-grey-light text-xs ml-1 p-px\" style=\"width: 10%;\">\n                        {{result.activity.activityData.upVote}}\n                      </div>\n                    </div>\n\n\n                  </div>\n                  <div class=\"flex-1 text-gray-700 text-center px-4 h-8\">\n                    <div class=\"flex items-center\">\n                      <div style=\"width: 90%;\">\n                        <ws-widget-btn-social-vote class=\" block\" [voteType]=\"'upVote'\" [postId]=\"result.id\"\n                          [postCreatorId]=\"result?.postCreator?.postCreatorId\" [activity]=\"result.activity\"\n                          [iconType]=\"'triangle'\" style=\"display: contents;width: 100%;\">\n                        </ws-widget-btn-social-vote>\n\n                      </div>\n                      <div class=\"rounded-lg bg-grey-light text-xs ml-1 p-px\" style=\"width: 10%;\">\n                        {{result.activity.activityData.upVote}}\n                      </div>\n                    </div>\n\n\n                  </div>\n                  <div class=\"flex-1 text-gray-700 text-center px-4 m-2 h-8\">\n                    <div class=\"flex items-center\">\n                      <div style=\"width: 90%;\">\n                        <ws-widget-btn-social-vote class=\"block\" [voteType]=\"'downVote'\" [postId]=\"result.id\"\n                          [postCreatorId]=\"result?.postCreator?.postCreatorId\" [activity]=\"result.activity\"\n                          [iconType]=\"'triangle'\">\n                        </ws-widget-btn-social-vote>\n\n                      </div>\n                      <div class=\"rounded-lg bg-grey-light text-xs ml-1 p-px\" style=\"width: 10%;\">\n                        {{result.activity.activityData.downVote}}\n                      </div>\n                    </div>\n\n                  </div>\n                </div> -->\n\n              </div>\n              <!-- <div class=\"w-auto h-auto\">\n                <div class=\"flex flex-col justify-center \">\n                  <div class=\"text-grey-darker text-center   py-4\">\n                    <button mat-fab aria-label=\"Rejected\" i18n-aria-label matTooltip=\"Reject\"\n                    i18n-matTooltip=\"Reject Button\" (click)=\"reject()\">\n                    <mat-icon>clear</mat-icon>\n                  </button>\n\n                  </div>\n                  <div class=\"text-grey-darker text-center   py-4\">\n                    <button mat-fab  aria-label=\"Accepted\" i18n-aria-label matTooltip=\"Accept\"\n                    i18n-matTooltip=\"Accept Button\" style=\"background-color: cadetblue;\" (click)=\"accept()\">\n                    <mat-icon>done_outline</mat-icon>\n                  </button>\n                  </div>\n                  <div class=\"text-grey-darker text-center   py-4\">\n                    <button mat-fab aria-label=\"Rejected\" i18n-aria-label matTooltip=\"Reject\"\n                    i18n-matTooltip=\"Reject Button\" (click)=\"reject()\">\n                    <mat-icon>clear</mat-icon>\n                  </button>\n\n                  </div>\n\n                </div>\n              </div> -->\n\n            </div>\n\n\n          </div>\n          <div class=\"flex bg-gray-200\" style=\" width: 50%; margin-left: 20%;margin-right: 20%;\">\n            <div class=\"flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2\">\n              <ws-app-btn-admin [type]=\"'FLAGGEDACCEPT'\" (acceptedFlaggedId)=\"receiveMessage($event)\"\n                [postIdReceived]=\"result.id\">\n              </ws-app-btn-admin>\n\n            </div>\n            <div class=\"flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2\">\n              <ws-app-btn-admin [type]=\"'REJECT'\" (messageEvent)=\"receiveMessage($event)\" [postIdReceived]=\"result.id\">\n              </ws-app-btn-admin>\n            </div>\n            <div class=\"flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2\">\n              <button mat-fab aria-label=\"Rejected\" i18n-aria-label matTooltip=\"Reject\" i18n-matTooltip=\"Reject Button\"\n                (click)=\"reject()\" style=\"background-color: yellowgreen;\">\n                <mat-icon>screen_share</mat-icon>\n              </button>\n            </div>\n          </div>\n\n\n        </mat-card>\n\n      </mat-list-item>\n    </mat-tab>\n    <mat-tab label=\"Deleted\">\n      <mat-list-item *ngFor=\"let result of adminTimelineDeletedResponse?.result\">\n        <mat-card style=\"padding-bottom: 0.5rem;margin-bottom:1%\" *ngIf=\"!result.hidden\">\n\n\n          <div class=\" margin-bottom-s \">\n            <div class=\"flex\">\n              <div class=\"h-auto\" style=\"width: 100%;\">\n\n                <mat-card-header>\n\n                  <mat-card-title class=\"ws-mat-primary-text mat-h2 blog-title\">{{ result.postContent.title }}\n                  </mat-card-title>\n                  <mat-card-subtitle class=\"mat-caption text-grey-darker text-base\">\n                    {{ result.postContent.abstract}}\n                  </mat-card-subtitle>\n                </mat-card-header>\n                <div class=\"flex items-center\" style=\"margin-bottom: 3%;\">\n\n                  <mat-icon _ngcontent-sgx-c44=\"\"\n                    class=\"user-icon mat-icon notranslate material-icons mat-icon-no-color ng-star-inserted\" role=\"img\"\n                    aria-hidden=\"true\" style=\"margin-right: 2%;\">person</mat-icon>\n                  <!-- <img (click)=\"openDialog()\" class=\"w-10 h-10 rounded-full mr-4\"\n                            src=\"https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg\"\n                            alt=\"Avatar of Jonathan Reinink\"> -->\n                  <span class=\"change_color_on_hover\" (click)=\"openDialog()\" style=\" margin-right: 10%;\">\n                    <div class=\"text-sm\">\n                      <span class=\"ws-mat-primary-text\">\n                        {{ result.postCreator.name }}\n                      </span>\n                      <div i18n-matTooltip matTooltip=\"Updated on\" class=\"mat-caption\">\n                        {{ result.dtLastModified | date }}\n                      </div>\n\n                    </div>\n                  </span>\n\n                  <mat-icon _ngcontent-sgx-c44=\"\"\n                    class=\"user-icon mat-icon notranslate material-icons mat-icon-no-color ng-star-inserted\" role=\"img\"\n                    aria-hidden=\"true\" style=\"margin-right: 2%;\">supervisor_account</mat-icon>\n                  <span class=\"change_color_on_hover\" (click)=\"openDialogForum()\" style=\" margin-right: 10%;\">\n                    <div class=\"text-sm\">\n                      <span class=\"ws-mat-primary-text\">\n                        {{result.source.forumName}}\n                      </span>\n\n                      <div i18n-matTooltip matTooltip=\"\" class=\"mat-caption\">\n                        Forum\n                      </div>\n\n                    </div>\n                  </span>\n\n\n                </div>\n                <mat-card-content>\n                  <p class=\"mat-caption\" style=\" word-wrap: break-word; \">\n                    {{ result.postContent.body}}\n                  </p>\n                </mat-card-content>\n                <!--trial attempt-->\n                <div class=\"flex py-1\" style=\"pointer-events: none;height:15%;width: 80%;\">\n                  <button\n                    class=\"appearance-none flex-1 flex items-center justify-center text-center text-red hover:bg-grey-lighter\">\n\n                    <span class=\"material-icons\" style=\"font-size: 30px;width: 44px;cursor: pointer;\">\n                      remove_red_eye\n                    </span>\n                    50\n                  </button>\n                  <button\n                    class=\"appearance-none flex-1 flex items-center justify-center text-center text-grey-darker hover:bg-grey-lighter\">\n                    <ws-widget-btn-social-vote class=\" block\" [voteType]=\"'upVote'\" [postId]=\"result.id\"\n                      [postCreatorId]=\"result?.postCreator?.postCreatorId\" [activity]=\"result.activity\"\n                      [iconType]=\"'triangle'\" style=\"display: contents;width: 100%;\">\n                    </ws-widget-btn-social-vote>\n                    {{result.activity.activityData.upVote}}\n                  </button>\n                  <button\n                    class=\"appearance-none flex-1 flex items-center justify-center text-center text-grey-darker hover:bg-grey-lighter\">\n                    <ws-widget-btn-social-vote class=\"block\" [voteType]=\"'downVote'\" [postId]=\"result.id\"\n                      [postCreatorId]=\"result?.postCreator?.postCreatorId\" [activity]=\"result.activity\"\n                      [iconType]=\"'triangle'\">\n                    </ws-widget-btn-social-vote>\n\n                    {{result.activity.activityData.downVote}}\n                  </button>\n                </div>\n\n\n\n                <!-- trial attempt ends -->\n                <!-- <div class=\"flex bg-gray-200\" style=\"pointer-events: none;\">\n                          <div class=\"flex-1 text-gray-700 text-center px-4  h-8\">\n                            <div class=\"flex items-center\">\n                              <div style=\"width: 90%;\">\n                                <span class=\"material-icons\" style=\"font-size: 30px;width: 44px;cursor: pointer;\">\n                                  remove_red_eye\n                                </span>\n\n                              </div>\n                              <div class=\"rounded-lg bg-grey-light text-xs ml-1 p-px\" style=\"width: 10%;\">\n                                {{result.activity.activityData.upVote}}\n                              </div>\n                            </div>\n\n\n                          </div>\n                          <div class=\"flex-1 text-gray-700 text-center px-4 h-8\">\n                            <div class=\"flex items-center\">\n                              <div style=\"width: 90%;\">\n                                <ws-widget-btn-social-vote class=\" block\" [voteType]=\"'upVote'\" [postId]=\"result.id\"\n                                  [postCreatorId]=\"result?.postCreator?.postCreatorId\" [activity]=\"result.activity\"\n                                  [iconType]=\"'triangle'\" style=\"display: contents;width: 100%;\">\n                                </ws-widget-btn-social-vote>\n\n                              </div>\n                              <div class=\"rounded-lg bg-grey-light text-xs ml-1 p-px\" style=\"width: 10%;\">\n                                {{result.activity.activityData.upVote}}\n                              </div>\n                            </div>\n\n\n                          </div>\n                          <div class=\"flex-1 text-gray-700 text-center px-4 m-2 h-8\">\n                            <div class=\"flex items-center\">\n                              <div style=\"width: 90%;\">\n                                <ws-widget-btn-social-vote class=\"block\" [voteType]=\"'downVote'\" [postId]=\"result.id\"\n                                  [postCreatorId]=\"result?.postCreator?.postCreatorId\" [activity]=\"result.activity\"\n                                  [iconType]=\"'triangle'\">\n                                </ws-widget-btn-social-vote>\n\n                              </div>\n                              <div class=\"rounded-lg bg-grey-light text-xs ml-1 p-px\" style=\"width: 10%;\">\n                                {{result.activity.activityData.downVote}}\n                              </div>\n                            </div>\n\n                          </div>\n                        </div> -->\n\n              </div>\n              <!-- <div class=\"w-auto h-auto\">\n                        <div class=\"flex flex-col justify-center \">\n                          <div class=\"text-grey-darker text-center   py-4\">\n                            <button mat-fab aria-label=\"Rejected\" i18n-aria-label matTooltip=\"Reject\"\n                            i18n-matTooltip=\"Reject Button\" (click)=\"reject()\">\n                            <mat-icon>clear</mat-icon>\n                          </button>\n\n                          </div>\n                          <div class=\"text-grey-darker text-center   py-4\">\n                            <button mat-fab  aria-label=\"Accepted\" i18n-aria-label matTooltip=\"Accept\"\n                            i18n-matTooltip=\"Accept Button\" style=\"background-color: cadetblue;\" (click)=\"accept()\">\n                            <mat-icon>done_outline</mat-icon>\n                          </button>\n                          </div>\n                          <div class=\"text-grey-darker text-center   py-4\">\n                            <button mat-fab aria-label=\"Rejected\" i18n-aria-label matTooltip=\"Reject\"\n                            i18n-matTooltip=\"Reject Button\" (click)=\"reject()\">\n                            <mat-icon>clear</mat-icon>\n                          </button>\n\n                          </div>\n\n                        </div>\n                      </div> -->\n\n            </div>\n\n\n          </div>\n          <div class=\"flex\" style=\" width: 50%; margin-left: 20%;margin-right: 20%;\">\n            <div class=\"flex-1 text-gray-700 text-center  px-4 py-2 m-2\">\n              <ws-app-btn-admin [type]=\"'ACCEPT'\" (revivedId)=\"updateDletedPost($event)\" [postIdReceived]=\"result.id\">\n              </ws-app-btn-admin>\n\n            </div>\n            <!-- <div class=\"flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2\">\n              <ws-app-btn-admin [type]=\"'REJECT'\" (messageEvent)=\"receiveMessage($event)\" [postIdReceived]=\"result.id\">\n              </ws-app-btn-admin>\n            </div> -->\n            <div class=\"flex-1 text-gray-700 text-center  px-4 py-2 m-2\">\n              <button mat-fab aria-label=\"Rejected\" i18n-aria-label matTooltip=\"Reject\" i18n-matTooltip=\"Reject Button\"\n                (click)=\"reject()\" style=\"background-color: yellowgreen;\">\n                <mat-icon>screen_share</mat-icon>\n              </button>\n            </div>\n          </div>\n\n\n        </mat-card>\n\n      </mat-list-item>\n    </mat-tab>\n\n  </mat-tab-group>\n\n\n\n\n\n\n\n\n\n  <!-- pre-existing components-->\n  <h2 class=\"text-center margin-top-m\" i18n *ngIf=\"timelineFetchStatus === 'none'\">\n    Nothing has been posted as of yet to moderate\n  </h2>\n  <div *ngIf=\"timelineFetchStatus === 'fetching'\" class=\"text-center margin-top-s\">\n    <mat-spinner></mat-spinner>\n  </div>\n\n  <div *ngIf=\"timelineFetchStatus === 'hasMore'\" class=\"text-center\">\n    <button (click)=\"fetchTimelineData()\" type=\"button\" mat-raised-button color=\"primary\">\n      <mat-icon>add</mat-icon>&nbsp;\n      <ng-container>View More</ng-container>\n    </button>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-card/forum-card.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-card/forum-card.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"blog-container\">\n  <div *ngIf=\"post\" class=\"text-overwrap w-full\">\n    <div class=\"flex flex-middle flex-between\">\n      <a [routerLink]=\"'/app/social/forums/post/' + post.id\" class=\"ws-mat-primary-text mat-title text-overwrap pb-2\">\n        {{ post.postContent.title }}\n      </a>\n      <ws-app-btn-flag [postCreatorId]=\"post.postCreator?.postCreatorId\" [postId]=\"post.id\"\n        [flagged]=\"post.activity.userActivity.flag\">\n      </ws-app-btn-flag>\n    </div>\n\n    <div class=\"mb-4 mt-1 text-abstract-trim\">\n      {{ post.postContent.abstract }}\n    </div>\n    <div class=\"flex flex-middle\">\n      <mat-icon>account_circle</mat-icon>\n      <div class=\"px-2 ws-mat-primary-text\">\n        {{ post.postCreator.name }}\n      </div>\n      <div class=\"px-2\" *ngIf=\"post.source.forumName && partOfRequired\">\n        <span class=\"ws-mat-primary-text\"><span i18n>Part Of: </span>{{ post.source.forumName }}</span>\n      </div>\n    </div>\n    <div class=\"flex flex-between\" *ngIf=\"post.activity\">\n      <div class=\"flex flex-middle\">\n        <span class=\"ws-mat-primary-text mat-caption pr-4\"><span i18n>Modified:\n          </span>{{ post.dtLastModified | date }}</span>\n\n        <ws-widget-btn-social-vote [postId]=\"post.id\" [activity]=\"post.activity\" [voteType]=\"'upVote'\"\n          [postCreatorId]=\"post.postCreator?.postCreatorId\">\n        </ws-widget-btn-social-vote>\n        <ws-widget-btn-social-vote class=\"margin-left-s\" [postId]=\"post.id\" [activity]=\"post.activity\"\n          [voteType]=\"'downVote'\" [postCreatorId]=\"post.postCreator?.postCreatorId\"></ws-widget-btn-social-vote>\n        <!-- <ws-app-btn-flag [postCreatorId]='post.postCreator?.postCreatorId' [postId]=\"post.id\"\n            [flagged]=\"post.activity.userActivity.flag\">\n            </ws-app-btn-flag> -->\n\n      </div>\n      <span class=\"ws-mat-primary-text flex flex-middle\">\n        <mat-icon class=\"px-2 grey-icons\">comment</mat-icon>{{ post.replyCount }}\n      </span>\n    </div>\n  </div>\n\n  <!-- <span class=\"spacer\"></span> -->\n\n  <!--  <div class=\"icon-section\" *ngIf=\"post\">\n    <ws-widget-btn-social-vote class=\"block\" [voteType]=\"'upVote'\" [postId]=\"post.id\" [activity]=\"post.activity\"\n      [iconType]=\"'triangle'\" [postCreatorId]=\"post?.postCreator?.postCreatorId\"></ws-widget-btn-social-vote>\n    <div class=\"vote-count\">\n      {{ post.activity.activityData.upVote - post.activity.activityData.downVote }}\n    </div>\n    <ws-widget-btn-social-vote class=\"block\" [voteType]=\"'downVote'\" [postId]=\"post.id\" [activity]=\"post.activity\"\n      [iconType]=\"'triangle'\" [postCreatorId]=\"post?.postCreator?.postCreatorId\"></ws-widget-btn-social-vote>\n  </div> -->\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-edit/forum-edit.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-edit/forum-edit.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-home.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-home.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar [color]=\"pageNavbar.color\" [ngStyle]=\"pageNavbar?.styles\">\n  <button type=\"button\" mat-icon-button (click)=\"\n        !screenSizeIsLtMedium ? (showText = !showText) : sideNavBar.toggle()\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <!-- <ws-widget-btn-page-back [widgetData]=\"{ url: 'back' }\"></ws-widget-btn-page-back> -->\n  <span class=\"ml-2\" i18n>Forum</span>\n  <span class=\"spacer\"></span>\n  <ng-container *ngIf=\"(isXSmall$ | async) === true && forumCreation\">\n    <a mat-icon-button [matMenuTriggerFor]=\"menu\">\n      <mat-icon>more_vertical</mat-icon>\n    </a>\n    <mat-menu #menu=\"matMenu\">\n      <a i18n [routerLink]=\"'/app/social/forums/me'\" mat-menu-item>My Forums</a>\n      <a i18n [routerLink]=\"'/app/social/forums/edit'\" mat-menu-item>Create Forums</a>\n    </mat-menu>\n  </ng-container>\n  <ng-container *ngIf=\"(isXSmall$ | async) === false && forumCreation\">\n    <a mat-raised-button color=\"primary\" i18n [routerLink]=\"'/app/social/blogs/me'\" class=\"margin-right-s\">My Forums</a>\n    <a mat-raised-button color=\"primary\" class=\"margin-left-s\" i18n [routerLink]=\"'/app/social/blogs/edit'\">Create\n      Forums</a>\n  </ng-container>\n</mat-toolbar>\n<mat-sidenav-container autosize=\"true\" class=\"sidenav-content-min-height\">\n  <mat-sidenav #sideNavBar [opened]=\"!screenSizeIsLtMedium\" [mode]=\"screenSizeIsLtMedium ? 'over' : 'side'\">\n    <mat-nav-list class=\"margin-left-s margin-right-xs\">\n      <a mat-list-item routerLinkActive=\"mat-toolbar\" [routerLink]=\"'/app/social/forums/view-forum'\"\n        (click)=\"screenSizeIsLtMedium ? sideNavBar.toggle() : null\" matTooltip=\"Forum\" i18n-matTooltip=\"Forum\">\n        <mat-icon>forum</mat-icon><span class=\"padding-left-s\" *ngIf=\"showText || screenSizeIsLtMedium\"\n          i18n>Forums</span>\n      </a>\n      <a mat-list-item routerLinkActive=\"mat-toolbar\" *ngIf=\"showModerateTab\"\n        [routerLink]=\"'/app/social/forums/moderator-timeline'\"\n        (click)=\"screenSizeIsLtMedium ? sideNavBar.toggle() : null\">\n        <mat-icon>rate_review</mat-icon><span class=\"padding-left-s\" *ngIf=\"showText || screenSizeIsLtMedium\"\n          i18n>Moderate</span>\n      </a>\n      <a mat-list-item routerLinkActive=\"mat-toolbar\" [routerLink]=\"'/app/social/forums/recent-forumpost'\"\n        (click)=\"screenSizeIsLtMedium ? sideNavBar.toggle() : null\">\n        <mat-icon>post_add</mat-icon><span class=\"padding-left-s\" *ngIf=\"showText || screenSizeIsLtMedium\" i18n>Latest\n          posts</span>\n      </a>\n      <a mat-list-item routerLinkActive=\"mat-toolbar\" [routerLink]=\"'/app/social/forums/my-forum-post'\"\n        (click)=\"screenSizeIsLtMedium ? sideNavBar.toggle() : null\">\n        <mat-icon>insert_comment</mat-icon><span class=\"padding-left-s\" *ngIf=\"showText || screenSizeIsLtMedium\" i18n>My\n          posts</span>\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content class=\"padding-xs\">\n    <div class=\"w-full\">\n      <div *ngIf=\"!showFilter && filterEnabled\" class=\"text-right\">\n        <button mat-icon-button *ngIf=\"!showFilter\" (click)=\"showFilter = !showFilter;\">\n          <mat-icon>filter_list</mat-icon>\n        </button></div>\n      <div *ngIf=\"showFilter && filterEnabled\" class=\"py-3\">\n        <ws-app-filter-dispaly [sideNavBarOpened]=\"sideNavBarOpened\" [filtersResponse]=\"filtersResponse\"\n          (filterClose)=\"closeFilter(false)\" [filtersResetAble]=\"filtersResetAble\">\n        </ws-app-filter-dispaly>\n        <mat-card *ngIf=\"predefinedAdminFiltersExist\">\n          <mat-card-content>\n            <!-- <h2 class=\"example-h2\">Checkbox configuration</h2> -->\n\n            <section class=\"example-section\">\n              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"query\" (change)=\"changeAdminQueryFilter()\">Q&A\n              </mat-checkbox>\n              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"forumPosts\" (change)=\"changeAdminForumFilter()\">Forum\n                Posts\n              </mat-checkbox>\n              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"blogPosts\" (change)=\"changeAdminBlogFilter()\">Blog Posts\n              </mat-checkbox>\n            </section>\n\n\n\n          </mat-card-content>\n        </mat-card>\n\n\n\n        <!--filters for admin end-->\n        <mat-card *ngIf=\"predefinedFiltersExist\">\n          <mat-card-content>\n            <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n              [(ngModel)]=\"favoriteSeason\">\n              <mat-radio-button class=\"example-radio-button width-expand\" *ngFor=\"let season of seasons\"\n                [value]=\"season\" (change)=\"emitCurrentPreFilter(season)\">\n                {{ season }}\n              </mat-radio-button>\n            </mat-radio-group>\n            <!-- <div>Your favorite season is: {{favoriteSeason}}</div> -->\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <mat-divider *ngIf=\"showFilter && filterEnabled\" class=\"py-2\"></mat-divider>\n      <router-outlet></router-outlet>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-moderator/components/moderator-timeline.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-moderator/components/moderator-timeline.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-5/5\">\n  <mat-list-item *ngFor=\"let result of timelineData?.result\">\n    <mat-card style=\"padding-bottom: 0.5rem; margin-bottom: 1%;\" *ngIf=\"!result.hidden\">\n      <div class=\"margin-bottom-s\">\n        <div class=\"flex\">\n          <div class=\"h-auto\" style=\"width: 91%;\">\n            <mat-card-header>\n              <mat-card-title class=\"ws-mat-primary-text mat-h2 blog-title\">{{ result.postContent.title }}\n              </mat-card-title>\n              <mat-card-subtitle class=\"mat-caption text-grey-darker text-base\">\n                {{ result.postContent.abstract }}\n              </mat-card-subtitle>\n            </mat-card-header>\n            <div class=\"md:flex items-center\" style=\"margin-bottom: 3%;\">\n              <div class=\"flex md:flex-middle\">\n                <mat-icon>person</mat-icon>\n                <div class=\"px-2\">\n                  <span class=\"ws-mat-primary-text text-sm\">\n                    {{ result.postCreator.name }}\n                  </span>\n                  <div i18n-matTooltip matTooltip=\"Updated on\" class=\"mat-caption\">\n                    {{ result.dtLastModified | date }}\n                  </div>\n                </div>\n              </div>\n              <div class=\"flex md:flex-middle md:pl-10 md:pt-0 pt-2\">\n                <mat-icon>supervisor_account</mat-icon>\n                <div class=\"px-2\">\n                  <span class=\"ws-mat-primary-text text-sm\">\n                    {{ result.source.forumName }}\n                  </span>\n                  <div i18n class=\"mat-caption\">Forum</div>\n                </div>\n              </div>\n            </div>\n            <mat-card-content>\n              <p class=\"mat-caption\" style=\"word-wrap: break-word;\">\n                {{ result.postContent.body }}\n              </p>\n            </mat-card-content>\n          </div>\n        </div>\n        <div class=\"w-auto h-auto flex flex-end\">\n          <div class=\"flex flex-between justify-center\">\n            <div class=\"text-grey-darker text-center px-2\">\n              <ws-app-btn-moderator [type]=\"'REJECT'\" (customevent)=\"updateFromChild($event)\"\n                (click)=\"rejectUpdate(result.id)\" [postIdReceived]=\"result.id\"></ws-app-btn-moderator>\n            </div>\n            <div class=\"text-grey-darker text-center px-2\">\n              <ws-app-btn-moderator [type]=\"'ACCEPT'\" (customevent)=\"updateFromChild($event)\"\n                (click)=\"acceptUpdate(result.id)\" [postIdReceived]=\"result.id\"></ws-app-btn-moderator>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-card>\n  </mat-list-item>\n\n  <!-- pre-existing components-->\n  <h2 class=\"text-center margin-top-m\" i18n *ngIf=\"timelineFetchStatus === 'none'\">\n    Nothing has been posted as of yet to moderate\n  </h2>\n  <div *ngIf=\"timelineFetchStatus === 'fetching'\" class=\"text-center margin-top-s\">\n    <mat-spinner></mat-spinner>\n  </div>\n\n  <!-- <div *ngIf=\"timelineFetchStatus === 'hasMore'\" class=\"text-center\">\n    <button (click)=\"fetchTimelineData('subsequentCall')\" type=\"button\" mat-raised-button color=\"primary\"> -->\n  <div *ngIf=\"timelineFetchStatus === 'hasMore'\" class=\"text-center pt-2\">\n    <button (click)=\"fetchTimelineData('subsequentCall')\" type=\"button\" mat-raised-button color=\"primary\">\n      <mat-icon>add</mat-icon>&nbsp;\n      <ng-container>View More</ng-container>\n    </button>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-post-edit/components/forum-post-edit.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-post-edit/components/forum-post-edit.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>forum-post-edit works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-post-reply/components/forum-post-reply.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-post-reply/components/forum-post-reply.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>forum-post-reply works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-post-result/components/forum-post-result.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-post-result/components/forum-post-result.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>forum-post-result works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-post-view/components/forum-post-view.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-post-view/components/forum-post-view.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"forum-view-container\">\n  <!-- <pre>{{postsOfForum | json}}</pre>\n  <pre>{{forumViewData| json}}</pre> -->\n  <mat-card class=\"padding-xs\" *ngIf=\"forumViewData\">\n    <img alt=\"thumbnail-image\" class=\"image-container\" [src]=\"forumViewData.thumbnail ? forumViewData.thumbnail : 'https://line25.com/wp-content/uploads/2016/06/2-Man-holds-the-program-code.jpg'\"\n    />\n\n    <div class=\"ws-mat-primary-text mat-headline title-text title-truncate\">\n      {{ forumViewData.name }}\n    </div>\n    <div class=\"description-text mb-4\" i18n-title title=\"Description\">\n      {{ forumViewData.description }}\n    </div>\n    <div class=\"flex flex-middle\">\n      <div>\n        <div class=\"flex flex-middle\">\n          <mat-icon>\n            account_circle\n          </mat-icon>\n          <div class=\"px-2 pb-2\">\n            <div class=\"ws-mat-primary-text title-text\">\n              {{ forumViewData.forumCreator.name }}\n            </div>\n          </div>\n        </div>\n      </div>\n      <span class=\"spacer\"></span>\n      <!-- <mat-icon class=\"px-2\">group</mat-icon>\n      <span class=\"pr-4\">{{forumViewData.followerCount}}</span> -->\n      <!-- <mat-icon class=\"px-2 grey-icons\">chat</mat-icon>\n      <span>{{ forumViewData.postCount }}</span> -->\n    </div>\n    <div class=\"pb-4\">\n      <span class=\"ws-mat-primary-text title-text\">\n        <span i18n>Modified:\n        </span>{{ forumViewData.dtLastModified | date }}</span>\n    </div>\n\n    <mat-divider></mat-divider>\n    <h3 class=\"pt-3\">\n      <strong>\n        <ng-container i18n> Posts </ng-container>\n        <ng-container *ngIf=\"postsOfForum.length\"> ({{ forumViewData.postCount }})</ng-container>\n      </strong>\n    </h3>\n\n    <mat-card style=\"margin-bottom: 1%;\" class=\"flex flex-middle flex-center ws-mat-primary-text mat-title cursor-pointer\" (click)=\"writePost()\">\n      Create Post\n      <mat-icon>add</mat-icon>\n    </mat-card>\n\n    <div *ngFor=\"let post of postsOfForum\">\n      <ws-app-forum-card [post]=\"post\" [partOfRequired]=\"false\"></ws-app-forum-card>\n    </div>\n  </mat-card>\n\n  <div *ngIf=\"timelineFetchStatus === 'hasMore'\" class=\"text-center pt-3\">\n    <button (click)=\"fetchPosts()\" type=\"button\" mat-raised-button color=\"primary\">\n      <mat-icon>add</mat-icon>&nbsp;\n      <ng-container i18n>View More</ng-container>\n    </button>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-view/components/forum-view.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-view/components/forum-view.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"forum-view-container\">\n  <div class=\"py-2\" *ngFor=\"let result of forumViewResponse?.result\">\n    <mat-card class=\"cursor-pointer\">\n      <div class=\"flex flex-middle\" (click)=\"showForumDetail(result)\">\n        <div class=\"sm:pr-4\">\n          <img alt=\"thumbnail-image\" class=\"user-image\"\n            [src]=\"result.thumbnail ? result.thumbnail : 'https://line25.com/wp-content/uploads/2016/06/2-Man-holds-the-program-code.jpg'\" />\n        </div>\n        <div class=\"w-full\">\n          <span class=\"ws-mat-primary-text mat-h1 pb-2 title-text title-truncate\">{{ result.name }}</span>\n          <div class=\"description-text ws-mat-text-block-fade-gradient mb-3 pt-2\" i18n-title title=\"Description\">\n            {{ result.description  }}\n          </div>\n        </div>\n      </div>\n      <div class=\"flex flex-middle\">\n        <div>\n          <div class=\"flex flex-middle pb-2\">\n            <mat-icon>\n              account_circle\n            </mat-icon>\n            <div class=\"px-2\">\n              <div class=\"ws-mat-primary-text\">\n                {{result.forumCreator.name}}\n              </div>\n            </div>\n          </div>\n        </div>\n        <span class=\"spacer\"></span>\n        <!-- <mat-icon class=\"px-2\">group</mat-icon>\n        <span class=\"pr-4\">{{result.followerCount}}</span> -->\n        <mat-icon class=\"px-2 grey-icons\">chat</mat-icon>\n        <span>{{result.postCount}}</span>\n      </div>\n      <span class=\"ws-mat-primary-text\"><span i18n>Modified: </span>{{result.dtLastModified | date}}</span>\n      <ws-widget-btn-social-like *ngIf=\"showSocialLike\" [postId]=\"post?.postId\"\n        [postCreatorId]=\"post?.mainPost?.postCreator?.postCreatorId\" [activity]=\"post?.mainPost?.activity\">\n      </ws-widget-btn-social-like>\n    </mat-card>\n  </div>\n  <h2 class=\"text-center i18n margin-top-m\" *ngIf=\"!forumViewResponse?.result.length\">\n    There are no forums present\n  </h2>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/myforum-post/components/myforum-post.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/myforum-post/components/myforum-post.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-5/5 \">\n\n\n\n\n\n  <div style=\"padding-bottom: 0.5rem;margin-bottom:1%\" *ngFor=\"let result of myPostsTimelineData?.result\">\n    <ws-app-forum-card [post]=\"result\"></ws-app-forum-card>\n\n\n\n  </div>\n  <!-- <div\n      class=\" h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center\n                overflow-hidden\" style=\"background-image: url('https://tailwindcss.com/img/card-left.jpg')\"\n                title=\"Woman holding a mug\">\n            </div> -->\n\n\n\n\n\n\n\n  <!-- pre-existing components-->\n  <h2 class=\"text-center margin-top-m\" i18n *ngIf=\"timelineFetchStatus === 'none'\">\n    There are no forum posts present\n  </h2>\n  <div *ngIf=\"timelineFetchStatus === 'fetching'\" class=\"text-center margin-top-s\">\n    <mat-spinner></mat-spinner>\n  </div>\n  <div *ngIf=\"timelineFetchStatus === 'hasMore'\" class=\"text-center\">\n    <button (click)=\"fetchMyPost()\" type=\"button\" mat-raised-button color=\"primary\">\n      <mat-icon>add</mat-icon>&nbsp;\n      <ng-container>View More</ng-container>\n    </button>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/post-create/post-create.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/post-create/post-create.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <mat-toolbar [color]=\"pageNavbar.color\" [ngStyle]=\"pageNavbar?.styles\">\n  <ws-widget-btn-page-back [widgetData]=\"{ url: 'back' }\"></ws-widget-btn-page-back>\n  <span class=\"margin-left-xs\">Write a Post</span>\n</mat-toolbar> -->\n\n<mat-card class=\"editor-wrapper\">\n  <form>\n    <div>\n      <textarea matInput class=\"mat-typography title-textarea\" i18n-placeholder placeholder=\"Title\" required\n        minlength=\"10\" maxlength=\"80\" name=\"title\" [(ngModel)]=\"title\" autofocus #blogTitle=\"ngModel\"></textarea>\n      <span *ngIf=\"(blogTitle.dirty || blogTitle.touched) && blogTitle.invalid\" class=\"error-text mat-caption\" i18n>\n        *Title range: 10-80 characters\n      </span>\n    </div>\n\n    <div class=\"margin-top-m\">\n      <textarea matInput class=\"mat-typography abstract-textarea\" i18n-placeholder placeholder=\"Abstract\" required\n        minlength=\"10\" maxlength=\"150\" name=\"abstract\" [(ngModel)]=\"abstract\" autofocus\n        #blogAbstract=\"ngModel\"></textarea>\n      <span *ngIf=\"(blogAbstract.dirty || blogAbstract.touched) && blogAbstract.invalid\" class=\"error-text mat-caption\"\n        i18n>\n        *Abstract range: 10-150 characters\n      </span>\n    </div>\n\n    <mat-form-field class=\"width-1-1\">\n      <mat-chip-list #chipList>\n        <mat-chip *ngFor=\"let selectedTag of selectedTags\" [selectable]=\"true\" [removable]=\"true\"\n          (removed)=\"removeTag(selectedTag)\">\n          {{ selectedTag.name }}\n          <mat-icon matChipRemove>cancel</mat-icon>\n        </mat-chip>\n        <input i18n-placeholder placeholder=\"Relevant tags\" #tagsInput [formControl]=\"tagsCtrl\" [matAutocomplete]=\"auto\"\n          [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" />\n      </mat-chip-list>\n      <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selectTag($event, duplicate.value, invalidTag.value)\">\n        <mat-option *ngIf=\"fetchTagsStatus === 'fetching'\">...</mat-option>\n        <mat-option *ngIf=\"\n                (fetchTagsStatus === 'done' || fetchTagsStatus === 'error') &&\n                !autocompleteAllTags.length\n              \">\n          No tag found</mat-option>\n        <mat-option *ngFor=\"let filteredTag of autocompleteAllTags\" [value]=\"filteredTag\">\n          {{ filteredTag.name }}\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n    <ws-widget-editor-quill class=\"editor\" (textData)=\"onTextChange($event)\" [htmlText]=\"body\"></ws-widget-editor-quill>\n  </form>\n\n  <div class=\"flex flex-middle flex-center margin-top-m\">\n    <button *ngIf=\"editMode === 'update'\" class=\"margin-right-s\" (click)=\"update(saved.value, error.value)\"\n      [disabled]=\"isCreatingPost || !actionBtnsEnabled || blogTitle.invalid || blogAbstract.invalid\" mat-raised-button\n      color=\"primary\" i18n>\n      Save\n    </button>\n    <button *ngIf=\"(editMode === 'create' || editMode === 'draft') && !isCreatingPost\" class=\"margin-right-s\"\n      (click)=\"publishBlog(publish.value, error.value)\"\n      [disabled]=\"isCreatingPost || !actionBtnsEnabled || blogTitle.invalid || blogAbstract.invalid\" mat-raised-button\n      color=\"primary\" i18n=\"Post of Ask a Question\">\n      Publish\n    </button>\n    <div *ngIf=\"isCreatingPost\">\n      <mat-spinner></mat-spinner>\n    </div>\n  </div>\n</mat-card>\n\n<input type=\"hidden\" i18n-value value=\"Post updated successfully\" #saved />\n<input type=\"hidden\" i18n-value value=\"Post saved in the drafts\" #savedDraft />\n<input type=\"hidden\" i18n-value value=\"Created Post is under review.\" #publish />\n<input type=\"hidden\" i18n-value value=\"Unable to save. Please retry\" #error />\n<input type=\"hidden\" i18n-value value=\"Tag already added\" #duplicate />\n<input type=\"hidden\" i18n-value value=\"You can add tag from dropdown only\" #invalidTag />");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/post-view/post-view.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/post-view/post-view.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <mat-toolbar [color]=\"pageNavbar.color\" [ngStyle]=\"pageNavbar?.styles\">\n  <ws-widget-btn-page-back [widgetData]=\"{ url: 'back' }\"></ws-widget-btn-page-back>\n\n  <span i18n class=\"margin-left-xs\">Post</span>\n</mat-toolbar> -->\n\n<div #blogContainer class=\"blog-container\">\n  <ng-container *ngIf=\"conversation\">\n    <div class=\"flex flex-between\">\n      <h1 class=\"ws-mat-primary-text mat-display-1 margin-bottom-s\">\n        {{ conversation?.mainPost?.postContent?.title }}\n      </h1>\n      <button tabindex=\"0\" *ngIf=\"canUserEdit\" type=\"button\" mat-icon-button [matMenuTriggerFor]=\"editMenu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n    </div>\n    <mat-menu #editMenu=\"matMenu\">\n      <ng-template matMenuContent>\n        <a i18n-aria-label aria-label=\"Edit Post\"\n          [routerLink]=\"'/app/social/forums/post/edit/' + conversationRequest?.postId\" mat-menu-item i18n>Edit Post</a>\n        <button (click)=\"deleteBlog(deleteMsg.value)\" mat-menu-item i18n>Delete Post</button>\n      </ng-template>\n    </mat-menu>\n    <h2 class=\"margin-bottom-m\">{{ conversation?.mainPost?.postContent?.abstract }}</h2>\n\n\n    <!--   <div class=\"flex flex-between  margin-bottom-xl\">\n      <div class=\"mat-caption\">{{ conversation?.mainPost?.dtPublished | date }}</div>\n    </div> -->\n    <div class=\"post-content ql-editor\"\n      [innerHTML]=\"conversation?.mainPost?.postContent?.body | pipeSafeSanitizer: 'html'\"></div>\n    <mat-chip-list class=\"margin-top-m\">\n      <mat-chip *ngFor=\"let tag of conversation?.mainPost?.tags\">{{ tag.name }}</mat-chip>\n    </mat-chip-list>\n    <div class=\"flex flex-middle flex-between\">\n      <div class=\"flex flex-middle margin-bottom-xl\">\n        <div class=\"padding-left-s width-expand\">\n          <div class=\"flex flex-middle\">\n            <ws-widget-user-image [email]=\"conversation?.mainPost?.postCreator?.emailId\"></ws-widget-user-image>\n            <div class=\"padding-left-s width-expand\">\n              <span class=\"ws-mat-primary-text\">\n                {{ conversation?.mainPost?.postCreator?.name }}\n              </span>\n            </div>\n          </div>\n          <span class=\"mat-caption\"><span class=\"mat-caption\" i18n>Modified:\n            </span>{{ conversation?.mainPost?.dtLastModified | date }}</span>\n        </div>\n      </div>\n      <span class=\"margin-top-s flex flex-between\"\n        *ngIf=\"conversation?.mainPost?.activity && conversation?.mainPost?.status === 'Active'\">\n        <ws-widget-btn-social-like *ngIf=\"showSocialLike\" [postId]=\"conversationRequest?.postId\"\n          [postCreatorId]=\"conversation?.mainPost?.postCreator?.postCreatorId\"\n          [activity]=\"conversation?.mainPost?.activity\">\n        </ws-widget-btn-social-like>\n        <span>\n          <ws-widget-btn-social-vote [postId]=\"conversationRequest?.postId\"\n            [activity]=\"conversation?.mainPost?.activity\" [voteType]=\"'upVote'\"\n            [postCreatorId]=\"conversation?.mainPost?.postCreator?.postCreatorId\">\n          </ws-widget-btn-social-vote>\n          <ws-widget-btn-social-vote class=\"margin-left-s\" [postId]=\"conversationRequest?.postId\"\n            [activity]=\"conversation?.mainPost?.activity\" [voteType]=\"'downVote'\"\n            [postCreatorId]=\"conversation?.mainPost?.postCreator?.postCreatorId\"></ws-widget-btn-social-vote>\n        </span>\n      </span>\n    </div>\n\n    <mat-divider class=\"margin-top-xs margin-bottom-xs\"></mat-divider>\n    <ng-container *ngIf=\"conversation?.mainPost.status === 'Active'\">\n      <h3>\n        <strong>\n          <ng-container i18n> Comments </ng-container>\n          <ng-container *ngIf=\"conversation?.replyPost?.length\">\n            ({{ conversation?.replyPost.length + conversation?.postCount }})</ng-container>\n        </strong>\n      </h3>\n      <mat-accordion>\n        <mat-expansion-panel [expanded]=\"resetEditor\">\n          <mat-expansion-panel-header class=\"panel-header\" [collapsedHeight]=\"'72px'\">\n            <mat-panel-title>\n              <div class=\"flex flex-middle\">\n                <ws-widget-user-image [email]=\"userEmail\"></ws-widget-user-image>\n                <span class=\"padding-left-s\" i18n>Write a comment</span>\n              </div>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <ws-widget-editor-quill *ngIf=\"!resetEditor\" class=\"editor ql-editor\" [hidden]=\"postingReply\"\n            (textData)=\"onTextChange($event)\" [minLength]=\"'10'\"></ws-widget-editor-quill>\n          <div [hidden]=\"!postingReply\" [innerHTML]=\"commentText | pipeSafeSanitizer: 'html'\"></div>\n          <mat-spinner *ngIf=\"postingReply\"></mat-spinner>\n          <div class=\"pt-2 text-right\">\n            <button type=\"button\" *ngIf=\"!postingReply\" class=\"mat-primary\" (click)=\"publishReply(failMsg.value)\"\n              [disabled]=\"!replyEnabled || postingReply\" mat-raised-button i18n>\n              Publish\n            </button>\n          </div>\n        </mat-expansion-panel>\n      </mat-accordion>\n      <ws-app-blog-reply [reply]=\"reply\" (deleteSuccess)=\"onDeleteReply(i)\"\n        *ngFor=\"let reply of conversation?.replyPost; let i = index\">\n      </ws-app-blog-reply>\n    </ng-container>\n  </ng-container>\n  <div *ngIf=\"fetchStatus === 'fetching'\" class=\"text-center margin-top-s\">\n    <mat-spinner></mat-spinner>\n  </div>\n  <div class=\"text-center margin-top-s\" *ngIf=\"conversation?.postCount > 0\">\n    <button mat-stroked-button [color]=\"'primary'\" [disabled]=\"fetchStatus === 'fetching'\" class=\"width-1-1\"\n      type=\"button\" i18n (click)=\"fetchConversationData()\">\n      Show More Comments\n    </button>\n  </div>\n</div>\n\n<div class=\"new-replies-chip\" [hidden]=\"!conversation?.newPostCount || conversation?.newPostCount <= 0\">\n  <mat-chip-list>\n    <mat-chip (click)=\"fetchConversationData(true)\" color=\"primary\" selected>\n      <div class=\"cursor-pointer\">New replies available ({{ conversation?.newPostCount }})</div>\n    </mat-chip>\n  </mat-chip-list>\n</div>\n\n<h2 *ngIf=\"fetchStatus === 'none'\" class=\"text-center margin-top-m\" i18n>\n  Post may be in draft state or unavailable.\n</h2>\n\n<input type=\"hidden\" i8n-value value=\"Successfully deleted\" #deleteMsg />\n<input type=\"hidden\" i8n-value value=\"Something went wrong! Unable to post.\" #failMsg />");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/recent-forum-post/components/recent-forum-post.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/recent-forum-post/components/recent-forum-post.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-5/5 \">\n  <div style=\"padding-bottom: 0.5rem;margin-bottom:1%\" *ngFor=\"let result of timelineData?.result\">\n    <ws-app-forum-card [post]=result></ws-app-forum-card>\n  </div>\n  <!-- <div\n      class=\" h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center\n                overflow-hidden\" style=\"background-image: url('https://tailwindcss.com/img/card-left.jpg')\"\n                title=\"Woman holding a mug\">\n            </div> -->\n  <!-- pre-existing components-->\n  <h2 class=\"text-center margin-top-m\" i18n *ngIf=\"timelineFetchStatus === 'none'\">\n    There are no forum posts present\n  </h2>\n  <div *ngIf=\"timelineFetchStatus === 'fetching'\" class=\"text-center margin-top-s\">\n    <mat-spinner></mat-spinner>\n  </div>\n  <div *ngIf=\"timelineFetchStatus === 'hasMore'\" class=\"text-center\">\n    <button (click)=\"fetchTimelineData('subsequentCall')\" type=\"button\" mat-raised-button color=\"primary\">\n      <mat-icon>add</mat-icon>&nbsp;\n      <ng-container>View More</ng-container>\n    </button>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin-accept/dialog-box-admin-accept.component.html":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin-accept/dialog-box-admin-accept.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol>\n  <label id=\"example-radio-group-label\">Are you sure you want to accepth this post?</label>\n\n\n\n  <!-- <input matInput style=\"height: 100px;\" type=\"text\" [(ngModel)]=\"reasonOfRevival\"> -->\n\n\n\n  <div mat-dialog-actions>\n    <button mat-flat-button mat-dialog-close color=\"primary\" style=\"margin-right: 10%;\" [mat-dialog-close]=\"true\" i18n>\n      Confirm\n    </button>\n    <button mat-flat-button mat-dialog-close color=\"warn\" class=\"margin-right-xs\" i18n>Discard</button>\n  </div>\n</ol>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin/dialog-box-admin.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin/dialog-box-admin.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol>\n  <label id=\"example-radio-group-label\">Enter the reason for revivng the post</label>\n\n  <br>\n  <textarea [(ngModel)]=\"reasonOfRevival\"></textarea>\n  <!-- <input matInput style=\"height: 100px;\" type=\"text\" [(ngModel)]=\"reasonOfRevival\"> -->\n\n\n\n  <div mat-dialog-actions>\n    <button mat-flat-button mat-dialog-close color=\"primary\" style=\"margin-right: 10%;\"\n      [mat-dialog-close]=\"reasonOfRevival\" i18n>\n      Confirm\n    </button>\n    <button mat-flat-button mat-dialog-close color=\"warn\" class=\"margin-right-xs\" i18n>Discard</button>\n  </div>\n</ol>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-admin/btn-admin.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-admin/btn-admin.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container [ngSwitch]=\"type\">\n\n\n  <button mat-fab *ngSwitchCase=\"'REJECT'\" aria-label=\"Rejected\" i18n-aria-label matTooltip=\"Reject\"\n    i18n-matTooltip=\"Reject Button\" (click)=\"reject()\" style=\"background-color: chocolate;\">\n    <mat-icon>clear</mat-icon>\n  </button>\n  <button mat-fab *ngSwitchCase=\"'ACCEPT'\" aria-label=\"Accepted\" i18n-aria-label matTooltip=\"Accept\"\n    i18n-matTooltip=\"Accept Button\" style=\"background-color: cadetblue;\" (click)=\"openAdminReviveDialog()\">\n    <mat-icon>done_outline</mat-icon>\n  </button>\n  <button mat-fab *ngSwitchCase=\"'FLAGGEDACCEPT'\" aria-label=\"Accepted\" i18n-aria-label matTooltip=\"Accept\"\n    i18n-matTooltip=\"Accept Button\" (click)=\"openAdminAcceptDialog()\" style=\"background-color: cadetblue;\">\n    <mat-icon>done_outline</mat-icon>\n  </button>\n\n  <button mat-icon-button matTooltip=\"Please wait\" i18n-matTooltip=\"Like Button Wait\" *ngSwitchCase=\"'PENDING'\">\n    <mat-icon [color]=\"color\">hourglass_empty</mat-icon>\n  </button>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-moderator/btn-moderator.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-moderator/btn-moderator.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container [ngSwitch]=\"type\">\n  <button\n    mat-raised-button\n    *ngSwitchCase=\"'REJECT'\"\n    aria-label=\"Rejected\"\n    i18n-aria-label\n    matTooltip=\"Reject\"\n    i18n-matTooltip=\"Reject Button\"\n    (click)=\"reject()\"\n  >\n    Reject\n  </button>\n  <button\n    mat-raised-button\n    *ngSwitchCase=\"'ACCEPT'\"\n    aria-label=\"Accepted\"\n    i18n-aria-label\n    matTooltip=\"Accept\"\n    i18n-matTooltip=\"Accept Button\"\n    class=\"mat-primary\"\n    (click)=\"accept()\"\n  >\n    Accept\n  </button>\n  <button\n    mat-icon-button\n    matTooltip=\"Please wait\"\n    i18n-matTooltip=\"Like Button Wait\"\n    *ngSwitchCase=\"'PENDING'\"\n  >\n    <mat-icon [color]=\"color\">hourglass_empty</mat-icon>\n  </button>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/widgets/filter-display/filter-dispaly.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/widgets/filter-display/filter-dispaly.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex flex-between flex-middle\">\n  <h2 class=\"mat-h2 margin-remove padding-left-m\" i18n>Filters</h2>\n  <span class=\"spacer\"></span>\n  <button [hidden]=\"!filtersResetAble\" (click)=\"removeFilters()\" type=\"button\" mat-icon-button>\n    <mat-icon>restore</mat-icon>\n  </button>\n  <button mat-icon-button (click)=\"filterClose.emit(!sideNavBarOpened)\" aria-label=\"icon-button with close icon\">\n    <mat-icon>close</mat-icon>\n  </button>\n</div>\n\n<mat-accordion multi=\"true\" *ngIf=\"filtersResponse\">\n  <mat-expansion-panel class=\"ws-mat-primary-border ws-mat-primary-text\" [expanded]=\"filter.checked\"\n    *ngFor=\"let filter of filtersResponse; trackBy: filterUnitResponseTrackBy\">\n    <mat-expansion-panel-header class=\"\">\n      {{ translatedFilters[filter.displayName]?.translatedField || filter.displayName }}\n    </mat-expansion-panel-header>\n    <ng-container *ngTemplateOutlet=\"\n        filtersHolder;\n        context: {\n          $implicit: { filters: filter.content, filterType: filter.type, parentFilter: filter.displayName }\n        }\n      \" class=\"\"></ng-container>\n  </mat-expansion-panel>\n</mat-accordion>\n\n<ng-template #filtersHolder let-unitFiltersCollection>\n  <ul class=\"\">\n    <li *ngFor=\"let unitFilter of unitFiltersCollection.filters; trackBy: filterUnitTrackBy\">\n\n      <div class=\"flex flex-middle \">\n        <button (click)=\"unitFilter.isExpanded = !unitFilter.isExpanded\" mat-icon-button type=\"button\"\n          *ngIf=\"unitFilter?.children?.length\">\n          <mat-icon *ngIf=\"!unitFilter.isExpanded\">chevron_right</mat-icon>\n          <mat-icon *ngIf=\"unitFilter.isExpanded\">expand_less</mat-icon>\n        </button>\n        <button mat-icon-button type=\"button\"\n          *ngIf=\"!unitFilter?.children?.length && unitFiltersCollection.filterType==='catalogPaths'\">\n          <mat-icon>remove</mat-icon>\n\n        </button>\n        <ng-container *ngTemplateOutlet=\"\n            unitFilterHolder;\n            context: {\n              $implicit: {\n                unitFilter: unitFilter,\n                filterType: unitFiltersCollection.filterType,\n                parentFilter: unitFiltersCollection.parentFilter\n              }\n            }\n          \"></ng-container>\n      </div>\n      <ul class=\"nested-filters\" *ngIf=\"unitFilter?.children?.length\" [hidden]=\"!unitFilter.isExpanded\">\n        <li *ngFor=\"let childFilter of unitFilter?.children; trackBy: filterUnitTrackBy\" class=\"flex \">\n          <ng-container *ngTemplateOutlet=\"\n              unitFilterHolder;\n              context: {\n                $implicit: {\n                  unitFilter: childFilter,\n                  filterType: unitFiltersCollection.filterType\n                }\n              }\n            \"></ng-container>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</ng-template>\n<ng-template #unitFilterHolder let-unitFilterObject>\n  <mat-checkbox (change)=\"applyFilters(unitFilterObject)\"\n    [checked]=\"unitFilterObject.unitFilter.checked && unitFilterObject.filterType.length\"\n    class=\"width-expand fit-checkbox-to-width \">\n    <span class=\"flex\">\n      <span class=\"width-expand text-truncate \">{{ translatedFilters[unitFilterObject.parentFilter]?.value[unitFilterObject.unitFilter.displayName] || unitFilterObject.unitFilter.displayName\n        }}\n      </span>\n    </span>\n  </mat-checkbox>\n  <span class=\"width-auto padding-left-s \"\n    *ngIf=\"unitFilterObject.unitFilter.count\">{{ unitFilterObject.unitFilter.count }}\n  </span>\n</ng-template>");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/resolvers/edit-forum.service.ts":
/*!******************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/resolvers/edit-forum.service.ts ***!
  \******************************************************************************/
/*! exports provided: EditForumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditForumService", function() { return EditForumService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _routes_forums_service_forum_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes/forums/service/forum.service */ "./project/ws/app/src/lib/routes/social/routes/forums/service/forum.service.ts");





let EditForumService = class EditForumService {
    constructor(forumSvc) {
        this.forumSvc = forumSvc;
    }
    resolve(route, _state) {
        const contentId = route.paramMap.get('id');
        if (contentId) {
            return this.forumSvc.fetchForumById(contentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => ({ data, error: null })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ error, data: null })));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ error: 'NO_ID', data: null });
    }
};
EditForumService.ctorParameters = () => [
    { type: _routes_forums_service_forum_service__WEBPACK_IMPORTED_MODULE_4__["ForumService"] }
];
EditForumService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], EditForumService);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/resolvers/moderator-timeline.service.ts":
/*!**************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/resolvers/moderator-timeline.service.ts ***!
  \**************************************************************************************/
/*! exports provided: ModeratorTimelineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratorTimelineService", function() { return ModeratorTimelineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _routes_forums_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes/forums/models/SocialForumposts.model */ "./project/ws/app/src/lib/routes/social/routes/forums/models/SocialForumposts.model.ts");
/* harmony import */ var _routes_forums_service_forum_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes/forums/service/forum.service */ "./project/ws/app/src/lib/routes/social/routes/forums/service/forum.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ModeratorTimelineService = class ModeratorTimelineService {
    constructor(forumSvc) {
        this.forumSvc = forumSvc;
        this.moderatorTimelineRequest = {
            pgNo: 0,
            pgSize: 20,
            postKind: [_routes_forums_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__["SocialForum"].EPostKind.BLOG],
            sessionId: Date.now(),
            type: _routes_forums_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__["SocialForum"].ETimelineType.MODERATOR_TIMELINE,
            source: {
                id: [],
                name: _routes_forums_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__["SocialForum"].EDiscussionType.SOCIAL,
            },
        };
    }
    resolve() {
        return this.forumSvc.fetchModeratorTimelineData(this.moderatorTimelineRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => ({ data, error: null })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ error, data: null })));
    }
};
ModeratorTimelineService.ctorParameters = () => [
    { type: _routes_forums_service_forum_service__WEBPACK_IMPORTED_MODULE_4__["ForumService"] }
];
ModeratorTimelineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ModeratorTimelineService);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/resolvers/view-forum.service.ts":
/*!******************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/resolvers/view-forum.service.ts ***!
  \******************************************************************************/
/*! exports provided: ViewForumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewForumService", function() { return ViewForumService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _routes_forums_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes/forums/models/SocialForumposts.model */ "./project/ws/app/src/lib/routes/social/routes/forums/models/SocialForumposts.model.ts");
/* harmony import */ var _routes_forums_service_forum_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes/forums/service/forum.service */ "./project/ws/app/src/lib/routes/social/routes/forums/service/forum.service.ts");





let ViewForumService = class ViewForumService {
    constructor(forumSvc) {
        this.forumSvc = forumSvc;
        this.forumViewRequest = {
            sessionId: Date.now(),
            forumKind: _routes_forums_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__["SocialForum"].EForumKind.FORUM,
            pgNo: 0, pgSize: 20,
            type: _routes_forums_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__["SocialForum"].EForumViewType.ACTIVEALL,
        };
    }
    resolve(_route, _state) {
        return this.forumSvc.getForumsDetails(this.forumViewRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
};
ViewForumService.ctorParameters = () => [
    { type: _routes_forums_service_forum_service__WEBPACK_IMPORTED_MODULE_4__["ForumService"] }
];
ViewForumService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ViewForumService);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-admin/admin-timeline.module.ts":
/*!*************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-admin/admin-timeline.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: AdminTimelineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTimelineModule", function() { return AdminTimelineModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _library_ws_widget_collection_src_public_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../../../library/ws-widget/collection/src/public-api */ "./library/ws-widget/collection/src/public-api.ts");
/* harmony import */ var _widgets_buttons_btn_admin_btn_admin_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/buttons/btn-admin/btn-admin.module */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-admin/btn-admin.module.ts");
/* harmony import */ var _widgets_buttons_btn_moderator_btn_moderator_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/buttons/btn-moderator/btn-moderator.module */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-moderator/btn-moderator.module.ts");
/* harmony import */ var _widgets_Dialog_Box_dialog_box_admin_accept_dialog_box_admin_accept_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/Dialog-Box/dialog-box-admin-accept/dialog-box-admin-accept.component */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin-accept/dialog-box-admin-accept.component.ts");
/* harmony import */ var _widgets_Dialog_Box_dialog_box_admin_accept_dialog_box_admin_accept_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../widgets/Dialog-Box/dialog-box-admin-accept/dialog-box-admin-accept.module */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin-accept/dialog-box-admin-accept.module.ts");
/* harmony import */ var _widgets_Dialog_Box_dialog_box_moderator_dialog_box_moderator_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../widgets/Dialog-Box/dialog-box-moderator/dialog-box-moderator.module */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-moderator/dialog-box-moderator.module.ts");
/* harmony import */ var _components_admin_timeline_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin-timeline.component */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-admin/components/admin-timeline.component.ts");













let AdminTimelineModule = class AdminTimelineModule {
};
AdminTimelineModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_admin_timeline_component__WEBPACK_IMPORTED_MODULE_12__["AdminTimelineComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _library_ws_widget_collection_src_public_api__WEBPACK_IMPORTED_MODULE_6__["BtnSocialLikeModule"],
            _widgets_buttons_btn_admin_btn_admin_module__WEBPACK_IMPORTED_MODULE_7__["BtnAdminModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _library_ws_widget_collection_src_public_api__WEBPACK_IMPORTED_MODULE_6__["BtnPageBackModule"],
            _library_ws_widget_collection_src_public_api__WEBPACK_IMPORTED_MODULE_6__["BtnPageBackModule"],
            _library_ws_widget_collection_src_public_api__WEBPACK_IMPORTED_MODULE_6__["BtnSocialVoteModule"],
            _library_ws_widget_collection_src_public_api__WEBPACK_IMPORTED_MODULE_6__["BtnSocialLikeModule"],
            _widgets_Dialog_Box_dialog_box_moderator_dialog_box_moderator_module__WEBPACK_IMPORTED_MODULE_11__["DialogBoxModeratorModule"],
            _widgets_Dialog_Box_dialog_box_admin_accept_dialog_box_admin_accept_module__WEBPACK_IMPORTED_MODULE_10__["DialogBoxAdminAcceptModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _widgets_buttons_btn_moderator_btn_moderator_module__WEBPACK_IMPORTED_MODULE_8__["BtnModeratorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
        ],
        entryComponents: [_widgets_Dialog_Box_dialog_box_admin_accept_dialog_box_admin_accept_component__WEBPACK_IMPORTED_MODULE_9__["DialogBoxAdminAcceptComponent"]],
        exports: [_components_admin_timeline_component__WEBPACK_IMPORTED_MODULE_12__["AdminTimelineComponent"]],
    })
], AdminTimelineModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-admin/components/admin-timeline.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-admin/components/admin-timeline.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-stretched-tabs {\n  max-width: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL2ZvcnVtcy9mb3J1bS1hZG1pbi9jb21wb25lbnRzL2FkbWluLXRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvc29jaWFsL3JvdXRlcy9mb3J1bXMvZm9ydW0tYWRtaW4vY29tcG9uZW50cy9hZG1pbi10aW1lbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvc29jaWFsL3JvdXRlcy9mb3J1bXMvZm9ydW0tYWRtaW4vY29tcG9uZW50cy9hZG1pbi10aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXN0cmV0Y2hlZC10YWJzIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbn1cbiIsIi5leGFtcGxlLXN0cmV0Y2hlZC10YWJzIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-admin/components/admin-timeline.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-admin/components/admin-timeline.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AdminTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTimelineComponent", function() { return AdminTimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _library_ws_widget_utils_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../../library/ws-widget/utils/src/public-api */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/SocialForumposts.model */ "./project/ws/app/src/lib/routes/social/routes/forums/models/SocialForumposts.model.ts");
/* harmony import */ var _service_EmitterService_forum_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/EmitterService/forum-handler.service */ "./project/ws/app/src/lib/routes/social/routes/forums/service/EmitterService/forum-handler.service.ts");
/* harmony import */ var _service_forum_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/forum.service */ "./project/ws/app/src/lib/routes/social/routes/forums/service/forum.service.ts");






let AdminTimelineComponent = class AdminTimelineComponent {
    constructor(_eventEmiter, forumSvc, configSvc, valueSvc) {
        this._eventEmiter = _eventEmiter;
        this.forumSvc = forumSvc;
        this.configSvc = configSvc;
        this.valueSvc = valueSvc;
        this.adminFlaggedTimelineReq = {
            pgNo: -1,
            pgSize: 20,
            postKind: [],
            sessionId: Date.now(),
            type: _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__["SocialForum"].ETimelineType.ADMIN_TIMELINE,
        };
        this.adminDeletedTimelineReq = {
            pgNo: -1,
            pgSize: 20,
            postKind: [],
            sessionId: Date.now(),
            type: _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__["SocialForum"].ETimelineType.ADMIN_DELETED_TIMELINE,
        };
        this.adminTimelineFlaggedResponse = {
            hits: 0,
            result: [],
        };
        this.adminTimelineDeletedResponse = {
            hits: 0,
            result: [],
        };
        this.pageNavbar = this.configSvc.pageNavBar;
        this.timelineFetchStatus = 'none';
        this.postIdUpdate = '';
        this.postStatus = '';
        this.activeTab = 'FLaggedTab';
        this.postIdToBeRemoved = '';
        this.isXSmall$ = this.valueSvc.isXSmall$;
        // if (this.configSvc.userProfile) {
        //   this.moderatorTimelineRequest.userId = this.configSvc.userProfile.userId || ''
        // }
        // console.log('Moderator timeline postcomop loaded')
        this._eventEmiter.sendFilterStatus(false);
        this._eventEmiter.sendStatusOfPredefinedFilter(false);
    }
    ngOnInit() {
        this._eventEmiter.setActiveComponent('AdminTimelineComponent');
        // this.activeTab = "FLaggedTab"
        this.timelineFetchStatus = 'fetching';
        this._eventEmiter.predefinedAdminFilterSelected.subscribe(data => {
            this.adminFlaggedTimelineReq.pgNo = -1;
            this.adminDeletedTimelineReq.pgNo = -1;
            this.timelineFetchStatus = 'fetching';
            this.adminFlaggedTimelineReq.postKind = [_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__["SocialForum"].EPostKind.FORUM];
            //  console.log('====*/*/*/*ADMIN TS/*/*/*//*/*/==')
            // console.log('The data revcd from service class is' + data)
            if (data !== this.adminFlaggedTimelineReq.postKind) {
                this.adminFlaggedTimelineReq.postKind = [...[], ...data];
            }
            if (data !== this.adminDeletedTimelineReq.postKind) {
                this.adminDeletedTimelineReq.postKind = [...[], ...data];
            }
            //  console.log('The value of req postkind is' + this.AdminFlaggedTimelineReq.postKind)
            if (this.activeTab === 'FLaggedTab') {
                this.fetchTimelineData();
            }
            else {
                this.getAdminDeletedPosts();
            }
        });
        this.adminFlaggedTimelineReq.pgNo = -1;
        this.adminDeletedTimelineReq.pgNo = -1;
        // this.AdminDeletedTimelineReq.postKind = [SocialForum.EPostKind.FORUM]
        if (this.activeTab === 'FLaggedTab') {
            this.fetchTimelineData();
        }
        else if (this.activeTab === 'DeletedTab') {
            this.getAdminDeletedPosts();
        }
    }
    tabClick(tab) {
        if (tab.index === 1) {
            this.activeTab = 'DeletedTab';
            // this.getAdminDeletedPosts()
        }
        else {
            this.activeTab = 'FLaggedTab';
            // this.fetchTimelineData()
        }
        this.ngOnInit();
    }
    getAdminDeletedPosts() {
        //   console.log('The deleted posts are successfully called')
        if (this.timelineFetchStatus === 'done') {
            return;
        }
        this.timelineFetchStatus = 'fetching';
        this.adminDeletedTimelineReq.pgNo += 1;
        // console.log('THE FILTERS00000000000000000000  is' + this.filtersRecFromRoute)
        // this.moderatorTimelineRequest.source.id = ["fce535c0-642c-11ea-b61d-2966651fe75e"]
        this.forumSvc.fetchAdminTimelineData(this.adminDeletedTimelineReq).subscribe(data => {
            // this.timelineData.filters = [...[], ...data.filters]
            if (data.hits && data.result) {
                // console.log('DATA: ', data.filters)
                this.adminTimelineDeletedResponse.hits = data.hits;
                this.adminTimelineDeletedResponse.result = [...[], ...data.result];
                // this.timelineData.filters = data.filters
                // console.log('In Moderator timeline THE FILTER RECEIVED IS' + JSON.stringify(this.timelineData.filters))
                // this.AdminTimelineFlaggedResponse.result.forEach(post => {
                //   if (post.id === this.posttoBeHidden) {
                //     post.hidden = true
                //   } else {
                //     post.hidden = false
                //   }
                // })
                // handling filter starts
                // handling filter ends
                //   this._eventEmiter.sendMessage(this.timelineData.filters)
                //  console.log('Filters from moderator are' + JSON.stringify(this.timelineData.filters))
                if (data.hits > this.adminTimelineDeletedResponse.result.length) {
                    this.timelineFetchStatus = 'hasMore';
                }
                else {
                    this.timelineFetchStatus = 'done';
                }
            }
            else {
                this.adminTimelineDeletedResponse.result = [];
                //    this._eventEmiter.sendMessage(this.timelineData.filters)
                this.timelineFetchStatus = 'none';
            }
        }, () => {
            this.timelineFetchStatus = 'error';
        });
    }
    receiveMessage($event) {
        this.postIdToBeRemoved = $event;
        //   console.log('The POst received from child tio be removed is' + this.postIdToBeRemoved)
        this.adminTimelineFlaggedResponse.result.forEach(post => {
            if (post.id === this.postIdToBeRemoved) {
                post.hidden = true;
            }
        });
    }
    updateDletedPost(event) {
        this.adminTimelineDeletedResponse.result.forEach(post => {
            if (post.id === event) {
                post.hidden = true;
            }
        });
    }
    fetchTimelineData() {
        //  console.log('The FETCH TIMELINE IS CALLED')
        if (this.timelineFetchStatus === 'done') {
            return;
        }
        this.timelineFetchStatus = 'fetching';
        this.adminFlaggedTimelineReq.pgNo += 1;
        // console.log('THE FILTERS00000000000000000000  is' + this.filtersRecFromRoute)
        // this.moderatorTimelineRequest.source.id = ["fce535c0-642c-11ea-b61d-2966651fe75e"]
        this.forumSvc.fetchAdminTimelineData(this.adminFlaggedTimelineReq).subscribe(data => {
            // this.timelineData.filters = [...[], ...data.filters]
            if (data.hits && data.result) {
                // console.log('DATA: ', data.filters)
                this.adminTimelineFlaggedResponse.hits = data.hits;
                this.adminTimelineFlaggedResponse.result = [...[], ...data.result];
                // this.timelineData.filters = data.filters
                // console.log('In Moderator timeline THE FILTER RECEIVED IS' + JSON.stringify(this.timelineData.filters))
                // this.AdminTimelineFlaggedResponse.result.forEach(post => {
                //   if (post.id === this.posttoBeHidden) {
                //     post.hidden = true
                //   } else {
                //     post.hidden = false
                //   }
                // })
                // handling filter starts
                // handling filter ends
                //   this._eventEmiter.sendMessage(this.timelineData.filters)
                //  console.log('Filters from moderator are' + JSON.stringify(this.timelineData.filters))
                if (data.hits > this.adminTimelineFlaggedResponse.result.length) {
                    this.timelineFetchStatus = 'hasMore';
                }
                else {
                    this.timelineFetchStatus = 'done';
                }
            }
            else {
                this.adminTimelineFlaggedResponse.result = [];
                //    this._eventEmiter.sendMessage(this.timelineData.filters)
                this.timelineFetchStatus = 'none';
            }
        }, () => {
            this.timelineFetchStatus = 'error';
        });
    }
};
AdminTimelineComponent.ctorParameters = () => [
    { type: _service_EmitterService_forum_handler_service__WEBPACK_IMPORTED_MODULE_4__["ForumHandlerService"] },
    { type: _service_forum_service__WEBPACK_IMPORTED_MODULE_5__["ForumService"] },
    { type: _library_ws_widget_utils_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ConfigurationsService"] },
    { type: _library_ws_widget_utils_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ValueService"] }
];
AdminTimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-admin-timeline',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-timeline.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-admin/components/admin-timeline.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-timeline.component.scss */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-admin/components/admin-timeline.component.scss")).default]
    })
], AdminTimelineComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-card/forum-card.component.scss":
/*!*************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-card/forum-card.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blog-container {\n  display: flex;\n  align-items: center;\n  margin-top: 8px;\n}\n@media only screen and (max-width: 599px) {\n  .blog-container {\n    padding: 8px;\n  }\n}\n.blog-container .text-overwrap {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.blog-container .text-abstract-trim {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: justify;\n}\n.blog-container .icon-section {\n  width: 10%;\n  text-align: center;\n}\n@media only screen and (max-width: 599px) {\n  .blog-container .icon-section {\n    width: 15%;\n  }\n}\n.blog-container .icon-section .vote-count {\n  width: 40px;\n  height: 40px;\n  font-size: 24px;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.grey-icons {\n  color: #a9a9a9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL2ZvcnVtcy9mb3J1bS1jYXJkL2ZvcnVtLWNhcmQuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL2ZvcnVtcy9mb3J1bS1jYXJkL2ZvcnVtLWNhcmQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvc3R5bGVzL193cy1taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNGRjtBQ2VFO0VGaEJGO0lBS00sWUFBQTtFQ0FKO0FBQ0Y7QURFQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0FKO0FER0U7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNESjtBREdFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FDREo7QUNKRTtFRkdBO0lBS0ksVUFBQTtFQ0FKO0FBQ0Y7QURFSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0FOO0FESUE7RUFDRSxjQUFBO0FDREYiLCJmaWxlIjoicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvc29jaWFsL3JvdXRlcy9mb3J1bXMvZm9ydW0tY2FyZC9mb3J1bS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy1jb21tb24uc2Nzcyc7XG4vL0BpbXBvcnQgJ3N0eWxlcy9fd3MtdmFycy5zY3NzJztcblxuLmJsb2ctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICB9XG5cbi50ZXh0LW92ZXJ3cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cblxuICAudGV4dC1hYnN0cmFjdC10cmltIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cbiAgLmljb24tc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgICAgIHdpZHRoOiAxNSU7XG4gICAgfVxuXG4gICAgLnZvdGUtY291bnQge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuLmdyZXktaWNvbnMge1xuICBjb2xvcjogI2E5YTlhOTtcbn1cbiIsIi5ibG9nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLmJsb2ctY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gIH1cbn1cbi5ibG9nLWNvbnRhaW5lciAudGV4dC1vdmVyd3JhcCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmJsb2ctY29udGFpbmVyIC50ZXh0LWFic3RyYWN0LXRyaW0ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5ibG9nLWNvbnRhaW5lciAuaWNvbi1zZWN0aW9uIHtcbiAgd2lkdGg6IDEwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAuYmxvZy1jb250YWluZXIgLmljb24tc2VjdGlvbiB7XG4gICAgd2lkdGg6IDE1JTtcbiAgfVxufVxuLmJsb2ctY29udGFpbmVyIC5pY29uLXNlY3Rpb24gLnZvdGUtY291bnQge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ncmV5LWljb25zIHtcbiAgY29sb3I6ICNhOWE5YTk7XG59IiwiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuXG5AbWl4aW4gcmV0aW5hIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gICAgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gcHJpbnQge1xuICBAbWVkaWEgb25seSBwcmludCB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGJyZWFrcG9pbnQteHMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LXMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LXhsIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDAwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQtbSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQtbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LXhsIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QteHMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LXMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-card/forum-card.component.ts":
/*!***********************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-card/forum-card.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ForumCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumCardComponent", function() { return ForumCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");



let ForumCardComponent = class ForumCardComponent {
    constructor(configSvc) {
        this.configSvc = configSvc;
        this.post = null;
        this.partOfRequired = true;
        this.showSocialLike = false;
    }
    ngOnInit() {
        this.showSocialLike = (this.configSvc.restrictedFeatures && !this.configSvc.restrictedFeatures.has('socialLike')) || false;
    }
};
ForumCardComponent.ctorParameters = () => [
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_2__["ConfigurationsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ForumCardComponent.prototype, "post", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ForumCardComponent.prototype, "partOfRequired", void 0);
ForumCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-forum-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forum-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-card/forum-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forum-card.component.scss */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-card/forum-card.component.scss")).default]
    })
], ForumCardComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-card/forum-card.module.ts":
/*!********************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-card/forum-card.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ForumCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumCardModule", function() { return ForumCardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _library_ws_widget_collection_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../../../library/ws-widget/collection/src/public-api */ "./library/ws-widget/collection/src/public-api.ts");
/* harmony import */ var _forum_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forum-card.component */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-card/forum-card.component.ts");
/* harmony import */ var _widgets_buttons_btn_flag_btn_flag_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/buttons/btn-flag/btn-flag.module */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-flag/btn-flag.module.ts");
/* harmony import */ var _widgets_buttons_btn_flag_btn_flag_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/buttons/btn-flag/btn-flag.component */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-flag/btn-flag.component.ts");









let ForumCardModule = class ForumCardModule {
};
ForumCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_forum_card_component__WEBPACK_IMPORTED_MODULE_6__["ForumCardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _library_ws_widget_collection_src_public_api__WEBPACK_IMPORTED_MODULE_5__["BtnSocialVoteModule"],
            _library_ws_widget_collection_src_public_api__WEBPACK_IMPORTED_MODULE_5__["BtnSocialLikeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
            _widgets_buttons_btn_flag_btn_flag_module__WEBPACK_IMPORTED_MODULE_7__["BtnFlagModule"],
        ],
        exports: [_forum_card_component__WEBPACK_IMPORTED_MODULE_6__["ForumCardComponent"]],
        providers: [_widgets_buttons_btn_flag_btn_flag_component__WEBPACK_IMPORTED_MODULE_8__["BtnFlagComponent"]],
    })
], ForumCardModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-edit/forum-edit.component.scss":
/*!*************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-edit/forum-edit.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".editor-wrapper {\n  max-width: 700px;\n  margin: auto;\n  padding: 16px;\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.title-textarea {\n  width: 100%;\n  border-bottom: 1px solid;\n  border-radius: 5px;\n  outline: none;\n  font-size: 2rem;\n  resize: none;\n  line-height: 1.3;\n  padding-left: 0.5rem;\n}\n\n.abstract-textarea {\n  width: 100%;\n  border-bottom: 1px solid;\n  border-radius: 5px;\n  outline: none;\n  font-size: 1.2rem;\n  resize: none;\n  line-height: 1.2;\n  padding-left: 0.5rem;\n}\n\n.editor {\n  display: block;\n  min-height: 178px;\n  margin-top: 16px;\n}\n\n.error-text {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL2ZvcnVtcy9mb3J1bS1lZGl0L2ZvcnVtLWVkaXQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvc3R5bGVzL193cy12YXJzLnNjc3MiLCJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL2ZvcnVtcy9mb3J1bS1lZGl0L2ZvcnVtLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQ0tPO0VESlAsZ0JBQUE7RUFDQSxtQkFBQTtBRUZGOztBRktBO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FFRkY7O0FGS0E7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FFRkY7O0FGS0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkN6Qk87QUN1QlQ7O0FGS0E7RUFDRSxVQUFBO0FFRkYiLCJmaWxlIjoicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvc29jaWFsL3JvdXRlcy9mb3J1bXMvZm9ydW0tZWRpdC9mb3J1bS1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy1jb21tb24uc2Nzcyc7XG5AaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5cbi5lZGl0b3Itd3JhcHBlciB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogJHNpemUtbTtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnRpdGxlLXRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDJyZW07XG4gIHJlc2l6ZTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG59XG5cbi5hYnN0cmFjdC10ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHJlc2l6ZTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG59XG5cbi5lZGl0b3Ige1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLWhlaWdodDogMTc4cHg7XG4gIG1hcmdpbi10b3A6ICRzaXplLW07XG59XG5cbi5lcnJvci10ZXh0IHtcbiAgY29sb3I6IHJlZDtcbn1cbiIsIiRmb250LWZhbWlseS1zYW5zOiAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLFxuICAnTm90byBTYW5zJywgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsXG4gICdOb3RvIENvbG9yIEVtb2ppJztcbiRmb250LWZhbWlseS1zZXJpZjogR2VvcmdpYSwgQ2FtYnJpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiRmb250LWZhbWlseS1tb25vOiBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0xpYmVyYXRpb24gTW9ubycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiRmb250LWZhbWlseS1vcGVuLXNhbnM6ICdPcGVuIFNhbnMnO1xuJGZvbnQtZmFtaWx5LW9wZW4tcG9wcGluczogJ1JvYm90byc7XG5cblxuJHNpemUteHM6IDhweDtcbiRzaXplLXM6IDEycHg7XG4kc2l6ZS1tOiAxNnB4O1xuJHNpemUtbDogMjRweDtcbiRzaXplLXhsOiAzMnB4O1xuJHNpemUtbGc6IDI4cHg7XG4kc2l6ZS14eGw6IDQwcHg7XG5cbiRtYXQtdG9vbGJhci14czogNTJweDtcbiRtYXQtdG9vbGJhci1ndC14czogNTZweDtcbiIsIi5lZGl0b3Itd3JhcHBlciB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnRpdGxlLXRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDJyZW07XG4gIHJlc2l6ZTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG59XG5cbi5hYnN0cmFjdC10ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHJlc2l6ZTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG59XG5cbi5lZGl0b3Ige1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLWhlaWdodDogMTc4cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5lcnJvci10ZXh0IHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-edit/forum-edit.component.ts":
/*!***********************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-edit/forum-edit.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ForumEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumEditComponent", function() { return ForumEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ForumEditComponent = class ForumEditComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.data.subscribe((_result) => {
        });
    }
};
ForumEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ForumEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-forum-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forum-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-edit/forum-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forum-edit.component.scss */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-edit/forum-edit.component.scss")).default]
    })
], ForumEditComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-edit/forum-edit.module.ts":
/*!********************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-edit/forum-edit.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ForumEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumEditModule", function() { return ForumEditModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _forum_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forum-edit.component */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-edit/forum-edit.component.ts");




let ForumEditModule = class ForumEditModule {
};
ForumEditModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_forum_edit_component__WEBPACK_IMPORTED_MODULE_3__["ForumEditComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        ],
        exports: [
            _forum_edit_component__WEBPACK_IMPORTED_MODULE_3__["ForumEditComponent"],
        ],
    })
], ForumEditModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-home-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-home-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ForumHomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumHomeRoutingModule", function() { return ForumHomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forum_admin_components_admin_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forum-admin/components/admin-timeline.component */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-admin/components/admin-timeline.component.ts");
/* harmony import */ var _resolvers_view_forum_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../resolvers/view-forum.service */ "./project/ws/app/src/lib/routes/social/resolvers/view-forum.service.ts");
/* harmony import */ var _forum_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forum-home.component */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-home.component.ts");
/* harmony import */ var _forum_moderator_components_moderator_timeline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forum-moderator/components/moderator-timeline.component */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-moderator/components/moderator-timeline.component.ts");
/* harmony import */ var _forum_post_view_components_forum_post_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forum-post-view/components/forum-post-view.component */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-view/components/forum-post-view.component.ts");
/* harmony import */ var _forum_view_components_forum_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forum-view/components/forum-view.component */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-view/components/forum-view.component.ts");
/* harmony import */ var _myforum_post_components_myforum_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./myforum-post/components/myforum-post.component */ "./project/ws/app/src/lib/routes/social/routes/forums/myforum-post/components/myforum-post.component.ts");
/* harmony import */ var _recent_forum_post_components_recent_forum_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recent-forum-post/components/recent-forum-post.component */ "./project/ws/app/src/lib/routes/social/routes/forums/recent-forum-post/components/recent-forum-post.component.ts");
/* harmony import */ var _post_view_post_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./post-view/post-view.component */ "./project/ws/app/src/lib/routes/social/routes/forums/post-view/post-view.component.ts");
/* harmony import */ var _post_create_post_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./post-create/post-create.component */ "./project/ws/app/src/lib/routes/social/routes/forums/post-create/post-create.component.ts");
/* harmony import */ var _resolvers_moderator_timeline_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../resolvers/moderator-timeline.service */ "./project/ws/app/src/lib/routes/social/resolvers/moderator-timeline.service.ts");
/* harmony import */ var _forum_edit_forum_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./forum-edit/forum-edit.component */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-edit/forum-edit.component.ts");
/* harmony import */ var _resolvers_edit_forum_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../resolvers/edit-forum.service */ "./project/ws/app/src/lib/routes/social/resolvers/edit-forum.service.ts");










// import { ForumHomeComponent } from './forum-home.component'
// import { RecentForumPostModule } from './recent-forum-post/recent-forum-post.module'






const forumroutes = [
    {
        path: '',
        redirectTo: 'view-forum',
        pathMatch: 'full',
    },
    {
        path: 'forum-post-view',
        component: _forum_post_view_components_forum_post_view_component__WEBPACK_IMPORTED_MODULE_7__["ForumPostViewComponent"],
    },
    {
        path: 'edit',
        component: _forum_edit_forum_edit_component__WEBPACK_IMPORTED_MODULE_14__["ForumEditComponent"],
    },
    {
        path: 'edit/:id',
        component: _forum_edit_forum_edit_component__WEBPACK_IMPORTED_MODULE_14__["ForumEditComponent"],
        resolve: {
            content: _resolvers_edit_forum_service__WEBPACK_IMPORTED_MODULE_15__["EditForumService"],
        },
    },
    {
        path: 'recent-forumpost',
        component: _recent_forum_post_components_recent_forum_post_component__WEBPACK_IMPORTED_MODULE_10__["RecentForumPostComponent"],
    },
    {
        path: 'moderator-timeline',
        component: _forum_moderator_components_moderator_timeline_component__WEBPACK_IMPORTED_MODULE_6__["ModeratorTimelineComponent"],
    },
    {
        path: 'admin-timeline',
        component: _forum_admin_components_admin_timeline_component__WEBPACK_IMPORTED_MODULE_3__["AdminTimelineComponent"],
    },
    {
        path: 'my-forum-post',
        component: _myforum_post_components_myforum_post_component__WEBPACK_IMPORTED_MODULE_9__["MyforumPostComponent"],
    },
    {
        path: 'view/:id',
        component: _forum_post_view_components_forum_post_view_component__WEBPACK_IMPORTED_MODULE_7__["ForumPostViewComponent"],
        resolve: {
            content: _resolvers_view_forum_service__WEBPACK_IMPORTED_MODULE_4__["ViewForumService"],
        },
    },
    {
        path: 'view-forum',
        component: _forum_view_components_forum_view_component__WEBPACK_IMPORTED_MODULE_8__["ForumViewComponent"],
        resolve: {
            content: _resolvers_view_forum_service__WEBPACK_IMPORTED_MODULE_4__["ViewForumService"],
        },
    },
];
let ForumHomeRoutingModule = class ForumHomeRoutingModule {
    constructor() {
        // console.log('Forum Home routing module is working')
    }
};
ForumHomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: 'post/edit',
                    component: _post_create_post_create_component__WEBPACK_IMPORTED_MODULE_12__["PostCreateComponent"],
                    resolve: {
                        content: _resolvers_view_forum_service__WEBPACK_IMPORTED_MODULE_4__["ViewForumService"],
                    },
                },
                {
                    path: 'post/edit/:id',
                    component: _post_create_post_create_component__WEBPACK_IMPORTED_MODULE_12__["PostCreateComponent"],
                },
                {
                    path: 'post/:id',
                    component: _post_view_post_view_component__WEBPACK_IMPORTED_MODULE_11__["PostViewComponent"],
                },
                {
                    path: '',
                    component: _forum_home_component__WEBPACK_IMPORTED_MODULE_5__["ForumHomeComponent"],
                    resolve: {
                        content: _resolvers_moderator_timeline_service__WEBPACK_IMPORTED_MODULE_13__["ModeratorTimelineService"],
                    },
                    children: forumroutes,
                },
            ]),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForumHomeRoutingModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-home.component.scss":
/*!**************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-home.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav {\n  background: inherit;\n  box-shadow: none;\n}\n\nmat-sidenav-container {\n  height: 100%;\n}\n\nmat-sidenav-content {\n  margin: 0;\n  padding: 0 16px 24px;\n  box-sizing: border-box;\n  min-height: calc(100vh - 145px);\n  overflow-x: hidden !important;\n}\n\n.qna-home-container {\n  background-color: rosybrown;\n  border-radius: 0;\n  box-sizing: border-box;\n  min-height: calc(100vh - 112px);\n  width: 60%;\n  max-width: 900px;\n  margin: auto;\n  padding: 20px 0;\n}\n\n.qna-home-container .qna-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.margin-remove {\n  margin: 0;\n}\n\n.day-mode .mat-drawer-backdrop.mat-drawer-shown {\n  background-color: none !important;\n}\n\n.sidenav-content-header {\n  height: 40px;\n}\n\n.best-result {\n  float: right;\n  margin: 5px;\n}\n\n.concept {\n  text-align: center;\n  margin-right: 12px;\n  height: 100px;\n  min-width: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px;\n  box-sizing: border-box;\n  font: inherit;\n}\n\n.search-card {\n  display: block;\n  margin-bottom: 8px;\n}\n\n.catalog-link {\n  border-bottom: 1px dotted;\n}\n\n.hide-filter-btn {\n  visibility: hidden;\n}\n\n.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  line-height: 30px;\n  padding: 0 12px;\n}\n\nexample-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.example-radio-button {\n  margin: 5px;\n  margin-right: 30%;\n}\n\n.tempcolor {\n  background-color: #3f51b5;\n}\n\n.example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL2ZvcnVtcy9mb3J1bS1ob21lLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvc29jaWFsL3JvdXRlcy9mb3J1bXMvZm9ydW0taG9tZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLXZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUlFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNQRjs7QURVQTtFQUNFLFlBQUE7QUNQRjs7QURZQTtFQUNFLFNBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtBQ1RGOztBRGNBO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ1hGOztBRFlFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNWSjs7QURhQTtFQUNFLFNBQUE7QUNWRjs7QURlRTtFQUNFLGlDQUFBO0FDWko7O0FEZ0JBO0VBQ0UsWUFBQTtBQ2JGOztBRGdCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDYkY7O0FEZ0JBO0VBQ0Usa0JBQUE7RUFDQSxrQkV4RE87RUZ5RFAsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhRTlETztFRitEUCxzQkFBQTtFQUNBLGFBQUE7QUNiRjs7QURnQkE7RUFDRSxjQUFBO0VBQ0Esa0JFdEVRO0FEeURWOztBRGdCQTtFQUNFLHlCQUFBO0FDYkY7O0FEZ0JBO0VBQ0Usa0JBQUE7QUNiRjs7QURlQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ1pKOztBRGNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ1hGOztBRGNBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDWEY7O0FEYUU7RUFDRix5QkFBQTtBQ1ZBOztBRGFBO0VBQ0UsWUFBQTtBQ1ZGOztBRGFBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDVkY7O0FEYUE7RUFDRSxjQUFBO0FDVkYiLCJmaWxlIjoicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvc29jaWFsL3JvdXRlcy9mb3J1bXMvZm9ydW0taG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy9fd3MtdmFycy5zY3NzJztcbkBpbXBvcnQgJ3N0eWxlcy9fd3MtbWl4aW5zLnNjc3MnO1xuQGltcG9ydCAnc3R5bGVzL193cy1jb21tb24uc2Nzcyc7XG5cbi8vIENvbnRlbnRzIG9mIFNpZGVOYXYgTWVudVxuLnNpZGVuYXYge1xuICAvLyB3aWR0aDogMjAlO1xuICAvLyBtaW4td2lkdGg6IDI1MHB4O1xuICAvLyBwYWRkaW5nOiAkc2l6ZS1zO1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gLy8gbWluLWhlaWdodDogODB2aDtcbn1cblxuLy8gQ29udGVudHMgb2YgU2lkZSBOYXYgQ29udGVudFxubWF0LXNpZGVuYXYtY29udGVudCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAkc2l6ZS1tICRzaXplLWw7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNDVweCk7XG4gIG92ZXJmbG93LXg6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG5cblxuLnFuYS1ob21lLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJvc3licm93bjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDExMnB4KTtcbiAgd2lkdGg6IDYwJTtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIC5xbmEtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbi5tYXJnaW4tcmVtb3ZlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5cbi5kYXktbW9kZSB7XG4gIC5tYXQtZHJhd2VyLWJhY2tkcm9wLm1hdC1kcmF3ZXItc2hvd24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uc2lkZW5hdi1jb250ZW50LWhlYWRlciB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmJlc3QtcmVzdWx0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDVweDtcbn1cblxuLmNvbmNlcHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogJHNpemUtcztcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWluLXdpZHRoOiA1ICogJHNpemUtbDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6ICRzaXplLXM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbi5zZWFyY2gtY2FyZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAkc2l6ZS14cztcbn1cblxuLmNhdGFsb2ctbGluayB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XG59XG5cbi5oaWRlLWZpbHRlci1idG4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgcGFkZGluZzogMCAxMnB4O1xufVxuZXhhbXBsZS1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4uZXhhbXBsZS1yYWRpby1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMCVcbn1cbiAgLnRlbXBjb2xvcntcbmJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIH1cblxuLmV4YW1wbGUtaDIge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5leGFtcGxlLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmV4YW1wbGUtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59IiwiLnNpZGVuYXYge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMTZweCAyNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTQ1cHgpO1xuICBvdmVyZmxvdy14OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLnFuYS1ob21lLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJvc3licm93bjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDExMnB4KTtcbiAgd2lkdGg6IDYwJTtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4ucW5hLWhvbWUtY29udGFpbmVyIC5xbmEtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tYXJnaW4tcmVtb3ZlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZGF5LW1vZGUgLm1hdC1kcmF3ZXItYmFja2Ryb3AubWF0LWRyYXdlci1zaG93biB7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnNpZGVuYXYtY29udGVudC1oZWFkZXIge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5iZXN0LXJlc3VsdCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5jb25jZXB0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250OiBpbmhlcml0O1xufVxuXG4uc2VhcmNoLWNhcmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uY2F0YWxvZy1saW5rIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZDtcbn1cblxuLmhpZGUtZmlsdGVyLWJ0biB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgcGFkZGluZzogMCAxMnB4O1xufVxuXG5leGFtcGxlLXJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbi5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwJTtcbn1cblxuLnRlbXBjb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG59XG5cbi5leGFtcGxlLWgyIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZXhhbXBsZS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5leGFtcGxlLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufSIsIiRmb250LWZhbWlseS1zYW5zOiAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLFxuICAnTm90byBTYW5zJywgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsXG4gICdOb3RvIENvbG9yIEVtb2ppJztcbiRmb250LWZhbWlseS1zZXJpZjogR2VvcmdpYSwgQ2FtYnJpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiRmb250LWZhbWlseS1tb25vOiBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0xpYmVyYXRpb24gTW9ubycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiRmb250LWZhbWlseS1vcGVuLXNhbnM6ICdPcGVuIFNhbnMnO1xuJGZvbnQtZmFtaWx5LW9wZW4tcG9wcGluczogJ1JvYm90byc7XG5cblxuJHNpemUteHM6IDhweDtcbiRzaXplLXM6IDEycHg7XG4kc2l6ZS1tOiAxNnB4O1xuJHNpemUtbDogMjRweDtcbiRzaXplLXhsOiAzMnB4O1xuJHNpemUtbGc6IDI4cHg7XG4kc2l6ZS14eGw6IDQwcHg7XG5cbiRtYXQtdG9vbGJhci14czogNTJweDtcbiRtYXQtdG9vbGJhci1ndC14czogNTZweDtcbiJdfQ== */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-home.component.ts":
/*!************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-home.component.ts ***!
  \************************************************************************************/
/*! exports provided: ForumHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumHomeComponent", function() { return ForumHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _library_ws_widget_utils_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../library/ws-widget/utils/src/public-api */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/SocialForumposts.model */ "./project/ws/app/src/lib/routes/social/routes/forums/models/SocialForumposts.model.ts");
/* harmony import */ var _service_EmitterService_forum_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/EmitterService/forum-handler.service */ "./project/ws/app/src/lib/routes/social/routes/forums/service/EmitterService/forum-handler.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







// import { ActivatedRoute } from '@angular/router'
let ForumHomeComponent = class ForumHomeComponent {
    // filter code ends here
    constructor(_eventEmiter, configSvc, valueSvc, router, route) {
        this._eventEmiter = _eventEmiter;
        this.configSvc = configSvc;
        this.valueSvc = valueSvc;
        this.router = router;
        this.route = route;
        this.screenSizeIsLtMedium = false;
        this.showText = true;
        this.showFilter = true;
        this.navbarMode = false;
        this.filterEnabled = false;
        this.forumCreation = false;
        this.pageNavbar = this.configSvc.pageNavBar;
        this.defaultSideNavBarOpenedSubscription = null;
        this.isLtMedium$ = this.valueSvc.isLtMedium$;
        this.sideNavBarOpened = true;
        this.mode$ = this.isLtMedium$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((isMedium) => (isMedium ? 'over' : 'side')));
        this.panelOpenState = false;
        this.defaultColorTab = true;
        this.opened = true;
        this.predefinedFiltersExist = false;
        this.predefinedAdminFiltersExist = false;
        // filter starts here
        this.searchResults = {
            totalHits: 0,
            result: [],
            filters: [],
            filtersUsed: [],
            notVisibleFilters: [],
        };
        this.routeComp = '';
        this.showModerateTab = false;
        this.filtersResetAble = false;
        this.filtersResponse = [];
        this.searchRequestObject = {
            filters: {},
            type: _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].ETimelineType.ALL,
            pgNo: 0,
            pgSize: 10,
            postKind: [_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].EPostKind.BLOG],
        };
        // predefined filter
        this.favoriteSeason = 'Published';
        this.seasons = ['In Review', 'Published', 'Rejected', 'Drafts'];
        // Admin filter
        this.query = false;
        this.forumPosts = true;
        this.blogPosts = false;
        this.adminFilter = [];
        this.isXSmall$ = this.valueSvc.isXSmall$;
    }
    setDataStr() {
        this._eventEmiter.dataStr.subscribe(data => this.filtersResponse = data);
        // console.log('the filter data is' + this.filtersResponse)
    }
    changeAdminQueryFilter() {
        // console.log('The admin query filter function is called and the status of variable is' + this.query)
        if (this.query) {
            if (!this.adminFilter.includes(_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].EPostKind.QUERY)) {
                //    console.log('Query variable absent in list')
                this.adminFilter.push(_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].EPostKind.QUERY);
                //   console.log('The latest admin filter list is' + this.adminFilter)
            }
        }
        else {
            if (this.adminFilter.includes(_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].EPostKind.QUERY)) {
                //   console.log('Query variable is being removed in list')
                const index = this.adminFilter.indexOf(_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].EPostKind.QUERY);
                if (index > -1) {
                    //   console.log('The Query is alraedy present in filter and index is' + index)
                    this.adminFilter.splice(index, 1);
                    //   console.log('The latest admin filter list is' + this.adminFilter)
                }
            }
        }
        this._eventEmiter.sendPredefinedAdminFilterSelected(this.adminFilter);
        //   console.log('THE ULTIMATE VALUE IN FILTER LIST' + this.adminFilter)
    }
    changeAdminBlogFilter() {
        // console.log('The admin Blog filter function is called and the status of variable is' + this.blogPosts)
        if (this.blogPosts) {
            if (!this.adminFilter.includes(_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].EPostKind.BLOG)) {
                // console.log('Blog variable absent in list')
                this.adminFilter.push(_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].EPostKind.BLOG);
                // console.log('The latest admin filter list is' + this.adminFilter)
            }
        }
        else {
            if (this.adminFilter.includes(_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].EPostKind.BLOG)) {
                //   console.log('Blog variable is being removed in list')
                const index = this.adminFilter.indexOf(_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].EPostKind.BLOG);
                if (index > -1) {
                    //    console.log('The Blog is alraedy present in filter and index is' + index)
                    this.adminFilter.splice(index, 1);
                    //    console.log('The latest admin filter list is' + this.adminFilter)
                }
            }
        }
        this._eventEmiter.sendPredefinedAdminFilterSelected(this.adminFilter);
        //   console.log('THE ULTIMATE VALUE IN FILTER LIST' + this.adminFilter)
    }
    changeAdminForumFilter() {
        //    console.log('The admin Forum filter function is called and the status of variable is' + this.forumPosts)
        if (!this.adminFilter.includes(_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].EPostKind.FORUM)) {
            //   console.log('Forum variable absent in list')
            this.adminFilter.push((_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].EPostKind.FORUM));
            // console.log('The latest admin filter list is' + this.adminFilter)
            this._eventEmiter.sendPredefinedAdminFilterSelected(this.adminFilter);
        }
        else {
            if (this.adminFilter.includes(_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].EPostKind.FORUM)) {
                //  console.log('Forum variable is being removed in list')
                const index = this.adminFilter.indexOf((_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].EPostKind.FORUM));
                if (index > -1) {
                    //  console.log('The Forum is alraedy present in filter and index is' + index)
                    this.adminFilter.splice(index, 1);
                    // console.log('The latest admin filter list is' + this.adminFilter)
                }
            }
            this._eventEmiter.sendPredefinedAdminFilterSelected(this.adminFilter);
        }
        //   console.log('THE ULTIMATE VALUE IN FILTER LIST' + this.adminFilter)
        this._eventEmiter.sendPredefinedAdminFilterSelected(this.adminFilter);
    }
    // Admin filter ends
    ngOnInit() {
        this.changeAdminForumFilter();
        this.route.data.subscribe((result) => {
            const data = result.content.data;
            if (data && data.result && data.result.length) {
                this.showModerateTab = true;
            }
        });
        // this.forumCreation = this.configSvc.restrictedFeatures && !this.configSvc.restrictedFeatures.has('forum_create') || false
        this._eventEmiter.componentActive.subscribe(data => {
            if (data === 'MyforumPostComponent') {
                this.defaultColorTab = false;
                this.filtersResponse = [];
                this.filterEnabled = true;
                this.predefinedFiltersExist = true;
                this.predefinedAdminFiltersExist = false;
            }
            else if (data === 'ForumViewComponent') {
                this.defaultColorTab = true;
                this.filterEnabled = false;
                this.predefinedAdminFiltersExist = false;
            }
            else if (data === 'RecentForumPostComponent') {
                this.defaultColorTab = false;
                // this.filterEnabled = false
                this.predefinedAdminFiltersExist = false;
                this.predefinedFiltersExist = false;
            }
            else if (data === 'AdminTimelineComponent') {
                this.defaultColorTab = false;
                this.filtersResponse = [];
                this.filterEnabled = true;
                this.predefinedFiltersExist = false;
                this.predefinedAdminFiltersExist = true;
                if (this.forumPosts) {
                    if (!this.adminFilter.includes(_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].EPostKind.FORUM)) {
                        this.adminFilter.push(_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].EPostKind.FORUM);
                    }
                }
            }
            else {
                this.defaultColorTab = false;
                this.filterEnabled = true;
                this.predefinedFiltersExist = false;
                this.predefinedAdminFiltersExist = false;
            }
        });
        this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                // console.log('================')
                // console.log(e.url)
                // console.log("The url in stringf is" + e.url)
                if (e.url.includes('view-forum')) {
                    this.filterEnabled = false;
                    this.predefinedFiltersExist = false;
                }
                else if (e.url.includes('recent-forumpost')) {
                    this.filterEnabled = true;
                    this.predefinedFiltersExist = false;
                }
                else if (e.url.includes('moderator-timeline')) {
                    this.filterEnabled = true;
                    this.predefinedFiltersExist = false;
                }
                else if (e.url.includes('my-forum-post')) {
                    this.filterEnabled = true;
                    this.predefinedFiltersExist = true;
                    this._eventEmiter.sendStatusOfPredefinedFilter(true);
                    // console.log('++++++++++++_________________+++++++++++++++')
                    //  this.favoriteSeason = this._eventEmiter.predefinedFilterSelected
                    // console.log('The predefined filter selected is' + this._eventEmiter.predefinedFilterSelected)
                    this._eventEmiter.sendPredinedFilterSelected(_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].ETimelineType.MY_PUBLISHED);
                }
            }
        });
        this.defaultSideNavBarOpenedSubscription = this.isLtMedium$.subscribe((isLtMedium) => {
            this.screenSizeIsLtMedium = isLtMedium;
        });
        this.setDataStr();
    }
    ngOnDestroy() {
        if (this.defaultSideNavBarOpenedSubscription) {
            this.defaultSideNavBarOpenedSubscription.unsubscribe();
        }
    }
    closeFilter(value) {
        this.showFilter = value;
    }
    emitCurrentPreFilter(selectedeFilter) {
        // console.log('shhdhjkshdjkhdjkh')
        if (selectedeFilter === 'In Review') {
            this._eventEmiter.sendPredinedFilterSelected(_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].ETimelineType.MY_IN_REVIEW);
        }
        else if (selectedeFilter === 'Published') {
            this._eventEmiter.sendPredinedFilterSelected(_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].ETimelineType.MY_PUBLISHED);
        }
        else if (selectedeFilter === 'Rejected') {
            this._eventEmiter.sendPredinedFilterSelected(_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].ETimelineType.MY_REJECTED);
        }
        else if (selectedeFilter === 'Drafts') {
            this._eventEmiter.sendPredinedFilterSelected(_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].ETimelineType.MY_DRAFTS);
        }
    }
};
ForumHomeComponent.ctorParameters = () => [
    { type: _service_EmitterService_forum_handler_service__WEBPACK_IMPORTED_MODULE_5__["ForumHandlerService"] },
    { type: _library_ws_widget_utils_src_public_api__WEBPACK_IMPORTED_MODULE_3__["ConfigurationsService"] },
    { type: _library_ws_widget_utils_src_public_api__WEBPACK_IMPORTED_MODULE_3__["ValueService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ForumHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-forum-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forum-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forum-home.component.scss */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-home.component.scss")).default]
    })
], ForumHomeComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-home.module.ts":
/*!*********************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-home.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ForumHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumHomeModule", function() { return ForumHomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _library_ws_widget_collection_src_lib_btn_page_back_btn_page_back_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../../../library/ws-widget/collection/src/lib/btn-page-back/btn-page-back.module */ "./library/ws-widget/collection/src/lib/btn-page-back/btn-page-back.module.ts");
/* harmony import */ var _forum_home_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forum-home-routing.module */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-home-routing.module.ts");
/* harmony import */ var _forum_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forum-home.component */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-home.component.ts");
/* harmony import */ var _forum_moderator_moderator_timeline_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./forum-moderator/moderator-timeline.module */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-moderator/moderator-timeline.module.ts");
/* harmony import */ var _forum_post_edit_forum_post_edit_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forum-post-edit/forum-post-edit.module */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-edit/forum-post-edit.module.ts");
/* harmony import */ var _forum_post_reply_forum_post_reply_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forum-post-reply/forum-post-reply.module */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-reply/forum-post-reply.module.ts");
/* harmony import */ var _forum_post_result_forum_post_result_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./forum-post-result/forum-post-result.module */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-result/forum-post-result.module.ts");
/* harmony import */ var _forum_post_view_forum_post_view_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./forum-post-view/forum-post-view.module */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-view/forum-post-view.module.ts");
/* harmony import */ var _forum_view_forum_view_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./forum-view/forum-view.module */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-view/forum-view.module.ts");
/* harmony import */ var _myforum_post_components_myforum_post_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./myforum-post/components/myforum-post.component */ "./project/ws/app/src/lib/routes/social/routes/forums/myforum-post/components/myforum-post.component.ts");
/* harmony import */ var _myforum_post_myforum_post_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./myforum-post/myforum-post.module */ "./project/ws/app/src/lib/routes/social/routes/forums/myforum-post/myforum-post.module.ts");
/* harmony import */ var _recent_forum_post_recent_forum_post_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./recent-forum-post/recent-forum-post.module */ "./project/ws/app/src/lib/routes/social/routes/forums/recent-forum-post/recent-forum-post.module.ts");
/* harmony import */ var _service_EmitterService_forum_handler_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./service/EmitterService/forum-handler.service */ "./project/ws/app/src/lib/routes/social/routes/forums/service/EmitterService/forum-handler.service.ts");
/* harmony import */ var _widgets_filter_display_filter_dispaly_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./widgets/filter-display/filter-dispaly.component */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/filter-display/filter-dispaly.component.ts");
/* harmony import */ var _resolvers_view_forum_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../resolvers/view-forum.service */ "./project/ws/app/src/lib/routes/social/resolvers/view-forum.service.ts");
/* harmony import */ var _resolvers_moderator_timeline_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../resolvers/moderator-timeline.service */ "./project/ws/app/src/lib/routes/social/resolvers/moderator-timeline.service.ts");
/* harmony import */ var _post_view_post_view_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./post-view/post-view.module */ "./project/ws/app/src/lib/routes/social/routes/forums/post-view/post-view.module.ts");
/* harmony import */ var _post_create_post_create_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./post-create/post-create.module */ "./project/ws/app/src/lib/routes/social/routes/forums/post-create/post-create.module.ts");
/* harmony import */ var _forum_admin_admin_timeline_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./forum-admin/admin-timeline.module */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-admin/admin-timeline.module.ts");
/* harmony import */ var _forum_edit_forum_edit_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./forum-edit/forum-edit.module */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-edit/forum-edit.module.ts");
/* harmony import */ var _resolvers_edit_forum_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../resolvers/edit-forum.service */ "./project/ws/app/src/lib/routes/social/resolvers/edit-forum.service.ts");







// import { RecentForumPostComponent } from './recent-forum-post/components/recent-forum-post.component'


// import { RecentForumPostComponent } from './recent-forum-post/components/recent-forum-post.component'






// import { MyProfileComponent } from './forum-myprofile/components/my-profile.component'

















let ForumHomeModule = class ForumHomeModule {
};
ForumHomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_forum_home_component__WEBPACK_IMPORTED_MODULE_13__["ForumHomeComponent"], _widgets_filter_display_filter_dispaly_component__WEBPACK_IMPORTED_MODULE_24__["FilterDispalyComponent"]],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _forum_home_routing_module__WEBPACK_IMPORTED_MODULE_12__["ForumHomeRoutingModule"],
            _forum_post_edit_forum_post_edit_module__WEBPACK_IMPORTED_MODULE_15__["ForumPostEditModule"],
            _forum_post_reply_forum_post_reply_module__WEBPACK_IMPORTED_MODULE_16__["ForumPostReplyModule"],
            _forum_post_result_forum_post_result_module__WEBPACK_IMPORTED_MODULE_17__["ForumPostResultModule"],
            _forum_post_view_forum_post_view_module__WEBPACK_IMPORTED_MODULE_18__["ForumPostViewModule"],
            _forum_view_forum_view_module__WEBPACK_IMPORTED_MODULE_19__["ForumViewModule"],
            _myforum_post_myforum_post_module__WEBPACK_IMPORTED_MODULE_21__["MyforumPostModule"],
            _forum_admin_admin_timeline_module__WEBPACK_IMPORTED_MODULE_29__["AdminTimelineModule"],
            _library_ws_widget_collection_src_lib_btn_page_back_btn_page_back_module__WEBPACK_IMPORTED_MODULE_11__["BtnPageBackModule"],
            _recent_forum_post_recent_forum_post_module__WEBPACK_IMPORTED_MODULE_22__["RecentForumPostModule"],
            _forum_moderator_moderator_timeline_module__WEBPACK_IMPORTED_MODULE_14__["ModeratorTimelineModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
            _post_view_post_view_module__WEBPACK_IMPORTED_MODULE_27__["PostViewModule"],
            _post_create_post_create_module__WEBPACK_IMPORTED_MODULE_28__["PostCreateModule"],
            _forum_edit_forum_edit_module__WEBPACK_IMPORTED_MODULE_30__["ForumEditModule"],
        ],
        providers: [_service_EmitterService_forum_handler_service__WEBPACK_IMPORTED_MODULE_23__["ForumHandlerService"], _myforum_post_components_myforum_post_component__WEBPACK_IMPORTED_MODULE_20__["MyforumPostComponent"], _resolvers_view_forum_service__WEBPACK_IMPORTED_MODULE_25__["ViewForumService"], _resolvers_moderator_timeline_service__WEBPACK_IMPORTED_MODULE_26__["ModeratorTimelineService"], _resolvers_edit_forum_service__WEBPACK_IMPORTED_MODULE_31__["EditForumService"]],
        exports: [_forum_home_component__WEBPACK_IMPORTED_MODULE_13__["ForumHomeComponent"]],
    })
], ForumHomeModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-moderator/components/moderator-timeline.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-moderator/components/moderator-timeline.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL2ZvcnVtcy9mb3J1bS1tb2RlcmF0b3IvY29tcG9uZW50cy9tb2RlcmF0b3ItdGltZWxpbmUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-moderator/components/moderator-timeline.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-moderator/components/moderator-timeline.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ModeratorTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratorTimelineComponent", function() { return ModeratorTimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _library_ws_widget_utils_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../../../library/ws-widget/utils/src/public-api */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/SocialForumposts.model */ "./project/ws/app/src/lib/routes/social/routes/forums/models/SocialForumposts.model.ts");
/* harmony import */ var _service_EmitterService_forum_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/EmitterService/forum-handler.service */ "./project/ws/app/src/lib/routes/social/routes/forums/service/EmitterService/forum-handler.service.ts");
/* harmony import */ var _service_forum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/forum.service */ "./project/ws/app/src/lib/routes/social/routes/forums/service/forum.service.ts");







// import { ForumHandlerService } from '../../service/EmitterService/eventemitter.service'

// import { DialogBoxModeratorComponent } from '../../widgets/Dialog-Box/dialog-box-moderator/dialog-box-moderator.component'
let ModeratorTimelineComponent = class ModeratorTimelineComponent {
    constructor(activated, _eventEmiter, forumSvc, configSvc, valueSvc, dialog) {
        this.activated = activated;
        this._eventEmiter = _eventEmiter;
        this.forumSvc = forumSvc;
        this.configSvc = configSvc;
        this.valueSvc = valueSvc;
        this.dialog = dialog;
        this.postAccepted = false; // to be used for temporary deletion from list
        this.postRejected = false; // to be used for temporary deletion from list
        this.posttoBeHidden = ''; // to be used for temporary deletion from list
        this.filtersRecFromRoute = []; // to be used to get raw data from the route
        this.timelineData = {
            hits: 0,
            result: [],
            filters: [],
        };
        this.moderatorTimelineRequest = {
            pgNo: 0,
            pgSize: 7,
            postKind: [_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_5__["SocialForum"].EPostKind.BLOG],
            sessionId: Date.now(),
            type: _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_5__["SocialForum"].ETimelineType.MODERATOR_TIMELINE,
            source: {
                id: [],
                name: _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_5__["SocialForum"].EDiscussionType.SOCIAL,
            },
        };
        this.pageNavbar = this.configSvc.pageNavBar;
        // timelineRequest: SocialForum.ITimelineRequest = {
        //   pgNo: -1,
        //   pgSize: 20,
        //   postKind: [SocialForum.EPostKind.BLOG],
        //   sessionId: Date.now(),
        //   type: SocialForum.ETimelineType.MODERATOR_TIMELINE,
        //   userId: '',
        // }
        this.timelineFetchStatus = 'none';
        this.postIdUpdate = '';
        this.postStatus = '';
        this.isXSmall$ = this.valueSvc.isXSmall$;
        // if (this.configSvc.userProfile) {
        //   this.moderatorTimelineRequest.userId = this.configSvc.userProfile.userId || ''
        // }
        // console.log('Moderator timeline postcomop loaded')
        this._eventEmiter.sendFilterStatus(false);
        this._eventEmiter.sendStatusOfPredefinedFilter(false);
    }
    ngOnInit() {
        // console.log('THE MODERATOR INIT IS RUNNING')
        this._eventEmiter.setActiveComponent('ModeratorTimelineComponent');
        // this.moderatorTimelineRequest.pgNo = 0
        // filterstarts
        if (this._eventEmiter.componentActive.subscribe(data => {
            if (data === 'ModeratorTimelineComponent') {
                this.activated.queryParamMap.subscribe((queryMap) => {
                    if (queryMap.has('f')) {
                        this.moderatorTimelineRequest.source.id = [];
                        this.filtersRecFromRoute = [];
                        const filters = JSON.parse(queryMap.get('f') || '{}');
                        //  console.log('The filters in Moderator isvvvvvvvvvvvvvvvvvvvvv' + JSON.stringify(filters.Forum))
                        // console.log('THE FINAL FILTERS ARE' + this.filtersRecFromRoute)
                        // let trial = JSON.parse(queryMap.get('threadContributors') || '{}')
                        // console.log("The TRIAL VALUE IS" + JSON.stringify(trial))
                        if (filters.Forum) {
                            filters.Forum.forEach((element) => {
                                // console.log('THE VALUE IS' + element)
                                if (!this.moderatorTimelineRequest.source.id.includes(element)) {
                                    this.moderatorTimelineRequest.source.id.push(element);
                                }
                                if (!this.filtersRecFromRoute.includes(element)) {
                                    this.filtersRecFromRoute.push(element);
                                }
                            });
                        }
                        // this.moderatorTimelineRequest.source.id = [...this.moderatorTimelineRequest.source.id, ...filters.Forum]
                        // console.log('**---------------------**-*-*-')
                        //  console.log('THE FINAL FILTER INJ MODERATOR REQUEST' + JSON.stringify(this.moderatorTimelineRequest.source))
                        // console.log("The filters in recent forum in search request is" + JSON.stringify(this.searchRequest.filters))
                    }
                    else {
                        this.moderatorTimelineRequest.source.id = [];
                    }
                    // this.moderatorTimelineRequest.source.id = [...this.moderatorTimelineRequest.source.id, ...filters.Forum]
                    // console.log('**---------------------**-*-*-')
                    //  console.log('THE FINAL FILTER INJ MODERATOR REQUEST' + JSON.stringify(this.moderatorTimelineRequest.source))
                    // console.log("The filters in recent forum in search request is" + JSON.stringify(this.searchRequest.filters))
                    this.timelineFetchStatus = 'fetching';
                    this.fetchTimelineData('FirstCall');
                    //  this.fetchTimelineData()
                });
            }
        })) {
            // filter ends
            // this.fetchTimelineData()
        }
    }
    // acceptUpdate(postIdAccepeted: string) {
    //   //console.log("The acceptUpdate function is called")
    //   //console.log("The accepted post is" + postIdAccepeted)
    // }
    // rejectUpdate(postIdAccepeted: string) {
    //   //console.log("The rejectUpdate function is called")
    //   //console.log("The rejected post is" + postIdAccepeted)
    // }
    updateFromChild(receivedArray) {
        this.postIdUpdate = receivedArray[0];
        this.postStatus = receivedArray[1];
        if (this.postIdUpdate !== '' && this.postStatus === 'Successfully Accepted') {
            this.postAccepted = true;
            // console.log("The post has beeen accepted and UPDATEFROM CHILD")
            this.timelineData.result.forEach(post => {
                if (post.id === this.postIdUpdate) {
                    post.hidden = true;
                }
                // else {
                //   post.hidden = false
                // }
            });
        }
        else if (this.postIdUpdate !== '' && this.postStatus === 'Successfully Rejected') {
            // console.log("REACGHED THE REJECT IF CONDITION")
            // console.log("The post id TO BE REJECTED UIS" + this.postIdUpdate)
            // console.log("The command received TO BE REJECTED IS " + this.postStatus)
            this.postRejected = true;
            // this._eventEmiter.reason_of_rejection.subscribe(data => this.filtersResponse = data
            // console.log("The post has beeen Rejected and UPDATEFROM CHILD")
            this.timelineData.result.forEach(post => {
                if (post.id === this.postIdUpdate) {
                    post.hidden = true;
                }
                // else {
                //   post.hidden = false
                // }
            });
        }
    }
    // openDialog() {
    //   this.dialog.open(DialogBoxModeratorComponent)
    // }
    fetchTimelineData(call) {
        // console.log('The value of CALL DATA IS' + call)
        if (call === 'FirstCall') {
            this.timelineFetchStatus = 'fetching';
            this.moderatorTimelineRequest.pgNo = 0;
        }
        else if (call === 'subsequentCall') {
            //   console.log('This is a subsequent call')
            this.timelineFetchStatus = 'fetching';
            this.moderatorTimelineRequest.pgNo += 1;
        }
        if (this.timelineFetchStatus === 'done') {
            return;
        }
        // console.log('In the moderator time line the page no is' + this.moderatorTimelineRequest.pgNo)
        // console.log('THE FILTERS00000000000000000000  is' + this.filtersRecFromRoute)
        // this.moderatorTimelineRequest.source.id = ["fce535c0-642c-11ea-b61d-2966651fe75e"]
        //   console.log('In the moderator timeline, the request sent, the page no is ' + this.moderatorTimelineRequest.pgNo)
        this.forumSvc.fetchModeratorTimelineData(this.moderatorTimelineRequest).subscribe(data => {
            this.timelineData.filters = [...[], ...data.filters];
            this.timelineData.filters.forEach(filterReceived => {
                //     console.log('The filter received is' + JSON.stringify(filterReceived))
                filterReceived.content.forEach(recFilterContent => {
                    //  console.log('THE OVERALL REC OBJ IS' + JSON.stringify(recFilterContent.type))
                    //  console.log('THe Received Filte Content ;;;;;;;;;;;;;;;' + JSON.stringify(recFilterContent.type))
                    if (this.filtersRecFromRoute.includes(recFilterContent.type)) {
                        filterReceived.checked = true;
                        recFilterContent.checked = true;
                    }
                });
                // this.moderatorTimelineRequest.source.id.forEach(existingFilter => {
                //   console.log("Thye existing FILTER is " + existingFilter)
                //   //if(filterReceived.type)
                //   console.log("THE TYPE OF RECEIVED FILTER IS" + filterReceived.content)
                // })
            });
            if (data.hits && data.result) {
                // console.log('DATA: ', data.filters)
                this.timelineData.hits = data.hits;
                this.timelineData.result = [...[], ...data.result];
                // this.timelineData.filters = data.filters
                // console.log('In Moderator timeline THE FILTER RECEIVED IS' + JSON.stringify(this.timelineData.filters))
                this.timelineData.result.forEach(post => {
                    if (post.id === this.posttoBeHidden) {
                        post.hidden = true;
                    }
                    else {
                        post.hidden = false;
                    }
                });
                // handling filter starts
                // handling filter ends
                this._eventEmiter.sendMessage(this.timelineData.filters);
                //  console.log('Filters from moderator are' + JSON.stringify(this.timelineData.filters))
                if (data.hits > this.timelineData.result.length) {
                    this.timelineFetchStatus = 'hasMore';
                }
                else {
                    this.timelineFetchStatus = 'done';
                }
            }
            else {
                this.timelineData.result = [];
                this._eventEmiter.sendMessage(this.timelineData.filters);
                this.timelineFetchStatus = 'none';
            }
        }, () => {
            this.timelineFetchStatus = 'error';
        });
    }
};
ModeratorTimelineComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_EmitterService_forum_handler_service__WEBPACK_IMPORTED_MODULE_6__["ForumHandlerService"] },
    { type: _service_forum_service__WEBPACK_IMPORTED_MODULE_7__["ForumService"] },
    { type: _library_ws_widget_utils_src_public_api__WEBPACK_IMPORTED_MODULE_4__["ConfigurationsService"] },
    { type: _library_ws_widget_utils_src_public_api__WEBPACK_IMPORTED_MODULE_4__["ValueService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
ModeratorTimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-moderator-timeline',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./moderator-timeline.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-moderator/components/moderator-timeline.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./moderator-timeline.component.scss */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-moderator/components/moderator-timeline.component.scss")).default]
    })
], ModeratorTimelineComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-moderator/moderator-timeline.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-moderator/moderator-timeline.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ModeratorTimelineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratorTimelineModule", function() { return ModeratorTimelineModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");
/* harmony import */ var _widgets_buttons_btn_moderator_btn_moderator_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/buttons/btn-moderator/btn-moderator.module */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-moderator/btn-moderator.module.ts");
/* harmony import */ var _widgets_Dialog_Box_dialog_box_moderator_dialog_box_moderator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/Dialog-Box/dialog-box-moderator/dialog-box-moderator.component */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-moderator/dialog-box-moderator.component.ts");
/* harmony import */ var _widgets_Dialog_Box_dialog_box_moderator_dialog_box_moderator_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../widgets/Dialog-Box/dialog-box-moderator/dialog-box-moderator.module */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-moderator/dialog-box-moderator.module.ts");
/* harmony import */ var _components_moderator_timeline_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/moderator-timeline.component */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-moderator/components/moderator-timeline.component.ts");



// tslint:disable-next-line: max-line-length









let ModeratorTimelineModule = class ModeratorTimelineModule {
};
ModeratorTimelineModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_moderator_timeline_component__WEBPACK_IMPORTED_MODULE_11__["ModeratorTimelineComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_7__["BtnSocialLikeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_7__["BtnPageBackModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_7__["BtnPageBackModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_7__["BtnSocialVoteModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_7__["BtnSocialLikeModule"],
            _widgets_Dialog_Box_dialog_box_moderator_dialog_box_moderator_module__WEBPACK_IMPORTED_MODULE_10__["DialogBoxModeratorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _widgets_buttons_btn_moderator_btn_moderator_module__WEBPACK_IMPORTED_MODULE_8__["BtnModeratorModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        ],
        entryComponents: [_widgets_Dialog_Box_dialog_box_moderator_dialog_box_moderator_component__WEBPACK_IMPORTED_MODULE_9__["DialogBoxModeratorComponent"]],
        exports: [_components_moderator_timeline_component__WEBPACK_IMPORTED_MODULE_11__["ModeratorTimelineComponent"]],
    })
], ModeratorTimelineModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-edit/components/forum-post-edit.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-post-edit/components/forum-post-edit.component.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL2ZvcnVtcy9mb3J1bS1wb3N0LWVkaXQvY29tcG9uZW50cy9mb3J1bS1wb3N0LWVkaXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-edit/components/forum-post-edit.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-post-edit/components/forum-post-edit.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ForumPostEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumPostEditComponent", function() { return ForumPostEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForumPostEditComponent = class ForumPostEditComponent {
    constructor() { }
    ngOnInit() {
    }
};
ForumPostEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-forum-post-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forum-post-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-post-edit/components/forum-post-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forum-post-edit.component.scss */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-edit/components/forum-post-edit.component.scss")).default]
    })
], ForumPostEditComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-edit/forum-post-edit.module.ts":
/*!******************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-post-edit/forum-post-edit.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: ForumPostEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumPostEditModule", function() { return ForumPostEditModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_forum_post_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/forum-post-edit.component */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-edit/components/forum-post-edit.component.ts");




let ForumPostEditModule = class ForumPostEditModule {
};
ForumPostEditModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_forum_post_edit_component__WEBPACK_IMPORTED_MODULE_3__["ForumPostEditComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        ],
    })
], ForumPostEditModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-reply/components/forum-post-reply.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-post-reply/components/forum-post-reply.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL2ZvcnVtcy9mb3J1bS1wb3N0LXJlcGx5L2NvbXBvbmVudHMvZm9ydW0tcG9zdC1yZXBseS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-reply/components/forum-post-reply.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-post-reply/components/forum-post-reply.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ForumPostReplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumPostReplyComponent", function() { return ForumPostReplyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForumPostReplyComponent = class ForumPostReplyComponent {
    constructor() { }
    ngOnInit() {
    }
};
ForumPostReplyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-forum-post-reply',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forum-post-reply.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-post-reply/components/forum-post-reply.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forum-post-reply.component.scss */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-reply/components/forum-post-reply.component.scss")).default]
    })
], ForumPostReplyComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-reply/forum-post-reply.module.ts":
/*!********************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-post-reply/forum-post-reply.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: ForumPostReplyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumPostReplyModule", function() { return ForumPostReplyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_forum_post_reply_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/forum-post-reply.component */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-reply/components/forum-post-reply.component.ts");




let ForumPostReplyModule = class ForumPostReplyModule {
};
ForumPostReplyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_forum_post_reply_component__WEBPACK_IMPORTED_MODULE_3__["ForumPostReplyComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        ],
    })
], ForumPostReplyModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-result/components/forum-post-result.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-post-result/components/forum-post-result.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL2ZvcnVtcy9mb3J1bS1wb3N0LXJlc3VsdC9jb21wb25lbnRzL2ZvcnVtLXBvc3QtcmVzdWx0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-result/components/forum-post-result.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-post-result/components/forum-post-result.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ForumPostResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumPostResultComponent", function() { return ForumPostResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForumPostResultComponent = class ForumPostResultComponent {
    constructor() { }
    ngOnInit() {
    }
};
ForumPostResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-forum-post-result',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forum-post-result.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-post-result/components/forum-post-result.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forum-post-result.component.scss */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-result/components/forum-post-result.component.scss")).default]
    })
], ForumPostResultComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-result/forum-post-result.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-post-result/forum-post-result.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ForumPostResultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumPostResultModule", function() { return ForumPostResultModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_forum_post_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/forum-post-result.component */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-result/components/forum-post-result.component.ts");




let ForumPostResultModule = class ForumPostResultModule {
};
ForumPostResultModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_forum_post_result_component__WEBPACK_IMPORTED_MODULE_3__["ForumPostResultComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        ],
    })
], ForumPostResultModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-view/components/forum-post-view.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-post-view/components/forum-post-view.component.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".forum-view-container {\n  max-width: 1160px;\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n\n.forum-view-container {\n  padding: 16px;\n  margin-bottom: 16px;\n  box-sizing: border-box;\n}\n\n@media only screen and (max-width: 599px) {\n  .forum-view-container {\n    padding: 0;\n    margin-bottom: 16px;\n  }\n}\n\n.forum-view-container .image-container {\n  width: 100%;\n  height: 300px;\n  -o-object-fit: fill;\n     object-fit: fill;\n}\n\n.forum-view-container .description-text {\n  position: relative;\n  line-height: 1.4em;\n}\n\n.forum-view-container .blog-container {\n  display: flex;\n  align-items: center;\n}\n\n.forum-view-container .blog-container .icon-section {\n  width: 10%;\n  text-align: center;\n}\n\n@media only screen and (max-width: 599px) {\n  .forum-view-container .blog-container .icon-section {\n    width: 15%;\n  }\n}\n\n.forum-view-container .blog-container .icon-section .vote-count {\n  width: 40px;\n  height: 40px;\n  font-size: 24px;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.grey-icons {\n  color: #A9A9A9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLWNvbW1vbi5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvc29jaWFsL3JvdXRlcy9mb3J1bXMvZm9ydW0tcG9zdC12aWV3L2NvbXBvbmVudHMvZm9ydW0tcG9zdC12aWV3LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc29uYXNoYWp1L1ZpZGVvcy9zcGhlcmUtbW9iaWxlL3Byb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL3NvY2lhbC9yb3V0ZXMvZm9ydW1zL2ZvcnVtLXBvc3Qtdmlldy9jb21wb25lbnRzL2ZvcnVtLXBvc3Qtdmlldy5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLXZhcnMuc2NzcyIsIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLW1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0UsaUJBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0FDVEY7O0FDREE7RUFFRSxhQ01PO0VETFAsbUJDS087RURKUCxzQkFBQTtBREdGOztBR1NFO0VGaEJGO0lBT0ksVUFBQTtJQUNBLG1CQUFBO0VESUY7QUFDRjs7QUNIRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7S0FBQSxnQkFBQTtBREtKOztBQ0FFO0VBQ0Usa0JBQUE7RUFDQSxrQkFKd0I7QURNNUI7O0FDQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QURDSjs7QUNBSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBREVOOztBR2RFO0VGVUU7SUFLSSxVQUFBO0VER047QUFDRjs7QUNETTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBREdSOztBQ0VBO0VBQ0UsY0FBQTtBRENGIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL3NvY2lhbC9yb3V0ZXMvZm9ydW1zL2ZvcnVtLXBvc3Qtdmlldy9jb21wb25lbnRzL2ZvcnVtLXBvc3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy9fd3MtdmFycy5zY3NzJztcbkBpbXBvcnQgJ3N0eWxlcy9fd3MtbWl4aW5zLnNjc3MnO1xuXG4lYmFja2dyb3VuZC1pbWFnZS1jZW50ZXIge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbiVwYWdlLWNlbnRlciB7XG4gIG1heC13aWR0aDogMTE2MHB4O1xuICAvLzgwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuJWhlaWdodC1tYXQtdG9vbGJhci1zaWJsaW5nIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRtYXQtdG9vbGJhci14c30pO1xuXG4gIC8vIHBhZGRpbmc6ICRzaXplLW07XG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQtZ3QteHMge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gI3skbWF0LXRvb2xiYXItZ3QteHN9KTtcbiAgfVxufVxuIiwiLmZvcnVtLXZpZXctY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMTYwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uZm9ydW0tdmlldy1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAuZm9ydW0tdmlldy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgfVxufVxuLmZvcnVtLXZpZXctY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgb2JqZWN0LWZpdDogZmlsbDtcbn1cbi5mb3J1bS12aWV3LWNvbnRhaW5lciAuZGVzY3JpcHRpb24tdGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xufVxuLmZvcnVtLXZpZXctY29udGFpbmVyIC5ibG9nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZm9ydW0tdmlldy1jb250YWluZXIgLmJsb2ctY29udGFpbmVyIC5pY29uLXNlY3Rpb24ge1xuICB3aWR0aDogMTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5mb3J1bS12aWV3LWNvbnRhaW5lciAuYmxvZy1jb250YWluZXIgLmljb24tc2VjdGlvbiB7XG4gICAgd2lkdGg6IDE1JTtcbiAgfVxufVxuLmZvcnVtLXZpZXctY29udGFpbmVyIC5ibG9nLWNvbnRhaW5lciAuaWNvbi1zZWN0aW9uIC52b3RlLWNvdW50IHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZ3JleS1pY29ucyB7XG4gIGNvbG9yOiAjQTlBOUE5O1xufSIsIkBpbXBvcnQgJ3N0eWxlcy9fd3MtY29tbW9uLnNjc3MnO1xuQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuXG4uZm9ydW0tdmlldy1jb250YWluZXIge1xuICBAZXh0ZW5kICVwYWdlLWNlbnRlcjtcbiAgcGFkZGluZzogJHNpemUtbTtcbiAgbWFyZ2luLWJvdHRvbTogJHNpemUtbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cbiAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBvYmplY3QtZml0OiBmaWxsO1xuICB9XG5cbiAgJGRlc2NyaXB0aW9uLWxpbmUtaGVpZ2h0OiAxLjRlbTtcblxuICAuZGVzY3JpcHRpb24tdGV4dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxpbmUtaGVpZ2h0OiAkZGVzY3JpcHRpb24tbGluZS1oZWlnaHQ7XG4gIH1cblxuICAuYmxvZy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAuaWNvbi1zZWN0aW9uIHtcbiAgICAgIHdpZHRoOiAxMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMge1xuICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgfVxuXG4gICAgICAudm90ZS1jb3VudCB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5ncmV5LWljb25zIHtcbiAgY29sb3I6ICNBOUE5QTk7XG59XG4iLCIkZm9udC1mYW1pbHktc2FuczogJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCxcbiAgJ05vdG8gU2FucycsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLFxuICAnTm90byBDb2xvciBFbW9qaSc7XG4kZm9udC1mYW1pbHktc2VyaWY6IEdlb3JnaWEsIENhbWJyaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4kZm9udC1mYW1pbHktbW9ubzogTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdMaWJlcmF0aW9uIE1vbm8nLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4kZm9udC1mYW1pbHktb3Blbi1zYW5zOiAnT3BlbiBTYW5zJztcbiRmb250LWZhbWlseS1vcGVuLXBvcHBpbnM6ICdSb2JvdG8nO1xuXG5cbiRzaXplLXhzOiA4cHg7XG4kc2l6ZS1zOiAxMnB4O1xuJHNpemUtbTogMTZweDtcbiRzaXplLWw6IDI0cHg7XG4kc2l6ZS14bDogMzJweDtcbiRzaXplLWxnOiAyOHB4O1xuJHNpemUteHhsOiA0MHB4O1xuXG4kbWF0LXRvb2xiYXIteHM6IDUycHg7XG4kbWF0LXRvb2xiYXItZ3QteHM6IDU2cHg7XG4iLCJAaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5cbkBtaXhpbiByZXRpbmEge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBwcmludCB7XG4gIEBtZWRpYSBvbmx5IHByaW50IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gYnJlYWtwb2ludC14cyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQteGwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkgYW5kIChtYXgtd2lkdGg6IDUwMDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQteGwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC14cyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtbSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-view/components/forum-post-view.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-post-view/components/forum-post-view.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ForumPostViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumPostViewComponent", function() { return ForumPostViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/SocialForumposts.model */ "./project/ws/app/src/lib/routes/social/routes/forums/models/SocialForumposts.model.ts");
/* harmony import */ var _service_forum_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/forum.service */ "./project/ws/app/src/lib/routes/social/routes/forums/service/forum.service.ts");






let ForumPostViewComponent = class ForumPostViewComponent {
    // tslint:disable-next-line: max-line-length
    constructor(route, forumSvc, configSvc, router) {
        this.route = route;
        this.forumSvc = forumSvc;
        this.configSvc = configSvc;
        this.router = router;
        this.forumViewData = null;
        this.postsOfForum = [];
        this.forumViewResponse = {
            hits: 0,
            result: [],
        };
        this.timelineFetchStatus = 'none';
        this.forumID = '';
        this.myPostTimelineReq = {
            pgNo: -1,
            pgSize: 10,
            postKind: [_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].EPostKind.FORUM, _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].EPostKind.BLOG],
            sessionId: Date.now(),
            type: _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].ETimelineType.ALL,
            source: { id: '', name: _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].EDiscussionType.SOCIAL },
        };
        this.showSocialLike = false;
    }
    ngOnInit() {
        this.route.data.subscribe((rseult) => {
            const data = rseult.content;
            if (data.result) {
                this.route.paramMap.subscribe(params => {
                    const idVal = params.get('id');
                    if (idVal && this.myPostTimelineReq.source) {
                        this.forumID = idVal;
                        data.result.forEach((forum) => {
                            if (forum.id === this.forumID) {
                                this.forumViewData = forum;
                            }
                        });
                        this.fetchPosts();
                    }
                });
            }
        });
        this.showSocialLike = (this.configSvc.restrictedFeatures && !this.configSvc.restrictedFeatures.has('socialLike')) || false;
    }
    fetchPosts() {
        if (this.myPostTimelineReq.source) {
            this.myPostTimelineReq.source.id = this.forumID;
        }
        this.myPostTimelineReq.pgNo += 1;
        this.forumSvc.fetchMyPosts(this.myPostTimelineReq).subscribe(data => {
            this.postsOfForum = [...this.postsOfForum, ...data.result];
            if (data.hits > this.postsOfForum.length) {
                this.timelineFetchStatus = 'hasMore';
            }
            else {
                this.timelineFetchStatus = 'done';
            }
        });
    }
    writePost() {
        this.router.navigate(['/app/social/forums/post/edit'], { queryParams: { forumId: this.forumID } });
    }
};
ForumPostViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_forum_service__WEBPACK_IMPORTED_MODULE_5__["ForumService"] },
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_3__["ConfigurationsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ForumPostViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-forum-post-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forum-post-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-post-view/components/forum-post-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forum-post-view.component.scss */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-view/components/forum-post-view.component.scss")).default]
    })
], ForumPostViewComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-view/forum-post-view.module.ts":
/*!******************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-post-view/forum-post-view.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: ForumPostViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumPostViewModule", function() { return ForumPostViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _library_ws_widget_collection_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../../../library/ws-widget/collection/src/public-api */ "./library/ws-widget/collection/src/public-api.ts");
/* harmony import */ var _components_forum_post_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/forum-post-view.component */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-post-view/components/forum-post-view.component.ts");
/* harmony import */ var _forum_card_forum_card_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../forum-card/forum-card.module */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-card/forum-card.module.ts");








let ForumPostViewModule = class ForumPostViewModule {
};
ForumPostViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_forum_post_view_component__WEBPACK_IMPORTED_MODULE_6__["ForumPostViewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _library_ws_widget_collection_src_public_api__WEBPACK_IMPORTED_MODULE_5__["BtnSocialVoteModule"],
            _library_ws_widget_collection_src_public_api__WEBPACK_IMPORTED_MODULE_5__["BtnSocialLikeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _forum_card_forum_card_module__WEBPACK_IMPORTED_MODULE_7__["ForumCardModule"],
        ],
        exports: [_components_forum_post_view_component__WEBPACK_IMPORTED_MODULE_6__["ForumPostViewComponent"]],
    })
], ForumPostViewModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-view/components/forum-view.component.scss":
/*!************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-view/components/forum-view.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".forum-view-container {\n  max-width: 1160px;\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n\n.forum-view-container {\n  margin-bottom: 32px;\n  box-sizing: border-box;\n}\n\n.forum-view-container .user-image {\n  min-width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n@media only screen and (max-width: 599px) {\n  .forum-view-container .user-image {\n    display: none;\n  }\n}\n\n.forum-view-container .description-text {\n  position: relative;\n  overflow: hidden;\n  height: 2.8em;\n  line-height: 1.4em;\n}\n\n.grey-icons {\n  color: #A9A9A9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLWNvbW1vbi5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvc29jaWFsL3JvdXRlcy9mb3J1bXMvZm9ydW0tdmlldy9jb21wb25lbnRzL2ZvcnVtLXZpZXcuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvcHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvc29jaWFsL3JvdXRlcy9mb3J1bXMvZm9ydW0tdmlldy9jb21wb25lbnRzL2ZvcnVtLXZpZXcuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvc3R5bGVzL193cy12YXJzLnNjc3MiLCIvaG9tZS9zb25hc2hhanUvVmlkZW9zL3NwaGVyZS1tb2JpbGUvc3R5bGVzL193cy1taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNFLGlCQUFBO0VBRUEsNEJBQUE7RUFDQSw2QkFBQTtBQ1RGOztBQ0FBO0VBR0UsbUJDTVE7RURMUixzQkFBQTtBRENGOztBQ0tFO0VBQ0UsZUFaUTtFQWFSLFlBYlE7RUFjUixrQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QURISjs7QUdJRTtFRkxBO0lBT0ksYUFBQTtFREZKO0FBQ0Y7O0FDUUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQU53QjtBREE1Qjs7QUNVQTtFQUNFLGNBQUE7QURQRiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL2ZvcnVtcy9mb3J1bS12aWV3L2NvbXBvbmVudHMvZm9ydW0tdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy9fd3MtdmFycy5zY3NzJztcbkBpbXBvcnQgJ3N0eWxlcy9fd3MtbWl4aW5zLnNjc3MnO1xuXG4lYmFja2dyb3VuZC1pbWFnZS1jZW50ZXIge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbiVwYWdlLWNlbnRlciB7XG4gIG1heC13aWR0aDogMTE2MHB4O1xuICAvLzgwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuJWhlaWdodC1tYXQtdG9vbGJhci1zaWJsaW5nIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRtYXQtdG9vbGJhci14c30pO1xuXG4gIC8vIHBhZGRpbmc6ICRzaXplLW07XG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQtZ3QteHMge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gI3skbWF0LXRvb2xiYXItZ3QteHN9KTtcbiAgfVxufVxuIiwiLmZvcnVtLXZpZXctY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMTYwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uZm9ydW0tdmlldy1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmZvcnVtLXZpZXctY29udGFpbmVyIC51c2VyLWltYWdlIHtcbiAgbWluLXdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5mb3J1bS12aWV3LWNvbnRhaW5lciAudXNlci1pbWFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmZvcnVtLXZpZXctY29udGFpbmVyIC5kZXNjcmlwdGlvbi10ZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDIuOGVtO1xuICBsaW5lLWhlaWdodDogMS40ZW07XG59XG5cbi5ncmV5LWljb25zIHtcbiAgY29sb3I6ICNBOUE5QTk7XG59IiwiQGltcG9ydCAnc3R5bGVzL193cy1jb21tb24uc2Nzcyc7XG5AaW1wb3J0ICdzdHlsZXMvX3dzLXZhcnMuc2Nzcyc7XG5cbiR1c2VyLXNpemU6IDcwcHg7XG4uZm9ydW0tdmlldy1jb250YWluZXIge1xuICBAZXh0ZW5kICVwYWdlLWNlbnRlcjtcbiAgLy9wYWRkaW5nOiAkc2l6ZS1tO1xuICBtYXJnaW4tYm90dG9tOiAkc2l6ZS14bDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAvLyBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgLy8gICAgIHBhZGRpbmc6IDE2cHg7XG4gIC8vIH1cblxuICAudXNlci1pbWFnZSB7XG4gICAgbWluLXdpZHRoOiAkdXNlci1zaXplO1xuICAgIGhlaWdodDogJHVzZXItc2l6ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgJGRlc2NyaXB0aW9uLWxpbmUtY291bnQ6IDI7XG4gICRkZXNjcmlwdGlvbi1saW5lLWhlaWdodDogMS40ZW07XG5cbiAgLmRlc2NyaXB0aW9uLXRleHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogJGRlc2NyaXB0aW9uLWxpbmUtY291bnQgKiAkZGVzY3JpcHRpb24tbGluZS1oZWlnaHQ7XG4gICAgbGluZS1oZWlnaHQ6ICRkZXNjcmlwdGlvbi1saW5lLWhlaWdodDtcbiAgfVxufVxuXG4uZ3JleS1pY29ucyB7XG4gIGNvbG9yOiAjQTlBOUE5O1xufVxuIiwiJGZvbnQtZmFtaWx5LXNhbnM6ICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsXG4gICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJyxcbiAgJ05vdG8gQ29sb3IgRW1vamknO1xuJGZvbnQtZmFtaWx5LXNlcmlmOiBHZW9yZ2lhLCBDYW1icmlhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuJGZvbnQtZmFtaWx5LW1vbm86IE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuJGZvbnQtZmFtaWx5LW9wZW4tc2FuczogJ09wZW4gU2Fucyc7XG4kZm9udC1mYW1pbHktb3Blbi1wb3BwaW5zOiAnUm9ib3RvJztcblxuXG4kc2l6ZS14czogOHB4O1xuJHNpemUtczogMTJweDtcbiRzaXplLW06IDE2cHg7XG4kc2l6ZS1sOiAyNHB4O1xuJHNpemUteGw6IDMycHg7XG4kc2l6ZS1sZzogMjhweDtcbiRzaXplLXh4bDogNDBweDtcblxuJG1hdC10b29sYmFyLXhzOiA1MnB4O1xuJG1hdC10b29sYmFyLWd0LXhzOiA1NnB4O1xuIiwiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuXG5AbWl4aW4gcmV0aW5hIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gICAgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gcHJpbnQge1xuICBAbWVkaWEgb25seSBwcmludCB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGJyZWFrcG9pbnQteHMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LXMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LXhsIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDAwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQtcyB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQtbSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtbHQtbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LXhsIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QteHMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LXMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1sIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-view/components/forum-view.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-view/components/forum-view.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ForumViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumViewComponent", function() { return ForumViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/SocialForumposts.model */ "./project/ws/app/src/lib/routes/social/routes/forums/models/SocialForumposts.model.ts");
/* harmony import */ var _service_EmitterService_forum_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/EmitterService/forum-handler.service */ "./project/ws/app/src/lib/routes/social/routes/forums/service/EmitterService/forum-handler.service.ts");
/* harmony import */ var _service_forum_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/forum.service */ "./project/ws/app/src/lib/routes/social/routes/forums/service/forum.service.ts");



// tslint:disable-next-line: max-line-length




let ForumViewComponent = class ForumViewComponent {
    constructor(_eventEmiter, forumSvc, router, configSvc, valueSvc, route, changeDetect) {
        this._eventEmiter = _eventEmiter;
        this.forumSvc = forumSvc;
        this.router = router;
        this.configSvc = configSvc;
        this.valueSvc = valueSvc;
        this.route = route;
        this.changeDetect = changeDetect;
        this.showSocialLike = false;
        this.panelOpenState = false;
        this.forumViewRequest = {
            sessionId: Date.now(),
            forumKind: _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].EForumKind.FORUM,
            pgNo: 0, pgSize: 20,
            type: _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].EForumViewType.ACTIVEALL,
        };
        this.forumViewResponse = {
            hits: 0,
            result: [],
        };
        this.pageNavbar = this.configSvc.pageNavBar;
        this.timelineFetchStatus = 'none';
        this.isXSmall$ = this.valueSvc.isXSmall$;
        this._eventEmiter.sendFilterStatus(false);
        this._eventEmiter.sendStatusOfPredefinedFilter(false);
    }
    ngOnInit() {
        this.route.data.subscribe((rseult) => {
            this.resetData();
            const data = rseult.content;
            if (data && data.hits && data.result) {
                this.forumViewResponse.hits = data.hits;
                this.forumViewResponse.result = [...this.forumViewResponse.result, ...data.result];
                if (data.hits > this.forumViewResponse.result.length) {
                    this.timelineFetchStatus = 'hasMore';
                }
                else {
                    this.timelineFetchStatus = 'done';
                }
            }
            else {
                this.timelineFetchStatus = 'none';
            }
        });
        this.showSocialLike = (this.configSvc.restrictedFeatures && !this.configSvc.restrictedFeatures.has('socialLike')) || false;
        this._eventEmiter.setActiveComponent('ForumViewComponent');
    }
    fetchTimelineData() {
        if (this.timelineFetchStatus === 'done') {
            return;
        }
        this.timelineFetchStatus = 'fetching';
        this.forumViewRequest.pgNo += 1;
        this.forumSvc.fetchForums(this.forumViewRequest).subscribe(data => {
            if (data.hits && data.result) {
                this.forumViewResponse.hits = data.hits;
                this.forumViewResponse.result = [...this.forumViewResponse.result, ...data.result];
                if (data.hits > this.forumViewResponse.result.length) {
                    this.timelineFetchStatus = 'hasMore';
                }
                else {
                    this.timelineFetchStatus = 'done';
                }
            }
            else {
                this.timelineFetchStatus = 'none';
            }
        }, () => {
            this.timelineFetchStatus = 'error';
        });
    }
    showForumDetail(forumSelected) {
        this.router.navigate([`/app/social/forums/view/${forumSelected.id}`]);
    }
    resetData() {
        this.changeDetect.detectChanges();
    }
};
ForumViewComponent.ctorParameters = () => [
    { type: _service_EmitterService_forum_handler_service__WEBPACK_IMPORTED_MODULE_5__["ForumHandlerService"] },
    { type: _service_forum_service__WEBPACK_IMPORTED_MODULE_6__["ForumService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_3__["ConfigurationsService"] },
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_3__["ValueService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
ForumViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-forum-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forum-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/forum-view/components/forum-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forum-view.component.scss */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-view/components/forum-view.component.scss")).default]
    })
], ForumViewComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/forum-view/forum-view.module.ts":
/*!********************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/forum-view/forum-view.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ForumViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumViewModule", function() { return ForumViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");
/* harmony import */ var _components_forum_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/forum-view.component */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-view/components/forum-view.component.ts");







let ForumViewModule = class ForumViewModule {
};
ForumViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_forum_view_component__WEBPACK_IMPORTED_MODULE_6__["ForumViewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["BtnPageBackModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["BtnSocialLikeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
        ],
        exports: [_components_forum_view_component__WEBPACK_IMPORTED_MODULE_6__["ForumViewComponent"]],
    })
], ForumViewModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/myforum-post/components/myforum-post.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/myforum-post/components/myforum-post.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL2ZvcnVtcy9teWZvcnVtLXBvc3QvY29tcG9uZW50cy9teWZvcnVtLXBvc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/myforum-post/components/myforum-post.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/myforum-post/components/myforum-post.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: MyforumPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyforumPostComponent", function() { return MyforumPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/SocialForumposts.model */ "./project/ws/app/src/lib/routes/social/routes/forums/models/SocialForumposts.model.ts");
/* harmony import */ var _service_EmitterService_forum_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/EmitterService/forum-handler.service */ "./project/ws/app/src/lib/routes/social/routes/forums/service/EmitterService/forum-handler.service.ts");
/* harmony import */ var _service_forum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/forum.service */ "./project/ws/app/src/lib/routes/social/routes/forums/service/forum.service.ts");








let MyforumPostComponent = class MyforumPostComponent {
    constructor(_eventEmitter, forumSvc, configSvc, valueSvc, router) {
        this._eventEmitter = _eventEmitter;
        this.forumSvc = forumSvc;
        this.configSvc = configSvc;
        this.valueSvc = valueSvc;
        this.router = router;
        this.myPostsTimelineData = {
            hits: 0,
            result: [],
            filters: [],
        };
        // searchRequest: {
        //   filters: { [key: string]: string[] }
        // } = {
        //     filters: {},
        //   }
        // searchRequestObject: SocialForum.ISearchRequest = {
        //   filters: {},
        //   postKind: [],
        //   pgNo: 0,
        //   pgSize: 10,
        //   type: SocialForum.ETimelineType.ALL,
        // }
        this.bodyShow = false;
        this.likeBarShow = false;
        this.pageNavbar = this.configSvc.pageNavBar;
        this.myPostTimelineReq = {
            pgNo: -1,
            pgSize: 10,
            postKind: [_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_5__["SocialForum"].EPostKind.FORUM],
            sessionId: Date.now(),
            type: _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_5__["SocialForum"].ETimelineType.MY_PUBLISHED,
            userId: '',
            filters: {},
        };
        this.timelineFetchStatus = 'none';
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"];
        this.isXSmall$ = this.valueSvc.isXSmall$;
        this._eventEmitter.sendStatusOfPredefinedFilter(true);
    }
    ngOnInit() {
        this._eventEmitter.setActiveComponent('MyforumPostComponent');
        // Filters
        this._eventEmitter.sendStatusOfPredefinedFilter(true);
        this.timelineFetchStatus = 'fetching';
        this.fetchMyPost();
    }
    fetchMyPost() {
        //  console.log('The mY post FETCH TIMELINE IS CALLED')
        // if (this.timelineFetchStatus === 'done') {
        //   return
        // }
        this.timelineFetchStatus = 'fetching';
        this.myPostTimelineReq.pgNo += 1;
        this.forumSvc.fetchMyPosts(this.myPostTimelineReq).subscribe(data => {
            if (data.hits && data.result) {
                // console.log('DATA: ', data)
                this.myPostsTimelineData.hits = data.hits;
                // this.myPostsTimelineData.result = [...this.myPostsTimelineData.result, ...data.result]
                this.myPostsTimelineData.result = data.result;
                this.myPostsTimelineData.filters = [...this.myPostsTimelineData.filters, ...data.filters];
                // this.timelineData.result.forEach(post => {
                //   if (post.id == this.posttoBeHidden) {
                //     post.hidden = true
                //   } else {
                //     post.hidden = false
                //   }
                // }
                // )
                // console.log("results are" + this.timelineData.result)
                if (data.hits > this.myPostsTimelineData.result.length) {
                    this.timelineFetchStatus = 'hasMore';
                }
                else {
                    this.timelineFetchStatus = 'done';
                }
            }
            else {
                this.myPostsTimelineData.result = [];
                this.timelineFetchStatus = 'none';
            }
        }, () => {
            this.timelineFetchStatus = 'error';
        });
    }
    writePost() {
        this.router.navigate(['/app/social/forums/post/edit']);
    }
};
MyforumPostComponent.ctorParameters = () => [
    { type: _service_EmitterService_forum_handler_service__WEBPACK_IMPORTED_MODULE_6__["ForumHandlerService"] },
    { type: _service_forum_service__WEBPACK_IMPORTED_MODULE_7__["ForumService"] },
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_4__["ConfigurationsService"] },
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_4__["ValueService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MyforumPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-myforum-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./myforum-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/myforum-post/components/myforum-post.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./myforum-post.component.scss */ "./project/ws/app/src/lib/routes/social/routes/forums/myforum-post/components/myforum-post.component.scss")).default]
    })
], MyforumPostComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/myforum-post/myforum-post.module.ts":
/*!************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/myforum-post/myforum-post.module.ts ***!
  \************************************************************************************************/
/*! exports provided: MyforumPostModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyforumPostModule", function() { return MyforumPostModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");
/* harmony import */ var _forum_card_forum_card_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../forum-card/forum-card.module */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-card/forum-card.module.ts");
/* harmony import */ var _widgets_buttons_btn_flag_btn_flag_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/buttons/btn-flag/btn-flag.module */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-flag/btn-flag.module.ts");
/* harmony import */ var _widgets_buttons_btn_moderator_btn_moderator_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/buttons/btn-moderator/btn-moderator.module */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-moderator/btn-moderator.module.ts");
/* harmony import */ var _widgets_Dialog_Box_dialog_box_moderator_dialog_box_moderator_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/Dialog-Box/dialog-box-moderator/dialog-box-moderator.module */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-moderator/dialog-box-moderator.module.ts");
/* harmony import */ var _components_myforum_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/myforum-post.component */ "./project/ws/app/src/lib/routes/social/routes/forums/myforum-post/components/myforum-post.component.ts");











let MyforumPostModule = class MyforumPostModule {
};
MyforumPostModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_myforum_post_component__WEBPACK_IMPORTED_MODULE_10__["MyforumPostComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["BtnSocialLikeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["BtnPageBackModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["BtnPageBackModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["BtnSocialVoteModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["BtnSocialLikeModule"],
            _widgets_Dialog_Box_dialog_box_moderator_dialog_box_moderator_module__WEBPACK_IMPORTED_MODULE_9__["DialogBoxModeratorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _widgets_buttons_btn_moderator_btn_moderator_module__WEBPACK_IMPORTED_MODULE_8__["BtnModeratorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _widgets_buttons_btn_flag_btn_flag_module__WEBPACK_IMPORTED_MODULE_7__["BtnFlagModule"],
            _forum_card_forum_card_module__WEBPACK_IMPORTED_MODULE_6__["ForumCardModule"],
        ],
    })
], MyforumPostModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/post-create/post-create.component.scss":
/*!***************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/post-create/post-create.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".editor-wrapper {\n  max-width: 700px;\n  margin: auto;\n  padding: 16px;\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.title-textarea {\n  width: 100%;\n  border-bottom: 1px solid;\n  border-radius: 5px;\n  outline: none;\n  font-size: 2rem;\n  resize: none;\n  line-height: 1.3;\n  padding-left: 0.5rem;\n}\n\n.abstract-textarea {\n  width: 100%;\n  border-bottom: 1px solid;\n  border-radius: 5px;\n  outline: none;\n  font-size: 1.2rem;\n  resize: none;\n  line-height: 1.2;\n  padding-left: 0.5rem;\n}\n\n.editor {\n  display: block;\n  min-height: 178px;\n  margin-top: 16px;\n  border: 1px solid;\n  border-radius: 8px;\n}\n\n.error-text {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL2ZvcnVtcy9wb3N0LWNyZWF0ZS9wb3N0LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLXZhcnMuc2NzcyIsInByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL3NvY2lhbC9yb3V0ZXMvZm9ydW1zL3Bvc3QtY3JlYXRlL3Bvc3QtY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUNLTztFREpQLGdCQUFBO0VBQ0EsbUJBQUE7QUVGRjs7QUZLQTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBRUZGOztBRktBO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBRUZGOztBRktBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JDekJPO0VEMEJQLGlCQUFBO0VBQ0ksa0JBQUE7QUVGTjs7QUZLQTtFQUNFLFVBQUE7QUVGRiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL2ZvcnVtcy9wb3N0LWNyZWF0ZS9wb3N0LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy9fd3MtY29tbW9uLnNjc3MnO1xuQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuXG4uZWRpdG9yLXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6ICRzaXplLW07XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi50aXRsZS10ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICByZXNpemU6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xufVxuXG4uYWJzdHJhY3QtdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICByZXNpemU6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xufVxuXG4uZWRpdG9yIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi1oZWlnaHQ6IDE3OHB4O1xuICBtYXJnaW4tdG9wOiAkc2l6ZS1tO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmVycm9yLXRleHQge1xuICBjb2xvcjogcmVkO1xufVxuIiwiJGZvbnQtZmFtaWx5LXNhbnM6ICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsXG4gICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJyxcbiAgJ05vdG8gQ29sb3IgRW1vamknO1xuJGZvbnQtZmFtaWx5LXNlcmlmOiBHZW9yZ2lhLCBDYW1icmlhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuJGZvbnQtZmFtaWx5LW1vbm86IE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuJGZvbnQtZmFtaWx5LW9wZW4tc2FuczogJ09wZW4gU2Fucyc7XG4kZm9udC1mYW1pbHktb3Blbi1wb3BwaW5zOiAnUm9ib3RvJztcblxuXG4kc2l6ZS14czogOHB4O1xuJHNpemUtczogMTJweDtcbiRzaXplLW06IDE2cHg7XG4kc2l6ZS1sOiAyNHB4O1xuJHNpemUteGw6IDMycHg7XG4kc2l6ZS1sZzogMjhweDtcbiRzaXplLXh4bDogNDBweDtcblxuJG1hdC10b29sYmFyLXhzOiA1MnB4O1xuJG1hdC10b29sYmFyLWd0LXhzOiA1NnB4O1xuIiwiLmVkaXRvci13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4udGl0bGUtdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgcmVzaXplOiBub25lO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbn1cblxuLmFic3RyYWN0LXRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcmVzaXplOiBub25lO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbn1cblxuLmVkaXRvciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiAxNzhweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmVycm9yLXRleHQge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/post-create/post-create.component.ts":
/*!*************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/post-create/post-create.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_ws_social_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/ws-social.service */ "./project/ws/app/src/lib/routes/social/services/ws-social.service.ts");










let PostCreateComponent = class PostCreateComponent {
    constructor(route, matSnackBar, configSvc, socialSvc, discussionSvc, valueSvc, router) {
        this.route = route;
        this.matSnackBar = matSnackBar;
        this.configSvc = configSvc;
        this.socialSvc = socialSvc;
        this.discussionSvc = discussionSvc;
        this.valueSvc = valueSvc;
        this.router = router;
        this.isCreatingPost = false;
        this.pageNavbar = this.configSvc.pageNavBar;
        this.postId = '';
        this.editMode = 'create';
        this.forumViewData = null;
        this.title = '';
        this.abstract = '';
        this.body = '';
        this.updatedBody = '';
        this.actionBtnsEnabled = false;
        this.postUpdateRequest = {
            editor: '',
            meta: {
                abstract: '',
                body: '',
                title: '',
            },
            postKind: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__["NsDiscussionForum"].EPostKind.BLOG,
        };
        this.postPublishRequest = {
            postKind: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__["NsDiscussionForum"].EPostKind.BLOG,
            postCreator: '',
            postContent: {
                title: '',
                abstract: '',
                body: '',
            },
            tags: [],
            source: {
                id: '',
                name: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__["NsDiscussionForum"].EDiscussionType.SOCIAL,
            },
        };
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.tagsCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.selectedTags = [];
        this.autocompleteAllTags = [];
        this.tagsFromConversation = [];
        this.fetchTagsStatus = null;
        this.userId = '';
        this.forumId = '';
        this.tagsInput = null;
        this.matAutocomplete = null;
        if (this.configSvc.userProfile) {
            this.userId = this.configSvc.userProfile.userId || '';
        }
        this.postPublishRequest.postCreator = this.userId;
        this.isXSmall$ = this.valueSvc.isXSmall$;
        this.tagsCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])())
            .subscribe((value) => {
            if (value && value.length) {
                this.autocompleteAllTags = [];
                this.fetchTagsStatus = 'fetching';
                this.socialSvc.fetchAutoComplete(value).subscribe(tags => {
                    if (configSvc.restrictedFeatures && !configSvc.restrictedFeatures.has('tags-social')) {
                        tags.push({
                            id: '',
                            name: value,
                        });
                    }
                    this.autocompleteAllTags = tags;
                    this.fetchTagsStatus = 'done';
                }, () => {
                    this.fetchTagsStatus = 'error';
                });
            }
        });
    }
    ngOnInit() {
        this.route
            .queryParams
            .subscribe(params => {
            // Defaults to 0 if no query param provided.
            this.forumId = params['forumId'];
        });
        this.route.paramMap.subscribe(paramMap => {
            const id = paramMap.get('id');
            if (id) {
                this.postId = id;
                this.fetchPost();
            }
            else {
                this.editMode = 'create';
            }
        });
    }
    fetchPost() {
        const conversationRequest = {
            postId: this.postId,
            userId: this.userId || '',
            answerId: '',
            postKind: [],
            sessionId: Date.now(),
        };
        this.discussionSvc.fetchPost(conversationRequest).subscribe(data => {
            if (data && data.mainPost) {
                this.conversation = data;
                if (this.conversation &&
                    this.conversation.mainPost.postCreator.postCreatorId !== this.userId) {
                    this.router.navigate(['error', 'forbidden']);
                }
                if (this.conversation &&
                    this.conversation.mainPost.status === _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__["NsDiscussionForum"].EPostStatus.DRAFT) {
                    this.editMode = 'draft';
                }
                else {
                    this.editMode = 'update';
                }
                if (this.conversation) {
                    this.abstract = this.conversation.mainPost.postContent.abstract;
                    this.body = this.conversation.mainPost.postContent.body;
                    this.updatedBody = this.body;
                    this.title = this.conversation.mainPost.postContent.title;
                    this.selectedTags = this.conversation.mainPost.tags;
                    this.tagsFromConversation = [...this.conversation.mainPost.tags];
                }
            }
        });
    }
    update(successMsg, errorMsg) {
        this.isCreatingPost = true;
        this.postUpdateRequest.editor = this.userId;
        this.postUpdateRequest.meta = {
            title: this.title,
            abstract: this.abstract,
            body: this.updatedBody,
        };
        this.postUpdateRequest.id = this.postId;
        const removedTags = [];
        const addedTags = [];
        for (let i = 0; i < this.tagsFromConversation.length; i += 1) {
            if (!this.selectedTags.map(tag => tag.id).includes(this.tagsFromConversation[i].id)) {
                removedTags.push(this.tagsFromConversation[i]);
            }
        }
        for (let i = 0; i < this.selectedTags.length; i += 1) {
            if (!this.tagsFromConversation.map(tag => tag.id).includes(this.selectedTags[i].id)) {
                addedTags.push(this.selectedTags[i]);
            }
        }
        this.postUpdateRequest.addTags = addedTags;
        this.postUpdateRequest.removeTags = removedTags;
        this.discussionSvc.updatePost(this.postUpdateRequest).subscribe((_data) => {
            this.openSnackBar(successMsg);
            this.isCreatingPost = false;
            this.router.navigate(['../../', this.postId], { relativeTo: this.route });
        }, () => {
            this.openSnackBar(errorMsg);
            this.isCreatingPost = false;
        });
    }
    publishBlog(publishMsg, errorMsg) {
        this.isCreatingPost = true;
        this.postPublishRequest.postContent = {
            title: this.title,
            abstract: this.abstract,
            body: this.updatedBody,
        };
        this.postPublishRequest.source.id = this.forumId;
        this.postPublishRequest.source.name = _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__["NsDiscussionForum"].EDiscussionType.SOCIAL;
        this.postPublishRequest.tags = this.selectedTags;
        this.discussionSvc.publishPost(this.postPublishRequest).subscribe(() => {
            this.openSnackBar(publishMsg);
            this.isCreatingPost = false;
            this.router.navigate(['/app/social/forums']);
        }, () => {
            this.openSnackBar(errorMsg);
            this.isCreatingPost = false;
        });
    }
    removeTag(tag) {
        const index = this.selectedTags.findIndex(pTag => pTag.id === tag.id);
        if (index >= 0) {
            this.selectedTags.splice(index, 1);
        }
    }
    selectTag(event, duplicateMsg, invalidMsg) {
        if (!this.selectedTags.map(tag => tag.name).includes((event.option.value.name || '').trim())) {
            if (this.autocompleteAllTags.map(tag => tag.name).includes(event.option.value.name)) {
                this.selectedTags.push(event.option.value);
            }
            else {
                this.openSnackBar(invalidMsg);
            }
        }
        else {
            this.openSnackBar(duplicateMsg);
        }
        if (this.tagsInput) {
            this.tagsInput.nativeElement.value = '';
        }
        this.tagsCtrl.setValue(null);
    }
    onTextChange(eventData) {
        this.actionBtnsEnabled = eventData.isValid;
        this.updatedBody = eventData.htmlText;
    }
    openSnackBar(message) {
        this.matSnackBar.open(message);
    }
};
PostCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_7__["ConfigurationsService"] },
    { type: _services_ws_social_service__WEBPACK_IMPORTED_MODULE_9__["WsSocialService"] },
    { type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__["WsDiscussionForumService"] },
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_7__["ValueService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tagsInput', { static: true })
], PostCreateComponent.prototype, "tagsInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('auto', { static: true })
], PostCreateComponent.prototype, "matAutocomplete", void 0);
PostCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ws-app-post-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/post-create/post-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-create.component.scss */ "./project/ws/app/src/lib/routes/social/routes/forums/post-create/post-create.component.scss")).default]
    })
], PostCreateComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/post-create/post-create.module.ts":
/*!**********************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/post-create/post-create.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: PostCreateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateModule", function() { return PostCreateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _post_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-create.component */ "./project/ws/app/src/lib/routes/social/routes/forums/post-create/post-create.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let PostCreateModule = class PostCreateModule {
};
PostCreateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_post_create_component__WEBPACK_IMPORTED_MODULE_3__["PostCreateComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["EditorQuillModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["BtnPageBackModule"],
        ],
    })
], PostCreateModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/post-view/post-view.component.scss":
/*!***********************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/post-view/post-view.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blog-container {\n  max-width: 700px;\n  margin: auto;\n  padding: 16px;\n}\n.blog-container .icon-section {\n  width: 10%;\n  text-align: center;\n}\n@media only screen and (max-width: 599px) {\n  .blog-container .icon-section {\n    width: 15%;\n  }\n}\n.blog-container .icon-section .vote-count {\n  width: 40px;\n  height: 40px;\n  font-size: 24px;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nws-widget-user-image {\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  font-size: 50px;\n}\n.post-content {\n  font-size: 1.05rem;\n  line-height: 1.45;\n  word-wrap: break-word;\n}\n.editor {\n  display: block;\n  min-height: 120px;\n  margin-top: 12px;\n  border: 1px solid;\n  border-radius: 8px;\n}\n.new-replies-chip {\n  position: fixed;\n  bottom: 64px;\n  left: 50%;\n  transform: translateX(-50%);\n  text-align: center;\n}\n.panel-header {\n  padding-left: 16px;\n}\n.font-italic {\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL2ZvcnVtcy9wb3N0LXZpZXcvcG9zdC12aWV3LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvc29uYXNoYWp1L1ZpZGVvcy9zcGhlcmUtbW9iaWxlL3N0eWxlcy9fd3MtdmFycy5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvc29jaWFsL3JvdXRlcy9mb3J1bXMvcG9zdC12aWV3L3Bvc3Qtdmlldy5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLW1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUNLTztBQ1BUO0FGSUU7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUVGTjtBQ1dFO0VIWEE7SUFLSSxVQUFBO0VFREo7QUFDRjtBRkdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FFRE47QUZNQTtFQUVFLHFCQUFBO0VBQ0EsV0FGYTtFQUdiLFlBSGE7RUFJYixlQUphO0FFQWY7QUZPQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBRUpGO0FGT0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkNuQ087RURvQ1AsaUJBQUE7RUFDSSxrQkFBQTtBRUpOO0FGT0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FFSkY7QUZPQTtFQUNFLGtCQ2hETztBQzRDVDtBRk9BO0VBQ0Usa0JBQUE7QUVKRiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL2ZvcnVtcy9wb3N0LXZpZXcvcG9zdC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xuQGltcG9ydCAnc3R5bGVzL193cy1taXhpbnMuc2Nzcyc7XG5cbi5ibG9nLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogJHNpemUtbTtcblxuICAuaWNvbi1zZWN0aW9uIHtcbiAgICAgIHdpZHRoOiAxMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcbiAgICAgIHdpZHRoOiAxNSU7XG4gICAgfVxuXG4gICAgLnZvdGUtY291bnQge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuXG53cy13aWRnZXQtdXNlci1pbWFnZSB7XG4gICRpbWFnZS1zaXplOiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAkaW1hZ2Utc2l6ZTtcbiAgaGVpZ2h0OiAkaW1hZ2Utc2l6ZTtcbiAgZm9udC1zaXplOiAkaW1hZ2Utc2l6ZTtcbn1cblxuLnBvc3QtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLmVkaXRvciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgbWFyZ2luLXRvcDogJHNpemUtcztcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5uZXctcmVwbGllcy1jaGlwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206ICRzaXplLXhsICogMjtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBhbmVsLWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogJHNpemUtbTtcbn1cblxuLmZvbnQtaXRhbGljIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuIiwiJGZvbnQtZmFtaWx5LXNhbnM6ICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsXG4gICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJyxcbiAgJ05vdG8gQ29sb3IgRW1vamknO1xuJGZvbnQtZmFtaWx5LXNlcmlmOiBHZW9yZ2lhLCBDYW1icmlhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuJGZvbnQtZmFtaWx5LW1vbm86IE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuJGZvbnQtZmFtaWx5LW9wZW4tc2FuczogJ09wZW4gU2Fucyc7XG4kZm9udC1mYW1pbHktb3Blbi1wb3BwaW5zOiAnUm9ib3RvJztcblxuXG4kc2l6ZS14czogOHB4O1xuJHNpemUtczogMTJweDtcbiRzaXplLW06IDE2cHg7XG4kc2l6ZS1sOiAyNHB4O1xuJHNpemUteGw6IDMycHg7XG4kc2l6ZS1sZzogMjhweDtcbiRzaXplLXh4bDogNDBweDtcblxuJG1hdC10b29sYmFyLXhzOiA1MnB4O1xuJG1hdC10b29sYmFyLWd0LXhzOiA1NnB4O1xuIiwiLmJsb2ctY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmJsb2ctY29udGFpbmVyIC5pY29uLXNlY3Rpb24ge1xuICB3aWR0aDogMTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5ibG9nLWNvbnRhaW5lciAuaWNvbi1zZWN0aW9uIHtcbiAgICB3aWR0aDogMTUlO1xuICB9XG59XG4uYmxvZy1jb250YWluZXIgLmljb24tc2VjdGlvbiAudm90ZS1jb3VudCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxud3Mtd2lkZ2V0LXVzZXItaW1hZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLnBvc3QtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLmVkaXRvciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLm5ldy1yZXBsaWVzLWNoaXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNjRweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBhbmVsLWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuLmZvbnQtaXRhbGljIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufSIsIkBpbXBvcnQgJ3N0eWxlcy9fd3MtdmFycy5zY3NzJztcblxuQG1peGluIHJldGluYSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIHByaW50IHtcbiAgQG1lZGlhIG9ubHkgcHJpbnQge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBicmVha3BvaW50LXhzIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC14bCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSBhbmQgKG1heC13aWR0aDogNTAwMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LXMge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LW0ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWx0LWwge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1sdC14bCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBicmVha3BvaW50LWd0LXhzIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1zIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gYnJlYWtwb2ludC1ndC1tIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIGJyZWFrcG9pbnQtZ3QtbCB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/post-view/post-view.component.ts":
/*!*********************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/post-view/post-view.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PostViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostViewComponent", function() { return PostViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");






let PostViewComponent = class PostViewComponent {
    constructor(dialog, snackBar, configSvc, route, router, discussionSvc) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.configSvc = configSvc;
        this.route = route;
        this.router = router;
        this.discussionSvc = discussionSvc;
        this.conversation = null;
        this.isFirstConversationRequestDone = false;
        this.showSocialLike = false;
        this.pageNavbar = this.configSvc.pageNavBar;
        this.conversationRequest = {
            postId: '',
            userId: '',
            answerId: '',
            postKind: [],
            sessionId: Date.now(),
            sortOrder: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["NsDiscussionForum"].EConversationSortOrder.LATEST_DESC,
            pgNo: 0,
            pgSize: 10,
        };
        this.fetchStatus = 'none';
        this.canUserEdit = false;
        this.replyEnabled = false;
        this.commentText = '';
        this.postingReply = false;
        this.resetEditor = false;
        this.userEmail = '';
        this.userId = '';
        if (this.configSvc.userProfile) {
            this.userId = this.configSvc.userProfile.userId || '';
            this.userEmail = this.configSvc.userProfile.email || '';
        }
        this.conversationRequest.userId = this.userId;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const idVal = params.get('id');
            if (idVal) {
                this.conversationRequest.postId = idVal;
                this.fetchConversationData();
            }
        });
        this.showSocialLike = (this.configSvc.restrictedFeatures && !this.configSvc.restrictedFeatures.has('socialLike')) || false;
    }
    fetchConversationData(forceNew = false) {
        if (this.fetchStatus === 'fetching') {
            return;
        }
        this.fetchStatus = 'fetching';
        if (forceNew) {
            this.conversationRequest.sessionId = Date.now();
            this.conversationRequest.pgNo = 0;
        }
        this.discussionSvc.fetchPost(this.conversationRequest).subscribe(data => {
            if (this.conversationRequest && this.conversationRequest.pgNo) {
                this.conversationRequest.pgNo += 1;
            }
            if (!this.isFirstConversationRequestDone && data && data.mainPost) {
                this.conversation = data;
                if (this.conversation.mainPost.status === _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["NsDiscussionForum"].EPostStatus.DRAFT) {
                    this.router.navigate(['../', 'edit', this.conversationRequest.postId], {
                        relativeTo: this.route,
                    });
                }
                else if (this.conversation.mainPost.status === 'Inactive') {
                    // todo error route
                    this.router.navigate(['error', 'forbidden']);
                }
                this.isFirstConversationRequestDone = true;
                if (this.conversation &&
                    this.conversation.mainPost &&
                    this.conversation.mainPost.postCreator &&
                    this.userId === this.conversation.mainPost.postCreator.postCreatorId) {
                    this.canUserEdit = true;
                }
                this.fetchStatus = 'done';
            }
            else if (this.isFirstConversationRequestDone) {
                if (data && data.replyPost && data.replyPost.length && this.conversation) {
                    if (forceNew) {
                        this.conversation.replyPost = [...data.replyPost];
                    }
                    else {
                        this.conversation.replyPost = [...this.conversation.replyPost, ...data.replyPost];
                    }
                    this.conversation.newPostCount = data.newPostCount;
                    this.conversation.postCount = data.postCount;
                }
                this.fetchStatus = 'done';
            }
            else {
                if (!this.conversation) {
                    this.fetchStatus = 'none';
                }
                else {
                    this.fetchStatus = 'done';
                }
            }
        }, (_err) => {
            if (!this.conversation) {
                this.fetchStatus = 'none';
            }
        });
    }
    deleteBlog(successMsg) {
        const dialogRef = this.dialog.open(_ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["DialogSocialDeletePostComponent"], {
            data: { postId: this.conversationRequest.postId },
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.router.navigate(['app', 'social', 'forums', 'my-forum-post']);
                this.snackBar.open(successMsg);
            }
        });
    }
    publishReply(failureMsg) {
        this.postingReply = true;
        const request = {
            parentId: this.conversationRequest.postId,
            postContent: {
                body: this.commentText,
            },
            postCreator: this.userId || '',
            postKind: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["NsDiscussionForum"].EReplyKind.REPLY,
            source: {
                id: '',
                name: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["NsDiscussionForum"].EDiscussionType.SOCIAL,
            },
        };
        this.discussionSvc.publishPost(request).subscribe(_ => {
            this.fetchConversationData(true);
            this.postingReply = false;
            this.resetEditor = true;
            setTimeout(() => {
                this.resetEditor = false;
            }, 0);
            this.replyEnabled = false;
            this.commentText = '';
        }, (_err) => {
            this.snackBar.open(failureMsg);
            this.postingReply = false;
        });
    }
    onDeleteReply(replyIndex) {
        if (this.conversation) {
            this.conversation.replyPost.splice(replyIndex, 1);
        }
    }
    onTextChange(eventData) {
        this.replyEnabled = eventData.isValid;
        this.commentText = eventData.htmlText;
    }
};
PostViewComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _ws_widget_utils__WEBPACK_IMPORTED_MODULE_4__["ConfigurationsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ws_widget_collection__WEBPACK_IMPORTED_MODULE_5__["WsDiscussionForumService"] }
];
PostViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-post-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/post-view/post-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-view.component.scss */ "./project/ws/app/src/lib/routes/social/routes/forums/post-view/post-view.component.scss")).default]
    })
], PostViewComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/post-view/post-view.module.ts":
/*!******************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/post-view/post-view.module.ts ***!
  \******************************************************************************************/
/*! exports provided: PostViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostViewModule", function() { return PostViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _post_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-view.component */ "./project/ws/app/src/lib/routes/social/routes/forums/post-view/post-view.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");
/* harmony import */ var _ws_widget_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ws-widget/utils */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _blogs_blogs_reply_blogs_reply_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../blogs/blogs-reply/blogs-reply.module */ "./project/ws/app/src/lib/routes/social/routes/blogs/blogs-reply/blogs-reply.module.ts");










let PostViewModule = class PostViewModule {
};
PostViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_post_view_component__WEBPACK_IMPORTED_MODULE_3__["PostViewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__["UserImageModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
            _ws_widget_utils__WEBPACK_IMPORTED_MODULE_7__["PipeSafeSanitizerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _blogs_blogs_reply_blogs_reply_module__WEBPACK_IMPORTED_MODULE_9__["BlogsReplyModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__["BtnSocialLikeModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__["BtnSocialVoteModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__["EditorQuillModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_6__["BtnPageBackModule"],
        ],
        exports: [_post_view_component__WEBPACK_IMPORTED_MODULE_3__["PostViewComponent"]],
    })
], PostViewModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/recent-forum-post/components/recent-forum-post.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/recent-forum-post/components/recent-forum-post.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-spinner {\n  display: inline-block;\n}\n\nmat-card {\n  border-radius: 0;\n}\n\n.views-view-wrapper {\n  max-width: 900px;\n  margin: auto;\n}\n\n.views-view-wrapper .icon-section {\n  width: 10%;\n  min-width: 60px;\n  text-align: center;\n  padding-top: 12px;\n}\n\n.views-view-wrapper .icon-section .vote-count {\n  width: 40px;\n  height: 40px;\n  font-size: 24px;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.views-view-wrapper .body-section {\n  margin: 0 16px;\n  padding-top: 8px;\n}\n\n.views-view-wrapper .user-details {\n  margin: 8px 0px 0px 0px;\n  display: flex;\n  align-items: center;\n  flex-direction: row-reverse;\n}\n\n.views-view-wrapper .user-details .user-profile-image {\n  margin: 0px 10px 0px 0px;\n  width: 50px;\n  height: 50px;\n  font-size: 50px;\n  display: block;\n}\n\n.views-view-wrapper .comment-container {\n  margin: 12px -4px 0px;\n  border-top: 1px solid #a1a1a156;\n}\n\n.views-view-wrapper .comment-container .comment {\n  border-bottom: 1px solid #a1a1a156;\n  padding: 4px 0 4px 16px !important;\n}\n\n.views-view-wrapper .answer-title {\n  margin-top: 24px;\n  padding: 8px 20px;\n  margin-bottom: 3px;\n}\n\n.views-view-wrapper .editor {\n  min-height: 150px;\n  display: block;\n}\n\n.views-view-wrapper .comment-form {\n  width: 100%;\n  margin-top: 16px;\n  display: flex;\n  align-items: center;\n}\n\n.views-view-wrapper .mat-standard-chip {\n  min-height: 26px !important;\n}\n\n.views-view-wrapper .reply-component {\n  display: block;\n  margin-bottom: 8px;\n}\n\n.views-view-wrapper .blogs-container {\n  max-width: 900px;\n  margin: auto;\n  padding: 16px 12px;\n}\n\n.views-view-wrapper .blog-title {\n  font-weight: 600;\n  line-height: 1.35;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL2ZvcnVtcy9yZWNlbnQtZm9ydW0tcG9zdC9jb21wb25lbnRzL3JlY2VudC1mb3J1bS1wb3N0LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvc29jaWFsL3JvdXRlcy9mb3J1bXMvcmVjZW50LWZvcnVtLXBvc3QvY29tcG9uZW50cy9yZWNlbnQtZm9ydW0tcG9zdC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9zdHlsZXMvX3dzLXZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLHFCQUFBO0FDSkY7O0FETUE7RUFDRSxnQkFBQTtBQ0hGOztBREtBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDRkY7O0FER0U7RUFDRSxVQUFBO0VBQ0EsZUFaa0I7RUFhbEIsa0JBQUE7RUFDQSxpQkVSSztBRE9UOztBREdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRE47O0FESUU7RUFDRSxjQUFBO0VBQ0EsZ0JFdkJNO0FEcUJWOztBRElFO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQ0ZKOztBRElJO0VBRUUsd0JBQUE7RUFDQSxXQUZZO0VBR1osWUFIWTtFQUlaLGVBSlk7RUFLWixjQUFBO0FDSE47O0FETUU7RUFDRSxxQkFBQTtFQUNBLCtCQUFBO0FDSko7O0FETUk7RUFDRSxrQ0FBQTtFQUNBLGtDQUFBO0FDSk47O0FET0U7RUFDRSxnQkUvQ0s7RUZnREwsaUJBQUE7RUFDQSxrQkFBQTtBQ0xKOztBRFNFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDUEo7O0FEVUU7RUFDRSxXQUFBO0VBQ0EsZ0JFN0RLO0VGOERMLGFBQUE7RUFDQSxtQkFBQTtBQ1JKOztBRFdFO0VBQ0UsMkJBQUE7QUNUSjs7QURZRTtFQUNFLGNBQUE7RUFDQSxrQkUxRU07QURnRVY7O0FEYUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1hGOztBRGNBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ1pGIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL3NvY2lhbC9yb3V0ZXMvZm9ydW1zL3JlY2VudC1mb3J1bS1wb3N0L2NvbXBvbmVudHMvcmVjZW50LWZvcnVtLXBvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvX3dzLWNvbW1vbi5zY3NzJztcbkBpbXBvcnQgJ3N0eWxlcy9fd3MtdmFycy5zY3NzJztcblxuJGJvcmRlci1jb2xvcjogI2ExYTFhMTU2O1xuJGljb24tY29udGFpbmVyLXNpemU6IDYwcHg7XG5tYXQtc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbm1hdC1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi52aWV3cy12aWV3LXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIC5pY29uLXNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMCU7XG4gICAgbWluLXdpZHRoOiAkaWNvbi1jb250YWluZXItc2l6ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6ICRzaXplLXM7XG5cbiAgICAudm90ZS1jb3VudCB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG4gIC5ib2R5LXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMCAkc2l6ZS1tO1xuICAgIHBhZGRpbmctdG9wOiAkc2l6ZS14cztcbiAgfVxuICAudXNlci1kZXRhaWxzIHtcbiAgICBtYXJnaW46ICRzaXplLXhzIDBweCAwcHggMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG5cbiAgICAudXNlci1wcm9maWxlLWltYWdlIHtcbiAgICAgICR1c2VyLXNpemU6IDUwcHg7XG4gICAgICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XG4gICAgICB3aWR0aDogJHVzZXItc2l6ZTtcbiAgICAgIGhlaWdodDogJHVzZXItc2l6ZTtcbiAgICAgIGZvbnQtc2l6ZTogJHVzZXItc2l6ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuICAuY29tbWVudC1jb250YWluZXIge1xuICAgIG1hcmdpbjogJHNpemUtcyAwcHggLSAoJHNpemUteHMvMikgMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuXG4gICAgLmNvbW1lbnQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgICBwYWRkaW5nOiAoJHNpemUteHMgLyAyKSAwICgkc2l6ZS14cyAvIDIpICRzaXplLW0gIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLmFuc3dlci10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogJHNpemUtbDtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gIH1cblxuICAuZWRpdG9yIHtcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5jb21tZW50LWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6ICRzaXplLW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLm1hdC1zdGFuZGFyZC1jaGlwIHtcbiAgICBtaW4taGVpZ2h0OiAyNnB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucmVwbHktY29tcG9uZW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAkc2l6ZS14cztcbiAgfVxuXG4uYmxvZ3MtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAkc2l6ZS1tICRzaXplLXM7XG59XG5cbi5ibG9nLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMzU7XG59XG5cbn1cbiIsIm1hdC1zcGlubmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5tYXQtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi52aWV3cy12aWV3LXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4udmlld3Mtdmlldy13cmFwcGVyIC5pY29uLXNlY3Rpb24ge1xuICB3aWR0aDogMTAlO1xuICBtaW4td2lkdGg6IDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEycHg7XG59XG4udmlld3Mtdmlldy13cmFwcGVyIC5pY29uLXNlY3Rpb24gLnZvdGUtY291bnQge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4udmlld3Mtdmlldy13cmFwcGVyIC5ib2R5LXNlY3Rpb24ge1xuICBtYXJnaW46IDAgMTZweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbi52aWV3cy12aWV3LXdyYXBwZXIgLnVzZXItZGV0YWlscyB7XG4gIG1hcmdpbjogOHB4IDBweCAwcHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG4udmlld3Mtdmlldy13cmFwcGVyIC51c2VyLWRldGFpbHMgLnVzZXItcHJvZmlsZS1pbWFnZSB7XG4gIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi52aWV3cy12aWV3LXdyYXBwZXIgLmNvbW1lbnQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxMnB4IC00cHggMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ExYTFhMTU2O1xufVxuLnZpZXdzLXZpZXctd3JhcHBlciAuY29tbWVudC1jb250YWluZXIgLmNvbW1lbnQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ExYTFhMTU2O1xuICBwYWRkaW5nOiA0cHggMCA0cHggMTZweCAhaW1wb3J0YW50O1xufVxuLnZpZXdzLXZpZXctd3JhcHBlciAuYW5zd2VyLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbi52aWV3cy12aWV3LXdyYXBwZXIgLmVkaXRvciB7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi52aWV3cy12aWV3LXdyYXBwZXIgLmNvbW1lbnQtZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnZpZXdzLXZpZXctd3JhcHBlciAubWF0LXN0YW5kYXJkLWNoaXAge1xuICBtaW4taGVpZ2h0OiAyNnB4ICFpbXBvcnRhbnQ7XG59XG4udmlld3Mtdmlldy13cmFwcGVyIC5yZXBseS1jb21wb25lbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLnZpZXdzLXZpZXctd3JhcHBlciAuYmxvZ3MtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAxNnB4IDEycHg7XG59XG4udmlld3Mtdmlldy13cmFwcGVyIC5ibG9nLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMzU7XG59IiwiJGZvbnQtZmFtaWx5LXNhbnM6ICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsXG4gICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJyxcbiAgJ05vdG8gQ29sb3IgRW1vamknO1xuJGZvbnQtZmFtaWx5LXNlcmlmOiBHZW9yZ2lhLCBDYW1icmlhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuJGZvbnQtZmFtaWx5LW1vbm86IE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuJGZvbnQtZmFtaWx5LW9wZW4tc2FuczogJ09wZW4gU2Fucyc7XG4kZm9udC1mYW1pbHktb3Blbi1wb3BwaW5zOiAnUm9ib3RvJztcblxuXG4kc2l6ZS14czogOHB4O1xuJHNpemUtczogMTJweDtcbiRzaXplLW06IDE2cHg7XG4kc2l6ZS1sOiAyNHB4O1xuJHNpemUteGw6IDMycHg7XG4kc2l6ZS1sZzogMjhweDtcbiRzaXplLXh4bDogNDBweDtcblxuJG1hdC10b29sYmFyLXhzOiA1MnB4O1xuJG1hdC10b29sYmFyLWd0LXhzOiA1NnB4O1xuIl19 */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/recent-forum-post/components/recent-forum-post.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/recent-forum-post/components/recent-forum-post.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: RecentForumPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentForumPostComponent", function() { return RecentForumPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _library_ws_widget_utils_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../../../../library/ws-widget/utils/src/public-api */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/SocialForumposts.model */ "./project/ws/app/src/lib/routes/social/routes/forums/models/SocialForumposts.model.ts");
/* harmony import */ var _service_EmitterService_forum_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/EmitterService/forum-handler.service */ "./project/ws/app/src/lib/routes/social/routes/forums/service/EmitterService/forum-handler.service.ts");
/* harmony import */ var _service_forum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/forum.service */ "./project/ws/app/src/lib/routes/social/routes/forums/service/forum.service.ts");









let RecentForumPostComponent = class RecentForumPostComponent {
    constructor(activated, _eventEmiter, forumSvc, configSvc, valueSvc, dialog) {
        this.activated = activated;
        this._eventEmiter = _eventEmiter;
        this.forumSvc = forumSvc;
        this.configSvc = configSvc;
        this.valueSvc = valueSvc;
        this.dialog = dialog;
        this.timelineData = {
            hits: 0,
            result: [],
            filters: [],
        };
        this.searchRequest = {
            filters: {},
        };
        this.searchRequestObject = {
            filters: {},
            postKind: [],
            pgNo: -1,
            pgSize: 10,
            type: _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_6__["SocialForum"].ETimelineType.ALL,
        };
        this.pageNavbar = this.configSvc.pageNavBar;
        this.timelineRequest = {
            pgNo: -1,
            pgSize: 10,
            postKind: [_models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_6__["SocialForum"].EPostKind.FORUM],
            sessionId: Date.now(),
            type: _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_6__["SocialForum"].ETimelineType.ALL,
            userId: '',
            filters: {},
        };
        this.timelineFetchStatus = 'none';
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"];
        this.isXSmall$ = this.valueSvc.isXSmall$;
        if (this.configSvc.userProfile) {
            this.timelineRequest.userId = this.configSvc.userProfile.userId || '';
        }
        // console.log('Recent forum postcomop loaded')
        this._eventEmiter.sendFilterStatus(true);
        this._eventEmiter.sendStatusOfPredefinedFilter(false);
    }
    ngOnInit() {
        // data to be sent through service.ts
        this._eventEmiter.setActiveComponent('RecentForumPostComponent');
        // Filters
        this.activated.queryParamMap.subscribe(queryMap => {
            if (queryMap.has('f')) {
                const filters = JSON.parse(queryMap.get('f') || '{}');
                // console.log("The filters in recent forum is" + filters)
                this.searchRequest.filters = filters;
                // console.log("The filters in recent forum in search request is" + JSON.stringify(this.searchRequest.filters))
                this.timelineRequest.filters = this.searchRequest.filters;
            }
            else {
                this.timelineRequest.filters = {};
            }
            this.timelineFetchStatus = 'fetching';
            this.fetchTimelineData('firstCall');
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    fetchTimelineData(type) {
        if (type === 'firstCall') {
            this.timelineRequest.pgNo = 0;
        }
        else {
            this.timelineRequest.pgNo += 1;
        }
        if (this.timelineFetchStatus === 'done') {
            return;
        }
        this.timelineFetchStatus = 'fetching';
        // console.log("The data received when the object is" + callStatus)
        // (this.timelineRequest.pgNo as number) += 1
        //  this.timelineRequest.pgNo = 0
        this.forumSvc.fetchTimelineData(this.timelineRequest).subscribe(data => {
            if (data.hits && data.result) {
                // console.log('DATA: ', data)
                // trial to make view more work properly
                // console.log("The page number is set to " + this.timelineRequest.pgNo)
                //  this.timelineData.result = [...this.timelineData.result, ...data.result]
                this.timelineData.result = data.result;
                // Trial ends here
                this.timelineData.hits = data.hits;
                this.timelineData.filters = [...[], ...data.filters];
                // console.log("filters are" + JSON.stringify(this.timelineData.filters))
                // console.log("The filters that are checked in recent forum in search request is" + JSON.stringify(this.searchRequest.filters))
                // check if the filter is checked
                // second attempt
                this.timelineData.filters.forEach(receivedFilter => {
                    // console.log("Tag name from timelinedata 2nd attempt is" + JSON.stringify(receivedFilter.displayName))
                    Object.keys(this.searchRequest.filters).forEach(appliedfiltertype => {
                        // console.log("The matched data type is " + appliedfiltertype)
                        if (receivedFilter.type === appliedfiltertype) {
                            // console.log("The matched data type is " + appliedfiltertype)
                            // console.log("The corresponding key value is" + this.searchRequest.filters[appliedfiltertype])
                            const temp = this.searchRequest.filters[appliedfiltertype];
                            // console.log("The filter to be operated is" + JSON.stringify(receivedFilter))
                            receivedFilter.checked = true;
                            receivedFilter.content.forEach(subtag => {
                                // console.log("The sub tags are" + JSON.stringify(subtag))
                                // console.log("The value of temp is" + temp.toString())
                                temp.forEach(tempElement => {
                                    if (subtag.type === tempElement.toString()) {
                                        subtag.checked = true;
                                    }
                                });
                            });
                        }
                    });
                });
                // checking filter ends
                // console.log("The filters sentb finally are" + JSON.stringify(this.timelineData.filters))
                this._eventEmiter.sendMessage(this.timelineData.filters);
                // console.log("results are" + this.timelineData.result)
                // console.log("the tuimeline data length is" + this.timelineData.result.length)
                // console.log("The data hits are" + data.hits)
                if (data.hits > this.timelineData.result.length) {
                    this.timelineFetchStatus = 'hasMore';
                }
                else {
                    this.timelineFetchStatus = 'done';
                }
            }
            else {
                this.timelineFetchStatus = 'none';
            }
        }, () => {
            this.timelineFetchStatus = 'error';
        });
    }
};
RecentForumPostComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_EmitterService_forum_handler_service__WEBPACK_IMPORTED_MODULE_7__["ForumHandlerService"] },
    { type: _service_forum_service__WEBPACK_IMPORTED_MODULE_8__["ForumService"] },
    { type: _library_ws_widget_utils_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ConfigurationsService"] },
    { type: _library_ws_widget_utils_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ValueService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
RecentForumPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-recent-forum-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recent-forum-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/recent-forum-post/components/recent-forum-post.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recent-forum-post.component.scss */ "./project/ws/app/src/lib/routes/social/routes/forums/recent-forum-post/components/recent-forum-post.component.scss")).default]
    })
], RecentForumPostComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/recent-forum-post/recent-forum-post.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/recent-forum-post/recent-forum-post.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: RecentForumPostModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentForumPostModule", function() { return RecentForumPostModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ws_widget_collection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ws-widget/collection */ "./library/ws-widget/collection/src/public-api.ts");
/* harmony import */ var _forum_card_forum_card_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../forum-card/forum-card.module */ "./project/ws/app/src/lib/routes/social/routes/forums/forum-card/forum-card.module.ts");
/* harmony import */ var _widgets_buttons_btn_flag_btn_flag_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/buttons/btn-flag/btn-flag.module */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-flag/btn-flag.module.ts");
/* harmony import */ var _components_recent_forum_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/recent-forum-post.component */ "./project/ws/app/src/lib/routes/social/routes/forums/recent-forum-post/components/recent-forum-post.component.ts");



// tslint:disable-next-line: max-line-length








let RecentForumPostModule = class RecentForumPostModule {
    constructor() {
        // console.log('success in reaching recent forum post module')
    }
};
RecentForumPostModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_recent_forum_post_component__WEBPACK_IMPORTED_MODULE_10__["RecentForumPostComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_7__["BtnSocialLikeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_7__["BtnPageBackModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_7__["BtnPageBackModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_7__["BtnSocialVoteModule"],
            _ws_widget_collection__WEBPACK_IMPORTED_MODULE_7__["BtnSocialLikeModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _widgets_buttons_btn_flag_btn_flag_module__WEBPACK_IMPORTED_MODULE_9__["BtnFlagModule"],
            _forum_card_forum_card_module__WEBPACK_IMPORTED_MODULE_8__["ForumCardModule"],
        ],
        exports: [_components_recent_forum_post_component__WEBPACK_IMPORTED_MODULE_10__["RecentForumPostComponent"]],
    })
], RecentForumPostModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/service/forum.service.ts":
/*!*************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/service/forum.service.ts ***!
  \*************************************************************************************/
/*! exports provided: ForumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumService", function() { return ForumService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/SocialForumposts.model */ "./project/ws/app/src/lib/routes/social/routes/forums/models/SocialForumposts.model.ts");





const PROTECTED_SLAG_V8 = '/apis/protected/v8';
const API_END_POINTS = {
    // SOCIAL_TIMELINE: `${PROTECTED_SLAG_V8}/social/post/timelinev2`, // this has to be changed(Temporary)
    SOCIAL_TIMELINE: `${PROTECTED_SLAG_V8}/social/post/timeline`,
    SOCIAL_MODERATOR_TIMELINE: `${PROTECTED_SLAG_V8}/social/moderator/timeline`,
    SOCIAL_FORUMVIEW: `${PROTECTED_SLAG_V8}/social/forum/forumTimeline`,
    SOCIAL_ADMIN_TIMELINE: `${PROTECTED_SLAG_V8}/social/admin/timeline`,
    SOCIAL_FORUM_BY_ID: `${PROTECTED_SLAG_V8}/social/viewForum`,
};
let ForumService = class ForumService {
    constructor(http) {
        this.http = http;
        this.forumViewRequest = {
            sessionId: Date.now(),
            forumKind: _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].EForumKind.FORUM,
            pgNo: 0, pgSize: 20,
            type: _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_4__["SocialForum"].EForumViewType.ACTIVEALL,
        };
        this.forumsSubject = null;
    }
    fetchTimelineData(request) {
        return this.http.post(API_END_POINTS.SOCIAL_TIMELINE, request);
    }
    fetchModeratorTimelineData(timelineRequest) {
        return this.http.post(API_END_POINTS.SOCIAL_MODERATOR_TIMELINE, timelineRequest);
    }
    fetchForums(forumViewRequest) {
        return this.http.post(API_END_POINTS.SOCIAL_FORUMVIEW, forumViewRequest);
    }
    fetchMyPosts(myPostTimelineReq) {
        return this.http.post(API_END_POINTS.SOCIAL_TIMELINE, myPostTimelineReq);
    }
    fetchAdminTimelineData(adminPostTimelineReq) {
        // console.log('The postkind for api call is' + adminPostTimelineReq.postKind)
        return this.http.post(API_END_POINTS.SOCIAL_ADMIN_TIMELINE, adminPostTimelineReq);
    }
    fetchForumsSubject(forumViewRequest) {
        this.http.post(API_END_POINTS.SOCIAL_FORUMVIEW, forumViewRequest)
            .subscribe(data => {
            if (!this.forumsSubject) {
                this.forumsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
            }
            this.forumsSubject.next(data);
        }, _ => {
            if (!this.forumsSubject) {
                this.forumsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
            }
            this.forumsSubject.next();
        });
    }
    fetchForumById(forumId) {
        return this.http.post(API_END_POINTS.SOCIAL_FORUM_BY_ID, { id: forumId });
    }
    getForumsDetails(forumViewRequest) {
        this.forumsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"]();
        this.fetchForumsSubject(forumViewRequest);
        return this.forumsSubject.asObservable();
    }
};
ForumService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ForumService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], ForumService);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin-accept/dialog-box-admin-accept.component.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin-accept/dialog-box-admin-accept.component.scss ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL2ZvcnVtcy93aWRnZXRzL0RpYWxvZy1Cb3gvZGlhbG9nLWJveC1hZG1pbi1hY2NlcHQvZGlhbG9nLWJveC1hZG1pbi1hY2NlcHQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin-accept/dialog-box-admin-accept.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin-accept/dialog-box-admin-accept.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: DialogBoxAdminAcceptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBoxAdminAcceptComponent", function() { return DialogBoxAdminAcceptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let DialogBoxAdminAcceptComponent = class DialogBoxAdminAcceptComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
    }
};
DialogBoxAdminAcceptComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogBoxAdminAcceptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-dialog-box-admin-accept',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-box-admin-accept.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin-accept/dialog-box-admin-accept.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-box-admin-accept.component.scss */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin-accept/dialog-box-admin-accept.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DialogBoxAdminAcceptComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin-accept/dialog-box-admin-accept.module.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin-accept/dialog-box-admin-accept.module.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: DialogBoxAdminAcceptModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBoxAdminAcceptModule", function() { return DialogBoxAdminAcceptModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _dialog_box_admin_accept_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog-box-admin-accept.component */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin-accept/dialog-box-admin-accept.component.ts");






let DialogBoxAdminAcceptModule = class DialogBoxAdminAcceptModule {
};
DialogBoxAdminAcceptModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_dialog_box_admin_accept_component__WEBPACK_IMPORTED_MODULE_5__["DialogBoxAdminAcceptComponent"]],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        ],
        exports: [_dialog_box_admin_accept_component__WEBPACK_IMPORTED_MODULE_5__["DialogBoxAdminAcceptComponent"]],
    })
], DialogBoxAdminAcceptModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin/dialog-box-admin.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin/dialog-box-admin.component.scss ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL2ZvcnVtcy93aWRnZXRzL0RpYWxvZy1Cb3gvZGlhbG9nLWJveC1hZG1pbi9kaWFsb2ctYm94LWFkbWluLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin/dialog-box-admin.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin/dialog-box-admin.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: DialogBoxAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBoxAdminComponent", function() { return DialogBoxAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let DialogBoxAdminComponent = class DialogBoxAdminComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.reasonOfRevival = '';
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
DialogBoxAdminComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogBoxAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-dialog-box-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-box-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin/dialog-box-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-box-admin.component.scss */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin/dialog-box-admin.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DialogBoxAdminComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin/dialog-box-admin.module.ts":
/*!***************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin/dialog-box-admin.module.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: DialogBoxAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBoxAdminModule", function() { return DialogBoxAdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _dialog_box_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-box-admin.component */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin/dialog-box-admin.component.ts");







let DialogBoxAdminModule = class DialogBoxAdminModule {
};
DialogBoxAdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_dialog_box_admin_component__WEBPACK_IMPORTED_MODULE_6__["DialogBoxAdminComponent"]],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        ],
        exports: [_dialog_box_admin_component__WEBPACK_IMPORTED_MODULE_6__["DialogBoxAdminComponent"]],
    })
], DialogBoxAdminModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-moderator/dialog-box-moderator.module.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-moderator/dialog-box-moderator.module.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: DialogBoxModeratorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBoxModeratorModule", function() { return DialogBoxModeratorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dialog_box_moderator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog-box-moderator.component */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-moderator/dialog-box-moderator.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");









let DialogBoxModeratorModule = class DialogBoxModeratorModule {
};
DialogBoxModeratorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dialog_box_moderator_component__WEBPACK_IMPORTED_MODULE_3__["DialogBoxModeratorComponent"]],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        ],
        exports: [_dialog_box_moderator_component__WEBPACK_IMPORTED_MODULE_3__["DialogBoxModeratorComponent"]],
    })
], DialogBoxModeratorModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-admin/btn-admin.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-admin/btn-admin.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL2ZvcnVtcy93aWRnZXRzL2J1dHRvbnMvYnRuLWFkbWluL2J0bi1hZG1pbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-admin/btn-admin.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-admin/btn-admin.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: BtnAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnAdminComponent", function() { return BtnAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/SocialForumposts.model */ "./project/ws/app/src/lib/routes/social/routes/forums/models/SocialForumposts.model.ts");
/* harmony import */ var _Dialog_Box_dialog_box_admin_accept_dialog_box_admin_accept_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Dialog-Box/dialog-box-admin-accept/dialog-box-admin-accept.component */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin-accept/dialog-box-admin-accept.component.ts");
/* harmony import */ var _Dialog_Box_dialog_box_admin_dialog_box_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Dialog-Box/dialog-box-admin/dialog-box-admin.component */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin/dialog-box-admin.component.ts");
/* harmony import */ var _Dialog_Box_dialog_box_moderator_dialog_box_moderator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Dialog-Box/dialog-box-moderator/dialog-box-moderator.component */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-moderator/dialog-box-moderator.component.ts");
/* harmony import */ var _btn_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./btn-admin.service */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-admin/btn-admin.service.ts");








let BtnAdminComponent = class BtnAdminComponent {
    constructor(adminServ, dialog) {
        this.adminServ = adminServ;
        this.dialog = dialog;
        this.type = 'PENDING';
        this.postIdReceived = '';
        this.customevent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // trying the given way
        this.reasonReceivedFromDialog = '';
        // sdkhhdhdkj moderatorBtnSvc
        this.timelineFetchStatus = '';
        this.adminRejectionRequest = {
            id: '',
            userComment: {
                comment: '',
            },
        };
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.revivedId = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.acceptedFlaggedId = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.adminReviveRequest = {
            id: '',
            reactivateReason: ' ',
        };
        // Admin Reactivate deleted post
        this.reasonOfRevival = '';
    }
    ngOnInit() {
        if (this.postIdReceived) {
            // console.log("The postId received is" + this.postIdReceived)
            // this.moderatorRequest.postId = this.postIdReceived
            this.adminRejectionRequest.id = this.postIdReceived;
        }
    }
    reject() {
        // event.stopPropagation()
        this.type = 'PENDING';
        this.openDialog();
    }
    openDialog() {
        const dialogRef = this.dialog.open(_Dialog_Box_dialog_box_moderator_dialog_box_moderator_component__WEBPACK_IMPORTED_MODULE_6__["DialogBoxModeratorComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            // console.log('The dialog was closed')
            // console.log("The result in dialog box is " + result)
            //    this.reasonReceivedFromDialog = result
            if (result === 'Inappropriate Content') {
                // console.log("THE FAVORITE SEASON IS CHECKED")
                this.reasonReceivedFromDialog = 'INAPPROPRIATE_CONTENT';
            }
            else if (result === 'Content Not Original') {
                this.reasonReceivedFromDialog = _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__["SocialForum"].EFlagReason.CONTENT_NOT_ORIGINAL;
            }
            else if (result === 'Irrelevant Content') {
                this.reasonReceivedFromDialog = _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__["SocialForum"].EFlagReason.IRRELEVANT_CONTENT;
            }
            else if (result === 'Inappropriate Content') {
                this.reasonReceivedFromDialog = _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__["SocialForum"].EFlagReason.INAPPROPRIATE_CONTENT;
            }
            if (this.adminRejectionRequest.userComment) {
                this.adminRejectionRequest.userComment.comment = this.reasonReceivedFromDialog;
            }
            if (this.reasonReceivedFromDialog !== '') {
                this.adminServ.reject(this.adminRejectionRequest).subscribe(() => {
                    // console.log("API REJECTION HIT SUCCESSFULLY")
                    // console.log("API REJECTION HIT SUCCESSFULLY")
                    // eventemitter to send postId to the parent so that it can be removed from the list temporarily
                    this.messageEvent.emit(this.postIdReceived);
                }, () => {
                    this.timelineFetchStatus = 'error';
                });
            }
            else {
                this.type = 'REJECT';
            }
            // console.log('This DATA RECEIVED IN NEW WAY IS' + this.reasonReceivedFromDialog)
        });
        // this.deletePost()
    }
    // admin accepting flagged post
    openAdminAcceptDialog() {
        const dialogRefxv = this.dialog.open(_Dialog_Box_dialog_box_admin_accept_dialog_box_admin_accept_component__WEBPACK_IMPORTED_MODULE_4__["DialogBoxAdminAcceptComponent"]);
        dialogRefxv.afterClosed().subscribe(result => {
            // console.log('The dialog was closed')
            if (result === true) {
                //  console.log('COOL...............')
                this.adminReviveRequest.id = this.postIdReceived;
                this.adminServ.revivePost(this.adminReviveRequest).subscribe(() => {
                    this.acceptedFlaggedId.emit(this.postIdReceived);
                }, () => { });
            }
        });
    }
    openAdminReviveDialog() {
        this.adminReviveRequest.id = this.postIdReceived;
        const dialogRef = this.dialog.open(_Dialog_Box_dialog_box_admin_dialog_box_admin_component__WEBPACK_IMPORTED_MODULE_5__["DialogBoxAdminComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            //  console.log('The dialog was closed')
            this.reasonOfRevival = result;
            //  console.log('The reason received FOR REVIVAL is' + this.reasonOfRevival)
            this.adminReviveRequest.reactivateReason = this.reasonOfRevival;
            this.adminServ.revivePost(this.adminReviveRequest).subscribe(() => {
                this.revivedId.emit(this.postIdReceived);
            }, () => { });
        });
    }
};
BtnAdminComponent.ctorParameters = () => [
    { type: _btn_admin_service__WEBPACK_IMPORTED_MODULE_7__["BtnAdminService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BtnAdminComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BtnAdminComponent.prototype, "postIdReceived", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BtnAdminComponent.prototype, "customevent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BtnAdminComponent.prototype, "messageEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BtnAdminComponent.prototype, "revivedId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BtnAdminComponent.prototype, "acceptedFlaggedId", void 0);
BtnAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-btn-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./btn-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-admin/btn-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./btn-admin.component.scss */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-admin/btn-admin.component.scss")).default]
    })
], BtnAdminComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-admin/btn-admin.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-admin/btn-admin.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: BtnAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnAdminModule", function() { return BtnAdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _Dialog_Box_dialog_box_admin_dialog_box_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Dialog-Box/dialog-box-admin/dialog-box-admin.component */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin/dialog-box-admin.component.ts");
/* harmony import */ var _Dialog_Box_dialog_box_admin_dialog_box_admin_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Dialog-Box/dialog-box-admin/dialog-box-admin.module */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-admin/dialog-box-admin.module.ts");
/* harmony import */ var _Dialog_Box_dialog_box_moderator_dialog_box_moderator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Dialog-Box/dialog-box-moderator/dialog-box-moderator.component */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-moderator/dialog-box-moderator.component.ts");
/* harmony import */ var _Dialog_Box_dialog_box_moderator_dialog_box_moderator_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Dialog-Box/dialog-box-moderator/dialog-box-moderator.module */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-moderator/dialog-box-moderator.module.ts");
/* harmony import */ var _btn_moderator_btn_moderator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../btn-moderator/btn-moderator.component */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-moderator/btn-moderator.component.ts");
/* harmony import */ var _btn_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./btn-admin.component */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-admin/btn-admin.component.ts");











let BtnAdminModule = class BtnAdminModule {
};
BtnAdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_btn_admin_component__WEBPACK_IMPORTED_MODULE_10__["BtnAdminComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _Dialog_Box_dialog_box_moderator_dialog_box_moderator_module__WEBPACK_IMPORTED_MODULE_8__["DialogBoxModeratorModule"],
            _Dialog_Box_dialog_box_admin_dialog_box_admin_module__WEBPACK_IMPORTED_MODULE_6__["DialogBoxAdminModule"],
        ],
        exports: [_btn_admin_component__WEBPACK_IMPORTED_MODULE_10__["BtnAdminComponent"]],
        entryComponents: [_btn_moderator_btn_moderator_component__WEBPACK_IMPORTED_MODULE_9__["BtnModeratorComponent"], _Dialog_Box_dialog_box_moderator_dialog_box_moderator_component__WEBPACK_IMPORTED_MODULE_7__["DialogBoxModeratorComponent"], _Dialog_Box_dialog_box_admin_dialog_box_admin_component__WEBPACK_IMPORTED_MODULE_5__["DialogBoxAdminComponent"]],
    })
], BtnAdminModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-admin/btn-admin.service.ts":
/*!***********************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-admin/btn-admin.service.ts ***!
  \***********************************************************************************************************/
/*! exports provided: BtnAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnAdminService", function() { return BtnAdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



const PROTECTED_SLAG_V8 = '/apis/protected/v8';
const API_END_POINTS = {
    // USER_CONTENT_LIKE: `/apis/protected/v8/user/content/like`,
    // USER_CONTENT_UNLIKE: `/apis/protected/v8/user/content/unlike`,
    // CONTENT_LIKES: `/apis/protected/v8/user/content/contentLikes`,
    SOCIAL_ADMIN_DEL: `${PROTECTED_SLAG_V8}/social/admin/deletePost`,
    SOCIAL_ADMIN_REVIVE: `${PROTECTED_SLAG_V8}/social/admin/reactivatePost`,
};
let BtnAdminService = class BtnAdminService {
    constructor(http) {
        this.http = http;
    }
    reject(moderatorRequest) {
        return this.http.post(`${API_END_POINTS.SOCIAL_ADMIN_DEL}`, moderatorRequest);
    }
    revivePost(adminRequest) {
        return this.http.post(`${API_END_POINTS.SOCIAL_ADMIN_REVIVE}`, adminRequest);
    }
};
BtnAdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BtnAdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], BtnAdminService);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-moderator/btn-moderator.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-moderator/btn-moderator.component.scss ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL2ZvcnVtcy93aWRnZXRzL2J1dHRvbnMvYnRuLW1vZGVyYXRvci9idG4tbW9kZXJhdG9yLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvc29jaWFsL3JvdXRlcy9mb3J1bXMvd2lkZ2V0cy9idXR0b25zL2J0bi1tb2RlcmF0b3IvYnRuLW1vZGVyYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InByb2plY3Qvd3MvYXBwL3NyYy9saWIvcm91dGVzL3NvY2lhbC9yb3V0ZXMvZm9ydW1zL3dpZGdldHMvYnV0dG9ucy9idG4tbW9kZXJhdG9yL2J0bi1tb2RlcmF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1idXR0b24tcm93IGJ1dHRvbixcbi5leGFtcGxlLWJ1dHRvbi1yb3cgYSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufSIsIi5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uLFxuLmV4YW1wbGUtYnV0dG9uLXJvdyBhIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59Il19 */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-moderator/btn-moderator.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-moderator/btn-moderator.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: BtnModeratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnModeratorComponent", function() { return BtnModeratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/SocialForumposts.model */ "./project/ws/app/src/lib/routes/social/routes/forums/models/SocialForumposts.model.ts");
/* harmony import */ var _Dialog_Box_dialog_box_moderator_dialog_box_moderator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Dialog-Box/dialog-box-moderator/dialog-box-moderator.component */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-moderator/dialog-box-moderator.component.ts");
/* harmony import */ var _btn_moderator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./btn-moderator.service */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-moderator/btn-moderator.service.ts");






// export interface DialogData {
//   animal: string
//   name: string
// }
let BtnModeratorComponent = class BtnModeratorComponent {
    constructor(moderatorBtnSvc, dialog) {
        this.moderatorBtnSvc = moderatorBtnSvc;
        this.dialog = dialog;
        this.type = 'PENDING';
        this.postIdReceived = '';
        this.customevent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // trying the given way
        this.reasonReceivedFromDialog = '';
        // sdkhhdhdkj moderatorBtnSvc
        this.timelineFetchStatus = '';
        this.moderatorRequest = {
            postId: '',
            action: _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__["SocialForum"].EModeratorAction.ACCEPT,
        };
        this.moderatorRequestRejcetion = {
            postId: '',
            action: _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__["SocialForum"].EModeratorAction.REJECT,
            userComment: {
                type: _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__["SocialForum"].EModeratorReactComment.PREDEFINED,
                comment: '',
            },
        };
        this.errorMessage = '';
        this.postStatus = '';
    }
    ngOnInit() {
        //// console.log("the type received is" + this.type)
        // if (this.configSvc.userProfile) {
        //   this.moderatorRequest.moderatorId = this.configSvc.userProfile.userId || ''
        // }
        if (this.postIdReceived) {
            // console.log("The postId received is" + this.postIdReceived)
            this.moderatorRequest.postId = this.postIdReceived;
            this.moderatorRequestRejcetion.postId = this.postIdReceived;
        }
    }
    accept() {
        //  event.stopPropagation()
        this.moderatorRequest.action = _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__["SocialForum"].EModeratorAction.ACCEPT;
        this.type = 'PENDING';
        // console.log("The post id in request is" + this.moderatorRequest.postId)
        // console.log("The type has been changed to pending on accepting to" + this.type)
        // console.log("The request is" + JSON.stringify(this.moderatorRequest))
        // console.log("The post id in request RETAINED is" + this.moderatorRequest.postId)
        this.moderatorBtnSvc.accept(this.moderatorRequest).subscribe(() => {
            // eventemitter to send postId to the parent so that it can be removed from the list temporarily
            // console.log("The response has been entered")
            this.postStatus = 'Successfully Accepted';
            this.customevent.emit([this.moderatorRequest.postId, this.postStatus]);
        }, () => {
            this.timelineFetchStatus = 'error';
        });
    }
    openDialog() {
        const dialogRef = this.dialog.open(_Dialog_Box_dialog_box_moderator_dialog_box_moderator_component__WEBPACK_IMPORTED_MODULE_4__["DialogBoxModeratorComponent"], {
            data: {
                postId: this.moderatorRequestRejcetion.postId,
                type: 'moderate',
            },
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 'error') {
                this.timelineFetchStatus = 'error';
            }
            else if (result) {
                this.customevent.emit([this.moderatorRequestRejcetion.postId, 'Successfully Rejected']);
            }
            else {
                this.type = 'REJECT';
            }
        });
    }
    reject() {
        // event.stopPropagation()
        this.moderatorRequest.action = _models_SocialForumposts_model__WEBPACK_IMPORTED_MODULE_3__["SocialForum"].EModeratorAction.REJECT;
        this.type = 'PENDING';
        this.openDialog();
    }
};
BtnModeratorComponent.ctorParameters = () => [
    { type: _btn_moderator_service__WEBPACK_IMPORTED_MODULE_5__["BtnModeratorService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BtnModeratorComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BtnModeratorComponent.prototype, "postIdReceived", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BtnModeratorComponent.prototype, "customevent", void 0);
BtnModeratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-btn-moderator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./btn-moderator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-moderator/btn-moderator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./btn-moderator.component.scss */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-moderator/btn-moderator.component.scss")).default]
    })
], BtnModeratorComponent);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-moderator/btn-moderator.module.ts":
/*!******************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-moderator/btn-moderator.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: BtnModeratorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnModeratorModule", function() { return BtnModeratorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _Dialog_Box_dialog_box_moderator_dialog_box_moderator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Dialog-Box/dialog-box-moderator/dialog-box-moderator.component */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-moderator/dialog-box-moderator.component.ts");
/* harmony import */ var _Dialog_Box_dialog_box_moderator_dialog_box_moderator_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Dialog-Box/dialog-box-moderator/dialog-box-moderator.module */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/Dialog-Box/dialog-box-moderator/dialog-box-moderator.module.ts");
/* harmony import */ var _btn_moderator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./btn-moderator.component */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/buttons/btn-moderator/btn-moderator.component.ts");







let BtnModeratorModule = class BtnModeratorModule {
};
BtnModeratorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_btn_moderator_component__WEBPACK_IMPORTED_MODULE_6__["BtnModeratorComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _Dialog_Box_dialog_box_moderator_dialog_box_moderator_module__WEBPACK_IMPORTED_MODULE_5__["DialogBoxModeratorModule"],
        ],
        exports: [_btn_moderator_component__WEBPACK_IMPORTED_MODULE_6__["BtnModeratorComponent"]],
        entryComponents: [_btn_moderator_component__WEBPACK_IMPORTED_MODULE_6__["BtnModeratorComponent"], _Dialog_Box_dialog_box_moderator_dialog_box_moderator_component__WEBPACK_IMPORTED_MODULE_4__["DialogBoxModeratorComponent"]],
    })
], BtnModeratorModule);



/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/filter-display/filter-dispaly.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/widgets/filter-display/filter-dispaly.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul,\nli {\n  list-style-type: none;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  padding-left: 0px;\n}\n\n.nested-filters {\n  padding-left: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvbmFzaGFqdS9WaWRlb3Mvc3BoZXJlLW1vYmlsZS9wcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL2ZvcnVtcy93aWRnZXRzL2ZpbHRlci1kaXNwbGF5L2ZpbHRlci1kaXNwYWx5LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdC93cy9hcHAvc3JjL2xpYi9yb3V0ZXMvc29jaWFsL3JvdXRlcy9mb3J1bXMvd2lkZ2V0cy9maWx0ZXItZGlzcGxheS9maWx0ZXItZGlzcGFseS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7RUFFRSxxQkFBQTtFQUNBLDBCQUFBO1VBQUEseUJBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREVBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJwcm9qZWN0L3dzL2FwcC9zcmMvbGliL3JvdXRlcy9zb2NpYWwvcm91dGVzL2ZvcnVtcy93aWRnZXRzL2ZpbHRlci1kaXNwbGF5L2ZpbHRlci1kaXNwYWx5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL193cy12YXJzLnNjc3MnO1xudWwsXG5saSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgcGFkZGluZy1sZWZ0OjBweDtcbn1cbi5uZXN0ZWQtZmlsdGVycyB7XG4gIHBhZGRpbmctbGVmdDogMiAqICRzaXplLXhsO1xufVxuIiwidWwsXG5saSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5uZXN0ZWQtZmlsdGVycyB7XG4gIHBhZGRpbmctbGVmdDogNjRweDtcbn0iXX0= */");

/***/ }),

/***/ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/filter-display/filter-dispaly.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./project/ws/app/src/lib/routes/social/routes/forums/widgets/filter-display/filter-dispaly.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: FilterDispalyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterDispalyComponent", function() { return FilterDispalyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _library_ws_widget_utils_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../../library/ws-widget/utils/src/public-api */ "./library/ws-widget/utils/src/public-api.ts");
/* harmony import */ var _service_sub_services_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/sub-services/filter.service */ "./project/ws/app/src/lib/routes/social/routes/forums/service/sub-services/filter.service.ts");





let FilterDispalyComponent = class FilterDispalyComponent {
    constructor(activated, router, filterServ, configSvc) {
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
            filters: {},
        };
    }
    ngOnInit() {
        this.activated.queryParamMap.subscribe(queryMap => {
            if (queryMap.has('f')) {
                const filters = JSON.parse(queryMap.get('f') || '{}');
                //   console.log('THE FILTERS ACTIVATEDDDDDDDDDDDDDDDDDD IN FILTER COMPONENT IS' + JSON.stringify(filters))
                this.searchRequest.filters = filters;
            }
        });
        const lang = this.configSvc.userPreference && this.configSvc.userPreference.selectedLocale;
        this.filterServ.translateSearchFilters(lang || 'en').then(val => {
            this.translatedFilters = val;
        });
    }
    filterUnitResponseTrackBy(filter) {
        return filter.id;
    }
    filterUnitTrackBy(filter) {
        return filter.id;
    }
    applyFilters(unitFilterObject) {
        // console.log(unitFilterObject)
        // console.log("The aTYPE OF apply filters received is" + unitFilterObject.filterType)
        this.filtersResponse = [];
        // last  published filter handling starts
        // last  published filter handling ends`
        const filterItem = {
            key: unitFilterObject.filterType,
            value: unitFilterObject.unitFilter.type || '',
            from: unitFilterObject.unitFilter.from || '',
            to: unitFilterObject.unitFilter.to || '',
        };
        // if (unitFilterObject.filterType === "dtPublished") {
        //   filterItem.value = tempval
        // }
        const requestFilters = this.searchRequest.filters;
        let filterRemove = false;
        // console.log("Request filters XXXXXXXXXXXXXXXXXX is" + JSON.stringify(requestFilters[filterItem.key]))
        /// Trial starts
        if (unitFilterObject.filterType === 'dtPublished' && requestFilters[filterItem.key]) {
            requestFilters[filterItem.key].forEach(x => {
                // console.log(x.type)
                if (x.type === unitFilterObject.unitFilter.type) {
                    //   console.log("filtertype remove")
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
            if (requestFilters[filterItem.key] &&
                requestFilters[filterItem.key].indexOf(filterItem.value) !== -1) {
                filterRemove = true;
            }
        }
        if (!filterRemove) {
            this.addFilter(filterItem);
        }
        else {
            this.removeFilter(filterItem);
        }
    }
    addFilter({ key, value, from, to }) {
        const filters = Object.assign({}, this.searchRequest.filters);
        // console.log('IN THE FILTER COMPONENT IS' + JSON.stringify(key) + " value is" + JSON.stringify(value))
        const tempvalx = {
            from,
            to,
            type: value,
        };
        if (key in filters) {
            // console.log("filter key is" + filters[key])
            if (to !== '') {
                //   console.log("case 1")
                filters[key] = [...filters[key], tempvalx];
            }
            else {
                // console.log("case 2")
                filters[key] = [...filters[key], value];
            }
        }
        else {
            //  console.log("case 3")
            if (to !== '') {
                //    console.log("case 1")
                // filters[key] = [...filters[key], tempvalx]
                filters[key] = [tempvalx];
            }
            else {
                filters[key] = [value];
            }
        }
        this.router.navigate([], {
            queryParams: { f: JSON.stringify(filters) },
            relativeTo: this.activated.parent,
            queryParamsHandling: 'merge',
        });
    }
    removeFilter({ key, value }) {
        //  console.log("The remove filter is CSALLED")
        const filters = Object.assign({}, this.searchRequest.filters);
        if (key in filters || filters) {
            // console.log("filters key is" + JSON.stringify(filters[key]))
            filters[key] = filters[key].filter(filter => filter !== value);
            for (const fil in filters) {
                if (filters[fil].length === 0) {
                    delete filters[fil];
                }
            }
            this.router.navigate([], {
                queryParams: { f: JSON.stringify(filters) },
                relativeTo: this.activated.parent,
                queryParamsHandling: 'merge',
            });
        }
        /// trial
        // if (value in filters || filters) {
        //   console.log("filters val is" + JSON.stringify(filters[value]))
        //   filters[key] = filters[key].filter(filter => { filter !== value })
        //   for (const fil in filters) {
        //     if (filters[fil].length === 0) {
        //       delete filters[fil]
        //     }
        //   }
        this.router.navigate([], {
            queryParams: { f: JSON.stringify(filters) },
            relativeTo: this.activated.parent,
            queryParamsHandling: 'merge',
        });
    }
    removeFilters() {
        this.router.navigate([], {
            queryParams: { f: null },
            queryParamsHandling: 'merge',
            relativeTo: this.activated.parent,
        });
    }
};
FilterDispalyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_sub_services_filter_service__WEBPACK_IMPORTED_MODULE_4__["FilterService"] },
    { type: _library_ws_widget_utils_src_public_api__WEBPACK_IMPORTED_MODULE_3__["ConfigurationsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FilterDispalyComponent.prototype, "filtersResponse", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FilterDispalyComponent.prototype, "sideNavBarOpened", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FilterDispalyComponent.prototype, "filtersResetAble", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FilterDispalyComponent.prototype, "filterClose", void 0);
FilterDispalyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ws-app-filter-dispaly',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filter-dispaly.component.html */ "./node_modules/raw-loader/dist/cjs.js!./project/ws/app/src/lib/routes/social/routes/forums/widgets/filter-display/filter-dispaly.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filter-dispaly.component.scss */ "./project/ws/app/src/lib/routes/social/routes/forums/widgets/filter-display/filter-dispaly.component.scss")).default]
    })
], FilterDispalyComponent);



/***/ })

}]);
//# sourceMappingURL=routes-forums-forum-home-module-es2015.js.map