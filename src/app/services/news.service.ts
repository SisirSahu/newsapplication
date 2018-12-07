import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { News, NewsResponse } from '../model/news';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class NewsService {

    constructor(private http: Http) { }

    getSectionNews(sectionName: string): Observable<NewsResponse> {
        // fetch news of that sectionName
        return this.http.get('https://api.nytimes.com/svc/topstories/v2/' + sectionName + '.json?api-key=315a5a51483b469a918246dc2753b339')
            .map(data => data.json())
            .retry(3);
    }
}
