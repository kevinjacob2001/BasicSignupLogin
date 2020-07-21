import React, { Component } from 'react';

import './App.css';

import fire from './Firebase/Firebase';

class App extends Component{
  
state={
  user:{}
}

componentDidMount(){
  this.authListener();
}

authListener=()=>{
  fire.auth().onAuthStateChanged((user)=>{
    if(user)
    {
      this.setState({user})
    }
    else{
      this.setState({user:null})
    }
  })
}


  render(){
    return(
      <div className="App">
    {this.state.user!==null?(<Home/>):(<Login/>)}
      </div>
    )
  }
}

export default App;

