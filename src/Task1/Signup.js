import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div className="move">
        <h1>Sign Up</h1>
      <form>
          <b className="name">Name</b><br></br>
          <input id="ip1" type="text" name="name"></input><br></br>
          <b className="name">Email</b><br></br>
          <input id="ip2" type="text" name="email"></input><br></br>
          <b className="name1">Password</b><br></br>
          <input id="ip3" type="text" name="password"></input><br></br>
          <b className="name2">Confirmtion</b><br></br>
          <input id="ip4" type="text" name="password"></input><br></br>
          <input id="ip5" type="button" name="button" value="Create My Account"></input>
      </form>
    </div>
  );
}

export default Signup;
