import React, { FC, useState, useRef } from 'react';
import { RefreshControl } from 'react-native';
import styled from 'styled-components/native';
import Colors from '@theme/colors';
import { WebView } from 'react-native-webview';
import { hasNotch } from 'react-native-device-info';

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

  const link = 'https://www.google.com.vn/';

  const [refreshing, setRefreshing] = useState(false);
  const webViewRef = useRef()
  
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    webViewRef?.current?.reload();
    setTimeout(() => {
      setRefreshing(false);
    }, 800);
  }, [refreshing]);

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
