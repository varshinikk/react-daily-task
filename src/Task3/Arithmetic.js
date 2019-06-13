import React, {Component} from 'react';
import './Arithmetic.css';

class Arithmetic extends Component{
    constructor(props){
        super(props)
        this.state={
            num1: 10,
            num2: 10,
            num3: 10
        }
        this.addAction=this.addAction.bind(this);
        this.subAction=this.subAction.bind(this);
        this.mulAction=this.mulAction.bind(this);
    }
    
    addAction(){
        this.setState({num1:this.state.num1+5});
    }
    subAction(){
        if(this.state.num2>4)
        {
            this.setState({num2:this.state.num2-5});
        }
    }
    mulAction(){
        this.setState({num3:this.state.num3*5});
    }
      render(){
          return(
              <div>
                  <div className="div1"><h1 className="heading1">{this.state.num1}</h1>
                  <button className="button1" onClick={this.addAction}>Addition</button></div>
                  <div className="div2"><h1 class="heading1">{this.state.num2}</h1>
                  <button className="button2" onClick={this.subAction}>Subtraction</button></div>
                  <div className="div3"><h1 class="heading1">{this.state.num3}</h1>
                  <button className="button3" onClick={this.mulAction}>Multiplication</button></div>
              </div>
          );
      }
}
export default Arithmetic;