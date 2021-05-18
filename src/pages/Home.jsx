import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategory, setSort } from '../store/actions/filters';
import { addBurgerToCart } from '../store/actions/cart';
import { axiosBurgers } from '../store/actions/burgers';

import { Categories, SortPopUp, BurgerCard, BurgerCardLoading } from '../components';

const nameCategories = ['Мясные', 'Экзотические', 'Куриные', 'Сырные', 'Рыбные'];
const nameSort = [
    { name: 'популярности', type: 'rating' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'name' },
];

const Home = React.memo(() => {
    const { isLoaded, burgers, sortBy, category, cartItems } = useSelector(state => { // mapState
        return {
            isLoaded: state.burgersReducer.isLoaded,
            burgers: state.burgersReducer.items,
            sortBy: state.filtersReducer.sortBy,
            category: state.filtersReducer.category,
            cartItems: state.cartReducer.items,
        };
    });

    const dispatch = useDispatch(); // mapActions

    React.useEffect(() => {
        dispatch(axiosBurgers(sortBy, category));
    }, [dispatch, sortBy, category]);

    const onSelectCategory = React.useCallback((i) => {
        dispatch(setCategory(i));
    }, [dispatch]);

    const onSelectSort = React.useCallback((typeSort) => {
        dispatch(setSort(typeSort));
    }, [dispatch]);

    const addItemToCart = React.useCallback((burgerObj) => {
        dispatch(addBurgerToCart(burgerObj));
    }, [dispatch]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={ category }
                    burgerCategories={ nameCategories }
                    onClickCategory={ onSelectCategory }
                />
                <SortPopUp 
                    sortCategories={ nameSort }
                    activeSort={ sortBy }
                    onClickSort={ onSelectSort }
                />
            </div>
            <h2 className="content__title">Все бургеры</h2>
            <div className="content__items">
                {
                    isLoaded
                        ? burgers.map((burger) => {
                            return (
                                <BurgerCard
                                    key={ burger.id }
                                    { ...burger }
                                    burgerCountInСart={ cartItems[burger.id] && cartItems[burger.id].length }
                                    onClickAddBurger={ addItemToCart }
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
                        : Array.from(Array(12), (_, i) => <BurgerCardLoading key={ i } />)
                }
            </div>
        </div>
    );
});

export default Home;