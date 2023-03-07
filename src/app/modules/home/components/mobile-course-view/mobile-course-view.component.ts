import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'
import { delay, mergeMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { ConfigurationsService } from '@app/library/ws-widget/utils/src/public-api'
import { UserProfileService } from '@ws/app/src/lib/routes/user-profile/services/user-profile.service'
import { SignupService } from '../../../public/services/signup/signup.service'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'ws-mobile-course-view',
  templateUrl: './mobile-course-view.component.html',
  styleUrls: ['./mobile-course-view.component.scss'],
})
export class MobileCourseViewComponent implements OnInit {

  @Input() courseData: any
  @Input() enableConfig = false
  constructor(private router: Router,
    private configSvc: ConfigurationsService,
    private userProfileSvc: UserProfileService,
    private signUpSvc: SignupService,
    private userHomeSvc: UserService,
  ) { }

  ngOnInit() {
  }

  // For opening Course Page
  navigateToToc(contentIdentifier: any) {

    // this.router.navigateByUrl(`/app/toc/${contentIdentifier}/overview`)

    const url = `app/toc/` + `${contentIdentifier}` + `/overview`
    const val = this.userHomeSvc.userRead(this.configSvc.unMappedUser.id)
    if (this.configSvc.unMappedUser) {
      this.userHomeSvc.updateValue$.subscribe((userDetails: any) => {
        if (userDetails.profileDetails.profileReq.personalDetails.dob !== undefined) {
          this.router.navigateByUrl(url)
        } else {
          const courseUrl = `/app/toc/${contentIdentifier}/overview`
          this.router.navigate(['/app/about-you'], { queryParams: { redirect: courseUrl } })
        }
      })
    }

  }
}
