import { Component, Inject, Input, OnInit } from '@angular/core'
import { ViewerUtilService } from '../../../../../../../viewer/src/lib/viewer-util.service'
import { NSQuiz } from '../../../../../../../viewer/src/lib/plugins/quiz/quiz.model'
import { HttpClient } from '@angular/common/http'
import {
  WidgetContentService,
} from '@ws-widget/collection'
import { ActivatedRoute } from '@angular/router'
import { AuthService, DeviceInfo, SharedPreferences } from 'sunbird-sdk';
import { CordovaHttpService } from '@app/app/modules/core/services/cordova-http.service'
import { HTTP } from '@ionic-native/http/ngx'
import { ApiUtilsService, ToastService } from '@app/app/manage-learn/core'
import { UtilityService } from '@app/services'
import { ConfigurationsService } from '@app/library/ws-widget/utils/src/public-api'
import { ModalController } from '@ionic/angular'

@Component({
  selector: 'ws-app-assessment-detail',
  templateUrl: './assessment-detail.component.html',
  styleUrls: ['./assessment-detail.component.scss'],
})
export class AssessmentDetailComponent extends CordovaHttpService implements OnInit {

  @Input() forPreview = false
  @Input() resourceLink: any
  @Input() content: any
  assesmentdata: any = {
    timeLimit: 0,
    questions: [
      {
        multiSelection: false,
        question: '',
        questionId: '',
        options: [
          {
            optionId: '',
            text: '',
            isCorrect: false,
          },
        ],
      },
    ],
    isAssessment: false,
    passPercentage: 60,
  }

  constructor(private viewSvc: ViewerUtilService,
    public http: HttpClient,
    private contentSvc: WidgetContentService,
    private activatedRoute: ActivatedRoute,
    public toast: ToastService,
    public modalController: ModalController,
    @Inject('AUTH_SERVICE') public authService: AuthService,
    @Inject('DEVICE_INFO') public deviceInfo: DeviceInfo,
    @Inject('SHARED_PREFERENCES') public preferences: SharedPreferences,
    private utils: ApiUtilsService,
    public ionicHttp: HTTP,
    public utilityService: UtilityService,
    public configSvc: ConfigurationsService,) {
      super(http, toast, modalController, authService, deviceInfo, preferences, utils, ionicHttp, utilityService);
    }

  async ngOnInit() {
    this.assesmentdata = await this.transformQuiz(this.content)
  }
  /* api call to get info of quiz or assessment */
  private async transformQuiz(content: any): Promise<NSQuiz.IQuiz> {
    if (this.activatedRoute.snapshot.queryParams.competency) {
      if (content.artifactUrl) {
        const artifactUrl = this.viewSvc.getCompetencyAuthoringUrl(content.artifactUrl.split('/content')[1]
        )
        const options = {
          url: artifactUrl || ''
        }
        let quizJSON: NSQuiz.IQuiz = await this.get(options)
          .toPromise()
          .catch((_err: any) => {
            // throw new DataResponseError('MANIFEST_FETCH_FAILED');
          })
        if (this.forPreview && quizJSON) {
          quizJSON = this.viewSvc.replaceToAuthUrl(quizJSON)
        }

        quizJSON.questions.forEach((question: NSQuiz.IQuestion) => {
          if (question.multiSelection && question.questionType === undefined) {
            question.questionType = 'mcq-mca'
          } else if (!question.multiSelection && question.questionType === undefined) {
            question.questionType = 'mcq-sca'
          }
        })
        if (!quizJSON.hasOwnProperty('passPercentage')) {
          quizJSON.passPercentage = 60
        }
        return quizJSON
      } {
        const contents = await (
          this.contentSvc.fetchContent(this.content.identifier, 'detail')
        ).toPromise()

        const artifactUrl = this.viewSvc.getCompetencyAuthoringUrl(contents.result.content.artifactUrl.split('/content')[1]
        )
        const options = {
          url: artifactUrl || ''
        }
        let quizJSON: NSQuiz.IQuiz = await this.get(options)
          .toPromise()
          .catch((_err: any) => {
            // throw new DataResponseError('MANIFEST_FETCH_FAILED');
          })
        if (this.forPreview && quizJSON) {
          quizJSON = this.viewSvc.replaceToAuthUrl(quizJSON)
        }
        quizJSON.questions.forEach((question: NSQuiz.IQuestion) => {
          if (question.multiSelection && question.questionType === undefined) {
            question.questionType = 'mcq-mca'
          } else if (!question.multiSelection && question.questionType === undefined) {
            question.questionType = 'mcq-sca'
          }
        })
        return quizJSON
      }
    } else {
      if (content.artifactUrl) {
        const artifactUrl = this.forPreview
          ? this.viewSvc.getAuthoringUrl(content.artifactUrl)
          : content.artifactUrl
          const options = {
            url: artifactUrl || ''
          }
          console.log('assessment options: ', options)
        let quizJSON: NSQuiz.IQuiz = await this.get(options)
          .toPromise()
          .catch((_err: any) => {
            // throw new DataResponseError('MANIFEST_FETCH_FAILED');
          })
          console.log('assessment quizJSON: ', quizJSON)
        if (this.forPreview && quizJSON) {
          quizJSON = this.viewSvc.replaceToAuthUrl(quizJSON)
        }

        quizJSON.questions.forEach((question: NSQuiz.IQuestion) => {
          if (question.multiSelection && question.questionType === undefined) {
            question.questionType = 'mcq-mca'
          } else if (!question.multiSelection && question.questionType === undefined) {
            question.questionType = 'mcq-sca'
          }
        })
        if (!quizJSON.hasOwnProperty('passPercentage')) {
          quizJSON.passPercentage = 60
        }
        return quizJSON
      } {
        const contents = await (
          this.contentSvc.fetchContent(this.content.identifier, 'detail')
        ).toPromise()
        const artifactUrl = this.forPreview
          ? this.viewSvc.getAuthoringUrl(contents.result.content.artifactUrl)
          : contents.result.content.artifactUrl
          const options = {
            url: artifactUrl || ''
          }
        let quizJSON: NSQuiz.IQuiz = await this.get(options)
          .toPromise()
          .catch((_err: any) => {
            // throw new DataResponseError('MANIFEST_FETCH_FAILED');
          })
        if (this.forPreview && quizJSON) {
          quizJSON = this.viewSvc.replaceToAuthUrl(quizJSON)
        }
        quizJSON.questions.forEach((question: NSQuiz.IQuestion) => {
          if (question.multiSelection && question.questionType === undefined) {
            question.questionType = 'mcq-mca'
          } else if (!question.multiSelection && question.questionType === undefined) {
            question.questionType = 'mcq-sca'
          }
        })
        return quizJSON
      }
    }


  }
}
