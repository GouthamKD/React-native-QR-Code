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
  onSuccess(e) {
    Alert.alert('Scanning successful!!');
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={(
          <Text style={styles.centerText}>
            Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
          </Text>
        )}
        bottomContent={(
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        )}
      />
    );
  }
}

// export default class ScanScreen extends Component {

//   onSuccess(e) {
//     Alert.alert('one');
//     Linking.openURL(e.data).catch(err => console.error('An error occured', err));
//   }


//   render() {
//     Alert.alert('Two');
//     return (
//       Alert.alert('Thrree'),


//       <QRCodeScanner
//         title='Scan Code'
//         onRead={() => alert('Success')}
//         topContent={(
//           <Text style={styles.centerText}>
//             Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
//     </Text>
//         )}
//         bottomContent={(
//           <TouchableOpacity style={styles.buttonTouchable}>
//             <Text style={styles.buttonText}>OK. Got it!</Text>
//           </TouchableOpacity>
//         )}
//       />);
//   }
// }

// <Navigator
//   initialRoute={{
//     component: QRCodeScanner,
//     title: 'Scan Code',
//     passProps: {
//       onRead: this.onSuccess.bind(this),
//       topContent: (
//         <Text style={styles.centerText}>
//           Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
//       </Text>
//       ),
//       bottomContent: (
//         <TouchableOpacity style={styles.buttonTouchable}>
//           <Text style={styles.buttonText}>OK. Got it!</Text>
//         </TouchableOpacity>
//       ),
//     },
//   }}
//   style={{ flex: 1 }}
// />

// <NavigatorIOS
//   initialRoute={{
//     component: QRCodeScanner,
//     title: 'Scan Code',
//     passProps: {
//       onRead: this.onSuccess.bind(this),
//       topContent: (
//         <Text style={styles.centerText}>
//           Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
//         </Text>
//       ),
//       bottomContent: (
//         <TouchableOpacity style={styles.buttonTouchable}>
//           <Text style={styles.buttonText}>OK. Got it!</Text>
//         </TouchableOpacity>
//       ),
//     },
//   }}
//   style={{ flex: 1 }}
// />
//     );
//   }
// }

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
