import React, { Component } from 'react'
import { View } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import QRCode from 'react-native-qrcode-svg';

import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking
  } from 'react-native';
import strings from '../../constants/lang';
import Header from '../../Component/Header';

class QrCode extends Component{
    onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
          console.error('An error occured', err)
        );
      };
    render(){
        return(
            <View>
                <Text>
                <Header textData={strings.QRCODE} />
                </Text>
                <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.auto}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
<View style={{marginVertical:550,marginHorizontal:40}}>
<QRCode
      value="http://awesome.link.qr"
    />
</View>

            </View>
        )
    }
}

export default QrCode;
const styles = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777'
    },
    textBold: {
      fontWeight: '500',
      color: '#000'
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
      padding: 16
    }
  });
