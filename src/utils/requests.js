import axios from "axios";
import { formatText } from "./_utils";


const baseUrl = 'https://bobsburgers-api.herokuapp.com/characters';

export async function getCharacters(value) {
  if (!value) {
    return;
  }
  
  const characters = [];
  const response = await axios.get(baseUrl, {
    params: {
      name: formatText(value)
    }
  });

  if (response.data.length) {
    const character = response.data[0];
    characters.push(character);
  } else {
    const response = await axios.get(baseUrl);
    
    const substr = value.toLowerCase();
    for (const character of response.data) {
      const str = character.name.toLowerCase();
      if (str.indexOf(substr) !== -1) {
        characters.push(character);
      } 
    } 
  }

  return characters;
}


export async function getCharacter(id) {
  const response = await axios.get(`${baseUrl}/${id}`);

  return response.data;
}
