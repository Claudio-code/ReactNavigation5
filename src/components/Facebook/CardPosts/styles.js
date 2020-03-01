import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  background-color: #FFF;
  margin-top: 5%;
  padding: 3%;
  height: 38%;
`;

export const ProfilePost = styled.Image`
  border-radius: 50px;
  margin-right: 4%;

  width: 40px;
  height: 40px;
`;

export const HeaderPost = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4%;
`;

export const ProfileName = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const PostDate = styled.Text`
  color: #9e9e9e;
  margin-right: 5%;
`;

export const ButtonsRigth = styled.View`
  flex-direction: row;
`;

export const ImgPost = styled.Image`
  margin-top: -100px;
  width: ${Dimensions.get('screen').width - 30}px;
  height: 400px;
`;

export const ButtonsPost = styled.View`
  flex-direction: row;
  bottom: 20%;
  justify-content: space-between;
`;

export const ButtonText = styled.Text`
  color: #757575;
  margin-left: 4%;
`;

export const ButtonLike = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonComment = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonShare = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;



