import Image from 'next/image';
import Link from 'next/link';
import DOMPurify from 'isomorphic-dompurify';
import styles from './ui.module.css';

export default function OtherFavsCard({ item, index }) {
  const safeHTML = DOMPurify.sanitize(item.description);
  return (
    <>
      <div
        className={`${styles['otherfavs-card-wrapper']} ${
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
          {!item.youtube && (
            <Image
              className={styles['otherfavs-thumbnail']}
              src={
                item.thumbnail
                  ? `/images/${item.thumbnail}`
                  : `/images/${item.yThumbnail}`
              }
              alt={item.alt}
              width={300}
              height={400}
            />
          )}
          {item.youtube && (
            <Image
              className={styles['otherfavs-thumbnail']}
              src={item.thumbnail}
              alt={item.alt}
              width={300}
              height={400}
            />
          )}
        </div>
        <Link href={item.url}>
          <h2 className={styles['otherfavs-title']}>{item.title}</h2>
        </Link>
        <div>
          <p
            className={styles['book-description']}
            dangerouslySetInnerHTML={{ __html: safeHTML }}
          />
        </div>
      </div>
    </>
  );
}
