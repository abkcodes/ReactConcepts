import { useState } from 'react';


function useForm() {
    const [values, setValues] = useState({ username:'abhash', password:'abk' });
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prevalues) => {
            return {
                ...prevalues, [name]: value   //appending previous value with new values here name is field nane and value is new value of this field and prevalues ihs the default values or previous values of the field
            }
        })
    }
    return {values, handleSubmit, handleChange}
}

export default useForm;