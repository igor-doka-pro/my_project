import React from 'react';
import cl from './Button.module.css';

const Button = ({children}) => {
  return (
    <button className={cl.btn}>{children}</button>
  );
};

export default Button;