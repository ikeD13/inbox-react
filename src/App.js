import React, { Component } from 'react';
import './App.css';
import Toolbar from './Components/Toolbar.js'
import MessageList from './Components/MessageList'
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      messages:[1,2,3]
    }
  }

  async componentDidMount(){
    let response = await fetch('http://localhost:8082/api/messages')
    let myJson = await response.json()
    this.setState({
      messages: myJson
    });
  }

  render() {
    return (
      <div className="App">
        <Toolbar></Toolbar>
        <MessageList messages={this.state.messages}></MessageList>
      </div>
    );
  }
}

export default App;
