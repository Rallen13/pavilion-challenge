import * as React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <nav>
      <img
        className="logo"
        src="https://png.monster/wp-content/uploads/2022/02/png.monster-703.png"
        alt="github-logo"
      ></img>
      <h1 className="header">Member Directory</h1>
    </nav>
  );
};

export default Header;
