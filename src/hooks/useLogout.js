import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logout as logoutIn } from "../pages/SignIn/SigninSlice";
import { logout as logoutUp } from "../pages/SignUp/SignupSlice";

export function useLogout() {
  const dispatch = useDispatch();
  const exitUserIn = useCallback(
    (user) => dispatch(logoutIn(user)),
    [dispatch]
  );
  const exitUserUp = useCallback(
    (user) => dispatch(logoutUp(user)),
    [dispatch]
  );

  function handleClick() {
    exitUserIn({ login: "", password: "", auth: false, online: false });
    exitUserUp({ login: "", password: "", online: false });
  }

  return handleClick;
}
