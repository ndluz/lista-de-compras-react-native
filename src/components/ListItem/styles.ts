import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { Dimensions } from "react-native";

interface IProps {
  purchased: boolean;
}

export const Container = styled.View<IProps>`
  background: ${({purchased}) => purchased ? '#D2CDC9' : '#fff'};
  height: ${RFValue(50)}px;
  width: ${RFValue(350, Dimensions.get('window').height)}px;
  border-radius: 20px;
  border: 2px solid black;
  z-index: 1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Shadow = styled.View`
  width: ${RFValue(350, Dimensions.get('window').height)}px;
  background: black;
  height: ${RFValue(50)}px;
  border-radius: 20px;
  margin-left: 5px;
  margin-top: ${RFValue(-47)}px;
`;

export const ActionButton  = styled.TouchableOpacity``

export const ItemSeparator = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  max-width: ${RFValue(180)}px;
`;

export const ItemText = styled.Text<IProps>`
  text-align: left;
  font-size: ${RFValue(18)}px;
  font-weight: 500;
  ${({purchased}) => purchased && css`
    text-decoration: line-through;
  `}
`;

export const RemoveIcon = styled(Feather)`
  color: #e24330;
  font-size: 30px;
  
`;

export const ConfirmIcon = styled(Feather)`
  color: #0CCA4A;
  font-size: 30px;
`;
