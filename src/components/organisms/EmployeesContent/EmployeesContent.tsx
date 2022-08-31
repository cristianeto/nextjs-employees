import React from 'react';
import { IEmployeesContent } from '@interfaces';
import { EmployeesTable, Navbar } from '@molecules';

const EmployeesContent: React.FC<IEmployeesContent> = ({ employees }) => {
  return (
    <>
      <Navbar />
      <h1>Employees Page</h1>
      <EmployeesTable employees={employees} />
    </>
  );
};

export default EmployeesContent;
