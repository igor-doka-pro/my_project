import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCharacters } from '../utils/requests';

export const useSearch = () => {
  const [ searchParams ] = useSearchParams();
  const initInput = searchParams.get('name') ? searchParams.get('name') : '';
  const [inputValue, setInputValue] = useState(initInput);
  const [cardsData, setCardsData] = useState([]);

  function handleChange(evt) {
    setInputValue(evt.target.value);
  }

  function handleClick() {
    renderCards();
  }

  function renderCards() {
    if (!inputValue) {
      return;
    }
    console.log('load');

    loadCharacters();
  }

  async function loadCharacters() {
    const characters = await getCharacters(inputValue);
    setCardsData(characters);
  }

  return [ inputValue, cardsData,  handleChange, handleClick, renderCards];
};