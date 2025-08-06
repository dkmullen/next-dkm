import Image from 'next/image';
import Link from 'next/link';
import DOMPurify from 'isomorphic-dompurify';
import styles from './ui.module.css';

export default function MusicCard({ item }) {
  const safeHTML = DOMPurify.sanitize(item.description);

  return (
    <>
      <div className={styles['card-wrapper']}>
        <Link href={item.url}>
        <div className={styles['music-thumbnail-wrapper']}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 'auto',
              aspectRatio: '4 / 3',
              maxWidth: '480px',
            }}
          >
            <Image
              className={styles['video-thumbnail']}
              src={item.thumbnail}
              alt={item.alt}
              url={item.url}
              priority={item.priority || false}
              fill
              style={{ objectFit: 'contain' }} // or 'cover' or 'fill'
              sizes='100%'
            />
          </div>
          </div>
          <p
            className={styles['video-description']}
            dangerouslySetInnerHTML={{ __html: safeHTML }}
          />
        </Link>
      </div>
    </>
  );
}
