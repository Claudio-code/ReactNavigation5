import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import FacebookDashboard from './pages/FacebookDashboard';
import YoutubeDashboard from './pages/YoutubeDashboard';

import HeaderFace from './components/Headers/HeaderFace';
import { color } from 'react-native-reanimated';

const FaceStack = createStackNavigator();
const YoutubeStack = createStackNavigator();
const BottomTabsStack = createBottomTabNavigator();
const TopTabsStack = createMaterialTopTabNavigator();
const RootStack = createStackNavigator();

const Face = () => {
  return (
    <FaceStack.Navigator
    headerMode="none">
      <FaceStack.Screen
        name="Face"
        component={FacebookDashboard}
        options={{
          headerStyle: {
            backgroundColor: '#FFF',
          }
        }}
      />

    </FaceStack.Navigator>
  );
}

const Youtube = () => {

  return (
    <YoutubeStack.Navigator>
      <YoutubeStack.Screen name="Youtube" component={YoutubeDashboard} />
    </YoutubeStack.Navigator>
  );
}

const BottomTab = () => {
  return(
    <BottomTabsStack.Navigator>
      <BottomTabsStack.Screen name="Home" component={Face} />
      <BottomTabsStack.Screen name="Settings" component={Face} />
    </BottomTabsStack.Navigator>
  );
}

const TopTab = () => {
  return(
    <TopTabsStack.Navigator
      tabBarOptions={{
        activeTintColor: '#2979ff',
        inactiveTintColor: '#424242'
      }}
    >
      <TopTabsStack.Screen
        name="Home"
        component={Face}
        options={{
          tabBarLabel: ({ color }) =>
            <MaterialIcons name="home" color={color} size={40} />,


        }}
      />
      <TopTabsStack.Screen name="Settings" component={Face} />
    </TopTabsStack.Navigator>
  );
}


export default function Routes() {
  return (
  <RootStack.Navigator >
    <RootStack.Screen
      name="faceStack"
      component={TopTab}
      options={{
        header: () => <HeaderFace />,
        // headerRight: () => <ButtonsTop />,
        headerTintColor:'#FFF',
        headerStyle: {
          backgroundColor: '#FFF'
        },
      }}
    />
  </RootStack.Navigator>
  );
}
