import React, { FC, useState, memo, forwardRef, createRef, useImperativeHandle } from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import Colors from '@theme/colors';
import { widthRadio, isEmpty } from '@utils/functions';

interface Props {
  isShownTitle?: boolean;
  title?: string;
  isRequired?: boolean;
  subtitle?: string;
  percentWidth?: string;
  error?: string;
  source?: any;
  onPress?: () => void;
  isError?: boolean;
  maxLength?: number;
  placeholder?: string;
  iconWidth?: number;
  iconHeight?: number;
  borderRadios?: number;
  paddingLeft?: number;
  paddingRight?: number;
  height?: number;
  isButton?: boolean;
  onPressButton?: () => void;
  onSubmitEditing?: () => void;
  onSearch: () => void;
  onClearText: () => void;
}

const Container = styled.View<Props>`
  width: ${props => props.percentWidth};
  align-self: center;
`;

const StyledTextInput = styled.TextInput<Props>`
  color: ${Colors.TEXT};
  flex: 1;
  padding-left: ${props => props.paddingLeft * widthRadio}px;
  padding-right: ${props => props.paddingRight * widthRadio}px;
  justify-content: center;
  align-items: center;
`;

const TextInputView = styled.View<Props>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${props => props.isError ? Colors.CANCEL_REQUIRED : Colors.BORDER_COLOR};
  border-radius: ${props => props.borderRadios}px;
  background-color: ${Colors.WHITE};
`;

const RightIcon = styled.Image<Props>`
  resize-mode: contain;
  width: ${props => props.iconWidth * widthRadio}px;
  height: ${props => props.iconHeight * widthRadio}px;
`;

const IconButton = styled.TouchableOpacity`
  padding-horizontal: 20px;
  padding-vertical: 16px;
  justify-content: center;
  align-items: center;
`;

const SearchButton = styled.TouchableOpacity`
  padding-horizontal: 20px;
  padding-vertical: 16px;
  justify-content: center;
  align-items: center;
`;

const SearchInput: FC<Props> = forwardRef(({ isShownTitle, title, isRequired, subtitle,
  percentWidth, error, source, onPress, maxLength, iconWidth, iconHeight, borderRadios,
  paddingLeft, paddingRight, isButton, onPressButton, onSubmitEditing,
  onSearch, onClearText, height, ...rest }, ref) => {
  const isError = !isEmpty(error);

  const [isShownSearchButton, setIsShownSearchButton] = useState<boolean>(true);

  const textInputRef = createRef<TextInput>();

  useImperativeHandle(ref, () => ({
    onFocus
  }));

  const onFocus = () => {
    textInputRef?.current?.focus();
  }

  return (
    <Container percentWidth={percentWidth}>
      <TextInputView isError={isError} borderRadios={borderRadios} height={height}>
        <StyledTextInput 
          placeholderTextColor={Colors.PLACE_HOLDER} 
          maxLength={maxLength}
          paddingLeft={paddingLeft}
          paddingRight={paddingRight}
          onSubmitEditing={onSubmitEditing}
          ref={textInputRef}
          returnKeyType='go'
          allowFontScaling={false}
          onFocus={() => setIsShownSearchButton(true)}
          onBlur={() => setIsShownSearchButton(false)}
          {...rest}
        />
        {!isShownSearchButton && (
          <IconButton onPress={onClearText}>
            <RightIcon source={require('@assets/images/CloseIcon.png')} iconWidth={10} iconHeight={10} />
          </IconButton>
        )}
        {/* {isShownSearchButton && (
          <SearchButton onPress={onSearch}>
            <RightIcon source={require('@assets/images/Search.png')} iconWidth={15} iconHeight={17} />
          </SearchButton>
        )} */}
      </TextInputView>
    </Container>
  );
});

SearchInput.defaultProps = {
  isShownTitle: false,
  title: '',
  isRequired: false,
  subtitle: '',
  percentWidth: '100%',
  error: '',
  source: require('@assets/images/CloseIcon.png'),
  onPress: () => null,
  iconWidth: 10,
  iconHeight: 10,
  borderRadios: 100,
  paddingLeft: 20,
  paddingRight: 0,
  height: 48,
  maxLength: 255,
  isButton: false,
  onPressButton: () => null,
};

export default memo(SearchInput);
