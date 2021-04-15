import React from 'react';
import { Categories, SortPopUp, BurgerCard } from '../components';

const Home = (props) => {
    const { products } = props;

    return (
        <div className="container">
            <div className="content__top">
                <Categories burgerCategories={ ['Мясные', 'Экзотические', 'Куриные', 'Острые', 'Рыбные'] } />
                <SortPopUp sortCategories={[
                    { name: 'популярности', type: 'popular' },
                    { name: 'цене', type: 'price' },
                    { name: 'алфавиту', type: 'alphabet' },
                ]} 
                />
            </div>
            <h2 className="content__title">Все бургеры</h2>
            <div className="content__items">
                {
                    products.map((burger) => {
                        return (
                            <BurgerCard
                                key={ burger.id }
                                { ...burger }
                                // imageUrl={ burger.imageUrl }
                                // name={ burger.name }
                                // types={ burger.types }
                                // sizes={ burger.sizes }
                                // price={ burger.price }
                                // category={ burger.category }
                                // rating={ burger.rating }
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Home;
