import React from 'react';
import { FlatList, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import stories1 from '../../../assets/stories.jpg';
import stories2 from '../../../assets/stories2.png';
import {
  Container,
  ContainerImgStories,
  ImgPhotoStories,
  TextStories,
  ImgStories,
  Icon,
} from './styles';

const DATA = [
  {
    id: 1,
    title: 'Text stories',
    img: stories2
  },
  {
    id: 2,
    title: 'Second stories',
    img: stories2
  },
  {
    id: 3,
    title: 'Third stories',
    img: stories2
  },
  {
    id: 4,
    title: 'Text stories',
    img: stories2
  },
  {
    id: 5,
    title: 'Second stories',
    img: stories2
  },
  {
    id: 6,
    title: 'Third stories',
    img: stories2
  },
];

export default function CardStories() {
  return (
    <Container>
      <FlatList
        data={DATA}
        horizontal={true}

        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <RectButton>
            <ImgStories
              source={item.img}
            />
            {item.id === 1 ? (
              <ContainerImgStories
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 0
                }}
              >
                <Icon
                  name="plus"
                  size={22}
                />
              </ContainerImgStories>
            ) : (
              <ContainerImgStories>
                <ImgPhotoStories
                  source={{
                    uri: 'https://api.adorable.io/avatars/40/$%7Bdata.provider.name%7D.png'
                  }}
                />
              </ContainerImgStories>
            )}
            <TextStories>
              {item.title}
            </TextStories>
          </RectButton>
        )}
        keyExtractor={item => String(item.id)}
      />
    </Container>
  );
}
