import React from "react";

type InfoType =  "COUNT" | "VALUE"


interface IProps {
  info: string;
  value: string;
  type: InfoType
}

import { Container, InfoText, Shadow, Content } from "./styles";

export const InformationLabel = ({ info, value, type }: IProps) => {
  return (
    <Container>
      <Content
      type={type}
      >
        <InfoText>{info + " " + value}</InfoText>
      </Content>
      <Shadow type={type}/>
    </Container>
  );
};
