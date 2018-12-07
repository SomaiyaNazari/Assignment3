
//Somaiyah
import React, {Component} from 'react';
import {Platform, Button, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';


export default class PostJob extends Component {
  constructor(){
   super();
   this.state = {text: "Post Job"}
   this.state = {
     JTitle:'',
     JType:'',
     Salary:'',
     Jtime:'',
     Jaddress:''
   }
  }
  render() {
    return (
      
      <View style={Styles.container}>

      <TextInput style={styles.inputStyle}
      placeholder="Job Tittle"/>
      <TextInput style={styles.inputStyle} 
      placeholder="Job Type Part/Full time"/>
      <TextInput style={styles.inputStyle} 
      placeholder="Employee Salary"/>
      <TextInput style={styles.inputStyle} 
      placeholder="Job Time"/>
      <TextInput style={styles.inputStyle} 
      placeholder="Job Address"/>

      <DateTimePicker
         isVisible={this.state.isVisible}
         onConfirm={this.handlePicker}
         onCancel={this.handlePicker}
         />
      
      <TouchableOpacity>
        <Text style={styles.btnText}>Post Job</Text>
      </TouchableOpacity>

      </View> 
   );
  }}

  const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#F5FCFF',
    },
    button:{
      width: 250,
      height:50,
      backgroundColor:'#330066',
      borderRadius:30,
      justifyContent:'center',
      marginTop:15
    },
    text:{
      fontSize: 18,
      color:'white',
      textAlign:'center'
    }
  });