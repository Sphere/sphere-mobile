import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup/signup.service';
import { mustMatch } from '../../routes/password-validator';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  uploadSaveData = false
  languageIcon = '../../../fusion-assets/images/lang-icon.png'
  @ViewChild('toastSuccess', { static: true }) toastSuccess!: ElementRef<any>
  @ViewChild('toastError', { static: true }) toastError!: ElementRef<any>
  emailOrMobile: any
  phone = false
  email: any
  showAllFields = true
  isMobile = false
  isOtpValid = false
  emailPhoneType: any
  otpPage = false
  languageDialog = false
  spherFormBuilder: FormBuilder
  createAccountForm: FormGroup
  otpCodeForm: FormGroup
  hide1 = true
  hide2 = true
  iconChange1 = 'fas fa-eye-slash'
  iconChange2 = 'fas fa-eye-slash'
  langDialog: any
  preferedLanguage: any = { id: 'en', lang: 'English' }
  @HostListener('window:popstate', ['$event'])
  onPopState() {
    this.router.navigate(['/public/home'])
  }
  constructor(
    formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private signupService: SignupService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.spherFormBuilder = formBuilder
    localStorage.removeItem(`userUUID`)
  }


  ngOnInit() {
    this.initializeFormFields()
  }
  initializeFormFields() {
    this.createAccountForm = this.spherFormBuilder.group({
      firstname: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z '.-]*$/)]),
      lastname: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z '.-]*$/)]),
      // tslint:disable-next-line:max-line-length
      emailOrMobile: new FormControl('', [Validators.required, Validators.pattern(/^(([- ]*)[6-9][0-9]{9}([- ]*)|^[a-zA-Z0-9 .!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9 ]([- ]*))?)*$)$/)]),
      password: new FormControl('', [Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\ *])(?=.{8,})/g)]),
      confirmPassword: new FormControl('', [Validators.required]),
    }, { validator: mustMatch('password', 'confirmPassword') })

    this.otpCodeForm = this.spherFormBuilder.group({
      otpCode: new FormControl('', [Validators.required]),
    })
  }
  showParentForm(event: any) {
    if (event === 'true') {
      this.initializeFormFields()
    }
  }
  toggle1() {
    this.hide1 = !this.hide1
    if (this.hide1) {
      this.iconChange1 = 'fas fa-eye-slash'
    } else {
      this.iconChange1 = 'fas fa-eye'
    }
  }
  toggle2() {
    this.hide2 = !this.hide2
    if (this.hide2) {
      this.iconChange2 = 'fas fa-eye-slash'
    } else {
      this.iconChange2 = 'fas fa-eye'
    }
  }
  onSubmit(form: any) {
    sessionStorage.setItem('login-btn', 'clicked')
    let phone = this.createAccountForm.controls.emailOrMobile.value
    phone = phone.replace(/[^0-9+#]/g, '')
    if (phone.length >= 10) {
      this.isMobile = true
      this.emailPhoneType = 'phone'
      this.email = false
    } else {
      this.email = /^[a-zA-Z0-9 .!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9- ]+)*$/.test(
        this.createAccountForm.controls.emailOrMobile.value
      )
      this.emailPhoneType = 'email'
    }
    this.uploadSaveData = true
    let reqObj

    if (this.email) {
      reqObj = {
        firstName: form.value.firstname.trim(),
        lastName: form.value.lastname.trim(),
        email: form.value.emailOrMobile.trim(),
        password: form.value.password.trim(),
      }

      this.signupService.signup(reqObj).subscribe(res => {
        if (res.status) {
          this.openSnackbar(res.msg)
          this.showAllFields = false
          this.uploadSaveData = false
          this.otpPage = true
          localStorage.setItem(`preferedLanguage`, this.preferedLanguage.id)
          localStorage.setItem(`userUUID`, res.userUUId)
        } else if (res.status === 'error') {
          this.openSnackbar(res.msg)
        }
      },
        err => {
          this.openSnackbar(err.error.msg)
          this.uploadSaveData = false
        }
      )
    } else {
      const requestBody = {
        firstName: form.value.firstname.trim(),
        lastName: form.value.lastname.trim(),
        phone: form.value.emailOrMobile.trim(),
        password: form.value.password.trim(),
      }

      this.signupService.registerWithMobile(requestBody).subscribe((res: any) => {
        if (res.status === 'success') {
          this.openSnackbar(res.msg)
          this.showAllFields = false
          this.uploadSaveData = false
          this.otpPage = true
          localStorage.setItem(`preferedLanguage`, this.preferedLanguage.id)
          localStorage.setItem(`userUUID`, res.userUUId)
        } else if (res.status === 'error') {
          this.openSnackbar(res.msg)
        }
      },
        err => {
          this.openSnackbar(err.error.msg)
          this.uploadSaveData = false
        }
      )
    }
  }
  eventTrigger(p1: string, p2: string) {
    const obj = {
      EventDetails: {
        EventName: p1,
        Name: p2,
      },
    }
    // @ts-ignore: Unreachable code error
    const userdata = Object.assign(MainVisitorDetails, obj)
    this.signupService.plumb5SendEvent(userdata).subscribe((res: any) => {
      // @ts-ignore: Unreachable code error
      // tslint:disable-next-line
      console.log(res)
    })
  }

  gotoHome() {
    this.router.navigate(['/page/home'])
      .then(() => {
        window.location.reload()
      })
  }
  private openSnackbar(primaryMsg: string, duration: number = 3000) {
    this.snackBar.open(primaryMsg, undefined, {
      duration,
    })
  }
}
