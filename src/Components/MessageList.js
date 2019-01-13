import React, {Component} from 'react';
import '../App.css';
import Message from "./Message.js"

const MessageList = (props) =>{
    return (
        props.messages.map(message => {
            return <Message message={message} readMessage={props.readMessage} messageSelect={props.messageSelect} toggleStar={props.toggleStar}></Message>
        })
    )
}











// class MessageList extends Component{

//     render(){
//         return(
//             this.props.messages.map(message => {
//               return   <Message message={message} readMessage={this.props.readMessage} messageSelect={this.props.messageSelect} toggleStar={this.props.toggleStar}></Message>
//             })
            
//         );
//     }
// }
 export default MessageList