import React, { FC } from 'react';
import styled from 'styled-components/native';
import Colors from '@theme/colors';
import Fonts from '@theme/fonts';

const Container = styled.View`
  background-color: ${Colors.BLACK};
  width: 100%;
  height: 100%;
  padding-top: 100px;
`;

const ButtonText = styled(Fonts.Normal)`
  color: ${Colors.WHITE};
  text-align: center;
  font-size: 32px;
`;

const Home: FC = () => {

  return (
    <Container>
      <ButtonText>{'Browser App'}</ButtonText>
    </Container>
  );
};

export default Home;
