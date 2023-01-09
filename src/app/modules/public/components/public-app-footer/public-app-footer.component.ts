import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'public-app-footer',
  templateUrl: './public-app-footer.component.html',
  styleUrls: ['./public-app-footer.component.scss'],
})
export class PublicAppFooterComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}
  signup() {
    this.router.navigate(['routes/create-account']);
    }
}
