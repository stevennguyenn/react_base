import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, globalLoading, Text } from '@components';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  changeLanguageAction,
  selectMain,
  todoRequestAction,
} from '@reduxCore/main/slice';
import { styles } from './styles';
import IMAGES from '@assets/pictures';
import AppInput from '@components/AppInput';

interface Props {}

const RegisterScrenn: React.FC<Props> = () => {
  const { navigate } = useNavigation<StackNavigationProp<any>>();
  const { locale } = useSelector(selectMain);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeLanguageAction('vn'));
    dispatch(todoRequestAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      locale: locale,
    },
    validate: values => {
      const error: any = {};
      if (values.username.length === 0) {
        error.username = 'Please enter username';
      }

      if (values.password.length === 0) {
        error.password = 'Please enter password';
      }

      return error;
    },
    onSubmit: _values => {
      globalLoading.show();
      const timeOut = setTimeout(() => {
        globalLoading.hide();
        navigate('Main');
      }, 1000);
      return clearTimeout(timeOut);
    },
  });

  return (
    <View style={styles.container}>
      <Image source={IMAGES.logo} style={styles.logoImage} />
      <AppInput style={styles.textInput} title="Courriel" hint="Courriel" />
      <AppInput
        style={{ marginTop: 24 }}
        title="Mot de passe"
        hint="Mot de passe"
        isPassword={true}
        rightIcon={IMAGES.icShowPassword}
      />

      <Image style={styles.rightIcon} source={IMAGES.icShowPassword} />
      {/* <TextInput
        style={styles.textInput}
        inputStyle={styles.inputStyle}
        labelStyle={styles.labelStyle}
        placeholderStyle={styles.placeholderStyle}
        textErrorStyle={styles.textErrorStyle}
        value={formik.values.password}
        textContentType="oneTimeCode"
        onChangeText={formik.handleChange('password')}
        label="Password"
        placeholder="Enter password"
        placeholderTextColor="gray"
        secureTextEntry={true}
        textError={formik.errors.password}
      /> */}

      <Button
        style={styles.button}
        title="Login"
        fontSize={20}
        onPress={formik.handleSubmit}
      />
      <Text style={styles.textOr} fontSize={16}>
        Or
      </Text>
      <Text
        style={styles.textOr}
        fontSize={18}
        onPress={() => navigate('Register')}>
        Create new account?
      </Text>
    </View>
  );
};

export default RegisterScrenn;
