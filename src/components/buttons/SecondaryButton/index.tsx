import React, { FC, memo } from 'react';
import styled from 'styled-components/native';
import Colors from '@theme/colors';
import Fonts from '@theme/fonts';
import { heightRadio } from '@utils/functions';

interface Props {
  title: string;
  onPress: () => void;
  percentWidth?: string;
  height?: number;
}

const Button = styled.TouchableOpacity<Props>`
  width: ${props => props.percentWidth};
  height: ${props => props.height * heightRadio}px;
  background-color: ${Colors.SECONDARY};
  border-radius: 28px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled(Fonts.Normal)`
  color: ${Colors.WHITE};
  text-align: center;
  font-size: 18px;
  width: 100%;
`;

const SecondaryButton: FC<Props> = ({ title, onPress, percentWidth, height }) => {
  return (
    <Button onPress={onPress} percentWidth={percentWidth} height={height}>
      <ButtonText>{title}</ButtonText>
    </Button>
  );
};

SecondaryButton.defaultProps = {
  percentWidth: '48%',
  height: 48,
};

export default memo(SecondaryButton);
