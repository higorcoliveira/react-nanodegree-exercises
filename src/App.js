import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
  	fieldValue: ''
  }

  changeFieldValue = (fieldValue) => {
  	this.setState(() => ({
    	fieldValue: fieldValue
    }))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input 
			type="text" 
			placeholder="Say Something" 
      		value={this.fieldValue}
            onChange={(event) => this.changeFieldValue(event.target.value)}
    	  />
          <p className="echo">Echo:</p>
          <p>{this.state.fieldValue}</p>
        </div>
      </div>
    );
  }
}

export default App;
