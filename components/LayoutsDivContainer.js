import React from 'react'
import {View,Text,ActivityIndicator} from 'react-native'
import ButtonsComponents from './ButtonsComponents'
const LayoutsDivContainer=()=>{
    return(
        <View style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'red',flexDirection:"row"}}>
                <View style={{flex:1,backgroundColor:'blue'}}>
                    <ButtonsComponents />
                </View>
                <View style={{flex:1,backgroundColor:'purple'}}></View>
            </View>
            <View style={{flex:1,backgroundColor:'gray', justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size={200} color={'black'} animating={true} />
            </View>
            <View style={{flex:1,backgroundColor:'green'}}></View>
        </View>
    )

}
export default LayoutsDivContainer;