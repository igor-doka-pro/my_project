import React from 'react';
import { useGetCharacterQuery } from '../../AppSearch/charactersAPI';
import { useGetId } from '../../../hooks/useGetId';
import { Card } from '../Card/Card';
import cl from './MoreInformation.module.css';


export const MoreInformation = () => {
  const id = useGetId();
  const { data, isLoading, error } = useGetCharacterQuery(id);

  return (
    <div className={cl.card__wrap}>
      <div className={cl.card}>
        {isLoading
          ? <div style={{color: 'white'}}>Загрузка...</div>
          : error 
            ? <div style={{color: 'white'}}>{error.message}</div>
            : <Card characterData={data} detail/>
        }
      </div>
    </div>
  )
     
}