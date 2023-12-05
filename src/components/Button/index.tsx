import React from "react";
import { Container, Content, Shadow, TextButton } from "./styles";
import { TouchableOpacity } from "react-native";

interface IProps {
  text: string;
  color: string;
  action?: () => void;
}

export const Button = ({ text, color, action }: IProps) => {
  return (
    <Container>
      <Content color={color}>
        <TouchableOpacity onPress={action} style={{width: '100%'}}>
          <TextButton>{text}</TextButton>
        </TouchableOpacity>
      </Content>
      <Shadow />
    </Container>
  );
};
