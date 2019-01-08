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
  readMessage = (id) =>{
    console.log("readMessage", id)
    const updatedMessages = this.state.messages.map( message => {
      if (message.id === id) {
        message.read = !message.read;
      }
      return message
    } )
    this.setState({
      messages: updatedMessages
    })
  }
  render() {
    return (
      <div className="App">
        <Toolbar></Toolbar>
        <MessageList messages={this.state.messages} readMessage={this.readMessage}></MessageList>
      </div>
    );
  }
}

export default App;
