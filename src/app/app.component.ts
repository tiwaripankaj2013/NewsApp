import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { newsApiService } from './services/newsApi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data:any;
  constructor(private _newsApiService: newsApiService,private router:Router) { }
  ngOnInit() {
      this._newsApiService.getData('top-headlines?country=us&category=business').subscribe(data =>{
        // console.log(data);
        this.data=data;
      });
  }
  onGoNewsdetailPage(article){
    this._newsApiService.currentArticle=article;
    this.router.navigate(['/NewsDetails']);
  }
}
