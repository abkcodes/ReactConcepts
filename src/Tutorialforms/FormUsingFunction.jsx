
import { useState,React } from 'react';

function FormUsingFunction() {
    let [username,setUsername]=useState('');
    let [password,setPassword]=useState('');
    const handleSubmit=(event)=>
    {
        event.preventDefault();
        alert(username,password)
        console.log(username);
        setUsername('');
        setPassword('');
    }

   

  
    return (
        <div>
          <form onSubmit={handleSubmit}>
              username  <input  type='text' name='username' value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
              <br/>
              password <input type='password' name='password' value={password} onChange={(event)=>{setPassword(event.target.value)}} />

            <br />
            <input type='submit' value='Submit'   ></input>
  </form>  
        </div>
    );
}

export default FormUsingFunction;