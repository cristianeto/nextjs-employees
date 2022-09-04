import React from 'react';
import { EmployeesList, Navbar, SimpleTable } from '@molecules';

const EmployeesContent: React.FC = () => {
  const headersTable = ['#', 'Name', 'Lastname', 'Email', 'Actions'];

  return (
    <>
      <Navbar />
      <h1>Employees Page</h1>
      <SimpleTable headers={headersTable}>
        <EmployeesList />
      </SimpleTable>
    </>
  );
};

export default EmployeesContent;
