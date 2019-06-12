import React from 'react';
import './Signin.css';

function Signin() {
  return (
    <div className="left">
      <div className="header">
        <p className="text">SIGN IN</p>   
      <form>
          <input id="ip7" type="text" name="email" placeholder="Email"></input><br></br>
          <input id="ip8" type="text" name="password" placeholder="Password"></input><br></br>
          <input id="ip6" type="button" name="button" value="Login"></input>
      </form><br></br>
    <a className="a1" href="">forget your password?</a>
    </div>
    <div>
        <p>Don't have an account?<a className="a1" href="">Signup</a></p>
    </div>
    </div>
  );
}

export default Signin;