import React from "react";
import { Container, Content, Shadow, TextButton } from "./styles";

interface IProps {
  text: string;
  action?: () => void;
}

export const Button = ({ text }: IProps) => {
  return (
    <Container>
      <Content>
        <TextButton>{text}</TextButton>
      </Content>
      <Shadow />
    </Container>
  );
};
