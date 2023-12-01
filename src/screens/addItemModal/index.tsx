import React from "react";

import {
  Container,
  Content,
  Title,
  ItemLabel,
  QuantityLabel,
  QuantityWrapper,
} from "./styles";

import {
  Button as ButtonNative,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { ModalInput } from "../../components/ModalInput";
import { QuantityButton } from "../../components/QuantityButton";
import { ModalIfo } from "../../components/ModalInfo";
import { Button } from "../../components/Button";

export const AddItemModal = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container behavior='padding'>
        <Content>
          <Title>Adicionar item</Title>
          <ItemLabel>Nome do produto:</ItemLabel>
          <ModalInput placeholder='Ex: café' />
          <QuantityLabel>Quantidade: </QuantityLabel>

          <QuantityWrapper>
            <QuantityButton type='remove' />
            <ModalIfo text={1} />
            <QuantityButton type='add' />
          </QuantityWrapper>
          <Button text='Salvar' color='#0CCA4A' />
          <Button text='Cancelar' color='#E24330' />
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
};
