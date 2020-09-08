import React from "react";
import Balance  from "../component/Balance";
import IncomeExpenses  from "../component/IncomeExpenses";
import TransactionList  from "../component/TransactionList";
import AddTransaction  from "../component/AddTransaction";
import Logout from "../component/Logout";
import {GlobalProvider} from "../context/GlobalState";

import "./BudGet.css"

function BudGet() {
  return(
    <div className="container landingPageContainer">
    <div className="introImage center"></div>
      <GlobalProvider>
      <h2>BudGet</h2>
      <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
          <Logout />
      </div>
      </GlobalProvider>
    </div>)
}
    
export default BudGet