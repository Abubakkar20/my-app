import React from 'react';
import HeaderMain from './HeaderMain';
import Resume from './Resume';
import HeaderNav from './HeaderNav';


const Header = () => {
    return (
        <div>
          <HeaderNav></HeaderNav>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;