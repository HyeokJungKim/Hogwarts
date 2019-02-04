import React from "react";
import CharacterCard from './CharacterCard'
import CharacterDetails from './CharacterDetails'

const House = props => {

  const renderAdditionalInfo = (character, func) => {
    return (
      <CharacterDetails
        character={character}
        handleHouseClick={func}
      />
    )
  }

  let characters = props.characters.map(character =>
    (<CharacterCard
      key={character.id}
      character={character}
      image={character.image2}
      renderAdditionalInfo={renderAdditionalInfo}
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
