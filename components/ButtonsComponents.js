import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

const ButtonsComponents = () => {
  return (
    <View>
      <TouchableHighlight>
        <Text
          style={[styles.primary, styles.button]}
          onPress={() => {
            alert("Hi,I am a button and my Color is Primary with press");
          }}
          onLongPress={() => {
            alert("Hi,I am a button and my Color is Primary with Long Press");
          }}
        >
          Primary
        </Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text
          style={[styles.success, styles.button]}
          onPress={() => {
            alert("Hi,I am a button and my Color is Success");
          }}
          onLongPress={() => {
            alert("Hi,I am a button and my Color is Success with Long Press");
          }}
        >
          success
        </Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text
          style={[styles.danger, styles.button]}
          onPress={() => {
            alert("Hi,I am a button and my Color is Danger");
          }}
          onLongPress={() => {
            alert("Hi,I am a button and my Color is Danger with Long Press");
          }}
        >
          Dnager
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    margin: 10,
    padding: 10,
    textAlign: "center",
    color: "white",
    borderWidth: 1,
    shadowColor: "black",
    elevation: 20,
  },
  primary: {
    backgroundColor: "blue",
  },
  success: {
    backgroundColor: "green",
  },
  danger: {
    backgroundColor: "red",
  },
});
export default ButtonsComponents;
