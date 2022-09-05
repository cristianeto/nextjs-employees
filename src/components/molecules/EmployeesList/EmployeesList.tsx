import React from 'react';
import { IEmployee, IEmployeesList } from '@interfaces';
import { EmployeeItem } from '@molecules';

const EmployeesList: React.FC<IEmployeesList> = ({
  data: employees,
  onUpdate,
  onDelete,
}) => {
  return (
    <>
      {employees !== undefined &&
        employees.map((employee: IEmployee) => (
          <EmployeeItem
            employee={employee}
            key={employee.id}
            onDelete={onUpdate}
            onUpdate={onDelete}
          />
        ))}
    </>
  );
};

export default EmployeesList;
