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

export const ListItem = () => {
  return (
    <>
      <Container>
        <ItemSeparator>
          <ItemText>Café</ItemText>
        </ItemSeparator>
        <ItemSeparator>
          <ActionButton>
            <RemoveIcon name='x' />
          </ActionButton>
          <ActionButton>
            <ConfirmIcon name='check' />
          </ActionButton>
        </ItemSeparator>
      </Container>
      <Shadow />
    </>
  );
};
