import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  background: #fff;
  width: ${RFValue(95)}px;
  height: ${RFValue(40)}px;
  border-radius: 20px;
  border: 2px solid black;
  z-index: 1;

  font-size: ${RFValue(16)}px;
  color: #282725;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoText = styled.TextInput`
  font-size: ${RFValue(16)}px;
  color: #282725;
  font-weight: bold;
  text-align: center;
`;

export const Shadow = styled.View`
  width: 100%;
  background: black;
  width: ${RFValue(95)}px;
  height: ${RFValue(40)}px;
  border-radius: 20px;
  margin-left: 5px;
  margin-top: ${RFValue(-35)}px;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
`
