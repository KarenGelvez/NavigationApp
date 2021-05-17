import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Image,
  LogBox,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SettingsScreen } from '../screens/SettingsScreen';
import { colors, styles } from '../theme/appTheme';
import { BottomTabNavigator } from './BottomTabNavigator';

//No debe hacerse, pero es una opcion para ocultar warnings
LogBox.ignoreLogs(['If']); //Colocar el inicio del mensaje

const Drawer = createDrawerNavigator();

export const CustomDrawer = () => {
  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Tabs" component={BottomTabNavigator} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const DrawerContent = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
          style={styles.avatar}
        />
      </View>
      {/* Menu Options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{ ...styles.menuButton, flexDirection: 'row' }}
          onPress={() => navigation.navigate('Tabs')}>
          <Icon name="send-outline" size={25} color={colors.primary} />
          <Text style={{ ...styles.menuText, marginLeft: 10 }}>Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.menuButton, flexDirection: 'row' }}
          onPress={() => navigation.navigate('Settings')}>
          <Icon name="settings-outline" size={25} color={colors.primary} />
          <Text style={{ ...styles.menuText, marginLeft: 10 }}>Seetings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
