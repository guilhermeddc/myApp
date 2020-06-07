import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Title = styled.Text`
  color: ${theme.colors.light};
  font-family: semiBold;
  font-size: 54px;
  text-align: center;
  text-shadow: 0 5px 4px ${theme.colors.dark};
`;

export const SubTitle = styled.Text`
  padding-top: 10px;
  color: ${theme.colors.light};
  font-family: medium;
  font-size: 24px;
  text-align: center;
  text-shadow: 0 3px 4px ${theme.colors.dark};
  margin-bottom: 20px;
`;

export const Button = styled(RectButton)`
  margin-top: 20px;
  width: 65%;
  padding: 10px 20px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  margin-left: 20px;
  color: ${theme.colors.light};
  font-family: medium;
  font-size: 24px;
`;
