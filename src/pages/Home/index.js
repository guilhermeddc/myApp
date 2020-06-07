import React from 'react';
import { View } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import BackGround from '../../components/Background';
import theme from '../../styles/theme';
import { Container, Title, SubTitle, Button, ButtonText } from './styles';

const Home = () => {
  const navigation = useNavigation();

  return (
    <BackGround>
      <Container>
        <Title>Guilherme Rodrigues</Title>
        <SubTitle>Web Designer, Desenvolvedor Web & Mobile</SubTitle>

        <Button
          style={{ backgroundColor: theme.colors.dark }}
          onPress={() => navigation.navigate('Github')}>
          <View>
            <AntDesign name="github" size={24} color={theme.colors.light} />
          </View>
          <ButtonText>GitHub</ButtonText>
        </Button>

        <Button style={{ backgroundColor: '#0277b5' }}>
          <View>
            <FontAwesome name="linkedin" size={24} color={theme.colors.light} />
          </View>
          <ButtonText>Linkedin</ButtonText>
        </Button>

        <Button style={{ backgroundColor: '#DD3477' }}>
          <View>
            <FontAwesome
              name="instagram"
              size={24}
              color={theme.colors.light}
            />
          </View>
          <ButtonText>Instagram</ButtonText>
        </Button>

        <Button style={{ backgroundColor: '#0870E6' }}>
          <View>
            <FontAwesome name="facebook" size={24} color={theme.colors.light} />
          </View>
          <ButtonText>Facebook</ButtonText>
        </Button>

        <Button style={{ backgroundColor: '#249086' }}>
          <View>
            <FontAwesome name="whatsapp" size={24} color={theme.colors.light} />
          </View>
          <ButtonText>Whatsapp</ButtonText>
        </Button>
      </Container>
    </BackGround>
  );
};

export default Home;
