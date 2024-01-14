const express = require("express");
const app = express();
const cors = require("cors");

const initializeDatabase = require("./db");
const userRouter = require("./router/user.routes");

initializeDatabase();

const allowedOrigins = [
  "https://thinsil-e-commerce.netlify.app",
  "https://localhost:3000",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  }),
);

app.options("/login", cors());
app.options("/register", cors());

// app.use(
//   cors({
//     origin: "*",
//   }),
// );

app.get("/", (req, res) => {
  res.send("e-commerce");
});

app.use("/", userRouter);

app.listen(3000, () => {
  console.log("server started");
});
