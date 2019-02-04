import React from "react";
import House from "../Components/House";

export default class HouseContainer extends React.Component {
  sortHouse = (houseName) => {
    return this.props.characters.filter(character => character.house === houseName)
  }

  render() {
    return (<div>
      <h1>House Container</h1>
      <ul className="houseContainer">
        {this.props.houses.map(house =>
          (<House
            key={house}
            house={house}
            characters={this.sortHouse(house)}
          />))
        }
      </ul>
    </div>)
  }
}
