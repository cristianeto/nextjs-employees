import { FC } from 'react';
import Link from 'next/link';

const Navbar: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/auth/login">
            <a>Login</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
