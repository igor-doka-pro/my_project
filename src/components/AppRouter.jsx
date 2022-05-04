import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from '../pages/Main';
import { SignIn } from '../pages/SignIn/SignIn';
import { SignUp } from '../pages/SignUp/SignUp';
import { Favorites } from '../pages/Favorites/Favorites';
import { History } from '../pages/History/History';
import { Error } from '../pages/Error';
import { Search } from '../pages/Search';
import { Character } from '../pages/Character';


export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/search' element={<Search/>} />
      <Route path='/character/:id' element={<Character/>} />
      <Route path='/favorites' element={<Favorites/>} />
      <Route path='/history' element={<History/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
  );
};