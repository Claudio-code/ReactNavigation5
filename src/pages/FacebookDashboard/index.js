import React from "react";

import { Container } from './styles';
import CardTop from "../../components/Facebook/CardTop";
import CardStories from "../../components/Facebook/CardStories";
import CardPosts from "../../components/Facebook/CardPosts";

export default function FacebookDashboard() {

  return (
    <Container>
      <CardTop />
      <CardStories />
      <CardPosts />
    </Container>
  );
}
