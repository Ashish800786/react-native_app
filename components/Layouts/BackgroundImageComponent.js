import React from "react";
import { View, StyleSheet, ImageBackground, Text,Image } from "react-native";


const BackgroundImageComponent = ({ childeren ,title}) => {
  // alert(title);
  // alert(childeren);
  return (
    <View>
      {/* <ImageBackground
        source={require("../../assets/leaf.jpg")}
        style={{ height: "100%" }}
      > */}
          
      <View style={{ position: "absolute" }}>
        {childeren}
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default BackgroundImageComponent;
