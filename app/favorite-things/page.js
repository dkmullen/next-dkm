import MusicCard from "../ui/musicCard"

const favoriteMusic = [
  { name: 'johnLegendDancing',
    thumbnail: 'https://img.youtube.com/vi/FszBbfxDn4o/hqdefault.jpg',
    alt: 'John Legend at the piano',
    url: 'https://youtu.be/-wVWjl9Kq6U',
    priority: true,
    description: `Here is John Legend's wonderful cover of Springsteen's
              <strong>Dancing in the Dark</strong>. And because he is on Howard
              Stern, he sounds amazing. This one brought out the lyrics to me
              more than the original.`
  },
    { name: 'tedeschiMidnight',
    thumbnail: 'https://img.youtube.com/vi/-wVWjl9Kq6U/hqdefault.jpg',
    alt: 'Susan Tedeschi singing',
    url: 'https://youtu.be/20Ov0cDPZy8',
    priority: true,
    description: `My wife introduced me to the
              <strong>Tedeschi Trucks Band,</strong> a great band headed by
              singer Susan Tedeschi and her husband, guitarist Derek Trucks. I
              could listen for hours to any of their performances of
              <strong>Midnight in Harlem</strong>.`
  },
]

export default function Page() {
  return (
    <div className="page">
      <p>Favorite Things</p>;
            {favoriteMusic.map((item) => (
              <MusicCard  key={item.name} item={item} />
      ))}
    </div>
  )
}

// loading="eager" priority={true} 