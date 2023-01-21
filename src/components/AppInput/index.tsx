import { COLORS } from '@config';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { AppInputProps } from './model';
import React from 'react';
import { Image } from 'react-native-element-image';
import IMAGES from '@assets/pictures';
import { scale } from 'react-native-size-scaling';

const defaultAppInput = {
  isPassword: false,
};

const AppInput: AppInputProps = props => {
  return (
    <View style={[styles.background, props.style]}>
      <Text style={styles.titleLabel}>{props.title}</Text>
      <View style={styles.viewInput}>
        <TextInput
          maxLength={100}
          style={styles.textInput}
          placeholder={props.hint ?? ''}
          secureTextEntry={props.isPassword}
          underlineColorAndroid="transparent"
        />
        <View style={styles.rightIcon}>
          <Image
            style={{
              resizeMode: 'contain',
              width: scale(30),
              height: scale(30),
            }}
            source={IMAGES.icShowPassword}
          />
        </View>
      </View>
    </View>
  );
};

AppInput.defaultProps = defaultAppInput;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.BG_INPUT,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: 6,
  },
  viewInput: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleLabel: {
    fontSize: 12,
    color: COLORS.DEFAULT_TEXT,
    lineHeight: 16,
  },
  textInput: {
    fontSize: 15,
    color: COLORS.DEFAULT_TEXT,
    marginTop: 4,
    flexGrow: 1,
    backgroundColor: '#343242',
  },
  rightIcon: {
    width: scale(30),
    height: scale(30),
    backgroundColor: '#123111',
  },
  imageContainer: {
    marginLeft: 8,
  },
});

export default AppInput;
