const mongoose = require("mongoose");
require('dotenv').config();
mongoose.Promise = global.Promise;

const MONGODB_URI = MONGODB_URI;
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
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
    });
}

const connection = mongoose.connection;
connection.on("error", (err) => {
    console.log(`There was an error connecting to the database: ${err}`);
});

connection.once("open", () => {
    console.log(
    `You have successfully connected to your database`
    );
});

module.exports = connection;