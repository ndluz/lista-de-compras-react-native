import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Content = styled.View`
  width: ${RFValue(300)}px;
  height: ${RFValue(60)}px;
  background-color: #E24330;
  border-radius: 20px;
  z-index: 1;
  justify-content: center;
`;

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: -30,
  delayPressOut: -10,
  delayPressIn: -30,
})`
  width: ${RFValue(300)}px;
  height: 60px;
  background-color: red;
  border-radius: 20px;
  z-index: 1;
`;
export const Shadow = styled.View`
  width: ${RFValue(300)}px;
  height: 60px;
  background-color: black;
  border-radius: 20px;

  margin-left: 8px;
  margin-top: -50px;
`;

export const TextButton = styled.Text`
  text-align: center;
  font-size: ${RFValue(24)}px;
  font-weight: bold;
  color: white;
`;
