import React from 'react';
import { IEmployeesContent } from '@interfaces';
import { EmployeesTable, Navbar } from '@molecules';

const EmployeesContent: React.FC<IEmployeesContent> = ({ employees }) => {
  const doUpdate = (idEmployee: string | number) => {
    console.log('updating employee with ID:', idEmployee);
  };

  const doDelete = (idEmployee: string | number) => {
    console.log('deleting employee with ID: ', idEmployee);
  };
  return (
    <>
      <Navbar />
      <h1>Employees Page</h1>
      <EmployeesTable
        employees={employees}
        onDelete={doDelete}
        onUpdate={doUpdate}
      />
    </>
  );
};

export default EmployeesContent;
