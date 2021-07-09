import React, { useState } from 'react';
import { firebase } from '../../firebase'
import { View, Text, Image, StyleSheet, TextInput, Button, Touchable, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { color } from 'react-native-reanimated';


function AskCode() {

    function GenerateCode() {
        return Math.floor(100000 + Math.random() * 900000);
    }

    return (

        <React.Fragment>


            <View
                style={{
                    backgroundColor: '#11A1D8',
                    width: '100%',
                    height: '100%'
                }}
            >

            </View>

            <View

                style={{
                    width: 720,
                    height: 720,
                    borderRadius: 720 / 2,
                    marginLeft: -260,
                    marginTop: -1170,
                    backgroundColor: "#4C525C",

                }}

            >
            </View>
            <Text style={styles.seta}>◀</Text>

            <Text style={styles.white1}>Ask</Text>
            <Text style={styles.white2}>Code</Text>

            <TextInput
                style={styles.input1}
                onChangeText={AskCode}
                /* value={AskTheCode} */
                placeholder="Ask Code"
            />



            <View

                style={{
                    width: 720,
                    height: 720,
                    borderRadius: 720 / 2,
                    marginLeft: 100,
                    marginTop: 78,
                    backgroundColor: "#FFFFFF",

                }}

            >
                <TouchableHighlight style={styles.botao}>
                    <Text style={styles.whiteButton}>Sign In ➡</Text>
                </TouchableHighlight>


                <TouchableHighlight style={styles.botao1}>
                    <Text style={styles.whiteUnderline1}>Sign Up</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.botao2}>
                    <Text style={styles.whiteUnderline2}>Sign In</Text>
                </TouchableHighlight>

            </View>


        </React.Fragment >)
}

const styles = StyleSheet.create({

    white1: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 40,
        marginLeft: -300,
    },
    white2: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 42,
        textAlign: 'center',
        marginTop: -10,
        marginLeft: -275,
    },
    seta: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 42,
        textAlign: 'center',
        marginTop: -260,
        marginLeft: -335,
    },
    input1: {
        height: 55,
        margin: 12,
        marginTop: 150,
        borderRadius: 20,
        backgroundColor: "#E5E5E5",
    },
    botao: {
        height: 45,
        width: 105,
        marginLeft: 210,
        marginTop: 10,
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
    whiteUnderline1: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: -15,
        textAlign: 'center',
        marginLeft: -10,
    },

    botao1: {
        height: 10,
        width: 90,
        marginLeft: -80,
        marginTop: 100,
        margin: 5,
        borderRadius: 0,
        backgroundColor: "#E5E5E5",

    },

    botao2: {
        height: 10,
        width: 80,
        marginLeft: 227,
        marginTop: -15,
        margin: 5,
        borderRadius: 0,
        backgroundColor: "#11A1D8",

    },
    whiteUnderline2: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: -15,
        textAlign: 'center',
        marginLeft: -10,
    },
});

export default AskCode
