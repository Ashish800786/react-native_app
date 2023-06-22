import React from "react";
import { View, StyleSheet, Text } from "react-native";

const SettingsComponent = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange",
        color: "white",
      }}
    >
      <Text>Settings!</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SettingsComponent;
