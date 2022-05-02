import { useLocation } from "react-router-dom";
import { pull_IdOfUrl } from "../utils/_utils";

export function useGetId() {
  const location = useLocation();
  const id = pull_IdOfUrl(location.pathname);

  return id;
}
