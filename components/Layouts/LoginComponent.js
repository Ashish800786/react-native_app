import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  RefreshControl,
  ScrollView
} from "react-native";
import BtnComponent from "./btnComponent";
// import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";

const LoginComponent = (props) => {

  const [refreshData,SetRefreshData]=useState(false)

  const refreshPage=()=>{
    setTimeout(()=>{
            SetRefreshData(false);
    },5000)

  }
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ScrollView contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
        color: "white",
        padding: 20,
      }} refreshControl={<RefreshControl refreshing={refreshData} onRefresh={()=>refreshPage} />}>
      <FontAwesome name={"user"} color={"white"} style={{ fontSize: 60 }} />

      <View style={{ flexDirection: "row", width: "100%", margin: 5 }}>
        <View
          style={{ flex: 1, flexDirection: "row", width: "100%", margin: 5 }}
        >
          <Text
            style={{
              borderWidth: 2,
              borderColor: "white",
              width: 50,
              padding: 15,
              backgroundColor: "white",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <FontAwesome
              name={"envelope"}
              color={"black"}
              style={{ fontSize: 20 }}
            />
          </Text>
          <TextInput
            placeholder="Enter Username/Email"
            style={styles.inputs}
          ></TextInput>
        </View>
      </View>

      <View style={{ flexDirection: "row", width: "100%", margin: 5 }}>
        <View
          style={{ flex: 1, flexDirection: "row", width: "100%", margin: 5 }}
        >
          <Text
            style={{
              borderWidth: 2,
              borderColor: "white",
              width: 50,
              padding: 13,
              backgroundColor: "white",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <FontAwesome
              name={"lock"}
              color={"black"}
              style={{ fontSize: 23 }}
            />
          </Text>
          <TextInput
            placeholder="Enter Password"
            style={styles.inputs}
            secureTextEntry={true}
          ></TextInput>
        </View>
      </View>

      <BtnComponent
        btnIcon={
          <FontAwesome
            name="sign-in"
            color={"white"}
            style={{ fontSize: 20 }}
          />
        }
        btnLabel={"login"}
        btnColor={'#33BBFF'}
        textColor={"white"}
        btnWidth="310"
        Press={()=>props.navigation.navigate('Dashboard')}
      />
      <View style={{ width: "100%", padding: 5 }}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              color: "white",
            }}
          >
            
            Don't have an account?  <Text style={{color:'#33BBFF'}}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  inputs: {
    borderWidth: 2,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    margin: 0,
    padding: 10,
    backgroundColor: "white",
    width: "80%",
    flex: 1,
    borderColor: "white",
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

export default LoginComponent;
