import React, { useState } from 'react';
import Employee from './Employee';
export const employeeContext=React.createContext();
function UseContextDemo(props) {
    const[employee,setEmployee]=useState({name:'Abhash',password:'abc'})
    return (
       
        <employeeContext.Provider value={employee}>

        <Employee></Employee>
        </employeeContext.Provider>
          
  
    );
}

export default UseContextDemo;