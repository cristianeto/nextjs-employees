import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';
import jwt from 'jsonwebtoken';

export default function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse<string | Object>,
) {
  const { email, password } = req.body;

  if (email === 'admin@local.local' && password === 'admin') {
    const token: string = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        email: 'admin@local.local',
        username: 'admin',
      },
      `${process.env.NEXT_PUBLIC_SECRET_KEY}`,
    );
    const serialized = serialize('myTokenName', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict', // or none for comunicating with external BACKEND
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: '/',
    });
    res.setHeader('Set-Cookie', serialized);

    return res.status(200).json('Login successful');
  }

  return res.status(401).json({ error: 'Invalid credentials' });
}
