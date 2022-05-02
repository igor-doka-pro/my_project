import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetCharactersQuery } from "../components/AppSearch/charactersAPI";

export const useSearch = () => {
  const [searchParams] = useSearchParams();
  const initInput = searchParams.get("name") ? searchParams.get("name") : "";
  const { data = [] } = useGetCharactersQuery(initInput);
  const [dataAll, setDataAll] = useState([]);

  return [initInput, data, dataAll, setDataAll];
};
