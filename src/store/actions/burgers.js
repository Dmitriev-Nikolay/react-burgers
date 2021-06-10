import axios from 'axios';
import { SET_BURGERS, SET_LOADED } from './constants';

export const axiosBurgers = (sortBy, category) => dispatch => {
    dispatch(setLoaded(false));
    axios.get(`/burgers?${ category !== null ? `category=${ category }` : '' }&_sort=${ sortBy }&_order=asc`)
        .then(({ data }) => {
            dispatch(setBurgers(data));
        });
};

export const setBurgers = (items) => ({
    type: SET_BURGERS,
    payload: items,
});

export const setLoaded = (status) => ({
    type: SET_LOADED,
    payload: status,
});