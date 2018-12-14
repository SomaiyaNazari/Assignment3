
import React from 'react';
import {StyleSheet, View} from 'react-native';

import ApplicantReg from './app/components/ApplicantReg';

export default class App extends React.Component {
    render(){
        return (
            <View style = {styles.container}></View>
               )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        backgroundColor:'336485f',
        paddingLeft:60,
        paddingRight: 60,
    },
});