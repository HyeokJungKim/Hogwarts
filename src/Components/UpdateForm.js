import React from "react";

class UpdateForm extends React.Component {

  renderOptions = () => {
    return this.props.houses.map(house => (
      <option key={house} value={house}> {house} </option>
    ))
  }

  handleSelectChange = (event) => {
    this.props.houseChange(this.props.character, event.target.value)
  }

  render() {
    return (
      <div>
        <select value={this.props.character.house} onChange={this.handleSelectChange}>
          {this.renderOptions()}
        </select>
        <button onClick={this.props.handleHouseClick}>Submit</button>
      </div>
    )
  }
}

export default UpdateForm;
