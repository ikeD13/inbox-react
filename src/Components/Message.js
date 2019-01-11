import React, {Component} from 'react';
import '../App.css';


class Message extends Component {
  
    render(){
      const readStatus = this.props.message.read ? 'row message' : 'row message unread'
      const selectStatus = this.props.message.selected ? 'selected' : ''
        return(
            <div className= {`${readStatus} ${selectStatus}`}>
            <div class="col-xs-1">
              <div class="row">
                <div class="col-xs-2">
                  <input checked = {selectStatus} type="checkbox" onChange={ () =>this.props.messageSelect(this.props.message.id)}/>
                </div>
                <div class="col-xs-2">
                  <i class="star fa fa-star-o"></i>
                </div>
              </div>
            </div>
            <div className="col-xs-11" onClick={()=>this.props.readMessage(this.props.message.id)}>
              <a href="#">
               {this.props.message.subject}
              </a>
            </div>
            </div>
        )
     } 
}
export default Message