const logger = require("pino");
const dayjs = require("dayjs");

const level = process.env.LOG_LEVEL || "info";

const log = logger({
  transport: {
    target: "pino-pretty",
  },
  level,
  base: {
    pid: false,
  },
  timestamp: () => `,"time": "${dayjs().format()}"`,
});

module.exports = log;
