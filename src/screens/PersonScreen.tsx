import React, { useContext, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';
import { AuthContext } from '../context/AuthContext';

interface IProps extends StackScreenProps<RootStackParams, 'Person'> {}

//Forma para salir rapida de asignar los tipos de datos o argumentos que se reciben (#)
/* interface IRouteParams {
  id: number;
  name: string;
} */

export const PersonScreen = ({ route, navigation }: IProps) => {
  // (#)
  //const params = route.params as IRouteParams;
  const params = route.params;
  const { changeUsername } = useContext(AuthContext);
  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);
  useEffect(() => {
    changeUsername(params.name);
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
