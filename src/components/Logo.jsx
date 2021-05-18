import React from 'react';
import { Link } from 'react-router-dom';
import burgerLogo from '../assets/img/burger-logo.svg';

const Logo = () => {
    return (
        <Link to="/">
            <div className="header__logo">
                <img width="38" src={ burgerLogo } alt="Burger logo" />
                <div>
                    <h1>React Burger</h1>
                    <p>открывай роток &#8211; летит бургерок</p>
                </div>
            </div>
        </Link>
    );
};

export default Logo;