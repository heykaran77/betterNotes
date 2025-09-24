import connectToMongo from "./db.js";
import express from "express";
import auth from "./routes/auth.js";
import notes from "./routes/notes.js";

const app = express();
app.use(express.json());
const port = 3000;
connectToMongo();

//Routes
app.use("/api/auth", auth);
app.use("/api/notes", notes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
