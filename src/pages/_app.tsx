import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { SWRConfig } from 'swr';
import fetcher from '../config/swr.config';
import store from '../redux/store';
import theme from 'styles/themeConfig';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: true,
        // refreshInterval: 1000 * 60 * 60 * 60, // 1hour
        refreshInterval: 1000,
        provider: () => new Map(),
      }}>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </SWRConfig>
  );
}

export default MyApp;
