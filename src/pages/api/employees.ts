import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuid } from 'uuid';
import { IEmployee } from '@interfaces';
import employees from 'src/data/employees.data';

interface IError {
  error: string;
}

export default function employeesHandler(
  req: NextApiRequest,
  res: NextApiResponse<IEmployee[] | IEmployee | IError>,
) {
  if (req.method === 'GET') return res.status(200).json(employees);
  if (req.method === 'POST') {
    const { dni, name, lastname, email } = req.body;
    const employee: IEmployee = {
      id: uuid(),
      dni,
      name,
      lastname,
      email,
      type: 'employee',
    };
    // ? TODO: connect to database for persisting data
    employees.push(employee);
    delete employee.password;

    return res.status(201).json(employee);
  }

  return res.status(400).json({ error: 'Invalid request' });
}
