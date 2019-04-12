import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';
import { systemWeights } from 'react-native-typography';

import { HEADER, BACK } from '../services/Colors';
import Indicator from '../components/Indicator';

export default class CourseScreen extends React.Component {

  static navigationOptions = {
    title: 'Courses',
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
    data: require('../json/Course.json')
  }

  _onPress = (item) => {

    const { navigate } = this.props.navigation;

    navigate('VideoList',
      { 
        name: item.name,
        id: item.id
      }
    )
  }

	render() {

    const { navigate } = this.props.navigation;

		return (
      <View style={styles.container}>

        {this.state.data == null ?
          <Indicator/>
        :
          <ScrollView>
            {
              this.state.data.map((item, index) => (
                <ListItem
                  key={index.toString()}
                  underlayColor={BACK}
                  onPress={() => this._onPress(item)}
                  containerStyle={styles.listContainer}
                  title={item.id}
                  titleStyle={styles.listTitle}
                  subtitle={item.name}
                  subtitleStyle={styles.listSubtitle}
                  chevron={true}
                />
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
  },
  
  listContainer: {
    backgroundColor: '#eee',
    marginTop: 14,
    marginHorizontal: 14,
    elevation: 0,
    borderRadius: 4,
    borderColor: '#ddd',
    borderWidth: 0
  },

  listTitle: {
    color: 'black',
    fontFamily: 'Roboto',
    fontSize: 16,
    ...systemWeights.light
  },

  listSubtitle: {
    color: 'black',
    fontFamily: 'Roboto',
    fontSize: 16,
    ...systemWeights.light,
    paddingTop: 4
  }
});