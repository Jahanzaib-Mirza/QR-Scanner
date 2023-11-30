import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Scanner from '../screens/Scanner';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} initialParams={{item:null}} />
      <Stack.Screen name="Scanner" component={Scanner} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
