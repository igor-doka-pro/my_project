import { useLocation } from 'react-router-dom';
import { pull_IdOfUrl } from '../utils/_utils';
import { getCharacter } from '../utils/requests';

export function useLoad() {
  const location = useLocation();
  const id = pull_IdOfUrl(location.pathname);
  const load = () => getCharacter(id);

  return load;
}