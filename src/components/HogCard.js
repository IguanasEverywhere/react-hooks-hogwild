import React, { useState } from 'react';

function HogCard({ name, image, greased, medal, specialty, weight }) {

  const [isClicked, setIsClicked] = useState(false);

  function onCardClick() {
    setIsClicked((currentIsClicked) => !currentIsClicked);
  }

  return (
    <div onClick={onCardClick} style={{ backgroundImage: `url(${image})` }} className='ui six wide column pigTile minPigTile'>
      <h3>{name}</h3>
      {isClicked ?
        <div>
          <p className='achievementText'>{specialty}</p>
          <p className='subtleText'>{medal}</p>
          <p className='subtleText'>{weight}</p>
          {greased ? <p>Greased</p> : <p>Not Greased</p>}
        </div>
        : null}
    </div>
  )
}

export default HogCard;