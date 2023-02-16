import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { NsError, ROOT_WIDGET_CONFIG } from '@ws-widget/collection/src/public-api';
import { NsWidgetResolver } from '@ws-widget/resolver/src/public-api';
import { LoggerService, ConfigurationsService } from '@ws-widget/utils/src/public-api';
import { UserProfileService } from '@ws/app/src/lib/routes/user-profile/services/user-profile.service';
import { delay } from 'lodash';
import { Subscription, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { NsTnc } from 'src/app/models/tnc.model';
import { SignupService } from '../../../app/modules/public/services/signup/signup.service';
import { TncAppResolverService } from 'src/app/services/tnc-app-resolver.service';
import { TncPublicResolverService } from 'src/app/services/tnc-public-resolver.service';

@Component({
  selector: 'app-new-tnc',
  templateUrl: './new-tnc.component.html',
  styleUrls: ['./new-tnc.component.scss'],
})
export class NewTncComponent implements OnInit {

  tncData: NsTnc.ITnc | null = null
  routeSubscription: Subscription | null = null
  isAcceptInProgress = false
  errorInAccepting = false
  isPublic = false
  result: any
  userId = ''
  createUserForm!: FormGroup
  showAcceptbtn = true
  errorWidget: NsWidgetResolver.IRenderConfigWithTypedData<NsError.IWidgetErrorResolver> = {
    widgetType: ROOT_WIDGET_CONFIG.errorResolver._type,
    widgetSubType: ROOT_WIDGET_CONFIG.errorResolver.errorResolver,
    widgetData: {
      errorType: 'internalServer',
    },
  }
  userData: any
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private loggerSvc: LoggerService,
    private configSvc: ConfigurationsService,
    private tncProtectedSvc: TncAppResolverService,
    private tncPublicSvc: TncPublicResolverService,
    private userProfileSvc: UserProfileService,
    private http: HttpClient,
    private signupService: SignupService,
  ) {
  }

  async ngOnInit() {
    this.routeSubscription = this.activatedRoute.data.subscribe((response: Data) => {
      if (response.tnc.data) {
        this.tncData = response.tnc.data
        // this.configSvc.isNewUser = Boolean(this.tncData && this.tncData.isNewUser)
        this.isPublic = response.isPublic || false
      } else {
        this.router.navigate(['error-service-unavailable'])
        // this.errorFetchingTnc = true
      }
    })

    if (this.configSvc.unMappedUser) {
      this.userProfileSvc.getUserdetailsFromRegistry(this.configSvc.unMappedUser.id).subscribe((userDetails: any) => {
        this.userData = userDetails
        if (userDetails.profileDetails) {
          if (userDetails.tcStatus === 'false') {
            this.showAcceptbtn = true
          } else {
            this.showAcceptbtn = false
          }

        } else {
          this.showAcceptbtn = true
        }
      })
    }

    this.result = await this.signupService.fetchStartUpDetails()
    this.createUserForm = this.createTncFormFields()
  }

  createTncFormFields() {
    return new FormGroup({
      tncAccepted: new FormControl(''),
      firstname: new FormControl('', []),
      middlename: new FormControl('', []),
      surname: new FormControl('', []),
      mobile: new FormControl('', []),
      telephone: new FormControl('', []),
      primaryEmail: new FormControl('', []),
      primaryEmailType: new FormControl('', []),
      dob: new FormControl('', []),
      regNurseRegMidwifeNumber: new FormControl('', []),
    })
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe()
    }
  }

  getTnc(locale: string) {
    let dpData: NsTnc.ITncUnit
    if (this.tncData) {
      dpData = this.tncData.termsAndConditions.filter(term => term.name === 'Data Privacy')[0]
      const tncTerm = this.tncData.termsAndConditions.filter(term => term.name === 'Generic T&C')[0]
      if (locale === tncTerm.language) {
        return
      }
      if (this.isPublic) {
        this.tncPublicSvc.getPublicTnc(locale).subscribe(data => {
          this.assignTncData(dpData, data)
        })
      } else {
        this.tncProtectedSvc.getTnc(locale).subscribe(data => {
          this.assignTncData(dpData, data)
        })
      }
    }
  }
  private assignTncData(dpData: NsTnc.ITncUnit, data: NsTnc.ITnc) {
    data.termsAndConditions[1] = { ...dpData }
    if (this.tncData) {
      this.tncData = {
        ...data,
      }
    }
  }

  getDp(locale: string) {
    let tncData: NsTnc.ITncUnit
    if (this.tncData) {
      tncData = this.tncData.termsAndConditions.filter(term => term.name === 'Generic T&C')[0]
      const dpTerm = this.tncData.termsAndConditions.filter(term => term.name === 'Data Privacy')[0]
      if (locale === dpTerm.language) {
        return
      }
      if (this.isPublic) {
        this.tncPublicSvc.getPublicTnc(locale).subscribe(data => {
          this.assignDp(tncData, data)
        })
      } else {
        this.tncProtectedSvc.getTnc(locale).subscribe(data => {
          this.assignDp(tncData, data)
        })
      }
    }
  }
  assignDp(tncData: NsTnc.ITncUnit, data: NsTnc.ITnc) {
    data.termsAndConditions[0] = tncData
    if (this.tncData) {
      this.tncData = {
        ...data,
      }
    }
  }

  async gotoLogin() {
    // this.http.get('/apis/proxies/v8/logout/user').toPromise()
    // this.configSvc.userProfile = null
    // this.router.navigate(['/app/login'])
    try {
      const url = `${document.baseURI}public/home`
      const keycloakurl = `${document.baseURI}auth/realms/sunbird/protocol/openid-connect/logout?redirect_uri=${encodeURIComponent(url)}`
      window.location.href = keycloakurl
      await this.http.get('/apis/proxies/v8/logout/user').toPromise()
      localStorage.removeItem('telemetrySessionId')
      localStorage.removeItem('loginbtn')
      localStorage.removeItem('url_before_login')
      localStorage.removeItem('tocData')
      localStorage.removeItem(`userUUID`)
    } catch (error) { }
  }

  private constructReq(form: any) {
    const userObject = form.value
    Object.keys(userObject).forEach(key => {
      if (userObject[key] === '') {
        delete userObject[key]
      }
    })
    if (this.configSvc.userProfile) {
      this.userId = this.configSvc.userProfile.userId || ''
    }
    const profileReq = {
      profileReq: {
        id: this.userId,
        userId: this.userId,
        personalDetails: userObject,
      },
    }
    return profileReq
  }

  acceptTnc() {
    if (this.tncData) {
      const generalTnc = this.tncData.termsAndConditions.filter(
        tncUnit => tncUnit.name === 'Generic T&C',
      )[0]
      const dataPrivacy = this.tncData.termsAndConditions.filter(
        tncUnit => tncUnit.name === 'Data Privacy',
      )[0]
      const termsAccepted: NsTnc.ITermAccepted[] = []
      if (generalTnc) {
        termsAccepted.push({
          acceptedLanguage: generalTnc.language,
          docName: generalTnc.name,
          version: generalTnc.version,
        })
      }
      if (dataPrivacy) {
        termsAccepted.push({
          acceptedLanguage: dataPrivacy.language,
          docName: dataPrivacy.name,
          version: dataPrivacy.version,
        })
      }
      this.isAcceptInProgress = true

      this.createUserForm.controls.tncAccepted.setValue('true')
      if (this.configSvc.userProfile) {
        this.userId = this.configSvc.userProfile.userId || ''
        this.createUserForm.controls.primaryEmail.setValue(this.configSvc.userProfile.email || '')
        this.createUserForm.controls.firstname.setValue(this.configSvc.userProfile.firstName || '')
        this.createUserForm.controls.surname.setValue(this.configSvc.userProfile.lastName || '')
        this.createUserForm.controls.regNurseRegMidwifeNumber.setValue('[NA]')
      }
      /* this changes for ebhyass*/
      if (this.userData.tcStatus === 'false') {
        const reqUpdate = {
          request: {
            userId: this.userId,
            profileDetails: this.userData.profileDetails,
            tcStatus: 'true',
          },
        }
        this.updateUser(reqUpdate)

      } else {
        const profileRequest = this.constructReq(this.createUserForm)
        const reqUpdate = {
          request: {
            userId: this.userId,
            profileDetails: profileRequest,
          },
        }
        this.updateUser(reqUpdate)
      }

    } else {
      this.errorInAccepting = false
    }
  }
  updateUser(reqUpdate: any) {
    this.userProfileSvc.updateProfileDetails(reqUpdate).subscribe(data => {
      if (data) {
        this.configSvc.profileDetailsStatus = true
        this.configSvc.hasAcceptedTnc = true
        if (this.result.tncStatus) {
          // if (this.configSvc.unMappedUser) {
          //   this.userProfileSvc.getUserdetailsFromRegistry(this.configSvc.unMappedUser.id).pipe(delay(100), mergeMap((userData: any) => {
          //     return of(userData)
          //   })).subscribe((userDetails: any) => {
          //     if (userDetails.profileDetails.profileReq.personalDetails.dob === undefined) {

          //       if (localStorage.getItem('url_before_login')) {
          //         const courseUrl = localStorage.getItem('url_before_login')
          //         this.router.navigate(['/app/about-you'], { queryParams: { redirect: courseUrl } })
          //       } else {
          //         location.href = '/page/home'
          //       }
          //     } else {
          //       if (userDetails.profileDetails.profileReq.personalDetails.dob) {
          //         location.href = '/page/home'
          //       }
          //       location.href = localStorage.getItem('url_before_login') || ''
          //     }
          //   })
          // }
        } else {
          location.href = '/page/home'
        }
      }
    },
      (err: any) => {
        this.loggerSvc.error('ERROR ACCEPTING TNC:', err)
        // TO DO: Telemetry event for failure
        this.errorInAccepting = true
        this.isAcceptInProgress = false
      },
    )
  }

}