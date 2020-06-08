import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const LogoStyled = styled.Image`
  width: 120px;
  height: 120px;
  margin: 60px auto 0;
`;

export const Title = styled.Text`
  color: ${theme.colors.light};
  padding: 10px;
  font-family: semiBold;
  font-size: 32px;
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

export const ContentScrollView = styled.ScrollView`
  flex: 1;
  padding: 10px;
`;

export const ButtonContent = styled(RectButton)`
  margin-top: 10px;
  border-radius: 5px;
  width: 100%;
  background-color: ${theme.colors.light};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContentText = styled.Text`
  color: ${theme.colors.dark};
  padding: 15px 20px;
  font-family: medium;
  font-size: 18px;
`;

export const ButtonScrollView = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})`
  margin-top: 20px;
  max-height: 150px;
`;

export const Button = styled(RectButton)`
  width: 100px;
  height: 120px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

export const ButtonText = styled.Text`
  margin-top: 10px;
  color: ${theme.colors.light};
  text-align: center;
  font-family: medium;
  font-size: 16px;
`;
