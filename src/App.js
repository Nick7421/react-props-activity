import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import EnterNumber from './components/EnterNumber.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: 0
    }
  }
  increaseNumber=(inputNumber) =>{
    this.setState({
      total:this.state.total + parseInt(inputNumber)
    })
  }
  decreaseNumber= (inputNumber)=>{
    this.setState({
      total: this.state.total - inputNumber
  })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        {JSON.stringify(this.state)}
        <EnterNumber decreaseNumber = {this.decreaseNumber} increaseNumber ={this.increaseNumber}  />
      </div>
    );
  }
}

export default App;
