import React, { Component } from 'react';
import fire from './config/fire';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      user:{}
    }
  }

  componentDidMount(){
    this.authListener();
  }

authListener(){
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
      <div>
        Hello
      </div>
    )
  }
}

export default App;