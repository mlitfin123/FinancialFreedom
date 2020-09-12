import React from 'react';
import { Link } from 'react-router-dom';

function Dash () {

    return (
        <div>
            <Link to="/Dashboard"><button className="btn" >Back to Dashboard</button></Link>
        </div>
    )
}
export default Dash