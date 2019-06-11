import React, {Component} from 'react';
import User6 from './User6';

class User5 extends Component{
    render(){
        return(<div>
            <h1>{this.props.title}</h1>
            <User6 DOB="2-7-1993">Ram</User6>
            <User6 DOB="11-4-2000">Sham</User6>
            <User6 DOB="7-1-1998">Jhon</User6>
            <User6 DOB="28-9-2006">Mark</User6>
        </div>);
    }
}
export default User5;