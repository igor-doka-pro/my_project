import React from 'react';
import cl from './Button.module.css';
import PropTypes from 'prop-types';


export const Button = (props) => {
  const styles = props.styles ? props.styles : null;

  return (
    <React.Fragment>
       { styles ? (
        <button onClick={props.onClick} style={styles} className={cl.btn}>{props.children}</button>
      ) : (
        <button onClick={props.onClick} className={cl.btn}>{props.children}</button>
      )}
    </React.Fragment>
  );
};

Button.propTypes = {
  styles: PropTypes.object,
  onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
  onClick: () => {}
}
