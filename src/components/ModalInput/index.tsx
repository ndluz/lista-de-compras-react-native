import React from "react";

import {
  Container,
  Shadow,
  Wrapper
} from "./styles";
import { TextInputProps } from "react-native";


interface IProps extends TextInputProps {
  placeholder: string;
}

export const ModalInput = ({ placeholder }: IProps ) => {
  return (
    <Wrapper>
      <Container placeholder={placeholder}>
      </Container>
      <Shadow />
    </Wrapper>
  );
};
