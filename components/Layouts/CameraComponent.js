import { Camera, CameraType } from 'expo-camera';
import { useState,useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View,Linking } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import MicrophoneComponent from './MicrophoneComponent';

export default function CameraComponent() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const requestPermissionAgain = () => {
    Linking.openSettings();
}

useEffect(() => {
    if (!permission?.granted) requestPermission();
}, []);

  // console.warn(permission);
//   if (!permission)
//   {
//     console.warn('acces')
//   } 

//   if (!permission.granted)
//   {
//     console.warn('denied')
//   }  

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>
            <FontAwesome name="camera" /> Flip Camera
            {/* <Ionicons name="flip-camera-android" />Flip Camera */}
            </Text>
          </TouchableOpacity>
        <MicrophoneComponent/>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({ 
    container:{
        height:'100%',
        width:'100%',
        flex:1,
        backgroundColor:'yellow',

    },
    buttonContainer:{
        width:'100%',
        padding:10,

    },
    camera:{
        height:'100%',
        width:'100%',
        flex:1,
    },
    button:{
        width:'100%',
        padding:10,
        color:"black",
        borderRadius:10,
        marginTop:100,


    },
    text:{
        width:'100%',
        backgroundColor:'white',
        padding:10,
        borderRadius:10,
        textAlign:'center',
        marginTop:'100%'
    }
 }); 