import React, { createContext, useEffect, useReducer } from 'react';
import { AuthReducer } from './AuthReducer';

//Definir la estrucutra de la informacion, el initial state
export interface IAuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// Initial State
export const AuthInitialState: IAuthState = {
  isLoggedIn: false,
};

//Como luce y que expone el context
export interface IAuthContextProps {
  authState: IAuthState;
  signIn: () => void;
  logout: () => void;
  favoriteIcon: (iconName: string) => void;
  changeUsername: (username: string) => void;
}

//Crear el contexto
export const AuthContext = createContext({} as IAuthContextProps);

//Componente proveedor del state
export const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(AuthReducer, AuthInitialState);

  const signIn = () => {
    dispatch({ type: 'signIn' });
  };

  const logout = () => {
    dispatch({ type: 'logout' });
  };

  const favoriteIcon = (iconName: string) => {
    dispatch({ type: 'favIcon', payload: iconName });
  };

  const changeUsername = (username: string) => {
    dispatch({ type: 'changeUsername', payload: username });
  };
  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        logout,
        favoriteIcon,
        changeUsername,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
