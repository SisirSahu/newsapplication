import { News } from './../../model/news';
import { NewsState } from './../../store/reducers/news.reducer';
import { NewsActions } from '../../store/actions/news.actions';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  subsections: string[];
  response: News[];
  constructor(
    private store: Store<any>,
    private newsActions: NewsActions
  ) {
  }

  ngOnInit() {
    this.store.select('news', 'newsList').subscribe((data: News[]) => {
      this.subsections = [];
      data.forEach(news => {
        if (news.subsection !== '' && this.subsections.findIndex(value => news.subsection === value) === -1) {
          this.subsections.push(news.subsection);
        }
      });
    });
  }

  dispatchAction($event: string) {
    this.store.dispatch(this.newsActions.FilterSubsection($event));
  }

}
