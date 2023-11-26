import React from 'react';

import { Container, Icon, Shadow } from './styles';
import { TouchableOpacity } from "react-native";

export const  AddItem = () => {
  return (
    <>
    <Container>
      <TouchableOpacity>
        <Icon name="plus" />
      </TouchableOpacity>
    </Container>
    <Shadow />
    </>
  )
}