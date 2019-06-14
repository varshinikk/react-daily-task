import React, {Component} from 'react';
import Contacts1 from './Contacts1';

class App2 extends Component{
    render(){
        return(
            <Contacts1 display = {this.state.contacts} />
        );
    }

    state ={
        contacts:""
    };

    componentDidMount(){
        console.log("After componentDidMount");
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => res.json())
        .then((data) =>{
            this.setState({contacts:data})
        })
        .catch(console.log)
    }
}
export default App2
