const express = require("express");
const connectDb = require("./config/db");
const log = require("./utils/logger");
const authRoutes = require("./routes/auth.route");

const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = process.env.PORT;

const data = [
  {
    name: "Oluwatimilehin Idowu",
    message: "Hello, how are you",
    id: "621ef4545",
  },
  {
    name: "John Doe",
    message: "Hi, I'm good",
    id: "621eerfgt",
  },
  {
    name: "Jane Smith",
    message: "I'm eating at the moment",
    id: "621ertfcv",
  },
];

app.get("/", (req, res) => {
  res.send("API is working");
});

app.get("/api/chats", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send(data);
});

app.listen(5000, () => {
  log.info(`App listening at port ${PORT}`);

  connectDb();
});
