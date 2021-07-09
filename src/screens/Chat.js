import React, { useState } from 'react';
import { firebase } from '../../firebase'
import { View, Text, Image, StyleSheet, TextInput, Button, requireNativeComponent, Touchable, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { color } from 'react-native-reanimated';



function Chat() {
  function onPressLearnMore() {
    firebase.firestore().collection('Picture').get()
      .then(snapshot => {
        snapshot.forEach(element => {
          console.log(element.data())

        });
      })
  }

  return (
    <React.Fragment>
      <View
        style={{
          backgroundColor: '#BABABA',
          width: '100%',
          height: '100%',
        }}

      >

      </View>

      <View

        style={{
          flexDirection: "row",
          marginTop: -760,
          height: 340,
          padding: 10,
          borderRadius: 19,
          backgroundColor: "#4C525C",

        }}
      >

      </View>

      <Text style={styles.Chat}>Chat</Text>

      <TouchableHighlight style={styles.botao}>

        <Text style={styles.whiteButton}>🔍Search</Text>

      </TouchableHighlight>

      <Text style={styles.white}>Online</Text>


      <Image
        style={{
          resizeMode: "cover",
          borderRadius: 40,
          marginTop: 10,
          marginLeft: 20,
          height: 75,
          width: 75,
          backgroundColor: "#000000",

        }}
        source={require('./user.png')}
      />

      <Text

        style={{
          color: '#FFFFFF',
          fontWeight: 'bold',
          fontSize: 17,
          textAlign: 'center',
          marginTop: 5,
          marginLeft: -320,
        }}

      >Nome</Text>


      <Image
        style={{
          resizeMode: "cover",
          borderRadius: 40,
          marginTop: -103,
          marginLeft: 120,
          height: 75,
          width: 75,
          backgroundColor: "#000000",

        }}
        source={require('./user.png')}
      />

      <Text

        style={{
          color: '#FFFFFF',
          fontWeight: 'bold',
          fontSize: 17,
          textAlign: 'center',
          marginTop: 5,
          marginLeft: -120,
        }}

      >Nome</Text>

      <Image
        style={{
          resizeMode: "cover",
          borderRadius: 40,
          marginTop: -103,
          marginLeft: 220,
          height: 75,
          width: 75,
          backgroundColor: "#000000",

        }}
        source={require('./user.png')}
      />

      <Text

        style={{
          color: '#FFFFFF',
          fontWeight: 'bold',
          fontSize: 17,
          textAlign: 'center',
          marginTop: 5,
          marginLeft: 80,
        }}

      >Nome</Text>


      <Image
        style={{
          resizeMode: "cover",
          borderRadius: 40,
          marginTop: -103,
          marginLeft: 320,
          height: 75,
          width: 75,
          backgroundColor: "#000000",

        }}
        source={require('./user.png')}
      />

      <Text

        style={{
          color: '#FFFFFF',
          fontWeight: 'bold',
          fontSize: 17,
          textAlign: 'center',
          marginTop: 5,
          marginLeft: 280,
        }}

      >Nome</Text>


<TouchableHighlight style={styles.botao1}>
        <Text style={styles.whiteButton1}>

          <Image
            style={{
              resizeMode: "cover",
              borderRadius: 40,
              marginTop: -103,
              marginLeft: 320,
              height: 75,
              width: 75,
              backgroundColor: "#000000",

            }}
            source={require('./user.png')}
          />

          <Text style={styles.botao2}>nome</Text>

        </Text>
      </TouchableHighlight>


    </React.Fragment >)
}

const styles = StyleSheet.create({
  nome: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 50,
    marginTop: 60,

  },

  blue: {
    color: '#11A1D8',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
  },
  white: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
    marginLeft: -330,
  },
  botao: {
    height: 55,
    width: 390,
    marginLeft: 20,
    marginTop: 10,
    margin: 5,
    borderRadius: 40,
    backgroundColor: "#767676",

  },
  whiteButton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 12,
    marginLeft: -270,

  },
  BlackButton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 16,
    marginLeft: 8,
  },
  BlackButton2: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 16,
    marginLeft: 25,

  },
  Chat: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 42,
    textAlign: 'center',
    marginTop: -300,
    marginLeft: -300,

  },

  botao1: {
    height: 100,
    width: 390,
    marginLeft: 20,
    marginTop: 50,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#4C525C",
  },
  whiteButton1: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 5,
    textAlign: 'center',
    marginTop: -30,
    marginLeft: -230,

  },
  botao2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 100,
    marginTop: 60,
  },
});

export default Chat