import '@interceptors/request';
import '@interceptors/response';
import { store } from '@stores/index';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '../styles/sass/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
