import React from 'react';
import cl from './Input.module.css';


export const Input = (props) => {
  return (
    <input
      className={cl.input}
      type="text"
      style={props.style}
      id={props.id}
      onChange={props.onChange}
      value={props.value}
      autoComplete='off'
      autoFocus
      placeholder='Введите имя персонажа'
    />
  );
};

