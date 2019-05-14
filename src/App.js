import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangeHandler = (event) => {
    this.setState({userInput: event.target.value})
  }

  deleteCharHandler = ( charIndex )  => {
    let chars = [...this.state.userInput.split('')];
    chars.splice(charIndex, 1);
    this.setState({userInput: chars.join('')});
}

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.inputChangeHandler} value={this.state.userInput} />
        <p>Your text length: {this.state.userInput.length}</p>
        <ValidationComponent textLength={this.state.userInput.length} />
        <CharComponent text={this.state.userInput} deleteChar={this.deleteCharHandler} />
      </div>
    )
  }
}

export default App;
