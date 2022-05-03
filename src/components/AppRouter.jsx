import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
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
      <Route path='/' element={<ErrorBoundary FallbackComponent={<Search/>}><Main/></ErrorBoundary>} />
      <Route path='/signin' element={<ErrorBoundary FallbackComponent={<Search/>}><SignIn/></ErrorBoundary>} />
      <Route path='/signup' element={<ErrorBoundary FallbackComponent={<Search/>}><SignUp/></ErrorBoundary>} />
      <Route path='/search' element={<ErrorBoundary FallbackComponent={<Main/>}><Search/></ErrorBoundary>} />
      <Route path='/character/:id' element={<ErrorBoundary FallbackComponent={<Search/>}><Character/></ErrorBoundary>} />
      <Route path='/favorites' element={<ErrorBoundary FallbackComponent={<Search/>}><Favorites/></ErrorBoundary>} />
      <Route path='/history' element={<ErrorBoundary FallbackComponent={<Search/>}><History/></ErrorBoundary>} />
      <Route path='*' element={<Error/>} />
    </Routes>
  );
};