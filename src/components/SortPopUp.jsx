import React from 'react';

const SortPopUp = (props) => {
    const { sortCategories } = props;
    const [activeSort, setActiveSort] = React.useState(0); //
    const [stateVisiblePopUp, setVisiblePopUp] = React.useState(false); //
    const activeSortName = sortCategories[activeSort];

    const sortRef = React.useRef();

    const onSelectedSort = (i) => {
        setActiveSort(i);
        setVisiblePopUp(false);
    };

    const viewPopUp = () => {
        setVisiblePopUp(!stateVisiblePopUp);
    };

    const clickedOut = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setVisiblePopUp(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', clickedOut);
        return () => document.removeEventListener('click', clickedOut)
    }, []);

    return (
        <div ref={ sortRef } className="sort">
            <div className="sort__label">
                <svg className={ stateVisiblePopUp ? 'rotate' : '' } width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C" />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={ viewPopUp }>{ activeSortName }</span>
            </div>
            { stateVisiblePopUp && <div className="sort__popup">
                <ul>
                {
                    sortCategories && sortCategories.map((sortItem, i) => (
                        <li
                            className={ activeSort === i ? 'active' : '' }
                            onClick={ () => onSelectedSort(i) }
                            key={ `${ sortItem }_${ i }` }
                        >
                            { sortItem }
                        </li>
                    )
                    )
                }
                </ul>
            </div>}
        </div>
    )
}

export default SortPopUp;
