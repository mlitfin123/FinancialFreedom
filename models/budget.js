const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const budgetSchema = new Schema(
    {
    _id: {
        type: Number
    },
    name: {
        type: String,
        trim: true,
        required: [true, "Enter a name"]
    },
    value: {
        type: Number,
        required: [true, "Enter a value"]
    },
    date: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: String,
        trim: true,
        required: [true, "Must be logIn to add transaction"]
    },
    
}
);

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;