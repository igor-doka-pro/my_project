import React from 'react';
import cl from './Button.module.css';
import PropTypes from 'prop-types';


export const Button = (props) => {
  return (
    <React.Fragment>
       { props.btnInCard ? (
        <button onClick={props.onClick} className={cl.btn__in_card} disabled={props.disabled}>{props.children}</button>
      ) : (
        <button onClick={props.onClick} className={cl.btn}>{props.children}</button>
      )}
    </React.Fragment>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

Button.defaultProps = {
  onClick: () => {}
}
