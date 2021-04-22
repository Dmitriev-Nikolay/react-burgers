import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategory } from '../store/actions/filters';
import { axiosBurgers } from '../store/actions/burgers';

import { Categories, SortPopUp, BurgerCard } from '../components';

const nameCategories = ['Мясные', 'Экзотические', 'Куриные', 'Острые', 'Рыбные'];
const nameSort = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' },
];

const Home = () => {
    const dispatch = useDispatch(); // mapActions

    React.useEffect(() => {
        dispatch(axiosBurgers());
    }, []); 

    const { burgers, filtersCategory } = useSelector(state => { // mapState
        return {
        burgers: state.burgersReducer.items,
        filtersCategory: state.filtersReducer.sortBy,
        };
    });

    const onClickItem = React.useCallback((i) => {
        dispatch(setCategory(i));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories 
                    burgerCategories={ nameCategories  } 
                    onClickItem={ onClickItem }
                />
                <SortPopUp sortCategories={ nameSort } 
                />
            </div>
            <h2 className="content__title">Все бургеры</h2>
            <div className="content__items">
                {
                    burgers && burgers.map((burger) => {
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