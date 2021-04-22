const initialState = {
    items: [],
    isLoaded: false,
};

const burgers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BURGERS': 
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            };
        default: 
            return state;
    };
};

export default burgers;