import React, { useEffect, useState } from 'react';
import { View, Linking } from 'react-native';
import { AppLoading } from 'expo';
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';

import Logo from '../../assets/images/logo.png';
import BackGround from '../../components/Background';
import theme from '../../styles/theme';
import {
  Container,
  LogoStyled,
  Title,
  SubTitle,
  ContentScrollView,
  ButtonContent,
  ButtonContentText,
  ButtonScrollView,
  Button,
  ButtonText,
  Margin,
} from './styles';

const Home = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handlefontLoading = async () => {
    await Font.loadAsync({
      light: require('../../../assets/fonts/Montserrat-Light.ttf'),
      medium: require('../../../assets/fonts/Montserrat-Medium.ttf'),
      regular: require('../../../assets/fonts/Montserrat-Regular.ttf'),
      semiBold: require('../../../assets/fonts/Montserrat-SemiBold.ttf'),
      bold: require('../../../assets/fonts/Montserrat-Bold.ttf'),
    });

    setLoading(true);
  };

  useEffect(() => {
    handlefontLoading();
  }, []);

  if (!loading) {
    return <AppLoading />;
  }

  return (
    <BackGround>
      <Container>
        <View>
          <LogoStyled source={Logo} />
          <Title>Guilherme Rodrigues</Title>
          <SubTitle>Web Designer, Desenvolvedor Web & Mobile</SubTitle>
        </View>

        <ContentScrollView>
          <ButtonContent onPress={() => navigation.navigate('Profile')}>
            <ButtonContentText>Meu Perfil</ButtonContentText>
            <Feather
              name="arrow-right"
              size={24}
              color={theme.colors.dark}
              style={{ marginRight: 20 }}
            />
          </ButtonContent>

          <ButtonContent onPress={() => navigation.navigate('Experience')}>
            <ButtonContentText>Experiências Profissionais </ButtonContentText>
            <Feather
              name="arrow-right"
              size={24}
              color={theme.colors.dark}
              style={{ marginRight: 20 }}
            />
          </ButtonContent>

          <ButtonContent onPress={() => navigation.navigate('Education')}>
            <ButtonContentText>Formação acadêmica</ButtonContentText>
            <Feather
              name="arrow-right"
              size={24}
              color={theme.colors.dark}
              style={{ marginRight: 20 }}
            />
          </ButtonContent>

          <ButtonContent onPress={() => navigation.navigate('Projects')}>
            <ButtonContentText>Projetos realizados</ButtonContentText>
            <Feather
              name="arrow-right"
              size={24}
              color={theme.colors.dark}
              style={{ marginRight: 20 }}
            />
          </ButtonContent>

          <ButtonContent onPress={() => navigation.navigate('Skills')}>
            <ButtonContentText>Skills</ButtonContentText>
            <Feather
              name="arrow-right"
              size={24}
              color={theme.colors.dark}
              style={{ marginRight: 20 }}
            />
          </ButtonContent>
          <Margin />
        </ContentScrollView>

        <ButtonScrollView renderToHardwareTextureAndroid>
          <Button
            style={{ backgroundColor: '#249086' }}
            onPress={() =>
              Linking.openURL('whatsapp://send?phone=05555999937833')
            }>
            <View>
              <FontAwesome
                name="whatsapp"
                size={32}
                color={theme.colors.light}
              />
            </View>
            <ButtonText>Whatsapp</ButtonText>
          </Button>

          <Button
            style={{ backgroundColor: theme.colors.dark }}
            onPress={() => navigation.navigate('Github')}>
            <View>
              <AntDesign name="github" size={32} color={theme.colors.light} />
            </View>
            <ButtonText>GitHub</ButtonText>
          </Button>

          <Button
            style={{ backgroundColor: '#0277b5' }}
            onPress={() =>
              Linking.openURL('https://www.linkedin.com/in/guilhermeddc/')
            }>
            <View>
              <FontAwesome
                name="linkedin"
                size={32}
                color={theme.colors.light}
              />
            </View>
            <ButtonText>Linkedin</ButtonText>
          </Button>

          <Button
            style={{ backgroundColor: '#DD3477' }}
            onPress={() =>
              Linking.openURL('https://www.instagram.com/guilhermeddc')
            }>
            <View>
              <FontAwesome
                name="instagram"
                size={32}
                color={theme.colors.light}
              />
            </View>
            <ButtonText>Instagram</ButtonText>
          </Button>

          <Button
            style={{ backgroundColor: '#0870E6', marginRight: 15 }}
            onPress={() =>
              Linking.openURL('https://www.facebook.com/Guilhermeddc')
            }>
            <View>
              <FontAwesome
                name="facebook"
                size={32}
                color={theme.colors.light}
              />
            </View>
            <ButtonText>Facebook</ButtonText>
          </Button>
        </ButtonScrollView>
      </Container>
    </BackGround>
  );
};

export default Home;
