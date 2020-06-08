import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import theme from '../../styles/theme';

export const Container = styled.ScrollView`
  flex: 1;
  background: ${theme.colors.primary};
  padding: 30px 20px 20px;
`;

export const ImageProfile = styled.Image`
  width: 100%;
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
  width: 32px;
  height: 32px;
  margin-bottom: 10px;
`;
