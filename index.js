const express = require("express");
const app = express();
const cors = require("cors");

const initializeDatabase = require("./db");

const userRouter = require("./router/user.routes");

app.use(express.json());

initializeDatabase();

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("e-commerce");
});

app.use("/", userRouter);

// app.use("/destinations", destinationRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "something went wrong" });
});

app.listen(3000, () => {
  console.log("server started");
});
