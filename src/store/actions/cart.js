import { ADD_BURGER_TO_CART, EMPTY_TRASH, DELETE_GROUP_BURGERS, ADD_ITEM, DELETE_ITEM } from './constants';

export const addBurgerToCart = (burger) => ({
    type: ADD_BURGER_TO_CART,
    payload: burger,
});

export const clearCart = () => ({
    type: EMPTY_TRASH,
});

export const addItem = (idburgerGroupForAdd) => ({
    type: ADD_ITEM,
    payload: idburgerGroupForAdd,
});

export const deleteItem = (idburgerGroupForDelete) => ({
    type: DELETE_ITEM,
    payload: idburgerGroupForDelete,
});

export const deleteBurgersGroup = (burger) => ({
    type: DELETE_GROUP_BURGERS,
    payload: burger,
});