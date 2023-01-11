import { Component ,OnInit} from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
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
export class AppComponent implements OnInit{
  isCommonChatEnabled = true
  showNavbar = true
  isXSmall$ = this.valueSvc.isXSmall$
  constructor(private valueSvc: ValueService,public router:Router) {

  }
  ngOnInit() {
    this.router.events.subscribe((event:any)=>{
      if(event instanceof NavigationStart){
        if(event.url.includes('/app/create-account')){
          this.showNavbar= false
        }
      }
    })
  }
}
