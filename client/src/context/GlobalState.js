import React, { createContext, useReducer} from "react";
import AppReducer from "./AppReducer";
import axios from 'axios';

//Initial state
const initialState ={
    transactions: [
        {}
    ]
}
// Create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function getTransactions() {
        try {
            const res = await axios.get('/api/BudGet');
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function addTransaction(transaction) {
        console.log(transaction)
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

    async function deleteTransaction(id) {
        await axios.delete(`/api/BudGet/${id}`);
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        getTransactions,
        addTransaction,
        deleteTransaction
    }}> 
        { children } 
    </GlobalContext.Provider>);

}