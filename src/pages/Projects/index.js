import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, Linking } from 'react-native';

import Guilhermeddc from '../../assets/images/guilhermeddc.jpeg';
import APoderosaSM from '../../assets/images/aPoderosaSM.jpeg';
import CAEnaRede from '../../assets/images/CAEnaRede.jpeg';
import Navigator from '../../components/Navigator';
import BackGround from '../../components/Background';

import {
  Container,
  Header,
  Button,
  Title,
  ProjectScrollView,
  Card,
  ProjectImage,
  CardTitle,
  CardButton,
  CardButtonText,
  Margin,
} from './styles';

const Projects = () => {
  const navigation = useNavigation();
  const dim = Dimensions.get('screen');

  return (
    <BackGround>
      <Navigator onPress={() => navigation.goBack()} />
      <Container>
        <Header>
          <Title>Projetos realizados</Title>
        </Header>

        <ProjectScrollView>
          <Margin />
          <Card>
            <ProjectImage source={Guilhermeddc} />
            <CardTitle>Meu site portifólio</CardTitle>
            <CardButton
              onPress={() => Linking.openURL('https://guilhermeddc.com.br/')}>
              <CardButtonText>Ir para o site</CardButtonText>
            </CardButton>
          </Card>
          <Card>
            <ProjectImage source={APoderosaSM} />
            <CardTitle>Site A Poderosa SM</CardTitle>
            <CardButton
              onPress={() => Linking.openURL('http://www.apoderosasm.com.br/')}>
              <CardButtonText>Ir para o site</CardButtonText>
            </CardButton>
          </Card>
          <Card>
            <ProjectImage source={CAEnaRede} />
            <CardTitle>Aplicativo CAE na Rede</CardTitle>
            <CardButton
              onPress={() =>
                Linking.openURL(
                  'https://play.google.com/store/apps/details?id=br.com.iffar.cae_na_rede',
                )
              }>
              <CardButtonText>Ir para o aplicativo</CardButtonText>
            </CardButton>
          </Card>
        </ProjectScrollView>
        <Margin />
      </Container>
    </BackGround>
  );
};

export default Projects;
