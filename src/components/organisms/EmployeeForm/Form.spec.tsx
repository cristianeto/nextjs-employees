/* eslint-disable no-use-before-define */
import { render, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import Form from './Form';
import { employeeForm, initialState, employee } from '@mocks';

describe('<Form/>', () => {
  const onSubmit = jest.fn();
  const { baseElement, getByRole } = render(
    <Form
      initialState={initialState}
      labels={employeeForm.labels}
      onClose={jest.fn()}
      onSubmit={onSubmit}
    />,
  );

  beforeEach(() => {
    onSubmit.mockClear();
  });

  it('should render the component', () => {
    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });

  it('should render save button', () => {
    waitFor(() => {
      expect(getSubmitButton()).toBeTruthy();
      expect(getSubmitButton()).toBeInTheDocument();
    });
  });

  it('should allow user type inputs', () => {
    waitFor(async () => {
      await user.type(getDNIInput(), employee.dni);
      await user.type(getNameInput(), employee.name);
      await user.type(getLastNameInput(), employee.lastname);
      await user.type(getEmailInput(), employee.email);
      expect(getDNIInput()).toHaveValue(employee.dni);
      expect(getNameInput()).toHaveValue(employee.name);
      expect(getLastNameInput()).toHaveValue(employee.lastname);
      expect(getEmailInput()).toHaveValue(employee.email);
    });
  });

  it('should allow user submit the form', () => {
    waitFor(async () => {
      await user.type(getDNIInput(), employee.dni);
      await user.type(getNameInput(), employee.name);
      await user.type(getLastNameInput(), employee.lastname);
      await user.type(getEmailInput(), employee.email);
      await user.click(getSubmitButton());
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit).toHaveBeenCalledWith({ ...employee, id: '' });
    });
  });

  function getDNIInput() {
    return getByRole('textbox', { name: /dni/i });
  }

  function getNameInput() {
    return getByRole('textbox', { name: /name/i });
  }

  function getLastNameInput() {
    return getByRole('textbox', { name: /lastname/i });
  }

  function getEmailInput() {
    return getByRole('textbox', { name: /email/i });
  }

  function getSubmitButton() {
    return getByRole('button', {
      name: /save/i,
    });
  }
});
