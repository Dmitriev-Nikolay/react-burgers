const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BURGER_TO_CART':
            const actualObj = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload],
            };
            const allItemsInCart = [].concat.apply([], Object.values(actualObj));
            const cartSum = allItemsInCart.reduce((sum, burger) => sum += burger.price, 0);
            return {
                ...state,
                items: actualObj,
                totalCount: allItemsInCart.length,
                totalPrice: cartSum,
            };
        default:
            return state;
    };
};

export default cart;