import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #FFF;
  padding: 4%;
`;

export const ImageUser = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50px;
`;

export const ContainerForm = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#424242"
})`
  font-size: 16px;
  margin-left: 3%;
`;

export const ContainerInput = styled.View`
  border-width: 1px;
  border-color: #bdbdbd;
  border-radius: 50px;

  /* padding: 10px; */
  width: 80%;
`;
