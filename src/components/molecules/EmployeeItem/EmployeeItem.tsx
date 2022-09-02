import React from 'react';
import { Tr, Td } from '@chakra-ui/react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { IEmployeeItem } from '@interfaces';

const EmployeeItem: React.FC<IEmployeeItem> = ({
  employee,
  onDelete,
  onUpdate,
}) => {
  return (
    <Tr>
      <Td isNumeric>{employee.id}</Td>
      <Td>{employee.name}</Td>
      <Td>{employee.lastname}</Td>
      <Td>{employee.email}</Td>
      <Td>
        <FaRegEdit
          data-testid={`edit-icon-${employee.id}`}
          onClick={() => onUpdate(employee.id)}
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
