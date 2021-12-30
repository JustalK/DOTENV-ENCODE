import * as winston from 'winston';
import colors from 'colors/safe';

const customLevels = {
  levels: {
    trace: 5,
    debug: 4,
    info: 3,
    warn: 2,
    error: 1,
    fatal: 0
  },
  colors: {
    trace: 'white',
    debug: 'green',
    info: 'green',
    warn: 'yellow',
    error: 'red',
    fatal: 'red'
  }
};

const formatter = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.splat(),
  winston.format.printf((info) => {
    const { level, message } = info;
    return `${level} ${colors.cyan(message)}`;
  })
);

export const transport = new winston.transports.Console({
  // format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
  format: formatter
});

export const logger = winston.createLogger({
  levels: customLevels.levels,
  transports: [transport]
});
winston.addColors(customLevels.colors);
