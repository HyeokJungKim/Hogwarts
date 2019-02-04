import React from "react";
import CharacterCard from '../Components/CharacterCard'
import UpdateForm from '../Components/UpdateForm'

export default class CharacterContainer extends React.Component {

  handleClick = (character, func) => {
    return(
    <UpdateForm
      character={character}
      houses={this.props.houses}
      houseChange={this.props.houseChange}
      handleHouseClick={func}
    />)
  }

  render() {
    // [{}, {}, {}] => [<>, <>, <>]
    const mappedArray = this.props.characters.map(character => (
      <CharacterCard key={character.id}
        character={character}
        image={character.image1}
        handleClick={this.handleClick}
      />)
    )

    return(
      <div>
        <h1>Character!</h1>
        <br/><br/>
        {mappedArray}
        <hr/>
      </div>
    );
  }
}
