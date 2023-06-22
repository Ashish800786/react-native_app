import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Camera } from 'expo-camera';
import { Audio } from 'expo-av';


export default function MicrophoneComponent() {
  const [recording, setRecording] = React.useState();

  const GetPermissions = async () => {
    try {
      console.log('Requesting permissions..');
    //   const CameraPerm = await Camera.requestPermissionsAsync();
    //   if (CameraPerm.status === 'granted') {
    //     console.log('Camera Permission Granted');
    //   }
  
      const AudioPerm = await Audio.requestPermissionsAsync();
      if (AudioPerm.status === 'granted') {
        console.log('Audio Permission Granted');
      }
    } catch (err) {
      console.error('Failed to get permissions', err);
    }
  };

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync( Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);
  }


  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync().then(() => {
        // console.log('Permission granted!');
      })
      .catch(error => {
        console.log(error);
      });
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      }); 
      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(
         Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
    }

  return (
    <View >
    <Button title="Get Permissions" onPress={GetPermissions} />

    <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />
  </View>
  );
}

const styles = StyleSheet.create({
});
