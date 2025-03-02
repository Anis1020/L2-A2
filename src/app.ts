import express from "express";
import cors from "cors";
import { userRouter } from "./app/modules/user/user.router";

const app = express();

//parser
app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("hello from level 2");
});

export default app;
