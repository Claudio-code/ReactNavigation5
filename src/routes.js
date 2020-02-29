import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FacebookDashboard from './pages/FacebookDashboard';

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
        inactiveTintColor: '#9e9e9e'
      }}
    >
      <TopTabsStack.Screen
        name="Home"
        component={Face}
        options={{
          tabBarLabel: ({ color }) => (
            <MaterialIcons
              name="home"
              color={color}
              size={40}
            />
          ),
        }}
      />
      <TopTabsStack.Screen
        name="Settings"
        component={Face}
        options={{
          tabBarLabel: ({ color }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={40}
            />
          ),
        }}
      />

      <TopTabsStack.Screen
        name="movie"
        component={Face}
        options={{
          tabBarLabel: ({ color }) => (
            <MaterialCommunityIcons
              name="youtube-tv"
              color={color}
              size={40}
            />
          ),
        }}
      />

      <TopTabsStack.Screen
        name="store"
        component={Face}
        options={{
          tabBarLabel: ({ color }) => (
            <MaterialCommunityIcons
              name="store"
              color={color}
              size={40}
            />
          ),
        }}
      />

      <TopTabsStack.Screen
        name="bell"
        component={Face}
        options={{
          tabBarLabel: ({ color }) => (
            <MaterialCommunityIcons
              name="bell"
              color={color}
              size={40}
            />
          ),
        }}
      />

      <TopTabsStack.Screen
        name="menu"
        component={Face}
        options={{
          tabBarLabel: ({ color }) => (
            <MaterialCommunityIcons
              name="menu"
              color={color}
              size={40}
            />
          ),
        }}
      />
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
