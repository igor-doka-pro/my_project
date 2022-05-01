import React from 'react';
import { Form } from '../../components/UI/form/Form';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, validate } from './SignupSlice';

export const SignUp = () => {
  const dispatch = useDispatch();
  const registration = useCallback(user => dispatch(addUser(user)), [dispatch]);
  const validation = useCallback(error => dispatch(validate(error)), [dispatch]);
  
  return (
    <Form
      dispatcherUser={registration}
      dispatcherErr={validation}
      page='signup'
      buttonText='Зарегистрироваться'
    />
  );
};