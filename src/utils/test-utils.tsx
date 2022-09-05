import React, { FC, ReactElement } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { makeStore } from '../redux/store';
import { IWrapperProvider } from '@interfaces';

type TypeProviders = {
  children: ReactElement;
};

const store = makeStore();

const AllTheProviders: FC<IWrapperProvider> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
const renderWithStore = (ui: ReactElement, options = {}) =>
  render(ui, { wrapper: AllTheProviders, ...options });

const Providers = ({ children }: TypeProviders) => children;
const customRender = (ui: ReactElement, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render, renderWithStore };
