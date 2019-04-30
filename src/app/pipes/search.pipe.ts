import { Pipe, PipeTransform } from '@angular/core';
import { article } from '../models/article';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(articles: any[], searchTerm: string) {

		if (!articles || !searchTerm) {
			return articles;
    }
		return SearchPipe.filter(articles, searchTerm);
	}

	static filter(articles: any[], searchTerm: string) {

		return articles.filter((article) => {
			return searchTerm.trim().toLowerCase().split(" ").some(r => article.title.toLowerCase().indexOf(r) >= 0)

      // return searchTerm.trim().toLowerCase().split(" ").some(r => article.title.toLowerCase().indexOf(r) >= 0)

    });
	}

}
