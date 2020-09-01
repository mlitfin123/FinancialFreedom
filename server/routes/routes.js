const router = require("express").Router();
let Transaction = require("../models/budget.js");

router.get("/", (req, res) => {
    Transaction.find()
        .then(transaction => res.json(transaction))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post("/api/BudGet", (req, res) => {
    const transaction = req.body.text;
    const value = req.body.value;
    const date = Date.parse(req.body.date);

    const newTransaction = new Transaction({
        transaction,
        value,
        date
    });

    newTransaction.save()
    .then(() => {
        res.json("Transaction Added");
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/:id", (req, res) => {
    Transaction.findById(req.params.id)
        .then(transaction => res.json(transaction))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Transaction.findByIdAndDelete(req.params.id)
        .then(() => res.json('Transaction deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;