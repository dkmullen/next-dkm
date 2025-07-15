import BookCard from '@/app/ui/bookCard';
import { favoriteBooks } from '@/app/lib/books';
import styles from './page.module.css';
import FavoritesTitlebar from '@/app/ui/favorites-titlebar';

export default function Page() {
  return (
    <>
      <div className={styles['book-page-wrapper']}>
        <FavoritesTitlebar page='Books' />
        {favoriteBooks.map((item, index) => (
          <BookCard key={item.title} item={item} index={index} />
        ))}
      </div>
      ;
    </>
  );
}
