import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import { Container } from './styles';
import Routes from './routes';
export default function Index() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
