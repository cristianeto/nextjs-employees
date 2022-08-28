import { useState } from 'react';
import { NextPage } from 'next';
import axios from 'axios';
import { useRouter } from 'next/router';
import { IUser } from '@interfaces';

const Dashboard: NextPage = () => {
  const [user, setUser] = useState<IUser>({ email: '', username: '' });
  const router = useRouter();
  const getProfile = async () => {
    const { data } = await axios.get('/api/profile');
    setUser({ email: data.email, username: data.username });
  };

  const logout = async () => {
    try {
      const { data } = await axios.post('/api/auth/logout');
      if (data === 'logout successfully') router.push('/login');
    } catch (error) {
      console.log(error);
      router.push('/login');
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
