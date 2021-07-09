import React from 'react';
import { Button, requireNativeComponent } from 'react-native';
import { firebase } from '../../firebase'
import { View, Text, Image, StyleSheet } from 'react-native'


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { color } from 'react-native-reanimated';

function Calendar() {
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
        /* Tabela Agenda */
        style={
          {
            height: 380,
            width: 393,
            backgroundColor: '#ACACAC',
            alignContent: 'center',
            borderWidth: 1,
            padding: 100,
            borderRadius: 1,
          }
        }>


      </View>
      <View
        /* Tabela Agenda */
        style={
          {
            marginTop: 1,
            height: 305,
            width: 393,
            backgroundColor: '#ACACAC',
            alignContent: 'center',
            borderWidth: 1,
            padding: 100,
            borderRadius: 1,
          }
        }>



      </View>

    </React.Fragment>)
}
const styles = StyleSheet.create({
  TextStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
    textDecorationLine: 'underline',
    //line-through is the trick
  },
})


export default Calendar