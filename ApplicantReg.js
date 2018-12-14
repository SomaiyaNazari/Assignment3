
import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class App extends React.Component {
    render(){
      return (
          <View style = {Styles.ApplicantReg}>

              <Text style = {styles.header}>Applicant Registration form </Text>

               <TextInput style={styles.TextInput} placeholder="Full name"
               underlineColorAndroid={'transparent'}/>

               <TextInput style={styles.TextInput} placeholder="Email Address"
               underlineColorAndroid={'transparent'}/>

               <TextInput style={styles.TextInput} placeholder="Password"
               secureTextEntery={true} underlineColorAndroid={'transparent'}/>

               <TextInput style={styles.TextInput} placeholder="Your IC"
               underlineColorAndroid={'transparent'}/>

               <TouchableOpacity style={styles.button}>
                   <Text style={styles.btntext}>Sign Up</Text>
               </TouchableOpacity>
          </View>
      );
    }
}

const styles = StyleSheet.create ({
    ApplicantReg:{
        alignSelf:'stretch',
    },
    header:{
        fontSize: 24,
        color: '#008B8B',
        paddingBottom:10,
        marginBottom: 40,
        borderBottomColor:'#FFFAFA',
        borderBottomWidth:1,
    },
    textinput:{
        alignSelf:'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#F0F8FF',
        borderBottomWidth: 1,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'green',
        marginTop: 30,
    },
    btntext:{
        color: '#fff',
        fontWeight: 'bold',
    }
});
