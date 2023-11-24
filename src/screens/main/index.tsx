import React from "react";

import { Container, Header, Input, InputWrapper, Title, Icon, Divider, ListInfoContainer } from "./styles";
import { InformationLabel } from "../../components/InformationLabel";

export const Main = () => {
  return (
    <Container>
        <Header>
          <Icon name="cart-outline"  />
          <Title>Lista de compras</Title>
        </Header>
        <Divider />
        <ListInfoContainer>
          <InformationLabel info="Item" value="9999999" type="COUNT"/>
          <InformationLabel info="Valor R$" value="9.999"  type="VALUE"/>
        </ListInfoContainer>
        <InputWrapper>
          <Input />
        </InputWrapper>
    </Container>
  );
};
