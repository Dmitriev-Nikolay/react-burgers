import React from 'react';
import PropTypes from 'prop-types';

// class Categories extends React.Component {
//     state = {
//         activeCategory: null,
//     };

//     onSelectCategory = (i) => {
//         this.setState({
//             activeCategory: i,
//         });
//     };

//     render() {
//         const { items } = this.props;
//         return (
//             <div className="categories">
//                 <ul>
//                     <li className="active">Все</li>
//                     {
//                         items.map((category, i) => (
//                             <li
//                                 className={ this.state.activeCategory === i ? 'active' : '' }
//                                 onClick={ () => this.onSelectCategory(i) }
//                                 key={ `${category}_${i}` }
//                             >
//                                 { category }
//                             </li>
//                         )
//                         )
//                     }
//                 </ul>
//             </div>
//         )
//     };
// };

const Categories = React.memo((props) => {
    // const [activeCategory, setActiveCategory] = React.useState(null);
    const { burgerCategories, onClickCategory, activeCategory } = props;

    // const onSelectedCategory = (i) => {
        // setActiveCategory(i);
    //     onClickCategory(i);
    // };

    return (
        <div className="categories">
            <ul>
                <li 
                    className={ activeCategory === null ? 'active' : '' }
                    onClick={ () => onClickCategory(null) }
                >Все
                </li>
                {
                    burgerCategories && burgerCategories.map((categoryItem, index) => (
                        <li
                            className={ activeCategory === index ? 'active' : '' }
                            onClick={ () => onClickCategory(index) }
                            key={ `${ categoryItem }_${ index }` }
                        >
                            { categoryItem }
                        </li>
                    )
                    )
                }
            </ul>
        </div>
    );
});

Categories.propTypes = {
    burgerCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func,
    activeCategory: PropTypes.number,
};

Categories.defaultProps = {
    burgerCategories: [],
    activeCategory: null,
};

export default Categories;