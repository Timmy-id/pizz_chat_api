const express = require('express');

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});

module.exports = indexRouter;
