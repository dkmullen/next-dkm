// import styles from './page.module.css';
import FavoritesTitlebar from '@/app/ui/favorites-titlebar';
import { otherFavs } from '@/app/lib/other-things';
import OtherFavsCard from '@/app/ui/otherFavsCard';
import styles from './page.module.css';

export default function Page() {
  return (
    <>
      <div className={styles['book-page-wrapper']}>
        <FavoritesTitlebar page='Other Things' />
        {otherFavs.map((item, index) => (
          <OtherFavsCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </>
  );
}
