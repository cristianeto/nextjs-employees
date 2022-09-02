import { useEffect } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { IEmployeesPage } from '@interfaces';
import { EmployeesContent } from '@organisms';
import { getEmployees } from '@services';
import { loadingEmployees } from 'src/features/employee/employeeSlice';
import { useAppDispatch } from 'src/redux/hooks';

const EmployeesPage: NextPage<IEmployeesPage> = ({ employees }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadingEmployees(employees));
  }, [dispatch, employees]);

  return <EmployeesContent />;
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
