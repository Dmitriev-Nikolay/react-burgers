import React from 'react';

import { Logo, Button } from '../components';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <Logo />
                <Button />
            </div>
        </div>
    );
};

export default Header;