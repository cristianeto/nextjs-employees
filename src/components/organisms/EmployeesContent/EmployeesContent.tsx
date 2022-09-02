import React from 'react';
import { EmployeesTable, Navbar } from '@molecules';

const EmployeesContent: React.FC = () => {
  return (
    <>
      <Navbar />
      <h1>Employees Page</h1>
      <EmployeesTable />
    </>
  );
};

export default EmployeesContent;
