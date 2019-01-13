import React, {Component} from 'react';
import '../App.css';

const Toolbar = (props) => {
    
    return(
        
      
      
      
      
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">2</span>
            unread messages
          </p>
      
          <a className="btn btn-default">
            <i className={true ? "fa fa-check-square-o" : "fa fa-minus-square-o"}></i>
          </a>
      

          <button onClick= {props.allRead} className="btn btn-default">Mark As Read</button>
      
          <button onClick= {props.allUnread} className="btn btn-default">Mark As Unread</button>
      
          <select className="form-control label-select" onChange={(event)=>props.applyLabel(event.target.value)}>
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>
      
          <select className="form-control label-select">
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