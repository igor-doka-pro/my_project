import React from 'react';
import cl from './History.module.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const History = () => {
  const login = useSelector(state => state.signin.user.login);
  const history = useSelector(state => state.signin.user.history);
  const navigate = useNavigate();

  function handleClick(param) {
    navigate(`/search?name=${param}`);
  }
  
  return (
    <div className={cl.history__wrap}>
      <h2 className={cl.history__header}>История поиска</h2>
      <ul className={cl.history__elems}>
        {history ? (
          history.map((elem, i) => 
            <li key={i}>
              <div onClick={() => handleClick(elem)} className={cl.history__elem_wrap}>
                <div className={cl.history__elem}>
                  {`${i + 1}. Строка запроса: `}
                  <span className={cl.param}>{`${elem} `}</span>
                  Пользователь: <span className={cl.login}>{login}</span>
                </div>
              </div>
            </li>
          )
        )
        : null
        }
      </ul>
      
      
       
    </div>
  );
};