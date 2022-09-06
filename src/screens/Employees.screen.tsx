import React, { useState } from 'react';
import { Button, Heading, useDisclosure } from '@chakra-ui/react';
import useSWR from 'swr';
import { headersTable, employeeForm } from '@constants';
import { useToast } from '@hooks';
import { IEmployee } from '@interfaces';
import { EmployeesList, Navbar, SimpleTable } from '@molecules';
import { EmployeeForm } from '@organisms';
import { saveEmployee } from '@services';
import { useAppSelector } from 'src/redux/hooks';
import { capitalizeFirstLetter } from 'src/utils/helpers';

const EmployeesScreen: React.FC = () => {
  const { employee: emplo } = useAppSelector((state) => state.employees);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: employees, error } = useSWR<IEmployee[]>('/employees');
  const { instance: toast } = useToast();

  const {
    titles: { create, update },
  } = employeeForm;
  const [formType, setFormType] = useState(create);
  const [selectedEmployee, setSelectedEmployee] = useState<IEmployee>(emplo);

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
    setFormType(update);
    console.log('updating employee with ID:', idEmployee);
  };

  const doDelete = (idEmployee: string | number) => {
    console.log('deleting employee with ID: ', idEmployee);
  };

  const getEmployeeById = (employeeId: string) => {
    return employees?.find((emp) => employeeId === emp.id);
  };

  const populateForm = (newType: string, emploId: string = '') => {
    if (newType === update && emploId !== '') {
      const foundEmployee = getEmployeeById(emploId);
      if (foundEmployee) setSelectedEmployee(foundEmployee);
    } else {
      setSelectedEmployee(emplo);
    }
    setFormType(newType);
  };

  const openModalForm = (type: string, employeeId: string = '') => {
    populateForm(type, employeeId);
    onOpen();
  };

  return (
    <>
      <Navbar />
      <Heading as="h1" size={'lg'}>
        Employees Page
      </Heading>
      <Button variant="solid" onClick={() => openModalForm(create)}>
        {capitalizeFirstLetter(create)}
      </Button>
      <EmployeeForm
        data-testid="employee-form"
        formType={formType}
        initialState={selectedEmployee}
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
            data-testid="list-employee"
            onDelete={doDelete}
            onOpenModalForm={openModalForm}
            onUpdate={doUpdate}
          />
        </SimpleTable>
      )}
    </>
  );
};

export default EmployeesScreen;
