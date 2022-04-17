import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/UI/Header/Header';
import AppRouter from './components/AppRouter';

function App() {
  return (
    
    <BrowserRouter>
      <Header/>
      <AppRouter/>
    </BrowserRouter>
    
  )
}

export default App;
