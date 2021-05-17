import { AuthInitialState, IAuthState } from './AuthContext';

type AuthAction =
  | { type: 'signIn' }
  | { type: 'logout' }
  | { type: 'favIcon'; payload: string }
  | { type: 'changeUsername'; payload: string };

export const AuthReducer = (
  state: IAuthState = AuthInitialState,
  action: AuthAction,
): IAuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'klgelvez',
      };
    case 'logout':
      return AuthInitialState;
    case 'favIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    case 'changeUsername':
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
