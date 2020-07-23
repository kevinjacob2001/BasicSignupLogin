import React, { Component } from 'react';
import fire from './config/fire';

class Home extends Component{
    constructor(props){
        super(props)
   this.logout=this.logout.bind.this;
    }
 
logout(){
    fire.auth().signOut();
}

    render(){
        return(
            <div>
<h2>You are logged in!</h2>
<button onClick={this.logout}>Logout!</button>
            </div>
        );
    }
}

export default Home;