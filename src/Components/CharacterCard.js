import React from "react";

class CharacterCard extends React.Component {

  state = {
    showForm: false
  }

  handleHouseClick = (e) => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  render() {
    // const {character} = this.props
    return (
      <div>
        <h1>{this.props.character.name}</h1>
        <img className="index-image" src={this.props.image} alt="wizard"/>
        <div >
        {this.state.showForm ?
          this.props.handleClick(this.props.character, this.handleHouseClick)
            :
          <h3 onClick={this.handleHouseClick}>House: {this.props.character.house}</h3>
        }
        </div>
      </div>
    )
  }
}

export default CharacterCard;
