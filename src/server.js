const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db");
const log = require("./utils/logger");
const authRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/users.route");
const chatRoutes = require("./routes/chat.route");

const dotenv = require("dotenv");
const { notFound, errorHandler } = require("./middlewares/errorHandlers");

const app = express();
dotenv.config();

// MONGO_URI=mongodb+srv://timmy95:1331Axxa..@cluster0.qwyri.mongodb.net/pizzChatDb?retryWrites=true&w=majority

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chats", chatRoutes);

app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(5000, () => {
  log.info(`App listening at port ${PORT}`);

  connectDb();
});
