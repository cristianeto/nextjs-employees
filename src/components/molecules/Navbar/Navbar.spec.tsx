import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import Navbar from './Navbar';
import { createMockRouter } from '@mocks';

describe('<Navbar/>', () => {
  it('should render Navbar component', () => {
    const { baseElement } = render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Navbar />
      </RouterContext.Provider>,
    );

    expect(baseElement).toBeTruthy();
  });

  it('should render Home link', () => {
    const { getByRole } = render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Navbar />
      </RouterContext.Provider>,
    );

    const element = getByRole('link', { name: /home/i });

    expect(element).toBeInTheDocument();
  });

  it('should render Login link', () => {
    const { getByRole } = render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Navbar />
      </RouterContext.Provider>,
    );

    const element = getByRole('link', { name: /login/i });

    expect(element).toBeInTheDocument();
  });
});
