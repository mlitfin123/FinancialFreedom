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

    async function deleteTransaction(id) {
        await axios.delete(`/api/BudGet/${id}`);
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    async function addTransaction(transaction) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/BudGet', transaction, config);
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
        }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}> 
        { children } 
    </GlobalContext.Provider>);

}