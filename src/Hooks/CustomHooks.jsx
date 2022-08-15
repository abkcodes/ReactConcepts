import React from 'react';
import useForm from '../util/useForm';


function CustomHooks() {
    const {values,handleSubmit,handleChange}=useForm();
    return (
        <div>
             <form onSubmit={handleSubmit}>
              username  <input  type="text" name='username' value={values.username} onChange={handleChange}/>
              <br/>
              password <input type="text" name='password' value={values.password} onChange={handleChange}/>

            <br />
            <input type="submit"  value="submit"></input>
            </form>
            
        </div>
    );
}

export default CustomHooks;