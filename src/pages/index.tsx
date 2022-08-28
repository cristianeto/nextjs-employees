import { NextPage } from 'next';
import { Navbar } from '@molecules';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
