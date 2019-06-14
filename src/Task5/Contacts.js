import React from 'react'
import Restful2 from './Restful2';

const Contacts = ({display}) => {
  return (
    <div>
      <center><h1>Contact List</h1></center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{display.login}</h5>
            <h5 className="card-title">{display.id}</h5>
            <h6 className="card-subtitle mb-2 text=muted">{display.html_url}</h6>
            <p className="card-text">{display.followers}</p>
            <p className="card-text">{display.name}</p>
          </div>
        </div>
        <Restful2/>
    </div> 
  )
};
export default Contacts;