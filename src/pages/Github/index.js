import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import api from 'axios';

import {
  Container,
  ImageProfile,
  Name,
  Login,
  Button,
  ButtonText,
  Bio,
  Line,
} from './styles';

const Github = () => {
  const [profile, setProfile] = useState([]);

  const handleGetProfile = async () => {
    const response = await api.get('https://api.github.com/users/guilhermeddc');

    setProfile(response.data);
  };

  useEffect(() => {
    handleGetProfile();
  }, []);

  console.log(profile.avatar_url);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <ImageProfile source={{ uri: profile.avatar_url }} />
        <Name>{profile.name}</Name>
        <Login>{profile.login}</Login>
        <Button>
          <ButtonText>Ver perfil online</ButtonText>
        </Button>
        <Bio>{profile.bio}</Bio>
        <Line />
      </Container>
    </SafeAreaView>
  );
};

export default Github;
