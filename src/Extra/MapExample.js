import React from 'react';

function MapExample() {
let names=['test1','test2','test3'];
    return (
        <div>
            <select>
                {
                    names.map(x=>{
                        return <option value={x}>{x}</option>
                    })
                }
            </select>
            
        </div>
    );
}

export default MapExample;