import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { News } from '../../model/news';
import { LOAD_SECTION_NEWS, FILTER_SUBSECTION } from '../reducers/news.reducer';

@Injectable()
export class NewsActions {
    static LOAD_SECTION_NEWS = '[News] LOAD_SECTION_NEWS';
    static FILTER_SUBSECTION = '[News] FILTER_SUBSECTION';

    LoadSectionNews(list: News[]): { type: string, payload?: any } {
        return {
            type: LOAD_SECTION_NEWS,
            payload: list
        };
    }
    FilterSubsection(subsection: string): { type: string, payload?: any } {
        return {
            type: FILTER_SUBSECTION,
            payload: subsection
        };
    }
}
