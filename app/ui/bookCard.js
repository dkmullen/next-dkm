import Image from 'next/image';
import DOMPurify from 'isomorphic-dompurify';
import styles from './ui.module.css';

export default function BookCard({ item, index }) {
  const safeHTML = DOMPurify.sanitize(item.description);

  return (
    <>
      <div
        className={`${styles['book-card-wrapper']} ${
          index % 2 === 0 ? styles['image-left'] : styles['image-right']
        }`}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 'auto',
          }}
        >
          <Image
            className={styles['book-thumbnail']}
            src={`/books/${item.thumbnail}`}
            alt={item.alt}
            width={300}
            height={400}
          />
        </div>
        <div>
          <h2 className={styles['book-title']}>
            <strong>{item.title}</strong> by {item.author}
            {item.audioReader && (
              <span>
                (Read by <strong>{item.audioReader}</strong>)
              </span>
            )}
          </h2>
          <p
            className={styles['book-description']}
            dangerouslySetInnerHTML={{ __html: safeHTML }}
          />
        </div>
      </div>
    </>
  );
}
