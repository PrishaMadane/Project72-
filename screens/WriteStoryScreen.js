import React from 'react';
import { Text, View,StyleSheet,TextInput,TouchableOpacity,KeyboardAvoidingView,ToastAndroid} from 'react-native';
import {Header} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component {
    constructor(){
        super();
        this.state ={
          story: '',
          author: '',
          writestory:'',
        };
      }
    
    submitStory = async()=> {
      db.collection("Story").add({
        'story': this.state.story,
        'author': this.state.author,
        'writestory': this.state.writestory,
      })
      ToastAndroid.show("Story Submitted",ToastAndroid.SHORT);

      this.setState({
        story:'',
        author:'',
        writestory:''
      })
    }
    
    render() {
      return (
        <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
           <Header
           backgroundColor={'#FFC0CB'}
           centerComponent={{
           text: 'StoryHub',
           style: {color:'black',alignSelf:'center',fontWeight: 'bold'},
           }}/>

           <TextInput
          style={styles.inputBox}
          placeholder = "StoryTitle"
          onChangeText={story => {
          this.setState({ story: story });
           }}
          value={this.state.story}/>

           <TextInput
          style={styles.inputBox}
          placeholder = "Author"
          onChangeText={author => {
          this.setState({ author: author });
           }}
          value={this.state.author}/>

          <TextInput
          style={styles.writestory}
          placeholder = "WriteYourStory"
          
          onChangeText={writestory => {
          this.setState({ writestory: writestory});
           }}
           multiline = {true}
          value={this.state.writestory}/>  

         <TouchableOpacity 
         style={styles.touchableOpacity}
         onPress={this.submitStory}
         >
         <Text style={styles.buttontext}>Submit</Text>
         </TouchableOpacity>

        </KeyboardAvoidingView>
      );
    }
  }
  const styles = StyleSheet.create({
    buttontext: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 60,
        backgroundColor:'#FFC0CB',
        width:100,
        height:20,
        marginLeft: 10,   
        marginBottom: 70
      },
      inputBox: {
        marginTop: 30,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
        
      },
     writestory:{
       height:200,
       borderWidth: 4,
       width: '80%',
       marginTop: 30,
     }
  });