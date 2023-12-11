import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { MaterialCommunityIcons } from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #F9F5F2;
`;

export const Divider = styled.View`
  border: 1px solid #282725;
  width: 100%;
`

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(50)}px;

  display: flex;
  flex-direction: row;
  background-color: #F9F5F2;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const Title = styled.Text`
  font-weight: bold;
  text-align: center;
  color: #282725;
  font-size: ${RFValue(24)}px;

`
export const ListInfoContainer = styled.View`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-around;

margin-top: ${RFValue(24)}px;
`

export const Icon = styled(MaterialCommunityIcons)`
  text-align: center;
  font-size: ${RFValue(30)}px;
  color: #282725;
`

export const InputWrapper = styled.View`
  display: flex;
  
  width: 90%;
`;

export const Input = styled.TextInput.attrs({})`
`;

export const Footer = styled.View`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: ${RFValue(50)}px;
  flex-direction: column;
  gap: 20px;
`;


export const Action = styled.View`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
`;

export const Separator = styled.View`
  height: 10px;
`;