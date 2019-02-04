import React from "react";

const CharacterDetails = ({character, handleHouseClick}) => {
  
  return (
    <div onClick={handleHouseClick}>
      <h1>Name: {character.name}</h1>
      <h2>Age: {character.age}</h2>
      <h3>House: {character.house}</h3>
    </div>
  )
};

export default CharacterDetails;
