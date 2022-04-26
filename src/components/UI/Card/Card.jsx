import React, { Suspense } from 'react';
import cl from './Card.module.css';


export const Card = (props) => {  
  return (
    <React.Fragment>
      { !(props.detail) 
        ? 
        <figure className={cl.card}>
          <Suspense fallback={<div style={{color: 'white'}}>Загрузка...</div>}> {/* Почему не работает ? */}
            <img src={props.characterData.image} width={120} height={200} alt={`photo${props.characterData.id}`}/>
          </Suspense>
          <h3 className={cl.name}>{props.characterData.name}</h3>
          <span className={cl.subheader}>Gender:</span>
          <p className={cl.gender}>{props.characterData.gender}</p>
          <span className={cl.subheader}>Hair color:</span>
          <p className={cl.hairColor}>{props.characterData.hairColor}</p>
        </figure>
        :
        <figure className={cl.card__detail}>
          <Suspense fallback={<div style={{color: 'white'}}>Загрузка...</div>}> {/* Почему не работает ? */}
            <div className={cl.card__base_information}>
              <img src={props.characterData.image} width={240} height={300} alt={`photo${props.characterData.id}`}/>
              <div className={cl.card__detail_name}>{props.characterData.name}</div>
              <span className={cl.card__detail_gender}>{props.characterData.gender}</span>
              <span style={{color: 'white'}}>, </span>
              <span className={cl.card__detail_hairColor}>{props.characterData.hairColor}</span>
            </div>
          </Suspense>
          <div className={cl.card__more_information}>
            <div className={cl.card__more_information_item}><span style={{color: '#0d6efd'}}>First episode: </span>{props.characterData.firstEpisode}</div>
            <div className={cl.card__more_information_item}><span style={{color: '#0d6efd'}}>Voiced by: </span>{props.characterData.voicedBy}</div>
            <div className={cl.card__more_information_item}><span style={{color: '#0d6efd'}}>Occupation: </span>{props.characterData.occupation}</div>
            <div><span style={{color: '#0d6efd'}}>Wiki: </span><a className={cl.link} href={props.characterData.wikiUrl} target='_blank'>{props.characterData.wikiUrl}</a></div>
          </div>
        </figure>
        
      }
    </React.Fragment>
    
  );
};