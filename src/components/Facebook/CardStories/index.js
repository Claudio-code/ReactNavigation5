import React from 'react';
import { FlatList, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import stories1 from '../../../assets/stories.jpg';
import stories2 from '../../../assets/stories2.png';
import {
  Container,
  ImgStories,
  Icon,
} from './styles';

const DATA = [
  {
    id: 1,
    title: 'First Item',
    img: stories1
  },
  {
    id: 2,
    title: 'Second Item',
    img: stories2
  },
  {
    id: 3,
    title: 'Third Item',
    img: stories2
  },
  {
    id: 4,
    title: 'First Item',
    img: stories1
  },
  {
    id: 5,
    title: 'Second Item',
    img: stories2
  },
  {
    id: 6,
    title: 'Third Item',
    img: stories2
  },
];

export default function CardStories() {
  return (
    <Container>
      <FlatList
        data={DATA}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        renderItem={({ item }) => (
          <RectButton>
            <ImgStories
              source={item.img}
            />
            {item.id === 1 && (
              <Icon
                name="plus"
                size={22}
              />
            )}
          </RectButton>
        )}
        keyExtractor={item => item.id}
      />
    </Container>
  );
}
