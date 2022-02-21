import React, { FC, memo } from 'react';
import styled from 'styled-components/native';
import Colors from '@theme/colors';
import Fonts from '@theme/fonts';
import { heightRadio } from '@utils/functions';

interface Props {
  title: string;
  onPress?: () => void;
  onPressIn?: () => void;
  percentWidth?: string;
  height?: number;
  isDisabled?: boolean;
  fontSize?: number;
  color?: string;
}

const Button = styled.TouchableOpacity<Props>`
  width: ${props => props.percentWidth};
  height: ${props => props.height * heightRadio}px;
  background-color: ${props => props.isDisabled ? Colors.PRIMARY_COLOR_OPACITY : Colors.PRIMARY_COLOR};
  border-radius: 28px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled(Fonts.Bold)<Props>`
  color: ${props => props.color || Colors.BUTTON_TEXT};
  text-align: center;
  font-size: ${props => props.fontSize}px;
  width: 100%;
`;

const PrimaryButton: FC<Props> = ({
  title,
  onPress,
  onPressIn,
  percentWidth,
  height,
  isDisabled,
  fontSize,
  color,
}) => {
  const onClick = () => {
    if (!isDisabled && onPress) {
      onPress();
    }
  };
  return (
    <Button
      onPress={onClick}
      onPressIn={onPressIn}
      percentWidth={percentWidth}
      height={height}
      disabled={isDisabled}
      isDisabled={isDisabled}>
      <ButtonText fontSize={fontSize} color={color}>{title}</ButtonText>
    </Button>
  );
};

PrimaryButton.defaultProps = {
  onPress: () => {},
  percentWidth: '48%',
  height: 48,
  isDisabled: false,
  fontSize: 18,
  color: Colors.WHITE,
};

export default memo(PrimaryButton);
