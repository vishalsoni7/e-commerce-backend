const express = require("express");
const app = express();
const cors = require("cors");

const initializeDatabase = require("./db");

const userRouter = require("./router/user.routes");
const categoryRouter = require("./router/category.routes");
const pruductRouter = require("./router/product.routes");

initializeDatabase();

app.use(cors());

// app.use(
//   cors({
//     origin: "*",
//   }),
// );

app.get("/", (req, res) => {
  res.send("e-commerce");
});

app.use("/", userRouter);
app.use("/", categoryRouter);
app.use("/", pruductRouter);

app.listen(3000, () => {
  console.log("server started");
});
