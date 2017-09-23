import React, { Component } from 'react';
import Header from 'components/Header';
import LoadBoard from 'components/LoadBoard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LoadBoard />
      </div>
    );
  }
}

export default App;
