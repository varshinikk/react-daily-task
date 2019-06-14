import React from 'react'

const Contacts1 = ({display}) => {
  return (
    <div>
      <center><h1>Contact List</h1></center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{display.userId}</h5>
            <h5 className="card-title">{display.id}</h5>
            <h6 className="card-subtitle mb-2 text=muted">{display.title}</h6>
            <p className="card-text">{display.body}</p>
          </div>
        </div>
    </div>
  )
};
export default Contacts1;