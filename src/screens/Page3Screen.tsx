import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface IProps extends StackScreenProps<any, any> {}

export const Page3Screen = ({ navigation }: IProps) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>3 Screen</Text>
      {/* .pop() hace lo mismo que .goBack */}
      <Button title="atras" onPress={() => navigation.goBack()} />
      <Button title="ir a pagina 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
