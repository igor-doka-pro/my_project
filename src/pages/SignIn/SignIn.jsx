import React from 'react';
import { Form } from "../../components/UI/form/Form";
import { useCallback } from "react";
import { useDispatch } from 'react-redux';
import { validate, authorize } from './SigninSlice';

export const SignIn = () => {
  const dispatch = useDispatch();
  const authorization = useCallback(user => dispatch(authorize(user)), [dispatch]);
  const validation = useCallback(error => dispatch(validate(error)), [dispatch]);

  return (
    <Form
    dispatcherUser={authorization}
    dispatcherErr={validation}
    page='signin'
    buttonText='Войти'
    />
  )
 
};
