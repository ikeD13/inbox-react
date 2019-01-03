import React, { Component } from 'react';
import './App.css';
import Toolbar from './Components/Toolbar.js'
import MessageList from './Components/MessageList'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar></Toolbar>
        <MessageList></MessageList>
      </div>
    );
  }
}

export default App;
