const winston = require("winston");

// const customColors = {
//     silly: 'magenta',
//     debug: 'blue',
//     verbose: 'cyan',
//     info: 'green',
//     warn: 'yellow',
//     error: 'red',
//     fatal: 'bold red'
// };

//winston.addColors(customColors);

const logger = winston.createLogger({
  level: "silly",
  format: winston.format.combine(
    winston.format.colorize(), //{ all: true, colors: customColors }
    winston.format.timestamp({ format: "YY:MM:DD HH:mm:ss" }), // Add a timestamp to log messages
    winston.format.prettyPrint(),
    winston.format.printf(({ level, message, timestamp }) => {
      return `${timestamp}: ${level}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    //new winston.transports.File({filename:'combined.log'})
  ],
});

module.exports = logger;
