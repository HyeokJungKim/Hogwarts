import React,{Component} from 'react'

class NewWizardForm extends Component{

  state={
    name: "",
    house: "",
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addWizard(this.state)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        Name:
        <input type="text" name="name" value={this.state.name} onChange={this.handleInput}/>
        House:
        <input type="text" name="house" value={this.state.house} onChange={this.handleInput}/>
        <input type="submit"/>

      </form>
    )
  }
}

export default NewWizardForm
