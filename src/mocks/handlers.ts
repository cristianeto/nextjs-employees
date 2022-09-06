import { rest } from 'msw';
import { employee, employees } from './employeesData';
import { IEmployee } from '@interfaces';

const apiURL = (path: string) => {
  return `${process.env.NEXT_PUBLIC_API_URL}${path}`;
};
export const handlers = [
  rest.post(apiURL('/auth/login'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.cookie('myTokenName', 'abc-123'),
      ctx.json('Login successful'),
    );
  }),

  rest.get(apiURL('/profile'), (req, res, ctx) => {
    // const { authToken } = req.cookies;
    // if (authToken) {
    return res(
      ctx.status(200),
      ctx.json({
        email: 'admin@local.local',
        username: 'admin',
      }),
    );
    // }
  }),

  rest.get(apiURL('/employees'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(100),
      ctx.json<IEmployee[]>(employees),
    );
  }),

  rest.post(apiURL('/employees'), (req, res, ctx) => {
    return res(ctx.status(201), ctx.json<IEmployee>(employee));
  }),

  rest.put(apiURL('/employees/:id'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<IEmployee>({
        id: `${req.params.id}`,
        dni: '1111111111',
        name: 'Chris',
        lastname: 'Brown',
        email: 'chris@example.com',
      }),
    );
  }),
];
