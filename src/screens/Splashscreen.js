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

