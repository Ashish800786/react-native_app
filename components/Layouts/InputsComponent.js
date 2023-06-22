import React from 'react';
import {View,TextInput} from 'react-native';


const InputsComponent = ({inputPlaceholder="Enter Your Placeholder",inputStyles={width:100,backgroundColor:'white',borderRadius:10,width:'100%',padding: 10,}},passwordSecures=false) => {
    return (
        <View>
            <TextInput placeholder={inputPlaceholder}  style={inputStyles} secureTextEntry={Boolean.parseBoolean(passwordSecures)}/>
        </View>
    );
}



export default InputsComponent;
