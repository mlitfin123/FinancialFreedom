import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState";
// import {moment} from "moment";

export const Transaction = ({ transaction }) => {
    const {deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.value < 0 ? "-" : "+";

    return (
        <li className={transaction.value < 0 ? "minus" : "plus"}>
        {/* <p className="grey-text">{moment(transaction.createAt.toDate()).calendar()}</p> */}
        {transaction.name} <span>{sign}${Math.abs(transaction.value)}</span><button 
        onClick={() => deleteTransaction(transaction._id)} className="delete=btn"><i className="material-icons">delete</i></button>
    </li>
    )
}

export default Transaction