import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import cl from './Header.module.css';


export const Header = () => {
  return (
    <div className={cl.header__container}>
      <Navbar/>
    </div>
  );
};