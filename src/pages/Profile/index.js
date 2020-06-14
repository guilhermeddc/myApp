import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

import ProfileImage from '../../assets/images/profile.jpg';
import Navigator from '../../components/Navigator';
import BackGround from '../../components/Background';
import theme from '../../styles/theme';

import {
  Container,
  ImageProfile,
  Title,
  Descriprion,
  Summary,
  Button,
  Margin,
} from './styles';

const Profile = () => {
  const navigation = useNavigation();
  const dim = Dimensions.get('screen');

  return (
    <BackGround>
      <Navigator onPress={() => navigation.goBack()} />
      <Container>
        <ImageProfile source={ProfileImage} />
        <Title>Guilherme Rodrigues Gonçalves</Title>
        <Descriprion>
          Desenvolvedor FullStack | Node | Django | React | Vue | React Native |
          Flutter
        </Descriprion>
        <Summary>
          Entusiasta em tecnologia, fascinado por linhas de código, matemática,
          quebra-cabeças e por desafios. Atualmente atuando como desenvolvedor
          fullstack com react, reactnative, vuejs, nodejs, adonis e django.
        </Summary>
        <Margin />
      </Container>
    </BackGround>
  );
};

export default Profile;
