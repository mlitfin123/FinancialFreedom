import React from 'react';
import { Redirect } from "react-router-dom";
import firebase from '../../node_modules/firebase'

function Logout () {

    const handleLogout = firebase.auth().signOut().then(function(){
        return <Redirect to="/Home" />
    })

    return (
        <div>
            <button className="btn" onClick={ handleLogout }>Log Out</button>
        </div>
    )
}
export default Logout