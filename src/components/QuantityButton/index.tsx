import React from "react";

import { Container, Content, Icon, Shadow, Wrapper } from "./styles";

interface IProps {
  type: 'add' | 'remove'
  action: (type: 'add'| 'remove') => void;
}

export const QuantityButton = ({ type, action } : IProps) => {
  return (
    <Wrapper>
      <Container type={type}>
        <Content onPress={() => action(type)}>
          <Icon name={type === 'add' ? 'plus' : 'minus'} />
        </Content>
      </Container>
      <Shadow />
    </Wrapper>
  );
};
