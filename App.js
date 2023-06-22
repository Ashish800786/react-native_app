import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput,ScrollView,RefreshControl } from 'react-native';
import HeaderComponent from './components/Layouts/HeaderComponent';
import FooterComponent from './components/Layouts/FooterComponent';
import FormComponent from './components/FormComponent';
import GridComponents from './components/GridCompnent';
import NavigationComponent from './components/NavigationComponent';
import NavigationTabComponent from './components/NavigationTabComponent';
import DrowerComponent from './components/DrowerComponent';
import LayoutsDivContainer from './components/LayoutsDivContainer';
import { NavigationContainer } from '@react-navigation/native';
import MainComponent from './components/Layouts/mainComponent';
import LoginComponent from './components/Layouts/LoginComponent';
import RegisterComponent from './components/Layouts/RegisterComponent';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardComponent from './components/Layouts/DashboardComponent';
import LotieAnimationComponent from './components/LotieAnimationComponent';
const Stack=createNativeStackNavigator();


export default function App() {
  const greeting=()=>
  {
    alert('Hello');
    console.warn('You Pressed The Button');

  }
  const full_greeting=(name)=>
  {
    alert('Hello, '+name);
    console.warn('You Pressed full_greeting The Button');
  
  }

  const onPressLearnMore=()=>
  {
    alert('Learn more');
  }
  return (
  

    // <View style={{flex:1,backgroundColor:'black'}}>
    //   <LotieAnimationComponent />
    //   <Text>Home Screen</Text>
    <View style={{flex:1}}>
    <ScrollView contentContainerStyle={{flex:1}}
    RefreshControl={<RefreshControl refreshing={true} onRefresh={true} />}>
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="main" component={MainComponent} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={LoginComponent} options={{headerShown:false}}/>
      <Stack.Screen name="Register" component={RegisterComponent} options={{headerShown:false}}/>
      <Stack.Screen name="Dashboard" component={DashboardComponent} options={{headerShown:false}}/>
    </Stack.Navigator>
   </NavigationContainer>
    </ScrollView>
    </View>

  );
}



const styles = StyleSheet.create({
  button: {
    color:'orange',
  },
 
});
