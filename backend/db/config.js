const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/notes"

const connectToMongo = async () => {
    mongoose.connect(mongoURI, await console.log("Connected to mongodb successfully."));
}

module.exports = connectToMongo;