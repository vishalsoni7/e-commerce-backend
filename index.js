const express = require("express");
const app = express();
const cors = require("cors");

const initializeDatabase = require("./db");
const userRouter = require("./router/user.routes");

initializeDatabase();

const allowedOrigins = ['https://thinsil-e-commerce.netlify.app', 'https://localhost:3000']; 

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.get("/", (req, res) => {
  res.send("e-commerce");
});

app.use("/", userRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "something went wrong" });
});

app.listen(3000, () => {
  console.log("server started");
});
