import React from "react"
import "./DashBoard.css"
import InvestmentList  from "../component/InvestmentList";
import Logout from "../component/Logout";

function DashBoard() {
    return(

    <div className="DashBoard">
        
        <InvestmentList />
        <Logout />

    </div>)
}
export default DashBoard