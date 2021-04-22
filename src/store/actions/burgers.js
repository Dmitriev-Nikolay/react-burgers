import axios from 'axios';

export const axiosBurgers = () => dispatch => {
    axios.get('http://localhost:3001/burgers')
        .then(({ data }) => {
            dispatch(setBurgers(data));
        });
};

export const setBurgers = (items) => ({
    type: 'SET_BURGERS',
    payload: items,
});
