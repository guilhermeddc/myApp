import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import ProfileImage from '../../assets/images/profile.jpg';
import theme from '../../styles/theme';

import {
  Container,
  ImageProfile,
  Title,
  Descriprion,
  Summary,
  Button,
} from './styles';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Button onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" color={theme.colors.light} size={32} />
      </Button>
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
    </Container>
  );
};

export default Profile;
