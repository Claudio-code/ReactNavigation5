import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  /* flex-direction: row; */
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Separator = styled.View`
  width: 100%;
  margin-top: 4%;
  margin-bottom: 4%;
  border-top-width: 2px;
  border-top-color: #eeeeee;
`;

export const ContainerLive = styled.TouchableOpacity`
  flex-direction: row;
  /* align-items: center; */
  border-right-width: 2px;
  border-right-color: #eeeeee;
`;

export const ContainerPhoto = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const ContainerCheckIn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-left: 6%;
  border-left-width: 2px;
  border-left-color: #eeeeee;
`;

export const TextButton = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-left: 8%;
  color: #616161;
`;
