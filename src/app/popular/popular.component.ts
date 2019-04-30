import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { news } from '../models/news-list';
import { article } from '../models/article';
import { SearchPipe } from '../pipes/search.pipe';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  popularHeadlines: news;
  articles: article[];
  searchTerm: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getHeadlines().subscribe((res: news) => {
      this.articles = res.articles;
    });
    // this.popularHeadlines = this.data.headlines;
  }

}
