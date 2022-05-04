import React from 'react';
import { Card } from '../Card/Card';
import cl from './Cards.module.css';
import PropTypes from 'prop-types';


export const Cards = ({ cardsData, favorites }) => {
  const listCards = cardsData.map(character => 
    <Card characterData={character} favorites={favorites} key={character.id}/>
  );
  
  return (
    <ul className={cl.cards}>
      {listCards}
    </ul>
  );
};

Cards.propTypes = {
  cardsData: PropTypes.array
}