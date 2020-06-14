import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const dim = Dimensions.get('screen');
import theme from '../../styles/theme';

export const Container = styled.ScrollView`
  flex: 1;
  background: ${theme.colors.primary}aa;
  padding: 5px 20px 20px;
`;

export const ImageProfile = styled.Image`
  width: 100%;
  height: 350px;
  border-radius: 5px;
`;

export const Title = styled.Text`
  margin-top: 20px;
  font-family: bold;
  font-size: 22px;
  color: ${theme.colors.light};
`;

export const Descriprion = styled.Text`
  margin-top: 20px;
  font-family: semiBold;
  font-size: 16px;
  color: ${theme.colors.light};
  text-align: justify;
`;

export const Summary = styled.Text`
  margin-top: 20px;
  font-family: light;
  font-size: 16px;
  color: ${theme.colors.light};
`;

export const Button = styled(RectButton)`
  width: ${dim.width < 360 ? 24 : 32}px;
  height: ${dim.width < 360 ? 24 : 32}px;
  margin-bottom: 10px;
`;

export const Margin = styled.View`
  margin: 20px;
`;
