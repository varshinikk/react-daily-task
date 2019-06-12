import React, {Component} from 'react';
import User2 from './User2';
import User3 from './User3';
import User5 from './User5';

class User1 extends Component{
    render(){
        return(<div>
            <h1>Age List</h1>
            <User2 age="20">Ram</User2>
            <User2 age="30">Sham</User2>
            <User2 age="40">Jhon</User2>
            <User2 age="50">Mark</User2>
            <User3/>
            <User5/>
        </div>);
    }
}
export default User1;