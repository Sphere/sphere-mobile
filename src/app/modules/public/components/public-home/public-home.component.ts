import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.scss'],
})
export class PublicHomeComponent implements OnInit {

  public data: any;
  content: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCourses();
  }
  async getCourses() {
   let postData = {
      "request": {
          "filters": {
              "primaryCategory": [
                  "Course"
              ],
              "contentType": [
                  "Course"
              ],
              "status": [
                  "Live"
              ]
          },
          "sort_by": {
              "lastUpdatedOn": "desc"
          }
      },
      "query": "",
      "sort": [
          {
              "lastUpdatedOn": "desc"
          }
      ]
  }
    this.data = await this.http.post('https://sphere.aastrika.org/api/content/v1/search', postData).subscribe(data => {
      this.content = data['result'].content;     
     }, error => {
      console.log(error);
    });
  }

  courseDetails(data: any) {
    const navigationExtras: NavigationExtras = {
      queryParams: data
    };
    //this.router.navigate(['/public/course-overview'], navigationExtras)
  }

}
