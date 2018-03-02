import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';

class App extends Component {
  state = {
    inputTxt: ''
  }

  onInputChange = (event) => {
    const inputTxt = event.target.value;
    this.setState({ inputTxt });
  }

  render() {
    const inputTxt = this.state.inputTxt;
    const inputLen = inputTxt.length;
    const outputChar = (inputLen >= 5) ? true : false;
    return (
      <div className="App">
        <header>
          <h1 className="App-title">React-16-Example #2</h1>
        </header>
        <div><input onChange={ this.onInputChange } value={ inputTxt } className="border input-style" type="text" /></div>
        <p>Input Length: { inputLen }</p>
        <Validation inputLen={ inputLen } />
      </div>
    );
  }
}

export default App;
