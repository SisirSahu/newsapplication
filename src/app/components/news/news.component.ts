import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import '../../../../node_modules/zone.js/dist/zone.js';

import { NewsItemComponent } from './news-item/news-item.component';
import { NewsService } from '../../services/news.service';
import { News, NewsResponse } from '../../model/news';
import { NewsActions } from '../../store/actions/news.actions';
import { getNews } from '../../store/reducers/selector';
import { news } from '../../store/reducers/news.reducer';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: []
})
export class NewsComponent implements OnInit {
  sectionNewsList: any;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private store: Store<any>,
    private newsActions: NewsActions
  ) { }

  ngOnInit() {
    let sectionName;
    this.route.params.subscribe(param => {
      sectionName = param['id'];
      this.newsService.getSectionNews(sectionName).subscribe((data: NewsResponse) => {
        this.store.dispatch(this.newsActions.LoadSectionNews(data.results));
      });
    });
    this.store.select(getNews).subscribe((data: News[]) => {
      this.sectionNewsList = data;
    });
    // this.store.select('news').pipe(select(getNews)).subscribe(data => {
    //   this.sectionNewsList = data;
    // });
  }
}
