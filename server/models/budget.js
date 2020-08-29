const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const budgetSchema = new Schema(
    {
    name: {
        type: String,
        trim: true,
        required: "Enter the name of the expense or deposit"
    },
    value: {
        type: Number,
        required: "Enter the total"
    },
    date: {
        type: Date,
        default: Date.now
    }
}
);

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;