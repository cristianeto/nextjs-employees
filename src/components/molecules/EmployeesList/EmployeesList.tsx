import React from 'react';
import { Tbody } from '@chakra-ui/react';
import { IEmployee } from '@interfaces';
import { EmployeeItem } from '@molecules';
import { useAppSelector } from 'src/redux/hooks';

const EmployeesList: React.FC = () => {
  const { employees } = useAppSelector((state) => state.employees);

  const doUpdate = (idEmployee: string | number) => {
    console.log('updating employee with ID:', idEmployee);
  };

  const doDelete = (idEmployee: string | number) => {
    console.log('deleting employee with ID: ', idEmployee);
  };

  return (
    <Tbody>
      {employees.map((employee: IEmployee) => (
        <EmployeeItem
          employee={employee}
          key={employee.id}
          onDelete={doDelete}
          onUpdate={doUpdate}
        />
      ))}
    </Tbody>
  );
};

export default EmployeesList;
