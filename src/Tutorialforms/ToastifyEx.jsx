import React from 'react';

import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToastifyEx() {

    return (
        <div>
           <button onClick={()=>toast('Welcome')}>Toast</button> 
           <ToastContainer />
        </div>
    );
}

export default ToastifyEx;