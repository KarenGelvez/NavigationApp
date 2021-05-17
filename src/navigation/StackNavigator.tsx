import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Page1Screen } from '../screens/Page1Screen';
import { Page2Screen } from '../screens/Page2Screen';
import { Page3Screen } from '../screens/Page3Screen';
import { PersonScreen } from '../screens/PersonScreen';

export type RootStackParams = {
  Page1Screen: undefined;
  Page2Screen: undefined;
  Page3Screen: undefined;
  Person: { id: number; name: string };
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0, //ocultar linea en Android
          shadowColor: 'transparent', //ocultar linea en iOS
        },
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen
        name="Page1Screen"
        options={{ title: 'Page 1' }}
        component={Page1Screen}
      />
      <Stack.Screen
        name="Page2Screen"
        options={{ title: 'Page 2' }}
        component={Page2Screen}
      />
      <Stack.Screen
        name="Page3Screen"
        options={{ title: 'Page 3' }}
        component={Page3Screen}
      />
      <Stack.Screen name="Person" component={PersonScreen} />
    </Stack.Navigator>
  );
};
