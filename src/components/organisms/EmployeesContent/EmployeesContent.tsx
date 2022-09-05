import React from 'react';
import { Button, Heading, useDisclosure } from '@chakra-ui/react';
import { headersTable } from '@constants';
import { IEmployee } from '@interfaces';
import { EmployeesList, Navbar, SimpleTable } from '@molecules';
import { EmployeeForm } from '@organisms';

const EmployeesContent: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const doSubmit = (employee: IEmployee) => {
    console.log('Submiting...', employee);
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
