import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import theme from '../../styles/theme';

export const Container = styled.ScrollView`
  flex: 1;
  background: ${theme.colors.primary};
  padding: 30px 20px 20px;
`;

export const Button = styled(RectButton)`
  width: 32px;
  height: 32px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  font-family: bold;
  color: ${theme.colors.light};
  text-shadow: 0 5px 4px ${theme.colors.dark};
`;

export const Skill = styled.Text`
  border-radius: 10px;
  padding: 2.5px 10px;
  margin-top: 15px;
  font-size: 24px;
  font-family: semiBold;
  color: ${theme.colors.light};
`;
