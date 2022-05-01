export const localStorageMiddleware = (store) => (next) => (action) => {
  /* 
    1) Если action это объект ошибки (состоит из одного ключа)
      либо если action сигнализирует о выходе пользователя (объект из двух ключей),
      - передаем action дальше.
  */

  if (
    Object.keys(action.payload).length === 1 ||
    action.payload.online === false
  ) {
    return next(action);
  }

  /* 
    2) Если action приходит со страницы SigIn (идет процесс авторизации),
      то находим в LS пользователя, ставим на него флаг авторизации и
      забрасываем его обратно в LS. После передаем action дальше.
  */

  if (action.payload.auth) {
    const user = JSON.parse(localStorage.getItem(action.payload.login));

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key === action.payload.login) {
        user.auth = true;
        localStorage.setItem(action.payload.login, JSON.stringify(user));
      }
    }

    return next(action);
  }

  /* 
    3) Если action приходит со страницы SigUp (идет процесс регистрации),
      то проверяем есть ли такой пользователь и если нет,
      то записываем нового пользователя в LS. После передаем action дальше.
  */

  const { login, password } = action.payload;

  if (localStorage.getItem(login)) {
    return;
  }

  localStorage.setItem(
    login,
    JSON.stringify({
      password,
      favorites: [],
      history: [],
    })
  );

  return next(action);
};
