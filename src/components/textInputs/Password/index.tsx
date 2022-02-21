import React, { FC, memo, useState, useRef, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components/native';
import Colors from '@theme/colors';
import { NormalText, HeaderText, Space } from '@components/index';
import { isEmpty } from '@utils/functions';

interface Props {
  title?: string;
  isRequired?: boolean;
  subtitle?: string;
  padding?: number;
  margin?: number;
  percentWidth?: string;
  error?: string;
  onPress?: () => void;
  isError?: boolean;
  value?: string;
  onChangeText?: (text) => void;
  secureTextEntry?: boolean;
  keyboardType?: string;
  returnKeyType?: string;
  onSubmitEditing?: () => void;
  placeholder?: string;
}

const Container = styled.View<Props>`
  padding: ${props => props.padding}px;
  margin: ${props => props.margin}px;
  width: ${props => props.percentWidth};
`;

const TitleView = styled.View`
  margin-bottom: 6px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const TextInput = styled.TextInput`
  color: ${Colors.TEXT};
  font-size: 14px;
  flex: 1;
  padding-horizontal: 12px;
  padding-vertical: 8px;
  margin-vertical: 0px;
`;

const TextInputView = styled.View<Props>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${props => props.isError ? Colors.CANCEL_REQUIRED : Colors.BORDER_COLOR};
  height: 40px;
  border-radius: 2px;
`;

const IconButton = styled.TouchableOpacity`
  padding-right: 15px;
`;

const OpenEyeIcon = styled.Image`
  resize-mode: contain;
  width: 17px;
  height: 10px;
`;

const CloseEyeIcon = styled.Image`
  resize-mode: contain;
  width: 16px;
  height: 7px;
`;

const Password: FC<Props> = forwardRef(({ title, isRequired, subtitle, padding, margin, percentWidth, error, 
  onPress, value, onChangeText, keyboardType, returnKeyType, onSubmitEditing, placeholder, ...rest }, ref) => {
  const [isShownPassword, setIsShownPassword] = useState(false);

  const isError = !isEmpty(error);

  const OpenEye = require('@assets/images/OpenEye.png');
  const CloseEye = require('@assets/images/CloseEye.png');

  const textInputRef = useRef(null)

  useImperativeHandle(ref, () => ({
    onFocus
  }))

  const onFocus = () => {
    textInputRef?.current?.focus()
  }

  const onClickEye = () => {
    setIsShownPassword(!isShownPassword);
    if (onPress) {
      onPress();
    }
  };

  const isShownTitle = !isEmpty(title);

  return (
    <Container padding={padding} margin={margin} percentWidth={percentWidth}>
      {isShownTitle && (
        <TitleView>
          <HeaderText string={title || ''} fontSize={16} color={Colors.TEXT} />
          <Space width={4} />
          <NormalText string={subtitle || ''} fontSize={12} color={Colors.TEXT} />
          {isRequired && <NormalText string={'*'} fontSize={16} color={Colors.CANCEL_REQUIRED} />}
        </TitleView>
      )
      }
      <TextInputView isError={isError}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          allowFontScaling={false}
          secureTextEntry={!isShownPassword} 
          placeholderTextColor={Colors.PLACE_HOLDER}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          ref={textInputRef}
          placeholder={placeholder} 
        />
        <IconButton onPress={onClickEye}>
          {isShownPassword ? (
            <CloseEyeIcon source={CloseEye} />
          ) : (
            <OpenEyeIcon source={OpenEye} />
          )}
        </IconButton>
      </TextInputView>
      {isError && <Space height={4} />}
      {isError && <NormalText string={error || ''} fontSize={14} color={Colors.RED} />}
    </Container>
  );
});

Password.defaultProps = {
  title: '',
  isRequired: false,
  subtitle: '',
  padding: 0,
  margin: 0,
  percentWidth: '100%',
  error: '',
  onPress: () => null,
  secureTextEntry: false,
  keyboardType: 'default',
  returnKeyType: undefined,
  placeholder: ''
};

export default memo(Password);
