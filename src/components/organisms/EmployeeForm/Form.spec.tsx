import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';
import { employeeForm, initialState, employee } from '@mocks';

describe('<Form/>', () => {
  it('should render the component', () => {
    const { baseElement } = render(
      <Form
        initialState={initialState}
        labels={employeeForm.labels}
        onClose={jest.fn()}
        onSubmit={jest.fn()}
      />,
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render save button', () => {
    const onSubmit = jest.fn();
    const { getByRole } = render(
      <Form
        initialState={initialState}
        labels={employeeForm.labels}
        onClose={jest.fn()}
        onSubmit={onSubmit}
      />,
    );
    const button = getByRole('button', {
      name: `${employeeForm.titles.saveRegister}`,
    });
    expect(button).toBeTruthy();
    expect(button).toBeInTheDocument();
  });

  it('should allow user type inputs', async () => {
    const onSubmit = jest.fn();
    const { getByRole } = render(
      <Form
        initialState={initialState}
        labels={employeeForm.labels}
        onClose={jest.fn()}
        onSubmit={onSubmit}
      />,
    );
    const dniInput = getByRole('textbox', { name: /dni/i });
    const nameInput = getByRole('textbox', { name: 'Name' });
    const lastnameInput = getByRole('textbox', { name: /lastname/i });
    const emailInput = getByRole('textbox', { name: /email/i });
    expect(dniInput).toBeTruthy();
    await userEvent.type(dniInput, employee.dni);
    await userEvent.type(nameInput, employee.name);
    await userEvent.type(lastnameInput, employee.lastname);
    await userEvent.type(emailInput, employee.email);
    expect(dniInput).toHaveValue(employee.dni);
    expect(nameInput).toHaveValue(employee.name);
    expect(lastnameInput).toHaveValue(employee.lastname);
    expect(emailInput).toHaveValue(employee.email);
  });

  it('should allow user submit the form', async () => {
    const handleSubmit = jest.fn();
    const { getByRole } = render(
      <Form
        initialState={initialState}
        labels={employeeForm.labels}
        onClose={jest.fn()}
        onSubmit={handleSubmit}
      />,
    );
    const user = userEvent.setup();
    const dniInput = getByRole('textbox', { name: /dni/i });
    const nameInput = getByRole('textbox', { name: 'Name' });
    const lastnameInput = getByRole('textbox', { name: /lastname/i });
    const emailInput = getByRole('textbox', { name: /email/i });
    expect(dniInput).toBeTruthy();
    await user.type(dniInput, employee.dni);
    await user.type(nameInput, employee.name);
    await user.type(lastnameInput, employee.lastname);
    await user.type(emailInput, employee.email);
    const submitButton = getByRole('button', { name: /save/i });
    await user.click(submitButton);
    await waitFor(() => expect(handleSubmit).toHaveBeenCalledTimes(1));
  });
});
