import React, {Component} from 'react';
import '../App.css';

const selectedIconDeterminer = (messages) => {
  let numOfSelected = messages.reduce((a,e)=>{
    e.selected?a++:a+=0
    return a
  },0)
  if(numOfSelected === messages.length){
    return "fa fa-check-square-o"
  }else if(numOfSelected === 0){
    return "fa fa-square-o"
  }else{
    return "fa fa-minus-square-o"
  }
}
const messageNumber = (messages) => {
  return messages.reduce((acc, message)=> {
    message.read ?  acc+=0 : acc++
    return acc
  },0)
}
const Toolbar = (props) => {
  const numberUnread = messageNumber(props.messages)
  const check = selectedIconDeterminer(props.messages)
    return(
        
      
      
      
      
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{numberUnread}</span>
            unread {numberUnread === 1?"message":"messages"}
          </p>
      
          <a className="btn btn-default" onClick ={()=>check === "fa fa-check-square-o"? props.toggleAllDeselect():props.toggleAllSelected()}>
            <i className={check}></i>
          </a>
      

          <button onClick= {props.allRead} className="btn btn-default">Mark As Read</button>
      
          <button onClick= {props.allUnread} className="btn btn-default">Mark As Unread</button>
      
          <select className="form-control label-select" onChange={(event)=>{props.applyLabel(event.target.value); event.target.selectedIndex=0}}>
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>
      
          <select className="form-control label-select" onChange={(event)=>{props.removeLabel(event.target.value); event.target.selectedIndex=0}}>
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>
      
          <button className="btn btn-default">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>

    )
    
}

export default Toolbar