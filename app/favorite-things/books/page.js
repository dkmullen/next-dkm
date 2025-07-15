import BookCard from '@/app/ui/bookCard';
import { favoriteBooks } from '@/app/lib/books';

export default function Page() {
  return (
    <>
      <h2>Books</h2>
      <div>
        {favoriteBooks.map((item) => (
          <BookCard key={item.title} item={item} />
        ))}
      </div>
      ;
    </>
  );
}
