import React , { Component } from "react";
import fire from "./config/fire";

import './Home.css';

class Home extends Component{
constructor(props)
{
    super(props)
    this.state={
        
    }
}




logout(){
    fire.auth().signOut().then(function(){
        console.log("Sign out was successful")
    }).catch(function(error){
        console.log("Error while signing out!")
    })
}


render()
{

    return(
        <div className="main">
           <h1 style={{color:"white"}}>You are successfully logged in !!!</h1>
            <button className="btn-style" onClick={this.logout}>Logout</button>
        </div>
    )
}
}
export default Home;