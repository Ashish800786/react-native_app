import React from 'react';
import {View,Text, StyleSheet,SafeAreaView,TouchableOpacity} from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";


const Header = ({props,title}) => {
    return (
        <SafeAreaView>
        <View style={styles.headerDiv}>
        <View style={styles.d1}>
            <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
                 <FontAwesome name="list" style={styles.toggle_icon} />
            </TouchableOpacity>
        </View>
        <View style={styles.d2}>
            <Text style={styles.headerTitle}> 
            {title}
            </Text>
        </View>
        <View style={styles.d3}>
        <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
                 <FontAwesome name="bell" style={styles.bell_icon} />
                 <Text style={styles.notify}>1</Text>
            </TouchableOpacity>
        
        </View>
        <View style={styles.d4}>
        <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
                 <FontAwesome name="shopping-cart" style={styles.cart_icon} />
                 <Text style={styles.notify}>1</Text>
            </TouchableOpacity>
        </View>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    d1:{
    flex:.1,
    width:"50%",
    justifyContent:'center',
    padding:10
    },
    d2:{
    flex:.9,
    width:"30%",
    justifyContent:'center',
    padding:10,
    alignItems:'center'
    },
    d3:{
    flex:.1,
    width:"10%",
    justifyContent:'center',
    // alignItems:'right',
    padding:2,
    },
    d4:{
    flex:.1,
    width:"10%",
    justifyContent:'center',
    // alignItems:'right',
    padding:2,
    },
    toggle_icon:{
        fontSize:20,
        color:'black',

    },
    bell_icon:{
        fontSize:20,
        color:'black',
        position:'absolute',

    },
    cart_icon:{
        fontSize:20,
        color:'black',
        position:'absolute',

    },
    headerDiv:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'white',
        height:50,
        width:'100%', 
        borderBottomWidth:1,borderBottomColor:'gray'  
    },
    headerTitle:{
        flex:1,
       fontSize:20,
       color:'black'
      
    },
    notify:{
        height:15,
        width:15,
        backgroundColor:'red',
        color:'white',
        marginTop:-6,
        borderRadius:10,
        textAlign:'center',
        alignItems:'center',
        marginLeft:3
    }
    
})

export default Header;
