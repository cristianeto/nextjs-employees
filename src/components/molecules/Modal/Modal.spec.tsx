import { render } from '@testing-library/react';
import Modal from './Modal';

describe('<Modal />', () => {
  it('should render the component properly', () => {
    const { baseElement } = render(
      <Modal isOpen mainButtonText="Save" title="title" onClose={jest.fn()}>
        Hola
      </Modal>,
    );
    expect(baseElement).toBeTruthy();
  });
});
