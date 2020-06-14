import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const dim = Dimensions.get('screen');
import theme from '../../styles/theme';

export const Container = styled.ScrollView`
  flex: 1;
  background: ${theme.colors.primary}aa;
`;

export const Header = styled.ScrollView`
  flex: 1;
  padding: 5px 20px 0;
`;

export const Button = styled(RectButton)`
  width: ${dim.width < 360 ? 24 : 32}px;
  height: ${dim.width < 360 ? 24 : 32}px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  margin-bottom: 20px;
  font-size: 24px;
  font-family: bold;
  color: ${theme.colors.light};
  text-shadow: 0 5px 4px ${theme.colors.dark};
`;

export const ProjectScrollView = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})`
  flex: 1;
`;

export const Card = styled.View`
  background: ${theme.colors.dark};
  padding: 5px;
  margin-right: 20px;
  border-radius: 5px;
`;

export const ProjectImage = styled.Image`
  border-radius: 5px;
  width: 280px;
  height: ${dim.height * 0.6}px;
`;

export const CardTitle = styled.Text`
  margin: 10px 0;
  text-align: center;
  font-size: 18px;
  font-family: semiBold;
  color: ${theme.colors.light};
`;

export const CardButton = styled(RectButton)`
  background: ${theme.colors.light};
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  width: 260px;
`;

export const CardButtonText = styled.Text`
  text-align: center;
  font-size: 18px;
  font-family: semiBold;
  color: ${theme.colors.dark};
`;

export const Margin = styled.View`
  margin: 10px;
`;
