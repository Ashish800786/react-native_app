import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import BtnComponent from "./btnComponent";
import FontAwesome from "@expo/vector-icons/FontAwesome";
// import InputsComponent from "./InputsComponent";

const RegisterComponent = (props) => {
  const [eyes, Seteye] = useState(true);
  const [eyes2, Seteye2] = useState(true);
  const [securePass, SetsecurePass] = useState(true);
  const [securePass2, SetsecurePass2] = useState(true);
  const change_eye = () => {
    if (eyes === true) {
      Seteye(false);
      SetsecurePass(true);
    } else {
      Seteye(true);
      SetsecurePass(false);
    }
  };
  const change_eye2 = () => {
    if (eyes2 === true) {
      Seteye2(false);
      SetsecurePass2(true);
    } else {
      Seteye2(true);
      SetsecurePass2(false);
    }
  };

  return (
    <ScrollView style={{backgroundColor: "red",padding:20}}>
    
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding:10,
          color: "white",
          marginVertical:40,
        }}
      >
         
        <FontAwesome
          name={"user-plus"}
          color={"white"}
          style={{ fontSize: 50 }}
        />


         
        <View style={{ width: "100%" }}>
          <Text style={{ marginLeft: 15, fontWeight: "bold", color: "white" }}>
            First Name
          </Text>
          <TextInput
            placeholder="Enter Your First Name"
            style={styles.inputs}
          />
        </View>
        <View style={{ width: "100%" }}>
        <Text style={{ marginLeft: 15, fontWeight: "bold", color: "white" }}>
            Last Name
          </Text>
        <TextInput placeholder="Enter Your Last Name" style={styles.inputs} />

        </View>
        <View style={{ width: "100%" }}>
        <Text style={{ marginLeft: 15, fontWeight: "bold", color: "white" }}>
            Username
          </Text>
        <TextInput placeholder="Enter Your Username" style={styles.inputs} />
        </View>

        <View style={{ width: "100%" }}>
        <Text style={{ marginLeft: 15, fontWeight: "bold", color: "white" }}>
            Email
          </Text>
        <TextInput placeholder="Enter Your Email " style={styles.inputs} />
        </View>


        <View style={{ width: "100%" }}>
        <Text style={{ marginLeft: 15, fontWeight: "bold", color: "white" }}>
            Password
          </Text>
        <View style={{ flex:1,flexDirection:'row', width: "100%",margin:5 }}>
        <TextInput
          placeholder="Enter Your Password"
          style={styles.passwordInputs}
          secureTextEntry={securePass}
        />
         <Text
          style={styles.iconInputs}
          onPress={() => {
            change_eye();
          }}
        >
          {eyes === true ? (
            <FontAwesome
              name="eye-slash"
              color={"black"}
             
            />
          ) : (
            <FontAwesome
              name="eye"
              color={"black"}
              onPress={() => {
                change_eye();
              }}
            />
          )}
        </Text>
        </View>
        </View>

        
        
        
        
        
         <View style={{ width: "100%", margin: 5 }}>
         <Text style={{marginLeft: 15, fontWeight: "bold", color: "white" }}>
           Confirm Password
          </Text>
        <View
          style={{ flex: 1, flexDirection: "row", width: "100%", margin: 5 }}
        >
       
        <TextInput
          placeholder="Enter Your Confirm Password"
          style={styles.passwordInputs}
          secureTextEntry={securePass}
        />
        <Text
        style={styles.iconInputs}
        onPress={() => {
          change_eye2();
        }}
      >
        {eyes2 === true ? (
          <FontAwesome
            name="eye-slash"
            color={"black"}
           
          />
        ) : (
          <FontAwesome
            name="eye"
            color={"black"}
            onPress={() => {
              change_eye();
            }}
          />
        )}
      </Text>
      </View>


      <BtnComponent
          btnColor={"#33BBFF"}
          btnLabel={"Register"}
          textColor={"white"}
          btnWidth={295}
          btnIcon={
            <FontAwesome
              name="user-plus"
              color={"white"}
              style={{ fontSize: 20 }}
            />
          }
        />

         <View style={{ width: "100%" }}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text
              style={{
                color: "white",
                fontSize: 15,
                textAlign: "center",
                marginRight: 20,
              }}
            >
              Already got an account?{" "}
              <Text style={{ color: "#33BBFF", fontWeight: "bold" }}>
                Sign In
              </Text>
            </Text>
          </TouchableOpacity>
        </View>

</View>
        

       
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputs: {
    borderRadius: 10,
    margin: 5,
    padding: 10,
    backgroundColor: "white",
    width: "100%",
    flex:1,
  },
  passwordInputs: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 10,
    backgroundColor: "white",
    width: "80%",
  },
  iconInputs: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 16,
    backgroundColor: "white",
    width: "20%",
    textAlign:'center',
    justifyContent:'center',
    flex:1,
  },

  text: {
    textAlign: "center",
    marginBottom: -10,
    marginLeft: 10,
    fontSize: 20,
    color: "white",
  },

  formView: {
    borderRadius: 10,
    backgroundColor: "orange",
    margin: 10,
  },
});

export default RegisterComponent;
