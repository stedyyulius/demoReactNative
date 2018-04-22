import React, { Component } from 'react';
import axios from 'axios'
import style from './Style'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

const api = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards'

export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state={
      cards: []
    }
  }
  componentDidMount() {
    axios.get(api,{
      headers: {
        'X-Mashape-Key': 'H5m7TWh7somshXTc5fovt1JS3EFjp1xybJ9jsn5CIjEPnajN1a',
      }
    })
    .then(res=> {
      this.setState({
        cards: res.data.Basic.slice(15,50)
      })
    })
    .catch(err=>{
      alert(err)
    })
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.cardRow}>
        {(this.state.cards.length === 0)
          ? <Text style={styles.textStyle}>Loading...</Text>
          : (this.state.cards.map((c,i)=>
                <View key={i}>
                  <Image style={styles.image} source={{uri:c.img || 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/No_image_available_600_x_450.svg/600px-No_image_available_600_x_450.svg.png'}} />
                </View>
              ))
        }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create(style);
