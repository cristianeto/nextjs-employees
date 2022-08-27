import React from 'react';
import type { NextPage } from 'next';
import axios from 'axios';
import Head from 'next/head';
import { useForm } from '@hooks';
import { ICredentials } from '@interfaces';

const initialValues: ICredentials = {
  email: '',
  password: '',
};

const Home: NextPage = () => {
  const [formValues, handleChange] = useForm<ICredentials>(initialValues);
  const { email, password } = formValues;

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { data } = await axios.post('/api/auth/login', { email, password });
    console.log(data);
  };

  return (
    <div>
      <Head>
        <title>My Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Login</h1>
      <form>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="email"
          value={email}
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="password"
          value={password}
        />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Home;
