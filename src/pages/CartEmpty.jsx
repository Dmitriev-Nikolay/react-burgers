import React from 'react';
import { Link } from 'react-router-dom';
import emptyCart from '../assets/img/empty-cart.png';

const CartEmpty = () => {
    return (
        <div className="content">
            <div className="container container--cart">
                <div className="cart cart--empty">
                    <h2>Корзина пустая 😢</h2>
                    <p>
                        Пока вы еще ничего не добавили в корзину.<br />
                        Для того, чтобы заказать бургеры, перейдите на главную страницу.
                    </p>
                    <img src={ emptyCart } alt="Empty cart" width="300" height="220" />
                    <Link to="/">
                        <div className="cart__bottom-buttons">
                            <div className="button button--outline button--add go-back-btn">
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Назад к бургерам</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartEmpty;