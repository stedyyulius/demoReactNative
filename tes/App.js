import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  Image,
} from 'react-native';

import HomeScreen from './components/Home'
import ProfileScreen from './components/Profile'

import Card from './components/Card'

const Home = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state={
      selectedTab: 'home',
    }
  }

  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() => <Image source={{uri:'http://www.stickpng.com/assets/images/588a6667d06f6719692a2d17.png'}} />}
          renderSelectedIcon={() => <Image source={{uri:'http://www.stickpng.com/assets/images/588a6667d06f6719692a2d17.png'}} />}
          // badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <Home />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Cards"
          renderIcon={() => <Image source={{uri:'https://d30y9cdsu7xlg0.cloudfront.net/png/20461-200.png'}} />}
          renderSelectedIcon={() => <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmyPi-ebjlOYdiATAkxwHqr7v1KrdufeLFri4Wyzdb71tx6MUpbg'}} />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <Card />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}
