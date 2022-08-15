import React from 'react';
import ClassBasedProps from '../StatesAndProps/ClassBasedProps';
import ClassBasedState from '../StatesAndProps/ClassBasedState';
import ClassComponentStatesWithArrorFunction from '../StatesAndProps/ClassComponentStatesWithArrorFunction';
import FunctionalBasedprops from '../StatesAndProps/FunctionalBasedprops';
import StateInFunctionComponent from '../StatesAndProps/StateInFunctionComponent';
import MapExample from './MapExample';




function RouterExample() {
    return (
        <div>
          
            <div>
           <FunctionalBasedprops name="Abhash" />
      <ClassBasedProps  name="Kumar" />
      <ClassBasedState />
      <br/>
      <ClassComponentStatesWithArrorFunction />
      <StateInFunctionComponent />
      <br />
    <MapExample /> 
    </div>
   
        </div>
    );
}

export default RouterExample;