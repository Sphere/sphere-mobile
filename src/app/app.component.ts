import { Component } from '@angular/core';
import {
  AuthKeycloakService,
  ConfigurationsService,
  TelemetryService,
  ValueService,
  WsEvents,
} from '@ws-widget/utils'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isCommonChatEnabled = true
  showNavbar = true
  isXSmall$ = this.valueSvc.isXSmall$
  constructor(private valueSvc: ValueService,) {}
}
