import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import  { Header } from './components/UI/Header/Header';
import { AppRouter } from './components/AppRouter';
import './App.css';


export function App() {
  return (
    <BrowserRouter>
      <Header/>
      <AppRouter/>
    </BrowserRouter>
  )
}