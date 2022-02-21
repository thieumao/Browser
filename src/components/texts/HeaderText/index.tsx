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
  underline?: boolean;
  adjustsFontSizeToFit?: boolean;
}

const Text = styled(Fonts.Bold) <Props>`
  color: ${props => props.color};
  text-align: ${props => props.isCenter ? 'center' : 'left'};
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => props.fontWeight};
  text-decoration-line: ${props => props.textDecore};
  text-decoration: ${props => props.underline ? 'underline' : 'none'};
  opacity: ${props => props.opacity};
`;

const HeaderText: FC<Props> = ({
  string, color, isCenter, fontSize, opacity, fontWeight, textDecore, numberOfLines, ellipsizeMode, underline, adjustsFontSizeToFit
}) => {
  return (
    <Text color={color} isCenter={isCenter} fontSize={fontSize} opacity={opacity}
      fontWeight={fontWeight} textDecore={textDecore} numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode} underline={underline} adjustsFontSizeToFit={adjustsFontSizeToFit}
      allowFontScaling={false}
    >
      {string}
    </Text>
  );
};

HeaderText.defaultProps = {
  color: Colors.TEXT,
  isCenter: false,
  fontSize: 21,
  opacity: 1,
  fontWeight: 700,
  textDecore: 'none',
  numberOfLines: 0,
  ellipsizeMode: 'tail',
  underline: false,
  adjustsFontSizeToFit: false,
};

export default memo(HeaderText);
