import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from'react-router-dom';
import Signup from './Task1/Signup';
import Signin from './Task1/Signin';
import Lifecycle from './Task2/Lifecycle';
import User1 from './Task2/User1';
import User3 from './Task2/User3';
import User5 from './Task2/User5';

function App() {
  return (<Router>
    <switch>
    <Route exact path = "/" component = {Signup}></Route>
    <Route exact path = "/Signin" component = {Signin}></Route>
    <Route exact path = "/Lifecycle" component = {Lifecycle}></Route>
    <Route exact path = "/User1" component = {User1}></Route>
    <Route exact path = "/User3" component = {User3}></Route>
    <Route exact path = "/User5" component = {User5}></Route>
    </switch>
  </Router>
  )
}

export default App;