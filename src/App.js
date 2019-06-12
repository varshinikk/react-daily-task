import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from'react-router-dom';
import Signup from './Task1/Signup';
import Lifecycle from './Task2/Lifecycle';
import User1 from './Task2/User1';
import Arithmetic from './Task3/Arithmetic';

function App() {
  return (<Router>
    <switch>
    <Route exact path = "/" component = {Signup}></Route>
    <Route exact path = "/Lifecycle" component = {Lifecycle}></Route>
    <Route exact path = "/User1" component = {User1}></Route>
    <Route exact path = "/Arithmetic" component = {Arithmetic}></Route>
    </switch>
  </Router>
  )
}

export default App;