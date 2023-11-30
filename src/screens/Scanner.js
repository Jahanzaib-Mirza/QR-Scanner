import {View, Text, TouchableOpacity, StyleSheet,Linking, Alert} from 'react-native';
import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const Scanner = ({navigation}) => {
   const onSuccess = e => {
       console.log(e)
       navigation.navigate("Home",{item:e.data})
      };
  return (
        <QRCodeScanner
          onRead={(e) => onSuccess(e)}
        />
  );
};
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
export default Scanner;
