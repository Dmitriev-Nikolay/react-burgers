import { SET_SORT, SET_CATEGORY } from '../actions/constants';

const initialState = {
    sortBy: 'rating',
    category: null,
};

const filters = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT: 
            return {
                ...state,
                sortBy: action.payload,
            };
        case SET_CATEGORY: 
            return {
                ...state,
                category: action.payload,
            };
        default: 
            return state;
    };
};

export default filters;