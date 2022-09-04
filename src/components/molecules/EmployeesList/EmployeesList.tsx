import React from 'react';
import useSWR from 'swr';
import { IEmployee } from '@interfaces';
import { EmployeeItem } from '@molecules';

const EmployeesList: React.FC = () => {
  // const { employees } = useAppSelector((state) => state.employees);
  const { data: employees, error } = useSWR<IEmployee[]>('/employees');

  const doUpdate = (idEmployee: string | number) => {
    console.log('updating employee with ID:', idEmployee);
  };

  const doDelete = (idEmployee: string | number) => {
    console.log('deleting employee with ID: ', idEmployee);
  };

  if (error) return <div>Error to fetching employees!!!</div>;
  if (!employees) return <div>loading...</div>;

  return (
    <>
      {employees.map((employee: IEmployee) => (
        <EmployeeItem
          employee={employee}
          key={employee.id}
          onDelete={doDelete}
          onUpdate={doUpdate}
        />
      ))}
    </>
  );
};

export default EmployeesList;