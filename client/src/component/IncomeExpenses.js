import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState";

function IncomeExpenses() {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.value);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc =+ item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc =+ item), 0) * -1
    ).toFixed(2);

    return(
        <div className="inc-exp-containeer">
            <div>
                <h5>Income</h5>
                <p className="money plus">{income}</p>
            </div>
            <div>
                <h5>Expense</h5>
                <p className="money minus">{expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses