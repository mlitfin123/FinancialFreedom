import React, {useState, useContext} from "react"
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
    const [name, setText] = useState ("");
    const [value, setAmount] = useState (0);
    const {addTransaction } = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();
    const newTransaction ={
        _id: Math.floor(Math.random() * 100000000),
        name,
        value: +value
    }
    addTransaction(newTransaction);
    }

    return (
        <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Transaction Name </label>
                <input type="text" value={name} onChange={(e) => setText(e.target.value)} placeholder="Enter text... " />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount< br />
                (negative - expense, positive - income)</label>
                <input type="number" value={value} onChange={(e) => setAmount(e.target.value)}placeholder="Enter amount..." />
            </div>
            <button className="btn">Add transaction</button>
        </form>
        </>
    )
}

export default AddTransaction