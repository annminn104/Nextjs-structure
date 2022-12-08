import '@interceptors/request';
import '@interceptors/response';

import type { AppProps } from 'next/app';
import '../styles/sass/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
