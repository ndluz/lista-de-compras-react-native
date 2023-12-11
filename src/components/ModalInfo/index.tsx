import React from "react";

import {
  Container,
  InfoText,
  Shadow,
  Wrapper
} from "./styles";

interface IProps{
  text: number;
  typeAction: (quantity: number) => void;
}

export const ModalIfo = ({ text, typeAction }: IProps) => {

  function handleInputChange(text: string) {
    let aux = text.replace(/[^0-9]/g, '');
    typeAction(Number(aux))
  }

  return (
    <Wrapper>
      <Container>
        <InfoText
        value={String(text)}        
        onChangeText={(text)=> handleInputChange(text)}
        keyboardType="number-pad"
        ></InfoText>
      </Container>
      <Shadow />
    </Wrapper>
  );
};
