import React from "react"
import InvestmentList  from "../component/InvestmentList";
import Logout from "../component/Logout";
import Dash from "../component/Backtodash"

function DashBoard() {
    return(

    <div className="DashBoard">
        
        <InvestmentList />
        <Dash />
        <Logout />

    </div>)
}
export default DashBoard