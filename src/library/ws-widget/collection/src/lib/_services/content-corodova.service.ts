import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { ConfigurationsService } from '@ws-widget/utils/src/lib/services/configurations.service'
import { Observable, of, throwError, Subject, BehaviorSubject } from 'rxjs'
import { catchError, retry, map } from 'rxjs/operators'
import { NsContentStripMultiple } from '../content-strip-multiple/content-strip-multiple.model'
import { NsContent } from './widget-content.model'
import { NSSearch } from './widget-search.model'

import { DataService } from '@app/app/modules/core/services/data.service'
import { AuthService } from 'sunbird-sdk';
import { UtilityService } from '@app/app/modules/core/services/utility-service'
// TODO: move this in some common place
const API_END_POINTS = {
  SEARCH_V6PUBLIC: '/apis/public/v8/publicContent/v1/search',
}

@Injectable({
  providedIn: 'root',
})
export class ContentCorodovaService extends DataService {
  private messageSource = new Subject<any>()
  public currentMessage = this.messageSource.asObservable()
  public _updateValue = new BehaviorSubject<any>(undefined)
  // Observable navItem stream
  updateValue$ = this._updateValue.asObservable()
  constructor(
    public http: HttpClient,
    private configSvc: ConfigurationsService,
    private utilityService:UtilityService,
    @Inject('AUTH_SERVICE') public authService: AuthService,
  ) {
    super(http,authService)
    this.utilityService.getBuildConfigValue('BASE_URL').then((url)=>{
        console.log('url here', url)
        this.baseUrl = url ? url: 'https://sphere.aastrika.org'
      })
    
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
