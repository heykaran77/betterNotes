import connectToMongo from "./db.js";
import express from "express";
import auth from "./routes/auth.js";
import notes from "./routes/notes.js";
import cors from "cors";

const app = express();
app.use(express.json());
const port = 3000;
connectToMongo();

app.use(cors());

//Routes
app.use("/api/auth", auth);
app.use("/api/notes", notes);

app.get("/", (req, res) => {
  res.send("API is running...");
  console.log(`Better Notes Listening at port ${port}`);
});

app.listen(port, () => {
  console.log(`BetterNotes listening on port ${port}`);
});

export default app;
