import React, { useState } from 'react';
import { firebase, firestore, auth } from '../../firebase'
import { View, Text, Image, StyleSheet, TextInput, Button, requireNativeComponent, Touchable, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { color } from 'react-native-reanimated';



function Profile() {
  function logout() {
    auth.signOut().then(() => {
console.log('Logout feito com sucesso')
    }).catch((error) => {
      console.log('Erro:', error);
    });
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
        /* Quadrado de cima com foto do jogador */
        style={{
          flexDirection: "row",
          marginTop: -760,
          height: 250,
          padding: 10,
          borderRadius: 19,
          backgroundColor: "#4C525C",

        }}
      >

        <View
          style={{
            flexDirection: "row",
            width: 370,
            height: 115,
            padding: 80,
            borderRadius: 19,
            backgroundColor: "#FFFFFF",
            marginTop: 45,
            marginBottom: 45,
            marginLeft: 20,
            marginRight: 20,
          }}
        >

        </View>

      </View>

      <Image
        style={{
          resizeMode: "cover",
          borderRadius: 19,
          marginTop: -177,
          marginLeft: 52,
          height: 125,
          width: 125,
          backgroundColor: "#000000",

        }}
        source={require('./user.png')}
      />

      <Text style={styles.white}>Name </Text>

      <TouchableHighlight style={styles.botao} onPress={logout}>

        <Text style={styles.whiteButton}>LOGOUT</Text>

      </TouchableHighlight>

      <View
        style={{
          flexDirection: "row",
          width: 160,
          height: 60,
          borderRadius: 19,
          backgroundColor: "#4C525C",
          marginTop: 15,
          marginLeft: 20,
        }}
      >
        <Text style={styles.BlackButton}>NEXT WORKOUT:</Text>
      </View>


      <View
        style={{
          flexDirection: "row",
          width: 390,
          height: 115,
          padding: 80,
          borderRadius: 19,
          backgroundColor: "#FFFFFF",
          marginTop: 15,
          marginBottom: 45,
          marginLeft: 20,
        }}
      >

      </View>


      <View
        style={{
          flexDirection: "row",
          width: 160,
          height: 60,
          borderRadius: 19,
          backgroundColor: "#4C525C",
          marginTop: -30,
          marginLeft: 20,
        }}
      >
        <Text style={styles.BlackButton2}>NEXT GAME:</Text>
      </View>


      <View
        style={{
          flexDirection: "row",
          width: 390,
          height: 115,
          padding: 80,
          borderRadius: 19,
          backgroundColor: "#000000",
          marginTop: 15,
          marginBottom: 45,
          marginLeft: 20,
        }}
      >

      </View>

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
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: -80,
    marginLeft: 150,
  },
  botao: {
    height: 45,
    width: 105,
    marginLeft: 305,
    marginTop: 110,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#4C525C",

  },
  whiteButton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 9,
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
});

export default Profile