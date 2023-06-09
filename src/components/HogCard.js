import React, { useState } from 'react';

function HogCard({ name, image, greased, medal, specialty, weight }) {

  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);


  function onCardClick() {
    setIsClicked((currentIsClicked) => !currentIsClicked);
  }

  function handleVisibleClick() {
    setIsVisible((prevVisible => !prevVisible));
  }


  return (
    <>
      {isVisible ?
      <div onClick={onCardClick} style={{ backgroundImage: `url(${image})` }} className='ui six wide column pigTile minPigTile'>
        <h3>{name}</h3>
        <button onClick={handleVisibleClick}>Make Me Invisible</button>
        {isClicked ?
          <div>
            <p className='achievementText'>{specialty}</p>
            <p className='subtleText'>{medal}</p>
            <p className='subtleText'>{weight}</p>
            {greased ? <p>Greased</p> : <p>Not Greased</p>}
          </div>
          : null}
      </div> :
      <button onClick={handleVisibleClick}>Make me Visible</button>}
    </>
  )
}

export default HogCard;