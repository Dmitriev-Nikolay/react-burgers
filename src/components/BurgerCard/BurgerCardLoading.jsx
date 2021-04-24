import React from 'react';
import ContentLoader from 'react-content-loader';

function BurgerCardLoading() {
    return (
        <ContentLoader
            className="burger-block"
            speed={ 2 }
            width={ 300 }
            height={ 420 }
            viewBox="0 0 300 420"
            backgroundColor="#FFC72C"
            opacity={ 0.1 }
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="190" rx="10" ry="10" width="280" height="25" /> 
            <rect x="1" y="229" rx="10" ry="10" width="280" height="100" /> 
            <rect x="10" y="-1" rx="100" ry="100" width="260" height="180" /> 
            <rect x="130" y="350" rx="30" ry="30" width="150" height="45" /> 
            <rect x="0" y="360" rx="10" ry="10" width="90" height="27" /> 
            <rect x="240" y="0" rx="10" ry="10" width="40" height="20" />
        </ContentLoader>
    );
};

export default BurgerCardLoading;
