import React from "react"
import InvestmentList  from "../component/InvestmentList";
import Logout from "../component/Logout";
import Dash from "../component/Backtodash"
import SearchStocks from "../component/StockSearch";

function DashBoard() {
    return(

    <div className="DashBoard">
        
        <SearchStocks />
        <InvestmentList />
        <Dash />
        <Logout />

    </div>)
}
export default DashBoard