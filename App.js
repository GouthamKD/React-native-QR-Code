'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  TouchableOpacity,
  Linking,
  Alert
} from 'react-native';
import { StackNavigator } from 'react-navigation';

// Alert.alert('I am here!!');

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class ScanScreen extends Component {


  constructor(props) {
    super(props);
    this.state = {
      showMarker: true
    }
  }


  onSuccess(e) {
    Alert.alert('QR code Scanning successful!!');

    Alert.alert('data is', JSON.stringify(e));
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
  }

  QRCodeactivate = () => {
    Alert.alert('I am about to Re-Render the QR-Code')
    this.scanner.reactivate();
  }

  render() {
    return (
      //<QRCodeScanner
      <QRCodeScanner ref={(node) => { this.scanner = node }}
      showMarker={true}
        onRead={this.onSuccess.bind(this)}
        topContent={(
          <Text style={styles.centerText}>
          <Text style={styles.textBold}> Try Reading the QR-Code on your computer</Text>
          </Text>
        )}
        bottomContent={(
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText} onPress={this.QRCodeactivate}>Ok Bro!! Tap here to Re-Scan</Text>
          </TouchableOpacity>
        )}
      />
    );
  }
}

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
