import Image from "next/image"
import DOMPurify from 'isomorphic-dompurify'

export default function MusicCard({ item }) {
  const safeHTML = DOMPurify.sanitize(item.description)


    return (
    <>
    <div>
        <div style={{ position: 'relative', width: '100%', height: 'auto',  aspectRatio: '4 / 3', maxWidth: '480px' }}>
            <Image 
                className="video-thumbnail" 
                src={item.thumbnail}
                alt={item.alt}
                url={item.url}
                priority={item.priority || false}
                fill
                style={{ objectFit: 'contain' }} // or 'cover' or 'fill' depending on your needs
        sizes="100%"
            />
        </div>
      <p dangerouslySetInnerHTML={{ __html: safeHTML }} />
    </div>
    </>

    )
}