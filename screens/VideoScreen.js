import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Video, ScreenOrientation } from 'expo';

export default class VideoScreen extends React.Component {

  static navigationOptions = {
    title: '',
    header: null
  }

	state = {
    
  }

  componentDidMount = () => {
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);
  }

  componentWillUnmount() {
    Expo.ScreenOrientation.allowAsync(Expo.ScreenOrientation.Orientation.PORTRAIT);
  }

	render() {

    const { navigate } = this.props.navigation;
    const data = this.props.navigation.getParam('data');

		return (
      <View style={styles.container}>
        <Video
          source={{ uri: data.url }}
          resizeMode="contain"
          shouldPlay
          useNativeControls={true}
          style={{flex: 1}}
        />
      </View>
		);
	}
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'black'
	}
});