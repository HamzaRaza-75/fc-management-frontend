import { useSelector } from 'react-redux';

export const useAuth = function () {
  const authenticated_user = useSelector((state) => state.auth.user);
  return authenticated_user;
};
