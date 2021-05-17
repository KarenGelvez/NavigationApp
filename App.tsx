import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CustomDrawer } from './src/navigation/CustomDrawer';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <Appstate>
        <CustomDrawer />
      </Appstate>
    </NavigationContainer>
  );
};

const Appstate = ({ children }: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};
export default App;
