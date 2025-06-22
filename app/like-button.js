'use client';
import { useState } from 'react';

export default function LikeButton() {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks + 1);
  }

  return <button onClick={handleClick}>{`Clicks ${clicks}`}</button>;
}
