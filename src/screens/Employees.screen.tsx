import React, { useState } from 'react';
import { Button, Heading, useDisclosure } from '@chakra-ui/react';
import useSWR from 'swr';
import { headersTable, employeeForm } from '@constants';
import { useToast } from '@hooks';
import { IEmployee } from '@interfaces';
import { EmployeesList, Navbar, SimpleTable } from '@molecules';
import { EmployeeForm } from '@organisms';
import { saveEmployee } from '@services';
import { capitalizeFirstLetter } from 'src/utils/helpers';

const EmployeesScreen: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: employees, error } = useSWR<IEmployee[]>('/employees');
  const { instance: toast } = useToast();

  const {
    titles: { create, updateRegister },
  } = employeeForm;
  const [formType, setFormType] = useState(create);

  const doSubmit = async (employee: IEmployee) => {
    try {
      await saveEmployee(employee);
      toast('Saved successfully');
    } catch (ex) {
      toast(String(ex), 'error');
    } finally {
      onClose();
    }
  };

  const doUpdate = (idEmployee: string | number) => {
    setFormType(updateRegister);
    console.log('updating employee with ID:', idEmployee);
  };

  const doDelete = (idEmployee: string | number) => {
    console.log('deleting employee with ID: ', idEmployee);
  };

  return (
    <>
      <Navbar />
      <Heading as="h1" size={'lg'}>
        Employees Page
      </Heading>
      <Button variant="solid" onClick={onOpen}>
        {capitalizeFirstLetter(create)}
      </Button>
      <EmployeeForm
        formType={formType}
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={doSubmit}
      />
      {error && <span>Error to fetching employees!!!</span>}
      {!error && !employees ? (
        <span>loading...</span>
      ) : (
        <SimpleTable headers={headersTable}>
          <EmployeesList
            data={employees}
            onDelete={doDelete}
            onUpdate={doUpdate}
          />
        </SimpleTable>
      )}
    </>
  );
};

export default EmployeesScreen;
