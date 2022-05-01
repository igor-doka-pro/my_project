import React from 'react';
import { Async } from 'react-async';
import { useLoad } from '../../../hooks/useLoad';
import { Card } from '../Card/Card';
import cl from './MoreInformation.module.css';


export const MoreInformation = () => {
  const load = useLoad();

  return (
    <Async promiseFn={load}>
    {({ data, error, isLoading }) => {
      if (isLoading) return "Loading...";
      if (error) return `Something went wrong: ${error.message}`;
      if (data)
        return (
          <div className={cl.card__wrap}>
            <div className={cl.card}>
              <Card characterData={data} detail/>
            </div>
          </div>
        );
      return null;
    }}
  </Async>
  );
};