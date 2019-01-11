import React, { Component } from 'react';
import './App.css';
import Toolbar from './Components/Toolbar.js'
import MessageList from './Components/MessageList'
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      messages:[]
    }
  }

  async componentDidMount(){
    let response = await fetch('http://localhost:8082/api/messages')
    let myJson = await response.json()
    this.setState({
      messages: myJson
    });
  }
  allRead = () => {
    console.log("yeeeeee")
    const selMessages = this.state.messages.map( message => {
      if ( message.selected === true){
        message.read=true
      }
      return message
    })
    this.setState({messages : selMessages})
  }

  allUnread = () => {
    const selMessages = this.state.messages.map( message => {
      if (message.selected === true){
        message.read=false
      }
      return message 
    })
    this.setState({messages: selMessages})
  }
// markAsReadButtonClicked = () => {
//   console.log("markAsReadButtonClicked")
//  const selectedMessages =this.state.messages.filter(message => message.selected === true)
//  console.log("selectedMessages", selectedMessages)
//  selectedMessages.forEach(message =>this.messageSelect(message.id))
// }

// messageSelected= async (id) => {
//   console.log("messageSelected", id)
 
//   let message={
//     messageIds:[id],
//     command:"selected",
//     "selected":true
//   }
//  await fetch('http://localhost:8082/api/messages',{
//     method: "PATCH",
//     body: JSON.stringify(message),
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     }
//   })



  readMessage = async (id) =>{
    console.log("readMessage", id)
    let message={
      "messageIds":[id],
      "command":"read",
      "read":true
    }
  //  await fetch('http://localhost:8082/api/messages',{
  //     method: "PATCH",
  //     body: JSON.stringify(message),
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json",
  //     }
  //   })

    
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

  messageSelect = (selected) => {
    const selectMessages = this.state.messages.map( message => {
      if (message.id === selected) {
        
        message.selected = !message.selected;
      }
      return message
    } )
    this.setState({
      messages: selectMessages
    })
  }

  render() {
    return (
      <div className="App">
        <Toolbar allRead ={this.allRead} allUnread={this.allUnread} />
        <MessageList messages={this.state.messages} readMessage={this.readMessage} messageSelect={this.messageSelect}></MessageList>
      </div>
    );
  }
}

export default App;
