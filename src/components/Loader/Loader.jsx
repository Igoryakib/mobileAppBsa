import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const Loader = () => {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={75} color="#fff" />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;