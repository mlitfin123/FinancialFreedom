const Transaction = require('../models/budget');
const { Console } = require('console');

exports.getTransactions = async (req, res, next) => {
    try {
    const transactions = await Transaction.find();
console.log(transactions);
    return res.status(200).json({
        success: true,
        count: transactions.length,
        data: transactions
    });
} catch (err) {
    return res.status(500).json({
        success: false,
        error: 'Server Error'
    });
}
}
exports.getTransactionsByUser = async (req, res, next) => {
    console.log(req.params)
    try {
    const transactions = await Transaction.find({userId:req.params.id});
console.log(transactions);
    return res.status(200).json({
        success: true,
        count: transactions.length,
        data: transactions
    });
} catch (err) {
    return res.status(500).json({
        success: false,
        error: 'Server Error'
    });
}
}
exports.addTransaction = async (req, res, next) => {
    try {
    const { name, value } = req.body;

    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
        success: true,
        data: transaction
    }); 
} catch (err) {
    if(err.name === 'ValidationError') {
        const messages = Object.values(err.errors).map(val => val.message);
        console.log(err)

        return res.status(400).json({
        success: false,
        error: messages
    });
    } else {
        console.log(err)
        return res.status(500).json({
        success: false,
        error: 'Server Error'
    });
    }
}
}

exports.deleteTransaction = async (req, res, next) => {
    try {
    const transaction = await Transaction.findById(req.params.id);

    if(!transaction) {
        return res.status(404).json({
        success: false,
        error: 'No transaction found'
    });
    }

    await transaction.remove();

    return res.status(200).json({
        success: true,
        data: {}
    });
} catch (err) {
    console.log(err)
    return res.status(500).json({
        success: false,
        error: 'Server Error'
    });
    }
}