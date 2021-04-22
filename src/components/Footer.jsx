import React from 'react';
import BurgerLogo from '../assets/img/burger-logo.svg';
import MyLogo from '../assets/img/My_logo.png';


const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="footer">
            <div className="container">
                <div className="footer-part-stats">
                    <div className="stats-part">
                        <span className="stats-main">
                            <span className="stats-main__money-value">1&nbsp;222&nbsp;701&nbsp;368</span>
                            <span className="stats-main__money-currency"> &#x20bd;</span>
                        </span>
                        <span>Прибыль сети в этом месяце</span>
                    </div>
                    <div className="stats-part">
                        <span className="stats-main">179 бургерных</span>
                        <span>в 43 городах России</span>
                    </div>
                </div>
                <div className="dev">
                    <span className="who-dev">Разработка приложения:</span>
                    <a href="https://github.com/Dmitriev-Nikolay"><img width="40" src= { MyLogo } alt="Burger logo" /></a>
                </div>
            </div>
            <div className="footer-copyright">
                <div onClick={ scrollToTop } className="copyright">
                    <img width="40" src={ BurgerLogo } alt="Burger logo" />
                    <span>React Burger © 2021</span>
                </div>
                <div className="social">
                    <p>Бургерок в соцсетях</p>
                    <a href="https://github.com/Dmitriev-Nikolay" target="_blank"><i className="fa fa-github fa-2x"></i></a>
                    <a href="" target="_blank"><i className="fa fa-youtube fa-2x"></i></a>
                    <a href="" target="_blank"><i className="fa fa-paper-plane fa-2x"></i></a>
                    <a href="" target="_blank"><i className="fa fa-facebook fa-2x"></i></a>
                    <a href="" target="_blank"><i className="fa fa-twitter fa-2x"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;