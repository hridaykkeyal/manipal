import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { fromRight } from 'react-navigation-transitions';
import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import CourseScreen from './screens/CourseScreen';
import MenuScreen from './screens/MenuScreen';
import VideoListScreen from './screens/VideoListScreen';
import VideoScreen from './screens/VideoScreen';

import { HEADER } from './services/Colors';

const HomeTab = createStackNavigator(
  {
    Home: {screen: HomeScreen},
  },
  {
    initialRouteName: 'Home',
    transitionConfig: () => fromRight(),
  }
);

const CourseTab = createStackNavigator(
  {
    Course: {screen: CourseScreen},
    VideoList: {screen: VideoListScreen},
    
  },
  {
    initialRouteName: 'Course',
    transitionConfig: () => fromRight(),
  }
);

const MenuTab = createStackNavigator(
  {
    Menu: {screen: MenuScreen},
  },
  {
    initialRouteName: 'Menu',
    transitionConfig: () => fromRight(),
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    HomeTab: {
      screen: HomeTab,
      navigationOptions: {
        title: 'Home',
        header: null
      }
    },
    CourseTab: {
      screen: CourseTab,
      navigationOptions: {
        title: 'Courses',
        header: null
      }
    },
    MenuTab: {
      screen: MenuTab,
      navigationOptions: {
        title: 'More',
        header: null
      }
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {

        const { routeName } = navigation.state;

        if (routeName === 'HomeTab') {
          return <FontAwesome name='home' size={22} color={tintColor}/>;
        } 
        else if (routeName === 'CourseTab') {
          return <FontAwesome name='graduation-cap' size={22} color={tintColor}/>;
        }
        else if (routeName === 'MenuTab') {
          return <FontAwesome name='bars' size={22} color={tintColor}/>;
        }
      }
    }),

    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: HEADER,
        paddingVertical: 6,
        height: 60
      }
    }
  }
);

const StackNavigator = createStackNavigator(
  {
    Video: {screen: VideoScreen},
    Tab: {
      screen: TabNavigator, 
      navigationOptions: {
        title: '',
        header: null
      }
    }
  },
  {
    initialRouteName: 'Tab',
    transitionConfig: () => fromRight(),
  }
);

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;