import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import theme from '../../styles/theme';

const dim = Dimensions.get('screen');

export const Container = styled.View`
  background: ${theme.colors.primary}aa;
  padding: 7% 4% 0;
  width: 100%;
`;

export const Button = styled(RectButton)`
  width: ${dim.width < 360 ? 24 : 32}px;
  height: ${dim.width < 360 ? 24 : 32}px;
  margin-bottom: 10px;
`;
