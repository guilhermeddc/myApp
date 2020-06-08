import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import styled from 'styled-components/native';
import * as Font from 'expo-font';

import BackGround from '../../components/Background';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const Loading = () => {
  const navigation = useNavigation();

  const handlefontLoading = async () => {
    await Font.loadAsync({
      light: require('../../../assets/fonts/Montserrat-Light.ttf'),
      medium: require('../../../assets/fonts/Montserrat-Medium.ttf'),
      regular: require('../../../assets/fonts/Montserrat-Regular.ttf'),
      semiBold: require('../../../assets/fonts/Montserrat-SemiBold.ttf'),
      bold: require('../../../assets/fonts/Montserrat-Bold.ttf'),
    });
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'Home',
          },
        ],
      }),
    );
  };

  useEffect(() => {
    handlefontLoading();
  }, []);

  return (
    <BackGround>
      <Container>
        <ActivityIndicator size="large" color="#ECECEC" />
      </Container>
    </BackGround>
  );
};

export default Loading;
