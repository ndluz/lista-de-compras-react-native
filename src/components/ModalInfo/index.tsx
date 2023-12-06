import React from "react";

import {
  Container,
  InfoText,
  Shadow,
  Wrapper
} from "./styles";

interface IProps {
  text: string | number;
}

export const ModalIfo = ({ text }: IProps) => {
  return (
    <Wrapper>
      <Container>
        <InfoText>{text}</InfoText>
      </Container>
      <Shadow />
    </Wrapper>
  );
};
