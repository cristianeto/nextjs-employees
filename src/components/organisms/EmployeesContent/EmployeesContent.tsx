import React from 'react';
import { Button, Heading, useDisclosure } from '@chakra-ui/react';
import { EmployeesList, Navbar, SimpleTable } from '@molecules';
import { EmployeeForm } from '@organisms';

const EmployeesContent: React.FC = () => {
  const headersTable = ['#', 'Name', 'Lastname', 'Email', 'Actions'];
  const { isOpen, onOpen, onClose } = useDisclosure();

  const doSubmit = () => {
    console.log('Submiting...');
  };

  return (
    <>
      <Navbar />
      <Heading as="h1" size={'lg'}>
        Employees Page
      </Heading>
      <Button variant="solid" onClick={onOpen}>
        New Employee
      </Button>
      <EmployeeForm isOpen={isOpen} onClose={onClose} onSubmit={doSubmit} />
      <SimpleTable headers={headersTable}>
        <EmployeesList />
      </SimpleTable>
    </>
  );
};

export default EmployeesContent;
