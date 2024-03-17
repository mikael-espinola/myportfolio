import React from "react";
import { Container, Text } from "./style";

function Rights() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <Container>
      <Text>© {year} Mikael Espínola. All rights reserved.</Text>
    </Container>
  );
}

export default Rights;
