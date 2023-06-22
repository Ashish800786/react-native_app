import {View,Text,Button,StyleSheet} from 'react-native'

const FooterComponent=()=>{
    return(
        <View style={Footerstyle.footer}>
            <Text style={Footerstyle.footerText}> This is Footer </Text>
        </View>

    )
}

const Footerstyle=StyleSheet.create({

    footer:{
        backgroundColor:'black',
        fontSize:30,
        margingTop:10,
        padding:20,
        height:300

    },
    footerText:{
        backgroundColor:'black',
        fontSize:30,
        color:'white',
        textAlign:'center',
        bottom:0
    }
});

export default FooterComponent