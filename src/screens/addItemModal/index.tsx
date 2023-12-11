import React, { useState } from "react";

import {
  Container,
  Content,
  Title,
  ItemLabel,
  QuantityLabel,
  QuantityWrapper,
} from "./styles";

import {
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { ModalInput } from "../../components/ModalInput";
import { QuantityButton } from "../../components/QuantityButton";
import { ModalIfo } from "../../components/ModalInfo";
import { Button } from "../../components/Button";
import { IShopItem } from "../main";

interface IProps {
  cancelAction: () => void;
  itemList: Array<IShopItem>;
  setItemList: (itemList: Array<IShopItem>) => void;
}

export const AddItemModal = ({ cancelAction, setItemList, itemList }: IProps) => {
  const [quantity, setQuantity] = useState(1);
  const [itemName, setItemName] = useState("");

  function handleQuantity(type: "add" | "remove") {
    if (type === "add") {
      setQuantity(quantity + 1);
      return;
    }

    if (type === "remove") {
      if (quantity <= 1) return;
      setQuantity(quantity - 1);
    }
  }

  function handleSaveItem() {

      if (itemName === '') {
        alert('Você esqueceu de adicionar o nome do seu produto!');
        return;
      }
      setItemList([...itemList, {
        id: Date.now(), 
        purchased: false,
        quantity, 
        itemName, 
        price: 0.00
      }])
      cancelAction();
  }
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container behavior='padding'>
        <Content>
          <Title>Adicionar item</Title>
          <ItemLabel>Nome do produto:</ItemLabel>
          <ModalInput
            placeholder='Ex: café'
            value={itemName}
            inputMode="text"
            onChangeText={(name) => setItemName(name)}
            autoFocus={true}
          />
          <QuantityLabel>Quantidade: </QuantityLabel>

          <QuantityWrapper>
            <QuantityButton type='remove' action={handleQuantity} />
            <ModalIfo text={quantity} typeAction={setQuantity}  />
            <QuantityButton type='add' action={handleQuantity} />
          </QuantityWrapper>
          <Button text='Salvar' color='#0CCA4A' action={handleSaveItem}/>
          <Button text='Cancelar' color='#E24330' action={cancelAction} />
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
};
