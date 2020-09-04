import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
    const {deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.value < 0 ? "-" : "+";

    return (
        <li className={transaction.value < 0 ? "minus" : "plus"}>
        {transaction.name} <span>{sign}${Math.abs(transaction.value)}</span><button 
        onClick={() => deleteTransaction(transaction._id)} class="delete=btn">x</button>
    </li>
    )
}

export default Transaction