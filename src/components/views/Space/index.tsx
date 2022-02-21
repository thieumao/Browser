import React, { FC, memo } from 'react';
import styled from 'styled-components/native';
import Colors from '@theme/colors';

interface Props {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const Container = styled.View<Props>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: ${props => props.color};
  opacity: ${props => props.opacity};
`;

const Space: FC<Props> = ({ width, height, color, opacity }) => {
  return (
    <Container height={height} width={width} color={color} opacity={opacity} />
  );
};

Space.defaultProps = {
  width: 1,
  height: 1,
  color: Colors.TRANSPARENT,
  opacity: 1
};

export default memo(Space);
