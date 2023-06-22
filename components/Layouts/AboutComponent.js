import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

const AboutComponent = () => {
    return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'aqua',color:'white' }}>
        <Text>About!</Text>
    </View>
    );
}

const styles = StyleSheet.create({})

export default AboutComponent;
