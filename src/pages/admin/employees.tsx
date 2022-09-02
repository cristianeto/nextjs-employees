import { GetServerSideProps, NextPage } from 'next';
import { IEmployeesPage } from '@interfaces';
import { EmployeesContent } from '@organisms';
import { getEmployees } from '@services';

const EmployeesPage: NextPage<IEmployeesPage> = ({ employees }) => {
  return (
    <div>
      <EmployeesContent employees={employees} />
    </div>
  );
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
