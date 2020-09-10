import React from 'react';
import { Redirect } from "react-router-dom";
import firebase from '../../node_modules/firebase'
import { Link } from 'react-router-dom';

function Logout () {

    const handleLogout = firebase.auth().signOut().then(function(){
        return <Redirect to="/Home" />
    })

    return (
        <div>
            <Link to="/"><button className="btn" onClick={ handleLogout }>Log Out</button></Link>
        </div>
    )
}
export default Logout