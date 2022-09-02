/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '@mocks';
import Home from '@pages/index';

it('renders homepage unchanged', () => {
  const { container } = render(
    <RouterContext.Provider value={createMockRouter({})}>
      <Home />
    </RouterContext.Provider>,
  );
  expect(container).toMatchSnapshot();
});
