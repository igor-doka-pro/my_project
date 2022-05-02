import axios from "axios";

const baseUrl = "https://bobsburgers-api.herokuapp.com/characters";

export async function findMatchCharacters(partName, setDataAll) {
  if (!partName) {
    return;
  }

  const characters = [];
  const response = await axios.get(baseUrl);

  const substr = partName.toLowerCase();
  for (const character of response.data) {
    const str = character.name.toLowerCase();
    if (str.indexOf(substr) !== -1) {
      characters.push(character);
    }
  }

  setDataAll(characters);
}

export async function getCharacter(id) {
  const response = await axios.get(`${baseUrl}/${id}`);

  return response.data;
}
