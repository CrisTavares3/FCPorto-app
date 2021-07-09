import React from 'react';
import { Button, requireNativeComponent } from 'react-native';
import { firebase } from '../../firebase'
import { View, Text, Image, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { color } from 'react-native-reanimated';
import Login from './Login';

function Home() {
 
  //data
  function diaAtual() {

    let dia = String(new Date().getDate());
    dia = dia.length == 1 ? '0' + dia : dia
    let mes = String(new Date().getMonth() + 1);
    mes = mes.length == 1 ? '0' + mes : mes
    const ano = new Date().getFullYear();
    let data = `${dia} - ${mes} - ${ano} `

    return data;
  }

  return (
    <AfterLogin>
    <React.Fragment>
      <View
        /* Quadrado de cima com foto do jogador */
        style={{
          flexDirection: "row",
          marginTop: -20,
          height: 160,
          padding: 20,
          borderRadius: 19,
          backgroundColor: "#4C525C",

        }}

      >
        <Image
          style={{
            resizeMode: "cover",
            borderRadius: 40,
            marginTop: 20,
            height: 100,
            width: 100,
            backgroundColor: "white",


          }}
          source={require('./user.png')}
        />

        <Text style={styles.nome}>

          {diaAtual()}</Text>
      </View>
      <Text style={styles.blue}>Classifications </Text>

      <View
        /* Tabela classificacao */
        style={
          {
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            height: 275,
            width: 390,
            backgroundColor: '#ACACAC',
            alignContent: 'center',
            borderWidth: 1,
            padding: 100,
            borderRadius: 10

          }
        }>


      </View>

      <Text style={styles.blue}>Today's Agenda </Text>

      <View
        /* Tabela Agenda */
        style={
          {
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            height: 80,
            width: 390,
            backgroundColor: '#ACACAC',
            alignContent: 'center',
            borderWidth: 1,
            padding: 60,
            borderRadius: 10,
          }
        }>


      </View>

    </React.Fragment>
    </AfterLogin>)
}

//tamanho da data
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
  }
});

export default Home