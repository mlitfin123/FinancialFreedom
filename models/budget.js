const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const budgetSchema = new Schema(
    {
    name: {
        type: String,
        trim: true,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}
);

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;