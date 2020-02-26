import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FacebookDashboard from './pages/FacebookDashboard';
import YoutubeDashboard from './pages/YoutubeDashboard';

import HeaderFace from './components/Headers/HeaderFace/index';

const FaceStack = createStackNavigator();
const YoutubeStack = createStackNavigator();
const BottomTabsStack = createBottomTabNavigator();


const Face = () => {
  return (
    <FaceStack.Navigator
    // headerMode="none"
    >
      <FaceStack.Screen
        name="Face"
        component={FacebookDashboard}
        options={{

        }}
      />
      {/* <FaceStack.Screen name="Youtube" component={YoutubeDashboard} /> */}
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

function BottomTab() {
  return(
    <BottomTabsStack.Navigator
    >
      <BottomTabsStack.Screen name="Home" component={Face} />
      <BottomTabsStack.Screen name="Settings" component={Youtube} />
    </BottomTabsStack.Navigator>
  );
}

// import { Container } from './styles';
const RootStack = createStackNavigator();
export default function Routes() {
  return (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen
      name="App"
      component={BottomTab}
      options={{
        animationEnabled: false
      }}
    />
  </RootStack.Navigator>
  );
}
