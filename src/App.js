import React from 'react';
import './App.css';
import Lifecycle from './Component/Lifecycle';
import User1 from './Component/User1';
import User3 from './Component/User3';
import User5 from './Component/User5';

function App() {
  return (
    <div className="App">
      {/* <Lifecycle/> */}
      <User1 title="Age List"/>
      <User3 title="City List"/>
      <User5 title="Date Of Birth List"/>
    </div>
  );
}

export default App;
