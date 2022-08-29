import { NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';

export default function profileHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { myTokenName } = req.cookies;

  try {
    if (myTokenName) {
      const user = verify(myTokenName, `${process.env.NEXT_PUBLIC_SECRET_KEY}`);
      return res.status(200).json(user);
    }
    return res.status(401).json({ error: 'no token' });
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}
