import MusicCard from '../ui/musicCard';
import styles from './page.module.css';
import clsx from 'clsx';
import Link from 'next/link';
import { favoriteMusic } from '../lib/music';

export default function Page() {
  return (
    <div className={styles['music-page']}>
      <div className={clsx('center', styles['title-bar'])}>
        <h2>Favorite Things - Music</h2>
        <p>
          Some of my favorite music,{' '}
          <Link href='favorite-things/books'>books</Link> and{' '}
          <Link href='favorite-things/other-things'>other things</Link> on the
          web.
        </p>
      </div>
      <div id={styles['music-grid']}>
        {favoriteMusic.map((item) => (
          <MusicCard
            key={item.name}
            item={item}
            className={styles['music-card']}
          />
        ))}
      </div>
    </div>
  );
}

// loading="eager" priority={true}
