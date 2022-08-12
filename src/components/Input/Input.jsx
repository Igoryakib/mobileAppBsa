import React from "react";
import { TextInput, StyleSheet } from "react-native";
import PropTypes from 'prop-types';

const Input = ({style, value, onChange, placeholder, ...adProps}) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...adProps}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: '#fff',
    borderStyle: 'solid',
    borderRadius: 13,
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: '100%',
  },
});

export default Input;