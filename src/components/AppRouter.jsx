import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Favorites from '../pages/Favorites';
import History from '../pages/History';
import Error from '../pages/Error';


const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/favorites' element={<Favorites/>} />
      <Route path='/history' element={<History/>} />
      <Route path='*' element={<Error/>}/>
    </Routes>
  );
};

export default AppRouter;