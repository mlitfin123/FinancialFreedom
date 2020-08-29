import React from "react"
import Balance  from "../component/Balance"
import IncomeExpenses  from "../component/IncomeExpenses"



function BudGet() {
  return(
      <>
      <h2>BudGet</h2>
      <div className="container">
          <Balance />
          <IncomeExpenses />
      </div>
      </>
    )
}
    
export default BudGet


 
