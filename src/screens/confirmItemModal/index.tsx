import React, { SetStateAction, useState } from "react";

import { Container, Content, Title, Item } from "./styles";
import { ModalInput } from "../../components/ModalInput";
import { Button } from "../../components/Button";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { IShopItem } from "../main";

interface IProps {
  item: IShopItem
  cancelAction: () => void;
  saveBalance: (amount: number) => void;
  updateItem: (id: string, price: number) => void;
}

export const ConfirmItemModal = ({ item,  cancelAction, saveBalance, updateItem } : IProps) => {
  const [price, setPrice] = useState('');

  function itemBalance(id: number, price: String) {
    saveBalance(Number(price) * item.quantity);
    cancelAction();
    updateItem(String(id), Number(Number(price).toFixed(2)));
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container behavior='padding'>
        <Content>
          <Title>Você está confirmando o item:</Title>
          <Item>{`${item.quantity}x ${item.itemName}`}</Item>
          <ModalInput
            textAlign='center'
            placeholder='Valor em R$ por unidade'
            keyboardType='decimal-pad'
            value={`R$ ${price}`}
            onChangeText={(price) => setPrice(`${(price.split(' ')[1]).replace(/,/g, '.')}`)}
            autoFocus={true}
          />
          <Button text='Confirmar' color='#0CCA4A'action={( ) => itemBalance(item.id, price)} />
          <Button text='Cancelar' color='#E24330' action={cancelAction} />
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}
