import React from "react";

import {
  Container,
  ItemSeparator,
  ItemText,
  RemoveIcon,
  ConfirmIcon,
  Shadow,
  ActionButton,
} from "./styles";
import { IShopItem } from "../../screens/main";

interface IProps {
  item: IShopItem;
  handlePurchaseAction: (item: IShopItem) => void;
  handleCancelAction: () => void;
}

export const ListItem = ({ item,  handleCancelAction, handlePurchaseAction,  }: IProps) => {
  return (
    <>
      <Container key={item.id} purchased={item.purchased}>
        <ItemSeparator>
          <ItemText purchased={item.purchased}>{`${item.quantity}x  ${item.itemName}` }</ItemText>
        </ItemSeparator>
        <ItemSeparator>
          <ActionButton onPress={handleCancelAction}>
            <RemoveIcon name='x'  />
          </ActionButton>
          <ActionButton   disabled={item.purchased} onPress={ () => handlePurchaseAction(item)}>
            <ConfirmIcon name='check' />
          </ActionButton>
        </ItemSeparator>
      </Container>
      <Shadow />
    </>
  );
};
