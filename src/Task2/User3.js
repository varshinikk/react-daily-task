import React, {Component} from 'react';
import User4 from './User4';

class User3 extends Component{
    render(){
        return(<div>
            <h1>City List</h1>
            <User4 city="Mysore">Ram</User4>
            <User4 city="Banglore">Sham</User4>
            <User4 city="Mandya">Jhon</User4>
            <User4 city="Manglore">Mark</User4>
        </div>);
    }
}
export default User3;