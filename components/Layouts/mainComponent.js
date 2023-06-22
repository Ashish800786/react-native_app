import React,{useEffect, useState} from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';
import BackgroundImageComponent from './BackgroundImageComponent';
import BtnComponent from "./btnComponent";
//import {NavigationEvents}  from 'react-navigation';
import { useIsFocused } from '@react-navigation/native';

const MainComponent = (props) => {
  const isFocused = useIsFocused();
  const [show,SetShow]= useState(true)
  const redirection=()=>{
    props.navigation.navigate('Login');
  };

  const fadeinLogo=()=>{
    
  }

  useEffect(()=>{
    setTimeout(redirection,2000);
    // setInterval(redirection,2000);
  },[])

  
    return (
        <BackgroundImageComponent title="success" childeren={ 
        
          <View
style={{ marginHorizontal: 20, marginVertical: 150, width: "100%" }}
>
<View style={{ flex: 1,alignItems:'center',justifyContent:'center'}}>

{show?
  <Image source={require("../../assets/my_new_logo2.png")} style={{height:300,width:240,borderColor:'black',marginLeft:10,marginVertical:60}}/>
:''
}



</View>
<View style={{ marginTop: 0 ,width:'100%'}}>
  {/* <BtnComponent
    textColor={"white"}
    btnColor={"green"}
    btnLabel={"Login"}
    Press={()=>props.navigation.navigate('Login')}
    btnWidth="295"
  />
  <BtnComponent
    textColor={"white"}
    btnColor={"red"}
    btnLabel={"Register"}
    Press={()=>props.navigation.navigate('Register')}
    btnWidth="300"
  /> */}
</View>
</View>
      
        }>
        </BackgroundImageComponent>
    );
}

const styles = StyleSheet.create({})

export default MainComponent;
