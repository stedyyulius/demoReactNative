import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  Image,
} from 'react-native';

import HomeScreen from './components/Home'
import ProfileScreen from './components/Profile'
import OCR from './components/OCR'
import SpeechToText from './components/SpeechToText'

import Card from './components/Card'

// const Home = StackNavigator({
//   Home: { screen: HomeScreen },
//   Profile: { screen: ProfileScreen },
// });

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
          renderIcon={() => <Icon name="home" size={20} color="black" />}
          renderSelectedIcon={() => <Icon name="home" size={20} color="blue" />}
          // badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <HomeScreen />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Cards"
          renderIcon={() => <Icon name="credit-card" size={20} color="black" />}
          renderSelectedIcon={() => <Icon name="credit-card" size={20} color="black" />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <Card />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'ocr'}
          title="OCR"
          renderIcon={() => <Icon name="camera" size={20} color="black" />}
          renderSelectedIcon={() => <Icon name="camera" size={20} color="black" />}
          onPress={() => this.setState({ selectedTab: 'ocr' })}>
          <OCR />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'SpeechToText'}
          title="SpeechToText"
          renderIcon={() => <Icon name="microphone" size={20} color="black" />}
          renderSelectedIcon={() => <Icon name="microphone" size={20} color="black" />}
          onPress={() => this.setState({ selectedTab: 'SpeechToText' })}>
          <SpeechToText />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}
