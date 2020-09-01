const express = require("express");
const morgan = require("morgan");
const path = require("path");
const compression = require("compression");
const routes = require("./routes/routes.js");
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3002;

const app = express();

app.use(morgan("dev"));

app.use(compression());
app.use(cors());
app.use(express.json());

// const MONGODB_URI = MONGODB_URI;
const MONGO_LOCAL_URL = "mongodb://localhost/budget";

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
    
} else {
    // local mongo url
    mongoose.connect(MONGO_LOCAL_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
    });
    console.log("MongoDB database connection established successfully");
}

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});