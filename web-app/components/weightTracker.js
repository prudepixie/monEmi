import React from 'react'
import ReactDOM from 'react-dom'

export default class WeightTracker extends React.Component {
    state = {
      value: '',
      inputError: false,
      placeholder: ''
    }
  
    save(){
      this.props.addToList(this.state.value)
      this.setState({
        value: ''
      })
    }
  
    addWeight = (e) => {
    
      if (this.inputError(e.target.value)) {
        this.setState ({
            inputError: this.inputError(e.target.value),
            placeholder: 'only insert numbers!!!',
            value: ''
        })
      } else {
          this.setState({
            inputError: this.inputError(e.target.value),
            value: e.target.value,
            placeholder: ''
          })
      }
    }

    inputError(value) {
        return !Number.isInteger(parseInt(value))
    }
  
    render() {
        const { inputError, placeholder } = this.state

      return (
        <form onSubmit={(e) => e.preventDefault()} >
          <label>Start by entering your weight  </label>
          <input placeholder={placeholder} value={this.state.value} onChange={this.addWeight} style={{border: inputError ? '1px solid red' : null }}/>
          <button disabled={inputError} onClick={this.save.bind(this)}>Save</button>
        </form>
      )
    }
  }
