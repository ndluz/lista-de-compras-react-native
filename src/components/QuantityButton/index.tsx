import React from "react";

import { Container, Content, Icon, Shadow, Wrapper } from "./styles";

interface IProps {
  type: 'add' | 'remove'
}

export const QuantityButton = ({ type } : IProps) => {
  return (
    <Wrapper>
      <Container type={type}>
        <Content>
          <Icon name={type === 'add' ? 'plus' : 'minus'} />
        </Content>
      </Container>
      <Shadow />
    </Wrapper>
  );
};
