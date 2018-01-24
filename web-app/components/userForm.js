import React from 'react'
import ReactDOM from 'react-dom'

export default class UserForm extends React.Component {
  state = {
    value: ''
  }

  save(){
    this.props.addToList(this.state.value)
    this.setState({
      value: ''
    })
  }

  updateName = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Name</label>
        <input value={this.state.value} onChange={this.updateName}/>
        <button onClick={this.save.bind(this)}>Save</button>
      </form>
    )
  }
}
