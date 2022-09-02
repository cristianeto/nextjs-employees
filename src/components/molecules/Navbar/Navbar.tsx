import { FC, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { publicItemsNavbar, adminItemsNavbar } from '@constants';
import { INavbar } from '@interfaces';

const Navbar: FC = () => {
  const router = useRouter();
  const [navbarItems, setNavbarItems] = useState<INavbar[]>([]);

  const swithRoutes = useCallback(() => {
    if (router.pathname.includes('admin')) {
      setNavbarItems(adminItemsNavbar);
    } else {
      setNavbarItems(publicItemsNavbar);
    }
  }, [router.pathname]);

  useEffect(() => {
    swithRoutes();
  }, [swithRoutes]);

  return (
    <nav>
      <ul>
        {navbarItems.map((item: INavbar) => (
          <li key={item.name}>
            <Link href={item.path}>
              <a>{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
