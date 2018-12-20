import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game.js';
import Score from './Score.js';

class App extends Component {
  state = {
    correctAnswer: 0,
    numQuestions: 0,
  };
  
  // assim evita usar o .bind() ao passar para o componente filho
  handleAnswer = answerWasCorrect => {
  	if (answerWasCorrect) {
      this.setState(currState => ({
        correctAnswer: currState.correctAnswer + 1,
      }));
    }
    this.setState(currState => ({
      numQuestions: currState.numQuestions + 1,
    }));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Game handleAnswer={this.handleAnswer} />
		  <Score numQuestions={this.state.numQuestions} correctAnswer={this.state.correctAnswer} />
        </div>
      </div>
    );
  }
}

export default App;
