import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/core';

export const Page2Screen = () => {
  //Es mas eficiente usar las props, aunque el hook tambien es eficiente
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      title: 'Hello World',
      headerBackTitle: '', //Tomara Back o Atras, segun el idioma del dispositivo
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>2 Screen</Text>
      <Button
        title="ir a pagina 3"
        onPress={() => navigator.navigate('Page3Screen')}
      />
    </View>
  );
};
