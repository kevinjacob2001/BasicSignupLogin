import React , { Component } from "react";
import fire from "./config/fire";
import { functions } from "firebase";

class Home extends Component{
constructor(props)
{
    super(props)
    this.state={
        
    }
}




logout(){
    fire.auth().signOut().then(function(){
        console.log("Signout successful")
    }).catch(function(error){
        console.log("Error while signing out!")
    })
}
render()
{
    return(
        <div>
           <h1>You are successfully logged in !!!</h1>
            <button onClick={this.logout}>Logout</button>
        </div>
    )
}
}
export default Home;