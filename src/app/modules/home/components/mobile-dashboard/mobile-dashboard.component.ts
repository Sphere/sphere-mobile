import { HttpClient } from '@angular/common/http'
import { Component, Inject, OnInit } from '@angular/core'
import { NavigationExtras, Router } from '@angular/router'
import { delay } from 'rxjs/operators'
import { WidgetContentService,WidgetUserService } from '@app/library/ws-widget/collection/src/public-api'
import { ConfigurationsService } from '@app/library/ws-widget/utils/src/public-api'
import { forkJoin } from 'rxjs'
import * as _ from 'lodash-es'
import  publicConfig from '../../../../../assets/configurations/mobile-public.json';
import { UserService } from '../../services/user.service'
import { AuthService } from '@project-sunbird/sunbird-sdk'
@Component({
  selector: 'ws-mobile-dashboard',
  templateUrl: './mobile-dashboard.component.html',
  styleUrls: ['./mobile-dashboard.component.scss'],
})
export class MobileDashboardComponent implements OnInit {
  myCourse: any
  topCertifiedCourse: any = []
  featuredCourse: any = []
  userEnrollCourse: any
  videoData: any
  homeFeatureData: any
  homeFeature: any
  userId: any
  firstName: any
  topCertifiedCourseIdentifier: any = []
  featuredCourseIdentifier: any = []

  constructor(
              private configSvc: ConfigurationsService,
              private userSvc: WidgetUserService,
              private ContentSvc : WidgetContentService,
              private router: Router,
              private http: HttpClient,
              private userHomeSvc:UserService,
              @Inject('AUTH_SERVICE') public authService: AuthService,
  ) {
    console.log('** mobile-dashboard component hitting')
    if (localStorage.getItem('orgValue') === 'nhsrc') {
      this.router.navigateByUrl('/organisations/home')
    }
  }

  ngOnInit() {
    this.videoData = [
      {
        url: './../../fusion-assets/videos/videoplayback.mp4',
        title: 'Register for a course',
        description: 'Explore various courses and pick the ones you like',
      },
      {
        url: './../../fusion-assets/videos/videoplayback.mp4',
        title: 'Take the course',
        description: 'Access the course anytime, at your convinience',
      },
      {
        url: './../../fusion-assets/videos/videoplayback.mp4',
        title: 'Get certified',
        description: 'Receive downloadable and shareable certificates',
      },
    ]
    this.authService.getSession().toPromise()
    .then((session: any) => {
      console.log('get session', session)
      if (session) {
        this.userHomeSvc.userRead(session.userToken).pipe().subscribe((res)=>{
          console.log(res)
        })

        //this.firstName = this.configSvc.userProfile
      this.userId = session.userToken 
      forkJoin([this.userSvc.fetchUserBatchList(this.userId), this.ContentSvc.getLiveSearchResults()
      ]).pipe().subscribe((res: any) => {
        console.log('widget user service response: ', res)
       this.homeFeature = publicConfig.userLoggedInSection
        this.topCertifiedCourseIdentifier = publicConfig.topCertifiedCourseIdentifier
        this.featuredCourseIdentifier = publicConfig.featuredCourseIdentifier
        this.formatmyCourseResponse(res[0])
        if (res[1].result.content.length > 0) {
          this.formatTopCertifiedCourseResponse(res[1])
          this.formatFeaturedCourseResponse(res[1])
        }
      })
      }})
   console.log('*****************************', this.configSvc)
    //  if (this.configSvc.userProfile) {
    //   console.log('mobile dashboard ##: ', this.configSvc.userProfile)
    //   this.firstName = this.configSvc.userProfile
    //   this.userId = this.configSvc.userProfile.userId 
    //   forkJoin([this.userSvc.fetchUserBatchList(this.userId), this.ContentSvc.getLiveSearchResults()
    //   ]).pipe().subscribe((res: any) => {
    //    this.homeFeature = publicConfig.userLoggedInSection
    //     this.topCertifiedCourseIdentifier = publicConfig.topCertifiedCourseIdentifier
    //     this.featuredCourseIdentifier = publicConfig.featuredCourseIdentifier
    //     this.formatmyCourseResponse(res[0])
    //     if (res[1].result.content.length > 0) {
    //       this.formatTopCertifiedCourseResponse(res[1])
    //       this.formatFeaturedCourseResponse(res[1])
    //     }
    //   })
    // }

  }
  formatFeaturedCourseResponse(res: any) {

    const featuredCourse = _.filter(res.result.content, ckey => {
      return _.includes(this.featuredCourseIdentifier, ckey.identifier)
    })

    this.featuredCourse = _.reduce(_.uniqBy(featuredCourse, 'identifier'), (result, value) => {
      result['identifier'] = value.identifier
      result['appIcon'] = value.appIcon
      result['name'] = value.name
      return result

    },                             {})
  }

  formatTopCertifiedCourseResponse(res: any) {

    const topCertifiedCourse = _.filter(res.result.content, ckey => {
      return _.includes(this.topCertifiedCourseIdentifier, ckey.identifier)
    })

    this.topCertifiedCourse = _.uniqBy(topCertifiedCourse, 'identifier')
    console.log('top certified course: ', this.topCertifiedCourse)
  }
  formatmyCourseResponse(res: any) {
    const myCourse: any = []
    let myCourseObject = {}
    _.forEach(res, key => {
      if (res.completionPercentage !== 100) {
        myCourseObject = {
          identifier: key.content.identifier,
          appIcon: key.content.appIcon,
          thumbnail: key.content.thumbnail,
          name: key.content.name,
        }
        myCourse.push(myCourseObject)
      }
    })
    this.userEnrollCourse = myCourse
  }
  mobileJsonData() {
    this.http.get(`assets/configurations/mobile-home.json`).pipe(delay(500)).subscribe((res: any) => {
      this.homeFeature = res.userLoggedInSection
      this.topCertifiedCourseIdentifier = res.topCertifiedCourseIdentifier
      this.featuredCourseIdentifier = res.featuredCourseIdentifier
    })
  }

  // For opening Course Page
  raiseTelemetry(contentIdentifier: any) {
    this.router.navigateByUrl(`/app/toc/${contentIdentifier}/overview`)
  }

  openIframe(video: any) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        video: video.videoIndex,
      },
    }
    this.router.navigate(['/app/video-player'], navigationExtras)
  }

}
