'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from './ui.module.css';

const links = [
  { name: 'music,', href: '/favorite-things' },
  { name: 'books,', href: '/favorite-things/books' },
  { name: '+ other things', href: '/favorite-things/other-things' },
];

export default function FavoritesTitlebar({ page }) {
  const pathname = usePathname();

  return (
    <div>
      <div className={clsx('center', styles['title-bar'])}>
        <h2 className={styles['fav-title']}>Favorite Things - {page}</h2>
        <p className={styles['fav-links']}>
          Some of my favorite{' '}
          {links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(styles.favsLink, {
                  [styles['active-favsLink']]: pathname === link.href,
                })}
              >
                {link.name}{' '}
              </Link>
            );
          })}
        </p>
      </div>
    </div>
  );
}
