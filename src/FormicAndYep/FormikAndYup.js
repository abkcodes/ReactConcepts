import React from 'react';
import {useFormik} from 'formik'
import * as yup from 'yup'
import {toast,ToastContainer} from 'react-toastify'
function FormikAndYup() {
 const   initialValues={
        name:'',
        password:''
    }

  const  validationSchema=yup.object({
        name:yup.string().max(6,"Name should not exceed 6 character").required("Name field is required"),
        // email:yup.string().email("Invalid Email").required("Name field is required")
        password:yup.string().max(9,"Invalid Email").required("password field is required")
  })
    
       



 const onSubmit=(values,onSubmitProps)=>{
    toast.success('Signup Success',{position:"top-center",autoclose:2000});
   
        console.log(values);
         onSubmitProps.resetForm();
    }
    const formik=useFormik({
initialValues,
validationSchema,
onSubmit
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
      <ToastContainer/>
</form>  
    );
}

export default FormikAndYup;