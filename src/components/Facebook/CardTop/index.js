import React from "react";
import ButtonShare from "../ButtonShare";
import {
  Container,
  ImageUser,
  ContainerForm,
  ContainerInput,
  Input
} from "./styles";

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
            placeholder="What is on your mind?"
          />
        </ContainerInput>
      </ContainerForm>
      <ButtonShare/>
    </Container>
  );
}
