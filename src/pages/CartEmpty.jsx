import React from 'react';
import EmptyCart from '../assets/img/empty-cart.png';

const CartEmpty = () => {
    return (
        <div className="content">
            <div className="container container--cart">
                <div className="cart cart--empty">
                    <h2>Корзина пустая <icon>😕</icon></h2>
                    <p>
                        Пока вы еще ничего не добавили в корзину.<br />
                        Для того, чтобы заказать бургер, перейди на главную страницу.
                    </p>
                    <img src={ EmptyCart } alt="Empty cart"/>
                    <a href="/" className="button button--black">
                        <span>Вернуться назад</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CartEmpty;
