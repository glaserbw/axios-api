import React, { Component } from 'react';
import './App.css';
import PersonList from './PersonList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>IQVIA users with Axios</div>
        </header>
        <PersonList />
      </div>
    );
  }
}

export default App;
