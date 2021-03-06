import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { formatText } from "../../utils/_utils";

export const charactersAPI = createApi({
  reducerPath: "characters",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bobsburgers-api.herokuapp.com/",
  }),
  endpoints: (build) => ({
    getCharacters: build.query({
      query: (name = "") => `characters?name=${formatText(name)}`,
      transformResponse: (responseData) => charactersDataAdapter(responseData),
    }),
    getCharacter: build.query({
      query: (id) => `characters/${id}`,
      transformResponse: (responseData) => characterDataAdapter(responseData),
    }),
    getCharactersByIds: build.query({
      query: (ids) => `characters/[${ids.toString()}]`,
      transformResponse: (responseData) => charactersDataAdapter(responseData),
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetCharacterQuery,
  useGetCharactersByIdsQuery,
} = charactersAPI;

function charactersDataAdapter(charactersData) {
  if (!charactersData) {
    return [];
  }

  return charactersData.map((character) => ({
    id: character.id,
    name: character.name,
    image: character.image,
    gender: character.gender,
    hairColor: character.hairColor,
  }));
}

function characterDataAdapter(characterData) {
  return {
    id: characterData.id,
    name: characterData.name,
    image: characterData.image,
    gender: characterData.gender,
    hairColor: characterData.hairColor,
    occupation: characterData.occupation,
    firstEpisode: characterData.firstEpisode,
    voicedBy: characterData.voicedBy,
    wikiUrl: characterData.wikiUrl,
  };
}
