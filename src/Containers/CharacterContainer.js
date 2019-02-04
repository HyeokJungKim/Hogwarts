import React from "react";
import CharacterCard from '../Components/CharacterCard'
import UpdateForm from '../Components/UpdateForm'

export default class CharacterContainer extends React.Component {

  renderAdditionalInfo = (character, func) => {
    return(
      // Returns a component with info being passed down as props
      // UpdateForm is receiving this information
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
      <CharacterCard
        key={character.id}
        character={character}
        image={character.image1}
        renderAdditionalInfo={this.renderAdditionalInfo}
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
