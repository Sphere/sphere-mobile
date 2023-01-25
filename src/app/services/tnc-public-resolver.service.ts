import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigurationsService, IResolveResponse } from '@ws-widget/utils/src/public-api';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { NsTnc } from '../models/tnc.model';

@Injectable()
export class TncPublicResolverService {

  constructor(
    private http: HttpClient,
    private configSvc: ConfigurationsService
  ) { }

  resolve(): Observable<IResolveResponse<NsTnc.ITnc>> {
    return this.getPublicTnc().pipe(
      map(data => ({ data, error: null })),
      catchError(error => of({ error, data: null })),
    )
  }

  getPublicTnc(locale?: string): Observable<NsTnc.ITnc> {
    let url = `${this.configSvc.sitePath}/tnc.config.json`
    if (locale) {
      url += `?locale=${locale}`
    }
    return this.http.get<NsTnc.ITnc>(url)
  }
}
