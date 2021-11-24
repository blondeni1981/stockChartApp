import { Component, OnInit } from '@angular/core';
import { NewsAPIService } from '../news-api.service';

@Component({
  selector: 'app-new-api',
  templateUrl: './new-api.component.html',
  styleUrls: ['./new-api.component.css']
})
export class NewAPIComponent implements OnInit {

  [x: string]: any;

  mArticles: Array<any> = [];
  mSources: Array<any> = [];

  constructor(private newsapi:NewsAPIService){
    console.log('app component constructor called');         
  }

  ngOnInit() {
        //load articles
      this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    //load news sources
    this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);  
    }

  searchArticles(source: string | String){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

}

