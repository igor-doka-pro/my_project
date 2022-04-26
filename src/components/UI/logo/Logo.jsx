import React from 'react';
import cl from './Logo.module.css';


export const Logo = () => {
  return (
    <div className={cl.header__navbar_logo}>
      <img width={40} height={40} src='img/logo.svg' alt="logo"/>
      <h1 style={{fontWeight: 'normal', lineHeight: '0.9'}}>The Bob's Burgers</h1>
    </div>
  );
};