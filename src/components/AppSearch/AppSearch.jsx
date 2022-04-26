import React, { useEffect } from 'react';
import { useSearch } from '../../hooks/useSearch';
import { Link } from 'react-router-dom';
import { Input } from '../UI/input/Input';
import { Button } from '../UI/button/Button';
import { Cards } from '../UI/Cards/Cards';
import cl from './AppSearch.module.css';

const inputStyles = {
  backgroundColor: '#242526',
  width: '700px',
  height: '50px',
  border: 'none'
};


export const AppSearch = (props) => { 
  const [ inputValue, cardsData, handleChange, handleClick, renderCards ] = useSearch();

  useEffect(() => {
    renderCards();
  }, []);

  return (
    <div className={cl.search} style={props.style}>
      <label className={cl.search__label} htmlFor="search">
        <h2>Поиск персонажей сериала</h2>
      </label>
      <div className={cl.wrap}>
        <Input onChange={handleChange} value={inputValue} style={inputStyles} id='search'>
          {inputValue}
        </Input>
        <Link to={inputValue ? `/search?name=${inputValue}` : ''}>
          <Button onClick={x => handleClick(x)}>Найти</Button>
        </Link>
      </div>
      <Cards cardsData={cardsData}/>
    </div>
  );
};