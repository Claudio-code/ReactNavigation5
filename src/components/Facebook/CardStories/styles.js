import styled from 'styled-components/native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const Container = styled.View`
  background-color: #FFF;
  margin-top: 4%;
  padding-top: 10%;
  padding-left: 3%;
  align-items: center;
`;

export const TextStories = styled.Text`
  align-self: center;
  margin-right: 4%;
  font-weight: bold;
  bottom: 24%;
  color: #424242;
`;

export const ImgStories = styled.Image`
  width: 120px;
  height: 220px;
  border-radius: 25px;
  margin-right: 10px;

`;

export const ImgPhotoStories = styled.Image`
  width: 30px;
  height: 30px;
  border-width: 12px;
  border-radius: 25px;
`;


export const Icon = styled(MaterialCommunityIcons)`
  align-self: center;
  color: #2979ff;
`;

export const ContainerImgStories = styled.View`
  bottom: 74%;
  left: 10%;
  background-color: #fff;
  align-items: center;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  border-width: 5px;
  border-color: #2979ff;
`;
