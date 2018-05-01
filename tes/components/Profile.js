import React, { Component } from 'react'
import RNTesseractOcr from 'react-native-tesseract-ocr';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';

import style from '../Style'

const styles = StyleSheet.create(style);

class Profile extends Component {
  constructor(props){
    super(props)
    this.state={
      image: '',
      ocrResult: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>ini profile</Text>
      </View>
    )
  }
}

export default Profile
