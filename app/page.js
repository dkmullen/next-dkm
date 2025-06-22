import LikeButton from './like-button';

function Header({ title }) {
  return <h1>{`Hey. ${title}`}</h1>;
}

export default function Homepage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title='Wha?' />
      <p>Stop it.</p>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
