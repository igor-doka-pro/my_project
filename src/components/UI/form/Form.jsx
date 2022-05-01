import React, { useState } from "react";
import { useLoginWithValidate } from "../../../hooks/useLoginWithValidate";
import { Input } from "../input/Input";
import { Button } from "../button/Button";
import cl from "./Form.module.css";


const inputStyles = {
  backgroundColor: "#242526",
  width: "100%",
  height: "40px",
  border: "1px solid white",
};

export const Form = ({ dispatcherUser, dispatcherErr, page, buttonText }) => {
  const [ login, setLogin ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ textValidateFill,
    textValidateLogin,
    textValidatePassword,
    checkValidate,
    loginAccount ] = useLoginWithValidate(login, password, page, dispatcherUser, dispatcherErr);

  const handleChange = (evt) => {
    if (evt.target.name === 'login') {
      setLogin(evt.target.value);
    } else {
      setPassword(evt.target.value);
    }
  };

  const handleClick = (evt) => {
    evt.preventDefault();
    
    setLogin('');
    setPassword('');
    checkValidate();
    loginAccount();
  };

  return (
    <div className={cl.wrap}>
      <form className={cl.form}>
        <label className={cl.form__label} htmlFor="login">
          <p className={cl.form__label_header}>Логин:</p>
          <Input
            onChange={handleChange}
            value={login}
            style={inputStyles}
            name="login"
            id="login"
          />
        </label>
        <label className={cl.form__label} htmlFor="password">
          <p className={cl.form__label_header}>Пароль:</p>
          <Input
            onChange={handleChange}
            value={password}
            style={inputStyles}
            name="password"
            id="password"
          />
        </label>
        <Button onClick={handleClick}>{buttonText}</Button>

        {{textValidateFill}
          ? <div style={{color: 'red'}}>{textValidateFill}</div>
          : null 
        }

        {{textValidateLogin}
          ? <div style={{color: 'red'}}>{textValidateLogin}</div>
          : null 
        }

        {{textValidatePassword}
          ? <div style={{color: 'red'}}>{textValidatePassword}</div>
          : null 
        }
        
      </form>
    </div>
  );
};