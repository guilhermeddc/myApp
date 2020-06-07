import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import theme from '../../styles/theme';

const dim = Dimensions.get('screen');

export const Container = styled.ScrollView`
  flex: 1;
  background: ${theme.colors.dark};
  padding: 20px;
`;

export const ImageProfile = styled.Image`
  margin: 20px auto 10px;
  width: ${dim.width - 20}px;
  height: ${dim.width - 20}px;
  border-radius: 5px;
`;

export const Name = styled.Text`
  font-family: medium;
  font-size: ${dim.width * 0.075}px;
  color: ${theme.colors.light};
`;

export const Login = styled.Text`
  font-family: light;
  font-size: ${dim.width * 0.055}px;
  color: ${theme.colors.light};
`;

export const Button = styled(RectButton)`
  margin-top: 20px;
  width: 100%;
  padding: 10px 20px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.black};
`;

export const ButtonText = styled.Text`
  margin-left: 20px;
  color: ${theme.colors.light};
  font-family: light;
  font-size: 20px;
  text-transform: uppercase;
`;

export const Bio = styled.Text`
  margin: 20px 0;
  font-family: light;
  font-size: ${dim.width * 0.047}px;
  color: ${theme.colors.light};
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background: ${theme.colors.light};
`;
