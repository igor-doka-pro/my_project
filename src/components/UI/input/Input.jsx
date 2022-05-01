import React from 'react';
import cl from './Input.module.css';


export const Input = (props) => {
  return (
    <input
      className={cl.input}
      type={props.type}
      style={props.style}
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
      autoComplete='off'
      placeholder={props.placeholder}
    />
  );
};

