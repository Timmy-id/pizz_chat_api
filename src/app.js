const express = require('express');
const cors = require('cors');
const indexRouter = require('./routes/index');
const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/users.route');
const chatRoutes = require('./routes/chat.route');

const {
  notFound,
  errorHandler,
} = require('./middlewares/errorHandlers');

const app = express();

// MONGO_URI=mongodb+srv://timmy95:1331Axxa..@cluster0.qwyri.mongodb.net/pizzChatDb?retryWrites=true&w=majority


app.use(cors());

app.use(express.json());

app.use('/api', indexRouter);
// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/chats', chatRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
