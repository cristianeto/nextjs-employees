import { render, screen } from '@testing-library/react';
import Home from '@pages/index.page';

describe('Index Page', () => {
  it('should create index page', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', { name: /login/i });

    expect(heading).toBeInTheDocument();
  });
});
