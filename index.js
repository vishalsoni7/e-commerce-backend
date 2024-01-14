const express = require("express");
const app = express();
const cors = require("cors");

const initializeDatabase = require("./db");
const userRouter = require("./router/user.routes");

initializeDatabase();

const allowedOrigins = ["http://localhost:3000"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "DELETE", "PUT"],
  }),
);

app.options("/login", cors());
app.options("/register", cors());

app.get("/", (req, res) => {
  res.send("e-commerce");
});

app.use("/", userRouter);

app.listen(3000, () => {
  console.log("server started");
});
