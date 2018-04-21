import React, { Component } from 'react';
import axios from 'axios';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state={
      cards: []
    }
  }
  componentDidMount() {
    axios.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards',{
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
        {(this.state.cards.length !== 0)
          ? this.state.cards.map((c,i)=>
              <View key={i}>
                <Image
                style={styles.image}
                source={{uri: c.imgGold || 'https://www.sxsunlimited.com/wp-content/uploads/2017/02/st4Sp6Aw.jpg'}} />
              </View>
            )
          : <Text>Loading...</Text>
        }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  loading: {
    fontSize: 30,
    textAlign: 'center',
  },
  cardRow: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
  }
});
