import React from 'react';
import {useFormik} from 'formik'
function Formik1() {
    const formik=useFormik({
initialValues:{
    name:'',
    password:''
},
onSubmit:(values)=>{
    console.log(values);
},
validate:(values)=>
{
    let errors={};
    if(!values.name){
        errors.name="name is required";
    }
    if(!values.password){
        errors.password="password is required";
    }
    return errors;
}
    })
    return (
        <form onSubmit={formik.handleSubmit}>
        username  <input  type='text' name='name'  onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.name ?<div>{formik.errors.name}</div>:null}
        <br/>
        password <input type='password' name='password'   onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.password ?<div>{formik.errors.password}</div>:null}
      <br />
      <input type='submit' value='Submit'   ></input>
</form>  
    );
}

export default Formik1;