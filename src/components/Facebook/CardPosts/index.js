import React from 'react';
import { View, Text, Image } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import imgpost from '../../../assets/post.png';
import {
  Container,
  ProfilePost,
  HeaderPost,
  PostDate,
  ProfileName,
  ButtonsRigth,
  ImgPost,
  ButtonText,
  ButtonsPost,
  ButtonComment,
  ButtonLike,
  ButtonShare,
} from './styles';

export default function CardPosts() {

  return (
    <Container>
      <HeaderPost>
        <View
          style={{
            flexDirection: 'row'
          }}
        >
          <ProfilePost
            source={{
              uri: "https://api.adorable.io/avatars/40/$%7Bdata.provider.name%7D.png"
            }}
          />
          <View>
            <ProfileName>
              Oracle Developers
            </ProfileName>
            <View
              style={{
                flexDirection: 'row'
              }}
            >
              <PostDate>
                6 h -
              </PostDate>
              <FontAwesome
                name="globe"
                color="#9e9e9e"
                size={20}
              />
            </View>
          </View>
        </View>
        <ButtonsRigth>
            <MaterialIcons
              name="star"
              color="#2979ff"
              size={22}
            />

            <MaterialIcons
              name="more-horiz"
              color="#9e9e9e"
              size={22}
              style={{ marginLeft: '2%' }}
            />
        </ButtonsRigth>
      </HeaderPost>
      <Text>
        Learn how to build low code applications on Autonomous
        Transaction Processing in the Oracle Database.
      </Text>
      <ImgPost
        source={imgpost}
        style={{
          resizeMode: 'contain'
        }}
      />
      <View
        style={{
          borderWidth: 0.7,
          borderColor: '#9e9e9e',
          bottom: '35%'
        }}
      />
      <ButtonsPost>
        <ButtonLike>
          <AntDesign
            name="like2"
            color="#757575"
            size={22}
          />
          <ButtonText>
            Like
          </ButtonText>
        </ButtonLike>

        <ButtonComment>
          <MaterialCommunityIcons
            name="comment-outline"
            color="#757575"
            size={22}
          />
          <ButtonText>
            Comment
          </ButtonText>
        </ButtonComment>

        <ButtonShare>
          <MaterialCommunityIcons
            name="share-outline"
            color="#757575"
            size={22}
          />
          <ButtonText>
            Share
          </ButtonText>
        </ButtonShare>
      </ButtonsPost>
    </Container>
  );
}
