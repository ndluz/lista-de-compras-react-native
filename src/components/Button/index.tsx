import React from "react";
import { Container, Content, Shadow, TextButton } from "./styles";
import { TouchableOpacity } from "react-native";

interface IProps {
  text: string;
  action?: () => void;
}

export const Button = ({ text }: IProps) => {
  return (
    <Container>
      <Content>
        <TouchableOpacity>
          <TextButton>{text}</TextButton>
        </TouchableOpacity>
      </Content>
      <Shadow />
    </Container>
  );
};
