import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  background: #fff;
  height: ${RFValue(65)}px;
  width: ${RFValue(350)}px;
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
  width: 100%;
  background: black;
  height: ${RFValue(65)}px;
  width: ${RFValue(350)}px;
  border-radius: 20px;
  margin-left: 10px;
  margin-top: ${RFValue(-58)}px;
`;

export const ActionButton  = styled.TouchableOpacity``

export const ItemSeparator = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px
`;

export const ItemText = styled.Text`
  text-align: center;
  font-size: ${RFValue(18)}px;
  font-weight: 500;
`;

export const RemoveIcon = styled(Feather)`
  color: #e24330;
  font-size: 30px;
`;

export const ConfirmIcon = styled(Feather)`
  color: #0CCA4A;
  font-size: 30px;
`;
