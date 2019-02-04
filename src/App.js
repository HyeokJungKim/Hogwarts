import React, { Component } from "react";
import "./App.css";
import HouseContainer from './Containers/HouseContainer'
import CharacterContainer from './Containers/CharacterContainer'
import NewWizardForm from './Components/NewWizardForm'

class App extends Component {

  state = {
    houses: [],
    characters: [],
    filterTerm: "",
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
    // const updatedWizard = {...wizard, house: newHouse}
    // I want to change C into 3
    // [A, B, C, D]
    // [A, B, 3, D]
    fetch(`http://localhost:3001/characters/${wizard.id}`,{
      method: "PATCH",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({house: newHouse})
    })
    .then(res=> res.json())
    .then(updatedWizard => {
      const updatedArray = this.state.characters.map(character => {
        if (character.id === updatedWizard.id) {
          return updatedWizard
        } else {
          return character
        }
      })
      this.setState({characters: updatedArray})
    })


  }

  addWizard = (wizardObj) => {
    fetch("http://localhost:3001/characters/", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(wizardObj)
    })
    .then(res => res.json())
    .then(wizard => {
      const newArray = [...this.state.characters, wizard]
      this.setState({
        characters: newArray
      })
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  filteredCharacters = () => {
    return this.state.characters.filter(char =>{
      return char.name.toLowerCase().includes(this.state.filterTerm.toLowerCase()) || char.house.toLowerCase().includes(this.state.filterTerm.toLowerCase())
    })
  }

  render() {
    return (
      <div className="app">
        <NewWizardForm
          addWizard={this.addWizard}
        />
        <hr/>
        Filter:
        <input type="text"
        name="filterTerm"
        value={this.state.filterTerm}
        onChange={this.handleChange}/>
        <hr/>
        <CharacterContainer
          characters={this.filteredCharacters()}
          houses={this.state.houses}
          houseChange={this.houseChange}
        />
        <HouseContainer
          characters={this.filteredCharacters()}
          houses={this.state.houses}
        />
      </div>
    );
  }
}

export default App;
