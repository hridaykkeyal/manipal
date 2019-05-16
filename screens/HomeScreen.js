import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { HEADER, BACK } from '../services/Colors';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
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
        <View style={{paddingTop: wp(3), paddingHorizontal: wp(3)}}>
          <Image
            style={{width: wp(94), height: wp(60), borderRadius: 4}}
            source={require('../images/manipal.jpg')}
          />
        </View>

        <View style={styles.view}>
            <Text style={styles.text}>
              Now ll the course videos of Manipal University Jaipur{'\n'}are available to you directly on your smartphone
            </Text>
          </View>
      </View>
		);
	}
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: BACK
  },

  view: {
    borderRadius: 4, 
    marginTop: wp(3), 
    marginHorizontal: wp(3), 
    paddingVertical: 20, 
    paddingHorizontal: 10, 
    backgroundColor: '#eee'
  },
  
  text: {
    color: 'black',
    fontFamily: 'Roboto',
    fontSize: wp(3.6),
    ...systemWeights.light,
    textAlign: 'center'
  }
});