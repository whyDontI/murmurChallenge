import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { news } from '../models/news-list';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  allNews: news;
  articles: any[];
  searchTerm: string;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getEverything().subscribe((res: news) => {
      this.allNews = res;
      this.articles = res.articles;
    });
  }

}
