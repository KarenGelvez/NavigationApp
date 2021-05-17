import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface IProps {
  name: string;
}

export const CustomIcon = ({ name }: IProps) => {
  const { favoriteIcon } = useContext(AuthContext);
  return (
    <TouchableOpacity onPress={() => favoriteIcon(name)}>
      <Icon name={name} size={80} color={colors.primary} />
    </TouchableOpacity>
  );
};
