import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { Dimensions, TextInputProps } from "react-native";

export const Container = styled.TextInput<TextInputProps>`
  width: ${RFValue(300, Dimensions.get('window').height)}px;
  background: #fff;
  height: ${RFValue(50)}px;
  border-radius: 20px;
  border: 2px solid black;
  z-index: 1;

  font-size: ${RFValue(16)}px;  
  color: #282725;
  font-weight: 500;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;

  font-size: 16px;

`;

export const Shadow = styled.View`
  width: ${RFValue(300, Dimensions.get('window').height)}px;
  
  
  background: black;
  height: ${RFValue(50)}px;
  border-radius: 20px;
  margin-left: 5px;
  margin-top: ${RFValue(-45)}px;
`;

export const Wrapper = styled.View`
  display: flex; 
  flex-direction: column;
`;

