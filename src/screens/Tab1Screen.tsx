import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CustomIcon } from '../components/CustomIcon';

export const Tab1Screen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.globalMargin, marginTop: top + 20 }}>
      <Text style={styles.title}>ICONS</Text>
      <Text>
        <CustomIcon name="rocket" />
        <CustomIcon name="bed-outline" />
        <CustomIcon name="people" />
        <CustomIcon name="chatbox-ellipses-outline" />
        <CustomIcon name="leaf-outline" />
        <CustomIcon name="flower-outline" />
        <CustomIcon name="musical-notes-outline" />
        <CustomIcon name="rose-outline" />
      </Text>
    </View>
  );
};
