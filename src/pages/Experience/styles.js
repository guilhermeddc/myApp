import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import theme from '../../styles/theme';
const dim = Dimensions.get('screen');

export const Container = styled.ScrollView`
  flex: 1;
  background: ${theme.colors.primary}aa;
  padding: 5px 20px 20px;
`;

export const Button = styled(RectButton)`
  width: ${dim.width < 360 ? 24 : 32}px;
  height: ${dim.width < 360 ? 24 : 32}px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: bold;
  color: ${theme.colors.light};
  text-shadow: 0 5px 4px ${theme.colors.dark};
`;

export const Experiences = styled.View`
  margin: 10px 0;
`;

export const Company = styled.Text`
  font-size: 24px;
  font-family: bold;
  color: ${theme.colors.light};
  text-shadow: 0 5px 4px ${theme.colors.dark};
  margin-bottom: 5px;
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background: ${theme.colors.light};
`;

export const Office = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: semiBold;
  color: ${theme.colors.light};
  text-shadow: 0 3px 4px ${theme.colors.dark};
`;

export const WorkingTime = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: light;
  color: ${theme.colors.white};
  text-shadow: 0 3px 4px ${theme.colors.dark};
`;

export const Local = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: semiBold;
  color: ${theme.colors.light};
  text-shadow: 0 3px 4px ${theme.colors.dark};
`;

export const Functions = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: light;
  color: ${theme.colors.light};
  text-shadow: 0 3px 4px ${theme.colors.dark};
`;

export const Margin = styled.View`
  margin: 20px;
`;
