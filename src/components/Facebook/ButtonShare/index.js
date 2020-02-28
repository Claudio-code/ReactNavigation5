import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Text } from "react-native";
import {
  Container,
  ContainerLive,
  ContainerCheckIn,
  ContainerPhoto,
  ContainerButtons,
  TextButton,
  Separator
} from "./styles";

export default function ButtonShare() {

  return (
    <Container>

      <Separator />
      <ContainerButtons>
        <ContainerLive>
          <FontAwesome
            name="video-camera"
            size={20}
            color="#f44336"
          />
          <TextButton>Live</TextButton>
        </ContainerLive>

        <ContainerPhoto>
          <MaterialIcons
            name="photo-library"
            size={20}
            color="#4caf50"
          />
          <TextButton>Photo</TextButton>
        </ContainerPhoto>
        <ContainerCheckIn>
          <MaterialCommunityIcons
            name="map-marker"
            size={20}
            color="#e91e63"
          />
          <TextButton>Check-in</TextButton>
        </ContainerCheckIn>
      </ContainerButtons>
    </Container>
  );
}
