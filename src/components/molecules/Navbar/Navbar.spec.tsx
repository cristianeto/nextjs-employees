import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('<Navbar/>', () => {
  it('should render Navbar component', () => {
    render(<Navbar />);

    const text = screen.getByText(/navbar/i);

    expect(text).toBeInTheDocument();
  });
});
