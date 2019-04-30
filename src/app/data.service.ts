import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { news } from './models/news-list';
import { article } from './models/article';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  headlines: news;

  // URL
  headlinesUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f7300254e58447a38f70edab2aeda744&pageSize=10';

  allNewsUrl = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=f7300254e58447a38f70edab2aeda744';
  constructor(private http: HttpClient) { }

  getHeadlines(): Observable<news>{
    return this.http.get<news>(this.headlinesUrl, { observe: 'response'})
    .pipe(
      map(response => response.body)
    );
  }

  getEverything(){
    return this.http.get(this.allNewsUrl);
  }
}
