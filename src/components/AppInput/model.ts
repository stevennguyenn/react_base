import React from 'react';
import { ViewStyle } from 'react-native';

interface Props {
  title: string;
  hint?: string;
  style?: ViewStyle;
  isPassword?: boolean;
  rightIcon?: string;
}

export type AppInputProps = React.FC<Props>;
