import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import CharOutput from './CharOutput/CharOutput';

class App extends Component {
  state = {
    inputTxt: ''
  }

  onInputChange = (event) => {
    const inputTxt = event.target.value;
    this.setState({ inputTxt });
  }

  onItemClick = (index) => {
    let inputTxt = this.state.inputTxt;
    const inputArr = inputTxt.split('');
    inputArr.splice(index, 1);
    inputTxt = inputArr.join('');
    this.setState({ inputTxt });

  }

  render() {
    const inputTxt = this.state.inputTxt;
    const inputArr = inputTxt.split('');
    const inputLen = inputTxt.length;
    const charOutput = (inputLen >= 5) ? (
        <div>
          {
            inputArr.map((char, index) => {
              return <CharOutput character={ char } key={ index } index={ index } onItemClick={ this.onItemClick } />;
            })
          }
        </div>
      ) : <div />;
    return (
      <div className="App">
        <header>
          <h1 className="App-title">React-16-Example #2</h1>
        </header>
        <label><strong>Enter some Text</strong></label>
        <div>
          <input
            onChange={ this.onInputChange }
            value={ inputTxt }
            className="border input-style"
            type="text"
          />
        </div>
        <p>Input Length: { inputLen }</p>
        <Validation inputLen={ inputLen } />
        <hr />
        { charOutput }
      </div>
    );
  }
}

export default App;
