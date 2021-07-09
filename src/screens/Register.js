import React, { useState } from 'react';
import { firebase, auth, firestore } from '../../firebase'
import { View, Text, Image, StyleSheet, TextInput, Button, Touchable, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { color } from 'react-native-reanimated';

//Codigo de registo do utilizador


/* function GenerateCode() {
    return Math.floor(100000 + Math.random() * 900000);
} */


function Registo() {

    const [email, setUserEmail] = useState();
    const [password, setPassword] = useState();

    function register() {
        auth.createUserWithEmailAndPassword(email, password)
            .then(user => {

                if (user) {

                    firestore.collection('Users').add({

                        email: email,
                        password: password,
                    })
                        .then(() => {
                            console.log('User criado')

                        })
                        .catch(error => {
                            console.log('2: ', error);
                        })

                } else {
                    console.log("User saiu da aplicação")
                }
            });
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

            <Text style={styles.white1}>Create</Text>
            <Text style={styles.white2}>Account</Text>

            <TextInput
                style={styles.input1}
                onChangeText={setUserEmail}
                value={email}
                placeholder="Email"

            />

            <TextInput
                style={styles.input2}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                secureTextEntry={true}


            />

            {/*  <TextInput
                style={styles.input3}
                onChangeText={setCode}
                value={code}
                placeholder="Code"
                secureTextEntry={true}

            /> */}



            <View

                style={{
                    width: 720,
                    height: 720,
                    borderRadius: 720 / 2,
                    marginLeft: 100,
                    marginTop: -5,
                    backgroundColor: "#FFFFFF",

                }}

            >
                <TouchableHighlight style={styles.botao} >
                    <Text style={styles.whiteButton}>Sign up ➡</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.botao1}>
                    <Text style={styles.whiteUnderline1}>AskCode</Text>
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
        marginLeft: -250,
    },
    white2: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 42,
        textAlign: 'center',
        marginTop: -10,
        marginLeft: -215,
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
        marginTop: 90,
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
    input3: {
        height: 55,
        margin: 12,
        marginTop: 5,
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
        marginTop: 175,
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

export default Registo
