import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { clearCart } from '../store/actions/cart';

import { CartItem, ModalDeleteCart } from '../components';
import { CartEmpty } from '../pages/';

const Cart = () => {
    const { items: cartItems, totalPrice, totalCount } = useSelector(({ cartReducer }) => cartReducer);

    let addedBurgersToCart = [];
    for (let i = 0; i < Object.keys(cartItems).length; i++) {
            addedBurgersToCart = cartItems[Object.keys(cartItems)[i]].reduce((arrAdded, added) => {
                arrAdded.push(added);
            return arrAdded;
        }, addedBurgersToCart);
    };

    // const addedBurgersToCart = Object.keys(cartItems).map((key, i) => {
    //     return cartItems[key][i];
    // });

    const dispatch = useDispatch(); // mapActions

    const deleteBurgersInCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="content">
            <div className="container container--cart">
                {
                    totalCount === 0
                        ? <CartEmpty />
                        : (
                            <div className="cart">
                                <div className="cart__top">
                                    <h2 className="content__title">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Корзина
                                    </h2>
                                    <ModalDeleteCart deleteAllItems={ deleteBurgersInCart } />
                                </div>
                                <div className="content__items">
                                    {
                                        addedBurgersToCart.map((burger, index) => (
                                            <CartItem
                                                name={ burger.name }
                                                imageBurger={ burger.imageUrl }
                                                types={ burger.type }
                                                sizes={ burger.size }
                                                // price={ Object.values(cartItems)[index].length * burger.finalPrice }
                                                key={ `${ burger.id }_${ index }_${ burger.name }` }
                                                // quantityItemInCart={ Object.values(cartItems)[index].length }
                                            />
                                        ))
                                    }
                                </div>
                                <div className="cart__bottom">
                                    <div className="cart__bottom-details">
                                        <span> Всего бургеров: <b>{ totalCount } шт.</b> </span>
                                        <span> Сумма заказа: <b>{ totalPrice } ₽</b> </span>
                                    </div>
                                    <Link to="/">
                                        <div className="cart__bottom-buttons">
                                            <div className="button button--outline button--add go-back-btn">
                                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <span>Назад к бургерам</span>
                                            </div>
                                            <div className="button pay-btn">
                                                <span>Оплатить сейчас</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                }
            </div>
        </div>
    );
};

export default Cart;