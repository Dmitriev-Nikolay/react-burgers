import axios from 'axios';

export const axiosBurgers = (sortBy, category) => dispatch => {
    dispatch(setLoaded(false));
    axios.get(`http://localhost:3080/burgers?${ category !== null ? `category=${ category }` : '' }&_sort=${ sortBy }&_order=asc`)
        .then(({ data }) => {
            dispatch(setBurgers(data));
        });
};

export const setBurgers = (items) => ({
    type: 'SET_BURGERS',
    payload: items,
});

export const setLoaded = (status) => ({
    type: 'SET_LOADED',
    payload: status,
});