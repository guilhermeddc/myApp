import React from 'react';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import theme from '../../styles/theme';

import { Container, Button } from './styles';

const Navigator = ({
  onPress,
  backgroundColor = `${theme.colors.primary}aa`,
}) => {
  const dim = Dimensions.get('screen');
  return (
    <Container style={{ backgroundColor }}>
      <Button onPress={onPress}>
        <Feather
          name="arrow-left"
          color={theme.colors.light}
          size={dim.width < 360 ? 24 : 32}
        />
      </Button>
    </Container>
  );
};

export default Navigator;
