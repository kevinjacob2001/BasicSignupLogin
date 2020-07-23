import React, { Component } from 'react';
import fire from './config/fire';

import './Login.css';

class Login extends Component{
    constructor(props){
        super(props)
        this.login=this.login.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.signup=this.signup.bind(this)

        this.state={
            email:"",
            password:""
        }
    }
    
login(e){
    e.preventDefault();
   fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
       console.log(u);
   }).catch((err)=>{
console.log(err);
   })
}

signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=> {
        // User is created and signed in, do whatever is needed
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    
        console.log('User did not sign up correctly');
        console.log(errorCode);
        console.log(errorMessage);
      });
}
 
handleChange(e){
this.setState({
    [e.target.name]:e.target.value
})
}

    render(){
        return(
<div className="form">
    <form>

    <div className="email">
    <input
    type="email"
    id="email"
    name="email"
    placeholder="Enter your Email ID"
    onChange={this.handleChange}
    value={this.state.email}
    />
    </div>

    <div className="password">   
        <input
        type="password"
        id="email"
        name="password"
        placeholder="Enter your password"
        onChange={this.handleChange}
        value={this.state.password}
        />
    </div>    
   
        <div >
        <button className="login" onClick={this.login}>Login</button>
        </div>
    
        <div>
         
        <button className="signup" onClick={this.signup}>Sign up</button>
        </div>
    
    </form>
       
</div>
        )
    }
}


export default Login;