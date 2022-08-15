import React, { useState } from 'react';

function SpreadOperator(props) {
    const[car,setCar]=useState({
        brand:'Ford',
        model:'mustang',
        year:'1964',
        color:'Green'
    })
    const updateColor=()=>{
setCar(previousState=>{
    return{...previousState,color:'Blue'}
})
    }
    return (
        <div>
         <h1>{car.brand}</h1>
         <h1>{car.model}</h1>
         <h1>{car.year}</h1>
         <h1>{car.color}</h1>   
         <button onClick={updateColor}>Blue</button>
        </div>
    );
}

export default SpreadOperator;