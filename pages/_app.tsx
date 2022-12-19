import { Body, Footer, Header, Wrapper } from '@components/layout';
import { Seo } from '@components/shared';
import { CacheProvider, EmotionCache } from '@emotion/react';
import '@interceptors/request';
import '@interceptors/response';

import { store } from '@stores/index';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '../styles/sass/index.scss';

import { createEmotionCache } from '@configs/createEmotionCache';
import { theme } from '@configs/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Seo />
          <Wrapper>
            <Header></Header>
            <Body>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} />
            </Body>
            <Footer></Footer>
          </Wrapper>
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}

export default MyApp;
