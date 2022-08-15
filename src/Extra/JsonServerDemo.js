import React, { useState } from 'react';
import JsonServerApi from '../Api/JsonServerApi';

function JsonServerDemo(props) {
    const[user,setUser]=useState();
    const [password,username]=user;
    const handleChange=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }
    const handleSubmit=(event)=>
    {
      JsonServerApi.saveUser(user)  
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
              username  <input  type='text' name='username' value={username} onChange={(event)=>{handleChange(event)}}/>
              <br/>
              password <input type='password' name='password' value={password} onChange={(event)=>{handleChange(event)}} />

            <br />
            <input type='submit' value='Submit'   ></input>
  </form>       
        </div>
    );
}

export default JsonServerDemo;