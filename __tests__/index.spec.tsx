import { render } from '@testing-library/react';
import Home from '@pages/index';

describe('Index Page', () => {
  it('should create index page', () => {
    const { baseElement } = render(<Home />);
    expect(baseElement).toBeTruthy();
  });
});
