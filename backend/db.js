import mongoose from "mongoose";
const mongooseURI = "mongodb://localhost:27017/betterNotesDB";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongooseURI);
    console.log("Successfully connected to MongoDb");
  } catch (e) {
    console.log("Mongo DB connection error: ", e);
  }
};

export default connectToMongo;
