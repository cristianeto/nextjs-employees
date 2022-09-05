import React from 'react';
import { Button, Heading, useDisclosure } from '@chakra-ui/react';
import { headersTable } from '@constants';
import { IEmployee } from '@interfaces';
import { EmployeesList, Navbar, SimpleTable } from '@molecules';
import { EmployeeForm } from '@organisms';
import { saveEmployee } from '@services';

const EmployeesScreen: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const doSubmit = async (employee: IEmployee) => {
    try {
      const { data } = await saveEmployee(employee);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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

export default EmployeesScreen;
