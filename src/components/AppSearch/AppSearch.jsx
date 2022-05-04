import React, { useEffect, useState, useCallback } from 'react';
import { useSearch } from '../../hooks/useSearch';
import { useSelector, useDispatch } from 'react-redux';
import { addHistory } from '../../pages/SignIn/SigninSlice';
import { Link } from 'react-router-dom';
import { Input } from '../UI/input/Input';
import { Button } from '../UI/button/Button';
import { Cards } from '../UI/Cards/Cards';
import cl from './AppSearch.module.css';
import { findMatchCharacters } from '../../utils/requests';

const inputStyles = {
  backgroundColor: '#242526',
  width: '700px',
  height: '50px',
  border: 'none'
};


export const AppSearch = (props) => { 
  const [initInput, data, dataAll, setDataAll] = useSearch();
  const [inputValue, setInputValue] = useState(initInput);
  const userIn = useSelector((state) => state.signin.user);
  
  const dispatch = useDispatch();
  const dispatchSearchQuery = useCallback(
    (searchQuery) => dispatch(addHistory(searchQuery)),
    [dispatch]
  );

  function handleChange(evt) {
    setInputValue(evt.target.value);
  }

  function handleClick() {
    const searchQuery = {
      param: inputValue,
      login: userIn.login,
    };

    dispatchSearchQuery(searchQuery);
  }

  useEffect(() => {
    findMatchCharacters(initInput, setDataAll);
  }, [initInput]);
  
  return (
    <div className={cl.search} style={props.style}>
      <label className={cl.search__label} htmlFor="search">
        <h2>Поиск персонажей сериала</h2>
      </label>
      <div className={cl.wrap}>
        <Input type='text' onChange={handleChange} value={inputValue} style={inputStyles} placeholder='Введите имя персонажа' id='search'>
          {inputValue}
        </Input>
        <Link to={inputValue ? `/search?name=${inputValue}` : ''}>
          <Button onClick={handleClick}>Найти</Button>
        </Link>
      </div>
      
      {data.length
        ? <Cards cardsData={data}/>
        : <Cards cardsData={dataAll}/>
      }
      
    </div>
  );
};