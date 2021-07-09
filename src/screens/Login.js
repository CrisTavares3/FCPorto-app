import React, { useState } from 'react';
import { firebase, auth , firestore } from '../../firebase'
import { View, Text, Image, StyleSheet, TextInput, Button, requireNativeComponent, Touchable, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { color } from 'react-native-reanimated';
import Home from './Home'
function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();


  function logged() {
    let logged = 0;
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then((userCredential) => {
        console.log('User logged');
        var user = userCredential.user;
        logged = 1;
        return logged;
        
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Erro no login");
        logged = 0;
        return logged;
      });
  
  }
  if (logged == 1) {
    return <AfterLogin></AfterLogin>
    
  } else {
    /* return <AfterLogin></AfterLogin> */
    
  }


  return (
    <React.Fragment>

      <View

        style={{
          width: 500,
          height: 500,
          borderRadius: 500 / 2,
          marginLeft: 160,
          marginTop: -100,
          backgroundColor: "#11A1D8",


        }}
      >
      </View>

      <View

        style={{
          width: 720,
          height: 720,
          borderRadius: 720 / 2,
          marginLeft: -175,
          marginTop: -840,
          backgroundColor: "#4C525C",

        }}
      >
      </View>


      <Image
        style={{
          resizeMode: "cover",
          borderRadius: 40,
          marginTop: -250,
          marginLeft: 130,
          height: 125,
          width: 125,
          backgroundColor: "white",

        }}
        source={require('./user.png')}
      />

      <Text style={styles.white}>Welcome </Text>

      <TextInput
        style={styles.input1}
        onChangeText={setUsername}
        value={username}
        placeholder="Email"
      />

      <TextInput
        style={styles.input2}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}

      />



      <TouchableHighlight style={styles.botao} onPress={logged}>
        <Text style={styles.whiteButton}>Sign In ➡</Text>
        

      </TouchableHighlight>
      <TouchableHighlight style={styles.underlineButton} >
        <Text style={styles.whiteUnderline}>Sign Up</Text>
      </TouchableHighlight>



    </React.Fragment >)
}



const styles = StyleSheet.create({

  white: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    marginTop: 20,
  },
  input1: {
    height: 55,
    margin: 12,
    marginTop: 155,
    borderRadius: 20,
    backgroundColor: "#E5E5E5",
  },
  input2: {
    height: 55,
    margin: 12,
    marginTop: 5,
    borderRadius: 20,
    backgroundColor: "#E5E5E5",
  },
  botao: {
    height: 45,
    width: 105,
    marginLeft: 275,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#4C525C",

  },
  whiteButton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 8,
  },

  whiteUnderline: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },

  underlineButton: {

  }
});

export default Login
