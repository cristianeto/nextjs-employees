import { render, screen } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';
import Home from '@pages/index';

describe('Index Page', () => {
  it('should create index page', () => {
    render(
      <SnackbarProvider>
        <Home />
      </SnackbarProvider>,
    );

    const heading = screen.getByRole('heading', { name: /login/i });

    expect(heading).toBeInTheDocument();
  });
});
