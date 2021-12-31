import winston from 'winston';
import colors from 'colors/safe';

const formatter = winston.format.combine(
  winston.format.colorize(),
  winston.format.splat(),
  winston.format.printf((info) => {
    const { level, message, color } = info;
    if (color === 'cyan') return colors.cyan(message);
    if (color === 'green') return colors.green(message);
    if (color === 'red') return colors.red(message);
    return `${level}: ${colors.cyan(message)}`;
  }),
);

export const transport = new winston.transports.Console({
  format: formatter,
});

export const logger = winston.createLogger({
  transports: [transport],
});
