import { ADD_BURGER_TO_CART, EMPTY_TRASH, DELETE_GROUP_BURGERS, ADD_ITEM, DELETE_ITEM } from './constants';

export const addBurgerToCart = (burger) => ({
    type: ADD_BURGER_TO_CART,
    payload: burger,
});

export const clearCart = () => ({
    type: EMPTY_TRASH,
});

export const addItem = (burgerForAdd) => ({
    type: ADD_ITEM,
    payload: burgerForAdd,
});

export const deleteItem = (burgerForDelete) => ({
    type: DELETE_ITEM,
    payload: burgerForDelete,
});

export const deleteBurgersGroup = (burger) => ({
    type: DELETE_GROUP_BURGERS,
    payload: burger,
});