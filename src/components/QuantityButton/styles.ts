import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

import { Dimensions } from "react-native";


interface IContainerProps {
  type: 'add' | 'remove'
}
export const Container = styled.View<IContainerProps>`

  width: ${RFValue(80, Dimensions.get('window').height)}px;
  height: ${RFValue(30)}px;
  background-color: ${({ type }) => type === 'add' ? '#0CCA4A' : '#E24330'};
  border-radius: 50px;
  z-index: 1;
  border: 1px solid black;
  justify-content: center;

`;

export const Content = styled.TouchableOpacity`
  width: ${RFValue(80, Dimensions.get('window').height)}px;
  
  height: ${RFValue(30)}px;
  justify-content: center;
`;

export const Shadow = styled.View`
  width: ${RFValue(80, Dimensions.get('window').height)}px;
  
  height: ${RFValue(30)}px;
  background-color: #000;
  border-radius: 50px;
  margin-top: ${RFValue(-25)}px;
  margin-left: ${RFValue(5)}px;
`;

export const Icon = styled(Feather)`
  text-align: center;
  font-size: ${RFValue(18)}px;
  color: #fff;
`;

export const Wrapper = styled.View`
  display: flex; 
  flex-direction: column;
`;
