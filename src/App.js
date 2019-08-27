import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ShoppingList from './components/Shopping.js'
import Nav from './components/Nav/Nav.js'
import EasyFrom from './components/EssayForm'
import Board from './components/Board'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <ShoppingList name="react">
          <EasyFrom />
        </ShoppingList>
        <Board />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          </a>
      </div>
    );
  }
}

export default App;
