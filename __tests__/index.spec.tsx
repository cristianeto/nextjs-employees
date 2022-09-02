import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '@mocks';
import Home from '@pages/index';

describe('Index Page', () => {
  it('should create index page', () => {
    const { baseElement } = render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Home />
      </RouterContext.Provider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
