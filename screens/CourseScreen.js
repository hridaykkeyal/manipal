import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';
import { systemWeights } from 'react-native-typography';

import { HEADER, BACK } from '../services/Colors';

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

	componentDidMount = () => {

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

          <View style={{paddingTop: heightProgress}}>
            <ActivityIndicator size={50} color='black'/>
          </View>

        :

          <ScrollView>
            {
              this.state.data.data.map((item, index) => (
                <ListItem
                  key={index.toString()}
                  underlayColor={BACK}
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
                  // leftAvatar={{ source: require('../images/cap.jpg') }}
                  title={item.id}
                  titleStyle={{
                    color: 'black',
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    ...systemWeights.light,
                  }}
                  subtitle={item.name}
                  subtitleStyle={{
                    color: 'black',
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    ...systemWeights.light,
                    paddingTop: 4
                  }}
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
	}
});