import React from 'react';
import cl from './Description.module.css';


export const Description = () => {
  return (
    <React.Fragment>
      <div className={cl.mask}>
        <div className={cl.description}>
          <p>
            «Закусочная Боба» (англ. Bob’s Burgers) — американский анимационный телевизионный ситком, созданный Лореном Бушаром для телекомпании FOX. Это шоу, согласно рекламе сайта FOX, о человеке, который готовит гамбургеры, и его семье. Несмотря на неудачное местоположение его забегаловки, а иногда и плохой сервис, Боб и его причудливая семья уверены в успехе.
          </p>
          <p>
            В 2013 году TV Guide признал Bob’s Burgers одним из 60 лучших мультфильмов всего мира. Сериал был номинирован на несколько наград, в том числе премию «Эмми» за выдающуюся анимацию в 2012 и 2013 годах, прежде чем он выиграл награду в 2014 году.
          </p>
          <p>
            В настоящий момент сериал состоит из 13 сезонов.
            Предлагаем Вашему вниманию базу данных персонажей сериала.
            Проведите время с улыбкой!
          </p>
        </div>
      </div>
      <img className={cl.bg} src="img/bg-main.jpg" width='100%' height='600px' alt="Bob's Burger"/>
    </React.Fragment>
  );
};