export const addBurgerToCart = (burger) => ({
    type: 'ADD_BURGER_TO_CART',
    payload: burger,
});

export const clearCart = () => ({
    type: 'EMPTY_TRASH',
});

export const deleteBurgersGroup = () => ({
    type: 'DELETE_GROUP_BURGERS',
});