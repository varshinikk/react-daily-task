import React, {Component} from 'react';
import Contacts from './Contacts';

class App1 extends Component{
    render(){
        return(
            <Contacts display = {this.state.contacts} />
        );
    }

    state ={
        contacts:""
    };

    componentDidMount(){
        console.log("After componentDidMount");
        fetch('https://api.github.com/users/KrunalLathiya')
        .then(res => res.json())
        .then((data) =>{
            this.setState({contacts:data})
        })
        .catch(console.log)
    }
}
export default App1
