import React, {Component} from 'react';
import '../App.css';
import Message from "./Message.js"
class MessageList extends Component{
    render(){
        return(
            this.props.messages.map(message => {
              return   <Message message={message}></Message>
            })
            
        );
    }
}
export default MessageList