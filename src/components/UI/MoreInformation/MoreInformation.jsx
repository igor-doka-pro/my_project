import React from 'react';
import { useLocation } from 'react-router-dom';
import { useGetCharacterQuery } from '../../AppSearch/charactersAPI';
import { useGetId } from '../../../hooks/useGetId';
import { Card } from '../Card/Card';
import cl from './MoreInformation.module.css';


export const MoreInformation = () => {
  const id = useGetId();
  const { data, isLoading, error } = useGetCharacterQuery(id);

  const location = useLocation();
  const btn_favorites_off = location.state.btn_favorites_off;

  return (
    <div className={cl.card__wrap}>
      <div className={cl.card}>
        {isLoading
          ? <div style={{color: 'white'}}>Загрузка...</div>
          : error 
            ? <div style={{color: 'white'}}>{error.message}</div>
            : <Card characterData={data} detail btn_favorites_off={btn_favorites_off}/>
        }
      </div>
    </div>
  )
     
}