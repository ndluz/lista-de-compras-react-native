import styled from "styled-components/native";
import { Dimensions, Platform } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.KeyboardAvoidingView`
  background: rgba(0, 0, 0, 0.5);
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  width: 90%; 
  background-color: #f9f5f2;
  justify-content: center;
  align-items: center;

  gap: ${RFValue(20)}px;
  padding: 40px 20px 40px 20px;

  border-radius: 20px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
`;

export const ItemLabel = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 500;
  width: 100%;
  padding-left: 20px;
`;


export const QuantityLabel = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 500;
  width: 100%;
  padding-left: 20px;
`;

export const QuantityWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
