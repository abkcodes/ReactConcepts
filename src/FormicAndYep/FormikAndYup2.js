import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as yup from 'yup'
import {toast,ToastContainer} from 'react-toastify'
function FormikAndYup2() {
 const   initialValues={
        name:'',
        password:''
    }

  const  validationSchema=yup.object({
        name:yup.string().max(6,"Name should not exceed 6 character").required("Name field is required"),
        // email:yup.string().email("Invalid Email").required("Name field is required")
        password:yup.string().max(9,"Invalid password").required("password field is required"),
        cnfpassword:yup.string().oneOf([yup.ref('password')],'password must match').required("confirm password is required")
  })
    
       



 const onSubmit=(values,onSubmitProps)=>{
    toast.success('Signup Success',{position:"top-center",autoclose:2000});
   
        console.log(values);
         onSubmitProps.resetForm();
    }
  
    return (
        <Formik initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>


    
        <Form >
        username  <Field  type='text' name='name' />
        <ErrorMessage name='name' component='div'></ErrorMessage>
        <br/>
        password <Field type='password' name='password'  />
        <ErrorMessage name='password' component='div'></ErrorMessage>
<br/>
         Confirm password <Field type='password' name='cnfpassword'  />
        <ErrorMessage name='cnfpassword' component='div'></ErrorMessage>

      <br />
      <button type='submit' value='Submit'   >Submit</button>
      <ToastContainer/>
</Form>  
</Formik>
    );
}

export default FormikAndYup2;