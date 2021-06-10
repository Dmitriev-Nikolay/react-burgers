import { ADD_BURGER_TO_CART, EMPTY_TRASH, DELETE_GROUP_BURGERS, ADD_ITEM, DELETE_ITEM } from '../actions/constants';

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
    countItemInCart: 0,
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BURGER_TO_CART:
            const actualObj = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload],

                // [`${action.payload.id}${action.payload.finalPrice}${action.payload.type}`]: !state.items[`${action.payload.id}${action.payload.finalPrice}${action.payload.type}`]
                //     ? [action.payload]
                //     : [...state.items[`${action.payload.id}${action.payload.finalPrice}${action.payload.type}`], action.payload],

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

        case EMPTY_TRASH:
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0,
            };

        case DELETE_GROUP_BURGERS:
            const copyItemsForDeleteGroup = { ...state.items };
            const itemsAfterDelete = Object.values(copyItemsForDeleteGroup).flat(1).filter((burger) => burger.id !== action.payload.id || burger.finalPrice !== action.payload.priceItem || burger.type !== action.payload.type);
            const sumDeleted = state.totalPrice - itemsAfterDelete.reduce((sum, burger) => sum += burger.finalPrice, 0);
            const countAfterDeletionGroup = itemsAfterDelete.reduce((counts) => counts += 1, 0);
            return {
                items: itemsAfterDelete,
                totalPrice: state.totalPrice - sumDeleted,
                totalCount: countAfterDeletionGroup,
            };
        case ADD_ITEM:
            const copyItemsForAddItem = { ...state.items };
            const itemsAfterAdd = Object.values(copyItemsForAddItem).flat(1).reduce((arrAdded, burger) => {
                const idx = arrAdded.findIndex(elem => elem.length > 0 && elem[0].finalPrice === burger.finalPrice && elem[0].type === burger.type && elem[0].name === burger.name);
                if (idx !== -1) {
                    arrAdded[idx].push(burger);
                } else {
                    arrAdded.push([burger]);
                }
                return arrAdded;
            }, []);
            console.log(itemsAfterAdd);
            // const news = [...state.items[action.payload.id], state.items[action.payload.id][0]];

            return {
                ...state,
                // items: {...state.items, [action.payload.id]: news },
                // items: news,
                // totalPrice: state.totalPrice + action.payload.finalPrice,
                // totalCount: state.totalCount + 1,
                // items: {
                //     [action.payload.id]: {
                //         items: news,
                //     },
                // },
                // totalPrice: state.totalPrice - sumDeleted,
                // totalCount: countAfterDeletionGroup,
            };
        case DELETE_ITEM:
            return {
                ...state,
            };
        default:
            return state;
    };
};

export default cart;