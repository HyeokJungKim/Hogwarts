import React, { Component } from "react";
import "./App.css";
import HouseContainer from './Containers/HouseContainer'
import CharacterContainer from './Containers/CharacterContainer'

class App extends Component {

  state = {
    houses: [],
    characters: [],
  }

  componentDidMount(){
    fetch("http://localhost:3001/characters")
    .then(res => res.json())
    .then(characters => this.setState({characters: characters}))

    fetch("http://localhost:3001/houses")
    .then(res => res.json())
    .then(houses => this.setState({houses: houses}))
  }

  houseChange = (wizard, newHouse) => {
    const newWizard = {...wizard, house: newHouse}
    // I want to change C into 3
    // [A, B, C, D]
    // [A, B, 3, D]
    const updatedArray = this.state.characters.map(character => {
      if (character.id === newWizard.id) {
        return newWizard
      } else {
        return character
      }
    })
    this.setState({characters: updatedArray})


  }

  render() {
    return (
      <div className="app">
        <h1>You Can Do This!</h1>
        <CharacterContainer
          characters={this.state.characters}
          houses={this.state.houses}
          houseChange={this.houseChange}
        />
        <HouseContainer
          characters={this.state.characters}
          houses={this.state.houses}
        />
      </div>
    );
  }
}

export default App;
