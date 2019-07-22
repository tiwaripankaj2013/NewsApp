import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { newsApiService } from '../services/newsApi.service';
@Component({
  selector: 'app-newsdetails',
  templateUrl: './newsdetails.component.html',
  styleUrls: ['./newsdetails.component.scss']
})
export class NewsdetailsComponent implements OnInit {
article;
  constructor(private _newsApiService: newsApiService) { }

  ngOnInit() {
    this.article=this._newsApiService.currentArticle;
      // console.log(this._newsApiService.currentArticle);
  }

}
