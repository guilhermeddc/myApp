import React, { useState, useEffect } from 'react';
import { SafeAreaView, Linking } from 'react-native';
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
      </Container>
    </SafeAreaView>
  );
};

export default Github;
