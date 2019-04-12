import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar, Dimensions, ActivityIndicator } from 'react-native';

const window = Dimensions.get('window');
const heightProgress = (window.height/2)-StatusBar.currentHeight-60

export default class Indicator extends React.Component {
  render() {
    return (
      <View style={{paddingTop: heightProgress}}>
        <ActivityIndicator size={48} color='#eee'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});