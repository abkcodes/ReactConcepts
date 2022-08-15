import React, { useState } from 'react';

function StateInFunctionComponent() {
    let [count,setCount]=useState(0);
    return (
        <div>
<h1>{count}</h1>
           <button onClick={()=>setCount(count+1)}>With functioncomponent</button> 
        </div>
    );
}

export default StateInFunctionComponent;