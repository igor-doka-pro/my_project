/* 
  1) Если action это массив(объект) из данных персонажей, - передаем action дальше.

  2) Если action это объект ошибки либо если action сигнализирует о выходе пользователя
    - передаем action дальше.

  3) Если action приходит со страницы SigIn (идет процесс авторизации),
    то находим в LS пользователя, ставим на него флаг авторизации и
    забрасываем его обратно в LS. После передаем action дальше.
    
  4) Если action приходит со страницы SigUp (идет процесс регистрации),
    то проверяем есть ли такой пользователь и если нет,
    то записываем нового пользователя в LS. После передаем action дальше.
*/

const actionTypes = {
  signinValidate: "signin/validate",
  signinAuthorize: "signin/authorize",
  signinLogout: "signin/logout",
  signupValidate: "signup/validate",
  signupAddUser: "signup/addUser",
  signupLogout: "signup/logout",
  characters: "characters",
};

export const localStorageMiddleware = (store) => (next) => (action) => {
  if (action.type.startsWith("characters")) {
    return next(action);
  }

  if (
    action.type === actionTypes.signinValidate ||
    action.type === actionTypes.signupValidate ||
    action.type === actionTypes.signinLogout ||
    action.type === actionTypes.signupLogout
  ) {
    return next(action);
  }

  if (action.type === actionTypes.signinAuthorize) {
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

  if (action.type === actionTypes.signupAddUser) {
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
  }

  return next(action);
};
