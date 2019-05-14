import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value})
  }

  deleteCharHandler = ( index )  => {
    const chars = [...this.state.userInput.split('')];
    chars.splice(index, 1);
    this.setState({userInput: chars.join('')});
}

  render() {
    const charList = this.state.userInput.split('').map((char, index) => {
      return <Char 
        character={char} 
        key={index}
        clicked={() => this.deleteCharHandler(index)} />
    });

    return (
      <div className="App">
        <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput} />
        <p>Your text length: {this.state.userInput.length}</p>
        <Validation textLength={this.state.userInput.length} />
        {charList}
      </div>
    )
  }
}

export default App;
