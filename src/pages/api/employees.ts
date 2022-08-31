import { NextApiRequest, NextApiResponse } from 'next';
import { IEmployee } from '@interfaces';
import employees from 'src/data/employees.data';

export default function employeesHandler(
  req: NextApiRequest,
  res: NextApiResponse<IEmployee[]>,
) {
  return res.status(200).json(employees);
}
