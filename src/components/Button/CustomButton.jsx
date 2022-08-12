import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';

const CustomButton = ({ onClickFn, text }) => {
    return (
      <TouchableOpacity onPress={onClickFn}>
        <Text style={styles.button}>{text}</Text>
      </TouchableOpacity>
    );
};

CustomButton.propTypes = {
    onClickFn: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  button: {
    color: '#2497ed',
    borderBottomColor: '#2497ed',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Roboto-Normal',
  },
});

export default CustomButton;