import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState";
import {format } from 'date-fns'

export const Transaction = ({ transaction }) => {
    const {deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.value < 0 ? "-" : "+";
    console.log(transaction.date)
    return (
        <li className={transaction.value < 0 ? "minus" : "plus"}>
        {transaction.date && format(new Date(transaction.date),"MM-dd-yyyy")}   --   {transaction.name} <span className="transaction-amount">{sign}${Math.abs(transaction.value)}</span><button 
        onClick={() => deleteTransaction(transaction._id)} className="delete=btn"><i className="material-icons">delete</i></button>
    </li>
    )
}

export default Transaction