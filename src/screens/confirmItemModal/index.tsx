import React from "react";

import { Container, Content, Title, Item } from "./styles";
import { ModalInput } from "../../components/ModalInput";
import { Button } from "../../components/Button";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const ConfirmItemModal = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container behavior='padding'>
        <Content>
          <Title>Você está confirmando o item:</Title>
          <Item>Café</Item>
          <ModalInput
            textAlign='center'
            placeholder='Valor em R$ por unidade'
            keyboardType='numeric'
          />
          <Button text='Confirmar' color='#0CCA4A' />
          <Button text='Cancelar' color='#E24330' />
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
};
