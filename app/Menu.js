'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Menu = () => {
  const router = usePathname()
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

  const menu = ['Showcases', 'Clients', 'About'];
  return (
    <ul className="menu">
      {menu.map((item, index) => (
        <li key={index}>
          <Link href={`/${item.toLowerCase()}`} passHref className={router.pathname === `/${item.toLowerCase()}` ? 'active' : ''}>
              {item}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu