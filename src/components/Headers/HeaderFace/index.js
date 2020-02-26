import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import FacebookLogo from '../../../assets/facebookLogo.png';
import {
  Container,
  Logo,
  ContainerHeaderTop,
  ButtonSearch
} from './styles';

export default function HeaderFace() {
  return (
    <Container>
      <StatusBar
        backgroundColor="#FFF"
        barStyle="dark-content"
      />
      <Logo source={FacebookLogo} />
    </Container>
  );
}
