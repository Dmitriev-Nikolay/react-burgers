import React from 'react';

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

const Categories = (props) => {
    const [activeCategory, setActiveCategory] = React.useState(null);
    const { burgerCategories } = props;

    const onSelectedCategory = (i) => {
        setActiveCategory(i);
    };

    return (
        <div className="categories">
            <ul>
                <li 
                    className={ activeCategory === null ? 'active' : '' }
                    onClick={ () => onSelectedCategory(null) }
                >Все
                </li>
                {
                    burgerCategories && burgerCategories.map((categoryItem, i) => (
                        <li
                            className={ activeCategory === i ? 'active' : '' }
                            onClick={ () => onSelectedCategory(i) }
                            key={ `${ categoryItem }_${ i }` }
                        >
                            { categoryItem }
                        </li>
                    )
                    )
                }
            </ul>
        </div>
    );
};

export default Categories;