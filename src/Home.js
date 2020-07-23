import React, { Component } from 'react';


class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:""
        }
    }
    
    render(){
        return(
            <div>
<h2>You are logged in!</h2>
<button>Logout!</button>
            </div>
        )
    }
}


export default Home;