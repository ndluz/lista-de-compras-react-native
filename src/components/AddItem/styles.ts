import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  background-color: #0cca4a;
  border-radius: 50px;
  z-index: 1;
  border: 1px solid black;
  justify-content: center;
`;

export const Content = styled.TouchableOpacity`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  justify-content: center;
`;

export const Shadow = styled.View`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  background-color: #000;
  border-radius: 50px;
  margin-top: ${RFValue(-58)}px;
  margin-left: ${RFValue(2)}px;
`;

export const Icon = styled(Feather)`
  text-align: center;
  font-size: ${RFValue(17)}px;
  color: #fff;
`;

export const Wrapper = styled.View`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  border-radius: 50px;
  
`;
