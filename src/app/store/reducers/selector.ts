import { createSelector } from 'reselect';
import { getNewsList, getFilter } from './news.reducer';

export const getNews = createSelector(getNewsList, getFilter, (newsies, filter) => {
    if (filter && newsies) {
        return newsies.filter(news => news.subsection === filter);
    } else {
        return null;
    }
});
