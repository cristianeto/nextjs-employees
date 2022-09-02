import { Table, Tbody } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EmployeeItem from './EmployeeItem';
import { employee } from '@mocks';

describe('<EmployeeItem />', () => {
  it('should render EmployeeItem correctly', () => {
    const { baseElement } = render(
      <Table>
        <Tbody>
          <EmployeeItem
            employee={employee}
            onDelete={jest.fn()}
            onUpdate={jest.fn()}
          />
        </Tbody>
      </Table>,
    );
    expect(baseElement).toBeTruthy();
  });

  it('should allow call update function once', async () => {
    const onClick = jest.fn();

    render(
      <Table>
        <Tbody>
          <EmployeeItem
            employee={employee}
            onDelete={onClick}
            onUpdate={onClick}
          />
        </Tbody>
      </Table>,
    );
    const editIcon = screen.getByTestId('edit-icon-1');
    await userEvent.click(editIcon);
    expect(onClick).toHaveBeenCalled();
  });

  it('should allow call delete function once', async () => {
    const onClick = jest.fn();

    render(
      <Table>
        <Tbody>
          <EmployeeItem
            employee={employee}
            onDelete={onClick}
            onUpdate={onClick}
          />
        </Tbody>
      </Table>,
    );
    const trashIcon = screen.getByTestId('trash-icon-1');
    await userEvent.click(trashIcon);
    expect(onClick).toHaveBeenCalled();
  });
});
