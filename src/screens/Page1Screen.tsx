import React, { useEffect } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { styles } from '../theme/appTheme';

//interface IProps extends StackScreenProps<any, any> {}
interface IProps extends DrawerScreenProps<any, any> {}

export const Page1Screen = ({ navigation }: IProps) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" size={40} color="#000" />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>1 Screen</Text>
      <Button
        title="ir a pagina 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
      <Button
        title="ir a Person"
        onPress={() => navigation.navigate('Person')}
      />

      <Text style={{ marginVertical: 20, fontSize: 20 }}>
        Navegar con argumentos
      </Text>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ ...styles.buttonTO, backgroundColor: '#5856d6' }}
          onPress={() =>
            navigation.navigate('Person', { id: 1, name: 'Julian' })
          }>
          <Icon name="man-outline" size={50} color="#fff" />

          <Text style={styles.textTO}>Julian</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTO}
          onPress={() =>
            navigation.navigate('Person', { id: 2, name: 'Angelica' })
          }>
          <Icon name="woman-outline" size={50} color="#fff" />

          <Text style={styles.textTO}>Angelica</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
