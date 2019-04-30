import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { news } from '../models/news-list';
import { article } from '../models/article';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  popularHeadlines: news;
  articles: article[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getHeadlines(5).subscribe((res: news) => {
      this.articles = res.articles;
    });
  }

}
