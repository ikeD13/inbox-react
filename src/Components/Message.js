import React, {Component} from 'react';
import '../App.css';


const Message = (props) => {
       const readStatus = props.message.read ? 'row message' : 'row message unread'
        const selectStatus = props.message.selected ? 'selected' : ''
       let star = props.message.starred ? star = "star fa fa-star" : star = "star fa fa-star-o"
          return(
              <div className= {`${readStatus} ${selectStatus}`}>
              <div className="col-xs-1">
                <div className="row">
                  <div className="col-xs-2">
                    <input checked = {selectStatus} type="checkbox" onChange={ () =>props.messageSelect(props.message.id)}/>
                  </div>
                  <div className="col-xs-2" onClick={() =>props.toggleStar(props.message)}>
                    <i className={`${star}`}></i>
                  </div>
                </div>
              </div>
              <div className="col-xs-11" onClick={()=>props.readMessage(props.message.id)}>
                {props.message.labels.map((element,index)=><span key={index} className = "label label-warning">{element}</span>)}
                <a href="#">
                 {props.message.subject}
                </a>
              </div>
              </div>
          )
}






// class Message extends Component {
  
//     render(){
//       const readStatus = this.props.message.read ? 'row message' : 'row message unread'
//       const selectStatus = this.props.message.selected ? 'selected' : ''
//         return(
//             <div className= {`${readStatus} ${selectStatus}`}>
//             <div class="col-xs-1">
//               <div class="row">
//                 <div class="col-xs-2">
//                   <input checked = {selectStatus} type="checkbox" onChange={ () =>this.props.messageSelect(this.props.message.id)}/>
//                 </div>
//                 <div class="col-xs-2" onClick={() =>this.props.toggleStar(this.props.message)}>
//                   <i class="star fa fa-star-o"></i>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xs-11" onClick={()=>this.props.readMessage(this.props.message.id)}>
//               <a href="#">
//                {this.props.message.subject}
//               </a>
//             </div>
//             </div>
//         )
//      } 
// }
export default Message