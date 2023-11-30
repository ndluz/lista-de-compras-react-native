import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { Dimensions } from "react-native";

interface IContentProps {
  color: string;
}

export const Content = styled.View<IContentProps>`
  width: ${RFValue(300, Dimensions.get('window').height)}px;
  height: ${RFValue(45)}px;
  background-color: ${({color}) => color};
  border-radius: 20px;
  z-index: 1;
  justify-content: center;
  border: 2px solid black;
`;

export const Container = styled.View`
  width: ${RFValue(300, Dimensions.get('window').height)}px;
  
  height: ${RFValue(45)}px;
  border-radius: 20px;
  z-index: 1;
`;
export const Shadow = styled.View`
  width: ${RFValue(300, Dimensions.get('window').height)}px;
  height: ${RFValue(45)}px;
  background-color: black;
  border-radius: 20px;

  margin-left: 5px;
  margin-top:  ${RFValue(-40)}px;
`;

export const TextButton = styled.Text`
  text-align: center;
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  color: white;
`;
