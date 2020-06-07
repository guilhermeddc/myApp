import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';

import BackGround from '../../components/Background';

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
    navigation.navigate('Home');
  };

  useEffect(() => {
    handlefontLoading();
  }, []);

  return (
    <BackGround>
      <ActivityIndicator size="large" />
    </BackGround>
  );
};

export default Loading;
