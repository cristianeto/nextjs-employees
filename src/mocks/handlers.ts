import { rest } from 'msw';
import { employees } from './employeesData';

export const handlers = [
  rest.post('/auth/login', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.cookie('myTokenName', 'abc-123'),
      ctx.json('Login successful'),
    );
  }),

  rest.get('/profile', (req, res, ctx) => {
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

  rest.get('/employees', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(employees));
  }),
];
