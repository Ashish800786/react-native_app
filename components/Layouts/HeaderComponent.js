import {View,Text,StyleSheet} from 'react-native'

const HeaderComponent=()=>{
    return(
      <View style={Headerstyle.header}>
        <Text style={Headerstyle.headerText}>This is Header </Text>
      </View>
    )
}

const Headerstyle=StyleSheet.create({

    header:{
        backgroundColor:'blue',
        fontSize:30,
        marging:0,
        padding:20,
        marginBottom:10,
       
        // position:'fixed',
        top:0
    },
    headerText:{
        backgroundColor:'blue',
        fontSize:30,
        color:'white',
        textAlign:'center',
        top:0
    }
});

export default HeaderComponent
