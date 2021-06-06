const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
    countItemInCart: 0,
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BURGER_TO_CART':
            const actualObj = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload],

                // [`${action.payload.id}${action.payload.finalPrice}${action.payload.type}`]: !state.items[`${action.payload.id}${action.payload.finalPrice}${action.payload.type}`]
                //     ? [action.payload]
                //     : [...state.items[`${action.payload.id}${action.payload.finalPrice}${action.payload.type}`], action.payload],
            };

            // const allItemsInCart = Object.values(actualObj).map(i => Object.values(i));
            // const cartSum = allItemsInCart.reduce((sum, arrBurgers, i) => sum += arrBurgers[i].finalPrice * arrBurgers.length, 0);

            const allItemsInCart = [].concat.apply([], Object.values(actualObj));
            const cartSum = allItemsInCart.reduce((sum, burger) => sum += burger.finalPrice, 0);

            return {
                ...state,
                items: actualObj,
                totalCount: allItemsInCart.length,
                totalPrice: cartSum,
            };

        case 'EMPTY_TRASH':
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0,
            }
        case 'DELETE_GROUP_BURGERS':
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0,
            }
        default:
            return state;
    };
};

export default cart;