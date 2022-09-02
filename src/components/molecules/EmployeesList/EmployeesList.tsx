import React from 'react';
import { Tbody } from '@chakra-ui/react';
import { IEmployee, IEmployeesList } from '@interfaces';
import { EmployeeItem } from '@molecules';

const EmployeesList: React.FC<IEmployeesList> = ({
  employees,
  onDelete,
  onUpdate,
}) => {
  return (
    <Tbody>
      {employees.map((employee: IEmployee) => (
        <EmployeeItem
          employee={employee}
          key={employee.id}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </Tbody>
  );
};

export default EmployeesList;
