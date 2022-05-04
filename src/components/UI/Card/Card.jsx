import React, { useState } from 'react';
import { useAddFavorites } from '../../../hooks/useAddFavorites';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import cl from './Card.module.css';
import PropTypes from 'prop-types';


export const Card = (props) => {  
  const [ isDelete, setIsDelete ] = useState(false);
  const [ id, userIn, isFavorite, handleClick ] = useAddFavorites();
  let ID = id ? id : String(props.characterData.id);

  function handleClickByDeleteCard(ID) {
    // удаление из LS
    const user = JSON.parse(localStorage.getItem(userIn.login));
    const favorites = user.favorites;
    
    user.favorites = [...favorites.filter(id => id !== ID)];
    localStorage.setItem(userIn.login, JSON.stringify(user));         
    setIsDelete(true);
  }

  return (
    <li>
      { !(props.detail || props.favorites) ? (
        <div className={cl.cards__item}>
          <div className={cl.card__wrap}>
            
            <div className={cl.card__wrap_1}>
              <figure className={cl.card}>
                <img src={props.characterData.image} width={200} height={220} alt={props.characterData.name}/>
                <h3 className={cl.card__name}>{props.characterData.name}</h3>
                <span className={cl.card__gender}>Gender: {props.characterData.gender}</span>
                <span className={cl.card__hairColor}>Hair color: {props.characterData.hairColor}</span>
              </figure>

              <div className={cl.btn__favorites}>
                <Button onClick={() => handleClick(ID)} btnInCard disabled={!userIn.auth ? true : false}>В избранное</Button>
                <div style={{height: 10}} className={cl.card__favorite}>{isFavorite}</div>
              </div>
            </div>
          
          <div className={cl.card__wrap_2}>
            <div>
            <Link to={`/character/${props.characterData.id}`}
                state={{btn_favorites_off: false}}
              >
                <Button btnInCard>Подробнее</Button>
              </Link>
            </div>
          </div>

          </div>
        </div>

      )
      : (props.detail) ? (
        
          <figure className={cl.card__detail}>
            <div className={cl.card__base_information}>
              <img src={props.characterData.image} width={240} height={300} alt={props.characterData.name}/>
              <div className={cl.card__detail_name}>{props.characterData.name}</div>
              <span className={cl.card__detail_gender}>{props.characterData.gender}</span>
              <span style={{color: 'white'}}>, </span>
              <span className={cl.card__detail_hairColor}>{props.characterData.hairColor}</span>
            </div>
          
            <div className={cl.card__more_information}>
              <div className={cl.card__more_information_item}><span style={{color: '#0d6efd'}}>First episode: </span>{props.characterData.firstEpisode}</div>
              <div className={cl.card__more_information_item}><span style={{color: '#0d6efd'}}>Voiced by: </span>{props.characterData.voicedBy}</div>
              <div className={cl.card__more_information_item}><span style={{color: '#0d6efd'}}>Occupation: </span>{props.characterData.occupation}</div>
              <div className={cl.card__more_information_item}><span style={{color: '#0d6efd'}}>Wiki: </span><a className={cl.link} href={props.characterData.wikiUrl} target='_blank'>{props.characterData.wikiUrl}</a></div>
              {!props.btn_favorites_off ? (
                <div className={cl.btn_favorites}>
                  <Button onClick={() => handleClick(ID)} btnInCard disabled={!userIn.auth ? true : false}>В избранное</Button>
                  <div style={{height: 10}} className={cl.card__favorite}>{isFavorite}</div>
                </div>
              )
              : null
              }
              
            </div>

          </figure>
        
       
      )
      : (props.favorites && !isDelete) ? (
        <div className={cl.cards__item}>
          <div className={cl.card__wrap}>
        
            <div className={cl.card__wrap_1}>
              <figure className={cl.card}>
                <img src={props.characterData.image} width={200} height={220} alt={props.characterData.name}/>
                <h3 className={cl.card__name}>{props.characterData.name}</h3>
                <span className={cl.card__gender}>Gender: {props.characterData.gender}</span>
                <span className={cl.card__hairColor}>Hair color: {props.characterData.hairColor}</span>
              </figure>

              <div className={cl.btn__favorites}>
                <Button onClick={() => handleClickByDeleteCard(ID)} btnInCard disabled={false}>Удалить</Button>
              </div>
            </div>
            
            <div className={cl.card__wrap_2}>
              <div>
                <Link to={`/character/${props.characterData.id}`}
                  state={{btn_favorites_off: true}}
                >
                  <Button btnInCard>Подробнее</Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      )
      : null

      }
    </li>
    
  );
};


Card.propTypes = {
  characterData: PropTypes.object
}
