import { useState } from 'react';
import { NextPage } from 'next';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { IUser } from '@interfaces';

const Dashboard: NextPage = () => {
  const [user, setUser] = useState<IUser>({ email: '', username: '' });
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const getProfile = async () => {
    const { data } = await axios.get('/api/profile');
    setUser({ email: data.email, username: data.username });
  };

  const logout = async () => {
    try {
      const { data } = await axios.post('/api/auth/logout');
      if (data === 'logout successfully') router.push('/auth/login');
    } catch (error) {
      enqueueSnackbar(`${error}`, { variant: 'error' });
      router.push('/auth/login');
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={getProfile}>get profile</button>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Dashboard;
