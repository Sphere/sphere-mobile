import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ConfigurationsService } from '@ws-widget/utils/src/lib/services/configurations.service'
import { Observable, of, throwError, Subject, BehaviorSubject } from 'rxjs'
import { catchError, retry, map } from 'rxjs/operators'
import { NsContentStripMultiple } from '../content-strip-multiple/content-strip-multiple.model'
import { NsContent } from './widget-content.model'
import { NSSearch } from './widget-search.model'
import { DataService } from '../../../../../../src/app/modules/core/services/data.service'
// TODO: move this in some common place
const PROTECTED_SLAG_V8 = '/apis/protected/v8'
const PUBLIC_SLAG = '/apis/public/v8'
const API_END_POINTS = {
  CONTENT: `${PROTECTED_SLAG_V8}/content`,
  AUTHORING_CONTENT: `/apis/authApi/hierarchy`,
  LATEST_HOMEPAGE_COURSE: `/apis/public/v8/homePage/latestCourses`,
  CONTENT_LIKES: `${PROTECTED_SLAG_V8}/content/likeCount`,
  SET_S3_COOKIE: `${PROTECTED_SLAG_V8}/content/setCookie`,
  SET_S3_IMAGE_COOKIE: `${PROTECTED_SLAG_V8}/content/setImageCookie`,
  FETCH_MANIFEST: `${PROTECTED_SLAG_V8}/content/getWebModuleManifest`,
  FETCH_WEB_MODULE_FILES: `${PROTECTED_SLAG_V8}/content/getWebModuleFiles`,
  MULTIPLE_CONTENT: `${PROTECTED_SLAG_V8}/content/multiple`,
  CONTENT_SEARCH_V5: `${PROTECTED_SLAG_V8}/content/searchV5`,
  PUBLIC_CONTENT_SEARCH: `${PUBLIC_SLAG}/publicContent/v1/search`,
  CONTENT_SEARCH_V6: `/apis/proxies/v8/sunbirdigot/read`,
  CONTENT_SEARCH_REGION_RECOMMENDATION: `${PROTECTED_SLAG_V8}/content/searchRegionRecommendation`,
  CONTENT_HISTORY: `${PROTECTED_SLAG_V8}/user/history`,
  CONTENT_HISTORYV2: `/apis/proxies/v8/read/content-progres`,
  USER_CONTINUE_LEARNING: `${PROTECTED_SLAG_V8}/user/history/continue`,
  CONTENT_RATING: `${PROTECTED_SLAG_V8}/user/rating`,
  COLLECTION_HIERARCHY: (type: string, id: string) =>
    `${PROTECTED_SLAG_V8}/content/collection/${type}/${id}`,
  REGISTRATION_STATUS: `${PROTECTED_SLAG_V8}/admin/userRegistration/checkUserRegistrationContent`,
  MARK_AS_COMPLETE_META: (contentId: string) => `${PROTECTED_SLAG_V8}/user/progress/${contentId}`,
  COURSE_BATCH_LIST: `/apis/proxies/v8/learner/course/v1/batch/list`,
  ENROLL_BATCH: `/apis/proxies/v8/learner/course/v1/enrol`,
  GOOGLE_AUTHENTICATE: `/apis/public/v8/google/callback`,
  LOGIN_USER: `/apis/public/v8/emailMobile/auth`,
  FETCH_USER_ENROLLMENT_LIST: (userId: string | undefined) =>
    // tslint:disable-next-line: max-line-length
    `/apis/proxies/v8/learner/course/v1/user/enrollment/list/${userId}?orgdetails=orgName,email&licenseDetails=name,description,url&fields=contentType,topic,name,channel,mimeType,appIcon,gradeLevel,resourceType,thumbnail,identifier,medium,pkgVersion,board,subject,trackable,posterImage,duration,creatorLogo,license&batchDetails=name,endDate,startDate,status,enrollmentType,createdBy,certificates`,
  SEARCH_V6PUBLIC: '/apis/public/v8/publicContent/v1/search',
}

@Injectable({
  providedIn: 'root',
})
export class WidgetContentService extends DataService {
  private messageSource = new Subject<any>()
  public currentMessage = this.messageSource.asObservable()
  public _updateValue = new BehaviorSubject<any>(undefined)
  // Observable navItem stream
  updateValue$ = this._updateValue.asObservable()
  constructor(
    public http: HttpClient,
    private configSvc: ConfigurationsService
  ) {
    super(http)
    this.baseUrl = 'https://sphere.aastrika.org/'
  }

  fetchMarkAsCompleteMeta(identifier: string) {

    const options = {
      url: API_END_POINTS.MARK_AS_COMPLETE_META(identifier),
    };
    return this.get(options).pipe(
      map(response => {
        return response
      }),
    )

  }
  changeMessage(message: string) {
    this.messageSource.next(message)
  }


  // tslint:disable-next-line:max-line-length
  fetchUserBatchList(userId: string | undefined): Observable<NsContent.ICourse[]> {
    const options = {
      url: API_END_POINTS.FETCH_USER_ENROLLMENT_LIST(userId),
    };
    return this.get(options).pipe(
      map(
        (data: any) => data.result.courses
      ),
    )
  }

  fetchHierarchyContent(contentId: string): Observable<NsContent.IContent> {
    const url = `/apis/proxies/v8/action/content/v3/hierarchy/${contentId}?hierarchyType=detail`
    const options = {
      url: url,
    };
    return this.get(options).pipe(
      retry(1),
    )
  }

  processCertificate(req: any): Observable<any> {
    const url = `/apis/proxies/v8/course/batch/cert/v1/issue/`
    const options = {
      url: url,
      data: req,
    };
    return this.post(options)
  }

  downloadCertificateAPI(certificateId: string): Observable<any> {
    const url = `/apis/proxies/v8/certreg/v2/certs/download/${certificateId}`
    const options = {
      url: url,
    };
    return this.get(options).pipe(
      retry(1),
    )
  }

  getCertificateAPI(certificateId: string): Observable<any> {
    const url = `/apis/proxies/v8/certreg/v2/certs/download/${certificateId}`
    const options = {
      url: url,
    };
    const apiData = this.get(options).pipe(
      retry(1), map(res => this._updateValue.next({ [certificateId]: res.result.printUri }))
    )
    return apiData
  }

  fetchContent(
    contentId: string,
    hierarchyType: 'all' | 'minimal' | 'detail' = 'detail',
    _additionalFields: string[] = [],
    primaryCategory?: string | null,
  ): Observable<NsContent.IContent> {
    let url = ''
    if (primaryCategory && this.isResource(primaryCategory)) {
      url = `/apis/proxies/v8/action/content/v3/read/${contentId}`
    } else {
      url = `/apis/proxies/v8/action/content/v3/hierarchy/${contentId}?hierarchyType=${hierarchyType}`
    }
    const options = {
      url: url,
    };
    return this.get(options).pipe(
      retry(1),
    )
  }

  isResource(primaryCategory: string) {
    if (primaryCategory) {
      const isResource = primaryCategory === NsContent.EResourcePrimaryCategories.LEARNING_RESOURCE
      return isResource
    }
    return false
  }

  fetchAuthoringContent(contentId: string): Observable<NsContent.IContent> {
    const url = `${API_END_POINTS.AUTHORING_CONTENT}/${contentId}`
    const options = {
      url: url,
    };
    return this.get(options).pipe(
      retry(1),
    )
  }
  fetchMultipleContent(ids: string[]): Observable<NsContent.IContent[]> {
    const url = `${API_END_POINTS.MULTIPLE_CONTENT}/${ids.join(',')}`
    const options = {
      url: url,
    };
    return this.get(options)
  }
  fetchCollectionHierarchy(type: string, id: string, pageNumber: number = 0, pageSize: number = 1) {
    const url = `${API_END_POINTS.COLLECTION_HIERARCHY(
      type,
      id,
    )}?pageNumber=${pageNumber}&pageSize=${pageSize}`
    const options = {
      url: url,
    };
    return this.get(
      options
    )
  }
  enrollUserToBatch(req: any) {
    const options = {
      url: API_END_POINTS.ENROLL_BATCH,
      data: req,
    };
    return this.post(options)
  }

  fetchContentLikes(contentIds: { content_id: string[] }) {
    const options = {
      url: API_END_POINTS.CONTENT_LIKES,
      data: contentIds,
    }
    return this.post(options).toPromise()
  }
  fetchContentRatings(contentIds: { contentIds: string[] }) {
    const options = {
      url: `${API_END_POINTS.CONTENT_RATING}/rating`,
      data: contentIds,
    }
    return this.post(options).toPromise()
  }

  fetchContentHistory(contentId: string): Observable<NsContent.IContinueLearningData> {
    const options = {
      url: `${API_END_POINTS.CONTENT_HISTORY}/${contentId}`,
    }
    return this.get(options)
  }

  fetchContentHistoryV2(req: NsContent.IContinueLearningDataReq): Observable<NsContent.IContinueLearningData> {
    req.request.fields = ['progressdetails']
    const options = {
      url: `${API_END_POINTS.CONTENT_HISTORYV2}/${req.request.courseId}`,
      data: req,
    };
    return this.post(options)
  }
  async continueLearning(id: string, collectionId?: string, collectionType?: string): Promise<any> {
    return new Promise(async resolve => {
      if (collectionType &&
        collectionType.toLowerCase() === 'playlist') {
        const reqBody = {
          contextPathId: collectionId ? collectionId : id,
          resourceId: id,
          data: JSON.stringify({
            timestamp: Date.now(),
            contextFullPath: [collectionId, id],
          }),
          dateAccessed: Date.now(),
          contextType: 'playlist',
        }
        await this.saveContinueLearning(reqBody).toPromise().catch().finally(() => {
          resolve(true)
        }
        )
      } else {
        const reqBody = {
          contextPathId: collectionId ? collectionId : id,
          resourceId: id,
          data: JSON.stringify({ timestamp: Date.now() }),
          dateAccessed: Date.now(),
        }
        await this.saveContinueLearning(reqBody).toPromise().catch().finally(() => {
          resolve(true)
        })
      }
    })
  }
  saveContinueLearning(content: NsContent.IViewerContinueLearningRequest): Observable<any> {
    const url = API_END_POINTS.USER_CONTINUE_LEARNING
    const options = {
      url: url,
      data: content,
    };
    return this.post(options)
  }

  setS3Cookie(
    contentId: string,
    // _path: string,
  ): Observable<any> {
    const options = {
      url: API_END_POINTS.SET_S3_COOKIE,
      data: { contentId },
    };
    return this.post(options).pipe(catchError(_err => of(true)))
  }

  setS3ImageCookie(): Observable<any> {
    const options = {
      url: API_END_POINTS.SET_S3_IMAGE_COOKIE,
      data: {},
    };
    return this.post(options).pipe(catchError(_err => of(true)))
  }

  fetchManifest(url: string): Observable<any> {
    const options = {
      url: API_END_POINTS.FETCH_MANIFEST,
      data: { url },
    };
    return this.post(options)
  }
  fetchWebModuleContent(url: string): Observable<any> {
    return this.get(`${API_END_POINTS.FETCH_WEB_MODULE_FILES}?url=${encodeURIComponent(url)}`)
  }
  search(req: NSSearch.ISearchRequest): Observable<NSSearch.ISearchApiResult> {
    req.query = req.query || ''
    const options = {
      url: API_END_POINTS.CONTENT_SEARCH_V5,
      data: { request: req, },
    };
    return this.post(options)
  }

  searchRegionRecommendation(
    req: NSSearch.ISearchOrgRegionRecommendationRequest,
  ): Observable<NsContentStripMultiple.IContentStripResponseApi> {
    req.query = req.query || ''
    req.preLabelValue =
      (req.preLabelValue || '') +
      ((this.configSvc.userProfile && this.configSvc.userProfile.country) || '')
    req.filters = {
      ...req.filters,
      labels: [req.preLabelValue || ''],
    }
    const options = {
      url: API_END_POINTS.CONTENT_SEARCH_REGION_RECOMMENDATION,
      data: { request: req },
    };
    return this.post(options)
  }
  searchV6(req: NSSearch.ISearchV6Request) {
    req.query = req.query || ''
    req.sort = [
      {
        lastUpdatedOn: 'desc',
      },
    ]
    const options = {
      url: API_END_POINTS.PUBLIC_CONTENT_SEARCH,
      data: req,
    };
    return this.post(options)
  }

  publicContentSearch(req: NSSearch.ISearchV6Request) {
    req.query = req.query || ''
    const options = {
      url: API_END_POINTS.PUBLIC_CONTENT_SEARCH,
      data: req,
    };
    return this.post(options)
  }
  fetchContentRating(contentId: string): Observable<{ rating: number }> {
    const url = `${API_END_POINTS.CONTENT_RATING}/${contentId}`
    const options = {
      url: url,
    };
    return this.get(options)
  }
  deleteContentRating(contentId: string): Observable<any> {
    const options = {
      url: `${API_END_POINTS.CONTENT_RATING}/${contentId}`,
    }
    return this.delete(options)
  }
  addContentRating(contentId: string, data: { rating: number }): Observable<any> {
    const options = {
      url: `${API_END_POINTS.CONTENT_RATING}/${contentId}`,
      data: data,
    };
    return this.post(options)
  }

  getFirstChildInHierarchy(content: NsContent.IContent): NsContent.IContent {
    if (!(content.children || []).length) {
      return content
    }
    if (
      content.contentType === 'Learning Path' &&
      !(content.artifactUrl && content.artifactUrl.length)
    ) {
      const child = content.children[0]
      return this.getFirstChildInHierarchy(child)
    }
    if (
      content.contentType === 'Resource' ||
      content.contentType === 'Knowledge Artifact' ||
      content.contentType === 'Learning Path'
    ) {
      return content
    }
    const firstChild = content.children[0]
    const resultContent = this.getFirstChildInHierarchy(firstChild)
    return resultContent
  }

  getRegistrationStatus(source: string): Promise<{ hasAccess: boolean; registrationUrl?: string }> {
    const url = `${API_END_POINTS.REGISTRATION_STATUS}/${source}`
    const options = {
      url: url,
    };
    return this.get(options).toPromise()
  }

  fetchConfig(url: string) {
    const options = {
      url: url,
    };
    return this.get(options)
  }

  loginAuth(req: any): Observable<any> {
    const options = {
      url: API_END_POINTS.LOGIN_USER,
      data: req,
    };
    return this.post(options).pipe(retry(1),
      map(
        (data: any) => data
      )
    )
  }
  googleAuthenticate(req: any): Observable<any> {
    const options = {
      url: API_END_POINTS.GOOGLE_AUTHENTICATE,
      data: req,
    };
    return this.post(options).pipe(catchError(this.handleError))
  }
  handleError(error: HttpErrorResponse) {
    return throwError(error)
  }
  fetchCourseBatches(req: any): Observable<NsContent.IBatchListResponse> {
    const options = {
      url: API_END_POINTS.COURSE_BATCH_LIST,
      data: req,
    };
    return this.post(options).pipe(
      retry(1),
      map(
        (data: any) => data.result.response
      )
    )
  }

  getLatestCourse() {
    const url = `${API_END_POINTS.LATEST_HOMEPAGE_COURSE}`
    const options = {
      url: url,
    };
    return this.get(options)
  }

  getLiveSearchResults(): Observable<any> {
    const req = {
      request: {
        filters: {
          primaryCategory: ['Course'], contentType: ['Course'], status: ['Live'],
        },
      }, query: '', sort: [{ lastUpdatedOn: 'desc' }],
    }
    const options = {
      url: API_END_POINTS.SEARCH_V6PUBLIC,
      data: req,
    };
    return this.post(options)
  }
}
