import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetId } from "../hooks/useGetId";

export function useAddFavorites() {
  const userIn = useSelector((state) => state.signin.user);
  const [isFavorite, setIsFavorite] = useState("");
  let id = useGetId();

  function handleClick(id) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key === userIn.login) {
        const user = JSON.parse(localStorage.getItem(key));

        if (user.favorites.includes(id)) {
          setIsFavorite("Уже есть в избранном!");
          setTimeout(() => {
            setIsFavorite("");
          }, 2000);
        } else {
          setIsFavorite("Добавлено в избранное!");
          setTimeout(() => {
            setIsFavorite("");
          }, 2000);

          user.favorites.push(id);
          localStorage.setItem(key, JSON.stringify(user));
        }
      }
    }
  }

  return [id, userIn, isFavorite, handleClick];
}
