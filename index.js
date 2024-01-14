const express = require("express");
const app = express();
const cors = require("cors");

const initializeDatabase = require("./db");
const userRouter = require("./router/user.routes");

initializeDatabase();

app.use(
  cors({
    origin: "*",
  }),
);

app.get("/", (req, res) => {
  res.send("e-commerce");
});

app.use("/", userRouter);

app.listen(3000, () => {
  console.log("server started");
});
