import React, {Component} from 'react';
import './Input.css';

class Input extends Component{
    constructor(props){
        super(props)
        this.state={
            name: "",
            text: ""
        }
        this.changeName=this.changeName.bind(this);
    }
    
    changeName(){
        this.setState({name:'Reactjs'});
    }
    changeFunction = (e) => {
        this.setState({text: e.target.value});
    }
      render(){
          return(
              <div className="div1">
                  <h1 className="head1">{this.state.name}</h1>
                  <input className="input1" type="text" name="JavaScript" value="JavaScript"></input><br></br>
                  <button className="btn" onClick={this.changeName}>Button</button> 
                  <h1 className="head2">{this.state.text}</h1>
                  <input className="input2" type='text' onChange={this.changeFunction}></input>
              </div>
            );
        }
     
}
export default Input;