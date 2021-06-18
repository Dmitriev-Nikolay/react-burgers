import { ADD_BURGER_TO_CART, EMPTY_TRASH, DELETE_GROUP_BURGERS, ADD_ITEM, DELETE_ITEM } from '../actions/constants';

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BURGER_TO_CART:
            let uniqGroupId = `${action.payload.id}${action.payload.finalPrice}${action.payload.type}`;
            const newItems = {
                ...state.items,
                [uniqGroupId]: !state.items[uniqGroupId]
                    ? [action.payload]
                    : [...state.items[uniqGroupId], action.payload],
            };
            // const allItemsInCart = Object.values(actualObj).map(i => Object.values(i));
            // const cartSum = allItemsInCart.reduce((sum, arrBurgers, i) => sum += arrBurgers[i].finalPrice * arrBurgers.length, 0);
            const allItemsInCart = [].concat.apply([], Object.values(newItems));
            const cartSum = allItemsInCart.reduce((sum, burger) => sum += burger.finalPrice, 0);
            return {
                ...state,
                items: newItems,
                totalCount: allItemsInCart.length,
                totalPrice: cartSum,
            };
        case EMPTY_TRASH:
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0,
            };
        case DELETE_GROUP_BURGERS:
            const copyItemsForDeleteGroup = { ...state.items };
            // const itemsAfterDelete = Object.values(copyItemsForDeleteGroup).flat(1).filter((burger) => burger.id !== action.payload.id || burger.finalPrice !== action.payload.priceItem || burger.type !== action.payload.type);
            // const sumDeleted = state.totalPrice - itemsAfterDelete.reduce((sum, burger) => sum += burger.finalPrice, 0);
            // const countAfterDeletionGroup = itemsAfterDelete.reduce((counts) => counts += 1, 0);

            const countAfterDeletionGroup = state.totalCount - copyItemsForDeleteGroup[`${ action.payload.id }${ action.payload.priceItem }${ action.payload.type }`].reduce((counts) => counts += 1, 0);
            const sumDeleted = copyItemsForDeleteGroup[`${ action.payload.id }${ action.payload.priceItem }${ action.payload.type }`].reduce((sum, burger) => sum += burger.finalPrice, 0);
            delete copyItemsForDeleteGroup[`${ action.payload.id }${ action.payload.priceItem }${ action.payload.type }`];
            return {
                ...state,
                items: copyItemsForDeleteGroup,
                totalPrice: state.totalPrice - sumDeleted,
                totalCount: countAfterDeletionGroup,
            };
        case ADD_ITEM:
            const newItemsAfterAddItem = {
                ...state.items,
                [action.payload]: [...state.items[action.payload], state.items[action.payload][0]],
            };
            return {
                ...state,
                items: newItemsAfterAddItem,
                totalPrice: state.totalPrice + state.items[action.payload][0].finalPrice,
                totalCount: Object.values(newItemsAfterAddItem).flat(1).length,
            };
        case DELETE_ITEM:
            const newItemsAfterDeleteItem = {
                ...state.items,
                [action.payload]: state.items[action.payload].length > 1
                    ? state.items[action.payload].slice(1)
                    : state.items[action.payload],
            };
            return {
                ...state,
                items: newItemsAfterDeleteItem,
                totalPrice: Object.values(newItemsAfterDeleteItem).flat(1).reduce((sum, burger) => sum += burger.finalPrice, 0),
                totalCount: Object.values(newItemsAfterDeleteItem).flat(1).length,
            };
        default:
            return state;
    };
};

export default cart;