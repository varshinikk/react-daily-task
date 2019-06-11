import React, {Component} from 'react';
import User2 from './User2';

class User1 extends Component{
    render(){
        return(<div>
            <h1>{this.props.title}</h1>
            <User2 age="20">Ram</User2>
            <User2 age="30">Sham</User2>
            <User2 age="40">Jhon</User2>
            <User2 age="50">Mark</User2>
        </div>);
    }
}
export default User1;