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

export const ModalInput = ({ placeholder, ...rest }: IProps ) => {
  return (
    <Wrapper>
      <Container placeholder={placeholder} {...rest}>
      </Container>
      <Shadow />
    </Wrapper>
  );
};
