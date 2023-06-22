import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import LayoutsDivContainer from './LayoutsDivContainer';
import NavigationComponent from './NavigationComponent';
import NavigationTabComponent from './NavigationTabComponent';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainComponent from './Layouts/mainComponent';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import ProfileComponent from './Layouts/ProfileComponent';
import SettingsComponent from './Layouts/SettingsComponent';
const Stack=createNativeStackNavigator();
import CameraComponent from './Layouts/CameraComponent';
import CustomSideMenu from './Layouts/CustomSideMenu';

const Drawer = createDrawerNavigator();
// props.navigation.toggleDrawer()
function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation screenOptions={{
      drawerStyle: {
        backgroundColor: '#c6cbef',
        width: 240,
      },swipeEnabled:true}} drawerContent={props=><CustomSideMenu {...props} />}  >
      <Drawer.Screen name="Dashboard" component={NavigationTabComponent} options={{headerShown:false,drawerIcon:config=><FontAwesome name="dashboard" color={'black'} size={23} /> }} />
      <Drawer.Screen name="Profile" component={ProfileComponent} options={{headerShown:false,drawerIcon:config=><FontAwesome name="user" color={'black'} size={23} /> }}/>
      <Drawer.Screen name="Settings" component={SettingsComponent} options={{headerShown:false,drawerIcon:config=><FontAwesome name="gear" color={'black'} size={23} /> }}/>
      <Drawer.Screen name="Logout" component={MainComponent} options={{headerShown:false,drawerIcon:config=><FontAwesome name="sign-out" color={'black'} size={23} /> }}/>
      
    </Drawer.Navigator>
  );
}

export default function DrowerComponent() {
  return (
        <MyDrawer />
  );
}
