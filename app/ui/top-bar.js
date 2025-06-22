'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from './ui.module.css';

const links = [
  { name: 'Favorite Things', href: '/favorite-things' },
  { name: 'Writing', href: '/writing' },
  { name: 'Contact Me', href: '/contact-me' },
];

export default function TopBar() {
  const pathname = usePathname();

  return (
    <>
      <div className={styles['top-bar']}>
        <div className={styles['nav-wrapper']}>
          <div className={styles['logo-text']}>
            <Link href='/'>dkmullen.com</Link>
          </div>
          <div className={styles['nav-links']}>
            {links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(styles.navlink, {
                    [styles['active-link']]: pathname === link.href,
                  })}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
