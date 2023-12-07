import React from "react";

import { Container, Content, Icon, Shadow, Wrapper } from "./styles";

interface IProps {
  action: () => void;
}

export const AddItem = ({ action }: IProps) => {
  return (
    <Wrapper>
      <Container>
        <Content onPress={action}>
          <Icon name='plus' />
        </Content>
      </Container>
      <Shadow />
    </Wrapper>
  );
};
