
//task: Reza

import React, {Component} from 'react';
import {Text, View, Button, TextInput, Alert} from 'react-native';
import {Styles} from './Styles';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      word:"detect",
      Consonants:0,
      Vowel:0,
      Characters:0

    }
  }

//task: Habiba
  AnalyzeWord = () => {
    let ccount=0,cvowel=0,no_of_char=0;
    let string=this.state.word;
    let str= string.split(' ',string.length);
    let word=this.state.word;
    
    no_of_char=word.length;
    for(var i=0;i<word.length;i++){
      let lchar=word[i].toLowerCase();
      if(lchar=='a' || lchar=='e' || lchar=='i' || lchar=='o' || lchar=='u')
        cvowel++;
      else
        ccount++;
    }
    this.setState({Consonants:ccount,Vowel:cvowel,Characters:no_of_char});

    
  }

//task: Somiyah
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.container}>
        <Text style={Styles.welcome}>A Word Analyzer</Text>
       
        <View style={Styles.buttons}>
 <Text style={Styles.buttons}>Word  </Text>
 
 <TextInput onChangeText={(word) => this.setState({word})} style={Styles.instructions} placeholder='detect'/>
        
         <Button color="#841584" onPress={this.AnalyzeWord} title='Analyze'/>
        
        </View>
        <Text style={Styles.word}></Text>
        <Text style={Styles.word}>Word                                         : {this.state.word}</Text>
        <Text style={Styles.word}>No of Consonants                   : {this.state.Consonants}</Text>
        <Text style={Styles.word}>No of Vowels                           : {this.state.Vowel}</Text>
        <Text style={Styles.word}>No of Characters                     : {this.state.Characters}</Text>
        </View>
      </View>
    );
  }
}
