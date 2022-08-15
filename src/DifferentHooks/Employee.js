import React, { useContext } from 'react';
import { employeeContext } from './UseContextDemo';
function Employee(props) {
    let context=useContext(employeeContext);
    
    return (
        <div>
            EmployeeName:{context.name}
            EmployeePassword:{context.password}

        </div>
    );
}

export default Employee;