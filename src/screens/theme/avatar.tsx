import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { scale } from 'react-native-size-scaling';
import { Avatar } from 'react-native-element-image';
import IMAGES from '@assets/pictures';

export interface Props {}

const AvatarScreen: React.FC<Props> = _props => {
  return (
    <View style={styles.container}>
      <Avatar
        size={scale(80)}
        containerStyle={styles.avatar}
        source={IMAGES.avatar}
        iconEnable={false}
        onPressIcon={() => Alert.alert('Click')}
        nameStyle={{ fontSize: scale(20) }}
      />

      <Avatar
        size={scale(80)}
        containerStyle={styles.avatar}
        source={IMAGES.avatar}
        iconEnable
        onPressIcon={() => Alert.alert('Click')}
        nameStyle={{ fontSize: scale(20) }}
      />

      <Avatar
        size={scale(100)}
        containerStyle={styles.avatar}
        source={IMAGES.avatar}
        iconEnable
        onPressIcon={() => Alert.alert('Click')}
        name="User name"
        nameStyle={{ fontSize: scale(20) }}
      />

      <Avatar
        size={scale(150)}
        containerStyle={styles.avatar}
        source={IMAGES.avatar}
        iconEnable
        onPressIcon={() => Alert.alert('click')}
        name="User name"
        nameStyle={{ fontSize: scale(30) }}
      />
    </View>
  );
};

export default AvatarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: scale(20),
  },
  avatar: { marginTop: scale(10) },
});
