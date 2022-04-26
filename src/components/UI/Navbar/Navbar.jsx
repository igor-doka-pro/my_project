import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import { Logo } from '../logo/Logo';
import cl from './Navbar.module.css';


export const Navbar = () => {
  return (
    <div className={cl.header__navbar}>
      <Link to='/'>
        <Logo/>
      </Link>
      
      <div className={cl.header__navbar_logIn}>
        <Link to='/signin'>
          <Button>Вход</Button>
        </Link>
        
        <Link to='/signup'>
          <Button>Регистрация</Button>
        </Link>
      </div>
    </div>
  );
};