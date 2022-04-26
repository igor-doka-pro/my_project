import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import { Card } from '../Card/Card';
import cl from './Cards.module.css';

const buttonStyles = {
  backgroundColor: '#ffdd00',
  color: 'black',
};


export const Cards = ({ cardsData }) => {
  const listCards = cardsData.map(character => 
    <li className={cl.cards__item} key={character.id}>
      <Card characterData={character}/>
      <div className={cl.cards__item_btns}>
        <Button styles={buttonStyles}>В избранное</Button>
        <Link to={`/character/${character.id}`}>
          <Button styles={buttonStyles}>Подробнее</Button>
        </Link>
      </div>
    </li>
  );
  
  return (
    <ul className={cl.cards}>
      {listCards}
    </ul>
  );
};