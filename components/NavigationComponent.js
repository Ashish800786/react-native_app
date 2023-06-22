import {View,Text,TextInput,Button,StyleSheet} from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack=createNativeStackNavigator();
function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
const NavigationComponent=()=>{
    return(
            
        // <NavigationContainer>
        <View>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={HomeScreen} />
          <Stack.Screen name="Contact" component={HomeScreen} />
          <Stack.Screen name="info" component={HomeScreen} />
        </Stack.Navigator>
       {/* </NavigationContainer> */}
      </View>
          
 
    )
}

const styles=StyleSheet.create({
    inputs:{
        borderWidth:2,
        borderRadius:10,
        margin:10,
        padding:10,
        backgroundColor:"white",
    },
    text: {
        textAlign:'center',
        marginBottom:-10,
        marginLeft:10,
        fontSize:20,
        color:'white'
      },

      formView:{
        borderRadius:10,
        backgroundColor:'orange',
        margin:10
      }
});

export default NavigationComponent;