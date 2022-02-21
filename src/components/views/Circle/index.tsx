import React, { FC, memo } from 'react';
import styled from 'styled-components/native';
import Colors from '@theme/colors';

interface Props {
  size?: number;
  color?: string;
  children?: React.ReactElement;
}

const Container = styled.View<Props>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size / 2}px;
  background-color: ${props => props.color};
  justify-content: center;
  align-items: center;
`;

const Circle: FC<Props> = ({ size, color, children }) => {
  return (
    <Container size={size} color={color}>
      {children}
    </Container>
  );
};

Circle.defaultProps = {
  size: 4,
  color: Colors.TRANSPARENT
};

export default memo(Circle);
