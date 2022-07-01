const dotenv = require('dotenv');
const app = require('./app');
const log = require('./utils/logger');
const connectDb = require('./config/db');

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  log.info(`App listening at port ${PORT}`);

  connectDb();
});
