import React, { useContext, useEffect } from "react"
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";
import { useFirebaseAuth } from "use-firebase-auth"

const TransactionList = ()=> {
    const { transactions, getTransactionsByUser } = useContext(GlobalContext);
    const { user } = useFirebaseAuth()
    console.log (user)
    useEffect(() => {
    user && getTransactionsByUser(user.uid);
    }, []);

    return (
        <>
        <h4>History</h4>
        <ul className="list">
            {transactions.map(transaction => (<Transaction key={transaction.id} transaction= {transaction} />))}
        </ul> 
        </>
    )
}

export default TransactionList