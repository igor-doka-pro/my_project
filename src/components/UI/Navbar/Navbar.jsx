import React from 'react';
import { useSelector } from 'react-redux';
import { useLogout } from '../../../hooks/useLogout';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import { Logo } from '../logo/Logo';
import cl from './Navbar.module.css';

const loginStyles = {
  color: '#33ff33',
  fontWeight: 700,
  letterSpacing: 1
};

export const Navbar = () => {
  const userIn = useSelector(state => state.signin.user);
  const userUp = useSelector(state => state.signup.user);

  const handleClick = useLogout();

  return (
    <div className={cl.header__navbar}>
      <Link to='/'>
        <Logo/>
      </Link>
      
      <div className={cl.header__navbar_logIn}>
        {!(userIn.online || userUp.online)
          ?
          <React.Fragment>
            <Link to='/signin'>
              <Button>Вход</Button>
            </Link>
        
            <Link to='/signup'>
              <Button>Регистрация</Button>
            </Link>
          </React.Fragment>
          :
          <React.Fragment>
            <Link to='/favorites'>
              <Button>Избранное</Button>
            </Link>

            <Link to='/history'>
              <Button>История</Button>
            </Link>

            <Link to='/'>
              <Button onClick={handleClick}>Выход</Button>
            </Link>

            <div style={loginStyles}>
              {userIn.online ? userIn.login : userUp.login}
            </div>
          </React.Fragment>
        }
        
      </div>
    </div>
  );
};