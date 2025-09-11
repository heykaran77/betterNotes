import mongoose from "mongoose";
const mongooseURI = "mongodb://localhost:27017/";

const connectToMongo = () => {
  mongoose
    .connect(mongooseURI)
    .then(() => console.log("Connect to Mongo successfully!"))
    .catch((e) => console.log(e));
};

export default connectToMongo;
