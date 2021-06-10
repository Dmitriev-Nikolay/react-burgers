import { SET_BURGERS, SET_LOADED } from '../actions/constants';

const initialState = {
    items: [],
    isLoaded: false,
};

const burgers = (state = initialState, action) => {
    switch (action.type) {
        case SET_BURGERS: 
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            };
        case SET_LOADED: 
            return {
                ...state,
                isLoaded: action.payload,
            };
        default: 
            return state;
    };
};

export default burgers;