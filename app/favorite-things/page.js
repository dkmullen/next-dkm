import MusicCard from '../ui/musicCard';
import styles from './page.module.css';
import { favoriteMusic } from '../lib/music';
import FavoritesTitlebar from '../ui/favorites-titlebar';

export default function Page() {
  return (
    <div className={styles['music-page']}>
      <FavoritesTitlebar page='Music' />
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
