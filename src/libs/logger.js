/**
 * @typedef {object} Logger - options for logger
 * @property {Function} debug log debug info
 * @property {Function} info log normal info
 * @property {Function} warn log warning info
 * @property {Function} error log error info
 * @property {Function} fatal log fatal info
 */

const logger = {
  debug: console.log,
  info: console.log,
  warn: console.warn,
  error: console.error,
  fatal: console.error
}

const LOGGER_KEYS = ['debug', 'info', 'warn', 'error', 'fatal']

/**
 * should be called before any other process, otherwise it might not work
 *
 * @param {Logger} opts
 */
module.exports.setLogger = function(opts) {
  Object.keys(opts)
    .filter(k => LOGGER_KEYS.includes(k))
    .forEach(key => {
      logger[key] = opts[key]
    })
  return logger
}

module.exports.logger = logger
