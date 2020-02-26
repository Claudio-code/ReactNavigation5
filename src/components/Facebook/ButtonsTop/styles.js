import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  /* margin-right: 2%; */
  flex-direction: row;
  align-items: center;
`;

export const ButtonSearch = styled(RectButton)`
  background-color: #eeeeee;
  border-radius: 50px;
  align-items: center;
`;

export const ButtonMessage = styled(RectButton)`
  margin-left: 7%;
  background-color: #eeeeee;
  border-radius: 50px;
  align-items: center;

`;
