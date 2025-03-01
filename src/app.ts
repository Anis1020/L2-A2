import express from "express";
import cors from "cors";

const app = express();

//parser
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello from level 2");
});

export default app;
