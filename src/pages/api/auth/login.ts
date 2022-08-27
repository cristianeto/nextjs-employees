import { NextApiRequest, NextApiResponse } from 'next';
import { ICredentials } from '@interfaces';

export default function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse<ICredentials>,
) {
  const { email, password } = req.body;

  return res.status(200).json({ email, password });
}
