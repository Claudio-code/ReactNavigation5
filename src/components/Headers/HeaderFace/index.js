import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';

import FacebookLogo from '../../../assets/facebookLogo.png';
import ButtonsTop from '../../Facebook/ButtonsTop';
import {
  Container,
  Logo,
  ContainerHeaderTop,
} from './styles';

export default function HeaderFace() {
  return (
    <Container>
      <StatusBar
        backgroundColor="#FFF"
        barStyle="dark-content"
      />
      <ContainerHeaderTop>

        <Logo source={FacebookLogo} />
        <ButtonsTop />
      </ContainerHeaderTop>
    </Container>
  );
}
