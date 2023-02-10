import { PlatformLocation, Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { WidgetContentService } from '@ws-widget/collection/src/public-api';
import { SignupService } from '../../services/signup/signup.service';
import { v4 as uuid } from 'uuid'

declare const gapi: any

@Component({
  selector: 'wc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  [x: string]: any
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private contentSvc: WidgetContentService,
    location: Location,
    loc: PlatformLocation,
    private snackBar: MatSnackBar,
    private signupService: SignupService,
    private http: HttpClient,
    private activeRoute: ActivatedRoute,
  ) {
    this.route = location.path()
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.pattern(/^(([- ]*)[6-9][0-9]{9}([- ]*)|^[a-zA-Z0-9 .!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9 ]([- ]*))?)*$)$/)]),
      password: new FormControl('', [Validators.required]),
    })
    loc.onPopState(() => {
      window.location.href = '/public/home'
    })
  }
  @ViewChild('myDiv', { static: true }) myDiv!: ElementRef<any>
  @ViewChild('toastSuccess', { static: true }) toastSuccess!: ElementRef<any>
  loginForm: FormGroup
  hide = true
  iconChange = 'fas fa-eye-slash'
  public route: string
  emailPhoneType: any
  errorMessage = ''
  googleAuth = false
  source = ''
  otpPage = false
  uploadSaveData = false
  showAllFields = true
  loginVerification = false
  redirectMsg = 'Please verify your account before logged in !!'

  private baseUrl = 'assets/configurations'

  public isSignedIn = false
  public signinURL = ''
  private clientId = '836909204939-r7u6cn00eprhv6ie7ota38ndp34m690l.apps.googleusercontent.com'
  private scope = [
    'profile',
    'email',
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/admin.directory.user.readonly',
  ].join(' ')
  elem: HTMLElement = document.getElementById('googleBtn') as HTMLElement
  public auth2: any

  checkGoogleAuth() {
    this.http.get(`${this.baseUrl}/host.config.json`).subscribe((data: any) => {
      this.googleAuth = data.googleAuth
    })
  }

  public signinChanged(val: any) {
    localStorage.removeItem('google_isSignedIn')
    localStorage.setItem(`google_isSignedIn`, val)
  }

  public userChanged(user: any) {
    localStorage.removeItem('google_token')
    localStorage.setItem(`google_token`, user.getAuthResponse().id_token)
    location.reload()
  }

  public attachSignin(element: any) {
    this.auth2.attachClickHandler(element, {},
      (googleUser: any) => {
        const profile = googleUser.getBasicProfile()
      },
      (error: any) => {
        console.log(JSON.stringify(error, undefined, 2))
      })
  }
  ngOnInit() {

    const redirectUrl = `${document.baseURI}openid/keycloak`
    const state = uuid()
    const nonce = uuid()
    // window.location.assign(`${document.baseURI}auth/realms/sunbird/protocol/openid-connect/auth?client_id=portal&redirect_uri=${encodeURIComponent(redirectUrl)}&state=${state}&response_mode=fragment&response_type=code&scope=openid&nonce=${nonce}`)

    if (this.signUpdata) {
      let phone = this.signUpdata.value.emailOrMobile
      phone = phone.replace(/[^0-9+#]/g, '')
      if (phone.length >= 10) {
        this.emailPhoneType = 'phone'
      } else {
        this.emailPhoneType = 'email'
      }
    }
    if (window.location.href.includes('email-otp')) {
      this.emailPhoneType = 'email'
    }

    this.activeRoute.queryParams.subscribe(params => {
      this.source = params.source
    }
    )

    this.checkGoogleAuth()
    const storageItem1 = localStorage.getItem(`google_token`)
    const storageItem2 = localStorage.getItem(`google_isSignedIn`)
    if (storageItem1 && storageItem2 && this.googleAuth) {
      const req = {
        idToken: storageItem1,
      }
      this.contentSvc.googleAuthenticate(req).subscribe(
        async (results: any) => {
          const result = await this.signupService.fetchStartUpDetails()
          if (result.status === 401) {
            this.openSnackbar(result.error.params.errmsg)
          }
          if (result.status === 419) {
            this.openSnackbar(result.error.params.errmsg)
          }
          if (result.status === 200 && result.roles.length > 0) {
            this.openSnackbar(results.msg)
            if (localStorage.getItem('url_before_login')) {
              location.href = localStorage.getItem('url_before_login') || ''
            } else {
              location.href = '/page/home'
            }
          }
        },
        (err: any) => {
          console.log(err)
          this.router.navigate(['/app/login'])
        }
      )
    }
  }

  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: this.clientId,
        cookie_policy: 'single_host_origin',
        scope: this.scope,
        ux_mode: 'redirect',
        redirect_uri: `${location.origin}/google/callback`,
      })
      this.attachSignin(this.myDiv.nativeElement)
      this.auth2.isSignedIn.listen(this.signinChanged)
      this.auth2.currentUser.listen(this.userChanged)
    })
  }

  ngAfterViewInit() {
    if (this.googleAuth) {
      this.googleInit()
    }
  }

  toggle() {
    this.hide = !this.hide
    if (this.hide) {
      this.iconChange = 'fas fa-eye-slash'
    } else {
      this.iconChange = 'fas fa-eye'
    }
  }
  loginUser() {
    let phone = this.loginForm.value.username
    phone = phone.replace(/[^0-9+#]/g, '')
    if (phone.length >= 10) {
      this.emailPhoneType = 'phone'
    } else {
      if (/^[a-zA-Z0-9 .!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9- ]+)*$/.test(
        this.loginForm.value.username)) {
        this.emailPhoneType = 'email'
      }
    }
    let req
    if (this.emailPhoneType === 'email') {
      req = {
        email: this.loginForm.value.username.trim(),
        password: this.loginForm.value.password.trim(),
      }
    } else {
      req = {
        mobileNumber: this.loginForm.value.username.trim(),
        password: this.loginForm.value.password.trim(),
      }
    }
    this.contentSvc.loginAuth(req).subscribe(
      async (results: any) => {
        const result = await this.signupService.fetchStartUpDetails()
        if (result.status === 200) {
          if (result.roles && result.roles.length > 0) {
            localStorage.setItem(`loginbtn`, `userLoggedIn`)
            this.openSnackbar(results.msg)
            if (localStorage.getItem('url_before_login')) {
              location.href = localStorage.getItem('url_before_login') || ''
            } else {
              location.href = '/page/home'
            }
          } else {
            this.openSnackbar(this.redirectMsg)
            this.otpPage = true
            this.loginVerification = true
            localStorage.setItem(`userUUID`, result.userId)
            this.generateOtp(this.emailPhoneType, this.loginForm.value.username.trim())
          }
        }
        if (result.status === 400) {
          this.openSnackbar(result.error.params.errmsg)
        }
        if (result.status === 401) {
          this.openSnackbar(result.error.params.errmsg)
        }
        if (result.status === 419) {
          this.openSnackbar(result.error.params.errmsg)
        }

      },
      (err: any) => {
        console.log(err.error.error)
        this.errorMessage = err.error.error
      }
    )
  }
  private openSnackbar(primaryMsg: string, duration: number = 3000) {
    this.snackBar.open(primaryMsg, undefined, {
      duration,
    })
  }

  generateOtp(type: any, username: any) {
    let requestBody
    if (type === 'email') {
      requestBody = {
        email: username,
      }
    } else {
      requestBody = {
        mobileNumber: username,
      }
    }

    this.signupService.generateOtp(requestBody).subscribe(
      (res: any) => {
        if (res.message === 'Success') {
        }
      },
      (err: any) => {
        this.openSnackbar(err)

      }
    )
  }

  showParentForm(event: any) {
    if (event === 'true') {
      this.loginVerification = true
    }
  }
}
