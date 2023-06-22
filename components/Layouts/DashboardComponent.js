import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import DrowerComponent from '../DrowerComponent';

const DashboardComponent = () => {
    return (
        <View style={{flex:1,backgroundColor:'yellow'}}>
            <DrowerComponent/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default DashboardComponent;
