import React, { useState, useEffect } from 'react';
import { SafeAreaView, Linking, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from 'axios';

import theme from '../../styles/theme';
import Navigator from '../../components/Navigator';

import {
  Container,
  ButtonBack,
  ImageProfile,
  Name,
  Login,
  Button,
  ButtonText,
  Bio,
  Line,
  Content,
  PublicRepos,
  Followers,
  Following,
  Margin,
} from './styles';

const Github = () => {
  const [profile, setProfile] = useState([]);
  const navigation = useNavigation();
  const dim = Dimensions.get('screen');

  const handleGetProfile = async () => {
    const response = await api.get('https://api.github.com/users/guilhermeddc');

    setProfile(response.data);
  };

  useEffect(() => {
    handleGetProfile();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigator
        onPress={() => navigation.goBack()}
        backgroundColor={theme.colors.dark}
      />
      <Container>
        <ImageProfile source={{ uri: profile.avatar_url }} />
        <Name>{profile.name}</Name>
        <Login>{profile.login}</Login>
        <Button
          onPress={() => Linking.openURL('https://github.com/guilhermeddc')}>
          <ButtonText>Ver no Github</ButtonText>
        </Button>
        <Bio>{profile.bio}</Bio>
        <Line />
        <Content>
          <PublicRepos>
            Número de repositórios públicos: {profile.public_repos}
          </PublicRepos>
          <Followers>Followers: {profile.followers}</Followers>
          <Following>Following: {profile.following}</Following>
        </Content>
        <Margin />
      </Container>
    </SafeAreaView>
  );
};

export default Github;
