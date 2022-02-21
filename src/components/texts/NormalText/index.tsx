import React, { FC, memo } from 'react';
import styled from 'styled-components/native';
import Colors from '@theme/colors';
import Fonts from '@theme/fonts';

interface Props {
  string: string;
  color?: string;
  isCenter?: boolean;
  fontSize?: number;
  opacity?: number;
  fontWeight?: number;
  textDecore?: string;
  numberOfLines?: number;
  ellipsizeMode?: string;
  maxWidth?: number,
  adjustsFontSizeToFit?: boolean;
}

const Text = styled(Fonts.Normal)<Props>`
  color: ${props => props.color};
  text-align: ${props => props.isCenter ? 'center' : 'left'};
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => props.fontWeight};
  text-decoration-line: ${props => props.textDecore};
  ${props => props.maxWidth && `max-width: ${props.maxWidth}px;`}
  opacity: ${props => props.opacity};
`;

const NormalText: FC<Props> = ({
  string, color, isCenter, fontSize, opacity, fontWeight, textDecore, numberOfLines, ellipsizeMode, maxWidth, adjustsFontSizeToFit
}) => {
  return (
    <Text color={color} isCenter={isCenter} fontSize={fontSize} opacity={opacity}
      fontWeight={fontWeight} textDecore={textDecore} numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode} maxWidth={maxWidth} adjustsFontSizeToFit={adjustsFontSizeToFit}
      allowFontScaling={false}  
    >
      {string}
    </Text>
  );
};

NormalText.defaultProps = {
  color: Colors.TEXT,
  isCenter: false,
  fontSize: 14,
  opacity: 1,
  fontWeight: 400,
  textDecore: 'none',
  numberOfLines: 0,
  ellipsizeMode: 'tail',
  adjustsFontSizeToFit: false,
};

export default memo(NormalText);
