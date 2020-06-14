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

export const Title = styled.Text`
  margin-bottom: 20px;
  font-size: 24px;
  font-family: bold;
  color: ${theme.colors.light};
  text-shadow: 0 5px 4px ${theme.colors.dark};
`;

export const Skill = styled.Text`
  border-radius: 5px;
  padding: 2.5px 10px;
  margin-top: ${dim.width * 0.035}px;
  font-size: ${dim.width * 0.065}px;
  font-family: semiBold;
  color: ${theme.colors.light};
`;

export const Margin = styled.View`
  margin: 20px;
`;
