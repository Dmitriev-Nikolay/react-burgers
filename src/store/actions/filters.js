import { SET_SORT, SET_CATEGORY } from './constants';

export const setSort = (nameSort) => ({
    type: SET_SORT,
    payload: nameSort,
});

export const setCategory = (indexCategory) => ({
    type: SET_CATEGORY,
    payload: indexCategory,
});