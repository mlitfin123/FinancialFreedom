const express = require('express');
const router = express.Router();
const {getTransactionsByUser, getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactions');

router
    .route('/')
    .get(getTransactions)
    .post(addTransaction);

router
    .route('/:id')
    .delete(deleteTransaction)
    .get(getTransactionsByUser);


module.exports = router;