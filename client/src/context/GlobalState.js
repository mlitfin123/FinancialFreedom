import React, { createContext, useReducer} from "react";
import AppReducer from "./AppReducer";
import axios from 'axios';

//Initial state
const initialState ={
    transactions: [
        {id: 1, text: "Flower", amount: -20 },
        {id: 1, text: "Salary", amount: 300 },
        {id: 1, text: "Book", amount: -10 },
        {id: 1, text: "Camera", amount: 150 }
    ]
}
// Create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Action
    async function deleteTransaction(id) {
        await axios.delete(`/api/BudGet/${id}`);
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    async function addTransaction(transaction) {
        await axios.post('/api/BudGet', transaction);
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}> 
        { children } 
    </GlobalContext.Provider>);

}