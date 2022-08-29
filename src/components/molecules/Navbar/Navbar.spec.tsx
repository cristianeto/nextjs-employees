import { render } from '@testing-library/react';
import Navbar from './Navbar';

describe('<Navbar/>', () => {
  it('should render Navbar component', () => {
    const { baseElement } = render(<Navbar />);

    expect(baseElement).toBeTruthy();
  });

  it('should render Home link', () => {
    const { getByRole } = render(<Navbar />);

    const element = getByRole('link', { name: /home/i });

    expect(element).toBeInTheDocument();
  });

  it('should render Login link', () => {
    const { getByRole } = render(<Navbar />);

    const element = getByRole('link', { name: /login/i });

    expect(element).toBeInTheDocument();
  });
});
