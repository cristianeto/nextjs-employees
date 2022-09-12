import React, { FC, ReactElement } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { SWRConfig } from 'swr';
import { makeStore } from '../redux/store';
import { IWrapperProvider } from '@interfaces';

const store = makeStore();

// The rest of provider must be here, For example: SessionProvider of next/auth
const allProviders: FC<IWrapperProvider> = ({ children }) => {
  return (
    <SWRConfig value={{ dedupingInterval: 0 }}>
      <Provider store={store}>{children}</Provider>
    </SWRConfig>
  );
};
// using allProviders
const renderWithStore = (ui: ReactElement, options = {}) =>
  render(ui, { wrapper: allProviders, ...options });
// normal render
const Providers: FC<IWrapperProvider> = ({ children }) => children;
const customRender = (ui: ReactElement, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render, renderWithStore };
