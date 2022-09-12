import React from 'react';
import { IEmployee, IEmployeesList } from '@interfaces';
import { EmployeeItem } from '@molecules';

const EmployeesList: React.FC<IEmployeesList> = ({
  data: employees,
  onOpenModalForm,
  onDelete,
}) => {
  return (
    <>
      {employees &&
        employees?.map((employee: IEmployee) => (
          <EmployeeItem
            employee={employee}
            key={employee.id}
            onDelete={onDelete}
            onOpenModalForm={onOpenModalForm}
          />
        ))}
    </>
  );
};

export default EmployeesList;
