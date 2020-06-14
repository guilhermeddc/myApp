import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import theme from '../../styles/theme';
const dim = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const LogoStyled = styled.Image`
  width: ${dim.width * 0.25}px;
  height: ${dim.width * 0.25}px;
  margin: 60px auto 0;
`;

export const Title = styled.Text`
  color: ${theme.colors.light};
  padding: 10px;
  font-family: semiBold;
  font-size: ${dim.width * 0.075}px;
  text-align: center;
  text-shadow: 0 5px 4px ${theme.colors.dark};
`;

export const SubTitle = styled.Text`
  padding-top: 10px;
  color: ${theme.colors.light};
  font-family: medium;
  font-size: ${dim.width * 0.056}px;
  text-align: center;
  text-shadow: 0 3px 4px ${theme.colors.dark};
  margin-bottom: ${dim.width < 400 ? '10' : '20'}px;
`;

export const ContentScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 0 10px;
`;

export const ButtonContent = styled(RectButton)`
  margin-top: ${dim.width < 400 ? '7' : '10'}px;
  border-radius: 5px;
  width: 100%;
  background-color: ${theme.colors.light}c0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContentText = styled.Text`
  color: ${theme.colors.dark};
  padding: ${dim.width < 410 ? '3.5%' : '17px'} 20px;
  font-family: semiBold;
  font-size: ${dim.width * 0.04}px;
`;

export const ButtonScrollView = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})`
  margin-top: 10px;
  max-height: ${dim.width < 360 ? 120 : 140}px;
`;

export const Button = styled(RectButton)`
  width: ${dim.width < 360 ? 80 : 110}px;
  height: ${dim.width < 360 ? 100 : 130}px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

export const ButtonText = styled.Text`
  margin: 10px 0;
  color: ${theme.colors.light};
  text-align: center;
  font-family: medium;
  font-size: ${dim.width * 0.04}px;
`;

export const Margin = styled.View`
  margin: 5px;
`;
