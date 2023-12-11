import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface IContentProps {
  type: "COUNT" | "VALUE";
}

export const Container = styled.View``;

export const Content = styled.View<IContentProps>`
  background-color: #f7cb46;
  width: ${({ type }) => (type === "COUNT" ? RFValue(120) : RFValue(150))}px;
  height: ${RFValue(40)}px;
  z-index: 1;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 2px solid #000;
`;

export const Shadow = styled.View<IContentProps>`
  margin-left: 5px;
  margin-top: ${RFValue(-33)}px;
  width: ${({ type }) => (type === "COUNT" ? RFValue(120) : RFValue(150))}px;
  background-color: #000;
  height: ${RFValue(40)}px;
  border-radius: 20px;
`;

export const InfoText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 500;
`;
