import React, { Component } from 'react'
import ApiService from '../Api/ApiService';

export default class extends Component {
constructor(props) {
  super(props)

  this.state = {
     username:'Abhash',
     password:''

  }
}

 Validate=()=>{
   
    let nameError = "";
    let passwordError = "";
    if(!this.state.username){
        nameError="username is required";
    }
    if(!this.state.password){
        passwordError="Passwordis required";
    }
    if(nameError || passwordError){
        this.setState({nameError,passwordError});
        return false;
    }
    return true;
   
}


    saveForm=(event)=>{
        {
        event.preventDefault();
        if(this.validate){
            let loginData={username:this.state.username,password:this.state.password};
            alert(JSON.stringify(loginData));
        }
        let loginData={username:this.state.username,password:this.state.password};

     ApiService.saveUser(loginData);
    
     
    
    }
}
  render() {
    return (
      
 <form>
              username  <input  type='text' name='username' value={this.state.username} onChange={(event)=>this.setState({username:event.target.value})}/>
             <span >{this.state.nameError}</span>
              <br/>
              password <input type='text' name='password' value={this.state.password} onChange={(event)=>this.setState({password:event.target.value})}/>
              <span >{this.state.passwordError}</span>
            <br />
            <input type='submit' onClick={this.saveForm} value='Submit' ></input>
  </form>

     
    )
  }
}
