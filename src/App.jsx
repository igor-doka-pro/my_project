import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/UI/Header/Header";
import { AppRouter } from "./components/AppRouter";
import { ErrorBoundary } from './components/ErrorBoundary';
import "./App.css";

export function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Header />
        <AppRouter />
      </ErrorBoundary>
    </BrowserRouter>
  );
}
