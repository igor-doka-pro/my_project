import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../store/index";

export function useLoginWithValidate(
  login,
  password,
  page,
  dispatcherUser,
  dispatcherErr
) {
  const [textValidateLogin, setTextValidateLogin] = useState("");
  const [textValidatePassword, setTextValidatePassword] = useState("");
  const [textValidateFill, setTextValidateFill] = useState("");
  const navigate = useNavigate();

  function checkValidate() {
    if (!login || !password) {
      setTextValidateLogin("");
      setTextValidatePassword("");
      setTextValidateFill("Заполните все обязательные поля! (логин и пароль)");
      dispatcherErr({
        fillErr: true,
      });
    } else {
      setTextValidateFill("");
      dispatcherErr({
        fillErr: false,
      });
    }

    const isFillErr = getActualErrors().fillErr;

    if (page === "signup" && !isFillErr) {
      if (localStorage.getItem(login)) {
        setTextValidatePassword("");
        setTextValidateFill("");
        setTextValidateLogin("Такой пользователь уже зарегистрирован!");
        dispatcherErr({
          loginErr: true,
        });
      } else {
        setTextValidateLogin("");
        dispatcherErr({
          loginErr: false,
        });
      }
    } else if (page === "signin" && !isFillErr) {
      const user = JSON.parse(localStorage.getItem(login));

      if (!user) {
        setTextValidatePassword("");
        setTextValidateFill("");
        setTextValidateLogin("Такого пользователя не существует!");
        dispatcherErr({
          loginErr: true,
        });
      } else {
        setTextValidateLogin("");
        dispatcherErr({
          loginErr: false,
        });

        if (password !== user.password) {
          setTextValidatePassword("Неправильный пароль!");
          dispatcherErr({
            passwordErr: true,
          });
        } else {
          setTextValidatePassword("");
          dispatcherErr({
            passwordErr: false,
          });
        }
      }
    }
  }

  function loginAccount() {
    const errors = getActualErrors();

    if (!errors.loginErr && !errors.passwordErr && !errors.fillErr) {
      if (page === "signup") {
        dispatcherUser({
          login,
          password,
          online: true,
        });
      } else if (page === "signin") {
        dispatcherUser({
          login,
          password,
          auth: true,
          online: true,
        });
      }

      navigate("/");
    }
  }

  function getActualErrors() {
    const { errors } = store.getState()[page];

    return errors;
  }

  return [
    textValidateFill,
    textValidateLogin,
    textValidatePassword,
    checkValidate,
    loginAccount,
  ];
}
