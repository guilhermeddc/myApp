import styled from 'styled-components/native';
import Background from '../../assets/images/concert.jpg';

export const Container = styled.ImageBackground.attrs({
  source: Background,
})`
  flex: 1;
`;
