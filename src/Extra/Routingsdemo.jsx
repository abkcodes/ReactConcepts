import React from 'react';
import {BrowserRouter as Router ,Link} from 'react-router-dom';

function Routingsdemo() {
    return (
        <div>
            <Link to="/t">
            <button> Tutorials related to states and props</button>
            </Link>
        </div>
    );
}

export default Routingsdemo;