import React, {Component} from 'react';
import '../App.css';


class Message extends Component {
    render(){
        return(
            <div className={this.props.message.read ?"row message read":"row message unread"} onClick={() => this.props.readMessage(this.props.message.id)}>
            <div class="col-xs-1">
              <div class="row">
                <div class="col-xs-2">
                  <input type="checkbox" />
                </div>
                <div class="col-xs-2">
                  <i class="star fa fa-star-o"></i>
                </div>
              </div>
            </div>
            <div class="col-xs-11">
              <a href="#">
               {this.props.message.subject}
              </a>
            </div>
            </div>
        )
     } 
}
export default Message