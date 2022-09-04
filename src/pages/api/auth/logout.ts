import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';
import { verify } from 'jsonwebtoken';

export default function logoutHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { myTokenName } = req.cookies;
  if (!myTokenName) return res.status(401).json({ error: 'no token' });
  try {
    verify(myTokenName, `${process.env.NEXT_PUBLIC_SECRET_KEY}`);
    const serialized = serialize('myTokenName', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict', // or none for comunicating with external BACKEND
      maxAge: 0,
      path: '/',
    });
    res.setHeader('Set-Cookie', serialized);

    return res.status(200).json('logout successfully');
  } catch (error) {
    return res.status(401).json({ error: 'invalid token' });
  }
}
