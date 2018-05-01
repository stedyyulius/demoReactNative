import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import axios from 'axios'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import style from '../Style'

const styles = StyleSheet.create(style);

const api = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards'

class Card extends Component {
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
      <ScrollView>
        <View style={styles.cardRow}>
        {(this.state.cards.length === 0)
          ? <ActivityIndicator style={styles.loading} animating={true} size="large" />
          : (this.state.cards.map((c,i)=>
                <View  style={styles.cardRow} key={i}>
                  <Image style={styles.image} source={{uri:c.img || 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/No_image_available_600_x_450.svg/600px-No_image_available_600_x_450.svg.png'}} />
                </View>
              ))
        }
        </View>
      </ScrollView>
    );
  }
}

export default Card
