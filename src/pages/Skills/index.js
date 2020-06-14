import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

import theme from '../../styles/theme';
import Navigator from '../../components/Navigator';
import BackGround from '../../components/Background';

import { Container, Title, Skill, Margin } from './styles';

const Skills = () => {
  const navigation = useNavigation();
  const dim = Dimensions.get('screen');

  return (
    <BackGround>
      <Navigator onPress={() => navigation.goBack()} />
      <Container>
        <Title>Expertises</Title>

        <Skill style={{ backgroundColor: '#17BCEE', width: '69%' }}>
          React
        </Skill>
        <Skill style={{ backgroundColor: '#00D8FF', width: '83%' }}>
          React Native
        </Skill>
        <Skill style={{ backgroundColor: '#68B47D', width: '80%' }}>Vue</Skill>
        <Skill style={{ backgroundColor: '#689F63', width: '63%' }}>Node</Skill>
        <Skill style={{ backgroundColor: '#092E20', width: '72%' }}>
          Django
        </Skill>
        <Skill style={{ backgroundColor: '#27B1EF', width: '56%' }}>
          Flutter
        </Skill>
        <Skill style={{ backgroundColor: '#E44C21', width: '83%' }}>Html</Skill>
        <Skill style={{ backgroundColor: '#254DE4', width: '83%' }}>CSS</Skill>
        <Skill
          style={{
            backgroundColor: '#F8DF18',
            width: '74%',
            color: theme.colors.dark,
          }}>
          Javascript
        </Skill>
        <Skill style={{ backgroundColor: '#F1502F', width: '75%' }}>Git</Skill>
        <Margin />
      </Container>
    </BackGround>
  );
};

export default Skills;
