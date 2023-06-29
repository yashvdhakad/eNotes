const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/eNotes?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1"

const connectToMongo = async () => {
    mongoose.connect(mongoURI, await console.log("Connected to mongodb successfully."));
}

module.exports = connectToMongo;