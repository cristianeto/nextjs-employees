import { NextApiRequest, NextApiResponse } from 'next';
import { IEmployee } from '@interfaces';
import employees from 'src/data/employees.data';

interface IError {
  error: string;
}

export default function employeesHandler(
  req: NextApiRequest,
  res: NextApiResponse<IEmployee[] | IEmployee | IError>,
) {
  if (req.method === 'GET') {
    const { employeeId } = req.query;

    const employee = employees.find((emp) => emp.id === employeeId);
    if (employee) {
      return res.status(200).json(employee);
    }

    return res.status(404).json({ error: 'Employee not found' });
  }
  if (req.method === 'PUT') {
    const { id, dni, name, lastname, email } = req.body;

    const employee: IEmployee = {
      id,
      dni,
      name,
      lastname,
      email,
    };

    return res.status(201).json(employee);
  }
  // ? TODO: connect to database for persisting data

  return res.status(201).json({ error: 'Uknown employee' });
}
