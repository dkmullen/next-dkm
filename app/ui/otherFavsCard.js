import Image from 'next/image';
import Link from 'next/link';
import DOMPurify from 'isomorphic-dompurify';
import styles from './ui.module.css';

export default function OtherFavsCard({ item, index }) {
  const safeHTML = DOMPurify.sanitize(item.description);
  return (
    <>
      <div
        className={`${styles['book-card-wrapper']} ${
          index % 2 === 0 ? styles['image-left'] : styles['image-right']
        }`}
      >
        <div
        className={styles['book-image-wrapper']}
          style={{
            position: 'relative',
            width: '100%',
            height: 'auto',
            marginTop: '10px'
            
          }}
        >
        {/* {!item.youtube && ( */}
          <Image
            className={styles['book-thumbnail']}
            src={!item.youtube ? `/images/${item.thumbnail}` : item.thumbnail}
            alt={item.alt}
            width={item.imgWidth || 480}
            height={item.imgHeight || 360}
          />
        </div>
        <div>
          <h2 className={styles['book-title']}>
            <strong>{item.title}</strong>
          </h2>
          <p
            className={styles['book-description']}
            dangerouslySetInnerHTML={{ __html: safeHTML }}
          />
        </div>
      </div>
    <hr style={{ margin: '2rem 0', opacity: '0.4' }} />

    </>
  );
}
