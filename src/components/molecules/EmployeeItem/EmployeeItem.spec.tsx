import { Table, Tbody } from '@chakra-ui/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EmployeeItem from './EmployeeItem';
import { employee } from '@mocks';

describe('<EmployeeItem />', () => {
  const onOpenModalForm = jest.fn();
  const { baseElement, getByTestId } = render(
    <Table>
      <Tbody>
        <EmployeeItem
          employee={employee}
          onDelete={jest.fn()}
          onOpenModalForm={onOpenModalForm}
          onUpdate={jest.fn()}
        />
      </Tbody>
    </Table>,
  );

  beforeEach(() => {
    onOpenModalForm.mockClear();
  });
  it('should render EmployeeItem correctly', () => {
    expect(baseElement).toBeTruthy();
  });

  it('should allow call onOpenModalForm function once', () => {
    waitFor(async () => {
      const editIcon = getByTestId('edit-icon-1');
      await userEvent.click(editIcon);
      expect(onOpenModalForm).toHaveBeenCalled();
    });
  });

  it('should allow call delete function once', async () => {
    const onClick = jest.fn();

    render(
      <Table>
        <Tbody>
          <EmployeeItem
            employee={employee}
            onDelete={onClick}
            onOpenModalForm={onOpenModalForm}
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
