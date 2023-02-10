import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup/signup.service';

@Component({
  selector: 'wc-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit, AfterViewChecked {
  forgotPasswordForm: FormGroup
  email: any
  emailOrMobile = ''
  showOtpPwd = false
  showCheckEmailText = false
  emailForm: FormGroup
  @ViewChild('resend', { static: false }) resend!: ElementRef
  showResend = false
  key = ''
  resendOTPbtn: any
  counter: any
  disableResendButton = false
  resendOtpCounter = 1
  maxResendTry = 4

  constructor(private router: Router, private signupService: SignupService,
    private fb: FormBuilder, private snackBar: MatSnackBar,
  ) {
    this.forgotPasswordForm = this.fb.group({
      otp: new FormControl('', [Validators.required, Validators.minLength(3)]),
    })

    this.emailForm = this.fb.group({
      userInput: new FormControl('', [Validators.required, Validators.pattern(/^(([- ]*)[6-9][0-9]{9}([- ]*)|^[a-zA-Z0-9 .!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9 ]([- ]*))?)*$)$/)]),
    })
  }

  ngOnInit() {
    this.resendOtpEnablePostTimer()
  }

  ngAfterViewChecked() {
    // To show the Resend button after 30s
    setTimeout(() => {
      this.showResend = true
    }, 1000)
  }

  forgotPassword(resendOTP?: string) {
    if (resendOTP) {
      this.resendOtpCounter = this.resendOtpCounter + 1
      if (this.resendOtpCounter >= this.maxResendTry) {
        this.disableResendButton = false
        this.openSnackbar('Maximum retry limit exceeded please try again.')
        return
      }
    }
    let phone = ''
    this.emailOrMobile = this.emailForm.value.userInput

    phone = this.emailOrMobile
    phone = phone.replace(/[^0-9+#]/g, '')
    // Allow only indian mobile numbers
    if (phone.length >= 10) {
      this.key = 'phone'
      const requestBody = {
        userName: this.emailOrMobile.trim(),
      }

      this.signupService.forgotPassword(requestBody).subscribe(
        (res: any) => {
          if (res.message) {
            this.openSnackbar(res.message)
            this.resendOtpEnablePostTimer()
            this.showOtpPwd = true
          }
        },
        (error: any) => {
          this.openSnackbar(error.error)
        })
    } else if (/^[a-zA-Z0-9 .!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9- ]+)*$/.test(this.emailOrMobile)) {

      const requestBody = {
        userName: this.emailOrMobile.trim(),
      }
      this.key = 'email'
      this.signupService.forgotPassword(requestBody).subscribe(
        (res: any) => {
          if (res.message) {
            this.openSnackbar(res.message)
            this.showOtpPwd = true
            this.resendOtpEnablePostTimer()
            this.showCheckEmailText = true
          }
        },
        (error: any) => {
          this.openSnackbar(error.error.message)
        })
    }
  }

  resetForm() {
    this.router.navigate(['/home'])
  }

  onSubmit() {
    const requestBody = {
      key: this.emailOrMobile,
      type: this.key,
      otp: this.forgotPasswordForm.value.otp,
    }
    this.signupService.setPasswordWithOtp(requestBody).subscribe(
      (res: any) => {
        if (res.response) {
          this.openSnackbar(res.response)
          setTimeout(() => {
            window.open(res.link, '_self')
          }, 2000)
        }
      },
      (error: any) => {
        this.openSnackbar(error.error.message || 'Something went wrong')
      }
    )
  }

  resendOtpEnablePostTimer() {
    this.counter = 60
    this.disableResendButton = false
    setTimeout(() => {
      this.disableResendButton = true
    }, 1000)
    const interval = setInterval(() => {
      this.resendOTPbtn = `Resend OTP(${(this.counter)})`
      this.counter = this.counter - 1
      if (this.counter < 0) {
        this.resendOTPbtn = 'Resend OTP'
        clearInterval(interval)
        this.disableResendButton = false
      }
    }, 1000)
  }

  private openSnackbar(primaryMsg: string, duration: number = 2000) {
    this.snackBar.open(primaryMsg, undefined, {
      duration,
    })
  }

  gotoHome() {
    this.router.navigate(['/public/home'])
      .then(() => {
        window.location.reload()
      })
  }

}
