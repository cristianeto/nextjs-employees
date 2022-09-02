import React from 'react';
import type { NextPage } from 'next';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useForm } from '@hooks';
import { ICredentials } from '@interfaces';
import { Navbar } from '@molecules';

const initialValues: ICredentials = {
  email: '',
  password: '',
};

const Login: NextPage = () => {
  const [formValues, handleChange] = useForm<ICredentials>(initialValues);
  const { email, password } = formValues;
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      if (response.status === 200) {
        router.push('/admin/dashboard');
      }
    } catch (error) {
      toast({
        title: `${error}`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <Head>
        <title>My Next App</title>
        <meta content="Generated by create next app" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Navbar />
      <h1>Login</h1>
      <form>
        <input
          name="email"
          placeholder="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
