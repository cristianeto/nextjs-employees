import { Table, Tbody } from '@chakra-ui/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EmployeeItem from './EmployeeItem';
import { employee } from '@mocks';

describe('<EmployeeItem />', () => {
  const onOpenModalForm = jest.fn();
  const onDelete = jest.fn();
  const { baseElement, getByTestId, getByRole } = render(
    <Table>
      <Tbody>
        <EmployeeItem
          employee={employee}
          onDelete={onDelete}
          onOpenModalForm={onOpenModalForm}
        />
      </Tbody>
    </Table>,
  );

  beforeEach(() => {
    onOpenModalForm.mockClear();
    onDelete.mockClear();
  });
  it('should render EmployeeItem correctly', () => {
    expect(baseElement).toBeTruthy();
  });

  it('should allow call onOpenModalForm function once', () => {
    waitFor(async () => {
      const editIcon = getByTestId('edit-icon-1');
      await userEvent.click(editIcon);
      const titleModal = getByRole('banner', { name: /update employee/i });
      expect(onOpenModalForm).toHaveBeenCalled();
      expect(titleModal).toBeInTheDocument();
    });
  });

  it('should allow call delete function once', () => {
    waitFor(async () => {
      const trashIcon = screen.getByTestId('trash-icon-1');
      await userEvent.click(trashIcon);
      expect(onDelete).toHaveBeenCalled();
    });
  });
});
