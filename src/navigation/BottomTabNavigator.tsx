import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';

export const BottomTabNavigator = () => {
  return Platform.OS == 'android' ? (
    <BottomTabNavigatorAndroid /> //Da error el material bottom tab, si falta vector icons
  ) : (
    <BottomTabNavigatorIOS />
  );
};

const TabsAndroid = createMaterialBottomTabNavigator();

const BottomTabNavigatorAndroid = () => {
  return (
    <TabsAndroid.Navigator
      sceneAnimationEnabled
      barStyle={{
        backgroundColor: colors.primary,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1':
              iconName = 'cube-outline';
              break;
            case 'Tab2':
              iconName = 'duplicate-outline';
              break;
            case 'StackNavigator':
              iconName = 'file-tray-full-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <TabsAndroid.Screen
        name="Tab1"
        options={{
          title: 'Icons',
        }}
        component={Tab1Screen}
      />
      <TabsAndroid.Screen
        name="Tab2"
        options={{
          title: 'Top',
        }}
        component={TopTabNavigator}
      />
      <TabsAndroid.Screen
        name="StackNavigator"
        options={{
          title: 'Stack',
        }}
        component={StackNavigator}
      />
    </TabsAndroid.Navigator>
  );
};

const TabsIOS = createBottomTabNavigator();

const BottomTabNavigatorIOS = () => {
  return (
    <TabsIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: '#fff',
      }}
      tabBarOptions={{
        activeTintColor: colors.primary,
        style: {
          borderTopColor: colors.primary,
          //borderTopWidth: 0, //Eliminar borde
          elevation: 0, //ocultar sombra o linea en Android
          shadowColor: 'transparent', //ocultar sombra o linea en iOS
        },
        labelStyle: {
          fontSize: 15,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1':
              iconName = 'cube-outline';
              break;
            case 'Tab2':
              iconName = 'duplicate-outline';
              break;
            case 'StackNavigator':
              iconName = 'file-tray-full-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <TabsIOS.Screen
        name="Tab1"
        options={{
          title: 'Icons',
        }}
        component={Tab1Screen}
      />
      <TabsIOS.Screen
        name="Tab2"
        options={{
          title: 'Top',
        }}
        component={TopTabNavigator}
      />
      <TabsIOS.Screen
        name="StackNavigator"
        options={{
          title: 'Stack',
        }}
        component={StackNavigator}
      />
    </TabsIOS.Navigator>
  );
};
