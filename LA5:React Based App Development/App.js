import React, { Component } from 'react';
import RandomNumber from './RandomNumber';

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomNumber: null,
      min: 1, // Minimum value for the random number
      max: 100, // Maximum value for the random number
    };
  }

  generateRandomNumber = () => {
    const { min, max } = this.state;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    this.setState({ randomNumber: randomNum });
  };

  render() {
    return (
      <div className="App">
        <h1>Random Number Generator</h1>
        <RandomNumber
          randomNumber={this.state.randomNumber}
          generateRandomNumber={this.generateRandomNumber}
        />
      </div>
    );
  }
}

export default App;
