import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import StarIcon from '../../assets/img/star.svg';

function BurgerCard(props) {
    const { imageUrl, name, types, sizes, price, rating } = props; // { ...burger }

    const [activeType, setActiveType] = React.useState(types[0]);
    const typeNames = ["Классическая булочка", "Булочка с кунжутом"];

    const onSelectedType = (i) => {
        setActiveType(i);
    };
    const [activeSize, setActiveSize] = React.useState(sizes[0]);
    const sizeNames = ["S", "M", "XL"];

    const onSelectedSize = (i) => {
        setActiveSize(i);
    };

    return (
        <div className="burger-block">
            <img className="burger-block__image"
                src={ imageUrl }
                alt={ name } />
            <div className="burger-block__rating">
                <img width="20" src={ StarIcon } alt="Star icon" />
                { rating }
            </div>
            <h4 className="burger-block__title">{ name }</h4>
            <div className="burger-block__selector">
                <ul>
                    {
                        typeNames.map((type, index) => (
                            <li
                                onClick={ () => onSelectedType(index) }
                                className={ classNames({
                                    'active': activeType === index,
                                    'disabled': !types.includes(index),
                                })
                                }
                                key={`${ type }_${ index }`}> 
                                { type }
                            </li>
                        ))
                    }
                </ul>
                <ul>
                    {
                        sizeNames.map((size, index) => (
                            <li
                                onClick={ () => onSelectedSize(index) }
                                className={ classNames({
                                    'active': activeSize === index,
                                    'disabled': !sizes.includes(index),
                                })
                                }
                                key={ `${ size }_${ index }` }>
                                { size }
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="burger-block__bottom">
                <div className="burger-block__price">от { price } ₽</div>
                <div className={ classNames({
                    'button button--outline button--add': true,
                    'disabled': price === 0,
                })
                }
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 
                            4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 
                            12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white" />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                </div>
            </div>
        </div>
    );
};

BurgerCard.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
};

BurgerCard.defaultProps = {
    name: '...Бургерок...',
    types: [],
    sizes: [],
    price: 0,
    imageUrl: 'burgers/imgonline-com-ua-Resize-MC7nY2YrJV.jpg',
};

export default BurgerCard;