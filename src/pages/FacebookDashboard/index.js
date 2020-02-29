import React from "react";

import { Container } from './styles';
import CardTop from "../../components/Facebook/CardTop";
import CardStories from "../../components/Facebook/CardStories";

export default function FacebookDashboard() {

  return (
    <Container>
      <CardTop />
      <CardStories />
    </Container>
  );
}
