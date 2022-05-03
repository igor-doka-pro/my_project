import React from 'react';
import cl from './History.module.css';
import { useSelector } from 'react-redux';

export const History = () => {
  const history = useSelector(state => state.signin.user.history);
  
  return (
    <div className={cl.history__wrap}>
      <h2 className={cl.history__header}>История поиска</h2>
      <ul>
        {history ? (
          history.map((searchQueries, i) => 
            <li key={i}>
              <div>
                {/* отрисовать и добавить стили */}
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