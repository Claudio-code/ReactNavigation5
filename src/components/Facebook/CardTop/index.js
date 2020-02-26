import React from 'react';
import { View , Text} from 'react-native';

import {
  Container,
  ImageUser,
  ContainerForm,
  ContainerInput,
  Input
} from './styles';

export default function CardTop() {
  return (
    <Container>
      <ContainerForm>
        <ImageUser
          source={{
            uri: 'https://api.adorable.io/avatars/40/$%7Bdata.provider.name%7D.png'
          }}
        />
        <ContainerInput>
          <Input
            placeholder="No que você está pensando?"
          />
        </ContainerInput>
      </ContainerForm>
    </Container>
  );
}
