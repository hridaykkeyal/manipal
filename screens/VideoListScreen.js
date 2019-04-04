import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { Video, ScreenOrientation } from 'expo';
import { systemWeights } from 'react-native-typography';

import { HEADER, BACK } from '../services/Colors.js';

const window = Dimensions.get('window');
const heightProgress = (window.height/2)-StatusBar.currentHeight-60

export default class VideoListScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const name = navigation.getParam('name');
    return {
      title: name,
      headerTintColor: 'white',
      headerTitleStyle: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 20,
        ...systemWeights.light,
      },
      headerStyle: {
        elevation: 0,
        borderBottomWidth: 0,
        backgroundColor: HEADER, 
        height: 60,
      }
    }
  }

	state = {
    data: require('../json/VideoList.json')
  }

  check = (id, itemId) => {
    var i;
    for (i=0; i<itemId.length; i++) {
      if (id === itemId[i]) {
        return true
      }
    }
    return false
  }

  _onPress = (item) => {

    const { navigate } = this.props.navigation;

    navigate('Video',
      { 
        data: item.data
      }
    )
  }

	render() {

    const { navigate } = this.props.navigation;
    const id = this.props.navigation.getParam('id');

		return (
      <View style={styles.container}>

        {this.state.data == null ?

          <View style={{paddingTop: heightProgress}}>
            <ActivityIndicator size={50} color='black'/>
          </View>

        :

          <ScrollView>
            {
              this.state.data.data.map((item, index) => (
                <View key={index.toString()}>
                {this.check(id, item.arr) ?
                <ListItem
                  underlayColor={'white'}
                  onPress={() => this._onPress(item)}
                  containerStyle={{
                    backgroundColor: '#eee',
                    marginTop: 14,
                    marginHorizontal: 14,
                    elevation: 0,
                    borderRadius: 4,
                    borderColor: '#ddd',
                    borderWidth: 0
                  }}
                  title={`Chapter ${item.data.chapter}`}
                  titleStyle={{
                    color: 'black',
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    ...systemWeights.light,
                  }}
                  subtitle={item.data.name}
                  subtitleStyle={{
                    color: 'black',
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    ...systemWeights.light,
                    paddingTop: 4
                  }}
                  chevron={true}
                />
                : null}
                </View>
              ))
            }
            <View style={{paddingTop: 10}}/>

          </ScrollView>
        }

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