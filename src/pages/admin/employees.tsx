import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import axios from 'axios';
import { IEmployee } from '@interfaces';
import { Navbar } from '@molecules';

const EmployeesPage: NextPage = () => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);

  const populateEmployees = async () => {
    const { data } = await axios.get('/api/employees');
    setEmployees(data);
  };

  useEffect(() => {
    populateEmployees();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Employees Page</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeesPage;
