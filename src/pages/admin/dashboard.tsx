import { useState } from 'react';
import { NextPage } from 'next';
import axios from 'axios';
import { IUser } from '@interfaces';

const Dashboard: NextPage = () => {
  const [user, setUser] = useState<IUser>({ email: '', username: '' });
  const getProfile = async () => {
    const { data } = await axios.get('/api/profile');
    setUser({ email: data.email, username: data.username });
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={getProfile}>get profile</button>
    </div>
  );
};

export default Dashboard;
