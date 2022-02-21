import React, { FC, memo } from 'react';
import styled from 'styled-components/native';
import Colors from '@theme/colors';
import { NormalText, Space } from '@components/index';
import { isEmpty } from '@utils/functions';

interface Props {
  padding?: number;
  margin?: number;
  percentWidth?: string;
  error?: string;
  isError?: boolean;
  placeholder?: string;
  value?: string;
  onChangeText?: (text) => void;
  onClearText?: () => void;
  secureTextEntry?: boolean;
  maxLength?: number;
  keyboardType?: string;
  returnKeyType?: string;
  onSubmitEditing?: () => void
}

const Container = styled.View<Props>`
  padding: ${props => props.padding}px;
  margin: ${props => props.margin}px;
  width: ${props => props.percentWidth};
`;

const TextInput = styled.TextInput<Props>`
  color: ${Colors.TEXT};
  font-size: 14px;
  width: 100%;
  padding-horizontal: 12px;
  padding-vertical: 0px;
  margin-vertical: 0px;
  border-width: 1px;
  border-color: ${props => props.isError ? Colors.CANCEL_REQUIRED : Colors.BORDER_COLOR};
  height: 40px;
  border-radius: 2px;
`;

const NormalTextInput: FC<Props> = ({ padding, margin, percentWidth, error, placeholder, value, 
  onChangeText, secureTextEntry, maxLength, keyboardType, returnKeyType, onSubmitEditing,
  ...rest }) => {
  const isError = !isEmpty(error);
  return (
    <Container padding={padding} margin={margin} percentWidth={percentWidth}>
      <TextInput
        placeholderTextColor={Colors.PLACE_HOLDER}
        isError={isError} 
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        allowFontScaling={false}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        {...rest}
      />
      {isError && <Space height={4} />}
      {isError && <NormalText string={error || ''} fontSize={14} color={Colors.CANCEL_REQUIRED} />}
    </Container>
  );
};

NormalTextInput.defaultProps = {
  padding: 0,
  margin: 0,
  percentWidth: '100%',
  error: '',
};

export default memo(NormalTextInput);
