import React from 'react';
import { useSelector } from 'react-redux';
import { useGetCharactersByIdsQuery } from '../../components/AppSearch/charactersAPI';
import { Cards } from '../../components/UI/Cards/Cards';
import cl from './Favorites.module.css';


export const Favorites = () => {
  const userIn = useSelector(state => state.signin.user);
  const ids = JSON.parse(localStorage.getItem(userIn.login)).favorites;
  const IDs = ids.length ? ids : null;
  const { data, isLoading, error } = useGetCharactersByIdsQuery(IDs, { skip: IDs === null });

  return (
    <div className={cl.favorites__wrap}>
      <h2 className={cl.favorites__header}>Избранное</h2>
      {isLoading
          ? <div style={{color: 'white'}}>Загрузка...</div>
          : error 
            ? <div style={{color: 'white'}}>Избранных карточек пока нет</div>
            : <Cards cardsData={data ? data : []} favorites={true}/>
        }
       
    </div>
  );
};