const mongoose = require("mongoose");
const mongooseURI = "mongodb://localhost:27017/";

const connectToMongo = () => {
  mongoose
    .connect(mongooseURI)
    .then(() => console.log("Connect to Mongo successfullyt!"))
    .catch((e) => console.log(e.error));
};

module.exports = connectToMongo;
