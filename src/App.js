import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from'react-router-dom';
import Signup from './Task1/Signup';
import Lifecycle from './Task2/Lifecycle';
import User1 from './Task2/User1';
import Arithmetic from './Task3/Arithmetic';
import Input from './Task4/Input';
import Restful1 from './Task5/Restful1';

function App() {
  return (<Router>
    <switch>
    <Route exact path = "/" component = {Signup}></Route>
    <Route exact path = "/Lifecycle" component = {Lifecycle}></Route>
    <Route exact path = "/User1" component = {User1}></Route>
    <Route exact path = "/Arithmetic" component = {Arithmetic}></Route>
    <Route exact path = "/Input" component = {Input}></Route>
    <Route exact path = "/Restful1" component = {Restful1}></Route>
    </switch>
  </Router>
  )
}

export default App;