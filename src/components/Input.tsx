import React from 'react';
import {TextInput, StyleSheet, TextInputProps} from 'react-native';
import {hp, wp} from '../constant/responsive-dimension';
// import {wp} from '../constant/responsive-dimension';

interface InputProps extends TextInputProps {
  value?: string;
  placeholder?: string;
  onChangeText?: (arg: string) => void;
}

const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  onChangeText,
  ...rest
}) => {
  return (
    <TextInput
      style={styles.inputContainer}
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      // placeholderTextColor={'#eee'}
      keyboardAppearance="dark"
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: wp(20),
    marginHorizontal: wp(20),
    backgroundColor: '#EFEFEF',
    textAlign: 'center',
    fontSize: wp(16),
    height: hp(56),
    color: '#000000',
  },
});

export default Input;
