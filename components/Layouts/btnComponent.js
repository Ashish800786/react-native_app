import React from 'react';
import {View, StyleSheet,TouchableOpacity,Text} from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
const BtnComponent = ({Press,btnLabel,btnColor,textColor,btnWidth,btnIcon=''}) => {

    return (
        <View>
            <TouchableOpacity style={{backgroundColor:btnColor,borderRadius:10,alignItems:'center',padding:10,margin:10,width:parseInt(btnWidth)}} onPress={Press} >
                <Text style={{color:textColor,fontSize:23,fontWeight:'bold'}}>
                {btnIcon} {btnLabel}</Text>
            </TouchableOpacity> 
        </View>
    );
}

const styles = StyleSheet.create({})

export default BtnComponent;
