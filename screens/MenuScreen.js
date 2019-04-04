import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar, Dimensions, ActivityIndicator } from 'react-native';
import { Permissions, Font } from 'expo';
import { Button, ListItem } from 'react-native-elements';
import { systemWeights } from 'react-native-typography';

import { HEADER, BACK } from '../services/Colors';

const window = Dimensions.get('window');
const heightProgress = (window.height/2)-StatusBar.currentHeight-60

export default class MenuScreen extends React.Component {

  static navigationOptions = {
    title: 'More',
    headerTitleStyle: {
      color: 'white',
      fontFamily: 'Roboto',
      fontSize: 20,
      ...systemWeights.light,
      paddingLeft: 10
    },
    headerStyle: {
      elevation: 0,
      borderBottomWidth: 0,
      backgroundColor: HEADER, 
      height: 60,
    }
  }

	state = {

  }

	componentDidMount = () => {

  }

	render() {

    const { navigate } = this.props.navigation;

		return (
      <View style={styles.container}>
        <Text>Menu</Text>
      </View>
		);
	}
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: BACK
	}
});