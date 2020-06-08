import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import theme from '../../styles/theme';

import { Container, Button, Title, Skill } from './styles';

const Skills = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Button onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" color={theme.colors.light} size={32} />
      </Button>

      <Title>Expertise</Title>

      <Skill style={{ backgroundColor: '#17BCEE', width: '70%' }}>React</Skill>
      <Skill style={{ backgroundColor: '#00D8FF', width: '80%' }}>
        React Native
      </Skill>
      <Skill style={{ backgroundColor: '#68B47D', width: '90%' }}>Vue</Skill>
      <Skill style={{ backgroundColor: '#689F63', width: '40%' }}>Node</Skill>
      <Skill style={{ backgroundColor: '#092E20', width: '70%' }}>Django</Skill>
      <Skill style={{ backgroundColor: '#27B1EF', width: '40%' }}>
        Flutter
      </Skill>
      <Skill style={{ backgroundColor: '#E44C21', width: '90%' }}>Html</Skill>
      <Skill style={{ backgroundColor: '#254DE4', width: '80%' }}>CSS</Skill>
      <Skill
        style={{
          backgroundColor: '#F8DF18',
          width: '70%',
          color: theme.colors.dark,
        }}>
        Javascript
      </Skill>
      <Skill style={{ backgroundColor: '#F1502F', width: '80%' }}>Git</Skill>
    </Container>
  );
};

export default Skills;
