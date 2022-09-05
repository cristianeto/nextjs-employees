import { useEffect } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { loadingEmployees } from '@features/employee/employeeSlice';
import { IEmployeesPage } from '@interfaces';
import { EmployeesScreen } from '@screens';
import { getEmployees } from '@services';
import { useAppDispatch } from 'src/redux/hooks';

const EmployeesPage: NextPage<IEmployeesPage> = ({ employees }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadingEmployees(employees));
  }, [dispatch, employees]);

  return <EmployeesScreen />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getEmployees();

  return {
    props: {
      employees: data,
    },
  };
};

export default EmployeesPage;
