import React from 'react';
import cl from './Logo.module.css';

const Logo = () => {
  return (
    <div className={cl.header__navbar_logo}>
      <h1 style={{fontWeight: 'normal'}}>Lord of the Rings</h1>
    </div>
  );
};

export default Logo;