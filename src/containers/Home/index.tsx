import React, { FC, useCallback, useState, useRef } from 'react';
import { RefreshControl, TextInput, Keyboard } from 'react-native';
import styled from 'styled-components/native';
import Colors from '@theme/colors';
import { WebView } from 'react-native-webview';
import { hasNotch } from 'react-native-device-info';
import { SearchInput, Space } from '@components/index';
import { heightRadio, isValidUrl } from '@utils/functions';
import i18n from '@locales/index';

const Container = styled.View`
  background-color: ${Colors.WHITE};
  flex: 1;
  padding-top: ${hasNotch() ? 32 : 0}px;
`;

const ScrollView = styled.ScrollView`
  flex: 1;
`;

const Content = styled.View`
  flex: 1;
`;

const Home: FC = () => {

  const defaultLink = 'https://www.google.com.vn';
  const [link, setLink] = useState<string>(defaultLink);
  const [refreshing, setRefreshing] = useState(false);
  const webViewRef = useRef();
  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    webViewRef?.current?.reload();
    setTimeout(() => {
      setRefreshing(false);
    }, 800);
  }, [refreshing]);

  // handle text input
  const searchRef = useRef<TextInput>();
  const [searchText, setSearchText] = useState<string>('');
  const onSearch = () => {
    if (isValidUrl(searchText)) {
      setLink(searchText);
    } else {
      setLink(`https://www.google.com/search?q=${searchText}`);
    }
    Keyboard.dismiss();
  }

  const onClearText = () => {
    setSearchText('');
    setLink(defaultLink);
    showKeyboard();
  }

  const showKeyboard = () => {
    searchRef?.current?.onFocus(); // show keyboard
  }

  return (
    <Container>
      <ScrollView 
        contentContainerStyle={{ flex: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
      }
      >
        <Content>
          <Space height={8 * heightRadio} />
          <SearchInput
            ref={searchRef}
            percentWidth={'88%'} 
            placeholder={i18n.t('common.placeholder')}
            onSubmitEditing={onSearch}
            value={searchText}
            onSearch={onSearch}
            onClearText={onClearText}
            onChangeText={text => setSearchText(text)}
          />
          <Space height={4 * heightRadio} />
          <WebView
            ref={webViewRef}
            source={{ uri: link }}
            style={{ flex: 1 }}
          />
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Home;
