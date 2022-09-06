import React from 'react';
import { Tr, Td } from '@chakra-ui/react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { employeeForm } from '@constants';
import { IEmployeeItem } from '@interfaces';

const EmployeeItem: React.FC<IEmployeeItem> = ({
  employee,
  onDelete,
  onOpenModalForm,
  onUpdate,
}) => {
  const {
    titles: { update },
  } = employeeForm;

  return (
    <Tr>
      <Td isNumeric>{employee.id}</Td>
      <Td>{employee.name}</Td>
      <Td>{employee.lastname}</Td>
      <Td>{employee.email}</Td>
      <Td>
        <FaRegEdit
          data-testid={`edit-icon-${employee.id}`}
          onClick={() => onOpenModalForm(update, employee.id)}
        />
        <FaRegTrashAlt
          data-testid={`trash-icon-${employee.id}`}
          onClick={() => onDelete(employee.id)}
        />
      </Td>
    </Tr>
  );
};

export default EmployeeItem;
