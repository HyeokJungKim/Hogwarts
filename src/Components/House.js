import React from "react";
import CharacterCard from './CharacterCard'

const House = props => {
  let characters = props.characters.map(character =>
    (<CharacterCard
      key={character.id}
      character={character}
      image={character.image2}
    />)
  )
  return (
    <div>
      <h1>{props.house}</h1>
      <ul>
        {characters}
      </ul>
    </div>
  );
};

export default House;
