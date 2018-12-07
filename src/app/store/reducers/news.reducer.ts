import { NewsActions } from './../actions/news.actions';
import { Action } from '@ngrx/store';
import { News } from '../../model/news';

// define actions
export const LOAD_SECTION_NEWS = '[News] LOAD_SECTION_NEWS';
export const FILTER_SUBSECTION = '[News] FILTER_SUBSECTION';

// define state interface
export interface NewsState {
    newsList: News[];
    filter: string;
}

// initial state
export const initialState: NewsState = {
    newsList: [],
    filter: ''
};

// implement actions
export function news(state = initialState, action: { type: String, payload?: any }) {
    switch (action.type) {
        case LOAD_SECTION_NEWS: {
            return {
                newsList: [...action.payload],
                filter: state.filter
            };
        }
        case FILTER_SUBSECTION: {
            return {
                newsList: [...state.newsList],
                filter: action.payload
            };
        }
        default:
            return state;
    }
}

export function getNewsList(state: any) {
    if (state.newsList) {
        return state.newsList;
    } else if (state.news.newsList) {
        return state.news.newsList;
    } else {
        return state;
    }
}

export function getFilter(state: any) {
    if (state.news) {
        return state.news.filter;
    } else {
        return state.filter;
    }
}
