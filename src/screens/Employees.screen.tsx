import React, { useState } from 'react';
import { Button, Heading, useDisclosure } from '@chakra-ui/react';
import useSWR from 'swr';
import { headersTable, employeeForm } from '@constants';
import {
  addEmployee,
  resetEmployee,
  setEmployee,
  updateEmployee,
} from '@features/employee/employeeSlice';
import { useToast } from '@hooks';
import { IEmployee } from '@interfaces';
import { EmployeesList, Navbar, SimpleTable } from '@molecules';
import { EmployeeForm } from '@organisms';
import { saveEmployee } from '@services';
import { useAppSelector, useAppDispatch } from 'src/redux/hooks';
import { capitalizeFirstLetter } from 'src/utils/helpers';

const EmployeesScreen: React.FC = () => {
  const { employee: emplo } = useAppSelector((state) => state.employees);
  const { data: employees, error, mutate } = useSWR<IEmployee[]>('/employees');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { instance: toast } = useToast();
  const dispatch = useAppDispatch();
  const {
    titles: { create, update },
  } = employeeForm;

  const [formType, setFormType] = useState(create);

  const doCreate = (employee: IEmployee) => {
    dispatch(addEmployee(employee));
  };

  const doUpdate = (employee: IEmployee) => {
    dispatch(updateEmployee(employee));
  };

  const doSubmit = async (employee: IEmployee) => {
    try {
      const { data: newEmployee } = await saveEmployee(employee);
      if (!employee.id) {
        doCreate(newEmployee);
      } else {
        doUpdate(employee);
      }
      toast('Saved successfully');
    } catch (ex) {
      toast(String(ex), 'error');
    } finally {
      onClose();
      dispatch(resetEmployee());
    }
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
      if (foundEmployee) dispatch(setEmployee(foundEmployee));
    }
    setFormType(newType);
  };

  const openModalForm = (type: string, employeeId: string = '') => {
    populateForm(type, employeeId);
    onOpen();
  };
  const closeModalForm = () => {
    dispatch(resetEmployee());
    onClose();
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
        initialState={emplo}
        isOpen={isOpen}
        onClose={closeModalForm}
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
          />
        </SimpleTable>
      )}
    </>
  );
};

export default EmployeesScreen;
