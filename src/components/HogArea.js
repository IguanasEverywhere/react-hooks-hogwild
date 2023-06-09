import React from 'react';
import HogCard from './HogCard';

function HogArea({ hogs }) {

  const hogCards = hogs.map((hog) =>
    <HogCard
      key={hog.name}
      name={hog.name}
      image={hog.image}
      greased={hog.greased}
      medal={hog['highest medal achieved']}
      specialty={hog.specialty}
      weight={hog.weight}
    />);

  return (
    <ul className='ui grid container'>
      {hogCards}
    </ul>
  )
}

export default HogArea;