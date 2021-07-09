import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./screens/Home"
import Profile from "./screens/Profile"
import Calendar from "./screens/Calendar"
import Chat from "./screens/Chat"
import Login from "./screens/Login"
import Registo from "./screens/Register"
import AskCode from "./screens/AskCode"
import ForgotPass from "./screens/ForgotPass"
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Menu navegação inferior
export default function App() {
  const isSignedIn = true
  if (isSignedIn) {
    return <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Registo" component={Registo} />
        <Tab.Screen name="Pedir Codigo" component={AskCode} />
        <Tab.Screen name="Recuperer Password" component={ForgotPass} />
       {/*  <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Calendario" component={Calendar} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Perfil" component={Profile} /> */}


      </Tab.Navigator>
    </NavigationContainer>
  } else {
    return <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>

    </NavigationContainer>

  }


}
