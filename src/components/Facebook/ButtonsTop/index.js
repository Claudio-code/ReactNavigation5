import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Container, ButtonSearch, ButtonMessage } from "./styles";

export default function ButtonsTop() {
  function handle() {
    console.log("quai");
  }

  return (
    <Container>

      <ButtonSearch onPress={handle}>
        <MaterialIcons
          name="search"
          color="#616161"
          size={30}
          style={{
            padding: "1%",
          }}
        />
      </ButtonSearch>

      <ButtonMessage>
        <MaterialCommunityIcons
          name="facebook-messenger"
          color="#616161"
          size={30}
          style={{
            padding: "1%",
          }}
        />
      </ButtonMessage>

    </Container>
  );
}
