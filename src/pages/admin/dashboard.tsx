import { useState } from 'react';
import { NextPage } from 'next';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { IUser } from '@interfaces';
import { Navbar } from '@molecules';

const Dashboard: NextPage = () => {
  const [user, setUser] = useState<IUser>({ email: '', username: '' });
  const router = useRouter();
  const toast = useToast();

  const getProfile = async () => {
    const { data } = await axios.get('/api/profile');
    setUser({ email: data.email, username: data.username });
  };

  const logout = async () => {
    try {
      const { data } = await axios.post('/api/auth/logout');
      if (data === 'logout successfully') router.push('/auth/login');
    } catch (error) {
      toast({
        title: `${error}`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      router.push('/auth/login');
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={getProfile}>get profile</button>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Dashboard;
