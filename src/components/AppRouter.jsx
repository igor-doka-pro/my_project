import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Main } from '../pages/Main';
import { SignIn } from '../pages/SignIn/SignIn';
import { SignUp } from '../pages/SignUp/SignUp';
import { Favorites } from '../pages/Favorites';
import { History } from '../pages/History';
import { Error } from '../pages/Error';
import { Search } from '../pages/Search';
import { Character } from '../pages/Character';


export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<ErrorBoundary><Main/></ErrorBoundary>} />
      <Route path='/signin' element={<ErrorBoundary><SignIn/></ErrorBoundary>} />
      <Route path='/signup' element={<ErrorBoundary><SignUp/></ErrorBoundary>} />
      <Route path='/search' element={<ErrorBoundary><Search/></ErrorBoundary>} />
      <Route path='/character/:id' element={<ErrorBoundary><Character/></ErrorBoundary>} />
      <Route path='/favorites' element={<ErrorBoundary><Favorites/></ErrorBoundary>} />
      <Route path='/history' element={<ErrorBoundary><History/></ErrorBoundary>} />
      <Route path='*' element={<Error/>} />
    </Routes>
  );
};