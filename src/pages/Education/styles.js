import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

import theme from '../../styles/theme';
const dim = Dimensions.get('screen');

export const Container = styled.ScrollView`
  flex: 1;
  background: ${theme.colors.primary}aa;
  padding: 5px 20px 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: bold;
  color: ${theme.colors.light};
  text-shadow: 0 5px 4px ${theme.colors.dark};
`;

export const Educations = styled.View`
  margin: 10px 0;
`;

export const Institution = styled.Text`
  font-size: 18px;
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

export const Course = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: light;
  color: ${theme.colors.light};
  text-shadow: 0 3px 4px ${theme.colors.dark};
`;

export const CourseTime = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: semiBold;
  color: ${theme.colors.light};
  text-shadow: 0 3px 4px ${theme.colors.dark};
`;

export const Margin = styled.View`
  margin: 20px;
`;
